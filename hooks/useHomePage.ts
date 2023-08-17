import { useState, useEffect } from "react";
import { Professional } from "../components/types/interfaces";

export const useProfileFiltering = (professionalProfiles: Professional[]) => {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filterLabels, setFilterLabels] = useState<string[]>([]);
  const [filteredProfiles, setFilteredProfiles] =
    useState<Professional[]>(professionalProfiles);
  const [favourites, setFavourites] = useState<number[]>([]);

  const onAddLabel = (label: string) => {
    setFilterLabels((prevLabels) => [...prevLabels, label]);
  };

  const onRemoveLabel = (label: string) => {
    setFilterLabels((prevLabels) => prevLabels.filter((l) => l !== label));
  };

  const handleSetFavourites = (id: number) => {
    setFavourites((prev) => [...prev, id]);
  };

  const handleRemoveFavourites = (id: number) => {
    setFavourites((prev) => prev.filter((favId) => favId !== id));
  };

  const handleLocationChange = (location: string) => {
    if (location === "All") {
      setFilteredProfiles(professionalProfiles);
      return;
    }
    setSelectedLocation(location);
  };

  const handleSearchTermChange = (term: string) => {
    setSearchTerm(term);
  };

  useEffect(() => {
    applyFilters();
  }, [selectedLocation, searchTerm, filterLabels, favourites]);

  const applyFilters = () => {
    let newFilteredProfiles = professionalProfiles;

    if (selectedLocation) {
      newFilteredProfiles = newFilteredProfiles.filter(
        (profile) => profile.location === selectedLocation
      );
    }

    if (filterLabels.find((label) => label === "Favourites")) {
      console.log("favourites", favourites);
      if (favourites.length > 0 && filterLabels.length > 0) {
        newFilteredProfiles = newFilteredProfiles.filter(
          (profile) =>
            favourites.includes(profile.id) ||
            filterLabels.includes(profile.field)
        );
      } else if (favourites.length > 0) {
        newFilteredProfiles = newFilteredProfiles.filter((profile) =>
          favourites.includes(profile.id)
        );
      }
    } else if (filterLabels.length > 0) {
      newFilteredProfiles = newFilteredProfiles.filter((profile) =>
        filterLabels.includes(profile.field)
      );
    }

    if (searchTerm === "") {
      console.log("searchTerm", searchTerm);
    }
    if (searchTerm) {
      newFilteredProfiles = newFilteredProfiles.filter(
        (profile) =>
          profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          profile.field.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredProfiles(newFilteredProfiles);
  };

  return {
    selectedLocation,
    searchTerm,
    filterLabels,
    filteredProfiles,
    favourites,
    onAddLabel,
    onRemoveLabel,
    handleSetFavourites,
    handleRemoveFavourites,
    handleLocationChange,
    handleSearchTermChange,
  };
};
