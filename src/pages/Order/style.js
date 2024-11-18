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
    itemListContainer: {
        backgroundColor: (theme) => theme.palette.background.default,
        mt: 2,
        flexGrow: 1,
        borderRadius: "15px",
        overflowY: "auto",
        maxHeight: "615px",
    },
    toggleButtonGroup: {
        display: "flex",
        justifyContent: "center",
        borderRadius: "20px",
        padding: "10px",
    },
    toggleButton: {
        borderRadius: "20px",
        height: '40px',
        textTransform: "none",
        "&.Mui-selected": {
            backgroundColor: "#E0B2B2",
            color: "black",
            "&:hover": {
                backgroundColor: "#d19191",
            },
        },
        "&:not(.Mui-selected)": {
            backgroundColor: "#F3E5F5",
            color: "black",
            "&:hover": {
                backgroundColor: "#e6d7f0",
            },
        },
    },
    orderItem: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "5px",
    },
    orderDetails: {
        display: "flex",
        alignItems: "flex-start",
    },
    orderImage: {
        width: "100px",
        height: "100px",
        objectFit: "cover",
        borderRadius: "8px",
        marginRight: "15px",
    },
    orderId: {
        fontSize: "1rem",
        fontWeight: "bold",
        color: "#333",
        marginBottom: "15px",
    },
    actionButtons: {
        display: "flex",
        gap: "10px",

    },
    orderInfo: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
        height: "100%",
    },
    actionButton: {
        textTransform: "none",
        borderRadius: "8px",
        padding: "6px 12px",
    },
    viewOrderButton: {
        backgroundColor: 'white',
        minWitdh: '200 px',
        borderRadius: "8px",

    },
    highlightOrder: {
        ml: 3,
        borderRadius: "8px",
        marginBottom: "16px",
        "&:hover": {
            filter: "brightness(0.8)", 
          },

    },
    hightlightImage: {
        width: "100%",
        height: "250px",
        borderRadius: "10px",
        objectFit: "cover",
        cursor: "pointer",


    },
    imageButton: {
        position: "absolute",
        bottom: "14px",
        left: "8px",
        zIndex: 2,
        display: "flex",
        gap: "7px",

    },
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

};
