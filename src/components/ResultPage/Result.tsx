"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

export type TDrink = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strCategory?: string;
  strInstructions?: string;
};

const Result = () => {
  const [drinks, setDrinks] = useState<TDrink[]>([]);

  useEffect(() => {
    const getDrinks = async () => {
      const response = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute"
      );

      const data = await response.json();
      //   console.log(data.drinks)
      setDrinks(data.drinks);
    };

    getDrinks();
  }, []);

  console.log(drinks);

  return (
    <div>
      <h1 className="text-center pb-[40px] p-[40px] text-[3rem] font-bold text-blue-600">
        Champaigne
      </h1>

      <div className="container flex flex-wrap mx-auto ">
        {drinks.map((drink) => (
          <div key={drink.idDrink} className="flex p-[0px]  w-1/3 px-[100px]">
            <div className="border shadow-lg flex-col items-center justify-center p-[40px] m-[30px] hover:scale-[1.2]">
              <img
                src={drink.strDrinkThumb}
                alt="drink-log"
                className="w-[200px] h-[200px]"
              />
              <p className="text-center mt-[30px]">{drink.strDrink}</p>

              <div className="flex justify-center mt-[30px]">
                <Link href={`/ ${drink.idDrink}`}>
                  <button className="py-1 px-2 text-white bg-blue-700 rounded">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Result;
