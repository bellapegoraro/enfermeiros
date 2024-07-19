import { Dispatch, SetStateAction } from "react";
import { TUnities } from "../types/unities";

export const patchUnities = async (
  turnId: number,
  unity: TUnities,
  setUnity: Dispatch<SetStateAction<TUnities>>,
  id: string | undefined,
  setOpenAlert: Dispatch<SetStateAction<boolean>>
) => {
  const newTurn = unity.turnos.map((t) => {
    if (t.id === turnId) {
      t.disponivel = false;
    }

    return t;
  });

  const response = await fetch(`http://localhost:3000/unidades/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ ...unity, turnos: [...newTurn] }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  setUnity(data);
  setOpenAlert(true);
};
