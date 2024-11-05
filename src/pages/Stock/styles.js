import { darken } from "@mui/material";

// styles.js
export const classe = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    minHeight: "80%",
    minWidth: "100%",
    backgroundColor: (theme) => theme.palette.common.white,
    mb: "15px",
  },
  title: {
    display: "flex",
    fontSize: "25px",
    justifyContent: "center",
    fontFamily: "Ruluko",
  },
  buttonGrid: {
    display: "flex",
    px: 3,
    mb: 2,
    justifyContent: "center",
    flexDirection: "column",
    gap: 2,
  },
  mainGrid: {
    pr: 3,
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    justifyContent: "space-between",
  },
  itemListContainer: {
    backgroundColor: (theme) => theme.palette.background.default,
    mt: 1,
    flexGrow: 1,
    borderRadius: "25px",
    overflowY: "auto",
    height: "450px",
    p: 2
  },
  listItem: {
    py: 1,
    display: "flex",
    alignItems: "center",
    width: '190px',
    borderRadius: '5px',
    justifyContent: "space-between",
    transition: "background-color 0.3s ease",
    ":hover": {
      backgroundColor: darken("#CCACFF59", 0.5),
      cursor: "pointer",
    },
    "@media (max-width:800px)": {
      width: '162px',
    },
  },
  listItemText: {
    flexGrow: 1,
    mx: 2,
  },
  itemInfo: {
    display: 'flex', 
    flexDirection: 'column', 
    width: '180px', 
    mx: 'auto',
    "@media (max-width:900px)": {
      width: 150,
      
    },
  },
  avatar: {
    width: 180,
    height: 180,
    borderRadius: "10px",
    "@media (max-width:900px)": {
      width: 150,
      height: 150,
    },
  },
  actionButtonsBox: {
    display: "flex",
    alignItems: "center",
  },
  footerBox: {
    display: "flex",
    justifyContent: "space-between",
    px: 1,
    mb: 2,
  },
  button: {
    width: '130px'
  }
};
