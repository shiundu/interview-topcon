import { connect } from 'react-redux';
import { State } from '../reducers';
import { getProducts } from '../selectors';
import {  initialProductList, deleteProduct, updateProduct } from '../actions';
import ProductList from '../components/ProductList';

const mapStateToProps = (state: State) => ({
  products: getProducts(state)
});

const mapDispatchToProps = {
  initialProductList: initialProductList,
  deleteProduct: deleteProduct,
  handleSubmit: updateProduct
};

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(ProductList);