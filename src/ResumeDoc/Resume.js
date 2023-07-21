import './Resume.css'

function Resume({Interests,Skills,Education,Experience,Extracurriculars}){
    const clickHandle=()=>{
        window.print();
    }
    return(
        <div className="parent">  
            <h1>Resume</h1>
            <hr></hr>
            <h2>Interests</h2>
            <ul>
               {Interests.map((Interests,index)=> (<li key={index}>{Interests}</li>))}
            </ul>
            <h2>Skills</h2>
            <ul>
                {Skills.map((Skills,index)=> (<li key={index}>{Skills}</li>))}
            </ul>
            <h2>Education</h2>
            <ul>
                {Education.map((Education,index)=> (<li key={index}>{Education}</li>)) }
            </ul>
            <h2>Experience</h2>
            <ul>
                {Experience.map((Experience,index)=> (<li key={index}>{Experience}</li>)) }
            </ul>
            <h2>Extracurriculars</h2>
            <ul>
                {Extracurriculars.map((Extracurriculars,index)=> (<li key={index}>{Extracurriculars}</li>)) }
            </ul>
            <button onClick={clickHandle} className="printButton"> Print</button>
        </div>
    );
}
export default Resume;