//import { useState } from "react"
import './Botones.css'

export const Botones = ({icon, handleClick}) => {

    // const [nexUsers, setNexUsers] = useState(1);

    
    // const prevClick = () => {
    //     (nexUsers === 1) 
    //     ?setNexUsers(1) 
    //     :setNexUsers(nexUsers - 1)
    // }

    // const nexClick = () => setNexUsers(nexUsers + 1);

    return (
        <div className="btn__box">
            <button 
                className="btn" 
                onClick={handleClick}  
                >{icon}</button>
            <div className="btn__shadow"></div>
            {/* <div className="btn">
                <div>
                    <button className="Button" onClick={prevClick}>
                        {<TiArrowLeftOutline />}
                    </button>
                    <div className="box_sadow"></div>
                </div>
                {nexUsers}
                <div>
                    <button className="Button" onClick={nexClick}>
                        {<TiArrowRightOutline />}
                    </button>
                    <div className="box_sadow"></div>
                </div>
            </div> */}
        </div>
    )
}