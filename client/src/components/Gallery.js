import React, { Component } from 'react';
import styled from 'styled-components';
import { FaInfoCircle } from 'react-icons/fa';
import { Button, Popover, PopoverHeader, PopoverBody, Tooltip } from 'reactstrap';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import { Col, Row, Label, FormGroup, Input, DateTimeField } from 'reactstrap';

  
  
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

    //   toggle() {
    //     this.setState({
    //       modal: !this.state.modal
    //     });
    // };
  

  
 
    render() {
        const classes = 'tooltip-inner'

        return(
            <GalleryContainer>
                <GalleryIntro>
                    <h6>Gallery</h6>

                    {/* <Button onClick={this.toggle} type="button"><FaInfoCircle/></Button>
                    <Popover style={{color:'red'}} trigger="focus" placement="bottom" isOpen={this.state.popoverOpen} target="PopoverFocus" toggle={this.toggle}>
                        <PopoverHeader>Instructions</PopoverHeader>
                        <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                    </Popover> */}

                      <p>Somewhere in here is a <span style={{textDecoration: "underline", color:"blue"}} href="#" id="TooltipExample">tooltip</span>.</p>
        <Tooltip placement="right" isOpen={this.state.tooltipOpen} target="TooltipExample" toggle={this.toggle}>
          Hello world!
        </Tooltip>




                </GalleryIntro>
                <GalleryContent>Yo</GalleryContent>
                <GalleryBar>
                    <Buttons>Upload</Buttons>
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