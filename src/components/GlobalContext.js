import { createContext } from "react";
export const GlobalContext = createContext(null);
const { Provider: GlobalProvider } = GlobalContext;
export default GlobalProvider;
