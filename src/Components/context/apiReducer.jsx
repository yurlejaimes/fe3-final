const apiReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
        return { ...state, users: action.payload, isLoading: false, error: null }
    case 'FETCH_ERROR':
      return { ...state, users: [], isLoading: false, error: action.payload }
    case 'LOADING':
      return { ...state, isLoading: true }
    case 'TOGGLE_DARK_MODE':
      return { ...state, darkMode: !state.darkMode };
    case 'ADD_FAVORITE':
      return { ...state, favorites: [...state.favorites, action.payload] };
    default:
      return state;
  }
};

export default apiReducer;
