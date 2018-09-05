import { connect } from 'react-redux';
import {request_product} from '../../../../../state/actions/checkout_review/index'
import CheckoutReviewProducts from './index';

const mapStateToProps = (state, ownProps) => ({
    data:state.product_request.data
});

const mapDispatchToProps = (dispatch) =>({
    request_product(){
        dispatch(request_product())
    }
});

const CheckoutReviewProductsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CheckoutReviewProducts );

export default CheckoutReviewProductsContainer;