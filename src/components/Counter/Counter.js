import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { inc, dec } from '../../redux/actions';
import './Counter.css';
const Counter = ({inc, dec, id, count, colour, deleteCounter}) => {
  return (
    <div className="counter">
      <span className="counter-contents" style={{
        backgroundColor: colour ? colour : ""
      }}>
        <h4>Counter</h4>
        <Button onClick={()=>dec({id, amount:100})}>
          <i className="material-icons">
          remove
          </i>
        </Button>
        <span className="counter-count">{count}</span>
        <Button onClick={()=>inc({id, amount:100})}>
          <i className="material-icons">
          add
          </i>
        </Button>
      </span>
      <Button onClick={deleteCounter}
        className="btn-remove-counter">
        <i className="material-icons">
        delete
        </i>
      </Button>
    </div>
  );
}
const mapDispatchToProps = {
  inc,
  dec
}
export default connect(undefined, mapDispatchToProps)(Counter);