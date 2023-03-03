import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import DrawerComponent from '@/components/Drawer';
import Image from 'next/image'
import ByVladimir from '../../public/image/Logo/ByVladimir.svg'



interface Props {
    window?: () => Window;
    children: React.ReactElement;
}

//Funcion para Sticky Header
function HideOnScroll(props: Props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });
    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}
export default function Navbar(props?: any) {
    return (
        <Box sx={{ display: 'flex'}}>
            <HideOnScroll {...props}>
                <AppBar component="nav" sx={{ background: 'white', boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)' }}>
                    <Toolbar sx={{ justifyContent: 'space-between', borderBottom: 1, borderColor: 'divider' }}>
                         <Image src={ByVladimir} width={150} height={0} alt={'Logo By Vladimir'}/>
                        <DrawerComponent />
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        </Box>
    )
}
