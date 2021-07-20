import React from "react";
import Map from "./Map"

import { useSearchBar  } from "../providers/SearchProvider";

export default function SearchResults() {
  const { municipalities } = useSearchBar().searchValues;

  return (
    <div>
      <h1>Search Results</h1>
      <Map data={municipalities}></Map>
    </div>
  )
}