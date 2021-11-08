import React, { useEffect, useState } from 'react';
import Card from '../UI/Card';
import {
  AvailableMealsSection,
  MealsLoading,
  MealsError,
} from './AvailableMeals.styled';
import MealItems from './MealItems';
import axios from 'axios';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          'https://onlinefood-6aef0-default-rtdb.firebaseio.com/meals.json'
        );
        const loadedMeals = [];

        for (const key in response.data) {
          loadedMeals.push({
            id: key,
            name: response.data[key].name,
            description: response.data[key].description,
            price: response.data[key].price,
          });
        }
        setMeals(loadedMeals);
      } catch (error) {
        setError('Meals Failed to Load!!!');
      }
      setIsLoading(false);
    })();
  }, []);

  if (error) {
    return (
      <MealsError>
        <h2>{error}</h2>
      </MealsError>
    );
  }
  if (isLoading) {
    return (
      <MealsLoading>
        <Card>
          <h3>...Is Loading</h3>
        </Card>
      </MealsLoading>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItems
      key={meal.id}
      id={meal.id}
      name={meal.name}
      desc={meal.description}
      price={meal.price}
    />
  ));

  return (
    <AvailableMealsSection>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </AvailableMealsSection>
  );
};

export default AvailableMeals;
