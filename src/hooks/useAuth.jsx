import { use } from "react";
import { AuthContext } from "../contexts/AuthContext";

// custom hook to use auth context easily in any component 
// instead of importing useContext and AuthContext every time 
const useAuth = () => {
  const authInfo = use(AuthContext);
  return authInfo;
};

export default useAuth;
