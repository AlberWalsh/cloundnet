"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [835],
  {
    7835: function (e, t, a) {
      var s = a(7437),
        n = a(2265),
        r = a(4590),
        l = a(1352),
        i = a(6795),
        o = a(8033),
        d = a(9580),
        c = a(7907),
        u = a(1334),
        f = a(8792),
        m = a(1725),
        p = a(2153);
      t.Z = (e) => {
        let t = (0, p.useRecoilValue)(m.P),
          { dataWallet: a, handleWallet: g, handleRental: x } = (0, u.Z)();
        (0, c.useRouter)();
        let [h, b] = (0, n.useState)(!1),
          [N, v] = (0, n.useState)({ nodeId: e.id, mindeposit: "" });
        return (0, s.jsxs)(l.Vq, {
          children: [
            t.address
              ? (0, s.jsx)(l.hg, {
                  asChild: !0,
                  children: (0, s.jsx)(r.z, {
                    onClick: () => g(e.id, e.title, e.rate),
                    children: "Rent Now",
                  }),
                })
              : (0, s.jsx)(r.z, {
                  children: (0, s.jsx)(f.default, {
                    href: "/login",
                    children: "Rent Now",
                  }),
                }),
            (0, s.jsxs)(l.cZ, {
              className: "sm:max-w-[425px]",
              children: [
                (0, s.jsxs)(l.fK, {
                  children: [
                    (0, s.jsx)(l.$N, { children: "Billing Payment" }),
                    (0, s.jsx)(l.Be, {
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
                          (0, s.jsx)(o._, {
                            htmlFor: "name",
                            className: " text-left",
                            children: "Name",
                          }),
                          (0, s.jsx)(i.I, {
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
                            (0, s.jsx)(o._, {
                              htmlFor: "price",
                              className: " text-left",
                              children: "Price $",
                            }),
                            (0, s.jsx)(i.I, {
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
                            (0, s.jsx)(o._, {
                              htmlFor: "mindeposit",
                              className: " text-left",
                              children: "Min Deposit $30",
                            }),
                            (0, s.jsx)(i.I, {
                              id: "mindeposit",
                              value: N.mindeposit,
                              onChange: (e) =>
                                v({ ...N, mindeposit: e.target.value }),
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
                          (0, s.jsx)(o._, {
                            htmlFor: "walletadders",
                            className: " text-left",
                            children: "Wallet address",
                          }),
                          (0, s.jsx)(i.I, {
                            id: "walletaddress",
                            defaultValue: a ? a.address : "",
                            className: "col-span-3",
                            disabled: !0,
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, s.jsx)(l.cN, {
                  children: h
                    ? (0, s.jsxs)(r.z, {
                        disabled: !0,
                        children: [
                          (0, s.jsx)(d.Z, {
                            className: "mr-2 h-4 w-4 animate-spin",
                          }),
                          "Please wait",
                        ],
                      })
                    : (0, s.jsx)(r.z, {
                        onClick: () => x(N),
                        type: "button",
                        children: "Pay now",
                      }),
                }),
              ],
            }),
          ],
        });
      };
    },
    1334: function (e, t, a) {
      var s = a(1725),
        n = a(6585),
        r = a(8691),
        l = a(7907),
        i = a(2265),
        o = a(8009),
        d = a(2153);
      t.Z = () => {
        let e = (0, d.useRecoilValue)(s.P),
          [t, a] = (0, i.useState)(!1),
          [c, u] = (0, i.useState)(!1),
          [f, m] = (0, i.useState)({
            address: "",
            mnemonic: "",
            privateKey: "",
            rate: 0,
            id: "",
            title: "",
          }),
          p = (0, l.useRouter)();
        return {
          handleRental: (e) => {
            a(!0),
              n.s
                .post("/rental", { payload: e })
                .then((e) => {
                  a(!1),
                    200 === e.status &&
                      (u(!1),
                      o.default.success(e.data.message, r.F),
                      p.push("/waiting"));
                })
                .catch((e) => {
                  a(!1),
                    o.default.error("".concat(e.response.data.error), r.F),
                    u(!1),
                    console.log(e);
                });
          },
          isLoading: t,
          handleWallet: (t, a, s) => {
            m({ address: e.address, rate: s, id: t, title: a }), u(!0);
          },
          setOpenModal: u,
          dataWallet: f,
          openModal: c,
          onCloseModal: function () {
            u(!1);
          },
          handleRentalGaming: (e) => {
            a(!0),
              n.s
                .post("/rental/gaming", { payload: e })
                .then((e) => {
                  a(!1),
                    200 === e.status &&
                      (u(!1),
                      o.default.success(e.data.message, r.F),
                      p.push("/waiting"));
                })
                .catch((e) => {
                  a(!1),
                    o.default.error("".concat(e.response.data.error), r.F),
                    u(!1),
                    console.log(e);
                });
          },
          handleRentalAnon: (e) => {
            a(!0),
              n.s
                .post("/rental/anon", { payload: e })
                .then((e) => {
                  a(!1),
                    200 === e.status &&
                      (u(!1),
                      o.default.success(e.data.message, r.F),
                      p.push("/waiting"));
                })
                .catch((e) => {
                  a(!1),
                    o.default.error("".concat(e.response.data.error), r.F),
                    u(!1),
                    console.log(e);
                });
          },
          handleRentalApi: (e) => {
            a(!0),
              n.s
                .post("/rental/apiservice", { payload: e })
                .then((e) => {
                  a(!1),
                    200 === e.status &&
                      (u(!1),
                      o.default.success(e.data.message, r.F),
                      p.push("/waiting"));
                })
                .catch((e) => {
                  a(!1),
                    o.default.error("".concat(e.response.data.error), r.F),
                    u(!1),
                    console.log(e);
                });
          },
        };
      };
    },
    4590: function (e, t, a) {
      a.d(t, {
        z: function () {
          return d;
        },
      });
      var s = a(7437),
        n = a(2265),
        r = a(9143),
        l = a(7742),
        i = a(4353);
      let o = (0, l.j)(
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
        d = n.forwardRef((e, t) => {
          let { className: a, variant: n, size: l, asChild: d = !1, ...c } = e,
            u = d ? r.g7 : "button";
          return (0, s.jsx)(u, {
            className: (0, i.cn)(o({ variant: n, size: l, className: a })),
            ref: t,
            ...c,
          });
        });
      d.displayName = "Button";
    },
    1352: function (e, t, a) {
      a.d(t, {
        $N: function () {
          return g;
        },
        Be: function () {
          return x;
        },
        Vq: function () {
          return o;
        },
        cN: function () {
          return p;
        },
        cZ: function () {
          return f;
        },
        fK: function () {
          return m;
        },
        hg: function () {
          return d;
        },
      });
      var s = a(7437),
        n = a(2265),
        r = a(2936),
        l = a(2235),
        i = a(4353);
      let o = r.fC,
        d = r.xz,
        c = r.h_;
      r.x8;
      let u = n.forwardRef((e, t) => {
        let { className: a, ...n } = e;
        return (0, s.jsx)(r.aV, {
          ref: t,
          className: (0, i.cn)(
            "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            a
          ),
          ...n,
        });
      });
      u.displayName = r.aV.displayName;
      let f = n.forwardRef((e, t) => {
        let { className: a, children: n, ...o } = e;
        return (0, s.jsxs)(c, {
          children: [
            (0, s.jsx)(u, {}),
            (0, s.jsxs)(r.VY, {
              ref: t,
              className: (0, i.cn)(
                "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
                a
              ),
              ...o,
              children: [
                n,
                (0, s.jsxs)(r.x8, {
                  className:
                    "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                  children: [
                    (0, s.jsx)(l.Z, { className: "h-4 w-4" }),
                    (0, s.jsx)("span", {
                      className: "sr-only",
                      children: "Close",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      });
      f.displayName = r.VY.displayName;
      let m = (e) => {
        let { className: t, ...a } = e;
        return (0, s.jsx)("div", {
          className: (0, i.cn)(
            "flex flex-col space-y-1.5 text-center sm:text-left",
            t
          ),
          ...a,
        });
      };
      m.displayName = "DialogHeader";
      let p = (e) => {
        let { className: t, ...a } = e;
        return (0, s.jsx)("div", {
          className: (0, i.cn)(
            "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
            t
          ),
          ...a,
        });
      };
      p.displayName = "DialogFooter";
      let g = n.forwardRef((e, t) => {
        let { className: a, ...n } = e;
        return (0, s.jsx)(r.Dx, {
          ref: t,
          className: (0, i.cn)(
            "text-lg font-semibold leading-none tracking-tight",
            a
          ),
          ...n,
        });
      });
      g.displayName = r.Dx.displayName;
      let x = n.forwardRef((e, t) => {
        let { className: a, ...n } = e;
        return (0, s.jsx)(r.dk, {
          ref: t,
          className: (0, i.cn)("text-sm text-muted-foreground", a),
          ...n,
        });
      });
      x.displayName = r.dk.displayName;
    },
    6795: function (e, t, a) {
      a.d(t, {
        I: function () {
          return l;
        },
      });
      var s = a(7437),
        n = a(2265),
        r = a(4353);
      let l = n.forwardRef((e, t) => {
        let { className: a, type: n, ...l } = e;
        return (0, s.jsx)("input", {
          type: n,
          className: (0, r.cn)(
            "flex h-10 w-full rounded-md border border-input bg-background dark:bg-slate-800 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",
            a
          ),
          ref: t,
          ...l,
        });
      });
      l.displayName = "Input";
    },
    8033: function (e, t, a) {
      a.d(t, {
        _: function () {
          return d;
        },
      });
      var s = a(7437),
        n = a(2265),
        r = a(4602),
        l = a(7742),
        i = a(4353);
      let o = (0, l.j)(
          "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        ),
        d = n.forwardRef((e, t) => {
          let { className: a, ...n } = e;
          return (0, s.jsx)(r.f, {
            ref: t,
            className: (0, i.cn)(o(), a),
            ...n,
          });
        });
      d.displayName = r.f.displayName;
    },
    4353: function (e, t, a) {
      a.d(t, {
        cn: function () {
          return r;
        },
      });
      var s = a(3167),
        n = a(1367);
      function r() {
        for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        return (0, n.m6)((0, s.W)(t));
      }
    },
    1725: function (e, t, a) {
      a.d(t, {
        P: function () {
          return n;
        },
      });
      let { atom: s } = a(2153),
        n = s({
          key: "userLoginState",
          default: {
            id: "",
            name: "",
            email: "",
            roleId: "",
            address: "",
            balance: 0,
            isLogedin: !1,
          },
        });
    },
    6585: function (e, t, a) {
      a.d(t, {
        s: function () {
          return n;
        },
      });
      var s = a(2220);
      let n = a(4109).create({ baseURL: s.T });
    },
    2220: function (e, t, a) {
      a.d(t, {
        C: function () {
          return n;
        },
        T: function () {
          return s;
        },
      });
      let s = "https://dapp.nodelendai.io/api/v1",
      n = "815m1ll4h 83l1 s4w4hh";
    },
    8691: function (e, t, a) {
      a.d(t, {
        F: function () {
          return s;
        },
      });
      let s = { style: { zIndex: 9999, textTransform: "capitalize" } };
    },
  },
]);
