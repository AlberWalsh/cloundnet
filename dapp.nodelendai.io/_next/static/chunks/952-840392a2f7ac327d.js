"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [952],
  {
    2952: function (e, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return E;
          },
        });
      var s = a(7437),
        l = a(8305),
        r = a(1725),
        n = a(2220),
        d = a(9247),
        i = a(146),
        o = a(703),
        c = a(8792),
        m = a(7907),
        f = a(2265),
        u = a(1249),
        x = a(2153),
        h = a(4590),
        p = a(7562),
        j = a(2936),
        g = a(7742),
        N = a(2235),
        b = a(4353);
      let y = j.fC,
        w = j.xz;
      j.x8;
      let v = j.h_,
        k = f.forwardRef((e, t) => {
          let { className: a, ...l } = e;
          return (0, s.jsx)(j.aV, {
            className: (0, b.cn)(
              "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
              a
            ),
            ...l,
            ref: t,
          });
        });
      k.displayName = j.aV.displayName;
      let C = (0, g.j)(
          "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          {
            variants: {
              side: {
                top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
                bottom:
                  "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
                left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
                right:
                  "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
              },
            },
            defaultVariants: { side: "right" },
          }
        ),
        z = f.forwardRef((e, t) => {
          let { side: a = "right", className: l, children: r, ...n } = e;
          return (0, s.jsxs)(v, {
            children: [
              (0, s.jsx)(k, {}),
              (0, s.jsxs)(j.VY, {
                ref: t,
                className: (0, b.cn)(C({ side: a }), l),
                ...n,
                children: [
                  r,
                  (0, s.jsxs)(j.x8, {
                    className:
                      "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
                    children: [
                      (0, s.jsx)(N.Z, { className: "h-4 w-4" }),
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
      z.displayName = j.VY.displayName;
      let R = (e) => {
        let { className: t, ...a } = e;
        return (0, s.jsx)("div", {
          className: (0, b.cn)(
            "flex flex-col space-y-2 text-center sm:text-left",
            t
          ),
          ...a,
        });
      };
      R.displayName = "SheetHeader";
      let Z = f.forwardRef((e, t) => {
        let { className: a, ...l } = e;
        return (0, s.jsx)(j.Dx, {
          ref: t,
          className: (0, b.cn)("text-lg font-semibold text-foreground", a),
          ...l,
        });
      });
      (Z.displayName = j.Dx.displayName),
        (f.forwardRef((e, t) => {
          let { className: a, ...l } = e;
          return (0, s.jsx)(j.dk, {
            ref: t,
            className: (0, b.cn)("text-sm text-muted-foreground", a),
            ...l,
          });
        }).displayName = j.dk.displayName);
      var _ = a(9230),
        A = a(2120),
        V = a(8493),
        D = a(6562);
      function S(e) {
        let [t, a] = f.useState(!1);
        return (0, s.jsx)("div", {
          className:
            "flex  flex-col items-start justify-between rounded-md border  sm:flex-row sm:items-center",
          children: (0, s.jsxs)(p.h_, {
            open: t,
            onOpenChange: a,
            children: [
              (0, s.jsx)(p.$F, {
                asChild: !0,
                children: (0, s.jsx)(h.z, {
                  variant: "ghost",
                  size: "sm",
                  children: (0, s.jsx)(_.Z, {}),
                }),
              }),
              (0, s.jsxs)(p.AW, {
                align: "end",
                className: "w-[200px]",
                children: [
                  (0, s.jsx)(p.Ju, {
                    children: (0, s.jsxs)("div", {
                      className:
                        "flex items-center justify-between justify-items-center",
                      children: [
                        (0, s.jsxs)("div", {
                          className: "",
                          children: [
                            (0, s.jsx)("p", {
                              className: "text-[12px] font-semibold",
                              children: e.name,
                            }),
                            (0, s.jsx)("p", {
                              className: "text-[9px] text-slate-500",
                              children: e.email,
                            }),
                          ],
                        }),
                        "admin" !== e.role
                          ? (0, s.jsxs)(D.C, {
                              className: "text-[9px] text-slate-800",
                              children: ["$", e.balance],
                            })
                          : (0, s.jsx)(D.C, {
                              className: "text-[9px] text-slate-800",
                              children: e.role,
                            }),
                      ],
                    }),
                  }),
                  (0, s.jsx)(p.VD, {}),
                  (0, s.jsxs)(p.Qk, {
                    children: [
                      "admin" === e.role
                        ? (0, s.jsx)(p.Xi, {
                            children: (0, s.jsxs)(c.default, {
                              href: "/admin/order",
                              className: "flex items-center gap-3",
                              children: [
                                (0, s.jsx)(A.Z, { className: "mr-2 h-4 w-4" }),
                                "All user orders",
                              ],
                            }),
                          })
                        : (0, s.jsx)(p.Xi, {
                            children: (0, s.jsxs)(c.default, {
                              href: "/user/order",
                              className: "flex items-center gap-3",
                              children: [
                                (0, s.jsx)(A.Z, { className: "mr-2 h-4 w-4" }),
                                "my orders",
                              ],
                            }),
                          }),
                      (0, s.jsx)(p.VD, {}),
                      (0, s.jsxs)(p.Xi, {
                        className: "text-red-600",
                        onClick: () => {
                          i.Z.remove("token"),
                            (window.location.href = "/login");
                        },
                        children: [
                          (0, s.jsx)(V.Z, { className: "mr-2 h-4 w-4" }),
                          "Logout",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var X = a(1047),
        F = a(2891),
        L = a(1774);
      function U() {
        let { setTheme: e } = (0, L.F)();
        return (0, s.jsxs)(p.h_, {
          children: [
            (0, s.jsx)(p.$F, {
              asChild: !0,
              children: (0, s.jsxs)(h.z, {
                variant: "outline",
                size: "icon",
                children: [
                  (0, s.jsx)(X.Z, {
                    className:
                      "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0",
                  }),
                  (0, s.jsx)(F.Z, {
                    className:
                      "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100",
                  }),
                  (0, s.jsx)("span", {
                    className: "sr-only",
                    children: "Toggle theme",
                  }),
                ],
              }),
            }),
            (0, s.jsxs)(p.AW, {
              align: "end",
              children: [
                (0, s.jsx)(p.Xi, {
                  onClick: () => e("light"),
                  children: "Light",
                }),
                (0, s.jsx)(p.Xi, {
                  onClick: () => e("dark"),
                  children: "Dark",
                }),
                (0, s.jsx)(p.Xi, {
                  onClick: () => e("system"),
                  children: "System",
                }),
              ],
            }),
          ],
        });
      }
      var E = () => {
        let [e, t] = (0, x.useRecoilState)(r.P),
          a = (0, m.usePathname)(),
          [j, g] = (0, f.useState)(!1);
        return ((0, f.useEffect)(() => {
          let e = i.Z.get("token");
          if (e) {
            let a = (function (e, t) {
              try {
                return (0, d.verify)(e, t);
              } catch (e) {
                return console.error("Gagal mendekode token:", e.message), null;
              }
            })(e, n.C);
            g(!0), t(a);
          }
        }, []),
        "/login" === a || "/register" === a)
          ? null
          : (0, s.jsxs)("nav", {
              className:
                " bg-blur-md mt-5 flex h-16 w-full items-center justify-between rounded-xl bg-gradient-to-tr px-10 py-10 dark:border-r dark:border-t dark:border-slate-600  dark:from-slate-100/20 dark:to-slate-100/10  ",
              children: [
                (0, s.jsx)(c.default, {
                  href: "/",
                  children: (0, s.jsx)(o.default, {
                    src: "/nav.png",
                    priority: !0,
                    alt: "logo",
                    width: 200,
                    height: 200,
                  }),
                }),
                (0, s.jsx)("ul", {
                  className: "hidden gap-5 lg:flex ",
                  children: l.Au.map((e) =>
                    (0, s.jsx)(
                      "li",
                      {
                        children: (0, s.jsx)(c.default, {
                          href: e.href,
                          className: "".concat(
                            e.href === a ? "text-blue-500" : "",
                            " text-lg capitalize transition-all duration-200 hover:text-blue-500"
                          ),
                          children: e.label,
                        }),
                      },
                      e.id
                    )
                  ),
                }),
                (0, s.jsxs)("div", {
                  className: "flex  items-center gap-4",
                  children: [
                    (0, s.jsx)(U, {}),
                    (0, s.jsx)("div", {
                      className: "lg:hidden",
                      children: (0, s.jsxs)(y, {
                        children: [
                          (0, s.jsx)(w, {
                            asChild: !0,
                            children: (0, s.jsx)(h.z, {
                              variant: "outline",
                              children: (0, s.jsx)(u.Bbf, {}),
                            }),
                          }),
                          (0, s.jsxs)(z, {
                            children: [
                              (0, s.jsx)(R, {
                                children: (0, s.jsx)(Z, {
                                  children: (0, s.jsxs)("div", {
                                    className: "",
                                    children: [
                                      (0, s.jsx)("p", { children: e.name }),
                                      (0, s.jsx)("p", { children: e.email }),
                                    ],
                                  }),
                                }),
                              }),
                              (0, s.jsx)(p.VD, { className: "mt-3" }),
                              l.Au.map((e) =>
                                (0, s.jsx)(
                                  "div",
                                  {
                                    className:
                                      "flex w-full flex-col justify-start gap-5 text-left text-lg capitalize transition-all duration-200 hover:text-blue-500",
                                    children: (0, s.jsx)(c.default, {
                                      href: e.href,
                                      className: "mt-5 divide-y-2 ".concat(
                                        e.href === a ? "text-blue-500" : "",
                                        " text-lg capitalize transition-all duration-200 hover:text-blue-500"
                                      ),
                                      children: e.label,
                                    }),
                                  },
                                  e.id
                                )
                              ),
                              j
                                ? (0, s.jsxs)("div", {
                                    className: "mt-5",
                                    children: [
                                      "admin" === e.roleId
                                        ? (0, s.jsx)(c.default, {
                                            href: "/admin/order",
                                            className: "flex items-center",
                                            children: "All user orders",
                                          })
                                        : (0, s.jsx)(c.default, {
                                            href: "/user/order",
                                            className: "flex items-center",
                                            children: "Orders",
                                          }),
                                      (0, s.jsx)(h.z, {
                                        className: "mt-5 w-full",
                                        onClick: () => {
                                          i.Z.remove("token"),
                                            (window.location.href = "/login");
                                        },
                                        children: "Logout",
                                      }),
                                    ],
                                  })
                                : (0, s.jsx)(c.default, {
                                    href: "/login",
                                    children: (0, s.jsx)(h.z, {
                                      className: "mt-5 rounded-lg",
                                      children: "Login",
                                    }),
                                  }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    j
                      ? (0, s.jsx)("div", {
                          className: "hidden lg:block",
                          children: (0, s.jsx)(S, {
                            name: e.name,
                            email: e.email,
                            role: e.roleId,
                            balance: e.balance,
                          }),
                        })
                      : (0, s.jsx)(c.default, {
                          href: "/login",
                          className: "hidden lg:block",
                          children: (0, s.jsx)(h.z, {
                            className: "rounded-lg",
                            children: "Login",
                          }),
                        }),
                  ],
                }),
              ],
            });
      };
    },
    7562: function (e, t, a) {
      a.d(t, {
        $F: function () {
          return m;
        },
        AW: function () {
          return u;
        },
        Ju: function () {
          return p;
        },
        Qk: function () {
          return f;
        },
        VD: function () {
          return j;
        },
        Xi: function () {
          return x;
        },
        bO: function () {
          return h;
        },
        h_: function () {
          return c;
        },
      });
      var s = a(7437),
        l = a(2265),
        r = a(1100),
        n = a(7805),
        d = a(9259),
        i = a(7501),
        o = a(4353);
      let c = r.fC,
        m = r.xz,
        f = r.ZA;
      r.Uv,
        r.Tr,
        r.Ee,
        (l.forwardRef((e, t) => {
          let { className: a, inset: l, children: d, ...i } = e;
          return (0, s.jsxs)(r.fF, {
            ref: t,
            className: (0, o.cn)(
              "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
              l && "pl-8",
              a
            ),
            ...i,
            children: [d, (0, s.jsx)(n.Z, { className: "ml-auto h-4 w-4" })],
          });
        }).displayName = r.fF.displayName),
        (l.forwardRef((e, t) => {
          let { className: a, ...l } = e;
          return (0, s.jsx)(r.tu, {
            ref: t,
            className: (0, o.cn)(
              "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
              a
            ),
            ...l,
          });
        }).displayName = r.tu.displayName);
      let u = l.forwardRef((e, t) => {
        let { className: a, sideOffset: l = 4, ...n } = e;
        return (0, s.jsx)(r.Uv, {
          children: (0, s.jsx)(r.VY, {
            ref: t,
            sideOffset: l,
            className: (0, o.cn)(
              "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
              a
            ),
            ...n,
          }),
        });
      });
      u.displayName = r.VY.displayName;
      let x = l.forwardRef((e, t) => {
        let { className: a, inset: l, ...n } = e;
        return (0, s.jsx)(r.ck, {
          ref: t,
          className: (0, o.cn)(
            "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            l && "pl-8",
            a
          ),
          ...n,
        });
      });
      x.displayName = r.ck.displayName;
      let h = l.forwardRef((e, t) => {
        let { className: a, children: l, checked: n, ...i } = e;
        return (0, s.jsxs)(r.oC, {
          ref: t,
          className: (0, o.cn)(
            "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            a
          ),
          checked: n,
          ...i,
          children: [
            (0, s.jsx)("span", {
              className:
                "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
              children: (0, s.jsx)(r.wU, {
                children: (0, s.jsx)(d.Z, { className: "h-4 w-4" }),
              }),
            }),
            l,
          ],
        });
      });
      (h.displayName = r.oC.displayName),
        (l.forwardRef((e, t) => {
          let { className: a, children: l, ...n } = e;
          return (0, s.jsxs)(r.Rk, {
            ref: t,
            className: (0, o.cn)(
              "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
              a
            ),
            ...n,
            children: [
              (0, s.jsx)("span", {
                className:
                  "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: (0, s.jsx)(r.wU, {
                  children: (0, s.jsx)(i.Z, {
                    className: "h-2 w-2 fill-current",
                  }),
                }),
              }),
              l,
            ],
          });
        }).displayName = r.Rk.displayName);
      let p = l.forwardRef((e, t) => {
        let { className: a, inset: l, ...n } = e;
        return (0, s.jsx)(r.__, {
          ref: t,
          className: (0, o.cn)(
            "px-2 py-1.5 text-sm font-semibold",
            l && "pl-8",
            a
          ),
          ...n,
        });
      });
      p.displayName = r.__.displayName;
      let j = l.forwardRef((e, t) => {
        let { className: a, ...l } = e;
        return (0, s.jsx)(r.Z0, {
          ref: t,
          className: (0, o.cn)("-mx-1 my-1 h-px bg-muted", a),
          ...l,
        });
      });
      j.displayName = r.Z0.displayName;
    },
    8305: function (e, t, a) {
      a.d(t, {
        Au: function () {
          return s;
        },
      });
      let s = [
        { id: 1, label: "Rent GPU Computing", href: "/" },
        { id: 4, label: "Powerfull Dedicate Server", href: "/node/dedicated" },
        { id: 2, label: "Node Mining", href: "/node/mining" },
        { id: 3, label: "Node Gaming", href: "/node/gaming" },
        { id: 5, label: "Anon Node", href: "/node/anone" },
        { id: 6, label: "Api Service", href: "/node/api-service" },
      ];
    },
  },
]);
