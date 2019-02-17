import React, { Component } from 'react';
import styled from 'styled-components';
import { FaInfoCircle } from 'react-icons/fa';
import { Tooltip } from 'reactstrap';  
import ImageUpload from './ImageUpload';
  
class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tooltipOpen: false,
            modal: false
          };

        this.toggle = this.toggle.bind(this);
      };
    
      toggle() {
        this.setState({
          tooltipOpen: !this.state.tooltipOpen
        });
      };
 
    render() {
        return(
            <GalleryContainer>
                <GalleryIntro>
                    <h6>Gallery</h6>
                      <p id="info"><FaInfoCircle /></p>
                      <Tooltip placement="right" isOpen={this.state.tooltipOpen} target="info" toggle={this.toggle}>
                      Instructions:
                      </Tooltip>
                </GalleryIntro>
                <GalleryContent>
                    <ImageUpload />
                </GalleryContent>
                <GalleryBar>
                    {/* <form method="post" enctype="multipart/form-data">
                    <input type="file" name="imagefile" />
                    <input type="submit" name="Submit" value="Submit" />
                    </form> */}
                    <Buttons>Export Image</Buttons>
                    <Buttons>Export All</Buttons>
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

const Buttons = styled.button`
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