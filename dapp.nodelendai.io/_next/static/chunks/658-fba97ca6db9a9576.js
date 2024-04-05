"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [658],
  {
    7533: function (e, t, n) {
      n.d(t, {
        B: function () {
          return a;
        },
      });
      var r = n(2265),
        o = n(4104),
        i = n(1266),
        l = n(9143);
      function a(e) {
        let t = e + "CollectionProvider",
          [n, a] = (0, o.b)(t),
          [f, u] = n(t, {
            collectionRef: { current: null },
            itemMap: new Map(),
          }),
          c = e + "CollectionSlot",
          s = r.forwardRef((e, t) => {
            let { scope: n, children: o } = e,
              a = u(c, n),
              f = (0, i.e)(t, a.collectionRef);
            return r.createElement(l.g7, { ref: f }, o);
          }),
          d = e + "CollectionItemSlot",
          p = "data-radix-collection-item";
        return [
          {
            Provider: (e) => {
              let { scope: t, children: n } = e,
                o = r.useRef(null),
                i = r.useRef(new Map()).current;
              return r.createElement(
                f,
                { scope: t, itemMap: i, collectionRef: o },
                n
              );
            },
            Slot: s,
            ItemSlot: r.forwardRef((e, t) => {
              let { scope: n, children: o, ...a } = e,
                f = r.useRef(null),
                c = (0, i.e)(t, f),
                s = u(d, n);
              return (
                r.useEffect(
                  () => (
                    s.itemMap.set(f, { ref: f, ...a }),
                    () => void s.itemMap.delete(f)
                  )
                ),
                r.createElement(l.g7, { [p]: "", ref: c }, o)
              );
            }),
          },
          function (t) {
            let n = u(e + "CollectionConsumer", t);
            return r.useCallback(() => {
              let e = n.collectionRef.current;
              if (!e) return [];
              let t = Array.from(e.querySelectorAll(`[${p}]`));
              return Array.from(n.itemMap.values()).sort(
                (e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current)
              );
            }, [n.collectionRef, n.itemMap]);
          },
          a,
        ];
      }
    },
    3876: function (e, t, n) {
      n.d(t, {
        gm: function () {
          return i;
        },
      });
      var r = n(2265);
      let o = (0, r.createContext)(void 0);
      function i(e) {
        let t = (0, r.useContext)(o);
        return e || t || "ltr";
      }
    },
    2338: function (e, t, n) {
      n.d(t, {
        ee: function () {
          return eH;
        },
        Eh: function () {
          return e_;
        },
        VY: function () {
          return eW;
        },
        fC: function () {
          return eI;
        },
        D7: function () {
          return eR;
        },
      });
      var r = n(2110),
        o = n(2265);
      let i = ["top", "right", "bottom", "left"],
        l = Math.min,
        a = Math.max,
        f = Math.round,
        u = Math.floor,
        c = (e) => ({ x: e, y: e }),
        s = { left: "right", right: "left", bottom: "top", top: "bottom" },
        d = { start: "end", end: "start" };
      function p(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function m(e) {
        return e.split("-")[0];
      }
      function h(e) {
        return e.split("-")[1];
      }
      function g(e) {
        return "x" === e ? "y" : "x";
      }
      function v(e) {
        return "y" === e ? "height" : "width";
      }
      function w(e) {
        return ["top", "bottom"].includes(m(e)) ? "y" : "x";
      }
      function y(e) {
        return e.replace(/start|end/g, (e) => d[e]);
      }
      function x(e) {
        return e.replace(/left|right|bottom|top/g, (e) => s[e]);
      }
      function b(e) {
        return "number" != typeof e
          ? { top: 0, right: 0, bottom: 0, left: 0, ...e }
          : { top: e, right: e, bottom: e, left: e };
      }
      function R(e) {
        return {
          ...e,
          top: e.y,
          left: e.x,
          right: e.x + e.width,
          bottom: e.y + e.height,
        };
      }
      function E(e, t, n) {
        let r,
          { reference: o, floating: i } = e,
          l = w(t),
          a = g(w(t)),
          f = v(a),
          u = m(t),
          c = "y" === l,
          s = o.x + o.width / 2 - i.width / 2,
          d = o.y + o.height / 2 - i.height / 2,
          p = o[f] / 2 - i[f] / 2;
        switch (u) {
          case "top":
            r = { x: s, y: o.y - i.height };
            break;
          case "bottom":
            r = { x: s, y: o.y + o.height };
            break;
          case "right":
            r = { x: o.x + o.width, y: d };
            break;
          case "left":
            r = { x: o.x - i.width, y: d };
            break;
          default:
            r = { x: o.x, y: o.y };
        }
        switch (h(t)) {
          case "start":
            r[a] -= p * (n && c ? -1 : 1);
            break;
          case "end":
            r[a] += p * (n && c ? -1 : 1);
        }
        return r;
      }
      let A = async (e, t, n) => {
        let {
            placement: r = "bottom",
            strategy: o = "absolute",
            middleware: i = [],
            platform: l,
          } = n,
          a = i.filter(Boolean),
          f = await (null == l.isRTL ? void 0 : l.isRTL(t)),
          u = await l.getElementRects({
            reference: e,
            floating: t,
            strategy: o,
          }),
          { x: c, y: s } = E(u, r, f),
          d = r,
          p = {},
          m = 0;
        for (let n = 0; n < a.length; n++) {
          let { name: i, fn: h } = a[n],
            {
              x: g,
              y: v,
              data: w,
              reset: y,
            } = await h({
              x: c,
              y: s,
              initialPlacement: r,
              placement: d,
              strategy: o,
              middlewareData: p,
              rects: u,
              platform: l,
              elements: { reference: e, floating: t },
            });
          (c = null != g ? g : c),
            (s = null != v ? v : s),
            (p = { ...p, [i]: { ...p[i], ...w } }),
            y &&
              m <= 50 &&
              (m++,
              "object" == typeof y &&
                (y.placement && (d = y.placement),
                y.rects &&
                  (u =
                    !0 === y.rects
                      ? await l.getElementRects({
                          reference: e,
                          floating: t,
                          strategy: o,
                        })
                      : y.rects),
                ({ x: c, y: s } = E(u, d, f))),
              (n = -1));
        }
        return { x: c, y: s, placement: d, strategy: o, middlewareData: p };
      };
      async function S(e, t) {
        var n;
        void 0 === t && (t = {});
        let { x: r, y: o, platform: i, rects: l, elements: a, strategy: f } = e,
          {
            boundary: u = "clippingAncestors",
            rootBoundary: c = "viewport",
            elementContext: s = "floating",
            altBoundary: d = !1,
            padding: m = 0,
          } = p(t, e),
          h = b(m),
          g = a[d ? ("floating" === s ? "reference" : "floating") : s],
          v = R(
            await i.getClippingRect({
              element:
                null ==
                  (n = await (null == i.isElement ? void 0 : i.isElement(g))) ||
                n
                  ? g
                  : g.contextElement ||
                    (await (null == i.getDocumentElement
                      ? void 0
                      : i.getDocumentElement(a.floating))),
              boundary: u,
              rootBoundary: c,
              strategy: f,
            })
          ),
          w = "floating" === s ? { ...l.floating, x: r, y: o } : l.reference,
          y = await (null == i.getOffsetParent
            ? void 0
            : i.getOffsetParent(a.floating)),
          x = ((await (null == i.isElement ? void 0 : i.isElement(y))) &&
            (await (null == i.getScale ? void 0 : i.getScale(y)))) || {
            x: 1,
            y: 1,
          },
          E = R(
            i.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                  elements: a,
                  rect: w,
                  offsetParent: y,
                  strategy: f,
                })
              : w
          );
        return {
          top: (v.top - E.top + h.top) / x.y,
          bottom: (E.bottom - v.bottom + h.bottom) / x.y,
          left: (v.left - E.left + h.left) / x.x,
          right: (E.right - v.right + h.right) / x.x,
        };
      }
      function C(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width,
        };
      }
      function T(e) {
        return i.some((t) => e[t] >= 0);
      }
      async function P(e, t) {
        let { placement: n, platform: r, elements: o } = e,
          i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)),
          l = m(n),
          a = h(n),
          f = "y" === w(n),
          u = ["left", "top"].includes(l) ? -1 : 1,
          c = i && f ? -1 : 1,
          s = p(t, e),
          {
            mainAxis: d,
            crossAxis: g,
            alignmentAxis: v,
          } = "number" == typeof s
            ? { mainAxis: s, crossAxis: 0, alignmentAxis: null }
            : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...s };
        return (
          a && "number" == typeof v && (g = "end" === a ? -1 * v : v),
          f ? { x: g * c, y: d * u } : { x: d * u, y: g * c }
        );
      }
      function L(e) {
        return M(e) ? (e.nodeName || "").toLowerCase() : "#document";
      }
      function F(e) {
        var t;
        return (
          (null == e || null == (t = e.ownerDocument)
            ? void 0
            : t.defaultView) || window
        );
      }
      function O(e) {
        var t;
        return null ==
          (t = (M(e) ? e.ownerDocument : e.document) || window.document)
          ? void 0
          : t.documentElement;
      }
      function M(e) {
        return e instanceof Node || e instanceof F(e).Node;
      }
      function D(e) {
        return e instanceof Element || e instanceof F(e).Element;
      }
      function k(e) {
        return e instanceof HTMLElement || e instanceof F(e).HTMLElement;
      }
      function I(e) {
        return (
          "undefined" != typeof ShadowRoot &&
          (e instanceof ShadowRoot || e instanceof F(e).ShadowRoot)
        );
      }
      function H(e) {
        let { overflow: t, overflowX: n, overflowY: r, display: o } = V(e);
        return (
          /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
          !["inline", "contents"].includes(o)
        );
      }
      function W(e) {
        let t = _(),
          n = V(e);
        return (
          "none" !== n.transform ||
          "none" !== n.perspective ||
          (!!n.containerType && "normal" !== n.containerType) ||
          (!t && !!n.backdropFilter && "none" !== n.backdropFilter) ||
          (!t && !!n.filter && "none" !== n.filter) ||
          ["transform", "perspective", "filter"].some((e) =>
            (n.willChange || "").includes(e)
          ) ||
          ["paint", "layout", "strict", "content"].some((e) =>
            (n.contain || "").includes(e)
          )
        );
      }
      function _() {
        return (
          "undefined" != typeof CSS &&
          !!CSS.supports &&
          CSS.supports("-webkit-backdrop-filter", "none")
        );
      }
      function B(e) {
        return ["html", "body", "#document"].includes(L(e));
      }
      function V(e) {
        return F(e).getComputedStyle(e);
      }
      function $(e) {
        return D(e)
          ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
          : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
      }
      function z(e) {
        if ("html" === L(e)) return e;
        let t = e.assignedSlot || e.parentNode || (I(e) && e.host) || O(e);
        return I(t) ? t.host : t;
      }
      function N(e, t, n) {
        var r;
        void 0 === t && (t = []), void 0 === n && (n = !0);
        let o = (function e(t) {
            let n = z(t);
            return B(n)
              ? t.ownerDocument
                ? t.ownerDocument.body
                : t.body
              : k(n) && H(n)
              ? n
              : e(n);
          })(e),
          i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
          l = F(o);
        return i
          ? t.concat(
              l,
              l.visualViewport || [],
              H(o) ? o : [],
              l.frameElement && n ? N(l.frameElement) : []
            )
          : t.concat(o, N(o, [], n));
      }
      function G(e) {
        let t = V(e),
          n = parseFloat(t.width) || 0,
          r = parseFloat(t.height) || 0,
          o = k(e),
          i = o ? e.offsetWidth : n,
          l = o ? e.offsetHeight : r,
          a = f(n) !== i || f(r) !== l;
        return a && ((n = i), (r = l)), { width: n, height: r, $: a };
      }
      function Y(e) {
        return D(e) ? e : e.contextElement;
      }
      function Z(e) {
        let t = Y(e);
        if (!k(t)) return c(1);
        let n = t.getBoundingClientRect(),
          { width: r, height: o, $: i } = G(t),
          l = (i ? f(n.width) : n.width) / r,
          a = (i ? f(n.height) : n.height) / o;
        return (
          (l && Number.isFinite(l)) || (l = 1),
          (a && Number.isFinite(a)) || (a = 1),
          { x: l, y: a }
        );
      }
      let j = c(0);
      function X(e) {
        let t = F(e);
        return _() && t.visualViewport
          ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
          : j;
      }
      function q(e, t, n, r) {
        var o;
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        let i = e.getBoundingClientRect(),
          l = Y(e),
          a = c(1);
        t && (r ? D(r) && (a = Z(r)) : (a = Z(e)));
        let f = (void 0 === (o = n) && (o = !1), r && (!o || r === F(l)) && o)
            ? X(l)
            : c(0),
          u = (i.left + f.x) / a.x,
          s = (i.top + f.y) / a.y,
          d = i.width / a.x,
          p = i.height / a.y;
        if (l) {
          let e = F(l),
            t = r && D(r) ? F(r) : r,
            n = e,
            o = n.frameElement;
          for (; o && r && t !== n; ) {
            let e = Z(o),
              t = o.getBoundingClientRect(),
              r = V(o),
              i = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              l = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
            (u *= e.x),
              (s *= e.y),
              (d *= e.x),
              (p *= e.y),
              (u += i),
              (s += l),
              (o = (n = F(o)).frameElement);
          }
        }
        return R({ width: d, height: p, x: u, y: s });
      }
      let K = [":popover-open", ":modal"];
      function U(e) {
        return K.some((t) => {
          try {
            return e.matches(t);
          } catch (e) {
            return !1;
          }
        });
      }
      function J(e) {
        return q(O(e)).left + $(e).scrollLeft;
      }
      function Q(e, t, n) {
        let r;
        if ("viewport" === t)
          r = (function (e, t) {
            let n = F(e),
              r = O(e),
              o = n.visualViewport,
              i = r.clientWidth,
              l = r.clientHeight,
              a = 0,
              f = 0;
            if (o) {
              (i = o.width), (l = o.height);
              let e = _();
              (!e || (e && "fixed" === t)) &&
                ((a = o.offsetLeft), (f = o.offsetTop));
            }
            return { width: i, height: l, x: a, y: f };
          })(e, n);
        else if ("document" === t)
          r = (function (e) {
            let t = O(e),
              n = $(e),
              r = e.ownerDocument.body,
              o = a(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
              i = a(
                t.scrollHeight,
                t.clientHeight,
                r.scrollHeight,
                r.clientHeight
              ),
              l = -n.scrollLeft + J(e),
              f = -n.scrollTop;
            return (
              "rtl" === V(r).direction &&
                (l += a(t.clientWidth, r.clientWidth) - o),
              { width: o, height: i, x: l, y: f }
            );
          })(O(e));
        else if (D(t))
          r = (function (e, t) {
            let n = q(e, !0, "fixed" === t),
              r = n.top + e.clientTop,
              o = n.left + e.clientLeft,
              i = k(e) ? Z(e) : c(1),
              l = e.clientWidth * i.x;
            return {
              width: l,
              height: e.clientHeight * i.y,
              x: o * i.x,
              y: r * i.y,
            };
          })(t, n);
        else {
          let n = X(e);
          r = { ...t, x: t.x - n.x, y: t.y - n.y };
        }
        return R(r);
      }
      function ee(e, t) {
        return k(e) && "fixed" !== V(e).position
          ? t
            ? t(e)
            : e.offsetParent
          : null;
      }
      function et(e, t) {
        let n = F(e);
        if (!k(e) || U(e)) return n;
        let r = ee(e, t);
        for (
          ;
          r &&
          ["table", "td", "th"].includes(L(r)) &&
          "static" === V(r).position;

        )
          r = ee(r, t);
        return r &&
          ("html" === L(r) ||
            ("body" === L(r) && "static" === V(r).position && !W(r)))
          ? n
          : r ||
              (function (e) {
                let t = z(e);
                for (; k(t) && !B(t); ) {
                  if (W(t)) return t;
                  t = z(t);
                }
                return null;
              })(e) ||
              n;
      }
      let en = async function (e) {
          let t = this.getOffsetParent || et,
            n = this.getDimensions;
          return {
            reference: (function (e, t, n) {
              let r = k(t),
                o = O(t),
                i = "fixed" === n,
                l = q(e, !0, i, t),
                a = { scrollLeft: 0, scrollTop: 0 },
                f = c(0);
              if (r || (!r && !i)) {
                if ((("body" !== L(t) || H(o)) && (a = $(t)), r)) {
                  let e = q(t, !0, i, t);
                  (f.x = e.x + t.clientLeft), (f.y = e.y + t.clientTop);
                } else o && (f.x = J(o));
              }
              return {
                x: l.left + a.scrollLeft - f.x,
                y: l.top + a.scrollTop - f.y,
                width: l.width,
                height: l.height,
              };
            })(e.reference, await t(e.floating), e.strategy),
            floating: { x: 0, y: 0, ...(await n(e.floating)) },
          };
        },
        er = {
          convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
            let { elements: t, rect: n, offsetParent: r, strategy: o } = e,
              i = "fixed" === o,
              l = O(r),
              a = !!t && U(t.floating);
            if (r === l || (a && i)) return n;
            let f = { scrollLeft: 0, scrollTop: 0 },
              u = c(1),
              s = c(0),
              d = k(r);
            if (
              (d || (!d && !i)) &&
              (("body" !== L(r) || H(l)) && (f = $(r)), k(r))
            ) {
              let e = q(r);
              (u = Z(r)), (s.x = e.x + r.clientLeft), (s.y = e.y + r.clientTop);
            }
            return {
              width: n.width * u.x,
              height: n.height * u.y,
              x: n.x * u.x - f.scrollLeft * u.x + s.x,
              y: n.y * u.y - f.scrollTop * u.y + s.y,
            };
          },
          getDocumentElement: O,
          getClippingRect: function (e) {
            let { element: t, boundary: n, rootBoundary: r, strategy: o } = e,
              i = [
                ...("clippingAncestors" === n
                  ? (function (e, t) {
                      let n = t.get(e);
                      if (n) return n;
                      let r = N(e, [], !1).filter(
                          (e) => D(e) && "body" !== L(e)
                        ),
                        o = null,
                        i = "fixed" === V(e).position,
                        l = i ? z(e) : e;
                      for (; D(l) && !B(l); ) {
                        let t = V(l),
                          n = W(l);
                        n || "fixed" !== t.position || (o = null),
                          (
                            i
                              ? !n && !o
                              : (!n &&
                                  "static" === t.position &&
                                  !!o &&
                                  ["absolute", "fixed"].includes(o.position)) ||
                                (H(l) &&
                                  !n &&
                                  (function e(t, n) {
                                    let r = z(t);
                                    return (
                                      !(r === n || !D(r) || B(r)) &&
                                      ("fixed" === V(r).position || e(r, n))
                                    );
                                  })(e, l))
                          )
                            ? (r = r.filter((e) => e !== l))
                            : (o = t),
                          (l = z(l));
                      }
                      return t.set(e, r), r;
                    })(t, this._c)
                  : [].concat(n)),
                r,
              ],
              f = i[0],
              u = i.reduce((e, n) => {
                let r = Q(t, n, o);
                return (
                  (e.top = a(r.top, e.top)),
                  (e.right = l(r.right, e.right)),
                  (e.bottom = l(r.bottom, e.bottom)),
                  (e.left = a(r.left, e.left)),
                  e
                );
              }, Q(t, f, o));
            return {
              width: u.right - u.left,
              height: u.bottom - u.top,
              x: u.left,
              y: u.top,
            };
          },
          getOffsetParent: et,
          getElementRects: en,
          getClientRects: function (e) {
            return Array.from(e.getClientRects());
          },
          getDimensions: function (e) {
            let { width: t, height: n } = G(e);
            return { width: t, height: n };
          },
          getScale: Z,
          isElement: D,
          isRTL: function (e) {
            return "rtl" === V(e).direction;
          },
        },
        eo = (e) => ({
          name: "arrow",
          options: e,
          async fn(t) {
            let {
                x: n,
                y: r,
                placement: o,
                rects: i,
                platform: f,
                elements: u,
                middlewareData: c,
              } = t,
              { element: s, padding: d = 0 } = p(e, t) || {};
            if (null == s) return {};
            let m = b(d),
              y = { x: n, y: r },
              x = g(w(o)),
              R = v(x),
              E = await f.getDimensions(s),
              A = "y" === x,
              S = A ? "clientHeight" : "clientWidth",
              C = i.reference[R] + i.reference[x] - y[x] - i.floating[R],
              T = y[x] - i.reference[x],
              P = await (null == f.getOffsetParent
                ? void 0
                : f.getOffsetParent(s)),
              L = P ? P[S] : 0;
            (L && (await (null == f.isElement ? void 0 : f.isElement(P)))) ||
              (L = u.floating[S] || i.floating[R]);
            let F = L / 2 - E[R] / 2 - 1,
              O = l(m[A ? "top" : "left"], F),
              M = l(m[A ? "bottom" : "right"], F),
              D = L - E[R] - M,
              k = L / 2 - E[R] / 2 + (C / 2 - T / 2),
              I = a(O, l(k, D)),
              H =
                !c.arrow &&
                null != h(o) &&
                k !== I &&
                i.reference[R] / 2 - (k < O ? O : M) - E[R] / 2 < 0,
              W = H ? (k < O ? k - O : k - D) : 0;
            return {
              [x]: y[x] + W,
              data: {
                [x]: I,
                centerOffset: k - I - W,
                ...(H && { alignmentOffset: W }),
              },
              reset: H,
            };
          },
        }),
        ei = (e, t, n) => {
          let r = new Map(),
            o = { platform: er, ...n },
            i = { ...o.platform, _c: r };
          return A(e, t, { ...o, platform: i });
        };
      var el = n(4887);
      let ea = (e) => ({
        name: "arrow",
        options: e,
        fn(t) {
          let { element: n, padding: r } = "function" == typeof e ? e(t) : e;
          return n && {}.hasOwnProperty.call(n, "current")
            ? null != n.current
              ? eo({ element: n.current, padding: r }).fn(t)
              : {}
            : n
            ? eo({ element: n, padding: r }).fn(t)
            : {};
        },
      });
      var ef = "undefined" != typeof document ? o.useLayoutEffect : o.useEffect;
      function eu(e, t) {
        let n, r, o;
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if ((n = e.length) !== t.length) return !1;
            for (r = n; 0 != r--; ) if (!eu(e[r], t[r])) return !1;
            return !0;
          }
          if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length)
            return !1;
          for (r = n; 0 != r--; )
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
          for (r = n; 0 != r--; ) {
            let n = o[r];
            if (("_owner" !== n || !e.$$typeof) && !eu(e[n], t[n])) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      }
      function ec(e) {
        return "undefined" == typeof window
          ? 1
          : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function es(e, t) {
        let n = ec(e);
        return Math.round(t * n) / n;
      }
      function ed(e) {
        let t = o.useRef(e);
        return (
          ef(() => {
            t.current = e;
          }),
          t
        );
      }
      var ep = n(9586);
      let em = (0, o.forwardRef)((e, t) => {
        let { children: n, width: i = 10, height: l = 5, ...a } = e;
        return (0, o.createElement)(
          ep.WV.svg,
          (0, r.Z)({}, a, {
            ref: t,
            width: i,
            height: l,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
          }),
          e.asChild
            ? n
            : (0, o.createElement)("polygon", { points: "0,0 30,0 15,10" })
        );
      });
      var eh = n(1266),
        eg = n(4104),
        ev = n(9830),
        ew = n(2618),
        ey = n(6769);
      let ex = "Popper",
        [eb, eR] = (0, eg.b)(ex),
        [eE, eA] = eb(ex),
        eS = (0, o.forwardRef)((e, t) => {
          let { __scopePopper: n, virtualRef: i, ...l } = e,
            a = eA("PopperAnchor", n),
            f = (0, o.useRef)(null),
            u = (0, eh.e)(t, f);
          return (
            (0, o.useEffect)(() => {
              a.onAnchorChange((null == i ? void 0 : i.current) || f.current);
            }),
            i
              ? null
              : (0, o.createElement)(ep.WV.div, (0, r.Z)({}, l, { ref: u }))
          );
        }),
        eC = "PopperContent",
        [eT, eP] = eb(eC),
        eL = (0, o.forwardRef)((e, t) => {
          var n, i, f, c, s, d, b, R, E, A, L, F, M, D;
          let {
              __scopePopper: k,
              side: I = "bottom",
              sideOffset: H = 0,
              align: W = "center",
              alignOffset: _ = 0,
              arrowPadding: B = 0,
              avoidCollisions: V = !0,
              collisionBoundary: $ = [],
              collisionPadding: z = 0,
              sticky: G = "partial",
              hideWhenDetached: Z = !1,
              updatePositionStrategy: j = "optimized",
              onPlaced: X,
              ...K
            } = e,
            U = eA(eC, k),
            [J, Q] = (0, o.useState)(null),
            ee = (0, eh.e)(t, (e) => Q(e)),
            [et, en] = (0, o.useState)(null),
            er = (0, ey.t)(et),
            eo =
              null !== (n = null == er ? void 0 : er.width) && void 0 !== n
                ? n
                : 0,
            em =
              null !== (i = null == er ? void 0 : er.height) && void 0 !== i
                ? i
                : 0,
            eg =
              "number" == typeof z
                ? z
                : { top: 0, right: 0, bottom: 0, left: 0, ...z },
            ex = Array.isArray($) ? $ : [$],
            eb = ex.length > 0,
            eR = { padding: eg, boundary: ex.filter(eM), altBoundary: eb },
            {
              refs: eE,
              floatingStyles: eS,
              placement: eP,
              isPositioned: eL,
              middlewareData: eF,
            } = (function (e) {
              void 0 === e && (e = {});
              let {
                  placement: t = "bottom",
                  strategy: n = "absolute",
                  middleware: r = [],
                  platform: i,
                  elements: { reference: l, floating: a } = {},
                  transform: f = !0,
                  whileElementsMounted: u,
                  open: c,
                } = e,
                [s, d] = o.useState({
                  x: 0,
                  y: 0,
                  strategy: n,
                  placement: t,
                  middlewareData: {},
                  isPositioned: !1,
                }),
                [p, m] = o.useState(r);
              eu(p, r) || m(r);
              let [h, g] = o.useState(null),
                [v, w] = o.useState(null),
                y = o.useCallback((e) => {
                  e !== E.current && ((E.current = e), g(e));
                }, []),
                x = o.useCallback((e) => {
                  e !== A.current && ((A.current = e), w(e));
                }, []),
                b = l || h,
                R = a || v,
                E = o.useRef(null),
                A = o.useRef(null),
                S = o.useRef(s),
                C = null != u,
                T = ed(u),
                P = ed(i),
                L = o.useCallback(() => {
                  if (!E.current || !A.current) return;
                  let e = { placement: t, strategy: n, middleware: p };
                  P.current && (e.platform = P.current),
                    ei(E.current, A.current, e).then((e) => {
                      let t = { ...e, isPositioned: !0 };
                      F.current &&
                        !eu(S.current, t) &&
                        ((S.current = t),
                        el.flushSync(() => {
                          d(t);
                        }));
                    });
                }, [p, t, n, P]);
              ef(() => {
                !1 === c &&
                  S.current.isPositioned &&
                  ((S.current.isPositioned = !1),
                  d((e) => ({ ...e, isPositioned: !1 })));
              }, [c]);
              let F = o.useRef(!1);
              ef(
                () => (
                  (F.current = !0),
                  () => {
                    F.current = !1;
                  }
                ),
                []
              ),
                ef(() => {
                  if ((b && (E.current = b), R && (A.current = R), b && R)) {
                    if (T.current) return T.current(b, R, L);
                    L();
                  }
                }, [b, R, L, T, C]);
              let O = o.useMemo(
                  () => ({
                    reference: E,
                    floating: A,
                    setReference: y,
                    setFloating: x,
                  }),
                  [y, x]
                ),
                M = o.useMemo(() => ({ reference: b, floating: R }), [b, R]),
                D = o.useMemo(() => {
                  let e = { position: n, left: 0, top: 0 };
                  if (!M.floating) return e;
                  let t = es(M.floating, s.x),
                    r = es(M.floating, s.y);
                  return f
                    ? {
                        ...e,
                        transform: "translate(" + t + "px, " + r + "px)",
                        ...(ec(M.floating) >= 1.5 && {
                          willChange: "transform",
                        }),
                      }
                    : { position: n, left: t, top: r };
                }, [n, f, M.floating, s.x, s.y]);
              return o.useMemo(
                () => ({
                  ...s,
                  update: L,
                  refs: O,
                  elements: M,
                  floatingStyles: D,
                }),
                [s, L, O, M, D]
              );
            })({
              strategy: "fixed",
              placement: I + ("center" !== W ? "-" + W : ""),
              whileElementsMounted: (...e) =>
                (function (e, t, n, r) {
                  let o;
                  void 0 === r && (r = {});
                  let {
                      ancestorScroll: i = !0,
                      ancestorResize: f = !0,
                      elementResize: c = "function" == typeof ResizeObserver,
                      layoutShift: s = "function" ==
                        typeof IntersectionObserver,
                      animationFrame: d = !1,
                    } = r,
                    p = Y(e),
                    m = i || f ? [...(p ? N(p) : []), ...N(t)] : [];
                  m.forEach((e) => {
                    i && e.addEventListener("scroll", n, { passive: !0 }),
                      f && e.addEventListener("resize", n);
                  });
                  let h =
                      p && s
                        ? (function (e, t) {
                            let n,
                              r = null,
                              o = O(e);
                            function i() {
                              var e;
                              clearTimeout(n),
                                null == (e = r) || e.disconnect(),
                                (r = null);
                            }
                            return (
                              !(function f(c, s) {
                                void 0 === c && (c = !1),
                                  void 0 === s && (s = 1),
                                  i();
                                let {
                                  left: d,
                                  top: p,
                                  width: m,
                                  height: h,
                                } = e.getBoundingClientRect();
                                if ((c || t(), !m || !h)) return;
                                let g = u(p),
                                  v = u(o.clientWidth - (d + m)),
                                  w = {
                                    rootMargin:
                                      -g +
                                      "px " +
                                      -v +
                                      "px " +
                                      -u(o.clientHeight - (p + h)) +
                                      "px " +
                                      -u(d) +
                                      "px",
                                    threshold: a(0, l(1, s)) || 1,
                                  },
                                  y = !0;
                                function x(e) {
                                  let t = e[0].intersectionRatio;
                                  if (t !== s) {
                                    if (!y) return f();
                                    t
                                      ? f(!1, t)
                                      : (n = setTimeout(() => {
                                          f(!1, 1e-7);
                                        }, 100));
                                  }
                                  y = !1;
                                }
                                try {
                                  r = new IntersectionObserver(x, {
                                    ...w,
                                    root: o.ownerDocument,
                                  });
                                } catch (e) {
                                  r = new IntersectionObserver(x, w);
                                }
                                r.observe(e);
                              })(!0),
                              i
                            );
                          })(p, n)
                        : null,
                    g = -1,
                    v = null;
                  c &&
                    ((v = new ResizeObserver((e) => {
                      let [r] = e;
                      r &&
                        r.target === p &&
                        v &&
                        (v.unobserve(t),
                        cancelAnimationFrame(g),
                        (g = requestAnimationFrame(() => {
                          var e;
                          null == (e = v) || e.observe(t);
                        }))),
                        n();
                    })),
                    p && !d && v.observe(p),
                    v.observe(t));
                  let w = d ? q(e) : null;
                  return (
                    d &&
                      (function t() {
                        let r = q(e);
                        w &&
                          (r.x !== w.x ||
                            r.y !== w.y ||
                            r.width !== w.width ||
                            r.height !== w.height) &&
                          n(),
                          (w = r),
                          (o = requestAnimationFrame(t));
                      })(),
                    n(),
                    () => {
                      var e;
                      m.forEach((e) => {
                        i && e.removeEventListener("scroll", n),
                          f && e.removeEventListener("resize", n);
                      }),
                        null == h || h(),
                        null == (e = v) || e.disconnect(),
                        (v = null),
                        d && cancelAnimationFrame(o);
                    }
                  );
                })(...e, { animationFrame: "always" === j }),
              elements: { reference: U.anchor },
              middleware: [
                {
                  name: "offset",
                  options: (E = { mainAxis: H + em, alignmentAxis: _ }),
                  async fn(e) {
                    var t, n;
                    let { x: r, y: o, placement: i, middlewareData: l } = e,
                      a = await P(e, E);
                    return i ===
                      (null == (t = l.offset) ? void 0 : t.placement) &&
                      null != (n = l.arrow) &&
                      n.alignmentOffset
                      ? {}
                      : {
                          x: r + a.x,
                          y: o + a.y,
                          data: { ...a, placement: i },
                        };
                  },
                },
                V && {
                  name: "shift",
                  options: (L = {
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter:
                      "partial" === G
                        ? (void 0 === A && (A = {}),
                          {
                            options: A,
                            fn(e) {
                              let {
                                  x: t,
                                  y: n,
                                  placement: r,
                                  rects: o,
                                  middlewareData: i,
                                } = e,
                                {
                                  offset: l = 0,
                                  mainAxis: a = !0,
                                  crossAxis: f = !0,
                                } = p(A, e),
                                u = { x: t, y: n },
                                c = w(r),
                                s = g(c),
                                d = u[s],
                                h = u[c],
                                v = p(l, e),
                                y =
                                  "number" == typeof v
                                    ? { mainAxis: v, crossAxis: 0 }
                                    : { mainAxis: 0, crossAxis: 0, ...v };
                              if (a) {
                                let e = "y" === s ? "height" : "width",
                                  t =
                                    o.reference[s] - o.floating[e] + y.mainAxis,
                                  n =
                                    o.reference[s] +
                                    o.reference[e] -
                                    y.mainAxis;
                                d < t ? (d = t) : d > n && (d = n);
                              }
                              if (f) {
                                var x, b;
                                let e = "y" === s ? "width" : "height",
                                  t = ["top", "left"].includes(m(r)),
                                  n =
                                    o.reference[c] -
                                    o.floating[e] +
                                    ((t &&
                                      (null == (x = i.offset)
                                        ? void 0
                                        : x[c])) ||
                                      0) +
                                    (t ? 0 : y.crossAxis),
                                  l =
                                    o.reference[c] +
                                    o.reference[e] +
                                    (t
                                      ? 0
                                      : (null == (b = i.offset)
                                          ? void 0
                                          : b[c]) || 0) -
                                    (t ? y.crossAxis : 0);
                                h < n ? (h = n) : h > l && (h = l);
                              }
                              return { [s]: d, [c]: h };
                            },
                          })
                        : void 0,
                    ...eR,
                  }),
                  async fn(e) {
                    let { x: t, y: n, placement: r } = e,
                      {
                        mainAxis: o = !0,
                        crossAxis: i = !1,
                        limiter: f = {
                          fn: (e) => {
                            let { x: t, y: n } = e;
                            return { x: t, y: n };
                          },
                        },
                        ...u
                      } = p(L, e),
                      c = { x: t, y: n },
                      s = await S(e, u),
                      d = w(m(r)),
                      h = g(d),
                      v = c[h],
                      y = c[d];
                    if (o) {
                      let e = "y" === h ? "top" : "left",
                        t = "y" === h ? "bottom" : "right",
                        n = v + s[e],
                        r = v - s[t];
                      v = a(n, l(v, r));
                    }
                    if (i) {
                      let e = "y" === d ? "top" : "left",
                        t = "y" === d ? "bottom" : "right",
                        n = y + s[e],
                        r = y - s[t];
                      y = a(n, l(y, r));
                    }
                    let x = f.fn({ ...e, [h]: v, [d]: y });
                    return { ...x, data: { x: x.x - t, y: x.y - n } };
                  },
                },
                V && {
                  name: "flip",
                  options: (F = { ...eR }),
                  async fn(e) {
                    var t, n, r, o, i;
                    let {
                        placement: l,
                        middlewareData: a,
                        rects: f,
                        initialPlacement: u,
                        platform: c,
                        elements: s,
                      } = e,
                      {
                        mainAxis: d = !0,
                        crossAxis: b = !0,
                        fallbackPlacements: R,
                        fallbackStrategy: E = "bestFit",
                        fallbackAxisSideDirection: A = "none",
                        flipAlignment: C = !0,
                        ...T
                      } = p(F, e);
                    if (null != (t = a.arrow) && t.alignmentOffset) return {};
                    let P = m(l),
                      L = m(u) === u,
                      O = await (null == c.isRTL
                        ? void 0
                        : c.isRTL(s.floating)),
                      M =
                        R ||
                        (L || !C
                          ? [x(u)]
                          : (function (e) {
                              let t = x(e);
                              return [y(e), t, y(t)];
                            })(u));
                    R ||
                      "none" === A ||
                      M.push(
                        ...(function (e, t, n, r) {
                          let o = h(e),
                            i = (function (e, t, n) {
                              let r = ["left", "right"],
                                o = ["right", "left"];
                              switch (e) {
                                case "top":
                                case "bottom":
                                  if (n) return t ? o : r;
                                  return t ? r : o;
                                case "left":
                                case "right":
                                  return t
                                    ? ["top", "bottom"]
                                    : ["bottom", "top"];
                                default:
                                  return [];
                              }
                            })(m(e), "start" === n, r);
                          return (
                            o &&
                              ((i = i.map((e) => e + "-" + o)),
                              t && (i = i.concat(i.map(y)))),
                            i
                          );
                        })(u, C, A, O)
                      );
                    let D = [u, ...M],
                      k = await S(e, T),
                      I = [],
                      H = (null == (n = a.flip) ? void 0 : n.overflows) || [];
                    if ((d && I.push(k[P]), b)) {
                      let e = (function (e, t, n) {
                        void 0 === n && (n = !1);
                        let r = h(e),
                          o = g(w(e)),
                          i = v(o),
                          l =
                            "x" === o
                              ? r === (n ? "end" : "start")
                                ? "right"
                                : "left"
                              : "start" === r
                              ? "bottom"
                              : "top";
                        return (
                          t.reference[i] > t.floating[i] && (l = x(l)),
                          [l, x(l)]
                        );
                      })(l, f, O);
                      I.push(k[e[0]], k[e[1]]);
                    }
                    if (
                      ((H = [...H, { placement: l, overflows: I }]),
                      !I.every((e) => e <= 0))
                    ) {
                      let e =
                          ((null == (r = a.flip) ? void 0 : r.index) || 0) + 1,
                        t = D[e];
                      if (t)
                        return {
                          data: { index: e, overflows: H },
                          reset: { placement: t },
                        };
                      let n =
                        null ==
                        (o = H.filter((e) => e.overflows[0] <= 0).sort(
                          (e, t) => e.overflows[1] - t.overflows[1]
                        )[0])
                          ? void 0
                          : o.placement;
                      if (!n)
                        switch (E) {
                          case "bestFit": {
                            let e =
                              null ==
                              (i = H.map((e) => [
                                e.placement,
                                e.overflows
                                  .filter((e) => e > 0)
                                  .reduce((e, t) => e + t, 0),
                              ]).sort((e, t) => e[1] - t[1])[0])
                                ? void 0
                                : i[0];
                            e && (n = e);
                            break;
                          }
                          case "initialPlacement":
                            n = u;
                        }
                      if (l !== n) return { reset: { placement: n } };
                    }
                    return {};
                  },
                },
                {
                  name: "size",
                  options: (M = {
                    ...eR,
                    apply: ({
                      elements: e,
                      rects: t,
                      availableWidth: n,
                      availableHeight: r,
                    }) => {
                      let { width: o, height: i } = t.reference,
                        l = e.floating.style;
                      l.setProperty("--radix-popper-available-width", `${n}px`),
                        l.setProperty(
                          "--radix-popper-available-height",
                          `${r}px`
                        ),
                        l.setProperty("--radix-popper-anchor-width", `${o}px`),
                        l.setProperty("--radix-popper-anchor-height", `${i}px`);
                    },
                  }),
                  async fn(e) {
                    let t, n;
                    let {
                        placement: r,
                        rects: o,
                        platform: i,
                        elements: f,
                      } = e,
                      { apply: u = () => {}, ...c } = p(M, e),
                      s = await S(e, c),
                      d = m(r),
                      g = h(r),
                      v = "y" === w(r),
                      { width: y, height: x } = o.floating;
                    "top" === d || "bottom" === d
                      ? ((t = d),
                        (n =
                          g ===
                          ((await (null == i.isRTL
                            ? void 0
                            : i.isRTL(f.floating)))
                            ? "start"
                            : "end")
                            ? "left"
                            : "right"))
                      : ((n = d), (t = "end" === g ? "top" : "bottom"));
                    let b = x - s[t],
                      R = y - s[n],
                      E = !e.middlewareData.shift,
                      A = b,
                      C = R;
                    if (v) {
                      let e = y - s.left - s.right;
                      C = g || E ? l(R, e) : e;
                    } else {
                      let e = x - s.top - s.bottom;
                      A = g || E ? l(b, e) : e;
                    }
                    if (E && !g) {
                      let e = a(s.left, 0),
                        t = a(s.right, 0),
                        n = a(s.top, 0),
                        r = a(s.bottom, 0);
                      v
                        ? (C =
                            y -
                            2 *
                              (0 !== e || 0 !== t ? e + t : a(s.left, s.right)))
                        : (A =
                            x -
                            2 *
                              (0 !== n || 0 !== r
                                ? n + r
                                : a(s.top, s.bottom)));
                    }
                    await u({ ...e, availableWidth: C, availableHeight: A });
                    let T = await i.getDimensions(f.floating);
                    return y !== T.width || x !== T.height
                      ? { reset: { rects: !0 } }
                      : {};
                  },
                },
                et && ea({ element: et, padding: B }),
                eD({ arrowWidth: eo, arrowHeight: em }),
                Z && {
                  name: "hide",
                  options: (D = { strategy: "referenceHidden", ...eR }),
                  async fn(e) {
                    let { rects: t } = e,
                      { strategy: n = "referenceHidden", ...r } = p(D, e);
                    switch (n) {
                      case "referenceHidden": {
                        let n = C(
                          await S(e, { ...r, elementContext: "reference" }),
                          t.reference
                        );
                        return {
                          data: {
                            referenceHiddenOffsets: n,
                            referenceHidden: T(n),
                          },
                        };
                      }
                      case "escaped": {
                        let n = C(
                          await S(e, { ...r, altBoundary: !0 }),
                          t.floating
                        );
                        return { data: { escapedOffsets: n, escaped: T(n) } };
                      }
                      default:
                        return {};
                    }
                  },
                },
              ],
            }),
            [eO, eI] = ek(eP),
            eH = (0, ev.W)(X);
          (0, ew.b)(() => {
            eL && (null == eH || eH());
          }, [eL, eH]);
          let eW = null === (f = eF.arrow) || void 0 === f ? void 0 : f.x,
            e_ = null === (c = eF.arrow) || void 0 === c ? void 0 : c.y,
            eB =
              (null === (s = eF.arrow) || void 0 === s
                ? void 0
                : s.centerOffset) !== 0,
            [eV, e$] = (0, o.useState)();
          return (
            (0, ew.b)(() => {
              J && e$(window.getComputedStyle(J).zIndex);
            }, [J]),
            (0, o.createElement)(
              "div",
              {
                ref: eE.setFloating,
                "data-radix-popper-content-wrapper": "",
                style: {
                  ...eS,
                  transform: eL ? eS.transform : "translate(0, -200%)",
                  minWidth: "max-content",
                  zIndex: eV,
                  "--radix-popper-transform-origin": [
                    null === (d = eF.transformOrigin) || void 0 === d
                      ? void 0
                      : d.x,
                    null === (b = eF.transformOrigin) || void 0 === b
                      ? void 0
                      : b.y,
                  ].join(" "),
                },
                dir: e.dir,
              },
              (0, o.createElement)(
                eT,
                {
                  scope: k,
                  placedSide: eO,
                  onArrowChange: en,
                  arrowX: eW,
                  arrowY: e_,
                  shouldHideArrow: eB,
                },
                (0, o.createElement)(
                  ep.WV.div,
                  (0, r.Z)({ "data-side": eO, "data-align": eI }, K, {
                    ref: ee,
                    style: {
                      ...K.style,
                      animation: eL ? void 0 : "none",
                      opacity:
                        null !== (R = eF.hide) &&
                        void 0 !== R &&
                        R.referenceHidden
                          ? 0
                          : void 0,
                    },
                  })
                )
              )
            )
          );
        }),
        eF = { top: "bottom", right: "left", bottom: "top", left: "right" },
        eO = (0, o.forwardRef)(function (e, t) {
          let { __scopePopper: n, ...i } = e,
            l = eP("PopperArrow", n),
            a = eF[l.placedSide];
          return (0,
          o.createElement)("span", { ref: l.onArrowChange, style: { position: "absolute", left: l.arrowX, top: l.arrowY, [a]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[l.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[l.placedSide], visibility: l.shouldHideArrow ? "hidden" : void 0 } }, (0, o.createElement)(em, (0, r.Z)({}, i, { ref: t, style: { ...i.style, display: "block" } })));
        });
      function eM(e) {
        return null !== e;
      }
      let eD = (e) => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          var n, r, o, i, l;
          let { placement: a, rects: f, middlewareData: u } = t,
            c =
              (null === (n = u.arrow) || void 0 === n
                ? void 0
                : n.centerOffset) !== 0,
            s = c ? 0 : e.arrowWidth,
            d = c ? 0 : e.arrowHeight,
            [p, m] = ek(a),
            h = { start: "0%", center: "50%", end: "100%" }[m],
            g =
              (null !==
                (r = null === (o = u.arrow) || void 0 === o ? void 0 : o.x) &&
              void 0 !== r
                ? r
                : 0) +
              s / 2,
            v =
              (null !==
                (i = null === (l = u.arrow) || void 0 === l ? void 0 : l.y) &&
              void 0 !== i
                ? i
                : 0) +
              d / 2,
            w = "",
            y = "";
          return (
            "bottom" === p
              ? ((w = c ? h : `${g}px`), (y = `${-d}px`))
              : "top" === p
              ? ((w = c ? h : `${g}px`), (y = `${f.floating.height + d}px`))
              : "right" === p
              ? ((w = `${-d}px`), (y = c ? h : `${v}px`))
              : "left" === p &&
                ((w = `${f.floating.width + d}px`), (y = c ? h : `${v}px`)),
            { data: { x: w, y: y } }
          );
        },
      });
      function ek(e) {
        let [t, n = "center"] = e.split("-");
        return [t, n];
      }
      let eI = (e) => {
          let { __scopePopper: t, children: n } = e,
            [r, i] = (0, o.useState)(null);
          return (0, o.createElement)(
            eE,
            { scope: t, anchor: r, onAnchorChange: i },
            n
          );
        },
        eH = eS,
        eW = eL,
        e_ = eO;
    },
    3715: function (e, t, n) {
      n.d(t, {
        Pc: function () {
          return b;
        },
        ck: function () {
          return F;
        },
        fC: function () {
          return L;
        },
      });
      var r = n(2110),
        o = n(2265),
        i = n(4991),
        l = n(7533),
        a = n(1266),
        f = n(4104),
        u = n(8687),
        c = n(9586),
        s = n(9830),
        d = n(9310),
        p = n(3876);
      let m = "rovingFocusGroup.onEntryFocus",
        h = { bubbles: !1, cancelable: !0 },
        g = "RovingFocusGroup",
        [v, w, y] = (0, l.B)(g),
        [x, b] = (0, f.b)(g, [y]),
        [R, E] = x(g),
        A = (0, o.forwardRef)((e, t) =>
          (0, o.createElement)(
            v.Provider,
            { scope: e.__scopeRovingFocusGroup },
            (0, o.createElement)(
              v.Slot,
              { scope: e.__scopeRovingFocusGroup },
              (0, o.createElement)(S, (0, r.Z)({}, e, { ref: t }))
            )
          )
        ),
        S = (0, o.forwardRef)((e, t) => {
          let {
              __scopeRovingFocusGroup: n,
              orientation: l,
              loop: f = !1,
              dir: u,
              currentTabStopId: g,
              defaultCurrentTabStopId: v,
              onCurrentTabStopIdChange: y,
              onEntryFocus: x,
              ...b
            } = e,
            E = (0, o.useRef)(null),
            A = (0, a.e)(t, E),
            S = (0, p.gm)(u),
            [C = null, T] = (0, d.T)({ prop: g, defaultProp: v, onChange: y }),
            [L, F] = (0, o.useState)(!1),
            O = (0, s.W)(x),
            M = w(n),
            D = (0, o.useRef)(!1),
            [k, I] = (0, o.useState)(0);
          return (
            (0, o.useEffect)(() => {
              let e = E.current;
              if (e)
                return (
                  e.addEventListener(m, O), () => e.removeEventListener(m, O)
                );
            }, [O]),
            (0, o.createElement)(
              R,
              {
                scope: n,
                orientation: l,
                dir: S,
                loop: f,
                currentTabStopId: C,
                onItemFocus: (0, o.useCallback)((e) => T(e), [T]),
                onItemShiftTab: (0, o.useCallback)(() => F(!0), []),
                onFocusableItemAdd: (0, o.useCallback)(
                  () => I((e) => e + 1),
                  []
                ),
                onFocusableItemRemove: (0, o.useCallback)(
                  () => I((e) => e - 1),
                  []
                ),
              },
              (0, o.createElement)(
                c.WV.div,
                (0, r.Z)(
                  { tabIndex: L || 0 === k ? -1 : 0, "data-orientation": l },
                  b,
                  {
                    ref: A,
                    style: { outline: "none", ...e.style },
                    onMouseDown: (0, i.M)(e.onMouseDown, () => {
                      D.current = !0;
                    }),
                    onFocus: (0, i.M)(e.onFocus, (e) => {
                      let t = !D.current;
                      if (e.target === e.currentTarget && t && !L) {
                        let t = new CustomEvent(m, h);
                        if (
                          (e.currentTarget.dispatchEvent(t),
                          !t.defaultPrevented)
                        ) {
                          let e = M().filter((e) => e.focusable);
                          P(
                            [
                              e.find((e) => e.active),
                              e.find((e) => e.id === C),
                              ...e,
                            ]
                              .filter(Boolean)
                              .map((e) => e.ref.current)
                          );
                        }
                      }
                      D.current = !1;
                    }),
                    onBlur: (0, i.M)(e.onBlur, () => F(!1)),
                  }
                )
              )
            )
          );
        }),
        C = (0, o.forwardRef)((e, t) => {
          let {
              __scopeRovingFocusGroup: n,
              focusable: l = !0,
              active: a = !1,
              tabStopId: f,
              ...s
            } = e,
            d = (0, u.M)(),
            p = f || d,
            m = E("RovingFocusGroupItem", n),
            h = m.currentTabStopId === p,
            g = w(n),
            { onFocusableItemAdd: y, onFocusableItemRemove: x } = m;
          return (
            (0, o.useEffect)(() => {
              if (l) return y(), () => x();
            }, [l, y, x]),
            (0, o.createElement)(
              v.ItemSlot,
              { scope: n, id: p, focusable: l, active: a },
              (0, o.createElement)(
                c.WV.span,
                (0, r.Z)(
                  { tabIndex: h ? 0 : -1, "data-orientation": m.orientation },
                  s,
                  {
                    ref: t,
                    onMouseDown: (0, i.M)(e.onMouseDown, (e) => {
                      l ? m.onItemFocus(p) : e.preventDefault();
                    }),
                    onFocus: (0, i.M)(e.onFocus, () => m.onItemFocus(p)),
                    onKeyDown: (0, i.M)(e.onKeyDown, (e) => {
                      if ("Tab" === e.key && e.shiftKey) {
                        m.onItemShiftTab();
                        return;
                      }
                      if (e.target !== e.currentTarget) return;
                      let t = (function (e, t, n) {
                        var r;
                        let o =
                          ((r = e.key),
                          "rtl" !== n
                            ? r
                            : "ArrowLeft" === r
                            ? "ArrowRight"
                            : "ArrowRight" === r
                            ? "ArrowLeft"
                            : r);
                        if (
                          !(
                            "vertical" === t &&
                            ["ArrowLeft", "ArrowRight"].includes(o)
                          ) &&
                          !(
                            "horizontal" === t &&
                            ["ArrowUp", "ArrowDown"].includes(o)
                          )
                        )
                          return T[o];
                      })(e, m.orientation, m.dir);
                      if (void 0 !== t) {
                        e.preventDefault();
                        let o = g()
                          .filter((e) => e.focusable)
                          .map((e) => e.ref.current);
                        if ("last" === t) o.reverse();
                        else if ("prev" === t || "next" === t) {
                          var n, r;
                          "prev" === t && o.reverse();
                          let i = o.indexOf(e.currentTarget);
                          o = m.loop
                            ? ((n = o),
                              (r = i + 1),
                              n.map((e, t) => n[(r + t) % n.length]))
                            : o.slice(i + 1);
                        }
                        setTimeout(() => P(o));
                      }
                    }),
                  }
                )
              )
            )
          );
        }),
        T = {
          ArrowLeft: "prev",
          ArrowUp: "prev",
          ArrowRight: "next",
          ArrowDown: "next",
          PageUp: "first",
          Home: "first",
          PageDown: "last",
          End: "last",
        };
      function P(e) {
        let t = document.activeElement;
        for (let n of e)
          if (n === t || (n.focus(), document.activeElement !== t)) return;
      }
      let L = A,
        F = C;
    },
    6769: function (e, t, n) {
      n.d(t, {
        t: function () {
          return i;
        },
      });
      var r = n(2265),
        o = n(2618);
      function i(e) {
        let [t, n] = (0, r.useState)(void 0);
        return (
          (0, o.b)(() => {
            if (e) {
              n({ width: e.offsetWidth, height: e.offsetHeight });
              let t = new ResizeObserver((t) => {
                let r, o;
                if (!Array.isArray(t) || !t.length) return;
                let i = t[0];
                if ("borderBoxSize" in i) {
                  let e = i.borderBoxSize,
                    t = Array.isArray(e) ? e[0] : e;
                  (r = t.inlineSize), (o = t.blockSize);
                } else (r = e.offsetWidth), (o = e.offsetHeight);
                n({ width: r, height: o });
              });
              return t.observe(e, { box: "border-box" }), () => t.unobserve(e);
            }
            n(void 0);
          }, [e]),
          t
        );
      }
    },
  },
]);
