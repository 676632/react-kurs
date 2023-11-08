import React, { useState } from "react";
import { Typography, Box, TextField, Switch } from "@mui/material";

const Description = () => {
  // Teksten nedenfor kan redigeres av kursdeltakerne for å tilpasse beskrivelsen
const descriptionText =("heihei");

const [value, setValue]= useState("heihei");
console.log(value);

const [checked, setChecked] =useState(false);
console.log(checked);


  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        En ny dag, en ny mulighet
      </Typography>
      <Typography variant="body1">{descriptionText}</Typography>

      <Switch dvalue={checked} onChange={(e)=>setChecked(e.target.checked)} />

      <TextField id="outlined-basic"
       label="Outlined" 
       variant="outlined" 
       value={(value)}
       onChange={(e)=> setValue(e.target.value)}
       />

    </Box>
  );
};

export default Description;
