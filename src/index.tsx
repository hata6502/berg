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

  return (
    <div className="container mx-auto px-4 py-4">
      <div className="prose">
        <img src="favicon.png" style={{ width: 256 }} />
        <h1 className="mb-4">berg</h1>

        <h2 className="mt-0">ใใใใญ๐ใใ1็ฎๆใซใพใจใใใขใใช</h2>
        <p>
          ใใใใWebใตใคใใ
          <a
            href="https://gyazo.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Gyazo
          </a>
          ใงใใใใญใใงใใพใใ ่ชฐใซใๅฌ้ใใใชใ่ชๅ็จใฎใใใใญใๆฉ่ฝใงใใ
        </p>
        <p>
          <a href="https://helpfeel.com/hata6502/berg-63f13f12da95ab001b2a56e8">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              bergใไฝฟใ
            </button>
          </a>
          &nbsp;
          <a href="javascript:open(%60https%3A%2F%2Fberg.hata6502.com%2F%3F%24%7Bnew%20URLSearchParams(%5B%5B%22url%22%2Clocation.href%5D%5D).toString()%7D%60)%3Bvoid(0);">
            bookmarklet
          </a>
        </p>
        <p>
          <img src="https://i.gyazo.com/9983228ed3ce0a220ae6f7b669bba31a.png" />
        </p>

        <h2>ใใใใWebใตใคใใใใใใญ๐ใใงใใ</h2>
        <p>
          <ul className="flex flex-wrap break-all">
            <li className="w-28 mr-4">
              <a
                href="https://twitter.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Twitter
              </a>
            </li>

            <li className="w-28 mr-4">
              <a
                href="https://www.instagram.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Instagram
              </a>
            </li>

            <li className="w-28 mr-4">
              <a
                href="https://www.youtube.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                YouTube
              </a>
            </li>

            <li className="w-28 mr-4">
              <a
                href="https://www.nicovideo.jp/"
                rel="noopener noreferrer"
                target="_blank"
              >
                ใใณใใณ
              </a>
            </li>

            <li className="w-28 mr-4">
              <a
                href="https://www.pixiv.net/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Pixiv
              </a>
            </li>

            <li className="w-28 mr-4">
              <a
                href="https://www.deviantart.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                DevianArt
              </a>
            </li>

            <li className="w-28 mr-4">
              <a
                href="https://www.ubereats.com/jp"
                rel="noopener noreferrer"
                target="_blank"
              >
                Uber Eats
              </a>
            </li>

            <li className="w-28 mr-4">
              <a
                href="https://www.google.co.jp/maps/?hl=ja"
                rel="noopener noreferrer"
                target="_blank"
              >
                Google ใใใ
              </a>
            </li>

            <li className="w-28 mr-4">
              <a
                href="https://auctions.yahoo.co.jp/"
                rel="noopener noreferrer"
                target="_blank"
              >
                ใคใใชใฏ!
              </a>
            </li>

            <li className="w-28 mr-4">
              <a
                href="https://jp.mercari.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                mercari
              </a>
            </li>

            <li className="w-28 mr-4">
              <a
                href="https://www.fashionsnap.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                FASHIONSNAP.COM
              </a>
            </li>

            <li className="w-28 mr-4">
              <a
                href="https://www.lawson.co.jp/"
                rel="noopener noreferrer"
                target="_blank"
              >
                LAWSON
              </a>
            </li>

            <li className="w-28 mr-4">
              <a
                href="https://chiebukuro.yahoo.co.jp/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Yahoo!็ฅๆต่ข
              </a>
            </li>

            <li className="w-28 mr-4">
              <a
                href="https://note.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                note
              </a>
            </li>

            <li className="w-28 mr-4">
              <a
                href="https://scrapbox.io/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Scrapbox
              </a>
            </li>

            <li className="w-28 mr-4">
              <a
                href="https://zukan.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                ใบใซใณใใใใณใ?
              </a>
            </li>

            <li className="w-28 mr-4">
              <a
                href="https://zukan.pokemon.co.jp/"
                rel="noopener noreferrer"
                target="_blank"
              >
                ใใฑใขใณใใใ
              </a>
            </li>

            <li className="w-28 mr-4">
              <a
                href="https://ja.wikipedia.org/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Wikipedia
              </a>
            </li>

            <li className="w-28 mr-4">
              <a
                href="https://www.nikkei.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                ๆฅๆฌ็ตๆธๆฐ่
              </a>
            </li>
            <li className="w-28 mr-4">
              <a
                href="https://gigazine.net/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Gigazine
              </a>
            </li>
          </ul>
          ใใฎไปๅคๆฐใ
        </p>

        <h2>่ชๅใฎใใใใญ๐ใใๅพใใๆใๅบใใใ</h2>
        <p>
          TwitterใYouTubeใฎใใใใญใๆฉ่ฝใซใฏใ่ๅฟใฎๆค็ดขๆฉ่ฝใใชใใใใใใพใใใ
          bergใไฝฟใใจใใ?ใใถๆใซใใใใญใใใใใคใผใใๅ็ปใๆใๅบใใใใใซใชใใพใใ
        </p>

        <h2>Webใตใคใใฎๅฃๆ?นใ่ถใใๆๅ?ฑๅ้</h2>
        <p>
          ็พๅจใฎWebใงใฏใTwitterใSlackใชใฉใๅใใงใใใฏใใผใฏๆฉ่ฝใ็จๆใใฆใใพใใ
          ่ชๅ็จใฎๆๅ?ฑใชใฎใซใๅWebใตใคใใใจใงใใฉใใฉใซ็ฎก็ใใใฆใใ็ถๆณใงใใ
          bergใไฝฟใใจใใใใใWebใตใคใใงๆๅ?ฑๅ้ใใฆใๅพใใใพใจใใฆๆค็ดขใงใใใใใซใชใใพใใ
        </p>

        <p>
          <a href="https://helpfeel.com/hata6502/berg-63f13f12da95ab001b2a56e8">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              bergใไฝฟใ
            </button>
          </a>
          &nbsp;
          <a href="javascript:open(%60https%3A%2F%2Fberg.hata6502.com%2F%3F%24%7Bnew%20URLSearchParams(%5B%5B%22url%22%2Clocation.href%5D%5D).toString()%7D%60)%3Bvoid(0);">
            bookmarklet
          </a>
        </p>

        <p>
          2023&nbsp;
          <a
            href="https://twitter.com/hata6502"
            rel="noopener noreferrer"
            target="_blank"
          >
            Tomoyuki Hata
          </a>
        </p>
      </div>
    </div>
  );
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
            ["language", navigator.language],
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
  }, [code, navigator.language, state]);

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
