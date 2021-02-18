import { useEffect, useState } from "react";

export function Modal({ display, children, title, exitBtnFn, style }) {
  const [show, setShow] = useState(display);

  return (
    <div className={`modal display-${display}`} style={style}>
      <div className="modal-controls">
        <span>{title}</span>
        <button className={"fab"} onClick={exitBtnFn}><span>&#10005;</span></button>
      </div>
      {children}
    </div>
  );
}
