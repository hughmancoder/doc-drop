import React from "react";
import Layout from "./layout";
import PopularButtons from "../components/PopularButtons";
import { Flex, SimpleGrid } from "@chakra-ui/react";
import MotionWrapper from "../components/MotionWrapper";
import ProfesionalProfile from "../components/ProfessionalProfile";

const mockProfiles = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    username: "dr_sarah",
    avatarUrl:
      "https://images.unsplash.com/photo-1584824488234-7033377ee008?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
    bio: "Board-certified cardiologist specializing in heart health and prevention.",
    tags: ["#cardiology", "#healthcare", "#heart"],
  },
  {
    id: 2,
    name: "Dr. Emily Lee",
    username: "dr_emily",
    avatarUrl:
      "https://images.unsplash.com/photo-1617176489163-1563cde67cf6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
    bio: "Pediatrician dedicated to children's health and well-being.",
    tags: ["#pediatrics", "#childrenshealth", "#care"],
  },
  {
    id: 3,
    name: "Dr. Michael Chen",
    username: "dr_michael",
    avatarUrl:
      "https://images.unsplash.com/photo-1614171857754-50f889c10b8e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
    bio: "Orthopedic surgeon specializing in joint and bone surgeries.",
    tags: ["#orthopedics", "#surgeon", "#bonesurgery"],
  },
];

export default function HomePage() {
  return (
    <Layout>
      <PopularButtons />
      <Flex marginTop={5} justifyContent="center" alignItems="center">
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={4}>
          {mockProfiles.map((profile, index) => (
            <MotionWrapper key={index} index={index}>
              <ProfesionalProfile
                name={profile.name}
                username={profile.username}
                avatarUrl={profile.avatarUrl}
                bio={profile.bio}
                tags={profile.tags}
              />
            </MotionWrapper>
          ))}
        </SimpleGrid>
      </Flex>
    </Layout>
  );
}
