import './App.css';
import Resume from './ResumeDoc/Resume.js';
import data from './data/data.js';
import BuildeResume from './ResumeDoc/BuildResume';
import { useState } from 'react';

function App() {
  const [newData,setNewData]=useState([...data]);
  const getData=(input)=>{
    setNewData([...newData,input]);
    console.log(newData);
  }

  let box = document.querySelector('.Resume');

  const btnpressprev = () => {  
    if(box){
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
    console.log(width)}
}

const btnpressnext = () => {
  if(box){
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
    console.log(width)}
}
  
  return (
    <div className="App">
      <div className="heading">Make Your Own Resume</div>
      <div><BuildeResume getData={getData}></BuildeResume></div>
      <div className="product-carousel">
        <button className="pre-btn" onClick={btnpressprev}><p>&lt;</p></button>
        <button className="next-btn" onClick={btnpressnext}><p>&gt;</p></button>
        <div className="Resume">
            {newData.map((dataItem, index) => (
              <Resume
                key={index} 
                Interests={dataItem.Interests}
                Skills={dataItem.Skills}
                Education={dataItem.Education}
                Experience={dataItem.Experience}
                Extracurriculars={dataItem.Extracurriculars}
                />
            ))}
          
        </div>
      </div>
    </div>
  );
}
export default App;
