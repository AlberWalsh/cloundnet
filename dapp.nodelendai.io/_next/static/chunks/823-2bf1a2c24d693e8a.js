(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [823],
  {
    9580: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      /**
       * @license lucide-react v0.356.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let r = (0, n(843).Z)("LoaderCircle", [
        ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
      ]);
    },
    8792: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return o.a;
        },
      });
      var r = n(5250),
        o = n.n(r);
    },
    9079: function (e, t, n) {
      "use strict";
      var r, o;
      e.exports =
        (null == (r = n.g.process) ? void 0 : r.env) &&
        "object" == typeof (null == (o = n.g.process) ? void 0 : o.env)
          ? n.g.process
          : n(3127);
    },
    3127: function (e) {
      !(function () {
        var t = {
            229: function (e) {
              var t,
                n,
                r,
                o = (e.exports = {});
              function i() {
                throw Error("setTimeout has not been defined");
              }
              function a() {
                throw Error("clearTimeout has not been defined");
              }
              function l(e) {
                if (t === setTimeout) return setTimeout(e, 0);
                if ((t === i || !t) && setTimeout)
                  return (t = setTimeout), setTimeout(e, 0);
                try {
                  return t(e, 0);
                } catch (n) {
                  try {
                    return t.call(null, e, 0);
                  } catch (n) {
                    return t.call(this, e, 0);
                  }
                }
              }
              !(function () {
                try {
                  t = "function" == typeof setTimeout ? setTimeout : i;
                } catch (e) {
                  t = i;
                }
                try {
                  n = "function" == typeof clearTimeout ? clearTimeout : a;
                } catch (e) {
                  n = a;
                }
              })();
              var u = [],
                s = !1,
                c = -1;
              function p() {
                s &&
                  r &&
                  ((s = !1),
                  r.length ? (u = r.concat(u)) : (c = -1),
                  u.length && d());
              }
              function d() {
                if (!s) {
                  var e = l(p);
                  s = !0;
                  for (var t = u.length; t; ) {
                    for (r = u, u = []; ++c < t; ) r && r[c].run();
                    (c = -1), (t = u.length);
                  }
                  (r = null),
                    (s = !1),
                    (function (e) {
                      if (n === clearTimeout) return clearTimeout(e);
                      if ((n === a || !n) && clearTimeout)
                        return (n = clearTimeout), clearTimeout(e);
                      try {
                        n(e);
                      } catch (t) {
                        try {
                          return n.call(null, e);
                        } catch (t) {
                          return n.call(this, e);
                        }
                      }
                    })(e);
                }
              }
              function f(e, t) {
                (this.fun = e), (this.array = t);
              }
              function v() {}
              (o.nextTick = function (e) {
                var t = Array(arguments.length - 1);
                if (arguments.length > 1)
                  for (var n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
                u.push(new f(e, t)), 1 !== u.length || s || l(d);
              }),
                (f.prototype.run = function () {
                  this.fun.apply(null, this.array);
                }),
                (o.title = "browser"),
                (o.browser = !0),
                (o.env = {}),
                (o.argv = []),
                (o.version = ""),
                (o.versions = {}),
                (o.on = v),
                (o.addListener = v),
                (o.once = v),
                (o.off = v),
                (o.removeListener = v),
                (o.removeAllListeners = v),
                (o.emit = v),
                (o.prependListener = v),
                (o.prependOnceListener = v),
                (o.listeners = function (e) {
                  return [];
                }),
                (o.binding = function (e) {
                  throw Error("process.binding is not supported");
                }),
                (o.cwd = function () {
                  return "/";
                }),
                (o.chdir = function (e) {
                  throw Error("process.chdir is not supported");
                }),
                (o.umask = function () {
                  return 0;
                });
            },
          },
          n = {};
        function r(e) {
          var o = n[e];
          if (void 0 !== o) return o.exports;
          var i = (n[e] = { exports: {} }),
            a = !0;
          try {
            t[e](i, i.exports, r), (a = !1);
          } finally {
            a && delete n[e];
          }
          return i.exports;
        }
        r.ab = "//";
        var o = r(229);
        e.exports = o;
      })();
    },
    4602: function (e, t, n) {
      "use strict";
      n.d(t, {
        f: function () {
          return a;
        },
      });
      var r = n(2110),
        o = n(2265),
        i = n(9586);
      let a = (0, o.forwardRef)((e, t) =>
        (0, o.createElement)(
          i.WV.label,
          (0, r.Z)({}, e, {
            ref: t,
            onMouseDown: (t) => {
              var n;
              null === (n = e.onMouseDown) || void 0 === n || n.call(e, t),
                !t.defaultPrevented && t.detail > 1 && t.preventDefault();
            },
          })
        )
      );
    },
    7827: function (e, t, n) {
      "use strict";
      n.d(t, {
        fC: function () {
          return x;
        },
        z$: function () {
          return b;
        },
      });
      var r = n(2110),
        o = n(2265),
        i = n(4104),
        a = n(9586);
      let l = "Progress",
        [u, s] = (0, i.b)(l),
        [c, p] = u(l),
        d = (0, o.forwardRef)((e, t) => {
          let {
              __scopeProgress: n,
              value: i,
              max: l,
              getValueLabel: u = v,
              ...s
            } = e,
            p = g(l) ? l : 100,
            d = y(i, p) ? i : null,
            f = m(d) ? u(d, p) : void 0;
          return (0, o.createElement)(
            c,
            { scope: n, value: d, max: p },
            (0, o.createElement)(
              a.WV.div,
              (0, r.Z)(
                {
                  "aria-valuemax": p,
                  "aria-valuemin": 0,
                  "aria-valuenow": m(d) ? d : void 0,
                  "aria-valuetext": f,
                  role: "progressbar",
                  "data-state": h(d, p),
                  "data-value": null != d ? d : void 0,
                  "data-max": p,
                },
                s,
                { ref: t }
              )
            )
          );
        });
      d.propTypes = {
        max(e, t, n) {
          let r = e[t],
            o = String(r);
          return r && !g(r)
            ? Error(
                `Invalid prop \`max\` of value \`${o}\` supplied to \`${n}\`. Only numbers greater than 0 are valid max values. Defaulting to \`100\`.`
              )
            : null;
        },
        value(e, t, n) {
          let r = e[t],
            o = String(r),
            i = g(e.max) ? e.max : 100;
          return null == r || y(r, i)
            ? null
            : Error(`Invalid prop \`value\` of value \`${o}\` supplied to \`${n}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or 100 if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`);
        },
      };
      let f = (0, o.forwardRef)((e, t) => {
        var n;
        let { __scopeProgress: i, ...l } = e,
          u = p("ProgressIndicator", i);
        return (0, o.createElement)(
          a.WV.div,
          (0, r.Z)(
            {
              "data-state": h(u.value, u.max),
              "data-value": null !== (n = u.value) && void 0 !== n ? n : void 0,
              "data-max": u.max,
            },
            l,
            { ref: t }
          )
        );
      });
      function v(e, t) {
        return `${Math.round((e / t) * 100)}%`;
      }
      function h(e, t) {
        return null == e ? "indeterminate" : e === t ? "complete" : "loading";
      }
      function m(e) {
        return "number" == typeof e;
      }
      function g(e) {
        return m(e) && !isNaN(e) && e > 0;
      }
      function y(e, t) {
        return m(e) && !isNaN(e) && e <= t && e >= 0;
      }
      let x = d,
        b = f;
    },
    5056: function (e, t, n) {
      "use strict";
      n.d(t, {
        VY: function () {
          return N;
        },
        zt: function () {
          return V;
        },
        fC: function () {
          return A;
        },
        xz: function () {
          return H;
        },
      });
      var r = n(2110),
        o = n(2265),
        i = n(4991),
        a = n(1266),
        l = n(4104),
        u = n(1260),
        s = n(8687),
        c = n(2338),
        p = (n(7881), n(2642)),
        d = n(9586),
        f = n(9143),
        v = n(9310);
      let h = (0, o.forwardRef)((e, t) =>
          (0, o.createElement)(
            d.WV.span,
            (0, r.Z)({}, e, {
              ref: t,
              style: {
                position: "absolute",
                border: 0,
                width: 1,
                height: 1,
                padding: 0,
                margin: -1,
                overflow: "hidden",
                clip: "rect(0, 0, 0, 0)",
                whiteSpace: "nowrap",
                wordWrap: "normal",
                ...e.style,
              },
            })
          )
        ),
        [m, g] = (0, l.b)("Tooltip", [c.D7]),
        y = (0, c.D7)(),
        x = "tooltip.open",
        [b, w] = m("TooltipProvider"),
        T = "Tooltip",
        [E, C] = m(T),
        k = "TooltipTrigger",
        _ = (0, o.forwardRef)((e, t) => {
          let { __scopeTooltip: n, ...l } = e,
            u = C(k, n),
            s = w(k, n),
            p = y(n),
            f = (0, o.useRef)(null),
            v = (0, a.e)(t, f, u.onTriggerChange),
            h = (0, o.useRef)(!1),
            m = (0, o.useRef)(!1),
            g = (0, o.useCallback)(() => (h.current = !1), []);
          return (
            (0, o.useEffect)(
              () => () => document.removeEventListener("pointerup", g),
              [g]
            ),
            (0, o.createElement)(
              c.ee,
              (0, r.Z)({ asChild: !0 }, p),
              (0, o.createElement)(
                d.WV.button,
                (0, r.Z)(
                  {
                    "aria-describedby": u.open ? u.contentId : void 0,
                    "data-state": u.stateAttribute,
                  },
                  l,
                  {
                    ref: v,
                    onPointerMove: (0, i.M)(e.onPointerMove, (e) => {
                      "touch" === e.pointerType ||
                        m.current ||
                        s.isPointerInTransitRef.current ||
                        (u.onTriggerEnter(), (m.current = !0));
                    }),
                    onPointerLeave: (0, i.M)(e.onPointerLeave, () => {
                      u.onTriggerLeave(), (m.current = !1);
                    }),
                    onPointerDown: (0, i.M)(e.onPointerDown, () => {
                      (h.current = !0),
                        document.addEventListener("pointerup", g, { once: !0 });
                    }),
                    onFocus: (0, i.M)(e.onFocus, () => {
                      h.current || u.onOpen();
                    }),
                    onBlur: (0, i.M)(e.onBlur, u.onClose),
                    onClick: (0, i.M)(e.onClick, u.onClose),
                  }
                )
              )
            )
          );
        }),
        [D, L] = m("TooltipPortal", { forceMount: void 0 }),
        M = "TooltipContent",
        P = (0, o.forwardRef)((e, t) => {
          let n = L(M, e.__scopeTooltip),
            { forceMount: i = n.forceMount, side: a = "top", ...l } = e,
            u = C(M, e.__scopeTooltip);
          return (0, o.createElement)(
            p.z,
            { present: i || u.open },
            u.disableHoverableContent
              ? (0, o.createElement)(Z, (0, r.Z)({ side: a }, l, { ref: t }))
              : (0, o.createElement)(R, (0, r.Z)({ side: a }, l, { ref: t }))
          );
        }),
        R = (0, o.forwardRef)((e, t) => {
          let n = C(M, e.__scopeTooltip),
            i = w(M, e.__scopeTooltip),
            l = (0, o.useRef)(null),
            u = (0, a.e)(t, l),
            [s, c] = (0, o.useState)(null),
            { trigger: p, onClose: d } = n,
            f = l.current,
            { onPointerInTransitChange: v } = i,
            h = (0, o.useCallback)(() => {
              c(null), v(!1);
            }, [v]),
            m = (0, o.useCallback)(
              (e, t) => {
                let n = e.currentTarget,
                  r = { x: e.clientX, y: e.clientY },
                  o = (function (e, t) {
                    let n = Math.abs(t.top - e.y),
                      r = Math.abs(t.bottom - e.y),
                      o = Math.abs(t.right - e.x),
                      i = Math.abs(t.left - e.x);
                    switch (Math.min(n, r, o, i)) {
                      case i:
                        return "left";
                      case o:
                        return "right";
                      case n:
                        return "top";
                      case r:
                        return "bottom";
                      default:
                        throw Error("unreachable");
                    }
                  })(r, n.getBoundingClientRect());
                c(
                  (function (e) {
                    let t = e.slice();
                    return (
                      t.sort((e, t) =>
                        e.x < t.x
                          ? -1
                          : e.x > t.x
                          ? 1
                          : e.y < t.y
                          ? -1
                          : e.y > t.y
                          ? 1
                          : 0
                      ),
                      (function (e) {
                        if (e.length <= 1) return e.slice();
                        let t = [];
                        for (let n = 0; n < e.length; n++) {
                          let r = e[n];
                          for (; t.length >= 2; ) {
                            let e = t[t.length - 1],
                              n = t[t.length - 2];
                            if (
                              (e.x - n.x) * (r.y - n.y) >=
                              (e.y - n.y) * (r.x - n.x)
                            )
                              t.pop();
                            else break;
                          }
                          t.push(r);
                        }
                        t.pop();
                        let n = [];
                        for (let t = e.length - 1; t >= 0; t--) {
                          let r = e[t];
                          for (; n.length >= 2; ) {
                            let e = n[n.length - 1],
                              t = n[n.length - 2];
                            if (
                              (e.x - t.x) * (r.y - t.y) >=
                              (e.y - t.y) * (r.x - t.x)
                            )
                              n.pop();
                            else break;
                          }
                          n.push(r);
                        }
                        return (n.pop(),
                        1 === t.length &&
                          1 === n.length &&
                          t[0].x === n[0].x &&
                          t[0].y === n[0].y)
                          ? t
                          : t.concat(n);
                      })(t)
                    );
                  })([
                    ...(function (e, t, n = 5) {
                      let r = [];
                      switch (t) {
                        case "top":
                          r.push(
                            { x: e.x - n, y: e.y + n },
                            { x: e.x + n, y: e.y + n }
                          );
                          break;
                        case "bottom":
                          r.push(
                            { x: e.x - n, y: e.y - n },
                            { x: e.x + n, y: e.y - n }
                          );
                          break;
                        case "left":
                          r.push(
                            { x: e.x + n, y: e.y - n },
                            { x: e.x + n, y: e.y + n }
                          );
                          break;
                        case "right":
                          r.push(
                            { x: e.x - n, y: e.y - n },
                            { x: e.x - n, y: e.y + n }
                          );
                      }
                      return r;
                    })(r, o),
                    ...(function (e) {
                      let { top: t, right: n, bottom: r, left: o } = e;
                      return [
                        { x: o, y: t },
                        { x: n, y: t },
                        { x: n, y: r },
                        { x: o, y: r },
                      ];
                    })(t.getBoundingClientRect()),
                  ])
                ),
                  v(!0);
              },
              [v]
            );
          return (
            (0, o.useEffect)(() => () => h(), [h]),
            (0, o.useEffect)(() => {
              if (p && f) {
                let e = (e) => m(e, f),
                  t = (e) => m(e, p);
                return (
                  p.addEventListener("pointerleave", e),
                  f.addEventListener("pointerleave", t),
                  () => {
                    p.removeEventListener("pointerleave", e),
                      f.removeEventListener("pointerleave", t);
                  }
                );
              }
            }, [p, f, m, h]),
            (0, o.useEffect)(() => {
              if (s) {
                let e = (e) => {
                  let t = e.target,
                    n = { x: e.clientX, y: e.clientY },
                    r =
                      (null == p ? void 0 : p.contains(t)) ||
                      (null == f ? void 0 : f.contains(t)),
                    o = !(function (e, t) {
                      let { x: n, y: r } = e,
                        o = !1;
                      for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
                        let a = t[e].x,
                          l = t[e].y,
                          u = t[i].x,
                          s = t[i].y;
                        l > r != s > r &&
                          n < ((u - a) * (r - l)) / (s - l) + a &&
                          (o = !o);
                      }
                      return o;
                    })(n, s);
                  r ? h() : o && (h(), d());
                };
                return (
                  document.addEventListener("pointermove", e),
                  () => document.removeEventListener("pointermove", e)
                );
              }
            }, [p, f, s, d, h]),
            (0, o.createElement)(Z, (0, r.Z)({}, e, { ref: u }))
          );
        }),
        [O, I] = m(T, { isInside: !1 }),
        Z = (0, o.forwardRef)((e, t) => {
          let {
              __scopeTooltip: n,
              children: i,
              "aria-label": a,
              onEscapeKeyDown: l,
              onPointerDownOutside: s,
              ...p
            } = e,
            d = C(M, n),
            v = y(n),
            { onClose: m } = d;
          return (
            (0, o.useEffect)(
              () => (
                document.addEventListener(x, m),
                () => document.removeEventListener(x, m)
              ),
              [m]
            ),
            (0, o.useEffect)(() => {
              if (d.trigger) {
                let e = (e) => {
                  let t = e.target;
                  null != t && t.contains(d.trigger) && m();
                };
                return (
                  window.addEventListener("scroll", e, { capture: !0 }),
                  () => window.removeEventListener("scroll", e, { capture: !0 })
                );
              }
            }, [d.trigger, m]),
            (0, o.createElement)(
              u.XB,
              {
                asChild: !0,
                disableOutsidePointerEvents: !1,
                onEscapeKeyDown: l,
                onPointerDownOutside: s,
                onFocusOutside: (e) => e.preventDefault(),
                onDismiss: m,
              },
              (0, o.createElement)(
                c.VY,
                (0, r.Z)({ "data-state": d.stateAttribute }, v, p, {
                  ref: t,
                  style: {
                    ...p.style,
                    "--radix-tooltip-content-transform-origin":
                      "var(--radix-popper-transform-origin)",
                    "--radix-tooltip-content-available-width":
                      "var(--radix-popper-available-width)",
                    "--radix-tooltip-content-available-height":
                      "var(--radix-popper-available-height)",
                    "--radix-tooltip-trigger-width":
                      "var(--radix-popper-anchor-width)",
                    "--radix-tooltip-trigger-height":
                      "var(--radix-popper-anchor-height)",
                  },
                }),
                (0, o.createElement)(f.A4, null, i),
                (0, o.createElement)(
                  O,
                  { scope: n, isInside: !0 },
                  (0, o.createElement)(
                    h,
                    { id: d.contentId, role: "tooltip" },
                    a || i
                  )
                )
              )
            )
          );
        }),
        V = (e) => {
          let {
              __scopeTooltip: t,
              delayDuration: n = 700,
              skipDelayDuration: r = 300,
              disableHoverableContent: i = !1,
              children: a,
            } = e,
            [l, u] = (0, o.useState)(!0),
            s = (0, o.useRef)(!1),
            c = (0, o.useRef)(0);
          return (
            (0, o.useEffect)(() => {
              let e = c.current;
              return () => window.clearTimeout(e);
            }, []),
            (0, o.createElement)(
              b,
              {
                scope: t,
                isOpenDelayed: l,
                delayDuration: n,
                onOpen: (0, o.useCallback)(() => {
                  window.clearTimeout(c.current), u(!1);
                }, []),
                onClose: (0, o.useCallback)(() => {
                  window.clearTimeout(c.current),
                    (c.current = window.setTimeout(() => u(!0), r));
                }, [r]),
                isPointerInTransitRef: s,
                onPointerInTransitChange: (0, o.useCallback)((e) => {
                  s.current = e;
                }, []),
                disableHoverableContent: i,
              },
              a
            )
          );
        },
        A = (e) => {
          let {
              __scopeTooltip: t,
              children: n,
              open: r,
              defaultOpen: i = !1,
              onOpenChange: a,
              disableHoverableContent: l,
              delayDuration: u,
            } = e,
            p = w(T, e.__scopeTooltip),
            d = y(t),
            [f, h] = (0, o.useState)(null),
            m = (0, s.M)(),
            g = (0, o.useRef)(0),
            b = null != l ? l : p.disableHoverableContent,
            C = null != u ? u : p.delayDuration,
            k = (0, o.useRef)(!1),
            [_ = !1, D] = (0, v.T)({
              prop: r,
              defaultProp: i,
              onChange: (e) => {
                e
                  ? (p.onOpen(), document.dispatchEvent(new CustomEvent(x)))
                  : p.onClose(),
                  null == a || a(e);
              },
            }),
            L = (0, o.useMemo)(
              () =>
                _ ? (k.current ? "delayed-open" : "instant-open") : "closed",
              [_]
            ),
            M = (0, o.useCallback)(() => {
              window.clearTimeout(g.current), (k.current = !1), D(!0);
            }, [D]),
            P = (0, o.useCallback)(() => {
              window.clearTimeout(g.current), D(!1);
            }, [D]),
            R = (0, o.useCallback)(() => {
              window.clearTimeout(g.current),
                (g.current = window.setTimeout(() => {
                  (k.current = !0), D(!0);
                }, C));
            }, [C, D]);
          return (
            (0, o.useEffect)(() => () => window.clearTimeout(g.current), []),
            (0, o.createElement)(
              c.fC,
              d,
              (0, o.createElement)(
                E,
                {
                  scope: t,
                  contentId: m,
                  open: _,
                  stateAttribute: L,
                  trigger: f,
                  onTriggerChange: h,
                  onTriggerEnter: (0, o.useCallback)(() => {
                    p.isOpenDelayed ? R() : M();
                  }, [p.isOpenDelayed, R, M]),
                  onTriggerLeave: (0, o.useCallback)(() => {
                    b ? P() : window.clearTimeout(g.current);
                  }, [P, b]),
                  onOpen: M,
                  onClose: P,
                  disableHoverableContent: b,
                },
                n
              )
            )
          );
        },
        H = _,
        N = P;
    },
  },
]);
