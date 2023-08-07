import { Switch, FormControlLabel, FormGroup, Box, Grid, Typography } from '@mui/material';
import React from 'react'
import { useState } from 'react'
import { withStyles } from '@mui/styles';
const ToggleButton = (props) => {
    const [checked, setChecked] = useState(false)
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <Box>
      {/* <FormControlLabel
        sx={{
          display: 'block',
        }}
        control={
          <Switch
            checked={loading}
            onChange={() => setLoading(!loading)}
            name="loading"
            color="primary"
            sx = {{height: "8vh", width: "15vw"}}
          />
        }
        label="Loading"
      /> */}
      <Box sx = {{
        display: "flex",
        justifyContent: "spaceAround",
      }}>
        <Grid container alignItems="center" justifyContent="center" spacing={2}>
            <Grid item  xs = {2}></Grid>
            <Grid item  xs = {3} sx = {{display: "flex", justifyContent: "right"}}><Switch defaultChecked style = {{boxShadow: "2px"}}/></Grid>
            <Grid item  xs = {5}><Typography>{props.btnName}</Typography></Grid>
            <Grid item  xs = {2}></Grid>
        </Grid>
      
      </Box>
      
       
    </Box>
  )
}

export default ToggleButton
