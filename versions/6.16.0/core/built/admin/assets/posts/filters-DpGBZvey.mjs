import { p as O, a as ie, o as T, j as n, u as $, q as V, b as F, Z as Dr, K as be, J as Ae, M as Ue, _ as $r, U as Lr, x as L, N as Ne, Q as Oe, $ as Mr, n as D, D as G, a0 as Vr, S as Wr } from "./index-DP6CzQAF.mjs";
import { h as Br, R as Hr, F as Ur, a as qr, b as Kr, O as Gr, c as Yr, u as Xr, P as Zr, C as pe, X as Jr } from "./dialog-B-8wib-u.mjs";
import { P as re, u as it, c as qe, a as le, b as Z, f as Qr, j as we, e as ct, k as en, d as Le, l as tn } from "./heading-CN611yBx.mjs";
import { S as rn, P as nn, L as rt, d as an } from "./search-C30RgjCY.mjs";
import { c as St, R as sn, A as At, P as on, u as ln, D as cn, C as un, a as dn, t as Tt, v as pn, w as mn, x as vn, y as fn, z as hn, B as gn, F as xn, G as bn, H as yn, I as wn, b as Cn, d as Pn, e as Nn, f as jn } from "./dropdown-menu-C1s2rpqw.mjs";
import { a as Se } from "./skeleton-COjEE1lX.mjs";
function En(e) {
  const r = O({ value: e, previous: e });
  return ie(() => (r.current.value !== e && (r.current.previous = r.current.value, r.current.value = e), r.current.previous), [e]);
}
var _n = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
}), Sn = "VisuallyHidden", Ot = T(
  (e, r) => /* @__PURE__ */ n.jsx(
    re.span,
    {
      ...e,
      ref: r,
      style: { ..._n, ...e.style }
    }
  )
);
Ot.displayName = Sn;
var An = Ot, Ke = "Popover", [kt] = qe(Ke, [
  St
]), ke = St(), [Tn, ve] = kt(Ke), It = (e) => {
  const {
    __scopePopover: r,
    children: t,
    open: s,
    defaultOpen: a,
    onOpenChange: o,
    modal: l = !1
  } = e, u = ke(r), d = O(null), [i, c] = $(!1), [x, f] = it({
    prop: s,
    defaultProp: a ?? !1,
    onChange: o,
    caller: Ke
  });
  return /* @__PURE__ */ n.jsx(sn, { ...u, children: /* @__PURE__ */ n.jsx(
    Tn,
    {
      scope: r,
      contentId: le(),
      triggerRef: d,
      open: x,
      onOpenChange: f,
      onOpenToggle: V(() => f((h) => !h), [f]),
      hasCustomAnchor: i,
      onCustomAnchorAdd: V(() => c(!0), []),
      onCustomAnchorRemove: V(() => c(!1), []),
      modal: l,
      children: t
    }
  ) });
};
It.displayName = Ke;
var Ft = "PopoverAnchor", On = T(
  (e, r) => {
    const { __scopePopover: t, ...s } = e, a = ve(Ft, t), o = ke(t), { onCustomAnchorAdd: l, onCustomAnchorRemove: u } = a;
    return F(() => (l(), () => u()), [l, u]), /* @__PURE__ */ n.jsx(At, { ...o, ...s, ref: r });
  }
);
On.displayName = Ft;
var Rt = "PopoverTrigger", zt = T(
  (e, r) => {
    const { __scopePopover: t, ...s } = e, a = ve(Rt, t), o = ke(t), l = Z(r, a.triggerRef), u = /* @__PURE__ */ n.jsx(
      re.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": a.open,
        "aria-controls": a.contentId,
        "data-state": Mt(a.open),
        ...s,
        ref: l,
        onClick: Se(e.onClick, a.onOpenToggle)
      }
    );
    return a.hasCustomAnchor ? u : /* @__PURE__ */ n.jsx(At, { asChild: !0, ...o, children: u });
  }
);
zt.displayName = Rt;
var kn = "PopoverPortal", [Fs, In] = kt(kn, {
  forceMount: void 0
}), Ce = "PopoverContent", Dt = T(
  (e, r) => {
    const t = In(Ce, e.__scopePopover), { forceMount: s = t.forceMount, ...a } = e, o = ve(Ce, e.__scopePopover);
    return /* @__PURE__ */ n.jsx(on, { present: s || o.open, children: o.modal ? /* @__PURE__ */ n.jsx(Rn, { ...a, ref: r }) : /* @__PURE__ */ n.jsx(zn, { ...a, ref: r }) });
  }
);
Dt.displayName = Ce;
var Fn = Qr("PopoverContent.RemoveScroll"), Rn = T(
  (e, r) => {
    const t = ve(Ce, e.__scopePopover), s = O(null), a = Z(r, s), o = O(!1);
    return F(() => {
      const l = s.current;
      if (l) return Br(l);
    }, []), /* @__PURE__ */ n.jsx(Hr, { as: Fn, allowPinchZoom: !0, children: /* @__PURE__ */ n.jsx(
      $t,
      {
        ...e,
        ref: a,
        trapFocus: t.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Se(e.onCloseAutoFocus, (l) => {
          var u;
          l.preventDefault(), o.current || (u = t.triggerRef.current) == null || u.focus();
        }),
        onPointerDownOutside: Se(
          e.onPointerDownOutside,
          (l) => {
            const u = l.detail.originalEvent, d = u.button === 0 && u.ctrlKey === !0, i = u.button === 2 || d;
            o.current = i;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: Se(
          e.onFocusOutside,
          (l) => l.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), zn = T(
  (e, r) => {
    const t = ve(Ce, e.__scopePopover), s = O(!1), a = O(!1);
    return /* @__PURE__ */ n.jsx(
      $t,
      {
        ...e,
        ref: r,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (o) => {
          var l, u;
          (l = e.onCloseAutoFocus) == null || l.call(e, o), o.defaultPrevented || (s.current || (u = t.triggerRef.current) == null || u.focus(), o.preventDefault()), s.current = !1, a.current = !1;
        },
        onInteractOutside: (o) => {
          var d, i;
          (d = e.onInteractOutside) == null || d.call(e, o), o.defaultPrevented || (s.current = !0, o.detail.originalEvent.type === "pointerdown" && (a.current = !0));
          const l = o.target;
          ((i = t.triggerRef.current) == null ? void 0 : i.contains(l)) && o.preventDefault(), o.detail.originalEvent.type === "focusin" && a.current && o.preventDefault();
        }
      }
    );
  }
), $t = T(
  (e, r) => {
    const {
      __scopePopover: t,
      trapFocus: s,
      onOpenAutoFocus: a,
      onCloseAutoFocus: o,
      disableOutsidePointerEvents: l,
      onEscapeKeyDown: u,
      onPointerDownOutside: d,
      onFocusOutside: i,
      onInteractOutside: c,
      ...x
    } = e, f = ve(Ce, t), h = ke(t);
    return ln(), /* @__PURE__ */ n.jsx(
      Ur,
      {
        asChild: !0,
        loop: !0,
        trapped: s,
        onMountAutoFocus: a,
        onUnmountAutoFocus: o,
        children: /* @__PURE__ */ n.jsx(
          cn,
          {
            asChild: !0,
            disableOutsidePointerEvents: l,
            onInteractOutside: c,
            onEscapeKeyDown: u,
            onPointerDownOutside: d,
            onFocusOutside: i,
            onDismiss: () => f.onOpenChange(!1),
            children: /* @__PURE__ */ n.jsx(
              un,
              {
                "data-state": Mt(f.open),
                role: "dialog",
                id: f.contentId,
                ...h,
                ...x,
                ref: r,
                style: {
                  ...x.style,
                  "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                }
              }
            )
          }
        )
      }
    );
  }
), Lt = "PopoverClose", Dn = T(
  (e, r) => {
    const { __scopePopover: t, ...s } = e, a = ve(Lt, t);
    return /* @__PURE__ */ n.jsx(
      re.button,
      {
        type: "button",
        ...s,
        ref: r,
        onClick: Se(e.onClick, () => a.onOpenChange(!1))
      }
    );
  }
);
Dn.displayName = Lt;
var $n = "PopoverArrow", Ln = T(
  (e, r) => {
    const { __scopePopover: t, ...s } = e, a = ke(t);
    return /* @__PURE__ */ n.jsx(dn, { ...a, ...s, ref: r });
  }
);
Ln.displayName = $n;
function Mt(e) {
  return e ? "open" : "closed";
}
var Mn = It, Vn = zt, Vt = Dt, wt = 1, Wn = 0.9, Bn = 0.8, Hn = 0.17, Qe = 0.1, et = 0.999, Un = 0.9999, qn = 0.99, Kn = /[\\\/_+.#"@\[\(\{&]/, Gn = /[\\\/_+.#"@\[\(\{&]/g, Yn = /[\s-]/, Wt = /[\s-]/g;
function nt(e, r, t, s, a, o, l) {
  if (o === r.length) return a === e.length ? wt : qn;
  var u = `${a},${o}`;
  if (l[u] !== void 0) return l[u];
  for (var d = s.charAt(o), i = t.indexOf(d, a), c = 0, x, f, h, P; i >= 0; ) x = nt(e, r, t, s, i + 1, o + 1, l), x > c && (i === a ? x *= wt : Kn.test(e.charAt(i - 1)) ? (x *= Bn, h = e.slice(a, i - 1).match(Gn), h && a > 0 && (x *= Math.pow(et, h.length))) : Yn.test(e.charAt(i - 1)) ? (x *= Wn, P = e.slice(a, i - 1).match(Wt), P && a > 0 && (x *= Math.pow(et, P.length))) : (x *= Hn, a > 0 && (x *= Math.pow(et, i - a))), e.charAt(i) !== r.charAt(o) && (x *= Un)), (x < Qe && t.charAt(i - 1) === s.charAt(o + 1) || s.charAt(o + 1) === s.charAt(o) && t.charAt(i - 1) !== s.charAt(o)) && (f = nt(e, r, t, s, i + 1, o + 2, l), f * Qe > x && (x = f * Qe)), x > c && (c = x), i = t.indexOf(d, i + 1);
  return l[u] = c, c;
}
function Ct(e) {
  return e.toLowerCase().replace(Wt, " ");
}
function Xn(e, r, t) {
  return e = t && t.length > 0 ? `${e + " " + t.join(" ")}` : e, nt(e, r, Ct(e), Ct(r), 0, 0, {});
}
var Zn = Symbol.for("react.lazy"), Me = Dr[" use ".trim().toString()];
function Jn(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function Bt(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === Zn && "_payload" in e && Jn(e._payload);
}
// @__NO_SIDE_EFFECTS__
function Qn(e) {
  const r = /* @__PURE__ */ ea(e), t = T((s, a) => {
    let { children: o, ...l } = s;
    Bt(o) && typeof Me == "function" && (o = Me(o._payload));
    const u = be.toArray(o), d = u.find(ra);
    if (d) {
      const i = d.props.children, c = u.map((x) => x === d ? be.count(i) > 1 ? be.only(null) : Ae(i) ? i.props.children : null : x);
      return /* @__PURE__ */ n.jsx(r, { ...l, ref: a, children: Ae(i) ? Ue(i, void 0, c) : null });
    }
    return /* @__PURE__ */ n.jsx(r, { ...l, ref: a, children: o });
  });
  return t.displayName = `${e}.Slot`, t;
}
// @__NO_SIDE_EFFECTS__
function ea(e) {
  const r = T((t, s) => {
    let { children: a, ...o } = t;
    if (Bt(a) && typeof Me == "function" && (a = Me(a._payload)), Ae(a)) {
      const l = aa(a), u = na(o, a.props);
      return a.type !== $r && (u.ref = s ? we(s, l) : l), Ue(a, u);
    }
    return be.count(a) > 1 ? be.only(null) : null;
  });
  return r.displayName = `${e}.SlotClone`, r;
}
var ta = Symbol("radix.slottable");
function ra(e) {
  return Ae(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === ta;
}
function na(e, r) {
  const t = { ...r };
  for (const s in r) {
    const a = e[s], o = r[s];
    /^on[A-Z]/.test(s) ? a && o ? t[s] = (...u) => {
      const d = o(...u);
      return a(...u), d;
    } : a && (t[s] = a) : s === "style" ? t[s] = { ...a, ...o } : s === "className" && (t[s] = [a, o].filter(Boolean).join(" "));
  }
  return { ...e, ...t };
}
function aa(e) {
  var s, a;
  let r = (s = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : s.get, t = r && "isReactWarning" in r && r.isReactWarning;
  return t ? e.ref : (r = (a = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : a.get, t = r && "isReactWarning" in r && r.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
var sa = [
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
], ue = sa.reduce((e, r) => {
  const t = /* @__PURE__ */ Qn(`Primitive.${r}`), s = T((a, o) => {
    const { asChild: l, ...u } = a, d = l ? t : r;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ n.jsx(d, { ...u, ref: o });
  });
  return s.displayName = `Primitive.${r}`, { ...e, [r]: s };
}, {}), Ee = '[cmdk-group=""]', tt = '[cmdk-group-items=""]', oa = '[cmdk-group-heading=""]', Ht = '[cmdk-item=""]', Pt = `${Ht}:not([aria-disabled="true"])`, at = "cmdk-item-select", he = "data-value", la = (e, r, t) => Xn(e, r, t), Ut = Oe(void 0), Ie = () => Ne(Ut), qt = Oe(void 0), ut = () => Ne(qt), Kt = Oe(void 0), Gt = T((e, r) => {
  let t = ge(() => {
    var p, y;
    return { search: "", value: (y = (p = e.value) != null ? p : e.defaultValue) != null ? y : "", selectedItemId: void 0, filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), s = ge(() => /* @__PURE__ */ new Set()), a = ge(() => /* @__PURE__ */ new Map()), o = ge(() => /* @__PURE__ */ new Map()), l = ge(() => /* @__PURE__ */ new Set()), u = Yt(e), { label: d, children: i, value: c, onValueChange: x, filter: f, shouldFilter: h, loop: P, disablePointerSelection: m = !1, vimBindings: g = !0, ...b } = e, A = le(), R = le(), v = le(), S = O(null), _ = xa();
  me(() => {
    if (c !== void 0) {
      let p = c.trim();
      t.current.value = p, E.emit();
    }
  }, [c]), me(() => {
    _(6, U);
  }, []);
  let E = ie(() => ({ subscribe: (p) => (l.current.add(p), () => l.current.delete(p)), snapshot: () => t.current, setState: (p, y, j) => {
    var C, I, z, B;
    if (!Object.is(t.current[p], y)) {
      if (t.current[p] = y, p === "search") J(), H(), _(1, K);
      else if (p === "value") {
        if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
          let W = document.getElementById(v);
          W ? W.focus() : (C = document.getElementById(A)) == null || C.focus();
        }
        if (_(7, () => {
          var W;
          t.current.selectedItemId = (W = Y()) == null ? void 0 : W.id, E.emit();
        }), j || _(5, U), ((I = u.current) == null ? void 0 : I.value) !== void 0) {
          let W = y ?? "";
          (B = (z = u.current).onValueChange) == null || B.call(z, W);
          return;
        }
      }
      E.emit();
    }
  }, emit: () => {
    l.current.forEach((p) => p());
  } }), []), M = ie(() => ({ value: (p, y, j) => {
    var C;
    y !== ((C = o.current.get(p)) == null ? void 0 : C.value) && (o.current.set(p, { value: y, keywords: j }), t.current.filtered.items.set(p, ne(y, j)), _(2, () => {
      H(), E.emit();
    }));
  }, item: (p, y) => (s.current.add(p), y && (a.current.has(y) ? a.current.get(y).add(p) : a.current.set(y, /* @__PURE__ */ new Set([p]))), _(3, () => {
    J(), H(), t.current.value || K(), E.emit();
  }), () => {
    o.current.delete(p), s.current.delete(p), t.current.filtered.items.delete(p);
    let j = Y();
    _(4, () => {
      J(), (j == null ? void 0 : j.getAttribute("id")) === p && K(), E.emit();
    });
  }), group: (p) => (a.current.has(p) || a.current.set(p, /* @__PURE__ */ new Set()), () => {
    o.current.delete(p), a.current.delete(p);
  }), filter: () => u.current.shouldFilter, label: d || e["aria-label"], getDisablePointerSelection: () => u.current.disablePointerSelection, listId: A, inputId: v, labelId: R, listInnerRef: S }), []);
  function ne(p, y) {
    var j, C;
    let I = (C = (j = u.current) == null ? void 0 : j.filter) != null ? C : la;
    return p ? I(p, t.current.search, y) : 0;
  }
  function H() {
    if (!t.current.search || u.current.shouldFilter === !1) return;
    let p = t.current.filtered.items, y = [];
    t.current.filtered.groups.forEach((C) => {
      let I = a.current.get(C), z = 0;
      I.forEach((B) => {
        let W = p.get(B);
        z = Math.max(W, z);
      }), y.push([C, z]);
    });
    let j = S.current;
    Q().sort((C, I) => {
      var z, B;
      let W = C.getAttribute("id"), de = I.getAttribute("id");
      return ((z = p.get(de)) != null ? z : 0) - ((B = p.get(W)) != null ? B : 0);
    }).forEach((C) => {
      let I = C.closest(tt);
      I ? I.appendChild(C.parentElement === I ? C : C.closest(`${tt} > *`)) : j.appendChild(C.parentElement === j ? C : C.closest(`${tt} > *`));
    }), y.sort((C, I) => I[1] - C[1]).forEach((C) => {
      var I;
      let z = (I = S.current) == null ? void 0 : I.querySelector(`${Ee}[${he}="${encodeURIComponent(C[0])}"]`);
      z == null || z.parentElement.appendChild(z);
    });
  }
  function K() {
    let p = Q().find((j) => j.getAttribute("aria-disabled") !== "true"), y = p == null ? void 0 : p.getAttribute(he);
    E.setState("value", y || void 0);
  }
  function J() {
    var p, y, j, C;
    if (!t.current.search || u.current.shouldFilter === !1) {
      t.current.filtered.count = s.current.size;
      return;
    }
    t.current.filtered.groups = /* @__PURE__ */ new Set();
    let I = 0;
    for (let z of s.current) {
      let B = (y = (p = o.current.get(z)) == null ? void 0 : p.value) != null ? y : "", W = (C = (j = o.current.get(z)) == null ? void 0 : j.keywords) != null ? C : [], de = ne(B, W);
      t.current.filtered.items.set(z, de), de > 0 && I++;
    }
    for (let [z, B] of a.current) for (let W of B) if (t.current.filtered.items.get(W) > 0) {
      t.current.filtered.groups.add(z);
      break;
    }
    t.current.filtered.count = I;
  }
  function U() {
    var p, y, j;
    let C = Y();
    C && (((p = C.parentElement) == null ? void 0 : p.firstChild) === C && ((j = (y = C.closest(Ee)) == null ? void 0 : y.querySelector(oa)) == null || j.scrollIntoView({ block: "nearest" })), C.scrollIntoView({ block: "nearest" }));
  }
  function Y() {
    var p;
    return (p = S.current) == null ? void 0 : p.querySelector(`${Ht}[aria-selected="true"]`);
  }
  function Q() {
    var p;
    return Array.from(((p = S.current) == null ? void 0 : p.querySelectorAll(Pt)) || []);
  }
  function ae(p) {
    let y = Q()[p];
    y && E.setState("value", y.getAttribute(he));
  }
  function ee(p) {
    var y;
    let j = Y(), C = Q(), I = C.findIndex((B) => B === j), z = C[I + p];
    (y = u.current) != null && y.loop && (z = I + p < 0 ? C[C.length - 1] : I + p === C.length ? C[0] : C[I + p]), z && E.setState("value", z.getAttribute(he));
  }
  function X(p) {
    let y = Y(), j = y == null ? void 0 : y.closest(Ee), C;
    for (; j && !C; ) j = p > 0 ? ha(j, Ee) : ga(j, Ee), C = j == null ? void 0 : j.querySelector(Pt);
    C ? E.setState("value", C.getAttribute(he)) : ee(p);
  }
  let N = () => ae(Q().length - 1), w = (p) => {
    p.preventDefault(), p.metaKey ? N() : p.altKey ? X(1) : ee(1);
  }, k = (p) => {
    p.preventDefault(), p.metaKey ? ae(0) : p.altKey ? X(-1) : ee(-1);
  };
  return L(ue.div, { ref: r, tabIndex: -1, ...b, "cmdk-root": "", onKeyDown: (p) => {
    var y;
    (y = b.onKeyDown) == null || y.call(b, p);
    let j = p.nativeEvent.isComposing || p.keyCode === 229;
    if (!(p.defaultPrevented || j)) switch (p.key) {
      case "n":
      case "j": {
        g && p.ctrlKey && w(p);
        break;
      }
      case "ArrowDown": {
        w(p);
        break;
      }
      case "p":
      case "k": {
        g && p.ctrlKey && k(p);
        break;
      }
      case "ArrowUp": {
        k(p);
        break;
      }
      case "Home": {
        p.preventDefault(), ae(0);
        break;
      }
      case "End": {
        p.preventDefault(), N();
        break;
      }
      case "Enter": {
        p.preventDefault();
        let C = Y();
        if (C) {
          let I = new Event(at);
          C.dispatchEvent(I);
        }
      }
    }
  } }, L("label", { "cmdk-label": "", htmlFor: M.inputId, id: M.labelId, style: ya }, d), Ge(e, (p) => L(qt.Provider, { value: E }, L(Ut.Provider, { value: M }, p))));
}), ia = T((e, r) => {
  var t, s;
  let a = le(), o = O(null), l = Ne(Kt), u = Ie(), d = Yt(e), i = (s = (t = d.current) == null ? void 0 : t.forceMount) != null ? s : l == null ? void 0 : l.forceMount;
  me(() => {
    if (!i) return u.item(a, l == null ? void 0 : l.id);
  }, [i]);
  let c = Xt(a, o, [e.value, e.children, o], e.keywords), x = ut(), f = ce((_) => _.value && _.value === c.current), h = ce((_) => i || u.filter() === !1 ? !0 : _.search ? _.filtered.items.get(a) > 0 : !0);
  F(() => {
    let _ = o.current;
    if (!(!_ || e.disabled)) return _.addEventListener(at, P), () => _.removeEventListener(at, P);
  }, [h, e.onSelect, e.disabled]);
  function P() {
    var _, E;
    m(), (E = (_ = d.current).onSelect) == null || E.call(_, c.current);
  }
  function m() {
    x.setState("value", c.current, !0);
  }
  if (!h) return null;
  let { disabled: g, value: b, onSelect: A, forceMount: R, keywords: v, ...S } = e;
  return L(ue.div, { ref: we(o, r), ...S, id: a, "cmdk-item": "", role: "option", "aria-disabled": !!g, "aria-selected": !!f, "data-disabled": !!g, "data-selected": !!f, onPointerMove: g || u.getDisablePointerSelection() ? void 0 : m, onClick: g ? void 0 : P }, e.children);
}), ca = T((e, r) => {
  let { heading: t, children: s, forceMount: a, ...o } = e, l = le(), u = O(null), d = O(null), i = le(), c = Ie(), x = ce((h) => a || c.filter() === !1 ? !0 : h.search ? h.filtered.groups.has(l) : !0);
  me(() => c.group(l), []), Xt(l, u, [e.value, e.heading, d]);
  let f = ie(() => ({ id: l, forceMount: a }), [a]);
  return L(ue.div, { ref: we(u, r), ...o, "cmdk-group": "", role: "presentation", hidden: x ? void 0 : !0 }, t && L("div", { ref: d, "cmdk-group-heading": "", "aria-hidden": !0, id: i }, t), Ge(e, (h) => L("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": t ? i : void 0 }, L(Kt.Provider, { value: f }, h))));
}), ua = T((e, r) => {
  let { alwaysRender: t, ...s } = e, a = O(null), o = ce((l) => !l.search);
  return !t && !o ? null : L(ue.div, { ref: we(a, r), ...s, "cmdk-separator": "", role: "separator" });
}), da = T((e, r) => {
  let { onValueChange: t, ...s } = e, a = e.value != null, o = ut(), l = ce((i) => i.search), u = ce((i) => i.selectedItemId), d = Ie();
  return F(() => {
    e.value != null && o.setState("search", e.value);
  }, [e.value]), L(ue.input, { ref: r, ...s, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": d.listId, "aria-labelledby": d.labelId, "aria-activedescendant": u, id: d.inputId, type: "text", value: a ? e.value : l, onChange: (i) => {
    a || o.setState("search", i.target.value), t == null || t(i.target.value);
  } });
}), pa = T((e, r) => {
  let { children: t, label: s = "Suggestions", ...a } = e, o = O(null), l = O(null), u = ce((i) => i.selectedItemId), d = Ie();
  return F(() => {
    if (l.current && o.current) {
      let i = l.current, c = o.current, x, f = new ResizeObserver(() => {
        x = requestAnimationFrame(() => {
          let h = i.offsetHeight;
          c.style.setProperty("--cmdk-list-height", h.toFixed(1) + "px");
        });
      });
      return f.observe(i), () => {
        cancelAnimationFrame(x), f.unobserve(i);
      };
    }
  }, []), L(ue.div, { ref: we(o, r), ...a, "cmdk-list": "", role: "listbox", tabIndex: -1, "aria-activedescendant": u, "aria-label": s, id: d.listId }, Ge(e, (i) => L("div", { ref: we(l, d.listInnerRef), "cmdk-list-sizer": "" }, i)));
}), ma = T((e, r) => {
  let { open: t, onOpenChange: s, overlayClassName: a, contentClassName: o, container: l, ...u } = e;
  return L(qr, { open: t, onOpenChange: s }, L(Kr, { container: l }, L(Gr, { "cmdk-overlay": "", className: a }), L(Yr, { "aria-label": e.label, "cmdk-dialog": "", className: o }, L(Gt, { ref: r, ...u }))));
}), va = T((e, r) => ce((t) => t.filtered.count === 0) ? L(ue.div, { ref: r, ...e, "cmdk-empty": "", role: "presentation" }) : null), fa = T((e, r) => {
  let { progress: t, children: s, label: a = "Loading...", ...o } = e;
  return L(ue.div, { ref: r, ...o, "cmdk-loading": "", role: "progressbar", "aria-valuenow": t, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": a }, Ge(e, (l) => L("div", { "aria-hidden": !0 }, l)));
}), fe = Object.assign(Gt, { List: pa, Item: ia, Input: da, Group: ca, Separator: ua, Dialog: ma, Empty: va, Loading: fa });
function ha(e, r) {
  let t = e.nextElementSibling;
  for (; t; ) {
    if (t.matches(r)) return t;
    t = t.nextElementSibling;
  }
}
function ga(e, r) {
  let t = e.previousElementSibling;
  for (; t; ) {
    if (t.matches(r)) return t;
    t = t.previousElementSibling;
  }
}
function Yt(e) {
  let r = O(e);
  return me(() => {
    r.current = e;
  }), r;
}
var me = typeof window > "u" ? F : Lr;
function ge(e) {
  let r = O();
  return r.current === void 0 && (r.current = e()), r;
}
function ce(e) {
  let r = ut(), t = () => e(r.snapshot());
  return Mr(r.subscribe, t, t);
}
function Xt(e, r, t, s = []) {
  let a = O(), o = Ie();
  return me(() => {
    var l;
    let u = (() => {
      var i;
      for (let c of t) {
        if (typeof c == "string") return c.trim();
        if (typeof c == "object" && "current" in c) return c.current ? (i = c.current.textContent) == null ? void 0 : i.trim() : a.current;
      }
    })(), d = s.map((i) => i.trim());
    o.value(e, u, d), (l = r.current) == null || l.setAttribute(he, u), a.current = u;
  }), a;
}
var xa = () => {
  let [e, r] = $(), t = ge(() => /* @__PURE__ */ new Map());
  return me(() => {
    t.current.forEach((s) => s()), t.current = /* @__PURE__ */ new Map();
  }, [e]), (s, a) => {
    t.current.set(s, a), r({});
  };
};
function ba(e) {
  let r = e.type;
  return typeof r == "function" ? r(e.props) : "render" in r ? r.render(e.props) : e;
}
function Ge({ asChild: e, children: r }, t) {
  return e && Ae(r) ? Ue(ba(r), { ref: r.ref }, t(r.props.children)) : t(r);
}
var ya = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
function Ve({ className: e, ...r }) {
  return /* @__PURE__ */ n.jsx(
    fe,
    {
      className: D(
        "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
        e
      ),
      ...r
    }
  );
}
function We({ className: e, ...r }) {
  return /* @__PURE__ */ n.jsxs("div", { className: "flex items-center border-b border-border px-3", "cmdk-input-wrapper": "", "data-slot": "command-input", children: [
    /* @__PURE__ */ n.jsx(rn, { className: "me-2 size-4 shrink-0 opacity-50" }),
    /* @__PURE__ */ n.jsx(
      fe.Input,
      {
        className: D(
          "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-hidden text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          e
        ),
        ...r
      }
    )
  ] });
}
function Be({ className: e, ...r }) {
  return /* @__PURE__ */ n.jsx(
    fe.List,
    {
      className: D("max-h-[300px] p-1 overflow-y-auto overflow-x-hidden", e),
      "data-slot": "command-list",
      ...r
    }
  );
}
function He({ ...e }) {
  return /* @__PURE__ */ n.jsx(fe.Empty, { className: "py-6 text-center text-sm", "data-slot": "command-empty", ...e });
}
function oe({ className: e, ...r }) {
  return /* @__PURE__ */ n.jsx(
    fe.Group,
    {
      className: D(
        "overflow-hidden p-1.5 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
        e
      ),
      "data-slot": "command-group",
      ...r
    }
  );
}
function ye({ className: e, ...r }) {
  return /* @__PURE__ */ n.jsx(
    fe.Separator,
    {
      className: D("-mx-1.5 h-px bg-border", e),
      "data-slot": "command-separator",
      ...r
    }
  );
}
function se({ className: e, ...r }) {
  return /* @__PURE__ */ n.jsx(
    fe.Item,
    {
      className: D(
        "relative flex text-foreground cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
        "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:stroke-[1.5px]",
        e
      ),
      "data-slot": "command-item",
      ...r
    }
  );
}
const dt = Mn, pt = Vn, Ye = T(({ className: e, align: r = "center", sideOffset: t = 4, ...s }, a) => /* @__PURE__ */ n.jsx(
  Vt,
  {
    ref: a,
    align: r,
    className: D(
      "z-50 rounded-md bg-white dark:bg-gray-950 p-5 text-popover-foreground shadow-md border outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    sideOffset: t,
    ...s
  }
));
Ye.displayName = Vt.displayName;
function te(e, r, { checkForDefaultPrevented: t = !0 } = {}) {
  return function(a) {
    if (e == null || e(a), t === !1 || !a.defaultPrevented)
      return r == null ? void 0 : r(a);
  };
}
var Xe = "Switch", [wa] = qe(Xe), [Ca, Pa] = wa(Xe), Zt = T(
  (e, r) => {
    const {
      __scopeSwitch: t,
      name: s,
      checked: a,
      defaultChecked: o,
      required: l,
      disabled: u,
      value: d = "on",
      onCheckedChange: i,
      form: c,
      ...x
    } = e, [f, h] = $(null), P = Z(r, (R) => h(R)), m = O(!1), g = f ? c || !!f.closest("form") : !0, [b, A] = it({
      prop: a,
      defaultProp: o ?? !1,
      onChange: i,
      caller: Xe
    });
    return /* @__PURE__ */ n.jsxs(Ca, { scope: t, checked: b, disabled: u, children: [
      /* @__PURE__ */ n.jsx(
        re.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": b,
          "aria-required": l,
          "data-state": tr(b),
          "data-disabled": u ? "" : void 0,
          disabled: u,
          value: d,
          ...x,
          ref: P,
          onClick: te(e.onClick, (R) => {
            A((v) => !v), g && (m.current = R.isPropagationStopped(), m.current || R.stopPropagation());
          })
        }
      ),
      g && /* @__PURE__ */ n.jsx(
        er,
        {
          control: f,
          bubbles: !m.current,
          name: s,
          value: d,
          checked: b,
          required: l,
          disabled: u,
          form: c,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Zt.displayName = Xe;
var Jt = "SwitchThumb", Qt = T(
  (e, r) => {
    const { __scopeSwitch: t, ...s } = e, a = Pa(Jt, t);
    return /* @__PURE__ */ n.jsx(
      re.span,
      {
        "data-state": tr(a.checked),
        "data-disabled": a.disabled ? "" : void 0,
        ...s,
        ref: r
      }
    );
  }
);
Qt.displayName = Jt;
var Na = "SwitchBubbleInput", er = T(
  ({
    __scopeSwitch: e,
    control: r,
    checked: t,
    bubbles: s = !0,
    ...a
  }, o) => {
    const l = O(null), u = Z(l, o), d = En(t), i = Tt(r);
    return F(() => {
      const c = l.current;
      if (!c) return;
      const x = window.HTMLInputElement.prototype, h = Object.getOwnPropertyDescriptor(
        x,
        "checked"
      ).set;
      if (d !== t && h) {
        const P = new Event("click", { bubbles: s });
        h.call(c, t), c.dispatchEvent(P);
      }
    }, [d, t, s]), /* @__PURE__ */ n.jsx(
      "input",
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: t,
        ...a,
        tabIndex: -1,
        ref: u,
        style: {
          ...a.style,
          ...i,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
er.displayName = Na;
function tr(e) {
  return e ? "checked" : "unchecked";
}
var rr = Zt, ja = Qt;
const Ea = G(
  "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
  {
    variants: {
      size: {
        default: "h-5 w-9",
        sm: "h-4 w-7"
      }
    },
    defaultVariants: {
      size: "default"
    }
  }
), _a = G(
  "pointer-events-none block rounded-full bg-background ring-0 transition-transform [filter:drop-shadow(0_1px_2px_rgba(0,0,0,0.07))] data-[state=unchecked]:translate-x-0",
  {
    variants: {
      size: {
        default: "size-4 data-[state=checked]:translate-x-4",
        sm: "size-3 data-[state=checked]:translate-x-3"
      }
    },
    defaultVariants: {
      size: "default"
    }
  }
), nr = T(({ className: e, size: r, ...t }, s) => /* @__PURE__ */ n.jsx(
  rr,
  {
    className: D(Ea({ size: r, className: e })),
    ...t,
    ref: s,
    children: /* @__PURE__ */ n.jsx(
      ja,
      {
        className: D(_a({ size: r }))
      }
    )
  }
));
nr.displayName = rr.displayName;
var Sa = "DismissableLayer", st = "dismissableLayer.update", Aa = "dismissableLayer.pointerDownOutside", Ta = "dismissableLayer.focusOutside", Nt, ar = Oe({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), sr = T(
  (e, r) => {
    const {
      disableOutsidePointerEvents: t = !1,
      onEscapeKeyDown: s,
      onPointerDownOutside: a,
      onFocusOutside: o,
      onInteractOutside: l,
      onDismiss: u,
      ...d
    } = e, i = Ne(ar), [c, x] = $(null), f = (c == null ? void 0 : c.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, h] = $({}), P = Z(r, (E) => x(E)), m = Array.from(i.layers), [g] = [...i.layersWithOutsidePointerEventsDisabled].slice(-1), b = m.indexOf(g), A = c ? m.indexOf(c) : -1, R = i.layersWithOutsidePointerEventsDisabled.size > 0, v = A >= b, S = Ia((E) => {
      const M = E.target, ne = [...i.branches].some((H) => H.contains(M));
      !v || ne || (a == null || a(E), l == null || l(E), E.defaultPrevented || u == null || u());
    }, f), _ = Fa((E) => {
      const M = E.target;
      [...i.branches].some((H) => H.contains(M)) || (o == null || o(E), l == null || l(E), E.defaultPrevented || u == null || u());
    }, f);
    return Xr((E) => {
      A === i.layers.size - 1 && (s == null || s(E), !E.defaultPrevented && u && (E.preventDefault(), u()));
    }, f), F(() => {
      if (c)
        return t && (i.layersWithOutsidePointerEventsDisabled.size === 0 && (Nt = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), i.layersWithOutsidePointerEventsDisabled.add(c)), i.layers.add(c), jt(), () => {
          t && i.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = Nt);
        };
    }, [c, f, t, i]), F(() => () => {
      c && (i.layers.delete(c), i.layersWithOutsidePointerEventsDisabled.delete(c), jt());
    }, [c, i]), F(() => {
      const E = () => h({});
      return document.addEventListener(st, E), () => document.removeEventListener(st, E);
    }, []), /* @__PURE__ */ n.jsx(
      re.div,
      {
        ...d,
        ref: P,
        style: {
          pointerEvents: R ? v ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: te(e.onFocusCapture, _.onFocusCapture),
        onBlurCapture: te(e.onBlurCapture, _.onBlurCapture),
        onPointerDownCapture: te(
          e.onPointerDownCapture,
          S.onPointerDownCapture
        )
      }
    );
  }
);
sr.displayName = Sa;
var Oa = "DismissableLayerBranch", ka = T((e, r) => {
  const t = Ne(ar), s = O(null), a = Z(r, s);
  return F(() => {
    const o = s.current;
    if (o)
      return t.branches.add(o), () => {
        t.branches.delete(o);
      };
  }, [t.branches]), /* @__PURE__ */ n.jsx(re.div, { ...e, ref: a });
});
ka.displayName = Oa;
function Ia(e, r = globalThis == null ? void 0 : globalThis.document) {
  const t = ct(e), s = O(!1), a = O(() => {
  });
  return F(() => {
    const o = (u) => {
      if (u.target && !s.current) {
        let d = function() {
          or(
            Aa,
            t,
            i,
            { discrete: !0 }
          );
        };
        const i = { originalEvent: u };
        u.pointerType === "touch" ? (r.removeEventListener("click", a.current), a.current = d, r.addEventListener("click", a.current, { once: !0 })) : d();
      } else
        r.removeEventListener("click", a.current);
      s.current = !1;
    }, l = window.setTimeout(() => {
      r.addEventListener("pointerdown", o);
    }, 0);
    return () => {
      window.clearTimeout(l), r.removeEventListener("pointerdown", o), r.removeEventListener("click", a.current);
    };
  }, [r, t]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => s.current = !0
  };
}
function Fa(e, r = globalThis == null ? void 0 : globalThis.document) {
  const t = ct(e), s = O(!1);
  return F(() => {
    const a = (o) => {
      o.target && !s.current && or(Ta, t, { originalEvent: o }, {
        discrete: !1
      });
    };
    return r.addEventListener("focusin", a), () => r.removeEventListener("focusin", a);
  }, [r, t]), {
    onFocusCapture: () => s.current = !0,
    onBlurCapture: () => s.current = !1
  };
}
function jt() {
  const e = new CustomEvent(st);
  document.dispatchEvent(e);
}
function or(e, r, t, { discrete: s }) {
  const a = t.originalEvent.target, o = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: t });
  r && a.addEventListener(e, r, { once: !0 }), s ? en(a, o) : a.dispatchEvent(o);
}
var mt = "Popper", [lr, ir] = qe(mt), [Ra, cr] = lr(mt), ur = (e) => {
  const { __scopePopper: r, children: t } = e, [s, a] = $(null);
  return /* @__PURE__ */ n.jsx(Ra, { scope: r, anchor: s, onAnchorChange: a, children: t });
};
ur.displayName = mt;
var dr = "PopperAnchor", pr = T(
  (e, r) => {
    const { __scopePopper: t, virtualRef: s, ...a } = e, o = cr(dr, t), l = O(null), u = Z(r, l), d = O(null);
    return F(() => {
      const i = d.current;
      d.current = (s == null ? void 0 : s.current) || l.current, i !== d.current && o.onAnchorChange(d.current);
    }), s ? null : /* @__PURE__ */ n.jsx(re.div, { ...a, ref: u });
  }
);
pr.displayName = dr;
var vt = "PopperContent", [za, Da] = lr(vt), mr = T(
  (e, r) => {
    var z, B, W, de, xt, bt;
    const {
      __scopePopper: t,
      side: s = "bottom",
      sideOffset: a = 0,
      align: o = "center",
      alignOffset: l = 0,
      arrowPadding: u = 0,
      avoidCollisions: d = !0,
      collisionBoundary: i = [],
      collisionPadding: c = 0,
      sticky: x = "partial",
      hideWhenDetached: f = !1,
      updatePositionStrategy: h = "optimized",
      onPlaced: P,
      ...m
    } = e, g = cr(vt, t), [b, A] = $(null), R = Z(r, (je) => A(je)), [v, S] = $(null), _ = Tt(v), E = (_ == null ? void 0 : _.width) ?? 0, M = (_ == null ? void 0 : _.height) ?? 0, ne = s + (o !== "center" ? "-" + o : ""), H = typeof c == "number" ? c : { top: 0, right: 0, bottom: 0, left: 0, ...c }, K = Array.isArray(i) ? i : [i], J = K.length > 0, U = {
      padding: H,
      boundary: K.filter(La),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: J
    }, { refs: Y, floatingStyles: Q, placement: ae, isPositioned: ee, middlewareData: X } = pn({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: ne,
      whileElementsMounted: (...je) => bn(...je, {
        animationFrame: h === "always"
      }),
      elements: {
        reference: g.anchor
      },
      middleware: [
        mn({ mainAxis: a + M, alignmentAxis: l }),
        d && vn({
          mainAxis: !0,
          crossAxis: !1,
          limiter: x === "partial" ? yn() : void 0,
          ...U
        }),
        d && fn({ ...U }),
        hn({
          ...U,
          apply: ({ elements: je, rects: yt, availableWidth: Ir, availableHeight: Fr }) => {
            const { width: Rr, height: zr } = yt.reference, ze = je.floating.style;
            ze.setProperty("--radix-popper-available-width", `${Ir}px`), ze.setProperty("--radix-popper-available-height", `${Fr}px`), ze.setProperty("--radix-popper-anchor-width", `${Rr}px`), ze.setProperty("--radix-popper-anchor-height", `${zr}px`);
          }
        }),
        v && gn({ element: v, padding: u }),
        Ma({ arrowWidth: E, arrowHeight: M }),
        f && xn({ strategy: "referenceHidden", ...U })
      ]
    }), [N, w] = hr(ae), k = ct(P);
    Le(() => {
      ee && (k == null || k());
    }, [ee, k]);
    const p = (z = X.arrow) == null ? void 0 : z.x, y = (B = X.arrow) == null ? void 0 : B.y, j = ((W = X.arrow) == null ? void 0 : W.centerOffset) !== 0, [C, I] = $();
    return Le(() => {
      b && I(window.getComputedStyle(b).zIndex);
    }, [b]), /* @__PURE__ */ n.jsx(
      "div",
      {
        ref: Y.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...Q,
          transform: ee ? Q.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: C,
          "--radix-popper-transform-origin": [
            (de = X.transformOrigin) == null ? void 0 : de.x,
            (xt = X.transformOrigin) == null ? void 0 : xt.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((bt = X.hide) == null ? void 0 : bt.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ n.jsx(
          za,
          {
            scope: t,
            placedSide: N,
            onArrowChange: S,
            arrowX: p,
            arrowY: y,
            shouldHideArrow: j,
            children: /* @__PURE__ */ n.jsx(
              re.div,
              {
                "data-side": N,
                "data-align": w,
                ...m,
                ref: R,
                style: {
                  ...m.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: ee ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
mr.displayName = vt;
var vr = "PopperArrow", $a = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, fr = T(function(r, t) {
  const { __scopePopper: s, ...a } = r, o = Da(vr, s), l = $a[o.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ n.jsx(
      "span",
      {
        ref: o.onArrowChange,
        style: {
          position: "absolute",
          left: o.arrowX,
          top: o.arrowY,
          [l]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[o.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[o.placedSide],
          visibility: o.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ n.jsx(
          wn,
          {
            ...a,
            ref: t,
            style: {
              ...a.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
fr.displayName = vr;
function La(e) {
  return e !== null;
}
var Ma = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(r) {
    var g, b, A;
    const { placement: t, rects: s, middlewareData: a } = r, l = ((g = a.arrow) == null ? void 0 : g.centerOffset) !== 0, u = l ? 0 : e.arrowWidth, d = l ? 0 : e.arrowHeight, [i, c] = hr(t), x = { start: "0%", center: "50%", end: "100%" }[c], f = (((b = a.arrow) == null ? void 0 : b.x) ?? 0) + u / 2, h = (((A = a.arrow) == null ? void 0 : A.y) ?? 0) + d / 2;
    let P = "", m = "";
    return i === "bottom" ? (P = l ? x : `${f}px`, m = `${-d}px`) : i === "top" ? (P = l ? x : `${f}px`, m = `${s.floating.height + d}px`) : i === "right" ? (P = `${-d}px`, m = l ? x : `${h}px`) : i === "left" && (P = `${s.floating.width + d}px`, m = l ? x : `${h}px`), { data: { x: P, y: m } };
  }
});
function hr(e) {
  const [r, t = "center"] = e.split("-");
  return [r, t];
}
var Va = ur, Wa = pr, Ba = mr, Ha = fr;
function Ua(e, r) {
  return Vr((t, s) => r[t][s] ?? t, e);
}
var ft = (e) => {
  const { present: r, children: t } = e, s = qa(r), a = typeof t == "function" ? t({ present: s.isPresent }) : be.only(t), o = Z(s.ref, Ka(a));
  return typeof t == "function" || s.isPresent ? Ue(a, { ref: o }) : null;
};
ft.displayName = "Presence";
function qa(e) {
  const [r, t] = $(), s = O(null), a = O(e), o = O("none"), l = e ? "mounted" : "unmounted", [u, d] = Ua(l, {
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
  return F(() => {
    const i = De(s.current);
    o.current = u === "mounted" ? i : "none";
  }, [u]), Le(() => {
    const i = s.current, c = a.current;
    if (c !== e) {
      const f = o.current, h = De(i);
      e ? d("MOUNT") : h === "none" || (i == null ? void 0 : i.display) === "none" ? d("UNMOUNT") : d(c && f !== h ? "ANIMATION_OUT" : "UNMOUNT"), a.current = e;
    }
  }, [e, d]), Le(() => {
    if (r) {
      let i;
      const c = r.ownerDocument.defaultView ?? window, x = (h) => {
        const m = De(s.current).includes(CSS.escape(h.animationName));
        if (h.target === r && m && (d("ANIMATION_END"), !a.current)) {
          const g = r.style.animationFillMode;
          r.style.animationFillMode = "forwards", i = c.setTimeout(() => {
            r.style.animationFillMode === "forwards" && (r.style.animationFillMode = g);
          });
        }
      }, f = (h) => {
        h.target === r && (o.current = De(s.current));
      };
      return r.addEventListener("animationstart", f), r.addEventListener("animationcancel", x), r.addEventListener("animationend", x), () => {
        c.clearTimeout(i), r.removeEventListener("animationstart", f), r.removeEventListener("animationcancel", x), r.removeEventListener("animationend", x);
      };
    } else
      d("ANIMATION_END");
  }, [r, d]), {
    isPresent: ["mounted", "unmountSuspended"].includes(u),
    ref: V((i) => {
      s.current = i ? getComputedStyle(i) : null, t(i);
    }, [])
  };
}
function De(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Ka(e) {
  var s, a;
  let r = (s = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : s.get, t = r && "isReactWarning" in r && r.isReactWarning;
  return t ? e.ref : (r = (a = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : a.get, t = r && "isReactWarning" in r && r.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
var [Ze] = qe("Tooltip", [
  ir
]), Je = ir(), gr = "TooltipProvider", Ga = 700, ot = "tooltip.open", [Ya, ht] = Ze(gr), xr = (e) => {
  const {
    __scopeTooltip: r,
    delayDuration: t = Ga,
    skipDelayDuration: s = 300,
    disableHoverableContent: a = !1,
    children: o
  } = e, l = O(!0), u = O(!1), d = O(0);
  return F(() => {
    const i = d.current;
    return () => window.clearTimeout(i);
  }, []), /* @__PURE__ */ n.jsx(
    Ya,
    {
      scope: r,
      isOpenDelayedRef: l,
      delayDuration: t,
      onOpen: V(() => {
        window.clearTimeout(d.current), l.current = !1;
      }, []),
      onClose: V(() => {
        window.clearTimeout(d.current), d.current = window.setTimeout(
          () => l.current = !0,
          s
        );
      }, [s]),
      isPointerInTransitRef: u,
      onPointerInTransitChange: V((i) => {
        u.current = i;
      }, []),
      disableHoverableContent: a,
      children: o
    }
  );
};
xr.displayName = gr;
var Te = "Tooltip", [Xa, Fe] = Ze(Te), br = (e) => {
  const {
    __scopeTooltip: r,
    children: t,
    open: s,
    defaultOpen: a,
    onOpenChange: o,
    disableHoverableContent: l,
    delayDuration: u
  } = e, d = ht(Te, e.__scopeTooltip), i = Je(r), [c, x] = $(null), f = le(), h = O(0), P = l ?? d.disableHoverableContent, m = u ?? d.delayDuration, g = O(!1), [b, A] = it({
    prop: s,
    defaultProp: a ?? !1,
    onChange: (E) => {
      E ? (d.onOpen(), document.dispatchEvent(new CustomEvent(ot))) : d.onClose(), o == null || o(E);
    },
    caller: Te
  }), R = ie(() => b ? g.current ? "delayed-open" : "instant-open" : "closed", [b]), v = V(() => {
    window.clearTimeout(h.current), h.current = 0, g.current = !1, A(!0);
  }, [A]), S = V(() => {
    window.clearTimeout(h.current), h.current = 0, A(!1);
  }, [A]), _ = V(() => {
    window.clearTimeout(h.current), h.current = window.setTimeout(() => {
      g.current = !0, A(!0), h.current = 0;
    }, m);
  }, [m, A]);
  return F(() => () => {
    h.current && (window.clearTimeout(h.current), h.current = 0);
  }, []), /* @__PURE__ */ n.jsx(Va, { ...i, children: /* @__PURE__ */ n.jsx(
    Xa,
    {
      scope: r,
      contentId: f,
      open: b,
      stateAttribute: R,
      trigger: c,
      onTriggerChange: x,
      onTriggerEnter: V(() => {
        d.isOpenDelayedRef.current ? _() : v();
      }, [d.isOpenDelayedRef, _, v]),
      onTriggerLeave: V(() => {
        P ? S() : (window.clearTimeout(h.current), h.current = 0);
      }, [S, P]),
      onOpen: v,
      onClose: S,
      disableHoverableContent: P,
      children: t
    }
  ) });
};
br.displayName = Te;
var lt = "TooltipTrigger", yr = T(
  (e, r) => {
    const { __scopeTooltip: t, ...s } = e, a = Fe(lt, t), o = ht(lt, t), l = Je(t), u = O(null), d = Z(r, u, a.onTriggerChange), i = O(!1), c = O(!1), x = V(() => i.current = !1, []);
    return F(() => () => document.removeEventListener("pointerup", x), [x]), /* @__PURE__ */ n.jsx(Wa, { asChild: !0, ...l, children: /* @__PURE__ */ n.jsx(
      re.button,
      {
        "aria-describedby": a.open ? a.contentId : void 0,
        "data-state": a.stateAttribute,
        ...s,
        ref: d,
        onPointerMove: te(e.onPointerMove, (f) => {
          f.pointerType !== "touch" && !c.current && !o.isPointerInTransitRef.current && (a.onTriggerEnter(), c.current = !0);
        }),
        onPointerLeave: te(e.onPointerLeave, () => {
          a.onTriggerLeave(), c.current = !1;
        }),
        onPointerDown: te(e.onPointerDown, () => {
          a.open && a.onClose(), i.current = !0, document.addEventListener("pointerup", x, { once: !0 });
        }),
        onFocus: te(e.onFocus, () => {
          i.current || a.onOpen();
        }),
        onBlur: te(e.onBlur, a.onClose),
        onClick: te(e.onClick, a.onClose)
      }
    ) });
  }
);
yr.displayName = lt;
var gt = "TooltipPortal", [Za, Ja] = Ze(gt, {
  forceMount: void 0
}), wr = (e) => {
  const { __scopeTooltip: r, forceMount: t, children: s, container: a } = e, o = Fe(gt, r);
  return /* @__PURE__ */ n.jsx(Za, { scope: r, forceMount: t, children: /* @__PURE__ */ n.jsx(ft, { present: t || o.open, children: /* @__PURE__ */ n.jsx(Zr, { asChild: !0, container: a, children: s }) }) });
};
wr.displayName = gt;
var Pe = "TooltipContent", Cr = T(
  (e, r) => {
    const t = Ja(Pe, e.__scopeTooltip), { forceMount: s = t.forceMount, side: a = "top", ...o } = e, l = Fe(Pe, e.__scopeTooltip);
    return /* @__PURE__ */ n.jsx(ft, { present: s || l.open, children: l.disableHoverableContent ? /* @__PURE__ */ n.jsx(Pr, { side: a, ...o, ref: r }) : /* @__PURE__ */ n.jsx(Qa, { side: a, ...o, ref: r }) });
  }
), Qa = T((e, r) => {
  const t = Fe(Pe, e.__scopeTooltip), s = ht(Pe, e.__scopeTooltip), a = O(null), o = Z(r, a), [l, u] = $(null), { trigger: d, onClose: i } = t, c = a.current, { onPointerInTransitChange: x } = s, f = V(() => {
    u(null), x(!1);
  }, [x]), h = V(
    (P, m) => {
      const g = P.currentTarget, b = { x: P.clientX, y: P.clientY }, A = as(b, g.getBoundingClientRect()), R = ss(b, A), v = os(m.getBoundingClientRect()), S = is([...R, ...v]);
      u(S), x(!0);
    },
    [x]
  );
  return F(() => () => f(), [f]), F(() => {
    if (d && c) {
      const P = (g) => h(g, c), m = (g) => h(g, d);
      return d.addEventListener("pointerleave", P), c.addEventListener("pointerleave", m), () => {
        d.removeEventListener("pointerleave", P), c.removeEventListener("pointerleave", m);
      };
    }
  }, [d, c, h, f]), F(() => {
    if (l) {
      const P = (m) => {
        const g = m.target, b = { x: m.clientX, y: m.clientY }, A = (d == null ? void 0 : d.contains(g)) || (c == null ? void 0 : c.contains(g)), R = !ls(b, l);
        A ? f() : R && (f(), i());
      };
      return document.addEventListener("pointermove", P), () => document.removeEventListener("pointermove", P);
    }
  }, [d, c, l, i, f]), /* @__PURE__ */ n.jsx(Pr, { ...e, ref: o });
}), [es, ts] = Ze(Te, { isInside: !1 }), rs = tn("TooltipContent"), Pr = T(
  (e, r) => {
    const {
      __scopeTooltip: t,
      children: s,
      "aria-label": a,
      onEscapeKeyDown: o,
      onPointerDownOutside: l,
      ...u
    } = e, d = Fe(Pe, t), i = Je(t), { onClose: c } = d;
    return F(() => (document.addEventListener(ot, c), () => document.removeEventListener(ot, c)), [c]), F(() => {
      if (d.trigger) {
        const x = (f) => {
          const h = f.target;
          h != null && h.contains(d.trigger) && c();
        };
        return window.addEventListener("scroll", x, { capture: !0 }), () => window.removeEventListener("scroll", x, { capture: !0 });
      }
    }, [d.trigger, c]), /* @__PURE__ */ n.jsx(
      sr,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: o,
        onPointerDownOutside: l,
        onFocusOutside: (x) => x.preventDefault(),
        onDismiss: c,
        children: /* @__PURE__ */ n.jsxs(
          Ba,
          {
            "data-state": d.stateAttribute,
            ...i,
            ...u,
            ref: r,
            style: {
              ...u.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ n.jsx(rs, { children: s }),
              /* @__PURE__ */ n.jsx(es, { scope: t, isInside: !0, children: /* @__PURE__ */ n.jsx(An, { id: d.contentId, role: "tooltip", children: a || s }) })
            ]
          }
        )
      }
    );
  }
);
Cr.displayName = Pe;
var Nr = "TooltipArrow", ns = T(
  (e, r) => {
    const { __scopeTooltip: t, ...s } = e, a = Je(t);
    return ts(
      Nr,
      t
    ).isInside ? null : /* @__PURE__ */ n.jsx(Ha, { ...a, ...s, ref: r });
  }
);
ns.displayName = Nr;
function as(e, r) {
  const t = Math.abs(r.top - e.y), s = Math.abs(r.bottom - e.y), a = Math.abs(r.right - e.x), o = Math.abs(r.left - e.x);
  switch (Math.min(t, s, a, o)) {
    case o:
      return "left";
    case a:
      return "right";
    case t:
      return "top";
    case s:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function ss(e, r, t = 5) {
  const s = [];
  switch (r) {
    case "top":
      s.push(
        { x: e.x - t, y: e.y + t },
        { x: e.x + t, y: e.y + t }
      );
      break;
    case "bottom":
      s.push(
        { x: e.x - t, y: e.y - t },
        { x: e.x + t, y: e.y - t }
      );
      break;
    case "left":
      s.push(
        { x: e.x + t, y: e.y - t },
        { x: e.x + t, y: e.y + t }
      );
      break;
    case "right":
      s.push(
        { x: e.x - t, y: e.y - t },
        { x: e.x - t, y: e.y + t }
      );
      break;
  }
  return s;
}
function os(e) {
  const { top: r, right: t, bottom: s, left: a } = e;
  return [
    { x: a, y: r },
    { x: t, y: r },
    { x: t, y: s },
    { x: a, y: s }
  ];
}
function ls(e, r) {
  const { x: t, y: s } = e;
  let a = !1;
  for (let o = 0, l = r.length - 1; o < r.length; l = o++) {
    const u = r[o], d = r[l], i = u.x, c = u.y, x = d.x, f = d.y;
    c > s != f > s && t < (x - i) * (s - c) / (f - c) + i && (a = !a);
  }
  return a;
}
function is(e) {
  const r = e.slice();
  return r.sort((t, s) => t.x < s.x ? -1 : t.x > s.x ? 1 : t.y < s.y ? -1 : t.y > s.y ? 1 : 0), cs(r);
}
function cs(e) {
  if (e.length <= 1) return e.slice();
  const r = [];
  for (let s = 0; s < e.length; s++) {
    const a = e[s];
    for (; r.length >= 2; ) {
      const o = r[r.length - 1], l = r[r.length - 2];
      if ((o.x - l.x) * (a.y - l.y) >= (o.y - l.y) * (a.x - l.x)) r.pop();
      else break;
    }
    r.push(a);
  }
  r.pop();
  const t = [];
  for (let s = e.length - 1; s >= 0; s--) {
    const a = e[s];
    for (; t.length >= 2; ) {
      const o = t[t.length - 1], l = t[t.length - 2];
      if ((o.x - l.x) * (a.y - l.y) >= (o.y - l.y) * (a.x - l.x)) t.pop();
      else break;
    }
    t.push(a);
  }
  return t.pop(), r.length === 1 && t.length === 1 && r[0].x === t[0].x && r[0].y === t[0].y ? r : r.concat(t);
}
var us = xr, ds = br, ps = yr, ms = wr, jr = Cr;
const Rs = us, vs = ds, fs = ps, Er = T(({ className: e, sideOffset: r = 4, ...t }, s) => /* @__PURE__ */ n.jsx(ms, { children: /* @__PURE__ */ n.jsx("div", { className: Wr, children: /* @__PURE__ */ n.jsx(
  jr,
  {
    ref: s,
    className: D(
      "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    sideOffset: r,
    ...t
  }
) }) }));
Er.displayName = jr.displayName;
const xe = {
  // UI Labels
  addFilter: "",
  searchFields: "Search fields...",
  noFieldsFound: "No fields found.",
  noResultsFound: "No results found.",
  loading: "Loading...",
  select: "Select...",
  true: "True",
  false: "False",
  min: "Min",
  max: "Max",
  to: "to",
  typeAndPressEnter: "Type and press Enter to add tag",
  selected: "selected",
  selectedCount: "selected",
  percent: "%",
  defaultCurrency: "$",
  defaultColor: "#000000",
  addFilterTitle: "",
  // Operators
  operators: {
    is: "is",
    isNot: "is not",
    isAnyOf: "is any of",
    isNotAnyOf: "is not any of",
    includesAll: "includes all",
    excludesAll: "excludes all",
    before: "before",
    after: "after",
    between: "between",
    notBetween: "not between",
    contains: "contains",
    notContains: "does not contain",
    startsWith: "starts with",
    endsWith: "ends with",
    isExactly: "is exactly",
    equals: "equals",
    notEquals: "not equals",
    greaterThan: "greater than",
    lessThan: "less than",
    overlaps: "overlaps",
    includes: "includes",
    excludes: "excludes",
    includesAllOf: "includes all of",
    includesAnyOf: "includes any of",
    empty: "is empty",
    notEmpty: "is not empty"
  },
  // Placeholders
  placeholders: {
    enterField: (e) => `Enter ${e}...`,
    selectField: "Select...",
    searchField: (e) => `Search ${e.toLowerCase()}...`,
    enterKey: "Enter key...",
    enterValue: "Enter value..."
  },
  // Helper functions
  helpers: {
    formatOperator: (e) => e.replace(/_/g, " ")
  },
  // Validation
  validation: {
    invalidEmail: "Invalid email format",
    invalidUrl: "Invalid URL format",
    invalidTel: "Invalid phone format",
    invalid: "Invalid input format"
  }
}, _r = Oe({
  variant: "outline",
  size: "md",
  radius: "md",
  i18n: xe,
  cursorPointer: !0,
  className: void 0,
  showAddButton: !0,
  addButtonText: void 0,
  addButtonIcon: void 0,
  addButtonClassName: void 0,
  addButton: void 0,
  showSearchInput: !0,
  trigger: void 0,
  allowMultiple: !0
}), Re = () => Ne(_r), hs = G(
  [
    "relative flex shrink-0 items-center text-foreground outline-none transition",
    "has-[[data-slot=filters-input]:focus-visible]:ring-ring/30",
    "has-[[data-slot=filters-input]:focus-visible]:border-ring",
    "has-[[data-slot=filters-input]:focus-visible]:outline-none",
    "has-[[data-slot=filters-input]:focus-visible]:ring-[3px]",
    "has-[[data-slot=filters-input]:focus-visible]:z-1",
    "has-[[data-slot=filters-input]:[aria-invalid=true]]:border",
    "has-[[data-slot=filters-input]:[aria-invalid=true]]:border-solid",
    "has-[[data-slot=filters-input]:[aria-invalid=true]]:border-destructive/60",
    "has-[[data-slot=filters-input]:[aria-invalid=true]]:ring-destructive/10",
    "dark:has-[[data-slot=filters-input]:[aria-invalid=true]]:border-destructive",
    "dark:has-[[data-slot=filters-input]:[aria-invalid=true]]:ring-destructive/20"
  ],
  {
    variants: {
      variant: {
        solid: "border-0 bg-secondary",
        outline: "border border-border bg-background"
      },
      size: {
        lg: "h-10 px-2.5 text-sm has-[[data-slot=filters-prefix]]:ps-0 has-[[data-slot=filters-suffix]]:pe-0",
        md: "h-[34px] px-2 text-sm has-[[data-slot=filters-prefix]]:ps-0 has-[[data-slot=filters-suffix]]:pe-0",
        sm: "h-8 px-2 text-xs has-[[data-slot=filters-prefix]]:ps-0 has-[[data-slot=filters-suffix]]:pe-0"
      },
      cursorPointer: {
        true: "cursor-pointer",
        false: ""
      }
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
      cursorPointer: !0
    }
  }
), gs = G(
  [
    "inline-flex shrink-0 items-center justify-center text-muted-foreground transition hover:text-foreground",
    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
  ],
  {
    variants: {
      variant: {
        solid: "bg-secondary",
        outline: "border border-s-0 border-border hover:bg-secondary"
      },
      size: {
        lg: "size-10 [&_svg:not([class*=size-])]:size-4",
        md: "size-[34px] [&_svg:not([class*=size-])]:size-3.5",
        sm: "size-8 [&_svg:not([class*=size-])]:size-3"
      },
      cursorPointer: {
        true: "cursor-pointer",
        false: ""
      },
      radius: {
        md: "rounded-e-md",
        full: "rounded-e-full"
      }
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
      radius: "md",
      cursorPointer: !0
    }
  }
), xs = G(
  [
    "inline-flex shrink-0 items-center justify-center text-foreground transition",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:stroke-[1.5px]",
    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
  ],
  {
    variants: {
      variant: {
        solid: "border border-input hover:bg-secondary/60",
        outline: "border border-border hover:bg-accent"
      },
      size: {
        lg: "h-10 gap-1.5 px-4 text-sm [&_svg:not([class*=size-])]:size-4",
        md: "h-[34px] gap-1.5 px-3 text-sm [&_svg:not([class*=size-])]:size-4",
        sm: "h-8 gap-1.5 px-2.5 text-xs [&_svg:not([class*=size-])]:size-3.5"
      },
      radius: {
        md: "rounded-md",
        full: "rounded-full"
      },
      cursorPointer: {
        true: "cursor-pointer",
        false: ""
      }
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
      cursorPointer: !0
    }
  }
), bs = G(
  [
    "focus-visible:z-1 relative flex shrink-0 items-center text-muted-foreground transition hover:text-foreground data-[state=open]:text-foreground",
    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
  ],
  {
    variants: {
      variant: {
        solid: "bg-secondary",
        outline: "border border-e-0 border-border bg-background hover:bg-secondary data-[state=open]:bg-secondary [&+[data-slot=filters-remove]]:border-s"
      },
      size: {
        lg: "h-10 gap-1.5 px-4 text-sm",
        md: "h-[34px] gap-0.5 px-3 text-sm",
        sm: "h-8 gap-1 px-2.5 text-xs"
      },
      cursorPointer: {
        true: "cursor-pointer",
        false: ""
      }
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
      cursorPointer: !0
    }
  }
), ys = G(
  [
    "flex shrink-0 items-center gap-1.5 px-1.5 py-1 text-foreground",
    "[&_svg:not([class*=size-])]:size-4"
  ],
  {
    variants: {
      variant: {
        solid: "bg-secondary",
        outline: "border border-e-0 border-border"
      },
      size: {
        lg: "h-10 gap-1.5 px-4 text-sm [&_svg:not([class*=size-])]:size-4",
        md: "h-[34px] gap-1.5 px-3 text-sm [&_svg:not([class*=size-])]:size-4",
        sm: "h-8 gap-0.5 px-2.5 text-xs [&_svg:not([class*=size-])]:size-3.5"
      },
      radius: {
        md: "rounded-s-md",
        full: "rounded-s-full"
      }
    },
    defaultVariants: {
      variant: "outline",
      size: "md"
    }
  }
), _e = G(
  [
    "focus-visible:z-1 relative flex shrink-0 items-center gap-1 text-foreground transition",
    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
  ],
  {
    variants: {
      variant: {
        solid: "bg-secondary",
        outline: "border border-border bg-background hover:bg-secondary has-[[data-slot=switch]]:hover:bg-transparent"
      },
      size: {
        lg: "h-10 gap-1.5 px-4 text-sm [&_svg:not([class*=size-])]:size-4",
        md: "h-[34px] gap-1.5 px-3 text-sm [&_svg:not([class*=size-])]:size-4",
        sm: "h-8 gap-0.5 px-2.5 text-xs [&_svg:not([class*=size-])]:size-3.5"
      },
      cursorPointer: {
        true: "cursor-pointer has-[[data-slot=switch]]:cursor-default",
        false: ""
      }
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
      cursorPointer: !0
    }
  }
), Et = G("flex shrink-0 items-center justify-center text-foreground", {
  variants: {
    variant: {
      solid: "",
      outline: ""
    },
    size: {
      lg: "h-10 px-4 text-sm",
      md: "h-[34px] px-3 text-sm",
      sm: "h-8 px-2.5 text-xs"
    }
  },
  defaultVariants: {
    variant: "outline",
    size: "md"
  }
}), $e = G("flex shrink-0 items-center text-muted-foreground", {
  variants: {
    variant: {
      solid: "bg-secondary",
      outline: "border border-x-0 border-border bg-background"
    },
    size: {
      lg: "h-10 px-4 text-sm",
      md: "h-[34px] px-3 text-sm",
      sm: "h-8 px-2.5 text-xs"
    }
  },
  defaultVariants: {
    variant: "outline",
    size: "md"
  }
}), ws = G("flex flex-wrap items-center", {
  variants: {
    variant: {
      solid: "gap-2",
      outline: ""
    },
    size: {
      sm: "gap-1.5",
      md: "gap-2.5",
      lg: "gap-3.5"
    }
  },
  defaultVariants: {
    variant: "outline",
    size: "md"
  }
}), Cs = G("flex items-center", {
  variants: {
    variant: {
      solid: "gap-px",
      outline: ""
    }
  },
  defaultVariants: {
    variant: "outline"
  }
});
function q({
  field: e,
  onChange: r,
  onBlur: t,
  onKeyDown: s,
  onInputChange: a,
  className: o,
  ...l
}) {
  const u = Re(), [d, i] = $(!0), [c, x] = $(""), f = (b, A) => !A || !b ? !0 : new RegExp(A).test(b), h = (b, A = !1) => {
    if ((b === "text" || b === "number") && A)
      return u.i18n.validation.invalid;
    switch (b) {
      case "email":
        return u.i18n.validation.invalidEmail;
      case "url":
        return u.i18n.validation.invalidUrl;
      case "tel":
        return u.i18n.validation.invalidTel;
      default:
        return u.i18n.validation.invalid;
    }
  }, P = (b) => {
    r == null || r(b);
  }, m = (b) => {
    const A = b.target.value, R = (e == null ? void 0 : e.pattern) || l.pattern;
    if (A && R) {
      let v = !0;
      e != null && e.validation ? v = e.validation(A) : v = f(A, R), i(v);
      const S = !!(e != null && e.pattern || l.pattern);
      x(v ? "" : h((e == null ? void 0 : e.type) || "", S));
    } else
      i(!0), x("");
    a && a(b), t == null || t(b);
  }, g = (b) => {
    if (!d && !["Tab", "Escape", "Enter", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(b.key) && (i(!0), x("")), b.key === "Enter" && a) {
      const A = {
        ...b,
        target: b.target,
        currentTarget: b.currentTarget
      };
      a(A);
    }
    s == null || s(b);
  };
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: D("w-36", hs({ variant: u.variant, size: u.size }), o),
      "data-slot": "filters-input-wrapper",
      children: [
        (e == null ? void 0 : e.prefix) && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: Et({ variant: u.variant, size: u.size }),
            "data-slot": "filters-prefix",
            children: e.prefix
          }
        ),
        /* @__PURE__ */ n.jsxs("div", { className: "flex w-full items-stretch", children: [
          /* @__PURE__ */ n.jsx(
            "input",
            {
              "aria-describedby": !d && c ? `${(e == null ? void 0 : e.key) || "input"}-error` : void 0,
              "aria-invalid": !d,
              className: "w-full outline-none",
              "data-slot": "filters-input",
              onBlur: m,
              onChange: P,
              onKeyDown: g,
              ...l
            }
          ),
          !d && c && /* @__PURE__ */ n.jsxs(vs, { children: [
            /* @__PURE__ */ n.jsx(fs, { asChild: !0, children: /* @__PURE__ */ n.jsx("div", { className: "absolute right-2 top-1/2 flex -translate-y-1/2 items-center", children: /* @__PURE__ */ n.jsx(an, { className: "size-3.5 text-destructive" }) }) }),
            /* @__PURE__ */ n.jsx(Er, { children: /* @__PURE__ */ n.jsx("p", { className: "text-sm", children: c }) })
          ] })
        ] }),
        (e == null ? void 0 : e.suffix) && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: D(Et({ variant: u.variant, size: u.size })),
            "data-slot": "filters-suffix",
            children: e.suffix
          }
        )
      ]
    }
  );
}
function Ps({ className: e, icon: r = /* @__PURE__ */ n.jsx(Jr, {}), ...t }) {
  const s = Re();
  return /* @__PURE__ */ n.jsx(
    "button",
    {
      className: D(
        gs({
          variant: s.variant,
          size: s.size,
          cursorPointer: s.cursorPointer,
          radius: s.radius
        }),
        e
      ),
      "data-slot": "filters-remove",
      ...t,
      type: "button",
      children: r
    }
  );
}
const Sr = (e) => "fields" in e && Array.isArray(e.fields), Ar = (e) => !!(e.group && e.fields), Tr = (e) => e.reduce((r, t) => Sr(t) ? [...r, ...t.fields] : Ar(t) ? [...r, ...t.fields] : [...r, t], []), Ns = (e) => Tr(e).reduce(
  (t, s) => (s.key && (t[s.key] = s), t),
  {}
), Or = (e) => ({
  select: [
    { value: "is", label: e.operators.is },
    { value: "is_not", label: e.operators.isNot },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ],
  multiselect: [
    { value: "is_any_of", label: e.operators.isAnyOf },
    { value: "is_not_any_of", label: e.operators.isNotAnyOf },
    { value: "includes_all", label: e.operators.includesAll },
    { value: "excludes_all", label: e.operators.excludesAll },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ],
  date: [
    { value: "before", label: e.operators.before },
    { value: "after", label: e.operators.after },
    { value: "is", label: e.operators.is },
    { value: "is_not", label: e.operators.isNot },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ],
  daterange: [
    { value: "between", label: e.operators.between },
    { value: "not_between", label: e.operators.notBetween },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ],
  text: [
    { value: "contains", label: e.operators.contains },
    { value: "not_contains", label: e.operators.notContains },
    { value: "starts_with", label: e.operators.startsWith },
    { value: "ends_with", label: e.operators.endsWith },
    { value: "is", label: e.operators.isExactly },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ],
  number: [
    { value: "equals", label: e.operators.equals },
    { value: "not_equals", label: e.operators.notEquals },
    { value: "greater_than", label: e.operators.greaterThan },
    { value: "less_than", label: e.operators.lessThan },
    { value: "between", label: e.operators.between },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ],
  numberrange: [
    { value: "between", label: e.operators.between },
    { value: "overlaps", label: e.operators.overlaps },
    { value: "contains", label: e.operators.contains },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ],
  boolean: [
    { value: "is", label: e.operators.is },
    { value: "is_not", label: e.operators.isNot },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ],
  email: [
    { value: "contains", label: e.operators.contains },
    { value: "not_contains", label: e.operators.notContains },
    { value: "starts_with", label: e.operators.startsWith },
    { value: "ends_with", label: e.operators.endsWith },
    { value: "is", label: e.operators.isExactly },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ],
  url: [
    { value: "contains", label: e.operators.contains },
    { value: "not_contains", label: e.operators.notContains },
    { value: "starts_with", label: e.operators.startsWith },
    { value: "ends_with", label: e.operators.endsWith },
    { value: "is", label: e.operators.isExactly },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ],
  tel: [
    { value: "contains", label: e.operators.contains },
    { value: "not_contains", label: e.operators.notContains },
    { value: "starts_with", label: e.operators.startsWith },
    { value: "ends_with", label: e.operators.endsWith },
    { value: "is", label: e.operators.isExactly },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ],
  time: [
    { value: "before", label: e.operators.before },
    { value: "after", label: e.operators.after },
    { value: "is", label: e.operators.is },
    { value: "between", label: e.operators.between },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ],
  datetime: [
    { value: "before", label: e.operators.before },
    { value: "after", label: e.operators.after },
    { value: "is", label: e.operators.is },
    { value: "between", label: e.operators.between },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ]
});
Or(xe);
const js = (e, r, t) => {
  if (e.operators)
    return e.operators;
  const s = Or(t);
  let a = e.type || "select";
  return a === "select" && r.length > 1 && (a = "multiselect"), a === "multiselect" || e.type === "multiselect" ? s.multiselect : s[a] || s.select;
};
function Es({ field: e, operator: r, values: t, onChange: s }) {
  var a;
  const o = Re(), l = js(e, t, o.i18n), u = ((a = l.find((d) => d.value === r)) == null ? void 0 : a.label) || o.i18n.helpers.formatOperator(r);
  return e.hideOperatorSelect ? /* @__PURE__ */ n.jsx("div", { className: "flex items-center self-stretch border border-r-[0px] px-3 text-sm text-muted-foreground", children: u }) : /* @__PURE__ */ n.jsxs(Cn, { children: [
    /* @__PURE__ */ n.jsx(Pn, { className: bs({ variant: o.variant, size: o.size }), children: u }),
    /* @__PURE__ */ n.jsx(Nn, { align: "start", className: "w-fit min-w-fit", children: l.map((d) => /* @__PURE__ */ n.jsxs(
      jn,
      {
        className: "flex items-center justify-between",
        onClick: () => s(d.value),
        children: [
          /* @__PURE__ */ n.jsx("span", { children: d.label }),
          /* @__PURE__ */ n.jsx(pe, { className: `ms-auto text-primary ${d.value === r ? "opacity-100" : "opacity-0"}` })
        ]
      },
      d.value
    )) })
  ] });
}
function kr({
  field: e,
  values: r,
  onChange: t,
  onClose: s,
  inline: a = !1
}) {
  var o;
  const [l, u] = $(!1), [d, i] = $(e.searchValue || ""), [c, x] = $([]), f = Re();
  F(() => {
    e.searchValue !== void 0 && i(e.searchValue);
  }, [e.searchValue]);
  const h = e.type === "multiselect" || r.length > 1, P = (e.value !== void 0 ? e.value : r) || [];
  F(() => {
    l && e.searchable !== !1 && setTimeout(() => {
      const v = document.querySelector("[cmdk-input]");
      v && v.focus();
    }, 0);
  }, [l, e.searchable]);
  const m = ie(
    () => {
      var v;
      return ((v = e.options) == null ? void 0 : v.filter((S) => P.includes(S.value))) || [];
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e.options, JSON.stringify(P)]
  );
  F(() => {
    if (P.length === 0) {
      x([]);
      return;
    }
    m.length > 0 && x((v) => {
      const S = [];
      for (const _ of P) {
        const E = m.find((M) => M.value === _) ?? v.find((M) => M.value === _);
        E && S.push(E);
      }
      return S;
    });
  }, [m, P]);
  const g = P.length > 0 ? c.length > 0 ? c : m : [], b = ((o = e.options) == null ? void 0 : o.filter((v) => !P.includes(v.value))) || [], A = (v) => {
    var S;
    i(v), (S = e.onSearchChange) == null || S.call(e, v);
  }, R = () => {
    u(!1), e.searchValue === void 0 && setTimeout(() => i(""), 200), s == null || s();
  };
  return a ? /* @__PURE__ */ n.jsx("div", { className: "w-full", children: /* @__PURE__ */ n.jsxs(Ve, { children: [
    e.searchable !== !1 && /* @__PURE__ */ n.jsx(
      We,
      {
        className: "h-8.5 text-sm",
        placeholder: f.i18n.placeholders.searchField(e.label || ""),
        value: d,
        onValueChange: A
      }
    ),
    /* @__PURE__ */ n.jsxs(Be, { className: "outline-none", children: [
      e.isLoading ? /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-center py-6 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ n.jsx(rt, { className: "mr-2 size-4 animate-spin" }),
        f.i18n.loading
      ] }) : /* @__PURE__ */ n.jsx(He, { children: f.i18n.noResultsFound }),
      g.length > 0 && /* @__PURE__ */ n.jsx(oe, { heading: e.label || "Selected", children: g.map((v) => /* @__PURE__ */ n.jsxs(
        se,
        {
          className: "group flex items-center gap-2",
          onSelect: () => {
            if (h) {
              const S = P.filter((_) => _ !== v.value);
              e.onValueChange ? e.onValueChange(S) : t(S);
            } else
              e.onValueChange ? e.onValueChange([]) : t([]);
          },
          children: [
            v.icon && v.icon,
            /* @__PURE__ */ n.jsxs("div", { className: "flex flex-col overflow-hidden", children: [
              /* @__PURE__ */ n.jsx("span", { className: "truncate text-accent-foreground", title: v.label, children: v.label }),
              v.detail && /* @__PURE__ */ n.jsx("span", { className: "truncate text-sm text-muted-foreground", title: v.detail, children: v.detail })
            ] }),
            /* @__PURE__ */ n.jsx(pe, { className: "ms-auto text-primary" })
          ]
        },
        String(v.value)
      )) }),
      b.length > 0 && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
        g.length > 0 && /* @__PURE__ */ n.jsx(ye, {}),
        /* @__PURE__ */ n.jsx(oe, { children: b.map((v) => /* @__PURE__ */ n.jsxs(
          se,
          {
            className: "group flex items-center gap-2",
            value: v.label + (v.detail ? ` - ${v.detail}` : ""),
            onSelect: () => {
              if (h) {
                const S = [...P, v.value];
                if (e.maxSelections && S.length > e.maxSelections)
                  return;
                e.onValueChange ? e.onValueChange(S) : t(S), e.autoCloseOnSelect && (s == null || s());
              } else
                e.onValueChange ? e.onValueChange([v.value]) : t([v.value]), s == null || s();
            },
            children: [
              v.icon && v.icon,
              /* @__PURE__ */ n.jsxs("div", { className: "flex flex-col overflow-hidden", children: [
                /* @__PURE__ */ n.jsx("span", { className: "truncate text-accent-foreground", title: v.label, children: v.label }),
                v.detail && /* @__PURE__ */ n.jsx("span", { className: "truncate text-sm text-muted-foreground", title: v.detail, children: v.detail })
              ] }),
              /* @__PURE__ */ n.jsx(pe, { className: "ms-auto text-primary opacity-0" })
            ]
          },
          String(v.value)
        )) })
      ] })
    ] })
  ] }) }) : /* @__PURE__ */ n.jsxs(
    dt,
    {
      open: l,
      onOpenChange: (v) => {
        u(v), !v && e.searchValue === void 0 && setTimeout(() => i(""), 200);
      },
      children: [
        /* @__PURE__ */ n.jsx(
          pt,
          {
            className: _e({
              variant: f.variant,
              size: f.size,
              cursorPointer: f.cursorPointer
            }),
            children: /* @__PURE__ */ n.jsx("div", { className: "flex items-center gap-1.5", children: e.customValueRenderer ? e.customValueRenderer(r, e.options || []) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              g.length > 0 && /* @__PURE__ */ n.jsx("div", { className: D("-space-x-0.5 flex items-center", e.selectedOptionsClassName), children: g.slice(0, 3).map((v) => /* @__PURE__ */ n.jsx("div", { children: v.icon }, String(v.value))) }),
              g.length === 1 ? g[0].detail ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                /* @__PURE__ */ n.jsx("span", { className: "truncate text-accent-foreground", title: g[0].label, children: g[0].label }),
                /* @__PURE__ */ n.jsx("span", { className: "truncate text-sm text-muted-foreground", title: g[0].detail, children: g[0].detail })
              ] }) : /* @__PURE__ */ n.jsx("span", { className: "truncate text-accent-foreground", title: g[0].label, children: g[0].label }) : g.length > 1 ? `${g.length} ${f.i18n.selectedCount}` : f.i18n.select
            ] }) })
          }
        ),
        /* @__PURE__ */ n.jsx(
          Ye,
          {
            align: "start",
            className: D(
              "p-0 data-[state=closed]:!animation-none data-[state=closed]:!duration-0",
              e.className || "w-[200px]"
            ),
            children: /* @__PURE__ */ n.jsxs(Ve, { children: [
              e.searchable !== !1 && /* @__PURE__ */ n.jsx(
                We,
                {
                  className: "h-[34px] text-sm",
                  placeholder: f.i18n.placeholders.searchField(e.label || ""),
                  value: d,
                  onValueChange: A
                }
              ),
              /* @__PURE__ */ n.jsxs(Be, { className: "outline-none", children: [
                e.isLoading ? /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-center py-6 text-sm text-muted-foreground", children: [
                  /* @__PURE__ */ n.jsx(rt, { className: "mr-2 size-4 animate-spin" }),
                  f.i18n.loading
                ] }) : /* @__PURE__ */ n.jsx(He, { children: f.i18n.noResultsFound }),
                g.length > 0 && /* @__PURE__ */ n.jsx(oe, { children: g.map((v) => /* @__PURE__ */ n.jsxs(
                  se,
                  {
                    className: "group flex items-center gap-2",
                    onSelect: () => {
                      t(h ? r.filter((S) => S !== v.value) : []), h || (u(!1), R());
                    },
                    children: [
                      v.icon && v.icon,
                      /* @__PURE__ */ n.jsxs("div", { className: "flex flex-col overflow-hidden", children: [
                        /* @__PURE__ */ n.jsx("span", { className: "truncate text-accent-foreground", title: v.label, children: v.label }),
                        v.detail && /* @__PURE__ */ n.jsx("span", { className: "truncate text-sm text-muted-foreground", title: v.detail, children: v.detail })
                      ] }),
                      /* @__PURE__ */ n.jsx(pe, { className: "ms-auto text-primary" })
                    ]
                  },
                  String(v.value)
                )) }),
                b.length > 0 && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                  g.length > 0 && /* @__PURE__ */ n.jsx(ye, {}),
                  /* @__PURE__ */ n.jsx(oe, { children: b.map((v) => /* @__PURE__ */ n.jsxs(
                    se,
                    {
                      className: "group flex items-center gap-2",
                      value: v.label + (v.detail ? ` - ${v.detail}` : ""),
                      onSelect: () => {
                        if (h) {
                          const S = [...r, v.value];
                          if (e.maxSelections && S.length > e.maxSelections)
                            return;
                          t(S), e.autoCloseOnSelect && R();
                        } else
                          t([v.value]), u(!1), R();
                      },
                      children: [
                        v.icon && v.icon,
                        /* @__PURE__ */ n.jsxs("div", { className: "flex flex-col overflow-hidden", children: [
                          /* @__PURE__ */ n.jsx("span", { className: "truncate text-accent-foreground", title: v.label, children: v.label }),
                          v.detail && /* @__PURE__ */ n.jsx("span", { className: "truncate text-sm text-muted-foreground", title: v.detail, children: v.detail })
                        ] }),
                        /* @__PURE__ */ n.jsx(pe, { className: "ms-auto text-primary opacity-0" })
                      ]
                    },
                    String(v.value)
                  )) })
                ] })
              ] })
            ] })
          }
        )
      ]
    }
  );
}
function _s({ field: e, values: r, onChange: t, operator: s }) {
  var a, o;
  const [l, u] = $(!1), [d, i] = $(e.searchValue || ""), c = Re();
  F(() => {
    e.searchValue !== void 0 && i(e.searchValue);
  }, [e.searchValue]);
  const x = (m) => {
    var g;
    i(m), (g = e.onSearchChange) == null || g.call(e, m);
  };
  if (F(() => {
    l && e.searchable !== !1 && setTimeout(() => {
      const m = document.querySelector("[cmdk-input]");
      m && m.focus();
    }, 0);
  }, [l, e.searchable]), s === "empty" || s === "not_empty")
    return null;
  if (e.customRenderer)
    return /* @__PURE__ */ n.jsx(
      "div",
      {
        className: _e({
          variant: c.variant,
          size: c.size,
          cursorPointer: c.cursorPointer
        }),
        children: e.customRenderer({ field: e, values: r, onChange: t, operator: s })
      }
    );
  if (e.type === "boolean") {
    const m = r[0] === !0, g = e.onLabel || c.i18n.true, b = e.offLabel || c.i18n.false;
    return /* @__PURE__ */ n.jsx(
      "div",
      {
        className: _e({
          variant: c.variant,
          size: c.size,
          cursorPointer: c.cursorPointer
        }),
        children: /* @__PURE__ */ n.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ n.jsx(nr, { checked: m, size: "sm", onCheckedChange: (A) => t([A]) }),
          e.onLabel && e.offLabel && /* @__PURE__ */ n.jsx("span", { className: "text-xs text-muted-foreground", children: m ? g : b })
        ] })
      }
    );
  }
  if (e.type === "time") {
    if (s === "between") {
      const m = r[0] || "", g = r[1] || "";
      return /* @__PURE__ */ n.jsxs("div", { className: "flex items-center", "data-slot": "filters-item", children: [
        /* @__PURE__ */ n.jsx(
          q,
          {
            className: e.className,
            field: e,
            type: "time",
            value: m,
            onChange: (b) => t([b.target.value, g]),
            onInputChange: e.onInputChange
          }
        ),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: $e({ variant: c.variant, size: c.size }),
            "data-slot": "filters-between",
            children: c.i18n.to
          }
        ),
        /* @__PURE__ */ n.jsx(
          q,
          {
            className: e.className,
            field: e,
            type: "time",
            value: g,
            onChange: (b) => t([m, b.target.value]),
            onInputChange: e.onInputChange
          }
        )
      ] });
    }
    return /* @__PURE__ */ n.jsx(
      q,
      {
        className: e.className,
        field: e,
        type: "time",
        value: r[0] || "",
        onChange: (m) => t([m.target.value]),
        onInputChange: e.onInputChange
      }
    );
  }
  if (e.type === "datetime") {
    if (s === "between") {
      const m = r[0] || "", g = r[1] || "";
      return /* @__PURE__ */ n.jsxs("div", { className: "flex items-center", "data-slot": "filters-item", children: [
        /* @__PURE__ */ n.jsx(
          q,
          {
            className: D("w-36", e.className),
            field: e,
            type: "datetime-local",
            value: m,
            onChange: (b) => t([b.target.value, g]),
            onInputChange: e.onInputChange
          }
        ),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: $e({ variant: c.variant, size: c.size }),
            "data-slot": "filters-between",
            children: c.i18n.to
          }
        ),
        /* @__PURE__ */ n.jsx(
          q,
          {
            className: D("w-36", e.className),
            field: e,
            type: "datetime-local",
            value: g,
            onChange: (b) => t([m, b.target.value]),
            onInputChange: e.onInputChange
          }
        )
      ] });
    }
    return /* @__PURE__ */ n.jsx(
      q,
      {
        className: D("w-36", e.className),
        field: e,
        type: "datetime-local",
        value: r[0] || "",
        onChange: (m) => t([m.target.value]),
        onInputChange: e.onInputChange
      }
    );
  }
  if (["email", "url", "tel"].includes(e.type || "")) {
    const m = () => {
      switch (e.type) {
        case "email":
          return "email";
        case "url":
          return "url";
        case "tel":
          return "tel";
        default:
          return "text";
      }
    }, g = () => {
      switch (e.type) {
        case "email":
          return "^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$";
        case "url":
          return "^https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)$";
        case "tel":
          return "^[\\+]?[1-9][\\d]{0,15}$";
        default:
          return;
      }
    };
    return /* @__PURE__ */ n.jsx(
      q,
      {
        className: e.className,
        field: e,
        pattern: e.pattern || g(),
        placeholder: e.placeholder || c.i18n.placeholders.enterField(e.type || "text"),
        type: m(),
        value: r[0] || "",
        onChange: (b) => t([b.target.value]),
        onInputChange: e.onInputChange
      }
    );
  }
  if (e.type === "daterange") {
    const m = r[0] || "", g = r[1] || "";
    return /* @__PURE__ */ n.jsxs(
      "div",
      {
        className: _e({
          variant: c.variant,
          size: c.size,
          cursorPointer: c.cursorPointer
        }),
        children: [
          /* @__PURE__ */ n.jsx(
            q,
            {
              className: D("w-24", e.className),
              field: e,
              type: "date",
              value: m,
              onChange: (b) => t([b.target.value, g]),
              onInputChange: e.onInputChange
            }
          ),
          /* @__PURE__ */ n.jsx(
            "div",
            {
              className: $e({ variant: c.variant, size: c.size }),
              "data-slot": "filters-between",
              children: c.i18n.to
            }
          ),
          /* @__PURE__ */ n.jsx(
            q,
            {
              className: D("w-24", e.className),
              field: e,
              type: "date",
              value: g,
              onChange: (b) => t([m, b.target.value]),
              onInputChange: e.onInputChange
            }
          )
        ]
      }
    );
  }
  if (e.type === "text" || e.type === "number") {
    if (e.type === "number" && s === "between") {
      const m = r[0] || "", g = r[1] || "";
      return /* @__PURE__ */ n.jsxs("div", { className: "flex items-center", "data-slot": "filters-item", children: [
        /* @__PURE__ */ n.jsx(
          q,
          {
            className: D("w-16", e.className),
            field: e,
            max: e.max,
            min: e.min,
            pattern: e.pattern,
            placeholder: c.i18n.min,
            step: e.step,
            type: "number",
            value: m,
            onChange: (b) => t([b.target.value, g]),
            onInputChange: e.onInputChange
          }
        ),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: $e({ variant: c.variant, size: c.size }),
            "data-slot": "filters-between",
            children: c.i18n.to
          }
        ),
        /* @__PURE__ */ n.jsx(
          q,
          {
            className: D("w-16", e.className),
            field: e,
            max: e.max,
            min: e.min,
            pattern: e.pattern,
            placeholder: c.i18n.max,
            step: e.step,
            type: "number",
            value: g,
            onChange: (b) => t([m, b.target.value]),
            onInputChange: e.onInputChange
          }
        )
      ] });
    }
    return /* @__PURE__ */ n.jsx("div", { className: "flex items-center", "data-slot": "filters-item", children: /* @__PURE__ */ n.jsx(
      q,
      {
        className: D("w-36", e.className),
        field: e,
        max: e.type === "number" ? e.max : void 0,
        min: e.type === "number" ? e.min : void 0,
        pattern: e.pattern,
        placeholder: e.placeholder,
        step: e.type === "number" ? e.step : void 0,
        type: e.type === "number" ? "number" : "text",
        value: r[0] || "",
        onChange: (m) => t([m.target.value]),
        onInputChange: e.onInputChange
      }
    ) });
  }
  if (e.type === "date")
    return /* @__PURE__ */ n.jsx(
      q,
      {
        className: D("w-16", e.className),
        field: e,
        type: "date",
        value: r[0] || "",
        onChange: (m) => t([m.target.value]),
        onInputChange: e.onInputChange
      }
    );
  if (e.type === "select" || e.type === "multiselect")
    return /* @__PURE__ */ n.jsx(kr, { field: e, values: r, onChange: t });
  const f = r.length > 1, h = ((a = e.options) == null ? void 0 : a.filter((m) => r.includes(m.value))) || [], P = ((o = e.options) == null ? void 0 : o.filter((m) => !r.includes(m.value))) || [];
  return /* @__PURE__ */ n.jsxs(
    dt,
    {
      open: l,
      onOpenChange: (m) => {
        u(m), !m && e.searchValue === void 0 && setTimeout(() => i(""), 200);
      },
      children: [
        /* @__PURE__ */ n.jsx(
          pt,
          {
            className: _e({
              variant: c.variant,
              size: c.size,
              cursorPointer: c.cursorPointer
            }),
            children: /* @__PURE__ */ n.jsx("div", { className: "flex items-center gap-1.5", children: e.customValueRenderer ? e.customValueRenderer(r, e.options || []) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              h.length > 0 && /* @__PURE__ */ n.jsx("div", { className: "flex items-center -space-x-1.5", children: h.slice(0, 3).map((m) => /* @__PURE__ */ n.jsx("div", { children: m.icon }, String(m.value))) }),
              h.length === 1 ? h[0].label : h.length > 1 ? `${h.length} ${c.i18n.selectedCount}` : c.i18n.select
            ] }) })
          }
        ),
        /* @__PURE__ */ n.jsx(Ye, { className: D("w-36 p-0 data-[state=closed]:!animation-none data-[state=closed]:!duration-0", e.popoverContentClassName), children: /* @__PURE__ */ n.jsxs(Ve, { children: [
          e.searchable !== !1 && /* @__PURE__ */ n.jsx(
            We,
            {
              className: "h-[34px] text-sm",
              placeholder: c.i18n.placeholders.searchField(e.label || ""),
              value: d,
              onValueChange: x
            }
          ),
          /* @__PURE__ */ n.jsxs(Be, { className: "outline-none", children: [
            e.isLoading ? /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-center py-6 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ n.jsx(rt, { className: "mr-2 size-4 animate-spin" }),
              c.i18n.loading
            ] }) : /* @__PURE__ */ n.jsx(He, { children: c.i18n.noResultsFound }),
            h.length > 0 && /* @__PURE__ */ n.jsx(oe, { children: h.map((m) => /* @__PURE__ */ n.jsxs(
              se,
              {
                className: "group flex items-center gap-2",
                onSelect: () => {
                  t(f ? r.filter((g) => g !== m.value) : []), f || u(!1);
                },
                children: [
                  m.icon && m.icon,
                  /* @__PURE__ */ n.jsx("span", { className: "truncate text-accent-foreground", children: m.label }),
                  /* @__PURE__ */ n.jsx(pe, { className: "ms-auto text-primary" })
                ]
              },
              String(m.value)
            )) }),
            P.length > 0 && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              h.length > 0 && /* @__PURE__ */ n.jsx(ye, {}),
              /* @__PURE__ */ n.jsx(oe, { children: P.map((m) => /* @__PURE__ */ n.jsxs(
                se,
                {
                  className: "group flex items-center gap-2",
                  value: m.label,
                  onSelect: () => {
                    if (f) {
                      const g = [...r, m.value];
                      if (e.maxSelections && g.length > e.maxSelections)
                        return;
                      t(g);
                    } else
                      t([m.value]), u(!1);
                  },
                  children: [
                    m.icon && m.icon,
                    /* @__PURE__ */ n.jsx("span", { className: "truncate text-accent-foreground", children: m.label }),
                    /* @__PURE__ */ n.jsx(pe, { className: "ms-auto text-primary opacity-0" })
                  ]
                },
                String(m.value)
              )) })
            ] })
          ] })
        ] }) })
      ]
    }
  );
}
function zs({
  filters: e,
  fields: r,
  onChange: t,
  className: s,
  showAddButton: a = !0,
  addButtonText: o,
  addButtonIcon: l,
  addButtonClassName: u,
  addButton: d,
  variant: i = "outline",
  size: c = "md",
  radius: x = "md",
  i18n: f,
  showSearchInput: h = !0,
  cursorPointer: P = !0,
  trigger: m,
  allowMultiple: g = !0,
  popoverContentClassName: b,
  popoverAlign: A = "start",
  keyboardShortcut: R,
  onActiveFieldChange: v
}) {
  const [S, _] = $(!1), [E, M] = $(null), [ne, H] = $([]);
  F(() => {
    v == null || v(E);
  }, [E, v]), F(() => {
    if (!R)
      return;
    const N = (w) => {
      const k = w.target;
      k.tagName === "INPUT" || k.tagName === "TEXTAREA" || k.isContentEditable || w.key.toLowerCase() === R.toLowerCase() && !w.metaKey && !w.ctrlKey && !w.altKey && (w.preventDefault(), _((p) => !p));
    };
    return window.addEventListener("keydown", N), () => window.removeEventListener("keydown", N);
  }, [R]), F(() => {
    S && setTimeout(() => {
      const N = document.querySelector("[cmdk-input]");
      if (N)
        N.focus();
      else {
        const w = document.querySelector("[cmdk-root]");
        w && w.focus();
      }
    }, 0);
  }, [S, E, h]);
  const K = {
    ...xe,
    ...f,
    operators: {
      ...xe.operators,
      ...f == null ? void 0 : f.operators
    },
    placeholders: {
      ...xe.placeholders,
      ...f == null ? void 0 : f.placeholders
    },
    validation: {
      ...xe.validation,
      ...f == null ? void 0 : f.validation
    }
  }, J = ie(() => Ns(r), [r]), U = E ? J[E] : null, Y = V(
    (N, w) => {
      t(
        e.map((k) => {
          if (k.id === N) {
            const p = { ...k, ...w };
            return (w.operator === "empty" || w.operator === "not_empty") && (p.values = []), p;
          }
          return k;
        })
      );
    },
    [e, t]
  ), Q = V(
    (N) => {
      t(e.filter((w) => w.id !== N));
    },
    [e, t]
  ), ae = V(
    (N) => {
      const w = J[N];
      if (w && w.key) {
        if (w.type === "select" || w.type === "multiselect") {
          M(w.key);
          const C = e.find((z) => z.field === N), I = w.type === "multiselect" && C ? C.values : [];
          H(I);
          return;
        }
        const k = w.defaultOperator || (w.type === "daterange" || w.type === "numberrange" ? "between" : (w.type === "boolean", "is"));
        let p = [];
        ["text", "number", "date", "email", "url", "tel", "time", "datetime"].includes(w.type || "") ? p = [""] : w.type === "daterange" ? p = ["", ""] : w.type === "numberrange" ? p = [w.min || 0, w.max || 100] : w.type === "boolean" ? p = [!1] : w.type === "time" ? p = [""] : w.type === "datetime" && (p = [""]);
        const y = _t(N, k, p), j = [...e, y];
        t(j), _(!1);
      }
    },
    [J, e, t]
  ), ee = V(
    (N, w, k = !0) => {
      if (!N.key)
        return;
      const p = N.defaultOperator || (N.type === "multiselect" ? "is_any_of" : "is"), y = e.findIndex((j) => j.field === N.key);
      if (y >= 0) {
        const j = [...e];
        j[y] = {
          ...j[y],
          values: w
        }, t(j);
      } else {
        const j = _t(N.key, p, w), C = [...e, j];
        t(C);
      }
      k ? (_(!1), M(null), H([])) : H(w);
    },
    [e, t]
  ), X = ie(() => Tr(r).filter((w) => !w.key || w.type === "separator" ? !1 : g ? !0 : !e.some((k) => k.field === w.key)), [r, e, g]);
  return /* @__PURE__ */ n.jsx(
    _r.Provider,
    {
      value: {
        variant: i,
        size: c,
        radius: x,
        i18n: K,
        cursorPointer: P,
        className: s,
        showAddButton: a,
        addButtonText: o,
        addButtonIcon: l,
        addButtonClassName: u,
        addButton: d,
        showSearchInput: h,
        trigger: m,
        allowMultiple: g
      },
      children: /* @__PURE__ */ n.jsxs("div", { className: D(ws({ variant: i, size: c }), s), children: [
        a && X.length > 0 && /* @__PURE__ */ n.jsxs(
          dt,
          {
            open: S,
            onOpenChange: (N) => {
              _(N), N || (M(null), H([]));
            },
            children: [
              /* @__PURE__ */ n.jsx(pt, { asChild: !0, children: d || /* @__PURE__ */ n.jsxs(
                "button",
                {
                  className: D(
                    xs({
                      variant: i,
                      size: c,
                      cursorPointer: P,
                      radius: x
                    }),
                    u
                  ),
                  title: K.addFilterTitle,
                  type: "button",
                  children: [
                    l || /* @__PURE__ */ n.jsx(nn, {}),
                    o || K.addFilter
                  ]
                }
              ) }),
              /* @__PURE__ */ n.jsx(
                Ye,
                {
                  align: A,
                  className: D(
                    "p-0 data-[state=closed]:!animation-none data-[state=closed]:!duration-0",
                    (U == null ? void 0 : U.className) || b || "w-[200px]"
                  ),
                  children: U ? (
                    // Show original select/multiselect rendering without back button
                    // SelectOptionsPopover renders its own Command component when inline={true}
                    /* @__PURE__ */ n.jsx(
                      kr,
                      {
                        field: U,
                        inline: !0,
                        values: ne,
                        onChange: (N) => {
                          const w = U.type === "select";
                          ee(U, N, w);
                        },
                        onClose: () => {
                          _(!1), M(null), H([]);
                        }
                      }
                    )
                  ) : (
                    // Show field selection - needs Command wrapper for search/list
                    /* @__PURE__ */ n.jsxs(Ve, { className: "outline-none", tabIndex: h ? void 0 : 0, children: [
                      h && /* @__PURE__ */ n.jsx(We, { className: "h-[34px]", placeholder: K.searchFields }),
                      /* @__PURE__ */ n.jsxs(Be, { className: "outline-none", children: [
                        /* @__PURE__ */ n.jsx(He, { children: K.noFieldsFound }),
                        r.map((N, w) => {
                          if (Sr(N)) {
                            const p = N.fields.filter((y) => y.type === "separator" || g ? !0 : !e.some((j) => j.field === y.key));
                            return p.length === 0 ? null : /* @__PURE__ */ n.jsx(oe, { heading: N.group || "Fields", children: p.map((y, j) => {
                              if (y.type === "separator") {
                                const C = y.key ?? `${N.group ?? `group-${w}`}-separator-${j}`;
                                return /* @__PURE__ */ n.jsx(ye, {}, C);
                              }
                              return /* @__PURE__ */ n.jsxs(
                                se,
                                {
                                  onSelect: () => y.key && ae(y.key),
                                  children: [
                                    y.icon,
                                    /* @__PURE__ */ n.jsx("span", { children: y.label })
                                  ]
                                },
                                y.key ?? `${N.group ?? `group-${w}`}-field-${j}`
                              );
                            }) }, N.group || `group-${w}`);
                          }
                          if (Ar(N)) {
                            const p = N.fields.filter((y) => y.type === "separator" || g ? !0 : !e.some((j) => j.field === y.key));
                            return p.length === 0 ? null : /* @__PURE__ */ n.jsx(oe, { heading: N.group || "Fields", children: p.map((y) => {
                              if (y.type === "separator") {
                                const j = y.key || `${N.group || `group-${w}`}-separator-${y.label || Math.random()}`;
                                return /* @__PURE__ */ n.jsx(ye, {}, j);
                              }
                              return /* @__PURE__ */ n.jsxs(se, { onSelect: () => y.key && ae(y.key), children: [
                                y.icon,
                                /* @__PURE__ */ n.jsx("span", { children: y.label })
                              ] }, y.key);
                            }) }, N.group || `group-${w}`);
                          }
                          const k = N;
                          if (k.type === "separator") {
                            const p = k.key || `flat-separator-${k.label || w}`;
                            return /* @__PURE__ */ n.jsx(ye, {}, p);
                          }
                          return /* @__PURE__ */ n.jsxs(se, { onSelect: () => k.key && ae(k.key), children: [
                            k.icon,
                            /* @__PURE__ */ n.jsx("span", { children: k.label })
                          ] }, k.key);
                        })
                      ] })
                    ] })
                  )
                }
              )
            ]
          }
        ),
        e.map((N) => {
          const w = J[N.field];
          return w ? /* @__PURE__ */ n.jsxs("div", { className: Cs({ variant: i }), "data-slot": "filter-item", children: [
            /* @__PURE__ */ n.jsxs("div", { className: ys({ variant: i, size: c, radius: x }), children: [
              w.icon,
              w.label
            ] }),
            /* @__PURE__ */ n.jsx(
              Es,
              {
                field: w,
                operator: N.operator,
                values: N.values,
                onChange: (k) => Y(N.id, { operator: k })
              }
            ),
            /* @__PURE__ */ n.jsx(
              _s,
              {
                field: w,
                operator: N.operator,
                values: N.values,
                onChange: (k) => Y(N.id, { values: k })
              }
            ),
            /* @__PURE__ */ n.jsx(Ps, { onClick: () => Q(N.id) })
          ] }, N.id) : null;
        })
      ] })
    }
  );
}
const _t = (e, r, t = []) => ({
  id: `${Date.now()}-${Math.random().toString(36).substring(2, 11)}`,
  field: e,
  operator: r || "is",
  values: t
});
export {
  zs as F,
  Rs as T,
  _n as V,
  vs as a,
  fs as b,
  _t as c,
  Er as d,
  En as u
};
//# sourceMappingURL=filters-DpGBZvey.mjs.map
