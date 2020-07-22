import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProductListItem extends Component {
  addProductToCart = () => {
    console.log(this.props.product);
    // TODO: Dispatch here
  };

  render() {
    return (
      <div></div>
      //   <li>
      //     {this.props.product.name}: {this.props.product.price}{' '}
      //     <button onClick={this.addProductToCart}>Add to Cart</button>
      //   </li>
    );
  }
}

const mapStoreToProps = (store) => {
  return { store };
};

export default connect(mapStoreToProps)(ProductListItem);
