import React from 'react';
import Notes from './Notes';
import { useState } from 'react';
import "./app.css";



function App() {

    const [notes, setnotes] = useState([
  
    ]);
    const [titleu, setTitleu] = useState('');
    const [display,setdisplay]=useState("block");
    const [descriptionu, setDescriptionu] = useState('');
    const[searchelement,setSearchelement] =useState('');
    const[searchelement2,setSearchelement2] =useState('');
  
    function clickhandle() {
      if(notes.length===0){
        setnotes([{ title: titleu, description: descriptionu }]);
        setTitleu('');
        setDescriptionu('');
      }
      else{
        setnotes([...notes, { title: titleu, description: descriptionu }]);
        setTitleu('');
        setDescriptionu('');
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
  
    return (
      <>

      <div className='heading'><h1>Notes</h1></div>
      <div className='searchbar'><input value={searchelement} placeholder='searchbar' onChange={searchevent}></input> <button onClick={handleclick}>Search</button> </div>
      <div className='notelist'>
      {notes.map((value,index) => (
        (searchelement2 === "" || value.title === searchelement2) && (
            <Notes  title={value.title} description={value.description} />
        )
    ))}
      
     
        <div className='inputnote' style={{display:display}}>
           <div className='titlee'> 
            <input type='text' placeholder='Title'onChange={inputevent} value={titleu}/>
            </div>
          <div className='descriptione'>
            <textarea
              placeholder='Description'
              onChange={inputevent2}
              value={descriptionu}
            />
          </div>
  
          <div className='addbutton'>
          <button onClick={clickhandle}>Add</button>
          </div>
        </div>
        </div>
      </>
    );
  }
  
  export default App;
  