import * as  React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import * as actionTypes from "../store/actions/actions";

type MyProps = any;

class Button extends Component<MyProps> {
    handleClick() {
        this.props.onClearResults();
        this.props.onStoreResult(this.props.apiList);
    }

    render() {
        return (
            <div>
                <button className="btn btn-primary m-2"
                        onClick={() => this.handleClick()}>Submit
                </button>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    apiList: state.reducer.apiList
});

const mapDispatchToProps = dispatch => {
    return {
        onClearResults: () => dispatch({type: actionTypes.CLEAR_RESULTS}),
        onStoreResult: (apiList) => dispatch(actionTypes.storeResult(apiList))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);