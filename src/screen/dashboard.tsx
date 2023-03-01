import React, { useState } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import CardComponent from '@/components/Card';
import { cardsInfo } from '@/utils/cardsInfo';
import Grid from '@mui/material/Grid'; // Grid version 1
import Navbar from '@/components/Navbar';





export const Dashboard = () => {
  return (
    <Box>


      {/* LLama al componente Navbar */}
      <Navbar />

      <React.Fragment>
        <CssBaseline />
        <Container sx={{ mt: 15}}>
          <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ background: 'red' }}
            direction="row"
            justifyContent="space-between"
            alignItems="center">
            {
              cardsInfo.map((card: { owner: any; title: any; image: any; like: any; view: any; ultimosAgregados: any }) => (
                <div className="content-cards">
                  <CardComponent
                    title={card.title}
                    owner={card.owner}
                    img={card.image.img01}
                    like={card.like}
                    view={card.view}
                    ultimosAgregados={card.ultimosAgregados}
                  />
                </div>
              ))
            }

          </Grid>
        </Container>
      </React.Fragment>
    </Box>
  )
}
