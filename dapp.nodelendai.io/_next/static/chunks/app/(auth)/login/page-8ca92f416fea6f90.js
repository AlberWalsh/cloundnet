(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [665],
  {
    9607: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 9107));
    },
    9107: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return h;
          },
        });
      var n = r(7437),
        a = r(4590),
        s = r(7713),
        i = r(8489),
        o = r(6795),
        l = r(8033),
        c = r(8792),
        d = r(2265),
        u = r(6585),
        f = r(8691),
        m = r(8009);
      let p = () => {
        let [e, t] = (0, d.useState)({ email: "", password: "" }),
          [r, n] = (0, d.useState)(!1);
        return {
          isLoading: r,
          loginData: e,
          handleChange: (r) => {
            let { name: n, value: a } = r.target;
            t({ ...e, [n]: a });
          },
          handleLogin: () => {
            n(!0),
              u.s
                .post("/auth/login", e)
                .then((e) => {
                  n(!1),
                    200 === e.status &&
                      (m.default.success(e.data.message, f.F),
                      (window.location.href = "/"));
                })
                .catch((e) => {
                  var t, r;
                  n(!1),
                    m.default.error(
                      "".concat(
                        null == e
                          ? void 0
                          : null === (r = e.response) || void 0 === r
                          ? void 0
                          : null === (t = r.data) || void 0 === t
                          ? void 0
                          : t.error
                      )
                    );
                });
          },
        };
      };
      var h = () => {
        let {
            handleLogin: e,
            loginData: t,
            isLoading: r,
            handleChange: d,
          } = p(),
          { email: u, password: f } = t;
        return (0, n.jsx)("div", {
          className: "m-4 flex items-center justify-center",
          children: (0, n.jsxs)(s.Zb, {
            className: "w-full max-w-lg dark:bg-slate-900",
            children: [
              (0, n.jsxs)(s.Ol, {
                className: "text-center",
                children: [
                  (0, n.jsx)(s.ll, {
                    className: "py-2",
                    children: "Sign In to your account",
                  }),
                  (0, n.jsx)(s.SZ, {
                    children:
                      "Access the full potential of NodeLend AI on our website by logging in to your account.",
                  }),
                ],
              }),
              (0, n.jsxs)(s.aY, {
                className: "flex flex-col gap-4",
                children: [
                  (0, n.jsxs)("div", {
                    className: "flex flex-col gap-2",
                    children: [
                      (0, n.jsx)(l._, { htmlFor: "email", children: "Email" }),
                      (0, n.jsx)(o.I, {
                        type: "email",
                        placeholder: "name@example.com",
                        name: "email",
                        id: "email",
                        value: u,
                        onChange: d,
                      }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className: "flex flex-col gap-2",
                    children: [
                      (0, n.jsx)(l._, {
                        htmlFor: "password",
                        children: "Password",
                      }),
                      (0, n.jsx)(o.I, {
                        type: "password",
                        placeholder: "••••••••",
                        name: "password",
                        id: "password",
                        value: f,
                        onChange: d,
                      }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className: "flex justify-between",
                    children: [
                      (0, n.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [
                          (0, n.jsx)(i.X, { id: "remember-me" }),
                          (0, n.jsx)("label", {
                            htmlFor: "remember-me",
                            className: "text-sm text-muted-foreground",
                            children: "Remember me",
                          }),
                        ],
                      }),
                      (0, n.jsx)(c.default, {
                        href: "/forgot-password",
                        className: "text-sm text-primary",
                        children: "Forgot Password",
                      }),
                    ],
                  }),
                  (0, n.jsx)(a.z, {
                    onClick: e,
                    children: r ? "Loading..." : "Login",
                  }),
                ],
              }),
              (0, n.jsx)(s.eW, {
                className: "flex justify-center",
                children: (0, n.jsxs)("p", {
                  className: "text-sm text-muted-foreground",
                  children: [
                    "Don't have an account yet?",
                    " ",
                    (0, n.jsx)(c.default, {
                      href: "/register",
                      className: "text-primary",
                      children: "Sign Up",
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      };
    },
    4590: function (e, t, r) {
      "use strict";
      r.d(t, {
        z: function () {
          return c;
        },
      });
      var n = r(7437),
        a = r(2265),
        s = r(9143),
        i = r(7742),
        o = r(4353);
      let l = (0, i.j)(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            variants: {
              variant: {
                default:
                  "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive:
                  "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline:
                  "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                secondary:
                  "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
              },
              size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
              },
            },
            defaultVariants: { variant: "default", size: "default" },
          }
        ),
        c = a.forwardRef((e, t) => {
          let { className: r, variant: a, size: i, asChild: c = !1, ...d } = e,
            u = c ? s.g7 : "button";
          return (0, n.jsx)(u, {
            className: (0, o.cn)(l({ variant: a, size: i, className: r })),
            ref: t,
            ...d,
          });
        });
      c.displayName = "Button";
    },
    7713: function (e, t, r) {
      "use strict";
      r.d(t, {
        Ol: function () {
          return o;
        },
        SZ: function () {
          return c;
        },
        Zb: function () {
          return i;
        },
        aY: function () {
          return d;
        },
        eW: function () {
          return u;
        },
        ll: function () {
          return l;
        },
      });
      var n = r(7437),
        a = r(2265),
        s = r(4353);
      let i = a.forwardRef((e, t) => {
        let { className: r, ...a } = e;
        return (0, n.jsx)("div", {
          ref: t,
          className: (0, s.cn)(
            "rounded-lg border bg-card text-card-foreground shadow-sm",
            r
          ),
          ...a,
        });
      });
      i.displayName = "Card";
      let o = a.forwardRef((e, t) => {
        let { className: r, ...a } = e;
        return (0, n.jsx)("div", {
          ref: t,
          className: (0, s.cn)("flex flex-col space-y-1.5 p-6", r),
          ...a,
        });
      });
      o.displayName = "CardHeader";
      let l = a.forwardRef((e, t) => {
        let { className: r, ...a } = e;
        return (0, n.jsx)("h3", {
          ref: t,
          className: (0, s.cn)(
            "text-2xl font-semibold leading-none tracking-tight",
            r
          ),
          ...a,
        });
      });
      l.displayName = "CardTitle";
      let c = a.forwardRef((e, t) => {
        let { className: r, ...a } = e;
        return (0, n.jsx)("p", {
          ref: t,
          className: (0, s.cn)("text-sm text-muted-foreground", r),
          ...a,
        });
      });
      c.displayName = "CardDescription";
      let d = a.forwardRef((e, t) => {
        let { className: r, ...a } = e;
        return (0, n.jsx)("div", {
          ref: t,
          className: (0, s.cn)("p-6 pt-0", r),
          ...a,
        });
      });
      d.displayName = "CardContent";
      let u = a.forwardRef((e, t) => {
        let { className: r, ...a } = e;
        return (0, n.jsx)("div", {
          ref: t,
          className: (0, s.cn)("flex items-center p-6 pt-0", r),
          ...a,
        });
      });
      u.displayName = "CardFooter";
    },
    8489: function (e, t, r) {
      "use strict";
      r.d(t, {
        X: function () {
          return l;
        },
      });
      var n = r(7437),
        a = r(2265),
        s = r(8248),
        i = r(9259),
        o = r(4353);
      let l = a.forwardRef((e, t) => {
        let { className: r, ...a } = e;
        return (0, n.jsx)(s.fC, {
          ref: t,
          className: (0, o.cn)(
            "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
            r
          ),
          ...a,
          children: (0, n.jsx)(s.z$, {
            className: (0, o.cn)(
              "flex items-center justify-center text-current"
            ),
            children: (0, n.jsx)(i.Z, { className: "h-4 w-4" }),
          }),
        });
      });
      l.displayName = s.fC.displayName;
    },
    6795: function (e, t, r) {
      "use strict";
      r.d(t, {
        I: function () {
          return i;
        },
      });
      var n = r(7437),
        a = r(2265),
        s = r(4353);
      let i = a.forwardRef((e, t) => {
        let { className: r, type: a, ...i } = e;
        return (0, n.jsx)("input", {
          type: a,
          className: (0, s.cn)(
            "flex h-10 w-full rounded-md border border-input bg-background dark:bg-slate-800 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",
            r
          ),
          ref: t,
          ...i,
        });
      });
      i.displayName = "Input";
    },
    8033: function (e, t, r) {
      "use strict";
      r.d(t, {
        _: function () {
          return c;
        },
      });
      var n = r(7437),
        a = r(2265),
        s = r(4602),
        i = r(7742),
        o = r(4353);
      let l = (0, i.j)(
          "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        ),
        c = a.forwardRef((e, t) => {
          let { className: r, ...a } = e;
          return (0, n.jsx)(s.f, {
            ref: t,
            className: (0, o.cn)(l(), r),
            ...a,
          });
        });
      c.displayName = s.f.displayName;
    },
    4353: function (e, t, r) {
      "use strict";
      r.d(t, {
        cn: function () {
          return s;
        },
      });
      var n = r(3167),
        a = r(1367);
      function s() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return (0, a.m6)((0, n.W)(t));
      }
    },
    9259: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      /**
       * @license lucide-react v0.356.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let n = (0, r(843).Z)("Check", [
        ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }],
      ]);
    },
    8792: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return a.a;
        },
      });
      var n = r(5250),
        a = r.n(n);
    },
    6585: function (e, t, r) {
      "use strict";
      r.d(t, {
        s: function () {
          return a;
        },
      });
      var n = r(2220);
      let a = r(4109).create({ baseURL: n.T });
    },
    2220: function (e, t, r) {
      "use strict";
      r.d(t, {
        C: function () {
          return a;
        },
        T: function () {
          return n;
        },
      });
      let n = "https://dapp.nodelendai.io/api/v1",
        a = "815m1ll4h 83l1 s4w4hh";
    },
    8691: function (e, t, r) {
      "use strict";
      r.d(t, {
        F: function () {
          return n;
        },
      });
      let n = { style: { zIndex: 9999, textTransform: "capitalize" } };
    },
    8248: function (e, t, r) {
      "use strict";
      r.d(t, {
        z$: function () {
          return N;
        },
        fC: function () {
          return j;
        },
      });
      var n = r(2110),
        a = r(2265),
        s = r(1266),
        i = r(4104),
        o = r(4991),
        l = r(9310),
        c = r(6769),
        d = r(2642),
        u = r(9586);
      let f = "Checkbox",
        [m, p] = (0, i.b)(f),
        [h, b] = m(f),
        x = (0, a.forwardRef)((e, t) => {
          let {
              __scopeCheckbox: r,
              name: i,
              checked: c,
              defaultChecked: d,
              required: f,
              disabled: m,
              value: p = "on",
              onCheckedChange: b,
              ...x
            } = e,
            [v, j] = (0, a.useState)(null),
            N = (0, s.e)(t, (e) => j(e)),
            k = (0, a.useRef)(!1),
            C = !v || !!v.closest("form"),
            [E = !1, R] = (0, l.T)({ prop: c, defaultProp: d, onChange: b }),
            z = (0, a.useRef)(E);
          return (
            (0, a.useEffect)(() => {
              let e = null == v ? void 0 : v.form;
              if (e) {
                let t = () => R(z.current);
                return (
                  e.addEventListener("reset", t),
                  () => e.removeEventListener("reset", t)
                );
              }
            }, [v, R]),
            (0, a.createElement)(
              h,
              { scope: r, state: E, disabled: m },
              (0, a.createElement)(
                u.WV.button,
                (0, n.Z)(
                  {
                    type: "button",
                    role: "checkbox",
                    "aria-checked": y(E) ? "mixed" : E,
                    "aria-required": f,
                    "data-state": w(E),
                    "data-disabled": m ? "" : void 0,
                    disabled: m,
                    value: p,
                  },
                  x,
                  {
                    ref: N,
                    onKeyDown: (0, o.M)(e.onKeyDown, (e) => {
                      "Enter" === e.key && e.preventDefault();
                    }),
                    onClick: (0, o.M)(e.onClick, (e) => {
                      R((e) => !!y(e) || !e),
                        C &&
                          ((k.current = e.isPropagationStopped()),
                          k.current || e.stopPropagation());
                    }),
                  }
                )
              ),
              C &&
                (0, a.createElement)(g, {
                  control: v,
                  bubbles: !k.current,
                  name: i,
                  value: p,
                  checked: E,
                  required: f,
                  disabled: m,
                  style: { transform: "translateX(-100%)" },
                })
            )
          );
        }),
        v = (0, a.forwardRef)((e, t) => {
          let { __scopeCheckbox: r, forceMount: s, ...i } = e,
            o = b("CheckboxIndicator", r);
          return (0, a.createElement)(
            d.z,
            { present: s || y(o.state) || !0 === o.state },
            (0, a.createElement)(
              u.WV.span,
              (0, n.Z)(
                {
                  "data-state": w(o.state),
                  "data-disabled": o.disabled ? "" : void 0,
                },
                i,
                { ref: t, style: { pointerEvents: "none", ...e.style } }
              )
            )
          );
        }),
        g = (e) => {
          let { control: t, checked: r, bubbles: s = !0, ...i } = e,
            o = (0, a.useRef)(null),
            l = (function (e) {
              let t = (0, a.useRef)({ value: e, previous: e });
              return (0, a.useMemo)(
                () => (
                  t.current.value !== e &&
                    ((t.current.previous = t.current.value),
                    (t.current.value = e)),
                  t.current.previous
                ),
                [e]
              );
            })(r),
            d = (0, c.t)(t);
          return (
            (0, a.useEffect)(() => {
              let e = o.current,
                t = Object.getOwnPropertyDescriptor(
                  window.HTMLInputElement.prototype,
                  "checked"
                ).set;
              if (l !== r && t) {
                let n = new Event("click", { bubbles: s });
                (e.indeterminate = y(r)),
                  t.call(e, !y(r) && r),
                  e.dispatchEvent(n);
              }
            }, [l, r, s]),
            (0, a.createElement)(
              "input",
              (0, n.Z)(
                {
                  type: "checkbox",
                  "aria-hidden": !0,
                  defaultChecked: !y(r) && r,
                },
                i,
                {
                  tabIndex: -1,
                  ref: o,
                  style: {
                    ...e.style,
                    ...d,
                    position: "absolute",
                    pointerEvents: "none",
                    opacity: 0,
                    margin: 0,
                  },
                }
              )
            )
          );
        };
      function y(e) {
        return "indeterminate" === e;
      }
      function w(e) {
        return y(e) ? "indeterminate" : e ? "checked" : "unchecked";
      }
      let j = x,
        N = v;
    },
    4602: function (e, t, r) {
      "use strict";
      r.d(t, {
        f: function () {
          return i;
        },
      });
      var n = r(2110),
        a = r(2265),
        s = r(9586);
      let i = (0, a.forwardRef)((e, t) =>
        (0, a.createElement)(
          s.WV.label,
          (0, n.Z)({}, e, {
            ref: t,
            onMouseDown: (t) => {
              var r;
              null === (r = e.onMouseDown) || void 0 === r || r.call(e, t),
                !t.defaultPrevented && t.detail > 1 && t.preventDefault();
            },
          })
        )
      );
    },
    6769: function (e, t, r) {
      "use strict";
      r.d(t, {
        t: function () {
          return s;
        },
      });
      var n = r(2265),
        a = r(2618);
      function s(e) {
        let [t, r] = (0, n.useState)(void 0);
        return (
          (0, a.b)(() => {
            if (e) {
              r({ width: e.offsetWidth, height: e.offsetHeight });
              let t = new ResizeObserver((t) => {
                let n, a;
                if (!Array.isArray(t) || !t.length) return;
                let s = t[0];
                if ("borderBoxSize" in s) {
                  let e = s.borderBoxSize,
                    t = Array.isArray(e) ? e[0] : e;
                  (n = t.inlineSize), (a = t.blockSize);
                } else (n = e.offsetWidth), (a = e.offsetHeight);
                r({ width: n, height: a });
              });
              return t.observe(e, { box: "border-box" }), () => t.unobserve(e);
            }
            r(void 0);
          }, [e]),
          t
        );
      }
    },
  },
  function (e) {
    e.O(0, [139, 109, 250, 9, 971, 69, 744], function () {
      return e((e.s = 9607));
    }),
      (_N_E = e.O());
  },
]);
