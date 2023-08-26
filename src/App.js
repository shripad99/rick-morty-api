import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CharacterList from './Components/CharacterList';
import { Container, Grid } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CharacterFilter from './Components/CharacterFilter';
import CharacterDetailsPage from './Components/CharacterDetailsPage';

function App() {
  const [characters, setCharacters] = useState([]);
  const [useFilter, setUseFilter] = useState([{ name: '' ,status: '', gender: '' }]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character`);
        setCharacters(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCharacters();
  }, []);

  return (
    <BrowserRouter>
      <Container>
        <Grid>
          <Grid item>
            <CharacterFilter useFilter={useFilter} setUseFilter={setUseFilter} characters={characters} setCharacters={setCharacters}/>
          </Grid>
          <Grid item style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
              <Routes>
                <Route path='/' element = {<CharacterList characters={characters} useFilter={useFilter} setUseFilter={setUseFilter} />} />
                <Route path="/character/:id" element={<CharacterDetailsPage />} />
              </Routes>
          </Grid>
        </Grid>
      </Container>
    </BrowserRouter>
  );
}

export default App;
