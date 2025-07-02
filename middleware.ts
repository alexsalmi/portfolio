import { rewrite } from "@vercel/functions";

export default function middleware(request: Request) {
  const url = new URL(request.url);

  if (url.pathname === "/js/script.hash.outbound-links.js") {
    return rewrite(
      new URL(
        `${process.env.PLAUSIBLE_DOMAIN}/js/script.hash.outbound-links.js`,
      ),
    );
  }

  if (url.pathname.startsWith("/api/event")) {
    return rewrite(new URL(`${process.env.PLAUSIBLE_DOMAIN}/api/event`));
  }
}
