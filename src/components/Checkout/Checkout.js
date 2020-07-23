import React, { Component } from 'react';
import { connect } from 'react-redux';

class Checkout extends Component {
  handleCheckout = () => {
    this.props.dispatch({
      type: 'CLEAR_CART',
    });
  };

  handleDelete = (index) => (event) => {
    this.props.dispatch({
      type: 'REMOVE_FROM_CART',
      payload: index,
    });
  };

  render() {
    return (
      <div>
        <h2>Checkout</h2>

        {this.props.store.checkoutReducer.map((product, index) => {
          return (
            <li key={index} index={index} product={product}>
              {product.price}
              {'  '}
              {product.name}
              <button onClick={this.handleDelete(index)}>Remove</button>
            </li>
          );
        })}
        <button onClick={this.handleCheckout}>Checkout</button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return { store };
};

export default connect(mapStoreToProps)(Checkout);
