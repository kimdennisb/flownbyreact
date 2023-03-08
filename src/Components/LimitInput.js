import { useRef } from "react";
import PropTypes from "prop-types";

const LimitInput = (props, { store }) => {
  const inputRef = useRef(null);
  const onChange = (e) => {
    store.dispatch({ type: "LIMIT", limit: Number(e.target.value) });
  };

  return (
    <div className="limitinput">
      <label className="custom-field">
        <input
          ref={inputRef}
          type="number"
          placeholder="&nbsp;"
          onChange={onChange}
        />
        <span className="placeholder">Enter Limit</span>
      </label>
    </div>
  );
};

LimitInput.contextTypes = {
  store: PropTypes.object,
};

export default LimitInput;
