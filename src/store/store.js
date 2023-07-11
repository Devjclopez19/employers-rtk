import { configureStore } from "@reduxjs/toolkit";
import { departamentosSlice, miSlice } from "./miSlice";

export default configureStore({
  reducer: {
    misTrabajadores: miSlice.reducer,
    misDepartamentos: departamentosSlice.reducer
  }
})