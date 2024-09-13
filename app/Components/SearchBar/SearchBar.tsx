"use client";

import { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const searchApi = async (e: any) => {
    try {
      const res = await fetch(`https://foodieplaces.vercel.app/api/search/${search}`, {
        method: "GET",
      });
      const data = await res.json();
      console.log(data);
      setData(data);
    } catch {
      console.error("Internal Server Error:", Error);
    }
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder="Search"
      />
      <button onClick={() => (search ? searchApi(event) : null)} type="submit">
        Search
      </button>
      {data.map((item: any, i: number) => {
        return (
          <div key={i}>
            <p>{item.name}</p>
            <p>{item.address}</p>
            <p>{item.rating}</p>
            <p>{item.open}</p>
          </div>
        );
      })}
    </div>
  );
};

export { SearchBar };
