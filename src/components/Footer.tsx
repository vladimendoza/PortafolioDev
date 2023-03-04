import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
    return (
        <Box maxWidth={'xl'}>
            <Box sx={{ background: '#F7F7F7', display: 'flex', justifyContent: 'space-between', padding: 1.5, borderTop: '1px solid #EDEDED' }}>

                <Box sx={{ marginLeft: 2 }}>
                    <Typography variant='h6' color={'#2D3436'} sx={{ fontSize: 14 }}>©2023 By Vladimir. Todos los derechos reservados.</Typography>
                </Box>

                <Box sx={{ marginRight: 2 }}>
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-around' }}>
                        <LinkedInIcon style={{ color: '#A6A6A6' }} />
                        <InstagramIcon style={{ color: '#A6A6A6', marginLeft: 15, marginRight: 15 }} />
                        <TwitterIcon style={{ color: '#A6A6A6' }} />
                        <FacebookIcon style={{ color: '#A6A6A6', marginLeft: 15, marginRight: 15 }} />
                        <YouTubeIcon style={{ color: '#A6A6A6' }} />
                    </Box>
                </Box>

            </Box>
        </Box>
    )
}
