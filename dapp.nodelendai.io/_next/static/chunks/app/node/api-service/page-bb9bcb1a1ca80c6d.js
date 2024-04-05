(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [703],
  {
    78: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 5077));
    },
    5077: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return g;
          },
        });
      var s = r(7437);
      r(7835);
      var l = r(2265),
        n = r(4590),
        i = r(1352),
        a = r(6795),
        c = r(8033),
        o = r(9580),
        d = r(7907),
        u = r(1334),
        x = r(8792),
        h = r(1725),
        f = r(2153),
        m = (e) => {
          let t = (0, f.useRecoilValue)(h.P),
            { dataWallet: r, handleWallet: m, handleRentalApi: p } = (0, u.Z)();
          (0, d.useRouter)();
          let [g, v] = (0, l.useState)(!1),
            [j, w] = (0, l.useState)({ nodeId: e.id, mindeposit: "" });
          return (0, s.jsxs)(i.Vq, {
            children: [
              t.address
                ? (0, s.jsx)(i.hg, {
                    asChild: !0,
                    children: (0, s.jsx)(n.z, {
                      onClick: () => m(e.id, e.title, e.rate),
                      children: "Rent Now",
                    }),
                  })
                : (0, s.jsx)(n.z, {
                    children: (0, s.jsx)(x.default, {
                      href: "/login",
                      children: "Rent Now",
                    }),
                  }),
              (0, s.jsxs)(i.cZ, {
                className: "sm:max-w-[425px]",
                children: [
                  (0, s.jsxs)(i.fK, {
                    children: [
                      (0, s.jsx)(i.$N, { children: "Billing Payment" }),
                      (0, s.jsx)(i.Be, {
                        children: "Complete the form below to rent the GPU",
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "grid gap-4 py-4",
                    children: [
                      (0, s.jsx)("div", {
                        className: "grid  items-center gap-4",
                        children: (0, s.jsxs)("div", {
                          className: "flex flex-col gap-2",
                          children: [
                            (0, s.jsx)(c._, {
                              htmlFor: "name",
                              className: " text-left",
                              children: "Name",
                            }),
                            (0, s.jsx)(a.I, {
                              id: "name",
                              defaultValue: e.name,
                              className: "col-span-3",
                              disabled: !0,
                            }),
                          ],
                        }),
                      }),
                      (0, s.jsxs)("div", {
                        className: "grid grid-cols-2 items-center gap-4",
                        children: [
                          (0, s.jsxs)("div", {
                            className: "flex flex-col gap-2",
                            children: [
                              (0, s.jsx)(c._, {
                                htmlFor: "price",
                                className: " text-left",
                                children: "Price $",
                              }),
                              (0, s.jsx)(a.I, {
                                id: "price",
                                defaultValue: e.price,
                                className: "",
                                disabled: !0,
                              }),
                            ],
                          }),
                          (0, s.jsxs)("div", {
                            className: "flex flex-col gap-2",
                            children: [
                              (0, s.jsx)(c._, {
                                htmlFor: "mindeposit",
                                className: " text-left",
                                children: "Min Deposit $30",
                              }),
                              (0, s.jsx)(a.I, {
                                id: "mindeposit",
                                value: j.mindeposit,
                                onChange: (e) =>
                                  w({ ...j, mindeposit: e.target.value }),
                                className: "",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsx)("div", {
                        className: "grid  items-center gap-4",
                        children: (0, s.jsxs)("div", {
                          className: "flex flex-col gap-2",
                          children: [
                            (0, s.jsx)(c._, {
                              htmlFor: "walletadders",
                              className: " text-left",
                              children: "Wallet address",
                            }),
                            (0, s.jsx)(a.I, {
                              id: "walletaddress",
                              defaultValue: r ? r.address : "",
                              className: "col-span-3",
                              disabled: !0,
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, s.jsx)(i.cN, {
                    children: g
                      ? (0, s.jsxs)(n.z, {
                          disabled: !0,
                          children: [
                            (0, s.jsx)(o.Z, {
                              className: "mr-2 h-4 w-4 animate-spin",
                            }),
                            "Please wait",
                          ],
                        })
                      : (0, s.jsx)(n.z, {
                          onClick: () => p(j),
                          type: "button",
                          children: "Pay now",
                        }),
                  }),
                ],
              }),
            ],
          });
        },
        p = r(2220);
      function g() {
        let [e, t] = (0, l.useState)([]);
        return (
          (0, l.useEffect)(() => {
            fetch("".concat(p.T, "/product/api"))
              .then((e) => e.json())
              .then((e) => {
                t(e);
              });
          }, []),
          (0, s.jsx)("div", {
            children: (0, s.jsx)("section", {
              className: "",
              children: (0, s.jsx)("div", {
                className:
                  "mx-auto max-w-screen-2xl px-4 py-8 lg:px-3 lg:py-16",
                children: (0, s.jsx)("div", {
                  className:
                    "space-y-8 sm:gap-3 lg:grid lg:grid-cols-4 lg:space-y-0 xl:gap-10",
                  children:
                    null == e
                      ? void 0
                      : e.map((e, t) =>
                          (0, s.jsxs)(
                            "div",
                            {
                              className:
                                "mx-auto flex max-w-lg flex-col rounded-lg border border-gray-100 bg-white p-6 text-center text-gray-900 shadow dark:border-gray-600 dark:bg-slate-900 dark:text-white xl:p-8",
                              children: [
                                (0, s.jsx)("h3", {
                                  className: "mb-4 text-2xl font-semibold",
                                  children: null == e ? void 0 : e.title,
                                }),
                                (0, s.jsx)("p", {
                                  className:
                                    "font-light text-gray-500 dark:text-gray-400 sm:text-lg",
                                  children: null == e ? void 0 : e.subTitle,
                                }),
                                (0, s.jsxs)("div", {
                                  className:
                                    "my-8 flex items-baseline justify-center",
                                  children: [
                                    (0, s.jsxs)("span", {
                                      className: " text-5xl font-extrabold",
                                      children: [
                                        "$",
                                        null == e ? void 0 : e.rate,
                                      ],
                                    }),
                                    (0, s.jsx)("span", {
                                      className:
                                        "text-gray-500 dark:text-gray-400",
                                      children: "/h",
                                    }),
                                  ],
                                }),
                                (0, s.jsxs)("ul", {
                                  className: "mb-8 space-y-4 text-left",
                                  role: "list",
                                  children: [
                                    (0, s.jsxs)("li", {
                                      className: "flex items-center space-x-3",
                                      children: [
                                        (0, s.jsx)("svg", {
                                          className:
                                            "h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400",
                                          fill: "currentColor",
                                          viewBox: "0 0 20 20",
                                          xmlns: "http://www.w3.org/2000/svg",
                                          children: (0, s.jsx)("path", {
                                            clipRule: "evenodd",
                                            d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                            fillRule: "evenodd",
                                          }),
                                        }),
                                        (0, s.jsx)("span", {
                                          children: e.feat1,
                                        }),
                                      ],
                                    }),
                                    (0, s.jsxs)("li", {
                                      className: "flex items-center space-x-3",
                                      children: [
                                        (0, s.jsx)("svg", {
                                          className:
                                            "h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400",
                                          fill: "currentColor",
                                          viewBox: "0 0 20 20",
                                          xmlns: "http://www.w3.org/2000/svg",
                                          children: (0, s.jsx)("path", {
                                            clipRule: "evenodd",
                                            d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                            fillRule: "evenodd",
                                          }),
                                        }),
                                        (0, s.jsx)("span", {
                                          children: e.feat2,
                                        }),
                                      ],
                                    }),
                                    (0, s.jsxs)("li", {
                                      className: "flex items-center space-x-3",
                                      children: [
                                        (0, s.jsx)("svg", {
                                          className:
                                            "h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400",
                                          fill: "currentColor",
                                          viewBox: "0 0 20 20",
                                          xmlns: "http://www.w3.org/2000/svg",
                                          children: (0, s.jsx)("path", {
                                            clipRule: "evenodd",
                                            d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                            fillRule: "evenodd",
                                          }),
                                        }),
                                        (0, s.jsx)("span", {
                                          children: e.feat3,
                                        }),
                                      ],
                                    }),
                                    (0, s.jsxs)("li", {
                                      className: "flex items-center space-x-3",
                                      children: [
                                        (0, s.jsx)("svg", {
                                          className:
                                            "h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400",
                                          fill: "currentColor",
                                          viewBox: "0 0 20 20",
                                          xmlns: "http://www.w3.org/2000/svg",
                                          children: (0, s.jsx)("path", {
                                            clipRule: "evenodd",
                                            d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                            fillRule: "evenodd",
                                          }),
                                        }),
                                        (0, s.jsx)("span", {
                                          children: e.feat4,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, s.jsx)("div", {
                                  className:
                                    "bg-primary-600 hover:bg-primary-700 focus:ring-primary-200 dark:focus:ring-primary-900 rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:ring-4  dark:text-white",
                                  href: "#",
                                  children: (0, s.jsx)(m, {
                                    price: e.rate,
                                    name: "Api Service - ".concat(e.title),
                                    id: e.id,
                                  }),
                                }),
                              ],
                            },
                            t
                          )
                        ),
                }),
              }),
            }),
          })
        );
      }
    },
    9580: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return s;
        },
      });
      /**
       * @license lucide-react v0.356.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let s = (0, r(843).Z)("LoaderCircle", [
        ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
      ]);
    },
    8792: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return l.a;
        },
      });
      var s = r(5250),
        l = r.n(s);
    },
    9079: function (e, t, r) {
      "use strict";
      var s, l;
      e.exports =
        (null == (s = r.g.process) ? void 0 : s.env) &&
        "object" == typeof (null == (l = r.g.process) ? void 0 : l.env)
          ? r.g.process
          : r(3127);
    },
    3127: function (e) {
      !(function () {
        var t = {
            229: function (e) {
              var t,
                r,
                s,
                l = (e.exports = {});
              function n() {
                throw Error("setTimeout has not been defined");
              }
              function i() {
                throw Error("clearTimeout has not been defined");
              }
              function a(e) {
                if (t === setTimeout) return setTimeout(e, 0);
                if ((t === n || !t) && setTimeout)
                  return (t = setTimeout), setTimeout(e, 0);
                try {
                  return t(e, 0);
                } catch (r) {
                  try {
                    return t.call(null, e, 0);
                  } catch (r) {
                    return t.call(this, e, 0);
                  }
                }
              }
              !(function () {
                try {
                  t = "function" == typeof setTimeout ? setTimeout : n;
                } catch (e) {
                  t = n;
                }
                try {
                  r = "function" == typeof clearTimeout ? clearTimeout : i;
                } catch (e) {
                  r = i;
                }
              })();
              var c = [],
                o = !1,
                d = -1;
              function u() {
                o &&
                  s &&
                  ((o = !1),
                  s.length ? (c = s.concat(c)) : (d = -1),
                  c.length && x());
              }
              function x() {
                if (!o) {
                  var e = a(u);
                  o = !0;
                  for (var t = c.length; t; ) {
                    for (s = c, c = []; ++d < t; ) s && s[d].run();
                    (d = -1), (t = c.length);
                  }
                  (s = null),
                    (o = !1),
                    (function (e) {
                      if (r === clearTimeout) return clearTimeout(e);
                      if ((r === i || !r) && clearTimeout)
                        return (r = clearTimeout), clearTimeout(e);
                      try {
                        r(e);
                      } catch (t) {
                        try {
                          return r.call(null, e);
                        } catch (t) {
                          return r.call(this, e);
                        }
                      }
                    })(e);
                }
              }
              function h(e, t) {
                (this.fun = e), (this.array = t);
              }
              function f() {}
              (l.nextTick = function (e) {
                var t = Array(arguments.length - 1);
                if (arguments.length > 1)
                  for (var r = 1; r < arguments.length; r++)
                    t[r - 1] = arguments[r];
                c.push(new h(e, t)), 1 !== c.length || o || a(x);
              }),
                (h.prototype.run = function () {
                  this.fun.apply(null, this.array);
                }),
                (l.title = "browser"),
                (l.browser = !0),
                (l.env = {}),
                (l.argv = []),
                (l.version = ""),
                (l.versions = {}),
                (l.on = f),
                (l.addListener = f),
                (l.once = f),
                (l.off = f),
                (l.removeListener = f),
                (l.removeAllListeners = f),
                (l.emit = f),
                (l.prependListener = f),
                (l.prependOnceListener = f),
                (l.listeners = function (e) {
                  return [];
                }),
                (l.binding = function (e) {
                  throw Error("process.binding is not supported");
                }),
                (l.cwd = function () {
                  return "/";
                }),
                (l.chdir = function (e) {
                  throw Error("process.chdir is not supported");
                }),
                (l.umask = function () {
                  return 0;
                });
            },
          },
          r = {};
        function s(e) {
          var l = r[e];
          if (void 0 !== l) return l.exports;
          var n = (r[e] = { exports: {} }),
            i = !0;
          try {
            t[e](n, n.exports, s), (i = !1);
          } finally {
            i && delete r[e];
          }
          return n.exports;
        }
        s.ab = "//";
        var l = s(229);
        e.exports = l;
      })();
    },
    4602: function (e, t, r) {
      "use strict";
      r.d(t, {
        f: function () {
          return i;
        },
      });
      var s = r(2110),
        l = r(2265),
        n = r(9586);
      let i = (0, l.forwardRef)((e, t) =>
        (0, l.createElement)(
          n.WV.label,
          (0, s.Z)({}, e, {
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
  },
  function (e) {
    e.O(0, [691, 139, 109, 250, 9, 304, 348, 835, 971, 69, 744], function () {
      return e((e.s = 78));
    }),
      (_N_E = e.O());
  },
]);
