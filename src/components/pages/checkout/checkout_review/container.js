import { connect } from 'react-redux';
import CheckoutReview from './index';


const mapStateToProps = (state, ownProps) => ({
    states:state.add_product.data_car
});


const CheckoutReviewContainer = connect(
    mapStateToProps
)(CheckoutReview);

export default CheckoutReviewContainer;