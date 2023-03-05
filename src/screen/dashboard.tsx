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



export const Dashboard = () => {
  const [selectedValue1, setSelectedValue1] = useState("complete");
  const [data, setData] = useState([])

  const handleCards = (e: any) => {
    if (e === 'Agregados Recientemente') {
      const result  = cardsInfo.filter((e: any) => {
        return e.ultimosAgregados === true
      })
      setData(result)
    } else if (e === 'Más vistos') {
      const result  = cardsInfo.filter((e: any) => {
        return e.view > 1000
      })
      setData(result)
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

          <Grid container columns={{ xs: 4, sm: 0, md: 12 }} style={{ background: 'none' }}
            direction="row"
            justifyContent="space-between"
            alignItems="center">
            {
              data.map((card: { owner: any; title: any; image: any; like: any; view: any; ultimosAgregados: any }) => (
                <Box key={card.title} className="content-cards" sx={{ mb: 3.5, borderColor: 'red' }}>
                  <CardComponent
                    title={card.title}
                    owner={card.owner}
                    image={card.image}
                    like={card.like}
                    view={card.view}
                    ultimosAgregados={card.ultimosAgregados}
                  />
                </Box>
              ))
            }
          </Grid>
        </Container>
      </React.Fragment>
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
      {/* <p className="selected-item">Selected: {selectedValue1}</p> */}
      <Footer />
    </Box>
  )
}
