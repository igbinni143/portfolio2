import Firstpage from "../components/firstpage";
import "../components/css/root.css";
import Nav from "./nav";
import { useState } from "react";
import { AuthContext } from "../../store/authContext";
import Loginppage from "../components/loginppage";

export default function Root(){

    const [ isLogin, setIsLogin ] = useState(false);
      
      

    return(
        <AuthContext.Provider value={{isLogin, setIsLogin}}>
          <div>
            <Nav/>
            <Firstpage/>
        </div>  
        
        </AuthContext.Provider>

    )
}