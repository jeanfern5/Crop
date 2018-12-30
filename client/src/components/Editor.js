import React, { Component } from 'react';
import styled from 'styled-components';

class Editor extends Component {
    render() {
        return(
            <EditorContainer>
                <div>Mama</div>
            </EditorContainer>
        );
    };
};

const EditorContainer = styled.div`
    background: green;
    width: 75%
`;


export default Editor;