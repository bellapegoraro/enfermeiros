import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TUnities } from "../../types/unities";
import "./Unity.css";
import { patchUnities } from "../../helpers/patchUnities";
import Alert from "../Alert";

function Unity(): JSX.Element {
  const { id } = useParams();
  const [unity, setUnity] = useState<TUnities>({
    id: 0,
    nome: "",
    descricao: "",
    localizacao: "",
    turnos: [],
  });
  const [openAlert, setOpenAlert] = useState<boolean>(false);

  useEffect(() => {
    const fetchUnities = async () => {
      const response = await fetch(`http://localhost:3000/unidades?id=${id}`);
      const [data] = await response.json();

      setUnity(data);
    };

    fetchUnities();
  }, [id]);

  return (
    <>
      <div className="unityContainer">
        <div>
          <h3>{unity.nome}</h3>
          <p>{unity.localizacao}</p>
          <p>{unity.descricao}</p>
        </div>
        <div className="turnsContainer">
          {unity.turnos.map((turn) => {
            const buttonClassName = turn.disponivel ? "available" : "disable";
            const buttonLabel = turn.disponivel
              ? "Candidatar-se"
              : "Indisponível";
            return (
              <div className="turns">
                <div>
                  <span>{turn.dia}</span> - <span>{turn.descricao}</span>
                </div>
                <div>
                  <span>Das {turn.horarioInicio} horas às </span>
                  <span>{turn.horarioFim} horas</span>
                </div>
                <button
                  className={buttonClassName}
                  onClick={() =>
                    patchUnities(turn.id, unity, setUnity, id, setOpenAlert)
                  }
                >
                  {buttonLabel}
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <Alert open={openAlert} setOpenAlert={setOpenAlert} />
    </>
  );
}
export default Unity;
