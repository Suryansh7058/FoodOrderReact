import React from 'react';
import Card from '../UI/Card';
import { AvailableMealsSection } from './AvailableMeals.styled';
import MealItems from './MealItems';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Malai Kofta',
    description:
      'Delicious dish of fried balls of potato and paneer in a rich and creamy mild gravy',
    price: 250,
  },
  {
    id: 'm2',
    name: 'Pizza',
    description: 'An Italian specialty!',
    price: 350,
  },
  {
    id: 'm3',
    name: 'Paneer Cheese Paratha',
    description: 'Indian, cheesy, yummy',
    price: 150,
  },
  {
    id: 'm4',
    name: 'Hyderabadi Biriyani',
    description: 'Meaty...and Tasty...',
    price: 499,
  },
];
const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
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
