import * as  React from 'react';
import {Component} from 'react';
import {connect} from "react-redux";
import * as actionTypes from "../store/actions/actions";
import Checkbox from "./checkbox"

class Results extends Component {
    handleDelete(title, isCheckedBool) {
        this.props.onDelete(title);
        if (isCheckedBool) {
            this.props.onCheck(false)
        }
    }

    render() {
        const searchItems = this.props.results.map(item => (
            <div key={item.title}>
                <Checkbox title={item.title} delete={(isCheckedBool) => this.handleDelete(item.title, isCheckedBool)}/>
            </div>
        ));
        return (
            <div>
                RESULTS
                {searchItems}
            </div>
        );
    }

}

const mapStateToProps = state => ({
    results: state.reducer.results
});

const mapDispatchToProps = dispatch => {
    return {
        onDelete: (title) => dispatch({
            type: actionTypes.DELETE_ITEM,
            payload: title
        }),
        onCheck: (value) => dispatch({type: actionTypes.CHECKBOX_VALUE, payload: value})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Results);




