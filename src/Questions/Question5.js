import React from "react";
import { Link } from "react-router-dom";
function Question5() {
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
         6. The JS string method indexOf is same as of
        </h3>
      </div>
      <div className="Ans-option-parent">
        <div className="Ans-option"><p className="ans_text">A. LastIndexOf()</p></div>
        <div className="Ans-option"><p className="ans_text">B. PoingIndexOf()</p></div>
        <div className="Ans-option"><p className="ans_text">C. search()</p></div>
        <div className="Ans-option"><p className="ans_text">D. find()</p></div>
      </div>
      <div className="no-ques-next-que_btn-parent">
        <div className="no-ques">1 0f questions</div>
        <div className="next-que_btn-parent">
          <Link to="/Question6" className="link_d_None">
        <div className="lft_icans_txt">
        <button>next page</button>
        </div>
      </Link>
        </div>
      </div>
    </div>
  );
}

export default Question5;
