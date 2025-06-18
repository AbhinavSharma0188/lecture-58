import { useState } from 'react';
import './App.css';
import ALLCards from './components/ALlcards';
import { data } from './utils/data';
console.log(data);
function App() {
    const [val,setVal]=useState('');
    const [filterData,setFilterData]=useState(data);
  function filterHandler(){
    let res=data.filter((item)=>item.title.toLowerCase().includes(val.toLowerCase()));

  
    setFilterData(res);
  }
  

  return (<div>
   
    <h1>Raste Ka Maal Saste Me</h1>
    
    <div>
      <input type="text" placeholder="Kya Chiye?..."  onChange={(e)=>setVal(e.target.value)}/>  
      <button onClick={filterHandler }>Search</button>

    </div>
    <ALLCards data={filterData}/> 
   
      
    
    
    </div>
  )
}

export default App
