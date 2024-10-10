/* eslint-disable react/prop-types */
import { Box, Backdrop, Fade, Grid2, Container, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { classe } from "./style";

export default function DefaultModal({
    open,
    handleClose,
    handleConfirm,
    description,
    title,
}) {
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
                        <Typography variant="h6">{title}</Typography>
                        <Typography variant='body2'>{description}</Typography>
                        <Box spacing={2} sx={{ display: 'flex', flexDirection: 'row', pt: 3, justifyContent: 'space-between' }}>

                            <Button  variant='outlined' sx={{color:'black', borderColor:'black',width: '48%'}} onClick={handleClose}>CANCELAR</Button>
                            <Button  variant='contained' sx={{width: '48%'}} onclick={handleConfirm}>CONFIMAR</Button>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
