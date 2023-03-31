import React from 'react'

const Table = ({data}) => {

  return (
    <div>
        <ul className="m-8 grid gap-12 grid-cols-[repeat(auto-fill,minmax(200px,1fr))] ">
        {data.map((item, index) => {
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
  )
}

export default Table