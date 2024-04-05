"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [257],
  {
    9259: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      });
      /**
       * @license lucide-react v0.356.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let r = (0, t(843).Z)("Check", [
        ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }],
      ]);
    },
    7805: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      });
      /**
       * @license lucide-react v0.356.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let r = (0, t(843).Z)("ChevronRight", [
        ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
      ]);
    },
    7501: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      });
      /**
       * @license lucide-react v0.356.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let r = (0, t(843).Z)("Circle", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ]);
    },
    1100: function (e, n, t) {
      t.d(n, {
        oC: function () {
          return eQ;
        },
        VY: function () {
          return eN;
        },
        ZA: function () {
          return ej;
        },
        ck: function () {
          return eJ;
        },
        wU: function () {
          return e1;
        },
        __: function () {
          return eq;
        },
        Uv: function () {
          return eH;
        },
        Ee: function () {
          return e$;
        },
        Rk: function () {
          return e0;
        },
        fC: function () {
          return eX;
        },
        Z0: function () {
          return e2;
        },
        Tr: function () {
          return e6;
        },
        tu: function () {
          return e8;
        },
        fF: function () {
          return e7;
        },
        xz: function () {
          return eY;
        },
      });
      var r = t(2110),
        o = t(2265),
        a = t(4991),
        u = t(1266),
        l = t(4104),
        c = t(9310),
        i = t(9586),
        d = t(7533),
        s = t(3876),
        p = t(1260),
        f = t(6007),
        m = t(8082),
        v = t(8687),
        g = t(2338),
        h = t(7881),
        w = t(2642),
        M = t(3715),
        _ = t(9143),
        E = t(9830),
        C = t(6674),
        b = t(7225);
      let D = ["Enter", " "],
        y = ["ArrowUp", "PageDown", "End"],
        R = ["ArrowDown", "PageUp", "Home", ...y],
        k = { ltr: [...D, "ArrowRight"], rtl: [...D, "ArrowLeft"] },
        P = { ltr: ["ArrowLeft"], rtl: ["ArrowRight"] },
        Z = "Menu",
        [O, x, T] = (0, d.B)(Z),
        [I, F] = (0, l.b)(Z, [T, g.D7, M.Pc]),
        S = (0, g.D7)(),
        K = (0, M.Pc)(),
        [L, A] = I(Z),
        [V, W] = I(Z),
        U = (0, o.forwardRef)((e, n) => {
          let { __scopeMenu: t, ...a } = e,
            u = S(t);
          return (0, o.createElement)(g.ee, (0, r.Z)({}, u, a, { ref: n }));
        }),
        G = "MenuPortal",
        [B, z] = I(G, { forceMount: void 0 }),
        X = "MenuContent",
        [Y, H] = I(X),
        N = (0, o.forwardRef)((e, n) => {
          let t = z(X, e.__scopeMenu),
            { forceMount: a = t.forceMount, ...u } = e,
            l = A(X, e.__scopeMenu),
            c = W(X, e.__scopeMenu);
          return (0, o.createElement)(
            O.Provider,
            { scope: e.__scopeMenu },
            (0, o.createElement)(
              w.z,
              { present: a || l.open },
              (0, o.createElement)(
                O.Slot,
                { scope: e.__scopeMenu },
                c.modal
                  ? (0, o.createElement)(j, (0, r.Z)({}, u, { ref: n }))
                  : (0, o.createElement)(q, (0, r.Z)({}, u, { ref: n }))
              )
            )
          );
        }),
        j = (0, o.forwardRef)((e, n) => {
          let t = A(X, e.__scopeMenu),
            l = (0, o.useRef)(null),
            c = (0, u.e)(n, l);
          return (
            (0, o.useEffect)(() => {
              let e = l.current;
              if (e) return (0, C.Ry)(e);
            }, []),
            (0, o.createElement)(
              J,
              (0, r.Z)({}, e, {
                ref: c,
                trapFocus: t.open,
                disableOutsidePointerEvents: t.open,
                disableOutsideScroll: !0,
                onFocusOutside: (0, a.M)(
                  e.onFocusOutside,
                  (e) => e.preventDefault(),
                  { checkForDefaultPrevented: !1 }
                ),
                onDismiss: () => t.onOpenChange(!1),
              })
            )
          );
        }),
        q = (0, o.forwardRef)((e, n) => {
          let t = A(X, e.__scopeMenu);
          return (0, o.createElement)(
            J,
            (0, r.Z)({}, e, {
              ref: n,
              trapFocus: !1,
              disableOutsidePointerEvents: !1,
              disableOutsideScroll: !1,
              onDismiss: () => t.onOpenChange(!1),
            })
          );
        }),
        J = (0, o.forwardRef)((e, n) => {
          let {
              __scopeMenu: t,
              loop: l = !1,
              trapFocus: c,
              onOpenAutoFocus: i,
              onCloseAutoFocus: d,
              disableOutsidePointerEvents: s,
              onEntryFocus: v,
              onEscapeKeyDown: h,
              onPointerDownOutside: w,
              onFocusOutside: E,
              onInteractOutside: C,
              onDismiss: D,
              disableOutsideScroll: k,
              ...P
            } = e,
            Z = A(X, t),
            O = W(X, t),
            T = S(t),
            I = K(t),
            F = x(t),
            [L, V] = (0, o.useState)(null),
            U = (0, o.useRef)(null),
            G = (0, u.e)(n, U, Z.onContentChange),
            B = (0, o.useRef)(0),
            z = (0, o.useRef)(""),
            H = (0, o.useRef)(0),
            N = (0, o.useRef)(null),
            j = (0, o.useRef)("right"),
            q = (0, o.useRef)(0),
            J = k ? b.Z : o.Fragment,
            Q = k ? { as: _.g7, allowPinchZoom: !0 } : void 0,
            $ = (e) => {
              var n, t;
              let r = z.current + e,
                o = F().filter((e) => !e.disabled),
                a = document.activeElement,
                u =
                  null === (n = o.find((e) => e.ref.current === a)) ||
                  void 0 === n
                    ? void 0
                    : n.textValue,
                l = (function (e, n, t) {
                  var r;
                  let o =
                      n.length > 1 && Array.from(n).every((e) => e === n[0])
                        ? n[0]
                        : n,
                    a =
                      ((r = Math.max(t ? e.indexOf(t) : -1, 0)),
                      e.map((n, t) => e[(r + t) % e.length]));
                  1 === o.length && (a = a.filter((e) => e !== t));
                  let u = a.find((e) =>
                    e.toLowerCase().startsWith(o.toLowerCase())
                  );
                  return u !== t ? u : void 0;
                })(
                  o.map((e) => e.textValue),
                  r,
                  u
                ),
                c =
                  null === (t = o.find((e) => e.textValue === l)) ||
                  void 0 === t
                    ? void 0
                    : t.ref.current;
              !(function e(n) {
                (z.current = n),
                  window.clearTimeout(B.current),
                  "" !== n && (B.current = window.setTimeout(() => e(""), 1e3));
              })(r),
                c && setTimeout(() => c.focus());
            };
          (0, o.useEffect)(() => () => window.clearTimeout(B.current), []),
            (0, f.EW)();
          let ee = (0, o.useCallback)((e) => {
            var n, t, r;
            return (
              j.current ===
                (null === (n = N.current) || void 0 === n ? void 0 : n.side) &&
              !!(r =
                null === (t = N.current) || void 0 === t ? void 0 : t.area) &&
              (function (e, n) {
                let { x: t, y: r } = e,
                  o = !1;
                for (let e = 0, a = n.length - 1; e < n.length; a = e++) {
                  let u = n[e].x,
                    l = n[e].y,
                    c = n[a].x,
                    i = n[a].y;
                  l > r != i > r &&
                    t < ((c - u) * (r - l)) / (i - l) + u &&
                    (o = !o);
                }
                return o;
              })({ x: e.clientX, y: e.clientY }, r)
            );
          }, []);
          return (0, o.createElement)(
            Y,
            {
              scope: t,
              searchRef: z,
              onItemEnter: (0, o.useCallback)(
                (e) => {
                  ee(e) && e.preventDefault();
                },
                [ee]
              ),
              onItemLeave: (0, o.useCallback)(
                (e) => {
                  var n;
                  ee(e) ||
                    (null === (n = U.current) || void 0 === n || n.focus(),
                    V(null));
                },
                [ee]
              ),
              onTriggerLeave: (0, o.useCallback)(
                (e) => {
                  ee(e) && e.preventDefault();
                },
                [ee]
              ),
              pointerGraceTimerRef: H,
              onPointerGraceIntentChange: (0, o.useCallback)((e) => {
                N.current = e;
              }, []),
            },
            (0, o.createElement)(
              J,
              Q,
              (0, o.createElement)(
                m.M,
                {
                  asChild: !0,
                  trapped: c,
                  onMountAutoFocus: (0, a.M)(i, (e) => {
                    var n;
                    e.preventDefault(),
                      null === (n = U.current) || void 0 === n || n.focus();
                  }),
                  onUnmountAutoFocus: d,
                },
                (0, o.createElement)(
                  p.XB,
                  {
                    asChild: !0,
                    disableOutsidePointerEvents: s,
                    onEscapeKeyDown: h,
                    onPointerDownOutside: w,
                    onFocusOutside: E,
                    onInteractOutside: C,
                    onDismiss: D,
                  },
                  (0, o.createElement)(
                    M.fC,
                    (0, r.Z)({ asChild: !0 }, I, {
                      dir: O.dir,
                      orientation: "vertical",
                      loop: l,
                      currentTabStopId: L,
                      onCurrentTabStopIdChange: V,
                      onEntryFocus: (0, a.M)(v, (e) => {
                        O.isUsingKeyboardRef.current || e.preventDefault();
                      }),
                    }),
                    (0, o.createElement)(
                      g.VY,
                      (0, r.Z)(
                        {
                          role: "menu",
                          "aria-orientation": "vertical",
                          "data-state": e_(Z.open),
                          "data-radix-menu-content": "",
                          dir: O.dir,
                        },
                        T,
                        P,
                        {
                          ref: G,
                          style: { outline: "none", ...P.style },
                          onKeyDown: (0, a.M)(P.onKeyDown, (e) => {
                            let n =
                                e.target.closest(
                                  "[data-radix-menu-content]"
                                ) === e.currentTarget,
                              t = e.ctrlKey || e.altKey || e.metaKey,
                              r = 1 === e.key.length;
                            n &&
                              ("Tab" === e.key && e.preventDefault(),
                              !t && r && $(e.key));
                            let o = U.current;
                            if (e.target !== o || !R.includes(e.key)) return;
                            e.preventDefault();
                            let a = F()
                              .filter((e) => !e.disabled)
                              .map((e) => e.ref.current);
                            y.includes(e.key) && a.reverse(),
                              (function (e) {
                                let n = document.activeElement;
                                for (let t of e)
                                  if (
                                    t === n ||
                                    (t.focus(), document.activeElement !== n)
                                  )
                                    return;
                              })(a);
                          }),
                          onBlur: (0, a.M)(e.onBlur, (e) => {
                            e.currentTarget.contains(e.target) ||
                              (window.clearTimeout(B.current),
                              (z.current = ""));
                          }),
                          onPointerMove: (0, a.M)(
                            e.onPointerMove,
                            eb((e) => {
                              let n = e.target,
                                t = q.current !== e.clientX;
                              if (e.currentTarget.contains(n) && t) {
                                let n =
                                  e.clientX > q.current ? "right" : "left";
                                (j.current = n), (q.current = e.clientX);
                              }
                            })
                          ),
                        }
                      )
                    )
                  )
                )
              )
            )
          );
        }),
        Q = (0, o.forwardRef)((e, n) => {
          let { __scopeMenu: t, ...a } = e;
          return (0, o.createElement)(
            i.WV.div,
            (0, r.Z)({ role: "group" }, a, { ref: n })
          );
        }),
        $ = (0, o.forwardRef)((e, n) => {
          let { __scopeMenu: t, ...a } = e;
          return (0, o.createElement)(i.WV.div, (0, r.Z)({}, a, { ref: n }));
        }),
        ee = "MenuItem",
        en = "menu.itemSelect",
        et = (0, o.forwardRef)((e, n) => {
          let { disabled: t = !1, onSelect: l, ...c } = e,
            d = (0, o.useRef)(null),
            s = W(ee, e.__scopeMenu),
            p = H(ee, e.__scopeMenu),
            f = (0, u.e)(n, d),
            m = (0, o.useRef)(!1);
          return (0, o.createElement)(
            er,
            (0, r.Z)({}, c, {
              ref: f,
              disabled: t,
              onClick: (0, a.M)(e.onClick, () => {
                let e = d.current;
                if (!t && e) {
                  let n = new CustomEvent(en, { bubbles: !0, cancelable: !0 });
                  e.addEventListener(en, (e) => (null == l ? void 0 : l(e)), {
                    once: !0,
                  }),
                    (0, i.jH)(e, n),
                    n.defaultPrevented ? (m.current = !1) : s.onClose();
                }
              }),
              onPointerDown: (n) => {
                var t;
                null === (t = e.onPointerDown) || void 0 === t || t.call(e, n),
                  (m.current = !0);
              },
              onPointerUp: (0, a.M)(e.onPointerUp, (e) => {
                var n;
                m.current ||
                  null === (n = e.currentTarget) ||
                  void 0 === n ||
                  n.click();
              }),
              onKeyDown: (0, a.M)(e.onKeyDown, (e) => {
                let n = "" !== p.searchRef.current;
                !t &&
                  (!n || " " !== e.key) &&
                  D.includes(e.key) &&
                  (e.currentTarget.click(), e.preventDefault());
              }),
            })
          );
        }),
        er = (0, o.forwardRef)((e, n) => {
          let { __scopeMenu: t, disabled: l = !1, textValue: c, ...d } = e,
            s = H(ee, t),
            p = K(t),
            f = (0, o.useRef)(null),
            m = (0, u.e)(n, f),
            [v, g] = (0, o.useState)(!1),
            [h, w] = (0, o.useState)("");
          return (
            (0, o.useEffect)(() => {
              let e = f.current;
              if (e) {
                var n;
                w(
                  (null !== (n = e.textContent) && void 0 !== n ? n : "").trim()
                );
              }
            }, [d.children]),
            (0, o.createElement)(
              O.ItemSlot,
              { scope: t, disabled: l, textValue: null != c ? c : h },
              (0, o.createElement)(
                M.ck,
                (0, r.Z)({ asChild: !0 }, p, { focusable: !l }),
                (0, o.createElement)(
                  i.WV.div,
                  (0, r.Z)(
                    {
                      role: "menuitem",
                      "data-highlighted": v ? "" : void 0,
                      "aria-disabled": l || void 0,
                      "data-disabled": l ? "" : void 0,
                    },
                    d,
                    {
                      ref: m,
                      onPointerMove: (0, a.M)(
                        e.onPointerMove,
                        eb((e) => {
                          l
                            ? s.onItemLeave(e)
                            : (s.onItemEnter(e),
                              e.defaultPrevented || e.currentTarget.focus());
                        })
                      ),
                      onPointerLeave: (0, a.M)(
                        e.onPointerLeave,
                        eb((e) => s.onItemLeave(e))
                      ),
                      onFocus: (0, a.M)(e.onFocus, () => g(!0)),
                      onBlur: (0, a.M)(e.onBlur, () => g(!1)),
                    }
                  )
                )
              )
            )
          );
        }),
        eo = (0, o.forwardRef)((e, n) => {
          let { checked: t = !1, onCheckedChange: u, ...l } = e;
          return (0, o.createElement)(
            ed,
            { scope: e.__scopeMenu, checked: t },
            (0, o.createElement)(
              et,
              (0, r.Z)(
                {
                  role: "menuitemcheckbox",
                  "aria-checked": eE(t) ? "mixed" : t,
                },
                l,
                {
                  ref: n,
                  "data-state": eC(t),
                  onSelect: (0, a.M)(
                    l.onSelect,
                    () => (null == u ? void 0 : u(!!eE(t) || !t)),
                    { checkForDefaultPrevented: !1 }
                  ),
                }
              )
            )
          );
        }),
        [ea, eu] = I("MenuRadioGroup", {
          value: void 0,
          onValueChange: () => {},
        }),
        el = (0, o.forwardRef)((e, n) => {
          let { value: t, onValueChange: a, ...u } = e,
            l = (0, E.W)(a);
          return (0, o.createElement)(
            ea,
            { scope: e.__scopeMenu, value: t, onValueChange: l },
            (0, o.createElement)(Q, (0, r.Z)({}, u, { ref: n }))
          );
        }),
        ec = (0, o.forwardRef)((e, n) => {
          let { value: t, ...u } = e,
            l = eu("MenuRadioItem", e.__scopeMenu),
            c = t === l.value;
          return (0, o.createElement)(
            ed,
            { scope: e.__scopeMenu, checked: c },
            (0, o.createElement)(
              et,
              (0, r.Z)({ role: "menuitemradio", "aria-checked": c }, u, {
                ref: n,
                "data-state": eC(c),
                onSelect: (0, a.M)(
                  u.onSelect,
                  () => {
                    var e;
                    return null === (e = l.onValueChange) || void 0 === e
                      ? void 0
                      : e.call(l, t);
                  },
                  { checkForDefaultPrevented: !1 }
                ),
              })
            )
          );
        }),
        ei = "MenuItemIndicator",
        [ed, es] = I(ei, { checked: !1 }),
        ep = (0, o.forwardRef)((e, n) => {
          let { __scopeMenu: t, forceMount: a, ...u } = e,
            l = es(ei, t);
          return (0, o.createElement)(
            w.z,
            { present: a || eE(l.checked) || !0 === l.checked },
            (0, o.createElement)(
              i.WV.span,
              (0, r.Z)({}, u, { ref: n, "data-state": eC(l.checked) })
            )
          );
        }),
        ef = (0, o.forwardRef)((e, n) => {
          let { __scopeMenu: t, ...a } = e;
          return (0, o.createElement)(
            i.WV.div,
            (0, r.Z)(
              { role: "separator", "aria-orientation": "horizontal" },
              a,
              { ref: n }
            )
          );
        }),
        em =
          ((e, n) => {
            let { __scopeMenu: t, ...a } = e,
              u = S(t);
            return (0, o.createElement)(g.Eh, (0, r.Z)({}, u, a, { ref: n }));
          },
          "MenuSub"),
        [ev, eg] = I(em),
        eh = "MenuSubTrigger",
        ew = (0, o.forwardRef)((e, n) => {
          let t = A(eh, e.__scopeMenu),
            l = W(eh, e.__scopeMenu),
            c = eg(eh, e.__scopeMenu),
            i = H(eh, e.__scopeMenu),
            d = (0, o.useRef)(null),
            { pointerGraceTimerRef: s, onPointerGraceIntentChange: p } = i,
            f = { __scopeMenu: e.__scopeMenu },
            m = (0, o.useCallback)(() => {
              d.current && window.clearTimeout(d.current), (d.current = null);
            }, []);
          return (
            (0, o.useEffect)(() => m, [m]),
            (0, o.useEffect)(() => {
              let e = s.current;
              return () => {
                window.clearTimeout(e), p(null);
              };
            }, [s, p]),
            (0, o.createElement)(
              U,
              (0, r.Z)({ asChild: !0 }, f),
              (0, o.createElement)(
                er,
                (0, r.Z)(
                  {
                    id: c.triggerId,
                    "aria-haspopup": "menu",
                    "aria-expanded": t.open,
                    "aria-controls": c.contentId,
                    "data-state": e_(t.open),
                  },
                  e,
                  {
                    ref: (0, u.F)(n, c.onTriggerChange),
                    onClick: (n) => {
                      var r;
                      null === (r = e.onClick) || void 0 === r || r.call(e, n),
                        e.disabled ||
                          n.defaultPrevented ||
                          (n.currentTarget.focus(),
                          t.open || t.onOpenChange(!0));
                    },
                    onPointerMove: (0, a.M)(
                      e.onPointerMove,
                      eb((n) => {
                        i.onItemEnter(n),
                          n.defaultPrevented ||
                            e.disabled ||
                            t.open ||
                            d.current ||
                            (i.onPointerGraceIntentChange(null),
                            (d.current = window.setTimeout(() => {
                              t.onOpenChange(!0), m();
                            }, 100)));
                      })
                    ),
                    onPointerLeave: (0, a.M)(
                      e.onPointerLeave,
                      eb((e) => {
                        var n, r;
                        m();
                        let o =
                          null === (n = t.content) || void 0 === n
                            ? void 0
                            : n.getBoundingClientRect();
                        if (o) {
                          let n =
                              null === (r = t.content) || void 0 === r
                                ? void 0
                                : r.dataset.side,
                            a = "right" === n,
                            u = o[a ? "left" : "right"],
                            l = o[a ? "right" : "left"];
                          i.onPointerGraceIntentChange({
                            area: [
                              { x: e.clientX + (a ? -5 : 5), y: e.clientY },
                              { x: u, y: o.top },
                              { x: l, y: o.top },
                              { x: l, y: o.bottom },
                              { x: u, y: o.bottom },
                            ],
                            side: n,
                          }),
                            window.clearTimeout(s.current),
                            (s.current = window.setTimeout(
                              () => i.onPointerGraceIntentChange(null),
                              300
                            ));
                        } else {
                          if ((i.onTriggerLeave(e), e.defaultPrevented)) return;
                          i.onPointerGraceIntentChange(null);
                        }
                      })
                    ),
                    onKeyDown: (0, a.M)(e.onKeyDown, (n) => {
                      let r = "" !== i.searchRef.current;
                      if (
                        !e.disabled &&
                        (!r || " " !== n.key) &&
                        k[l.dir].includes(n.key)
                      ) {
                        var o;
                        t.onOpenChange(!0),
                          null === (o = t.content) || void 0 === o || o.focus(),
                          n.preventDefault();
                      }
                    }),
                  }
                )
              )
            )
          );
        }),
        eM = (0, o.forwardRef)((e, n) => {
          let t = z(X, e.__scopeMenu),
            { forceMount: l = t.forceMount, ...c } = e,
            i = A(X, e.__scopeMenu),
            d = W(X, e.__scopeMenu),
            s = eg("MenuSubContent", e.__scopeMenu),
            p = (0, o.useRef)(null),
            f = (0, u.e)(n, p);
          return (0, o.createElement)(
            O.Provider,
            { scope: e.__scopeMenu },
            (0, o.createElement)(
              w.z,
              { present: l || i.open },
              (0, o.createElement)(
                O.Slot,
                { scope: e.__scopeMenu },
                (0, o.createElement)(
                  J,
                  (0, r.Z)(
                    { id: s.contentId, "aria-labelledby": s.triggerId },
                    c,
                    {
                      ref: f,
                      align: "start",
                      side: "rtl" === d.dir ? "left" : "right",
                      disableOutsidePointerEvents: !1,
                      disableOutsideScroll: !1,
                      trapFocus: !1,
                      onOpenAutoFocus: (e) => {
                        var n;
                        d.isUsingKeyboardRef.current &&
                          (null === (n = p.current) ||
                            void 0 === n ||
                            n.focus()),
                          e.preventDefault();
                      },
                      onCloseAutoFocus: (e) => e.preventDefault(),
                      onFocusOutside: (0, a.M)(e.onFocusOutside, (e) => {
                        e.target !== s.trigger && i.onOpenChange(!1);
                      }),
                      onEscapeKeyDown: (0, a.M)(e.onEscapeKeyDown, (e) => {
                        d.onClose(), e.preventDefault();
                      }),
                      onKeyDown: (0, a.M)(e.onKeyDown, (e) => {
                        let n = e.currentTarget.contains(e.target),
                          t = P[d.dir].includes(e.key);
                        if (n && t) {
                          var r;
                          i.onOpenChange(!1),
                            null === (r = s.trigger) ||
                              void 0 === r ||
                              r.focus(),
                            e.preventDefault();
                        }
                      }),
                    }
                  )
                )
              )
            )
          );
        });
      function e_(e) {
        return e ? "open" : "closed";
      }
      function eE(e) {
        return "indeterminate" === e;
      }
      function eC(e) {
        return eE(e) ? "indeterminate" : e ? "checked" : "unchecked";
      }
      function eb(e) {
        return (n) => ("mouse" === n.pointerType ? e(n) : void 0);
      }
      let eD = (e) => {
          let {
              __scopeMenu: n,
              open: t = !1,
              children: r,
              dir: a,
              onOpenChange: u,
              modal: l = !0,
            } = e,
            c = S(n),
            [i, d] = (0, o.useState)(null),
            p = (0, o.useRef)(!1),
            f = (0, E.W)(u),
            m = (0, s.gm)(a);
          return (
            (0, o.useEffect)(() => {
              let e = () => {
                  (p.current = !0),
                    document.addEventListener("pointerdown", n, {
                      capture: !0,
                      once: !0,
                    }),
                    document.addEventListener("pointermove", n, {
                      capture: !0,
                      once: !0,
                    });
                },
                n = () => (p.current = !1);
              return (
                document.addEventListener("keydown", e, { capture: !0 }),
                () => {
                  document.removeEventListener("keydown", e, { capture: !0 }),
                    document.removeEventListener("pointerdown", n, {
                      capture: !0,
                    }),
                    document.removeEventListener("pointermove", n, {
                      capture: !0,
                    });
                }
              );
            }, []),
            (0, o.createElement)(
              g.fC,
              c,
              (0, o.createElement)(
                L,
                {
                  scope: n,
                  open: t,
                  onOpenChange: f,
                  content: i,
                  onContentChange: d,
                },
                (0, o.createElement)(
                  V,
                  {
                    scope: n,
                    onClose: (0, o.useCallback)(() => f(!1), [f]),
                    isUsingKeyboardRef: p,
                    dir: m,
                    modal: l,
                  },
                  r
                )
              )
            )
          );
        },
        ey = (e) => {
          let { __scopeMenu: n, forceMount: t, children: r, container: a } = e,
            u = A(G, n);
          return (0, o.createElement)(
            B,
            { scope: n, forceMount: t },
            (0, o.createElement)(
              w.z,
              { present: t || u.open },
              (0, o.createElement)(h.h, { asChild: !0, container: a }, r)
            )
          );
        },
        eR = (e) => {
          let {
              __scopeMenu: n,
              children: t,
              open: r = !1,
              onOpenChange: a,
            } = e,
            u = A(em, n),
            l = S(n),
            [c, i] = (0, o.useState)(null),
            [d, s] = (0, o.useState)(null),
            p = (0, E.W)(a);
          return (
            (0, o.useEffect)(
              () => (!1 === u.open && p(!1), () => p(!1)),
              [u.open, p]
            ),
            (0, o.createElement)(
              g.fC,
              l,
              (0, o.createElement)(
                L,
                {
                  scope: n,
                  open: r,
                  onOpenChange: p,
                  content: d,
                  onContentChange: s,
                },
                (0, o.createElement)(
                  ev,
                  {
                    scope: n,
                    contentId: (0, v.M)(),
                    triggerId: (0, v.M)(),
                    trigger: c,
                    onTriggerChange: i,
                  },
                  t
                )
              )
            )
          );
        },
        ek = "DropdownMenu",
        [eP, eZ] = (0, l.b)(ek, [F]),
        eO = F(),
        [ex, eT] = eP(ek),
        eI = (0, o.forwardRef)((e, n) => {
          let { __scopeDropdownMenu: t, disabled: l = !1, ...c } = e,
            d = eT("DropdownMenuTrigger", t),
            s = eO(t);
          return (0, o.createElement)(
            U,
            (0, r.Z)({ asChild: !0 }, s),
            (0, o.createElement)(
              i.WV.button,
              (0, r.Z)(
                {
                  type: "button",
                  id: d.triggerId,
                  "aria-haspopup": "menu",
                  "aria-expanded": d.open,
                  "aria-controls": d.open ? d.contentId : void 0,
                  "data-state": d.open ? "open" : "closed",
                  "data-disabled": l ? "" : void 0,
                  disabled: l,
                },
                c,
                {
                  ref: (0, u.F)(n, d.triggerRef),
                  onPointerDown: (0, a.M)(e.onPointerDown, (e) => {
                    l ||
                      0 !== e.button ||
                      !1 !== e.ctrlKey ||
                      (d.onOpenToggle(), d.open || e.preventDefault());
                  }),
                  onKeyDown: (0, a.M)(e.onKeyDown, (e) => {
                    !l &&
                      (["Enter", " "].includes(e.key) && d.onOpenToggle(),
                      "ArrowDown" === e.key && d.onOpenChange(!0),
                      ["Enter", " ", "ArrowDown"].includes(e.key) &&
                        e.preventDefault());
                  }),
                }
              )
            )
          );
        }),
        eF = (0, o.forwardRef)((e, n) => {
          let { __scopeDropdownMenu: t, ...u } = e,
            l = eT("DropdownMenuContent", t),
            c = eO(t),
            i = (0, o.useRef)(!1);
          return (0, o.createElement)(
            N,
            (0, r.Z)(
              { id: l.contentId, "aria-labelledby": l.triggerId },
              c,
              u,
              {
                ref: n,
                onCloseAutoFocus: (0, a.M)(e.onCloseAutoFocus, (e) => {
                  var n;
                  i.current ||
                    null === (n = l.triggerRef.current) ||
                    void 0 === n ||
                    n.focus(),
                    (i.current = !1),
                    e.preventDefault();
                }),
                onInteractOutside: (0, a.M)(e.onInteractOutside, (e) => {
                  let n = e.detail.originalEvent,
                    t = 0 === n.button && !0 === n.ctrlKey,
                    r = 2 === n.button || t;
                  (!l.modal || r) && (i.current = !0);
                }),
                style: {
                  ...e.style,
                  "--radix-dropdown-menu-content-transform-origin":
                    "var(--radix-popper-transform-origin)",
                  "--radix-dropdown-menu-content-available-width":
                    "var(--radix-popper-available-width)",
                  "--radix-dropdown-menu-content-available-height":
                    "var(--radix-popper-available-height)",
                  "--radix-dropdown-menu-trigger-width":
                    "var(--radix-popper-anchor-width)",
                  "--radix-dropdown-menu-trigger-height":
                    "var(--radix-popper-anchor-height)",
                },
              }
            )
          );
        }),
        eS = (0, o.forwardRef)((e, n) => {
          let { __scopeDropdownMenu: t, ...a } = e,
            u = eO(t);
          return (0, o.createElement)(Q, (0, r.Z)({}, u, a, { ref: n }));
        }),
        eK = (0, o.forwardRef)((e, n) => {
          let { __scopeDropdownMenu: t, ...a } = e,
            u = eO(t);
          return (0, o.createElement)($, (0, r.Z)({}, u, a, { ref: n }));
        }),
        eL = (0, o.forwardRef)((e, n) => {
          let { __scopeDropdownMenu: t, ...a } = e,
            u = eO(t);
          return (0, o.createElement)(et, (0, r.Z)({}, u, a, { ref: n }));
        }),
        eA = (0, o.forwardRef)((e, n) => {
          let { __scopeDropdownMenu: t, ...a } = e,
            u = eO(t);
          return (0, o.createElement)(eo, (0, r.Z)({}, u, a, { ref: n }));
        }),
        eV = (0, o.forwardRef)((e, n) => {
          let { __scopeDropdownMenu: t, ...a } = e,
            u = eO(t);
          return (0, o.createElement)(el, (0, r.Z)({}, u, a, { ref: n }));
        }),
        eW = (0, o.forwardRef)((e, n) => {
          let { __scopeDropdownMenu: t, ...a } = e,
            u = eO(t);
          return (0, o.createElement)(ec, (0, r.Z)({}, u, a, { ref: n }));
        }),
        eU = (0, o.forwardRef)((e, n) => {
          let { __scopeDropdownMenu: t, ...a } = e,
            u = eO(t);
          return (0, o.createElement)(ep, (0, r.Z)({}, u, a, { ref: n }));
        }),
        eG = (0, o.forwardRef)((e, n) => {
          let { __scopeDropdownMenu: t, ...a } = e,
            u = eO(t);
          return (0, o.createElement)(ef, (0, r.Z)({}, u, a, { ref: n }));
        }),
        eB = (0, o.forwardRef)((e, n) => {
          let { __scopeDropdownMenu: t, ...a } = e,
            u = eO(t);
          return (0, o.createElement)(ew, (0, r.Z)({}, u, a, { ref: n }));
        }),
        ez = (0, o.forwardRef)((e, n) => {
          let { __scopeDropdownMenu: t, ...a } = e,
            u = eO(t);
          return (0, o.createElement)(
            eM,
            (0, r.Z)({}, u, a, {
              ref: n,
              style: {
                ...e.style,
                "--radix-dropdown-menu-content-transform-origin":
                  "var(--radix-popper-transform-origin)",
                "--radix-dropdown-menu-content-available-width":
                  "var(--radix-popper-available-width)",
                "--radix-dropdown-menu-content-available-height":
                  "var(--radix-popper-available-height)",
                "--radix-dropdown-menu-trigger-width":
                  "var(--radix-popper-anchor-width)",
                "--radix-dropdown-menu-trigger-height":
                  "var(--radix-popper-anchor-height)",
              },
            })
          );
        }),
        eX = (e) => {
          let {
              __scopeDropdownMenu: n,
              children: t,
              dir: a,
              open: u,
              defaultOpen: l,
              onOpenChange: i,
              modal: d = !0,
            } = e,
            s = eO(n),
            p = (0, o.useRef)(null),
            [f = !1, m] = (0, c.T)({ prop: u, defaultProp: l, onChange: i });
          return (0, o.createElement)(
            ex,
            {
              scope: n,
              triggerId: (0, v.M)(),
              triggerRef: p,
              contentId: (0, v.M)(),
              open: f,
              onOpenChange: m,
              onOpenToggle: (0, o.useCallback)(() => m((e) => !e), [m]),
              modal: d,
            },
            (0, o.createElement)(
              eD,
              (0, r.Z)({}, s, { open: f, onOpenChange: m, dir: a, modal: d }),
              t
            )
          );
        },
        eY = eI,
        eH = (e) => {
          let { __scopeDropdownMenu: n, ...t } = e,
            a = eO(n);
          return (0, o.createElement)(ey, (0, r.Z)({}, a, t));
        },
        eN = eF,
        ej = eS,
        eq = eK,
        eJ = eL,
        eQ = eA,
        e$ = eV,
        e0 = eW,
        e1 = eU,
        e2 = eG,
        e6 = (e) => {
          let {
              __scopeDropdownMenu: n,
              children: t,
              open: a,
              onOpenChange: u,
              defaultOpen: l,
            } = e,
            i = eO(n),
            [d = !1, s] = (0, c.T)({ prop: a, defaultProp: l, onChange: u });
          return (0, o.createElement)(
            eR,
            (0, r.Z)({}, i, { open: d, onOpenChange: s }),
            t
          );
        },
        e7 = eB,
        e8 = ez;
    },
  },
]);
