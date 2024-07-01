import { useContext } from "react";
import { AuthContext } from "../../store/authContext";
import "../components/css/root.css";
import useStore from "../../store/store";

export default function Nav() {
  const isLogin = useStore((state) => state.isLogin);
  const login = useStore((state) => state.login);
  return (
    <>
      <div className="sidebar">
        <nav>
          <ul>
            <li>
              <a href={`/`}>Main</a>
            </li>
            <li>
              <a href={`/dreammain`}>Dream</a>
            </li>
            <li>
              <a href={`/languagemain`}>Language</a>
            </li>
            <li>
              <a href={`/community`}>Community</a>
            </li>
            {isLogin ? (
              <li>Logout</li>
            ) : (
              <li>
                <a href={`/loginpage`}>Login</a>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
}
