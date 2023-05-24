import React from 'react'
import style from  "./index.module.css";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
const index = () => {
  return (
    <>
    <footer className={style.footer}>
        <div style={{display:"flex",margin:"0 auto" ,width:"80%"}} >
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}  lg={3}>
            <div style={{display:"flex",flexDirection:"column"}}>
                <h6 className={style.h6}>Top Products</h6>
                <ul>
                    <li className={style.li}><a href="#" className={style.a} >Managad Website</a></li>
                    <li className={style.li}><a href="#"  className={style.a}>Manage Reputation</a></li>
                    <li className={style.li}> <a href="#"  className={style.a}>Power Tools</a></li>
                    <li className={style.li}><a href="#"  className={style.a}> Marketing Service</a></li>
                </ul>
            </div>
        </Grid>
        <Grid item xs={12}  lg={6}>
            <div style={{display:"flex",flexDirection:"column"}}>
            <h6 className={style.h6}>Newsletter</h6>
            <p style={{margin:"1rem 0",color:"white"}}>You can trust us. we only send promo offers, not a single spam.</p>
            <form target="_blank" novalidate="true" className={style.form}>
                <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                   <Grid item xs={8}>
                   <input name="EMAIL" placeholder="Enter Email" type="email" className={style.input}/>
                    </Grid>
                    <Grid item xs={4}>
                       <button class="nw-btn primary-btn" className={style.button}>Subscribe</button>
                    </Grid>
                </Grid>
              </Box>
            </form>
            </div>
        </Grid>
        <Grid item xs={12}  lg={3}>
            <div>
            <h6 className={style.h6}>Instagram Feed</h6>
            <ul>
                <li className={style.li2}><img src='https://preview.colorlib.com/theme/robotics/img/i1.jpg.webp'/></li>
                <li className={style.li2}><img src='https://preview.colorlib.com/theme/robotics/img/i2.jpg.webp'/></li>
                <li className={style.li2}><img src='https://preview.colorlib.com/theme/robotics/img/i3.jpg.webp'/></li>
                <li className={style.li2}><img  src='https://preview.colorlib.com/theme/robotics/img/i4.jpg.webp' /></li>
                <li className={style.li2}><img src='https://preview.colorlib.com/theme/robotics/img/i5.jpg.webp'/></li>
                <li className={style.li2}><img src='https://preview.colorlib.com/theme/robotics/img/i6.jpg.webp'/></li>
                <li className={style.li2}><img src='https://preview.colorlib.com/theme/robotics/img/i7.jpg.webp'/></li>
                <li className={style.li2}><img src='https://preview.colorlib.com/theme/robotics/img/i8.jpg.webp'/></li>
            </ul>
            </div>
        </Grid>
       </Grid>
    </Box>
        </div>
        <div>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} style={{display:"flex",margin:"0 auto",width:"80%"}}>
        <Grid item xs={8}>
        <p style={{color:'white',marginTop:"20px"}} >
Copyright ©<script>document.write(new Date().getFullYear());</script>2023 All rights reserved | This template is made with  by <a href="https://colorlib.com" target="_blank">Colorlib</a>
</p>
        </Grid>
        <Grid item xs={4}>
           <div style={{textAlign:"right"}}>
             <a className={style.a2} href="#"> <FacebookIcon style={{color:'white'}}/>  </a>
            <a className={style.a2} href="#"> <TwitterIcon style={{color:'white'}}/> </a>
            <a href="#" className={style.a2}> <FacebookIcon style={{color:'white'}}/></a>
            <a href="#" className={style.a2}>  <TwitterIcon style={{color:'white'}}/>  </a>
           </div>
        </Grid>
       </Grid>
    </Box>
        </div>
    </footer>
    </>
  )
}

export default index
