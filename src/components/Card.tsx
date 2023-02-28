import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/material/Grid'; // Grid version 1
import Icon from '@mui/material/Icon';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';


export default function CardComponent({ title, owner, img, like, view, ultimosAgregados }: any) {

  console.log('imagenes aqui otra vez', img);


  return (

    // <Grid container spacing={0} style={{background: 'red'}}>
    //   <Grid item md={6} xs={6} style={{background: 'blue'}}>

    <Card sx={{ maxWidth: 570 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="570"
          width="500"
          image={img}
          alt={title}
        />
        <CardContent>

          <Grid container justifyContent="space-between">

            <Grid md={6}>
              <Typography gutterBottom variant="h5" component="div" style={{ color: 'red' }}>
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {owner}
              </Typography>
            </Grid>

            <Grid container md={6}>
              <Grid md={6} style={{display: 'flex', alignItems: 'center', flex: 1}}>
                <ThumbUpAltIcon />
                <Typography variant="body2" color="text.secondary">
                  {like}
                </Typography>
              </Grid>

              <Grid md={6} style={{display: 'flex', alignItems: 'center', justifyContent: 'end'}}>
                <ThumbUpAltIcon />
                <Typography variant="body2" color="text.secondary">
                  {view}
                </Typography>
              </Grid>

            </Grid>

          </Grid>
        </CardContent>

      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
    </Card>

    //   </Grid>
    // </Grid>
  );
}