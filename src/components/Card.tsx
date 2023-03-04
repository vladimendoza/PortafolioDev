import React, { useEffect, useState } from 'react'
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/material/Grid'; // Grid version 1
import Icon from '@mui/material/Icon';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
// import Chip from '@mui/joy/Chip';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';
import Visibility from '@mui/icons-material/Visibility';
import { Button } from '@mui/joy';
import Modaldetails from './Modaldetails';


export default function CardComponent({ title, owner, image, like, view, ultimosAgregados }: any) {

  const [open, setOpen] = useState('');
  // const [images, setImages] = useState([]);
  


  return (

    <Box>

      {
        open === 'fullscreen' ?
          <Modaldetails 
          openmodal={open} 
          onPress={(value:any) => setOpen(value)}
          title={title}
          owner={owner}
          image={image}
          like={like}
          view={view}
          ultimosAgregados={ultimosAgregados}
          />
          :
          null
      }
      <Card
        sx={{
          width: 680,
          bgcolor: 'initial',
          boxShadow: 'none',
          '--Card-padding': '0px',
          borderColor: 'black'
        }}
        onClick={() => { setOpen('fullscreen') }}
      >
        <Box sx={{ position: 'relative' }} >
          {ultimosAgregados === true ?
            <Box sx={{
              background: '#74B9FF',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              zIndex: 1,
              width: 70,
              height: 30,
              borderRadius: 100,
              right: 30,
              top: 25
            }}>
              <Typography sx={{ color: '#ffff' }}>Nuevo</Typography>
            </Box>
            :
            null
          }
          <AspectRatio ratio="4/5" sx={{ borderRadius: 45 }}>
            <figure>
              <img
                src={image.img01}
                srcSet={image.img01}
                loading="lazy"
                alt={title}
              />
            </figure>
          </AspectRatio>

          <CardCover
            className="gradient-cover"
            sx={{
              borderRadius: 45,
              '&:hover, &:focus-within': {
                opacity: 1,
              },
              opacity: 0,
              transition: '0.1s ease-in',
              background:
                'linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)',
            }}
          >
            <Box>

              <Box
                sx={{
                  p: 4,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  flexGrow: 1,
                  alignSelf: 'flex-end',
                }}
              >
                <Typography level="h2" noWrap sx={{ fontSize: 'lg' }}>
                  <Link
                    href={`#${title}`}
                    overlay
                    underline="none"
                    sx={{
                      color: '#fff',
                      textOverflow: 'ellipsis',
                      overflow: 'hidden',
                      display: 'block',
                    }}
                  >
                    {title}
                  </Link>
                  <Link sx={{
                    color: '#fff', textOverflow: 'ellipsis', overflow: 'hidden', display: 'block',
                  }}>{owner}</Link>
                </Typography>
              </Box>

              <Box
                sx={{
                  p: 4,
                  display: 'flex',
                  alignItems: 'center',
                  // gap: 1.5,
                  // flexGrow: 1,
                  alignSelf: 'flex-end',
                }}
              >
                <IconButton size="sm" sx={{ ml: 'auto', color: 'white', mr: 1 }}>
                  {/* <CreateNewFolder /> */}
                  <ThumbUpAltIcon sx={{ mr: 1 }} />
                  <Typography level="body2" >
                    {like}
                  </Typography>
                </IconButton>
                <IconButton size="sm" sx={{ ml: 'auto', color: 'white' }}>
                  {/* <Favorite /> */}
                  <Visibility sx={{ mr: 1 }} />
                  <Typography level="body2">
                    {view}
                  </Typography>
                </IconButton>
              </Box>

            </Box>
          </CardCover>
        </Box>
      </Card>

    </Box>

  );
}