import React, { Component } from 'react';
import styled from 'styled-components';

import Gallery from './Gallery.js';
import Editor from './Editor.js';


class Content extends Component {
    render() {
        return(
            <ContentContainer>
                <Gallery />
                <Editor />
            </ContentContainer>
        );
    };
};

const ContentContainer = styled.div`
  box-sizing: border-box;
  margin: 1.25rem 0 1.25rem 0;
  display: flex;
  justify-content: space-between;
`;

export default Content;