import React, { useEffect, useState } from 'react'
import styles from '../styles/modal.module.css'
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import Typography from '@mui/joy/Typography';
import { Box } from '@mui/material';
import { AspectRatio, IconButton } from '@mui/joy';
import 'moment/locale/es';
import Visibility from '@mui/icons-material/Visibility';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { cardsInfo } from '@/utils/cardsInfo';
import CardComponent from './Card';
import FsLightbox from "fslightbox-react";


export default function Modaldetails({ openmodal, onPress, title, owner, image, like, view, ultimosAgregados, dateRelease }: any) {
  const [open, setOpen] = useState(openmodal);
  const [data, setData] = useState<any>([])
  const [toggler, setToggler] = useState(false);

  // Mapea el objeto de imagen
  useEffect(() => {
    const array = []
    for (var key in image) {
      const item = image[key];
      array.push(item)
    }
    setData(array)

  }, [image]);


  return (
    <React.Fragment>
      {/* Abre el modal con los detalles para cada card */}
      <Modal open={!!open} onClose={() => {
        setOpen('')
        onPress('')
      }}
        sx={{ zIndex: 99999 }}
        className={styles.slideInUp}

      >
        <ModalDialog
          aria-labelledby="layout-modal-title"
          aria-describedby="layout-modal-description"
          layout={open || undefined}
        >
          <ModalClose sx={{ background: '#74B9FF', borderRadius: 50, color: '#ffff', top: 20, right: 20 }} />
          <Typography id="layout-modal-title" component="h2" sx={{ fontSize: 24, fontWeight: 600, marginBottom: 0.5 }}>
            {title}
          </Typography>
          <Typography id="layout-modal-description" textColor="text.tertiary" sx={{ fontSize: 18, fontWeight: 400 }}>
            {owner}
          </Typography>


          <Box sx={{
            width: 'auto', height: '100vh', background: 'none',
            overflow: scroll ? 'scroll' : 'initial',
            mx: 'calc(-1 * var(--ModalDialog-padding))',
            px: 'var(--ModalDialog-padding)',
          }}>
            <Box className="content-cards" sx={{ mb: 3.5, borderColor: 'red' }}>
              {/* Mapeo del objeto de las imagenes */}
              {
                data.map((e: any) => (
                  <AspectRatio key={e} sx={{ borderRadius: 0, marginBottom: 3, cursor: 'pointer' }} onClick={() => setToggler(!toggler)}>
                    <figure>
                      <img
                        src={e}
                        srcSet={e}
                        loading="lazy"
                        alt={title}
                      />
                    </figure>
                  </AspectRatio>
                ))
              }
            </Box>
            <Box className={styles.footerModal}>
              <Typography level="h1" component="h2" sx={{ fontSize: 40, fontWeight: 600 }}>
                {title}
              </Typography>

              <Typography level="h5" component="h2" sx={{ fontSize: 22, color: '#A6A6A6', margin: 1 }}>
                Publicado el: {dateRelease}
              </Typography>
              <IconButton size='sm' sx={{ ml: 'auto', color: '#2D3436', mr: 1 }}>
                <ThumbUpAltIcon sx={{ mr: 1 }} />
                <Typography level="body2" fontSize={18} >
                  {like}
                </Typography>
              </IconButton>
              <IconButton size="sm" sx={{ ml: 'auto', color: '#2D3436' }}>
                <Visibility sx={{ mr: 1 }} />
                <Typography level="body2" fontSize={18}>
                  {view}
                </Typography>
              </IconButton>
            </Box>
            <Box style={{ display: 'flex', overflow: 'scroll', marginTop: 100 }}>
              {/* Componente de card reutilizable para mostrarse como proyecto sugeridos dentro de cada detalle de card */}
              {
                cardsInfo.map((card: { owner: any; title: any; image: any; like: any; view: any; ultimosAgregados: any, dateRelease: any }) => (
                  <Box key={card.title} className="content-cards" sx={{ mb: 3.5, borderColor: 'red' }}>
                    <CardComponent
                      title={card.title}
                      owner={card.owner}
                      image={card.image}
                      like={card.like}
                      view={card.view}
                      ultimosAgregados={card.ultimosAgregados}
                      dateRelease={card.dateRelease}
                      width={380}
                      aspectRadio={'4/3'}
                      spaceColum={4}
                      fontOwner={'16px'}
                      fontTitle={'14px'}
                      componentName={'Modal'}
                    />
                  </Box>
                ))
              }
            </Box>
            <FsLightbox
              toggler={toggler}
              sources={data}
            />
          </Box>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
