import React, { useEffect, useState } from 'react';
import { TDrink } from '@/components/ResultPage/Result';
import Link from 'next/link';
import { FaChevronLeft } from "react-icons/fa";

const DetailPage = ({ params }: { params: { id: string } }) => {
  const [drinks, setDrinks] = useState<TDrink[] | null>(null);

  useEffect(() => {
    const getDrinks = async () => {
      try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.id}`);
        const data = await response.json();
        setDrinks(data.drinks);
      } catch (error) {
        console.log(error);
      }
    };

    getDrinks();
  }, [params.id]);

  return (
    <div className='w-[1000px] mx-auto p-10'>
      <section className='text-3xl font-bold underline mb-10 flex justify-center space-x-3'>
        <Link href="/">
          <span><FaChevronLeft /></span>
        </Link>
        <h1>Champagne Detail Page</h1>
      </section>

      {drinks && drinks.map((drink) => (
        <section key={drink.idDrink}>
          <img src={drink.strDrinkThumb} alt="drink-logo" />
          <h2>{drink.strDrink}</h2>
          <p>{drink.strCategory}</p>
          <p>{drink.strInstructions}</p>
        </section>
      ))}
    </div>
  );
}

export default DetailPage;
