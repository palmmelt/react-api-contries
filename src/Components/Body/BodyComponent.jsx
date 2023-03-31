import React, { useState, useEffect } from "react";
import Table from "./bodyComponent/TableComponent/Table";

const BodyComponent = () => {
  const [searchFrom, setSearchFrom] = useState("");
  const [countries, setCountries] = useState([]);
  const keys = useState(["name.common", "capital", "continents"]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        return res.json();
      })
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const search = (countrie) => {
    return countrie.filter((item) => {
      return keys.some((keys) => {
        const itemValue = item[keys];
        if (typeof itemValue === "string") {
          return itemValue.toLowerCase().includes(searchFrom.toLowerCase());
        }
        return false;
      });
    });
  };

  return (
    <div className="w-[96%] max-w-[1140px] m-auto py-1 bg-[#f0eeee]">
      <div className="flex justify-center items-center my-10 ">
        <label htmlFor="search-form">
          <input
            type="text"
            onChange={(e) => setSearchFrom(e.target.value)}
            className=" lowercase border border-[#0084ff] focus:text-[#0084ff] text-xl  w-80 text-center p-2"
            placeholder="ค้นหาประเทศหรือข้อมูลที่ต้องการ"
          />
        </label>
      </div>
      <Table data={search(countries)} />
    </div>
  );
};

export default BodyComponent;
