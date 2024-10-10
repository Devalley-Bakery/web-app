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
    inputBox: {
      pr: 4,
      display: "flex",
      justifyContent: "flex-end",
    },
    itemListContainer: {
      backgroundColor: (theme) => theme.palette.background.default,
      mt: 1,
      flexGrow: 1,
      borderRadius: "25px",
      overflowY: "auto",
      height: "450px",
      p:2
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
  };
  