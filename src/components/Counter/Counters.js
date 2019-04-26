import React from 'react';
import Counter from './Counter';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { createCounter, deleteCounter } from '../../redux/actions';
const Counters = ({createCounter, deleteCounter, counters}) => {
  return (
    <div className="counters">
      {
        Object.entries(counters).map(([id, {colour, count}]) => {
          return (
            <Counter key={"counter-"+id}
              colour={colour}
              count={count}
              id={id}
              deleteCounter={()=>deleteCounter(id)}/>
          );
        })
      }
      <Button onClick={()=>{
        createCounter();
        setTimeout(()=>window.scrollBy(0,120),0);
      }}
        className="btn-create-counter">
        <i className="material-icons">
        add_circle
        </i>
      </Button>
      
    </div>
  );
}
const mapStateToProps = ({ counters }) => {
  return {
    counters
  }
}
const mapDispatchToProps = {
  createCounter,
  deleteCounter
}
export default connect(mapStateToProps, mapDispatchToProps)(Counters);