// Modules
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { PropTypes as T } from 'prop-types';

// Componentns
import Section from '../components/elements/Section';
import Header from '../components/design_composition/Header';
import Body from './landing_body';
import Footer from '../components/design_composition/Footer';

// Helpers
import { process_input_search } from '../components/elements/GMaps/helper';
import { load_script } from '../utils';

class App extends Component {
  constructor() {
    super();
    this.state = {
      coordinates: {
        lat: 0,
        lng: 0
      },
      pos: []
    };
  }

  componentDidMount() {
    // Faking a dom script call of the maps API after virtual dom renders App Component.
    const mapsURL = 'https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCL8UIMezYxj5-Q_Eclk9BSvGsTsvaG62k&libraries=places';
    load_script(mapsURL, () =>
      process_input_search(({ lat, lng }) =>
        this.setState({ coordinates: { lat, lng } })
      )
    );
  }

  render() {
    const { pos, coordinates } = this.state;
    const { match, history } = this.props;

    return (
      <Section>
        <Header history={history} />
        <Body
          pos={pos}
          coordinates={coordinates}
          updatePOS={pos => this.setState({ pos })}
          match={match}
          history={history}
          resetSearchState={() => this.setState({ coordinates: { lat: 0, lng: 0 } })}
        />
        <Footer />
      </Section>
    );
  }
}


App.propTypes = {
  match: T.object,
  history: T.object
}

export default withRouter(App);
