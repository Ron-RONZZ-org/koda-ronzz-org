import { q as $, Q as w, a as h, j as u, N as E, U as T, p as C, b as N, u as H, Z as I, o as m, K as x, J as S, M as R, _ as z, a1 as F, x as j, n as v, D as U } from "./index-DP6CzQAF.mjs";
function P(t, e) {
  if (typeof t == "function")
    return t(e);
  t != null && (t.current = e);
}
function A(...t) {
  return (e) => {
    let n = !1;
    const r = t.map((o) => {
      const s = P(o, e);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const s = r[o];
          typeof s == "function" ? s() : P(t[o], null);
        }
      };
  };
}
function ht(...t) {
  return $(A(...t), t);
}
function bt(t, e) {
  const n = w(e), r = (s) => {
    const { children: c, ...i } = s, a = h(() => i, Object.values(i));
    return /* @__PURE__ */ u.jsx(n.Provider, { value: a, children: c });
  };
  r.displayName = t + "Provider";
  function o(s) {
    const c = E(n);
    if (c) return c;
    if (e !== void 0) return e;
    throw new Error(`\`${s}\` must be used within \`${t}\``);
  }
  return [r, o];
}
function yt(t, e = []) {
  let n = [];
  function r(s, c) {
    const i = w(c), a = n.length;
    n = [...n, c];
    const l = (f) => {
      var k;
      const { scope: p, children: b, ...g } = f, y = ((k = p == null ? void 0 : p[t]) == null ? void 0 : k[a]) || i, W = h(() => g, Object.values(g));
      return /* @__PURE__ */ u.jsx(y.Provider, { value: W, children: b });
    };
    l.displayName = s + "Provider";
    function d(f, p) {
      var y;
      const b = ((y = p == null ? void 0 : p[t]) == null ? void 0 : y[a]) || i, g = E(b);
      if (g) return g;
      if (c !== void 0) return c;
      throw new Error(`\`${f}\` must be used within \`${s}\``);
    }
    return [l, d];
  }
  const o = () => {
    const s = n.map((c) => w(c));
    return function(i) {
      const a = (i == null ? void 0 : i[t]) || s;
      return h(
        () => ({ [`__scope${t}`]: { ...i, [t]: a } }),
        [i, a]
      );
    };
  };
  return o.scopeName = t, [r, V(o, ...e)];
}
function V(...t) {
  const e = t[0];
  if (t.length === 1) return e;
  const n = () => {
    const r = t.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(s) {
      const c = r.reduce((i, { useScope: a, scopeName: l }) => {
        const f = a(s)[`__scope${l}`];
        return { ...i, ...f };
      }, {});
      return h(() => ({ [`__scope${e.scopeName}`]: c }), [c]);
    };
  };
  return n.scopeName = e.scopeName, n;
}
var L = globalThis != null && globalThis.document ? T : () => {
}, Z = I[" useInsertionEffect ".trim().toString()] || L;
function Ct({
  prop: t,
  defaultProp: e,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, s, c] = q({
    defaultProp: e,
    onChange: n
  }), i = t !== void 0, a = i ? t : o;
  {
    const d = C(t !== void 0);
    N(() => {
      const f = d.current;
      f !== i && console.warn(
        `${r} is changing from ${f ? "controlled" : "uncontrolled"} to ${i ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), d.current = i;
    }, [i, r]);
  }
  const l = $(
    (d) => {
      var f;
      if (i) {
        const p = K(d) ? d(t) : d;
        p !== t && ((f = c.current) == null || f.call(c, p));
      } else
        s(d);
    },
    [i, t, s, c]
  );
  return [a, l];
}
function q({
  defaultProp: t,
  onChange: e
}) {
  const [n, r] = H(t), o = C(n), s = C(e);
  return Z(() => {
    s.current = e;
  }, [e]), N(() => {
    var c;
    o.current !== n && ((c = s.current) == null || c.call(s, n), o.current = n);
  }, [n, o]), [n, r, s];
}
function K(t) {
  return typeof t == "function";
}
// @__NO_SIDE_EFFECTS__
function O(t) {
  const e = /* @__PURE__ */ J(t), n = m((r, o) => {
    const { children: s, ...c } = r, i = x.toArray(s), a = i.find(Q);
    if (a) {
      const l = a.props.children, d = i.map((f) => f === a ? x.count(l) > 1 ? x.only(null) : S(l) ? l.props.children : null : f);
      return /* @__PURE__ */ u.jsx(e, { ...c, ref: o, children: S(l) ? R(l, void 0, d) : null });
    }
    return /* @__PURE__ */ u.jsx(e, { ...c, ref: o, children: s });
  });
  return n.displayName = `${t}.Slot`, n;
}
var M = /* @__PURE__ */ O("Slot");
// @__NO_SIDE_EFFECTS__
function J(t) {
  const e = m((n, r) => {
    const { children: o, ...s } = n;
    if (S(o)) {
      const c = X(o), i = G(s, o.props);
      return o.type !== z && (i.ref = r ? A(r, c) : c), R(o, i);
    }
    return x.count(o) > 1 ? x.only(null) : null;
  });
  return e.displayName = `${t}.SlotClone`, e;
}
var B = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function St(t) {
  const e = ({ children: n }) => /* @__PURE__ */ u.jsx(u.Fragment, { children: n });
  return e.displayName = `${t}.Slottable`, e.__radixId = B, e;
}
function Q(t) {
  return S(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === B;
}
function G(t, e) {
  const n = { ...e };
  for (const r in e) {
    const o = t[r], s = e[r];
    /^on[A-Z]/.test(r) ? o && s ? n[r] = (...i) => {
      const a = s(...i);
      return o(...i), a;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...s } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...t, ...n };
}
function X(t) {
  var r, o;
  let e = (r = Object.getOwnPropertyDescriptor(t.props, "ref")) == null ? void 0 : r.get, n = e && "isReactWarning" in e && e.isReactWarning;
  return n ? t.ref : (e = (o = Object.getOwnPropertyDescriptor(t, "ref")) == null ? void 0 : o.get, n = e && "isReactWarning" in e && e.isReactWarning, n ? t.props.ref : t.props.ref || t.ref);
}
var Y = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], wt = Y.reduce((t, e) => {
  const n = /* @__PURE__ */ O(`Primitive.${e}`), r = m((o, s) => {
    const { asChild: c, ...i } = o, a = c ? n : e;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ u.jsx(a, { ...i, ref: s });
  });
  return r.displayName = `Primitive.${e}`, { ...t, [e]: r };
}, {});
function jt(t, e) {
  t && F(() => t.dispatchEvent(e));
}
var tt = I[" useId ".trim().toString()] || (() => {
}), et = 0;
function Nt(t) {
  const [e, n] = H(tt());
  return L(() => {
    n((r) => r ?? String(et++));
  }, [t]), t || (e ? `radix-${e}` : "");
}
function kt(t) {
  const e = C(t);
  return N(() => {
    e.current = t;
  }), h(() => (...n) => {
    var r;
    return (r = e.current) == null ? void 0 : r.call(e, ...n);
  }, []);
}
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nt = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), rt = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, n, r) => r ? r.toUpperCase() : n.toLowerCase()
), _ = (t) => {
  const e = rt(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, D = (...t) => t.filter((e, n, r) => !!e && e.trim() !== "" && r.indexOf(e) === n).join(" ").trim(), ot = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var st = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const it = m(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: s,
    iconNode: c,
    ...i
  }, a) => j(
    "svg",
    {
      ref: a,
      ...st,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: r ? Number(n) * 24 / Number(e) : n,
      className: D("lucide", o),
      ...!s && !ot(i) && { "aria-hidden": "true" },
      ...i
    },
    [
      ...c.map(([l, d]) => j(l, d)),
      ...Array.isArray(s) ? s : [s]
    ]
  )
);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ct = (t, e) => {
  const n = m(
    ({ className: r, ...o }, s) => j(it, {
      ref: s,
      iconNode: e,
      className: D(
        `lucide-${nt(_(t))}`,
        `lucide-${t}`,
        r
      ),
      ...o
    })
  );
  return n.displayName = _(t), n;
};
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const at = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], ut = ct("chevron-down", at), lt = U(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:stroke-[1.5px]",
  {
    variants: {
      variant: {
        default: "bg-primary font-medium text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive font-medium text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background font-medium hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary font-medium text-secondary-foreground hover:bg-secondary/80 dark:bg-gray-925/70 dark:hover:bg-gray-900",
        ghost: "font-medium hover:bg-accent hover:text-accent-foreground",
        link: "font-medium text-primary underline-offset-4 hover:underline",
        dropdown: "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-[34px] px-3 py-2",
        sm: "h-7 rounded-md px-3 text-xs [&_svg]:size-3",
        lg: "h-11 rounded-md px-8 text-md font-semibold",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), dt = m(
  ({ className: t, variant: e, size: n, asChild: r = !1, children: o, ...s }, c) => {
    const i = r ? M : "button", a = e === "dropdown" ? /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      o,
      /* @__PURE__ */ u.jsx(ut, { className: "!-ml-1 !-mr-0.5 size-4 !stroke-[2px] opacity-50", strokeWidth: 2 })
    ] }) : o;
    return /* @__PURE__ */ u.jsx(
      i,
      {
        ref: c,
        className: v(lt({ variant: e, size: n, className: t })),
        ...s,
        children: a
      }
    );
  }
);
dt.displayName = "Button";
const ft = m(
  ({ className: t, ...e }, n) => /* @__PURE__ */ u.jsx(
    "h1",
    {
      ref: n,
      className: v("scroll-m-20 text-3xl leading-[1.1em] tracking-tighter font-bold", t),
      ...e
    }
  )
);
ft.displayName = "H1";
const pt = m(
  ({ className: t, ...e }, n) => /* @__PURE__ */ u.jsx(
    "h2",
    {
      ref: n,
      className: v("scroll-m-20 text-2xl font-bold tracking-tighter first:mt-0", t),
      ...e
    }
  )
);
pt.displayName = "H2";
const mt = m(
  ({ className: t, ...e }, n) => /* @__PURE__ */ u.jsx(
    "h3",
    {
      ref: n,
      className: v("scroll-m-20 text-xl font-semibold tracking-tight", t),
      ...e
    }
  )
);
mt.displayName = "H3";
const vt = m(
  ({ className: t, ...e }, n) => /* @__PURE__ */ u.jsx(
    "h4",
    {
      ref: n,
      className: v("scroll-m-20 text-lg font-semibold tracking-tight", t),
      ...e
    }
  )
);
vt.displayName = "H4";
const gt = m(
  ({ className: t, ...e }, n) => /* @__PURE__ */ u.jsx(
    "div",
    {
      ref: n,
      className: v("text-xs text-muted-foreground tracking-wide font-medium uppercase", t),
      ...e
    }
  )
);
gt.displayName = "HTable";
export {
  dt as B,
  ut as C,
  gt as H,
  it as I,
  wt as P,
  M as S,
  Nt as a,
  ht as b,
  yt as c,
  L as d,
  kt as e,
  O as f,
  ct as g,
  ft as h,
  mt as i,
  A as j,
  jt as k,
  St as l,
  bt as m,
  lt as n,
  Ct as u
};
//# sourceMappingURL=heading-CN611yBx.mjs.map
