import * as  React from 'react';
import {Component} from 'react';
import {connect} from "react-redux";
import * as actionTypes from "../store/actions/actions";

class ApiCheckBox extends Component {
    checkboxes = [
        {name: 'swapi', url: 'https://swapi.co/api/films/'},
        {name: 'jsonplaceholder', url: 'https://jsonplaceholder.typicode.com/todos/'}
    ];

    render() {
        return (
            <div>
                {this.checkboxes.map(c => (
                    <div key={c.url}>
                        <input type='checkbox'
                               onChange={(event) => this.props.onCheckApi(event.target.checked, c.url)}/>
                        < label> Api <span style={{fontWeight: 600}}>{c.name}</span> call</label>
                    </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    apiList: state.reducer.apiList
});

const mapDispatchToProps = dispatch => {
    return {
        onCheckApi: (isChecked, url) => dispatch({
            type: actionTypes.API_CHECKBOX_VALUE,
            payload: {isCheckedBool: isChecked, apiUrl: url}
        })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ApiCheckBox);




