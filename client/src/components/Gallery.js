import React, { Component } from 'react';
import styled from 'styled-components';

class Gallery extends Component {
    render() {
        return(
            <GalleryContainer>
                <div>Yo</div>
            </GalleryContainer>
        );
    };
};

const GalleryContainer = styled.div`
    border: .1px solid red;
    width: 25%;
  }
`;


export default Gallery;