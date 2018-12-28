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
    border: .1px solid green;
    width: 75%
  }
`;


export default Editor;