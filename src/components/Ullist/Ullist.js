import React from "react";

function Ullist(props) {
  return (
    <ul className="tudu__list" id="list">
      <li className="tudu__item anim_item pb-4 d-flex justify-content-between">
        <p
        onClick={props.changeCompletet}
        className="tudu__item_tit">{props.name}</p>
        <button onClick={() => props.removed(props.id)} className="tudu__item_btn">
          <i class="bx bx-x"></i>
        </button>
      </li>
    </ul>
  );
}

export default Ullist;
