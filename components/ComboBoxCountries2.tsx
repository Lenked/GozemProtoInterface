import React, { useState } from 'react';
import { MenuItem, Select, InputLabel, FormControl, Typography } from '@mui/material';

export default function CustomSelect() {
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <FormControl>
      <InputLabel id="country-label">Country</InputLabel>
      <Select
        labelId="country-label"
        id="country-select"
        value={selectedCountry}
        onChange={handleChange}
        label="Country"
      >
        <MenuItem value="cameroon">Cameroon (+237)</MenuItem>
        <MenuItem value="usa">United States (+1)</MenuItem>
        {/* Ajoutez plus de pays au besoin */}
      </Select>
      <Typography variant="caption">Choose your country</Typography>
    </FormControl>
  );
}
