import React, { useState } from 'react';

const Collapsible = (props) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <button className="collapse-button" onClick={toggle}>{props.label}</button>
      {open && (
        <div className="toggle">
          {props.children}
        </div>
      )}
    </div>
  );
};

export default Collapsible;
