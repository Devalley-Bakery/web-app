/* eslint-disable react/prop-types */
import { Box, Backdrop, Fade, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { classe } from "./style";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export default function DefaultModal({
  open,
  handleClose,
  handleConfirm,
  description,
  title,
  type,
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
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
                mb: 2,
              }}
            >
              {type === "cancel" && (
                <WarningAmberIcon color="warning" sx={{ fontSize: 28 }} />
              )}
              {type === "confirm" && (
                <CheckCircleOutlineIcon color="success" sx={{ fontSize: 28 }} />
              )}
              <Typography
                variant="h6"
                id="modal-modal-title"
                sx={{ fontWeight: "bold" }}
              >
                {title}
              </Typography>
            </Box>
            <Typography variant="body2">{description}</Typography>
            <Box
              spacing={2}
              sx={{
                display: "flex",
                flexDirection: "row",
                pt: 3,
                justifyContent: "space-between",
              }}
            >
              <Button
                variant="outlined"
                sx={{ color: "black", borderColor: "black", width: "48%" }}
                onClick={handleClose}
              >
                {type == 'confirm' ? 'CANCELAR PEDIDO' : 'CANCELAR'}
              </Button>
              <Button
                variant="contained"
                sx={{
                  width: "48%",
                  background: type == "confirm" ? "#97DA7A" : "#EB857E",
                  "&:hover": {
                    backgroundColor: type == "confirm" ? "#6FB352" : "#BF635C",
                  },
                }}
                onClick={handleConfirm}
              >
                CONFIRMAR
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
