"use client";

import React, { useEffect, useState } from "react";
import { TDrink } from "@/components/ResultPage/Result";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";

const DetailPage = ({ params }: { params: { id: string } }) => {
  const [drinks, setDrinks] = useState<TDrink[] | null>(null);

  useEffect(() => {
    const getDrinks = async () => {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.id}`
        );
        const data = await response.json();
        setDrinks(data.drinks);
      } catch (error) {
        console.log(error);
      }
    };

    getDrinks();
  }, [params.id]);

  return (
    <div className="w-[1000px] mx-auto p-10">
      <section className="text-3xl font-bold  mb-10 flex gap-[10px] justify-center  space-x-10">
        <Link href="/">
          <span>
            <FaChevronLeft className="text-blue-700"/>
          </span>
        </Link>
        <h1 className="text-blue-700 font-bold text-[2.2rem]">Champagne Detail Page</h1>
      </section>

      {drinks &&
        drinks.map((drink) => (
          <section key={drink.idDrink}>
            <div className="flex justify-center">
            <img src={drink.strDrinkThumb} alt="drink-logo" className="w-[500px]"/>
            </div>
           
            <h2 className="text-center">{drink.strDrink}</h2>
            <p className="text-center">{drink.strCategory}</p>
            <p className="text-center">{drink.strInstructions}</p>
          </section>
        ))}
    </div>
  );
};

export default DetailPage;
