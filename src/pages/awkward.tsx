import { useEffect, useLayoutEffect } from "react";

export default function awkward() {
  useLayoutEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tenor.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
        <h1 style={{ fontFamily: "Inter" }}>
          I haven't actually gotten that far yet
        </h1>
        <div
          className="tenor-gif-embed"
          data-postid="5680775"
          data-share-method="host"
          data-aspect-ratio="1.78571"
          data-width="100%"
        >
          <a href="https://tenor.com/view/smile-office-andy-awkward-ed-helms-gif-5680775">
            Smile Office GIF
          </a>
          from <a href="https://tenor.com/search/smile-gifs">Smile GIFs</a>
        </div>
    </>
  );
}
