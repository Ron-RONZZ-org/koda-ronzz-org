import { f as p, B as Z, D as Pe, u as j, t as v, j as u, q as g, C as J, x as Oe, r as H, H as be, A as V, _ as x, $ as L } from "./index-BxbeiQvY.mjs";
import { V as P, ab as Ae, W as N, ac as ee, ad as xe, an as Y, P as Te, Q as Ie, T as F, ap as _e, $ as Re, a0 as Me, a1 as Se, a3 as Le, bF as Fe } from "./stats-CtTAHMmO.mjs";
function y(e, t, { checkForDefaultPrevented: o = !0 } = {}) {
  return function(n) {
    if (e == null || e(n), o === !1 || !n.defaultPrevented)
      return t == null ? void 0 : t(n);
  };
}
var we = "DismissableLayer", W = "dismissableLayer.update", je = "dismissableLayer.pointerDownOutside", We = "dismissableLayer.focusOutside", Q, te = Pe({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), ne = p(
  (e, t) => {
    const {
      disableOutsidePointerEvents: o = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: n,
      onFocusOutside: s,
      onInteractOutside: c,
      onDismiss: i,
      ...d
    } = e, a = Z(te), [l, D] = j(null), m = (l == null ? void 0 : l.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, h] = j({}), R = P(t, (f) => D(f)), O = Array.from(a.layers), [M] = [...a.layersWithOutsidePointerEventsDisabled].slice(-1), ye = O.indexOf(M), G = l ? O.indexOf(l) : -1, Ce = a.layersWithOutsidePointerEventsDisabled.size > 0, $ = G >= ye, Ne = ke((f) => {
      const b = f.target, z = [...a.branches].some((S) => S.contains(b));
      !$ || z || (n == null || n(f), c == null || c(f), f.defaultPrevented || i == null || i());
    }, m), q = Ge((f) => {
      const b = f.target;
      [...a.branches].some((S) => S.contains(b)) || (s == null || s(f), c == null || c(f), f.defaultPrevented || i == null || i());
    }, m);
    return Ae((f) => {
      G === a.layers.size - 1 && (r == null || r(f), !f.defaultPrevented && i && (f.preventDefault(), i()));
    }, m), v(() => {
      if (l)
        return o && (a.layersWithOutsidePointerEventsDisabled.size === 0 && (Q = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), a.layersWithOutsidePointerEventsDisabled.add(l)), a.layers.add(l), K(), () => {
          o && a.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = Q);
        };
    }, [l, m, o, a]), v(() => () => {
      l && (a.layers.delete(l), a.layersWithOutsidePointerEventsDisabled.delete(l), K());
    }, [l, a]), v(() => {
      const f = () => h({});
      return document.addEventListener(W, f), () => document.removeEventListener(W, f);
    }, []), /* @__PURE__ */ u.jsx(
      N.div,
      {
        ...d,
        ref: R,
        style: {
          pointerEvents: Ce ? $ ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: y(e.onFocusCapture, q.onFocusCapture),
        onBlurCapture: y(e.onBlurCapture, q.onBlurCapture),
        onPointerDownCapture: y(
          e.onPointerDownCapture,
          Ne.onPointerDownCapture
        )
      }
    );
  }
);
ne.displayName = we;
var Ue = "DismissableLayerBranch", Be = p((e, t) => {
  const o = Z(te), r = g(null), n = P(t, r);
  return v(() => {
    const s = r.current;
    if (s)
      return o.branches.add(s), () => {
        o.branches.delete(s);
      };
  }, [o.branches]), /* @__PURE__ */ u.jsx(N.div, { ...e, ref: n });
});
Be.displayName = Ue;
function ke(e, t = globalThis == null ? void 0 : globalThis.document) {
  const o = ee(e), r = g(!1), n = g(() => {
  });
  return v(() => {
    const s = (i) => {
      if (i.target && !r.current) {
        let d = function() {
          oe(
            je,
            o,
            a,
            { discrete: !0 }
          );
        };
        const a = { originalEvent: i };
        i.pointerType === "touch" ? (t.removeEventListener("click", n.current), n.current = d, t.addEventListener("click", n.current, { once: !0 })) : d();
      } else
        t.removeEventListener("click", n.current);
      r.current = !1;
    }, c = window.setTimeout(() => {
      t.addEventListener("pointerdown", s);
    }, 0);
    return () => {
      window.clearTimeout(c), t.removeEventListener("pointerdown", s), t.removeEventListener("click", n.current);
    };
  }, [t, o]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function Ge(e, t = globalThis == null ? void 0 : globalThis.document) {
  const o = ee(e), r = g(!1);
  return v(() => {
    const n = (s) => {
      s.target && !r.current && oe(We, o, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", n), () => t.removeEventListener("focusin", n);
  }, [t, o]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function K() {
  const e = new CustomEvent(W);
  document.dispatchEvent(e);
}
function oe(e, t, o, { discrete: r }) {
  const n = o.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: o });
  t && n.addEventListener(e, t, { once: !0 }), r ? xe(n, s) : n.dispatchEvent(s);
}
function $e(e, t) {
  return be((o, r) => t[o][r] ?? o, e);
}
var I = (e) => {
  const { present: t, children: o } = e, r = qe(t), n = typeof o == "function" ? o({ present: r.isPresent }) : J.only(o), s = P(r.ref, ze(n));
  return typeof o == "function" || r.isPresent ? Oe(n, { ref: s }) : null;
};
I.displayName = "Presence";
function qe(e) {
  const [t, o] = j(), r = g(null), n = g(e), s = g("none"), c = e ? "mounted" : "unmounted", [i, d] = $e(c, {
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
  return v(() => {
    const a = A(r.current);
    s.current = i === "mounted" ? a : "none";
  }, [i]), Y(() => {
    const a = r.current, l = n.current;
    if (l !== e) {
      const m = s.current, h = A(a);
      e ? d("MOUNT") : h === "none" || (a == null ? void 0 : a.display) === "none" ? d("UNMOUNT") : d(l && m !== h ? "ANIMATION_OUT" : "UNMOUNT"), n.current = e;
    }
  }, [e, d]), Y(() => {
    if (t) {
      let a;
      const l = t.ownerDocument.defaultView ?? window, D = (h) => {
        const O = A(r.current).includes(CSS.escape(h.animationName));
        if (h.target === t && O && (d("ANIMATION_END"), !n.current)) {
          const M = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", a = l.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = M);
          });
        }
      }, m = (h) => {
        h.target === t && (s.current = A(r.current));
      };
      return t.addEventListener("animationstart", m), t.addEventListener("animationcancel", D), t.addEventListener("animationend", D), () => {
        l.clearTimeout(a), t.removeEventListener("animationstart", m), t.removeEventListener("animationcancel", D), t.removeEventListener("animationend", D);
      };
    } else
      d("ANIMATION_END");
  }, [t, d]), {
    isPresent: ["mounted", "unmountSuspended"].includes(i),
    ref: H((a) => {
      r.current = a ? getComputedStyle(a) : null, o(a);
    }, [])
  };
}
function A(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function ze(e) {
  var r, n;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, o = t && "isReactWarning" in t && t.isReactWarning;
  return o ? e.ref : (t = (n = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : n.get, o = t && "isReactWarning" in t && t.isReactWarning, o ? e.props.ref : e.props.ref || e.ref);
}
var w = 0;
function Ve() {
  v(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? X()), document.body.insertAdjacentElement("beforeend", e[1] ?? X()), w++, () => {
      w === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), w--;
    };
  }, []);
}
function X() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var _ = "Dialog", [re] = Ie(_), [Ye, E] = re(_), se = (e) => {
  const {
    __scopeDialog: t,
    children: o,
    open: r,
    defaultOpen: n,
    onOpenChange: s,
    modal: c = !0
  } = e, i = g(null), d = g(null), [a, l] = Te({
    prop: r,
    defaultProp: n ?? !1,
    onChange: s,
    caller: _
  });
  return /* @__PURE__ */ u.jsx(
    Ye,
    {
      scope: t,
      triggerRef: i,
      contentRef: d,
      contentId: F(),
      titleId: F(),
      descriptionId: F(),
      open: a,
      onOpenChange: l,
      onOpenToggle: H(() => l((D) => !D), [l]),
      modal: c,
      children: o
    }
  );
};
se.displayName = _;
var ae = "DialogTrigger", ie = p(
  (e, t) => {
    const { __scopeDialog: o, ...r } = e, n = E(ae, o), s = P(t, n.triggerRef);
    return /* @__PURE__ */ u.jsx(
      N.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": n.open,
        "aria-controls": n.contentId,
        "data-state": k(n.open),
        ...r,
        ref: s,
        onClick: y(e.onClick, n.onOpenToggle)
      }
    );
  }
);
ie.displayName = ae;
var U = "DialogPortal", [Qe, ce] = re(U, {
  forceMount: void 0
}), ue = (e) => {
  const { __scopeDialog: t, forceMount: o, children: r, container: n } = e, s = E(U, t);
  return /* @__PURE__ */ u.jsx(Qe, { scope: t, forceMount: o, children: J.map(r, (c) => /* @__PURE__ */ u.jsx(I, { present: o || s.open, children: /* @__PURE__ */ u.jsx(_e, { asChild: !0, container: n, children: c }) })) });
};
ue.displayName = U;
var T = "DialogOverlay", le = p(
  (e, t) => {
    const o = ce(T, e.__scopeDialog), { forceMount: r = o.forceMount, ...n } = e, s = E(T, e.__scopeDialog);
    return s.modal ? /* @__PURE__ */ u.jsx(I, { present: r || s.open, children: /* @__PURE__ */ u.jsx(Xe, { ...n, ref: t }) }) : null;
  }
);
le.displayName = T;
var Ke = Se("DialogOverlay.RemoveScroll"), Xe = p(
  (e, t) => {
    const { __scopeDialog: o, ...r } = e, n = E(T, o);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ u.jsx(Me, { as: Ke, allowPinchZoom: !0, shards: [n.contentRef], children: /* @__PURE__ */ u.jsx(
        N.div,
        {
          "data-state": k(n.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), C = "DialogContent", de = p(
  (e, t) => {
    const o = ce(C, e.__scopeDialog), { forceMount: r = o.forceMount, ...n } = e, s = E(C, e.__scopeDialog);
    return /* @__PURE__ */ u.jsx(I, { present: r || s.open, children: s.modal ? /* @__PURE__ */ u.jsx(Ze, { ...n, ref: t }) : /* @__PURE__ */ u.jsx(Je, { ...n, ref: t }) });
  }
);
de.displayName = C;
var Ze = p(
  (e, t) => {
    const o = E(C, e.__scopeDialog), r = g(null), n = P(t, o.contentRef, r);
    return v(() => {
      const s = r.current;
      if (s) return Re(s);
    }, []), /* @__PURE__ */ u.jsx(
      fe,
      {
        ...e,
        ref: n,
        trapFocus: o.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: y(e.onCloseAutoFocus, (s) => {
          var c;
          s.preventDefault(), (c = o.triggerRef.current) == null || c.focus();
        }),
        onPointerDownOutside: y(e.onPointerDownOutside, (s) => {
          const c = s.detail.originalEvent, i = c.button === 0 && c.ctrlKey === !0;
          (c.button === 2 || i) && s.preventDefault();
        }),
        onFocusOutside: y(
          e.onFocusOutside,
          (s) => s.preventDefault()
        )
      }
    );
  }
), Je = p(
  (e, t) => {
    const o = E(C, e.__scopeDialog), r = g(!1), n = g(!1);
    return /* @__PURE__ */ u.jsx(
      fe,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (s) => {
          var c, i;
          (c = e.onCloseAutoFocus) == null || c.call(e, s), s.defaultPrevented || (r.current || (i = o.triggerRef.current) == null || i.focus(), s.preventDefault()), r.current = !1, n.current = !1;
        },
        onInteractOutside: (s) => {
          var d, a;
          (d = e.onInteractOutside) == null || d.call(e, s), s.defaultPrevented || (r.current = !0, s.detail.originalEvent.type === "pointerdown" && (n.current = !0));
          const c = s.target;
          ((a = o.triggerRef.current) == null ? void 0 : a.contains(c)) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && n.current && s.preventDefault();
        }
      }
    );
  }
), fe = p(
  (e, t) => {
    const { __scopeDialog: o, trapFocus: r, onOpenAutoFocus: n, onCloseAutoFocus: s, ...c } = e, i = E(C, o), d = g(null), a = P(t, d);
    return Ve(), /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx(
        Le,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: n,
          onUnmountAutoFocus: s,
          children: /* @__PURE__ */ u.jsx(
            ne,
            {
              role: "dialog",
              id: i.contentId,
              "aria-describedby": i.descriptionId,
              "aria-labelledby": i.titleId,
              "data-state": k(i.open),
              ...c,
              ref: a,
              onDismiss: () => i.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
        /* @__PURE__ */ u.jsx(He, { titleId: i.titleId }),
        /* @__PURE__ */ u.jsx(tt, { contentRef: d, descriptionId: i.descriptionId })
      ] })
    ] });
  }
), B = "DialogTitle", ge = p(
  (e, t) => {
    const { __scopeDialog: o, ...r } = e, n = E(B, o);
    return /* @__PURE__ */ u.jsx(N.h2, { id: n.titleId, ...r, ref: t });
  }
);
ge.displayName = B;
var me = "DialogDescription", pe = p(
  (e, t) => {
    const { __scopeDialog: o, ...r } = e, n = E(me, o);
    return /* @__PURE__ */ u.jsx(N.p, { id: n.descriptionId, ...r, ref: t });
  }
);
pe.displayName = me;
var ve = "DialogClose", Ee = p(
  (e, t) => {
    const { __scopeDialog: o, ...r } = e, n = E(ve, o);
    return /* @__PURE__ */ u.jsx(
      N.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: y(e.onClick, () => n.onOpenChange(!1))
      }
    );
  }
);
Ee.displayName = ve;
function k(e) {
  return e ? "open" : "closed";
}
var De = "DialogTitleWarning", [rt, he] = Fe(De, {
  contentName: C,
  titleName: B,
  docsSlug: "dialog"
}), He = ({ titleId: e }) => {
  const t = he(De), o = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return v(() => {
    e && (document.getElementById(e) || console.error(o));
  }, [o, e]), null;
}, et = "DialogDescriptionWarning", tt = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${he(et).contentName}}.`;
  return v(() => {
    var s;
    const n = (s = e.current) == null ? void 0 : s.getAttribute("aria-describedby");
    t && n && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, st = se, at = ie, it = ue, ct = le, ut = de, lt = ge, dt = pe, ft = Ee;
const gt = (e) => !e || e.length === 0 ? V : x.filter((t) => e.includes(t.value)).reduce((t, o) => t | o.bit, 0) || V, mt = (e) => {
  const t = [];
  return e & L.PUBLIC && t.push(x[0].value), e & L.FREE && t.push(x[1].value), e & L.PAID && t.push(x[2].value), t.join(",");
};
export {
  ut as C,
  dt as D,
  ct as O,
  it as P,
  st as R,
  at as T,
  lt as a,
  gt as b,
  ft as c,
  mt as g
};
//# sourceMappingURL=audience-BjmWFjxw.mjs.map
