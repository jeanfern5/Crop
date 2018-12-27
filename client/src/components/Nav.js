import React, { Component } from 'react';
import styled from 'styled-components';

class Nav extends Component {
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


export default Nav;