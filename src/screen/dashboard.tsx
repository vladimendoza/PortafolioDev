import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import CardComponent from '@/components/Card';
import { cardsInfo } from '@/utils/cardsInfo';
import Grid from '@mui/material/Grid'; // Grid version 1
import Navbar from '@/components/Navbar';
import { FilterCards } from '@/components/Filter';
import Footer from '@/components/Footer';

// Seccion principal

export const Dashboard = () => {
  const [selectedValue1, setSelectedValue1] = useState("complete");
  const [data, setData] = useState([])

  // Filtra las card por: 'Todas', 'Agregadas Recientemente', 'Mas vistos'
  const handleCards = (e: any) => {
    if (e === 'Agregados Recientemente') {
      const result = cardsInfo.filter((e: any) => {
        return e.ultimosAgregados === true
      })
      setData(result)
    } else if (e === 'Más vistos') {
      const result = cardsInfo.filter((e: any) => {
        return e.view > 700
      })
      setData(result.sort())
    } else {
      setData(cardsInfo)
    }
  }
  useEffect(() => {
    setData(cardsInfo)
  }, [])

  return (
    <Box>

      <React.Fragment>
        <CssBaseline />
        <Container sx={{ mt: 15 }} maxWidth={'xl'} >

          {/* LLama al componente Navbar */}
          <Navbar />

          <Grid container columns={{ xs: 12, sm: 12, md: 12 }} spacing={3}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >

            {/* Mapea el objeto de todas las cards y las envie al componente Cards */}
            {
              data.map((card: { owner: any; title: any; image: any; like: any; view: any; ultimosAgregados: any, dateRelease: any }) => (
                <Grid item xs={12} sm={6} md={6} >
                  <Box key={card.title} className="content-cards" sx={{ mb: 3.5}} >
                    <CardComponent
                      title={card.title}
                      owner={card.owner}
                      image={card.image}
                      like={card.like}
                      view={card.view}
                      ultimosAgregados={card.ultimosAgregados}
                      dateRelease={card.dateRelease}
                      width={680}
                      aspectRadio={'4/5'}
                      spaceColum={0}
                      fontOwner={'22px'}
                      fontTitle={'18px'}
                      componentName={'Dashboard'}
                    />
                  </Box>
                </Grid>
              ))
            }
          </Grid>
        </Container>
      </React.Fragment>
      {/* Muestra el filtro en la parte inferior de la pagina */}
      <FilterCards
        name="group-1"
        callback={(val: any) => setSelectedValue1(val)}
        controlRef={useRef()}
        handleCards={handleCards}
        segments={[
          {
            label: "Todos",
            value: "Todos",
            ref: useRef()
          },
          {
            label: "Agregados Recientemente",
            value: "Agregados Recientemente",
            ref: useRef()
          },
          {
            label: "Más vistos",
            value: "Más vistos",
            ref: useRef()
          }
        ]}
      />
      {/* Muestra el Componente Footer */}
      <Footer />
    </Box>
  )
}
