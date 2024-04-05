(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [534],
  {
    9320: function (e, s, t) {
      Promise.resolve().then(t.bind(t, 4201));
    },
    4201: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          default: function () {
            return y;
          },
        });
      var l = t(7437),
        a = t(2265),
        i = t(703),
        r = t(192),
        d = t(7713),
        n = t(4590),
        c = t(1352),
        m = t(6795),
        o = t(8033),
        x = t(9580),
        u = t(7907),
        h = t(1334),
        f = t(8792),
        j = t(1725),
        p = t(2153),
        g = (e) => {
          let s = (0, p.useRecoilValue)(j.P),
            {
              dataWallet: t,
              handleWallet: i,
              handleRentalGaming: r,
            } = (0, h.Z)();
          (0, u.useRouter)();
          let [d, g] = (0, a.useState)(!1),
            [N, b] = (0, a.useState)({ nodeId: e.id, mindeposit: "" });
          return (0, l.jsxs)(c.Vq, {
            children: [
              s.address
                ? (0, l.jsx)(c.hg, {
                    asChild: !0,
                    children: (0, l.jsx)(n.z, {
                      onClick: () => i(e.id, e.title, e.rate),
                      children: "Rent Now",
                    }),
                  })
                : (0, l.jsx)(n.z, {
                    children: (0, l.jsx)(f.default, {
                      href: "/login",
                      children: "Rent Now",
                    }),
                  }),
              (0, l.jsxs)(c.cZ, {
                className: "sm:max-w-[425px]",
                children: [
                  (0, l.jsxs)(c.fK, {
                    children: [
                      (0, l.jsx)(c.$N, { children: "Billing Payment" }),
                      (0, l.jsx)(c.Be, {
                        children: "Complete the form below to rent the GPU",
                      }),
                    ],
                  }),
                  (0, l.jsxs)("div", {
                    className: "grid gap-4 py-4",
                    children: [
                      (0, l.jsx)("div", {
                        className: "grid  items-center gap-4",
                        children: (0, l.jsxs)("div", {
                          className: "flex flex-col gap-2",
                          children: [
                            (0, l.jsx)(o._, {
                              htmlFor: "name",
                              className: " text-left",
                              children: "Name",
                            }),
                            (0, l.jsx)(m.I, {
                              id: "name",
                              defaultValue: e.name,
                              className: "col-span-3",
                              disabled: !0,
                            }),
                          ],
                        }),
                      }),
                      (0, l.jsxs)("div", {
                        className: "grid grid-cols-2 items-center gap-4",
                        children: [
                          (0, l.jsxs)("div", {
                            className: "flex flex-col gap-2",
                            children: [
                              (0, l.jsx)(o._, {
                                htmlFor: "price",
                                className: " text-left",
                                children: "Price $",
                              }),
                              (0, l.jsx)(m.I, {
                                id: "price",
                                defaultValue: e.price,
                                className: "",
                                disabled: !0,
                              }),
                            ],
                          }),
                          (0, l.jsxs)("div", {
                            className: "flex flex-col gap-2",
                            children: [
                              (0, l.jsx)(o._, {
                                htmlFor: "mindeposit",
                                className: " text-left",
                                children: "Min Deposit $30",
                              }),
                              (0, l.jsx)(m.I, {
                                id: "mindeposit",
                                value: N.mindeposit,
                                onChange: (e) =>
                                  b({ ...N, mindeposit: e.target.value }),
                                className: "",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, l.jsx)("div", {
                        className: "grid  items-center gap-4",
                        children: (0, l.jsxs)("div", {
                          className: "flex flex-col gap-2",
                          children: [
                            (0, l.jsx)(o._, {
                              htmlFor: "walletadders",
                              className: " text-left",
                              children: "Wallet address",
                            }),
                            (0, l.jsx)(m.I, {
                              id: "walletaddress",
                              defaultValue: t ? t.address : "",
                              className: "col-span-3",
                              disabled: !0,
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, l.jsx)(c.cN, {
                    children: d
                      ? (0, l.jsxs)(n.z, {
                          disabled: !0,
                          children: [
                            (0, l.jsx)(x.Z, {
                              className: "mr-2 h-4 w-4 animate-spin",
                            }),
                            "Please wait",
                          ],
                        })
                      : (0, l.jsx)(n.z, {
                          onClick: () => r(N),
                          type: "button",
                          children: "Pay now",
                        }),
                  }),
                ],
              }),
            ],
          });
        },
        N = (e) => {
          let [s, t] = (0, a.useState)(0);
          return (
            a.useEffect(() => {
              let e = setTimeout(() => t(0), 500);
              return () => clearTimeout(e);
            }, []),
            (0, l.jsxs)(
              d.Zb,
              {
                className:
                  " cursor-pointer rounded-xl  border p-3 transition-all duration-300 ease-in-out dark:bg-slate-900 hover:dark:border-slate-600",
                children: [
                  (0, l.jsxs)("div", {
                    className: "flex items-center gap-2 border-b pb-2",
                    children: [
                      (0, l.jsx)("div", {
                        className:
                          "rounded-full border-2 p-1 dark:border-slate-800",
                        children: (0, l.jsx)(r.Xdb, { size: 20 }),
                      }),
                      (0, l.jsxs)("div", {
                        className: "",
                        children: [
                          (0, l.jsx)("p", {
                            className: "text-xs font-medium text-slate-500",
                            children: e.title,
                          }),
                          (0, l.jsx)("p", {
                            className:
                              "text-sm font-bold text-slate-700 dark:text-white",
                            children: e.subTitle,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, l.jsx)("div", {
                    className: "mt-4 flex items-center justify-center pt-2",
                    children: (0, l.jsx)(i.default, {
                      src: "/".concat(e.image),
                      width: 500,
                      height: 250,
                      alt: "product",
                      className: "rounded-md",
                    }),
                  }),
                  (0, l.jsxs)("div", {
                    className: " flex items-center justify-end",
                    children: [
                      (0, l.jsxs)("p", {
                        className: "mr-5 font-semibold",
                        children: ["$", e.rate, " / Hour"],
                      }),
                      (0, l.jsx)(g, { price: e.rate, name: e.title, id: e.id }),
                    ],
                  }),
                ],
              },
              e.index
            )
          );
        };
      t(7321);
      var b = t(2220),
        v = t(9878);
      function y() {
        let [e, s] = (0, a.useState)([]);
        return (
          (0, a.useEffect)(() => {
            fetch("".concat(b.T, "/product/gaming"))
              .then((e) => e.json())
              .then((e) => {
                s(e);
              });
          }, []),
          (0, l.jsx)(l.Fragment, {
            children: (0, l.jsxs)("section", {
              className: "px-3 sm:px-6 lg:px-12",
              children: [
                (0, l.jsxs)("div", {
                  className:
                    "mt-10 flex items-center  justify-items-center gap-7",
                  children: [
                    (0, l.jsx)("h1", {
                      className: "text-lg font-bold capitalize",
                      children: "Node Gaming",
                    }),
                    (0, l.jsx)(v.AbJ, {
                      size: 25,
                      className: "mt-1 animate-pulse text-green-600",
                    }),
                  ],
                }),
                (0, l.jsx)("div", {
                  className:
                    "flex items-center justify-items-center   gap-7 py-3",
                  children: (0, l.jsx)("h1", {
                    className: "text-sm capitalize",
                    children:
                      "Play your favorite games straight from the node",
                  }),
                }),
                (0, l.jsx)("div", {
                  className: "mt-0 grid gap-7 md:grid-cols-2  lg:grid-cols-3",
                  children: e.map((e, s) =>
                    (0, a.createElement)(N, { ...e, key: s })
                  ),
                }),
              ],
            }),
          })
        );
      }
    },
    703: function (e, s, t) {
      "use strict";
      t.d(s, {
        default: function () {
          return a.a;
        },
      });
      var l = t(7447),
        a = t.n(l);
    },
    7447: function (e, s, t) {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 }),
        (function (e, s) {
          for (var t in s)
            Object.defineProperty(e, t, { enumerable: !0, get: s[t] });
        })(s, {
          getImageProps: function () {
            return d;
          },
          default: function () {
            return n;
          },
        });
      let l = t(6921),
        a = t(8630),
        i = t(1749),
        r = l._(t(536)),
        d = (e) => {
          let { props: s } = (0, a.getImgProps)(e, {
            defaultLoader: r.default,
            imgConf: {
              deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
              imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
              path: "/_next/image",
              loader: "default",
              dangerouslyAllowSVG: !1,
              unoptimized: !1,
            },
          });
          for (let [e, t] of Object.entries(s)) void 0 === t && delete s[e];
          return { props: s };
        },
        n = i.Image;
    },
  },
  function (e) {
    e.O(
      0,
      [
        691, 950, 217, 994, 139, 109, 250, 9, 304, 348, 658, 749, 268, 823, 835,
        321, 971, 69, 744,
      ],
      function () {
        return e((e.s = 9320));
      }
    ),
      (_N_E = e.O());
  },
]);
