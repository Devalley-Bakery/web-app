import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { classe } from './styles';

export default function ProductList({ items }) {
  return (
    <List>
      {items.map((item, index) => (
        <div key={item.id}>
          <ListItem sx={classe.listItem}>
            <ListItemAvatar>
              <Avatar variant="rounded" src={item.img} alt={item.name} sx={classe.avatar} />
            </ListItemAvatar>
            <ListItemText
              primary={item.name}
              secondary={
                <>
                  {`Preço: R$ ${item.price.toFixed(2)}`} <br />
                  {`Quantidade: ${item.quantity}`}
                </>
              }
              sx={classe.listItemText}
            />
          </ListItem>
          {index < items.length - 1 && <Divider />}
        </div>
      ))}
    </List>
  );
}
