import React, { useEffect, useState } from 'react';
import style from "./index.module.css";
import { useRobotContext } from '../../context/RobotContext';
import { Grid, Box, Button } from "@mui/material";
import { Card } from "antd";
import { getAllRobots } from '../../api/requiests';

const Index = () => {
  const [robots, setRobots] = useRobotContext();
  const [sortedRobots, setSortedRobots] = useState([]);

  useEffect(() => {
    getAllRobots().then(res => {
      setRobots(res);
      setSortedRobots(res);
    });
  }, [setRobots]);

  const handleSortByPrice = () => {
    const sorted = [...sortedRobots].sort((a, b) => a.price - b.price);
    setSortedRobots(sorted);
  };

  return (
    <>
      <section className={style.section}>
        <h1 className={style.h1}>Featured Robotics Products to Show</h1>
        <p className={style.p}>Who are in extremely love with eco friendly system.</p>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Button onClick={handleSortByPrice} variant="contained">Sort by Price</Button>
        </div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {sortedRobots.map((robot) => (
              <Grid key={robot._id} item lg={3} md={6} sm={12}>
                <div className={style.div}>
                  <div className={style.div2}>
                    <Card
                      hoverable
                      cover={
                        <img
                          alt="example"
                          style={{ height: "300px", objectFit: "contain" }}
                          src={robot.imageUrl}
                        />
                      }
                    >
                      <div className={style.div3}>
                        <h4 className={style.h4} style={{ marginBottom: "10px" }}>{robot.title}</h4>
                        <h4 className={style.p} style={{ marginBottom: "10px", color: "gray" }}>{robot.description}</h4>
                        <span style={{ marginBottom: "10px", color: "black" }}>{robot.price}</span>
                        <a href="#" className={style.a}>View Details</a>
                      </div>
                    </Card>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </section>
    </>
  );
}

export default Index;
