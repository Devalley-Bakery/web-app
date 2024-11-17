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
        textTransform: "none",
        "&.Mui-selected": {
            backgroundColor: "#E0B2B2",
            color: "white",
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
        alignItems: "center",
    },
    orderImage: {
        width: "100px",
        height: "100px",
        objectFit: "cover",
        borderRadius: "8px",
        marginRight: "15px",
    },
    orderId: {
        fontSize: "1.2rem",
        fontWeight: "bold",
        color: "#333",
    },
    actionButtons: {
        display: "flex",
        gap: "10px",
    },
    actionButton: {
        textTransform: "none",
        borderRadius: "8px",
        padding: "6px 12px",
    },
};
