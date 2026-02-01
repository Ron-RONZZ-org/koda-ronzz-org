import { o as T, u as F, j as e, b as B, p as ee, n as E, R as U, a as v, c as Qe, d as je, f as A, E as ge, F as Je, G as Xe, H as Ze, g as es, e as V } from "./index-DP6CzQAF.mjs";
import { c as ss, P as le, e as ts, d as se, B as D, H as ke } from "./heading-CN611yBx.mjs";
import { s as as, c as rs } from "./hooks-DCiJHQ9c.mjs";
import { C as te, a as ae, b as re, j as ne, c as $, S as ie, k as Ne, T as ns, h as is, P as ls, f as os, o as cs } from "./post-analytics-header-DpQulaIB.mjs";
import { aa as ds, a4 as ms, a5 as us, a6 as ps, ab as xe, ac as gs, ad as xs, D as hs, a as fs, b as bs, c as vs, d as js, e as ks, f as Ns, g as ws, ae as ys } from "./tabs-CdduOWr1.mjs";
import { b as we } from "./skeleton-COjEE1lX.mjs";
import { g as Ls, h as Cs, K, f as q, a as Y, b as Q, c as J } from "./stats-6zKDlX-r.mjs";
import { B as Ps } from "./loading-indicator-Cn2-CAmI.mjs";
import { a as Ss, u as _s, p as As, g as X, N as Z } from "./links-CgQNxTQ4.mjs";
import { u as Rs } from "./post-analytics-context-DJd7gfVm.mjs";
import { g as he } from "./posts-B7wqj_n7.mjs";
import { g as Fs } from "./dropdown-menu-C1s2rpqw.mjs";
function Ts() {
  return as.useSyncExternalStore(
    Es,
    () => !0,
    () => !1
  );
}
function Es() {
  return () => {
  };
}
var oe = "Avatar", [$s] = ss(oe), [Is, ye] = $s(oe), Le = T(
  (s, t) => {
    const { __scopeAvatar: a, ...r } = s, [o, n] = F("idle");
    return /* @__PURE__ */ e.jsx(
      Is,
      {
        scope: a,
        imageLoadingStatus: o,
        onImageLoadingStatusChange: n,
        children: /* @__PURE__ */ e.jsx(le.span, { ...r, ref: t })
      }
    );
  }
);
Le.displayName = oe;
var Ce = "AvatarImage", Pe = T(
  (s, t) => {
    const { __scopeAvatar: a, src: r, onLoadingStatusChange: o = () => {
    }, ...n } = s, c = ye(Ce, a), x = zs(r, n), h = ts((m) => {
      o(m), c.onImageLoadingStatusChange(m);
    });
    return se(() => {
      x !== "idle" && h(x);
    }, [x, h]), x === "loaded" ? /* @__PURE__ */ e.jsx(le.img, { ...n, ref: t, src: r }) : null;
  }
);
Pe.displayName = Ce;
var Se = "AvatarFallback", _e = T(
  (s, t) => {
    const { __scopeAvatar: a, delayMs: r, ...o } = s, n = ye(Se, a), [c, x] = F(r === void 0);
    return B(() => {
      if (r !== void 0) {
        const h = window.setTimeout(() => x(!0), r);
        return () => window.clearTimeout(h);
      }
    }, [r]), c && n.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ e.jsx(le.span, { ...o, ref: t }) : null;
  }
);
_e.displayName = Se;
function fe(s, t) {
  return s ? t ? (s.src !== t && (s.src = t), s.complete && s.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle";
}
function zs(s, { referrerPolicy: t, crossOrigin: a }) {
  const r = Ts(), o = ee(null), n = r ? (o.current || (o.current = new window.Image()), o.current) : null, [c, x] = F(
    () => fe(n, s)
  );
  return se(() => {
    x(fe(n, s));
  }, [n, s]), se(() => {
    const h = (k) => () => {
      x(k);
    };
    if (!n) return;
    const m = h("loaded"), l = h("error");
    return n.addEventListener("load", m), n.addEventListener("error", l), t && (n.referrerPolicy = t), typeof a == "string" && (n.crossOrigin = a), () => {
      n.removeEventListener("load", m), n.removeEventListener("error", l);
    };
  }, [n, a, t]), c;
}
var Ae = Le, Re = Pe, Fe = _e;
const Te = T(({ className: s, ...t }, a) => /* @__PURE__ */ e.jsx(
  Ae,
  {
    ref: a,
    className: E(
      "relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full",
      s
    ),
    ...t
  }
));
Te.displayName = Ae.displayName;
const Ms = T(({ className: s, ...t }, a) => /* @__PURE__ */ e.jsx(
  Re,
  {
    ref: a,
    className: E("aspect-square h-full w-full", s),
    ...t
  }
));
Ms.displayName = Re.displayName;
const Ee = T(({ className: s, ...t }, a) => /* @__PURE__ */ e.jsx(
  Fe,
  {
    ref: a,
    className: E(
      "flex h-full w-full items-center justify-center rounded-full bg-muted [&_svg]:size-4",
      s
    ),
    ...t
  }
));
Ee.displayName = Fe.displayName;
const $e = T(
  ({ className: s, type: t, ...a }, r) => /* @__PURE__ */ e.jsx(
    "input",
    {
      ref: r,
      className: E(
        "flex h-9 w-full rounded-md border border-transparent bg-gray-150 dark:bg-gray-900 px-3 py-1 text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:bg-transparent focus-visible:border-green focus-visible:shadow-[0_0_0_2px_rgba(48,207,67,.25)] disabled:cursor-not-allowed disabled:opacity-50",
        s
      ),
      type: t,
      ...a
    }
  )
);
$e.displayName = "Input";
const ce = U.forwardRef(({ className: s, children: t, ...a }, r) => /* @__PURE__ */ e.jsx("div", { ref: r, className: E("flex items-center justify-between gap-4 pb-6 text-sm", s), ...a, children: t }));
ce.displayName = "SimplePagination";
const Bs = U.forwardRef(({ className: s, currentPage: t, totalPages: a, ...r }, o) => /* @__PURE__ */ e.jsxs("span", { ref: o, className: E("text-muted-foreground", s), ...r, children: [
  "Pages ",
  t,
  " of ",
  a
] }));
Bs.displayName = "SimplePaginationPages";
const de = U.forwardRef(({ className: s, children: t, ...a }, r) => /* @__PURE__ */ e.jsx("div", { ref: r, className: E("flex items-center gap-1.5", s), ...a, children: t }));
de.displayName = "SimplePaginationNavigation";
const me = U.forwardRef(
  ({ variant: s = "outline", ...t }, a) => /* @__PURE__ */ e.jsx(D, { ref: a, size: "sm", variant: s, ...t, children: /* @__PURE__ */ e.jsx(ds, {}) })
);
me.displayName = "SimplePaginationPreviousButton";
const ue = U.forwardRef(
  ({ variant: s = "outline", ...t }, a) => /* @__PURE__ */ e.jsx(D, { ref: a, size: "sm", variant: s, ...t, children: /* @__PURE__ */ e.jsx(ms, {}) })
);
ue.displayName = "SimplePaginationNextButton";
function Ie({
  data: s,
  itemsPerPage: t,
  initialPage: a = 1
}) {
  const [r, o] = F(a);
  if (t <= 0)
    throw new Error("itemsPerPage must be a positive number");
  const n = (b) => {
    const y = Math.max(1, Math.min(c, b));
    o(y);
  }, c = v(() => s ? Math.ceil(s.length / t) : 1, [s, t]);
  B(() => {
    r > c && o(1);
  }, [r, c]);
  const x = v(() => {
    if (!s)
      return null;
    const b = (r - 1) * t;
    return s.slice(b, b + t);
  }, [s, r, t]), h = () => {
    o((b) => Math.min(c, b + 1));
  }, m = () => {
    o((b) => Math.max(1, b - 1));
  }, l = r < c, k = r > 1;
  return {
    currentPage: r,
    setCurrentPage: n,
    totalPages: c,
    paginatedData: x,
    nextPage: h,
    previousPage: m,
    hasNextPage: l,
    hasPreviousPage: k
  };
}
const Ds = "FeedbackResponseType", Us = rs({
  dataType: Ds,
  path: (s) => `/feedback/${s}/`
}), Vs = (s, t) => {
  const { data: a, isLoading: r, error: o } = Us(s, {
    searchParams: {
      limit: "50",
      // Get more data for pagination
      ...t !== void 0 ? { score: t.toString() } : {}
    }
  });
  return {
    feedback: v(() => a != null && a.feedback ? a.feedback : [], [a]),
    isLoading: r,
    error: o
  };
}, Hs = ({ feedbackStats: s }) => {
  const { postId: t } = Qe(), a = je(), [r, o] = F("positive"), n = 9, c = r === "positive" ? 1 : 0, { feedback: x, isLoading: h } = Vs(t || "", c), {
    totalPages: m,
    paginatedData: l,
    nextPage: k,
    previousPage: b,
    hasNextPage: y,
    hasPreviousPage: u
  } = Ie({
    data: x,
    itemsPerPage: n
  }), g = h;
  return /* @__PURE__ */ e.jsxs(te, { children: [
    /* @__PURE__ */ e.jsxs(ae, { className: "pb-5", children: [
      /* @__PURE__ */ e.jsx(re, { children: "Feedback" }),
      /* @__PURE__ */ e.jsx(ne, { children: "What did your readers think?" })
    ] }),
    s.totalFeedback > 0 ? /* @__PURE__ */ e.jsxs($, { className: "pb-3", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
        /* @__PURE__ */ e.jsx(us, { className: "pb-3", defaultValue: "positive", value: r, variant: "button", onValueChange: (f) => o(f), children: /* @__PURE__ */ e.jsxs(ps, { className: "gap-1", children: [
          /* @__PURE__ */ e.jsx(xe, { className: "h-7", value: "positive", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1 text-xs", children: [
            /* @__PURE__ */ e.jsx(gs, { size: 14, strokeWidth: 1.25 }),
            /* @__PURE__ */ e.jsx("span", { className: "hidden font-medium sm:!visible sm:!inline", children: "More like this" }),
            /* @__PURE__ */ e.jsx("span", { className: "font-semibold tracking-tight", children: A(s.positiveFeedback / s.totalFeedback) })
          ] }) }),
          /* @__PURE__ */ e.jsx(xe, { className: "h-7", value: "negative", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1 text-xs", children: [
            /* @__PURE__ */ e.jsx(xs, { size: 14, strokeWidth: 1.25 }),
            /* @__PURE__ */ e.jsx("span", { className: "hidden font-medium sm:!visible sm:!inline", children: "Less like this" }),
            /* @__PURE__ */ e.jsx("span", { className: "font-semibold tracking-tight", children: A(s.negativeFeedback / s.totalFeedback) })
          ] }) })
        ] }) }),
        /* @__PURE__ */ e.jsx(ke, { className: "mb-3 mr-2 lg:hidden xl:!visible xl:!block", children: "Date" })
      ] }),
      /* @__PURE__ */ e.jsx(ie, {}),
      g ? /* @__PURE__ */ e.jsx(we, { className: "mt-3", lines: 3 }) : l && l.length > 0 ? /* @__PURE__ */ e.jsx("div", { className: "flex w-full flex-col py-3", children: l.map((f) => {
        var p, C;
        return /* @__PURE__ */ e.jsxs("div", { className: "flex h-10 w-full items-center justify-between gap-3 rounded-sm border-none px-2 text-sm hover:cursor-pointer hover:bg-accent", onClick: () => {
          a(`/members/${f.member.id}`, { crossApp: !0 });
        }, children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 font-medium", children: [
            /* @__PURE__ */ e.jsxs(Te, { className: "size-7", children: [
              ((p = f.member) == null ? void 0 : p.avatar_image) && /* @__PURE__ */ e.jsx("img", { className: "absolute aspect-square size-full", src: (C = f.member) == null ? void 0 : C.avatar_image }),
              /* @__PURE__ */ e.jsx(Ee, { className: "text-white", style: {
                backgroundColor: `${Xe(ge(f.member), 75, 55)}`
              }, children: Je(f.member) })
            ] }),
            ge(f.member)
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "whitespace-nowrap text-muted-foreground", children: Ze(f.created_at) })
        ] }, f.id);
      }) }) : /* @__PURE__ */ e.jsx("div", { className: "flex h-full items-center justify-center py-8 text-center text-sm text-muted-foreground", children: /* @__PURE__ */ e.jsxs("div", { children: [
        "No ",
        r === "positive" ? "positive" : "negative",
        " feedback yet"
      ] }) })
    ] }) : /* @__PURE__ */ e.jsxs($, { className: "flex grow flex-col items-center justify-center text-center text-sm text-muted-foreground", children: [
      /* @__PURE__ */ e.jsx("div", { children: "No members have given feedback yet" }),
      /* @__PURE__ */ e.jsx("div", { children: "When someone does, you'll see their response here." })
    ] }),
    s.totalFeedback > 0 && /* @__PURE__ */ e.jsx(Ne, { className: "grow-0", children: /* @__PURE__ */ e.jsxs("div", { className: "flex w-full items-center justify-between gap-3", children: [
      /* @__PURE__ */ e.jsxs(D, { variant: "outline", onClick: () => {
        const f = `(feedback.post_id:'${t}'+feedback.score:1)`, p = `(feedback.post_id:'${t}'+feedback.score:0)`, C = `${encodeURIComponent(f)}&post=${t}`, P = `${encodeURIComponent(p)}&post=${t}`;
        a(`/members?filter=${r === "positive" ? C : P}`, { crossApp: !0 });
      }, children: [
        "View all",
        /* @__PURE__ */ e.jsx(ns, {})
      ] }),
      m > 1 && /* @__PURE__ */ e.jsx(ce, { className: "pb-0", children: /* @__PURE__ */ e.jsxs(de, { children: [
        /* @__PURE__ */ e.jsx(
          me,
          {
            disabled: !u,
            onClick: b
          }
        ),
        /* @__PURE__ */ e.jsx(
          ue,
          {
            disabled: !y,
            onClick: k
          }
        )
      ] }) })
    ] }) })
  ] });
}, Ws = () => {
  const { mutateAsync: s, isLoading: t } = Ss();
  return {
    editLinks: s,
    isEditLinksLoading: t
  };
}, Gs = (s) => {
  const { data: t, isLoading: a } = he(s), { data: r, isLoading: o } = he(s, {
    searchParams: {
      include: "count.positive_feedback,count.negative_feedback"
    }
  }), n = v(() => t == null ? void 0 : t.posts[0], [t]), c = v(() => r == null ? void 0 : r.posts[0], [r]), x = v(() => {
    var d, L, w, _, N, S;
    return n ? {
      sent: ((d = n.email) == null ? void 0 : d.email_count) || 0,
      opened: ((L = n.email) == null ? void 0 : L.opened_count) || 0,
      clicked: ((w = n.count) == null ? void 0 : w.clicks) || 0,
      openedRate: (_ = n.email) != null && _.opened_count ? n.email.opened_count / n.email.email_count : 0,
      clickedRate: (N = n.count) != null && N.clicks && ((S = n.email) != null && S.email_count) ? n.count.clicks / n.email.email_count : 0
    } : {
      sent: 0,
      opened: 0,
      clicked: 0,
      openedRate: 0,
      clickedRate: 0
    };
  }, [n]), h = v(() => {
    if (!(c != null && c.count))
      return {
        positiveFeedback: 0,
        negativeFeedback: 0,
        totalFeedback: 0
      };
    const d = c.count.positive_feedback || 0, L = c.count.negative_feedback || 0, w = d + L;
    return {
      positiveFeedback: d,
      negativeFeedback: L,
      totalFeedback: w
    };
  }, [c]), m = v(() => {
    var d;
    return (d = n == null ? void 0 : n.newsletter) == null ? void 0 : d.id;
  }, [n]), { data: l, isLoading: k } = Ls({
    searchParams: m ? { newsletter_id: m } : {},
    enabled: !!m
  }), b = v(() => l != null && l.stats ? l.stats.map((d) => d.post_id) : [], [l]), { data: y, isLoading: u } = Cs({
    searchParams: m && b.length > 0 ? {
      newsletter_id: m,
      post_ids: b.join(",")
    } : {},
    enabled: !!m && b.length > 0
  }), g = v(() => {
    if (!(l != null && l.stats))
      return;
    const d = l.stats, L = (y == null ? void 0 : y.stats) || [], w = /* @__PURE__ */ new Map();
    L.forEach((N) => {
      w.set(N.post_id, N);
    });
    const _ = d.map((N) => {
      const S = w.get(N.post_id);
      return {
        ...N,
        total_clicks: (S == null ? void 0 : S.total_clicks) || 0,
        click_rate: (S == null ? void 0 : S.click_rate) || 0
      };
    });
    return {
      ...l,
      stats: _
    };
  }, [l, y]), f = k || u, { data: p, isLoading: C, refetch: P } = _s({
    searchParams: {
      filter: `post_id:'${s}'`
    }
  }), I = v(() => {
    if (!g || !g.stats)
      return {
        openRate: 0,
        clickRate: 0
      };
    const d = g.stats;
    if (d.length === 0)
      return {
        openRate: 0,
        clickRate: 0
      };
    const L = d.reduce((_, N) => _ + (N.open_rate || 0), 0), w = d.reduce((_, N) => _ + (N.click_rate || 0), 0);
    return {
      openRate: Number((L / d.length).toFixed(2)),
      clickRate: Number((w / d.length).toFixed(2))
    };
  }, [g]), H = v(() => As(p), [p]), W = v(() => ({
    openedRate: I.openRate,
    clickedRate: I.clickRate
  }), [I]);
  return {
    post: n,
    stats: x,
    feedbackStats: h,
    averageStats: W,
    topLinks: H,
    refetchTopLinks: P,
    isLoading: a || o || f || C
  };
}, Os = ({
  breakpoints: s = {
    sm: 1080,
    md: 1280,
    lg: 1360
  }
} = {}) => {
  const [t, a] = F("md");
  return B(() => {
    const r = () => {
      const o = window.innerWidth;
      o < s.sm ? a("sm") : o < s.md ? a("md") : a("lg");
    };
    return r(), window.addEventListener("resize", r), () => window.removeEventListener("resize", r);
  }, [s]), {
    chartSize: t,
    isSmall: t === "sm",
    isMedium: t === "md",
    isLarge: t === "lg"
  };
}, be = () => /* @__PURE__ */ e.jsx("div", { className: "absolute -right-4 top-1/2 z-10 hidden size-8 -translate-y-1/2 items-center justify-center rounded-full border bg-background text-muted-foreground   md:!visible md:!flex", children: /* @__PURE__ */ e.jsx(Fs, { className: "ml-0.5", size: 16, strokeWidth: 1.5 }) }), ve = ({
  dataColor: s,
  value: t,
  avgValue: a
}) => /* @__PURE__ */ e.jsxs("div", { className: "absolute left-1/2 top-6 z-50 flex w-[200px] -translate-x-1/2 flex-col items-stretch gap-1.5 rounded-md bg-background px-4 py-2 text-sm opacity-0 shadow-md transition-all group-hover/block:top-3 group-hover/block:opacity-100", children: [
  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 text-muted-foreground", children: [
      /* @__PURE__ */ e.jsx(
        "div",
        {
          className: "size-2 rounded-full bg-chart-blue opacity-50",
          style: {
            backgroundColor: s
          }
        }
      ),
      "This newsletter"
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "text-right font-mono", children: t })
  ] }),
  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 text-muted-foreground", children: [
      /* @__PURE__ */ e.jsx("div", { className: "size-2 rounded-full bg-chart-gray opacity-80" }),
      "Average"
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "text-right font-mono", children: a })
  ] })
] }), nt = () => {
  const s = je(), [t, a] = F(null), [r, o] = F(""), n = ee(null), c = ee(null), x = 10, { chartSize: h } = Os(), { appSettings: m } = es(), { emailTrackClicks: l, emailTrackOpens: k } = (m == null ? void 0 : m.analytics) || {}, { post: b, isPostLoading: y, postId: u } = Rs(), g = b, f = is(g);
  B(() => {
    !y && !f && s(`/posts/analytics/${u}`);
  }, [s, u, y, f]);
  const { stats: p, averageStats: C, topLinks: P, isLoading: I, refetchTopLinks: H } = Gs(u), { editLinks: W } = Ws(), d = v(() => {
    if (!(g != null && g.count))
      return {
        positiveFeedback: 0,
        negativeFeedback: 0,
        totalFeedback: 0
      };
    const i = g.count.positive_feedback || 0, j = g.count.negative_feedback || 0, R = i + j;
    return {
      positiveFeedback: i,
      negativeFeedback: j,
      totalFeedback: R
    };
  }, [g]), L = v(() => {
    var i;
    return ((i = g == null ? void 0 : g.newsletter) == null ? void 0 : i.feedback_enabled) === !0;
  }, [g]), w = v(() => d.totalFeedback > 0 ? !0 : L, [d.totalFeedback, L]), _ = (i) => {
    const j = X(P, i);
    j && (a(i), o(j.link.to));
  }, N = () => {
    if (!t)
      return;
    const i = X(P, t);
    if (!i)
      return;
    const j = r.trim();
    if (j === "" || j === i.link.to) {
      a(null), o("");
      return;
    }
    W({
      originalUrl: i.link.originalTo,
      editedUrl: r,
      postId: u
    }, {
      onSuccess: () => {
        a(null), o(""), H();
      }
    });
  }, {
    totalPages: S,
    paginatedData: G,
    nextPage: ze,
    previousPage: Me,
    hasNextPage: Be,
    hasPreviousPage: De
  } = Ie({
    data: P,
    itemsPerPage: x
  });
  B(() => {
    if (t && n.current) {
      n.current.focus();
      const i = X(P, t), j = (R) => {
        c.current && !c.current.contains(R.target) && r === (i == null ? void 0 : i.link.to) && (a(null), o(""));
      };
      return document.addEventListener("mousedown", j), () => {
        document.removeEventListener("mousedown", j);
      };
    }
  }, [t, r, P]);
  const O = I || y, Ue = [
    { datatype: "Sent", value: 1, fill: "url(#gradientPurple)", color: "hsl(var(--chart-purple))" }
  ], Ve = {
    percentage: {
      label: "O"
    },
    Average: {
      label: "Average"
    },
    "This newsletter": {
      label: "This newsletter"
    }
  }, He = [
    { datatype: "Average", value: C.openedRate, fill: "url(#gradientGray)", color: "hsl(var(--chart-gray))" },
    { datatype: "This newsletter", value: p.openedRate, fill: "url(#gradientBlue)", color: "hsl(var(--chart-blue))" }
  ], We = {
    percentage: {
      label: "Opened"
    },
    Average: {
      label: "Average"
    },
    "This newsletter": {
      label: "This newsletter"
    }
  }, Ge = [
    { datatype: "Average", value: C.clickedRate, fill: "url(#gradientGray)", color: "hsl(var(--chart-gray))" },
    { datatype: "This newsletter", value: p.clickedRate, fill: "url(#gradientTeal)", color: "hsl(var(--chart-teal))" }
  ], Oe = {
    percentage: {
      label: "Clicked"
    },
    Average: {
      label: "Average"
    },
    "This newsletter": {
      label: "This newsletter"
    }
  };
  let z = "grid-cols-3", M = "aspect-[16/10] w-full max-w-[320px] sm:aspect-[2/1] md:aspect-[10/14] md:max-w-none lg:aspect-square";
  return (!l || !k) && (z = "grid-cols-2", M = "aspect-[16/10] w-full max-w-[320px] sm:aspect-[2/1] md:aspect-square md:max-w-none lg:aspect-[15/10]"), !l && !k && (z = "grid-cols-1", M = "aspect-square w-full sm:aspect-[16/10] md:max-w-[320px] md:max-h-[320px] lg:aspect-[12/10]"), /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(ls, { currentTab: "Newsletter" }),
    /* @__PURE__ */ e.jsx(os, { children: /* @__PURE__ */ e.jsxs("div", { className: `grid grid-cols-1 gap-6 ${w && l && "lg:grid-cols-2"}`, children: [
      /* @__PURE__ */ e.jsxs(te, { className: w && l ? "lg:col-span-2" : "", children: [
        /* @__PURE__ */ e.jsxs(ae, { className: "hidden", children: [
          /* @__PURE__ */ e.jsx(re, { children: "Newsletters" }),
          /* @__PURE__ */ e.jsx(ne, { children: "How did this post perform" })
        ] }),
        O ? /* @__PURE__ */ e.jsx($, { className: "h-[25vw] p-6", children: /* @__PURE__ */ e.jsx(Ps, {}) }) : /* @__PURE__ */ e.jsxs($, { className: "p-0", children: [
          /* @__PURE__ */ e.jsxs("div", { className: `grid ${z} items-stretch border-b`, children: [
            /* @__PURE__ */ e.jsxs(K, { className: "group relative isolate grow p-3 md:px-6 md:py-5", children: [
              /* @__PURE__ */ e.jsx(q, { onClick: () => {
                const i = new URLSearchParams({
                  filterParam: `emails.post_id:${u}`,
                  postAnalytics: u
                });
                s(`/members?${i.toString()}`, { crossApp: !0 });
              }, children: "View members →" }),
              /* @__PURE__ */ e.jsxs(Y, { onClick: () => {
                const i = new URLSearchParams({
                  filterParam: `emails.post_id:${u}`,
                  postAnalytics: u
                });
                s(`/members?${i.toString()}`, { crossApp: !0 });
              }, children: [
                /* @__PURE__ */ e.jsx("div", { className: "ml-0.5 size-[9px] rounded-full bg-chart-purple !text-sm opacity-50 lg:text-base" }),
                "Sent"
              ] }),
              /* @__PURE__ */ e.jsx(Q, { children: /* @__PURE__ */ e.jsx(J, { className: "text-xl leading-none sm:text-2xl md:text-[2.6rem]", children: V(p.sent) }) })
            ] }),
            k && /* @__PURE__ */ e.jsxs(K, { className: "p-3 md:px-6 md:py-5", children: [
              /* @__PURE__ */ e.jsx(q, { onClick: () => {
                const i = new URLSearchParams({
                  filterParam: `opened_emails.post_id:${u}`,
                  postAnalytics: u
                });
                s(`/members?${i.toString()}`, { crossApp: !0 });
              }, children: "View members →" }),
              /* @__PURE__ */ e.jsxs(Y, { onClick: () => {
                const i = new URLSearchParams({
                  filterParam: `opened_emails.post_id:${u}`,
                  postAnalytics: u
                });
                s(`/members?${i.toString()}`, { crossApp: !0 });
              }, children: [
                /* @__PURE__ */ e.jsx("div", { className: "ml-0.5 size-[9px] rounded-full bg-chart-blue !text-sm opacity-50 lg:text-base" }),
                "Opened"
              ] }),
              /* @__PURE__ */ e.jsx(Q, { children: /* @__PURE__ */ e.jsx(J, { className: "text-xl leading-none sm:text-2xl md:text-[2.6rem]", children: V(p.opened) }) })
            ] }),
            l && /* @__PURE__ */ e.jsxs(K, { className: "group relative isolate grow p-3 md:px-6 md:py-5", children: [
              /* @__PURE__ */ e.jsx(q, { onClick: () => {
                const i = new URLSearchParams({
                  filterParam: `clicked_links.post_id:${u}`,
                  postAnalytics: u
                });
                s(`/members?${i.toString()}`, { crossApp: !0 });
              }, children: "View members →" }),
              /* @__PURE__ */ e.jsxs(Y, { onClick: () => {
                const i = new URLSearchParams({
                  filterParam: `clicked_links.post_id:${u}`,
                  postAnalytics: u
                });
                s(`/members?${i.toString()}`, { crossApp: !0 });
              }, children: [
                /* @__PURE__ */ e.jsx("div", { className: "ml-0.5 size-[9px] rounded-full bg-chart-teal !text-sm opacity-50 lg:text-base" }),
                "Clicked"
              ] }),
              /* @__PURE__ */ e.jsx(Q, { children: /* @__PURE__ */ e.jsx(J, { className: "text-xl leading-none sm:text-2xl md:text-[2.6rem]", children: V(p.clicked) }) })
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: `$ mx-auto grid grid-cols-1 items-center justify-center gap-4 transition-all md:gap-0 ${z === "grid-cols-2" && "md:grid-cols-2"} ${z === "grid-cols-3" && "md:grid-cols-3"}`, children: [
            /* @__PURE__ */ e.jsxs("div", { className: `relative border-r-0 px-6 ${(k || l) && "md:border-r"}`, children: [
              /* @__PURE__ */ e.jsx(
                Z,
                {
                  className: M,
                  config: Ve,
                  data: Ue,
                  percentageLabel: "Sent",
                  percentageValue: A(1),
                  size: h,
                  tooltip: !1
                }
              ),
              (k || l) && /* @__PURE__ */ e.jsx(be, {})
            ] }),
            k && /* @__PURE__ */ e.jsxs("div", { className: `group/block relative border-r-0 px-6 transition-all hover:bg-muted/25 ${l && "md:border-r"}`, children: [
              /* @__PURE__ */ e.jsx(
                ve,
                {
                  avgValue: A(C.openedRate),
                  dataColor: "hsl(var(--chart-blue))",
                  value: A(p.openedRate)
                }
              ),
              /* @__PURE__ */ e.jsx(
                Z,
                {
                  className: M,
                  config: We,
                  data: He,
                  percentageLabel: "Open rate",
                  percentageValue: A(p.openedRate),
                  size: h,
                  tooltip: !1
                }
              ),
              l && /* @__PURE__ */ e.jsx(be, {})
            ] }),
            l && /* @__PURE__ */ e.jsxs("div", { className: "group/block relative px-6 transition-all hover:bg-muted/25", children: [
              /* @__PURE__ */ e.jsx(
                ve,
                {
                  avgValue: A(C.clickedRate),
                  dataColor: "hsl(var(--chart-teal))",
                  value: A(p.clickedRate)
                }
              ),
              /* @__PURE__ */ e.jsx(
                Z,
                {
                  className: M,
                  config: Oe,
                  data: Ge,
                  percentageLabel: "Click rate",
                  percentageValue: A(p.clickedRate),
                  size: h,
                  tooltip: !1
                }
              )
            ] })
          ] })
        ] })
      ] }),
      w && /* @__PURE__ */ e.jsx(Hs, { feedbackStats: d }),
      l && /* @__PURE__ */ e.jsxs(te, { className: "group/datalist overflow-hidden", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between p-6", children: [
          /* @__PURE__ */ e.jsxs(ae, { className: "p-0", children: [
            /* @__PURE__ */ e.jsx(re, { children: "Newsletter clicks" }),
            /* @__PURE__ */ e.jsx(ne, { children: "Which links resonated with your readers" })
          ] }),
          /* @__PURE__ */ e.jsx(ke, { className: "mr-2", children: "Members" })
        ] }),
        O ? /* @__PURE__ */ e.jsxs($, { className: "p-6 pt-0", children: [
          /* @__PURE__ */ e.jsx(ie, {}),
          /* @__PURE__ */ e.jsx(we, { className: "mt-6" })
        ] }) : /* @__PURE__ */ e.jsxs($, { className: "pb-0", children: [
          /* @__PURE__ */ e.jsx(ie, {}),
          P.length > 0 ? /* @__PURE__ */ e.jsx(hs, { className: "", children: /* @__PURE__ */ e.jsx(fs, { children: G == null ? void 0 : G.map((i) => {
            const j = p.clicked > 0 ? i.count / p.clicked : 0, R = i.link.link_id, pe = i.link.title, Ke = i.link.to, qe = i.link.edited;
            return /* @__PURE__ */ e.jsxs(bs, { children: [
              t !== R && /* @__PURE__ */ e.jsx(vs, { style: {
                width: `${j ? Math.round(j * 100) : 0}%`
              } }),
              /* @__PURE__ */ e.jsx(js, { className: "w-full", children: t === R ? /* @__PURE__ */ e.jsxs("div", { ref: c, className: "flex w-full items-center gap-2", children: [
                /* @__PURE__ */ e.jsx(
                  $e,
                  {
                    ref: n,
                    className: "z-50 h-7 w-full border-border bg-background text-sm",
                    value: r,
                    onChange: (Ye) => o(Ye.target.value)
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  D,
                  {
                    size: "sm",
                    onClick: N,
                    children: "Update"
                  }
                )
              ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                /* @__PURE__ */ e.jsx(
                  D,
                  {
                    className: "mr-2 shrink-0 bg-background",
                    size: "sm",
                    variant: "outline",
                    onClick: () => _(R),
                    children: /* @__PURE__ */ e.jsx(cs, {})
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  "a",
                  {
                    className: "block truncate font-medium hover:underline",
                    href: Ke,
                    rel: "noreferrer",
                    target: "_blank",
                    title: pe,
                    children: pe
                  }
                ),
                qe && /* @__PURE__ */ e.jsx("span", { className: "ml-1 text-gray-500", children: "(edited)" })
              ] }) }),
              /* @__PURE__ */ e.jsxs(ks, { children: [
                /* @__PURE__ */ e.jsx(Ns, { children: V(i.count || 0) }),
                /* @__PURE__ */ e.jsx(ws, { children: A(j) })
              ] })
            ] }, R);
          }) }) }) : /* @__PURE__ */ e.jsx("div", { className: "py-20 text-center text-sm text-gray-700", children: "You have no links in your post." })
        ] }),
        !O && P.length > 1 && /* @__PURE__ */ e.jsx(Ne, { children: /* @__PURE__ */ e.jsxs("div", { className: "flex w-full items-start justify-between gap-3", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "mt-2 flex items-start gap-2 pl-4 text-sm text-green", children: [
            /* @__PURE__ */ e.jsx(ys, { size: 20, strokeWidth: 1.5 }),
            "Sent a broken link? You can update it!"
          ] }),
          S > 1 && /* @__PURE__ */ e.jsx(ce, { className: "pb-0", children: /* @__PURE__ */ e.jsxs(de, { children: [
            /* @__PURE__ */ e.jsx(
              me,
              {
                disabled: !De,
                onClick: Me
              }
            ),
            /* @__PURE__ */ e.jsx(
              ue,
              {
                disabled: !Be,
                onClick: ze
              }
            )
          ] }) })
        ] }) })
      ] })
    ] }) })
  ] });
};
export {
  nt as default
};
//# sourceMappingURL=newsletter-1WdnMrEM.mjs.map
