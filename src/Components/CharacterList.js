import React from 'react';
import { Grid, Paper } from '@mui/material';
import CharacterDetail from './CharacterDetail';
import '../App.css';

const CharacterList = ({ characters }) => {
  return (
    <div>
      <Grid container spacing={2}>
        {characters && characters.map((character) => (
          <Grid item key={character.id} xs={12} sm={6} md={4} lg={3} xl={3}>
            <Paper className="character-card">
              <CharacterDetail character={character} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default CharacterList;
