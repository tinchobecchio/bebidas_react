import Header from "./components/Header";
import Formulario from "./components/Formulario";

function App() {
  return (
    <>
      <Header />

      <div className="container my-5">
        <div className="row">
          <Formulario />
        </div>
      </div>
    </>
  );
}

export default App;
