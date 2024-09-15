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
        ? `${search} near ${address}`
        : search
    try {
      const url = !search && address ? new URL(
        `/api/search/food?address=${address}`,
        window.location.origin,
      )
      : new URL(`/api/search/${value}?address=${address}`, window.location.origin);
      const res = await fetch(url.href, {
        method: "POST",
      });
      const data = await res.json();
      console.log(data)
      setData(data);
    } catch {
      console.error("Internal Server Error:", Error);
    }
  };

  return (
    <div>
      <form onSubmit={(event) => event.preventDefault()}>
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
        <input
          disabled={search && !address || !search && !address ? true : false}
          onClick={() => (search && !address  || !search && !address ? null : searchApi(event))}
          type="submit"
          value={"Search"}
        />

      </form>

      {data.map((item: any, i: number) => {
        return (
          <div key={i} className={styles.card}>
            <div>
              <p>name: {item.name}</p>
              <p>address: {item.address}</p>
              <p>rating: {item.rating}</p>
              <p>open now?:{item.open ? "true" : "false"}</p>
            </div>
            { item.types? 
              <p>types: 
                {
                item.types.map((type: string, i: number) => {
                  return <p style={{border: "1px solid black"}} key={i}>{type}</p>;
                })
                }
  
              </p> 
            : 
              null
            }
          </div>
        );
      })}
    </div>
  );
};

export { SearchBar };
