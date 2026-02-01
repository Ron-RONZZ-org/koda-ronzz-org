import { f as l, j as r, c as m, S as $, G as P } from "./index-BxbeiQvY.mjs";
import { W as j, X as C, bE as z } from "./stats-CtTAHMmO.mjs";
import { R as G, T as R, P as _, C as v, c as W, a as b, D as y, O as D } from "./audience-BjmWFjxw.mjs";
var M = "Separator", S = "horizontal", I = ["horizontal", "vertical"], x = l((t, e) => {
  const { decorative: s, orientation: a = S, ...i } = t, o = F(a) ? a : S, g = s ? { role: "none" } : { "aria-orientation": o === "vertical" ? o : void 0, role: "separator" };
  return /* @__PURE__ */ r.jsx(
    j.div,
    {
      "data-orientation": o,
      ...g,
      ...i,
      ref: e
    }
  );
});
x.displayName = M;
function F(t) {
  return I.includes(t);
}
var T = x;
const H = {
  Reddit: "reddit.com",
  "www.reddit.com": "reddit.com",
  Facebook: "facebook.com",
  Twitter: "twitter.com",
  Bluesky: "bsky.app",
  "go.bsky.app": "bsky.app",
  Instagram: "instagram.com",
  LinkedIn: "linkedin.com",
  Threads: "threads.net",
  "Brave Search": "search.brave.com",
  Ecosia: "ecosia.org",
  Gmail: "gmail.com",
  Outlook: "outlook.com",
  "Yahoo!": "yahoo.com",
  "AOL Mail": "aol.com",
  Flipboard: "flipboard.com",
  Substack: "substack.com",
  Ghost: "ghost.org",
  "Ghost Explore": "ghost.org",
  Buffer: "buffer.com",
  Taboola: "taboola.com",
  AppNexus: "appnexus.com",
  Wikipedia: "wikipedia.org",
  Mastodon: "mastodon.social",
  Memeorandum: "memeorandum.com",
  "Ground News": "ground.news",
  "Apple News": "apple.com",
  SmartNews: "smartnews.com",
  "Hacker News": "news.ycombinator.com",
  // Search engines
  Google: "google.com",
  "Google News": "news.google.com",
  Bing: "bing.com",
  DuckDuckGo: "duckduckgo.com",
  // Email/Newsletter
  "newsletter-email": "static.ghost.org",
  newsletter: "static.ghost.org"
}, w = (t) => {
  try {
    return new URL(t.startsWith("http") ? t : `https://${t}`).hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
};
function st({
  processedData: t,
  totalVisitors: e,
  mode: s
}) {
  return t.map((a) => ({
    ...a,
    percentage: e > 0 ? a.visits / e : 0
  }));
}
const N = (t, e) => t === e ? !0 : t.endsWith(`.${e}`), L = (t, e) => {
  if (!t || typeof t != "string")
    return { domain: null, isDirectTraffic: !1 };
  if (t === "Direct")
    return { domain: null, isDirectTraffic: !0 };
  const s = e ? w(e) : null;
  if (s) {
    const o = w(t);
    if (o && N(o, s))
      return { domain: s, isDirectTraffic: !0 };
    if (N(t, s))
      return { domain: s, isDirectTraffic: !0 };
  }
  const a = H[t];
  return a ? { domain: a, isDirectTraffic: !1 } : /^[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(\.[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t) ? { domain: t.replace(/^www\./, ""), isDirectTraffic: !1 } : { domain: null, isDirectTraffic: !1 };
};
function at({
  data: t,
  mode: e,
  siteUrl: s,
  siteIcon: a,
  defaultSourceIconUrl: i
}) {
  if (!t)
    return [];
  const o = /* @__PURE__ */ new Map();
  let u = 0;
  if (t.forEach((c) => {
    const { domain: d, isDirectTraffic: k } = L(c.source, s), f = Number(c.visits || 0);
    if (k || !c.source || c.source === "")
      u += f;
    else {
      const p = String(c.source), E = d ? `https://www.faviconextractor.com/favicon/${d}?larger=true` : i, O = d ? `https://${d}` : void 0;
      if (o.has(p)) {
        const h = o.get(p);
        h.visits += f;
      } else {
        const h = {
          source: p,
          visits: f,
          isDirectTraffic: !1,
          iconSrc: E,
          displayName: p,
          linkUrl: O
        };
        o.set(p, h);
      }
    }
  }), u > 0) {
    const c = {
      source: "Direct",
      visits: u,
      isDirectTraffic: !0,
      iconSrc: a || i,
      displayName: "Direct",
      linkUrl: void 0
    };
    o.set("Direct", c);
  }
  return Array.from(o.values()).sort((c, d) => d.visits - c.visits);
}
const U = l(
  ({ className: t, orientation: e = "horizontal", decorative: s = !0, ...a }, i) => /* @__PURE__ */ r.jsx(
    T,
    {
      ref: i,
      className: m(
        "shrink-0 bg-border",
        e === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        t
      ),
      decorative: s,
      orientation: e,
      ...a
    }
  )
);
U.displayName = T.displayName;
const ot = G, rt = R, Y = _, A = l(({ className: t, ...e }, s) => /* @__PURE__ */ r.jsx(
  D,
  {
    className: m(
      "fixed inset-0 z-50 bg-black/10  data-[state=open]:animate-in duration-200 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      t
    ),
    ...e,
    ref: s
  }
));
A.displayName = D.displayName;
const Z = P(
  "fixed z-50 gap-4 bg-background p-8 shadow-lg transition ease-in-out data-[state=closed]:duration-200 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
), B = l(({ side: t = "right", className: e, children: s, ...a }, i) => /* @__PURE__ */ r.jsx(Y, { children: /* @__PURE__ */ r.jsxs("div", { className: $, children: [
  /* @__PURE__ */ r.jsx(A, {}),
  /* @__PURE__ */ r.jsxs(
    v,
    {
      ref: i,
      className: m(Z({ side: t }), e),
      ...a,
      children: [
        /* @__PURE__ */ r.jsxs(W, { className: "fixed right-4 top-4 z-50 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ r.jsx(C, { className: "size-4" }),
          /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: "Close" })
        ] }),
        s
      ]
    }
  )
] }) }));
B.displayName = v.displayName;
const K = ({
  className: t,
  ...e
}) => /* @__PURE__ */ r.jsx(
  "div",
  {
    className: m(
      "flex flex-col space-y-1 text-center sm:text-left",
      t
    ),
    ...e
  }
);
K.displayName = "SheetHeader";
const X = l(({ className: t, ...e }, s) => /* @__PURE__ */ r.jsx(
  b,
  {
    ref: s,
    className: m("text-xl font-semibold text-foreground", t),
    ...e
  }
));
X.displayName = b.displayName;
const q = l(({ className: t, ...e }, s) => /* @__PURE__ */ r.jsx(
  y,
  {
    ref: s,
    className: m("text-sm text-muted-foreground", t),
    ...e
  }
));
q.displayName = y.displayName;
const it = ({ defaultSourceIconUrl: t, displayName: e, iconSrc: s }) => /* @__PURE__ */ r.jsx(r.Fragment, { children: e.trim().toLowerCase().endsWith("newsletter") ? /* @__PURE__ */ r.jsx(z, { "aria-label": "Newsletter", className: "size-4 text-muted-foreground" }) : /* @__PURE__ */ r.jsx(
  "img",
  {
    alt: "",
    className: "size-4",
    src: s,
    onError: (a) => {
      a.currentTarget.src = t;
    }
  }
) }), n = {
  POSTS: "posts",
  PAGES: "pages",
  POSTS_AND_PAGES: "posts_and_pages",
  SOURCES: "sources"
}, nt = (t) => {
  switch (t) {
    case n.POSTS:
      return "Top posts";
    case n.PAGES:
      return "Top pages";
    case n.SOURCES:
      return "Top sources";
    default:
      return "Top content";
  }
}, ct = (t, e, s) => {
  switch (t) {
    case n.POSTS:
      return `Your highest viewed posts ${s(e)}`;
    case n.PAGES:
      return `Your highest viewed pages ${s(e)}`;
    case n.POSTS_AND_PAGES:
      return `Your highest viewed posts or pages ${s(e)}`;
    case n.SOURCES:
      return `How readers found your site ${s(e)}`;
    default:
      return `Your highest viewed posts or pages ${s(e)}`;
  }
}, dt = (t, e, s) => {
  switch (t) {
    case n.POSTS:
      return `Which posts drove the most growth ${s(e)}`;
    case n.PAGES:
      return `Which pages drove the most growth ${s(e)}`;
    case n.POSTS_AND_PAGES:
      return `Which posts or pages drove the most growth ${s(e)}`;
    case n.SOURCES:
      return `Which sources drove the most growth ${s(e)}`;
    default:
      return `Which posts drove the most growth ${s(e)}`;
  }
};
function J(t, e) {
  if (!t || !e)
    return "";
  try {
    const s = new URL(e), a = s.pathname.endsWith("/") ? s.pathname : `${s.pathname}/`, i = t.replace(/^\//, ""), o = `${a}${i}`;
    return `${s.origin}${o}`;
  } catch {
    return "";
  }
}
function lt(t, e, s, a, i) {
  return () => {
    if (e && t && i === "post") {
      a(`/posts/analytics/${e}`, { crossApp: !0 });
      return;
    }
    if (t && s) {
      const o = J(t, s);
      o && window.open(o, "_blank", "noopener,noreferrer");
    }
  };
}
export {
  n as C,
  U as S,
  ot as a,
  rt as b,
  B as c,
  K as d,
  st as e,
  X as f,
  q as g,
  it as h,
  nt as i,
  ct as j,
  lt as k,
  L as l,
  dt as m,
  at as p
};
//# sourceMappingURL=url-helpers-lInkyUAU.mjs.map
