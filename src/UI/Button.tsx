import type { ButtonHTMLAttributes} from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>{
title:string

}

const Button =({title,...rest}:IProps)=>{
return <button className="bg-black p-2 rounded-lg m-2 text-xl text-teal-300" {...rest}>{title}</button>

}

export default Button ;