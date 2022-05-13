import React, {useState} from "react"
import "./Button.css"

const Button = (props) => {

    const [msg, setMsg] = useState(0)

    let multiply=()=>{
        let a=parseInt(props.one)
        let b=parseInt(props.two)
        let multi=(a * b)
        setMsg(multi) 
    }

    let divide=()=>{
        let a=parseFloat(props.one)
        let b=parseFloat(props.two)
        let div=(a/b)
        setMsg(div)
    }


   
    return(
        <>
            <div className="button">
                <button type='submit' onClick={multiply} id='mul'>Multiply</button>
                <button type='submit' onClick={divide} id='div'>Divide</button>
            </div>
            
            <div className='result'>
                <p>The Result is:</p>
                <p>{msg}</p>
            </div>
        </>
    );
}

export default Button;