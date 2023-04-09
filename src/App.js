import Header from "./components/Header";
import Formulario from "./components/Formulario";
import CategoriasProvider from "./context/CategoriasContext";

function App() {
  return (
    <CategoriasProvider>
      <Header />

      <div className="container my-5">
        <div className="row">
          <Formulario />
        </div>
      </div>
    </CategoriasProvider>
  );
}

export default App;
