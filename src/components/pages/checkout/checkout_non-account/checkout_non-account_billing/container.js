import { connect } from 'react-redux';
import {requestInfo} from '../../../../../state/actions/checkout/info';
import {requestTarjeta} from '../../../../../state/actions/checkout/info';
import CheckoutNonAccountBilling from './index';

const mapStateToProps = (state, ownProps) => ({
    info : state

});

const mapDispatchToProps = (dispatch) =>({
    requestTarjeta(e){
        dispatch(requestTarjeta(e))
    },

});

const CheckoutBilling= connect(
    mapStateToProps,
    mapDispatchToProps
)(CheckoutNonAccountBilling );

export default CheckoutBilling;