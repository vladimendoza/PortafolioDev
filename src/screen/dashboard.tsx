import React, { useState } from 'react'
import Image from 'next/image'
import DrawerComponent from '@/components/Drawer';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import CardComponent from '@/components/Card';
import { cardsInfo } from '@/utils/cardsInfo';
import Grid from '@mui/material/Grid'; // Grid version 1


export const Dashboard = () => {

console.log('images aqui', cardsInfo[0]);


  return (
    <div>
      <div style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between'
      }}>
        {/* <Image
          src="https://images.freeimages.com/images/previews/09e/moon-art-1641879.png"
          alt="Picture of the author"
          width={500}
          height={500}
        /> */}

        <h1>Logo Here</h1>
        <DrawerComponent />
      </div>
      <React.Fragment>
        <CssBaseline />
        <Container>


        <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{background:'red'}}
         direction="row"
         justifyContent="space-between"
         alignItems="center">

            {
              cardsInfo.map((card: { owner: any; title: any; image: any; like:any; view: any; ultimosAgregados:any }) => (
                <div className="content-cards">
                  {/* <Grid item xs={2} sm={4} md={4}> */}
                    <CardComponent
                      title={card.title}
                      owner={card.owner}
                      img={card.image.img01}
                      like={card.like}
                      view={card.view}
                      ultimosAgregados={card.ultimosAgregados}
                    />


                  {/* </Grid> */}
                </div>
              ))
            }

          </Grid>

        </Container>
      </React.Fragment>
    </div >
  )
}
