import {motion} from 'framer-motion';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPropertiesForDashboardAsync} from "../../redux/properties/thunks";

function Calculator() {
    const [checked, setChecked] = useState([]);
    const [selectAllChecked, setSelectAllChecked] = useState(false);

    const dispatch = useDispatch();
    const properties = useSelector((state) => state.properties.properties);
    const ids = properties.map((property) => property._id);

    useEffect(() => {
        dispatch(getPropertiesForDashboardAsync());
    });

    const handleToggleAll = () => {
        setSelectAllChecked((prev) => !prev);
        setChecked(selectAllChecked ? [] : ids)
    }

    const handleToggle = (id) => () => {
        const currentIndex = checked.indexOf(id);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(id);
        } else {
            newChecked.splice(currentIndex, 1);
            setSelectAllChecked(false);
        }

        setChecked(newChecked);
    };

    return (
        <motion.div>
            <motion.div>
                <TextField
                    id="outlined-basic"
                    label="Mortgage"
                    variant="outlined"
                    size="small"
                    type="number"
                    // inputProps={{
                    //     min: 0,
                    //     step: 0.01,
                    // }}
                    InputProps={{startAdornment: <InputAdornment position="start">$</InputAdornment>}}
                />
                <IconButton style={{ width: '40px', height: '40px', borderRadius: '50%' }}>
                    <i className="bi bi-calculator bi-sm"/>
                </IconButton>
            </motion.div>
            <motion.div style={{ maxHeight: '420px', overflowY: 'auto' }}>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: '#DEE2E6' }}>
                    <ListItem disablePadding>
                        <ListItemButton role={undefined} onClick={handleToggleAll} dense>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={selectAllChecked}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': 'select-all-label' }}
                                    style ={{
                                        color: "#C9A461",
                                    }}
                                />
                            </ListItemIcon>
                            <ListItemText id="select-all-label" primary="Select All" />
                        </ListItemButton>
                    </ListItem>
                    {properties.map((property, i) => {
                        const labelId = `checkbox-list-label-${property}`;

                        return (
                            <ListItem
                                key={i}
                                disablePadding
                            >
                                <ListItemButton role={undefined} onClick={handleToggle(property._id)} dense>
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            checked={checked.some((id) => id === property._id)}
                                            tabIndex={-1}
                                            disableRipple
                                            inputProps={{ 'aria-labelledby': labelId }}
                                            style ={{
                                                color: "#032B43",
                                            }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText
                                        id={labelId}
                                        primary={`${property.address.streetAddress}, ${property.address.city}, 
                                    ${property.address.province} ${property.address.postalCode}`}
                                    />
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                </List>
            </motion.div>
        </motion.div>
    );
}

export default Calculator;