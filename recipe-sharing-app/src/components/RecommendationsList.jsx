import React, { useEffect } from 'react';
import useStore from './store';
import { useRecipeStore } from './recipeStore';
const RecommendationList = () => {
  const recommendations = useStore(state => state.recommendations);
  const setRecommendations = useStore(state => state.setRecommendations);

  useEffect(() => {
    // Simulate fetching recommendations
    const dummyData = ['Item 1', 'Item 2', 'Item 3'];
    setRecommendations(dummyData);
  }, [setRecommendations]);

  return (
    <div>
      <h2>Recommendations</h2>
      <ul>
        {recommendations.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendationList;