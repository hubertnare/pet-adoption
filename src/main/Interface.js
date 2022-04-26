import React from 'react';

// custom component
import PetList from '../components/PetList';
import CreatePetEntry from '../components/CreatePetEntry';
import EditPetEntry from '../components/EditPetEntry';

// contexts
import { usePetContext } from '../contexts/PetContext';

const Interface = () => {
    const { nav_value } = usePetContext();
    
    switch (nav_value) {
        case "PetList":
            return <PetList/>
        case "AddPet":
            return <CreatePetEntry/>
        case "EditPet":
            return <EditPetEntry/>
        default:
            return <PetList/>
    };
};

export default Interface;