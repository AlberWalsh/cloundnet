"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [304],
  {
    6674: function (e, t, n) {
      n.d(t, {
        Ry: function () {
          return l;
        },
      });
      var r = new WeakMap(),
        o = new WeakMap(),
        a = {},
        i = 0,
        u = function (e) {
          return e && (e.host || u(e.parentNode));
        },
        c = function (e, t, n, c) {
          var l = (Array.isArray(e) ? e : [e])
            .map(function (e) {
              if (t.contains(e)) return e;
              var n = u(e);
              return n && t.contains(n)
                ? n
                : (console.error(
                    "aria-hidden",
                    e,
                    "in not contained inside",
                    t,
                    ". Doing nothing"
                  ),
                  null);
            })
            .filter(function (e) {
              return !!e;
            });
          a[n] || (a[n] = new WeakMap());
          var s = a[n],
            d = [],
            f = new Set(),
            v = new Set(l),
            p = function (e) {
              !e || f.has(e) || (f.add(e), p(e.parentNode));
            };
          l.forEach(p);
          var m = function (e) {
            !e ||
              v.has(e) ||
              Array.prototype.forEach.call(e.children, function (e) {
                if (f.has(e)) m(e);
                else {
                  var t = e.getAttribute(c),
                    a = null !== t && "false" !== t,
                    i = (r.get(e) || 0) + 1,
                    u = (s.get(e) || 0) + 1;
                  r.set(e, i),
                    s.set(e, u),
                    d.push(e),
                    1 === i && a && o.set(e, !0),
                    1 === u && e.setAttribute(n, "true"),
                    a || e.setAttribute(c, "true");
                }
              });
          };
          return (
            m(t),
            f.clear(),
            i++,
            function () {
              d.forEach(function (e) {
                var t = r.get(e) - 1,
                  a = s.get(e) - 1;
                r.set(e, t),
                  s.set(e, a),
                  t || (o.has(e) || e.removeAttribute(c), o.delete(e)),
                  a || e.removeAttribute(n);
              }),
                --i ||
                  ((r = new WeakMap()),
                  (r = new WeakMap()),
                  (o = new WeakMap()),
                  (a = {}));
            }
          );
        },
        l = function (e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var r = Array.from(Array.isArray(e) ? e : [e]),
            o =
              t ||
              ("undefined" == typeof document
                ? null
                : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
          return o
            ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
              c(r, o, n, "aria-hidden"))
            : function () {
                return null;
              };
        };
    },
    7225: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return U;
        },
      });
      var r,
        o,
        a,
        i,
        u,
        c,
        l = function () {
          return (l =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        };
      function s(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            0 > t.indexOf(r) &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var o = 0, r = Object.getOwnPropertySymbols(e);
            o < r.length;
            o++
          )
            0 > t.indexOf(r[o]) &&
              Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
              (n[r[o]] = e[r[o]]);
        return n;
      }
      "function" == typeof SuppressedError && SuppressedError;
      var d = n(2265),
        f = "right-scroll-bar-position",
        v = "width-before-scroll-bar";
      function p(e, t) {
        return "function" == typeof e ? e(t) : e && (e.current = t), e;
      }
      var m = new WeakMap(),
        h =
          (void 0 === o && (o = {}),
          ((void 0 === a &&
            (a = function (e) {
              return e;
            }),
          (i = []),
          (u = !1),
          (c = {
            read: function () {
              if (u)
                throw Error(
                  "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
                );
              return i.length ? i[i.length - 1] : null;
            },
            useMedium: function (e) {
              var t = a(e, u);
              return (
                i.push(t),
                function () {
                  i = i.filter(function (e) {
                    return e !== t;
                  });
                }
              );
            },
            assignSyncMedium: function (e) {
              for (u = !0; i.length; ) {
                var t = i;
                (i = []), t.forEach(e);
              }
              i = {
                push: function (t) {
                  return e(t);
                },
                filter: function () {
                  return i;
                },
              };
            },
            assignMedium: function (e) {
              u = !0;
              var t = [];
              if (i.length) {
                var n = i;
                (i = []), n.forEach(e), (t = i);
              }
              var r = function () {
                  var n = t;
                  (t = []), n.forEach(e);
                },
                o = function () {
                  return Promise.resolve().then(r);
                };
              o(),
                (i = {
                  push: function (e) {
                    t.push(e), o();
                  },
                  filter: function (e) {
                    return (t = t.filter(e)), i;
                  },
                });
            },
          })).options = l({ async: !0, ssr: !1 }, o)),
          c),
        g = function () {},
        y = d.forwardRef(function (e, t) {
          var n,
            r,
            o,
            a,
            i = d.useRef(null),
            u = d.useState({
              onScrollCapture: g,
              onWheelCapture: g,
              onTouchMoveCapture: g,
            }),
            c = u[0],
            f = u[1],
            v = e.forwardProps,
            y = e.children,
            E = e.className,
            b = e.removeScrollBar,
            w = e.enabled,
            C = e.shards,
            S = e.sideCar,
            L = e.noIsolation,
            T = e.inert,
            k = e.allowPinchZoom,
            P = e.as,
            A = s(e, [
              "forwardProps",
              "children",
              "className",
              "removeScrollBar",
              "enabled",
              "shards",
              "sideCar",
              "noIsolation",
              "inert",
              "allowPinchZoom",
              "as",
            ]),
            O =
              ((n = [i, t]),
              (r = function (e) {
                return n.forEach(function (t) {
                  return p(t, e);
                });
              }),
              ((o = (0, d.useState)(function () {
                return {
                  value: null,
                  callback: r,
                  facade: {
                    get current() {
                      return o.value;
                    },
                    set current(value) {
                      var e = o.value;
                      e !== value && ((o.value = value), o.callback(value, e));
                    },
                  },
                };
              })[0]).callback = r),
              (a = o.facade),
              d.useLayoutEffect(
                function () {
                  var e = m.get(a);
                  if (e) {
                    var t = new Set(e),
                      r = new Set(n),
                      o = a.current;
                    t.forEach(function (e) {
                      r.has(e) || p(e, null);
                    }),
                      r.forEach(function (e) {
                        t.has(e) || p(e, o);
                      });
                  }
                  m.set(a, n);
                },
                [n]
              ),
              a),
            W = l(l({}, A), c);
          return d.createElement(
            d.Fragment,
            null,
            w &&
              d.createElement(S, {
                sideCar: h,
                removeScrollBar: b,
                shards: C,
                noIsolation: L,
                inert: T,
                setCallbacks: f,
                allowPinchZoom: !!k,
                lockRef: i,
              }),
            v
              ? d.cloneElement(d.Children.only(y), l(l({}, W), { ref: O }))
              : d.createElement(
                  void 0 === P ? "div" : P,
                  l({}, W, { className: E, ref: O }),
                  y
                )
          );
        });
      (y.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (y.classNames = { fullWidth: v, zeroRight: f });
      var E = function (e) {
        var t = e.sideCar,
          n = s(e, ["sideCar"]);
        if (!t)
          throw Error(
            "Sidecar: please provide `sideCar` property to import the right car"
          );
        var r = t.read();
        if (!r) throw Error("Sidecar medium not found");
        return d.createElement(r, l({}, n));
      };
      E.isSideCarExport = !0;
      var b = function () {
          var e = 0,
            t = null;
          return {
            add: function (o) {
              if (
                0 == e &&
                (t = (function () {
                  if (!document) return null;
                  var e = document.createElement("style");
                  e.type = "text/css";
                  var t = r || n.nc;
                  return t && e.setAttribute("nonce", t), e;
                })())
              ) {
                var a, i;
                (a = t).styleSheet
                  ? (a.styleSheet.cssText = o)
                  : a.appendChild(document.createTextNode(o)),
                  (i = t),
                  (
                    document.head || document.getElementsByTagName("head")[0]
                  ).appendChild(i);
              }
              e++;
            },
            remove: function () {
              --e ||
                !t ||
                (t.parentNode && t.parentNode.removeChild(t), (t = null));
            },
          };
        },
        w = function () {
          var e = b();
          return function (t, n) {
            d.useEffect(
              function () {
                return (
                  e.add(t),
                  function () {
                    e.remove();
                  }
                );
              },
              [t && n]
            );
          };
        },
        C = function () {
          var e = w();
          return function (t) {
            return e(t.styles, t.dynamic), null;
          };
        },
        S = { left: 0, top: 0, right: 0, gap: 0 },
        L = function (e) {
          return parseInt(e || "", 10) || 0;
        },
        T = function (e) {
          var t = window.getComputedStyle(document.body),
            n = t["padding" === e ? "paddingLeft" : "marginLeft"],
            r = t["padding" === e ? "paddingTop" : "marginTop"],
            o = t["padding" === e ? "paddingRight" : "marginRight"];
          return [L(n), L(r), L(o)];
        },
        k = function (e) {
          if ((void 0 === e && (e = "margin"), "undefined" == typeof window))
            return S;
          var t = T(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
          return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0]),
          };
        },
        P = C(),
        A = "data-scroll-locked",
        O = function (e, t, n, r) {
          var o = e.left,
            a = e.top,
            i = e.right,
            u = e.gap;
          return (
            void 0 === n && (n = "margin"),
            "\n  ."
              .concat("with-scroll-bars-hidden", " {\n   overflow: hidden ")
              .concat(r, ";\n   padding-right: ")
              .concat(u, "px ")
              .concat(r, ";\n  }\n  body[")
              .concat(A, "] {\n    overflow: hidden ")
              .concat(r, ";\n    overscroll-behavior: contain;\n    ")
              .concat(
                [
                  t && "position: relative ".concat(r, ";"),
                  "margin" === n &&
                    "\n    padding-left: "
                      .concat(o, "px;\n    padding-top: ")
                      .concat(a, "px;\n    padding-right: ")
                      .concat(
                        i,
                        "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: "
                      )
                      .concat(u, "px ")
                      .concat(r, ";\n    "),
                  "padding" === n &&
                    "padding-right: ".concat(u, "px ").concat(r, ";"),
                ]
                  .filter(Boolean)
                  .join(""),
                "\n  }\n  \n  ."
              )
              .concat(f, " {\n    right: ")
              .concat(u, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(v, " {\n    margin-right: ")
              .concat(u, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(f, " .")
              .concat(f, " {\n    right: 0 ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(v, " .")
              .concat(v, " {\n    margin-right: 0 ")
              .concat(r, ";\n  }\n  \n  body[")
              .concat(A, "] {\n    ")
              .concat("--removed-body-scroll-bar-size", ": ")
              .concat(u, "px;\n  }\n")
          );
        },
        W = function () {
          var e = parseInt(document.body.getAttribute(A) || "0", 10);
          return isFinite(e) ? e : 0;
        },
        x = function () {
          d.useEffect(function () {
            return (
              document.body.setAttribute(A, (W() + 1).toString()),
              function () {
                var e = W() - 1;
                e <= 0
                  ? document.body.removeAttribute(A)
                  : document.body.setAttribute(A, e.toString());
              }
            );
          }, []);
        },
        R = function (e) {
          var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            o = void 0 === r ? "margin" : r;
          x();
          var a = d.useMemo(
            function () {
              return k(o);
            },
            [o]
          );
          return d.createElement(P, {
            styles: O(a, !t, o, n ? "" : "!important"),
          });
        },
        M = !1;
      if ("undefined" != typeof window)
        try {
          var N = Object.defineProperty({}, "passive", {
            get: function () {
              return (M = !0), !0;
            },
          });
          window.addEventListener("test", N, N),
            window.removeEventListener("test", N, N);
        } catch (e) {
          M = !1;
        }
      var D = !!M && { passive: !1 },
        I = function (e, t) {
          var n = window.getComputedStyle(e);
          return (
            "hidden" !== n[t] &&
            !(
              n.overflowY === n.overflowX &&
              "TEXTAREA" !== e.tagName &&
              "visible" === n[t]
            )
          );
        },
        F = function (e, t) {
          var n = t;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                n instanceof ShadowRoot &&
                (n = n.host),
              B(e, n))
            ) {
              var r = j(e, n);
              if (r[1] > r[2]) return !0;
            }
            n = n.parentNode;
          } while (n && n !== document.body);
          return !1;
        },
        B = function (e, t) {
          return "v" === e ? I(t, "overflowY") : I(t, "overflowX");
        },
        j = function (e, t) {
          return "v" === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        K = function (e, t, n, r, o) {
          var a,
            i =
              ((a = window.getComputedStyle(t).direction),
              "h" === e && "rtl" === a ? -1 : 1),
            u = i * r,
            c = n.target,
            l = t.contains(c),
            s = !1,
            d = u > 0,
            f = 0,
            v = 0;
          do {
            var p = j(e, c),
              m = p[0],
              h = p[1] - p[2] - i * m;
            (m || h) && B(e, c) && ((f += h), (v += m)), (c = c.parentNode);
          } while (
            (!l && c !== document.body) ||
            (l && (t.contains(c) || t === c))
          );
          return (
            d && ((o && 0 === f) || (!o && u > f))
              ? (s = !0)
              : !d && ((o && 0 === v) || (!o && -u > v)) && (s = !0),
            s
          );
        },
        X = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        Z = function (e) {
          return [e.deltaX, e.deltaY];
        },
        _ = function (e) {
          return e && "current" in e ? e.current : e;
        },
        Y = 0,
        z = [],
        H =
          (h.useMedium(function (e) {
            var t = d.useRef([]),
              n = d.useRef([0, 0]),
              r = d.useRef(),
              o = d.useState(Y++)[0],
              a = d.useState(function () {
                return C();
              })[0],
              i = d.useRef(e);
            d.useEffect(
              function () {
                i.current = e;
              },
              [e]
            ),
              d.useEffect(
                function () {
                  if (e.inert) {
                    document.body.classList.add(
                      "block-interactivity-".concat(o)
                    );
                    var t = (function (e, t, n) {
                      if (n || 2 == arguments.length)
                        for (var r, o = 0, a = t.length; o < a; o++)
                          (!r && o in t) ||
                            (r || (r = Array.prototype.slice.call(t, 0, o)),
                            (r[o] = t[o]));
                      return e.concat(r || Array.prototype.slice.call(t));
                    })([e.lockRef.current], (e.shards || []).map(_), !0).filter(
                      Boolean
                    );
                    return (
                      t.forEach(function (e) {
                        return e.classList.add(
                          "allow-interactivity-".concat(o)
                        );
                      }),
                      function () {
                        document.body.classList.remove(
                          "block-interactivity-".concat(o)
                        ),
                          t.forEach(function (e) {
                            return e.classList.remove(
                              "allow-interactivity-".concat(o)
                            );
                          });
                      }
                    );
                  }
                },
                [e.inert, e.lockRef.current, e.shards]
              );
            var u = d.useCallback(function (e, t) {
                if ("touches" in e && 2 === e.touches.length)
                  return !i.current.allowPinchZoom;
                var o,
                  a = X(e),
                  u = n.current,
                  c = "deltaX" in e ? e.deltaX : u[0] - a[0],
                  l = "deltaY" in e ? e.deltaY : u[1] - a[1],
                  s = e.target,
                  d = Math.abs(c) > Math.abs(l) ? "h" : "v";
                if ("touches" in e && "h" === d && "range" === s.type)
                  return !1;
                var f = F(d, s);
                if (!f) return !0;
                if (
                  (f ? (o = d) : ((o = "v" === d ? "h" : "v"), (f = F(d, s))),
                  !f)
                )
                  return !1;
                if (
                  (!r.current &&
                    "changedTouches" in e &&
                    (c || l) &&
                    (r.current = o),
                  !o)
                )
                  return !0;
                var v = r.current || o;
                return K(v, t, e, "h" === v ? c : l, !0);
              }, []),
              c = d.useCallback(function (e) {
                if (z.length && z[z.length - 1] === a) {
                  var n = "deltaY" in e ? Z(e) : X(e),
                    r = t.current.filter(function (t) {
                      var r;
                      return (
                        t.name === e.type &&
                        t.target === e.target &&
                        (r = t.delta)[0] === n[0] &&
                        r[1] === n[1]
                      );
                    })[0];
                  if (r && r.should) {
                    e.cancelable && e.preventDefault();
                    return;
                  }
                  if (!r) {
                    var o = (i.current.shards || [])
                      .map(_)
                      .filter(Boolean)
                      .filter(function (t) {
                        return t.contains(e.target);
                      });
                    (o.length > 0 ? u(e, o[0]) : !i.current.noIsolation) &&
                      e.cancelable &&
                      e.preventDefault();
                  }
                }
              }, []),
              l = d.useCallback(function (e, n, r, o) {
                var a = { name: e, delta: n, target: r, should: o };
                t.current.push(a),
                  setTimeout(function () {
                    t.current = t.current.filter(function (e) {
                      return e !== a;
                    });
                  }, 1);
              }, []),
              s = d.useCallback(function (e) {
                (n.current = X(e)), (r.current = void 0);
              }, []),
              f = d.useCallback(function (t) {
                l(t.type, Z(t), t.target, u(t, e.lockRef.current));
              }, []),
              v = d.useCallback(function (t) {
                l(t.type, X(t), t.target, u(t, e.lockRef.current));
              }, []);
            d.useEffect(function () {
              return (
                z.push(a),
                e.setCallbacks({
                  onScrollCapture: f,
                  onWheelCapture: f,
                  onTouchMoveCapture: v,
                }),
                document.addEventListener("wheel", c, D),
                document.addEventListener("touchmove", c, D),
                document.addEventListener("touchstart", s, D),
                function () {
                  (z = z.filter(function (e) {
                    return e !== a;
                  })),
                    document.removeEventListener("wheel", c, D),
                    document.removeEventListener("touchmove", c, D),
                    document.removeEventListener("touchstart", s, D);
                }
              );
            }, []);
            var p = e.removeScrollBar,
              m = e.inert;
            return d.createElement(
              d.Fragment,
              null,
              m
                ? d.createElement(a, {
                    styles: "\n  .block-interactivity-"
                      .concat(
                        o,
                        " {pointer-events: none;}\n  .allow-interactivity-"
                      )
                      .concat(o, " {pointer-events: all;}\n"),
                  })
                : null,
              p ? d.createElement(R, { gapMode: "margin" }) : null
            );
          }),
          E),
        q = d.forwardRef(function (e, t) {
          return d.createElement(y, l({}, e, { ref: t, sideCar: H }));
        });
      q.classNames = y.classNames;
      var U = q;
    },
    1260: function (e, t, n) {
      let r;
      n.d(t, {
        XB: function () {
          return f;
        },
      });
      var o = n(2110),
        a = n(2265),
        i = n(4991),
        u = n(9586),
        c = n(1266),
        l = n(9830);
      let s = "dismissableLayer.update",
        d = (0, a.createContext)({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        f = (0, a.forwardRef)((e, t) => {
          var n;
          let {
              disableOutsidePointerEvents: f = !1,
              onEscapeKeyDown: m,
              onPointerDownOutside: h,
              onFocusOutside: g,
              onInteractOutside: y,
              onDismiss: E,
              ...b
            } = e,
            w = (0, a.useContext)(d),
            [C, S] = (0, a.useState)(null),
            L =
              null !== (n = null == C ? void 0 : C.ownerDocument) &&
              void 0 !== n
                ? n
                : null == globalThis
                ? void 0
                : globalThis.document,
            [, T] = (0, a.useState)({}),
            k = (0, c.e)(t, (e) => S(e)),
            P = Array.from(w.layers),
            [A] = [...w.layersWithOutsidePointerEventsDisabled].slice(-1),
            O = P.indexOf(A),
            W = C ? P.indexOf(C) : -1,
            x = w.layersWithOutsidePointerEventsDisabled.size > 0,
            R = W >= O,
            M = (function (
              e,
              t = null == globalThis ? void 0 : globalThis.document
            ) {
              let n = (0, l.W)(e),
                r = (0, a.useRef)(!1),
                o = (0, a.useRef)(() => {});
              return (
                (0, a.useEffect)(() => {
                  let e = (e) => {
                      if (e.target && !r.current) {
                        let r = { originalEvent: e };
                        function a() {
                          p("dismissableLayer.pointerDownOutside", n, r, {
                            discrete: !0,
                          });
                        }
                        "touch" === e.pointerType
                          ? (t.removeEventListener("click", o.current),
                            (o.current = a),
                            t.addEventListener("click", o.current, {
                              once: !0,
                            }))
                          : a();
                      } else t.removeEventListener("click", o.current);
                      r.current = !1;
                    },
                    a = window.setTimeout(() => {
                      t.addEventListener("pointerdown", e);
                    }, 0);
                  return () => {
                    window.clearTimeout(a),
                      t.removeEventListener("pointerdown", e),
                      t.removeEventListener("click", o.current);
                  };
                }, [t, n]),
                { onPointerDownCapture: () => (r.current = !0) }
              );
            })((e) => {
              let t = e.target,
                n = [...w.branches].some((e) => e.contains(t));
              !R ||
                n ||
                (null == h || h(e),
                null == y || y(e),
                e.defaultPrevented || null == E || E());
            }, L),
            N = (function (
              e,
              t = null == globalThis ? void 0 : globalThis.document
            ) {
              let n = (0, l.W)(e),
                r = (0, a.useRef)(!1);
              return (
                (0, a.useEffect)(() => {
                  let e = (e) => {
                    e.target &&
                      !r.current &&
                      p(
                        "dismissableLayer.focusOutside",
                        n,
                        { originalEvent: e },
                        { discrete: !1 }
                      );
                  };
                  return (
                    t.addEventListener("focusin", e),
                    () => t.removeEventListener("focusin", e)
                  );
                }, [t, n]),
                {
                  onFocusCapture: () => (r.current = !0),
                  onBlurCapture: () => (r.current = !1),
                }
              );
            })((e) => {
              let t = e.target;
              [...w.branches].some((e) => e.contains(t)) ||
                (null == g || g(e),
                null == y || y(e),
                e.defaultPrevented || null == E || E());
            }, L);
          return (
            !(function (
              e,
              t = null == globalThis ? void 0 : globalThis.document
            ) {
              let n = (0, l.W)(e);
              (0, a.useEffect)(() => {
                let e = (e) => {
                  "Escape" === e.key && n(e);
                };
                return (
                  t.addEventListener("keydown", e),
                  () => t.removeEventListener("keydown", e)
                );
              }, [n, t]);
            })((e) => {
              W !== w.layers.size - 1 ||
                (null == m || m(e),
                !e.defaultPrevented && E && (e.preventDefault(), E()));
            }, L),
            (0, a.useEffect)(() => {
              if (C)
                return (
                  f &&
                    (0 === w.layersWithOutsidePointerEventsDisabled.size &&
                      ((r = L.body.style.pointerEvents),
                      (L.body.style.pointerEvents = "none")),
                    w.layersWithOutsidePointerEventsDisabled.add(C)),
                  w.layers.add(C),
                  v(),
                  () => {
                    f &&
                      1 === w.layersWithOutsidePointerEventsDisabled.size &&
                      (L.body.style.pointerEvents = r);
                  }
                );
            }, [C, L, f, w]),
            (0, a.useEffect)(
              () => () => {
                C &&
                  (w.layers.delete(C),
                  w.layersWithOutsidePointerEventsDisabled.delete(C),
                  v());
              },
              [C, w]
            ),
            (0, a.useEffect)(() => {
              let e = () => T({});
              return (
                document.addEventListener(s, e),
                () => document.removeEventListener(s, e)
              );
            }, []),
            (0, a.createElement)(
              u.WV.div,
              (0, o.Z)({}, b, {
                ref: k,
                style: {
                  pointerEvents: x ? (R ? "auto" : "none") : void 0,
                  ...e.style,
                },
                onFocusCapture: (0, i.M)(e.onFocusCapture, N.onFocusCapture),
                onBlurCapture: (0, i.M)(e.onBlurCapture, N.onBlurCapture),
                onPointerDownCapture: (0, i.M)(
                  e.onPointerDownCapture,
                  M.onPointerDownCapture
                ),
              })
            )
          );
        });
      function v() {
        let e = new CustomEvent(s);
        document.dispatchEvent(e);
      }
      function p(e, t, n, { discrete: r }) {
        let o = n.originalEvent.target,
          a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
        t && o.addEventListener(e, t, { once: !0 }),
          r ? (0, u.jH)(o, a) : o.dispatchEvent(a);
      }
    },
    6007: function (e, t, n) {
      n.d(t, {
        EW: function () {
          return a;
        },
      });
      var r = n(2265);
      let o = 0;
      function a() {
        (0, r.useEffect)(() => {
          var e, t;
          let n = document.querySelectorAll("[data-radix-focus-guard]");
          return (
            document.body.insertAdjacentElement(
              "afterbegin",
              null !== (e = n[0]) && void 0 !== e ? e : i()
            ),
            document.body.insertAdjacentElement(
              "beforeend",
              null !== (t = n[1]) && void 0 !== t ? t : i()
            ),
            o++,
            () => {
              1 === o &&
                document
                  .querySelectorAll("[data-radix-focus-guard]")
                  .forEach((e) => e.remove()),
                o--;
            }
          );
        }, []);
      }
      function i() {
        let e = document.createElement("span");
        return (
          e.setAttribute("data-radix-focus-guard", ""),
          (e.tabIndex = 0),
          (e.style.cssText =
            "outline: none; opacity: 0; position: fixed; pointer-events: none"),
          e
        );
      }
    },
    8082: function (e, t, n) {
      let r;
      n.d(t, {
        M: function () {
          return f;
        },
      });
      var o = n(2110),
        a = n(2265),
        i = n(1266),
        u = n(9586),
        c = n(9830);
      let l = "focusScope.autoFocusOnMount",
        s = "focusScope.autoFocusOnUnmount",
        d = { bubbles: !1, cancelable: !0 },
        f = (0, a.forwardRef)((e, t) => {
          let {
              loop: n = !1,
              trapped: r = !1,
              onMountAutoFocus: f,
              onUnmountAutoFocus: g,
              ...y
            } = e,
            [E, b] = (0, a.useState)(null),
            w = (0, c.W)(f),
            C = (0, c.W)(g),
            S = (0, a.useRef)(null),
            L = (0, i.e)(t, (e) => b(e)),
            T = (0, a.useRef)({
              paused: !1,
              pause() {
                this.paused = !0;
              },
              resume() {
                this.paused = !1;
              },
            }).current;
          (0, a.useEffect)(() => {
            if (r) {
              function e(e) {
                if (T.paused || !E) return;
                let t = e.target;
                E.contains(t) ? (S.current = t) : m(S.current, { select: !0 });
              }
              function t(e) {
                if (T.paused || !E) return;
                let t = e.relatedTarget;
                null === t || E.contains(t) || m(S.current, { select: !0 });
              }
              document.addEventListener("focusin", e),
                document.addEventListener("focusout", t);
              let n = new MutationObserver(function (e) {
                if (document.activeElement === document.body)
                  for (let t of e) t.removedNodes.length > 0 && m(E);
              });
              return (
                E && n.observe(E, { childList: !0, subtree: !0 }),
                () => {
                  document.removeEventListener("focusin", e),
                    document.removeEventListener("focusout", t),
                    n.disconnect();
                }
              );
            }
          }, [r, E, T.paused]),
            (0, a.useEffect)(() => {
              if (E) {
                h.add(T);
                let e = document.activeElement;
                if (!E.contains(e)) {
                  let t = new CustomEvent(l, d);
                  E.addEventListener(l, w),
                    E.dispatchEvent(t),
                    t.defaultPrevented ||
                      ((function (e, { select: t = !1 } = {}) {
                        let n = document.activeElement;
                        for (let r of e)
                          if (
                            (m(r, { select: t }), document.activeElement !== n)
                          )
                            return;
                      })(
                        v(E).filter((e) => "A" !== e.tagName),
                        { select: !0 }
                      ),
                      document.activeElement === e && m(E));
                }
                return () => {
                  E.removeEventListener(l, w),
                    setTimeout(() => {
                      let t = new CustomEvent(s, d);
                      E.addEventListener(s, C),
                        E.dispatchEvent(t),
                        t.defaultPrevented ||
                          m(null != e ? e : document.body, { select: !0 }),
                        E.removeEventListener(s, C),
                        h.remove(T);
                    }, 0);
                };
              }
            }, [E, w, C, T]);
          let k = (0, a.useCallback)(
            (e) => {
              if ((!n && !r) || T.paused) return;
              let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                o = document.activeElement;
              if (t && o) {
                let t = e.currentTarget,
                  [r, a] = (function (e) {
                    let t = v(e);
                    return [p(t, e), p(t.reverse(), e)];
                  })(t);
                r && a
                  ? e.shiftKey || o !== a
                    ? e.shiftKey &&
                      o === r &&
                      (e.preventDefault(), n && m(a, { select: !0 }))
                    : (e.preventDefault(), n && m(r, { select: !0 }))
                  : o === t && e.preventDefault();
              }
            },
            [n, r, T.paused]
          );
          return (0, a.createElement)(
            u.WV.div,
            (0, o.Z)({ tabIndex: -1 }, y, { ref: L, onKeyDown: k })
          );
        });
      function v(e) {
        let t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (e) => {
              let t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t
                ? NodeFilter.FILTER_SKIP
                : e.tabIndex >= 0
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_SKIP;
            },
          });
        for (; n.nextNode(); ) t.push(n.currentNode);
        return t;
      }
      function p(e, t) {
        for (let n of e)
          if (
            !(function (e, { upTo: t }) {
              if ("hidden" === getComputedStyle(e).visibility) return !0;
              for (; e && (void 0 === t || e !== t); ) {
                if ("none" === getComputedStyle(e).display) return !0;
                e = e.parentElement;
              }
              return !1;
            })(n, { upTo: t })
          )
            return n;
      }
      function m(e, { select: t = !1 } = {}) {
        if (e && e.focus) {
          var n;
          let r = document.activeElement;
          e.focus({ preventScroll: !0 }),
            e !== r &&
              (n = e) instanceof HTMLInputElement &&
              "select" in n &&
              t &&
              e.select();
        }
      }
      let h =
        ((r = []),
        {
          add(e) {
            let t = r[0];
            e !== t && (null == t || t.pause()), (r = g(r, e)).unshift(e);
          },
          remove(e) {
            var t;
            null === (t = (r = g(r, e))[0]) || void 0 === t || t.resume();
          },
        });
      function g(e, t) {
        let n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n;
      }
    },
    8687: function (e, t, n) {
      n.d(t, {
        M: function () {
          return c;
        },
      });
      var r,
        o = n(2265),
        a = n(2618);
      let i = (r || (r = n.t(o, 2)))["useId".toString()] || (() => void 0),
        u = 0;
      function c(e) {
        let [t, n] = o.useState(i());
        return (
          (0, a.b)(() => {
            e || n((e) => (null != e ? e : String(u++)));
          }, [e]),
          e || (t ? `radix-${t}` : "")
        );
      }
    },
    7881: function (e, t, n) {
      n.d(t, {
        h: function () {
          return u;
        },
      });
      var r = n(2110),
        o = n(2265),
        a = n(4887),
        i = n(9586);
      let u = (0, o.forwardRef)((e, t) => {
        var n;
        let {
          container: u = null == globalThis
            ? void 0
            : null === (n = globalThis.document) || void 0 === n
            ? void 0
            : n.body,
          ...c
        } = e;
        return u
          ? a.createPortal(
              (0, o.createElement)(i.WV.div, (0, r.Z)({}, c, { ref: t })),
              u
            )
          : null;
      });
    },
  },
]);
