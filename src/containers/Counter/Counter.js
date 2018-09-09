import React, { Component } from 'react';
import {connect} from 'react-redux'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionCreators from '../../store/actions/index';

class Counter extends Component {
    render () {
        const resultList = this.props.resultList.map((result, index) => {
            return (<li key={index} onClick={() => this.props.onDeleteResult(index)}>{result}</li>);
        });

        console.log(this.props.resultList);

        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrement}  />
                <CounterControl label="Add 5" clicked={() => this.props.onAdd(5)}  />
                <CounterControl label="Subtract 5" clicked={() => this.props.onSubtract(5)}  />
                <hr/>
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {resultList}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ctr: state.ctr.counter,
        resultList: state.res.results
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrement: () => dispatch(actionCreators.decrement()),
        onAdd: (value) => dispatch(actionCreators.add(value)),
        onSubtract: (value) => dispatch(actionCreators.subtract(value)),
        onStoreResult: (counter) => dispatch(actionCreators.storeResultAsync(counter)),
        onDeleteResult: (index) => dispatch(actionCreators.deleteResultAsync(index))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);