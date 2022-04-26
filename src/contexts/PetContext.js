import React, { createContext, useContext, useEffect, useState } from 'react';
import http from '../http';

const PetContext = createContext();

export const usePetContext = () => {
    return useContext(PetContext);
};

export const PetProvider = ({children}) => {
    const [pets, setPets] = useState("");
    const [nav_value, set_nav_value] = useState("PetList");
    const [petId, setPetId] = useState("");
    
    // add new pet
    const createNewPet = async (data) => {
        await http.post("/api/pets", data);
    };

    // update a pet entry
    const updatePet = async (petId, data) => {
        await http.put(`/api/pets/${petId}`, data);
    };

    // delete a pet entry
    const deletePet = async (petId) => {
        await http.delete(`/api/pets/${petId}`);
    };

    // change navigation value
    const changeNavValue = (value) => {
        set_nav_value(value);
    };

    // get pet id value
    const getPetId = (id) => {
        setPetId(id);
    };

    useEffect(()=>{
        const readAllPets = async () => {
            const response = await http.get("/api/pets");
            const responseArr = Object.values(response.data.data);
            setPets(responseArr);
        };

        return readAllPets;
    }, []);

    const value = {
        createNewPet,
        pets,
        updatePet,
        deletePet,
        changeNavValue,
        nav_value,
        getPetId,
        petId
    };

    // context
    return(
        <PetContext.Provider value={value}>
            {children}
        </PetContext.Provider>
    )
}; 