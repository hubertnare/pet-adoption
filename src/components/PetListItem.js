import React, { useState } from 'react';

// mui components
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

// mui icons
import { IconButton, ListItem } from '@mui/material';
import {
    DeleteOutline,
    Edit,
    ExpandMore,
    ExpandLess,
    LabelImportantOutlined,
} from '@mui/icons-material';

// nav
import { usePetContext } from '../contexts/PetContext';

export default function PetListItem({ petType, id, petFieldData}) {
    const [open, setOpen] = useState(true);
    const { deletePet, changeNavValue, getPetId } = usePetContext();

    const handleClick = () => {
        setOpen(!open);
    };

    const handleEditButton = () => {
        getPetId(id);
        changeNavValue("EditPet");
    };

    return (
        <List
            sx={{ width: '100%', bgcolor: 'background.paper' }}
        >
        <ListItem
            secondaryAction={
                <>
                    <IconButton onClick={handleEditButton} edge="end" aria-label="edit">
                        <Edit sx={{ color: 'green' }}/>
                    </IconButton>
                    <IconButton onClick={()=>deletePet(id)} edge="end" aria-label="delete" sx={{ padding: 2}}>
                        <DeleteOutline color="secondary"/>
                    </IconButton>
                </>
            }
        >
            <ListItemButton disableRipple onClick={handleClick}>
                    <ListItemIcon>
                        <LabelImportantOutlined />
                    </ListItemIcon>
                    <ListItemText
                        primary={petType}
                        secondary="Name, Breed, Location, Age, Sex"
                    />
                    {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
        </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {
                        petFieldData.map((item, i)=>(
                            <ListItemButton key={i} disableRipple sx={{ pl: 9 }}>
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.attrib} />
                            </ListItemButton>
                        ))
                    }
                </List>
            </Collapse>
        </List>
    );
};