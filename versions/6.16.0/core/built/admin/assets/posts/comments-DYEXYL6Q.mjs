import { j as e, n as Q, D as xe, u as E, q as R, a as z, p as j, b as V, Y as ge, o as be, H as ve, e as W, v as je } from "./index-DP6CzQAF.mjs";
import { B as N, C as we } from "./heading-CN611yBx.mjs";
import { F as Ce, T as L, a as A, b as H, d as O, c as ye } from "./filters-DpGBZvey.mjs";
import { b as q, a as Ne, d as ke } from "./hooks-DCiJHQ9c.mjs";
import { u as Se, b as Te } from "./posts-B7wqj_n7.mjs";
import { U as Y, h as _e, b as De, d as Pe, E as Fe, e as Me, f as U, i as le, l as $e, m as ze, n as Ee, o as Re, p as Ie, q as Le, r as Ae, s as He } from "./dropdown-menu-C1s2rpqw.mjs";
import { f as Oe, j as Ue, c as he, a as Ve, F as qe, g as Be, b as Qe, h as ie, D as We, e as Ye, E as Ke, R as Xe, H as Ge, M as Je, C as Ze, i as et } from "./search-C30RgjCY.mjs";
import { H as ce, g as tt, u as st } from "./use-infinite-virtual-scroll-CfZ2ymj-.mjs";
import { M as nt } from "./main-layout-DYKI4Skg.mjs";
import { g as rt, j as at, k as ot, l as lt, m as it, n as ct } from "./dialog-B-8wib-u.mjs";
import { E as dt } from "./empty-indicator-Cyc-Fljl.mjs";
import { L as ut } from "./loading-indicator-Cn2-CAmI.mjs";
const mt = xe(
  "inline-flex items-center rounded-sm border px-1.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        secondary: "border-transparent bg-secondary text-secondary-foreground/70",
        destructive: "border-transparent bg-destructive/20 text-destructive",
        success: "border-transparent bg-green/20 text-green",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function ht({ className: s, variant: t, ...n }) {
  return /* @__PURE__ */ e.jsx("div", { className: Q(mt({ variant: t }), s), ...n });
}
const pt = ({ children: s, className: t, ...n }) => /* @__PURE__ */ e.jsx("section", { className: Q("flex gap-6 flex-col p-4 lg:p-8 size-full grow", t), ...n, children: s });
function de({
  knownItems: s,
  useSearch: t,
  filters: n,
  filterFieldName: o,
  searchFieldName: r,
  toOption: l
}) {
  const [i, c] = E(""), { data: d, isLoading: u } = t(i), m = (d == null ? void 0 : d[r]) ?? [], x = R((g) => l(g), [l]);
  return {
    options: z(() => {
      const g = {};
      for (const h of s)
        g[h.id] = x(h);
      for (const h of m ?? [])
        g[h.id] = x(h);
      const w = n.find((h) => h.field === o);
      if (w && w.values[0]) {
        const h = String(w.values[0]);
        h in g || (g[h] = { value: h, label: `ID: ${h}` });
      }
      return Object.values(g);
    }, [s, m, n, o, x]),
    isLoading: u,
    searchValue: i,
    onSearchChange: c
  };
}
const ft = "MembersResponseType", xt = Ne({
  dataType: ft,
  path: "/members/"
}), gt = q({
  method: "POST",
  path: ({ id: s }) => `/members/${s}/commenting/disable`,
  body: ({ reason: s }) => ({
    reason: s
  }),
  invalidateQueries: {
    dataType: "CommentsResponseType"
  }
}), bt = q({
  method: "POST",
  path: ({ id: s }) => `/members/${s}/commenting/enable`,
  body: () => ({}),
  invalidateQueries: {
    dataType: "CommentsResponseType"
  }
});
function vt(s, t, n, o) {
  var r = this, l = j(null), i = j(0), c = j(0), d = j(null), u = j([]), m = j(), x = j(), C = j(s), g = j(!0);
  C.current = s;
  var w = typeof window < "u", h = !t && t !== 0 && w;
  if (typeof s != "function") throw new TypeError("Expected a function");
  t = +t || 0;
  var k = !!(n = n || {}).leading, _ = !("trailing" in n) || !!n.trailing, y = "maxWait" in n, D = "debounceOnServer" in n && !!n.debounceOnServer, b = y ? Math.max(+n.maxWait || 0, t) : null;
  V(function() {
    return g.current = !0, function() {
      g.current = !1;
    };
  }, []);
  var S = z(function() {
    var P = function(p) {
      var v = u.current, $ = m.current;
      return u.current = m.current = null, i.current = p, c.current = c.current || p, x.current = C.current.apply($, v);
    }, T = function(p, v) {
      h && cancelAnimationFrame(d.current), d.current = h ? requestAnimationFrame(p) : setTimeout(p, v);
    }, M = function(p) {
      if (!g.current) return !1;
      var v = p - l.current;
      return !l.current || v >= t || v < 0 || y && p - i.current >= b;
    }, F = function(p) {
      return d.current = null, _ && u.current ? P(p) : (u.current = m.current = null, x.current);
    }, f = function p() {
      var v = Date.now();
      if (k && c.current === i.current && I(), M(v)) return F(v);
      if (g.current) {
        var $ = t - (v - l.current), B = y ? Math.min($, b - (v - i.current)) : $;
        T(p, B);
      }
    }, I = function() {
      o && o({});
    }, a = function() {
      if (w || D) {
        var p = Date.now(), v = M(p);
        if (u.current = [].slice.call(arguments), m.current = r, l.current = p, v) {
          if (!d.current && g.current) return i.current = l.current, T(f, t), k ? P(l.current) : x.current;
          if (y) return T(f, t), P(l.current);
        }
        return d.current || T(f, t), x.current;
      }
    };
    return a.cancel = function() {
      var p = d.current;
      p && (h ? cancelAnimationFrame(d.current) : clearTimeout(d.current)), i.current = 0, u.current = l.current = m.current = d.current = null, p && o && o({});
    }, a.isPending = function() {
      return !!d.current;
    }, a.flush = function() {
      return d.current ? F(Date.now()) : x.current;
    }, a;
  }, [k, y, t, b, _, h, w, D, o]);
  return S;
}
function jt(s, t) {
  return s === t;
}
function pe(s, t, n) {
  var o = jt, r = j(s), l = E({})[1], i = vt(R(function(d) {
    r.current = d, l({});
  }, [l]), t, n, l), c = j(s);
  return o(c.current, s) || (i(s), c.current = s), [r.current, i];
}
function wt(s) {
  const [t] = pe(s, 200);
  return xt({
    searchParams: {
      ...t && { search: t },
      limit: "100",
      order: "created_at DESC"
    }
  });
}
function Ct(s) {
  const [t] = pe(s, 200), n = t ? `title:~'${t.replace(/'/g, "\\'")}'` : "";
  return Se({
    searchParams: {
      ...n && { filter: n },
      limit: "100",
      fields: "id,title",
      order: "published_at DESC"
    }
  });
}
const yt = ({
  knownPosts: s,
  knownMembers: t,
  filters: n,
  onFiltersChange: o
}) => {
  const r = de({
    knownItems: s,
    useSearch: Ct,
    searchFieldName: "posts",
    filters: n,
    filterFieldName: "post",
    toOption: (m) => ({
      value: m.id,
      label: m.title || "(Untitled)"
    })
  }), l = de({
    knownItems: t,
    useSearch: wt,
    searchFieldName: "members",
    filters: n,
    filterFieldName: "author",
    toOption: (m) => ({
      value: m.id,
      label: m.name || "Unknown name",
      detail: m.email ?? "(Unknown email)"
    })
  }), i = z(
    () => [
      {
        key: "author",
        label: "Author",
        type: "select",
        icon: /* @__PURE__ */ e.jsx(Y, { className: "size-4" }),
        options: l.options,
        isLoading: l.options.length === 0 && l.isLoading,
        onSearchChange: l.onSearchChange,
        searchValue: l.searchValue,
        searchable: !0,
        className: "w-80",
        popoverContentClassName: "w-80",
        operators: [
          { value: "is", label: "is" },
          { value: "is_not", label: "is not" }
        ]
      },
      {
        key: "post",
        label: "Post",
        type: "select",
        icon: /* @__PURE__ */ e.jsx(Oe, { className: "size-4" }),
        options: r.options,
        isLoading: r.options.length === 0 && r.isLoading,
        onSearchChange: r.onSearchChange,
        searchValue: r.searchValue,
        searchable: !0,
        className: "w-80",
        popoverContentClassName: "w-80",
        operators: [
          { value: "is", label: "is" },
          { value: "is_not", label: "is not" }
        ]
      },
      {
        key: "body",
        label: "Text",
        type: "text",
        icon: /* @__PURE__ */ e.jsx(Ue, { className: "size-4" }),
        placeholder: "Search comment text...",
        operators: [
          { value: "contains", label: "contains" },
          { value: "not_contains", label: "does not contain" }
        ],
        defaultOperator: "contains",
        className: "w-48",
        popoverContentClassName: "w-48"
      },
      {
        key: "status",
        label: "Status",
        type: "select",
        icon: /* @__PURE__ */ e.jsx(_e, { className: "size-4" }),
        options: [
          { value: "published", label: "Published" },
          { value: "hidden", label: "Hidden" }
        ]
      },
      {
        key: "reported",
        label: "Reported",
        type: "select",
        icon: /* @__PURE__ */ e.jsx(he, { className: "size-4" }),
        options: [
          { value: "true", label: "Yes" },
          { value: "false", label: "No" }
        ]
      },
      {
        key: "created_at",
        label: "Date",
        type: "date",
        className: "w-32",
        icon: /* @__PURE__ */ e.jsx(Ve, { className: "size-4" }),
        operators: [
          { value: "is", label: "is" },
          { value: "before", label: "before" },
          { value: "after", label: "after" }
        ]
      }
    ],
    [r, l]
  ), c = n.length > 0, d = R(() => {
    o([]);
  }, [o]), u = Q(
    "flex flex-row justify-between",
    !c && "[grid-area:actions] ",
    c && "col-start-1 col-end-4 row-start-3 pt-7 "
  );
  return /* @__PURE__ */ e.jsxs("div", { className: u, children: [
    /* @__PURE__ */ e.jsx(
      Ce,
      {
        addButtonIcon: c ? /* @__PURE__ */ e.jsx(qe, {}) : /* @__PURE__ */ e.jsx(Be, {}),
        addButtonText: c ? "Add filter" : "Filter",
        className: `[&>button]:order-last ${c && "[&>button]:border-none"}`,
        fields: i,
        filters: n,
        keyboardShortcut: "f",
        popoverAlign: c ? "start" : "end",
        onChange: o
      }
    ),
    c && /* @__PURE__ */ e.jsxs(
      N,
      {
        className: "font-normal text-muted-foreground",
        variant: "ghost",
        onClick: d,
        children: [
          /* @__PURE__ */ e.jsx(Qe, {}),
          "Clear"
        ]
      }
    )
  ] });
}, Nt = ({ children: s }) => /* @__PURE__ */ e.jsxs(ce, { className: "!pb-6", variant: "inline-nav", children: [
  /* @__PURE__ */ e.jsx(ce.Title, { children: "Comments" }),
  s
] }), kt = ({ children: s }) => /* @__PURE__ */ e.jsx(nt, { children: /* @__PURE__ */ e.jsx("div", { className: "grid w-full grow", children: /* @__PURE__ */ e.jsx("div", { className: "flex h-full flex-col", "data-testid": "comments-page", children: s }) }) }), St = "CommentsResponseType", Tt = ke({
  dataType: St,
  path: "/comments/",
  defaultNextPageParams: (s, t) => {
    var n, o;
    return (n = s.meta) != null && n.pagination.next ? {
      ...t,
      page: (((o = s.meta) == null ? void 0 : o.pagination.next) || 1).toString()
    } : void 0;
  },
  returnData: (s) => {
    const { pages: t } = s, n = t.flatMap((r) => r.comments), o = t[t.length - 1].meta;
    return {
      comments: n,
      meta: o,
      isEnd: o ? o.pagination.pages === o.pagination.page : !0
    };
  }
}), _t = (s) => Tt({
  ...s,
  searchParams: {
    limit: "100",
    order: "created_at desc",
    include: "member,post",
    ...s == null ? void 0 : s.searchParams
  }
}), Dt = q({
  method: "PUT",
  path: ({ id: s }) => `/comments/${s}/`,
  body: ({ id: s }) => ({
    comments: [{
      id: s,
      status: "hidden"
    }]
  }),
  invalidateQueries: {
    dataType: "CommentsResponseType"
  }
}), Pt = q({
  method: "PUT",
  path: ({ id: s }) => `/comments/${s}/`,
  body: ({ id: s }) => ({
    comments: [{
      id: s,
      status: "published"
    }]
  }),
  invalidateQueries: {
    dataType: "CommentsResponseType"
  }
}), Ft = q({
  method: "PUT",
  path: ({ id: s }) => `/comments/${s}/`,
  body: ({ id: s }) => ({
    comments: [{
      id: s,
      status: "deleted"
    }]
  }),
  invalidateQueries: {
    dataType: "CommentsResponseType"
  }
}), ue = /* @__PURE__ */ new Map();
function Mt({ parentRef: s, enabled: t = !0, isLoading: n = !1 }) {
  const o = ge(), [r, l] = E(null), i = j(null);
  V(() => {
    if (!t || !s.current)
      return;
    const c = tt(s.current);
    l(c);
  }, [t, s]), V(() => {
    if (!t || !r)
      return;
    const c = o.pathname + o.search, d = () => {
      const u = r.scrollTop;
      ue.set(c, u);
    };
    return r.addEventListener("scroll", d), () => r.removeEventListener("scroll", d);
  }, [t, o.pathname, o.search, r]), V(() => {
    const c = o.pathname + o.search, d = ue.get(c);
    if (!(!t || !r || n)) {
      if (d !== void 0 && i.current !== c) {
        let u = 0;
        const m = 3, x = () => {
          if (u += 1, !r)
            return;
          const g = r.scrollTop, w = r.scrollHeight, h = r.clientHeight, k = w - h;
          if (d > k && u < m) {
            setTimeout(x, 100);
            return;
          }
          if (Math.abs(d - g) > 5) {
            const _ = Math.min(d, k);
            r.scrollTop = _;
          }
        }, C = setTimeout(x, 150);
        return () => clearTimeout(C);
      }
      i.current = c;
    }
  }, [t, o.pathname, o.search, r, n]);
}
const me = ({ height: s }) => /* @__PURE__ */ e.jsx("div", { "aria-hidden": "true", className: "flex", children: /* @__PURE__ */ e.jsx("div", { className: "flex", style: { height: s } }) }), $t = be(function(t, n) {
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      ref: n,
      ...t,
      "aria-hidden": "true",
      className: "relative flex flex-col",
      children: /* @__PURE__ */ e.jsx("div", { className: "relative z-10 h-24 animate-pulse", children: /* @__PURE__ */ e.jsx("div", { className: "h-full rounded-md bg-muted", "data-testid": "loading-placeholder" }) })
    }
  );
});
function zt(s) {
  const t = new Date(s);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric"
  }).format(t).replace(/(\d+),(\s+\d{4})/, "$1$2");
}
function Et({ onClick: s, expanded: t }) {
  return /* @__PURE__ */ e.jsxs(
    N,
    {
      className: "shrink-0 gap-0.5 self-start p-0 text-base hover:bg-transparent",
      variant: "ghost",
      onClick: s,
      children: [
        t ? "Show less" : "Show more",
        t ? /* @__PURE__ */ e.jsx(Ze, {}) : /* @__PURE__ */ e.jsx(we, {})
      ]
    }
  );
}
function Rt({ item: s }) {
  const t = j(null), [n, o] = E(!1), [r, l] = E(!1);
  return V(() => {
    const i = () => {
      t.current && o(t.current.scrollHeight > t.current.clientHeight);
    };
    return i(), window.addEventListener("resize", i), () => window.removeEventListener("resize", i);
  }, [s.html]), /* @__PURE__ */ e.jsx("div", { className: "mt-1 flex flex-col gap-2", children: /* @__PURE__ */ e.jsxs("div", { className: `flex max-w-[720px] flex-col items-start ${s.status === "hidden" && "opacity-50"}`, children: [
    /* @__PURE__ */ e.jsx(
      "div",
      {
        dangerouslySetInnerHTML: { __html: s.html || "" },
        ref: t,
        className: Q(
          "prose flex-1 text-base leading-[1.5em] [&_*]:leading-[1.5em] [&_*]:text-base [&_*]:font-normal [&_blockquote]:border-l-[3px] [&_blockquote]:border-foreground [&_blockquote]:p-0 [&_blockquote]:pl-3 [&_blockquote_p]:mt-0 [&_a]:underline",
          r ? "-mb-1 [&_p]:mb-[0.85em]" : "line-clamp-2 [&_p]:m-0 [&_blockquote+p]:mt-1 mb-1"
        )
      }
    ),
    n && /* @__PURE__ */ e.jsx(Et, { expanded: r, onClick: () => l(!r) })
  ] }) });
}
function It({
  items: s,
  totalItems: t,
  hasNextPage: n,
  isFetchingNextPage: o,
  fetchNextPage: r,
  onAddFilter: l,
  isLoading: i,
  commentPermalinksEnabled: c,
  disableMemberCommentingEnabled: d
}) {
  var F;
  const u = j(null);
  Mt({ parentRef: u, isLoading: i });
  const { visibleItems: m, spaceBefore: x, spaceAfter: C } = st({
    items: s,
    totalItems: t,
    hasNextPage: n,
    isFetchingNextPage: o,
    fetchNextPage: r,
    parentRef: u
  }), { mutate: g } = Dt(), { mutate: w } = Pt(), { mutate: h } = Ft(), { mutate: k } = gt(), { mutate: _ } = bt(), [y, D] = E(null), [b, S] = E(null), P = () => {
    y && (h({ id: y.id }), D(null));
  }, T = () => {
    var f;
    (f = b == null ? void 0 : b.member) != null && f.id && (k({
      id: b.member.id,
      reason: `Disabled from comment ${b.commentId}`
    }), S(null));
  }, M = (f) => {
    f != null && f.id && _({ id: f.id });
  };
  return /* @__PURE__ */ e.jsxs("div", { ref: u, className: "overflow-hidden", children: [
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: "flex flex-col",
        "data-testid": "comments-list",
        children: /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ e.jsx(me, { height: x }),
          m.map(({ key: f, virtualItem: I, item: a, props: p }) => {
            var $, B, K, X, G, J, Z, ee, te, se, ne, re, ae, oe;
            return I.index > s.length - 1 ? /* @__PURE__ */ e.jsx($t, { ...p }, f) : /* @__PURE__ */ e.jsxs(
              "div",
              {
                ...p,
                className: "grid w-full grid-cols-1 items-start justify-between gap-4 border-b p-3 hover:bg-muted/50 md:p-5 lg:grid-cols-[minmax(0,1fr)_144px]",
                "data-testid": "comment-list-row",
                children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ e.jsxs("div", { className: `relative flex size-6 min-w-6 items-center justify-center overflow-hidden rounded-full bg-accent md:size-8 md:min-w-8 ${a.status === "hidden" && "opacity-50"}`, children: [
                      (($ = a.member) == null ? void 0 : $.id) && a.member.avatar_image && /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0", children: /* @__PURE__ */ e.jsx("img", { alt: "Member avatar", src: a.member.avatar_image }) }),
                      /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(Y, { className: "!size-3 text-muted-foreground md:!size-4", size: 12 }) })
                    ] }),
                    /* @__PURE__ */ e.jsxs("div", { className: "flex min-w-0 flex-col", children: [
                      /* @__PURE__ */ e.jsxs("div", { className: "flex items-baseline gap-4", children: [
                        /* @__PURE__ */ e.jsxs("div", { className: `mb-1 flex min-w-0 items-center gap-x-1 text-sm ${a.status === "hidden" && "opacity-50"}`, children: [
                          /* @__PURE__ */ e.jsx("div", { className: "whitespace-nowrap", children: (B = a.member) != null && B.id ? /* @__PURE__ */ e.jsx(
                            N,
                            {
                              className: "flex h-auto items-center gap-1.5 truncate p-0 font-semibold text-primary hover:opacity-70",
                              variant: "link",
                              onClick: () => {
                                l("author", a.member.id);
                              },
                              children: a.member.name || "Unknown"
                            }
                          ) : /* @__PURE__ */ e.jsx("span", { className: "block truncate font-semibold", children: ((K = a.member) == null ? void 0 : K.name) || "Unknown" }) }),
                          d && ((X = a.member) == null ? void 0 : X.can_comment) === !1 && /* @__PURE__ */ e.jsx(L, { children: /* @__PURE__ */ e.jsxs(A, { children: [
                            /* @__PURE__ */ e.jsx(H, { asChild: !0, children: /* @__PURE__ */ e.jsx("span", { "data-testid": "commenting-disabled-indicator", children: /* @__PURE__ */ e.jsx(
                              ie,
                              {
                                className: "size-3.5 text-muted-foreground"
                              }
                            ) }) }),
                            /* @__PURE__ */ e.jsx(O, { children: "Comments disabled" })
                          ] }) }),
                          /* @__PURE__ */ e.jsx(We, { className: "shrink-0 text-muted-foreground/50", size: 16 }),
                          /* @__PURE__ */ e.jsx("div", { className: "shrink-0 whitespace-nowrap", children: a.created_at && /* @__PURE__ */ e.jsx(L, { children: /* @__PURE__ */ e.jsxs(A, { children: [
                            /* @__PURE__ */ e.jsx(H, { asChild: !0, children: /* @__PURE__ */ e.jsx("span", { className: "cursor-default text-sm text-muted-foreground", children: ve(a.created_at) }) }),
                            /* @__PURE__ */ e.jsx(O, { children: zt(a.created_at) })
                          ] }) }) }),
                          /* @__PURE__ */ e.jsx("div", { className: "shrink-0 text-muted-foreground", children: "on" }),
                          /* @__PURE__ */ e.jsx("div", { className: "min-w-0 truncate", children: (G = a.post) != null && G.id && ((J = a.post) != null && J.title) && l ? /* @__PURE__ */ e.jsx(
                            N,
                            {
                              className: "block h-auto w-full cursor-pointer truncate p-0 text-left font-medium text-gray-800 hover:opacity-70 dark:text-gray-400",
                              variant: "link",
                              onClick: () => l("post", a.post.id),
                              children: a.post.title
                            }
                          ) : /* @__PURE__ */ e.jsx("span", { className: "text-muted-foreground", children: "Unknown post" }) })
                        ] }),
                        a.status === "hidden" && /* @__PURE__ */ e.jsx(ht, { variant: "secondary", children: "Hidden" })
                      ] }),
                      /* @__PURE__ */ e.jsx(Rt, { item: a }),
                      /* @__PURE__ */ e.jsxs("div", { className: "mt-4 flex flex-row flex-nowrap items-center gap-3", children: [
                        a.status === "published" && /* @__PURE__ */ e.jsxs(N, { className: "text-gray-800", size: "sm", variant: "outline", onClick: () => g({ id: a.id }), children: [
                          /* @__PURE__ */ e.jsx(Ye, {}),
                          "Hide"
                        ] }),
                        a.status === "hidden" && /* @__PURE__ */ e.jsxs(N, { className: "text-gray-800", size: "sm", variant: "outline", onClick: () => w({ id: a.id }), children: [
                          /* @__PURE__ */ e.jsx(Ke, {}),
                          "Show"
                        ] }),
                        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-4", children: [
                          /* @__PURE__ */ e.jsx(L, { children: /* @__PURE__ */ e.jsxs(A, { children: [
                            /* @__PURE__ */ e.jsx(H, { asChild: !0, children: /* @__PURE__ */ e.jsxs("div", { className: "ml-2 flex items-center gap-1 text-xs text-gray-800", children: [
                              /* @__PURE__ */ e.jsx(Xe, { size: 16, strokeWidth: 1.5 }),
                              /* @__PURE__ */ e.jsx("span", { children: W((Z = a.count) == null ? void 0 : Z.replies) })
                            ] }) }),
                            /* @__PURE__ */ e.jsx(O, { children: "Replies" })
                          ] }) }),
                          /* @__PURE__ */ e.jsx(L, { children: /* @__PURE__ */ e.jsxs(A, { children: [
                            /* @__PURE__ */ e.jsx(H, { asChild: !0, children: /* @__PURE__ */ e.jsxs("div", { className: "ml-2 flex items-center gap-1 text-xs text-gray-800", children: [
                              /* @__PURE__ */ e.jsx(Ge, { size: 16, strokeWidth: 1.5 }),
                              /* @__PURE__ */ e.jsx("span", { children: W((ee = a.count) == null ? void 0 : ee.likes) })
                            ] }) }),
                            /* @__PURE__ */ e.jsx(O, { children: "Likes" })
                          ] }) }),
                          /* @__PURE__ */ e.jsx(L, { children: /* @__PURE__ */ e.jsxs(A, { children: [
                            /* @__PURE__ */ e.jsx(H, { asChild: !0, children: /* @__PURE__ */ e.jsxs("div", { className: `ml-2 flex items-center gap-1 text-xs ${(te = a.count) != null && te.reports ? "font-semibold text-red" : "text-gray-800"}`, children: [
                              /* @__PURE__ */ e.jsx(he, { size: 16, strokeWidth: (se = a.count) != null && se.reports ? 1.75 : 1.5 }),
                              /* @__PURE__ */ e.jsx("span", { children: W((ne = a.count) == null ? void 0 : ne.reports) })
                            ] }) }),
                            /* @__PURE__ */ e.jsx(O, { children: "Reports" })
                          ] }) })
                        ] }),
                        /* @__PURE__ */ e.jsxs(De, { children: [
                          /* @__PURE__ */ e.jsx(Pe, { asChild: !0, children: /* @__PURE__ */ e.jsx(
                            N,
                            {
                              className: "relative z-10 ml-1 text-gray-800 hover:bg-secondary [&_svg]:size-4",
                              size: "sm",
                              variant: "ghost",
                              children: /* @__PURE__ */ e.jsx(Fe, {})
                            }
                          ) }),
                          /* @__PURE__ */ e.jsxs(Me, { align: "start", children: [
                            c ? /* @__PURE__ */ e.jsx(U, { asChild: !0, children: /* @__PURE__ */ e.jsxs("a", { href: `${a.post.url}#ghost-comments-${a.id}`, rel: "noopener noreferrer", target: "_blank", children: [
                              /* @__PURE__ */ e.jsx(le, { className: "mr-2 size-4" }),
                              "View on post"
                            ] }) }) : /* @__PURE__ */ e.jsx(U, { asChild: !0, children: /* @__PURE__ */ e.jsxs("a", { href: a.post.url, rel: "noopener noreferrer", target: "_blank", children: [
                              /* @__PURE__ */ e.jsx(le, { className: "mr-2 size-4" }),
                              "View post"
                            ] }) }),
                            ((re = a.member) == null ? void 0 : re.id) && /* @__PURE__ */ e.jsx(U, { asChild: !0, children: /* @__PURE__ */ e.jsxs("a", { href: `#/members/${a.member.id}`, children: [
                              /* @__PURE__ */ e.jsx(Y, { className: "mr-2 size-4" }),
                              "View member"
                            ] }) }),
                            d && ((ae = a.member) == null ? void 0 : ae.id) && (a.member.can_comment !== !1 ? /* @__PURE__ */ e.jsxs(U, { onClick: () => {
                              queueMicrotask(() => S({ member: a.member, commentId: a.id }));
                            }, children: [
                              /* @__PURE__ */ e.jsx(ie, { className: "mr-2 size-4" }),
                              "Disable commenting"
                            ] }) : /* @__PURE__ */ e.jsxs(U, { onClick: () => M(a.member), children: [
                              /* @__PURE__ */ e.jsx(Je, { className: "mr-2 size-4" }),
                              "Enable commenting"
                            ] }))
                          ] })
                        ] })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ e.jsx("div", { children: (oe = a.post) != null && oe.feature_image ? /* @__PURE__ */ e.jsx(
                    "img",
                    {
                      alt: a.post.title || "Post feature image",
                      className: `hidden aspect-video w-36 rounded object-cover lg:block ${a.status === "hidden" && "opacity-50"}`,
                      src: a.post.feature_image
                    }
                  ) : null })
                ]
              },
              f
            );
          }),
          /* @__PURE__ */ e.jsx(me, { height: C })
        ] })
      }
    ),
    /* @__PURE__ */ e.jsx($e, { open: !!y, onOpenChange: (f) => !f && D(null), children: /* @__PURE__ */ e.jsxs(ze, { children: [
      /* @__PURE__ */ e.jsxs(Ee, { children: [
        /* @__PURE__ */ e.jsx(Re, { children: "Delete comment?" }),
        /* @__PURE__ */ e.jsx(Ie, { children: "This comment will be permanently deleted and cannot be recovered." })
      ] }),
      /* @__PURE__ */ e.jsxs(Le, { children: [
        /* @__PURE__ */ e.jsx(Ae, { children: "Cancel" }),
        /* @__PURE__ */ e.jsx(
          He,
          {
            className: "hover:bg-red-700 bg-red-600 text-white",
            onClick: P,
            children: "Delete"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ e.jsx(rt, { open: !!b, onOpenChange: (f) => {
      f || S(null);
    }, children: /* @__PURE__ */ e.jsxs(at, { children: [
      /* @__PURE__ */ e.jsxs(ot, { children: [
        /* @__PURE__ */ e.jsx(lt, { children: "Disable comments" }),
        /* @__PURE__ */ e.jsxs(it, { children: [
          ((F = b == null ? void 0 : b.member) == null ? void 0 : F.name) || "This member",
          " won't be able to comment in the future. You can re-enable commenting anytime."
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs(ct, { children: [
        /* @__PURE__ */ e.jsx(N, { variant: "outline", onClick: () => S(null), children: "Cancel" }),
        /* @__PURE__ */ e.jsx(N, { onClick: T, children: "Disable comments" })
      ] })
    ] }) })
  ] });
}
const fe = ["id", "status", "created_at", "body", "post", "author", "reported"];
function Lt(s) {
  const t = [];
  for (const n of s)
    if (n.values[0])
      switch (n.field) {
        case "id":
          t.push(`id:'${n.values[0]}'`);
          break;
        case "status":
          t.push(`status:${n.values[0]}`);
          break;
        case "created_at":
          if (n.operator === "before" && n.values[0])
            t.push(`created_at:<'${n.values[0]}'`);
          else if (n.operator === "after" && n.values[0])
            t.push(`created_at:>'${n.values[0]}'`);
          else if (n.operator === "is" && n.values[0]) {
            const l = String(n.values[0]), i = (/* @__PURE__ */ new Date(l + "T00:00:00")).toISOString(), c = (/* @__PURE__ */ new Date(l + "T23:59:59.999")).toISOString();
            t.push(`created_at:>='${i}'+created_at:<='${c}'`);
          }
          break;
        case "body":
          const r = n.values[0].replace(/'/g, "\\'");
          n.operator === "contains" ? t.push(`html:~'${r}'`) : n.operator === "not_contains" && t.push(`html:-~'${r}'`);
          break;
        case "post":
          n.operator === "is_not" ? t.push(`post_id:-${n.values[0]}`) : t.push(`post_id:${n.values[0]}`);
          break;
        case "author":
          n.operator === "is_not" ? t.push(`member_id:-${n.values[0]}`) : t.push(`member_id:${n.values[0]}`);
          break;
        case "reported":
          n.values[0] === "true" ? t.push("count.reports:>0") : n.values[0] === "false" && t.push("count.reports:0");
          break;
      }
  return t.length ? t.join("+") : void 0;
}
function At(s) {
  if (!s)
    return null;
  const t = s.indexOf(":");
  return t <= 0 ? null : {
    operator: s.substring(0, t),
    value: s.substring(t + 1)
  };
}
function Ht(s) {
  const t = [];
  for (const n of fe) {
    const o = s.get(n);
    if (!o)
      continue;
    const r = At(o);
    r && t.push({
      id: n,
      field: n,
      operator: r.operator,
      values: [r.value]
    });
  }
  return t;
}
function Ot(s) {
  const t = new URLSearchParams();
  for (const n of s)
    if (fe.includes(n.field) && n.values[0] !== void 0) {
      const o = `${n.operator}:${String(n.values[0])}`;
      t.set(n.field, o);
    }
  return t;
}
function Ut() {
  const [s, t] = je(), n = z(() => Ht(s), [s]), o = R((c, d = {}) => {
    const u = typeof c == "function" ? c(n) : c, m = Ot(u), x = d.replace ?? !0;
    t(m, { replace: x });
  }, [n, t]), r = R(({ replace: c = !0 } = {}) => {
    t(new URLSearchParams(), { replace: c });
  }, [t]), l = z(() => Lt(n), [n]), i = z(() => n.length === 1 && n[0].field === "id", [n]);
  return { filters: n, nql: l, setFilters: o, clearFilters: r, isSingleIdFilter: i };
}
function Vt({ comments: s }) {
  return z(() => {
    var o, r, l;
    const t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
    for (const i of s)
      (o = i.post) != null && o.id && ((r = i.post) != null && r.title) && t.set(i.post.id, {
        id: i.post.id,
        title: i.post.title
      }), (l = i.member) != null && l.id && n.set(i.member.id, {
        id: i.member.id,
        name: i.member.name,
        email: i.member.email
      });
    return {
      knownPosts: Array.from(t.values()),
      knownMembers: Array.from(n.values())
    };
  }, [s]);
}
const ss = () => {
  var D, b, S, P, T, M;
  const { filters: s, nql: t, setFilters: n, clearFilters: o, isSingleIdFilter: r } = Ut(), { data: l } = Te(), i = ((b = (D = l == null ? void 0 : l.config) == null ? void 0 : D.labs) == null ? void 0 : b.commentPermalinks) === !0, c = ((P = (S = l == null ? void 0 : l.config) == null ? void 0 : S.labs) == null ? void 0 : P.disableMemberCommenting) === !0, d = R((F, f, I = "is") => {
    n((a) => [...a.filter((v) => v.field !== F), ye(F, I, [f])], { replace: !1 });
  }, [n]), {
    data: u,
    isError: m,
    isFetching: x,
    isFetchingNextPage: C,
    isRefetching: g,
    fetchNextPage: w,
    hasNextPage: h
  } = _t({
    searchParams: t ? { filter: t } : {},
    keepPreviousData: !0
  }), { knownPosts: k, knownMembers: _ } = Vt({ comments: (u == null ? void 0 : u.comments) ?? [] }), y = x && !C && !g;
  return /* @__PURE__ */ e.jsxs(kt, { children: [
    /* @__PURE__ */ e.jsx(Nt, { children: !r && /* @__PURE__ */ e.jsx(
      yt,
      {
        filters: s,
        knownMembers: _,
        knownPosts: k,
        onFiltersChange: n
      }
    ) }),
    /* @__PURE__ */ e.jsx(pt, { children: y ? /* @__PURE__ */ e.jsx("div", { className: "flex h-full items-center justify-center", children: /* @__PURE__ */ e.jsx(ut, { size: "lg" }) }) : m ? /* @__PURE__ */ e.jsxs("div", { className: "mb-16 flex h-full flex-col items-center justify-center", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "mb-2 text-xl font-medium", children: "Error loading comments" }),
      /* @__PURE__ */ e.jsx("p", { className: "mb-4 text-muted-foreground", children: "Please reload the page to try again" }),
      /* @__PURE__ */ e.jsx(N, { onClick: () => window.location.reload(), children: "Reload page" })
    ] }) : u != null && u.comments.length ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx(
        It,
        {
          commentPermalinksEnabled: i,
          disableMemberCommentingEnabled: c,
          fetchNextPage: w,
          hasNextPage: h,
          isFetchingNextPage: C,
          isLoading: x && !C,
          items: (u == null ? void 0 : u.comments) ?? [],
          totalItems: ((M = (T = u == null ? void 0 : u.meta) == null ? void 0 : T.pagination) == null ? void 0 : M.total) ?? 0,
          onAddFilter: d
        }
      ),
      r && /* @__PURE__ */ e.jsx("div", { className: "flex justify-center py-8", children: /* @__PURE__ */ e.jsx(N, { variant: "outline", onClick: () => o({ replace: !1 }), children: "Show all comments" }) })
    ] }) : /* @__PURE__ */ e.jsx("div", { className: "flex h-full items-center justify-center", children: /* @__PURE__ */ e.jsx(
      dt,
      {
        title: "No comments yet",
        children: /* @__PURE__ */ e.jsx(et, {})
      }
    ) }) })
  ] });
};
export {
  ss as default
};
//# sourceMappingURL=comments-DYEXYL6Q.mjs.map
