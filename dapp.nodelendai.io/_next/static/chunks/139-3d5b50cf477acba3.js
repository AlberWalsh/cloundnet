(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [139],
  {
    843: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return s;
        },
      });
      var n = r(2265),
        o = {
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        };
      /**
       * @license lucide-react v0.356.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let i = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        s = (e, t) => {
          let r = (0, n.forwardRef)(
            (
              {
                color: r = "currentColor",
                size: s = 24,
                strokeWidth: a = 2,
                absoluteStrokeWidth: l,
                className: u = "",
                children: f,
                ...c
              },
              d
            ) =>
              (0, n.createElement)(
                "svg",
                {
                  ref: d,
                  ...o,
                  width: s,
                  height: s,
                  stroke: r,
                  strokeWidth: l ? (24 * Number(a)) / Number(s) : a,
                  className: ["lucide", `lucide-${i(e)}`, u].join(" "),
                  ...c,
                },
                [
                  ...t.map(([e, t]) => (0, n.createElement)(e, t)),
                  ...(Array.isArray(f) ? f : [f]),
                ]
              )
          );
          return (r.displayName = `${e}`), r;
        };
    },
    8620: function (e) {
      !(function () {
        var t = {
            675: function (e, t) {
              "use strict";
              (t.byteLength = function (e) {
                var t = l(e),
                  r = t[0],
                  n = t[1];
                return ((r + n) * 3) / 4 - n;
              }),
                (t.toByteArray = function (e) {
                  var t,
                    r,
                    i = l(e),
                    s = i[0],
                    a = i[1],
                    u = new o(((s + a) * 3) / 4 - a),
                    f = 0,
                    c = a > 0 ? s - 4 : s;
                  for (r = 0; r < c; r += 4)
                    (t =
                      (n[e.charCodeAt(r)] << 18) |
                      (n[e.charCodeAt(r + 1)] << 12) |
                      (n[e.charCodeAt(r + 2)] << 6) |
                      n[e.charCodeAt(r + 3)]),
                      (u[f++] = (t >> 16) & 255),
                      (u[f++] = (t >> 8) & 255),
                      (u[f++] = 255 & t);
                  return (
                    2 === a &&
                      ((t =
                        (n[e.charCodeAt(r)] << 2) |
                        (n[e.charCodeAt(r + 1)] >> 4)),
                      (u[f++] = 255 & t)),
                    1 === a &&
                      ((t =
                        (n[e.charCodeAt(r)] << 10) |
                        (n[e.charCodeAt(r + 1)] << 4) |
                        (n[e.charCodeAt(r + 2)] >> 2)),
                      (u[f++] = (t >> 8) & 255),
                      (u[f++] = 255 & t)),
                    u
                  );
                }),
                (t.fromByteArray = function (e) {
                  for (
                    var t, n = e.length, o = n % 3, i = [], s = 0, a = n - o;
                    s < a;
                    s += 16383
                  )
                    i.push(
                      (function (e, t, n) {
                        for (var o, i = [], s = t; s < n; s += 3)
                          i.push(
                            r[
                              ((o =
                                ((e[s] << 16) & 16711680) +
                                ((e[s + 1] << 8) & 65280) +
                                (255 & e[s + 2])) >>
                                18) &
                                63
                            ] +
                              r[(o >> 12) & 63] +
                              r[(o >> 6) & 63] +
                              r[63 & o]
                          );
                        return i.join("");
                      })(e, s, s + 16383 > a ? a : s + 16383)
                    );
                  return (
                    1 === o
                      ? i.push(r[(t = e[n - 1]) >> 2] + r[(t << 4) & 63] + "==")
                      : 2 === o &&
                        i.push(
                          r[(t = (e[n - 2] << 8) + e[n - 1]) >> 10] +
                            r[(t >> 4) & 63] +
                            r[(t << 2) & 63] +
                            "="
                        ),
                    i.join("")
                  );
                });
              for (
                var r = [],
                  n = [],
                  o = "undefined" != typeof Uint8Array ? Uint8Array : Array,
                  i =
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                  s = 0,
                  a = i.length;
                s < a;
                ++s
              )
                (r[s] = i[s]), (n[i.charCodeAt(s)] = s);
              function l(e) {
                var t = e.length;
                if (t % 4 > 0)
                  throw Error("Invalid string. Length must be a multiple of 4");
                var r = e.indexOf("=");
                -1 === r && (r = t);
                var n = r === t ? 0 : 4 - (r % 4);
                return [r, n];
              }
              (n["-".charCodeAt(0)] = 62), (n["_".charCodeAt(0)] = 63);
            },
            72: function (e, t, r) {
              "use strict";
              /*!
               * The buffer module from node.js, for the browser.
               *
               * @author   Feross Aboukhadijeh <https://feross.org>
               * @license  MIT
               */ var n = r(675),
                o = r(783),
                i =
                  "function" == typeof Symbol && "function" == typeof Symbol.for
                    ? Symbol.for("nodejs.util.inspect.custom")
                    : null;
              function s(e) {
                if (e > 2147483647)
                  throw RangeError(
                    'The value "' + e + '" is invalid for option "size"'
                  );
                var t = new Uint8Array(e);
                return Object.setPrototypeOf(t, a.prototype), t;
              }
              function a(e, t, r) {
                if ("number" == typeof e) {
                  if ("string" == typeof t)
                    throw TypeError(
                      'The "string" argument must be of type string. Received type number'
                    );
                  return f(e);
                }
                return l(e, t, r);
              }
              function l(e, t, r) {
                if ("string" == typeof e)
                  return (function (e, t) {
                    if (
                      (("string" != typeof t || "" === t) && (t = "utf8"),
                      !a.isEncoding(t))
                    )
                      throw TypeError("Unknown encoding: " + t);
                    var r = 0 | p(e, t),
                      n = s(r),
                      o = n.write(e, t);
                    return o !== r && (n = n.slice(0, o)), n;
                  })(e, t);
                if (ArrayBuffer.isView(e)) return c(e);
                if (null == e)
                  throw TypeError(
                    "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                      typeof e
                  );
                if (
                  O(e, ArrayBuffer) ||
                  (e && O(e.buffer, ArrayBuffer)) ||
                  ("undefined" != typeof SharedArrayBuffer &&
                    (O(e, SharedArrayBuffer) ||
                      (e && O(e.buffer, SharedArrayBuffer))))
                )
                  return (function (e, t, r) {
                    var n;
                    if (t < 0 || e.byteLength < t)
                      throw RangeError('"offset" is outside of buffer bounds');
                    if (e.byteLength < t + (r || 0))
                      throw RangeError('"length" is outside of buffer bounds');
                    return (
                      Object.setPrototypeOf(
                        (n =
                          void 0 === t && void 0 === r
                            ? new Uint8Array(e)
                            : void 0 === r
                            ? new Uint8Array(e, t)
                            : new Uint8Array(e, t, r)),
                        a.prototype
                      ),
                      n
                    );
                  })(e, t, r);
                if ("number" == typeof e)
                  throw TypeError(
                    'The "value" argument must not be of type number. Received type number'
                  );
                var n = e.valueOf && e.valueOf();
                if (null != n && n !== e) return a.from(n, t, r);
                var o = (function (e) {
                  if (a.isBuffer(e)) {
                    var t,
                      r = 0 | d(e.length),
                      n = s(r);
                    return 0 === n.length || e.copy(n, 0, 0, r), n;
                  }
                  return void 0 !== e.length
                    ? "number" != typeof e.length || (t = e.length) != t
                      ? s(0)
                      : c(e)
                    : "Buffer" === e.type && Array.isArray(e.data)
                    ? c(e.data)
                    : void 0;
                })(e);
                if (o) return o;
                if (
                  "undefined" != typeof Symbol &&
                  null != Symbol.toPrimitive &&
                  "function" == typeof e[Symbol.toPrimitive]
                )
                  return a.from(e[Symbol.toPrimitive]("string"), t, r);
                throw TypeError(
                  "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                    typeof e
                );
              }
              function u(e) {
                if ("number" != typeof e)
                  throw TypeError('"size" argument must be of type number');
                if (e < 0)
                  throw RangeError(
                    'The value "' + e + '" is invalid for option "size"'
                  );
              }
              function f(e) {
                return u(e), s(e < 0 ? 0 : 0 | d(e));
              }
              function c(e) {
                for (
                  var t = e.length < 0 ? 0 : 0 | d(e.length), r = s(t), n = 0;
                  n < t;
                  n += 1
                )
                  r[n] = 255 & e[n];
                return r;
              }
              function d(e) {
                if (e >= 2147483647)
                  throw RangeError(
                    "Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes"
                  );
                return 0 | e;
              }
              function p(e, t) {
                if (a.isBuffer(e)) return e.length;
                if (ArrayBuffer.isView(e) || O(e, ArrayBuffer))
                  return e.byteLength;
                if ("string" != typeof e)
                  throw TypeError(
                    'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
                      typeof e
                  );
                var r = e.length,
                  n = arguments.length > 2 && !0 === arguments[2];
                if (!n && 0 === r) return 0;
                for (var o = !1; ; )
                  switch (t) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                      return r;
                    case "utf8":
                    case "utf-8":
                      return B(e).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return 2 * r;
                    case "hex":
                      return r >>> 1;
                    case "base64":
                      return N(e).length;
                    default:
                      if (o) return n ? -1 : B(e).length;
                      (t = ("" + t).toLowerCase()), (o = !0);
                  }
              }
              function h(e, t, r) {
                var o,
                  i,
                  s = !1;
                if (
                  ((void 0 === t || t < 0) && (t = 0),
                  t > this.length ||
                    ((void 0 === r || r > this.length) && (r = this.length),
                    r <= 0 || (r >>>= 0) <= (t >>>= 0)))
                )
                  return "";
                for (e || (e = "utf8"); ; )
                  switch (e) {
                    case "hex":
                      return (function (e, t, r) {
                        var n = e.length;
                        (!t || t < 0) && (t = 0),
                          (!r || r < 0 || r > n) && (r = n);
                        for (var o = "", i = t; i < r; ++i) o += S[e[i]];
                        return o;
                      })(this, t, r);
                    case "utf8":
                    case "utf-8":
                      return m(this, t, r);
                    case "ascii":
                      return (function (e, t, r) {
                        var n = "";
                        r = Math.min(e.length, r);
                        for (var o = t; o < r; ++o)
                          n += String.fromCharCode(127 & e[o]);
                        return n;
                      })(this, t, r);
                    case "latin1":
                    case "binary":
                      return (function (e, t, r) {
                        var n = "";
                        r = Math.min(e.length, r);
                        for (var o = t; o < r; ++o)
                          n += String.fromCharCode(e[o]);
                        return n;
                      })(this, t, r);
                    case "base64":
                      return (
                        (o = t),
                        (i = r),
                        0 === o && i === this.length
                          ? n.fromByteArray(this)
                          : n.fromByteArray(this.slice(o, i))
                      );
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return (function (e, t, r) {
                        for (
                          var n = e.slice(t, r), o = "", i = 0;
                          i < n.length;
                          i += 2
                        )
                          o += String.fromCharCode(n[i] + 256 * n[i + 1]);
                        return o;
                      })(this, t, r);
                    default:
                      if (s) throw TypeError("Unknown encoding: " + e);
                      (e = (e + "").toLowerCase()), (s = !0);
                  }
              }
              function g(e, t, r) {
                var n = e[t];
                (e[t] = e[r]), (e[r] = n);
              }
              function b(e, t, r, n, o) {
                var i;
                if (0 === e.length) return -1;
                if (
                  ("string" == typeof r
                    ? ((n = r), (r = 0))
                    : r > 2147483647
                    ? (r = 2147483647)
                    : r < -2147483648 && (r = -2147483648),
                  (i = r = +r) != i && (r = o ? 0 : e.length - 1),
                  r < 0 && (r = e.length + r),
                  r >= e.length)
                ) {
                  if (o) return -1;
                  r = e.length - 1;
                } else if (r < 0) {
                  if (!o) return -1;
                  r = 0;
                }
                if (("string" == typeof t && (t = a.from(t, n)), a.isBuffer(t)))
                  return 0 === t.length ? -1 : y(e, t, r, n, o);
                if ("number" == typeof t)
                  return ((t &= 255),
                  "function" == typeof Uint8Array.prototype.indexOf)
                    ? o
                      ? Uint8Array.prototype.indexOf.call(e, t, r)
                      : Uint8Array.prototype.lastIndexOf.call(e, t, r)
                    : y(e, [t], r, n, o);
                throw TypeError("val must be string, number or Buffer");
              }
              function y(e, t, r, n, o) {
                var i,
                  s = 1,
                  a = e.length,
                  l = t.length;
                if (
                  void 0 !== n &&
                  ("ucs2" === (n = String(n).toLowerCase()) ||
                    "ucs-2" === n ||
                    "utf16le" === n ||
                    "utf-16le" === n)
                ) {
                  if (e.length < 2 || t.length < 2) return -1;
                  (s = 2), (a /= 2), (l /= 2), (r /= 2);
                }
                function u(e, t) {
                  return 1 === s ? e[t] : e.readUInt16BE(t * s);
                }
                if (o) {
                  var f = -1;
                  for (i = r; i < a; i++)
                    if (u(e, i) === u(t, -1 === f ? 0 : i - f)) {
                      if ((-1 === f && (f = i), i - f + 1 === l)) return f * s;
                    } else -1 !== f && (i -= i - f), (f = -1);
                } else
                  for (r + l > a && (r = a - l), i = r; i >= 0; i--) {
                    for (var c = !0, d = 0; d < l; d++)
                      if (u(e, i + d) !== u(t, d)) {
                        c = !1;
                        break;
                      }
                    if (c) return i;
                  }
                return -1;
              }
              function m(e, t, r) {
                r = Math.min(e.length, r);
                for (var n = [], o = t; o < r; ) {
                  var i,
                    s,
                    a,
                    l,
                    u = e[o],
                    f = null,
                    c = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
                  if (o + c <= r)
                    switch (c) {
                      case 1:
                        u < 128 && (f = u);
                        break;
                      case 2:
                        (192 & (i = e[o + 1])) == 128 &&
                          (l = ((31 & u) << 6) | (63 & i)) > 127 &&
                          (f = l);
                        break;
                      case 3:
                        (i = e[o + 1]),
                          (s = e[o + 2]),
                          (192 & i) == 128 &&
                            (192 & s) == 128 &&
                            (l =
                              ((15 & u) << 12) | ((63 & i) << 6) | (63 & s)) >
                              2047 &&
                            (l < 55296 || l > 57343) &&
                            (f = l);
                        break;
                      case 4:
                        (i = e[o + 1]),
                          (s = e[o + 2]),
                          (a = e[o + 3]),
                          (192 & i) == 128 &&
                            (192 & s) == 128 &&
                            (192 & a) == 128 &&
                            (l =
                              ((15 & u) << 18) |
                              ((63 & i) << 12) |
                              ((63 & s) << 6) |
                              (63 & a)) > 65535 &&
                            l < 1114112 &&
                            (f = l);
                    }
                  null === f
                    ? ((f = 65533), (c = 1))
                    : f > 65535 &&
                      ((f -= 65536),
                      n.push(((f >>> 10) & 1023) | 55296),
                      (f = 56320 | (1023 & f))),
                    n.push(f),
                    (o += c);
                }
                return (function (e) {
                  var t = e.length;
                  if (t <= 4096) return String.fromCharCode.apply(String, e);
                  for (var r = "", n = 0; n < t; )
                    r += String.fromCharCode.apply(
                      String,
                      e.slice(n, (n += 4096))
                    );
                  return r;
                })(n);
              }
              function v(e, t, r) {
                if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
                if (e + t > r)
                  throw RangeError("Trying to access beyond buffer length");
              }
              function w(e, t, r, n, o, i) {
                if (!a.isBuffer(e))
                  throw TypeError(
                    '"buffer" argument must be a Buffer instance'
                  );
                if (t > o || t < i)
                  throw RangeError('"value" argument is out of bounds');
                if (r + n > e.length) throw RangeError("Index out of range");
              }
              function x(e, t, r, n, o, i) {
                if (r + n > e.length || r < 0)
                  throw RangeError("Index out of range");
              }
              function E(e, t, r, n, i) {
                return (
                  (t = +t),
                  (r >>>= 0),
                  i ||
                    x(e, t, r, 4, 34028234663852886e22, -34028234663852886e22),
                  o.write(e, t, r, n, 23, 4),
                  r + 4
                );
              }
              function A(e, t, r, n, i) {
                return (
                  (t = +t),
                  (r >>>= 0),
                  i ||
                    x(
                      e,
                      t,
                      r,
                      8,
                      17976931348623157e292,
                      -17976931348623157e292
                    ),
                  o.write(e, t, r, n, 52, 8),
                  r + 8
                );
              }
              (t.Buffer = a),
                (t.SlowBuffer = function (e) {
                  return +e != e && (e = 0), a.alloc(+e);
                }),
                (t.INSPECT_MAX_BYTES = 50),
                (t.kMaxLength = 2147483647),
                (a.TYPED_ARRAY_SUPPORT = (function () {
                  try {
                    var e = new Uint8Array(1),
                      t = {
                        foo: function () {
                          return 42;
                        },
                      };
                    return (
                      Object.setPrototypeOf(t, Uint8Array.prototype),
                      Object.setPrototypeOf(e, t),
                      42 === e.foo()
                    );
                  } catch (e) {
                    return !1;
                  }
                })()),
                a.TYPED_ARRAY_SUPPORT ||
                  "undefined" == typeof console ||
                  "function" != typeof console.error ||
                  console.error(
                    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
                  ),
                Object.defineProperty(a.prototype, "parent", {
                  enumerable: !0,
                  get: function () {
                    if (a.isBuffer(this)) return this.buffer;
                  },
                }),
                Object.defineProperty(a.prototype, "offset", {
                  enumerable: !0,
                  get: function () {
                    if (a.isBuffer(this)) return this.byteOffset;
                  },
                }),
                (a.poolSize = 8192),
                (a.from = function (e, t, r) {
                  return l(e, t, r);
                }),
                Object.setPrototypeOf(a.prototype, Uint8Array.prototype),
                Object.setPrototypeOf(a, Uint8Array),
                (a.alloc = function (e, t, r) {
                  return (u(e), e <= 0)
                    ? s(e)
                    : void 0 !== t
                    ? "string" == typeof r
                      ? s(e).fill(t, r)
                      : s(e).fill(t)
                    : s(e);
                }),
                (a.allocUnsafe = function (e) {
                  return f(e);
                }),
                (a.allocUnsafeSlow = function (e) {
                  return f(e);
                }),
                (a.isBuffer = function (e) {
                  return null != e && !0 === e._isBuffer && e !== a.prototype;
                }),
                (a.compare = function (e, t) {
                  if (
                    (O(e, Uint8Array) &&
                      (e = a.from(e, e.offset, e.byteLength)),
                    O(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)),
                    !a.isBuffer(e) || !a.isBuffer(t))
                  )
                    throw TypeError(
                      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
                    );
                  if (e === t) return 0;
                  for (
                    var r = e.length, n = t.length, o = 0, i = Math.min(r, n);
                    o < i;
                    ++o
                  )
                    if (e[o] !== t[o]) {
                      (r = e[o]), (n = t[o]);
                      break;
                    }
                  return r < n ? -1 : n < r ? 1 : 0;
                }),
                (a.isEncoding = function (e) {
                  switch (String(e).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return !0;
                    default:
                      return !1;
                  }
                }),
                (a.concat = function (e, t) {
                  if (!Array.isArray(e))
                    throw TypeError(
                      '"list" argument must be an Array of Buffers'
                    );
                  if (0 === e.length) return a.alloc(0);
                  if (void 0 === t)
                    for (r = 0, t = 0; r < e.length; ++r) t += e[r].length;
                  var r,
                    n = a.allocUnsafe(t),
                    o = 0;
                  for (r = 0; r < e.length; ++r) {
                    var i = e[r];
                    if ((O(i, Uint8Array) && (i = a.from(i)), !a.isBuffer(i)))
                      throw TypeError(
                        '"list" argument must be an Array of Buffers'
                      );
                    i.copy(n, o), (o += i.length);
                  }
                  return n;
                }),
                (a.byteLength = p),
                (a.prototype._isBuffer = !0),
                (a.prototype.swap16 = function () {
                  var e = this.length;
                  if (e % 2 != 0)
                    throw RangeError(
                      "Buffer size must be a multiple of 16-bits"
                    );
                  for (var t = 0; t < e; t += 2) g(this, t, t + 1);
                  return this;
                }),
                (a.prototype.swap32 = function () {
                  var e = this.length;
                  if (e % 4 != 0)
                    throw RangeError(
                      "Buffer size must be a multiple of 32-bits"
                    );
                  for (var t = 0; t < e; t += 4)
                    g(this, t, t + 3), g(this, t + 1, t + 2);
                  return this;
                }),
                (a.prototype.swap64 = function () {
                  var e = this.length;
                  if (e % 8 != 0)
                    throw RangeError(
                      "Buffer size must be a multiple of 64-bits"
                    );
                  for (var t = 0; t < e; t += 8)
                    g(this, t, t + 7),
                      g(this, t + 1, t + 6),
                      g(this, t + 2, t + 5),
                      g(this, t + 3, t + 4);
                  return this;
                }),
                (a.prototype.toString = function () {
                  var e = this.length;
                  return 0 === e
                    ? ""
                    : 0 == arguments.length
                    ? m(this, 0, e)
                    : h.apply(this, arguments);
                }),
                (a.prototype.toLocaleString = a.prototype.toString),
                (a.prototype.equals = function (e) {
                  if (!a.isBuffer(e))
                    throw TypeError("Argument must be a Buffer");
                  return this === e || 0 === a.compare(this, e);
                }),
                (a.prototype.inspect = function () {
                  var e = "",
                    r = t.INSPECT_MAX_BYTES;
                  return (
                    (e = this.toString("hex", 0, r)
                      .replace(/(.{2})/g, "$1 ")
                      .trim()),
                    this.length > r && (e += " ... "),
                    "<Buffer " + e + ">"
                  );
                }),
                i && (a.prototype[i] = a.prototype.inspect),
                (a.prototype.compare = function (e, t, r, n, o) {
                  if (
                    (O(e, Uint8Array) &&
                      (e = a.from(e, e.offset, e.byteLength)),
                    !a.isBuffer(e))
                  )
                    throw TypeError(
                      'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                        typeof e
                    );
                  if (
                    (void 0 === t && (t = 0),
                    void 0 === r && (r = e ? e.length : 0),
                    void 0 === n && (n = 0),
                    void 0 === o && (o = this.length),
                    t < 0 || r > e.length || n < 0 || o > this.length)
                  )
                    throw RangeError("out of range index");
                  if (n >= o && t >= r) return 0;
                  if (n >= o) return -1;
                  if (t >= r) return 1;
                  if (
                    ((t >>>= 0), (r >>>= 0), (n >>>= 0), (o >>>= 0), this === e)
                  )
                    return 0;
                  for (
                    var i = o - n,
                      s = r - t,
                      l = Math.min(i, s),
                      u = this.slice(n, o),
                      f = e.slice(t, r),
                      c = 0;
                    c < l;
                    ++c
                  )
                    if (u[c] !== f[c]) {
                      (i = u[c]), (s = f[c]);
                      break;
                    }
                  return i < s ? -1 : s < i ? 1 : 0;
                }),
                (a.prototype.includes = function (e, t, r) {
                  return -1 !== this.indexOf(e, t, r);
                }),
                (a.prototype.indexOf = function (e, t, r) {
                  return b(this, e, t, r, !0);
                }),
                (a.prototype.lastIndexOf = function (e, t, r) {
                  return b(this, e, t, r, !1);
                }),
                (a.prototype.write = function (e, t, r, n) {
                  if (void 0 === t) (n = "utf8"), (r = this.length), (t = 0);
                  else if (void 0 === r && "string" == typeof t)
                    (n = t), (r = this.length), (t = 0);
                  else if (isFinite(t))
                    (t >>>= 0),
                      isFinite(r)
                        ? ((r >>>= 0), void 0 === n && (n = "utf8"))
                        : ((n = r), (r = void 0));
                  else
                    throw Error(
                      "Buffer.write(string, encoding, offset[, length]) is no longer supported"
                    );
                  var o,
                    i,
                    s,
                    a,
                    l,
                    u,
                    f,
                    c,
                    d,
                    p,
                    h,
                    g,
                    b = this.length - t;
                  if (
                    ((void 0 === r || r > b) && (r = b),
                    (e.length > 0 && (r < 0 || t < 0)) || t > this.length)
                  )
                    throw RangeError("Attempt to write outside buffer bounds");
                  n || (n = "utf8");
                  for (var y = !1; ; )
                    switch (n) {
                      case "hex":
                        return (function (e, t, r, n) {
                          r = Number(r) || 0;
                          var o = e.length - r;
                          n ? (n = Number(n)) > o && (n = o) : (n = o);
                          var i = t.length;
                          n > i / 2 && (n = i / 2);
                          for (var s = 0; s < n; ++s) {
                            var a = parseInt(t.substr(2 * s, 2), 16);
                            if (a != a) break;
                            e[r + s] = a;
                          }
                          return s;
                        })(this, e, t, r);
                      case "utf8":
                      case "utf-8":
                        return (
                          (l = t), (u = r), T(B(e, this.length - l), this, l, u)
                        );
                      case "ascii":
                        return (f = t), (c = r), T(C(e), this, f, c);
                      case "latin1":
                      case "binary":
                        return (
                          (o = this),
                          (i = e),
                          (s = t),
                          (a = r),
                          T(C(i), o, s, a)
                        );
                      case "base64":
                        return (d = t), (p = r), T(N(e), this, d, p);
                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                        return (
                          (h = t),
                          (g = r),
                          T(
                            (function (e, t) {
                              for (
                                var r, n, o = [], i = 0;
                                i < e.length && !((t -= 2) < 0);
                                ++i
                              )
                                (n = (r = e.charCodeAt(i)) >> 8),
                                  o.push(r % 256),
                                  o.push(n);
                              return o;
                            })(e, this.length - h),
                            this,
                            h,
                            g
                          )
                        );
                      default:
                        if (y) throw TypeError("Unknown encoding: " + n);
                        (n = ("" + n).toLowerCase()), (y = !0);
                    }
                }),
                (a.prototype.toJSON = function () {
                  return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0),
                  };
                }),
                (a.prototype.slice = function (e, t) {
                  var r = this.length;
                  (e = ~~e),
                    (t = void 0 === t ? r : ~~t),
                    e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
                    t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
                    t < e && (t = e);
                  var n = this.subarray(e, t);
                  return Object.setPrototypeOf(n, a.prototype), n;
                }),
                (a.prototype.readUIntLE = function (e, t, r) {
                  (e >>>= 0), (t >>>= 0), r || v(e, t, this.length);
                  for (var n = this[e], o = 1, i = 0; ++i < t && (o *= 256); )
                    n += this[e + i] * o;
                  return n;
                }),
                (a.prototype.readUIntBE = function (e, t, r) {
                  (e >>>= 0), (t >>>= 0), r || v(e, t, this.length);
                  for (var n = this[e + --t], o = 1; t > 0 && (o *= 256); )
                    n += this[e + --t] * o;
                  return n;
                }),
                (a.prototype.readUInt8 = function (e, t) {
                  return (e >>>= 0), t || v(e, 1, this.length), this[e];
                }),
                (a.prototype.readUInt16LE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || v(e, 2, this.length),
                    this[e] | (this[e + 1] << 8)
                  );
                }),
                (a.prototype.readUInt16BE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || v(e, 2, this.length),
                    (this[e] << 8) | this[e + 1]
                  );
                }),
                (a.prototype.readUInt32LE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || v(e, 4, this.length),
                    (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
                      16777216 * this[e + 3]
                  );
                }),
                (a.prototype.readUInt32BE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || v(e, 4, this.length),
                    16777216 * this[e] +
                      ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
                  );
                }),
                (a.prototype.readIntLE = function (e, t, r) {
                  (e >>>= 0), (t >>>= 0), r || v(e, t, this.length);
                  for (var n = this[e], o = 1, i = 0; ++i < t && (o *= 256); )
                    n += this[e + i] * o;
                  return n >= (o *= 128) && (n -= Math.pow(2, 8 * t)), n;
                }),
                (a.prototype.readIntBE = function (e, t, r) {
                  (e >>>= 0), (t >>>= 0), r || v(e, t, this.length);
                  for (
                    var n = t, o = 1, i = this[e + --n];
                    n > 0 && (o *= 256);

                  )
                    i += this[e + --n] * o;
                  return i >= (o *= 128) && (i -= Math.pow(2, 8 * t)), i;
                }),
                (a.prototype.readInt8 = function (e, t) {
                  return ((e >>>= 0), t || v(e, 1, this.length), 128 & this[e])
                    ? -((255 - this[e] + 1) * 1)
                    : this[e];
                }),
                (a.prototype.readInt16LE = function (e, t) {
                  (e >>>= 0), t || v(e, 2, this.length);
                  var r = this[e] | (this[e + 1] << 8);
                  return 32768 & r ? 4294901760 | r : r;
                }),
                (a.prototype.readInt16BE = function (e, t) {
                  (e >>>= 0), t || v(e, 2, this.length);
                  var r = this[e + 1] | (this[e] << 8);
                  return 32768 & r ? 4294901760 | r : r;
                }),
                (a.prototype.readInt32LE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || v(e, 4, this.length),
                    this[e] |
                      (this[e + 1] << 8) |
                      (this[e + 2] << 16) |
                      (this[e + 3] << 24)
                  );
                }),
                (a.prototype.readInt32BE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || v(e, 4, this.length),
                    (this[e] << 24) |
                      (this[e + 1] << 16) |
                      (this[e + 2] << 8) |
                      this[e + 3]
                  );
                }),
                (a.prototype.readFloatLE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || v(e, 4, this.length),
                    o.read(this, e, !0, 23, 4)
                  );
                }),
                (a.prototype.readFloatBE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || v(e, 4, this.length),
                    o.read(this, e, !1, 23, 4)
                  );
                }),
                (a.prototype.readDoubleLE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || v(e, 8, this.length),
                    o.read(this, e, !0, 52, 8)
                  );
                }),
                (a.prototype.readDoubleBE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || v(e, 8, this.length),
                    o.read(this, e, !1, 52, 8)
                  );
                }),
                (a.prototype.writeUIntLE = function (e, t, r, n) {
                  if (((e = +e), (t >>>= 0), (r >>>= 0), !n)) {
                    var o = Math.pow(2, 8 * r) - 1;
                    w(this, e, t, r, o, 0);
                  }
                  var i = 1,
                    s = 0;
                  for (this[t] = 255 & e; ++s < r && (i *= 256); )
                    this[t + s] = (e / i) & 255;
                  return t + r;
                }),
                (a.prototype.writeUIntBE = function (e, t, r, n) {
                  if (((e = +e), (t >>>= 0), (r >>>= 0), !n)) {
                    var o = Math.pow(2, 8 * r) - 1;
                    w(this, e, t, r, o, 0);
                  }
                  var i = r - 1,
                    s = 1;
                  for (this[t + i] = 255 & e; --i >= 0 && (s *= 256); )
                    this[t + i] = (e / s) & 255;
                  return t + r;
                }),
                (a.prototype.writeUInt8 = function (e, t, r) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    r || w(this, e, t, 1, 255, 0),
                    (this[t] = 255 & e),
                    t + 1
                  );
                }),
                (a.prototype.writeUInt16LE = function (e, t, r) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    r || w(this, e, t, 2, 65535, 0),
                    (this[t] = 255 & e),
                    (this[t + 1] = e >>> 8),
                    t + 2
                  );
                }),
                (a.prototype.writeUInt16BE = function (e, t, r) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    r || w(this, e, t, 2, 65535, 0),
                    (this[t] = e >>> 8),
                    (this[t + 1] = 255 & e),
                    t + 2
                  );
                }),
                (a.prototype.writeUInt32LE = function (e, t, r) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    r || w(this, e, t, 4, 4294967295, 0),
                    (this[t + 3] = e >>> 24),
                    (this[t + 2] = e >>> 16),
                    (this[t + 1] = e >>> 8),
                    (this[t] = 255 & e),
                    t + 4
                  );
                }),
                (a.prototype.writeUInt32BE = function (e, t, r) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    r || w(this, e, t, 4, 4294967295, 0),
                    (this[t] = e >>> 24),
                    (this[t + 1] = e >>> 16),
                    (this[t + 2] = e >>> 8),
                    (this[t + 3] = 255 & e),
                    t + 4
                  );
                }),
                (a.prototype.writeIntLE = function (e, t, r, n) {
                  if (((e = +e), (t >>>= 0), !n)) {
                    var o = Math.pow(2, 8 * r - 1);
                    w(this, e, t, r, o - 1, -o);
                  }
                  var i = 0,
                    s = 1,
                    a = 0;
                  for (this[t] = 255 & e; ++i < r && (s *= 256); )
                    e < 0 && 0 === a && 0 !== this[t + i - 1] && (a = 1),
                      (this[t + i] = (((e / s) >> 0) - a) & 255);
                  return t + r;
                }),
                (a.prototype.writeIntBE = function (e, t, r, n) {
                  if (((e = +e), (t >>>= 0), !n)) {
                    var o = Math.pow(2, 8 * r - 1);
                    w(this, e, t, r, o - 1, -o);
                  }
                  var i = r - 1,
                    s = 1,
                    a = 0;
                  for (this[t + i] = 255 & e; --i >= 0 && (s *= 256); )
                    e < 0 && 0 === a && 0 !== this[t + i + 1] && (a = 1),
                      (this[t + i] = (((e / s) >> 0) - a) & 255);
                  return t + r;
                }),
                (a.prototype.writeInt8 = function (e, t, r) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    r || w(this, e, t, 1, 127, -128),
                    e < 0 && (e = 255 + e + 1),
                    (this[t] = 255 & e),
                    t + 1
                  );
                }),
                (a.prototype.writeInt16LE = function (e, t, r) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    r || w(this, e, t, 2, 32767, -32768),
                    (this[t] = 255 & e),
                    (this[t + 1] = e >>> 8),
                    t + 2
                  );
                }),
                (a.prototype.writeInt16BE = function (e, t, r) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    r || w(this, e, t, 2, 32767, -32768),
                    (this[t] = e >>> 8),
                    (this[t + 1] = 255 & e),
                    t + 2
                  );
                }),
                (a.prototype.writeInt32LE = function (e, t, r) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    r || w(this, e, t, 4, 2147483647, -2147483648),
                    (this[t] = 255 & e),
                    (this[t + 1] = e >>> 8),
                    (this[t + 2] = e >>> 16),
                    (this[t + 3] = e >>> 24),
                    t + 4
                  );
                }),
                (a.prototype.writeInt32BE = function (e, t, r) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    r || w(this, e, t, 4, 2147483647, -2147483648),
                    e < 0 && (e = 4294967295 + e + 1),
                    (this[t] = e >>> 24),
                    (this[t + 1] = e >>> 16),
                    (this[t + 2] = e >>> 8),
                    (this[t + 3] = 255 & e),
                    t + 4
                  );
                }),
                (a.prototype.writeFloatLE = function (e, t, r) {
                  return E(this, e, t, !0, r);
                }),
                (a.prototype.writeFloatBE = function (e, t, r) {
                  return E(this, e, t, !1, r);
                }),
                (a.prototype.writeDoubleLE = function (e, t, r) {
                  return A(this, e, t, !0, r);
                }),
                (a.prototype.writeDoubleBE = function (e, t, r) {
                  return A(this, e, t, !1, r);
                }),
                (a.prototype.copy = function (e, t, r, n) {
                  if (!a.isBuffer(e))
                    throw TypeError("argument should be a Buffer");
                  if (
                    (r || (r = 0),
                    n || 0 === n || (n = this.length),
                    t >= e.length && (t = e.length),
                    t || (t = 0),
                    n > 0 && n < r && (n = r),
                    n === r || 0 === e.length || 0 === this.length)
                  )
                    return 0;
                  if (t < 0) throw RangeError("targetStart out of bounds");
                  if (r < 0 || r >= this.length)
                    throw RangeError("Index out of range");
                  if (n < 0) throw RangeError("sourceEnd out of bounds");
                  n > this.length && (n = this.length),
                    e.length - t < n - r && (n = e.length - t + r);
                  var o = n - r;
                  if (
                    this === e &&
                    "function" == typeof Uint8Array.prototype.copyWithin
                  )
                    this.copyWithin(t, r, n);
                  else if (this === e && r < t && t < n)
                    for (var i = o - 1; i >= 0; --i) e[i + t] = this[i + r];
                  else Uint8Array.prototype.set.call(e, this.subarray(r, n), t);
                  return o;
                }),
                (a.prototype.fill = function (e, t, r, n) {
                  if ("string" == typeof e) {
                    if (
                      ("string" == typeof t
                        ? ((n = t), (t = 0), (r = this.length))
                        : "string" == typeof r && ((n = r), (r = this.length)),
                      void 0 !== n && "string" != typeof n)
                    )
                      throw TypeError("encoding must be a string");
                    if ("string" == typeof n && !a.isEncoding(n))
                      throw TypeError("Unknown encoding: " + n);
                    if (1 === e.length) {
                      var o,
                        i = e.charCodeAt(0);
                      (("utf8" === n && i < 128) || "latin1" === n) && (e = i);
                    }
                  } else
                    "number" == typeof e
                      ? (e &= 255)
                      : "boolean" == typeof e && (e = Number(e));
                  if (t < 0 || this.length < t || this.length < r)
                    throw RangeError("Out of range index");
                  if (r <= t) return this;
                  if (
                    ((t >>>= 0),
                    (r = void 0 === r ? this.length : r >>> 0),
                    e || (e = 0),
                    "number" == typeof e)
                  )
                    for (o = t; o < r; ++o) this[o] = e;
                  else {
                    var s = a.isBuffer(e) ? e : a.from(e, n),
                      l = s.length;
                    if (0 === l)
                      throw TypeError(
                        'The value "' + e + '" is invalid for argument "value"'
                      );
                    for (o = 0; o < r - t; ++o) this[o + t] = s[o % l];
                  }
                  return this;
                });
              var k = /[^+/0-9A-Za-z-_]/g;
              function B(e, t) {
                t = t || 1 / 0;
                for (var r, n = e.length, o = null, i = [], s = 0; s < n; ++s) {
                  if ((r = e.charCodeAt(s)) > 55295 && r < 57344) {
                    if (!o) {
                      if (r > 56319 || s + 1 === n) {
                        (t -= 3) > -1 && i.push(239, 191, 189);
                        continue;
                      }
                      o = r;
                      continue;
                    }
                    if (r < 56320) {
                      (t -= 3) > -1 && i.push(239, 191, 189), (o = r);
                      continue;
                    }
                    r = (((o - 55296) << 10) | (r - 56320)) + 65536;
                  } else o && (t -= 3) > -1 && i.push(239, 191, 189);
                  if (((o = null), r < 128)) {
                    if ((t -= 1) < 0) break;
                    i.push(r);
                  } else if (r < 2048) {
                    if ((t -= 2) < 0) break;
                    i.push((r >> 6) | 192, (63 & r) | 128);
                  } else if (r < 65536) {
                    if ((t -= 3) < 0) break;
                    i.push(
                      (r >> 12) | 224,
                      ((r >> 6) & 63) | 128,
                      (63 & r) | 128
                    );
                  } else if (r < 1114112) {
                    if ((t -= 4) < 0) break;
                    i.push(
                      (r >> 18) | 240,
                      ((r >> 12) & 63) | 128,
                      ((r >> 6) & 63) | 128,
                      (63 & r) | 128
                    );
                  } else throw Error("Invalid code point");
                }
                return i;
              }
              function C(e) {
                for (var t = [], r = 0; r < e.length; ++r)
                  t.push(255 & e.charCodeAt(r));
                return t;
              }
              function N(e) {
                return n.toByteArray(
                  (function (e) {
                    if (
                      (e = (e = e.split("=")[0]).trim().replace(k, "")).length <
                      2
                    )
                      return "";
                    for (; e.length % 4 != 0; ) e += "=";
                    return e;
                  })(e)
                );
              }
              function T(e, t, r, n) {
                for (
                  var o = 0;
                  o < n && !(o + r >= t.length) && !(o >= e.length);
                  ++o
                )
                  t[o + r] = e[o];
                return o;
              }
              function O(e, t) {
                return (
                  e instanceof t ||
                  (null != e &&
                    null != e.constructor &&
                    null != e.constructor.name &&
                    e.constructor.name === t.name)
                );
              }
              var S = (function () {
                for (
                  var e = "0123456789abcdef", t = Array(256), r = 0;
                  r < 16;
                  ++r
                )
                  for (var n = 16 * r, o = 0; o < 16; ++o)
                    t[n + o] = e[r] + e[o];
                return t;
              })();
            },
            783: function (e, t) {
              /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ (t.read =
                function (e, t, r, n, o) {
                  var i,
                    s,
                    a = 8 * o - n - 1,
                    l = (1 << a) - 1,
                    u = l >> 1,
                    f = -7,
                    c = r ? o - 1 : 0,
                    d = r ? -1 : 1,
                    p = e[t + c];
                  for (
                    c += d, i = p & ((1 << -f) - 1), p >>= -f, f += a;
                    f > 0;
                    i = 256 * i + e[t + c], c += d, f -= 8
                  );
                  for (
                    s = i & ((1 << -f) - 1), i >>= -f, f += n;
                    f > 0;
                    s = 256 * s + e[t + c], c += d, f -= 8
                  );
                  if (0 === i) i = 1 - u;
                  else {
                    if (i === l) return s ? NaN : (1 / 0) * (p ? -1 : 1);
                    (s += Math.pow(2, n)), (i -= u);
                  }
                  return (p ? -1 : 1) * s * Math.pow(2, i - n);
                }),
                (t.write = function (e, t, r, n, o, i) {
                  var s,
                    a,
                    l,
                    u = 8 * i - o - 1,
                    f = (1 << u) - 1,
                    c = f >> 1,
                    d = 23 === o ? 5960464477539062e-23 : 0,
                    p = n ? 0 : i - 1,
                    h = n ? 1 : -1,
                    g = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
                  for (
                    isNaN((t = Math.abs(t))) || t === 1 / 0
                      ? ((a = isNaN(t) ? 1 : 0), (s = f))
                      : ((s = Math.floor(Math.log(t) / Math.LN2)),
                        t * (l = Math.pow(2, -s)) < 1 && (s--, (l *= 2)),
                        s + c >= 1
                          ? (t += d / l)
                          : (t += d * Math.pow(2, 1 - c)),
                        t * l >= 2 && (s++, (l /= 2)),
                        s + c >= f
                          ? ((a = 0), (s = f))
                          : s + c >= 1
                          ? ((a = (t * l - 1) * Math.pow(2, o)), (s += c))
                          : ((a = t * Math.pow(2, c - 1) * Math.pow(2, o)),
                            (s = 0)));
                    o >= 8;
                    e[r + p] = 255 & a, p += h, a /= 256, o -= 8
                  );
                  for (
                    s = (s << o) | a, u += o;
                    u > 0;
                    e[r + p] = 255 & s, p += h, s /= 256, u -= 8
                  );
                  e[r + p - h] |= 128 * g;
                });
            },
          },
          r = {};
        function n(e) {
          var o = r[e];
          if (void 0 !== o) return o.exports;
          var i = (r[e] = { exports: {} }),
            s = !0;
          try {
            t[e](i, i.exports, n), (s = !1);
          } finally {
            s && delete r[e];
          }
          return i.exports;
        }
        n.ab = "//";
        var o = n(72);
        e.exports = o;
      })();
    },
    2110: function (e, t, r) {
      "use strict";
      function n() {
        return (n = Object.assign
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
      r.d(t, {
        Z: function () {
          return n;
        },
      });
    },
    4991: function (e, t, r) {
      "use strict";
      function n(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
        return function (n) {
          if ((null == e || e(n), !1 === r || !n.defaultPrevented))
            return null == t ? void 0 : t(n);
        };
      }
      r.d(t, {
        M: function () {
          return n;
        },
      });
    },
    1266: function (e, t, r) {
      "use strict";
      r.d(t, {
        F: function () {
          return o;
        },
        e: function () {
          return i;
        },
      });
      var n = r(2265);
      function o(...e) {
        return (t) =>
          e.forEach((e) => {
            "function" == typeof e ? e(t) : null != e && (e.current = t);
          });
      }
      function i(...e) {
        return (0, n.useCallback)(o(...e), e);
      }
    },
    4104: function (e, t, r) {
      "use strict";
      r.d(t, {
        b: function () {
          return i;
        },
        k: function () {
          return o;
        },
      });
      var n = r(2265);
      function o(e, t) {
        let r = (0, n.createContext)(t);
        function o(e) {
          let { children: t, ...o } = e,
            i = (0, n.useMemo)(() => o, Object.values(o));
          return (0, n.createElement)(r.Provider, { value: i }, t);
        }
        return (
          (o.displayName = e + "Provider"),
          [
            o,
            function (o) {
              let i = (0, n.useContext)(r);
              if (i) return i;
              if (void 0 !== t) return t;
              throw Error(`\`${o}\` must be used within \`${e}\``);
            },
          ]
        );
      }
      function i(e, t = []) {
        let r = [],
          o = () => {
            let t = r.map((e) => (0, n.createContext)(e));
            return function (r) {
              let o = (null == r ? void 0 : r[e]) || t;
              return (0, n.useMemo)(
                () => ({ [`__scope${e}`]: { ...r, [e]: o } }),
                [r, o]
              );
            };
          };
        return (
          (o.scopeName = e),
          [
            function (t, o) {
              let i = (0, n.createContext)(o),
                s = r.length;
              function a(t) {
                let { scope: r, children: o, ...a } = t,
                  l = (null == r ? void 0 : r[e][s]) || i,
                  u = (0, n.useMemo)(() => a, Object.values(a));
                return (0, n.createElement)(l.Provider, { value: u }, o);
              }
              return (
                (r = [...r, o]),
                (a.displayName = t + "Provider"),
                [
                  a,
                  function (r, a) {
                    let l = (null == a ? void 0 : a[e][s]) || i,
                      u = (0, n.useContext)(l);
                    if (u) return u;
                    if (void 0 !== o) return o;
                    throw Error(`\`${r}\` must be used within \`${t}\``);
                  },
                ]
              );
            },
            (function (...e) {
              let t = e[0];
              if (1 === e.length) return t;
              let r = () => {
                let r = e.map((e) => ({
                  useScope: e(),
                  scopeName: e.scopeName,
                }));
                return function (e) {
                  let o = r.reduce((t, { useScope: r, scopeName: n }) => {
                    let o = r(e)[`__scope${n}`];
                    return { ...t, ...o };
                  }, {});
                  return (0, n.useMemo)(
                    () => ({ [`__scope${t.scopeName}`]: o }),
                    [o]
                  );
                };
              };
              return (r.scopeName = t.scopeName), r;
            })(o, ...t),
          ]
        );
      }
    },
    2642: function (e, t, r) {
      "use strict";
      r.d(t, {
        z: function () {
          return a;
        },
      });
      var n = r(2265),
        o = r(4887),
        i = r(1266),
        s = r(2618);
      let a = (e) => {
        let { present: t, children: r } = e,
          a = (function (e) {
            var t, r;
            let [i, a] = (0, n.useState)(),
              u = (0, n.useRef)({}),
              f = (0, n.useRef)(e),
              c = (0, n.useRef)("none"),
              [d, p] =
                ((t = e ? "mounted" : "unmounted"),
                (r = {
                  mounted: {
                    UNMOUNT: "unmounted",
                    ANIMATION_OUT: "unmountSuspended",
                  },
                  unmountSuspended: {
                    MOUNT: "mounted",
                    ANIMATION_END: "unmounted",
                  },
                  unmounted: { MOUNT: "mounted" },
                }),
                (0, n.useReducer)((e, t) => {
                  let n = r[e][t];
                  return null != n ? n : e;
                }, t));
            return (
              (0, n.useEffect)(() => {
                let e = l(u.current);
                c.current = "mounted" === d ? e : "none";
              }, [d]),
              (0, s.b)(() => {
                let t = u.current,
                  r = f.current;
                if (r !== e) {
                  let n = c.current,
                    o = l(t);
                  e
                    ? p("MOUNT")
                    : "none" === o ||
                      (null == t ? void 0 : t.display) === "none"
                    ? p("UNMOUNT")
                    : r && n !== o
                    ? p("ANIMATION_OUT")
                    : p("UNMOUNT"),
                    (f.current = e);
                }
              }, [e, p]),
              (0, s.b)(() => {
                if (i) {
                  let e = (e) => {
                      let t = l(u.current).includes(e.animationName);
                      e.target === i &&
                        t &&
                        (0, o.flushSync)(() => p("ANIMATION_END"));
                    },
                    t = (e) => {
                      e.target === i && (c.current = l(u.current));
                    };
                  return (
                    i.addEventListener("animationstart", t),
                    i.addEventListener("animationcancel", e),
                    i.addEventListener("animationend", e),
                    () => {
                      i.removeEventListener("animationstart", t),
                        i.removeEventListener("animationcancel", e),
                        i.removeEventListener("animationend", e);
                    }
                  );
                }
                p("ANIMATION_END");
              }, [i, p]),
              {
                isPresent: ["mounted", "unmountSuspended"].includes(d),
                ref: (0, n.useCallback)((e) => {
                  e && (u.current = getComputedStyle(e)), a(e);
                }, []),
              }
            );
          })(t),
          u =
            "function" == typeof r
              ? r({ present: a.isPresent })
              : n.Children.only(r),
          f = (0, i.e)(a.ref, u.ref);
        return "function" == typeof r || a.isPresent
          ? (0, n.cloneElement)(u, { ref: f })
          : null;
      };
      function l(e) {
        return (null == e ? void 0 : e.animationName) || "none";
      }
      a.displayName = "Presence";
    },
    9586: function (e, t, r) {
      "use strict";
      r.d(t, {
        WV: function () {
          return a;
        },
        jH: function () {
          return l;
        },
      });
      var n = r(2110),
        o = r(2265),
        i = r(4887),
        s = r(9143);
      let a = [
        "a",
        "button",
        "div",
        "form",
        "h2",
        "h3",
        "img",
        "input",
        "label",
        "li",
        "nav",
        "ol",
        "p",
        "span",
        "svg",
        "ul",
      ].reduce((e, t) => {
        let r = (0, o.forwardRef)((e, r) => {
          let { asChild: i, ...a } = e,
            l = i ? s.g7 : t;
          return (
            (0, o.useEffect)(() => {
              window[Symbol.for("radix-ui")] = !0;
            }, []),
            (0, o.createElement)(l, (0, n.Z)({}, a, { ref: r }))
          );
        });
        return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
      }, {});
      function l(e, t) {
        e && (0, i.flushSync)(() => e.dispatchEvent(t));
      }
    },
    9143: function (e, t, r) {
      "use strict";
      r.d(t, {
        A4: function () {
          return l;
        },
        g7: function () {
          return s;
        },
      });
      var n = r(2110),
        o = r(2265),
        i = r(1266);
      let s = (0, o.forwardRef)((e, t) => {
        let { children: r, ...i } = e,
          s = o.Children.toArray(r),
          l = s.find(u);
        if (l) {
          let e = l.props.children,
            r = s.map((t) =>
              t !== l
                ? t
                : o.Children.count(e) > 1
                ? o.Children.only(null)
                : (0, o.isValidElement)(e)
                ? e.props.children
                : null
            );
          return (0, o.createElement)(
            a,
            (0, n.Z)({}, i, { ref: t }),
            (0, o.isValidElement)(e) ? (0, o.cloneElement)(e, void 0, r) : null
          );
        }
        return (0, o.createElement)(a, (0, n.Z)({}, i, { ref: t }), r);
      });
      s.displayName = "Slot";
      let a = (0, o.forwardRef)((e, t) => {
        let { children: r, ...n } = e;
        return (0, o.isValidElement)(r)
          ? (0, o.cloneElement)(r, {
              ...(function (e, t) {
                let r = { ...t };
                for (let n in t) {
                  let o = e[n],
                    i = t[n];
                  /^on[A-Z]/.test(n)
                    ? o && i
                      ? (r[n] = (...e) => {
                          i(...e), o(...e);
                        })
                      : o && (r[n] = o)
                    : "style" === n
                    ? (r[n] = { ...o, ...i })
                    : "className" === n &&
                      (r[n] = [o, i].filter(Boolean).join(" "));
                }
                return { ...e, ...r };
              })(n, r.props),
              ref: t ? (0, i.F)(t, r.ref) : r.ref,
            })
          : o.Children.count(r) > 1
          ? o.Children.only(null)
          : null;
      });
      a.displayName = "SlotClone";
      let l = ({ children: e }) => (0, o.createElement)(o.Fragment, null, e);
      function u(e) {
        return (0, o.isValidElement)(e) && e.type === l;
      }
    },
    9830: function (e, t, r) {
      "use strict";
      r.d(t, {
        W: function () {
          return o;
        },
      });
      var n = r(2265);
      function o(e) {
        let t = (0, n.useRef)(e);
        return (
          (0, n.useEffect)(() => {
            t.current = e;
          }),
          (0, n.useMemo)(
            () =>
              (...e) => {
                var r;
                return null === (r = t.current) || void 0 === r
                  ? void 0
                  : r.call(t, ...e);
              },
            []
          )
        );
      }
    },
    9310: function (e, t, r) {
      "use strict";
      r.d(t, {
        T: function () {
          return i;
        },
      });
      var n = r(2265),
        o = r(9830);
      function i({ prop: e, defaultProp: t, onChange: r = () => {} }) {
        let [i, s] = (function ({ defaultProp: e, onChange: t }) {
            let r = (0, n.useState)(e),
              [i] = r,
              s = (0, n.useRef)(i),
              a = (0, o.W)(t);
            return (
              (0, n.useEffect)(() => {
                s.current !== i && (a(i), (s.current = i));
              }, [i, s, a]),
              r
            );
          })({ defaultProp: t, onChange: r }),
          a = void 0 !== e,
          l = a ? e : i,
          u = (0, o.W)(r);
        return [
          l,
          (0, n.useCallback)(
            (t) => {
              if (a) {
                let r = "function" == typeof t ? t(e) : t;
                r !== e && u(r);
              } else s(t);
            },
            [a, e, s, u]
          ),
        ];
      }
    },
    2618: function (e, t, r) {
      "use strict";
      r.d(t, {
        b: function () {
          return o;
        },
      });
      var n = r(2265);
      let o = (null == globalThis ? void 0 : globalThis.document)
        ? n.useLayoutEffect
        : () => {};
    },
    7742: function (e, t, r) {
      "use strict";
      r.d(t, {
        j: function () {
          return i;
        },
      });
      let n = (e) => ("boolean" == typeof e ? "".concat(e) : 0 === e ? "0" : e),
        o = function () {
          for (var e, t, r = 0, n = ""; r < arguments.length; )
            (e = arguments[r++]) &&
              (t = (function e(t) {
                var r,
                  n,
                  o = "";
                if ("string" == typeof t || "number" == typeof t) o += t;
                else if ("object" == typeof t) {
                  if (Array.isArray(t))
                    for (r = 0; r < t.length; r++)
                      t[r] && (n = e(t[r])) && (o && (o += " "), (o += n));
                  else for (r in t) t[r] && (o && (o += " "), (o += r));
                }
                return o;
              })(e)) &&
              (n && (n += " "), (n += t));
          return n;
        },
        i = (e, t) => (r) => {
          var i;
          if ((null == t ? void 0 : t.variants) == null)
            return o(
              e,
              null == r ? void 0 : r.class,
              null == r ? void 0 : r.className
            );
          let { variants: s, defaultVariants: a } = t,
            l = Object.keys(s).map((e) => {
              let t = null == r ? void 0 : r[e],
                o = null == a ? void 0 : a[e];
              if (null === t) return null;
              let i = n(t) || n(o);
              return s[e][i];
            }),
            u =
              r &&
              Object.entries(r).reduce((e, t) => {
                let [r, n] = t;
                return void 0 === n || (e[r] = n), e;
              }, {});
          return o(
            e,
            l,
            null == t
              ? void 0
              : null === (i = t.compoundVariants) || void 0 === i
              ? void 0
              : i.reduce((e, t) => {
                  let { class: r, className: n, ...o } = t;
                  return Object.entries(o).every((e) => {
                    let [t, r] = e;
                    return Array.isArray(r)
                      ? r.includes({ ...a, ...u }[t])
                      : { ...a, ...u }[t] === r;
                  })
                    ? [...e, r, n]
                    : e;
                }, []),
            null == r ? void 0 : r.class,
            null == r ? void 0 : r.className
          );
        };
    },
    3167: function (e, t, r) {
      "use strict";
      function n() {
        for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)
          (e = arguments[r]) &&
            (t = (function e(t) {
              var r,
                n,
                o = "";
              if ("string" == typeof t || "number" == typeof t) o += t;
              else if ("object" == typeof t) {
                if (Array.isArray(t)) {
                  var i = t.length;
                  for (r = 0; r < i; r++)
                    t[r] && (n = e(t[r])) && (o && (o += " "), (o += n));
                } else for (n in t) t[n] && (o && (o += " "), (o += n));
              }
              return o;
            })(e)) &&
            (n && (n += " "), (n += t));
        return n;
      }
      r.d(t, {
        W: function () {
          return n;
        },
      });
    },
    1367: function (e, t, r) {
      "use strict";
      r.d(t, {
        m6: function () {
          return P;
        },
      });
      let n = /^\[(.+)\]$/;
      function o(e, t) {
        let r = e;
        return (
          t.split("-").forEach((e) => {
            r.nextPart.has(e) ||
              r.nextPart.set(e, { nextPart: new Map(), validators: [] }),
              (r = r.nextPart.get(e));
          }),
          r
        );
      }
      let i = /\s+/;
      function s() {
        let e,
          t,
          r = 0,
          n = "";
        for (; r < arguments.length; )
          (e = arguments[r++]) &&
            (t = (function e(t) {
              let r;
              if ("string" == typeof t) return t;
              let n = "";
              for (let o = 0; o < t.length; o++)
                t[o] && (r = e(t[o])) && (n && (n += " "), (n += r));
              return n;
            })(e)) &&
            (n && (n += " "), (n += t));
        return n;
      }
      function a(e) {
        let t = (t) => t[e] || [];
        return (t.isThemeGetter = !0), t;
      }
      let l = /^\[(?:([a-z-]+):)?(.+)\]$/i,
        u = /^\d+\/\d+$/,
        f = new Set(["px", "full", "screen"]),
        c = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        d =
          /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        p = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
        h = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
        g =
          /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
      function b(e) {
        return m(e) || f.has(e) || u.test(e);
      }
      function y(e) {
        return U(e, "length", I);
      }
      function m(e) {
        return !!e && !Number.isNaN(Number(e));
      }
      function v(e) {
        return U(e, "number", m);
      }
      function w(e) {
        return !!e && Number.isInteger(Number(e));
      }
      function x(e) {
        return e.endsWith("%") && m(e.slice(0, -1));
      }
      function E(e) {
        return l.test(e);
      }
      function A(e) {
        return c.test(e);
      }
      let k = new Set(["length", "size", "percentage"]);
      function B(e) {
        return U(e, k, z);
      }
      function C(e) {
        return U(e, "position", z);
      }
      let N = new Set(["image", "url"]);
      function T(e) {
        return U(e, N, M);
      }
      function O(e) {
        return U(e, "", j);
      }
      function S() {
        return !0;
      }
      function U(e, t, r) {
        let n = l.exec(e);
        return (
          !!n &&
          (n[1] ? ("string" == typeof t ? n[1] === t : t.has(n[1])) : r(n[2]))
        );
      }
      function I(e) {
        return d.test(e) && !p.test(e);
      }
      function z() {
        return !1;
      }
      function j(e) {
        return h.test(e);
      }
      function M(e) {
        return g.test(e);
      }
      let P = (function (e) {
        let t, r, a;
        let l = function (i) {
          var s;
          return (
            (r = (t = {
              cache: (function (e) {
                if (e < 1) return { get: () => void 0, set: () => {} };
                let t = 0,
                  r = new Map(),
                  n = new Map();
                function o(o, i) {
                  r.set(o, i), ++t > e && ((t = 0), (n = r), (r = new Map()));
                }
                return {
                  get(e) {
                    let t = r.get(e);
                    return void 0 !== t
                      ? t
                      : void 0 !== (t = n.get(e))
                      ? (o(e, t), t)
                      : void 0;
                  },
                  set(e, t) {
                    r.has(e) ? r.set(e, t) : o(e, t);
                  },
                };
              })((s = [].reduce((e, t) => t(e), e())).cacheSize),
              splitModifiers: (function (e) {
                let t = e.separator,
                  r = 1 === t.length,
                  n = t[0],
                  o = t.length;
                return function (e) {
                  let i;
                  let s = [],
                    a = 0,
                    l = 0;
                  for (let u = 0; u < e.length; u++) {
                    let f = e[u];
                    if (0 === a) {
                      if (f === n && (r || e.slice(u, u + o) === t)) {
                        s.push(e.slice(l, u)), (l = u + o);
                        continue;
                      }
                      if ("/" === f) {
                        i = u;
                        continue;
                      }
                    }
                    "[" === f ? a++ : "]" === f && a--;
                  }
                  let u = 0 === s.length ? e : e.substring(l),
                    f = u.startsWith("!"),
                    c = f ? u.substring(1) : u;
                  return {
                    modifiers: s,
                    hasImportantModifier: f,
                    baseClassName: c,
                    maybePostfixModifierPosition: i && i > l ? i - l : void 0,
                  };
                };
              })(s),
              ...(function (e) {
                let t = (function (e) {
                    var t;
                    let { theme: r, prefix: n } = e,
                      i = { nextPart: new Map(), validators: [] };
                    return (
                      ((t = Object.entries(e.classGroups)),
                      n
                        ? t.map(([e, t]) => [
                            e,
                            t.map((e) =>
                              "string" == typeof e
                                ? n + e
                                : "object" == typeof e
                                ? Object.fromEntries(
                                    Object.entries(e).map(([e, t]) => [
                                      n + e,
                                      t,
                                    ])
                                  )
                                : e
                            ),
                          ])
                        : t).forEach(([e, t]) => {
                        (function e(t, r, n, i) {
                          t.forEach((t) => {
                            if ("string" == typeof t) {
                              ("" === t ? r : o(r, t)).classGroupId = n;
                              return;
                            }
                            if ("function" == typeof t) {
                              if (t.isThemeGetter) {
                                e(t(i), r, n, i);
                                return;
                              }
                              r.validators.push({
                                validator: t,
                                classGroupId: n,
                              });
                              return;
                            }
                            Object.entries(t).forEach(([t, s]) => {
                              e(s, o(r, t), n, i);
                            });
                          });
                        })(t, i, e, r);
                      }),
                      i
                    );
                  })(e),
                  {
                    conflictingClassGroups: r,
                    conflictingClassGroupModifiers: i,
                  } = e;
                return {
                  getClassGroupId: function (e) {
                    let r = e.split("-");
                    return (
                      "" === r[0] && 1 !== r.length && r.shift(),
                      (function e(t, r) {
                        if (0 === t.length) return r.classGroupId;
                        let n = t[0],
                          o = r.nextPart.get(n),
                          i = o ? e(t.slice(1), o) : void 0;
                        if (i) return i;
                        if (0 === r.validators.length) return;
                        let s = t.join("-");
                        return r.validators.find(({ validator: e }) => e(s))
                          ?.classGroupId;
                      })(r, t) ||
                        (function (e) {
                          if (n.test(e)) {
                            let t = n.exec(e)[1],
                              r = t?.substring(0, t.indexOf(":"));
                            if (r) return "arbitrary.." + r;
                          }
                        })(e)
                    );
                  },
                  getConflictingClassGroupIds: function (e, t) {
                    let n = r[e] || [];
                    return t && i[e] ? [...n, ...i[e]] : n;
                  },
                };
              })(s),
            }).cache.get),
            (a = t.cache.set),
            (l = u),
            u(i)
          );
        };
        function u(e) {
          let n = r(e);
          if (n) return n;
          let o = (function (e, t) {
            let {
                splitModifiers: r,
                getClassGroupId: n,
                getConflictingClassGroupIds: o,
              } = t,
              s = new Set();
            return e
              .trim()
              .split(i)
              .map((e) => {
                let {
                    modifiers: t,
                    hasImportantModifier: o,
                    baseClassName: i,
                    maybePostfixModifierPosition: s,
                  } = r(e),
                  a = n(s ? i.substring(0, s) : i),
                  l = !!s;
                if (!a) {
                  if (!s || !(a = n(i)))
                    return { isTailwindClass: !1, originalClassName: e };
                  l = !1;
                }
                let u = (function (e) {
                  if (e.length <= 1) return e;
                  let t = [],
                    r = [];
                  return (
                    e.forEach((e) => {
                      "[" === e[0]
                        ? (t.push(...r.sort(), e), (r = []))
                        : r.push(e);
                    }),
                    t.push(...r.sort()),
                    t
                  );
                })(t).join(":");
                return {
                  isTailwindClass: !0,
                  modifierId: o ? u + "!" : u,
                  classGroupId: a,
                  originalClassName: e,
                  hasPostfixModifier: l,
                };
              })
              .reverse()
              .filter((e) => {
                if (!e.isTailwindClass) return !0;
                let {
                    modifierId: t,
                    classGroupId: r,
                    hasPostfixModifier: n,
                  } = e,
                  i = t + r;
                return (
                  !s.has(i) &&
                  (s.add(i), o(r, n).forEach((e) => s.add(t + e)), !0)
                );
              })
              .reverse()
              .map((e) => e.originalClassName)
              .join(" ");
          })(e, t);
          return a(e, o), o;
        }
        return function () {
          return l(s.apply(null, arguments));
        };
      })(function () {
        let e = a("colors"),
          t = a("spacing"),
          r = a("blur"),
          n = a("brightness"),
          o = a("borderColor"),
          i = a("borderRadius"),
          s = a("borderSpacing"),
          l = a("borderWidth"),
          u = a("contrast"),
          f = a("grayscale"),
          c = a("hueRotate"),
          d = a("invert"),
          p = a("gap"),
          h = a("gradientColorStops"),
          g = a("gradientColorStopPositions"),
          k = a("inset"),
          N = a("margin"),
          U = a("opacity"),
          I = a("padding"),
          z = a("saturate"),
          j = a("scale"),
          M = a("sepia"),
          P = a("skew"),
          R = a("space"),
          L = a("translate"),
          _ = () => ["auto", "contain", "none"],
          $ = () => ["auto", "hidden", "clip", "visible", "scroll"],
          W = () => ["auto", E, t],
          G = () => [E, t],
          D = () => ["", b, y],
          F = () => ["auto", m, E],
          V = () => [
            "bottom",
            "center",
            "left",
            "left-bottom",
            "left-top",
            "right",
            "right-bottom",
            "right-top",
            "top",
          ],
          Z = () => ["solid", "dashed", "dotted", "double", "none"],
          Y = () => [
            "normal",
            "multiply",
            "screen",
            "overlay",
            "darken",
            "lighten",
            "color-dodge",
            "color-burn",
            "hard-light",
            "soft-light",
            "difference",
            "exclusion",
            "hue",
            "saturation",
            "color",
            "luminosity",
            "plus-lighter",
          ],
          q = () => [
            "start",
            "end",
            "center",
            "between",
            "around",
            "evenly",
            "stretch",
          ],
          X = () => ["", "0", E],
          H = () => [
            "auto",
            "avoid",
            "all",
            "avoid-page",
            "page",
            "left",
            "right",
            "column",
          ],
          J = () => [m, v],
          K = () => [m, E];
        return {
          cacheSize: 500,
          separator: ":",
          theme: {
            colors: [S],
            spacing: [b, y],
            blur: ["none", "", A, E],
            brightness: J(),
            borderColor: [e],
            borderRadius: ["none", "", "full", A, E],
            borderSpacing: G(),
            borderWidth: D(),
            contrast: J(),
            grayscale: X(),
            hueRotate: K(),
            invert: X(),
            gap: G(),
            gradientColorStops: [e],
            gradientColorStopPositions: [x, y],
            inset: W(),
            margin: W(),
            opacity: J(),
            padding: G(),
            saturate: J(),
            scale: J(),
            sepia: X(),
            skew: K(),
            space: G(),
            translate: G(),
          },
          classGroups: {
            aspect: [{ aspect: ["auto", "square", "video", E] }],
            container: ["container"],
            columns: [{ columns: [A] }],
            "break-after": [{ "break-after": H() }],
            "break-before": [{ "break-before": H() }],
            "break-inside": [
              {
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"],
              },
            ],
            "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
            box: [{ box: ["border", "content"] }],
            display: [
              "block",
              "inline-block",
              "inline",
              "flex",
              "inline-flex",
              "table",
              "inline-table",
              "table-caption",
              "table-cell",
              "table-column",
              "table-column-group",
              "table-footer-group",
              "table-header-group",
              "table-row-group",
              "table-row",
              "flow-root",
              "grid",
              "inline-grid",
              "contents",
              "list-item",
              "hidden",
            ],
            float: [{ float: ["right", "left", "none", "start", "end"] }],
            clear: [
              { clear: ["left", "right", "both", "none", "start", "end"] },
            ],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [
              { object: ["contain", "cover", "fill", "none", "scale-down"] },
            ],
            "object-position": [{ object: [...V(), E] }],
            overflow: [{ overflow: $() }],
            "overflow-x": [{ "overflow-x": $() }],
            "overflow-y": [{ "overflow-y": $() }],
            overscroll: [{ overscroll: _() }],
            "overscroll-x": [{ "overscroll-x": _() }],
            "overscroll-y": [{ "overscroll-y": _() }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{ inset: [k] }],
            "inset-x": [{ "inset-x": [k] }],
            "inset-y": [{ "inset-y": [k] }],
            start: [{ start: [k] }],
            end: [{ end: [k] }],
            top: [{ top: [k] }],
            right: [{ right: [k] }],
            bottom: [{ bottom: [k] }],
            left: [{ left: [k] }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{ z: ["auto", w, E] }],
            basis: [{ basis: W() }],
            "flex-direction": [
              { flex: ["row", "row-reverse", "col", "col-reverse"] },
            ],
            "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
            flex: [{ flex: ["1", "auto", "initial", "none", E] }],
            grow: [{ grow: X() }],
            shrink: [{ shrink: X() }],
            order: [{ order: ["first", "last", "none", w, E] }],
            "grid-cols": [{ "grid-cols": [S] }],
            "col-start-end": [{ col: ["auto", { span: ["full", w, E] }, E] }],
            "col-start": [{ "col-start": F() }],
            "col-end": [{ "col-end": F() }],
            "grid-rows": [{ "grid-rows": [S] }],
            "row-start-end": [{ row: ["auto", { span: [w, E] }, E] }],
            "row-start": [{ "row-start": F() }],
            "row-end": [{ "row-end": F() }],
            "grid-flow": [
              {
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"],
              },
            ],
            "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", E] }],
            "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", E] }],
            gap: [{ gap: [p] }],
            "gap-x": [{ "gap-x": [p] }],
            "gap-y": [{ "gap-y": [p] }],
            "justify-content": [{ justify: ["normal", ...q()] }],
            "justify-items": [
              { "justify-items": ["start", "end", "center", "stretch"] },
            ],
            "justify-self": [
              { "justify-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            "align-content": [{ content: ["normal", ...q(), "baseline"] }],
            "align-items": [
              { items: ["start", "end", "center", "baseline", "stretch"] },
            ],
            "align-self": [
              {
                self: ["auto", "start", "end", "center", "stretch", "baseline"],
              },
            ],
            "place-content": [{ "place-content": [...q(), "baseline"] }],
            "place-items": [
              {
                "place-items": [
                  "start",
                  "end",
                  "center",
                  "baseline",
                  "stretch",
                ],
              },
            ],
            "place-self": [
              { "place-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            p: [{ p: [I] }],
            px: [{ px: [I] }],
            py: [{ py: [I] }],
            ps: [{ ps: [I] }],
            pe: [{ pe: [I] }],
            pt: [{ pt: [I] }],
            pr: [{ pr: [I] }],
            pb: [{ pb: [I] }],
            pl: [{ pl: [I] }],
            m: [{ m: [N] }],
            mx: [{ mx: [N] }],
            my: [{ my: [N] }],
            ms: [{ ms: [N] }],
            me: [{ me: [N] }],
            mt: [{ mt: [N] }],
            mr: [{ mr: [N] }],
            mb: [{ mb: [N] }],
            ml: [{ ml: [N] }],
            "space-x": [{ "space-x": [R] }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{ "space-y": [R] }],
            "space-y-reverse": ["space-y-reverse"],
            w: [
              { w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", E, t] },
            ],
            "min-w": [{ "min-w": [E, t, "min", "max", "fit"] }],
            "max-w": [
              {
                "max-w": [
                  E,
                  t,
                  "none",
                  "full",
                  "min",
                  "max",
                  "fit",
                  "prose",
                  { screen: [A] },
                  A,
                ],
              },
            ],
            h: [
              { h: [E, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            "min-h": [
              { "min-h": [E, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            "max-h": [
              { "max-h": [E, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            size: [{ size: [E, t, "auto", "min", "max", "fit"] }],
            "font-size": [{ text: ["base", A, y] }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [
              {
                font: [
                  "thin",
                  "extralight",
                  "light",
                  "normal",
                  "medium",
                  "semibold",
                  "bold",
                  "extrabold",
                  "black",
                  v,
                ],
              },
            ],
            "font-family": [{ font: [S] }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
            tracking: [
              {
                tracking: [
                  "tighter",
                  "tight",
                  "normal",
                  "wide",
                  "wider",
                  "widest",
                  E,
                ],
              },
            ],
            "line-clamp": [{ "line-clamp": ["none", m, v] }],
            leading: [
              {
                leading: [
                  "none",
                  "tight",
                  "snug",
                  "normal",
                  "relaxed",
                  "loose",
                  b,
                  E,
                ],
              },
            ],
            "list-image": [{ "list-image": ["none", E] }],
            "list-style-type": [{ list: ["none", "disc", "decimal", E] }],
            "list-style-position": [{ list: ["inside", "outside"] }],
            "placeholder-color": [{ placeholder: [e] }],
            "placeholder-opacity": [{ "placeholder-opacity": [U] }],
            "text-alignment": [
              { text: ["left", "center", "right", "justify", "start", "end"] },
            ],
            "text-color": [{ text: [e] }],
            "text-opacity": [{ "text-opacity": [U] }],
            "text-decoration": [
              "underline",
              "overline",
              "line-through",
              "no-underline",
            ],
            "text-decoration-style": [{ decoration: [...Z(), "wavy"] }],
            "text-decoration-thickness": [
              { decoration: ["auto", "from-font", b, y] },
            ],
            "underline-offset": [{ "underline-offset": ["auto", b, E] }],
            "text-decoration-color": [{ decoration: [e] }],
            "text-transform": [
              "uppercase",
              "lowercase",
              "capitalize",
              "normal-case",
            ],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
            indent: [{ indent: G() }],
            "vertical-align": [
              {
                align: [
                  "baseline",
                  "top",
                  "middle",
                  "bottom",
                  "text-top",
                  "text-bottom",
                  "sub",
                  "super",
                  E,
                ],
              },
            ],
            whitespace: [
              {
                whitespace: [
                  "normal",
                  "nowrap",
                  "pre",
                  "pre-line",
                  "pre-wrap",
                  "break-spaces",
                ],
              },
            ],
            break: [{ break: ["normal", "words", "all", "keep"] }],
            hyphens: [{ hyphens: ["none", "manual", "auto"] }],
            content: [{ content: ["none", E] }],
            "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
            "bg-clip": [
              { "bg-clip": ["border", "padding", "content", "text"] },
            ],
            "bg-opacity": [{ "bg-opacity": [U] }],
            "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
            "bg-position": [{ bg: [...V(), C] }],
            "bg-repeat": [
              {
                bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }],
              },
            ],
            "bg-size": [{ bg: ["auto", "cover", "contain", B] }],
            "bg-image": [
              {
                bg: [
                  "none",
                  {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"],
                  },
                  T,
                ],
              },
            ],
            "bg-color": [{ bg: [e] }],
            "gradient-from-pos": [{ from: [g] }],
            "gradient-via-pos": [{ via: [g] }],
            "gradient-to-pos": [{ to: [g] }],
            "gradient-from": [{ from: [h] }],
            "gradient-via": [{ via: [h] }],
            "gradient-to": [{ to: [h] }],
            rounded: [{ rounded: [i] }],
            "rounded-s": [{ "rounded-s": [i] }],
            "rounded-e": [{ "rounded-e": [i] }],
            "rounded-t": [{ "rounded-t": [i] }],
            "rounded-r": [{ "rounded-r": [i] }],
            "rounded-b": [{ "rounded-b": [i] }],
            "rounded-l": [{ "rounded-l": [i] }],
            "rounded-ss": [{ "rounded-ss": [i] }],
            "rounded-se": [{ "rounded-se": [i] }],
            "rounded-ee": [{ "rounded-ee": [i] }],
            "rounded-es": [{ "rounded-es": [i] }],
            "rounded-tl": [{ "rounded-tl": [i] }],
            "rounded-tr": [{ "rounded-tr": [i] }],
            "rounded-br": [{ "rounded-br": [i] }],
            "rounded-bl": [{ "rounded-bl": [i] }],
            "border-w": [{ border: [l] }],
            "border-w-x": [{ "border-x": [l] }],
            "border-w-y": [{ "border-y": [l] }],
            "border-w-s": [{ "border-s": [l] }],
            "border-w-e": [{ "border-e": [l] }],
            "border-w-t": [{ "border-t": [l] }],
            "border-w-r": [{ "border-r": [l] }],
            "border-w-b": [{ "border-b": [l] }],
            "border-w-l": [{ "border-l": [l] }],
            "border-opacity": [{ "border-opacity": [U] }],
            "border-style": [{ border: [...Z(), "hidden"] }],
            "divide-x": [{ "divide-x": [l] }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{ "divide-y": [l] }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{ "divide-opacity": [U] }],
            "divide-style": [{ divide: Z() }],
            "border-color": [{ border: [o] }],
            "border-color-x": [{ "border-x": [o] }],
            "border-color-y": [{ "border-y": [o] }],
            "border-color-t": [{ "border-t": [o] }],
            "border-color-r": [{ "border-r": [o] }],
            "border-color-b": [{ "border-b": [o] }],
            "border-color-l": [{ "border-l": [o] }],
            "divide-color": [{ divide: [o] }],
            "outline-style": [{ outline: ["", ...Z()] }],
            "outline-offset": [{ "outline-offset": [b, E] }],
            "outline-w": [{ outline: [b, y] }],
            "outline-color": [{ outline: [e] }],
            "ring-w": [{ ring: D() }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{ ring: [e] }],
            "ring-opacity": [{ "ring-opacity": [U] }],
            "ring-offset-w": [{ "ring-offset": [b, y] }],
            "ring-offset-color": [{ "ring-offset": [e] }],
            shadow: [{ shadow: ["", "inner", "none", A, O] }],
            "shadow-color": [{ shadow: [S] }],
            opacity: [{ opacity: [U] }],
            "mix-blend": [{ "mix-blend": Y() }],
            "bg-blend": [{ "bg-blend": Y() }],
            filter: [{ filter: ["", "none"] }],
            blur: [{ blur: [r] }],
            brightness: [{ brightness: [n] }],
            contrast: [{ contrast: [u] }],
            "drop-shadow": [{ "drop-shadow": ["", "none", A, E] }],
            grayscale: [{ grayscale: [f] }],
            "hue-rotate": [{ "hue-rotate": [c] }],
            invert: [{ invert: [d] }],
            saturate: [{ saturate: [z] }],
            sepia: [{ sepia: [M] }],
            "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
            "backdrop-blur": [{ "backdrop-blur": [r] }],
            "backdrop-brightness": [{ "backdrop-brightness": [n] }],
            "backdrop-contrast": [{ "backdrop-contrast": [u] }],
            "backdrop-grayscale": [{ "backdrop-grayscale": [f] }],
            "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [c] }],
            "backdrop-invert": [{ "backdrop-invert": [d] }],
            "backdrop-opacity": [{ "backdrop-opacity": [U] }],
            "backdrop-saturate": [{ "backdrop-saturate": [z] }],
            "backdrop-sepia": [{ "backdrop-sepia": [M] }],
            "border-collapse": [{ border: ["collapse", "separate"] }],
            "border-spacing": [{ "border-spacing": [s] }],
            "border-spacing-x": [{ "border-spacing-x": [s] }],
            "border-spacing-y": [{ "border-spacing-y": [s] }],
            "table-layout": [{ table: ["auto", "fixed"] }],
            caption: [{ caption: ["top", "bottom"] }],
            transition: [
              {
                transition: [
                  "none",
                  "all",
                  "",
                  "colors",
                  "opacity",
                  "shadow",
                  "transform",
                  E,
                ],
              },
            ],
            duration: [{ duration: K() }],
            ease: [{ ease: ["linear", "in", "out", "in-out", E] }],
            delay: [{ delay: K() }],
            animate: [
              { animate: ["none", "spin", "ping", "pulse", "bounce", E] },
            ],
            transform: [{ transform: ["", "gpu", "none"] }],
            scale: [{ scale: [j] }],
            "scale-x": [{ "scale-x": [j] }],
            "scale-y": [{ "scale-y": [j] }],
            rotate: [{ rotate: [w, E] }],
            "translate-x": [{ "translate-x": [L] }],
            "translate-y": [{ "translate-y": [L] }],
            "skew-x": [{ "skew-x": [P] }],
            "skew-y": [{ "skew-y": [P] }],
            "transform-origin": [
              {
                origin: [
                  "center",
                  "top",
                  "top-right",
                  "right",
                  "bottom-right",
                  "bottom",
                  "bottom-left",
                  "left",
                  "top-left",
                  E,
                ],
              },
            ],
            accent: [{ accent: ["auto", e] }],
            appearance: [{ appearance: ["none", "auto"] }],
            cursor: [
              {
                cursor: [
                  "auto",
                  "default",
                  "pointer",
                  "wait",
                  "text",
                  "move",
                  "help",
                  "not-allowed",
                  "none",
                  "context-menu",
                  "progress",
                  "cell",
                  "crosshair",
                  "vertical-text",
                  "alias",
                  "copy",
                  "no-drop",
                  "grab",
                  "grabbing",
                  "all-scroll",
                  "col-resize",
                  "row-resize",
                  "n-resize",
                  "e-resize",
                  "s-resize",
                  "w-resize",
                  "ne-resize",
                  "nw-resize",
                  "se-resize",
                  "sw-resize",
                  "ew-resize",
                  "ns-resize",
                  "nesw-resize",
                  "nwse-resize",
                  "zoom-in",
                  "zoom-out",
                  E,
                ],
              },
            ],
            "caret-color": [{ caret: [e] }],
            "pointer-events": [{ "pointer-events": ["none", "auto"] }],
            resize: [{ resize: ["none", "y", "x", ""] }],
            "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
            "scroll-m": [{ "scroll-m": G() }],
            "scroll-mx": [{ "scroll-mx": G() }],
            "scroll-my": [{ "scroll-my": G() }],
            "scroll-ms": [{ "scroll-ms": G() }],
            "scroll-me": [{ "scroll-me": G() }],
            "scroll-mt": [{ "scroll-mt": G() }],
            "scroll-mr": [{ "scroll-mr": G() }],
            "scroll-mb": [{ "scroll-mb": G() }],
            "scroll-ml": [{ "scroll-ml": G() }],
            "scroll-p": [{ "scroll-p": G() }],
            "scroll-px": [{ "scroll-px": G() }],
            "scroll-py": [{ "scroll-py": G() }],
            "scroll-ps": [{ "scroll-ps": G() }],
            "scroll-pe": [{ "scroll-pe": G() }],
            "scroll-pt": [{ "scroll-pt": G() }],
            "scroll-pr": [{ "scroll-pr": G() }],
            "scroll-pb": [{ "scroll-pb": G() }],
            "scroll-pl": [{ "scroll-pl": G() }],
            "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
            "snap-stop": [{ snap: ["normal", "always"] }],
            "snap-type": [{ snap: ["none", "x", "y", "both"] }],
            "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
            touch: [{ touch: ["auto", "none", "manipulation"] }],
            "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
            "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{ select: ["none", "text", "all", "auto"] }],
            "will-change": [
              { "will-change": ["auto", "scroll", "contents", "transform", E] },
            ],
            fill: [{ fill: [e, "none"] }],
            "stroke-w": [{ stroke: [b, y, v] }],
            stroke: [{ stroke: [e, "none"] }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [
              { "forced-color-adjust": ["auto", "none"] },
            ],
          },
          conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: [
              "inset-x",
              "inset-y",
              "start",
              "end",
              "top",
              "right",
              "bottom",
              "left",
            ],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": [
              "fvn-ordinal",
              "fvn-slashed-zero",
              "fvn-figure",
              "fvn-spacing",
              "fvn-fraction",
            ],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: [
              "rounded-s",
              "rounded-e",
              "rounded-t",
              "rounded-r",
              "rounded-b",
              "rounded-l",
              "rounded-ss",
              "rounded-se",
              "rounded-ee",
              "rounded-es",
              "rounded-tl",
              "rounded-tr",
              "rounded-br",
              "rounded-bl",
            ],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": [
              "border-w-s",
              "border-w-e",
              "border-w-t",
              "border-w-r",
              "border-w-b",
              "border-w-l",
            ],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": [
              "border-color-t",
              "border-color-r",
              "border-color-b",
              "border-color-l",
            ],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": [
              "scroll-mx",
              "scroll-my",
              "scroll-ms",
              "scroll-me",
              "scroll-mt",
              "scroll-mr",
              "scroll-mb",
              "scroll-ml",
            ],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": [
              "scroll-px",
              "scroll-py",
              "scroll-ps",
              "scroll-pe",
              "scroll-pt",
              "scroll-pr",
              "scroll-pb",
              "scroll-pl",
            ],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"],
          },
          conflictingClassGroupModifiers: { "font-size": ["leading"] },
        };
      });
    },
  },
]);
