import { FunctionComponent, StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

const gyazoClientID = "PL_JmH6ng5Q0I27cHSBZJibq70onlu7m07cZywxHIWE";
const gyazoRedirectURI = "https://berg.hata6502.com/";

const App: FunctionComponent = () => {
  const urlSearchParams = new URLSearchParams(location.search);
  const code = urlSearchParams.get("code");
  const state = urlSearchParams.get("state");
  // For web sharing on Chrome.
  const url = urlSearchParams.get("url") || urlSearchParams.get("text");

  if (code && state) {
    return <Upload code={code} state={state} />;
  }
  if (url) {
    return <Auth url={url} />;
  }
  return null;
};

if ("serviceWorker" in navigator) {
  await navigator.serviceWorker.register("serviceWorker.mjs");
}

const container = document.createElement("div");
document.body.append(container);
createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>
);

const Upload: FunctionComponent<{ code: string; state: string }> = ({
  code,
  state,
}) => {
  const [message, setMessage] = useState("Uploading to Gyazo...");

  useEffect(() => {
    const abortController = new AbortController();

    (async () => {
      const uploadResponse = await fetch(
        `https://lkhdmrehz0.execute-api.us-east-1.amazonaws.com/?${new URLSearchParams(
          [
            ["code", code],
            ["url", state],
          ]
        ).toString()}`,
        { signal: abortController.signal }
      );
      if (!uploadResponse.ok) {
        setMessage(`Upload error. status: ${uploadResponse.status}`);
        return;
      }

      location.href = await uploadResponse.text();
    })();

    return () => abortController.abort();
  }, [code, state]);

  return <>{message}</>;
};

const Auth: FunctionComponent<{ url: string }> = ({ url }) => {
  useEffect(() => {
    location.href = `https://gyazo.com/oauth/authorize?${new URLSearchParams([
      ["client_id", gyazoClientID],
      ["redirect_uri", gyazoRedirectURI],
      ["response_type", "code"],
      ["state", url],
    ]).toString()}`;
  }, []);

  return <>Authorizing...</>;
};
