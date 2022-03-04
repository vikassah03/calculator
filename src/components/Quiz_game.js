import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Quiz_game.css";
function Quiz_game() {
  const questions=[
     {
         questionText : " 1. The HTML tag pre helps in  preserving the ",
         answerOption:[
             {answerText: 'A. Spaces', isCorrect:false},
             {answerText: 'B. Line Breaks', isCorrect:false},
             {answerText: 'C. Listing', isCorrect:false},
             {answerText: 'D. Both A and B', isCorrect:true},
         ],
     },
     {
        questionText : " 2.  An array can be sorted in a reverse manner through the method.",
        answerOption:[
            {answerText: 'A. sort()', isCorrect:false},
            {answerText: 'B. reverse()', isCorrect:true},
            {answerText: 'C. rev.length()', isCorrect:false},
            {answerText: 'D. sort.length()', isCorrect:false},
        ],
    },
    {
        questionText : "3. The non-ASCII characters in URL encoding is replaced with a ",
        answerOption:[
            {answerText: 'A. %', isCorrect:true},
            {answerText: 'B. #', isCorrect:false},
            {answerText: 'C. @', isCorrect:false},
            {answerText: 'D. ?', isCorrect:false},
        ],
    },
    {
        questionText : "4. The JS string method indexOf is same as of",
        answerOption:[
            {answerText: 'A. LastIndexOf()', isCorrect:false},
            {answerText: 'B. PoingIndexOf()', isCorrect:false},
            {answerText: 'C. search()', isCorrect:true},
            {answerText: 'D. find()', isCorrect:false},
        ],
    },
    {
        questionText : " 5. A scalar measurement within a known range is defined via element",
        answerOption:[
            {answerText: 'A. meter', isCorrect:true},
            {answerText: 'B. scalar', isCorrect:false},
            {answerText: 'C. guage', isCorrect:false},
            {answerText: 'D. scale', isCorrect:false},
        ],
    },
    {
        questionText : "6. The JS string method indexOF is not capable of taking powerful search value such as",
        answerOption:[
            {answerText: 'A. Char', isCorrect:false},
            {answerText: 'B. Float', isCorrect:false},
            {answerText: 'C. Experssions', isCorrect:false},
            {answerText: 'D. Regex', isCorrect:true},
        ],
    },
    
    
     ];
     
    const [first, setfirst] = useState(0)
  const answer=(a)=>{
   return setfirst(a + first)
  }
  return (
    <div className="Quiz_app_parent">
      <div className="Quiz_game_parent">
        <div className="AP_name_time">
          <div className="AP_name">
            <h3>Awesome Quiz Application</h3>
          </div>
          <div className="time-left_parent">
            <p className="time_left">Time left </p>
          </div>
        </div>
        <div>
          <h3 className="Ques_1">
            {questions[first].questionText}
          </h3>
        </div>
        <div className="Ans-option-parent">
          {questions[first].answerOption.map((answerOption) =>(
           <button className="Ans-option">{answerOption.answerText}</button>
          ))}
        </div>
        <div className="no-ques-next-que_btn-parent">
          <div className="no-ques"><h3>questions 1/</h3><span>{questions.length}</span></div>
          <div className="next-que_btn-parent">
              <div className="lft_icans_txt">
                <button onClick={() =>answer(1)} >next page</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz_game;
