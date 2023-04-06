import React, { useState } from "react";
import { Container } from "reactstrap";
import '../App.css';

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
  'Listen to relaxing music.',
  'Take a warm, relaxing bath.',
  'Go see a movie in the theater.',
  'Practice self-compassion.',
  'Take a nap.',
  'Practice a random act of kindness.',
  'Try a new form of creative expression: Writing, photography, pottery.',
  'Use some aroma therapy to instill relaxation.',
  'Learn a new skill or take an online course.',
  'Engage in some exercise that will elevate your heart rate.'
];

export default function ShowSuggestion() {
  const [ suggestion ] = useState(() => {
    const randomIndex = Math.floor(Math.random() * suggestions.length);
    return suggestions[randomIndex];
  });

  return (
    <Container>
      <div style={{textAlign: "center"}}>
        <p className='SuggestionText'>{suggestion}</p>
      </div>
    </Container>
    );
  };
    
