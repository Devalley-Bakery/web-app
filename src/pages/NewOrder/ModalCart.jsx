/* eslint-disable react/prop-types */
import { Container, List, ListItem, ListItemText, Box, IconButton, Backdrop, Fade, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { classe } from './styles';

export default function ModalCart({ open, handleClose, items, title, handleConfirm }) {
  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}

      >
        <Fade in={open}>
          <Box sx={classe.mainBoxModal}>
            <Box sx={classe.modalTitle}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {title}
              </Typography>
              <IconButton onClick={handleClose}>
                <CloseIcon sx={{ p: 0 }} />
              </IconButton>
            </Box>
            <Container sx={classe.modalItensContainer}>
              <Container sx={classe.modalItens}>
                <List >
                  {items.map((item) => (
                    <ListItem key={item.id}>
                      <ListItemText sx={classe.modelDetails} primary={`${item.quantity} ${item.name}`} />
                    </ListItem>
                  ))}
                </List>
              </Container >
              <Typography variant="body1" sx={classe.totalText}>
                Total: R$ {totalPrice}
              </Typography>
            </Container>
            <Button
              variant='contained'
              color="secondary"
              sx={classe.modalButton}
              disabled={totalPrice <= 0}
              onClick={handleConfirm}
            >
              Registrar Pedido
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
