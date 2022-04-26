import * as React from 'react';

// core components
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

// icons
import {
    PetsOutlined,
    AddCircleOutline,
} from '@mui/icons-material';

// contexts
import { usePetContext } from '../contexts/PetContext';

export default function LabelBottomNavigation() {
    const { nav_value, changeNavValue } = usePetContext();

    const handleChange = (event, newValue) => {
        changeNavValue(newValue);
    };

    return (
        <BottomNavigation showLabels value={nav_value} onChange={handleChange}>
            <BottomNavigationAction
                label="Pets"
                value="PetList"
                icon={<PetsOutlined />}
            />
            <BottomNavigationAction
                label="Add Pet"
                value="AddPet"
                icon={<AddCircleOutline />}
            />
        </BottomNavigation>
    );
};
