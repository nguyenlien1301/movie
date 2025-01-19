import React from "react";

const Textarea = ({ error, ...rest }) => {
  return (
    <textarea
      aria-label="minimum height"
      rows="3" // Sử dụng `rows` thay vì `minRows`
      placeholder="Content"
      style={{
        width: "100%",
        backgroundColor: "transparent",
        padding: "8px",
        color: "var(--white)",
        borderRadius: "4px",
        outline: "none",
      }}
      {...rest}
    />
  );
};

export default Textarea;
