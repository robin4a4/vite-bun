import { renderToReadableStream as renderToRSCStream } from "react-server-dom-webpack/server.edge";
import { App } from "./app/App";

Bun.serve({
  port: 8080,
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/rsc") {
      console.log("fetching /rsc");
      const stream = renderToRSCStream(<App />, {});
      return new Response(stream, {
        headers: {
          "Content-type": "text/x-component",
          "Access-Control-Allow-Origin": "*",
        },
      });
    }
    return new Response("404!");
  },
});
