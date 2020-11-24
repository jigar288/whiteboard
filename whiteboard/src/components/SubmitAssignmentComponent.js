import React from 'react';
import { Stack, TextField } from 'office-ui-fabric-react';
import { DefaultPalette } from 'office-ui-fabric-react/lib/Styling';
import { PrimaryButton } from '@fluentui/react';
import { withRouter } from "react-router-dom";


// Styles definition
const stackStyles = {
  root: {
    background: DefaultPalette.white,
    height: 700,
  },
};
const stackItemStyles = {
  root: {
    alignItems: 'center',
    background: DefaultPalette.white ,
    color: DefaultPalette.black,
    display: 'flex',
    justifyContent: 'center',
  },
};

// Tokens definition
const outerStackTokens = { childrenGap: 5 };

const innerStackTokens = {
  childrenGap: 5,
  padding: 20,
};

// Tokens definition
const stackTokens = {
  childrenGap: 200,
  padding: 5,
};

const columnProps = {
  tokens: { childrenGap: 15 },
  styles: { root: { width: 600 } },
};

class SubmitAssignmentComponent extends React.Component {

  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.goBack = this.goBack.bind(this);
  }  

  state = {   
    selectedFile: null
  }; 

  onFileChange = event => {      
    this.setState({ selectedFile: event.target.files[0] });     
  };  

  onSubmit = event => {
    let result = window.confirm("Submited Successfully! Click ok if you're finished");

    if (result == true) {
      console.log("You pressed OK!");
      this.goBack()
    } else {
      console.log("You pressed Cancel");
    }
  };

  goBack = event => {
    this.props.history.goBack();
  }

    render() {
      return (
        <div>

          <Stack tokens={outerStackTokens}>
              <Stack styles={stackStyles} tokens={innerStackTokens}>
                <Stack.Item grow >
                    <PrimaryButton onClick={this.goBack} >Back</PrimaryButton> {/* todo: implement button click */}                    
                </Stack.Item>

                <Stack.Item grow styles={stackItemStyles}>
                    <h2>Submit Assignment</h2>
                </Stack.Item>

                <Stack.Item grow styles={stackItemStyles}>

                    <Stack horizontal tokens={stackTokens}>                     
                      <Stack.Item grow={3} styles={stackItemStyles}>                        
                        <h5>Due date: </h5>
                      </Stack.Item>

                      <Stack.Item grow={3} styles={stackItemStyles}>                      
                        <h5>Assignment Name: </h5>
                      </Stack.Item>
                    </Stack>

                </Stack.Item>                

                <Stack.Item grow styles={stackItemStyles}>                  
                    <Stack horizontal tokens={stackTokens}>                     
                      <Stack.Item grow={3} styles={stackItemStyles}>                        
                        <h6>Upload file: </h6>
                      </Stack.Item>

                      <Stack.Item grow={3} styles={stackItemStyles}>                      
                        <input type="file" onChange={this.onFileChange}/>                        
                      </Stack.Item>
                    </Stack>
                </Stack.Item>                
                

                <Stack.Item grow={3} styles={stackItemStyles}>
                                  
                  <Stack {...columnProps}>
                    <TextField label="Additional Notes" multiline rows={6} />
                  </Stack>

                </Stack.Item>

                <Stack.Item grow styles={stackItemStyles}>
                  <PrimaryButton onClick={this.onSubmit} >Submit</PrimaryButton> {/* todo: implement button click */}                    
                </Stack.Item>
              </Stack>
          </Stack>          

        </div>
      );
    }
}

export default withRouter(SubmitAssignmentComponent);