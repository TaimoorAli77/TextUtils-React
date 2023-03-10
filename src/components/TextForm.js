import React, {useState} from 'react'


export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to upperCase', 'Success');

  }
  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to lowerCase','success');

  }
  const clearClick = ()=>{
    setText('');
    props.showAlert('Text cleared ','success');

  }
  const handleOnChange= (event)=>{
    setText(event.target.value);
  }
  const copyText = ()=>{
    navigator.clipboard.writeText(text);
    props.showAlert('Text Copied','success');

  }
  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert('Extra Spaces Handled','success');
    
  }
  // background-color: #7a7e82;
  // color: white;
  return ( 
    <React.Fragment>
    <div className='container'>
      <h2 className='mb-4'>{props.heading} </h2>
      <div className="mb-3">
        <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor:props.mode ==='dark'?
        'rgb(58 111 153)':'white', color:props.mode==='dark'?'white':'black'}}  value={text} id="myBox" rows="8"/>
        <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={clearClick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={copyText}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleExtraSpaces}>Handle Extra Spaces</button>

      </div>
    </div>
    <div className="container my-3">
      <h2>Your Text Summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words {text.length} characters</p>
      <p> {0.008 * text.split(' ').filter((e)=>{return e.length!==0}).length} Minutes to Read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Nothing to preview'}</p>

    </div>

</React.Fragment>
  )
}
