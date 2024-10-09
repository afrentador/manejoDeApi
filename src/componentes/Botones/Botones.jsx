//import { useState } from "react"
import './Botones.css'

export const Botones = ({icon, handleClick}) => {

    return (
        <div className="btn__box">
            <button 
                className="btn" 
                onClick={handleClick}  
                >{icon}</button>
            <div className="btn__shadow"></div>
        </div>
    )
}