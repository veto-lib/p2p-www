import React from "react";
import { useSetRecoilState } from "recoil";
import { localActions, localState, LocalStreamKey } from "../../atoms/local";
import { streamMap } from "../../lib/mesh/maps";
import { createLocalStream } from "../../lib/mesh/stream";
import PreForm from "./pre-form";

export default function RequestPermission() {
  const setLocal = useSetRecoilState(localState);

  const requestPermissions = React.useCallback(async () => {
    const stream = await createLocalStream();
    streamMap.set(LocalStreamKey, stream);
    setLocal(localActions.setRequestingDevices);
  }, [setLocal]);

  return (
    <PreForm
      body={
        <>
          <div>
            Pour pouvoir accéder à votre microphone et votre caméra merci de donner l&apos;accès.
          </div>
          <div className="text-slate-500">
            Vous serez toujours en mesure d&apos;arrêter de les partager à tout moment pendant l&apos;appel.
          </div>
        </>
      }
      handleSubmit={requestPermissions}
      submitText="Donner l'accès"
    />
  );
}
