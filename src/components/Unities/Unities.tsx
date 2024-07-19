import { useEffect, useState } from "react";
import { TUnities } from "../../types/unities";
import "./Unities.css";
import { Link } from "react-router-dom";

function Unities(): JSX.Element {
  const [unities, setUnities] = useState<TUnities[]>([]);

  useEffect(() => {
    const fetchUnities = async () => {
      const response = await fetch("http://localhost:3000/unidades");
      const data = await response.json();

      setUnities(data);
    };

    fetchUnities();
  }, []);

  return (
    <div className="unitiesContainer">
      <h2 className="unitiesText">Unidades disponíveis</h2>
      <div className="unities">
        {unities.map((unity) => (
          <div className="unity">
            <h3>{unity.nome}</h3>
            <p>{unity.localizacao}</p>
            <p>{unity.descricao}</p>
            <Link className="button" to={`unidade/${unity.id}`}>
              Verificar turnos disponíveis
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Unities;
