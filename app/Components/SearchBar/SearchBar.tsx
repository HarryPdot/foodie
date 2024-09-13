"use client";

import { useState } from "react";

import styles from "./card.module.css";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [address, setAddress] = useState("");
  const [data, setData] = useState([]);
  const searchApi = async (e: any) => {
    const value =
      search && address
        ? `${search} food near ${address}`
        : search || `food near ${address}`;
    try {
      const url = new URL(
        `/api/search/${value}?test=test`,
        window.location.origin,
      );
      const res = await fetch(url.href, {
        method: "GET",
      });
      const data = await res.json();
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
      <input
        type="text"
        onChange={(e) => {
          setAddress(e.target.value);
        }}
        placeholder="Search"
      />
      <button
        onClick={() => (!search && !address ? null : searchApi(event))}
        type="submit"
      >
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
