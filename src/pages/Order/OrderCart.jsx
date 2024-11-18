/* eslint-disable react/prop-types */
import { Container, List, ListItem, ListItemText, Box, Backdrop, Fade, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { classe } from './style';
import { formatDate } from '../../utils/formatDate';

const defaultItem = {
    total: 0,
    products:[],
    orderDate:""
}

export default function OrderCart({ open, handleClose, items=defaultItem, title }) {
 
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
              <Typography>
                {formatDate(items.orderDate)}
              </Typography>
            </Box>
            <Container sx={classe.modalItensContainer}>
              <Container sx={classe.modalItens}>
                <List >
                  {items.products.map((item) => (
                    <ListItem key={item.id}>
                      <ListItemText sx={classe.modelDetails} primary={`${item.quantity} ${item.productName}`} />
                    </ListItem>
                  ))}
                </List>
              </Container >
              <Typography variant="body1" sx={classe.totalText}>
                Total: R$ {items.total}
              </Typography>
            </Container>
            <Button
              variant='contained'
              color="secondary"
              sx={classe.modalButton}
              disabled={items.total <= 0}
              onClick={handleClose}
            >
              Fechar
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
