import React, { useEffect, useState } from 'react'
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import Typography from '@mui/joy/Typography';
import { Box } from '@mui/material';
import { AspectRatio } from '@mui/joy';

export default function Modaldetails({ openmodal, onPress, title, owner, image, like, view, ultimosAgregados }: any) {
  const [open, setOpen] = useState(openmodal);
  // const [images, setImages] = useState([]);
  // setImages(image)


  // console.log('aqui van las imagens:', image);


  return (
    <React.Fragment>
      <Modal open={!!open} onClose={() => {
        setOpen('')
        onPress('')
      }}
      >
        <ModalDialog
          aria-labelledby="layout-modal-title"
          aria-describedby="layout-modal-description"
          layout={open || undefined}
        >
          <ModalClose />
          <Typography id="layout-modal-title" component="h2">
            {title}
          </Typography>
          <Typography id="layout-modal-description" textColor="text.tertiary">
            {owner}
          </Typography>

          <Box sx={{ width: '100%', height: '100vh', background: 'none' }} sx={{
            overflow: scroll ? 'scroll' : 'initial',
            mx: 'calc(-1 * var(--ModalDialog-padding))',
            px: 'var(--ModalDialog-padding)',
          }}>
            <Box className="content-cards" sx={{ mb: 3.5, borderColor: 'red' }}>
              {
                image.map(({ img01 }: any) => (
                  <AspectRatio sx={{ borderRadius: 45 }}>
                    <figure>
                      <img
                        src={img01}
                        srcSet={img01}
                        loading="lazy"
                        alt={title}
                      />
                    </figure>
                  </AspectRatio>
                ))
              }
            </Box>
          </Box>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
