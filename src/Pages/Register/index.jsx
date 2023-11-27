import { motion } from "framer-motion";
import biglogo from "../../assets/Biglogo.svg";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [body, setBody] = useState({
    nombre: "",
    apellido: "",
    codigo: "",
    correo: "",
    contrasenia: "",
  });

  const inputChange = ({ target }) => {
    const { name, value } = target;
    setBody({
      ...body,
      [name]: value,
    });
  };

  const onSubmit = () => {
    axios
      .post("http://localhost:8080/registro", body)
      .then(({ data }) => {
        console.log(data);
      })
      .catch(response => {
        console.error(response);
      });
  };

  return (
    <section className="flex flex-col gap-5 items-center pt-24 w-full h-full bg-background">
      <div className="flex gap-10 items-center justify-center">
        <img src={biglogo} className="w-[100px] h-[100px]" />
        <h1 className="text-3xl text-center font-bold">ProjectCI</h1>
      </div>
      <form className="flex flex-col gap-6 w-2/6">
        <div className="flex gap-3">
          <div>
            <label className="mt-3">Nombre </label>
            <input
              type="text"
              className="formRegister"
              onChange={inputChange}
              value={body.nombre}
              name="nombre"
            />
          </div>
          <div>
            <label className="mt-3">Apellido</label>
            <input
              type="text"
              className="formRegister"
              onChange={inputChange}
              value={body.apellido}
              name="apellido"
            />
          </div>
        </div>

        <div>
          <label>Codigo</label>
          <input
            type="text"
            className="formRegister"
            onChange={inputChange}
            value={body.codigo}
            name="codigo"
          />
        </div>
        <div>
          <label>Correo instituciona</label>
          <input
            type="email"
            className="formRegister"
            onChange={inputChange}
            value={body.correo}
            name="correo"
          />
        </div>
        <div>
          <label>Contraseña</label>
          <input
            type="password"
            className="formRegister"
            onChange={inputChange}
            value={body.contrasenia}
            name="contrasenia"
          />
        </div>
      </form>
      <motion.button
        type="submit"
        className="w-48 h-14 mt-7 bg-slate-700 rounded-3xl text-white"
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.9 }}
        onClick={onSubmit}
      >
        Crear cuenta
      </motion.button>
    </section>
  );
};

export { Register };
