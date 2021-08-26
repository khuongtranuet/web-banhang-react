import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

Searchh.propTypes = {
  onSubmit: PropTypes.func,
};

Searchh.defaultProps = {
  onSubmit: null,
};
function Searchh(props) {
  const { onSubmit } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const typingTimeoutRef = useRef(null);

  function handleSearchTermChange(e) {
    const value = e.target.value;
    setSearchTerm(value);

    if (!onSubmit) return;

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      const formValues = {
        searchTerm: value,
      };
      onSubmit(formValues);
    }, 500);
  }
  return (
    <input
      className="form-control"
      type="text"
      name="keyword"
      id="keyword"
      placeholder="Nhập để tìm kiếm"
      value={searchTerm}
      onChange={handleSearchTermChange}
    />
  );
}

export default Searchh;
