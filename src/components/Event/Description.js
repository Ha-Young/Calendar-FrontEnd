import React, { useEffect, useRef} from "react";
import Input from "../../shared/Input";

const Description = ({ saveData, value }) => {
  const ref = useRef();

  useEffect(() => {
    ref.current.value = value;
  }, [value]);

  return (
    <Input>
      <label htmlFor="description">
        Add Desc:
      </label>
      <input
        type="text"
        id="description"
        ref={ref}
        onChange={ev => saveData(ev.target.value)}
      />
    </Input>
  );
};

export default Description;
