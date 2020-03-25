import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { STATES } from 'enums'

import { Wrapper, Content } from './CompareModels.style';

const CompareModels = ({children}) => {
  const [mode, setMode] = useState('side-by-side');
  function handleChange(e) {
    setMode(e.target.value);
  }

  return (
    <Wrapper>
      <div style={{border: '1px solid black', borderRadius: '2px', padding: '1rem' }}>
        <FormControl style={{width: '20rem', marginRight: '1rem'}}>
          <TextField id="compare-left" label="Left Data" value="https://covidactnow.org/data/"  />
        </FormControl>
        <FormControl style={{width: '20rem', marginRight: '1rem'}}>
          <TextField id="compare-right" label="Right Data" value="https://staging.covidactnow.org/data/"  />
        </FormControl>
        <FormControl>
          <InputLabel id="compare-mode-label">Mode</InputLabel>
          <Select
            style={{width: '10rem'}}
            labelId="compare-mode-label"
            id="compare-mode"
            value={mode}
            onChange={handleChange}
          >
            <MenuItem value="side-by-side">Side By Side</MenuItem>
            <MenuItem value="toggle">Toggle</MenuItem>
          </Select>
          {(mode === 'toggle') && (
            <span>Press space to toggle.</span>
          )}
        </FormControl>
      </div>

      <Typography variant="h3" component="h1">
        Compare Models
      </Typography>
    </Wrapper>
  );
};

export default CompareModels;