import reducer from "../utils/globalReducer";

const { createContext, useState, useReducer, useContext } = require("react");

const GlobalContext = createContext();

const initialState = { deji: "toyosi" };

function GlobalProvider({ children }) {
  // use either useState or useReducer hook

  // const [state, setState] = useState(initialState);
  // const [state, dispatch] = useReducer(reducer, initialState);

  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
}

export function useGlobalContext() {
  return useContext(GlobalContext);
}

export default GlobalProvider;
