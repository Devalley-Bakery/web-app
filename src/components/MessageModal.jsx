/* eslint-disable react/prop-types */
import { Box, Backdrop, Fade, Button, CircularProgress } from "@mui/material";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { classe } from "./style";
import { Link } from "react-router-dom";

export default function MessageModal({
    open,
    description,
    type
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
                    <Box sx={classe.messageModal}>
                        <Typography sx={{pb:2}}variant='body1'>{description}</Typography>
                        
                            {type !== 'cancel-confirmation' ? <Button variant='contained' sx={{ width: '48%' }}  component={Link} to="/" >FECHAR</Button> :
                            <CircularProgress />}
                        
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
