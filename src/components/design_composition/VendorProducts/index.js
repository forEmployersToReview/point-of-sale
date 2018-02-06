// Modules
import React, { Component } from 'react';
import { PropTypes as T } from 'prop-types';
import { graphql } from 'react-apollo';
import { isUndefined } from 'lodash';

// Components
import Container from '../../elements/Container';
import P from '../../elements/P';
import H2 from '../../elements/H2';
import Image from '../../elements/Image';
import Section from '../../elements/Section';
import Span from '../../elements/Span';
import Icon from '../../elements/Icon';

// Graphql query
import { vendor_inventory } from '../../../utils/graph_queries.js';

class VendorProducts extends Component {
  constructor() {
    super();
    this.state = {
      product_list: {}
    };

    this.updateProductList = this.updateProductList.bind(this);
  }

  updateProductList(title, up, price) {
    // A productID would be helpful for storage.
    // I will inster the products to be purchased at the state layer.
    // There's payment processing cases to be handled in here, db updates, validations and more.
    // The idea to create the UI to behave as expected will be fulfilled with this assignment
    // With more time available I could make this not only nicer but more performant.
    // e.g: I didn't think I would need a global store for this assignemnt,
    // but as the application started to grow, the need for a better data flow management arised.
    const { product_list } = this.state;
    let quantity = 0;
    let total = price;
    const list_item = product_list[title];

    if (!isUndefined(list_item)) {
      if (up) {
        quantity = list_item.quantity + 1;
        total = quantity * price;
      } else if (list_item.quantity > 1 && !up) {
        quantity = list_item.quantity - 1;
        total = quantity * price;
      }
    } else {
      quantity = 1;
    }

    this.setState({
      product_list: {
        ...product_list,
        [title]: { quantity, total }
      }
    });
  }

  render() {
    const { data } = this.props;
    const { product_list } = this.state;

    if (data.loading) {
      return <Section className="go-flex set-just-center loader" />;
    }

    // Graphql data fetched
    const { products } = data.poc;

    return (
      <Container className="go-flex set-align-center product-container">
        {products.map(({ productVariants }, index) => {
          const { title, price, imageUrl } = productVariants[0];
          const product_info = product_list[title];
          let set_price = price;

          if (product_info) {
            set_price = product_info.total.toFixed(2);
          }

          return (
            <Section key={`${title}${index}`} className="product-item">
              <Image pictureURL={imageUrl} className="product-image" />
              <Section className="go-flex set-vert set-just-between product-content-info">
                <H2 className="product-title">{title}</H2>
                <Section className="go-flex set-just-between">
                  <Section className="go-flex set-just-between product-counter-section">
                    <Span
                      onClick={() => this.updateProductList(title, true, price)}
                    >
                      <Icon className="fas fa-plus product-count-action" />
                    </Span>
                    <P className="product-count-value">
                      {(product_info && product_info.quantity) || 0}
                    </P>
                    <Span
                      onClick={() =>
                        this.updateProductList(title, false, price)}
                    >
                      <Icon className="fas fa-minus product-count-action" />
                    </Span>
                  </Section>
                  <P className="product-price">R${set_price}</P>
                </Section>
              </Section>
            </Section>
          );
        })}
      </Container>
    );
  }
}

VendorProducts.propTypes = {
  data: T.object
};

export default graphql(vendor_inventory(), {
  options: ({ match }) => {
    return {
      variables: {
        id: match.params.vendorId,
        search: '',
        categoryId: 0
      }
    };
  }
})(VendorProducts);
