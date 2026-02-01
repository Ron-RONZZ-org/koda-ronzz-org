import { u as X, b as Y, a as re, P as ne, d as Q, n as h, g as S, t as le, j as e, h as y, a0 as fe, e as ie, Y as ge, o as Z, p as I, Q as be, R as ee } from "./index-BxbeiQvY.mjs";
import { aO as ve, j as ae, au as je, av as ke, aw as Ne, ax as U, k as we, bt as _e, bw as ye, bx as Ce, by as Te, bu as Se, bG as Le, bA as Re, E as oe, m as se, bE as ce, bo as De, bp as Me, bH as Pe, bq as Ee, br as Oe, bI as Be, bJ as Ae, bs as ze, bK as He, bL as Ke, bM as Ve, y as $e, z as We, N as Fe, D as Ge, A as Ie, a as de, e as ue, b as Ye, c as Qe, d as qe, q as Ue, B as Je } from "./stats-CtTAHMmO.mjs";
import { T as Xe, a as Ze, K as J, c as O, d as es } from "./tabs-BmbSUTvo.mjs";
import { B as ss, d as ts, T as as, e as rs, a as G, f as K, S as F, b as M } from "./sort-button-D282Qcym.mjs";
const ns = ({ active: a, payload: s }) => {
  if (!a || !(s != null && s.length))
    return null;
  const r = s[0].payload, n = r.send_date;
  return /* @__PURE__ */ e.jsxs("div", { className: "min-w-[220px] max-w-[240px] rounded-lg border bg-background px-3 py-2 shadow-lg", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "mb-2 flex w-full flex-col border-b pb-2", children: [
      /* @__PURE__ */ e.jsx("span", { className: "text-sm font-semibold leading-tight", children: r.post_title }),
      /* @__PURE__ */ e.jsxs("span", { className: "text-sm text-muted-foreground", children: [
        "Sent on ",
        ie(n)
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "mb-1 flex w-full justify-between", children: [
      /* @__PURE__ */ e.jsx("span", { className: "font-medium text-muted-foreground", children: "Sent" }),
      /* @__PURE__ */ e.jsx("div", { className: "ml-2 w-full text-right font-mono", children: S(r.sent_to) })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "mb-1 flex w-full justify-between", children: [
      /* @__PURE__ */ e.jsx("span", { className: "font-medium text-muted-foreground", children: "Opens" }),
      /* @__PURE__ */ e.jsxs("div", { className: "ml-2 w-full text-right font-mono", children: [
        /* @__PURE__ */ e.jsxs("span", { className: "text-muted-foreground", children: [
          S(r.total_opens),
          " / "
        ] }),
        y(r.open_rate)
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "mb-1 flex w-full justify-between", children: [
      /* @__PURE__ */ e.jsx("span", { className: "font-medium text-muted-foreground", children: "Clicks" }),
      /* @__PURE__ */ e.jsxs("div", { className: "ml-2 w-full text-right font-mono", children: [
        /* @__PURE__ */ e.jsxs("span", { className: "text-muted-foreground", children: [
          S(r.total_clicks),
          " / "
        ] }),
        y(r.click_rate)
      ] })
    ] })
  ] });
}, ls = ({
  subscribersData: a,
  avgsData: s,
  totals: r,
  isLoading: n,
  isAvgsLoading: t,
  initialTab: i = "total-subscribers"
}) => {
  const [o, x] = X(i), [u, v] = X(!1), { range: c } = Y(), w = re(), [_] = ne(), { appSettings: b } = Q(), { emailTrackClicks: p, emailTrackOpens: f } = (b == null ? void 0 : b.analytics) || {}, { totalSubscribers: P, avgOpenRate: C, avgClickRate: l } = r, k = h(() => {
    if (!a || a.length === 0)
      return [];
    let d = [];
    return d = ve(a, c, "value", "exact"), d.map((R) => ({
      ...R,
      formattedValue: S(R.value),
      label: "Total Subscribers"
    }));
  }, [a, c]), L = h(() => {
    var $, H;
    if (!k || k.length <= 1)
      return {
        direction: "same",
        value: "0%"
      };
    const d = (($ = k[0]) == null ? void 0 : $.value) ?? 0, N = ((H = k[k.length - 1]) == null ? void 0 : H.value) ?? 0;
    let R = "same";
    N > d ? R = "up" : N < d && (R = "down");
    let z;
    if (d === 0)
      z = N === 0 ? "0%" : "+100%";
    else {
      const D = (N - d) / d * 100, W = Math.round(D * 10) / 10;
      z = `${D >= 0 ? "+" : ""}${W}%`;
    }
    return { direction: R, value: z };
  }, [k]);
  le(() => {
    x(i);
  }, [i]);
  const j = (d) => {
    x(d);
    const N = new URLSearchParams(_);
    N.set("tab", d), w(`?${N.toString()}`, { replace: !0 });
  }, T = {
    open_rate: {
      label: "Open rate"
    }
  }, m = h(() => ({
    "total-subscribers": {
      color: "hsl(var(--chart-darkblue))",
      datakey: "value"
    },
    "avg-open-rate": {
      color: "hsl(var(--chart-blue))",
      datakey: "open_rate"
    },
    "avg-click-rate": {
      color: "hsl(var(--chart-teal))",
      datakey: "click_rate"
    }
  }), []), { barDomain: g, barTicks: V } = h(() => {
    var te;
    if (!s || s.length === 0 || o === "total-subscribers")
      return { barDomain: [0, 1], barTicks: [0, 1] };
    const d = (te = m[o]) == null ? void 0 : te.datakey;
    if (!d)
      return { barDomain: [0, 1], barTicks: [0, 1] };
    const N = s.map((q) => q[d]).filter((q) => typeof q == "number");
    if (N.length === 0)
      return { barDomain: [0, 1], barTicks: [0, 1] };
    const R = Math.min(...N), z = Math.max(...N), $ = Math.floor(R * 10) / 10, H = Math.ceil(z * 10) / 10, D = Math.max(0, $), W = H === D ? D + 0.1 : H;
    return {
      barDomain: [D, W],
      barTicks: [D, W]
    };
  }, [s, o, m]);
  if (n)
    return /* @__PURE__ */ e.jsx("div", { className: "-mb-6 flex h-[calc(16vw+132px)] w-full items-start justify-center", children: /* @__PURE__ */ e.jsx(ae, {}) });
  let B = "grid-cols-3";
  (!p || !f) && (B = "grid-cols-2"), !p && !f && (B = "grid-cols-1");
  const A = o === "avg-open-rate" && C > g[0] && C < g[1] || o === "avg-click-rate" && l > g[0] && l < g[1], E = o === "avg-open-rate" ? C : l;
  return /* @__PURE__ */ e.jsxs(Xe, { defaultValue: i, variant: "kpis", children: [
    /* @__PURE__ */ e.jsxs(Ze, { className: `-mx-6 hidden grid-cols-3 md:!visible md:!grid ${B}`, children: [
      /* @__PURE__ */ e.jsx(J, { className: `${!f && !p && "cursor-auto after:hidden"}`, value: "total-subscribers", onClick: () => {
        j("total-subscribers");
      }, children: /* @__PURE__ */ e.jsx(
        O,
        {
          color: m["total-subscribers"].color,
          "data-testid": "total-subscribers-value",
          diffDirection: L.direction,
          diffValue: L.value,
          label: "Total subscribers",
          value: S(P)
        }
      ) }),
      f && /* @__PURE__ */ e.jsx(J, { value: "avg-open-rate", onClick: () => {
        j("avg-open-rate");
      }, children: /* @__PURE__ */ e.jsx(
        O,
        {
          className: t ? "opacity-50" : "",
          color: m["avg-open-rate"].color,
          label: "Avg. open rate",
          value: y(C)
        }
      ) }),
      p && /* @__PURE__ */ e.jsx(J, { value: "avg-click-rate", onClick: () => {
        j("avg-click-rate");
      }, children: /* @__PURE__ */ e.jsx(
        O,
        {
          className: t ? "opacity-50" : "",
          color: m["avg-click-rate"].color,
          label: "Avg. click rate",
          value: y(l)
        }
      ) })
    ] }),
    /* @__PURE__ */ e.jsxs(je, { children: [
      /* @__PURE__ */ e.jsx(ke, { className: "md:hidden", asChild: !0, children: /* @__PURE__ */ e.jsxs(es, { children: [
        o === "total-subscribers" && /* @__PURE__ */ e.jsx(
          O,
          {
            color: m["total-subscribers"].color,
            label: "Total subscribers",
            value: S(P)
          }
        ),
        o === "avg-open-rate" && f && /* @__PURE__ */ e.jsx(
          O,
          {
            className: t ? "opacity-50" : "",
            color: m["avg-open-rate"].color,
            label: "Avg. open rate",
            value: y(C)
          }
        ),
        o === "avg-click-rate" && p && /* @__PURE__ */ e.jsx(
          O,
          {
            className: t ? "opacity-50" : "",
            color: m["avg-click-rate"].color,
            label: "Avg. click rate",
            value: y(l)
          }
        )
      ] }) }),
      /* @__PURE__ */ e.jsxs(Ne, { align: "end", className: "w-56", children: [
        /* @__PURE__ */ e.jsx(U, { onClick: () => j("total-subscribers"), children: "Total subscribers" }),
        f && /* @__PURE__ */ e.jsx(U, { onClick: () => j("avg-open-rate"), children: "Avg. open rate" }),
        p && /* @__PURE__ */ e.jsx(U, { onClick: () => j("avg-click-rate"), children: "Avg. click rate" })
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "my-4 [&_.recharts-cartesian-axis-tick-value]:fill-gray-500", children: [
      o === "total-subscribers" && /* @__PURE__ */ e.jsx(
        we,
        {
          className: "-mb-3 h-[16vw] max-h-[320px] min-h-[180px] w-full",
          color: m["total-subscribers"].color,
          data: k,
          id: "mrr",
          range: c
        }
      ),
      (o === "avg-open-rate" && f || o === "avg-click-rate" && p) && /* @__PURE__ */ e.jsx(e.Fragment, { children: t ? /* @__PURE__ */ e.jsx("div", { className: "h-[320px] w-full items-center justify-center", children: /* @__PURE__ */ e.jsx(ae, {}) }) : s && s.length > 0 ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(_e, { className: "aspect-auto h-[200px] w-full md:h-[220px] xl:h-[320px]", config: T, children: /* @__PURE__ */ e.jsxs(
          ss,
          {
            className: u ? "!cursor-pointer" : "",
            data: s,
            margin: {
              top: 20
            },
            onClick: (d) => {
              d.activePayload && d.activePayload[0].payload.post_id && w(`/posts/analytics/${d.activePayload[0].payload.post_id}`, { crossApp: !0 });
            },
            onMouseLeave: () => v(!1),
            onMouseMove: (d) => {
              v(!!(d.activePayload && d.activePayload[0].payload.post_id));
            },
            children: [
              /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsxs("linearGradient", { id: "barGradient", x1: "0", x2: "0", y1: "0", y2: "1", children: [
                /* @__PURE__ */ e.jsx("stop", { offset: "0%", stopColor: m[o].color, stopOpacity: 0.8 }),
                /* @__PURE__ */ e.jsx("stop", { offset: "100%", stopColor: m[o].color, stopOpacity: 0.6 })
              ] }) }),
              /* @__PURE__ */ e.jsx(ye, { horizontal: !0, stroke: "hsl(var(--border))", vertical: !1 }),
              /* @__PURE__ */ e.jsx(
                Ce,
                {
                  axisLine: { stroke: "hsl(var(--border))", strokeWidth: 1 },
                  dataKey: "post_id",
                  interval: 0,
                  stroke: "hsl(var(--border))",
                  tickFormatter: () => "",
                  tickLine: !1,
                  tickMargin: 10
                }
              ),
              /* @__PURE__ */ e.jsx(
                Te,
                {
                  axisLine: !1,
                  domain: g,
                  tickFormatter: (d) => y(d),
                  tickLine: !1,
                  ticks: V,
                  width: fe(V, (d) => y(d))
                }
              ),
              /* @__PURE__ */ e.jsx(
                Se,
                {
                  content: /* @__PURE__ */ e.jsx(ns, {}),
                  cursor: !1,
                  isAnimationActive: !1,
                  position: { y: 10 }
                }
              ),
              A && /* @__PURE__ */ e.jsx(Le, { label: { value: `${y(E)}`, position: "left", offset: 8, fill: "hsl(var(--muted-foreground))" }, opacity: 0.5, stroke: "hsl(var(--muted-foreground))", strokeDasharray: "4 4", y: E }),
              /* @__PURE__ */ e.jsx(
                Re,
                {
                  activeBar: { fillOpacity: 1 },
                  dataKey: m[o].datakey,
                  fill: "url(#barGradient)",
                  fillOpacity: 0.6,
                  isAnimationActive: !1,
                  maxBarSize: 32,
                  minPointSize: 3,
                  radius: 4
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ e.jsxs("div", { className: "-mt-4 text-center text-sm text-muted-foreground", children: [
          "Newsletters ",
          o === "avg-open-rate" ? "opens" : "clicks",
          " in this period"
        ] })
      ] }) : /* @__PURE__ */ e.jsx(
        oe,
        {
          className: "size-full py-20",
          title: `No newsletters ${se(c)}`,
          children: /* @__PURE__ */ e.jsx(ce, { strokeWidth: 1.5 })
        }
      ) })
    ] })
  ] });
}, is = ({ newsletters: a }) => {
  const { selectedNewsletterId: s, setSelectedNewsletterId: r } = Y(), n = h(() => (a == null ? void 0 : a.filter((t) => t.status === "active")) || [], [a]);
  return le(() => {
    if (n.length > 0 && !s) {
      const t = n.find((i) => i.sort_order === 0);
      r(t ? t.id : n[0].id);
    }
  }, [n, s, r]), n.length <= 1 ? null : /* @__PURE__ */ e.jsxs(
    De,
    {
      value: s || "",
      onValueChange: (t) => {
        r(t);
      },
      children: [
        /* @__PURE__ */ e.jsxs(Me, { className: "w-auto", children: [
          /* @__PURE__ */ e.jsx(Pe, { className: "mr-2", size: 16, strokeWidth: 1.5 }),
          /* @__PURE__ */ e.jsx(Ee, { placeholder: "Select a newsletter" })
        ] }),
        /* @__PURE__ */ e.jsx(Oe, { align: "end", children: /* @__PURE__ */ e.jsxs(Be, { children: [
          /* @__PURE__ */ e.jsx(Ae, { children: "Newsletters" }),
          n.map((t) => /* @__PURE__ */ e.jsx(ze, { value: t.id, children: t.name }, t.id))
        ] }) })
      ]
    }
  );
}, os = "NewslettersResponseType", cs = ge({
  dataType: os,
  path: "/newsletters/",
  defaultSearchParams: { include: "count.active_members,count.posts", limit: "50" },
  defaultNextPageParams: (a, s) => {
    var r;
    return {
      ...s,
      page: (((r = a.meta) == null ? void 0 : r.pagination.next) || 1).toString()
    };
  },
  returnData: (a) => {
    const { pages: s } = a, r = s.flatMap((t) => t.newsletters), n = s[s.length - 1].meta;
    return {
      newsletters: r,
      meta: n,
      isEnd: n ? n.pagination.pages === n.pagination.page : !0
    };
  }
}), ds = (a, s, r = !0) => {
  const n = a ?? 30, { startDate: t, endDate: i } = h(() => Z(n), [n]), o = h(() => {
    const u = {
      date_from: I(t),
      date_to: I(i)
    };
    return s && (u.newsletter_id = s), u;
  }, [t, i, s]), x = He({ searchParams: o, enabled: r });
  return r ? x : {
    data: void 0,
    isLoading: !1,
    error: null,
    isError: !1,
    refetch: x.refetch
  };
}, us = (a, s, r, n = !0) => {
  const t = a ?? 30, i = s ?? "date desc", { startDate: o, endDate: x } = h(() => Z(t), [t]), u = h(() => {
    const c = {
      date_from: I(o),
      date_to: I(x),
      order: i
    };
    return r && (c.newsletter_id = r), c;
  }, [o, x, i, r]), v = Ke({ searchParams: u, enabled: n });
  return n ? v : {
    data: void 0,
    isLoading: !1,
    error: null,
    isError: !1,
    refetch: v.refetch
  };
}, ms = (a, s = [], r = !0) => {
  const n = h(() => {
    const i = {};
    return a && (i.newsletter_id = a), s.length > 0 && (i.post_ids = s.join(",")), i;
  }, [a, s]), t = Ve({ searchParams: n, enabled: r });
  return r ? t : {
    data: void 0,
    isLoading: !1,
    error: null,
    isError: !1,
    refetch: t.refetch
  };
}, me = (a, s, r, n = !0) => {
  const t = us(a, s, r, n), i = h(() => {
    var u;
    return (u = t.data) != null && u.stats ? t.data.stats.map((v) => v.post_id) : [];
  }, [t.data]), o = ms(
    r,
    i,
    n && i.length > 0
  );
  return {
    data: h(() => {
      var _, b;
      if (!((_ = t.data) != null && _.stats))
        return;
      const u = t.data.stats, v = ((b = o.data) == null ? void 0 : b.stats) || [], c = /* @__PURE__ */ new Map();
      v.forEach((p) => {
        c.set(p.post_id, p);
      });
      const w = u.map((p) => {
        const f = c.get(p.post_id);
        return {
          ...p,
          total_clicks: (f == null ? void 0 : f.total_clicks) || 0,
          click_rate: (f == null ? void 0 : f.click_rate) || 0
        };
      });
      return {
        ...t.data,
        stats: w
      };
    }, [t.data, o.data]),
    isLoading: t.isLoading,
    isClicksLoading: o.isLoading,
    error: t.error || o.error,
    isError: t.isError || o.isError,
    refetch: () => {
      t.refetch(), o.refetch();
    }
  };
}, he = ee.memo(({ range: a, selectedNewsletterId: s, shouldFetchStats: r, sortBy: n }) => {
  var C;
  const t = re(), { settings: i } = Y(), o = String(((C = i.find((l) => l.key === "timezone")) == null ? void 0 : C.value) || "Etc/UTC"), { data: x, isLoading: u, isClicksLoading: v } = me(
    a,
    n,
    // Reactive to sort changes, but only affects this component
    s || void 0,
    !!r
  ), { appSettings: c } = Q(), { emailTrackClicks: w, emailTrackOpens: _ } = (c == null ? void 0 : c.analytics) || {}, b = h(() => (x == null ? void 0 : x.stats) || [], [x]), p = _ && w ? 5 : _ || w ? 4 : 3, f = h(() => /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsx(G, { className: "last:border-none [&>td]:py-2.5", children: /* @__PURE__ */ e.jsx(M, { className: "font-medium", colSpan: p, children: /* @__PURE__ */ e.jsx(Ue, { className: "mt-5" }) }) }) }), [p]), P = h(() => b.length > 0 ? /* @__PURE__ */ e.jsx(e.Fragment, { children: b.map((l) => /* @__PURE__ */ e.jsxs(G, { className: "last:border-none [&>td]:py-2.5", children: [
    /* @__PURE__ */ e.jsx(M, { className: "font-medium", children: /* @__PURE__ */ e.jsx("div", { className: "group/link inline-flex items-center gap-2", children: l.post_id ? /* @__PURE__ */ e.jsx(Je, { className: "h-auto whitespace-normal p-0 text-left hover:!underline", title: "View post analytics", variant: "link", onClick: () => {
      t(`/posts/analytics/${l.post_id}/`, { crossApp: !0 });
    }, children: l.post_title }) : /* @__PURE__ */ e.jsx(e.Fragment, { children: l.post_title }) }) }),
    /* @__PURE__ */ e.jsx(M, { className: "whitespace-nowrap text-sm", children: ie(l.send_date, o) }),
    /* @__PURE__ */ e.jsx(M, { className: "text-right font-mono text-sm", children: S(l.sent_to) }),
    _ && /* @__PURE__ */ e.jsxs(M, { className: "text-right font-mono text-sm", children: [
      /* @__PURE__ */ e.jsx("span", { className: "group-hover:hidden", children: y(l.open_rate) }),
      /* @__PURE__ */ e.jsx("span", { className: "hidden group-hover:!visible group-hover:!block", children: S(l.total_opens) })
    ] }),
    w && /* @__PURE__ */ e.jsx(M, { className: "text-right font-mono text-sm", children: v ? /* @__PURE__ */ e.jsx("span", { className: "inline-block h-4 w-8 animate-pulse rounded bg-gray-200" }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx("span", { className: "group-hover:hidden", children: y(l.click_rate) }),
      /* @__PURE__ */ e.jsx("span", { className: "hidden group-hover:!visible group-hover:!block", children: S(l.total_clicks) })
    ] }) })
  ] }, l.post_id)) }) : /* @__PURE__ */ e.jsx(G, { className: "border-none hover:bg-transparent", children: /* @__PURE__ */ e.jsx(M, { className: "text-center group-hover:!bg-transparent", colSpan: 5, children: /* @__PURE__ */ e.jsx(
    oe,
    {
      className: "size-full py-20",
      title: `No newsletters ${se(a)}`,
      children: /* @__PURE__ */ e.jsx(ce, { strokeWidth: 1.5 })
    }
  ) }) }), [b, v, t, w, _, a]);
  return u || !x ? f : P;
});
he.displayName = "NewsletterTableRows";
const xe = ee.memo(({ sortBy: a, setSortBy: s, range: r }) => {
  const n = h(() => /* @__PURE__ */ e.jsxs(Ye, { children: [
    /* @__PURE__ */ e.jsx(Qe, { children: "Top newsletters" }),
    /* @__PURE__ */ e.jsxs(qe, { children: [
      " Your best performing newsletters ",
      se(r)
    ] })
  ] }), [r]), { appSettings: t } = Q(), { emailTrackClicks: i, emailTrackOpens: o } = (t == null ? void 0 : t.analytics) || {};
  return /* @__PURE__ */ e.jsx(rs, { children: /* @__PURE__ */ e.jsxs(G, { children: [
    /* @__PURE__ */ e.jsx(K, { className: "min-w-[320px]", variant: "cardhead", children: n }),
    /* @__PURE__ */ e.jsx(K, { className: "w-[65px]", children: /* @__PURE__ */ e.jsx(F, { activeSortBy: a, setSortBy: s, sortBy: "date desc", children: "Date" }) }),
    /* @__PURE__ */ e.jsx(K, { className: "w-[90px] text-right", children: /* @__PURE__ */ e.jsx(F, { activeSortBy: a, setSortBy: s, sortBy: "sent_to desc", children: "Sent" }) }),
    o && /* @__PURE__ */ e.jsx(K, { className: "w-[90px] text-right", children: /* @__PURE__ */ e.jsx(F, { activeSortBy: a, setSortBy: s, sortBy: "open_rate desc", children: "Opens" }) }),
    i && /* @__PURE__ */ e.jsx(K, { className: "w-[90px] text-right", children: /* @__PURE__ */ e.jsx(F, { activeSortBy: a, setSortBy: s, sortBy: "click_rate desc", children: "Clicks" }) })
  ] }) });
});
xe.displayName = "NewsletterTableHeader";
const pe = ee.memo(({ range: a, selectedNewsletterId: s, shouldFetchStats: r }) => {
  const [n, t] = X("open_rate desc");
  return /* @__PURE__ */ e.jsx(de, { className: "w-full max-w-[calc(100vw-64px)] overflow-x-auto sidebar:max-w-[calc(100vw-64px-280px)]", "data-testid": "top-newsletters-card", children: /* @__PURE__ */ e.jsx(ue, { children: /* @__PURE__ */ e.jsxs(ts, { children: [
    /* @__PURE__ */ e.jsx(xe, { range: a, setSortBy: t, sortBy: n }),
    /* @__PURE__ */ e.jsx(as, { children: /* @__PURE__ */ e.jsx(
      he,
      {
        range: a,
        selectedNewsletterId: s,
        shouldFetchStats: r,
        sortBy: n
      }
    ) })
  ] }) }) });
});
pe.displayName = "TopNewslettersTable";
const gs = () => {
  const { range: a, selectedNewsletterId: s } = Y(), [r] = ne(), { appSettings: n } = Q(), t = r.get("tab") || "total-subscribers", { data: i, isLoading: o } = cs({
    searchParams: {
      limit: "50"
    }
  }), x = !o && i && i.newsletters.length > 0 && !!s, { data: u, isLoading: v } = ds(
    a,
    s || void 0,
    x || !1
  ), { data: c, isLoading: w, isClicksLoading: _ } = me(
    a,
    "date asc",
    s || void 0,
    x || !1
  ), b = h(() => !(i != null && i.newsletters) || !s ? null : i.newsletters.find((l) => l.id === s) || null, [i, s]), p = h(() => {
    var j, T, m;
    const l = ((j = b == null ? void 0 : b.count) == null ? void 0 : j.active_members) || ((m = (T = u == null ? void 0 : u.stats) == null ? void 0 : T[0]) == null ? void 0 : m.total) || 0;
    let k = 0, L = 0;
    if (c != null && c.stats && c.stats.length > 0) {
      const g = c.stats, V = g.reduce((A, E) => A + (E.open_rate || 0), 0), B = g.reduce((A, E) => A + (E.click_rate || 0), 0);
      k = V / g.length, L = B / g.length;
    }
    return {
      totalSubscribers: l,
      avgOpenRate: k,
      avgClickRate: L
    };
  }, [b, u, c]), f = h(() => {
    var k, L;
    if (!((L = (k = u == null ? void 0 : u.stats) == null ? void 0 : k[0]) != null && L.values) || u.stats[0].values.length === 0) {
      const { startDate: j, endDate: T } = Z(a), m = [], g = new Date(j);
      for (; g <= T; )
        m.push({
          date: g.toISOString().split("T")[0],
          value: 0
        }), g.setDate(g.getDate() + 1);
      return m;
    }
    const l = u.stats[0].values;
    if (l.length === 1) {
      const j = l[0], T = /* @__PURE__ */ new Date(), m = a, g = new Date(T.getTime() - m * 24 * 60 * 60 * 1e3);
      return [
        {
          ...j,
          date: g.toISOString().split("T")[0]
          // Start of range
        },
        {
          ...j,
          date: T.toISOString().split("T")[0]
          // End of range (today)
        }
      ];
    }
    return l;
  }, [u, a]), P = h(() => c != null && c.stats ? c.stats.map((l) => ({
    post_id: l.post_id,
    post_title: l.post_title,
    send_date: l.send_date,
    sent_to: l.sent_to,
    total_opens: l.total_opens,
    open_rate: l.open_rate,
    total_clicks: l.total_clicks || 0,
    click_rate: l.click_rate || 0
  })) : [], [c]), C = v || _ || w;
  return n != null && n.newslettersEnabled ? /* @__PURE__ */ e.jsxs($e, { children: [
    /* @__PURE__ */ e.jsx(We, { children: /* @__PURE__ */ e.jsxs(Fe, { children: [
      /* @__PURE__ */ e.jsx(is, { newsletters: i == null ? void 0 : i.newsletters }),
      /* @__PURE__ */ e.jsx(Ge, {})
    ] }) }),
    /* @__PURE__ */ e.jsx(Ie, { isLoading: !1, loadingComponent: /* @__PURE__ */ e.jsx(e.Fragment, {}), children: /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx(de, { "data-testid": "newsletters-card", children: /* @__PURE__ */ e.jsx(ue, { children: /* @__PURE__ */ e.jsx(
        ls,
        {
          avgsData: P,
          initialTab: t,
          isAvgsLoading: !1,
          isLoading: C,
          subscribersData: f,
          totals: p
        }
      ) }) }),
      /* @__PURE__ */ e.jsx(
        pe,
        {
          range: a,
          selectedNewsletterId: s,
          shouldFetchStats: !!x
        }
      )
    ] }) })
  ] }) : /* @__PURE__ */ e.jsx(be, { to: "/" });
};
export {
  gs as default
};
//# sourceMappingURL=index-yub8Kwor.mjs.map
