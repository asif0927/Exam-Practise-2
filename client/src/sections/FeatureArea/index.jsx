import React from 'react'
import style from "./index.module.css";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
const index = () => {
  return (
    <>
    <section className={style.section}>
       <h1 className={style.h1}>Some Features that Made us Unique</h1>
       <p className={style.p}  >Who are in extremely love with eco friendly system.</p>
       <div style={{display:"flex",margin:"0 auto" ,width:"80%"}}>

       <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4}>
            <Card style={{padding:"35px",borderRadius:"10px",marginBottom:"30px"}}>
              <CardContent>
                <div style={{display:"flex",flexDirection:"column"}}>
                    <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                       <PersonOutlineIcon  className={style.icon}/>
                       <h4 className={style.h4}>Expert Technicians</h4>
                    </div>
                    <p className={style.p2}>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                </div>
               </CardContent>
            </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
            <Card style={{padding:"35px",borderRadius:"10px",marginBottom:"30px"}}>
              <CardContent>
              <div style={{display:"flex",flexDirection:"column"}}>
                    <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                       <PersonOutlineIcon  className={style.icon}/>
                       <h4 className={style.h4}>Expert Technicians</h4>
                    </div>
                    <p className={style.p2}>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                </div>
               </CardContent>
            </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
            <Card style={{padding:"35px",borderRadius:"10px",marginBottom:"30px"}}>
              <CardContent>
              <div style={{display:"flex",flexDirection:"column"}}>
                    <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                       <PersonOutlineIcon  className={style.icon}/>
                       <h4 className={style.h4}>Expert Technicians</h4>
                    </div>
                    <p className={style.p2}>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                </div>
               </CardContent>
            </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
            <Card style={{padding:"35px",borderRadius:"10px",marginBottom:"30px"}}>
              <CardContent>
              <div style={{display:"flex",flexDirection:"column"}}>
                    <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                       <PersonOutlineIcon  className={style.icon}/>
                       <h4 className={style.h4}>Expert Technicians</h4>
                    </div>
                    <p className={style.p2}>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                </div>
               </CardContent>
            </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
            <Card style={{padding:"35px",borderRadius:"10px",marginBottom:"30px"}}>
              <CardContent>
              <div style={{display:"flex",flexDirection:"column"}}>
                    <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                       <PersonOutlineIcon  className={style.icon}/>
                       <h4 className={style.h4}>Expert Technicians</h4>
                    </div>
                    <p className={style.p2}>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                </div>
            </CardContent>
            </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
            <Card style={{padding:"35px",borderRadius:"10px",marginBottom:"30px"}}>
              <CardContent>
              <div style={{display:"flex",flexDirection:"column"}}>
                    <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                       <PersonOutlineIcon  className={style.icon}/>
                       <h4 className={style.h4}>Expert Technicians</h4>
                    </div>
                    <p className={style.p2}>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
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
