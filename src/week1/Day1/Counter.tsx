/**
 * اعمل project جديد React .

اعمل Counter App:

زرار Increment.

زرار Decrement.

زرار Reset.

استخدم useState وتأكد إن buttons شغالين.
 */

import { useState } from "react";
import Button from "../../UI/Button";


const Counter = ()=>{
    const[num,setNum]=useState(0);
    const increse =()=>{
       return setNum(i=> i+1)
    }
    const decrese =()=>{
      return setNum(i=> i-1);
        
    }
    const reset =()=>{
      return setNum(0);
        
    }
    return(
        <div>
        <p>Counter No. : {num}</p>
        <div className="flex items-center justify-center gap-4">
            <Button title={"+"} onClick={increse}/>
            <Button title="-" onClick={decrese}/>
            <Button title="Reset" onClick={reset}/>
        </div>
        </div>
    )
}

export default Counter;