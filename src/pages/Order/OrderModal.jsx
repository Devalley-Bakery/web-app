import DefaultModal from "../../components/DefaultModal";
import PropTypes from "prop-types";
export default function OrderModal({
  openModal,
  handleCloseModal,
  handleConfirm,
  selectedOrderId,
}) {
  return (
    <>
      <DefaultModal
        title="Finalizar pedido?"
        open={openModal === "confirm"}
        handleClose={handleCloseModal}
        handleConfirm={() => handleConfirm(selectedOrderId)}
        description="Confirme para marcar o pedido como concluído."
      />
      <DefaultModal
        title="Cancelar pedido?"
        open={openModal === "cancel"}
        handleClose={handleCloseModal}
        handleConfirm={() => handleConfirm(selectedOrderId)}
        description="Ao cancelar, o pedido será removido do sistema. Essa ação não poderá ser revertida."
      />
    </>
  );
}

OrderModal.propTypes = {

    openModal: PropTypes.bool.isRequired,
    handleCloseModal: PropTypes.func.isRequired,
    handleConfirm: PropTypes.func.isRequired,
    selectedOrderId: PropTypes.number.isRequired,
   
  };
  