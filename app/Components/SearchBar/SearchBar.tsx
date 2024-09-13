"use client";

import { useState } from "react";
import styles from './card.module.css'

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const searchApi = async (e: any) => {
    try {
      const url = new URL(`/api/search/${search}`, window.location.origin);
      const res = await fetch(url.href, {
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
          <div key={i} className={styles.card}>
            <p>name: {item.name}</p>
            <p>address: {item.address}</p>
            <p>rating: {item.rating}</p>
            <p>open now?:{item.open ? "true" : "false"}</p>
          </div>
        );
      })}
    </div>
  );
};

export { SearchBar };