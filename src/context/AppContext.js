import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Initial state
const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
  theme: 'light',
  language: 'en',
  notifications: [],
  services: [],
  industries: [],
  menu: {
    isOpen: false,
    activeMegaMenu: null
  }
};

// Action types
const ACTION_TYPES = {
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  CLEAR_ERROR: 'CLEAR_ERROR',
  SET_USER: 'SET_USER',
  LOGOUT: 'LOGOUT',
  SET_THEME: 'SET_THEME',
  SET_LANGUAGE: 'SET_LANGUAGE',
  ADD_NOTIFICATION: 'ADD_NOTIFICATION',
  REMOVE_NOTIFICATION: 'REMOVE_NOTIFICATION',
  SET_SERVICES: 'SET_SERVICES',
  SET_INDUSTRIES: 'SET_INDUSTRIES',
  TOGGLE_MENU: 'TOGGLE_MENU',
  SET_ACTIVE_MEGA_MENU: 'SET_ACTIVE_MEGA_MENU'
};

// Reducer function
function appReducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.SET_LOADING:
      return { ...state, loading: action.payload };
    case ACTION_TYPES.SET_ERROR:
      return { ...state, error: action.payload, loading: false };
    case ACTION_TYPES.CLEAR_ERROR:
      return { ...state, error: null };
    case ACTION_TYPES.SET_USER:
      return { ...state, user: action.payload, isAuthenticated: !!action.payload };
    case ACTION_TYPES.LOGOUT:
      return { ...state, user: null, isAuthenticated: false };
    case ACTION_TYPES.SET_THEME:
      return { ...state, theme: action.payload };
    case ACTION_TYPES.SET_LANGUAGE:
      return { ...state, language: action.payload };
    case ACTION_TYPES.ADD_NOTIFICATION:
      return { ...state, notifications: [...state.notifications, action.payload] };
    case ACTION_TYPES.REMOVE_NOTIFICATION:
      return {
        ...state,
        notifications: state.notifications.filter(n => n.id !== action.payload)
      };
    case ACTION_TYPES.SET_SERVICES:
      return { ...state, services: action.payload };
    case ACTION_TYPES.SET_INDUSTRIES:
      return { ...state, industries: action.payload };
    case ACTION_TYPES.TOGGLE_MENU:
      return { ...state, menu: { ...state.menu, isOpen: !state.menu.isOpen } };
    case ACTION_TYPES.SET_ACTIVE_MEGA_MENU:
      return { ...state, menu: { ...state.menu, activeMegaMenu: action.payload } };
    default:
      return state;
  }
}

// Create context
const AppContext = createContext();

// Provider component
export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Load initial data
  useEffect(() => {
    // Load services and industries from constants
    const loadInitialData = async () => {
      try {
        const { services, industries } = await import('../constants/HomeData');
        dispatch({ type: ACTION_TYPES.SET_SERVICES, payload: services });
        dispatch({ type: ACTION_TYPES.SET_INDUSTRIES, payload: industries });
      } catch (error) {
        dispatch({ type: ACTION_TYPES.SET_ERROR, payload: 'Failed to load initial data' });
      }
    };

    loadInitialData();
  }, []);

  // Action creators
  const actions = {
    setLoading: (loading) => dispatch({ type: ACTION_TYPES.SET_LOADING, payload: loading }),
    setError: (error) => dispatch({ type: ACTION_TYPES.SET_ERROR, payload: error }),
    clearError: () => dispatch({ type: ACTION_TYPES.CLEAR_ERROR }),
    setUser: (user) => dispatch({ type: ACTION_TYPES.SET_USER, payload: user }),
    logout: () => dispatch({ type: ACTION_TYPES.LOGOUT }),
    setTheme: (theme) => dispatch({ type: ACTION_TYPES.SET_THEME, payload: theme }),
    setLanguage: (language) => dispatch({ type: ACTION_TYPES.SET_LANGUAGE, payload: language }),
    addNotification: (notification) => dispatch({
      type: ACTION_TYPES.ADD_NOTIFICATION,
      payload: { ...notification, id: Date.now() }
    }),
    removeNotification: (id) => dispatch({ type: ACTION_TYPES.REMOVE_NOTIFICATION, payload: id }),
    toggleMenu: () => dispatch({ type: ACTION_TYPES.TOGGLE_MENU }),
    setActiveMegaMenu: (menu) => dispatch({ type: ACTION_TYPES.SET_ACTIVE_MEGA_MENU, payload: menu })
  };

  return (
    <AppContext.Provider value={{ state, actions }}>
      {children}
    </AppContext.Provider>
  );
}

// Custom hook to use the context
export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}

export default AppContext;