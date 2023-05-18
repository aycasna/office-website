import './App.css';
import React, {useState} from 'react';

function App() {
  const [returnedData, setReturnedData] = useState(['hi there']);
  const getData = async (url) => {
    const newData = await fetch(url, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(res => res.json);
    console.log(newData);
    setReturnedData(newData.result)
  }


  return (
    <div className="App">
      <input 
        type="number" 
        name="EmployeeID" 
        placeholder="EmployeeID" 
        ></input>
      <input 
        name="FirstName" 
        placeholder="First Name" 
        ></input>
      <input 
        name="LastName" 
        placeholder="Last Name" 
        ></input>
      <input 
        type="number" 
        name="Age" 
        placeholder="Age" 
        ></input>
      <input 
        name="Gender" 
        placeholder="Gender" 
        ></input>

      <button onClick={() => getData('/quit')}>Click</button>
      <p>EmployeeID: {returnedData.EmployeeID}</p>
      <p>FirstName: {returnedData.FirstName}</p>
      <p>LastName: {returnedData.LastName}</p>
      <p>Age: {returnedData.Age}</p>
      <p>Gender: {returnedData.Gender}</p>
    </div>
  );
}

export default App;
