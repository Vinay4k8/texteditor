import React ,{useState}from 'react'

export const TextForm = (props) => {
    const [text,setText]=useState("")
    const handleOnUpper=()=>{
        setText(text.toUpperCase())
    }
    const handleOnLower=()=>{
        setText(text.toLowerCase())
    }
    const handleOnChange=(e)=>{
        setText(e.target.value);
    }
    const handleOnCopy=()=>{
        navigator.clipboard.writeText(text);
    }
    const handleOnClear=()=>{
        setText("")
    }

  return (
    <div className='container'>
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label"><h1>Enter text for operations</h1></label>
            <textarea value={text} onChange={handleOnChange} className={`form-control ${props.mode==="light"?"":"light-card"}`} id="exampleFormControlTextarea1" rows="10"></textarea>
        </div>
        <button onClick={handleOnUpper} className='btn mx-2 mt-1'>convert to Uppercase</button>
        <button onClick={handleOnLower} className='btn mx-2 my-1'>convert to Lowercase</button>
        <button onClick={handleOnCopy} className='btn mx-2 my-1'><i className="fa-regular fa-copy"></i></button>
        <button onClick={handleOnClear} className='btn mx-2 my-1'>Clear</button>
        <div>
            <h1>Your text summary</h1>
            <p>{text.replace(/ /g,"").length} characters, {text.split(" ").length-1} words</p>
            <p>Avg time to read {(text.split(" ").length-1)*0.5} sec or {(text.split(" ").length-1)*0.5/60}min</p>
        </div>
    </div>
  )
}
