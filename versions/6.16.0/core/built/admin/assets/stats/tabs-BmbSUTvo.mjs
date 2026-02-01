import { f as u, j as t, q as K, t as B, D as G, B as x, c as p, G as T } from "./index-BxbeiQvY.mjs";
import { bP as L, P as W, Q as q, T as Q, W as f, bQ as C, bR as U, bS as H, Y as y, _ as O, o as Y, bT as J, bU as X, B as Z, av as ee } from "./stats-CtTAHMmO.mjs";
var h = "Tabs", [te] = q(h, [
  C
]), w = C(), [ae, N] = te(h), k = u(
  (e, a) => {
    const {
      __scopeTabs: n,
      value: s,
      onValueChange: r,
      defaultValue: i,
      orientation: o = "horizontal",
      dir: d,
      activationMode: g = "automatic",
      ...m
    } = e, c = L(d), [l, b] = W({
      prop: s,
      onChange: r,
      defaultProp: i ?? "",
      caller: h
    });
    return /* @__PURE__ */ t.jsx(
      ae,
      {
        scope: n,
        baseId: Q(),
        value: l,
        onValueChange: b,
        orientation: o,
        dir: c,
        activationMode: g,
        children: /* @__PURE__ */ t.jsx(
          f.div,
          {
            dir: c,
            "data-orientation": o,
            ...m,
            ref: a
          }
        )
      }
    );
  }
);
k.displayName = h;
var _ = "TabsList", I = u(
  (e, a) => {
    const { __scopeTabs: n, loop: s = !0, ...r } = e, i = N(_, n), o = w(n);
    return /* @__PURE__ */ t.jsx(
      U,
      {
        asChild: !0,
        ...o,
        orientation: i.orientation,
        dir: i.dir,
        loop: s,
        children: /* @__PURE__ */ t.jsx(
          f.div,
          {
            role: "tablist",
            "aria-orientation": i.orientation,
            ...r,
            ref: a
          }
        )
      }
    );
  }
);
I.displayName = _;
var V = "TabsTrigger", P = u(
  (e, a) => {
    const { __scopeTabs: n, value: s, disabled: r = !1, ...i } = e, o = N(V, n), d = w(n), g = R(o.baseId, s), m = S(o.baseId, s), c = s === o.value;
    return /* @__PURE__ */ t.jsx(
      H,
      {
        asChild: !0,
        ...d,
        focusable: !r,
        active: c,
        children: /* @__PURE__ */ t.jsx(
          f.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": c,
            "aria-controls": m,
            "data-state": c ? "active" : "inactive",
            "data-disabled": r ? "" : void 0,
            disabled: r,
            id: g,
            ...i,
            ref: a,
            onMouseDown: y(e.onMouseDown, (l) => {
              !r && l.button === 0 && l.ctrlKey === !1 ? o.onValueChange(s) : l.preventDefault();
            }),
            onKeyDown: y(e.onKeyDown, (l) => {
              [" ", "Enter"].includes(l.key) && o.onValueChange(s);
            }),
            onFocus: y(e.onFocus, () => {
              const l = o.activationMode !== "manual";
              !c && !r && l && o.onValueChange(s);
            })
          }
        )
      }
    );
  }
);
P.displayName = V;
var A = "TabsContent", M = u(
  (e, a) => {
    const { __scopeTabs: n, value: s, forceMount: r, children: i, ...o } = e, d = N(A, n), g = R(d.baseId, s), m = S(d.baseId, s), c = s === d.value, l = K(c);
    return B(() => {
      const b = requestAnimationFrame(() => l.current = !1);
      return () => cancelAnimationFrame(b);
    }, []), /* @__PURE__ */ t.jsx(O, { present: r || c, children: ({ present: b }) => /* @__PURE__ */ t.jsx(
      f.div,
      {
        "data-state": c ? "active" : "inactive",
        "data-orientation": d.orientation,
        role: "tabpanel",
        "aria-labelledby": g,
        hidden: !b,
        id: m,
        tabIndex: 0,
        ...o,
        ref: a,
        style: {
          ...e.style,
          animationDuration: l.current ? "0s" : void 0
        },
        children: b && i
      }
    ) });
  }
);
M.displayName = A;
function R(e, a) {
  return `${e}-trigger-${a}`;
}
function S(e, a) {
  return `${e}-content-${a}`;
}
var E = k, F = I, j = P, z = M;
const v = G("segmented"), se = u(({ variant: e = "segmented", ...a }, n) => /* @__PURE__ */ t.jsx(v.Provider, { value: e, children: /* @__PURE__ */ t.jsx(E, { ref: n, ...a }) }));
se.displayName = E.displayName;
const ne = T(
  "inline-flex items-center text-muted-foreground",
  {
    variants: {
      variant: {
        segmented: "h-[34px] rounded-lg bg-muted px-[3px]",
        "segmented-sm": "h-8 rounded-lg bg-muted px-[3px]",
        button: "gap-2",
        "button-sm": "gap-1",
        underline: "w-full gap-5 border-b border-b-gray-200 dark:border-gray-950",
        navbar: "h-[52px] items-end gap-6",
        pill: "-ml-0.5 h-[30px] gap-px",
        kpis: "border-b ring-0"
      }
    },
    defaultVariants: {
      variant: "segmented"
    }
  }
), re = u(({ className: e, ...a }, n) => {
  const s = x(v);
  return /* @__PURE__ */ t.jsx(
    F,
    {
      ref: n,
      className: p(ne({ variant: s, className: e })),
      ...a
    }
  );
});
re.displayName = F.displayName;
const D = T(
  "inline-flex items-center justify-center whitespace-nowrap px-3 py-1 ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        segmented: "h-7 rounded-md text-sm font-medium data-[state=active]:shadow-md",
        "segmented-sm": "h-[26px] rounded-md text-xs font-medium data-[state=active]:shadow-md",
        button: "h-[34px] gap-1.5 rounded-md py-2 text-sm font-normal hover:bg-muted data-[state=active]:bg-muted-foreground/10 data-[state=active]:font-medium",
        "button-sm": "h-6 gap-1.5 rounded-md p-2 text-xs font-normal text-gray-800 hover:bg-muted data-[state=active]:bg-muted-foreground/10 data-[state=active]:font-medium data-[state=active]:text-foreground",
        underline: 'relative h-[36px] px-0 text-md font-semibold text-gray-700 after:absolute after:inset-x-0 after:bottom-[-1px] after:h-0.5 after:bg-foreground after:opacity-0 after:content-[""] hover:after:opacity-10 data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:after:!opacity-100',
        navbar: 'relative h-[52px] px-px text-md font-semibold text-muted-foreground after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:bg-foreground after:opacity-0 after:content-[""] hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:after:!opacity-100',
        pill: "relative h-[30px] rounded-md px-3 text-md font-medium text-gray-800 hover:text-foreground data-[state=active]:bg-muted-foreground/10 data-[state=active]:font-semibold data-[state=active]:text-foreground dark:text-gray-500 dark:data-[state=active]:text-foreground",
        kpis: 'relative !h-full !items-start rounded-none border-border bg-transparent px-6 py-5 text-foreground ring-0 transition-all after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:bg-foreground after:opacity-0 after:content-[""] first:rounded-tl-md last:rounded-tr-md hover:bg-accent/50 data-[state=active]:bg-transparent data-[state=active]:after:opacity-100 [&:not(:last-child)]:border-r [&[data-state=active]_[data-type="value"]]:text-foreground'
      }
    },
    defaultVariants: {
      variant: "segmented"
    }
  }
), $ = u(({ className: e, ...a }, n) => {
  const s = x(v);
  return /* @__PURE__ */ t.jsx(
    j,
    {
      ref: n,
      className: p(D({ variant: s, className: e })),
      ...a
    }
  );
});
$.displayName = j.displayName;
const oe = T(
  "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        segmented: "",
        "segmented-sm": "",
        button: "",
        "button-sm": "",
        underline: "",
        navbar: "",
        pill: "",
        kpis: "ring-0"
      }
    },
    defaultVariants: {
      variant: "segmented"
    }
  }
), ie = u(({ className: e, ...a }, n) => {
  const s = x(v);
  return /* @__PURE__ */ t.jsx(
    z,
    {
      ref: n,
      className: p(oe({ variant: s, className: e })),
      ...a
    }
  );
});
ie.displayName = z.displayName;
const ge = ({ children: e, ...a }) => /* @__PURE__ */ t.jsx($, { className: "h-auto", ...a, children: e }), me = ({
  color: e,
  icon: a,
  label: n,
  value: s,
  diffDirection: r,
  diffValue: i,
  className: o,
  "data-testid": d
}) => {
  const g = a ? Y[a] : null, m = p(
    "flex items-center gap-1 text-xs h-[22px] px-1.5 rounded-sm group/diff cursor-default mt-0.5",
    r === "up" && "text-green-600 bg-green/10",
    r === "down" && "text-red-600 bg-red/10",
    r === "same" && "text-gray-700 bg-muted"
  );
  return /* @__PURE__ */ t.jsxs("div", { className: p("group flex w-full flex-col items-start gap-2", o), children: [
    /* @__PURE__ */ t.jsxs("div", { className: "flex h-[22px] items-center gap-1.5 text-base font-medium text-muted-foreground transition-all group-hover:text-foreground", "data-type": "value", children: [
      e && /* @__PURE__ */ t.jsx("div", { className: "ml-1 size-2 rounded-full opacity-50", style: { backgroundColor: e } }),
      g && /* @__PURE__ */ t.jsx(g, { size: 16, strokeWidth: 1.5 }),
      n
    ] }),
    /* @__PURE__ */ t.jsxs("div", { className: "flex flex-col items-start gap-2 lg:flex-row xl:gap-3", children: [
      /* @__PURE__ */ t.jsx("div", { className: "text-[2.3rem] font-semibold leading-none tracking-tighter xl:text-[2.6rem]", "data-testid": d, children: s }),
      r && r !== "hidden" && /* @__PURE__ */ t.jsx(t.Fragment, { children: /* @__PURE__ */ t.jsxs("div", { className: m, "data-testid": d ? `${d}-diff` : void 0, children: [
        /* @__PURE__ */ t.jsx("span", { className: "font-medium leading-none", children: i }),
        r === "up" && /* @__PURE__ */ t.jsx(J, { className: "!size-[12px]", size: 14, strokeWidth: 2 }),
        r === "down" && /* @__PURE__ */ t.jsx(X, { className: "!size-[12px]", size: 14, strokeWidth: 2 })
      ] }) })
    ] })
  ] });
}, de = u(
  ({ variant: e = "dropdown", className: a, ...n }, s) => /* @__PURE__ */ t.jsx(
    Z,
    {
      ref: s,
      className: p(
        "h-auto w-full rounded-none border-x-0 border-t-0 focus-visible:ring-0 bg-transparent py-5",
        a
      ),
      variant: e,
      ...n
    }
  )
);
de.displayName = "KpiDropdownButton";
const le = u(({
  children: e,
  className: a,
  ...n
}, s) => {
  const r = x(v);
  return /* @__PURE__ */ t.jsxs("div", { className: "relative rounded-md hover:bg-muted", children: [
    /* @__PURE__ */ t.jsx(
      j,
      {
        ref: s,
        className: p(D({ variant: r, className: a })),
        ...n,
        children: /* @__PURE__ */ t.jsx("div", { className: "flex items-center gap-2", children: e })
      }
    ),
    /* @__PURE__ */ t.jsx(
      ee,
      {
        className: "absolute inset-0 size-full cursor-pointer",
        onClick: (i) => {
          i.preventDefault();
        }
      }
    )
  ] });
});
le.displayName = "TabsDropdownTrigger";
export {
  ge as K,
  se as T,
  re as a,
  $ as b,
  me as c,
  de as d
};
//# sourceMappingURL=tabs-BmbSUTvo.mjs.map
