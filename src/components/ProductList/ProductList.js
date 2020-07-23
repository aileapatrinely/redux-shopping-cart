import React, { Component } from 'react';
import ProductListItem from '../ProductListItem/ProductListItem';
import { connect } from 'react-redux';

class ProductList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.store.productReducer.map((product, index) => {
            return (
              <ProductListItem key={index} product={product} index={index} />
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return { store };
};

export default connect(mapStoreToProps)(ProductList);
