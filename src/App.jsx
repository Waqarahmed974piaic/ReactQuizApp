import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

function App() {
  const [questions, setQuestions] = useState([{
    question: "Who is the founder of Pakistan?",
    options: ["Quaid-e-Azam", "Allam-e-iqbal", "Sir Syed Ahemd Khan"],
    correctAns: "Quaid-e-Azam"
  }, {
    question: "What is the abbrevation of HTML",
    options: ["Hyper Text Markup Language", "Markup Language", "Hybrid Markup Language"],
    correctAns: "Hyper Text Markup Language"
  }, {
    question: "What is the abbrevation of CSS",
    options: ["Cascading Style Sheets", "Cisco Style Sheets", "Cascading Style Shoot", "Cascading Stole Sheets"],
    correctAns: "Cascading Style Sheets"
  }])
  const [ind, setInd] = useState(0)
  const [showButton, setShowButton] = useState(true)
  const [score, setScore] = useState(0)
  const [hideResult, showResult] = useState(false)
  const [chooseOption, setChooseOption] = useState('')
  const [answer, setAnswer] = useState('')
  const [bgColor, setBgColor] = useState(false)
  const [id, setId] = useState(null)
  const GetScore = () => {
    if (JSON.stringify(chooseOption) == JSON.stringify(answer)) {
      setScore(score + 1)
    }
  }
  function ShowResult() {
    if (JSON.stringify(chooseOption) == JSON.stringify(answer)) {

      setScore(score + 1)
    }
    showResult(true)
  }
  const onChange = (e) => {
    if (e != null) {
      ChangeColor()
      var currentDiv = document.getElementById(e)
      currentDiv.style.backgroundColor = 'blue';
    }
  }
  function ChangeColor() {
    questions[ind].options.map((e, i) => {
      var currentDiv = document.getElementById(i);
      currentDiv.style.backgroundColor = 'yellow';
    })
  }
  return (
    <div className="App">
      {!hideResult ? <>
        <div className='container bg-primary mt-5 rounded p-3'>
          <h2>Question {ind + 1} of {questions.length}</h2>
        </div>
        <div className='container-md my-5 p-2 bg-light rounded'>
          <h5>{questions[ind].question}</h5>
        </div>
        <div className='container-xl rounded my-5 p-3'>
          {

            questions[ind].options.map((e, i) => {
              return <div className="row" key={i}><div id={i} className='col-8 my-2 p-3 rounded-start d-flex justify-content-start' style={{ backgroundColor: 'yellow' }} onClick={() => { setChooseOption(e); setAnswer(questions[ind].correctAns); onChange(i) }}>{e}</div></div>
            })
          }
        </div>
        {ind + 1 === questions.length ? <button type="button" className="btn btn-secondary btn-md" onClick={() => ShowResult()}>Submit</button> : <button type="button" className="btn btn-secondary btn-md" onClick={() => { setInd(ind + 1); GetScore(); ChangeColor() }}>Next</button>}
      </> : null
      }
      {hideResult ? <div className='container mt-5'><h2>Your Score {score} out of {questions.length}</h2></div> : null}
    </div >
  );
}

export default App;
