import { N as C, Q as N, c as B, u as O, j as R } from "./index-DP6CzQAF.mjs";
import { b as U, u as Y } from "./posts-B7wqj_n7.mjs";
import { a as l } from "./hooks-DCiJHQ9c.mjs";
const x = "TinybirdTokenResponseType", G = {
  refetchInterval: 120 * 60 * 1e3,
  // 2 hours — tokens expire after 3 hours
  refetchIntervalInBackground: !0,
  staleTime: 110 * 60 * 1e3
  // 110 minutes - shorter than refetch interval so automatic refresh works
}, Q = l({
  dataType: x,
  path: "/tinybird/token/"
}), j = (t = {}) => Q({
  ...G,
  ...t
});
let v = !1;
const F = (t = {}) => {
  var a, o;
  const { enabled: e = !0 } = t, s = j({ enabled: e }), n = (o = (a = s.data) == null ? void 0 : a.tinybird) == null ? void 0 : o.token, r = s.error;
  return !s.isLoading && e && s.data && !n && !v && (console.warn("Tinybird analytics: No valid token received. Check your Tinybird configuration (workspaceId and adminToken must be non-empty strings)."), v = !0), {
    token: n && typeof n == "string" ? n : void 0,
    isLoading: s.isLoading,
    error: r,
    refetch: s.refetch
  };
}, M = {
  TODAY: { name: "Today", value: 1 },
  LAST_7_DAYS: { name: "Last 7 days", value: 7 },
  LAST_30_DAYS: { name: "Last 30 days", value: 31 },
  LAST_90_DAYS: { name: "Last 90 days", value: 91 },
  YEAR_TO_DATE: { name: "Year to date", value: 366 },
  LAST_12_MONTHS: { name: "Last 12 months", value: 12 * 31 },
  ALL_TIME: { name: "All time", value: 1e3 }
}, Z = {
  // Countries
  US: "United States",
  TWN: "Taiwan",
  TW: "Taiwan",
  CN: "China",
  // Technical
  "mobile-ios": "iOS",
  "mobile-android": "Android",
  macos: "macOS",
  // Sources
  "google.com": "Google",
  "ghost.org": "Ghost",
  "bing.com": "Bing",
  "bsky.app": "Bluesky",
  "yahoo.com": "Yahoo",
  "duckduckgo.com": "DuckDuckGo"
}, tt = ["NULL", "ᴺᵁᴸᴸ", "", "Others", "Other"], i = {
  PUBLIC: 1,
  // 1
  FREE: 2,
  // 2
  PAID: 4
  // 4
}, et = i.PUBLIC | i.FREE | i.PAID, st = [
  { name: "Public visitors", value: "undefined", bit: i.PUBLIC },
  { name: "Free members", value: "free", bit: i.FREE },
  { name: "Paid members", value: "paid", bit: i.PAID }
], W = "SettingsResponseType", $ = l({
  dataType: W,
  path: "/settings/",
  defaultSearchParams: {
    group: "site,theme,private,members,portal,newsletter,email,labs,slack,unsplash,views,firstpromoter,editor,comments,analytics,announcement,pintura,donations,security,social_web,explore,transistor"
  }
}), q = "SiteResponseType", z = l({
  dataType: q,
  path: "/site/"
}), L = N(void 0), H = () => {
  const t = C(L);
  if (!t)
    throw new Error("useGlobalData must be used within a PostAnalyticsProvider");
  return t;
}, K = ({ children: t }) => {
  var T, p, y, b, f, A, S;
  const { postId: a } = B();
  if (!a)
    throw new Error("Post ID is required for PostAnalyticsProvider");
  const o = U(), e = z(), [s, n] = O(M.LAST_30_DAYS.value), r = $(), c = !!((p = (T = o.data) == null ? void 0 : T.config) != null && p.stats), d = F({ enabled: c }), { data: { posts: [_] } = { posts: [] }, isLoading: h } = Y({
    searchParams: {
      filter: `id:${a}`,
      include: "email,authors,tags,tiers,count.clicks,count.signups,count.paid_conversions,count.positive_feedback,count.negative_feedback,newsletter"
    }
  }), m = [o, e, r], P = m.map((u) => u.error).find(Boolean), k = c ? d.error : null, g = P || k, E = m.some((u) => u.isLoading), I = c ? d.isLoading : !1, D = E || I;
  if (g)
    throw g;
  const w = (y = e.data) != null && y.site ? {
    url: e.data.site.url,
    icon: e.data.site.icon,
    title: e.data.site.title
  } : void 0;
  return /* @__PURE__ */ R.jsx(L.Provider, { value: {
    data: (b = o.data) == null ? void 0 : b.config,
    site: w,
    statsConfig: (A = (f = o.data) == null ? void 0 : f.config) == null ? void 0 : A.stats,
    tinybirdToken: d.token,
    isLoading: D,
    range: s,
    setRange: n,
    settings: ((S = r.data) == null ? void 0 : S.settings) || [],
    postId: a,
    post: _,
    isPostLoading: h
  }, children: t });
}, ot = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: K,
  useGlobalData: H
}, Symbol.toStringTag, { value: "Module" }));
export {
  et as A,
  M as S,
  tt as U,
  Z as a,
  st as b,
  i as c,
  F as d,
  ot as p,
  H as u
};
//# sourceMappingURL=post-analytics-context-DJd7gfVm.mjs.map
