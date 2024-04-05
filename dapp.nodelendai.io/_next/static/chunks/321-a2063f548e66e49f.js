"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [321],
  {
    7321: function (e, r, a) {
      a.r(r),
        a.d(r, {
          default: function () {
            return y;
          },
        });
      var t = a(7437),
        s = a(2265),
        l = a(9878),
        i = a(7713),
        n = a(6562),
        d = a(192),
        c = a(102);
      a(4590);
      var o = a(7827),
        u = a(4353);
      let m = s.forwardRef((e, r) => {
        let { className: a, value: s, ...l } = e;
        return (0, t.jsx)(o.fC, {
          ref: r,
          className: (0, u.cn)(
            "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
            a
          ),
          ...l,
          children: (0, t.jsx)(o.z$, {
            className: "h-full w-full flex-1 bg-primary transition-all",
            style: { transform: "translateX(-".concat(100 - (s || 0), "%)") },
          }),
        });
      });
      m.displayName = o.fC.displayName;
      var f = a(5056);
      let p = f.zt,
        x = f.fC,
        g = f.xz,
        h = s.forwardRef((e, r) => {
          let { className: a, sideOffset: s = 4, ...l } = e;
          return (0, t.jsx)(f.VY, {
            ref: r,
            sideOffset: s,
            className: (0, u.cn)(
              "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
              a
            ),
            ...l,
          });
        });
      h.displayName = f.VY.displayName;
      var v = a(7835),
        N = (e) => {
          let [r, a] = (0, s.useState)(0);
          return (
            s.useEffect(() => {
              let e = setTimeout(() => a(0), 500);
              return () => clearTimeout(e);
            }, []),
            (0, t.jsxs)(i.Zb, {
              className:
                "cursor-pointer rounded-xl border p-3 transition-all duration-300 ease-in-out dark:bg-slate-900 hover:dark:border-slate-600",
              children: [
                (0, t.jsxs)("div", {
                  className: "flex items-center gap-2 border-b pb-2",
                  children: [
                    (0, t.jsx)("div", {
                      className:
                        "rounded-full border-2 p-1 dark:border-slate-800",
                      children: (0, t.jsx)(d.Xdb, { size: 20 }),
                    }),
                    (0, t.jsxs)("div", {
                      className: "",
                      children: [
                        (0, t.jsx)("p", {
                          className: "text-xs font-medium text-slate-500",
                          children: e.title,
                        }),
                        (0, t.jsx)("p", {
                          className:
                            "text-sm font-bold text-slate-700 dark:text-white",
                          children: e.subTitle,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: "justify-left my-5 flex flex-wrap gap-2",
                  children: [
                    (0, t.jsxs)(n.C, {
                      variant: "secondary",
                      className:
                        "gap-2 text-[11px] transition-all duration-300 hover:bg-blue-500 hover:text-white hover:dark:bg-white hover:dark:text-slate-900",
                      children: [
                        (0, t.jsx)("p", {
                          className: " uppercase",
                          children: "gpu",
                        }),
                        (0, t.jsxs)("p", {
                          children: [e.gpuStart, "GB / ", e.gpu, "GB"],
                        }),
                      ],
                    }),
                    (0, t.jsxs)(n.C, {
                      variant: "secondary",
                      className:
                        "gap-2 text-[11px] transition-all duration-300 hover:bg-blue-500 hover:text-white hover:dark:bg-white hover:dark:text-slate-900",
                      children: [
                        (0, t.jsx)("p", {
                          className: " uppercase",
                          children: "cpu",
                        }),
                        (0, t.jsxs)("p", {
                          children: [e.cpuStart, "GB / ", e.cpu, "GB"],
                        }),
                      ],
                    }),
                    (0, t.jsxs)(n.C, {
                      variant: "secondary",
                      className:
                        "gap-2 text-[11px] transition-all duration-300 hover:bg-blue-500 hover:text-white hover:dark:bg-white hover:dark:text-slate-900",
                      children: [
                        (0, t.jsx)(c.eOs, {}),
                        " ",
                        e.up,
                        "Mbps / ",
                        (0, t.jsx)(c.qke, {}),
                        " ",
                        e.down,
                        "Mbps",
                      ],
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: "my-4",
                  children: (0, t.jsx)(p, {
                    children: (0, t.jsxs)(x, {
                      children: [
                        (0, t.jsxs)(g, {
                          className:
                            "flex  w-full flex-col items-start justify-start px-3",
                          children: [
                            (0, t.jsx)("p", {
                              className: "mb-2 text-xs font-bold uppercase",
                              children: "used",
                            }),
                            (0, t.jsx)(m, {
                              value: e.used,
                              className: "h-2 w-[100%] ",
                            }),
                          ],
                        }),
                        (0, t.jsx)(h, {
                          children: (0, t.jsxs)("p", {
                            children: [e.used, "%"],
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
                (0, t.jsxs)("div", {
                  className: "flex items-center justify-end gap-4",
                  children: [
                    (0, t.jsxs)("p", {
                      className: "font-semibold",
                      children: ["$", e.rate, " / Hour"],
                    }),
                    (0, t.jsx)(v.Z, { price: e.rate, name: e.title, id: e.id }),
                  ],
                }),
              ],
            })
          );
        },
        j = a(7656),
        b = a(2220),
        y = (e) => {
          let { tabs: r, query: a, name: i } = e,
            [n, d] = (0, s.useState)([]),
            [c, o] = (0, s.useState)(!1);
          return (
            "".concat(b.T, "/product?").concat(a),
            (0, s.useEffect)(() => {
              o(!0);
              let e = b.T;
              a ? (e += "/product?".concat(a)) : (e += "/product"),
                fetch(e)
                  .then((e) => e.json())
                  .then((e) => {
                    o(!1), d(e);
                  });
            }, []),
            (0, t.jsxs)("section", {
              className: "px-3 sm:px-6 lg:px-12",
              children: [
                (0, t.jsxs)("div", {
                  className:
                    "mt-10 flex items-center  justify-items-center gap-7",
                  children: [
                    (0, t.jsxs)("h1", {
                      className: "text-lg font-bold capitalize",
                      children: ["live GPU ", i, " nodes"],
                    }),
                    (0, t.jsx)(l.AbJ, {
                      size: 25,
                      className: "mt-1 animate-pulse text-green-600",
                    }),
                  ],
                }),
                r
                  ? (0, t.jsxs)(j.mQ, {
                      defaultValue: "All",
                      className: "mb-4",
                      children: [
                        (0, t.jsxs)(j.dr, {
                          className: "my-4",
                          children: [
                            (0, t.jsx)(j.SP, { value: "All", children: "All" }),
                            (0, t.jsx)(j.SP, {
                              value: "80GB",
                              children: "80GB",
                            }),
                            (0, t.jsx)(j.SP, {
                              value: "40GB",
                              children: "40GB",
                            }),
                            (0, t.jsx)(j.SP, {
                              value: "24GB",
                              children: "24GB",
                            }),
                            (0, t.jsx)(j.SP, {
                              value: "16GB",
                              children: "16GB",
                            }),
                            (0, t.jsx)(j.SP, {
                              value: "15GB",
                              children: "15GB",
                            }),
                            (0, t.jsx)(j.SP, {
                              value: "12GB",
                              children: "12GB",
                            }),
                            (0, t.jsx)(j.SP, { value: "8GB", children: "8GB" }),
                          ],
                        }),
                        (0, t.jsx)(j.nU, {
                          value: "All",
                          className:
                            "mt-0 grid gap-7 md:grid-cols-2 lg:grid-cols-3",
                          children: n.map((e, r) =>
                            (0, t.jsx)(
                              N,
                              { ...e },
                              "All" + e.cpuName + e.gpuName + r
                            )
                          ),
                        }),
                        (0, t.jsx)(j.nU, {
                          value: "80GB",
                          className:
                            "mt-0 grid gap-7 md:grid-cols-2 lg:grid-cols-3",
                          children: n
                            .filter((e) => 80 == e.gpu)
                            .map((e) =>
                              (0, t.jsx)(
                                N,
                                { ...e },
                                "80GB" + e.cpuName + e.gpuName
                              )
                            ),
                        }),
                        (0, t.jsx)(j.nU, {
                          value: "40GB",
                          className:
                            "mt-0 grid gap-7 md:grid-cols-2 lg:grid-cols-3",
                          children: n
                            .filter((e) => 40 == e.gpu)
                            .map((e) =>
                              (0, t.jsx)(
                                N,
                                { ...e },
                                "40GB" + e.cpuName + e.gpuName
                              )
                            ),
                        }),
                        (0, t.jsx)(j.nU, {
                          value: "24GB",
                          className:
                            "mt-0 grid gap-7 md:grid-cols-2 lg:grid-cols-3",
                          children: n
                            .filter((e) => 24 == e.gpu)
                            .map((e) =>
                              (0, t.jsx)(
                                N,
                                { ...e },
                                "24GB" + e.cpuName + e.gpuName
                              )
                            ),
                        }),
                        (0, t.jsx)(j.nU, {
                          value: "16GB",
                          className:
                            "mt-0 grid gap-7 md:grid-cols-2 lg:grid-cols-3",
                          children: n
                            .filter((e) => 16 == e.gpu)
                            .map((e) =>
                              (0, t.jsx)(
                                N,
                                { ...e },
                                "16GB" + e.cpuName + e.gpuName
                              )
                            ),
                        }),
                        (0, t.jsx)(j.nU, {
                          value: "15GB",
                          className:
                            "mt-0 grid gap-7 md:grid-cols-2 lg:grid-cols-3",
                          children: n
                            .filter((e) => 15 == e.gpu)
                            .map((e) =>
                              (0, t.jsx)(
                                N,
                                { ...e },
                                "15GB" + e.cpuName + e.gpuName
                              )
                            ),
                        }),
                        (0, t.jsx)(j.nU, {
                          value: "12GB",
                          className:
                            "mt-0 grid gap-7 md:grid-cols-2 lg:grid-cols-3",
                          children: n
                            .filter((e) => 12 == e.gpu)
                            .map((e) =>
                              (0, t.jsx)(
                                N,
                                { ...e },
                                "12GB" + e.cpuName + e.gpuName
                              )
                            ),
                        }),
                        (0, t.jsx)(j.nU, {
                          value: "8GB",
                          className:
                            "mt-0 grid gap-7 md:grid-cols-2 lg:grid-cols-3",
                          children: n
                            .filter((e) => 8 == e.gpu)
                            .map((e) =>
                              (0, t.jsx)(
                                N,
                                { ...e },
                                "8GB" + e.cpuName + e.gpuName
                              )
                            ),
                        }),
                      ],
                    })
                  : (0, t.jsx)("div", {
                      value: "All",
                      className:
                        "mt-5 grid gap-7 md:grid-cols-2 lg:grid-cols-3",
                      children: n.map((e, r) =>
                        (0, t.jsx)(
                          N,
                          { ...e },
                          "All" + e.cpuName + e.gpuName + r
                        )
                      ),
                    }),
              ],
            })
          );
        };
    },
    6562: function (e, r, a) {
      a.d(r, {
        C: function () {
          return n;
        },
      });
      var t = a(7437);
      a(2265);
      var s = a(7742),
        l = a(4353);
      let i = (0, s.j)(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        {
          variants: {
            variant: {
              default:
                "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
              secondary:
                "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
              destructive:
                "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
              outline: "text-foreground",
            },
          },
          defaultVariants: { variant: "default" },
        }
      );
      function n(e) {
        let { className: r, variant: a, ...s } = e;
        return (0, t.jsx)("div", {
          className: (0, l.cn)(i({ variant: a }), r),
          ...s,
        });
      }
    },
    7713: function (e, r, a) {
      a.d(r, {
        Ol: function () {
          return n;
        },
        SZ: function () {
          return c;
        },
        Zb: function () {
          return i;
        },
        aY: function () {
          return o;
        },
        eW: function () {
          return u;
        },
        ll: function () {
          return d;
        },
      });
      var t = a(7437),
        s = a(2265),
        l = a(4353);
      let i = s.forwardRef((e, r) => {
        let { className: a, ...s } = e;
        return (0, t.jsx)("div", {
          ref: r,
          className: (0, l.cn)(
            "rounded-lg border bg-card text-card-foreground shadow-sm",
            a
          ),
          ...s,
        });
      });
      i.displayName = "Card";
      let n = s.forwardRef((e, r) => {
        let { className: a, ...s } = e;
        return (0, t.jsx)("div", {
          ref: r,
          className: (0, l.cn)("flex flex-col space-y-1.5 p-6", a),
          ...s,
        });
      });
      n.displayName = "CardHeader";
      let d = s.forwardRef((e, r) => {
        let { className: a, ...s } = e;
        return (0, t.jsx)("h3", {
          ref: r,
          className: (0, l.cn)(
            "text-2xl font-semibold leading-none tracking-tight",
            a
          ),
          ...s,
        });
      });
      d.displayName = "CardTitle";
      let c = s.forwardRef((e, r) => {
        let { className: a, ...s } = e;
        return (0, t.jsx)("p", {
          ref: r,
          className: (0, l.cn)("text-sm text-muted-foreground", a),
          ...s,
        });
      });
      c.displayName = "CardDescription";
      let o = s.forwardRef((e, r) => {
        let { className: a, ...s } = e;
        return (0, t.jsx)("div", {
          ref: r,
          className: (0, l.cn)("p-6 pt-0", a),
          ...s,
        });
      });
      o.displayName = "CardContent";
      let u = s.forwardRef((e, r) => {
        let { className: a, ...s } = e;
        return (0, t.jsx)("div", {
          ref: r,
          className: (0, l.cn)("flex items-center p-6 pt-0", a),
          ...s,
        });
      });
      u.displayName = "CardFooter";
    },
    7656: function (e, r, a) {
      a.d(r, {
        SP: function () {
          return c;
        },
        dr: function () {
          return d;
        },
        mQ: function () {
          return n;
        },
        nU: function () {
          return o;
        },
      });
      var t = a(7437),
        s = a(2265),
        l = a(4694),
        i = a(4353);
      let n = l.fC,
        d = s.forwardRef((e, r) => {
          let { className: a, ...s } = e;
          return (0, t.jsx)(l.aV, {
            ref: r,
            className: (0, i.cn)(
              "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
              a
            ),
            ...s,
          });
        });
      d.displayName = l.aV.displayName;
      let c = s.forwardRef((e, r) => {
        let { className: a, ...s } = e;
        return (0, t.jsx)(l.xz, {
          ref: r,
          className: (0, i.cn)(
            "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-blue-500 data-[state=active]:text-white dark:data-[state=active]:text-foreground data-[state=active]:shadow-sm",
            a
          ),
          ...s,
        });
      });
      c.displayName = l.xz.displayName;
      let o = s.forwardRef((e, r) => {
        let { className: a, ...s } = e;
        return (0, t.jsx)(l.VY, {
          ref: r,
          className: (0, i.cn)(
            "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            a
          ),
          ...s,
        });
      });
      o.displayName = l.VY.displayName;
    },
  },
]);
