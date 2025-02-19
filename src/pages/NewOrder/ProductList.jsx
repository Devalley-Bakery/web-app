/* eslint-disable react/prop-types */
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { classe } from "./styles";

export default function ProductList({
  items,
  selectedItems,
  handleAdd,
  handleRemove,
  errorMessages,
}) {
  return (
    <List>
      {items.length ? (
        items.map((item, index) => {
          const selectedItem = selectedItems.find((i) => i.id === item.id);
          const quantity = selectedItem ? selectedItem.quantity : 0;


          return (
            <div key={item.id}>
              <ListItem sx={classe.listItem}>
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                  }}
                >
                  <ListItemAvatar>
                    <Avatar
                      variant="rounded"
                      src={item.imagePath}
                      alt={item.name}
                      sx={classe.avatar}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.name}
                    secondary={`R$ ${item.price}`}
                    sx={classe.listItemText}
                  />

                </Box>
                  {errorMessages[item.id] && (
                    <Typography sx={{ color: "red",pt:1, fontSize: "0.9em" }}>
                      {errorMessages[item.id]}
                    </Typography>
                  )}
                  </Box>
                <Box sx={classe.actionButtonsBox}>
                  <IconButton onClick={() => handleRemove(item.id)} disabled={item.stockQuantity <= 0}>
                    <RemoveIcon />
                  </IconButton>
                  <Typography>{quantity}</Typography>
                  <IconButton onClick={() => handleAdd(item.id)} disabled={item.stockQuantity=== 0}>
                    <AddIcon />
                  </IconButton>
                </Box>
              </ListItem>
              {index < items.length - 1 && <Divider />}
            </div>
          );
        })
      ) : (
        <Box sx={classe.emptyProducts}>
          <Typography>Nenhum item disponível.</Typography>
        </Box>
      )}
    </List>
  );
}
