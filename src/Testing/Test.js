import { useState } from 'react';
const Test=({getColor})=>{
    const [color,setColor]=useState(null);

    const changeHandler=(e)=>{
        setColor(e.target.value);
    }
    const clickhandler=(color)=>{
       
        getColor(color);
    };
    return(
        <div style={{marginLeft:"40%"}}>
        <form>
            <input type="text" placeholder="tittle" onChange={changeHandler}></input>
            <button onClick={()=>{clickhandler(color)}} style={{display:"block"}}> submit</button>
        </form>
        <div style={{color:"black"}}>{color}</div>
        </div>
    );
}
export default Test;