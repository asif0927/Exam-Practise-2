import React from 'react'
import style from "./index.module.css";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
const index = () => {
  return (
    <>
    <section className={style.section}>
    <div style={{display:"flex",margin:"0 auto" ,width:"80%"}}>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} lg={2}>
            <img src="https://preview.colorlib.com/theme/robotics/img/l1.png.webp" className={style.img} alt="eew" style={{maxWidth:"100%",height:"auto",filter:"grayscale(100%)",}} />
        </Grid>
        <Grid item xs={12} md={4} lg={2} style={{paddingLeft:"10px"}}>
        <img src="https://preview.colorlib.com/theme/robotics/img/l2.png.webp" className={style.img} alt="eew" style={{maxWidth:"100%",height:"auto",filter:"grayscale(100%)",paddingLeft:"15px"}} />
        </Grid>
        <Grid item xs={12} md={4} lg={2} style={{paddingLeft:"10px"}}>
        <img src="https://preview.colorlib.com/theme/robotics/img/l3.png.webp" className={style.img} alt="eew" style={{maxWidth:"100%",height:"auto",filter:"grayscale(100%)",paddingLeft:"15px"}} />
        </Grid>
        <Grid item xs={12} md={4} lg={2} style={{paddingLeft:"10px"}}>
        <img src="https://preview.colorlib.com/theme/robotics/img/l4.png.webp" className={style.img} alt="eew" style={{maxWidth:"100%",height:"auto",filter:"grayscale(100%)",paddingLeft:"15px"}} />
        </Grid>
        <Grid item xs={12} md={4} lg={2} style={{paddingLeft:"10px"}}>
        <img src="https://preview.colorlib.com/theme/robotics/img/l5.png.webp" className={style.img} alt="eew" style={{maxWidth:"100%",height:"auto",filter:"grayscale(100%)",paddingLeft:"15px"}} />
        </Grid>
        <Grid item xs={12} md={4} lg={2} style={{paddingLeft:"10px"}}>
        <img src="https://preview.colorlib.com/theme/robotics/img/l1.png.webp" className={style.img} alt="eew" style={{maxWidth:"100%",height:"auto",filter:"grayscale(100%)",paddingLeft:"15px"}} />
        </Grid>
      </Grid>
    </Box>
    </div>
    </section>
    </>
  )
}

export default index
