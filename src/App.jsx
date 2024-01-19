import React from 'react';
import Notes from './Notes';
import { useState } from 'react';
import "./app.css";



function App() {

    const [notes, setnotes] = useState([
  
    ]);
    const [titleu, setTitleu] = useState('');
    const [colouru, setColouru] = useState('#AFF4C6');
    const [display,setdisplay]=useState("block");
    const [descriptionu, setDescriptionu] = useState('');
    const[searchelement,setSearchelement] =useState('');
    const[searchelement2,setSearchelement2] =useState('');
  
    function clickhandle() {
      if(notes.length===0){
        setnotes([{ title: titleu, description: descriptionu  ,colour:colouru}]);
        setTitleu('');
        setDescriptionu('');
        setColouru('#AFF4C6');
      }
      else{
        setnotes([...notes, { title: titleu, description: descriptionu ,colour:colouru}]);
        setTitleu('');
        setDescriptionu('');
        setColouru('#AFF4C6');
      }
    }
  
    function inputevent(event) {
      setTitleu(event.target.value);
    }
  
    function inputevent2(event) {
      setDescriptionu(event.target.value);
    }

    function searchevent(event){
      setSearchelement(event.target.value);
      

    }

    const handleclick=()=>{
      setSearchelement2(searchelement);
      if(searchelement===""){
        setdisplay("block");
      }
      else{
        setdisplay("none");
      }
    }

    function handlecolour(value){
      setColouru(value);
    }

  
    return (
      <>

      <div className='heading'><h1>Notes</h1></div>
      <div className='searchbar'><input value={searchelement} placeholder='searchbar' onChange={searchevent}></input> <button onClick={handleclick}>Search</button> </div>
      <div className='notelist'>
      {notes.map((value,index) => (
        (searchelement2 === "" || value.title === searchelement2) && (
            <Notes  title={value.title} description={value.description} colour={value.colour} />
        )
    ))}
      
     
        <div className='inputnote' style={{display:display ,backgroundColor:colouru}}>
           <div className='titlee'> 
            <input type='text' placeholder='Title' onChange={inputevent} value={titleu}/>
            </div>
          <div className='descriptione'>
            <textarea
              placeholder='Description'
              onChange={inputevent2}
              value={descriptionu}
            />
          </div>
  
          <div className='addbutton'>
          
          <div className='colourbutton'> colour
                  <div className='dropdowncontent'>
                     <label><input type='radio' name='color' onChange={() => handlecolour("#FFBDF2")}/><div className='divbox'  style={{backgroundColor:"#FFBDF2"}}></div></label>
                       <label><input type='radio' name='color' onChange={() => handlecolour("#A0C4FF")} /><div className='divbox' style={{backgroundColor:"#A0C4FF"}}></div></label>
                       <label><input type='radio' name='color' onChange={() => handlecolour("#D0F4DE")} /><div className='divbox'  style={{backgroundColor:"#D0F4DE"}}></div></label>
                       <label><input type='radio' name='color' onChange={() => handlecolour("#FFD700")} /><div className='divbox' style={{backgroundColor:"#FFD700"}}></div></label>
                       <label><input type='radio' name='color' onChange={() => handlecolour("#FF7F50")} /><div className='divbox' style={{backgroundColor:"#FF7F50"}}></div></label>    

          </div>
            </div>
            <button onClick={clickhandle}>Add</button>
            </div>
        </div>
        </div>
      </>
    );
  }
  
  export default App;
  