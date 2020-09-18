import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { theme } from "./theme.json";
import less from "less";
import { demoText } from "./demo";
import mdParser from "../../../utils/mdParse";
less.render(
  `body{
            background:red;
            h1{
                color:red;
            }
        }`,
  (err, out) => console.log(out)
);
const ifr = URL.createObjectURL(
  new Blob(
    [
      `<html>
      <head>
        <style>
            body{
                margin:0;
            }
        </style>
      </head>
      <body style="  overflow: hidden">
      <div id="make" >
      ${mdParser.render(demoText)}
        <h1>test</h1>
        </div>
    </html > `,
    ],
    { type: "text/html" }
  )
);
export default function ThemePreview() {
  const [style, setStyle] = useState();
  /**
   * @type {{current:HTMLIFrameElement}}
   */
  const stylePreview = useRef();
  useEffect(() => {
    const fetchStyles = async () => {
      const res = await fetch(process.env.PUBLIC_URL + theme[0].path);
      const body = await res.text();
      setStyle(body);
    };
    fetchStyles();
  }, []);
  useEffect(() => {
    if (stylePreview.current && style) {
      const iframDocument = stylePreview.current.contentDocument;
      const iframeStyle = iframDocument.createElement("style");
      less.render(style, (err, result) => {
        iframeStyle.textContent = result.css;
        iframeStyle.setAttribute("type", "text/css");
        iframDocument.head.appendChild(iframeStyle);
      });
    }
  }, [style]);

  return (
    <div
      style={{
        height: "calc(100vh - 64px - 42px)",
        background: "#fff",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      <div>
        <iframe
          width="376"
          height="667"
          style={{
            border: "none",
          }}
          ref={stylePreview}
          src={ifr}
          title="irm"
        ></iframe>
      </div>
      <div>
        <iframe
          width="376"
          height="667"
          style={{
            border: "none",
          }}
          ref={stylePreview}
          src={ifr}
          title="irm"
        ></iframe>
      </div>
      <div>
        <iframe
          width="376"
          height="667"
          style={{
            border: "none",
          }}
          ref={stylePreview}
          src={ifr}
          title="irm"
        ></iframe>
      </div>
      <div>
        <iframe
          width="376"
          height="667"
          style={{
            border: "none",
          }}
          ref={stylePreview}
          src={ifr}
          title="irm"
        ></iframe>
      </div>
    </div>
  );
}
