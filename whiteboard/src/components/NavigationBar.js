import React from 'react';
import { Stack } from 'office-ui-fabric-react';
import stackItemStyles from '../styles/commonStyles'
import { Nav } from 'react-bootstrap'

const stackAlignment = {
    root: {
        alignItems: 'center'
    },
  };

class NavigationBar extends React.Component {
    render() {
        return (
            <div>
                <Stack styles={stackAlignment}>
                    <Stack.Item order={1}>
                        <h1>{ this.props.className }</h1>
                    </Stack.Item>
                    <Stack.Item order={2}>
                        <Nav variant="pills" defaultActiveKey="/calendar">
                            <Nav.Item>
                                <Nav.Link href="/calendar" disabled>Calendar</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href='/grades'>Grades</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href='/'>Submit Assignment</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href='/'>Logout</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Stack.Item>
                </Stack>
            </div>
        );
    }
}

export default NavigationBar;