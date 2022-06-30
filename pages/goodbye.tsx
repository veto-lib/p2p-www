import { useRouter } from "next/router";
import React from "react";
import Button from "../components/lib/button";

export default function Goodbye() {
  const router = useRouter();

  const leftUrl = router.query.left as string | undefined;

  const handleRejoin = React.useCallback(() => {
    if (leftUrl !== undefined) {
      router.push(leftUrl);
    }
  }, [leftUrl, router]);

  return (
    <div className="p-4 py-32 text-center">
      <div className="mb-16 text-3xl text-slate-300">Merci d&apos; avoir participé !</div>
    </div>
  );
}
