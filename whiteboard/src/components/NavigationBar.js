import React from 'react';
import { Stack } from 'office-ui-fabric-react';
import stackItemStyles from '../styles/commonStyles'
import { Navbar, Nav } from 'react-bootstrap'
import '../css/styles.css'
import logo from '../logo.svg'
import { initializeIcons } from '@uifabric/icons';
import { Icon } from '@fluentui/react/lib/Icon';

initializeIcons();
const LogoIcon = () => <Icon iconName="WhiteBoardApp16" className='icons'/>

const stackAlignment = {
    root: {
        alignItems: 'center'
    },
};

const stackTokens = {
    childrenGap: 10,
}
const stackHorizontalTokens = {
    childrenGap: 130,
}

class NavigationBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {className: this.props.className, classRef: this.props.classRef};
    }

    shouldDisable(link, e) {
        if(link == this.props.classRef) {
            e.preventDefault();
        }
    }

    render() {
        return (
            <div>
                <Stack styles={stackAlignment} tokens={stackTokens}>
                    <Stack.Item order={1}>
                        <Stack styles={stackAlignment} tokens={stackTokens}>
                        <Stack.Item order={1}>
                            <Stack horizontal tokens={stackHorizontalTokens}>
                                <Stack.Item>
                                    <LogoIcon/>
                                </Stack.Item>
                                <Stack.Item>
                                    <h1 className='title'>WhiteBoard</h1>
                                </Stack.Item>
                            </Stack>
                        </Stack.Item>
                        <Stack.Item order={2}>
                            <h1>{this.props.className}</h1>
                        </Stack.Item>
                        </Stack>
                    </Stack.Item>
                    <Stack.Item order={2}>
                        <Nav className='tabs' variant="pills" activeKey={this.props.classRef}>
                            <Nav.Item>
                                <Nav.Link href='/calendar' onClick={(e) => this.shouldDisable('/calendar', e)}>Calendar</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href='/grades' onClick={(e) => this.shouldDisable('/grades', e)}>Grades</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href='/submit-assignments' onClick={(e) => this.shouldDisable('/submit-assignments', e)}>Submit Assignment</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href='/help' onClick={(e) => this.shouldDisable('/help', e)}>Help</Nav.Link>
                            </Nav.Item>                            
                            <Nav.Item>
                                <Nav.Link href='/home-login' onClick={(e) => this.shouldDisable('/', e)}>Logout</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Stack.Item>
                </Stack>
            </div>
        );
    }
}

export default NavigationBar; 