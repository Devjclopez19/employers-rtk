import React, { useEffect, useState } from "react";
import Candidato from "./Candidato";
import { useDispatch, useSelector } from "react-redux";
import { agregarUnValor } from "../store/miSlice";
import { Link } from "react-router-dom";

const Listado = () => {
  const [candidatos, setCandidatos] = useState([]);
  const listaTrabajadores = useSelector(
    (state) => state.misTrabajadores.trabajadores
  );
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=6")
      .then((response) => response.json())
      .then((datos) => setCandidatos(datos.results));
  }, []);

  const buscarUno = (indice) => {
    fetch("https://randomuser.me/api/?results=1")
      .then((response) => response.json())
      .then((datos) => {
        const provisional = [...candidatos];
        provisional[indice] = { ...datos.results[0] };
        setCandidatos(provisional);
      });
  };

  const guardarUno = (valor, index) => {
    const nuevoValor = { ...valor, departamento: "" };
    dispatch(agregarUnValor(nuevoValor));
    buscarUno(index);
  };

  return (
    <>
      <div className="presentacion">
        <h2>Lista de Candidatos</h2>
        <div className="trabajadores">
          {candidatos.map((valor, index) => (
            <Candidato
              valor={valor}
              key={index}
              onBuscarUno={buscarUno}
              onGuardarUno={guardarUno}
              index={index}
            />
          ))}
        </div>
      </div>
      <hr />
      <div className="candidatos">
        {listaTrabajadores.map((valor, i) => (
          <Link to="/gestion" key={i}>
            <button className="btn">{valor.name.first}</button>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Listado;
