import React, { Component } from 'react';
import styled from 'styled-components';

export default class Footer extends Component {
    render() {
        return(
            <FooterContainer>
                <div>© 2018 Crop. All Rights Reserved.</div>
            </FooterContainer>
        );
    };
};

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 12px;
`;


