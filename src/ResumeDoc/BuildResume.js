import './BuildResume.css';
import { useState, useReducer } from 'react';

const initialState = {
  Interests: [],
  Skills: [],
  Education: [],
  Experience: [],
  Extracurriculars: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SetField':
      return { ...state, [action.field]: [...state[action.field], action.value] };
    case 'Submit':
      action.getData(state);
      return initialState;
    default:
      return state;
  }
};

const BuildResume = ({getData}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputValues, setInputValues] = useState({
    Interests: '',
    Skills: '',
    Education: '',
    Experience: '',
    Extracurriculars: ''
  });

  const handleAddition = (target) => {
    dispatch({ type: 'SetField', field: target, value: inputValues[target] });
    setInputValues({ ...inputValues, [target]: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };
  const submitData = (e) => {
    e.preventDefault();
    dispatch({ type: 'Submit',getData });
    console.log("resumebuilder",state);
  };
  
  return (
    <div className="ResumeBuilder">
      <div>
      <form>
        <table>
         
          <tr>
            <td><label>Interests: </label></td>
            <td><input type="text" name="Interests" value={inputValues.Interests} onChange={handleChange} /></td>
            <td><button type="button" onClick={() => handleAddition('Interests')}>Add</button></td>
          </tr>
          <tr>
            <td><label>Skills:</label></td>
            <td><input type="text" name="Skills" value={inputValues.Skills} onChange={handleChange} /></td>
            <td><button type="button" onClick={() => handleAddition('Skills')}>Add</button></td>
          </tr>
          <tr>
            <td><label>Education:</label></td>
            <td><input type="text" name="Education" value={inputValues.Education} onChange={handleChange} /></td>
            <td><button type="button" onClick={() => handleAddition('Education')}>Add</button></td>
          </tr>
          <tr>
            <td><label>Experience:</label></td>
            <td><input type="text" name="Experience" value={inputValues.Experience} onChange={handleChange} /></td>
            <td><button type="button" onClick={() => handleAddition('Experience')}>Add</button></td>
          </tr>
          <tr>
            <td><label>Extracurriculars:</label></td>
            <td><input type="text" name="Extracurriculars" value={inputValues.Extracurriculars} onChange={handleChange} /></td>
            <td><button type="button" onClick={() => handleAddition('Extracurriculars')}>Add</button></td>
          </tr>
          <tr>
            <td><button onClick={submitData}>Submit</button></td>
          </tr>
        </table>
      </form>
      </div>
      
    </div>
  );
};

export default BuildResume;
