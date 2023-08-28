import React,{useState} from 'react'

export default function About() {

    const [myStyle, setMyStyle] = useState({
        color:"black",
        backgroundColor:'white'
        
    });
    
    const [btntext, setBtnText] = useState("Enable Dark Mode")

    const toggleMode=()=>{
        if(myStyle.color==='black')
        {
            setMyStyle({
                color:'white',
                backgroundColor:'black'
            })
            setBtnText("Enable Light Mode")
        }
        else{
            setMyStyle({
                color:'black',
                backgroundColor:'white'
            })
            setBtnText("Enable Dark Mode");
        }
    }

  return (
    <div classNameName='container' style={myStyle}>
        <h2>About Us</h2>
      <div className="accordion"  id="accordionExample">
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Function #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Converts all the letters into capital letters.</strong> 
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Function #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Converst all the letters into lowercase letters.</strong> 
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Function #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Copies the typed message on clipboard.</strong> 
      </div>
    </div>
  </div>
</div>
<button className="btn btn-primary my-3" type='button' onClick={toggleMode}>{btntext}</button>
    </div>
  )
}
