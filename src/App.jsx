import './App.css'
import { useState } from 'react'



function App() {

  const [inputarr, setInputarr]=useState([])

   const [inputdata,SetInputdata]=useState({
       name: "",
       rollNo: ""
   })


  function changehandle(e) {

      SetInputdata({...inputdata,[e.target.name]:e.target.value})


  }

  let {name , rollNo}=inputdata;
  function changehandle(){
    setInputarr([...inputarr,{name,rollNo}])
    console.log(inputarr);
    console.log(inputdata);
    SetInputdata({name:"",rollNo:""})
  }

  return (
    <>
       <div className='App'>
         <input type="text" autoComplete='off'   name="name" value={inputdata.name}  onChange={changehandle}/><br /><br />
      
         <input type="text" autoComplete='off' name="rollNo" value={SetInputdata.rollNo}  onChange={changehandle}/>
 

           <button onClick={changehandle}>add</button>
       </div>
    </>
  )
}

export default App
