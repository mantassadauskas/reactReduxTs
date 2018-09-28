import * as  React from 'react';
import {Component} from 'react';
import {connect} from "react-redux";

type MyProps = any;
class Navbar extends Component<MyProps> {

    render() {
        return (
            <div>
                <div className="d-block m-5">Selected Count: {this.props.selectedCount}</div>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    selectedCount: state.reducer.selectedCount
});

export default connect(mapStateToProps, null)(Navbar);




