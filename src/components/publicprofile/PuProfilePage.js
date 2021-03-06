import React, {Component, Fragment} from "react";
import {connect} from 'react-redux';
import {PuProfileComponent} from "./PuProfileComponent";
import {MainLoader} from '../loader/Loader';



class PuProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {fetched, profile, user, tutor} = this.props;
        console.log('3456789kihugyftdfcghjkug',tutor);
        return (

                    !fetched ? <MainLoader/> :

                                <Fragment>
                                    <PuProfileComponent
                                        profile={profile}
                                        user={user}


                                    />
                                </Fragment>

        );
    }
}

const tutorBlank = {
    full_name: "",
    relationship: "",
    email: "",
    phone_number: "",
    cellphone_number: ""
};

const mapStateToProps = (state, ownProps) => ({
    user: state.user.info,
    profile: state.user.info.profile,
    tutor: state.tutor.mytutor.length>0 ? state.tutor.mytutor[0] : tutorBlank,
    fetched: state.user.isFetched
});

PuProfilePage = connect(mapStateToProps)(PuProfilePage);
export default PuProfilePage;