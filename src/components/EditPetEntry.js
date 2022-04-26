import React, { useState, useEffect } from 'react';

// mui components
import {
    Typography,
    TextField,
    Box,
    Button,
    Paper
} from '@mui/material';

// mui icons
import { Edit } from '@mui/icons-material';

// custom components
import BottomNav from './BottomNav';

//axios
import { usePetContext } from '../contexts/PetContext';

export default function EditPetEntry() {
    // input data
    const [name, setName] = useState("");
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const [age, setAge] = useState("");
    const [location, setLocation] = useState("");
    const [sex, setSex] = useState("");

    // edit req
    const { updatePet, petId } = usePetContext();

    const data = JSON.stringify({
        "data": {
            "name": name,
            "animal": animal,
            "breed": breed,
            "age": age,
            "location": location,
            "sex": sex
        }
    });

    const handleEditPet = () => {
        updatePet(petId, data);
    };

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '50ch' },
                display: 'flex',
                flexDirection: 'column'
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <Typography variant="h3" gutterBottom component="div">
                    Edit Pet entry
                </Typography>
                <TextField
                    required
                    id="filled-name"
                    label="Name"
                    variant="outlined"
                    onChange={(e)=>setName(e.target.value)}
                />
                <TextField
                    required
                    id="filled-animal"
                    label="Animal"
                    variant="outlined"
                    helperText="Cat, Dog, Bird"
                    onChange={(e)=>setAnimal(e.target.value)}
                />
                <TextField
                    required
                    id="filled-breed-input"
                    label="Breed"
                    variant="outlined"
                    onChange={(e)=>setBreed(e.target.value)}
                />
                <TextField
                    required
                    id="filled-location-input"
                    label="Location"
                    variant="outlined"
                    onChange={(e)=>setLocation(e.target.value)}
                />
                <TextField
                    required
                    id="filled-age"
                    label="Age"
                    type="number"
                    variant="outlined"
                    onChange={(e)=>setAge(e.target.value)}
                />
                <TextField
                    required
                    id="sex"
                    label="Sex"
                    helperText="Male, Female"
                    variant="outlined"
                    onChange={(e)=>setSex(e.target.value)}
                />
            </div>
            <div>
                <Button variant="outlined" onClick={handleEditPet} startIcon={<Edit />}>
                    Edit Pet Entry
                </Button>
            </div>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNav/>
            </Paper>
        </Box>
    );
}
