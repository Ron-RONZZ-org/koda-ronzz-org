import { f as W, j as e, S as Ne, c as k, u as ae, a as Q, b as M, d as E, e as te, g, h as J, i as P, R as we, k as X, l as Z, m as ye, n as T, o as ke, p as L, s as B, A as _e } from "./index-BxbeiQvY.mjs";
import { B as C, X as Ce, H as re, C as ze, L as Ae, a as R, b as D, c as H, d as V, e as F, S as w, f as Te, g as Me, G as $, U as ie, M as Y, h as Le, E as q, F as ne, i as $e, j as We, k as O, l as Ee, m as K, K as Re, n as De, o as He, p as Ve, I as Fe, q as Ie, r as S, s as ee, t as Be, u as Oe, v as Ue, w as Ge, x as Pe, y as Ye, z as Ke, N as Qe, D as qe, A as Je, J as Xe } from "./stats-CtTAHMmO.mjs";
import { R as Ze, T as Se, P as es, C as le, a as oe, D as ce, O as de, g as ss } from "./audience-BjmWFjxw.mjs";
import { u as as } from "./use-growth-stats-BWm__o-y.mjs";
function ts(s) {
  const t = s.open_rate !== null;
  return s.status === "sent" ? "Email only" : s.status === "published" ? t ? "Published and sent" : "Published" : s.status;
}
function rs(s) {
  return !!s.email_only && s.status === "sent";
}
function is(s) {
  return s.status === "published" && !me(s);
}
function ns(s) {
  return s.status === "published" && me(s);
}
function me(s) {
  var t, a;
  const i = s.status === "published", l = s.status === "sent", n = !!s.email, m = ((t = s.email) == null ? void 0 : t.status) !== "failed", o = typeof ((a = s.email) == null ? void 0 : a.email_count) == "number" && s.email.email_count > 0;
  return (l || i) && n && (m || o);
}
function ls(s, t) {
  const a = (t == null ? void 0 : t.membersTrackSources) ?? !0;
  return rs(s) ? {
    showEmailMetrics: !0,
    showWebMetrics: !1,
    showMemberGrowth: a
  } : is(s) ? {
    showEmailMetrics: !1,
    showWebMetrics: !0,
    showMemberGrowth: a
  } : ns(s) ? {
    showEmailMetrics: !0,
    showWebMetrics: !0,
    showMemberGrowth: a
  } : {
    showEmailMetrics: !1,
    showWebMetrics: !0,
    showMemberGrowth: a
  };
}
const os = Ze, cs = Se, ds = es, ue = W(({ className: s, ...t }, a) => /* @__PURE__ */ e.jsx(
  de,
  {
    ref: a,
    className: k(
      "fixed inset-0 z-50 bg-black/30 backdrop-blur-none transform-gpu data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=open]:backdrop-blur-[3px]",
      s
    ),
    ...t
  }
));
ue.displayName = de.displayName;
const he = W(({ className: s, children: t, ...a }, i) => /* @__PURE__ */ e.jsx(ds, { children: /* @__PURE__ */ e.jsxs("div", { className: Ne, children: [
  /* @__PURE__ */ e.jsx(ue, {}),
  /* @__PURE__ */ e.jsx(
    le,
    {
      ref: i,
      className: k(
        "fixed left-[50%] top-[8vmin] z-50 grid w-full max-w-lg translate-x-[-50%] gap-6 bg-background dark:bg-[#101114] p-6 shadow-lg duration-200 transform-gpu data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=open]:slide-in-from-left-1/2 sm:rounded-lg outline-none",
        s
      ),
      ...a,
      children: t
    }
  )
] }) }));
he.displayName = le.displayName;
const xe = ({
  className: s,
  ...t
}) => /* @__PURE__ */ e.jsx(
  "div",
  {
    className: k(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      s
    ),
    ...t
  }
);
xe.displayName = "DialogHeader";
const pe = ({
  className: s,
  ...t
}) => /* @__PURE__ */ e.jsx(
  "div",
  {
    className: k(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 sm:items-end [&_button]:min-w-20",
      s
    ),
    ...t
  }
);
pe.displayName = "DialogFooter";
const ge = W(({ className: s, ...t }, a) => /* @__PURE__ */ e.jsx(
  oe,
  {
    ref: a,
    className: k(
      "text-xl font-semibold leading-none tracking-tight",
      s
    ),
    ...t
  }
));
ge.displayName = oe.displayName;
const fe = W(({ className: s, ...t }, a) => /* @__PURE__ */ e.jsx(
  ce,
  {
    ref: a,
    className: k("text-sm text-muted-foreground", s),
    ...t
  }
));
fe.displayName = ce.displayName;
const ms = ({
  emailOnly: s = !1,
  postURL: t = "",
  primaryTitle: a = "Your post is published.",
  secondaryTitle: i = "Spread the word!",
  description: l = "",
  featureImageURL: n = "",
  postTitle: m = "",
  postExcerpt: o = "",
  faviconURL: c = "",
  siteTitle: f = "",
  author: d = "",
  onClose: N = () => {
  },
  children: p,
  ...r
}) => {
  const [x, b] = ae(!1), j = async () => {
    try {
      await navigator.clipboard.writeText(t), b(!0), setTimeout(() => b(!1), 2e3);
    } catch {
    }
  }, y = encodeURIComponent(m), u = encodeURIComponent(t), z = encodeURIComponent(`${m} ${t}`);
  return /* @__PURE__ */ e.jsxs(os, { ...r, children: [
    /* @__PURE__ */ e.jsx(cs, { className: "cursor-pointer", asChild: !0, children: p }),
    /* @__PURE__ */ e.jsxs(he, { className: "max-h-[calc(100vh-16vmin)] max-w-[540px] overflow-y-auto p-8", children: [
      /* @__PURE__ */ e.jsx("div", { className: "sticky top-0 ml-auto size-0", children: /* @__PURE__ */ e.jsx(C, { className: "absolute -right-5 -top-5 cursor-pointer p-2 text-muted-foreground hover:text-foreground [&_svg]:!size-6", size: "lg", variant: "link", onClick: N, children: /* @__PURE__ */ e.jsx(Ce, { size: 24, strokeWidth: 1 }) }) }),
      /* @__PURE__ */ e.jsxs(xe, { className: "relative -mt-5", children: [
        /* @__PURE__ */ e.jsxs(ge, { className: "text-3xl font-bold leading-[1.15em]", children: [
          /* @__PURE__ */ e.jsx("span", { className: "text-green-500", children: a }),
          /* @__PURE__ */ e.jsx("br", {}),
          /* @__PURE__ */ e.jsx("span", { children: i })
        ] }),
        l && /* @__PURE__ */ e.jsx(fe, { className: "mb-0 pb-0 pt-1 text-lg text-foreground", children: l })
      ] }),
      /* @__PURE__ */ e.jsxs("a", { className: "flex flex-col items-stretch overflow-hidden rounded-md border transition-all hover:border-muted-foreground/40", href: t, rel: "noopener noreferrer", target: "_blank", children: [
        n && /* @__PURE__ */ e.jsx("div", { className: "aspect-video bg-cover bg-center", style: {
          backgroundImage: `url(${n})`
        } }),
        /* @__PURE__ */ e.jsxs("div", { className: "p-6 pt-5", children: [
          /* @__PURE__ */ e.jsx(re, { children: m }),
          o && /* @__PURE__ */ e.jsx("p", { children: o }),
          /* @__PURE__ */ e.jsxs("div", { className: "mt-2 flex items-start gap-2", children: [
            /* @__PURE__ */ e.jsx("div", { className: "mt-0.5 size-4 bg-cover bg-center", style: {
              backgroundImage: `url(${c})`
            } }),
            /* @__PURE__ */ e.jsxs("div", { className: "flex gap-1", children: [
              /* @__PURE__ */ e.jsx("strong", { children: f }),
              /* @__PURE__ */ e.jsx("span", { children: "•" }),
              /* @__PURE__ */ e.jsx("span", { children: d })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ e.jsx(pe, { className: "justify-between gap-6", children: s ? /* @__PURE__ */ e.jsx(C, { className: "cursor-pointer", type: "submit", onClick: N, children: "Close" }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e.jsx("a", { className: "flex h-[34px] w-14 items-center justify-center rounded-sm bg-muted px-3 hover:bg-muted-foreground/20 [&_svg]:h-4", href: `https://twitter.com/intent/tweet?text=${y}%0A${u}`, rel: "noopener noreferrer", target: "_blank", children: /* @__PURE__ */ e.jsx("svg", { "aria-hidden": "true", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { className: "social-x_svg__x", d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" }) }) }),
          /* @__PURE__ */ e.jsx("a", { className: "flex h-[34px] w-14 items-center justify-center rounded-sm bg-muted px-3 hover:bg-muted-foreground/20 [&_svg]:h-4", href: `https://threads.net/intent/post?text=${z}`, rel: "noopener noreferrer", target: "_blank", children: /* @__PURE__ */ e.jsxs("svg", { fill: "none", viewBox: "0 0 18 18", children: [
            /* @__PURE__ */ e.jsx("g", { clipPath: "url(#social-threads_svg__clip0_351_18008)", children: /* @__PURE__ */ e.jsx("path", { d: "M13.033 8.38a5.924 5.924 0 00-.223-.102c-.13-2.418-1.452-3.802-3.67-3.816h-.03c-1.327 0-2.43.566-3.11 1.597l1.22.837c.507-.77 1.304-.934 1.89-.934h.02c.73.004 1.282.217 1.639.63.26.302.433.72.519 1.245a9.334 9.334 0 00-2.097-.101c-2.109.121-3.465 1.351-3.374 3.06.047.868.478 1.614 1.216 2.1.624.413 1.428.614 2.263.568 1.103-.06 1.969-.48 2.572-1.25.459-.585.749-1.342.877-2.296.526.317.915.735 1.13 1.236.366.854.387 2.255-.756 3.398-1.003 1.002-2.207 1.435-4.028 1.448-2.02-.015-3.547-.663-4.54-1.925-.93-1.182-1.41-2.89-1.428-5.075.018-2.185.498-3.893 1.428-5.075.993-1.262 2.52-1.91 4.54-1.925 2.034.015 3.588.666 4.62 1.934.505.622.886 1.405 1.137 2.317l1.43-.382c-.305-1.122-.784-2.09-1.436-2.892C13.52 1.35 11.587.517 9.096.5h-.01C6.6.517 4.689 1.354 3.404 2.986 2.262 4.44 1.672 6.46 1.652 8.994v.012c.02 2.534.61 4.555 1.752 6.008C4.69 16.646 6.6 17.483 9.086 17.5h.01c2.21-.015 3.768-.594 5.051-1.876 1.68-1.678 1.629-3.78 1.075-5.07-.397-.927-1.154-1.678-2.189-2.175zm-3.816 3.587c-.924.052-1.884-.363-1.932-1.252-.035-.659.47-1.394 1.99-1.482a8.9 8.9 0 01.512-.014c.552 0 1.068.053 1.538.156-.175 2.187-1.203 2.542-2.108 2.592z", fill: "#000" }) }),
            /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsx("clipPath", { id: "social-threads_svg__clip0_351_18008", children: /* @__PURE__ */ e.jsx("path", { d: "M0 0h17v17H0z", fill: "#fff", transform: "translate(.5 .5)" }) }) })
          ] }) }),
          /* @__PURE__ */ e.jsx("a", { className: "flex h-[34px] w-14 items-center justify-center rounded-sm bg-muted px-3 hover:bg-muted-foreground/20 [&_svg]:h-4", href: `https://www.facebook.com/sharer/sharer.php?u=${u}`, rel: "noopener noreferrer", target: "_blank", children: /* @__PURE__ */ e.jsxs("svg", { fill: "none", viewBox: "0 0 40 40", children: [
            /* @__PURE__ */ e.jsx("title", { children: "social-facebook" }),
            /* @__PURE__ */ e.jsx("path", { className: "social-facebook_svg__fb", d: "M20 40.004c11.046 0 20-8.955 20-20 0-11.046-8.954-20-20-20s-20 8.954-20 20c0 11.045 8.954 20 20 20z", fill: "#1977f3" }),
            /* @__PURE__ */ e.jsx("path", { d: "M27.785 25.785l.886-5.782h-5.546V16.25c0-1.58.773-3.125 3.26-3.125h2.522V8.204s-2.29-.39-4.477-.39c-4.568 0-7.555 2.767-7.555 7.781v4.408h-5.08v5.782h5.08v13.976a20.08 20.08 0 003.125.242c1.063 0 2.107-.085 3.125-.242V25.785h4.66z", fill: "#fff" })
          ] }) }),
          /* @__PURE__ */ e.jsx("a", { className: "flex h-[34px] w-14 items-center justify-center rounded-sm bg-muted px-3 hover:bg-muted-foreground/20 [&_svg]:h-4", href: `http://www.linkedin.com/shareArticle?mini=true&title=${y}&url=${u}`, rel: "noopener noreferrer", target: "_blank", children: /* @__PURE__ */ e.jsxs("svg", { fill: "none", viewBox: "0 0 16 16", children: [
            /* @__PURE__ */ e.jsxs("g", { clipPath: "url(#social-linkedin_svg__clip0_537_833)", children: [
              /* @__PURE__ */ e.jsx("path", { className: "social-linkedin_svg__linkedin", clipRule: "evenodd", d: "M1.778 16h12.444c.982 0 1.778-.796 1.778-1.778V1.778C16 .796 15.204 0 14.222 0H1.778C.796 0 0 .796 0 1.778v12.444C0 15.204.796 16 1.778 16z", fill: "#007ebb", fillRule: "evenodd" }),
              /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", d: "M13.778 13.778h-2.374V9.734c0-1.109-.421-1.729-1.299-1.729-.955 0-1.453.645-1.453 1.729v4.044H6.363V6.074h2.289v1.038s.688-1.273 2.322-1.273c1.634 0 2.804.997 2.804 3.061v4.878zM3.634 5.065c-.78 0-1.411-.636-1.411-1.421s.631-1.422 1.41-1.422c.78 0 1.411.637 1.411 1.422 0 .785-.631 1.421-1.41 1.421zm-1.182 8.713h2.386V6.074H2.452v7.704z", fill: "#fff", fillRule: "evenodd" })
            ] }),
            /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsx("clipPath", { id: "social-linkedin_svg__clip0_537_833", children: /* @__PURE__ */ e.jsx("path", { d: "M0 0h16v16H0z", fill: "#fff" }) }) })
          ] }) })
        ] }),
        /* @__PURE__ */ e.jsxs(
          C,
          {
            className: "!ml-0 grow cursor-pointer",
            disabled: !t,
            type: "button",
            onClick: j,
            children: [
              x ? /* @__PURE__ */ e.jsx(ze, {}) : /* @__PURE__ */ e.jsx(Ae, {}),
              x ? "Copied!" : "Copy link"
            ]
          }
        )
      ] }) })
    ] })
  ] });
}, us = (s) => s.email_only ? "Sent" : s.email ? "Published and sent" : "Published", hs = ({
  latestPostStats: s,
  isLoading: t
}) => {
  var x, b, j, y;
  const a = Q(), [i, l] = ae(!1), { site: n, settings: m } = M(), { appSettings: o } = E(), { emailTrackClicks: c, emailTrackOpens: f } = (o == null ? void 0 : o.analytics) || {}, d = n.title || String(((x = m.find((u) => u.key === "title")) == null ? void 0 : x.value) || "Ghost Site"), N = String(((b = m.find((u) => u.key === "timezone")) == null ? void 0 : b.value) || "Etc/UTC"), p = s ? ls(s, {
    membersTrackSources: o == null ? void 0 : o.analytics.membersTrackSources
  }) : null, r = "group mr-2 flex flex-col gap-1.5 hover:cursor-pointer";
  return /* @__PURE__ */ e.jsxs(R, { className: "group/card bg-gradient-to-tr from-muted/40 to-muted/0 to-50%", "data-testid": "latest-post", children: [
    /* @__PURE__ */ e.jsxs(D, { children: [
      /* @__PURE__ */ e.jsx(H, { className: "flex items-baseline justify-between font-medium leading-snug text-muted-foreground", children: "Latest post performance" }),
      /* @__PURE__ */ e.jsx(V, { className: "hidden", children: "How your last post did" })
    ] }),
    /* @__PURE__ */ e.jsxs(F, { className: "flex flex-col gap-6 px-0 lg:flex-row xl:grid xl:grid-cols-3", children: [
      t && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex w-full items-center gap-6 px-6 xl:col-span-2", children: [
          /* @__PURE__ */ e.jsx("div", { className: "w-full max-w-[232px] grow", children: /* @__PURE__ */ e.jsx(w, { className: "aspect-[16/10] rounded-md" }) }),
          /* @__PURE__ */ e.jsxs("div", { className: "w-full grow", children: [
            /* @__PURE__ */ e.jsx(w, { className: "w-full max-w-[420px]" }),
            /* @__PURE__ */ e.jsx(w, { className: "w-1/2" })
          ] })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "flex flex-col items-stretch gap-2 px-6 text-sm", children: /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-5", children: [
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx(w, { className: "w-3/4" }),
            /* @__PURE__ */ e.jsx(w, { className: "h-10 w-1/3" })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx(w, { className: "w-3/4" }),
            /* @__PURE__ */ e.jsx(w, { className: "h-10 w-1/3" })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx(w, { className: "w-3/4" }),
            /* @__PURE__ */ e.jsx(w, { className: "h-10 w-1/3" })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx(w, { className: "w-3/4" }),
            /* @__PURE__ */ e.jsx(w, { className: "h-10 w-1/3" })
          ] })
        ] }) })
      ] }),
      !t && s && p ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-6 px-6 transition-all md:flex-row md:items-start xl:col-span-2", children: [
          s.feature_image && /* @__PURE__ */ e.jsx("div", { className: "aspect-[16/10] w-full min-w-[100px] rounded-sm bg-cover bg-center sm:max-w-[170px] lg:max-w-[170px] xl:max-w-[232px]", style: {
            backgroundImage: `url(${s.feature_image})`
          } }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex grow flex-col items-start justify-center self-stretch", children: [
            /* @__PURE__ */ e.jsx("div", { className: "text-lg font-semibold leading-tighter tracking-tight hover:cursor-pointer hover:opacity-75", onClick: () => {
              !t && s && a(`/posts/analytics/${s.id}`, { crossApp: !0 });
            }, children: s.title }),
            /* @__PURE__ */ e.jsxs("div", { className: "mt-0.5 text-sm text-muted-foreground", children: [
              s.authors && s.authors.length > 0 && /* @__PURE__ */ e.jsxs("div", { children: [
                "By ",
                s.authors.map((u) => u.name).join(", "),
                " – ",
                te(s.published_at, N)
              ] }),
              /* @__PURE__ */ e.jsx("div", { className: "mt-0.5", children: us(s) })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "mt-6 flex items-center gap-2", children: [
              !s.email_only && /* @__PURE__ */ e.jsx(
                ms,
                {
                  author: ((j = s.authors) == null ? void 0 : j.map((u) => u.name).join(", ")) || "",
                  description: "",
                  faviconURL: n.icon || "",
                  featureImageURL: s.feature_image || "",
                  open: i,
                  postExcerpt: s.excerpt || "",
                  postTitle: s.title,
                  postURL: s.url || "",
                  siteTitle: d,
                  onClose: () => l(!1),
                  onOpenChange: l,
                  children: /* @__PURE__ */ e.jsxs(C, { onClick: () => l(!0), children: [
                    /* @__PURE__ */ e.jsx(Te, {}),
                    " Share post"
                  ] })
                }
              ),
              /* @__PURE__ */ e.jsxs(
                C,
                {
                  className: s.email_only ? "w-full" : "",
                  variant: "outline",
                  onClick: () => {
                    a(`/posts/analytics/${s.id}`, { crossApp: !0 });
                  },
                  children: [
                    /* @__PURE__ */ e.jsx(Me, {}),
                    /* @__PURE__ */ e.jsx("span", { className: "hidden md:!visible md:!block", children: s.email_only ? "Post analytics" : "Analytics" })
                  ]
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "-ml-4 flex w-full flex-col items-stretch gap-2 pr-6 text-sm xl:h-full xl:max-w-none", children: /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-6 pl-10 lg:border-l xl:h-full", children: [
          p.showWebMetrics && (o == null ? void 0 : o.analytics.webAnalytics) && /* @__PURE__ */ e.jsxs("div", { className: r, "data-testid": "latest-post-visitors", onClick: () => {
            a(`/posts/analytics/${s.id}/web`, { crossApp: !0 });
          }, children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 font-medium text-muted-foreground transition-all group-hover:text-foreground", children: [
              /* @__PURE__ */ e.jsx($, { size: 16, strokeWidth: 1.25 }),
              /* @__PURE__ */ e.jsx("span", { className: "hidden md:!visible md:!block", children: "Visitors" })
            ] }),
            /* @__PURE__ */ e.jsx("span", { className: "text-[2.2rem] font-semibold leading-none tracking-tighter", children: g(s.visitors) })
          ] }),
          p.showMemberGrowth && /* @__PURE__ */ e.jsxs("div", { className: k(
            r,
            // Member metric is moved to the 2nd row in the grid if the post is email only or if web analytics is turned off, otherwise leave as is
            p.showEmailMetrics && (!p.showWebMetrics || !(o != null && o.analytics.webAnalytics)) && "row-[2/3] col-[1/2]"
          ), "data-testid": "latest-post-members", onClick: () => {
            a(`/posts/analytics/${s.id}/growth`, { crossApp: !0 });
          }, children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 font-medium text-muted-foreground transition-all group-hover:text-foreground", children: [
              /* @__PURE__ */ e.jsx(ie, { size: 16, strokeWidth: 1.25 }),
              /* @__PURE__ */ e.jsx("span", { className: "hidden md:!visible md:!block", children: "Members" })
            ] }),
            /* @__PURE__ */ e.jsx("span", { className: "text-[2.2rem] font-semibold leading-none tracking-tighter", children: s.member_delta ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              "+",
              g(s.member_delta)
            ] }) : 0 })
          ] }),
          p.showEmailMetrics && s.email && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            f && /* @__PURE__ */ e.jsxs("div", { className: r, onClick: () => {
              a(`/posts/analytics/${s.id}/newsletter`, { crossApp: !0 });
            }, children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 font-medium text-muted-foreground transition-all group-hover:text-foreground", children: [
                /* @__PURE__ */ e.jsx(Y, { size: 16, strokeWidth: 1.25 }),
                /* @__PURE__ */ e.jsx("span", { className: "hidden whitespace-nowrap md:!visible md:!block", children: "Opens" })
              ] }),
              /* @__PURE__ */ e.jsx("span", { className: "text-[2.2rem] font-semibold leading-none tracking-tighter", children: s.email.email_count ? J((s.email.opened_count || 0) / s.email.email_count) : "0%" })
            ] }),
            c && /* @__PURE__ */ e.jsxs("div", { className: r, onClick: () => {
              a(`/posts/analytics/${s.id}/newsletter`, { crossApp: !0 });
            }, children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 font-medium text-muted-foreground transition-all group-hover:text-foreground", children: [
                /* @__PURE__ */ e.jsx(Le, { size: 16, strokeWidth: 1.25 }),
                /* @__PURE__ */ e.jsx("span", { className: "hidden whitespace-nowrap md:!visible md:!block", children: "Clicks" })
              ] }),
              /* @__PURE__ */ e.jsx("span", { className: "text-[2.2rem] font-semibold leading-none tracking-tighter", children: s.email.email_count && ((y = s.count) != null && y.clicks) ? J((s.count.clicks || 0) / s.email.email_count) : "0%" })
            ] })
          ] })
        ] }) })
      ] }) : !t && /* @__PURE__ */ e.jsx(
        q,
        {
          actions: /* @__PURE__ */ e.jsx(C, { variant: "secondary", onClick: () => {
            a("/editor/post", { crossApp: !0 });
          }, children: "New post" }),
          className: "w-full pb-10 xl:col-span-3",
          description: "Once it's live, you can track performance here",
          title: "Publish your first post",
          children: /* @__PURE__ */ e.jsx(ne, { strokeWidth: 1.5 })
        }
      )
    ] })
  ] });
}, xs = () => {
  const { data: s } = M();
  return {
    isLimited: (a) => {
      var l, n;
      const i = s == null ? void 0 : s.config;
      return (l = i == null ? void 0 : i.hostSettings) != null && l.limits && a === "limitAnalytics" ? ((n = i.hostSettings.limits.limitAnalytics) == null ? void 0 : n.disabled) === !0 : !1;
    }
  };
}, U = ({
  // linkto,
  title: s,
  iconName: t,
  description: a,
  color: i,
  diffDirection: l,
  diffValue: n,
  formattedValue: m,
  trendingFromValue: o,
  children: c,
  onClick: f
}) => {
  const { range: d } = M(), N = t && He[t], p = we.useMemo(() => {
    if (!l || l === "empty" || d === X.allTime.value || !n)
      return "";
    const r = l === "up" ? "up" : l === "down" ? "down" : "at", b = K(d).replace("in the ", "").replace(/^\(|\)$/g, "");
    return l === "same" ? /* @__PURE__ */ e.jsxs("span", { children: [
      "You're trending at the same level as ",
      /* @__PURE__ */ e.jsx("span", { className: "font-semibold", children: m }),
      " compared to the ",
      /* @__PURE__ */ e.jsx("span", { className: "font-semibold", children: b })
    ] }) : /* @__PURE__ */ e.jsxs("span", { children: [
      "You're trending ",
      /* @__PURE__ */ e.jsxs("span", { className: "font-semibold", children: [
        r,
        " ",
        n
      ] }),
      " from ",
      /* @__PURE__ */ e.jsx("span", { className: "font-semibold", children: o }),
      " compared to the ",
      b
    ] });
  }, [l, n, o, m, d]);
  return /* @__PURE__ */ e.jsxs(R, { className: "group", "data-testid": s, children: [
    /* @__PURE__ */ e.jsxs(D, { className: "hidden", children: [
      /* @__PURE__ */ e.jsx(H, { children: s }),
      /* @__PURE__ */ e.jsx(V, { children: a })
    ] }),
    /* @__PURE__ */ e.jsxs(Re, { className: "relative flex grow flex-row items-start justify-between gap-5 border-none pb-2 xl:pb-4", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex grow flex-col gap-1.5 border-none pb-0", children: [
        /* @__PURE__ */ e.jsxs(De, { className: f && "transition-all group-hover:text-foreground", children: [
          i && /* @__PURE__ */ e.jsx("span", { className: "inline-block size-2 rounded-full opacity-50", style: { backgroundColor: i } }),
          N && /* @__PURE__ */ e.jsx(N, { size: 16, strokeWidth: 1.5 }),
          s
        ] }),
        /* @__PURE__ */ e.jsx(
          Ve,
          {
            diffDirection: d === X.allTime.value ? "hidden" : l,
            diffTooltip: p,
            diffValue: n,
            value: m
          }
        )
      ] }),
      f && /* @__PURE__ */ e.jsx(C, { className: "absolute right-6 translate-x-10 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100", size: "sm", variant: "outline", onClick: f, children: "View more" })
    ] }),
    /* @__PURE__ */ e.jsx(F, { children: c })
  ] });
}, ps = ({
  kpiValues: s,
  visitorsChartData: t,
  visitorsYRange: a,
  growthTotals: i,
  membersChartData: l,
  mrrChartData: n,
  currencySymbol: m,
  isLoading: o
}) => {
  const c = Q(), { range: f } = M(), { appSettings: d } = E(), p = xs().isLimited("limitAnalytics"), r = "-mb-3 h-[10vw] max-h-[200px] min-h-[100px] hover:!cursor-pointer";
  if (o)
    return /* @__PURE__ */ e.jsx($e, { className: "flex h-[calc(10vw+116px)] max-h-[416px] min-h-20 items-center justify-center hover:!cursor-pointer", children: /* @__PURE__ */ e.jsx(We, {}) });
  const x = d == null ? void 0 : d.analytics.webAnalytics, b = p && !x, j = !0, y = d == null ? void 0 : d.paidMembersEnabled, u = [x, b, j, y].filter(Boolean).length;
  let z = "lg:grid-cols-3";
  u === 2 ? z = "lg:grid-cols-2" : u === 1 && (z = "lg:grid-cols-1");
  const I = `flex flex-col lg:grid ${z} gap-6`;
  return /* @__PURE__ */ e.jsxs("div", { className: I, children: [
    x && !b && /* @__PURE__ */ e.jsx(
      U,
      {
        description: "Number of individual people who visited your website",
        diffDirection: "empty",
        formattedValue: s.visits,
        iconName: "Globe",
        linkto: "/analytics/web/",
        title: "Unique visitors",
        onClick: () => {
          c("/analytics/web/");
        },
        children: /* @__PURE__ */ e.jsx(
          O,
          {
            className: r,
            color: "hsl(var(--chart-blue))",
            data: t,
            id: "visitors",
            range: f,
            showHorizontalLines: !0,
            showYAxisValues: !1,
            syncId: "overview-charts",
            yAxisRange: a
          }
        )
      }
    ),
    b && /* @__PURE__ */ e.jsxs(R, { children: [
      /* @__PURE__ */ e.jsxs(D, { className: "hidden", children: [
        /* @__PURE__ */ e.jsx(H, { children: "Unlock web analytics" }),
        /* @__PURE__ */ e.jsx(V, { children: "Get the full picture of what's working with detailed, cookie-free traffic analytics." })
      ] }),
      /* @__PURE__ */ e.jsx(F, { className: "flex h-full items-center justify-center p-6", children: /* @__PURE__ */ e.jsx(
        q,
        {
          actions: /* @__PURE__ */ e.jsx(C, { variant: "outline", onClick: () => c("/pro", { crossApp: !0 }), children: "Upgrade now" }),
          className: "py-10",
          description: "Get the full picture of what's working with detailed, cookie-free traffic analytics.",
          title: "Unlock web analytics",
          children: /* @__PURE__ */ e.jsx(Ee, {})
        }
      ) })
    ] }),
    /* @__PURE__ */ e.jsx(
      U,
      {
        description: "How number of members of your publication changed over time",
        diffDirection: i.directions.total,
        diffValue: i.percentChanges.total,
        formattedValue: g(i.totalMembers),
        iconName: "User",
        linkto: "/analytics/growth/",
        title: "Members",
        trendingFromValue: `${g(l[0].value)}`,
        onClick: () => {
          c("/analytics/growth/?tab=total-members");
        },
        children: /* @__PURE__ */ e.jsx(
          O,
          {
            className: r,
            color: "hsl(var(--chart-darkblue))",
            data: l,
            id: "members",
            range: f,
            showHorizontalLines: !0,
            showYAxisValues: !1,
            syncId: "overview-charts"
          }
        )
      }
    ),
    y && /* @__PURE__ */ e.jsx(
      U,
      {
        description: "Monthly recurring revenue changes over time",
        diffDirection: i.directions.mrr,
        diffValue: i.percentChanges.mrr,
        formattedValue: `${m}${g(P(i.mrr))}`,
        iconName: "Coins",
        linkto: "/analytics/growth/",
        title: "MRR",
        trendingFromValue: `${m}${g(n[0].value)}`,
        onClick: () => {
          c("/analytics/growth/?tab=mrr");
        },
        children: /* @__PURE__ */ e.jsx(
          O,
          {
            className: r,
            color: "hsl(var(--chart-teal))",
            data: n,
            id: "mrr",
            range: f,
            showHorizontalLines: !0,
            showYAxisValues: !1,
            syncId: "overview-charts"
          }
        )
      }
    )
  ] });
}, gs = ({
  className: s
}) => /* @__PURE__ */ e.jsx("div", { className: k("rounded-sm bg-muted dark:bg-[#36373a] flex flex-col items-center justify-center gap-1 p-6", s), children: /* @__PURE__ */ e.jsx(Fe, { className: "text-muted-foreground/50", size: 18, strokeWidth: 1.5 }) }), G = ({
  className: s,
  metrics: t,
  title: a
}) => /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsxs("div", { className: k("pointer-events-none absolute bottom-[calc(100%+2px)] left-1/2 z-50 min-w-[160px] -translate-x-1/2 rounded-md bg-background p-3 text-sm opacity-0 shadow-md transition-all group-hover/tooltip:bottom-[calc(100%+12px)] group-hover/tooltip:opacity-100", s), children: [
  /* @__PURE__ */ e.jsx("div", { className: "mb-1.5 whitespace-nowrap border-b pb-1.5 pr-10 font-medium text-muted-foreground", children: a }),
  /* @__PURE__ */ e.jsx("div", { className: "flex flex-col gap-1.5", children: t == null ? void 0 : t.map((i) => /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between gap-5", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 whitespace-nowrap", children: [
      i.icon,
      i.label
    ] }),
    /* @__PURE__ */ e.jsx("span", { className: "font-mono", children: i.metric })
  ] }, i.label)) })
] }) }), fs = ({
  topPostsData: s,
  isLoading: t
}) => {
  var N, p;
  const a = Q(), { range: i, settings: l } = M(), { appSettings: n } = E(), m = String(((N = l.find((r) => r.key === "timezone")) == null ? void 0 : N.value) || "Etc/UTC"), o = n == null ? void 0 : n.analytics.webAnalytics, c = n == null ? void 0 : n.analytics.emailTrackClicks, f = n == null ? void 0 : n.analytics.emailTrackOpens, d = "flex items-center justify-end gap-1 rounded-md px-2 py-1 font-mono text-gray-800 hover:bg-muted-foreground/10 group-hover:text-foreground";
  return /* @__PURE__ */ e.jsxs(R, { className: "group/card w-full lg:col-span-2", "data-testid": "top-posts-card", children: [
    /* @__PURE__ */ e.jsxs(D, { children: [
      /* @__PURE__ */ e.jsxs(H, { className: "flex items-baseline justify-between font-medium  leading-snug text-muted-foreground", children: [
        "Top posts ",
        K(i)
      ] }),
      /* @__PURE__ */ e.jsx(V, { className: "hidden", children: "Most viewed posts in this period" })
    ] }),
    /* @__PURE__ */ e.jsx(F, { children: t ? /* @__PURE__ */ e.jsx(Ie, { className: "mt-6" }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      (p = s == null ? void 0 : s.stats) == null ? void 0 : p.map((r) => /* @__PURE__ */ e.jsxs("div", { className: 'group relative flex w-full items-start justify-between gap-5 border-t border-border/50 py-4 before:absolute before:-inset-x-4 before:inset-y-0 before:z-0 before:hidden before:rounded-md before:bg-accent before:opacity-80 before:content-[""] first:!border-border hover:cursor-pointer hover:border-transparent hover:before:block md:items-center dark:before:bg-accent/50 [&+div]:hover:border-transparent', children: [
        /* @__PURE__ */ e.jsxs("div", { className: "z-10 flex min-w-[160px] grow items-start gap-4 md:items-center lg:min-w-[320px]", onClick: () => {
          a(`/posts/analytics/${r.post_id}`, { crossApp: !0 });
        }, children: [
          r.feature_image ? /* @__PURE__ */ e.jsx("div", { className: "hidden aspect-[16/10] w-[80px] shrink-0 rounded-sm bg-cover bg-center sm:!visible sm:!block lg:w-[100px]", style: {
            backgroundImage: `url(${r.feature_image})`
          } }) : /* @__PURE__ */ e.jsx(gs, { className: "hidden aspect-[16/10] w-[80px] shrink-0 group-hover:bg-muted-foreground/10 sm:!visible sm:!flex lg:w-[100px]" }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ e.jsx("span", { className: "line-clamp-2 text-lg font-semibold leading-[1.35em]", children: r.title }),
            /* @__PURE__ */ e.jsxs("span", { className: "text-sm text-muted-foreground", children: [
              "By ",
              r.authors,
              " – ",
              te(r.published_at, m)
            ] }),
            /* @__PURE__ */ e.jsx("span", { className: "text-sm text-muted-foreground", children: ts(r) })
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "z-10 flex flex-col items-end justify-center gap-0.5 text-sm md:flex-row md:items-center md:justify-end md:gap-3", children: [
          o && /* @__PURE__ */ e.jsxs("div", { className: "group/tooltip relative flex w-[66px] lg:w-[92px]", "data-testid": "statistics-visitors", onClick: (x) => {
            x.stopPropagation(), a(`/posts/analytics/${r.post_id}/web`, { crossApp: !0 });
          }, children: [
            /* @__PURE__ */ e.jsx(
              G,
              {
                metrics: [
                  {
                    icon: /* @__PURE__ */ e.jsx($, { className: "shrink-0 text-muted-foreground", size: 16, strokeWidth: 1.5 }),
                    label: "Unique visitors",
                    metric: g(r.views)
                  }
                ],
                title: "Web traffic"
              }
            ),
            /* @__PURE__ */ e.jsxs("div", { className: d, children: [
              /* @__PURE__ */ e.jsx($, { className: "text-muted-foreground group-hover:text-foreground", size: 16, strokeWidth: 1.5 }),
              Z(r.views)
            ] })
          ] }),
          r.sent_count !== null && /* @__PURE__ */ e.jsxs("div", { className: "group/tooltip relative flex w-[66px] lg:w-[92px]", onClick: (x) => {
            x.stopPropagation(), a(`/posts/analytics/${r.post_id}/newsletter`, { crossApp: !0 });
          }, children: [
            /* @__PURE__ */ e.jsx(
              G,
              {
                className: `${n != null && n.analytics.membersTrackSources ? "" : "left-auto right-0 translate-x-0"}`,
                metrics: [
                  // Always show sent
                  {
                    icon: /* @__PURE__ */ e.jsx(S, { className: "shrink-0 text-muted-foreground", size: 16, strokeWidth: 1.5 }),
                    label: "Sent",
                    metric: g(r.sent_count || 0)
                  },
                  // Only show opens if open tracking is enabled
                  ...f ? [{
                    icon: /* @__PURE__ */ e.jsx(Y, { className: "shrink-0 text-muted-foreground", size: 16, strokeWidth: 1.5 }),
                    label: "Opens",
                    metric: g(r.opened_count || 0)
                  }] : [],
                  // Only show clicks if click tracking is enabled
                  ...c ? [{
                    icon: /* @__PURE__ */ e.jsx(ee, { className: "shrink-0 text-muted-foreground", size: 16, strokeWidth: 1.5 }),
                    label: "Clicks",
                    metric: g(r.clicked_count || 0)
                  }] : []
                ],
                title: "Newsletter performance"
              }
            ),
            /* @__PURE__ */ e.jsx("div", { className: d, children: f ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              /* @__PURE__ */ e.jsx(Y, { className: "text-muted-foreground group-hover:text-foreground", size: 16, strokeWidth: 1.5 }),
              r.open_rate ? `${Math.round(r.open_rate)}%` : "0%"
            ] }) : c ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              /* @__PURE__ */ e.jsx(ee, { className: "text-muted-foreground group-hover:text-foreground", size: 16, strokeWidth: 1.5 }),
              r.click_rate ? `${Math.round(r.click_rate)}%` : "0%"
            ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              /* @__PURE__ */ e.jsx(S, { className: "text-muted-foreground group-hover:text-foreground", size: 16, strokeWidth: 1.5 }),
              Z(r.sent_count || 0)
            ] }) })
          ] }),
          (n == null ? void 0 : n.analytics.membersTrackSources) && /* @__PURE__ */ e.jsxs("div", { className: "group/tooltip relative flex w-[66px] lg:w-[92px]", "data-testid": "statistics-members", onClick: (x) => {
            x.stopPropagation(), a(`/posts/analytics/${r.post_id}/growth`, { crossApp: !0 });
          }, children: [
            /* @__PURE__ */ e.jsx(
              G,
              {
                className: "left-auto right-0 translate-x-0",
                metrics: [
                  {
                    icon: /* @__PURE__ */ e.jsx(Be, { className: "shrink-0 text-muted-foreground", size: 16, strokeWidth: 1.5 }),
                    label: "Free",
                    metric: r.free_members > 0 ? `+${g(r.free_members)}` : "0"
                  },
                  // Only show paid members if paid members are enabled
                  ...n != null && n.paidMembersEnabled ? [{
                    icon: /* @__PURE__ */ e.jsx(Oe, { className: "shrink-0 text-muted-foreground", size: 16, strokeWidth: 1.5 }),
                    label: "Paid",
                    metric: r.paid_members > 0 ? `+${g(r.paid_members)}` : "0"
                  }] : []
                ],
                title: "New members"
              }
            ),
            /* @__PURE__ */ e.jsxs("div", { className: d, children: [
              /* @__PURE__ */ e.jsx(ie, { className: "text-muted-foreground group-hover:text-foreground", size: 16, strokeWidth: 1.5 }),
              r.members > 0 ? `+${g(r.members)}` : "0"
            ] })
          ] })
        ] })
      ] }, r.post_id)),
      (!(s != null && s.stats) || s.stats.length === 0) && /* @__PURE__ */ e.jsx(
        q,
        {
          className: "w-full pb-10",
          title: `No posts ${K(i)}`,
          children: /* @__PURE__ */ e.jsx(ne, { strokeWidth: 1.5 })
        }
      )
    ] }) })
  ] });
}, bs = "PostsResponseType", js = ye({
  dataType: bs,
  path: "/posts/"
}), vs = () => {
  const { data: { posts: [s] } = { posts: [] }, isLoading: t } = js({
    searchParams: {
      filter: "status:[published,sent]",
      order: "published_at DESC",
      limit: "1",
      include: "authors,email,count.clicks"
    }
  }), a = s, i = Ue((a == null ? void 0 : a.id) || "", {
    enabled: !!(a != null && a.id)
  }), { data: l, isLoading: n } = i;
  return {
    data: T(() => {
      var c;
      if (!a)
        return null;
      const o = ((c = l == null ? void 0 : l.stats) == null ? void 0 : c[0]) || {
        id: a.id,
        recipient_count: null,
        opened_count: null,
        open_rate: null,
        member_delta: 0,
        free_members: 0,
        paid_members: 0,
        visitors: 0
      };
      return {
        // Post content from Posts API
        id: a.id,
        uuid: a.uuid,
        title: a.title || "",
        slug: a.slug || "",
        feature_image: a.feature_image || null,
        published_at: a.published_at || "",
        url: a.url || "",
        excerpt: a.excerpt || "",
        email_only: a.email_only || !1,
        status: a.status,
        email: a.email,
        count: a.count,
        authors: a.authors || [],
        // Analytics data from Stats API
        recipient_count: o.recipient_count,
        opened_count: o.opened_count,
        open_rate: o.open_rate,
        member_delta: o.member_delta,
        free_members: o.free_members,
        paid_members: o.paid_members,
        visitors: o.visitors,
        click_rate: null
        // TODO: Add click_rate to PostStats interface if needed
      };
    }, [a, l]),
    isLoading: t || !!(a != null && a.id) && n
  };
}, se = ({
  className: s,
  title: t,
  description: a,
  url: i,
  children: l
}) => /* @__PURE__ */ e.jsx("a", { className: k(
  "block rounded-xl border bg-card p-6 transition-all hover:shadow-xs hover:bg-accent/50 group/card",
  s
), href: i, rel: "noreferrer", target: "_blank", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-6", children: [
  l,
  /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-0.5 leading-tight", children: [
    /* @__PURE__ */ e.jsx("span", { className: "text-base font-semibold", children: t }),
    /* @__PURE__ */ e.jsx("span", { className: "text-sm font-normal text-gray-700", children: a })
  ] })
] }) }), _s = () => {
  const { appSettings: s } = E(), { statsConfig: t, isLoading: a, range: i } = M(), { startDate: l, endDate: n, timezone: m } = ke(i), { isLoading: o, chartData: c, totals: f, currencySymbol: d } = as(i), { data: N, isLoading: p } = vs(), { data: r, isLoading: x } = Ge({
    searchParams: {
      date_from: L(l),
      date_to: L(n),
      limit: "5",
      timezone: m
    }
  }), b = {
    site_uuid: (t == null ? void 0 : t.id) || "",
    date_from: L(l),
    date_to: L(n),
    timezone: m,
    member_status: ss(_e)
  }, { data: j, loading: y } = Pe({
    endpoint: "api_kpis",
    statsConfig: t,
    params: b
  }), u = T(() => {
    var v;
    return (v = B(j || [], i, "visits", "sum")) == null ? void 0 : v.map((_) => {
      const A = Number(_.visits), h = isNaN(A) ? 0 : A;
      return {
        date: String(_.date),
        value: h,
        formattedValue: g(h),
        label: "Visitors"
      };
    });
  }, [j, i]), z = T(() => {
    const v = [0, 1];
    if (!u || u.length === 0)
      return v;
    const _ = u.map((h) => h.value).filter((h) => h >= 0);
    return _.length === 0 ? v : [0, Math.max(..._) || v[1]];
  }, [u]), I = T(() => {
    if (!c || c.length === 0)
      return [];
    let v = [];
    return v = B(c, i, "value", "exact"), v.map((h) => ({
      date: h.date,
      value: h.free + h.paid,
      formattedValue: g(h.free + h.paid),
      label: "Members"
    }));
  }, [c, i]), be = T(() => {
    if (!(s != null && s.paidMembersEnabled) || !c || c.length === 0)
      return [];
    let v = [];
    return v = B(c, i, "mrr", "exact"), v.map((h) => ({
      date: h.date,
      value: P(h.mrr),
      formattedValue: `${d}${g(P(h.mrr))}`,
      label: "MRR"
    }));
  }, [c, i, d, s]), je = T(() => {
    if (!(j != null && j.length))
      return { visits: "0" };
    const v = j.reduce((_, A) => {
      const h = Number(A.visits);
      return _ + (isNaN(h) ? 0 : h);
    }, 0);
    return {
      visits: g(v)
    };
  }, [j]), ve = a;
  return /* @__PURE__ */ e.jsxs(Ye, { children: [
    /* @__PURE__ */ e.jsx(Ke, { children: /* @__PURE__ */ e.jsx(Qe, { children: /* @__PURE__ */ e.jsx(qe, { excludeRanges: ["today"] }) }) }),
    /* @__PURE__ */ e.jsxs(Je, { isLoading: ve, loadingComponent: /* @__PURE__ */ e.jsx(e.Fragment, {}), children: [
      /* @__PURE__ */ e.jsx(
        ps,
        {
          currencySymbol: d,
          growthTotals: f,
          isLoading: y || o,
          kpiValues: je,
          membersChartData: I,
          mrrChartData: be,
          visitorsChartData: u,
          visitorsYRange: z
        }
      ),
      /* @__PURE__ */ e.jsx(
        hs,
        {
          isLoading: p,
          latestPostStats: N
        }
      ),
      /* @__PURE__ */ e.jsx(
        fs,
        {
          isLoading: x,
          topPostsData: r
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 gap-6 lg:grid-cols-2", children: [
        /* @__PURE__ */ e.jsx(re, { className: "-mb-4 mt-4 lg:col-span-2", children: "Grow your audience" }),
        /* @__PURE__ */ e.jsx(
          se,
          {
            description: "Find out how to review the performance of your content and get the most out of post analytics in Ghost.",
            title: "Understanding analytics in Ghost",
            url: "https://ghost.org/help/native-analytics",
            children: /* @__PURE__ */ e.jsx("div", { className: "flex h-18 w-[100px] min-w-[100px] items-center justify-center rounded-md bg-gradient-to-tr from-[#14B8FF]/20 to-[#00BBA7]/20 p-4 opacity-80 transition-all group-hover/card:opacity-100", children: /* @__PURE__ */ e.jsx(Xe, { className: "text-[#00BBA7]", size: 20, strokeWidth: 1.5 }) })
          }
        ),
        /* @__PURE__ */ e.jsx(
          se,
          {
            description: "Use these content distribution tactics to get more people to discover your work and increase engagement.",
            title: "How to get your content seen online",
            url: "https://ghost.org/resources/content-distribution/",
            children: /* @__PURE__ */ e.jsx("div", { className: "flex h-18 w-[100px] min-w-[100px] items-center justify-center rounded-md bg-gradient-to-tl from-[#FDC700]/20 to-[#FF2056]/20 p-4 opacity-80 transition-all group-hover/card:opacity-100", children: /* @__PURE__ */ e.jsx($, { className: "text-[#FE9A00]", size: 20, strokeWidth: 1.5 }) })
          }
        )
      ] })
    ] })
  ] });
};
export {
  _s as default
};
//# sourceMappingURL=index-Bh1sPDPK.mjs.map
