import { a6 as v, a7 as y, u as b, d as j, a8 as k, e as F, j as e, L as P, H as B, B as E, a9 as M, R as T, k as L, Q as A, P as C, A as H, S as u, aa as I, ab as S, ac as U } from "./index-BP8K8A9r.mjs";
import { T as _ } from "./topic-filter-DiFrfecl.mjs";
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const z = [
  [
    "path",
    {
      d: "M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3",
      key: "139s4v"
    }
  ],
  ["path", { d: "M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4", key: "1dlkgp" }],
  ["path", { d: "M5 21h14", key: "11awu3" }]
], Q = v("sprout", z), f = ({ profile: s, update: n, isLoading: t, onOpenChange: l }) => {
  const c = A("index", "me"), { data: r } = c, i = s.handle === (r == null ? void 0 : r.handle), o = () => {
    n(s.id, {
      followedByMe: !0
    });
  }, d = () => {
    n(s.id, {
      followedByMe: !1
    });
  }, x = j();
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: "flex w-full cursor-pointer items-start gap-3 pt-4 [&:last-of-type>:nth-child(2)]:border-none",
      onClick: () => {
        x(`/profile/${s.handle}`);
      },
      children: /* @__PURE__ */ e.jsxs("div", { className: "flex w-full flex-col gap-1 border-b border-gray-200 pb-4 dark:border-gray-950", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ e.jsx(C, { actor: s, isCurrentUser: i, children: /* @__PURE__ */ e.jsxs("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ e.jsx(H, { author: {
              icon: {
                url: s.avatarUrl
              },
              name: s.name,
              handle: s.handle
            }, onClick: () => l == null ? void 0 : l(!1) }),
            /* @__PURE__ */ e.jsxs("div", { className: "-mt-0.5 flex grow flex-col break-anywhere", children: [
              /* @__PURE__ */ e.jsx("span", { className: "line-clamp-1 font-semibold text-black dark:text-white", children: t ? /* @__PURE__ */ e.jsx(u, { className: "w-full max-w-48" }) : s.name }),
              /* @__PURE__ */ e.jsx("span", { className: "line-clamp-1 text-md text-gray-700 dark:text-gray-600", children: t ? /* @__PURE__ */ e.jsx(u, { className: "w-32" }) : s.handle })
            ] })
          ] }) }),
          t ? /* @__PURE__ */ e.jsx("div", { className: "inline-flex items-center", children: /* @__PURE__ */ e.jsx(u, { className: "w-24" }) }) : i ? null : /* @__PURE__ */ e.jsx(
            I,
            {
              className: "ml-auto",
              following: s.followedByMe,
              handle: s.handle,
              type: "primary",
              onFollow: o,
              onUnfollow: d
            }
          )
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "pl-[52px]", children: t ? /* @__PURE__ */ e.jsx(u, { className: "w-full max-w-96" }) : s.bio && /* @__PURE__ */ e.jsx(
          "div",
          {
            dangerouslySetInnerHTML: { __html: S(U(s.bio, ["a", "br"])) },
            className: "ap-profile-content pointer-events-none mt-0 line-clamp-2 max-w-[460px] break-anywhere"
          }
        ) })
      ] })
    }
  );
}, V = () => {
  const { isExplainerClosed: s, setExplainerClosed: n } = y(), t = b(), l = j(), c = t.topic || "top", { exploreProfilesQuery: r, updateExploreProfile: i } = k("index", c), { data: o, isLoading: d, fetchNextPage: x, hasNextPage: h, isFetchingNextPage: p } = r, w = Array(10).fill(null).map((a, m) => ({
    id: `skeleton-${m}`,
    name: "",
    handle: "",
    avatarUrl: "",
    bio: "",
    url: "",
    followedByMe: !1
  })), g = (o == null ? void 0 : o.pages.flatMap((a) => a.accounts)) || [];
  return F(() => {
    const a = document.querySelector(".load-more-trigger");
    if (!a)
      return;
    const m = new IntersectionObserver(
      (N) => {
        N[0].isIntersecting && h && !p && x();
      },
      { threshold: 0.1 }
    );
    return m.observe(a), () => m.disconnect();
  }, [h, p, x]), /* @__PURE__ */ e.jsxs(P, { children: [
    !s && /* @__PURE__ */ e.jsxs("div", { className: "relative mb-6 flex items-start gap-1 rounded-md bg-gradient-to-r from-[#CFB0FF66] to-[#B6E8FF66] p-4 pr-10 dark:from-[#CFB0FF20] dark:to-[#B6E8FF20]", children: [
      /* @__PURE__ */ e.jsx("div", { className: "min-w-[46px]", children: /* @__PURE__ */ e.jsx(Q, { className: "text-purple", size: 46, strokeWidth: 0.75 }) }),
      /* @__PURE__ */ e.jsxs("div", { className: "mt-1 flex flex-col gap-[2px]", children: [
        /* @__PURE__ */ e.jsx(B, { className: "text-pretty", children: "The fastest way to grow your followers, is to follow others!" }),
        /* @__PURE__ */ e.jsx("p", { className: "2xl:text-pretty text-balance text-sm text-black/60 dark:text-white/60", children: "Here are some recommendations to get you started, from Ghost publishers and other great accounts from around the social web." })
      ] }),
      /* @__PURE__ */ e.jsx(E, { className: "absolute right-4 top-[17px] size-6 opacity-40", variant: "link", onClick: () => n(!0), children: /* @__PURE__ */ e.jsx(M, { size: 20 }) })
    ] }),
    /* @__PURE__ */ e.jsx(
      _,
      {
        currentTopic: c,
        excludeTopics: ["following"],
        onTopicChange: (a) => {
          a === "top" ? l("/explore", { replace: !0 }) : l(`/explore/${a}`, { replace: !0 });
        }
      }
    ),
    /* @__PURE__ */ e.jsx("div", { className: "mt-12 flex flex-col gap-12 pb-20 max-md:mt-5", children: d ? /* @__PURE__ */ e.jsx("div", { children: w.map((a) => /* @__PURE__ */ e.jsx("div", { className: "mx-auto w-full max-w-[640px]", children: /* @__PURE__ */ e.jsx(
      f,
      {
        isLoading: d,
        profile: a,
        update: () => {
        }
      }
    ) }, a.id)) }) : /* @__PURE__ */ e.jsxs("div", { className: "mx-auto flex w-full max-w-[640px] flex-col items-center", children: [
      /* @__PURE__ */ e.jsx("div", { className: "w-full", children: g.map((a) => /* @__PURE__ */ e.jsx(T.Fragment, { children: /* @__PURE__ */ e.jsx(
        f,
        {
          isLoading: !1,
          profile: a,
          update: i
        }
      ) }, a.id)) }),
      /* @__PURE__ */ e.jsx("div", { className: "load-more-trigger h-4 w-full" }),
      p && /* @__PURE__ */ e.jsx("div", { className: "mt-2 flex w-full justify-center", children: /* @__PURE__ */ e.jsx(L, { size: "sm" }) })
    ] }) })
  ] });
};
export {
  V as default
};
//# sourceMappingURL=index-BvKBFURw.mjs.map
