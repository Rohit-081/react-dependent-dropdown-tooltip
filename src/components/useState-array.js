import React, {useState} from 'react';
import {data} from "../data";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FaInfoCircle  } from 'react-icons/fa';


const UseStateArray = () => {
    const [people, setPeople] = useState(data);
    const [selected, setSelected] = useState("Hackathon");
    const [ePoint, setEPoint] = useState(0);
    const changeSelectOptionHandler = (e) => {
        setSelected(e.target.value);
    };


    return(
        <React.Fragment>
            <div className="container">
            {
                people.map((person) => {
                    const {id, name, events, totalPoints, description} = person;
                    return (
                        <>
                            <div key={id} className="item">
                                <h4>{name}</h4>
                                <div>
                                    <label>Event Name: </label>
                                    <select onChange={changeSelectOptionHandler}>{events.map((e,i)=>{
                                        return <option value={e.event}>{e.event}</option>})
                                    }
                                    </select> 
                                    <br/>
                                    {events.map((e, i) => {
                                        if(selected == e.event){
                                            return <div key={i}>
                                                <label>Event Points: </label>
                                                <input type="text" id="eventPoint" name="eventPoint" value={e.points} disabled/> 
                                                <Tippy placement='right' content={events.map((e,i)=> {return <div >
                                                    <div><span>{e.event} : </span><span>{e.points}</span>{i+1 === events.length ? <div><span>TotalPoints : </span><span>{totalPoints}</span> </div>: <></>}</div>
                                                </div>})
                                                    }>
                                                        <a ><FaInfoCircle  /></a>
                                                </Tippy> 
                                            </div> 
                                        }
                                            
                                        })
                                    }
                                    
                                    
                                </div>
                                
                                <label>Total Points: </label>
                                <input type="text" id="points" name="points" value={totalPoints} disabled/>
                                <br />
                                <label>Description: </label>
                                <input type="text" id="description" name="description" value={description} disabled/>
                            </div>
                        </>
                    )
                })
            }
            </div>
        </React.Fragment>
    )

}

export default UseStateArray;
