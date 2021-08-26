import React from "react";
import PropTypes from "prop-types";

Paginationn.propTypes = {
  pagination: PropTypes.object.isRequired,
  onPageChange: PropTypes.func,
};

Paginationn.defaultProps = {
  onPageChange: null,
};
function Paginationn(props) {
  const { pagination, onPageChange } = props;
  const { page, page_size, total_rows } = pagination;
  const totalPages = Math.ceil(total_rows / page_size);
  //   console.log("totalpage: ", totalPages);

  function handlePageChange(newPage) {
    if (onPageChange) {
      onPageChange(newPage);
    }
  }
  return (
    <div>
      <button disabled={page === 1} onClick={() => handlePageChange(page - 1)}>
        Prev
      </button>

      <button
        disabled={page === totalPages}
        onClick={() => handlePageChange(page + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default Paginationn;
