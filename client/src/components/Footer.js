import React, { Component } from 'react';
import styled from 'styled-components';

class Footer extends Component {
    render() {
        return(
            <FooterContainer>
                <div>© 2018 Crop. All Rights Reserved.</div>
            </FooterContainer>
        )
    };
};

const FooterContainer = styled.div`
  color: #0D5752;
  display: flex;
  justify-content: center;

`;


export default Footer;