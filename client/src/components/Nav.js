import React, { Component } from 'react';
import styled from 'styled-components';

class Nav extends Component {
    render() {
        return(
            <NavContainer>
                <div>Logo Name Here</div>
                <div className='hover' >Login</div>
            </NavContainer>
        )
    };
};

const NavContainer = styled.nav`
  color: #0D5752;
  display: flex;
  justify-content: space-between;

  &:hover .hover {
      color: #C14A2D;
  }
`;


export default Nav;