import React from "react";
import "../ToList/Tolist.scss";

function Buttons() {
  return (
    <div className="tudu__btn-box d-flex justify-content-between align-items-center">
      <button className="tudu__btn" id="all">
        All
      </button>
      <button className="tudu__btn" id="complete">
        Complete
      </button>
      <button className="tudu__btn" id="incomplete">
        Incomplete
      </button>
    </div>
  );
}

export default Buttons;
