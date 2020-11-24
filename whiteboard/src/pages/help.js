import React from "react";
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import { DefaultPalette, Stack } from 'office-ui-fabric-react';
import { PrimaryButton } from '@fluentui/react';

var __html = require('../html/index.html.js');
var template = {__html: __html };



class Help extends React.Component {

    constructor(props){
        super(props);
    }

    goBack = () => {
        this.props.history.push('/');
    }

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
           <div className="help_page">
               <Stack horizontal styles={stackStyles} tokens={buttonStackTokens}>                
                    <Stack.Item grow disableShrink>
                        <PrimaryButton onClick={this.goBack}> Back</PrimaryButton>
                    </Stack.Item>
                </Stack>
               <span dangerouslySetInnerHTML={template}/>
           </div>
        );
     }
 }

export default withRouter(Help);