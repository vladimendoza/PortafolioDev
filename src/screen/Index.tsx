import React from 'react'
import styles from '../styles/index.module.css'
import { useRouter } from 'next/router'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Image from 'next/image'
import ByVladimirWhite from '../../public/image/Logo/ByVladimirWhite.svg'

export const Index = () => {
  const router = useRouter()
  return (
    <React.Fragment>

      <Box className={styles.contentTitles}>
        <Box>
          {/* <h1 className={styles.m0}> By Vladimir</h1> */}
          <Image src={ByVladimirWhite} width={400} height={0} alt={'Logo By Vladimir'} />
          <h4 className={styles.subtitle}>Diseñador UI/UX</h4>
        </Box>
      </Box>

      <Box className={styles.ButtonArrow} onClick={() => router.push('/dashboard')}>
        <h4 style={{marginRight: 10}}>Mis trabajos</h4>
        <ArrowForwardIcon />
      </Box>

      <Box className={styles.videoStyle}>
        <CssBaseline />
        <video
          autoPlay
          loop
          muted
          style={{ width: 'auto', height: '100vh' }}
        >
          <source
            src="../../videos/videointro.mp4"
            type="video/mp4"
          />
        </video>
      </Box>
    </React.Fragment>

  )
}
