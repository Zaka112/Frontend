import React, { useState } from "react";

import {
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useDispatch } from "react-redux";

import { productActions } from "../redux/slices/products";
import { SortingType } from "../types/types";

export default function SortProducts() {
  const [sorting, setSorting] = useState<SortingType>("reset");
  const dispatch = useDispatch();
  function handleChange(event: SelectChangeEvent) {
    setSorting(event.target.value as SortingType);
    dispatch(productActions.sorting(event.target.value as SortingType));
  }

  return (
    <Paper>
      <Box sx={{ minWidth: 200 }}>
        <FormControl sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="demo-simple-select-helper-label">Sort</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={sorting}
            label="Sort"
            onChange={handleChange}
          >
            <MenuItem value={"reset"}>
              <em>None</em>
            </MenuItem>
            <MenuItem value={"lowestPrice"}>Lowest price</MenuItem>
            <MenuItem value={"highestPrice"}>Highest price</MenuItem>
            <MenuItem value={"AZ"}>A-Z</MenuItem>
            <MenuItem value={"ZA"}>Z-A</MenuItem>
          </Select>
          <FormHelperText>Sort by</FormHelperText>
        </FormControl>
      </Box>
    </Paper>
  );
}
