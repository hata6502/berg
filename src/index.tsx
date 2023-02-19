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

        <h2 className="mt-0">「いいね👍」を1箇所にまとめるアプリ</h2>
        <p>
          あらゆるWebサイトを
          <a
            href="https://gyazo.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Gyazo
          </a>
          で「いいね」できます。 誰にも公開されない自分用の「いいね」機能です。
        </p>
        <p>
          <a href="https://helpfeel.com/hata6502/berg-63f13f12da95ab001b2a56e8">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              bergを使う
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

        <h2>あらゆるWebサイトを「いいね👍」できる</h2>
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
                href="https://ja.wikipedia.org/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Wikipedia
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
                ニコニコ
              </a>
            </li>

            <li className="w-28 mr-4">
              <a
                href="https://auctions.yahoo.co.jp/"
                rel="noopener noreferrer"
                target="_blank"
              >
                ヤフオク!
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
                href="https://www.hotpepper.jp/"
                rel="noopener noreferrer"
                target="_blank"
              >
                ホットペッパーグルメ
              </a>
            </li>

            <li className="w-28 mr-4">
              <a
                href="https://www.jalan.net/"
                rel="noopener noreferrer"
                target="_blank"
              >
                じゃらん
              </a>
            </li>

            <li className="w-28 mr-4">
              <a
                href="https://chiebukuro.yahoo.co.jp/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Yahoo!知恵袋
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
                href="https://www.uniqlo.com/jp/ja/"
                rel="noopener noreferrer"
                target="_blank"
              >
                UNIQLO
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
                href="https://note.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                note
              </a>
            </li>

            <li className="w-28 mr-4">
              <a
                href="https://zukan.pokemon.co.jp/"
                rel="noopener noreferrer"
                target="_blank"
              >
                ポケモンずかん
              </a>
            </li>

            <li className="w-28 mr-4">
              <a
                href="https://zukan.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                ズカンドットコム
              </a>
            </li>

            <li className="w-28 mr-4">
              <a
                href="https://www.nikkei.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                日本経済新聞
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
          その他多数。
        </p>

        <h2>自分の「いいね👍」を後から思い出したい</h2>
        <p>
          TwitterやYouTubeの「いいね」機能には、肝心の検索機能がないかもしれません。
          bergを使うと、だいぶ昔に「いいね」したツイートや動画を思い出せるようになります。
        </p>

        <h2>Webサイトの垣根を超えた情報収集</h2>
        <p>
          現在のWebでは、TwitterやSlackなどが各々でブックマーク機能を用意しています。
          自分用の情報なのに、各Webサイトごとでバラバラに管理されている状況です。
          bergを使うと、あらゆるWebサイトで情報収集して、後からまとめて検索できるようになります。
        </p>

        <p>
          <a href="https://helpfeel.com/hata6502/berg-63f13f12da95ab001b2a56e8">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              bergを使う
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
