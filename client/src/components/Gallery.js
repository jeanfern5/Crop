import React, { Component } from 'react';
import styled from 'styled-components';
import { FaInfoCircle } from 'react-icons/fa';

class Gallery extends Component {
    render() {
        return(
            <GalleryContainer>
                <GalleryIntro>
                    <h6>Gallery</h6>
                    <FaInfoCircle/>
                </GalleryIntro>
                <GalleryContent>Yo</GalleryContent>
                <GalleryBar>
                    <Button>Upload</Button>
                    <Button>Export Image</Button>
                    <Button>Export All</Button>
                </GalleryBar>
            </GalleryContainer>
        );
    };
};

//CSS Below ------------------------------------------------------------------


const GalleryContainer = styled.div`
    border: 1px solid red;
    width: 27%;
    padding: 0.75rem;
    box-sizing: inherit;
    display: block;
`;

const GalleryIntro = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const GalleryContent = styled.div`
    border: 1px solid pink;
    margin-bottom: 10px;
    height: 660px;

`;

const GalleryBar = styled.div`
    border: 1px solid purple;
    display: flex;
    justify-content: space-between;
`;

const Button = styled.button`
    background: #F27927;
    border-radius: 0.1875rem;
    font-size:13px;
    margin: 10px;
    padding: 5px;
    overflow: hidden;
    font-weight: 600;
    color: #B2CCE5;
    flex-grow: 1;
    border: none;
    cursor: pointer;
`;


export default Gallery;