import React from 'react';
import '../App.css';
import { InputLabel, MenuItem, Select, FormControl, Button, OutlinedInput } from '@mui/material';

const CharacterFilter = ({characters, setCharacters, useFilter, setUseFilter }) => {
    const handleFilterChange = (field, value) => {
        setUseFilter(prevFilters => ({ ...prevFilters, [field]: value }));
    };

    const handleSearchChange = (event) => {
        const searchText = event.target.value;
        setUseFilter(prevFilters => ({ ...prevFilters, name: searchText }));

        const filteredCharacters = characters.filter(character => {
            const nameMatches = searchText === '' || character.name.toLowerCase().includes(searchText.toLowerCase());
            const statusMatches = useFilter.status === '' || character.status === useFilter.status;
            const genderMatches = useFilter.gender === '' || character.gender === useFilter.gender;
            return nameMatches || statusMatches || genderMatches;
        });
        setCharacters(filteredCharacters);
    };

    const handleFilterButtonClick = () => {
        const filteredCharacters = characters.filter(character => {
            const statusMatches = useFilter.status === '' || character.status === useFilter.status;
            const genderMatches = useFilter.gender === '' || character.gender === useFilter.gender;
            return statusMatches && genderMatches;
        });

        setCharacters(filteredCharacters);
    };

    return (
        <div style={{ display: 'flex' ,marginBottom: '30px', marginTop: '30px' , width: "100%"}}>
            <OutlinedInput type='text' placeholder='New Todo' id='task' name='task' value={useFilter.name || ''} variant='Outlined' onChange={handleSearchChange} fullWidth/>
            <FormControl style={{ margin: '0 20px' , width: '300px'}}>
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={useFilter.status || ''}
                    label="Status"
                    onChange={e => handleFilterChange('status', e.target.value)}
                    fullWidth
                >
                    <MenuItem value='Alive'>Alive</MenuItem>
                    <MenuItem value='Dead'>Dead</MenuItem>
                    <MenuItem value='unknown'>Unknown</MenuItem>
                </Select>
            </FormControl>
            <FormControl style={{ margin: '0 20px', width: '300px'}}>
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={useFilter.gender || ''}
                    label="Gender"
                    onChange={e => handleFilterChange('gender', e.target.value)}
                >
                    <MenuItem value='Male'>Male</MenuItem>
                    <MenuItem value='Female'>Female</MenuItem>
                    <MenuItem value='Genderless'>Genderless</MenuItem>
                </Select>
            </FormControl>
            <Button variant="contained" onClick={handleFilterButtonClick}>Filter</Button>
        </div>
    );
};

export default CharacterFilter;
