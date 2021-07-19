import React from "react";

import { useSearchBar  } from "../providers/SearchProvider";

export default function searchResults() {
  const { municipalities } = useSearchBar().searchValues;
  console.log(municipalities)
  return (
    <div>
      <h1>Search Results</h1>
      
    </div>
  )
}

