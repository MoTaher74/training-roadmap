import { useState } from "react";
import Button from "../../UI/Button";

const FindMax =()=>{
    const [input,setInput] = useState<string>(""); //controlled for input field
    
    const [maxNum,setMaxNum] = useState<number|null>(null); //to store max number

    //function to find max number from input
    
    const findMaxNumber = ()=>{
        const arr = input.split(",").map((num)=>Number(num.trim())).filter(num=>!isNaN(num)); //split and convert to number
        const max = Math.max(...arr); //find max using spread operator
        
        setMaxNum(max); //update state

    }
    
    return(
        <div>
            <input type="text" placeholder="[Enter your number]" value={input} onChange={(e)=> setInput(e.target.value)} />
       <Button title="Find Max" onClick={findMaxNumber}/>
         <h1>Max Number is :{maxNum} </h1>
       
        </div>
    )
}


export default FindMax;