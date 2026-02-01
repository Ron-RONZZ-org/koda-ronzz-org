import { o as u, j as r, S as T, n as f, D as j } from "./index-DP6CzQAF.mjs";
import { a as A, T as z, b as E, c as D, d as M, X as O, e as y, D as N, O as v } from "./dialog-B-8wib-u.mjs";
import { M as C } from "./post-analytics-header-DpQulaIB.mjs";
const G = {
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
}, w = (e) => {
  try {
    return new URL(e.startsWith("http") ? e : `https://${e}`).hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
};
function K({
  processedData: e,
  totalVisitors: t,
  mode: a
}) {
  return a === "growth" ? e : e.map((n) => ({
    ...n,
    percentage: t > 0 ? n.visits / t : 0
  }));
}
const x = (e, t) => e === t ? !0 : e.endsWith(`.${t}`), P = (e, t) => {
  if (!e || typeof e != "string")
    return { domain: null, isDirectTraffic: !1 };
  if (e === "Direct")
    return { domain: null, isDirectTraffic: !0 };
  const a = t ? w(t) : null;
  if (a) {
    const m = w(e);
    if (m && x(m, a))
      return { domain: a, isDirectTraffic: !0 };
    if (x(e, a))
      return { domain: a, isDirectTraffic: !0 };
  }
  const n = G[e];
  return n ? { domain: n, isDirectTraffic: !1 } : /^[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(\.[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e) ? { domain: e.replace(/^www\./, ""), isDirectTraffic: !1 } : { domain: null, isDirectTraffic: !1 };
};
function V({
  data: e,
  mode: t,
  siteUrl: a,
  siteIcon: n,
  defaultSourceIconUrl: d
}) {
  if (!e)
    return [];
  const m = /* @__PURE__ */ new Map();
  let g = t === "visits" ? 0 : void 0;
  const o = t === "growth" ? {
    free_members: 0,
    paid_members: 0,
    mrr: 0
  } : void 0;
  if (e.forEach((s) => {
    const { domain: c, isDirectTraffic: b } = P(s.source, a), p = Number(s.visits || 0);
    if (b || !s.source || s.source === "")
      t === "visits" ? g += p : t === "growth" && o && (o.free_members += s.free_members || 0, o.paid_members += s.paid_members || 0, o.mrr += s.mrr || 0);
    else {
      const l = String(s.source), S = c ? `https://www.faviconextractor.com/favicon/${c}?larger=true` : d, k = c ? `https://${c}` : void 0;
      if (m.has(l)) {
        const i = m.get(l);
        i.visits += p, t === "growth" && (i.free_members = (i.free_members || 0) + (s.free_members || 0), i.paid_members = (i.paid_members || 0) + (s.paid_members || 0), i.mrr = (i.mrr || 0) + (s.mrr || 0));
      } else {
        const i = {
          source: l,
          visits: p,
          isDirectTraffic: !1,
          iconSrc: S,
          displayName: l,
          linkUrl: k
        };
        t === "growth" && (i.free_members = s.free_members || 0, i.paid_members = s.paid_members || 0, i.mrr = s.mrr || 0), m.set(l, i);
      }
    }
  }), t === "visits" ? g > 0 : o && (o.free_members > 0 || o.paid_members > 0 || o.mrr > 0)) {
    const s = {
      source: "Direct",
      visits: t === "visits" ? g : 0,
      isDirectTraffic: !0,
      iconSrc: n || d,
      displayName: "Direct",
      linkUrl: void 0
    };
    t === "growth" && o && (s.free_members = o.free_members, s.paid_members = o.paid_members, s.mrr = o.mrr), m.set("Direct", s);
  }
  const h = Array.from(m.values());
  return t === "growth" ? h.sort((s, c) => {
    const b = (s.mrr || 0) * 100 + (s.paid_members || 0) * 10 + (s.free_members || 0);
    return (c.mrr || 0) * 100 + (c.paid_members || 0) * 10 + (c.free_members || 0) - b;
  }) : h.sort((s, c) => c.visits - s.visits);
}
const X = A, Y = z, R = E, _ = u(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  v,
  {
    className: f(
      "fixed inset-0 z-50 bg-black/10  data-[state=open]:animate-in duration-200 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: a
  }
));
_.displayName = v.displayName;
const Z = j(
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
), W = u(({ side: e = "right", className: t, children: a, ...n }, d) => /* @__PURE__ */ r.jsx(R, { children: /* @__PURE__ */ r.jsxs("div", { className: T, children: [
  /* @__PURE__ */ r.jsx(_, {}),
  /* @__PURE__ */ r.jsxs(
    D,
    {
      ref: d,
      className: f(Z({ side: e }), t),
      ...n,
      children: [
        /* @__PURE__ */ r.jsxs(M, { className: "fixed right-4 top-4 z-50 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ r.jsx(O, { className: "size-4" }),
          /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: "Close" })
        ] }),
        a
      ]
    }
  )
] }) }));
W.displayName = D.displayName;
const $ = ({
  className: e,
  ...t
}) => /* @__PURE__ */ r.jsx(
  "div",
  {
    className: f(
      "flex flex-col space-y-1 text-center sm:text-left",
      e
    ),
    ...t
  }
);
$.displayName = "SheetHeader";
const B = u(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  y,
  {
    ref: a,
    className: f("text-xl font-semibold text-foreground", e),
    ...t
  }
));
B.displayName = y.displayName;
const F = u(({ className: e, ...t }, a) => /* @__PURE__ */ r.jsx(
  N,
  {
    ref: a,
    className: f("text-sm text-muted-foreground", e),
    ...t
  }
));
F.displayName = N.displayName;
const q = ({ defaultSourceIconUrl: e, displayName: t, iconSrc: a }) => /* @__PURE__ */ r.jsx(r.Fragment, { children: t.trim().toLowerCase().endsWith("newsletter") ? /* @__PURE__ */ r.jsx(C, { "aria-label": "Newsletter", className: "size-4 text-muted-foreground" }) : /* @__PURE__ */ r.jsx(
  "img",
  {
    alt: "",
    className: "size-4",
    src: a,
    onError: (n) => {
      n.currentTarget.src = e;
    }
  }
) });
export {
  X as S,
  Y as a,
  W as b,
  $ as c,
  B as d,
  F as e,
  K as f,
  q as g,
  V as p
};
//# sourceMappingURL=source-icon-UFyXVics.mjs.map
