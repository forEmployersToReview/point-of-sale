// Modules
import React, { Component } from 'react';

// Componentns
import Section from '../components/elements/Section';
import Header from '../components/design_composition/Header';
import Body from '../components/design_composition/Body';
import Footer from '../components/design_composition/Footer';

class App extends Component {
  render() {
    return (
      <Section>
        <Header />
        <Body />
        <Footer />
      </Section>
    );
  }
}

export default App;
