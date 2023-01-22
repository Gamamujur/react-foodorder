import React, { useEffect, useState } from "react";
import classes from "../Meals/AvailableMeals.module.css";
import Card from "../UI/Card";
import MealsItem from "./MealsItem/MealsItem";

const AvailableMeals = () => {
  const [meal, setmeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchdata = async () => {
      const fetchapi = await fetch(
        "https://react-foodorder-3d110-default-rtdb.asia-southeast1.firebasedatabase.app/Meals.json"
      );
      const datajson = await fetchapi.json();

      const loadedmeal = [];

      for (const key in datajson) {
        loadedmeal.push({
          id: key,
          name: datajson[key].name,
          description: datajson[key].description,
          price: datajson[key].price,
        });
      }
      setmeals(loadedmeal);
    };

    fetchdata();
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const meals = meal.map((meal) => (
    <MealsItem
      key={meal.id}
      id={meal.id} // this is new!
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        {loading && (
          <div className="text-center text-white">
            <svg
              class="animate-spin h-5 w-5 mr-3 ..."
              viewBox="0 0 24 24"
            ></svg>
            Processing...
          </div>
        )}
        <ul className="text-white">{meals}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
