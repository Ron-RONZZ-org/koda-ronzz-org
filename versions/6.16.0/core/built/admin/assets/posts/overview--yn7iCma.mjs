import { c as Y, d as O, a as f, j as e, f as C, e as y, g as re, h as ie, i as le, k as F, s as ne, b as ce } from "./index-DP6CzQAF.mjs";
import { K as L, a as _, b as T, c as R } from "./stats-6zKDlX-r.mjs";
import { B as P, H as J } from "./heading-CN611yBx.mjs";
import { C as S, a as V, b as z, M as oe, c as k, K as I, d as A, e as D, S as K, G as q, u as U, h as de, i as me, P as he, f as xe, g as ue } from "./post-analytics-header-DpQulaIB.mjs";
import { D as pe, a as je, b as ge, c as fe, d as ve, e as be, f as Ne, g as ye } from "./tabs-CdduOWr1.mjs";
import { B as E } from "./loading-indicator-Cn2-CAmI.mjs";
import { u as we, p as ke, N as Ce, c as Le } from "./links-CgQNxTQ4.mjs";
import { L as _e } from "./post-share-modal-BK7DRIjy.mjs";
import { G as Te, S as Re, K as Ie } from "./kpis-RaLrDy9e.mjs";
import { E as Ae } from "./empty-indicator-Cyc-Fljl.mjs";
import { u as X, S as De } from "./post-analytics-context-DJd7gfVm.mjs";
import { S as Q } from "./skeleton-COjEE1lX.mjs";
import { u as Ke, c as Oe } from "./growth-CgupYSOh.mjs";
const Pe = ({ post: d, isNewsletterStatsLoading: n, isWebShown: u }) => {
  const { postId: s } = Y(), t = O(), r = f(() => {
    var v, b, N;
    const o = ((v = d.email) == null ? void 0 : v.opened_count) || 0, i = ((b = d.email) == null ? void 0 : b.email_count) || 0, x = ((N = d.count) == null ? void 0 : N.clicks) || 0;
    return {
      opened: o,
      clicked: x,
      openedRate: i > 0 ? o / i : 0,
      clickedRate: i > 0 ? x / i : 0,
      sent: i
    };
  }, [d]), { data: l } = we({
    searchParams: {
      filter: `post_id:'${s}'`
    }
  }), p = f(() => ke(l), [l]), m = [
    { datatype: "Clicked", value: r.clickedRate, fill: "url(#gradientTeal)", color: "hsl(var(--chart-teal))" },
    { datatype: "Opened", value: r.openedRate, fill: "url(#gradientBlue)", color: "hsl(var(--chart-blue))" }
  ], a = {
    percentage: {
      label: "Opened"
    },
    Average: {
      label: "Clicked"
    },
    "This newsletter": {
      label: "Opened"
    }
  }, c = d.email_only || !u;
  return /* @__PURE__ */ e.jsxs(S, { className: `group/datalist overflow-hidden ${c && "col-span-2"}`, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "relative flex items-center justify-between gap-6", children: [
      /* @__PURE__ */ e.jsx(V, { children: /* @__PURE__ */ e.jsxs(z, { className: "flex items-center gap-1.5 text-lg", children: [
        /* @__PURE__ */ e.jsx(oe, { size: 16, strokeWidth: 1.5 }),
        "Newsletter performance"
      ] }) }),
      /* @__PURE__ */ e.jsx(P, { className: "absolute right-6 translate-x-10 opacity-0 transition-all duration-300 group-hover/datalist:translate-x-0 group-hover/datalist:opacity-100", size: "sm", variant: "outline", onClick: () => {
        t(`/posts/analytics/${s}/newsletter`);
      }, children: "View more" })
    ] }),
    n ? /* @__PURE__ */ e.jsx(k, { children: /* @__PURE__ */ e.jsx("div", { className: "mx-auto flex min-h-[250px] items-center justify-center xl:size-full", children: /* @__PURE__ */ e.jsx(E, {}) }) }) : /* @__PURE__ */ e.jsxs(k, { className: `${c && "grid grid-cols-2"}`, children: [
      /* @__PURE__ */ e.jsxs("div", { className: `${c && "border-r pr-6"}`, children: [
        /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-6", children: [
          /* @__PURE__ */ e.jsx(I, { className: "group relative flex grow flex-row items-start justify-between gap-5 border-none px-0 pt-0", children: /* @__PURE__ */ e.jsxs("div", { className: "flex grow flex-col gap-1.5 border-none pb-0", children: [
            /* @__PURE__ */ e.jsx(A, { color: "hsl(var(--chart-blue))", children: "Open rate" }),
            /* @__PURE__ */ e.jsx(
              D,
              {
                value: C(r.openedRate)
              }
            )
          ] }) }),
          /* @__PURE__ */ e.jsx(I, { className: "group relative flex grow flex-row items-start justify-between gap-5 border-none px-0 pt-0", children: /* @__PURE__ */ e.jsxs("div", { className: "flex grow flex-col gap-1.5 border-none pb-0", children: [
            /* @__PURE__ */ e.jsx(A, { color: "hsl(var(--chart-teal))", children: "Click rate" }),
            /* @__PURE__ */ e.jsx(
              D,
              {
                value: C(r.clickedRate)
              }
            )
          ] }) })
        ] }),
        !c && /* @__PURE__ */ e.jsx(K, {}),
        /* @__PURE__ */ e.jsx("div", { className: "mx-auto my-6 h-[240px]", children: /* @__PURE__ */ e.jsx(
          Ce,
          {
            className: "pointer-events-none aspect-square h-[240px]",
            config: a,
            data: m,
            tooltip: !1
          }
        ) })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: `${c && "pl-6"}`, children: [
        !c && /* @__PURE__ */ e.jsx(K, {}),
        /* @__PURE__ */ e.jsxs("div", { className: c ? "" : "pt-3", children: [
          /* @__PURE__ */ e.jsxs("div", { className: `flex items-center justify-between gap-3 ${c ? "pb-3" : "py-3"}`, children: [
            /* @__PURE__ */ e.jsx("span", { className: "font-medium text-muted-foreground", children: "Top clicked links in this email" }),
            /* @__PURE__ */ e.jsx(J, { children: "Members" })
          ] }),
          p.length > 0 ? /* @__PURE__ */ e.jsx(pe, { className: "", children: /* @__PURE__ */ e.jsx(je, { children: p.slice(0, c ? 10 : 5).map((o) => {
            const i = r.clicked > 0 ? o.count / r.clicked : 0;
            return /* @__PURE__ */ e.jsxs(ge, { children: [
              /* @__PURE__ */ e.jsx(fe, { style: {
                width: `${i ? Math.round(i * 100) : 0}%`
              } }),
              /* @__PURE__ */ e.jsx(ve, { children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2 overflow-hidden", children: [
                /* @__PURE__ */ e.jsx(_e, { className: "shrink-0 text-muted-foreground", size: 16, strokeWidth: 1.5 }),
                /* @__PURE__ */ e.jsx(
                  "a",
                  {
                    className: "block truncate font-medium hover:underline",
                    href: o.link.to,
                    rel: "noreferrer",
                    target: "_blank",
                    title: o.link.to,
                    children: Le(o.link.to, !0)
                  }
                )
              ] }) }),
              /* @__PURE__ */ e.jsxs(be, { children: [
                /* @__PURE__ */ e.jsx(Ne, { children: y(o.count || 0) }),
                /* @__PURE__ */ e.jsx(ye, { children: C(i) })
              ] })
            ] }, o.link.link_id);
          }) }) }) : /* @__PURE__ */ e.jsx("div", { className: "py-20 text-center text-sm text-gray-700", children: "You have no links in your post." })
        ] })
      ] })
    ] })
  ] });
}, Se = ({ chartData: d, range: n, isLoading: u, visitors: s, sourcesData: t, isNewsletterShown: r = !0 }) => {
  const { postId: l } = Y(), p = O(), { data: m } = X(), a = m == null ? void 0 : m.url, c = m == null ? void 0 : m.icon, o = f(() => t ? t.reduce((i, x) => i + Number(x.visits || 0), 0) : 0, [t]);
  return /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsxs(S, { className: `group/datalist overflow-hidden ${!r && "col-span-2"}`, "data-testid": "web-performance", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "relative flex items-center justify-between gap-6", children: [
      /* @__PURE__ */ e.jsx(V, { children: /* @__PURE__ */ e.jsxs(z, { className: "flex items-center gap-1.5 text-lg", children: [
        /* @__PURE__ */ e.jsx(q, { size: 16, strokeWidth: 1.5 }),
        "Web performance"
      ] }) }),
      /* @__PURE__ */ e.jsx(P, { className: "absolute right-6 translate-x-10 opacity-0 transition-all duration-300 group-hover/datalist:translate-x-0 group-hover/datalist:opacity-100", size: "sm", variant: "outline", onClick: () => {
        p(`/posts/analytics/${l}/web`);
      }, children: "View more" })
    ] }),
    /* @__PURE__ */ e.jsxs(k, { children: [
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsx(I, { className: "group relative flex grow flex-row items-start justify-between gap-5 border-none px-0 pt-0", "data-testid": "unique-visitors", children: /* @__PURE__ */ e.jsxs("div", { className: "flex grow flex-col gap-1.5 border-none pb-0", children: [
          /* @__PURE__ */ e.jsx(A, { color: "hsl(var(--chart-blue))", children: "Unique visitors" }),
          /* @__PURE__ */ e.jsx(
            D,
            {
              value: y(s)
            }
          )
        ] }) }),
        /* @__PURE__ */ e.jsx(K, {}),
        /* @__PURE__ */ e.jsx("div", { className: "max-h-[288px] py-6 [&_.recharts-cartesian-axis-tick-value]:fill-gray-500", children: u ? /* @__PURE__ */ e.jsx("div", { className: "flex h-[16vw] min-h-[240px] items-center justify-center", children: /* @__PURE__ */ e.jsx(E, {}) }) : /* @__PURE__ */ e.jsx(
          Te,
          {
            className: "aspect-auto h-[240px] w-full",
            color: "hsl(var(--chart-blue))",
            data: d || [],
            id: "visitors",
            range: n,
            syncId: "overview-charts"
          }
        ) })
      ] }),
      r && /* @__PURE__ */ e.jsxs("div", { className: r ? "border-t pt-3" : "-mt-3", children: [
        /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between gap-3 py-3", children: [
          /* @__PURE__ */ e.jsx("span", { className: "font-medium text-muted-foreground", children: "How readers found this post" }),
          /* @__PURE__ */ e.jsx(J, { children: "Visitors" })
        ] }) }),
        t && t.length > 0 ? /* @__PURE__ */ e.jsx(
          Re,
          {
            data: t,
            range: n,
            siteIcon: c,
            siteUrl: a,
            tableOnly: !0,
            topSourcesLimit: 5,
            totalVisitors: o
          }
        ) : /* @__PURE__ */ e.jsx(
          Ae,
          {
            className: "h-full py-10",
            description: "Once someone visits this post, sources will show here",
            title: "No visitors since you published this post",
            children: /* @__PURE__ */ e.jsx(q, { strokeWidth: 1.5 })
          }
        )
      ] })
    ] })
  ] }) });
}, Ye = () => {
  var G;
  const d = O(), { statsConfig: n, isLoading: u, post: s, isPostLoading: t, postId: r } = X(), { totals: l, isLoading: p, currencySymbol: m } = Ke(r), { appSettings: a } = re(), { emailTrackClicks: c, emailTrackOpens: o } = (a == null ? void 0 : a.analytics) || {}, i = f(() => s != null && s.published_at ? ie(s.published_at) : De.ALL_TIME.value, [s == null ? void 0 : s.published_at]), { startDate: x, endDate: v, timezone: b } = le(i), N = f(() => {
    const h = {
      site_uuid: (n == null ? void 0 : n.id) || "",
      date_from: F(x),
      date_to: F(v),
      timezone: b,
      post_uuid: ""
    };
    return !t && (s != null && s.uuid) ? {
      ...h,
      post_uuid: s.uuid
    } : h;
  }, [t, s, n == null ? void 0 : n.id, x, v, b]), { data: j, loading: $ } = U({
    endpoint: "api_kpis",
    statsConfig: n || { id: "" },
    params: N
  }), Z = f(() => j != null && j.length ? j.reduce((h, g) => {
    const H = Number(g.visits);
    return h + (isNaN(H) ? 0 : H);
  }, 0) : 0, [j]), w = Ie.visits, ee = (G = ne(j || [], i, w.dataKey, "sum")) == null ? void 0 : G.map((h) => {
    const g = Number(h[w.dataKey]);
    return {
      date: String(h.date),
      value: g,
      formattedValue: w.formatter(g),
      label: w.label
    };
  }), { data: se, loading: ae } = U({
    endpoint: "api_top_sources",
    statsConfig: n || { id: "" },
    params: N
  }), M = u || p || t || $, te = t || u || $, W = de(s) && o && c, B = !(s != null && s.email_only) && (a == null ? void 0 : a.analytics.webAnalytics);
  return ce(() => {
    !t && s && me(s) && !(a != null && a.analytics.webAnalytics) && d(`/posts/analytics/${r}/growth`);
  }, [t, s, a == null ? void 0 : a.analytics.webAnalytics, d, r]), t ? /* @__PURE__ */ e.jsx(E, {}) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(he, { currentTab: "Overview" }),
    /* @__PURE__ */ e.jsx(xe, { children: /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-6 lg:grid lg:grid-cols-2", children: [
      B && /* @__PURE__ */ e.jsx(
        Se,
        {
          chartData: ee,
          isLoading: te || M || ae,
          isNewsletterShown: W,
          range: i,
          sourcesData: se,
          visitors: Z
        }
      ),
      W && /* @__PURE__ */ e.jsx(
        Pe,
        {
          isNewsletterStatsLoading: t,
          isWebShown: B,
          post: s
        }
      ),
      /* @__PURE__ */ e.jsxs(S, { className: "group col-span-2 overflow-hidden p-0", "data-testid": "growth", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "relative flex items-center justify-between gap-6", children: [
          /* @__PURE__ */ e.jsx(V, { children: /* @__PURE__ */ e.jsxs(z, { className: "flex items-center gap-1.5 text-lg", children: [
            /* @__PURE__ */ e.jsx(ue, { size: 16, strokeWidth: 1.5 }),
            "Growth"
          ] }) }),
          /* @__PURE__ */ e.jsx(P, { className: "absolute right-6 translate-x-10 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100", size: "sm", variant: "outline", onClick: () => {
            d(`/posts/analytics/${r}/growth`);
          }, children: "View more" })
        ] }),
        /* @__PURE__ */ e.jsx(k, { className: "flex flex-col gap-6 px-0 md:grid md:grid-cols-3 md:items-stretch md:gap-0", children: M ? Array.from({ length: 3 }, (h, g) => /* @__PURE__ */ e.jsxs("div", { className: "h-[98px] gap-1 border-r px-6 py-5 last:border-r-0", children: [
          /* @__PURE__ */ e.jsx(Q, { className: "w-2/3" }),
          /* @__PURE__ */ e.jsx(Q, { className: "h-7 w-12" })
        ] }, g)) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsxs(L, { className: "grow gap-1 py-0", children: [
            /* @__PURE__ */ e.jsx(_, { children: "Free members" }),
            /* @__PURE__ */ e.jsx(T, { children: /* @__PURE__ */ e.jsx(R, { className: "text-[2.2rem]", children: y((l == null ? void 0 : l.free_members) || 0) }) })
          ] }),
          (a == null ? void 0 : a.paidMembersEnabled) && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsxs(L, { className: "grow gap-1 py-0", children: [
              /* @__PURE__ */ e.jsx(_, { children: "Paid members" }),
              /* @__PURE__ */ e.jsx(T, { children: /* @__PURE__ */ e.jsx(R, { className: "text-[2.2rem]", children: y((l == null ? void 0 : l.paid_members) || 0) }) })
            ] }),
            /* @__PURE__ */ e.jsxs(L, { className: "grow gap-1 py-0", children: [
              /* @__PURE__ */ e.jsx(_, { children: "MRR impact" }),
              /* @__PURE__ */ e.jsx(T, { children: /* @__PURE__ */ e.jsxs(R, { className: "text-[2.2rem]", children: [
                m,
                y(Oe((l == null ? void 0 : l.mrr) || 0))
              ] }) })
            ] })
          ] })
        ] }) })
      ] })
    ] }) })
  ] });
};
export {
  Ye as default
};
//# sourceMappingURL=overview--yn7iCma.mjs.map
