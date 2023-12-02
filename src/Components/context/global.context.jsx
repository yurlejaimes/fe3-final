import React, { createContext, useReducer, useContext } from 'react';

// Definir tipos de acción
const TOGGLE_THEME = 'TOGGLE_THEME';
const ADD_FAVORITE = 'ADD_FAVORITE';
const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

// Reducer
const apiReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return { ...state, darkMode: !state.darkMode };
    case ADD_FAVORITE:
      // Verificar si el usuario ya está en la lista de favoritos
      const isAlreadyFavorite = state.favorites.some((favorite) => favorite.id === action.payload.id);

      if (isAlreadyFavorite) {
        return state; // No hacer cambios si ya es favorito
      }

      const updatedFavoritesAdd = [...state.favorites, action.payload];
      return { ...state, favorites: updatedFavoritesAdd };
    case REMOVE_FAVORITE:
      const updatedFavoritesRemove = state.favorites.filter((favorite) => favorite.id !== action.payload);
      return { ...state, favorites: updatedFavoritesRemove };
    default:
      return state;
  }
};

// Estado inicial
const initialState = {
  darkMode: false,
  favorites: [],
};

// Crear contexto
const GlobalContext = createContext();

// Proveedor del contexto
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(apiReducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Hook personalizado para acceder al contexto
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
