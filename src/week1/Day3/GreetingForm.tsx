import { useState } from "react";
import Button from "../../UI/Button";

const GreetingForm =()=>{
    const [input,setInput] = useState<string>("");
    const [name,setName] = useState<string>("");
    const submitHandler =(e:React.FormEvent)=>{
        e.preventDefault();
        setName(input);
    }
return (<form onSubmit={submitHandler}>
    <input type="text" placeholder="Enter your name" value={input} onChange={(e)=> setInput(e.target.value)} />
    <Button title="Submit"/>
    {name && <h1>Hello ,{name}</h1>}

</form>
)
}

export default GreetingForm ;