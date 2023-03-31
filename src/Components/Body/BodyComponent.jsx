import React, { useState, useEffect } from "react";

const BodyComponent = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const keys = (["name.common", "capital","continents"]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="w-[96%] max-w-[1140px] m-auto py-1 bg-[#f0eeee]">
      <div className="flex justify-center items-center my-10 ">
        <label htmlFor="search-form">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className=" lowercase border border-[#0084ff] focus:text-[#0084ff] text-xl  w-80 text-center p-2"
            placeholder="ค้นหาประเทศหรือข้อมูลที่ต้องการ"
          />
        </label>
      </div>
      <ul className="m-8 grid gap-12 grid-cols-[repeat(auto-fill,minmax(200px,1fr))] ">
        {countries
          .filter((item) => {
            return search.toLocaleLowerCase() === ""
              ? item
              : item.name.common.toLocaleLowerCase().includes(search)
          })

          .map((item, index) => {
            return (
              <li key={index}>
                <div className=" shadow-sm shadow-black bg-white ">
                  <div className=" max-h-36  ">
                    <img
                      className="w-[100%] object-cover min-h-[100%] object-center border border-black"
                      src={item.flags.svg}
                      alt={item.flags.alt}
                    />
                  </div>
                  <div className="p-12 mt-10 pt-24 md:p-8 md:pt-2 ">
                    <div>
                      <h1>
                        {" "}
                        ประเทศ:
                        <span className=" text-slate-500">
                          {item.name.common}
                        </span>
                      </h1>
                      <ol className="mt-4">
                        <li className="mt-2">
                          {" "}
                          เมืองหลวง:{" "}
                          <span className=" text-slate-500">
                            {item.capital}
                          </span>
                        </li>
                        <li className="mt-2">
                          {" "}
                          ทวีป:{" "}
                          <span className=" text-slate-500">
                            {item.continents}{" "}
                          </span>
                        </li>
                        <li className="mt-2">
                          {" "}
                          ประชากร:{" "}
                          <span className=" text-slate-500">
                            {item.population}คน
                          </span>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default BodyComponent;
