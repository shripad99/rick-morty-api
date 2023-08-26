import React from 'react';
import { Button } from '@mui/material';
import '../App.css'
import { Link } from 'react-router-dom';

const CharacterDetail = ({ character }) => {
  if (!character) return null; // Check if character is defined
  const characterId = character.url.split('/').pop();
  
  return (
    <div className='Card'>
      <img src={character.image} alt={character.name} />
      <div className='card-content'>
        <h3>{character.name}</h3>
        <p>Status: {character.status}</p>
        <p>Gender: {character.gender}</p>
        <p>Species: {character.species}</p>
        <Link to={`/character/${characterId}`}>
          <Button variant="contained" className='btn'>More Details</Button>
        </Link>
      </div>
    </div>
  )
}

export default CharacterDetail;
