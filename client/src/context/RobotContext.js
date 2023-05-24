import { createContext, useContext, useState } from "react";

const RobotContext = createContext();

export const RobotContextProvider = ({children})=>{
    const[robots,setRobots] = useState([]);

    return(
        <RobotContext.Provider value={[robots,setRobots]}>
            {children}
        </RobotContext.Provider>
    )
}

export const useRobotContext = ()=> useContext(RobotContext)