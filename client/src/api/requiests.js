import { BASE_URL } from "./base_url";
import axios from "axios";
//get
export const getAllRobots = async(title)=>{
    let Robots;
    let URL;
    if (!title) {
        URL = BASE_URL+'/robots';
    }
    else{
        URL = BASE_URL+`/robots/?title=${title}`
    }
    await axios.get(URL)
    .then(res =>{ 
       Robots = res.data;
    })

    return Robots
}
//getbyid
export const getRobotByID = async(id)=>{
    let Robot;
    await axios.get(`${BASE_URL}/robots/${id}`)
    .then(res =>{ 
        Robot = res.data;
    })

    return Robot
}
//delete
export const deleteRobotByID = async(id)=>{
    let message;
    await axios.delete(`${BASE_URL}/robots/${id}`).then(res=>{
        message = res.data
    })
    return message
}
//edit
export const editRobotByID = (id,payload)=>{
    axios.put(`${BASE_URL}/robots/${id}`,payload)
}
//post
export const postRobots = (payload)=>{
    axios.post(`${BASE_URL}/robots`,payload)
}
