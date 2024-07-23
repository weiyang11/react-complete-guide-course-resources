import React, { useRef } from 'react';
import ReactDOM from 'react-dom';

const Model =  React.forwardRef(function Model({children, buttonCaption}, ref) {
  const dialog = useRef();

  React.useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal()
      },
    };
    });

  return ReactDOM.createPortal(
    <dialog ref={dialog}>
      {children}
      <form method="dialog">
        <button >{buttonCaption}</button>
      </form>
    </dialog>
  , document.getElementById('modal-root'));
});

export default Model
