(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [55],
  {
    4865: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 9040));
    },
    9040: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          columns: function () {
            return N;
          },
          default: function () {
            return w;
          },
        });
      var n = r(7437),
        l = r(1006),
        s = r(3280),
        i = r(585),
        a = r(2265);
      r(7835);
      var o = r(4590),
        c = r(2498),
        d = r(2220),
        u = r(9878),
        f = r(1352),
        m = r(6795),
        h = r(8033),
        p = r(9580),
        x = r(7907),
        g = r(1334),
        v = r(8792),
        j = r(1725),
        b = r(2153),
        y = (e) => {
          let t = (0, b.useRecoilValue)(j.P),
            {
              dataWallet: r,
              handleWallet: l,
              handleRentalAnon: s,
            } = (0, g.Z)();
          (0, x.useRouter)();
          let [i, c] = (0, a.useState)(!1),
            [d, u] = (0, a.useState)({ nodeId: e.id, mindeposit: "" });
          return (0, n.jsxs)(f.Vq, {
            children: [
              t.address
                ? (0, n.jsx)(f.hg, {
                    asChild: !0,
                    children: (0, n.jsx)(o.z, {
                      onClick: () => l(e.id, e.title, e.rate),
                      children: "Rent Now",
                    }),
                  })
                : (0, n.jsx)(o.z, {
                    children: (0, n.jsx)(v.default, {
                      href: "/login",
                      children: "Rent Now",
                    }),
                  }),
              (0, n.jsxs)(f.cZ, {
                className: "sm:max-w-[425px]",
                children: [
                  (0, n.jsxs)(f.fK, {
                    children: [
                      (0, n.jsx)(f.$N, { children: "Billing Payment" }),
                      (0, n.jsx)(f.Be, {
                        children: "Complete the form below to rent the GPU",
                      }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className: "grid gap-4 py-4",
                    children: [
                      (0, n.jsx)("div", {
                        className: "grid  items-center gap-4",
                        children: (0, n.jsxs)("div", {
                          className: "flex flex-col gap-2",
                          children: [
                            (0, n.jsx)(h._, {
                              htmlFor: "name",
                              className: " text-left",
                              children: "Name",
                            }),
                            (0, n.jsx)(m.I, {
                              id: "name",
                              defaultValue: e.name,
                              className: "col-span-3",
                              disabled: !0,
                            }),
                          ],
                        }),
                      }),
                      (0, n.jsxs)("div", {
                        className: "grid grid-cols-2 items-center gap-4",
                        children: [
                          (0, n.jsxs)("div", {
                            className: "flex flex-col gap-2",
                            children: [
                              (0, n.jsx)(h._, {
                                htmlFor: "price",
                                className: " text-left",
                                children: "Price $",
                              }),
                              (0, n.jsx)(m.I, {
                                id: "price",
                                defaultValue: e.price,
                                className: "",
                                disabled: !0,
                              }),
                            ],
                          }),
                          (0, n.jsxs)("div", {
                            className: "flex flex-col gap-2",
                            children: [
                              (0, n.jsx)(h._, {
                                htmlFor: "mindeposit",
                                className: " text-left",
                                children: "Min Deposit $30",
                              }),
                              (0, n.jsx)(m.I, {
                                id: "mindeposit",
                                value: d.mindeposit,
                                onChange: (e) =>
                                  u({ ...d, mindeposit: e.target.value }),
                                className: "",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, n.jsx)("div", {
                        className: "grid  items-center gap-4",
                        children: (0, n.jsxs)("div", {
                          className: "flex flex-col gap-2",
                          children: [
                            (0, n.jsx)(h._, {
                              htmlFor: "walletadders",
                              className: " text-left",
                              children: "Wallet address",
                            }),
                            (0, n.jsx)(m.I, {
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
                  (0, n.jsx)(f.cN, {
                    children: i
                      ? (0, n.jsxs)(o.z, {
                          disabled: !0,
                          children: [
                            (0, n.jsx)(p.Z, {
                              className: "mr-2 h-4 w-4 animate-spin",
                            }),
                            "Please wait",
                          ],
                        })
                      : (0, n.jsx)(o.z, {
                          onClick: () => s(d),
                          type: "button",
                          children: "Pay now",
                        }),
                  }),
                ],
              }),
            ],
          });
        };
      let N = [
        {
          accessorKey: "title",
          header: (e) => {
            let { column: t } = e;
            return (0, n.jsxs)(o.z, {
              variant: "ghost",
              onClick: () => t.toggleSorting("asc" === t.getIsSorted()),
              children: [
                "Network",
                (0, n.jsx)(i.Z, { className: "ml-2 h-4 w-4" }),
              ],
            });
          },
          cell: (e) => {
            let { row: t } = e;
            return (0, n.jsxs)("div", {
              className: "",
              children: [
                (0, n.jsx)("div", {
                  className: "pl-7",
                  children: t.getValue("title"),
                }),
                " ",
              ],
            });
          },
        },
        {
          accessorKey: "subTitle",
          header: (e) => {
            let { column: t } = e;
            return (0, n.jsxs)(o.z, {
              variant: "ghost",
              onClick: () => t.toggleSorting("asc" === t.getIsSorted()),
              children: [
                "Name",
                (0, n.jsx)(i.Z, { className: "ml-2 h-4 w-4" }),
              ],
            });
          },
          cell: (e) => {
            let { row: t } = e;
            return (0, n.jsxs)("div", {
              className: "",
              children: [
                (0, n.jsx)("div", {
                  className: "pl-6",
                  children: t.getValue("subTitle"),
                }),
                " ",
              ],
            });
          },
        },
        {
          accessorKey: "rate",
          header: (e) => {
            let { column: t } = e;
            return (0, n.jsxs)(o.z, {
              variant: "ghost",
              onClick: () => t.toggleSorting("asc" === t.getIsSorted()),
              children: [
                "Hourly Price",
                (0, n.jsx)(i.Z, { className: "ml-2 h-4 w-4" }),
              ],
            });
          },
          cell: (e) => {
            let { row: t } = e;
            return (0, n.jsxs)("div", {
              className: "pl-7",
              children: ["$", t.getValue("rate"), "/h"],
            });
          },
        },
        {
          header: "Action",
          id: "action",
          enableHiding: !1,
          cell: (e) => {
            let { row: t } = e,
              r = t.original;
            return (0, n.jsx)(y, {
              price: r.rate,
              name: "  ".concat(r.title, " - ").concat(r.subTitle),
              id: r.id,
            });
          },
        },
      ];
      function w() {
        var e;
        let [t, r] = a.useState([]);
        a.useEffect(() => {
          fetch("".concat(d.T, "/product/anon"))
            .then((e) => e.json())
            .then((e) => {
              r(e);
            });
        }, []);
        let [i, f] = a.useState([]),
          [m, h] = a.useState([]),
          [p, x] = a.useState({}),
          [g, v] = a.useState({}),
          j = (0, l.b7)({
            data: t,
            columns: N,
            onSortingChange: f,
            onColumnFiltersChange: h,
            getCoreRowModel: (0, s.sC)(),
            getPaginationRowModel: (0, s.G_)(),
            getSortedRowModel: (0, s.tj)(),
            getFilteredRowModel: (0, s.vL)(),
            onColumnVisibilityChange: x,
            onRowSelectionChange: v,
            state: {
              sorting: i,
              columnFilters: m,
              columnVisibility: p,
              rowSelection: g,
            },
          });
        return (0, n.jsxs)("section", {
          className: "px-3 sm:px-6 lg:px-12",
          children: [
            (0, n.jsxs)("div", {
              className: "mt-10 flex items-center  justify-items-center gap-7",
              children: [
                (0, n.jsx)("h1", {
                  className: "text-lg font-bold capitalize",
                  children: "live Api Service nodes",
                }),
                (0, n.jsx)(u.AbJ, {
                  size: 25,
                  className: "mt-1 animate-pulse text-green-600",
                }),
              ],
            }),
            (0, n.jsx)("div", {
              className: "flex items-center justify-items-center   gap-7 py-3",
              children: (0, n.jsx)("h1", {
                className: "text-sm capitalize",
                children:
                  "NodeLend AI, empowered by the latest hardware resources, is the answer to fast performance and reliability.",
              }),
            }),
            (0, n.jsx)("div", {
              className: "rounded-md border",
              children: (0, n.jsxs)(c.iA, {
                children: [
                  (0, n.jsx)(c.xD, {
                    children: j
                      .getHeaderGroups()
                      .map((e) =>
                        (0, n.jsx)(
                          c.SC,
                          {
                            children: e.headers.map((e) =>
                              (0, n.jsx)(
                                c.ss,
                                {
                                  children: e.isPlaceholder
                                    ? null
                                    : (0, l.ie)(
                                        e.column.columnDef.header,
                                        e.getContext()
                                      ),
                                },
                                e.id
                              )
                            ),
                          },
                          e.id
                        )
                      ),
                  }),
                  (0, n.jsx)(c.RM, {
                    children: (
                      null === (e = j.getRowModel().rows) || void 0 === e
                        ? void 0
                        : e.length
                    )
                      ? j
                          .getRowModel()
                          .rows.map((e) =>
                            (0, n.jsx)(
                              c.SC,
                              {
                                "data-state": e.getIsSelected() && "selected",
                                children: e
                                  .getVisibleCells()
                                  .map((e) =>
                                    (0, n.jsx)(
                                      c.pj,
                                      {
                                        children: (0, l.ie)(
                                          e.column.columnDef.cell,
                                          e.getContext()
                                        ),
                                      },
                                      e.id
                                    )
                                  ),
                              },
                              e.id
                            )
                          )
                      : (0, n.jsx)(c.SC, {
                          children: (0, n.jsx)(c.pj, {
                            colSpan: N.length,
                            className: "h-24 text-center",
                            children: "No results.",
                          }),
                        }),
                  }),
                ],
              }),
            }),
            (0, n.jsxs)("div", {
              className: "flex items-center justify-end space-x-2 py-4",
              children: [
                (0, n.jsxs)("div", {
                  className: "flex-1 text-sm text-muted-foreground",
                  children: [
                    j.getFilteredSelectedRowModel().rows.length,
                    " of",
                    " ",
                    j.getFilteredRowModel().rows.length,
                    " row(s) selected.",
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: "space-x-2",
                  children: [
                    (0, n.jsx)(o.z, {
                      variant: "outline",
                      size: "sm",
                      onClick: () => j.previousPage(),
                      disabled: !j.getCanPreviousPage(),
                      children: "Previous",
                    }),
                    (0, n.jsx)(o.z, {
                      variant: "outline",
                      size: "sm",
                      onClick: () => j.nextPage(),
                      disabled: !j.getCanNextPage(),
                      children: "Next",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    2498: function (e, t, r) {
      "use strict";
      r.d(t, {
        RM: function () {
          return o;
        },
        SC: function () {
          return c;
        },
        iA: function () {
          return i;
        },
        pj: function () {
          return u;
        },
        ss: function () {
          return d;
        },
        xD: function () {
          return a;
        },
      });
      var n = r(7437),
        l = r(2265),
        s = r(4353);
      let i = l.forwardRef((e, t) => {
        let { className: r, ...l } = e;
        return (0, n.jsx)("div", {
          className: "relative w-full overflow-auto",
          children: (0, n.jsx)("table", {
            ref: t,
            className: (0, s.cn)("w-full caption-bottom text-sm", r),
            ...l,
          }),
        });
      });
      i.displayName = "Table";
      let a = l.forwardRef((e, t) => {
        let { className: r, ...l } = e;
        return (0, n.jsx)("thead", {
          ref: t,
          className: (0, s.cn)("[&_tr]:border-b", r),
          ...l,
        });
      });
      a.displayName = "TableHeader";
      let o = l.forwardRef((e, t) => {
        let { className: r, ...l } = e;
        return (0, n.jsx)("tbody", {
          ref: t,
          className: (0, s.cn)("[&_tr:last-child]:border-0", r),
          ...l,
        });
      });
      (o.displayName = "TableBody"),
        (l.forwardRef((e, t) => {
          let { className: r, ...l } = e;
          return (0, n.jsx)("tfoot", {
            ref: t,
            className: (0, s.cn)(
              "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
              r
            ),
            ...l,
          });
        }).displayName = "TableFooter");
      let c = l.forwardRef((e, t) => {
        let { className: r, ...l } = e;
        return (0, n.jsx)("tr", {
          ref: t,
          className: (0, s.cn)(
            "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
            r
          ),
          ...l,
        });
      });
      c.displayName = "TableRow";
      let d = l.forwardRef((e, t) => {
        let { className: r, ...l } = e;
        return (0, n.jsx)("th", {
          ref: t,
          className: (0, s.cn)(
            "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
            r
          ),
          ...l,
        });
      });
      d.displayName = "TableHead";
      let u = l.forwardRef((e, t) => {
        let { className: r, ...l } = e;
        return (0, n.jsx)("td", {
          ref: t,
          className: (0, s.cn)(
            "p-4 align-middle [&:has([role=checkbox])]:pr-0",
            r
          ),
          ...l,
        });
      });
      (u.displayName = "TableCell"),
        (l.forwardRef((e, t) => {
          let { className: r, ...l } = e;
          return (0, n.jsx)("caption", {
            ref: t,
            className: (0, s.cn)("mt-4 text-sm text-muted-foreground", r),
            ...l,
          });
        }).displayName = "TableCaption");
    },
    9580: function (e, t, r) {
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
       */ let n = (0, r(843).Z)("LoaderCircle", [
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
      var n = r(5250),
        l = r.n(n);
    },
    9079: function (e, t, r) {
      "use strict";
      var n, l;
      e.exports =
        (null == (n = r.g.process) ? void 0 : n.env) &&
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
                n,
                l = (e.exports = {});
              function s() {
                throw Error("setTimeout has not been defined");
              }
              function i() {
                throw Error("clearTimeout has not been defined");
              }
              function a(e) {
                if (t === setTimeout) return setTimeout(e, 0);
                if ((t === s || !t) && setTimeout)
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
                  t = "function" == typeof setTimeout ? setTimeout : s;
                } catch (e) {
                  t = s;
                }
                try {
                  r = "function" == typeof clearTimeout ? clearTimeout : i;
                } catch (e) {
                  r = i;
                }
              })();
              var o = [],
                c = !1,
                d = -1;
              function u() {
                c &&
                  n &&
                  ((c = !1),
                  n.length ? (o = n.concat(o)) : (d = -1),
                  o.length && f());
              }
              function f() {
                if (!c) {
                  var e = a(u);
                  c = !0;
                  for (var t = o.length; t; ) {
                    for (n = o, o = []; ++d < t; ) n && n[d].run();
                    (d = -1), (t = o.length);
                  }
                  (n = null),
                    (c = !1),
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
              function m(e, t) {
                (this.fun = e), (this.array = t);
              }
              function h() {}
              (l.nextTick = function (e) {
                var t = Array(arguments.length - 1);
                if (arguments.length > 1)
                  for (var r = 1; r < arguments.length; r++)
                    t[r - 1] = arguments[r];
                o.push(new m(e, t)), 1 !== o.length || c || a(f);
              }),
                (m.prototype.run = function () {
                  this.fun.apply(null, this.array);
                }),
                (l.title = "browser"),
                (l.browser = !0),
                (l.env = {}),
                (l.argv = []),
                (l.version = ""),
                (l.versions = {}),
                (l.on = h),
                (l.addListener = h),
                (l.once = h),
                (l.off = h),
                (l.removeListener = h),
                (l.removeAllListeners = h),
                (l.emit = h),
                (l.prependListener = h),
                (l.prependOnceListener = h),
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
        function n(e) {
          var l = r[e];
          if (void 0 !== l) return l.exports;
          var s = (r[e] = { exports: {} }),
            i = !0;
          try {
            t[e](s, s.exports, n), (i = !1);
          } finally {
            i && delete r[e];
          }
          return s.exports;
        }
        n.ab = "//";
        var l = n(229);
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
      var n = r(2110),
        l = r(2265),
        s = r(9586);
      let i = (0, l.forwardRef)((e, t) =>
        (0, l.createElement)(
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
    158: function (e, t, r) {
      "use strict";
      r.d(t, {
        w_: function () {
          return d;
        },
      });
      var n = r(2265),
        l = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        s = n.createContext && n.createContext(l),
        i = ["attr", "size", "title"];
      function a() {
        return (a = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      function o(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(r), !0).forEach(function (t) {
                var n, l;
                (n = t),
                  (l = r[t]),
                  (n = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || null === e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : String(t);
                  })(n)) in e
                    ? Object.defineProperty(e, n, {
                        value: l,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[n] = l);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : o(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function d(e) {
        return (t) =>
          n.createElement(
            u,
            a({ attr: c({}, e.attr) }, t),
            (function e(t) {
              return (
                t &&
                t.map((t, r) =>
                  n.createElement(t.tag, c({ key: r }, t.attr), e(t.child))
                )
              );
            })(e.child)
          );
      }
      function u(e) {
        var t = (t) => {
          var r,
            { attr: l, size: s, title: o } = e,
            d = (function (e, t) {
              if (null == e) return {};
              var r,
                n,
                l = (function (e, t) {
                  if (null == e) return {};
                  var r,
                    n,
                    l = {},
                    s = Object.keys(e);
                  for (n = 0; n < s.length; n++)
                    (r = s[n]), t.indexOf(r) >= 0 || (l[r] = e[r]);
                  return l;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (n = 0; n < s.length; n++)
                  (r = s[n]),
                    !(t.indexOf(r) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, r) &&
                      (l[r] = e[r]);
              }
              return l;
            })(e, i),
            u = s || t.size || "1em";
          return (
            t.className && (r = t.className),
            e.className && (r = (r ? r + " " : "") + e.className),
            n.createElement(
              "svg",
              a(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                t.attr,
                l,
                d,
                {
                  className: r,
                  style: c(c({ color: e.color || t.color }, t.style), e.style),
                  height: u,
                  width: u,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              o && n.createElement("title", null, o),
              e.children
            )
          );
        };
        return void 0 !== s
          ? n.createElement(s.Consumer, null, (e) => t(e))
          : t(l);
      }
    },
  },
  function (e) {
    e.O(
      0,
      [691, 217, 139, 109, 250, 9, 304, 348, 333, 835, 971, 69, 744],
      function () {
        return e((e.s = 4865));
      }
    ),
      (_N_E = e.O());
  },
]);
