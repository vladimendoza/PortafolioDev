import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import TabSet from './TabSet';

export default function DrawerComponent() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (right: any, open: boolean) => (event: any) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [right]: open });
    };

    return (
        <div>

            <React.Fragment>
                {/* Boton encargado de de abrir el Drawer */}
                <Button onClick={toggleDrawer('right', true)}>
                    <MenuIcon fontSize="large" sx={{color: '#2D3436'}}/>
                </Button>
                <Drawer
                    anchor={'right'}
                    open={state['right']}
                    onClose={toggleDrawer('right', false)}
                    style={{zIndex:99999}}
                >
                    <TabSet />
                </Drawer>
            </React.Fragment>

        </div>
    );
}