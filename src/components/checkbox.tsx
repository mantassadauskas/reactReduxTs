import * as  React from 'react';
import {Component} from 'react';
import * as actionTypes from "../store/actions/actions";
import {connect} from "react-redux";

class CheckBox extends Component {
    state = {
        isChecked: false
    };

    handleCheck = (isCheckedBool) => {
        this.props.onCheck(isCheckedBool);
        this.setState({isChecked: isCheckedBool});
    };

    render() {
        return (
            <div>
                <input type='checkbox'
                       onChange={(event) => this.handleCheck(event.target.checked)}
                />
                < label>{this.props.title}</label>
                <button className="btn btn-secondary m-1 btn-sm p-0"
                        onClick={()=>this.props.delete(this.state.isChecked)}
                        >
                    Delete
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
        onDelete: (isChecked) => dispatch({
            type: actionTypes.DELETE_ITEM,
            payload: {isCheckedBool: isChecked}
        }),
        onCheck: (isChecked) => dispatch({
            type: actionTypes.CHECKBOX_VALUE,
            payload: isChecked
        })
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(CheckBox);




