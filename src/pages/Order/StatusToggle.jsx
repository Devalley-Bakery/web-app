import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { classe } from "./style";
import PropTypes from "prop-types";

const STATUS = {
  IN_PROGRESS: "in_progress",
  COMPLETED: "completed",
};

export default function StatusToggle({ filter, setFilter }) {
  return (
    <ToggleButtonGroup
    value={filter}
    exclusive
    onChange={(event, newStatus) => newStatus && setFilter(newStatus)}
    sx={classe.toggleButtonGroup}
  >
    <ToggleButton value={STATUS.IN_PROGRESS} sx={classe.toggleButton}>
      A preparar
    </ToggleButton>
    <ToggleButton value={STATUS.COMPLETED} sx={classe.toggleButton}>
      Finalizados
    </ToggleButton>
  </ToggleButtonGroup>
  );
}


StatusToggle.propTypes = {
    filter: PropTypes.string.isRequired,
    setFilter: PropTypes.func.isRequired
  };