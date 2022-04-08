import React, { useState } from 'react';
import Switch from '@mui/material/Switch';

export default function BankSwitch() {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    if(checked){
        setChecked(false);
    }else if (!checked){
        setChecked(true);
    }
    
  };

  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      /*inputProps={{ 'aria-label': 'controlled' }}*/
    />
  );
}