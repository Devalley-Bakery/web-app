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
  inputBox: {
    pr: 4,
    display: "flex",
    justifyContent: "flex-end",
  },
  itemListContainer: {
    backgroundColor: (theme) => theme.palette.background.default,
    mt: 2,
    flexGrow: 1,
    borderRadius: "25px",
    overflowY: "auto",
    maxHeight: "450px",
  },
  listItem: {
    py: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  listItemText: {
    flexGrow: 1,
    mx: 2,
    "& .MuiListItemText-secondary": { color: "#49454F" },
    "& .MuiListItemText-primary": { fontSize: '17px' }
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
  mainBoxModal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '380px',
    height: '60%',
    boxShadow: 24,
    bgcolor: (theme) => theme.palette.background.paper,
    p: 4,
    borderRadius: '20px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    '@media (max-width: 500px)': {
      width: '85%',   
    },
  },
  modalTitle: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    px: 0,
  },
  modalItensContainer: {
    bgcolor: (theme) => theme.palette.background.default,
    borderRadius: '15px',
    height: '70%',
    maxHeight: '70%',
    p: 2,
    my: 1,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column'
  },
  modalItens: {
    maxHeight: '90%',
    width:'100%',
    overflowY: 'auto',
    pb:2
  },
  modelDetails: {
    m:-0.5,
  },
  modalButton: {
    marginTop: '16px',
    alignSelf: 'center',
    width: '50%',
    backgroundColor: (theme) => theme.palette.background.secondary,
    color: 'black',
    textTransform: 'none',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
    '&:hover': {
      backgroundColor: '#FFA1AF',
    },
  },
  totalText: {
    pt: 2
  }
};
