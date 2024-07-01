import "../components/css/root.css";
import Language from "./language";
import "../components/css/language.css";
import Nav from "../routes/nav";

export default function LANGUAGEPAGE() {
  return (
    <>
      <div>
        <Nav />
        <Language />
      </div>
    </>
  );
}
