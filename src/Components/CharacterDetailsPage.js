import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CharacterDetailsPage.css';

const CharacterDetailsPage = () => {
    const { id } = useParams(); // Extracts the 'id' parameter from the URL
    const [character, setCharacter] = useState(null);

    useEffect(() => {
      const fetchCharacterDetail = async () => {
        try {
          const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
          setCharacter(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchCharacterDetail();
    }, [id]);
  
    if (!character) return <div>Loading...</div>;
    
    return (
        <div className='Card'>
            <img src={character.image} alt={character.name} />
            <div className='card-content'>
                <h3>{character.name}</h3>
                <p>Status: {character.status}</p>
                <p>Gender: {character.gender}</p>
                <p>Species: {character.species}</p>
                <p>Type: {character.type}</p>
                <p>Created: {character.created}</p>
                <p>Location: {character.origin.name}</p>
            </div>
        </div>
    );
}

export default CharacterDetailsPage;
