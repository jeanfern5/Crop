import React, { Component } from 'react';
import styled from 'styled-components';

export default class Nav extends Component {
    render() {
        return(
            <NavContainer>
                <div>Logo Name Here</div>
                <div className='hover' >Login</div>
            </NavContainer>
        );
    };
};

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;

  &:hover .hover {
      color: #F27927;
  }
`;


