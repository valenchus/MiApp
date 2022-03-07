import React from "react";
import { Button } from "@mui/material";

const Pagination = ({ onPrevious, onNext }) => {
  const handlePrevious = () => {
    onPrevious();
  };
  const handleNext = () => {
    onNext();
  };
  //nothing
  return (
    <nav>
      <ul>
        <li>
          <Button onClick={handlePrevious}>Previous</Button>
        </li>
        <li>
          <Button onClick={handleNext}>Next</Button>
        </li>
      </ul>
    </nav>
  );
};
