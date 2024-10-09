/* eslint-disable react/prop-types */
import { Avatar, Box, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { classe } from './styles';

export default function ProductList({ items, handleAdd, handleRemove }) {
  return (
    <List>
      {items.map((item, index) => (
        <div key={item.id}>
          <ListItem sx={classe.listItem}>
            <ListItemAvatar>
              <Avatar variant="rounded" src={item.imagePath} alt={item.name} sx={classe.avatar} />
            </ListItemAvatar>
            <ListItemText
              primary={item.name}
              secondary={`R$ ${item.price}`}
              sx={classe.listItemText}
            />
            <Box sx={classe.actionButtonsBox}>
              <IconButton onClick={() => handleRemove(item.id)}>
                <RemoveIcon />
              </IconButton>
              <Typography>{item.quantity}</Typography>
              <IconButton onClick={() => handleAdd(item.id)}>
                <AddIcon />
              </IconButton>
            </Box>
          </ListItem>
          {index < items.length - 1 && <Divider />}
        </div>
      ))}
    </List>
  );
}
