import { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";

const FormSelect = ({ name, urldata, input, body, nombre }) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/${urldata}`).then(res => {
      const options = res.data.map(item => {
        return { label: item.tipoRol, value: item.idRol };
      });
      setOptions(options);
    });
  }, []);

  const handleInput = option => {
    input({
      ...body,
      [name]: option.value,
    });
  };

  return (
    <div className="block w-full">
      <label>{nombre}</label>
      <Select
        styles={{
          control: base => ({
            ...base,
            borderRadius: "10px",
            backgroundColor: "#e0f2fe",
            borderColor: "#bfdbfe",
          }),
        }}
        placeholder={name}
        options={options}
        onChange={handleInput}
      />
    </div>
  );
};

export default FormSelect;
