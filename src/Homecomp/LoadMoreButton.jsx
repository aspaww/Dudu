// src/components2/LoadMoreButton.jsx

import PropTypes from "prop-types";

export default function LoadMoreButton({ onClick, condition }) {
  return condition ? (
    <button
      onClick={onClick}
      className="bg-white text-[#23A6F0] border border-[#23A6F0] px-6 py-2 rounded hover:bg-[#23A6F0] hover:text-white transition"
    >
      LOAD MORE PRODUCTS
    </button>
  ) : null;
}

LoadMoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  condition: PropTypes.bool.isRequired,
};
