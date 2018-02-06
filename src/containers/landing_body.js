// Modules
import React, { Component } from 'react';
import { PropTypes as T } from 'prop-types';
import { graphql } from 'react-apollo';
import { Route } from 'react-router-dom';
import { isEmpty } from 'lodash';

// Components
import Search from '../components/design_composition/Search';
import VendorFound from '../components/design_composition/VendorsFound';
import ProductLine from '../components/design_composition/ProductLine';
import OrderWalkthrough from '../components/design_composition/OrderWalkthrough';
import VendorProducts from '../components/design_composition/VendorProducts';
import Container from '../components/elements/Container';
import Maps from '../components/elements/GMaps';

// Graphql
import { lookup_vendor } from '../utils/graph_queries.js';

class LandingBody extends Component {
  componentWillReceiveProps(nextProps) {
    const { updatePOS } = this.props;
    const { data, pos, history } = nextProps;
    const { pocSearch } = data;

    if (!isEmpty(pocSearch) && isEmpty(pos)) {
      updatePOS(pocSearch);
      history.push('/find-vendor');
    }
  }

  render() {
    const { pos, findVendors, history, resetSearchState } = this.props;
    const { pathname } = history.location;
    // This classname condition check pattern is very odd and it shouldn't be followed
    // Cases where components should be shown or hidden has to be handled by the route
    // The issue here is that GoogleMaps simply freezes the listener of the search component
    // once the component unmounts, which it makes sense, however after many attemps to try to reboot
    // the listener, I decided to go with the option below.
    const hideSearch = pathname.match('/find-vendor') && 'hide-search';
    const viewMaps = pathname.match('/vendor') ? 'hide-maps' : 'show-maps';

    return (
      <Container className="body-container">
        <Container
          className={`${viewMaps} go-flex set-just-between search-container`}
        >
          <Route
            path="/find-vendor"
            render={props => <VendorFound pos={pos} {...props} />}
          />
          <Search className={hideSearch} />
          <Maps findVendors={findVendors} />
        </Container>
        <Route
          exact
          path={'/vendor/:vendorId'}
          render={props => <VendorProducts {...props} resetSearchState={resetSearchState} />}
        />
        <OrderWalkthrough />
        <ProductLine />
      </Container>
    );
  }
}

LandingBody.propTypes = {
  updatePOS: T.func,
  data: T.object,
  pos: T.array,
  findVendors: T.func
};

export default graphql(lookup_vendor(), {
  options: ({ coordinates }) => {
    const { lat, lng } = coordinates;
    return {
      variables: {
        now: new Date().toISOString(),
        algorithm: 'NEAREST',
        lat: lat.toFixed(6),
        long: lng.toFixed(6)
      }
    };
  }
})(LandingBody);
