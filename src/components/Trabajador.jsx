import React from 'react'
import { useSelector } from 'react-redux'

const Trabajador = ({valor, index, onActualizar, onEliminar}) => {

  const departamentos = useSelector(state => state.misDepartamentos.departamentos)

  return (
    <>
    <div className='columna'>
      <div className='fotoUsuario'>
        <img src={valor.picture.large} />
      </div>
      <div className='nombreUsuario'>
        <strong>
          {valor.name.last}, {valor.name.first}
        </strong>
      </div>
      <div>{valor.location.city}</div>
      <div>({valor.location.country})</div>
      <div>
      <select onChange={(e) => onActualizar(e.target.value, index)}>
          <option>Seleciona...</option>
          {
            departamentos.map((esteValor,i) => 
            esteValor === valor.departamento ?
            <option key={i} selected >{esteValor}</option>
            : <option key={i} >{esteValor}</option>)
          }
        </select>
      </div>
      <div><button onClick={() => onEliminar(valor)} className='rojo'>Eliminar</button></div>
    </div>
    </>
  )
}

export default Trabajador