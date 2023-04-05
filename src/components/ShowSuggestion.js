import React, { useState } from "react";

export default function ShowSuggestion() {
  const [suggestion, setSuggestion ] = useState('');

  const suggestions = [
    'Take a long walk in nature.',
    'Call a friend',
    'Do a short guided meditation.',
    'Practice 10 minutes of Yoga.',
    'Cook yourself a delicious meal.',
    'Watch your favorite TV Show.',
    'Plan a trip.',
    'Play with your pet.',
    'Indulge in your favorite hobby.',
    'Draw or paint for 30 minutes.',
    'Listen to relaxing music.'
  ];

  const makeSuggestion = () => {
    const randomIndex = Math.floor(Math.random() * suggestions.length);
    setSuggestion(suggestions[randomIndex]);
  };

  makeSuggestion();
  <p>{suggestion}</p>

};
