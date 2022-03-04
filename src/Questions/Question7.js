import React from "react";
function Question7() {
  return (
    <div className="Quiz_game_parent">
      <div className="AP_name_time">
        <div className="AP_name">
          <h3>Awesome Quiz Application</h3>
        </div>
        <div className="time-left_parent">
          <p className="time_left">Time left</p>
        </div>
      </div>
      <div>
        <h3 className="Ques_1">
         8. The JS string method indexOF is not capable of taking powerful search value such as
        </h3>
      </div>
      <div className="Ans-option-parent">
        <div className="Ans-option"><p className="ans_text">A. Char</p></div>
        <div className="Ans-option"><p className="ans_text">B. Float</p></div>
        <div className="Ans-option"><p className="ans_text">C. Experssions</p></div>
        <div className="Ans-option"><p className="ans_text">D. Regex</p></div>
      </div>
      <div className="no-ques-next-que_btn-parent">
        <div className="no-ques">1 0f questions</div>
        <div className="next-que_btn-parent">
          <button>Next Question</button>
        </div>
      </div>
    </div>
  );
}

export default Question7;
