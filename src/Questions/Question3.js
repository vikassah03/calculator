import React from "react";
import { Link } from "react-router-dom";
function Question3() {
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
         4.  An array can be sorted in a reverse manner through the method.
        </h3>
      </div>
      <div className="Ans-option-parent">
        <div className="Ans-option"><p className="ans_text">A. sort()</p></div>
        <div className="Ans-option"><p className="ans_text">B. reverse()</p></div>
        <div className="Ans-option"><p className="ans_text">C. rev.length()</p></div>
        <div className="Ans-option"><p className="ans_text">D. sort.length()</p></div>
      </div>
      <div className="no-ques-next-que_btn-parent">
        <div className="no-ques">1 0f questions</div>
        <div className="next-que_btn-parent">
          <Link to="/Question4" className="link_d_None">
        <div className="lft_icans_txt">
        <button>next page</button>
        </div>
      </Link>
        </div>
      </div>
    </div>
  );
}

export default Question3;
