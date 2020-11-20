import React from 'react';
import { DefaultPalette, Stack } from 'office-ui-fabric-react';
import { PrimaryButton } from '@fluentui/react';
import '../css/styles.css'



class ViewGradeDetails extends React.Component {    
    render() {

        // Styles definition
        const stackStyles = {
            root: {
            background: this.props.courseColor,
            },
        };

        const innerStackStyles = {
            root: {
            background: DefaultPalette.white,
            },
        };

        const stackItemStyles = {
            root: {
            background: DefaultPalette.themePrimary,
            color: DefaultPalette.black,
            display: 'flex',
            height: 630,
            justifyContent: 'center',
            },
        };

        const nonShrinkingStackItemStyles = {
            root: {
            background: DefaultPalette.white,
            color: DefaultPalette.black,
            display: 'flex',
            height: 650,
            justifyContent: 'center',
            width: 500,
            },
        };


        const imageItemStyles = {
            height: '100px',
            width: '100px',
        };        

        // Tokens definition
        const stackTokens = {
            childrenGap: 30,
            padding: 30,
        };

        const buttonStackTokens = {
            childrenGap: 10,
            padding: 10,
        };        
        
        const numericalSpacingStackTokens = {
            childrenGap: 30,
            padding: 30,
        };     
        

      return (
        <div>

            <Stack horizontal styles={stackStyles} tokens={buttonStackTokens}>                
                <Stack.Item grow disableShrink>
                    <PrimaryButton onClick={this.props.showGradeList}> Back</PrimaryButton>
                </Stack.Item>
            </Stack>

            <Stack horizontal styles={stackStyles} tokens={stackTokens}>
                <Stack.Item grow disableShrink styles={nonShrinkingStackItemStyles}>

                    <Stack styles={innerStackStyles} tokens={numericalSpacingStackTokens}>                    
                        <Stack.Item className={stackItemStyles}>
                            <h2>{this.props.assignmentName}</h2>                            
                        </Stack.Item>
                        <Stack.Item className={stackItemStyles}>                            
                            <h5>Assignment Grade: {this.props.assignmentGrade}</h5>
                        </Stack.Item>
                        <Stack.Item className={stackItemStyles}  >
                            <img src={this.props.imageURL} className="photo"></img>
                        </Stack.Item>                       
                    </Stack>

                </Stack.Item>
                
                <Stack.Item grow disableShrink styles={nonShrinkingStackItemStyles}>
                    
                    <Stack styles={innerStackStyles} tokens={numericalSpacingStackTokens}>
                        <Stack.Item className={stackItemStyles}>
                                <h2>Teacher Feedback</h2>                            
                        </Stack.Item>
                        <Stack.Item className={stackItemStyles}>
                            <p>{this.props.feedback}</p>                            
                        </Stack.Item>
                    </Stack>                    

                </Stack.Item>
            </Stack>
        </div>
      );
    }
}

export default ViewGradeDetails;
