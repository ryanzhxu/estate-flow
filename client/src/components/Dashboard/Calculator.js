import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPropertiesForDashboardAsync } from '../../redux/properties/thunks';
import StatsService from '../../redux/stats/service';
import {
  Checkbox,
  createTheme,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  ThemeProvider,
} from '@mui/material';
import ProfitModal from './ProfitModal';

function Calculator() {
  const [checked, setChecked] = useState([]);
  const [selectAllChecked, setSelectAllChecked] = useState(false);

  const dispatch = useDispatch();
  const properties = useSelector((state) => state.properties.propertiesForDashboard);
  const propertyIds = properties.map((property) => property._id);

  useEffect(() => {
    dispatch(getPropertiesForDashboardAsync());
  }, [dispatch]);

  const handleToggleAll = () => {
    setSelectAllChecked((prev) => !prev);
    setChecked(selectAllChecked ? [] : propertyIds);
  };

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
  const [mortgageValue, setMortgageValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleCalculate = async () => {
    if (checked.length > 0) {
      const { totalRent } = await StatsService.getTotalRent(checked);
      setTotalRent(totalRent);
      setIsOpen(true);
    }
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: '#032B43',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <motion.div>
        <motion.div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <TextField
            id='outlined-basic'
            label='Mortgage'
            variant='outlined'
            size='small'
            type='number'
            color='primary'
            value={mortgageValue}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={(e) => setMortgageValue(e.target.value)}
            inputProps={{
              min: 0,
              step: 0.01,
            }}
            InputProps={{
              startAdornment:
                isFocused || mortgageValue !== '' ? <InputAdornment position='start'>$</InputAdornment> : null,
            }}
            style={{ width: '70%' }}
          />
          <IconButton
            style={{ width: '40px', height: '40px', borderRadius: '40%', marginLeft: '5px' }}
            onClick={handleCalculate}>
            <i className='bi bi-calculator bi-sm' />
          </IconButton>
          <ProfitModal
            mortgageValue={mortgageValue === '' ? 0 : mortgageValue}
            totalRent={totalRent}
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
          />
        </motion.div>
        <motion.div style={{ maxHeight: '440px', overflowY: 'auto' }}>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: '#DEE2E6' }}>
            <ListItem disablePadding>
              <ListItemButton role={undefined} onClick={handleToggleAll} dense>
                <ListItemIcon>
                  <Checkbox
                    edge='start'
                    checked={selectAllChecked}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': 'select-all-label' }}
                    style={{
                      color: '#C9A461',
                    }}
                  />
                </ListItemIcon>
                <ListItemText id='select-all-label' primary='Select All' />
              </ListItemButton>
            </ListItem>
            {properties.map((property, i) => {
              const labelId = `checkbox-list-label-${property}`;

              return (
                <ListItem key={i} disablePadding>
                  <ListItemButton role={undefined} onClick={handleToggle(property._id)} dense>
                    <ListItemIcon>
                      <Checkbox
                        edge='start'
                        checked={checked.some((id) => id === property._id)}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                        style={{
                          color: '#032B43',
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
    </ThemeProvider>
  );
}

export default Calculator;
