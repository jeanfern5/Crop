import React, { Component } from 'react';
import styled from 'styled-components';

class Gallery extends Component {
    render() {
        return(
            <GalleryContainer>
                <GalleryContent>Yo</GalleryContent>
                <GalleryBar>
                    <Button>Upload</Button>
                    <Button>Export Image</Button>
                    <Button>Export All Images</Button>
                </GalleryBar>
            </GalleryContainer>
        );
    };
};

//CSS Below ------------------------------------------------------------------

const GalleryContainer = styled.div`
    background: red;
    width: 25%;
    height: 100%;
    padding: 0.75rem;
`;

const GalleryContent = styled.div`
    background: pink;
    margin-bottom: 10px;

`;

const GalleryBar = styled.div`
    background: purple;
    display: flex;
    justify-content: space-evenly;

`;

const Button = styled.button`
    background: #F27927;
    border-radius: 0.1875rem;
    font-size:13px;
    margin: 0.75rem;
    overflow: hidden;
    font-weight: bold;
    color: #B2CCE5;
    flex-grow: 1;
    height: 2.25rem;
    border: none;
    cursor: pointer;
  
`;


export default Gallery;