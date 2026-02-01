import { d as Oe, b as U, P as $, e as Ie, k as Vt, c as je, u as Yt, a as _e, m as dr, f as Xt, l as fr, g as Le, n as qt, j as Zt } from "./heading-CN611yBx.mjs";
import { u as F, K as Qt, M as pr, p as P, b as k, q as X, a0 as mr, o as h, N as Jt, Q as gr, j as u, a1 as hr, U as vr, a as Ge, S as dt, n as W, _ as xr } from "./index-DP6CzQAF.mjs";
import { a as N, c as yr, d as en, u as wr, I as br, R as Ar } from "./skeleton-COjEE1lX.mjs";
import { u as Cr, P as tn, h as nn, R as on, F as rn, C as Dr } from "./dialog-B-8wib-u.mjs";
function Mr(e) {
  const [t, n] = F(void 0);
  return Oe(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const o = new ResizeObserver((r) => {
        if (!Array.isArray(r) || !r.length)
          return;
        const i = r[0];
        let s, a;
        if ("borderBoxSize" in i) {
          const l = i.borderBoxSize, c = Array.isArray(l) ? l[0] : l;
          s = c.inlineSize, a = c.blockSize;
        } else
          s = e.offsetWidth, a = e.offsetHeight;
        n({ width: s, height: a });
      });
      return o.observe(e, { box: "border-box" }), () => o.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
function Er(e, t) {
  return mr((n, o) => t[n][o] ?? n, e);
}
var fe = (e) => {
  const { present: t, children: n } = e, o = Pr(t), r = typeof n == "function" ? n({ present: o.isPresent }) : Qt.only(n), i = U(o.ref, Nr(r));
  return typeof n == "function" || o.isPresent ? pr(r, { ref: i }) : null;
};
fe.displayName = "Presence";
function Pr(e) {
  const [t, n] = F(), o = P(null), r = P(e), i = P("none"), s = e ? "mounted" : "unmounted", [a, l] = Er(s, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return k(() => {
    const c = He(o.current);
    i.current = a === "mounted" ? c : "none";
  }, [a]), Oe(() => {
    const c = o.current, f = r.current;
    if (f !== e) {
      const p = i.current, m = He(c);
      e ? l("MOUNT") : m === "none" || (c == null ? void 0 : c.display) === "none" ? l("UNMOUNT") : l(f && p !== m ? "ANIMATION_OUT" : "UNMOUNT"), r.current = e;
    }
  }, [e, l]), Oe(() => {
    if (t) {
      let c;
      const f = t.ownerDocument.defaultView ?? window, d = (m) => {
        const v = He(o.current).includes(m.animationName);
        if (m.target === t && v && (l("ANIMATION_END"), !r.current)) {
          const y = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", c = f.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = y);
          });
        }
      }, p = (m) => {
        m.target === t && (i.current = He(o.current));
      };
      return t.addEventListener("animationstart", p), t.addEventListener("animationcancel", d), t.addEventListener("animationend", d), () => {
        f.clearTimeout(c), t.removeEventListener("animationstart", p), t.removeEventListener("animationcancel", d), t.removeEventListener("animationend", d);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(a),
    ref: X((c) => {
      o.current = c ? getComputedStyle(c) : null, n(c);
    }, [])
  };
}
function He(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Nr(e) {
  var o, r;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (r = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
const _r = ["top", "right", "bottom", "left"], le = Math.min, Y = Math.max, Ke = Math.round, Ue = Math.floor, ue = (e) => ({
  x: e,
  y: e
}), Or = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Rr = {
  start: "end",
  end: "start"
};
function at(e, t, n) {
  return Y(e, le(t, n));
}
function re(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ie(e) {
  return e.split("-")[0];
}
function be(e) {
  return e.split("-")[1];
}
function ft(e) {
  return e === "x" ? "y" : "x";
}
function pt(e) {
  return e === "y" ? "height" : "width";
}
function Ae(e) {
  return ["top", "bottom"].includes(ie(e)) ? "y" : "x";
}
function mt(e) {
  return ft(Ae(e));
}
function Sr(e, t, n) {
  n === void 0 && (n = !1);
  const o = be(e), r = mt(e), i = pt(r);
  let s = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = Ve(s)), [s, Ve(s)];
}
function Tr(e) {
  const t = Ve(e);
  return [ct(e), t, ct(t)];
}
function ct(e) {
  return e.replace(/start|end/g, (t) => Rr[t]);
}
function Ir(e, t, n) {
  const o = ["left", "right"], r = ["right", "left"], i = ["top", "bottom"], s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? r : o : t ? o : r;
    case "left":
    case "right":
      return t ? i : s;
    default:
      return [];
  }
}
function jr(e, t, n, o) {
  const r = be(e);
  let i = Ir(ie(e), n === "start", o);
  return r && (i = i.map((s) => s + "-" + r), t && (i = i.concat(i.map(ct)))), i;
}
function Ve(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Or[t]);
}
function Lr(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function sn(e) {
  return typeof e != "number" ? Lr(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ye(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function It(e, t, n) {
  let {
    reference: o,
    floating: r
  } = e;
  const i = Ae(t), s = mt(t), a = pt(s), l = ie(t), c = i === "y", f = o.x + o.width / 2 - r.width / 2, d = o.y + o.height / 2 - r.height / 2, p = o[a] / 2 - r[a] / 2;
  let m;
  switch (l) {
    case "top":
      m = {
        x: f,
        y: o.y - r.height
      };
      break;
    case "bottom":
      m = {
        x: f,
        y: o.y + o.height
      };
      break;
    case "right":
      m = {
        x: o.x + o.width,
        y: d
      };
      break;
    case "left":
      m = {
        x: o.x - r.width,
        y: d
      };
      break;
    default:
      m = {
        x: o.x,
        y: o.y
      };
  }
  switch (be(t)) {
    case "start":
      m[s] -= p * (n && c ? -1 : 1);
      break;
    case "end":
      m[s] += p * (n && c ? -1 : 1);
      break;
  }
  return m;
}
const kr = async (e, t, n) => {
  const {
    placement: o = "bottom",
    strategy: r = "absolute",
    middleware: i = [],
    platform: s
  } = n, a = i.filter(Boolean), l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let c = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: r
  }), {
    x: f,
    y: d
  } = It(c, o, l), p = o, m = {}, g = 0;
  for (let v = 0; v < a.length; v++) {
    const {
      name: y,
      fn: x
    } = a[v], {
      x: w,
      y: E,
      data: C,
      reset: b
    } = await x({
      x: f,
      y: d,
      initialPlacement: o,
      placement: p,
      strategy: r,
      middlewareData: m,
      rects: c,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    if (f = w ?? f, d = E ?? d, m = {
      ...m,
      [y]: {
        ...m[y],
        ...C
      }
    }, b && g <= 50) {
      g++, typeof b == "object" && (b.placement && (p = b.placement), b.rects && (c = b.rects === !0 ? await s.getElementRects({
        reference: e,
        floating: t,
        strategy: r
      }) : b.rects), {
        x: f,
        y: d
      } = It(c, p, l)), v = -1;
      continue;
    }
  }
  return {
    x: f,
    y: d,
    placement: p,
    strategy: r,
    middlewareData: m
  };
};
async function Re(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: o,
    y: r,
    platform: i,
    rects: s,
    elements: a,
    strategy: l
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: d = "floating",
    altBoundary: p = !1,
    padding: m = 0
  } = re(t, e), g = sn(m), y = a[p ? d === "floating" ? "reference" : "floating" : d], x = Ye(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(y))) == null || n ? y : y.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: f,
    strategy: l
  })), w = d === "floating" ? {
    ...s.floating,
    x: o,
    y: r
  } : s.reference, E = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), C = await (i.isElement == null ? void 0 : i.isElement(E)) ? await (i.getScale == null ? void 0 : i.getScale(E)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, b = Ye(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: w,
    offsetParent: E,
    strategy: l
  }) : w);
  return {
    top: (x.top - b.top + g.top) / C.y,
    bottom: (b.bottom - x.bottom + g.bottom) / C.y,
    left: (x.left - b.left + g.left) / C.x,
    right: (b.right - x.right + g.right) / C.x
  };
}
const jt = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: o,
      placement: r,
      rects: i,
      platform: s,
      elements: a
    } = t, {
      element: l,
      padding: c = 0
    } = re(e, t) || {};
    if (l == null)
      return {};
    const f = sn(c), d = {
      x: n,
      y: o
    }, p = mt(r), m = pt(p), g = await s.getDimensions(l), v = p === "y", y = v ? "top" : "left", x = v ? "bottom" : "right", w = v ? "clientHeight" : "clientWidth", E = i.reference[m] + i.reference[p] - d[p] - i.floating[m], C = d[p] - i.reference[p], b = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l));
    let A = b ? b[w] : 0;
    (!A || !await (s.isElement == null ? void 0 : s.isElement(b))) && (A = a.floating[w] || i.floating[m]);
    const D = E / 2 - C / 2, S = A / 2 - g[m] / 2 - 1, I = le(f[y], S), j = le(f[x], S), T = I, B = A - g[m] - j, O = A / 2 - g[m] / 2 + D, R = at(T, O, B), _ = be(r) != null && O != R && i.reference[m] / 2 - (O < T ? I : j) - g[m] / 2 < 0 ? O < T ? T - O : B - O : 0;
    return {
      [p]: d[p] - _,
      data: {
        [p]: R,
        centerOffset: O - R + _
      }
    };
  }
}), Fr = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n;
      const {
        placement: o,
        middlewareData: r,
        rects: i,
        initialPlacement: s,
        platform: a,
        elements: l
      } = t, {
        mainAxis: c = !0,
        crossAxis: f = !0,
        fallbackPlacements: d,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: g = !0,
        ...v
      } = re(e, t), y = ie(o), x = ie(s) === s, w = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), E = d || (x || !g ? [Ve(s)] : Tr(s));
      !d && m !== "none" && E.push(...jr(s, g, m, w));
      const C = [s, ...E], b = await Re(t, v), A = [];
      let D = ((n = r.flip) == null ? void 0 : n.overflows) || [];
      if (c && A.push(b[y]), f) {
        const T = Sr(o, i, w);
        A.push(b[T[0]], b[T[1]]);
      }
      if (D = [...D, {
        placement: o,
        overflows: A
      }], !A.every((T) => T <= 0)) {
        var S, I;
        const T = (((S = r.flip) == null ? void 0 : S.index) || 0) + 1, B = C[T];
        if (B)
          return {
            data: {
              index: T,
              overflows: D
            },
            reset: {
              placement: B
            }
          };
        let O = (I = D.filter((R) => R.overflows[0] <= 0).sort((R, G) => R.overflows[1] - G.overflows[1])[0]) == null ? void 0 : I.placement;
        if (!O)
          switch (p) {
            case "bestFit": {
              var j;
              const R = (j = D.map((G) => [G.placement, G.overflows.filter((_) => _ > 0).reduce((_, V) => _ + V, 0)]).sort((G, _) => G[1] - _[1])[0]) == null ? void 0 : j[0];
              R && (O = R);
              break;
            }
            case "initialPlacement":
              O = s;
              break;
          }
        if (o !== O)
          return {
            reset: {
              placement: O
            }
          };
      }
      return {};
    }
  };
};
function Lt(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function kt(e) {
  return _r.some((t) => e[t] >= 0);
}
const $r = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: o = "referenceHidden",
        ...r
      } = re(e, t);
      switch (o) {
        case "referenceHidden": {
          const i = await Re(t, {
            ...r,
            elementContext: "reference"
          }), s = Lt(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: kt(s)
            }
          };
        }
        case "escaped": {
          const i = await Re(t, {
            ...r,
            altBoundary: !0
          }), s = Lt(i, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: kt(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Wr(e, t) {
  const {
    placement: n,
    platform: o,
    elements: r
  } = e, i = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), s = ie(n), a = be(n), l = Ae(n) === "y", c = ["left", "top"].includes(s) ? -1 : 1, f = i && l ? -1 : 1, d = re(t, e);
  let {
    mainAxis: p,
    crossAxis: m,
    alignmentAxis: g
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...d
  };
  return a && typeof g == "number" && (m = a === "end" ? g * -1 : g), l ? {
    x: m * f,
    y: p * c
  } : {
    x: p * c,
    y: m * f
  };
}
const Br = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: o
      } = t, r = await Wr(t, e);
      return {
        x: n + r.x,
        y: o + r.y,
        data: r
      };
    }
  };
}, Gr = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: o,
        placement: r
      } = t, {
        mainAxis: i = !0,
        crossAxis: s = !1,
        limiter: a = {
          fn: (y) => {
            let {
              x,
              y: w
            } = y;
            return {
              x,
              y: w
            };
          }
        },
        ...l
      } = re(e, t), c = {
        x: n,
        y: o
      }, f = await Re(t, l), d = Ae(ie(r)), p = ft(d);
      let m = c[p], g = c[d];
      if (i) {
        const y = p === "y" ? "top" : "left", x = p === "y" ? "bottom" : "right", w = m + f[y], E = m - f[x];
        m = at(w, m, E);
      }
      if (s) {
        const y = d === "y" ? "top" : "left", x = d === "y" ? "bottom" : "right", w = g + f[y], E = g - f[x];
        g = at(w, g, E);
      }
      const v = a.fn({
        ...t,
        [p]: m,
        [d]: g
      });
      return {
        ...v,
        data: {
          x: v.x - n,
          y: v.y - o
        }
      };
    }
  };
}, Hr = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: o,
        placement: r,
        rects: i,
        middlewareData: s
      } = t, {
        offset: a = 0,
        mainAxis: l = !0,
        crossAxis: c = !0
      } = re(e, t), f = {
        x: n,
        y: o
      }, d = Ae(r), p = ft(d);
      let m = f[p], g = f[d];
      const v = re(a, t), y = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...v
      };
      if (l) {
        const E = p === "y" ? "height" : "width", C = i.reference[p] - i.floating[E] + y.mainAxis, b = i.reference[p] + i.reference[E] - y.mainAxis;
        m < C ? m = C : m > b && (m = b);
      }
      if (c) {
        var x, w;
        const E = p === "y" ? "width" : "height", C = ["top", "left"].includes(ie(r)), b = i.reference[d] - i.floating[E] + (C && ((x = s.offset) == null ? void 0 : x[d]) || 0) + (C ? 0 : y.crossAxis), A = i.reference[d] + i.reference[E] + (C ? 0 : ((w = s.offset) == null ? void 0 : w[d]) || 0) - (C ? y.crossAxis : 0);
        g < b ? g = b : g > A && (g = A);
      }
      return {
        [p]: m,
        [d]: g
      };
    }
  };
}, Ur = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: n,
        rects: o,
        platform: r,
        elements: i
      } = t, {
        apply: s = () => {
        },
        ...a
      } = re(e, t), l = await Re(t, a), c = ie(n), f = be(n), d = Ae(n) === "y", {
        width: p,
        height: m
      } = o.floating;
      let g, v;
      c === "top" || c === "bottom" ? (g = c, v = f === (await (r.isRTL == null ? void 0 : r.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (v = c, g = f === "end" ? "top" : "bottom");
      const y = m - l[g], x = p - l[v], w = !t.middlewareData.shift;
      let E = y, C = x;
      if (d) {
        const A = p - l.left - l.right;
        C = f || w ? le(x, A) : A;
      } else {
        const A = m - l.top - l.bottom;
        E = f || w ? le(y, A) : A;
      }
      if (w && !f) {
        const A = Y(l.left, 0), D = Y(l.right, 0), S = Y(l.top, 0), I = Y(l.bottom, 0);
        d ? C = p - 2 * (A !== 0 || D !== 0 ? A + D : Y(l.left, l.right)) : E = m - 2 * (S !== 0 || I !== 0 ? S + I : Y(l.top, l.bottom));
      }
      await s({
        ...t,
        availableWidth: C,
        availableHeight: E
      });
      const b = await r.getDimensions(i.floating);
      return p !== b.width || m !== b.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function de(e) {
  return an(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function q(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ae(e) {
  var t;
  return (t = (an(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function an(e) {
  return e instanceof Node || e instanceof q(e).Node;
}
function se(e) {
  return e instanceof Element || e instanceof q(e).Element;
}
function ne(e) {
  return e instanceof HTMLElement || e instanceof q(e).HTMLElement;
}
function Ft(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof q(e).ShadowRoot;
}
function ke(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: r
  } = J(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(r);
}
function zr(e) {
  return ["table", "td", "th"].includes(de(e));
}
function gt(e) {
  const t = ht(), n = J(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function Kr(e) {
  let t = we(e);
  for (; ne(t) && !et(t); ) {
    if (gt(t))
      return t;
    t = we(t);
  }
  return null;
}
function ht() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function et(e) {
  return ["html", "body", "#document"].includes(de(e));
}
function J(e) {
  return q(e).getComputedStyle(e);
}
function tt(e) {
  return se(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function we(e) {
  if (de(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Ft(e) && e.host || // Fallback.
    ae(e)
  );
  return Ft(t) ? t.host : t;
}
function cn(e) {
  const t = we(e);
  return et(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ne(t) && ke(t) ? t : cn(t);
}
function Xe(e, t) {
  var n;
  t === void 0 && (t = []);
  const o = cn(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), i = q(o);
  return r ? t.concat(i, i.visualViewport || [], ke(o) ? o : []) : t.concat(o, Xe(o));
}
function ln(e) {
  const t = J(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const r = ne(e), i = r ? e.offsetWidth : n, s = r ? e.offsetHeight : o, a = Ke(n) !== i || Ke(o) !== s;
  return a && (n = i, o = s), {
    width: n,
    height: o,
    $: a
  };
}
function vt(e) {
  return se(e) ? e : e.contextElement;
}
function xe(e) {
  const t = vt(e);
  if (!ne(t))
    return ue(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: r,
    $: i
  } = ln(t);
  let s = (i ? Ke(n.width) : n.width) / o, a = (i ? Ke(n.height) : n.height) / r;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const Vr = /* @__PURE__ */ ue(0);
function un(e) {
  const t = q(e);
  return !ht() || !t.visualViewport ? Vr : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Yr(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== q(e) ? !1 : t;
}
function me(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), i = vt(e);
  let s = ue(1);
  t && (o ? se(o) && (s = xe(o)) : s = xe(e));
  const a = Yr(i, n, o) ? un(i) : ue(0);
  let l = (r.left + a.x) / s.x, c = (r.top + a.y) / s.y, f = r.width / s.x, d = r.height / s.y;
  if (i) {
    const p = q(i), m = o && se(o) ? q(o) : o;
    let g = p.frameElement;
    for (; g && o && m !== p; ) {
      const v = xe(g), y = g.getBoundingClientRect(), x = J(g), w = y.left + (g.clientLeft + parseFloat(x.paddingLeft)) * v.x, E = y.top + (g.clientTop + parseFloat(x.paddingTop)) * v.y;
      l *= v.x, c *= v.y, f *= v.x, d *= v.y, l += w, c += E, g = q(g).frameElement;
    }
  }
  return Ye({
    width: f,
    height: d,
    x: l,
    y: c
  });
}
function Xr(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: o
  } = e;
  const r = ne(n), i = ae(n);
  if (n === i)
    return t;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = ue(1);
  const l = ue(0);
  if ((r || !r && o !== "fixed") && ((de(n) !== "body" || ke(i)) && (s = tt(n)), ne(n))) {
    const c = me(n);
    a = xe(n), l.x = c.x + n.clientLeft, l.y = c.y + n.clientTop;
  }
  return {
    width: t.width * a.x,
    height: t.height * a.y,
    x: t.x * a.x - s.scrollLeft * a.x + l.x,
    y: t.y * a.y - s.scrollTop * a.y + l.y
  };
}
function qr(e) {
  return Array.from(e.getClientRects());
}
function dn(e) {
  return me(ae(e)).left + tt(e).scrollLeft;
}
function Zr(e) {
  const t = ae(e), n = tt(e), o = e.ownerDocument.body, r = Y(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), i = Y(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let s = -n.scrollLeft + dn(e);
  const a = -n.scrollTop;
  return J(o).direction === "rtl" && (s += Y(t.clientWidth, o.clientWidth) - r), {
    width: r,
    height: i,
    x: s,
    y: a
  };
}
function Qr(e, t) {
  const n = q(e), o = ae(e), r = n.visualViewport;
  let i = o.clientWidth, s = o.clientHeight, a = 0, l = 0;
  if (r) {
    i = r.width, s = r.height;
    const c = ht();
    (!c || c && t === "fixed") && (a = r.offsetLeft, l = r.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
function Jr(e, t) {
  const n = me(e, !0, t === "fixed"), o = n.top + e.clientTop, r = n.left + e.clientLeft, i = ne(e) ? xe(e) : ue(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = r * i.x, c = o * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: c
  };
}
function $t(e, t, n) {
  let o;
  if (t === "viewport")
    o = Qr(e, n);
  else if (t === "document")
    o = Zr(ae(e));
  else if (se(t))
    o = Jr(t, n);
  else {
    const r = un(e);
    o = {
      ...t,
      x: t.x - r.x,
      y: t.y - r.y
    };
  }
  return Ye(o);
}
function fn(e, t) {
  const n = we(e);
  return n === t || !se(n) || et(n) ? !1 : J(n).position === "fixed" || fn(n, t);
}
function ei(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = Xe(e).filter((a) => se(a) && de(a) !== "body"), r = null;
  const i = J(e).position === "fixed";
  let s = i ? we(e) : e;
  for (; se(s) && !et(s); ) {
    const a = J(s), l = gt(s);
    !l && a.position === "fixed" && (r = null), (i ? !l && !r : !l && a.position === "static" && !!r && ["absolute", "fixed"].includes(r.position) || ke(s) && !l && fn(e, s)) ? o = o.filter((f) => f !== s) : r = a, s = we(s);
  }
  return t.set(e, o), o;
}
function ti(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: r
  } = e;
  const s = [...n === "clippingAncestors" ? ei(t, this._c) : [].concat(n), o], a = s[0], l = s.reduce((c, f) => {
    const d = $t(t, f, r);
    return c.top = Y(d.top, c.top), c.right = le(d.right, c.right), c.bottom = le(d.bottom, c.bottom), c.left = Y(d.left, c.left), c;
  }, $t(t, a, r));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function ni(e) {
  return ln(e);
}
function oi(e, t, n) {
  const o = ne(t), r = ae(t), i = n === "fixed", s = me(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = ue(0);
  if (o || !o && !i)
    if ((de(t) !== "body" || ke(r)) && (a = tt(t)), o) {
      const c = me(t, !0, i, t);
      l.x = c.x + t.clientLeft, l.y = c.y + t.clientTop;
    } else r && (l.x = dn(r));
  return {
    x: s.left + a.scrollLeft - l.x,
    y: s.top + a.scrollTop - l.y,
    width: s.width,
    height: s.height
  };
}
function Wt(e, t) {
  return !ne(e) || J(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function pn(e, t) {
  const n = q(e);
  if (!ne(e))
    return n;
  let o = Wt(e, t);
  for (; o && zr(o) && J(o).position === "static"; )
    o = Wt(o, t);
  return o && (de(o) === "html" || de(o) === "body" && J(o).position === "static" && !gt(o)) ? n : o || Kr(e) || n;
}
const ri = async function(e) {
  let {
    reference: t,
    floating: n,
    strategy: o
  } = e;
  const r = this.getOffsetParent || pn, i = this.getDimensions;
  return {
    reference: oi(t, await r(n), o),
    floating: {
      x: 0,
      y: 0,
      ...await i(n)
    }
  };
};
function ii(e) {
  return J(e).direction === "rtl";
}
const si = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Xr,
  getDocumentElement: ae,
  getClippingRect: ti,
  getOffsetParent: pn,
  getElementRects: ri,
  getClientRects: qr,
  getDimensions: ni,
  getScale: xe,
  isElement: se,
  isRTL: ii
};
function ai(e, t) {
  let n = null, o;
  const r = ae(e);
  function i() {
    clearTimeout(o), n && n.disconnect(), n = null;
  }
  function s(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), i();
    const {
      left: c,
      top: f,
      width: d,
      height: p
    } = e.getBoundingClientRect();
    if (a || t(), !d || !p)
      return;
    const m = Ue(f), g = Ue(r.clientWidth - (c + d)), v = Ue(r.clientHeight - (f + p)), y = Ue(c), w = {
      rootMargin: -m + "px " + -g + "px " + -v + "px " + -y + "px",
      threshold: Y(0, le(1, l)) || 1
    };
    let E = !0;
    function C(b) {
      const A = b[0].intersectionRatio;
      if (A !== l) {
        if (!E)
          return s();
        A ? s(!1, A) : o = setTimeout(() => {
          s(!1, 1e-7);
        }, 100);
      }
      E = !1;
    }
    try {
      n = new IntersectionObserver(C, {
        ...w,
        // Handle <iframe>s
        root: r.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(C, w);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function ci(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = o, c = vt(e), f = r || i ? [...c ? Xe(c) : [], ...Xe(t)] : [];
  f.forEach((x) => {
    r && x.addEventListener("scroll", n, {
      passive: !0
    }), i && x.addEventListener("resize", n);
  });
  const d = c && a ? ai(c, n) : null;
  let p = -1, m = null;
  s && (m = new ResizeObserver((x) => {
    let [w] = x;
    w && w.target === c && m && (m.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      m && m.observe(t);
    })), n();
  }), c && !l && m.observe(c), m.observe(t));
  let g, v = l ? me(e) : null;
  l && y();
  function y() {
    const x = me(e);
    v && (x.x !== v.x || x.y !== v.y || x.width !== v.width || x.height !== v.height) && n(), v = x, g = requestAnimationFrame(y);
  }
  return n(), () => {
    f.forEach((x) => {
      r && x.removeEventListener("scroll", n), i && x.removeEventListener("resize", n);
    }), d && d(), m && m.disconnect(), m = null, l && cancelAnimationFrame(g);
  };
}
const li = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), r = {
    platform: si,
    ...n
  }, i = {
    ...r.platform,
    _c: o
  };
  return kr(e, t, {
    ...r,
    platform: i
  });
};
var ui = "DismissableLayer", lt = "dismissableLayer.update", di = "dismissableLayer.pointerDownOutside", fi = "dismissableLayer.focusOutside", Bt, mn = gr({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), xt = h(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: o,
      onPointerDownOutside: r,
      onFocusOutside: i,
      onInteractOutside: s,
      onDismiss: a,
      ...l
    } = e, c = Jt(mn), [f, d] = F(null), p = (f == null ? void 0 : f.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, m] = F({}), g = U(t, (D) => d(D)), v = Array.from(c.layers), [y] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), x = v.indexOf(y), w = f ? v.indexOf(f) : -1, E = c.layersWithOutsidePointerEventsDisabled.size > 0, C = w >= x, b = gi((D) => {
      const S = D.target, I = [...c.branches].some((j) => j.contains(S));
      !C || I || (r == null || r(D), s == null || s(D), D.defaultPrevented || a == null || a());
    }, p), A = hi((D) => {
      const S = D.target;
      [...c.branches].some((j) => j.contains(S)) || (i == null || i(D), s == null || s(D), D.defaultPrevented || a == null || a());
    }, p);
    return Cr((D) => {
      w === c.layers.size - 1 && (o == null || o(D), !D.defaultPrevented && a && (D.preventDefault(), a()));
    }, p), k(() => {
      if (f)
        return n && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (Bt = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(f)), c.layers.add(f), Gt(), () => {
          n && c.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = Bt);
        };
    }, [f, p, n, c]), k(() => () => {
      f && (c.layers.delete(f), c.layersWithOutsidePointerEventsDisabled.delete(f), Gt());
    }, [f, c]), k(() => {
      const D = () => m({});
      return document.addEventListener(lt, D), () => document.removeEventListener(lt, D);
    }, []), /* @__PURE__ */ u.jsx(
      $.div,
      {
        ...l,
        ref: g,
        style: {
          pointerEvents: E ? C ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: N(e.onFocusCapture, A.onFocusCapture),
        onBlurCapture: N(e.onBlurCapture, A.onBlurCapture),
        onPointerDownCapture: N(
          e.onPointerDownCapture,
          b.onPointerDownCapture
        )
      }
    );
  }
);
xt.displayName = ui;
var pi = "DismissableLayerBranch", mi = h((e, t) => {
  const n = Jt(mn), o = P(null), r = U(t, o);
  return k(() => {
    const i = o.current;
    if (i)
      return n.branches.add(i), () => {
        n.branches.delete(i);
      };
  }, [n.branches]), /* @__PURE__ */ u.jsx($.div, { ...e, ref: r });
});
mi.displayName = pi;
function gi(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ie(e), o = P(!1), r = P(() => {
  });
  return k(() => {
    const i = (a) => {
      if (a.target && !o.current) {
        let l = function() {
          gn(
            di,
            n,
            c,
            { discrete: !0 }
          );
        };
        const c = { originalEvent: a };
        a.pointerType === "touch" ? (t.removeEventListener("click", r.current), r.current = l, t.addEventListener("click", r.current, { once: !0 })) : l();
      } else
        t.removeEventListener("click", r.current);
      o.current = !1;
    }, s = window.setTimeout(() => {
      t.addEventListener("pointerdown", i);
    }, 0);
    return () => {
      window.clearTimeout(s), t.removeEventListener("pointerdown", i), t.removeEventListener("click", r.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => o.current = !0
  };
}
function hi(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ie(e), o = P(!1);
  return k(() => {
    const r = (i) => {
      i.target && !o.current && gn(fi, n, { originalEvent: i }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", r), () => t.removeEventListener("focusin", r);
  }, [t, n]), {
    onFocusCapture: () => o.current = !0,
    onBlurCapture: () => o.current = !1
  };
}
function Gt() {
  const e = new CustomEvent(lt);
  document.dispatchEvent(e);
}
function gn(e, t, n, { discrete: o }) {
  const r = n.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && r.addEventListener(e, t, { once: !0 }), o ? Vt(r, i) : r.dispatchEvent(i);
}
const vi = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: o,
        padding: r
      } = typeof e == "function" ? e(n) : e;
      return o && t(o) ? o.current != null ? jt({
        element: o.current,
        padding: r
      }).fn(n) : {} : o ? jt({
        element: o,
        padding: r
      }).fn(n) : {};
    }
  };
};
var ze = typeof document < "u" ? vr : k;
function qe(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, o, r;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n != t.length) return !1;
      for (o = n; o-- !== 0; )
        if (!qe(e[o], t[o]))
          return !1;
      return !0;
    }
    if (r = Object.keys(e), n = r.length, n !== Object.keys(t).length)
      return !1;
    for (o = n; o-- !== 0; )
      if (!{}.hasOwnProperty.call(t, r[o]))
        return !1;
    for (o = n; o-- !== 0; ) {
      const i = r[o];
      if (!(i === "_owner" && e.$$typeof) && !qe(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function hn(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Ht(e, t) {
  const n = hn(e);
  return Math.round(t * n) / n;
}
function Ut(e) {
  const t = P(e);
  return ze(() => {
    t.current = e;
  }), t;
}
function xi(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: o = [],
    platform: r,
    elements: {
      reference: i,
      floating: s
    } = {},
    transform: a = !0,
    whileElementsMounted: l,
    open: c
  } = e, [f, d] = F({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [p, m] = F(o);
  qe(p, o) || m(o);
  const [g, v] = F(null), [y, x] = F(null), w = X((_) => {
    _ != A.current && (A.current = _, v(_));
  }, [v]), E = X((_) => {
    _ !== D.current && (D.current = _, x(_));
  }, [x]), C = i || g, b = s || y, A = P(null), D = P(null), S = P(f), I = Ut(l), j = Ut(r), T = X(() => {
    if (!A.current || !D.current)
      return;
    const _ = {
      placement: t,
      strategy: n,
      middleware: p
    };
    j.current && (_.platform = j.current), li(A.current, D.current, _).then((V) => {
      const L = {
        ...V,
        isPositioned: !0
      };
      B.current && !qe(S.current, L) && (S.current = L, hr(() => {
        d(L);
      }));
    });
  }, [p, t, n, j]);
  ze(() => {
    c === !1 && S.current.isPositioned && (S.current.isPositioned = !1, d((_) => ({
      ..._,
      isPositioned: !1
    })));
  }, [c]);
  const B = P(!1);
  ze(() => (B.current = !0, () => {
    B.current = !1;
  }), []), ze(() => {
    if (C && (A.current = C), b && (D.current = b), C && b) {
      if (I.current)
        return I.current(C, b, T);
      T();
    }
  }, [C, b, T, I]);
  const O = Ge(() => ({
    reference: A,
    floating: D,
    setReference: w,
    setFloating: E
  }), [w, E]), R = Ge(() => ({
    reference: C,
    floating: b
  }), [C, b]), G = Ge(() => {
    const _ = {
      position: n,
      left: 0,
      top: 0
    };
    if (!R.floating)
      return _;
    const V = Ht(R.floating, f.x), L = Ht(R.floating, f.y);
    return a ? {
      ..._,
      transform: "translate(" + V + "px, " + L + "px)",
      ...hn(R.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: V,
      top: L
    };
  }, [n, a, R.floating, f.x, f.y]);
  return Ge(() => ({
    ...f,
    update: T,
    refs: O,
    elements: R,
    floatingStyles: G
  }), [f, T, O, R, G]);
}
var yi = "Arrow", vn = h((e, t) => {
  const { children: n, width: o = 10, height: r = 5, ...i } = e;
  return /* @__PURE__ */ u.jsx(
    $.svg,
    {
      ...i,
      ref: t,
      width: o,
      height: r,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ u.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
vn.displayName = yi;
var wi = vn, yt = "Popper", [xn, yn] = je(yt), [bi, wn] = xn(yt), bn = (e) => {
  const { __scopePopper: t, children: n } = e, [o, r] = F(null);
  return /* @__PURE__ */ u.jsx(bi, { scope: t, anchor: o, onAnchorChange: r, children: n });
};
bn.displayName = yt;
var An = "PopperAnchor", Cn = h(
  (e, t) => {
    const { __scopePopper: n, virtualRef: o, ...r } = e, i = wn(An, n), s = P(null), a = U(t, s);
    return k(() => {
      i.onAnchorChange((o == null ? void 0 : o.current) || s.current);
    }), o ? null : /* @__PURE__ */ u.jsx($.div, { ...r, ref: a });
  }
);
Cn.displayName = An;
var wt = "PopperContent", [Ai, Ci] = xn(wt), Dn = h(
  (e, t) => {
    var oe, Me, Z, Ee, Rt, St;
    const {
      __scopePopper: n,
      side: o = "bottom",
      sideOffset: r = 0,
      align: i = "center",
      alignOffset: s = 0,
      arrowPadding: a = 0,
      avoidCollisions: l = !0,
      collisionBoundary: c = [],
      collisionPadding: f = 0,
      sticky: d = "partial",
      hideWhenDetached: p = !1,
      updatePositionStrategy: m = "optimized",
      onPlaced: g,
      ...v
    } = e, y = wn(wt, n), [x, w] = F(null), E = U(t, (Pe) => w(Pe)), [C, b] = F(null), A = Mr(C), D = (A == null ? void 0 : A.width) ?? 0, S = (A == null ? void 0 : A.height) ?? 0, I = o + (i !== "center" ? "-" + i : ""), j = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, T = Array.isArray(c) ? c : [c], B = T.length > 0, O = {
      padding: j,
      boundary: T.filter(Mi),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: B
    }, { refs: R, floatingStyles: G, placement: _, isPositioned: V, middlewareData: L } = xi({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: I,
      whileElementsMounted: (...Pe) => ci(...Pe, {
        animationFrame: m === "always"
      }),
      elements: {
        reference: y.anchor
      },
      middleware: [
        Br({ mainAxis: r + S, alignmentAxis: s }),
        l && Gr({
          mainAxis: !0,
          crossAxis: !1,
          limiter: d === "partial" ? Hr() : void 0,
          ...O
        }),
        l && Fr({ ...O }),
        Ur({
          ...O,
          apply: ({ elements: Pe, rects: Tt, availableWidth: ar, availableHeight: cr }) => {
            const { width: lr, height: ur } = Tt.reference, Be = Pe.floating.style;
            Be.setProperty("--radix-popper-available-width", `${ar}px`), Be.setProperty("--radix-popper-available-height", `${cr}px`), Be.setProperty("--radix-popper-anchor-width", `${lr}px`), Be.setProperty("--radix-popper-anchor-height", `${ur}px`);
          }
        }),
        C && vi({ element: C, padding: a }),
        Ei({ arrowWidth: D, arrowHeight: S }),
        p && $r({ strategy: "referenceHidden", ...O })
      ]
    }), [M, K] = Pn(_), H = Ie(g);
    Oe(() => {
      V && (H == null || H());
    }, [V, H]);
    const te = (oe = L.arrow) == null ? void 0 : oe.x, Ce = (Me = L.arrow) == null ? void 0 : Me.y, De = ((Z = L.arrow) == null ? void 0 : Z.centerOffset) !== 0, [We, pe] = F();
    return Oe(() => {
      x && pe(window.getComputedStyle(x).zIndex);
    }, [x]), /* @__PURE__ */ u.jsx(
      "div",
      {
        ref: R.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...G,
          transform: V ? G.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: We,
          "--radix-popper-transform-origin": [
            (Ee = L.transformOrigin) == null ? void 0 : Ee.x,
            (Rt = L.transformOrigin) == null ? void 0 : Rt.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((St = L.hide) == null ? void 0 : St.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ u.jsx(
          Ai,
          {
            scope: n,
            placedSide: M,
            onArrowChange: b,
            arrowX: te,
            arrowY: Ce,
            shouldHideArrow: De,
            children: /* @__PURE__ */ u.jsx(
              $.div,
              {
                "data-side": M,
                "data-align": K,
                ...v,
                ref: E,
                style: {
                  ...v.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: V ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Dn.displayName = wt;
var Mn = "PopperArrow", Di = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, En = h(function(t, n) {
  const { __scopePopper: o, ...r } = t, i = Ci(Mn, o), s = Di[i.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ u.jsx(
      "span",
      {
        ref: i.onArrowChange,
        style: {
          position: "absolute",
          left: i.arrowX,
          top: i.arrowY,
          [s]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[i.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[i.placedSide],
          visibility: i.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ u.jsx(
          wi,
          {
            ...r,
            ref: n,
            style: {
              ...r.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
En.displayName = Mn;
function Mi(e) {
  return e !== null;
}
var Ei = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var y, x, w;
    const { placement: n, rects: o, middlewareData: r } = t, s = ((y = r.arrow) == null ? void 0 : y.centerOffset) !== 0, a = s ? 0 : e.arrowWidth, l = s ? 0 : e.arrowHeight, [c, f] = Pn(n), d = { start: "0%", center: "50%", end: "100%" }[f], p = (((x = r.arrow) == null ? void 0 : x.x) ?? 0) + a / 2, m = (((w = r.arrow) == null ? void 0 : w.y) ?? 0) + l / 2;
    let g = "", v = "";
    return c === "bottom" ? (g = s ? d : `${p}px`, v = `${-l}px`) : c === "top" ? (g = s ? d : `${p}px`, v = `${o.floating.height + l}px`) : c === "right" ? (g = `${-l}px`, v = s ? d : `${m}px`) : c === "left" && (g = `${o.floating.width + l}px`, v = s ? d : `${m}px`), { data: { x: g, y: v } };
  }
});
function Pn(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Pi = bn, Ni = Cn, _i = Dn, Oi = En, st = 0;
function Nn() {
  k(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? zt()), document.body.insertAdjacentElement("beforeend", e[1] ?? zt()), st++, () => {
      st === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), st--;
    };
  }, []);
}
function zt() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var nt = "Dialog", [_n, On] = je(nt), [Ri, ee] = _n(nt), Rn = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: o,
    defaultOpen: r,
    onOpenChange: i,
    modal: s = !0
  } = e, a = P(null), l = P(null), [c, f] = Yt({
    prop: o,
    defaultProp: r ?? !1,
    onChange: i,
    caller: nt
  });
  return /* @__PURE__ */ u.jsx(
    Ri,
    {
      scope: t,
      triggerRef: a,
      contentRef: l,
      contentId: _e(),
      titleId: _e(),
      descriptionId: _e(),
      open: c,
      onOpenChange: f,
      onOpenToggle: X(() => f((d) => !d), [f]),
      modal: s,
      children: n
    }
  );
};
Rn.displayName = nt;
var Sn = "DialogTrigger", Tn = h(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, r = ee(Sn, n), i = U(t, r.triggerRef);
    return /* @__PURE__ */ u.jsx(
      $.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": r.open,
        "aria-controls": r.contentId,
        "data-state": Ct(r.open),
        ...o,
        ref: i,
        onClick: N(e.onClick, r.onOpenToggle)
      }
    );
  }
);
Tn.displayName = Sn;
var bt = "DialogPortal", [Si, In] = _n(bt, {
  forceMount: void 0
}), jn = (e) => {
  const { __scopeDialog: t, forceMount: n, children: o, container: r } = e, i = ee(bt, t);
  return /* @__PURE__ */ u.jsx(Si, { scope: t, forceMount: n, children: Qt.map(o, (s) => /* @__PURE__ */ u.jsx(fe, { present: n || i.open, children: /* @__PURE__ */ u.jsx(tn, { asChild: !0, container: r, children: s }) })) });
};
jn.displayName = bt;
var Ze = "DialogOverlay", Ln = h(
  (e, t) => {
    const n = In(Ze, e.__scopeDialog), { forceMount: o = n.forceMount, ...r } = e, i = ee(Ze, e.__scopeDialog);
    return i.modal ? /* @__PURE__ */ u.jsx(fe, { present: o || i.open, children: /* @__PURE__ */ u.jsx(Ii, { ...r, ref: t }) }) : null;
  }
);
Ln.displayName = Ze;
var Ti = Xt("DialogOverlay.RemoveScroll"), Ii = h(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, r = ee(Ze, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ u.jsx(on, { as: Ti, allowPinchZoom: !0, shards: [r.contentRef], children: /* @__PURE__ */ u.jsx(
        $.div,
        {
          "data-state": Ct(r.open),
          ...o,
          ref: t,
          style: { pointerEvents: "auto", ...o.style }
        }
      ) })
    );
  }
), ge = "DialogContent", kn = h(
  (e, t) => {
    const n = In(ge, e.__scopeDialog), { forceMount: o = n.forceMount, ...r } = e, i = ee(ge, e.__scopeDialog);
    return /* @__PURE__ */ u.jsx(fe, { present: o || i.open, children: i.modal ? /* @__PURE__ */ u.jsx(ji, { ...r, ref: t }) : /* @__PURE__ */ u.jsx(Li, { ...r, ref: t }) });
  }
);
kn.displayName = ge;
var ji = h(
  (e, t) => {
    const n = ee(ge, e.__scopeDialog), o = P(null), r = U(t, n.contentRef, o);
    return k(() => {
      const i = o.current;
      if (i) return nn(i);
    }, []), /* @__PURE__ */ u.jsx(
      Fn,
      {
        ...e,
        ref: r,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: N(e.onCloseAutoFocus, (i) => {
          var s;
          i.preventDefault(), (s = n.triggerRef.current) == null || s.focus();
        }),
        onPointerDownOutside: N(e.onPointerDownOutside, (i) => {
          const s = i.detail.originalEvent, a = s.button === 0 && s.ctrlKey === !0;
          (s.button === 2 || a) && i.preventDefault();
        }),
        onFocusOutside: N(
          e.onFocusOutside,
          (i) => i.preventDefault()
        )
      }
    );
  }
), Li = h(
  (e, t) => {
    const n = ee(ge, e.__scopeDialog), o = P(!1), r = P(!1);
    return /* @__PURE__ */ u.jsx(
      Fn,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (i) => {
          var s, a;
          (s = e.onCloseAutoFocus) == null || s.call(e, i), i.defaultPrevented || (o.current || (a = n.triggerRef.current) == null || a.focus(), i.preventDefault()), o.current = !1, r.current = !1;
        },
        onInteractOutside: (i) => {
          var l, c;
          (l = e.onInteractOutside) == null || l.call(e, i), i.defaultPrevented || (o.current = !0, i.detail.originalEvent.type === "pointerdown" && (r.current = !0));
          const s = i.target;
          ((c = n.triggerRef.current) == null ? void 0 : c.contains(s)) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && r.current && i.preventDefault();
        }
      }
    );
  }
), Fn = h(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: o, onOpenAutoFocus: r, onCloseAutoFocus: i, ...s } = e, a = ee(ge, n), l = P(null), c = U(t, l);
    return Nn(), /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx(
        rn,
        {
          asChild: !0,
          loop: !0,
          trapped: o,
          onMountAutoFocus: r,
          onUnmountAutoFocus: i,
          children: /* @__PURE__ */ u.jsx(
            xt,
            {
              role: "dialog",
              id: a.contentId,
              "aria-describedby": a.descriptionId,
              "aria-labelledby": a.titleId,
              "data-state": Ct(a.open),
              ...s,
              ref: c,
              onDismiss: () => a.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
        /* @__PURE__ */ u.jsx(Fi, { titleId: a.titleId }),
        /* @__PURE__ */ u.jsx(Wi, { contentRef: l, descriptionId: a.descriptionId })
      ] })
    ] });
  }
), At = "DialogTitle", $n = h(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, r = ee(At, n);
    return /* @__PURE__ */ u.jsx($.h2, { id: r.titleId, ...o, ref: t });
  }
);
$n.displayName = At;
var Wn = "DialogDescription", Bn = h(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, r = ee(Wn, n);
    return /* @__PURE__ */ u.jsx($.p, { id: r.descriptionId, ...o, ref: t });
  }
);
Bn.displayName = Wn;
var Gn = "DialogClose", Hn = h(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, r = ee(Gn, n);
    return /* @__PURE__ */ u.jsx(
      $.button,
      {
        type: "button",
        ...o,
        ref: t,
        onClick: N(e.onClick, () => r.onOpenChange(!1))
      }
    );
  }
);
Hn.displayName = Gn;
function Ct(e) {
  return e ? "open" : "closed";
}
var Un = "DialogTitleWarning", [ki, zn] = dr(Un, {
  contentName: ge,
  titleName: At,
  docsSlug: "dialog"
}), Fi = ({ titleId: e }) => {
  const t = zn(Un), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return k(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, $i = "DialogDescriptionWarning", Wi = ({ contentRef: e, descriptionId: t }) => {
  const o = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${zn($i).contentName}}.`;
  return k(() => {
    var i;
    const r = (i = e.current) == null ? void 0 : i.getAttribute("aria-describedby");
    t && r && (document.getElementById(t) || console.warn(o));
  }, [o, e, t]), null;
}, Bi = Rn, Gi = Tn, Hi = jn, Ui = Ln, zi = kn, Ki = $n, Vi = Bn, Kn = Hn, Vn = "AlertDialog", [Yi] = je(Vn, [
  On
]), ce = On(), Yn = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, o = ce(t);
  return /* @__PURE__ */ u.jsx(Bi, { ...o, ...n, modal: !0 });
};
Yn.displayName = Vn;
var Xi = "AlertDialogTrigger", qi = h(
  (e, t) => {
    const { __scopeAlertDialog: n, ...o } = e, r = ce(n);
    return /* @__PURE__ */ u.jsx(Gi, { ...r, ...o, ref: t });
  }
);
qi.displayName = Xi;
var Zi = "AlertDialogPortal", Xn = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, o = ce(t);
  return /* @__PURE__ */ u.jsx(Hi, { ...o, ...n });
};
Xn.displayName = Zi;
var Qi = "AlertDialogOverlay", qn = h(
  (e, t) => {
    const { __scopeAlertDialog: n, ...o } = e, r = ce(n);
    return /* @__PURE__ */ u.jsx(Ui, { ...r, ...o, ref: t });
  }
);
qn.displayName = Qi;
var ye = "AlertDialogContent", [Ji, es] = Yi(ye), ts = fr("AlertDialogContent"), Zn = h(
  (e, t) => {
    const { __scopeAlertDialog: n, children: o, ...r } = e, i = ce(n), s = P(null), a = U(t, s), l = P(null);
    return /* @__PURE__ */ u.jsx(
      ki,
      {
        contentName: ye,
        titleName: Qn,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ u.jsx(Ji, { scope: n, cancelRef: l, children: /* @__PURE__ */ u.jsxs(
          zi,
          {
            role: "alertdialog",
            ...i,
            ...r,
            ref: a,
            onOpenAutoFocus: N(r.onOpenAutoFocus, (c) => {
              var f;
              c.preventDefault(), (f = l.current) == null || f.focus({ preventScroll: !0 });
            }),
            onPointerDownOutside: (c) => c.preventDefault(),
            onInteractOutside: (c) => c.preventDefault(),
            children: [
              /* @__PURE__ */ u.jsx(ts, { children: o }),
              /* @__PURE__ */ u.jsx(os, { contentRef: s })
            ]
          }
        ) })
      }
    );
  }
);
Zn.displayName = ye;
var Qn = "AlertDialogTitle", Jn = h(
  (e, t) => {
    const { __scopeAlertDialog: n, ...o } = e, r = ce(n);
    return /* @__PURE__ */ u.jsx(Ki, { ...r, ...o, ref: t });
  }
);
Jn.displayName = Qn;
var eo = "AlertDialogDescription", to = h((e, t) => {
  const { __scopeAlertDialog: n, ...o } = e, r = ce(n);
  return /* @__PURE__ */ u.jsx(Vi, { ...r, ...o, ref: t });
});
to.displayName = eo;
var ns = "AlertDialogAction", no = h(
  (e, t) => {
    const { __scopeAlertDialog: n, ...o } = e, r = ce(n);
    return /* @__PURE__ */ u.jsx(Kn, { ...r, ...o, ref: t });
  }
);
no.displayName = ns;
var oo = "AlertDialogCancel", ro = h(
  (e, t) => {
    const { __scopeAlertDialog: n, ...o } = e, { cancelRef: r } = es(oo, n), i = ce(n), s = U(t, r);
    return /* @__PURE__ */ u.jsx(Kn, { ...i, ...o, ref: s });
  }
);
ro.displayName = oo;
var os = ({ contentRef: e }) => {
  const t = `\`${ye}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${ye}\` by passing a \`${eo}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${ye}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  return k(() => {
    var o;
    document.getElementById(
      (o = e.current) == null ? void 0 : o.getAttribute("aria-describedby")
    ) || console.warn(t);
  }, [t, e]), null;
}, rs = Yn, is = Xn, io = qn, so = Zn, ao = no, co = ro, lo = Jn, uo = to;
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ss = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], as = Le("chevron-right", ss);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cs = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], ls = Le("circle", cs);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const us = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
], Ga = Le("ellipsis", us);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ds = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
], Ha = Le("external-link", ds);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fs = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
], Ua = Le("user", fs), za = rs, ps = is, fo = h(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  io,
  {
    className: W(
      "fixed inset-0 z-50 bg-black/30 backdrop-blur-none transform-gpu data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=open]:backdrop-blur-[3px]",
      e
    ),
    ...t,
    ref: n
  }
));
fo.displayName = io.displayName;
const ms = h(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(ps, { children: /* @__PURE__ */ u.jsxs("div", { className: dt, children: [
  /* @__PURE__ */ u.jsx(fo, { onClick: (o) => o.stopPropagation() }),
  /* @__PURE__ */ u.jsx(
    so,
    {
      ref: n,
      className: W(
        "fixed left-[50%] top-[20%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-20%] gap-6 bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[18%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[18%] sm:rounded-lg",
        e
      ),
      ...t
    }
  )
] }) }));
ms.displayName = so.displayName;
const gs = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  "div",
  {
    className: W(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
gs.displayName = "AlertDialogHeader";
const hs = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  "div",
  {
    className: W(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 [&>button]:min-w-20",
      e
    ),
    ...t
  }
);
hs.displayName = "AlertDialogFooter";
const vs = h(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  lo,
  {
    ref: n,
    className: W("text-xl font-semibold", e),
    ...t
  }
));
vs.displayName = lo.displayName;
const xs = h(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  uo,
  {
    ref: n,
    className: W("text-base", e),
    ...t
  }
));
xs.displayName = uo.displayName;
const ys = h(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  ao,
  {
    ref: n,
    className: W(qt(), e),
    ...t
  }
));
ys.displayName = ao.displayName;
const ws = h(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  co,
  {
    ref: n,
    className: W(
      qt({ variant: "outline" }),
      "mt-2 sm:mt-0",
      e
    ),
    ...t
  }
));
ws.displayName = co.displayName;
var ut = ["Enter", " "], bs = ["ArrowDown", "PageUp", "Home"], po = ["ArrowUp", "PageDown", "End"], As = [...bs, ...po], Cs = {
  ltr: [...ut, "ArrowRight"],
  rtl: [...ut, "ArrowLeft"]
}, Ds = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, Fe = "Menu", [Se, Ms, Es] = yr(Fe), [he, mo] = je(Fe, [
  Es,
  yn,
  en
]), ot = yn(), go = en(), [Ps, ve] = he(Fe), [Ns, $e] = he(Fe), ho = (e) => {
  const { __scopeMenu: t, open: n = !1, children: o, dir: r, onOpenChange: i, modal: s = !0 } = e, a = ot(t), [l, c] = F(null), f = P(!1), d = Ie(i), p = wr(r);
  return k(() => {
    const m = () => {
      f.current = !0, document.addEventListener("pointerdown", g, { capture: !0, once: !0 }), document.addEventListener("pointermove", g, { capture: !0, once: !0 });
    }, g = () => f.current = !1;
    return document.addEventListener("keydown", m, { capture: !0 }), () => {
      document.removeEventListener("keydown", m, { capture: !0 }), document.removeEventListener("pointerdown", g, { capture: !0 }), document.removeEventListener("pointermove", g, { capture: !0 });
    };
  }, []), /* @__PURE__ */ u.jsx(Pi, { ...a, children: /* @__PURE__ */ u.jsx(
    Ps,
    {
      scope: t,
      open: n,
      onOpenChange: d,
      content: l,
      onContentChange: c,
      children: /* @__PURE__ */ u.jsx(
        Ns,
        {
          scope: t,
          onClose: X(() => d(!1), [d]),
          isUsingKeyboardRef: f,
          dir: p,
          modal: s,
          children: o
        }
      )
    }
  ) });
};
ho.displayName = Fe;
var _s = "MenuAnchor", Dt = h(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e, r = ot(n);
    return /* @__PURE__ */ u.jsx(Ni, { ...r, ...o, ref: t });
  }
);
Dt.displayName = _s;
var Mt = "MenuPortal", [Os, vo] = he(Mt, {
  forceMount: void 0
}), xo = (e) => {
  const { __scopeMenu: t, forceMount: n, children: o, container: r } = e, i = ve(Mt, t);
  return /* @__PURE__ */ u.jsx(Os, { scope: t, forceMount: n, children: /* @__PURE__ */ u.jsx(fe, { present: n || i.open, children: /* @__PURE__ */ u.jsx(tn, { asChild: !0, container: r, children: o }) }) });
};
xo.displayName = Mt;
var Q = "MenuContent", [Rs, Et] = he(Q), yo = h(
  (e, t) => {
    const n = vo(Q, e.__scopeMenu), { forceMount: o = n.forceMount, ...r } = e, i = ve(Q, e.__scopeMenu), s = $e(Q, e.__scopeMenu);
    return /* @__PURE__ */ u.jsx(Se.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ u.jsx(fe, { present: o || i.open, children: /* @__PURE__ */ u.jsx(Se.Slot, { scope: e.__scopeMenu, children: s.modal ? /* @__PURE__ */ u.jsx(Ss, { ...r, ref: t }) : /* @__PURE__ */ u.jsx(Ts, { ...r, ref: t }) }) }) });
  }
), Ss = h(
  (e, t) => {
    const n = ve(Q, e.__scopeMenu), o = P(null), r = U(t, o);
    return k(() => {
      const i = o.current;
      if (i) return nn(i);
    }, []), /* @__PURE__ */ u.jsx(
      Pt,
      {
        ...e,
        ref: r,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: N(
          e.onFocusOutside,
          (i) => i.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), Ts = h((e, t) => {
  const n = ve(Q, e.__scopeMenu);
  return /* @__PURE__ */ u.jsx(
    Pt,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), Is = Xt("MenuContent.ScrollLock"), Pt = h(
  (e, t) => {
    const {
      __scopeMenu: n,
      loop: o = !1,
      trapFocus: r,
      onOpenAutoFocus: i,
      onCloseAutoFocus: s,
      disableOutsidePointerEvents: a,
      onEntryFocus: l,
      onEscapeKeyDown: c,
      onPointerDownOutside: f,
      onFocusOutside: d,
      onInteractOutside: p,
      onDismiss: m,
      disableOutsideScroll: g,
      ...v
    } = e, y = ve(Q, n), x = $e(Q, n), w = ot(n), E = go(n), C = Ms(n), [b, A] = F(null), D = P(null), S = U(t, D, y.onContentChange), I = P(0), j = P(""), T = P(0), B = P(null), O = P("right"), R = P(0), G = g ? on : xr, _ = g ? { as: Is, allowPinchZoom: !0 } : void 0, V = (M) => {
      var oe, Me;
      const K = j.current + M, H = C().filter((Z) => !Z.disabled), te = document.activeElement, Ce = (oe = H.find((Z) => Z.ref.current === te)) == null ? void 0 : oe.textValue, De = H.map((Z) => Z.textValue), We = Ks(De, K, Ce), pe = (Me = H.find((Z) => Z.textValue === We)) == null ? void 0 : Me.ref.current;
      (function Z(Ee) {
        j.current = Ee, window.clearTimeout(I.current), Ee !== "" && (I.current = window.setTimeout(() => Z(""), 1e3));
      })(K), pe && setTimeout(() => pe.focus());
    };
    k(() => () => window.clearTimeout(I.current), []), Nn();
    const L = X((M) => {
      var H, te;
      return O.current === ((H = B.current) == null ? void 0 : H.side) && Ys(M, (te = B.current) == null ? void 0 : te.area);
    }, []);
    return /* @__PURE__ */ u.jsx(
      Rs,
      {
        scope: n,
        searchRef: j,
        onItemEnter: X(
          (M) => {
            L(M) && M.preventDefault();
          },
          [L]
        ),
        onItemLeave: X(
          (M) => {
            var K;
            L(M) || ((K = D.current) == null || K.focus(), A(null));
          },
          [L]
        ),
        onTriggerLeave: X(
          (M) => {
            L(M) && M.preventDefault();
          },
          [L]
        ),
        pointerGraceTimerRef: T,
        onPointerGraceIntentChange: X((M) => {
          B.current = M;
        }, []),
        children: /* @__PURE__ */ u.jsx(G, { ..._, children: /* @__PURE__ */ u.jsx(
          rn,
          {
            asChild: !0,
            trapped: r,
            onMountAutoFocus: N(i, (M) => {
              var K;
              M.preventDefault(), (K = D.current) == null || K.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: s,
            children: /* @__PURE__ */ u.jsx(
              xt,
              {
                asChild: !0,
                disableOutsidePointerEvents: a,
                onEscapeKeyDown: c,
                onPointerDownOutside: f,
                onFocusOutside: d,
                onInteractOutside: p,
                onDismiss: m,
                children: /* @__PURE__ */ u.jsx(
                  Ar,
                  {
                    asChild: !0,
                    ...E,
                    dir: x.dir,
                    orientation: "vertical",
                    loop: o,
                    currentTabStopId: b,
                    onCurrentTabStopIdChange: A,
                    onEntryFocus: N(l, (M) => {
                      x.isUsingKeyboardRef.current || M.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ u.jsx(
                      _i,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": jo(y.open),
                        "data-radix-menu-content": "",
                        dir: x.dir,
                        ...w,
                        ...v,
                        ref: S,
                        style: { outline: "none", ...v.style },
                        onKeyDown: N(v.onKeyDown, (M) => {
                          const H = M.target.closest("[data-radix-menu-content]") === M.currentTarget, te = M.ctrlKey || M.altKey || M.metaKey, Ce = M.key.length === 1;
                          H && (M.key === "Tab" && M.preventDefault(), !te && Ce && V(M.key));
                          const De = D.current;
                          if (M.target !== De || !As.includes(M.key)) return;
                          M.preventDefault();
                          const pe = C().filter((oe) => !oe.disabled).map((oe) => oe.ref.current);
                          po.includes(M.key) && pe.reverse(), Us(pe);
                        }),
                        onBlur: N(e.onBlur, (M) => {
                          M.currentTarget.contains(M.target) || (window.clearTimeout(I.current), j.current = "");
                        }),
                        onPointerMove: N(
                          e.onPointerMove,
                          Te((M) => {
                            const K = M.target, H = R.current !== M.clientX;
                            if (M.currentTarget.contains(K) && H) {
                              const te = M.clientX > R.current ? "right" : "left";
                              O.current = te, R.current = M.clientX;
                            }
                          })
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
yo.displayName = Q;
var js = "MenuGroup", Nt = h(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e;
    return /* @__PURE__ */ u.jsx($.div, { role: "group", ...o, ref: t });
  }
);
Nt.displayName = js;
var Ls = "MenuLabel", wo = h(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e;
    return /* @__PURE__ */ u.jsx($.div, { ...o, ref: t });
  }
);
wo.displayName = Ls;
var Qe = "MenuItem", Kt = "menu.itemSelect", rt = h(
  (e, t) => {
    const { disabled: n = !1, onSelect: o, ...r } = e, i = P(null), s = $e(Qe, e.__scopeMenu), a = Et(Qe, e.__scopeMenu), l = U(t, i), c = P(!1), f = () => {
      const d = i.current;
      if (!n && d) {
        const p = new CustomEvent(Kt, { bubbles: !0, cancelable: !0 });
        d.addEventListener(Kt, (m) => o == null ? void 0 : o(m), { once: !0 }), Vt(d, p), p.defaultPrevented ? c.current = !1 : s.onClose();
      }
    };
    return /* @__PURE__ */ u.jsx(
      bo,
      {
        ...r,
        ref: l,
        disabled: n,
        onClick: N(e.onClick, f),
        onPointerDown: (d) => {
          var p;
          (p = e.onPointerDown) == null || p.call(e, d), c.current = !0;
        },
        onPointerUp: N(e.onPointerUp, (d) => {
          var p;
          c.current || (p = d.currentTarget) == null || p.click();
        }),
        onKeyDown: N(e.onKeyDown, (d) => {
          const p = a.searchRef.current !== "";
          n || p && d.key === " " || ut.includes(d.key) && (d.currentTarget.click(), d.preventDefault());
        })
      }
    );
  }
);
rt.displayName = Qe;
var bo = h(
  (e, t) => {
    const { __scopeMenu: n, disabled: o = !1, textValue: r, ...i } = e, s = Et(Qe, n), a = go(n), l = P(null), c = U(t, l), [f, d] = F(!1), [p, m] = F("");
    return k(() => {
      const g = l.current;
      g && m((g.textContent ?? "").trim());
    }, [i.children]), /* @__PURE__ */ u.jsx(
      Se.ItemSlot,
      {
        scope: n,
        disabled: o,
        textValue: r ?? p,
        children: /* @__PURE__ */ u.jsx(br, { asChild: !0, ...a, focusable: !o, children: /* @__PURE__ */ u.jsx(
          $.div,
          {
            role: "menuitem",
            "data-highlighted": f ? "" : void 0,
            "aria-disabled": o || void 0,
            "data-disabled": o ? "" : void 0,
            ...i,
            ref: c,
            onPointerMove: N(
              e.onPointerMove,
              Te((g) => {
                o ? s.onItemLeave(g) : (s.onItemEnter(g), g.defaultPrevented || g.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: N(
              e.onPointerLeave,
              Te((g) => s.onItemLeave(g))
            ),
            onFocus: N(e.onFocus, () => d(!0)),
            onBlur: N(e.onBlur, () => d(!1))
          }
        ) })
      }
    );
  }
), ks = "MenuCheckboxItem", Ao = h(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: o, ...r } = e;
    return /* @__PURE__ */ u.jsx(Po, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ u.jsx(
      rt,
      {
        role: "menuitemcheckbox",
        "aria-checked": Je(n) ? "mixed" : n,
        ...r,
        ref: t,
        "data-state": Ot(n),
        onSelect: N(
          r.onSelect,
          () => o == null ? void 0 : o(Je(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Ao.displayName = ks;
var Co = "MenuRadioGroup", [Fs, $s] = he(
  Co,
  { value: void 0, onValueChange: () => {
  } }
), Do = h(
  (e, t) => {
    const { value: n, onValueChange: o, ...r } = e, i = Ie(o);
    return /* @__PURE__ */ u.jsx(Fs, { scope: e.__scopeMenu, value: n, onValueChange: i, children: /* @__PURE__ */ u.jsx(Nt, { ...r, ref: t }) });
  }
);
Do.displayName = Co;
var Mo = "MenuRadioItem", Eo = h(
  (e, t) => {
    const { value: n, ...o } = e, r = $s(Mo, e.__scopeMenu), i = n === r.value;
    return /* @__PURE__ */ u.jsx(Po, { scope: e.__scopeMenu, checked: i, children: /* @__PURE__ */ u.jsx(
      rt,
      {
        role: "menuitemradio",
        "aria-checked": i,
        ...o,
        ref: t,
        "data-state": Ot(i),
        onSelect: N(
          o.onSelect,
          () => {
            var s;
            return (s = r.onValueChange) == null ? void 0 : s.call(r, n);
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Eo.displayName = Mo;
var _t = "MenuItemIndicator", [Po, Ws] = he(
  _t,
  { checked: !1 }
), No = h(
  (e, t) => {
    const { __scopeMenu: n, forceMount: o, ...r } = e, i = Ws(_t, n);
    return /* @__PURE__ */ u.jsx(
      fe,
      {
        present: o || Je(i.checked) || i.checked === !0,
        children: /* @__PURE__ */ u.jsx(
          $.span,
          {
            ...r,
            ref: t,
            "data-state": Ot(i.checked)
          }
        )
      }
    );
  }
);
No.displayName = _t;
var Bs = "MenuSeparator", _o = h(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e;
    return /* @__PURE__ */ u.jsx(
      $.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...o,
        ref: t
      }
    );
  }
);
_o.displayName = Bs;
var Gs = "MenuArrow", Oo = h(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e, r = ot(n);
    return /* @__PURE__ */ u.jsx(Oi, { ...r, ...o, ref: t });
  }
);
Oo.displayName = Gs;
var Hs = "MenuSub", [Ka, Ro] = he(Hs), Ne = "MenuSubTrigger", So = h(
  (e, t) => {
    const n = ve(Ne, e.__scopeMenu), o = $e(Ne, e.__scopeMenu), r = Ro(Ne, e.__scopeMenu), i = Et(Ne, e.__scopeMenu), s = P(null), { pointerGraceTimerRef: a, onPointerGraceIntentChange: l } = i, c = { __scopeMenu: e.__scopeMenu }, f = X(() => {
      s.current && window.clearTimeout(s.current), s.current = null;
    }, []);
    return k(() => f, [f]), k(() => {
      const d = a.current;
      return () => {
        window.clearTimeout(d), l(null);
      };
    }, [a, l]), /* @__PURE__ */ u.jsx(Dt, { asChild: !0, ...c, children: /* @__PURE__ */ u.jsx(
      bo,
      {
        id: r.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": r.contentId,
        "data-state": jo(n.open),
        ...e,
        ref: Zt(t, r.onTriggerChange),
        onClick: (d) => {
          var p;
          (p = e.onClick) == null || p.call(e, d), !(e.disabled || d.defaultPrevented) && (d.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: N(
          e.onPointerMove,
          Te((d) => {
            i.onItemEnter(d), !d.defaultPrevented && !e.disabled && !n.open && !s.current && (i.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
              n.onOpenChange(!0), f();
            }, 100));
          })
        ),
        onPointerLeave: N(
          e.onPointerLeave,
          Te((d) => {
            var m, g;
            f();
            const p = (m = n.content) == null ? void 0 : m.getBoundingClientRect();
            if (p) {
              const v = (g = n.content) == null ? void 0 : g.dataset.side, y = v === "right", x = y ? -5 : 5, w = p[y ? "left" : "right"], E = p[y ? "right" : "left"];
              i.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: d.clientX + x, y: d.clientY },
                  { x: w, y: p.top },
                  { x: E, y: p.top },
                  { x: E, y: p.bottom },
                  { x: w, y: p.bottom }
                ],
                side: v
              }), window.clearTimeout(a.current), a.current = window.setTimeout(
                () => i.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (i.onTriggerLeave(d), d.defaultPrevented) return;
              i.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: N(e.onKeyDown, (d) => {
          var m;
          const p = i.searchRef.current !== "";
          e.disabled || p && d.key === " " || Cs[o.dir].includes(d.key) && (n.onOpenChange(!0), (m = n.content) == null || m.focus(), d.preventDefault());
        })
      }
    ) });
  }
);
So.displayName = Ne;
var To = "MenuSubContent", Io = h(
  (e, t) => {
    const n = vo(Q, e.__scopeMenu), { forceMount: o = n.forceMount, ...r } = e, i = ve(Q, e.__scopeMenu), s = $e(Q, e.__scopeMenu), a = Ro(To, e.__scopeMenu), l = P(null), c = U(t, l);
    return /* @__PURE__ */ u.jsx(Se.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ u.jsx(fe, { present: o || i.open, children: /* @__PURE__ */ u.jsx(Se.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ u.jsx(
      Pt,
      {
        id: a.contentId,
        "aria-labelledby": a.triggerId,
        ...r,
        ref: c,
        align: "start",
        side: s.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (f) => {
          var d;
          s.isUsingKeyboardRef.current && ((d = l.current) == null || d.focus()), f.preventDefault();
        },
        onCloseAutoFocus: (f) => f.preventDefault(),
        onFocusOutside: N(e.onFocusOutside, (f) => {
          f.target !== a.trigger && i.onOpenChange(!1);
        }),
        onEscapeKeyDown: N(e.onEscapeKeyDown, (f) => {
          s.onClose(), f.preventDefault();
        }),
        onKeyDown: N(e.onKeyDown, (f) => {
          var m;
          const d = f.currentTarget.contains(f.target), p = Ds[s.dir].includes(f.key);
          d && p && (i.onOpenChange(!1), (m = a.trigger) == null || m.focus(), f.preventDefault());
        })
      }
    ) }) }) });
  }
);
Io.displayName = To;
function jo(e) {
  return e ? "open" : "closed";
}
function Je(e) {
  return e === "indeterminate";
}
function Ot(e) {
  return Je(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Us(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function zs(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
function Ks(e, t, n) {
  const r = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let s = zs(e, Math.max(i, 0));
  r.length === 1 && (s = s.filter((c) => c !== n));
  const l = s.find(
    (c) => c.toLowerCase().startsWith(r.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function Vs(e, t) {
  const { x: n, y: o } = e;
  let r = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const a = t[i], l = t[s], c = a.x, f = a.y, d = l.x, p = l.y;
    f > o != p > o && n < (d - c) * (o - f) / (p - f) + c && (r = !r);
  }
  return r;
}
function Ys(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return Vs(n, t);
}
function Te(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var Xs = ho, qs = Dt, Zs = xo, Qs = yo, Js = Nt, ea = wo, ta = rt, na = Ao, oa = Do, ra = Eo, ia = No, sa = _o, aa = Oo, ca = So, la = Io, it = "DropdownMenu", [ua] = je(
  it,
  [mo]
), z = mo(), [da, Lo] = ua(it), ko = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: o,
    open: r,
    defaultOpen: i,
    onOpenChange: s,
    modal: a = !0
  } = e, l = z(t), c = P(null), [f, d] = Yt({
    prop: r,
    defaultProp: i ?? !1,
    onChange: s,
    caller: it
  });
  return /* @__PURE__ */ u.jsx(
    da,
    {
      scope: t,
      triggerId: _e(),
      triggerRef: c,
      contentId: _e(),
      open: f,
      onOpenChange: d,
      onOpenToggle: X(() => d((p) => !p), [d]),
      modal: a,
      children: /* @__PURE__ */ u.jsx(Xs, { ...l, open: f, onOpenChange: d, dir: o, modal: a, children: n })
    }
  );
};
ko.displayName = it;
var Fo = "DropdownMenuTrigger", $o = h(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: o = !1, ...r } = e, i = Lo(Fo, n), s = z(n);
    return /* @__PURE__ */ u.jsx(qs, { asChild: !0, ...s, children: /* @__PURE__ */ u.jsx(
      $.button,
      {
        type: "button",
        id: i.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": i.open,
        "aria-controls": i.open ? i.contentId : void 0,
        "data-state": i.open ? "open" : "closed",
        "data-disabled": o ? "" : void 0,
        disabled: o,
        ...r,
        ref: Zt(t, i.triggerRef),
        onPointerDown: N(e.onPointerDown, (a) => {
          !o && a.button === 0 && a.ctrlKey === !1 && (i.onOpenToggle(), i.open || a.preventDefault());
        }),
        onKeyDown: N(e.onKeyDown, (a) => {
          o || (["Enter", " "].includes(a.key) && i.onOpenToggle(), a.key === "ArrowDown" && i.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(a.key) && a.preventDefault());
        })
      }
    ) });
  }
);
$o.displayName = Fo;
var fa = "DropdownMenuPortal", Wo = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, o = z(t);
  return /* @__PURE__ */ u.jsx(Zs, { ...o, ...n });
};
Wo.displayName = fa;
var Bo = "DropdownMenuContent", Go = h(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = Lo(Bo, n), i = z(n), s = P(!1);
    return /* @__PURE__ */ u.jsx(
      Qs,
      {
        id: r.contentId,
        "aria-labelledby": r.triggerId,
        ...i,
        ...o,
        ref: t,
        onCloseAutoFocus: N(e.onCloseAutoFocus, (a) => {
          var l;
          s.current || (l = r.triggerRef.current) == null || l.focus(), s.current = !1, a.preventDefault();
        }),
        onInteractOutside: N(e.onInteractOutside, (a) => {
          const l = a.detail.originalEvent, c = l.button === 0 && l.ctrlKey === !0, f = l.button === 2 || c;
          (!r.modal || f) && (s.current = !0);
        }),
        style: {
          ...e.style,
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
Go.displayName = Bo;
var pa = "DropdownMenuGroup", Ho = h(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = z(n);
    return /* @__PURE__ */ u.jsx(Js, { ...r, ...o, ref: t });
  }
);
Ho.displayName = pa;
var ma = "DropdownMenuLabel", Uo = h(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = z(n);
    return /* @__PURE__ */ u.jsx(ea, { ...r, ...o, ref: t });
  }
);
Uo.displayName = ma;
var ga = "DropdownMenuItem", zo = h(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = z(n);
    return /* @__PURE__ */ u.jsx(ta, { ...r, ...o, ref: t });
  }
);
zo.displayName = ga;
var ha = "DropdownMenuCheckboxItem", Ko = h((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = z(n);
  return /* @__PURE__ */ u.jsx(na, { ...r, ...o, ref: t });
});
Ko.displayName = ha;
var va = "DropdownMenuRadioGroup", xa = h((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = z(n);
  return /* @__PURE__ */ u.jsx(oa, { ...r, ...o, ref: t });
});
xa.displayName = va;
var ya = "DropdownMenuRadioItem", Vo = h((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = z(n);
  return /* @__PURE__ */ u.jsx(ra, { ...r, ...o, ref: t });
});
Vo.displayName = ya;
var wa = "DropdownMenuItemIndicator", Yo = h((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = z(n);
  return /* @__PURE__ */ u.jsx(ia, { ...r, ...o, ref: t });
});
Yo.displayName = wa;
var ba = "DropdownMenuSeparator", Xo = h((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = z(n);
  return /* @__PURE__ */ u.jsx(sa, { ...r, ...o, ref: t });
});
Xo.displayName = ba;
var Aa = "DropdownMenuArrow", Ca = h(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = z(n);
    return /* @__PURE__ */ u.jsx(aa, { ...r, ...o, ref: t });
  }
);
Ca.displayName = Aa;
var Da = "DropdownMenuSubTrigger", qo = h((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = z(n);
  return /* @__PURE__ */ u.jsx(ca, { ...r, ...o, ref: t });
});
qo.displayName = Da;
var Ma = "DropdownMenuSubContent", Zo = h((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = z(n);
  return /* @__PURE__ */ u.jsx(
    la,
    {
      ...r,
      ...o,
      ref: t,
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
Zo.displayName = Ma;
var Ea = ko, Pa = $o, Na = Wo, Qo = Go, _a = Ho, Jo = Uo, er = zo, tr = Ko, nr = Vo, or = Yo, rr = Xo, ir = qo, sr = Zo;
const Va = Ea, Ya = Pa, Xa = _a, Oa = h(({ className: e, inset: t, children: n, ...o }, r) => /* @__PURE__ */ u.jsxs(
  ir,
  {
    ref: r,
    className: W(
      "flex cursor-default gap-2 select-none hover:bg-accent items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      t && "pl-8",
      e
    ),
    ...o,
    children: [
      n,
      /* @__PURE__ */ u.jsx(as, { className: "ml-auto" })
    ]
  }
));
Oa.displayName = ir.displayName;
const Ra = h(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx("div", { className: dt, children: /* @__PURE__ */ u.jsx(
  sr,
  {
    ref: n,
    className: W(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
) }));
Ra.displayName = sr.displayName;
const Sa = h(({ className: e, sideOffset: t = 4, ...n }, o) => /* @__PURE__ */ u.jsx(Na, { children: /* @__PURE__ */ u.jsx("div", { className: dt, children: /* @__PURE__ */ u.jsx(
  Qo,
  {
    ref: o,
    className: W(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    sideOffset: t,
    ...n
  }
) }) }));
Sa.displayName = Qo.displayName;
const Ta = h(({ className: e, inset: t, ...n }, o) => /* @__PURE__ */ u.jsx(
  er,
  {
    ref: o,
    className: W(
      "relative flex cursor-default select-none cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
      t && "pl-8",
      e
    ),
    ...n
  }
));
Ta.displayName = er.displayName;
const Ia = h(({ className: e, children: t, checked: n, ...o }, r) => /* @__PURE__ */ u.jsxs(
  tr,
  {
    ref: r,
    checked: n,
    className: W(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...o,
    children: [
      /* @__PURE__ */ u.jsx("span", { className: "absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ u.jsx(or, { children: /* @__PURE__ */ u.jsx(Dr, { className: "size-4" }) }) }),
      t
    ]
  }
));
Ia.displayName = tr.displayName;
const ja = h(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ u.jsxs(
  nr,
  {
    ref: o,
    className: W(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ u.jsx("span", { className: "absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ u.jsx(or, { children: /* @__PURE__ */ u.jsx(ls, { className: "size-2 fill-current" }) }) }),
      t
    ]
  }
));
ja.displayName = nr.displayName;
const La = h(({ className: e, inset: t, ...n }, o) => /* @__PURE__ */ u.jsx(
  Jo,
  {
    ref: o,
    className: W(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
La.displayName = Jo.displayName;
const ka = h(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  rr,
  {
    ref: n,
    className: W("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
ka.displayName = rr.displayName;
export {
  Ni as A,
  vi as B,
  _i as C,
  xt as D,
  Ga as E,
  $r as F,
  ci as G,
  Hr as H,
  wi as I,
  fe as P,
  Pi as R,
  Ua as U,
  Oi as a,
  Va as b,
  yn as c,
  Ya as d,
  Sa as e,
  Ta as f,
  as as g,
  ls as h,
  Ha as i,
  Xa as j,
  ka as k,
  za as l,
  ms as m,
  gs as n,
  vs as o,
  xs as p,
  hs as q,
  ws as r,
  ys as s,
  Mr as t,
  Nn as u,
  xi as v,
  Br as w,
  Gr as x,
  Fr as y,
  Ur as z
};
//# sourceMappingURL=dropdown-menu-C1s2rpqw.mjs.map
