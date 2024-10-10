export const classe = {

    //Modal
    mainBoxModal: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '380px',
      height: '30%',
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
        height: '35%'
      },
    },
   messageModal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '380px',
    height: '20%',
    boxShadow: 24,
    bgcolor: (theme) => theme.palette.background.paper,
    p: 4,
    borderRadius: '20px',
    textAlign: 'center',
   }
 
  };
  