import React, { Component } from 'react';
import { connect } from 'react-redux';

class Checkout extends Component {
  handleCheckout = () => {
    this.props.dispatch({
      type: 'CLEAR_CART',
      payload: this.props.index,
    });
  };

  render() {
    return (
      <div>
        <h2>Checkout</h2>

        {this.props.store.checkoutReducer.map((product, i) => {
          return (
            <li key={i}>
              {product.price}
              {'  '}
              {product.name}
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
