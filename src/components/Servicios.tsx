import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'


export default function Servicios() {
    return (

        <Box sx={{ width: '100%' }}>

            <Box>
                <Typography variant="h1" mt={0} mb={4} fontSize={35} color={'#74B9FF'} fontWeight={600}>
                    Mi Casa Con Ruedas
                </Typography>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 12, sm: 12, md: 12 }}>
                    <Grid item xs={6}>
                        <Typography variant="h4" mt={0} mb={2} fontSize={18} color={'#A6A6A6'} fontWeight={400}>Diseño NFT</Typography>
                        <Typography variant="h4" mt={0} mb={2} fontSize={18} color={'#A6A6A6'} fontWeight={400}>Diseño Web</Typography>
                        <Typography variant="h4" mt={0} mb={2} fontSize={18} color={'#A6A6A6'} fontWeight={400}>Diseño Móvil</Typography>
                        <Typography variant="h4" mt={0} mb={2} fontSize={18} color={'#A6A6A6'} fontWeight={400}>Diseño Gráfico</Typography>
                        <Typography variant="h4" mt={0} mb={2} fontSize={18} color={'#A6A6A6'} fontWeight={400}>Marca y Logotipo</Typography>
                        <Typography variant="h4" mt={0} mb={2} fontSize={18} color={'#A6A6A6'} fontWeight={400}>Microinteraciones</Typography>
                        <Typography variant="h4" mt={0} mb={2} fontSize={18} color={'#A6A6A6'} fontWeight={400}>Diseño de plantillas CMS</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h4" mt={0} mb={2} fontSize={18} color={'#A6A6A6'} fontWeight={400}>Diseño UI</Typography>
                        <Typography variant="h4" mt={0} mb={2} fontSize={18} color={'#A6A6A6'} fontWeight={400}>Diseño UX</Typography>
                        <Typography variant="h4" mt={0} mb={2} fontSize={18} color={'#A6A6A6'} fontWeight={400}>WordPress</Typography>
                        <Typography variant="h4" mt={0} mb={2} fontSize={18} color={'#A6A6A6'} fontWeight={400}>Animación 3D</Typography>
                        <Typography variant="h4" mt={0} mb={2} fontSize={18} color={'#A6A6A6'} fontWeight={400}>Animación 2D</Typography>
                        <Typography variant="h4" mt={0} mb={2} fontSize={18} color={'#A6A6A6'} fontWeight={400}>Edición de videos</Typography>
                        <Typography variant="h4" mt={0} mb={2} fontSize={18} color={'#A6A6A6'} fontWeight={400}>Edición Fotográfica</Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Typography variant="h1" mt={2} mb={4} fontSize={35} color={'#74B9FF'} fontWeight={600}>
                Experiencia & Clientes
                </Typography>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 12, sm: 12, md: 12 }}>
                    <Grid item xs={6}>
                        <Typography variant="h4" mt={0} mb={2} fontSize={18} color={'#A6A6A6'} fontWeight={400}>Tegger</Typography>
                        <Typography variant="h4" mt={0} mb={2} fontSize={18} color={'#A6A6A6'} fontWeight={400}>TypeMatch</Typography>
                        <Typography variant="h4" mt={0} mb={2} fontSize={18} color={'#A6A6A6'} fontWeight={400}>GMDY Sport</Typography>
                        <Typography variant="h4" mt={0} mb={2} fontSize={18} color={'#A6A6A6'} fontWeight={400}>Experia View</Typography>
                        <Typography variant="h4" mt={0} mb={2} fontSize={18} color={'#A6A6A6'} fontWeight={400}>Find Rotation</Typography>
                        <Typography variant="h4" mt={0} mb={2} fontSize={18} color={'#A6A6A6'} fontWeight={400}>Qordevelopment LLC</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h4" mt={0} mb={2} fontSize={18} color={'#A6A6A6'} fontWeight={400}>KidLink</Typography>
                        <Typography variant="h4" mt={0} mb={2} fontSize={18} color={'#A6A6A6'} fontWeight={400}>Kutt Bet</Typography>
                        <Typography variant="h4" mt={0} mb={2} fontSize={18} color={'#A6A6A6'} fontWeight={400}>HighCoders</Typography>
                        <Typography variant="h4" mt={0} mb={2} fontSize={18} color={'#A6A6A6'} fontWeight={400}>BizX America</Typography>
                        <Typography variant="h4" mt={0} mb={2} fontSize={18} color={'#A6A6A6'} fontWeight={400}>Vegas Winners</Typography>
                        <Typography variant="h4" mt={0} mb={2} fontSize={18} color={'#A6A6A6'} fontWeight={400}>Compete bePlayfuel</Typography>
                    </Grid>
                </Grid>
            </Box>

        </Box>
    )
}
