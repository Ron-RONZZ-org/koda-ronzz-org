import { R as C, j as c, N as ee, Q as te, o as D, b as U, p as k, u as G, q as N, a as oe, n as B } from "./index-DP6CzQAF.mjs";
import { c as q, b as j, f as L, a as ne, P as V, u as re, e as se } from "./heading-CN611yBx.mjs";
function y(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(f) {
    if (e == null || e(f), r === !1 || !f.defaultPrevented)
      return t == null ? void 0 : t(f);
  };
}
function ce(e) {
  const t = e + "CollectionProvider", [r, n] = q(t), [f, p] = r(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), l = (I) => {
    const { scope: o, children: u } = I, b = C.useRef(null), a = C.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ c.jsx(f, { scope: o, itemMap: a, collectionRef: b, children: u });
  };
  l.displayName = t;
  const x = e + "CollectionSlot", h = L(x), d = C.forwardRef(
    (I, o) => {
      const { scope: u, children: b } = I, a = p(x, u), i = j(o, a.collectionRef);
      return /* @__PURE__ */ c.jsx(h, { ref: i, children: b });
    }
  );
  d.displayName = x;
  const s = e + "CollectionItemSlot", v = "data-radix-collection-item", g = L(s), R = C.forwardRef(
    (I, o) => {
      const { scope: u, children: b, ...a } = I, i = C.useRef(null), T = j(o, i), w = p(s, u);
      return C.useEffect(() => (w.itemMap.set(i, { ref: i, ...a }), () => void w.itemMap.delete(i))), /* @__PURE__ */ c.jsx(g, { [v]: "", ref: T, children: b });
    }
  );
  R.displayName = s;
  function S(I) {
    const o = p(e + "CollectionConsumer", I);
    return C.useCallback(() => {
      const b = o.collectionRef.current;
      if (!b) return [];
      const a = Array.from(b.querySelectorAll(`[${v}]`));
      return Array.from(o.itemMap.values()).sort(
        (w, E) => a.indexOf(w.ref.current) - a.indexOf(E.ref.current)
      );
    }, [o.collectionRef, o.itemMap]);
  }
  return [
    { Provider: l, Slot: d, ItemSlot: R },
    S,
    n
  ];
}
var ae = te(void 0);
function le(e) {
  const t = ee(ae);
  return e || t || "ltr";
}
var M = "rovingFocusGroup.onEntryFocus", ie = { bubbles: !1, cancelable: !0 }, A = "RovingFocusGroup", [P, Y, ue] = ce(A), [fe, he] = q(
  A,
  [ue]
), [de, me] = fe(A), $ = D(
  (e, t) => /* @__PURE__ */ c.jsx(P.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ c.jsx(P.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ c.jsx(pe, { ...e, ref: t }) }) })
);
$.displayName = A;
var pe = D((e, t) => {
  const {
    __scopeRovingFocusGroup: r,
    orientation: n,
    loop: f = !1,
    dir: p,
    currentTabStopId: l,
    defaultCurrentTabStopId: x,
    onCurrentTabStopIdChange: h,
    onEntryFocus: d,
    preventScrollOnEntryFocus: s = !1,
    ...v
  } = e, g = k(null), R = j(t, g), S = le(p), [I, o] = re({
    prop: l,
    defaultProp: x ?? null,
    onChange: h,
    caller: A
  }), [u, b] = G(!1), a = se(d), i = Y(r), T = k(!1), [w, E] = G(0);
  return U(() => {
    const m = g.current;
    if (m)
      return m.addEventListener(M, a), () => m.removeEventListener(M, a);
  }, [a]), /* @__PURE__ */ c.jsx(
    de,
    {
      scope: r,
      orientation: n,
      dir: S,
      loop: f,
      currentTabStopId: I,
      onItemFocus: N(
        (m) => o(m),
        [o]
      ),
      onItemShiftTab: N(() => b(!0), []),
      onFocusableItemAdd: N(
        () => E((m) => m + 1),
        []
      ),
      onFocusableItemRemove: N(
        () => E((m) => m - 1),
        []
      ),
      children: /* @__PURE__ */ c.jsx(
        V.div,
        {
          tabIndex: u || w === 0 ? -1 : 0,
          "data-orientation": n,
          ...v,
          ref: R,
          style: { outline: "none", ...e.style },
          onMouseDown: y(e.onMouseDown, () => {
            T.current = !0;
          }),
          onFocus: y(e.onFocus, (m) => {
            const X = !T.current;
            if (m.target === m.currentTarget && X && !u) {
              const O = new CustomEvent(M, ie);
              if (m.currentTarget.dispatchEvent(O), !O.defaultPrevented) {
                const _ = i().filter((F) => F.focusable), Z = _.find((F) => F.active), z = _.find((F) => F.id === I), H = [Z, z, ..._].filter(
                  Boolean
                ).map((F) => F.ref.current);
                J(H, s);
              }
            }
            T.current = !1;
          }),
          onBlur: y(e.onBlur, () => b(!1))
        }
      )
    }
  );
}), W = "RovingFocusGroupItem", Q = D(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: r,
      focusable: n = !0,
      active: f = !1,
      tabStopId: p,
      children: l,
      ...x
    } = e, h = ne(), d = p || h, s = me(W, r), v = s.currentTabStopId === d, g = Y(r), { onFocusableItemAdd: R, onFocusableItemRemove: S, currentTabStopId: I } = s;
    return U(() => {
      if (n)
        return R(), () => S();
    }, [n, R, S]), /* @__PURE__ */ c.jsx(
      P.ItemSlot,
      {
        scope: r,
        id: d,
        focusable: n,
        active: f,
        children: /* @__PURE__ */ c.jsx(
          V.span,
          {
            tabIndex: v ? 0 : -1,
            "data-orientation": s.orientation,
            ...x,
            ref: t,
            onMouseDown: y(e.onMouseDown, (o) => {
              n ? s.onItemFocus(d) : o.preventDefault();
            }),
            onFocus: y(e.onFocus, () => s.onItemFocus(d)),
            onKeyDown: y(e.onKeyDown, (o) => {
              if (o.key === "Tab" && o.shiftKey) {
                s.onItemShiftTab();
                return;
              }
              if (o.target !== o.currentTarget) return;
              const u = ve(o, s.orientation, s.dir);
              if (u !== void 0) {
                if (o.metaKey || o.ctrlKey || o.altKey || o.shiftKey) return;
                o.preventDefault();
                let a = g().filter((i) => i.focusable).map((i) => i.ref.current);
                if (u === "last") a.reverse();
                else if (u === "prev" || u === "next") {
                  u === "prev" && a.reverse();
                  const i = a.indexOf(o.currentTarget);
                  a = s.loop ? xe(a, i + 1) : a.slice(i + 1);
                }
                setTimeout(() => J(a));
              }
            }),
            children: typeof l == "function" ? l({ isCurrentTabStop: v, hasTabStop: I != null }) : l
          }
        )
      }
    );
  }
);
Q.displayName = W;
var Ie = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function be(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function ve(e, t, r) {
  const n = be(e.key, r);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return Ie[n];
}
function J(e, t = !1) {
  const r = document.activeElement;
  for (const n of e)
    if (n === r || (n.focus({ preventScroll: t }), document.activeElement !== r)) return;
}
function xe(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
var Fe = $, Te = Q;
function K({
  containerClassName: e,
  count: t = 1,
  randomize: r = !1,
  minWidth: n = 70,
  maxWidth: f = 100,
  className: p,
  ...l
}) {
  const { randomWidths: x, keys: h } = oe(() => {
    const d = [], s = [];
    for (let v = 0; v < t; v++) {
      if (r) {
        const g = Math.floor((f - n) / 5), R = Math.floor(Math.random() * (g + 1)), S = n + R * 5;
        d.push(`${S}%`);
      }
      s.push(`skeleton-${crypto.randomUUID()}`);
    }
    return {
      randomWidths: d,
      keys: s
    };
  }, [t, r, n, f]);
  return /* @__PURE__ */ c.jsx("span", { className: e, children: Array.from({ length: t }).map((d, s) => /* @__PURE__ */ c.jsxs(C.Fragment, { children: [
    /* @__PURE__ */ c.jsx(
      "span",
      {
        className: B("inline-flex w-full leading-none animate-pulse rounded-[2px] bg-primary/10", p),
        style: r ? { width: x[s] } : void 0,
        ...l,
        children: "‌"
      }
    ),
    /* @__PURE__ */ c.jsx("br", {})
  ] }, h[s])) });
}
const Re = C.forwardRef(({ className: e, lines: t = 5, ...r }, n) => t < 1 ? /* @__PURE__ */ c.jsx(c.Fragment, {}) : /* @__PURE__ */ c.jsx("div", { ref: n, className: B("flex flex-col gap-2", e), ...r, children: Array.from({ length: t }, (f, p) => {
  let l = "66%";
  switch (p % 5) {
    case 0:
      l = "57%";
      break;
    case 1:
      l = "33%";
      break;
    case 2:
      l = "40%";
      break;
    case 3:
      l = "48%";
      break;
    case 4:
      l = "24%";
      break;
  }
  return /* @__PURE__ */ c.jsxs("div", { className: "flex justify-between gap-6", children: [
    /* @__PURE__ */ c.jsx("div", { className: "grow", style: {
      maxWidth: l
    }, children: /* @__PURE__ */ c.jsx(K, {}) }),
    /* @__PURE__ */ c.jsx(K, { className: "w-[60px] self-end" })
  ] }, p);
}) }));
Re.displayName = "SkeletonTable";
export {
  Te as I,
  Fe as R,
  K as S,
  y as a,
  Re as b,
  ce as c,
  he as d,
  le as u
};
//# sourceMappingURL=skeleton-COjEE1lX.mjs.map
