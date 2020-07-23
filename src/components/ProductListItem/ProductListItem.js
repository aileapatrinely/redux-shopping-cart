import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProductListItem extends Component {
  addProductToCart = () => {
    console.log(this.props.product);
    this.props.dispatch({
      type: 'ADD_TO_CART',
      payload: this.props.product,
    });
  };

  removeProduct = () => {
    this.props.dispatch({
      type: 'REMOVE_FROM_STORE',
      payload: this.props.index,
    });
  };

  render() {
    return (
      <li>
        {this.props.product.name}: {this.props.product.price}{' '}
        <button onClick={this.addProductToCart}>Add to Cart</button>
        <button onClick={this.removeProduct}>Remove Product</button>
      </li>
    );
  }
}

const mapStoreToProps = (store) => {
  return { store };
};

export default connect(mapStoreToProps)(ProductListItem);
