import React from "react";
import { Link } from "react-router-dom";
function Question4() {
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
         5. The non-ASCII characters in URL encoding is replaced with a 
        </h3>
      </div>
      <div className="Ans-option-parent">
        <div className="Ans-option"><p className="ans_text">A. %</p></div>
        <div className="Ans-option"><p className="ans_text">B. #</p></div>
        <div className="Ans-option"><p className="ans_text">C. @</p></div>
        <div className="Ans-option"><p className="ans_text">D. ?</p></div>
      </div>
      <div className="no-ques-next-que_btn-parent">
        <div className="no-ques">1 0f questions</div>
        <div className="next-que_btn-parent">
          <Link to="/Question5" className="link_d_None">
        <div className="lft_icans_txt">
        <button>next page</button>
        </div>
      </Link>
        </div>
      </div>
    </div>
  );
}

export default Question4;
