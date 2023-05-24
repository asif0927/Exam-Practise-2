import React from 'react'
import style from "./index.module.css";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
const index = () => {
  return (
    <>
    <section className={style.section}>
    <div style={{display:"flex",margin:"0 auto" ,width:"80%",justifyContent:"center",flexDirection:"column"}}>
        <div style={{display:"flex",flexDirection:"column"}}>
          <h1 className={style.h1}>Latest News from our Blog</h1>
         <p className={style.p}>Who are in extremely love with eco friendly system.</p>
        </div>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
        <Grid item xs={12}lg={6}>
            <Card >
              <CardContent>
                  <img src='https://preview.colorlib.com/theme/robotics/img/b1.jpg.webp' style={{maxWidth:"100%",height:"auto",borderRadius:"10px"}}/>
                  <div style={{display:"flex",flexDirection:"column"}}>
                    <ul style={{margin:"15px 0"}}>
                        <li className={style.li}>
                            <a href="#" className={style.a}>Travel</a>
                        </li>
                        <li className={style.li}>
                        <a href="#" className={style.a}> Live Style</a>
                        </li>
                    </ul>
                    <h4 style={{margin:"15px 0",fontSize:"18px"}}>Portable latest Fashion for young women</h4>
                    <p style={{marginBottom:"1rem"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    <p style={{color:"black"}}>31st January, 2018</p>
                  </div>
               </CardContent>
            </Card>
        </Grid>
        <Grid item xs={12}lg={6}>
            <Card >
              <CardContent>
                 <img src='https://preview.colorlib.com/theme/robotics/img/b2.jpg.webp'  style={{maxWidth:"100%",height:"auto",borderRadius:"10px"}} />
                 <div style={{display:"flex",flexDirection:"column"}}>
                    <ul style={{margin:"15px 0"}}>
                        <li className={style.li}>
                            <a href="#" className={style.a}>Travel</a>
                        </li>
                        <li className={style.li}>
                        <a href="#" className={style.a}> Live Style</a>
                        </li>
                    </ul>
                    <h4 style={{margin:"15px 0",fontSize:"18px"}}>Portable latest Fashion for young women</h4>
                    <p style={{marginBottom:"1rem"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    <p style={{color:"black"}}>31st January, 2018</p>
                  </div>
               </CardContent>
            </Card>
        </Grid>
        </Grid>
        </Box>
    </div>
    </section>
    </>
  )
}

export default index
