import React, { Component } from 'react';
import styled from 'styled-components';

import './App.css';
import Nav from './components/Nav.js'
import Content from './components/Content.js'
import Footer from './components/Footer.js'

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Nav />
        <Content />
        <Footer />
      </AppContainer>
    );
  };
};

const AppContainer = styled.div`
  background: #262626;
  color: #B2CCE5;
  display: flex;
  flex-direction: column; 
  box-sizing: border-box;
  padding: 1.5625rem;
  margin: auto;
  position: fixed;
  top: 0px;
  width: 800px;
  height: 1000px;
  overflow: hidden;

`;

export default App;
