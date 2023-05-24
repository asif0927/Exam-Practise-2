import React from 'react'
import { TextField, Button } from '@mui/material';
const Product = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    const values = {};
    for (let [name, value] of formData.entries()) {
      values[name] = value;
    }

    console.log('Form values:', values);
  };
  return (
    <>
      <form onSubmit={handleSubmit}  style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
      <TextField label="title" name="title" variant="outlined" style={{marginBottom:"20px"}} />
      <TextField label="description" name="description" variant="outlined" style={{marginBottom:"20px"}}/>
      <TextField label="imageUrl" name="imageUrl" variant="outlined" style={{marginBottom:"20px"}} />
      <TextField label="price" name="price" type="number" variant="outlined" style={{marginBottom:"20px"}} />
      <Button variant="contained" color="primary" type="submit" style={{marginBottom:"20px"}}>Submit</Button>
    </form>
    </>
  )
}

export default Product