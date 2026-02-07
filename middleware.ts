import { rewrite } from "@vercel/functions";

export default function middleware(request: Request) {
  const url = new URL(request.url);

  if (url.pathname === "/init-script.js") {
    return rewrite(
      new URL(
        `${process.env.UMAMI_DOMAIN}/script.js`,
      ),
    );
  }

  if (url.pathname.startsWith("/api/send")) {
    return rewrite(new URL(`${process.env.UMAMI_DOMAIN}/api/send`));
  }
}
