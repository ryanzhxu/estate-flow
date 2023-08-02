import {motion} from 'framer-motion';
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPropertiesForDashboardAsync} from "../../redux/properties/thunks";
import StatsService from "../../redux/stats/service"
import {Button, Modal} from "react-bootstrap";
import {
    Checkbox,
    IconButton,
    InputAdornment,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon, ListItemText,
    TextField
} from "@mui/material";
import ProfitModal from "./ProfitModal";

function Calculator() {
    const [checked, setChecked] = useState([]);
    const [selectAllChecked, setSelectAllChecked] = useState(false);

    const dispatch = useDispatch();
    const properties = useSelector((state) => state.properties.properties);
    const propertyIds = properties.map((property) => property._id);


    useEffect(() => {
        dispatch(getPropertiesForDashboardAsync());
    }, [dispatch]);

    const handleToggleAll = () => {
        setSelectAllChecked((prev) => !prev);
        setChecked(selectAllChecked ? [] : propertyIds)
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

    const [isOpen, setIsOpen] = useState(false);
    const [totalRent, setTotalRent] = useState(0);
    const [mortgageValue, setMortgageValue] = useState("");

    const handleCalculate = async () => {
        if (checked.length > 0) {
            const { totalRent } = await StatsService.getTotalRent(checked);
            setTotalRent(totalRent);
            setIsOpen(true);
        }
    };

    const handleClose = () => {
        setIsOpen(false);
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
                    value={mortgageValue}
                    onChange={(e) => setMortgageValue(e.target.value)}
                    inputProps={{
                        min: 0,
                        step: 0.01,
                    }}
                    InputProps={{startAdornment: <InputAdornment position="start">$</InputAdornment>}}
                />
                <IconButton style={{ width: "40px", height: "40px", borderRadius: "50%" }} onClick={handleCalculate}>
                    <i className="bi bi-calculator bi-sm"/>
                </IconButton>
                <ProfitModal
                    mortgageValue={mortgageValue === "" ? 0 : mortgageValue}
                    totalRent={totalRent}
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                />
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