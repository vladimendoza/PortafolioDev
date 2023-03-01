import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

// import TextareaAutosize from '@mui/base/TextareaAutosize';


export default function Contactame() {
  return (
    <Box component="form" sx={{ width: '100%' }}
      noValidate
      autoComplete="off"
    >
      <Box>
        <Typography variant="h1" mt={0} mb={4} fontSize={35} color={'#74B9FF'} fontWeight={600}>
          Vamos a construir algo juntos
        </Typography>
        <TextField
          id="outlined-basic"
          label="Correo Electronico"
          variant="outlined"
          maxRows={4}
          style={{ width: '100%', marginBottom: '30px'}} />

        <TextField
          id="outlined-multiline-static"
          label="Mensaje"
          multiline
          rows={4}
          defaultValue="¿Cómo puedo ayudarte?"
          style={{ width: '100%' }} />
      </Box>

      <Box mt={4} mb={4}>
        <Typography variant="h3"  mb={2} fontSize={20} color={'#74B9FF'} fontWeight={500}>
          Elige los servicios que necesitas
        </Typography>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 12, sm: 12, md: 12 }}>
          <Grid item xs={6}>
            <FormControlLabel value="end" control={<Checkbox />} label="Diseño NFT" labelPlacement="end" />
            <FormControlLabel value="end" control={<Checkbox />} label="Diseño Web" labelPlacement="end" />
            <FormControlLabel value="end" control={<Checkbox />} label="Diseño Móvil" labelPlacement="end" />
            <FormControlLabel value="end" control={<Checkbox />} label="Diseño Gráfico" labelPlacement="end" />
            <FormControlLabel value="end" control={<Checkbox />} label="Marca y Logotipo" labelPlacement="end" />
            <FormControlLabel value="end" control={<Checkbox />} label="Diseño de plantillas CMS" labelPlacement="end" />

          </Grid>
          <Grid item xs={6}>
            <FormControlLabel value="end" control={<Checkbox />} label="Diseño UI" labelPlacement="end" />
            <FormControlLabel value="end" control={<Checkbox />} label="Diseño UX" labelPlacement="end" />
            <FormControlLabel value="end" control={<Checkbox />} label="WordPress" labelPlacement="end" />
            <FormControlLabel value="end" control={<Checkbox />} label="Animación 3D" labelPlacement="end" />
            <FormControlLabel value="end" control={<Checkbox />} label="Animación 2D" labelPlacement="end" />
            <FormControlLabel value="end" control={<Checkbox />} label="Otro" labelPlacement="end" />

          </Grid>
        </Grid>
      </Box>

      <Button variant="contained" size="large" style={{width: '100%', textTransform: 'capitalize', background:'#74B9FF'}}>
        Enviar Info
      </Button>
    </Box>

  )
}
