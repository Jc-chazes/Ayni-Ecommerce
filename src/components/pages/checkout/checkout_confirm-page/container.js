import { connect } from 'react-redux';
import CheckoutConfirmPage from './index';


const mapStateToProps = (state, ownProps) => ({
    state: state,
});


const CheckoutConfirmPageContainer = connect(
    mapStateToProps
)(CheckoutConfirmPage);

export default CheckoutConfirmPageContainer;