import React from "react";
import { useSetRecoilState } from "recoil";
import { localActions, localState } from "../../atoms/local";
import Input from "../lib/input";
import Label from "./label";
import PreForm from "./pre-form";

export default function RequestName() {
  const setLocal = useSetRecoilState(localState);
  const [name, setName] = React.useState<string>(
    localStorage.getItem("name") ?? ""
  );

  const submitName = React.useCallback(() => {
    setLocal(localActions.setRequestingPermissions(name));
  }, [name, setLocal]);

  return (
    <PreForm
      body={
        <>
          <Label htmlFor="name" text="Votre nom" />
          <Input
            handleChange={setName}
            id="name"
            placeholder="Entrez votre nom"
            required
            value={name}
          />
        </>
      }
      handleSubmit={submitName}
      submitText="Continuer"
    />
  );
}
