import React from 'react';
import ReactDOM from 'react-dom';
import Cow from './cow_small.png';
import {Link} from 'react-router-dom';


// I adapted this code from https://upmostly.com/tutorials/modal-components-react-custom-hooks
const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <img className="cow-modal" src={Cow} alt="cow"></img>
        <hr></hr>
        <p>
          GAME OVER!
        </p>
        <div className="modal-links">
            <Link to='/records'><button className="modal-btn1">Go to High Scores</button></Link>
            <button onClick={() => window.location.reload(false)} className="modal-btn2">Play again</button>
            <Link to='/home'><button className="modal-btn3">Quit already</button></Link>
        </div>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;