import { e as z, d as fe, P as _, b as j, g as Me, k as gt, u as yt, c as bt, a as oe, f as Et, m as Ct } from "./heading-CN611yBx.mjs";
import { b as N, o as w, u as I, a2 as St, j as m, p as S, q as M, U as Nt, x as R, _ as Re, M as Ie, K as he, a as wt, N as _e, Q as Dt, a0 as xt, S as Pt, n as K } from "./index-DP6CzQAF.mjs";
var O = function() {
  return O = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, O.apply(this, arguments);
};
function Le(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function rr(e, t, n, r) {
  function o(a) {
    return a instanceof n ? a : new n(function(s) {
      s(a);
    });
  }
  return new (n || (n = Promise))(function(a, s) {
    function i(l) {
      try {
        u(r.next(l));
      } catch (d) {
        s(d);
      }
    }
    function f(l) {
      try {
        u(r.throw(l));
      } catch (d) {
        s(d);
      }
    }
    function u(l) {
      l.done ? a(l.value) : o(l.value).then(i, f);
    }
    u((r = r.apply(e, t || [])).next());
  });
}
function Ot(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function At(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = z(e);
  N(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var Tt = "Portal", ke = w((e, t) => {
  var i;
  const { container: n, ...r } = e, [o, a] = I(!1);
  fe(() => a(!0), []);
  const s = n || o && ((i = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : i.body);
  return s ? St.createPortal(/* @__PURE__ */ m.jsx(_.div, { ...r, ref: t }), s) : null;
});
ke.displayName = Tt;
var ae = "focusScope.autoFocusOnMount", ie = "focusScope.autoFocusOnUnmount", be = { bubbles: !1, cancelable: !0 }, Mt = "FocusScope", Fe = w((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a,
    ...s
  } = e, [i, f] = I(null), u = z(o), l = z(a), d = S(null), h = j(t, (c) => f(c)), p = S({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  N(() => {
    if (r) {
      let c = function(b) {
        if (p.paused || !i) return;
        const E = b.target;
        i.contains(E) ? d.current = E : L(d.current, { select: !0 });
      }, v = function(b) {
        if (p.paused || !i) return;
        const E = b.relatedTarget;
        E !== null && (i.contains(E) || L(d.current, { select: !0 }));
      }, g = function(b) {
        if (document.activeElement === document.body)
          for (const C of b)
            C.removedNodes.length > 0 && L(i);
      };
      document.addEventListener("focusin", c), document.addEventListener("focusout", v);
      const D = new MutationObserver(g);
      return i && D.observe(i, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", c), document.removeEventListener("focusout", v), D.disconnect();
      };
    }
  }, [r, i, p.paused]), N(() => {
    if (i) {
      Ce.add(p);
      const c = document.activeElement;
      if (!i.contains(c)) {
        const g = new CustomEvent(ae, be);
        i.addEventListener(ae, u), i.dispatchEvent(g), g.defaultPrevented || (Rt(Ft(je(i)), { select: !0 }), document.activeElement === c && L(i));
      }
      return () => {
        i.removeEventListener(ae, u), setTimeout(() => {
          const g = new CustomEvent(ie, be);
          i.addEventListener(ie, l), i.dispatchEvent(g), g.defaultPrevented || L(c ?? document.body, { select: !0 }), i.removeEventListener(ie, l), Ce.remove(p);
        }, 0);
      };
    }
  }, [i, u, l, p]);
  const x = M(
    (c) => {
      if (!n && !r || p.paused) return;
      const v = c.key === "Tab" && !c.altKey && !c.ctrlKey && !c.metaKey, g = document.activeElement;
      if (v && g) {
        const D = c.currentTarget, [b, E] = It(D);
        b && E ? !c.shiftKey && g === E ? (c.preventDefault(), n && L(b, { select: !0 })) : c.shiftKey && g === b && (c.preventDefault(), n && L(E, { select: !0 })) : g === D && c.preventDefault();
      }
    },
    [n, r, p.paused]
  );
  return /* @__PURE__ */ m.jsx(_.div, { tabIndex: -1, ...s, ref: h, onKeyDown: x });
});
Fe.displayName = Mt;
function Rt(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (L(r, { select: t }), document.activeElement !== n) return;
}
function It(e) {
  const t = je(e), n = Ee(t, e), r = Ee(t.reverse(), e);
  return [n, r];
}
function je(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Ee(e, t) {
  for (const n of e)
    if (!_t(n, { upTo: t })) return n;
}
function _t(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Lt(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function L(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Lt(e) && t && e.select();
  }
}
var Ce = kt();
function kt() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Se(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Se(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function Se(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Ft(e) {
  return e.filter((t) => t.tagName !== "A");
}
var jt = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, W = /* @__PURE__ */ new WeakMap(), G = /* @__PURE__ */ new WeakMap(), X = {}, se = 0, We = function(e) {
  return e && (e.host || We(e.parentNode));
}, Wt = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = We(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Bt = function(e, t, n, r) {
  var o = Wt(t, Array.isArray(e) ? e : [e]);
  X[n] || (X[n] = /* @__PURE__ */ new WeakMap());
  var a = X[n], s = [], i = /* @__PURE__ */ new Set(), f = new Set(o), u = function(d) {
    !d || i.has(d) || (i.add(d), u(d.parentNode));
  };
  o.forEach(u);
  var l = function(d) {
    !d || f.has(d) || Array.prototype.forEach.call(d.children, function(h) {
      if (i.has(h))
        l(h);
      else
        try {
          var p = h.getAttribute(r), x = p !== null && p !== "false", c = (W.get(h) || 0) + 1, v = (a.get(h) || 0) + 1;
          W.set(h, c), a.set(h, v), s.push(h), c === 1 && x && G.set(h, !0), v === 1 && h.setAttribute(n, "true"), x || h.setAttribute(r, "true");
        } catch (g) {
          console.error("aria-hidden: cannot operate on ", h, g);
        }
    });
  };
  return l(t), i.clear(), se++, function() {
    s.forEach(function(d) {
      var h = W.get(d) - 1, p = a.get(d) - 1;
      W.set(d, h), a.set(d, p), h || (G.has(d) || d.removeAttribute(r), G.delete(d)), p || d.removeAttribute(n);
    }), se--, se || (W = /* @__PURE__ */ new WeakMap(), W = /* @__PURE__ */ new WeakMap(), G = /* @__PURE__ */ new WeakMap(), X = {});
  };
}, Ut = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = jt(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), Bt(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, q = "right-scroll-bar-position", Q = "width-before-scroll-bar", $t = "with-scroll-bars-hidden", Kt = "--removed-body-scroll-bar-size";
function ce(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Vt(e, t) {
  var n = I(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var zt = typeof window < "u" ? Nt : N, Ne = /* @__PURE__ */ new WeakMap();
function Gt(e, t) {
  var n = Vt(null, function(r) {
    return e.forEach(function(o) {
      return ce(o, r);
    });
  });
  return zt(function() {
    var r = Ne.get(n);
    if (r) {
      var o = new Set(r), a = new Set(e), s = n.current;
      o.forEach(function(i) {
        a.has(i) || ce(i, null);
      }), a.forEach(function(i) {
        o.has(i) || ce(i, s);
      });
    }
    Ne.set(n, e);
  }, [e]), n;
}
function Xt(e) {
  return e;
}
function Yt(e, t) {
  t === void 0 && (t = Xt);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(a) {
      var s = t(a, r);
      return n.push(s), function() {
        n = n.filter(function(i) {
          return i !== s;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (r = !0; n.length; ) {
        var s = n;
        n = [], s.forEach(a);
      }
      n = {
        push: function(i) {
          return a(i);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(a) {
      r = !0;
      var s = [];
      if (n.length) {
        var i = n;
        n = [], i.forEach(a), s = n;
      }
      var f = function() {
        var l = s;
        s = [], l.forEach(a);
      }, u = function() {
        return Promise.resolve().then(f);
      };
      u(), n = {
        push: function(l) {
          s.push(l), u();
        },
        filter: function(l) {
          return s = s.filter(l), n;
        }
      };
    }
  };
  return o;
}
function Ht(e) {
  e === void 0 && (e = {});
  var t = Yt(null);
  return t.options = O({ async: !0, ssr: !1 }, e), t;
}
var Be = function(e) {
  var t = e.sideCar, n = Le(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return R(r, O({}, n));
};
Be.isSideCarExport = !0;
function Zt(e, t) {
  return e.useMedium(t), Be;
}
var Ue = Ht(), ue = function() {
}, ee = w(function(e, t) {
  var n = S(null), r = I({
    onScrollCapture: ue,
    onWheelCapture: ue,
    onTouchMoveCapture: ue
  }), o = r[0], a = r[1], s = e.forwardProps, i = e.children, f = e.className, u = e.removeScrollBar, l = e.enabled, d = e.shards, h = e.sideCar, p = e.noIsolation, x = e.inert, c = e.allowPinchZoom, v = e.as, g = v === void 0 ? "div" : v, D = e.gapMode, b = Le(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), E = h, C = Gt([n, t]), A = O(O({}, b), o);
  return R(
    Re,
    null,
    l && R(E, { sideCar: Ue, removeScrollBar: u, shards: d, noIsolation: p, inert: x, setCallbacks: a, allowPinchZoom: !!c, lockRef: n, gapMode: D }),
    s ? Ie(he.only(i), O(O({}, A), { ref: C })) : R(g, O({}, A, { className: f, ref: C }), i)
  );
});
ee.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
ee.classNames = {
  fullWidth: Q,
  zeroRight: q
};
var qt = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Qt() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = qt();
  return t && e.setAttribute("nonce", t), e;
}
function Jt(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function en(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var tn = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Qt()) && (Jt(t, n), en(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, nn = function() {
  var e = tn();
  return function(t, n) {
    N(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, $e = function() {
  var e = nn(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, rn = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, le = function(e) {
  return parseInt(e || "", 10) || 0;
}, on = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [le(n), le(r), le(o)];
}, an = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return rn;
  var t = on(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, sn = $e(), $ = "data-scroll-locked", cn = function(e, t, n, r) {
  var o = e.left, a = e.top, s = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat($t, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body[`).concat($, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(s, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(i, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(q, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(Q, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(q, " .").concat(q, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Q, " .").concat(Q, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat($, `] {
    `).concat(Kt, ": ").concat(i, `px;
  }
`);
}, we = function() {
  var e = parseInt(document.body.getAttribute($) || "0", 10);
  return isFinite(e) ? e : 0;
}, un = function() {
  N(function() {
    return document.body.setAttribute($, (we() + 1).toString()), function() {
      var e = we() - 1;
      e <= 0 ? document.body.removeAttribute($) : document.body.setAttribute($, e.toString());
    };
  }, []);
}, ln = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  un();
  var a = wt(function() {
    return an(o);
  }, [o]);
  return R(sn, { styles: cn(a, !t, o, n ? "" : "!important") });
}, ve = !1;
if (typeof window < "u")
  try {
    var Y = Object.defineProperty({}, "passive", {
      get: function() {
        return ve = !0, !0;
      }
    });
    window.addEventListener("test", Y, Y), window.removeEventListener("test", Y, Y);
  } catch {
    ve = !1;
  }
var B = ve ? { passive: !1 } : !1, dn = function(e) {
  return e.tagName === "TEXTAREA";
}, Ke = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !dn(e) && n[t] === "visible")
  );
}, fn = function(e) {
  return Ke(e, "overflowY");
}, vn = function(e) {
  return Ke(e, "overflowX");
}, De = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Ve(e, r);
    if (o) {
      var a = ze(e, r), s = a[1], i = a[2];
      if (s > i)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, mn = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, hn = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Ve = function(e, t) {
  return e === "v" ? fn(t) : vn(t);
}, ze = function(e, t) {
  return e === "v" ? mn(t) : hn(t);
}, pn = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, gn = function(e, t, n, r, o) {
  var a = pn(e, window.getComputedStyle(t).direction), s = a * r, i = n.target, f = t.contains(i), u = !1, l = s > 0, d = 0, h = 0;
  do {
    var p = ze(e, i), x = p[0], c = p[1], v = p[2], g = c - v - a * x;
    (x || g) && Ve(e, i) && (d += g, h += x), i instanceof ShadowRoot ? i = i.host : i = i.parentNode;
  } while (
    // portaled content
    !f && i !== document.body || // self content
    f && (t.contains(i) || t === i)
  );
  return (l && Math.abs(d) < 1 || !l && Math.abs(h) < 1) && (u = !0), u;
}, H = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, xe = function(e) {
  return [e.deltaX, e.deltaY];
}, Pe = function(e) {
  return e && "current" in e ? e.current : e;
}, yn = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, bn = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, En = 0, U = [];
function Cn(e) {
  var t = S([]), n = S([0, 0]), r = S(), o = I(En++)[0], a = I($e)[0], s = S(e);
  N(function() {
    s.current = e;
  }, [e]), N(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var c = Ot([e.lockRef.current], (e.shards || []).map(Pe), !0).filter(Boolean);
      return c.forEach(function(v) {
        return v.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), c.forEach(function(v) {
          return v.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = M(function(c, v) {
    if ("touches" in c && c.touches.length === 2 || c.type === "wheel" && c.ctrlKey)
      return !s.current.allowPinchZoom;
    var g = H(c), D = n.current, b = "deltaX" in c ? c.deltaX : D[0] - g[0], E = "deltaY" in c ? c.deltaY : D[1] - g[1], C, A = c.target, y = Math.abs(b) > Math.abs(E) ? "h" : "v";
    if ("touches" in c && y === "h" && A.type === "range")
      return !1;
    var T = De(y, A);
    if (!T)
      return !0;
    if (T ? C = y : (C = y === "v" ? "h" : "v", T = De(y, A)), !T)
      return !1;
    if (!r.current && "changedTouches" in c && (b || E) && (r.current = C), !C)
      return !0;
    var V = r.current || C;
    return gn(V, v, c, V === "h" ? b : E);
  }, []), f = M(function(c) {
    var v = c;
    if (!(!U.length || U[U.length - 1] !== a)) {
      var g = "deltaY" in v ? xe(v) : H(v), D = t.current.filter(function(C) {
        return C.name === v.type && (C.target === v.target || v.target === C.shadowParent) && yn(C.delta, g);
      })[0];
      if (D && D.should) {
        v.cancelable && v.preventDefault();
        return;
      }
      if (!D) {
        var b = (s.current.shards || []).map(Pe).filter(Boolean).filter(function(C) {
          return C.contains(v.target);
        }), E = b.length > 0 ? i(v, b[0]) : !s.current.noIsolation;
        E && v.cancelable && v.preventDefault();
      }
    }
  }, []), u = M(function(c, v, g, D) {
    var b = { name: c, delta: v, target: g, should: D, shadowParent: Sn(g) };
    t.current.push(b), setTimeout(function() {
      t.current = t.current.filter(function(E) {
        return E !== b;
      });
    }, 1);
  }, []), l = M(function(c) {
    n.current = H(c), r.current = void 0;
  }, []), d = M(function(c) {
    u(c.type, xe(c), c.target, i(c, e.lockRef.current));
  }, []), h = M(function(c) {
    u(c.type, H(c), c.target, i(c, e.lockRef.current));
  }, []);
  N(function() {
    return U.push(a), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: h
    }), document.addEventListener("wheel", f, B), document.addEventListener("touchmove", f, B), document.addEventListener("touchstart", l, B), function() {
      U = U.filter(function(c) {
        return c !== a;
      }), document.removeEventListener("wheel", f, B), document.removeEventListener("touchmove", f, B), document.removeEventListener("touchstart", l, B);
    };
  }, []);
  var p = e.removeScrollBar, x = e.inert;
  return R(
    Re,
    null,
    x ? R(a, { styles: bn(o) }) : null,
    p ? R(ln, { gapMode: e.gapMode }) : null
  );
}
function Sn(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Nn = Zt(Ue, Cn);
var Ge = w(function(e, t) {
  return R(ee, O({}, e, { ref: t, sideCar: Nn }));
});
Ge.classNames = ee.classNames;
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wn = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], or = Me("check", wn);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dn = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], ar = Me("x", Dn);
function k(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
var xn = "DismissableLayer", me = "dismissableLayer.update", Pn = "dismissableLayer.pointerDownOutside", On = "dismissableLayer.focusOutside", Oe, Xe = Dt({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Ye = w(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: a,
      onInteractOutside: s,
      onDismiss: i,
      ...f
    } = e, u = _e(Xe), [l, d] = I(null), h = (l == null ? void 0 : l.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, p] = I({}), x = j(t, (y) => d(y)), c = Array.from(u.layers), [v] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), g = c.indexOf(v), D = l ? c.indexOf(l) : -1, b = u.layersWithOutsidePointerEventsDisabled.size > 0, E = D >= g, C = Mn((y) => {
      const T = y.target, V = [...u.branches].some((re) => re.contains(T));
      !E || V || (o == null || o(y), s == null || s(y), y.defaultPrevented || i == null || i());
    }, h), A = Rn((y) => {
      const T = y.target;
      [...u.branches].some((re) => re.contains(T)) || (a == null || a(y), s == null || s(y), y.defaultPrevented || i == null || i());
    }, h);
    return At((y) => {
      D === u.layers.size - 1 && (r == null || r(y), !y.defaultPrevented && i && (y.preventDefault(), i()));
    }, h), N(() => {
      if (l)
        return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Oe = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(l)), u.layers.add(l), Ae(), () => {
          n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = Oe);
        };
    }, [l, h, n, u]), N(() => () => {
      l && (u.layers.delete(l), u.layersWithOutsidePointerEventsDisabled.delete(l), Ae());
    }, [l, u]), N(() => {
      const y = () => p({});
      return document.addEventListener(me, y), () => document.removeEventListener(me, y);
    }, []), /* @__PURE__ */ m.jsx(
      _.div,
      {
        ...f,
        ref: x,
        style: {
          pointerEvents: b ? E ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: k(e.onFocusCapture, A.onFocusCapture),
        onBlurCapture: k(e.onBlurCapture, A.onBlurCapture),
        onPointerDownCapture: k(
          e.onPointerDownCapture,
          C.onPointerDownCapture
        )
      }
    );
  }
);
Ye.displayName = xn;
var An = "DismissableLayerBranch", Tn = w((e, t) => {
  const n = _e(Xe), r = S(null), o = j(t, r);
  return N(() => {
    const a = r.current;
    if (a)
      return n.branches.add(a), () => {
        n.branches.delete(a);
      };
  }, [n.branches]), /* @__PURE__ */ m.jsx(_.div, { ...e, ref: o });
});
Tn.displayName = An;
function Mn(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = z(e), r = S(!1), o = S(() => {
  });
  return N(() => {
    const a = (i) => {
      if (i.target && !r.current) {
        let f = function() {
          He(
            Pn,
            n,
            u,
            { discrete: !0 }
          );
        };
        const u = { originalEvent: i };
        i.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = f, t.addEventListener("click", o.current, { once: !0 })) : f();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, s = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(s), t.removeEventListener("pointerdown", a), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function Rn(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = z(e), r = S(!1);
  return N(() => {
    const o = (a) => {
      a.target && !r.current && He(On, n, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Ae() {
  const e = new CustomEvent(me);
  document.dispatchEvent(e);
}
function He(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? gt(o, a) : o.dispatchEvent(a);
}
function In(e, t) {
  return xt((n, r) => t[n][r] ?? n, e);
}
var te = (e) => {
  const { present: t, children: n } = e, r = _n(t), o = typeof n == "function" ? n({ present: r.isPresent }) : he.only(n), a = j(r.ref, Ln(o));
  return typeof n == "function" || r.isPresent ? Ie(o, { ref: a }) : null;
};
te.displayName = "Presence";
function _n(e) {
  const [t, n] = I(), r = S(null), o = S(e), a = S("none"), s = e ? "mounted" : "unmounted", [i, f] = In(s, {
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
  return N(() => {
    const u = Z(r.current);
    a.current = i === "mounted" ? u : "none";
  }, [i]), fe(() => {
    const u = r.current, l = o.current;
    if (l !== e) {
      const h = a.current, p = Z(u);
      e ? f("MOUNT") : p === "none" || (u == null ? void 0 : u.display) === "none" ? f("UNMOUNT") : f(l && h !== p ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, f]), fe(() => {
    if (t) {
      let u;
      const l = t.ownerDocument.defaultView ?? window, d = (p) => {
        const c = Z(r.current).includes(CSS.escape(p.animationName));
        if (p.target === t && c && (f("ANIMATION_END"), !o.current)) {
          const v = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = l.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = v);
          });
        }
      }, h = (p) => {
        p.target === t && (a.current = Z(r.current));
      };
      return t.addEventListener("animationstart", h), t.addEventListener("animationcancel", d), t.addEventListener("animationend", d), () => {
        l.clearTimeout(u), t.removeEventListener("animationstart", h), t.removeEventListener("animationcancel", d), t.removeEventListener("animationend", d);
      };
    } else
      f("ANIMATION_END");
  }, [t, f]), {
    isPresent: ["mounted", "unmountSuspended"].includes(i),
    ref: M((u) => {
      r.current = u ? getComputedStyle(u) : null, n(u);
    }, [])
  };
}
function Z(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Ln(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var de = 0;
function kn() {
  N(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Te()), document.body.insertAdjacentElement("beforeend", e[1] ?? Te()), de++, () => {
      de === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), de--;
    };
  }, []);
}
function Te() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var ne = "Dialog", [Ze] = bt(ne), [Fn, P] = Ze(ne), qe = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: s = !0
  } = e, i = S(null), f = S(null), [u, l] = yt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: ne
  });
  return /* @__PURE__ */ m.jsx(
    Fn,
    {
      scope: t,
      triggerRef: i,
      contentRef: f,
      contentId: oe(),
      titleId: oe(),
      descriptionId: oe(),
      open: u,
      onOpenChange: l,
      onOpenToggle: M(() => l((d) => !d), [l]),
      modal: s,
      children: n
    }
  );
};
qe.displayName = ne;
var Qe = "DialogTrigger", Je = w(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = P(Qe, n), a = j(t, o.triggerRef);
    return /* @__PURE__ */ m.jsx(
      _.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": ye(o.open),
        ...r,
        ref: a,
        onClick: k(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Je.displayName = Qe;
var pe = "DialogPortal", [jn, et] = Ze(pe, {
  forceMount: void 0
}), tt = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = P(pe, t);
  return /* @__PURE__ */ m.jsx(jn, { scope: t, forceMount: n, children: he.map(r, (s) => /* @__PURE__ */ m.jsx(te, { present: n || a.open, children: /* @__PURE__ */ m.jsx(ke, { asChild: !0, container: o, children: s }) })) });
};
tt.displayName = pe;
var J = "DialogOverlay", nt = w(
  (e, t) => {
    const n = et(J, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = P(J, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ m.jsx(te, { present: r || a.open, children: /* @__PURE__ */ m.jsx(Bn, { ...o, ref: t }) }) : null;
  }
);
nt.displayName = J;
var Wn = Et("DialogOverlay.RemoveScroll"), Bn = w(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = P(J, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ m.jsx(Ge, { as: Wn, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ m.jsx(
        _.div,
        {
          "data-state": ye(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), F = "DialogContent", rt = w(
  (e, t) => {
    const n = et(F, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = P(F, e.__scopeDialog);
    return /* @__PURE__ */ m.jsx(te, { present: r || a.open, children: a.modal ? /* @__PURE__ */ m.jsx(Un, { ...o, ref: t }) : /* @__PURE__ */ m.jsx($n, { ...o, ref: t }) });
  }
);
rt.displayName = F;
var Un = w(
  (e, t) => {
    const n = P(F, e.__scopeDialog), r = S(null), o = j(t, n.contentRef, r);
    return N(() => {
      const a = r.current;
      if (a) return Ut(a);
    }, []), /* @__PURE__ */ m.jsx(
      ot,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: k(e.onCloseAutoFocus, (a) => {
          var s;
          a.preventDefault(), (s = n.triggerRef.current) == null || s.focus();
        }),
        onPointerDownOutside: k(e.onPointerDownOutside, (a) => {
          const s = a.detail.originalEvent, i = s.button === 0 && s.ctrlKey === !0;
          (s.button === 2 || i) && a.preventDefault();
        }),
        onFocusOutside: k(
          e.onFocusOutside,
          (a) => a.preventDefault()
        )
      }
    );
  }
), $n = w(
  (e, t) => {
    const n = P(F, e.__scopeDialog), r = S(!1), o = S(!1);
    return /* @__PURE__ */ m.jsx(
      ot,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          var s, i;
          (s = e.onCloseAutoFocus) == null || s.call(e, a), a.defaultPrevented || (r.current || (i = n.triggerRef.current) == null || i.focus(), a.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (a) => {
          var f, u;
          (f = e.onInteractOutside) == null || f.call(e, a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const s = a.target;
          ((u = n.triggerRef.current) == null ? void 0 : u.contains(s)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
        }
      }
    );
  }
), ot = w(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e, i = P(F, n), f = S(null), u = j(t, f);
    return kn(), /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
      /* @__PURE__ */ m.jsx(
        Fe,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: a,
          children: /* @__PURE__ */ m.jsx(
            Ye,
            {
              role: "dialog",
              id: i.contentId,
              "aria-describedby": i.descriptionId,
              "aria-labelledby": i.titleId,
              "data-state": ye(i.open),
              ...s,
              ref: u,
              onDismiss: () => i.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
        /* @__PURE__ */ m.jsx(Kn, { titleId: i.titleId }),
        /* @__PURE__ */ m.jsx(zn, { contentRef: f, descriptionId: i.descriptionId })
      ] })
    ] });
  }
), ge = "DialogTitle", at = w(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = P(ge, n);
    return /* @__PURE__ */ m.jsx(_.h2, { id: o.titleId, ...r, ref: t });
  }
);
at.displayName = ge;
var it = "DialogDescription", st = w(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = P(it, n);
    return /* @__PURE__ */ m.jsx(_.p, { id: o.descriptionId, ...r, ref: t });
  }
);
st.displayName = it;
var ct = "DialogClose", ut = w(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = P(ct, n);
    return /* @__PURE__ */ m.jsx(
      _.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: k(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
ut.displayName = ct;
function ye(e) {
  return e ? "open" : "closed";
}
var lt = "DialogTitleWarning", [ir, dt] = Ct(lt, {
  contentName: F,
  titleName: ge,
  docsSlug: "dialog"
}), Kn = ({ titleId: e }) => {
  const t = dt(lt), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return N(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, Vn = "DialogDescriptionWarning", zn = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${dt(Vn).contentName}}.`;
  return N(() => {
    var a;
    const o = (a = e.current) == null ? void 0 : a.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, Gn = qe, Xn = Je, Yn = tt, ft = nt, vt = rt, mt = at, ht = st, sr = ut;
const cr = Gn, ur = Xn, Hn = Yn, pt = w(({ className: e, ...t }, n) => /* @__PURE__ */ m.jsx(
  ft,
  {
    ref: n,
    className: K(
      "fixed inset-0 z-50 bg-black/30 backdrop-blur-none transform-gpu data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=open]:backdrop-blur-[3px]",
      e
    ),
    ...t
  }
));
pt.displayName = ft.displayName;
const Zn = w(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ m.jsx(Hn, { children: /* @__PURE__ */ m.jsxs("div", { className: Pt, children: [
  /* @__PURE__ */ m.jsx(pt, {}),
  /* @__PURE__ */ m.jsx(
    vt,
    {
      ref: r,
      className: K(
        "fixed left-[50%] top-[8vmin] z-50 grid w-full max-w-lg translate-x-[-50%] gap-6 bg-background dark:bg-[#101114] p-6 shadow-lg duration-200 transform-gpu data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=open]:slide-in-from-left-1/2 sm:rounded-lg outline-none",
        e
      ),
      ...n,
      children: t
    }
  )
] }) }));
Zn.displayName = vt.displayName;
const qn = ({
  className: e,
  ...t
}) => /* @__PURE__ */ m.jsx(
  "div",
  {
    className: K(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
qn.displayName = "DialogHeader";
const Qn = ({
  className: e,
  ...t
}) => /* @__PURE__ */ m.jsx(
  "div",
  {
    className: K(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 sm:items-end [&_button]:min-w-20",
      e
    ),
    ...t
  }
);
Qn.displayName = "DialogFooter";
const Jn = w(({ className: e, ...t }, n) => /* @__PURE__ */ m.jsx(
  mt,
  {
    ref: n,
    className: K(
      "text-xl font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
Jn.displayName = mt.displayName;
const er = w(({ className: e, ...t }, n) => /* @__PURE__ */ m.jsx(
  ht,
  {
    ref: n,
    className: K("text-sm text-muted-foreground", e),
    ...t
  }
));
er.displayName = ht.displayName;
export {
  or as C,
  ht as D,
  Fe as F,
  ft as O,
  ke as P,
  Ge as R,
  Xn as T,
  ar as X,
  rr as _,
  Gn as a,
  Yn as b,
  vt as c,
  sr as d,
  mt as e,
  Le as f,
  cr as g,
  Ut as h,
  ur as i,
  Zn as j,
  qn as k,
  Jn as l,
  er as m,
  Qn as n,
  At as u
};
//# sourceMappingURL=dialog-B-8wib-u.mjs.map
