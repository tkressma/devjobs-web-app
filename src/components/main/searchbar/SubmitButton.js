import React from "react";

export default function SubmitButton(props) {
  return (
    <button>
      <img src={props.searchIcon} alt="Submit search" />
    </button>
  );
}
