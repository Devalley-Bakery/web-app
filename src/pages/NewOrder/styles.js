export const classe = {
  //Página Novo pedido
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

    "@media (max-width:600px)": {
      flexDirection: "row",
      mt: 1,
      mb: 0,
    },
  },
  mainGrid: {
    pr: 3,
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    justifyContent: "space-between",
    "@media (max-width:600px)": {
      p: 1,
    },
  },
  itemListContainer: {
    backgroundColor: (theme) => theme.palette.background.default,
    mt: 2,
    flexGrow: 1,
    borderRadius: "15px",
    overflowY: "auto",
    maxHeight: "450px",
    "@media (max-width:600px)": {
      height: "395px",
      mt: 0,
      mb: 3,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(211, 182, 248, 0.9)", // Cor do thumb (a parte que se move)
      borderRadius: "10px", // Deixa a barra mais arredondada
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "rgba(236, 221, 255, 0.9)", // Cor do track (fundo da barra de rolagem)
    },
  },
  listItem: {
    py: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "@media (max-width:600px)": {
      flexDirection: "row",
    },
  },
  listItemText: {
    flexGrow: 1,
    mx: 2,
    "& .MuiListItemText-secondary": { color: "#49454F" },
    "& .MuiListItemText-primary": { fontSize: "17px" },
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: "10px",
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

  //Modal
  mainBoxModal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "380px",
    height: "60%",
    boxShadow: 24,
    bgcolor: (theme) => theme.palette.background.paper,
    p: 4,
    borderRadius: "20px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

    "@media (max-width: 500px)": {
      width: "85%",
    },
  },
  modalTitle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    px: 0,
  },
  modalItensContainer: {
    bgcolor: (theme) => theme.palette.background.default,
    borderRadius: "15px",
    height: "70%",
    maxHeight: "70%",
    p: 1,
    my: 1,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  modalItens: {
    maxHeight: "90%",
    width: "100%",
    overflowY: "auto",
    pb: 2,
    mr: 0,
  },
  modelDetails: {
    m: -0.5,
  },
  modalButton: {
    marginTop: "16px",
    alignSelf: "center",
    width: "60%",
    backgroundColor: (theme) => theme.palette.background.secondary,
    color: "black",
    textTransform: "none",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
    "&:hover": {
      backgroundColor: "#FFA1AF",
    },
  },
  totalText: {
    pt: 2,
  },
  emptyProducts: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "430px",
    padding: 2,
    flexGrow: 1,
    "@media (max-width:600px)": {
      height: "395px",
    },
  },

  //Nota fiscal do pedido
  receipt: {
    "& .MuiPaper-root": {
      backgroundColor: "#f3f3f3",
      borderRadius: "8px",
    },
  },
  dialog: {
    "& .MuiPaper-root": {
      padding: "20px",
      borderRadius: "8px",
    },
  },
  dialogTitle: {
    textAlign: "center",
    fontWeight: "bold",
  },
  dialogFooter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#e0d6f4",
    marginTop: "20px",
  },
  cancelButton: {
    color: "black",
    width: "25vw",
    height: "35px",
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
  },

  dataGrid: {
    height: "60vh",
    width: "750px",
    borderRadius: "20px",
    backgroundColor: (theme) => theme.palette.common.white,
    "& .MuiDataGrid-root": {
      overflow: "hidden",
      "& .MuiDataGrid-footerContainer": {
        backgroundColor: (theme) => theme.palette.common.white,
      },
    },
    "& .MuiDataGrid-cell": {
      borderBottom: "1px solid #B2A3C9",
    },
    "& .MuiDataGrid-columnHeader": {
      backgroundColor: (theme) => theme.palette.common.white,
      color: "black",
      fontWeight: "bold",
      textAlign: "center",
    },
    "& .MuiDataGrid-row:nth-of-type(odd)": {
      backgroundColor: "#E6E6FA", // Light lavender
    },
    "& .MuiDataGrid-row:nth-of-type(even)": {
      backgroundColor: "#fafafa", // Light gray
    },
  },
};
