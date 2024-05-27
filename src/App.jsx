import React from "react";
import PaginationExample from "./PaginationExample";

function App() {
  const data = Array.from({ length: 20 }, (_, i) => `Item ${i+1 }`);
  return (
    <div className="App">
      <h1>Pagination</h1>
      <PaginationExample data={data} itemsPerPage={5} />
    </div>
  );
}

export default App;
