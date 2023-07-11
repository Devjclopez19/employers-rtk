import { createSlice } from "@reduxjs/toolkit";

export const miSlice =  createSlice({
  name: 'misTrabajadores',
  initialState: {
    trabajadores: []
  },
  reducers: {
    agregarUnValor: (state, action) => {
      state.trabajadores = [...state.trabajadores, action.payload]
    },
    modificarUnvalor: (state, action) => {
      const { index, nuevoContinente } = action.payload
      state.trabajadores[index].departamento = nuevoContinente;
    },
    eliminarUnValor: (state, action) => {
      const {nombre, apellido, telefono} = action.payload
      state.trabajadores = state.trabajadores.filter(valor => 
          valor.name.first !== nombre && valor.name.last !== apellido && valor.phone !== telefono
        )
    }
  }
})

export const departamentosSlice =  createSlice({
  name: 'misDepartamentos',
  initialState: {
    departamentos: ["Africa (Ventas)", "America (Organizacion)", "America (Marketing)", "Asia (Datacenter)", "EEUU (Ciberseguridad)"]
  },
  reducers: {

  }
})

export const {agregarUnValor, modificarUnvalor, eliminarUnValor} = miSlice.actions
