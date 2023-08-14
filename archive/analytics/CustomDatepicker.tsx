import React from "react";
import { format } from "date-fns";
import { Button } from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import { AiOutlineCalendar } from "react-icons/ai";
import "react-datepicker/dist/react-datepicker.css";

interface CustomInputProps {
  value: string;
  onClick?: () => void;
}

const CustomInputComponent = ({ value, onClick }: CustomInputProps) => {
  return (
    <Button
      leftIcon={<AiOutlineCalendar />}
      variant="outline"
      onClick={onClick}
    >
      {value}
    </Button>
  );
};

interface CustomDatepickerProps {
  selectedDate: Date | null;
  setSelectedDate: (date: Date) => void;
}

export const CustomDatepicker = ({
  selectedDate,
  setSelectedDate,
}: CustomDatepickerProps) => {
  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const monthYearFormat = "MMMM yyyy";
  const monthYearString = selectedDate
    ? format(selectedDate, monthYearFormat)
    : "Select Month";

  return (
    <DatePicker
      selected={selectedDate}
      onChange={handleDateChange}
      showMonthYearPicker
      customInput={<CustomInputComponent value={monthYearString} />}
    />
  );
};
