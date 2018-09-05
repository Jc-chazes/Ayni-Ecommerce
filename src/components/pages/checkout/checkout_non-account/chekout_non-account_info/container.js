import { connect } from 'react-redux';
import {requestInfo} from '../../../../../state/actions/checkout/info';
import {requestTarjeta} from '../../../../../state/actions/checkout/info';
import CheckoutNonAccountInfo from './index';

const mapStateToProps = (state, ownProps) => ({
    info : state

});

const mapDispatchToProps = (dispatch) =>({
    requestInfo(e){
        dispatch(requestInfo(e))
    },
});

const CheckoutInfo = connect(
    mapStateToProps,
    mapDispatchToProps
)(CheckoutNonAccountInfo );

export default CheckoutInfo;