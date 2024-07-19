import { Dispatch, SetStateAction, useEffect, useState } from "react";
import "./Alert.css";

type TAlert = {
  open: boolean;
  setOpenAlert: Dispatch<SetStateAction<boolean>>;
};

function Alert({ open, setOpenAlert }: TAlert): JSX.Element {
  const [className, setClassName] = useState<string>("alert");

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setClassName("alert open");
      }, 500);
    }

    setTimeout(() => {
      setClassName("alert");
      setOpenAlert(false);
    }, 4000);
  }, [open, setOpenAlert]);

  return <div className={className}>Candidatura Enviada com Sucesso!</div>;
}

export default Alert;
