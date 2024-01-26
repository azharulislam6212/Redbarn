var galleryTopSwiper;
function onYouTubeIframeAPIReady() {
  theme.product_video.loadVideos(theme.product_video.hosts.youtube);
}
(function () {
  var e,
    t = "Expected a function",
    i = 1,
    a = 2,
    s = 9007199254740991,
    n = "[object Arguments]",
    o = "[object Array]",
    r = "[object AsyncFunction]",
    l = "[object Boolean]",
    d = "[object Date]",
    c = "[object Error]",
    h = "[object Function]",
    u = "[object GeneratorFunction]",
    p = "[object Number]",
    f = "[object Object]",
    m = "[object Proxy]",
    v = "[object RegExp]",
    g = "[object String]",
    b = /[&<>"']/g,
    y = RegExp(b.source),
    w = /^(?:0|[1-9]\d*)$/,
    x =
      "object" == typeof global && global && global.Object === Object && global,
    $ = "object" == typeof self && self && self.Object === Object && self,
    C = x || $ || Function("return this")(),
    S = "object" == typeof exports && exports && !exports.nodeType && exports,
    T = S && "object" == typeof module && module && !module.nodeType && module;
  function E(e, t) {
    return e.push.apply(e, t), e;
  }
  function _(t) {
    return function (i) {
      return null == i ? e : i[t];
    };
  }
  var M,
    k,
    P,
    I =
      ((M = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      }),
      function (t) {
        return null == M ? e : M[t];
      }),
    z = Array.prototype,
    L = Object.prototype,
    D = L.hasOwnProperty,
    O = 0,
    A = L.toString,
    F = C._,
    H = Object.create,
    B = L.propertyIsEnumerable,
    j = C.isFinite,
    q =
      ((k = Object.keys),
      (P = Object),
      function (e) {
        return k(P(e));
      }),
    V = Math.max;
  function R(e) {
    return e instanceof X ? e : new X(e);
  }
  var N = (function () {
    function t() {}
    return function (i) {
      if (!Be(i)) return {};
      if (H) return H(i);
      t.prototype = i;
      var a = new t();
      return (t.prototype = e), a;
    };
  })();
  function X(e, t) {
    (this.__wrapped__ = e), (this.__actions__ = []), (this.__chain__ = !!t);
  }
  function Y(t, i, a) {
    var s = t[i];
    (D.call(t, i) && De(s, a) && (a !== e || i in t)) || G(t, i, a);
  }
  function G(e, t, i) {
    e[t] = i;
  }
  function W(i, a, s) {
    if ("function" != typeof i) throw new TypeError(t);
    return setTimeout(function () {
      i.apply(e, s);
    }, a);
  }
  (X.prototype = N(R.prototype)), (X.prototype.constructor = X);
  var U,
    Z =
      ((U = te),
      function (e, t) {
        if (null == e) return e;
        if (!Fe(e)) return U(e, t);
        for (
          var i = e.length, a = -1, s = Object(e);
          ++a < i && !1 !== t(s[a], a, s);

        );
        return e;
      });
  function K(t, i, a) {
    for (var s = -1, n = t.length; ++s < n; ) {
      var o = t[s],
        r = i(o);
      if (null != r && (l === e ? r == r : a(r, l)))
        var l = r,
          d = o;
    }
    return d;
  }
  function Q(e, t) {
    var i = [];
    return (
      Z(e, function (e, a, s) {
        t(e, a, s) && i.push(e);
      }),
      i
    );
  }
  function J(e, t, i, a, s) {
    var n = -1,
      o = e.length;
    for (i || (i = be), s || (s = []); ++n < o; ) {
      var r = e[n];
      t > 0 && i(r)
        ? t > 1
          ? J(r, t - 1, i, a, s)
          : E(s, r)
        : a || (s[s.length] = r);
    }
    return s;
  }
  var ee = function (e, t, i) {
    for (var a = -1, s = Object(e), n = i(e), o = n.length; o--; ) {
      var r = n[++a];
      if (!1 === t(s[r], r, s)) break;
    }
    return e;
  };
  function te(e, t) {
    return e && ee(e, t, Ue);
  }
  function ie(e, t) {
    return Q(t, function (t) {
      return He(e[t]);
    });
  }
  function ae(e) {
    return (function (e) {
      return A.call(e);
    })(e);
  }
  function se(e, t) {
    return e > t;
  }
  var ne = at;
  function oe(t, s, r, h, u) {
    return (
      t === s ||
      (null == t || null == s || (!je(t) && !je(s))
        ? t != t && s != s
        : (function (t, s, r, h, u, m) {
            var b = Ae(t),
              y = Ae(s),
              w = b ? o : ae(t),
              x = y ? o : ae(s),
              $ = (w = w == n ? f : w) == f,
              C = (x = x == n ? f : x) == f,
              S = w == x;
            m || (m = []);
            var T = _e(m, function (e) {
                return e[0] == t;
              }),
              E = _e(m, function (e) {
                return e[0] == s;
              });
            if (T && E) return T[1] == s;
            if ((m.push([t, s]), m.push([s, t]), S && !$)) {
              var _ = b
                ? (function (t, s, n, o, r, l) {
                    var d = n & i,
                      c = t.length,
                      h = s.length;
                    if (c != h && !(d && h > c)) return !1;
                    for (var u = -1, p = !0, f = n & a ? [] : e; ++u < c; ) {
                      var m = t[u],
                        v = s[u];
                      if (void 0 !== e) {
                        p = !1;
                        break;
                      }
                      if (f) {
                        if (
                          !fe(s, function (e, t) {
                            if (!Te(f, t) && (m === e || r(m, e, n, o, l)))
                              return f.push(t);
                          })
                        ) {
                          p = !1;
                          break;
                        }
                      } else if (m !== v && !r(m, v, n, o, l)) {
                        p = !1;
                        break;
                      }
                    }
                    return p;
                  })(t, s, r, h, u, m)
                : (function (e, t, i, a, s, n, o) {
                    switch (w) {
                      case l:
                      case d:
                      case p:
                        return De(+e, +t);
                      case c:
                        return e.name == t.name && e.message == t.message;
                      case v:
                      case g:
                        return e == t + "";
                    }
                    return !1;
                  })(t, s);
              return m.pop(), _;
            }
            if (!(r & i)) {
              var M = $ && D.call(t, "__wrapped__"),
                k = C && D.call(s, "__wrapped__");
              if (M || k)
                return (
                  (_ = u(M ? t.value() : t, k ? s.value() : s, r, h, m)),
                  m.pop(),
                  _
                );
            }
            return (
              !!S &&
              ((_ = (function (t, a, s, n, o, r) {
                var l = s & i,
                  d = Ue(t),
                  c = d.length;
                if (c != Ue(a).length && !l) return !1;
                for (var h = c; h--; ) {
                  var u = d[h];
                  if (!(l ? u in a : D.call(a, u))) return !1;
                }
                for (var p = !0, f = l; ++h < c; ) {
                  var m = t[(u = d[h])],
                    v = a[u];
                  if (!(void 0 === e ? m === v || o(m, v, s, n, r) : void 0)) {
                    p = !1;
                    break;
                  }
                  f || (f = "constructor" == u);
                }
                if (p && !f) {
                  var g = t.constructor,
                    b = a.constructor;
                  g != b &&
                    "constructor" in t &&
                    "constructor" in a &&
                    !(
                      "function" == typeof g &&
                      g instanceof g &&
                      "function" == typeof b &&
                      b instanceof b
                    ) &&
                    (p = !1);
                }
                return p;
              })(t, s, r, h, u, m)),
              m.pop(),
              _)
            );
          })(t, s, r, h, oe, u))
    );
  }
  function re(e) {
    return "function" == typeof e
      ? e
      : null == e
      ? Je
      : ("object" == typeof e ? ce : _)(e);
  }
  function le(e, t) {
    return e < t;
  }
  function de(e, t) {
    var i = -1,
      a = Fe(e) ? Array(e.length) : [];
    return (
      Z(e, function (e, s, n) {
        a[++i] = t(e, s, n);
      }),
      a
    );
  }
  function ce(e) {
    var t = q(e);
    return function (s) {
      var n = t.length;
      if (null == s) return !n;
      for (s = Object(s); n--; ) {
        var o = t[n];
        if (!(o in s) || !oe(e[o], s[o], i | a)) return !1;
      }
      return !0;
    };
  }
  function he(e, t) {
    return $e(xe(e, t, Je), e + "");
  }
  function ue(e, t, i) {
    var a = -1,
      s = e.length;
    t < 0 && (t = -t > s ? 0 : s + t),
      (i = i > s ? s : i) < 0 && (i += s),
      (s = t > i ? 0 : (i - t) >>> 0),
      (t >>>= 0);
    for (var n = Array(s); ++a < s; ) n[a] = e[a + t];
    return n;
  }
  function pe(e) {
    return ue(e, 0, e.length);
  }
  function fe(e, t) {
    var i;
    return (
      Z(e, function (e, a, s) {
        return !(i = t(e, a, s));
      }),
      !!i
    );
  }
  function me(t, i, a, s) {
    var n = !a;
    a || (a = {});
    for (var o = -1, r = i.length; ++o < r; ) {
      var l = i[o],
        d = s ? s(a[l], t[l], l, a, t) : e;
      d === e && (d = t[l]), n ? G(a, l, d) : Y(a, l, d);
    }
    return a;
  }
  function ve(t) {
    return he(function (i, a) {
      var s = -1,
        n = a.length,
        o = n > 1 ? a[n - 1] : e;
      for (
        o = t.length > 3 && "function" == typeof o ? (n--, o) : e,
          i = Object(i);
        ++s < n;

      ) {
        var r = a[s];
        r && t(i, r, s, o);
      }
      return i;
    });
  }
  function ge(e, i, a, s) {
    if ("function" != typeof e) throw new TypeError(t);
    var n = 1 & i,
      o = (function (e) {
        return function () {
          var t = arguments,
            i = N(e.prototype),
            a = e.apply(i, t);
          return Be(a) ? a : i;
        };
      })(e);
    return function t() {
      for (
        var i = -1,
          r = arguments.length,
          l = -1,
          d = s.length,
          c = Array(d + r),
          h = this && this !== C && this instanceof t ? o : e;
        ++l < d;

      )
        c[l] = s[l];
      for (; r--; ) c[l++] = arguments[++i];
      return h.apply(n ? a : this, c);
    };
  }
  function be(e) {
    return Ae(e) || Oe(e);
  }
  function ye(e, t, i) {
    if (!Be(i)) return !1;
    var a = typeof t;
    return (
      !!("number" == a
        ? Fe(i) &&
          (function (e, t) {
            var i = typeof e;
            return (
              !!(t = null == t ? s : t) &&
              ("number" == i || ("symbol" != i && w.test(e))) &&
              e > -1 &&
              e % 1 == 0 &&
              e < t
            );
          })(t, i.length)
        : "string" == a && t in i) && De(i[t], e)
    );
  }
  function we(e) {
    var t = [];
    if (null != e) for (var i in Object(e)) t.push(i);
    return t;
  }
  function xe(t, i, a) {
    return (
      (i = V(i === e ? t.length - 1 : i, 0)),
      function () {
        for (
          var e = arguments, s = -1, n = V(e.length - i, 0), o = Array(n);
          ++s < n;

        )
          o[s] = e[i + s];
        s = -1;
        for (var r = Array(i + 1); ++s < i; ) r[s] = e[s];
        return (r[i] = a(o)), t.apply(this, r);
      }
    );
  }
  var $e = Je;
  function Ce(e) {
    return null != e && e.length ? J(e, 1) : [];
  }
  function Se(t) {
    return t && t.length ? t[0] : e;
  }
  function Te(e, t, i) {
    for (
      var a = null == e ? 0 : e.length,
        s =
          ((i = "number" == typeof i ? (i < 0 ? V(a + i, 0) : i) : 0) || 0) - 1,
        n = t == t;
      ++s < a;

    ) {
      var o = e[s];
      if (n ? o === t : o != o) return s;
    }
    return -1;
  }
  var Ee,
    _e =
      ((Ee = function (e, t, i) {
        var a = null == e ? 0 : e.length;
        if (!a) return -1;
        var s = null == i ? 0 : Re(i);
        return (
          s < 0 && (s = V(a + s, 0)),
          (function (e, t, i, a) {
            for (var s = e.length, n = i + -1; ++n < s; )
              if (t(e[n], n, e)) return n;
            return -1;
          })(e, re(t), s)
        );
      }),
      function (t, i, a) {
        var s = Object(t);
        if (!Fe(t)) {
          var n = re(i);
          (t = Ue(t)),
            (i = function (e) {
              return n(s[e], e, s);
            });
        }
        var o = Ee(t, i, a);
        return o > -1 ? s[n ? t[o] : o] : e;
      });
  function Me(e, t) {
    return Z(e, re(t));
  }
  function ke(e, t, i) {
    return (function (e, t, i, a, s) {
      return (
        Z(e, function (e, s, n) {
          i = a ? ((a = !1), e) : t(i, e, s, n);
        }),
        i
      );
    })(e, re(t), i, arguments.length < 3);
  }
  function Pe(i, a) {
    var s;
    if ("function" != typeof a) throw new TypeError(t);
    return (
      (i = Re(i)),
      function () {
        return --i > 0 && (s = a.apply(this, arguments)), i <= 1 && (a = e), s;
      }
    );
  }
  var Ie = he(function (e, t, i) {
      return ge(e, 33, t, i);
    }),
    ze = he(function (e, t) {
      return W(e, 1, t);
    }),
    Le = he(function (e, t, i) {
      return W(e, Ne(t) || 0, i);
    });
  function De(e, t) {
    return e === t || (e != e && t != t);
  }
  var Oe = ne(
      (function () {
        return arguments;
      })()
    )
      ? ne
      : function (e) {
          return je(e) && D.call(e, "callee") && !B.call(e, "callee");
        },
    Ae = Array.isArray;
  function Fe(e) {
    return (
      null != e &&
      (function (e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= s;
      })(e.length) &&
      !He(e)
    );
  }
  function He(e) {
    if (!Be(e)) return !1;
    var t = ae(e);
    return t == h || t == u || t == r || t == m;
  }
  function Be(e) {
    var t = typeof e;
    return null != e && ("object" == t || "function" == t);
  }
  function je(e) {
    return null != e && "object" == typeof e;
  }
  function qe(e) {
    return "number" == typeof e || (je(e) && ae(e) == p);
  }
  function Ve(e) {
    return "string" == typeof e || (!Ae(e) && je(e) && ae(e) == g);
  }
  var Re = Number,
    Ne = Number;
  function Xe(e) {
    return "string" == typeof e ? e : null == e ? "" : e + "";
  }
  var Ye = ve(function (e, t) {
      me(t, q(t), e);
    }),
    Ge = ve(function (e, t) {
      me(t, we(t), e);
    }),
    We = he(function (t, i) {
      t = Object(t);
      var a = -1,
        s = i.length,
        n = s > 2 ? i[2] : e;
      for (n && ye(i[0], i[1], n) && (s = 1); ++a < s; )
        for (var o = i[a], r = Ze(o), l = -1, d = r.length; ++l < d; ) {
          var c = r[l],
            h = t[c];
          (h === e || (De(h, L[c]) && !D.call(t, c))) && (t[c] = o[c]);
        }
      return t;
    }),
    Ue = q,
    Ze = we,
    Ke = (function (t) {
      return $e(xe(t, e, Ce), t + "");
    })(function (e, t) {
      return null == e
        ? {}
        : (function (e, t) {
            return (
              (e = Object(e)),
              ke(
                t,
                function (t, i) {
                  return i in e && (t[i] = e[i]), t;
                },
                {}
              )
            );
          })(e, t);
    });
  function Qe(e) {
    return null == e
      ? []
      : (function (e, t) {
          return de(t, function (t) {
            return e[t];
          });
        })(e, Ue(e));
  }
  function Je(e) {
    return e;
  }
  var et,
    tt = re;
  function it(e, t, i) {
    var a = Ue(t),
      s = ie(t, a);
    null != i ||
      (Be(t) && (s.length || !a.length)) ||
      ((i = t), (t = e), (e = this), (s = ie(t, Ue(t))));
    var n = !(Be(i) && "chain" in i && !i.chain),
      o = He(e);
    return (
      Z(s, function (i) {
        var a = t[i];
        (e[i] = a),
          o &&
            (e.prototype[i] = function () {
              var t = this.__chain__;
              if (n || t) {
                var i = e(this.__wrapped__);
                return (
                  (i.__actions__ = pe(this.__actions__)).push({
                    func: a,
                    args: arguments,
                    thisArg: e,
                  }),
                  (i.__chain__ = t),
                  i
                );
              }
              return a.apply(e, E([this.value()], arguments));
            });
      }),
      e
    );
  }
  function at() {}
  (R.assignIn = Ge),
    (R.before = Pe),
    (R.bind = Ie),
    (R.chain = function (e) {
      var t = R(e);
      return (t.__chain__ = !0), t;
    }),
    (R.compact = function (e) {
      return Q(e, Boolean);
    }),
    (R.concat = function () {
      var e = arguments.length;
      if (!e) return [];
      for (var t = Array(e - 1), i = arguments[0], a = e; a--; )
        t[a - 1] = arguments[a];
      return E(Ae(i) ? pe(i) : [i], J(t, 1));
    }),
    (R.create = function (e, t) {
      var i = N(e);
      return null == t ? i : Ye(i, t);
    }),
    (R.defaults = We),
    (R.defer = ze),
    (R.delay = Le),
    (R.filter = function (e, t) {
      return Q(e, re(t));
    }),
    (R.flatten = Ce),
    (R.flattenDeep = function (e) {
      return null != e && e.length ? J(e, 1 / 0) : [];
    }),
    (R.iteratee = tt),
    (R.keys = Ue),
    (R.map = function (e, t) {
      return de(e, re(t));
    }),
    (R.matches = function (e) {
      return ce(Ye({}, e));
    }),
    (R.mixin = it),
    (R.negate = function (e) {
      if ("function" != typeof e) throw new TypeError(t);
      return function () {
        var t = arguments;
        return !e.apply(this, t);
      };
    }),
    (R.once = function (e) {
      return Pe(2, e);
    }),
    (R.pick = Ke),
    (R.slice = function (t, i, a) {
      var s = null == t ? 0 : t.length;
      return (
        (i = null == i ? 0 : +i), (a = a === e ? s : +a), s ? ue(t, i, a) : []
      );
    }),
    (R.sortBy = function (t, i) {
      var a = 0;
      return (
        (i = re(i)),
        de(
          de(t, function (e, t, s) {
            return { value: e, index: a++, criteria: i(e, t, s) };
          }).sort(function (t, i) {
            return (
              (function (t, i) {
                if (t !== i) {
                  var a = t !== e,
                    s = null === t,
                    n = t == t,
                    o = i !== e,
                    r = null === i,
                    l = i == i;
                  if ((!r && t > i) || (s && o && l) || (!a && l) || !n)
                    return 1;
                  if ((!s && t < i) || (r && a && n) || (!o && n) || !l)
                    return -1;
                }
                return 0;
              })(t.criteria, i.criteria) || t.index - i.index
            );
          }),
          _("value")
        )
      );
    }),
    (R.tap = function (e, t) {
      return t(e), e;
    }),
    (R.thru = function (e, t) {
      return t(e);
    }),
    (R.toArray = function (e) {
      return Fe(e) ? (e.length ? pe(e) : []) : Qe(e);
    }),
    (R.values = Qe),
    (R.extend = Ge),
    it(R, R),
    (R.clone = function (e) {
      return Be(e) ? (Ae(e) ? pe(e) : me(e, q(e))) : e;
    }),
    (R.escape = function (e) {
      return (e = Xe(e)) && y.test(e) ? e.replace(b, I) : e;
    }),
    (R.every = function (t, i, a) {
      return (function (e, t) {
        var i = !0;
        return (
          Z(e, function (e, a, s) {
            return (i = !!t(e, a, s));
          }),
          i
        );
      })(t, re((i = a ? e : i)));
    }),
    (R.find = _e),
    (R.forEach = Me),
    (R.has = function (e, t) {
      return null != e && D.call(e, t);
    }),
    (R.head = Se),
    (R.identity = Je),
    (R.indexOf = Te),
    (R.isArguments = Oe),
    (R.isArray = Ae),
    (R.isBoolean = function (e) {
      return !0 === e || !1 === e || (je(e) && ae(e) == l);
    }),
    (R.isDate = function (e) {
      return je(e) && ae(e) == d;
    }),
    (R.isEmpty = function (e) {
      return Fe(e) && (Ae(e) || Ve(e) || He(e.splice) || Oe(e))
        ? !e.length
        : !q(e).length;
    }),
    (R.isEqual = function (e, t) {
      return oe(e, t);
    }),
    (R.isFinite = function (e) {
      return "number" == typeof e && j(e);
    }),
    (R.isFunction = He),
    (R.isNaN = function (e) {
      return qe(e) && e != +e;
    }),
    (R.isNull = function (e) {
      return null === e;
    }),
    (R.isNumber = qe),
    (R.isObject = Be),
    (R.isRegExp = function (e) {
      return je(e) && ae(e) == v;
    }),
    (R.isString = Ve),
    (R.isUndefined = function (t) {
      return t === e;
    }),
    (R.last = function (t) {
      var i = null == t ? 0 : t.length;
      return i ? t[i - 1] : e;
    }),
    (R.max = function (t) {
      return t && t.length ? K(t, Je, se) : e;
    }),
    (R.min = function (t) {
      return t && t.length ? K(t, Je, le) : e;
    }),
    (R.noConflict = function () {
      return C._ === this && (C._ = F), this;
    }),
    (R.noop = at),
    (R.reduce = ke),
    (R.result = function (t, i, a) {
      var s = null == t ? e : t[i];
      return s === e && (s = a), He(s) ? s.call(t) : s;
    }),
    (R.size = function (e) {
      return null == e ? 0 : (e = Fe(e) ? e : q(e)).length;
    }),
    (R.some = function (t, i, a) {
      return fe(t, re((i = a ? e : i)));
    }),
    (R.uniqueId = function (e) {
      var t = ++O;
      return Xe(e) + t;
    }),
    (R.each = Me),
    (R.first = Se),
    it(
      R,
      ((et = {}),
      te(R, function (e, t) {
        D.call(R.prototype, t) || (et[t] = e);
      }),
      et),
      { chain: !1 }
    ),
    (R.VERSION = "4.17.15"),
    Z(
      [
        "pop",
        "join",
        "replace",
        "reverse",
        "split",
        "push",
        "shift",
        "sort",
        "splice",
        "unshift",
      ],
      function (e) {
        var t = (/^(?:replace|split)$/.test(e) ? String.prototype : z)[e],
          i = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
          a = /^(?:pop|join|replace|shift)$/.test(e);
        R.prototype[e] = function () {
          var e = arguments;
          if (a && !this.__chain__) {
            var s = this.value();
            return t.apply(Ae(s) ? s : [], e);
          }
          return this[i](function (i) {
            return t.apply(Ae(i) ? i : [], e);
          });
        };
      }
    ),
    (R.prototype.toJSON =
      R.prototype.valueOf =
      R.prototype.value =
        function () {
          return (
            (e = this.__wrapped__),
            ke(
              this.__actions__,
              function (e, t) {
                return t.func.apply(t.thisArg, E([e], t.args));
              },
              e
            )
          );
          var e;
        }),
    "function" == typeof define && "object" == typeof define.amd && define.amd
      ? ((C._ = R),
        define(function () {
          return R;
        }))
      : T
      ? (((T.exports = R)._ = R), (S._ = R))
      : (C._ = R);
}).call(this),
  (window.theme = window.theme || {}),
  (theme.Sections = function () {
    (this.constructors = {}),
      (this.instances = []),
      $(document)
        .on("shopify:section:load", this._onSectionLoad.bind(this))
        .on("shopify:section:unload", this._onSectionUnload.bind(this))
        .on("shopify:section:select", this._onSelect.bind(this))
        .on("shopify:section:deselect", this._onDeselect.bind(this))
        .on("shopify:block:select", this._onBlockSelect.bind(this))
        .on("shopify:block:deselect", this._onBlockDeselect.bind(this));
  }),
  (theme.Sections.prototype = _.assignIn({}, theme.Sections.prototype, {
    _createInstance: function (e, t) {
      var i = $(e),
        a = i.attr("data-section-id"),
        s = i.attr("data-section-type");
      if (((t = t || this.constructors[s]), !_.isUndefined(t))) {
        var n = _.assignIn(new t(e), { id: a, type: s, container: e });
        this.instances.push(n);
      }
    },
    _onSectionLoad: function (e) {
      $("div").removeClass("animate-section");
      var t = $("[data-section-id]", e.target)[0];
      t && this._createInstance(t);
    },
    _onSectionUnload: function (e) {
      this.instances = _.filter(this.instances, function (t) {
        var i = t.id === e.originalEvent.detail.sectionId;
        return i && _.isFunction(t.onUnload) && t.onUnload(e), !i;
      });
    },
    _onSelect: function (e) {
      var t = _.find(this.instances, function (t) {
        return t.id === e.originalEvent.detail.sectionId;
      });
      !_.isUndefined(t) && _.isFunction(t.onSelect) && t.onSelect(e);
    },
    _onDeselect: function (e) {
      var t = _.find(this.instances, function (t) {
        return t.id === e.originalEvent.detail.sectionId;
      });
      !_.isUndefined(t) && _.isFunction(t.onDeselect) && t.onDeselect(e);
    },
    _onBlockSelect: function (e) {
      var t = _.find(this.instances, function (t) {
        return t.id === e.originalEvent.detail.sectionId;
      });
      !_.isUndefined(t) && _.isFunction(t.onBlockSelect) && t.onBlockSelect(e);
    },
    _onBlockDeselect: function (e) {
      var t = _.find(this.instances, function (t) {
        return t.id === e.originalEvent.detail.sectionId;
      });
      !_.isUndefined(t) &&
        _.isFunction(t.onBlockDeselect) &&
        t.onBlockDeselect(e);
    },
    register: function (e, t) {
      (this.constructors[e] = t),
        $("[data-section-type=" + e + "]").each(
          function (e, i) {
            this._createInstance(i, t);
          }.bind(this)
        );
    },
  })),
  (theme.Helpers = (function () {
    var e = !1;
    return {
      setTouch: function () {
        e = !0;
      },
      isTouch: function () {
        return e;
      },
    };
  })()),
  (theme.adjustMenu = function () {
    $(function () {
      var e = $(".sticky-navigation");
      if (e.length > 0) {
        e.offset().top;
        var t = $(".header-toolbar").outerHeight(),
          i = $(".sticky-navigation-container").outerHeight(),
          a = window.innerHeight;
        $(".responsiveMenu").css({ maxHeight: a - i - 20 + "px" }),
          $(".responsiveMenu .parent-level-ul").css({
            maxHeight: a - t - 40 + "px",
          });
      }
    });
    var e = window.innerWidth,
      t = $(".animate-section");
    ($.fn.isInViewport = function () {
      var e = $(this).offset().top,
        t = e + $(this).outerHeight(),
        i = $(window).scrollTop(),
        a = i + $(window).height();
      return t > i && e < a;
    }),
      $(window).on("scroll", function () {
        $(".filter ul.options").hide().removeClass("active"),
          $(".filter .select .error").hide(),
          $(".animate-section-div").each(function () {
            $(this).find(t).removeClass("load loaded"),
              $(this).isInViewport()
                ? $(this).find(t).addClass("go").removeClass("stop")
                : $(this).find(t).addClass("stop").removeClass("go");
          });
      });
    var i = 0;
    window.addEventListener("scroll", function () {
      document.body.getBoundingClientRect().top > i
        ? t.addClass("up").removeClass("down")
        : t.addClass("down").removeClass("up"),
        (i = document.body.getBoundingClientRect().top);
    });
    var a,
      s = parseInt($(".responsiveMenu").data("maxmobilewidth"));
    if (
      e <= s ||
      ((a = $(".header-navigation .container").width() - $(".logo a").width()),
      $(".header-navigation-width").width() > a) ||
      "ontouchstart" in window ||
      navigator.MaxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    )
      $("body").removeClass("desktop-only").addClass("mobile-only"),
        $(".toggleMenu").removeClass("isDesktop").addClass("isMobile"),
        $(".toggleMenu").hasClass("active")
          ? ($("body").addClass("activeMobileMenu"),
            $(".responsiveMenu")
              .show()
              .removeClass("isDesktop")
              .addClass("isMobile"))
          : ($(".responsiveMenu")
              .hide()
              .removeClass("isDesktop")
              .addClass("isMobile"),
            $("body").removeClass("activeMobileMenu")),
        $(".responsiveMenu .parent-level-ul").removeAttr("style"),
        $(".responsiveMenu li")
          .unbind("mouseenter mouseleave")
          .removeClass("isDesktop")
          .addClass("isMobile"),
        $(".responsiveMenu li.has-dropdown a.parent")
          .unbind("click")
          .bind("click", function (e) {
            e.preventDefault(), $(this).parent("li").toggleClass("hover");
          }),
        $(".responsiveMenu li a.parent span").click(function () {
          void 0 !== $(this).parent().attr("href") &&
            "#" != $(this).parent().attr("href") &&
            ($(this).parent().unbind("click"),
            (myLink = $(this).parent().attr("href")),
            (window.location.href = myLink));
        });
    else if (e > s) {
      var n;
      setTimeout(function () {
        $("body").addClass("desktop-only");
      }, 50),
        $("body").removeClass("mobile-only"),
        $(".toggleMenu").removeClass("isMobile").addClass("isDesktop"),
        $(".responsiveMenu")
          .show()
          .removeClass("isMobile")
          .addClass("isDesktop"),
        $(".responsiveMenu li")
          .removeClass("hover isMobile")
          .addClass("isDesktop"),
        $(".responsiveMenu li a").unbind("click"),
        $(".responsiveMenu li.parent")
          .unbind("mouseenter")
          .bind("mouseenter", function () {
            clearTimeout(n),
              $(".responsiveMenu li.hover").removeClass("hover"),
              $(this).addClass("hover");
          }),
        $(".responsiveMenu li.parent")
          .unbind("mouseleave")
          .bind("mouseleave", function () {
            var e = $(this);
            n = setTimeout(function () {
              e.removeClass("hover");
            }, 250);
          });
    }
    var o = document.links;
    for (let e = 0, t = o.length; e < t; e++)
      o[e].hostname !== window.location.hostname &&
        o[e].href.indexOf("javascript:") &&
        (o[e].target = "_blank");
  }),
  (theme.product_options = function (e) {
    var t = (this.sectionId = e.attr("data-section-id")),
      i =
        ((this.productId = e.attr("data-product-id")),
        JSON.parse($("#ProductJson-" + t).html())),
      a = "product-select-" + t,
      s = "#price-" + t,
      n = "#savings-" + t,
      o = "#compare-" + t,
      r = "#add-to-cart-" + t,
      l = "#error_" + t,
      d = "#updates_" + t,
      c = "#inventory-" + t,
      h = $("#inventory-" + t).data("inv"),
      u = "#sku-" + t,
      p = "#offer-" + t,
      f = "#product-logistics-" + t + " .separator";
    (selectCallback = function (e) {
      $("form.product_form-" + t);
      var i = $("#product-select-" + t + " option:selected").data("inv"),
        a = $("#product-select-" + t + " option:selected").data("inc"),
        m = $("#product-select-" + t + " option:selected").data("inc_date");
      if (
        (e && 1 == e.available
          ? (e.compare_at_price > e.price
              ? "0" == e.price
                ? ($(s).html(
                    theme.language.products_product_free +
                      " <del>" +
                      Shopify.formatMoney(
                        e.compare_at_price,
                        theme.moneyFormat
                      ) +
                      "</del>"
                  ),
                  $(o).html(
                    Shopify.formatMoney(
                      e.compare_at_price - e.price,
                      theme.moneyFormat
                    ).replace(/((\,00)|(\.00))$/g, "")
                  ),
                  $(n).removeClass("hidden"))
                : ($(s).html(
                    Shopify.formatMoney(e.price, theme.moneyFormat) +
                      " <del>" +
                      Shopify.formatMoney(
                        e.compare_at_price,
                        theme.moneyFormat
                      ) +
                      "</del>"
                  ),
                  $(o).html(
                    Shopify.formatMoney(
                      e.compare_at_price - e.price,
                      theme.moneyFormat
                    ).replace(/((\,00)|(\.00))$/g, "")
                  ),
                  $(n).removeClass("hidden"))
              : "0" == e.price
              ? ($(s).text(theme.language.products_product_free),
                $(n).addClass("hidden"))
              : ($(s).html(Shopify.formatMoney(e.price, theme.moneyFormat)),
                $(n).addClass("hidden")),
            $(r)
              .val(theme.language.products_product_add_to_cart)
              .removeClass("disabled outline")
              .attr("disabled", !1),
            $(l).hide(),
            $(d).val(1))
          : e && 0 == e.available
          ? (e.compare_at_price > e.price
              ? "0" == e.price
                ? ($(s).html(
                    theme.language.products_product_free +
                      " <del>" +
                      Shopify.formatMoney(
                        e.compare_at_price,
                        theme.moneyFormat
                      ) +
                      "</del>"
                  ),
                  $(o).html(
                    Shopify.formatMoney(
                      e.compare_at_price - e.price,
                      theme.moneyFormat
                    ).replace(/((\,00)|(\.00))$/g, "")
                  ),
                  $(n).removeClass("hidden"))
                : ($(s).html(
                    Shopify.formatMoney(e.price, theme.moneyFormat) +
                      " <del>" +
                      Shopify.formatMoney(
                        e.compare_at_price,
                        theme.moneyFormat
                      ) +
                      "</del>"
                  ),
                  $(o).html(
                    Shopify.formatMoney(
                      e.compare_at_price - e.price,
                      theme.moneyFormat
                    ).replace(/((\,00)|(\.00))$/g, "")
                  ),
                  $(n).removeClass("hidden"))
              : "0" == e.price
              ? ($(s).html(theme.language.products_product_free),
                $(o).html(
                  Shopify.formatMoney(
                    e.compare_at_price - e.price,
                    theme.moneyFormat
                  ).replace(/((\,00)|(\.00))$/g, "")
                ),
                $(n).addClass("hidden"))
              : ($(s).html(Shopify.formatMoney(e.price, theme.moneyFormat)),
                $(n).addClass("hidden")),
            $(r)
              .val(theme.language.products_product_sold_out)
              .addClass("disabled outline")
              .attr("disabled", !0),
            $(l).hide(),
            $(d).val(0))
          : ($(r)
              .val(theme.language.products_product_disabled_add_to_cart)
              .addClass("disabled outline")
              .attr("disabled", !0),
            $(c).empty(),
            $(s).empty(),
            $(u).empty(),
            $(f).addClass("hidden"),
            $(n).addClass("hidden"),
            $(l).hide(),
            $(d).val(0).attr({ max: -1 }).attr({ min: 0 })),
        e)
      ) {
        if (
          (e.sku
            ? ($(u).html(theme.language.products_product_sku + e.sku),
              $(f).removeClass("hidden"))
            : ($(u).empty(), $(f).addClass("hidden")),
          e.inventory_management
            ? (i > 0 && i < h
                ? (1 == a
                    ? $(c).html(
                        "<h4>" +
                          theme.language.products_general_inv_msg_1 +
                          "&nbsp;" +
                          i +
                          "&nbsp;" +
                          theme.language.products_general_inv_msg_2 +
                          '<br/><span class="error-text"><small><span class="icon icon-bell"></span> ' +
                          m +
                          "</small</span></h4>"
                      )
                    : $(c).html(
                        "<h4>" +
                          theme.language.products_general_inv_msg_1 +
                          "&nbsp;" +
                          i +
                          "&nbsp;" +
                          theme.language.products_general_inv_msg_2 +
                          "</h4>"
                      ),
                  $(d).attr({ min: 1 }))
                : i > h
                ? ($(c).html(
                    "<h4>" + theme.language.products_product_available + "</h4>"
                  ),
                  $(d).attr({ min: 1 }))
                : i < 1
                ? e.available
                  ? ($(c).html(
                      "<h4>" +
                        theme.language.products_product_available +
                        "</h4>"
                    ),
                    $(d).attr({ min: 1 }))
                  : (1 == a
                      ? $(c).html(
                          "<h4>" +
                            theme.language.products_product_sold_out +
                            '<br/><span class="error-text"><small><span class="icon icon-bell"></span> ' +
                            m +
                            "</small></span></h4>"
                        )
                      : $(c).html(
                          "<h4>" +
                            theme.language.products_product_sold_out +
                            "</h4>"
                        ),
                    $(d).attr({ min: 0 }))
                : ($(c).html(
                    "<h4>" + theme.language.products_product_available + "</h4>"
                  ),
                  $(d).attr({ min: 1 })),
              null != i ? $(d).attr({ max: i }) : $(d).removeAttr("max"))
            : ($(c).html(
                "<h4>" + theme.language.products_product_available + "</h4>"
              ),
              $(d).removeAttr("max").attr({ min: 1 })),
          e.unit_price_measurement
            ? 1 != e.unit_price_measurement.reference_value
              ? $(p)
                  .html(
                    "<h4>" +
                      Shopify.formatMoney(e.unit_price, theme.moneyFormat) +
                      theme.language.products_general_per +
                      e.unit_price_measurement.reference_value +
                      e.unit_price_measurement.reference_unit +
                      "</h4>"
                  )
                  .removeClass("hidden")
              : $(p)
                  .html(
                    "<h4>" +
                      Shopify.formatMoney(e.unit_price, theme.moneyFormat) +
                      theme.language.products_general_per +
                      e.unit_price_measurement.reference_unit +
                      "</h4>"
                  )
                  .removeClass("hidden")
            : $(p).empty().addClass("hidden"),
          e && e.featured_media)
        ) {
          var v = e.featured_media,
            g = $(".variant-image-" + t).filter(
              '[data-image-id="' + v.id + '"]'
            ),
            b = $(".variant-image-" + t).not('[data-image-id="' + v.id + '"]'),
            y = g.attr("data-media-index");
          galleryTopSwiper && galleryTopSwiper.slideTo(y, 300),
            g.removeClass("hidden").trigger("mediaVisible"),
            b.addClass("hidden").trigger("mediaHidden");
        }
      } else $(u).empty(), $(c).empty(), $(p).empty();
    }),
      new Shopify.OptionSelectors(a, {
        product: i,
        onVariantSelected: selectCallback,
        enableHistoryState: !0,
      });
    var m = $(".single-option-selector");
    if (
      (m.length &&
        (m.each(function () {
          "Default Title" == $(this).val() &&
            $(this).addClass("nowSelect2").closest(".selector-wrapper").hide();
        }),
        m.not(".nowSelect2").select2()),
      $("#product-id-" + t + " .selector-wrapper").each(function (e) {
        if (
          $(this).find("select").find("option").length >
          $("#product-select-" + t).data("length")
        ) {
          var i = $("#" + a).attr("data-cols");
          $(this).wrap('<div class="' + i + '" />');
        } else $(this).hide();
      }),
      $("#thumbnails-" + t).length)
    )
      var v = new Swiper("#thumbnails-" + t, {
        freeMode: !0,
        freeModeMomentum: !1,
        freeModeMomentumBounce: !1,
        grabCursor: !0,
        slidesPerView: 4,
        watchSlidesProgress: !0,
        spaceBetween: 6,
        navigation: {
          nextEl: "#swiper-button-next-thumbs-" + t,
          prevEl: "#swiper-button-prev-thumbs-" + t,
        },
        on: {
          init: function () {
            $(".swiper-slide-active").trigger("click");
          },
        },
      });
    $(".gallery-top-" + t).length &&
      (galleryTopSwiper = new Swiper(".gallery-top-" + t, {
        spaceBetween: 0,
        slidesPerView: 1,
        navigation: {
          nextEl: "#swiper-button-next-gallery-" + t,
          prevEl: "#swiper-button-prev-gallery-" + t,
        },
        thumbs: { swiper: v },
      })),
      $(function () {
        $(".easyzoom").easyZoom();
      });
  }),
  (theme.LibraryLoader = (function () {
    var e = "link",
      t = "script",
      i = "requested",
      a = "loaded",
      s = "https://cdn.shopify.com/shopifycloud/",
      n = {
        youtubeSdk: {
          tagId: "youtube-sdk",
          src: "https://www.youtube.com/iframe_api",
          type: t,
        },
        plyrShopifyStyles: {
          tagId: "plyr-shopify-styles",
          src: s + "shopify-plyr/v1.0/shopify-plyr.css",
          type: e,
        },
        modelViewerUiStyles: {
          tagId: "shopify-model-viewer-ui-styles",
          src: s + "model-viewer-ui/assets/v1.0/model-viewer-ui.css",
          type: e,
        },
      };
    return {
      load: function (s, o) {
        var r = n[s];
        if (r && r.status !== i)
          if (((o = o || function () {}), r.status !== a)) {
            var l;
            switch (((r.status = i), r.type)) {
              case t:
                l = (function (e, t) {
                  var i = document.createElement("script");
                  return (
                    (i.src = e.src),
                    i.addEventListener("load", function () {
                      (e.status = a), t();
                    }),
                    i
                  );
                })(r, o);
                break;
              case e:
                l = (function (e, t) {
                  var i = document.createElement("link");
                  return (
                    (i.href = e.src),
                    (i.rel = "stylesheet"),
                    (i.type = "text/css"),
                    i.addEventListener("load", function () {
                      (e.status = a), t();
                    }),
                    i
                  );
                })(r, o);
            }
            (l.id = r.tagId), (r.element = l);
            var d = document.getElementsByTagName(r.type)[0];
            d.parentNode.insertBefore(l, d);
          } else o();
      },
    };
  })()),
  (theme.product_video = (function () {
    var e = {},
      t = { html5: "html5", youtube: "youtube" },
      i = "[data-product-single-media-wrapper]",
      a = "enable-video-looping",
      s = "video-id";
    function n(i) {
      i
        ? (function () {
            for (var i in e)
              if (e.hasOwnProperty(i)) {
                var a = e[i];
                if (a.nativeVideo) continue;
                a.host === t.html5 &&
                  (a.element.setAttribute("controls", "controls"),
                  (a.nativeVideo = !0));
              }
          })()
        : l(t.html5);
    }
    function o() {
      window.YT.Player && l(t.youtube);
    }
    function r(e) {
      return "VIDEO" === e.tagName
        ? t.html5
        : "IFRAME" === e.tagName &&
          /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(
            e.src
          )
        ? t.youtube
        : null;
    }
    function l(t) {
      for (var i in e)
        if (e.hasOwnProperty(i)) {
          var a = e[i];
          a.host === t && a.ready();
        }
    }
    return {
      init: function (l, d) {
        if (l.length) {
          var c = l.find("iframe, video")[0],
            h = l.data("mediaId");
          if (c)
            switch (
              ((e[h] = {
                mediaId: h,
                sectionId: d,
                host: r(c),
                container: l,
                element: c,
                ready: function () {
                  !(function (e) {
                    if (!e.player) {
                      var n = e.container.closest(i),
                        o = n.data(a);
                      switch (e.host) {
                        case t.html5:
                          e.player = new Shopify.Plyr(e.element, {
                            loop: { active: o },
                          });
                          break;
                        case t.youtube:
                          var r = n.data(s);
                          e.player = new YT.Player(e.element, {
                            videoId: r,
                            events: {
                              onStateChange: function (e) {
                                0 === e.data && o && e.target.seekTo(0);
                              },
                            },
                          });
                      }
                      n.on("mediaHidden xrLaunch", function () {
                        e.player &&
                          (e.host === t.html5 && e.player.pause(),
                          e.host === t.youtube &&
                            e.player.pauseVideo &&
                            e.player.pauseVideo());
                      }),
                        n.on("mediaVisible", function () {
                          theme.Helpers.isTouch() ||
                            (e.player &&
                              (e.host === t.html5 && e.player.play(),
                              e.host === t.youtube &&
                                e.player.playVideo &&
                                e.player.playVideo()));
                        });
                    }
                  })(this);
                },
              }),
              e[h].host)
            ) {
              case t.html5:
                window.Shopify.loadFeatures([
                  { name: "video-ui", version: "1.0", onLoad: n },
                ]),
                  theme.LibraryLoader.load("plyrShopifyStyles");
                break;
              case t.youtube:
                theme.LibraryLoader.load("youtubeSdk", o);
            }
        }
      },
      hosts: t,
      loadVideos: l,
      removeSectionVideos: function (t) {
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var a = e[i];
            a.sectionId === t && (a.player && a.player.destroy(), delete e[i]);
          }
      },
    };
  })()),
  (theme.product_model = (function () {
    var e = {},
      t = {},
      i = {},
      a = "[data-product-single-media-group]",
      s = "[data-shopify-xr]";
    function n(t) {
      if (!t)
        if (window.ShopifyXR) {
          for (var i in e)
            if (e.hasOwnProperty(i)) {
              var a = e[i];
              if (a.loaded) continue;
              var s = $("#ModelJson-" + i);
              window.ShopifyXR.addModels(JSON.parse(s.html())), (a.loaded = !0);
            }
          window.ShopifyXR.setupXRElements();
        } else
          document.addEventListener("shopify_xr_initialized", function () {
            n();
          });
    }
    function o(e) {
      if (!e)
        for (var i in t)
          if (t.hasOwnProperty(i)) {
            var a = t[i];
            a.modelViewerUi ||
              (a.modelViewerUi = new Shopify.ModelViewerUI(a.$element)),
              r(a);
          }
    }
    function r(e) {
      var t = i[e.sectionId];
      e.$container.on("mediaVisible", function () {
        t.$element.attr("data-shopify-model3d-id", e.modelId),
          theme.Helpers.isTouch() || e.modelViewerUi.play();
      }),
        e.$container
          .on("mediaHidden", function () {
            t.$element.attr("data-shopify-model3d-id", t.defaultId),
              e.modelViewerUi.pause();
          })
          .on("xrLaunch", function () {
            e.modelViewerUi.pause();
          });
    }
    return {
      init: function (r, l) {
        (e[l] = { loaded: !1 }),
          r.each(function (e) {
            var n = $(this),
              o = n.data("media-id"),
              r = $(n.find("model-viewer")[0]),
              d = r.data("model-id");
            if (0 === e) {
              var c = n.closest(a).find(s);
              i[l] = { $element: c, defaultId: d };
            }
            t[o] = { modelId: d, sectionId: l, $container: n, $element: r };
          }),
          window.Shopify.loadFeatures([
            { name: "shopify-xr", version: "1.0", onLoad: n },
            { name: "model-viewer-ui", version: "1.0", onLoad: o },
          ]),
          theme.LibraryLoader.load("modelViewerUiStyles");
      },
      removeSectionModels: function (i) {
        for (var a in t)
          t.hasOwnProperty(a) &&
            t[a].sectionId === i &&
            (t[a].modelViewerUi.destroy(), delete t[a]);
        delete e[i];
      },
    };
  })()),
  (theme.product_media = function (e) {
    var t = (this.sectionId = e.attr("data-section-id")),
      i =
        ($("[data-product-single-media-wrapper]"),
        $("[data-product-media-type-video]")),
      a = $("[data-product-media-type-model]");
    $(i, this.$container).each(function () {
      var e = $(this);
      theme.product_video.init(e, t);
    });
    var s = $(a, this.$container);
    if (!(s.length < 1)) {
      theme.product_model.init(s, t);
      var n = this;
      $(document).on("shopify_xr_launch", function () {
        $(
          n.productMediaWrapper + ":not(." + n.classes.hidden + ")",
          n.$container
        ).trigger("xrLaunch");
      });
    }
  }),
  (theme.qtyinput_quantity = function (e) {
    var t = (this.sectionId = e.attr("data-section-id"));
    (this.productId = e.attr("data-product-id")),
      $(".qtyplus_" + t + ",.qtyplus_multi").click(function (e) {
        e.preventDefault();
        var t = $(this).attr("field"),
          i = $(this).attr("price-field"),
          a = parseInt($("input[id=" + i + "]").attr("price")),
          s = document.getElementById(t),
          n = document.getElementById($(s).attr("field")),
          o = parseInt($(s).attr("max")),
          r = parseInt($(s).val());
        if (isNaN(r)) r = parseInt(0);
        else r = parseInt($(s).val());
        $(s).val(r + 1),
          0 != o
            ? r + 1 > o &&
              ($(n)
                .show()
                .html(
                  theme.language.products_general_inv_msg_1 +
                    "&nbsp;" +
                    o +
                    "&nbsp;" +
                    theme.language.products_general_inv_msg_2
                ),
              parseInt($(s).val(o)))
            : o < 0
            ? ($(n)
                .show()
                .html(theme.language.products_product_disabled_add_to_cart),
              parseInt($(s).val(0)))
            : ($(n).show().html(theme.language.products_product_sold_out),
              parseInt($(s).val(0)));
        var l = parseInt($(s).val());
        $("input[id=" + i + "]").val(l * a);
      }),
      $(".qtyminus_" + t + ",.qtyminus_multi").click(function (e) {
        e.preventDefault();
        var t = $(this).attr("field"),
          i = $(this).attr("price-field"),
          a = parseInt($("input[id=" + i + "]").attr("price")),
          s = document.getElementById(t),
          n = ($(s).attr("field"), document.getElementById($(s).attr("field"))),
          o = parseInt($(s).attr("min")),
          r = parseInt($(s).val());
        if (isNaN(r)) r = parseInt(2);
        else r = parseInt($(s).val());
        $(n).hide(), !isNaN(r) && r > o ? $(s).val(r - 1) : $(s).val(o);
        var l = parseInt($(s).val());
        $("input[id=" + i + "]").val(l * a);
      }),
      $(".quantity").on("change, mouseup, keyup", "[max]", function () {
        var e = document.getElementById($(this).attr("field")),
          t = parseInt($(this).attr("max"), 10),
          i = parseInt($(this).attr("min"), 10),
          a = parseInt($(this).val(), 10) || 0;
        $(e).hide(),
          0 != t
            ? a > t
              ? ($(e)
                  .show()
                  .html(
                    theme.language.products_general_inv_msg_1 +
                      "&nbsp;" +
                      t +
                      "&nbsp;" +
                      theme.language.products_general_inv_msg_2
                  ),
                $(this).val(t))
              : a < i && ($(e).hide(), $(this).val(i))
            : ($(e).show().html(theme.language.products_product_sold_out),
              $(this).val(0));
      });
  }),
  (theme.ajax_cart = function ($container) {
    var sectionId = (this.sectionId = $container.attr("data-section-id")),
      productId = (this.productId = $container.attr("data-product-id"));
    (Shopify.AjaxifyCart = (function ($) {
      var _config = {
          howLongTillBtnReturnsToNormal: 1e3,
          cartCountSelector: ".cartCountSelector",
          cartTotalSelector: ".cartTotalSelector",
          addToCartBtnSelector: '[type="submit"]',
          addToCartFormSelector: "form.go-to-cart-" + sectionId,
          shopifyAjaxAddURL: "/cart/add.js",
          shopifyAjaxCartURL: "/cart.js",
          shopifyAjaxCollectionURL: $("#collection_url").attr("href"),
        },
        _showFeedback = function (e, t, i) {
          $(".ajaxified-cart-feedback").remove();
          var a =
            '<p class="ajaxified-cart-feedback ' +
            e +
            '"><span class="icon icon-check"></span>' +
            t +
            "</p>";
          i.find(".detail-price").after(a),
            $(".ajaxified-cart-feedback").slideDown();
        },
        _setText = function (e, t) {
          e.children().length
            ? e.children().each(function () {
                "" !== $.trim($(this).text()) && $(this).text(t);
              })
            : e.val(t).text(t);
        },
        ajaxLoadPage = function (e) {
          $.ajax({
            type: "GET",
            url: e,
            complete: function (e) {
              $("#cart-dropdown-span").html(
                $("#cart-dropdown-span", e.responseText).html()
              );
            },
          });
        },
        _init = function () {
          $(function () {
            $(_config.addToCartFormSelector).submit(function (e) {
              e.preventDefault();
              var $addToCartForm = $(this),
                $addToCartBtn = $addToCartForm.find(
                  _config.addToCartBtnSelector
                );
              return (
                _setText(
                  $addToCartBtn,
                  theme.language.products_product_ajax_adding
                ),
                $addToCartBtn.addClass("disabled").prop("disabled", !0),
                $.ajax({
                  url: _config.shopifyAjaxAddURL,
                  dataType: "json",
                  type: "post",
                  data: $addToCartForm.serialize(),
                  success: function (e) {
                    ajaxLoadPage(),
                      $addToCartBtn.addClass("inverted"),
                      _setText(
                        $addToCartBtn,
                        theme.language.products_product_ajax_thanks
                      ),
                      _showFeedback(
                        "cart-success",
                        theme.language.products_product_ajax_added +
                          '&nbsp;<a href="' +
                          theme.routes_cart_url +
                          '">' +
                          theme.language.products_product_ajax_view +
                          "</a>",
                        $addToCartForm
                      ),
                      window.setTimeout(function () {
                        $addToCartBtn
                          .prop("disabled", !1)
                          .removeClass("disabled")
                          .removeClass("inverted"),
                          _setText(
                            $addToCartBtn,
                            theme.language.products_product_add_to_cart
                          );
                      }, _config.howLongTillBtnReturnsToNormal),
                      $.getJSON(_config.shopifyAjaxCartURL, function (t) {
                        var i = $("#cart-notification");
                        if (i.length) {
                          var a = i.find(".cart-notification-product__image"),
                            s = i.find(".cart-notification-product__name"),
                            n = i.find(".cart-notification-product__options"),
                            o = i.find("#cart-notification-button");
                          if (
                            (s.html(e.title),
                            a.attr("src", e.featured_image.url),
                            a.attr("alt", e.featured_image.alt),
                            n.html(" "),
                            e.options_with_values.length)
                          )
                            for (
                              var r = 0;
                              r < e.options_with_values.length;
                              r++
                            ) {
                              var l = e.options_with_values[r],
                                d = l.name;
                              if ("Default Title" != (h = l.value)) {
                                var c =
                                  '<div class="cart-notification-product__option"><dt>' +
                                  d +
                                  ": </dt><dd>" +
                                  h +
                                  "</dd></div>";
                                n.append(c);
                              }
                            }
                          o.html("View my cart (" + t.item_count + ")"),
                            i.addClass("active");
                        }
                        if (
                          _config.cartCountSelector &&
                          $(_config.cartCountSelector).length
                        ) {
                          var h = $(_config.cartCountSelector).html() || "0";
                          $(_config.cartCountSelector)
                            .html(h.replace(/[0-9]+/, t.item_count))
                            .removeClass("hidden"),
                            $(_config.cartTotalSelector).html(
                              Shopify.formatMoney(
                                t.total_price,
                                theme.moneyFormat
                              ).replace(/((\,00)|(\.00))$/g, "")
                            );
                        }
                      });
                  },
                  error: function (XMLHttpRequest) {
                    var response = eval(
                      "(" + XMLHttpRequest.responseText + ")"
                    );
                    (response = response.description),
                      "All " === response.slice(0, 4)
                        ? (_showFeedback(
                            "error",
                            response.replace("All 1 ", "All "),
                            $addToCartForm
                          ),
                          $addToCartBtn.prop("disabled", !1),
                          _setText(
                            $addToCartBtn,
                            theme.language.products_product_sold_out
                          ),
                          $addToCartBtn.prop("disabled", !0))
                        : (_showFeedback("error", response, $addToCartForm),
                          $addToCartBtn
                            .prop("disabled", !1)
                            .removeClass("disabled"),
                          _setText(
                            $addToCartBtn,
                            theme.language.products_product_add_to_cart
                          ));
                  },
                }),
                !1
              );
            });
          });
        };
      return {
        init: function (e) {
          (e = e || {}),
            $.extend(_config, e),
            $(function () {
              _init();
            });
        },
        getConfig: function () {
          return _config;
        },
      };
    })($)),
      Shopify.AjaxifyCart.init();
  }),
  (theme.wrap_options = function () {
    $(
      ".content iframe[src*='youtube.com']:not('.no-container'),.content iframe[src*='vimeo.com']:not('.no-container')"
    )
      .wrap('<div class="youtube-container" />')
      .addClass("no-container"),
      $(".youtube-container:not('.no-container')")
        .append('<div class="fancybox-loading" />')
        .addClass("no-container"),
      $("select:not('.no-select')")
        .wrap('<span class="select" />')
        .addClass("no-select");
  }),
  (theme.smooth_scroll = function () {
    $("a[href^='#']")
      .not(".swiper-slide")
      .not(".nav-link")
      .not(".hidetab")
      .on("click", function (e) {
        if ("" !== this.hash) {
          e.preventDefault();
          var t = $(".header-toolbar.sticky").outerHeight();
          if (void 0 === t) var i = 0;
          else i = t;
          var a = this.hash;
          $("html, body").animate(
            { scrollTop: $(a).offset().top - i },
            900,
            "swing"
          );
        }
      });
  }),
  (theme.quick_view = function (e) {
    $(function () {
      $().fancybox({
        selector: "[data-fancybox].quick",
        touch: !1,
        afterLoad: function (e, t) {
          var i = $("#product-id-product-template-quick");
          theme.product_options(i),
            theme.product_media(i),
            theme.qtyinput_quantity(i),
            theme.ajax_cart(i),
            theme.wrap_options(),
            Shopify.PaymentButton.init(i);
        },
      });
    });
  }),
  (theme.swiper_carousel = function (e) {
    var t = (this.sectionId = e.attr("data-section-id")),
      i = (this.Carousel = $("#swiper-carousel-" + t)),
      a = (this.CarouselGrid = $("#swiper-carousel-" + t + "-grid")),
      s = "#swiper-button-next-" + t,
      n = "#swiper-button-prev-" + t;
    new Swiper(i, {
      centeredSlides: !1,
      freeMode: !0,
      freeModeMomentum: !1,
      freeModeMomentumBounce: !1,
      grabCursor: !0,
      loop: !0,
      keyboard: { enabled: !0, onlyInViewport: !0 },
      navigation: { nextEl: s, prevEl: n },
      slidesPerView: 2,
      breakpoints: { 600: { slidesPerView: 4 } },
    }),
      $(a).each(function () {
        const e = window.matchMedia("(min-width:601px)");
        let t;
        const i = function () {
            return !0 === e.matches
              ? (a.removeClass("swiper-enabled"),
                void (void 0 !== t && t.destroy(!0, !0)))
              : !1 === e.matches
              ? (a.addClass("swiper-enabled"), o())
              : void 0;
          },
          o = function () {
            a.addClass("swiper-enabled"),
              (t = new Swiper(a, {
                centeredSlides: !0,
                freeMode: !0,
                freeModeMomentum: !1,
                freeModeMomentumBounce: !1,
                grabCursor: !0,
                keyboard: { enabled: !0, onlyInViewport: !0 },
                loop: !0,
                slidesPerView: 2,
                navigation: { nextEl: s, prevEl: n },
              }));
          };
        e.addListener(i), i();
      });
  }),
  (theme.swiper_carousel_loop = function (e) {
    var t = (this.sectionId = e.attr("data-section-id"));
    $(".product-loop-" + t).each(function () {
      var e = (this.$loop_container = $(this)),
        t = (this.blockId = e.attr("data-block-id")),
        i = (this.Carousel = $("#swiper-carousel-" + t)),
        a = (this.CarouselGrid = $("#swiper-carousel-" + t + "-grid")),
        s = "#swiper-button-next-" + t,
        n = "#swiper-button-prev-" + t;
      new Swiper(i, {
        centeredSlides: !1,
        freeMode: !0,
        freeModeMomentum: !1,
        freeModeMomentumBounce: !1,
        grabCursor: !0,
        loop: !0,
        keyboard: { enabled: !0, onlyInViewport: !0 },
        navigation: { nextEl: s, prevEl: n },
        slidesPerView: 2,
        breakpoints: { 600: { slidesPerView: 4 } },
      }),
        $(a).each(function () {
          const e = window.matchMedia("(min-width:601px)");
          let t;
          const i = function () {
              if (!0 !== e.matches) return !1 === e.matches ? o() : void 0;
              void 0 !== t && t.destroy(!0, !0);
            },
            o = function () {
              t = new Swiper(a, {
                centeredSlides: !1,
                freeMode: !0,
                freeModeMomentum: !1,
                freeModeMomentumBounce: !1,
                grabCursor: !0,
                keyboard: { enabled: !0, onlyInViewport: !0 },
                loop: !0,
                slidesPerView: 2,
                navigation: { nextEl: s, prevEl: n },
              });
            };
          e.addListener(i), i();
        });
    });
  }),
  (theme.tabs = function (e) {
    var t = (this.sectionId = e.attr("data-section-id")),
      i = (this.Carousel = $("#swiper-tabs-" + t));
    new Swiper(i, {
      freeMode: !0,
      freeModeMomentum: !1,
      freeModeMomentumBounce: !1,
      grabCursor: !0,
      navigation: {
        nextEl: "#swiper-button-next-" + t,
        prevEl: "#swiper-button-prev-" + t,
      },
      slidesPerView: "auto",
    }),
      $(".tabs-id-" + t).each(function () {
        var e,
          i,
          a = $(this).find("a");
        (e = a.first().addClass("active")),
          (i = $(e.attr("href"))),
          $(i).find("a,.tabindex").attr("tabindex", "0"),
          a.not(".first").each(function () {
            $($(this).attr("href"))
              .addClass("hide")
              .attr("aria-hidden", "true")
              .find("a,.tabindex")
              .attr("tabindex", "-1");
          }),
          $(this)
            .find("a")
            .on("click", function (s) {
              return (
                s.preventDefault(),
                a.removeClass("active"),
                i.addClass("hide").find("a,.tabindex").attr("tabindex", "-1"),
                $(".tab-body-id-" + t)
                  .addClass("hide")
                  .attr("aria-hidden", "true"),
                (e = $(this)),
                (i = $($(this).attr("href"))),
                e.addClass("active"),
                i
                  .removeClass("hide")
                  .attr("aria-hidden", "false")
                  .find("a,.tabindex")
                  .attr("tabindex", "0"),
                !1
              );
            }),
          $(this)
            .find("a")
            .on("focus", function (e) {
              a.not(".active").each(function () {
                $($(this).attr("href"))
                  .find(".tabindex")
                  .attr("tabindex", "-1");
              });
            });
      });
  }),
  (theme.open_slide = function (e) {
    var t = (this.sectionId = e.attr("data-section-id")),
      i = $(".content").width();
    $(window).on("resize", function () {
      window.innerWidth != i &&
        ((i = window.innerWidth) > 600
          ? ($(".open-slide,.open-slide-bullets").removeClass("active").show(),
            $(".header-searchbar.open-slide").removeClass("active").hide(),
            $(".open").removeClass("active"))
          : ($(".open-slide,.open-slide-bullets").hide(),
            $(".open").removeClass("active")));
    }),
      $(".open-" + t).on("click", function (e) {
        var t = $(this),
          i = $(this).closest(".open-container"),
          a = i.children(".open-slide"),
          s = i.find(".search-field");
        a.slideToggle("fast"),
          a.hasClass("active")
            ? (a.removeClass("active"), t.removeClass("active"), s.blur())
            : (a.addClass("active"), t.addClass("active"), s.focus()),
          e.preventDefault();
      });
  }),
  (theme.add_this = function () {
    "object" == typeof window.addthis &&
      "function" == typeof window.addthis.layers &&
      "function" == typeof window.addthis.layers.refresh &&
      window.addthis.layers.refresh();
  }),
  (theme.live_search = function (e) {
    var t = (this.sectionId = e.attr("data-section-id")),
      i = null;
    $("form.search-form-" + t)
      .css("position", "relative")
      .each(function () {
        var e = $(this).find('input[name="q"]');
        e.position(),
          $('<ul class="search-results inline text-left unformatted"></ul>')
            .css({ position: "absolute", left: "0px" })
            .appendTo($(this))
            .hide(),
          e.attr("autocomplete", "off").bind("keyup change", function () {
            var e = $(this).val(),
              t = theme.routes_search_url + "?q=" + e,
              a = $(this).closest("form").find(".search-results");
            e.length > 3 &&
              e != $(this).attr("data-old-term") &&
              ($(this).attr("data-old-term", e),
              null != i && i.abort(),
              (i = $.getJSON(t + "&view=json", function (e) {
                a.empty(),
                  0 == e.results_count
                    ? a.hide()
                    : ($.each(e.results, function (e, t) {
                        var i = $("<a></a>")
                            .attr("href", t.url)
                            .attr("title", t.title),
                          s = "six",
                          n = "",
                          o = "";
                        "product" != t.category && (s = "twelve"),
                          null != t.price &&
                            (n =
                              '<span class="product-price"><h6>' +
                              Shopify.formatMoney(t.price, theme.moneyFormat) +
                              "</h6></span>"),
                          null != t.vendor &&
                            (o =
                              '<span class="vendor"><small>' +
                              t.vendor +
                              "</small></span>"),
                          t.thumbnail.indexOf("no-image") <= 0 &&
                            i
                              .append(
                                '<span class="thumbnail"><img src="' +
                                  t.thumbnail +
                                  '" /></span>'
                              )
                              .addClass("with-image"),
                          i.append(
                            '<span><span class="h5">' +
                              t.title +
                              "</span>" +
                              n +
                              o +
                              "</span>"
                          ),
                          i.wrap(
                            '<li class="' +
                              s +
                              " relative " +
                              t.category +
                              '"></li>'
                          ),
                          a.append(i.parent());
                      }),
                      e.results_count > 10 &&
                        a.append(
                          '<li class="see-all twelve text-center"><a href="' +
                            t +
                            '">' +
                            theme.language.general_search_see_results +
                            " (" +
                            e.results_count +
                            ")</a></li>"
                        ),
                      a.fadeIn(200));
              })));
          });
      }),
      $("body").bind("click", function () {
        $(".search-results").hide();
      });
  }),
  (theme.recently_viewed = function () {
    var e, t, i, a, s, n, o, r;
    Shopify.Products =
      ((t = {
        howManyToShow: 5,
        howManyToStoreInMemory: 5,
        wrapperId: "recently-viewed-products",
        templateId: "recently-viewed-product-template",
        onComplete: null,
      }),
      (i = []),
      (a = null),
      (s = null),
      (n = 0),
      (o = {
        configuration: {
          expires: 90,
          path: "/",
          domain: window.location.hostname,
        },
        name: "shopify_recently_viewed",
        write: function (e) {
          $.cookie(this.name, e.join(" "), this.configuration);
        },
        read: function () {
          var e = [],
            t = $.cookie(this.name);
          return null !== t && (e = t.split(" ")), e;
        },
        destroy: function () {
          $.cookie(this.name, null, this.configuration);
        },
        remove: function (e) {
          var t = this.read(),
            i = $.inArray(e, t);
          -1 !== i && (t.splice(i, 1), this.write(t));
        },
      }),
      (r = function () {
        i.length && n < t.howManyToShow
          ? $.ajax({
              dataType: "json",
              url: "/products/" + i[0] + ".js",
              cache: !1,
              success: function (t) {
                s.tmpl(t).appendTo(e), i.shift(), n++, r();
              },
              error: function () {
                o.remove(i[0]), i.shift(), r();
              },
            })
          : (function () {
              if ((a.addClass("active"), t.onComplete))
                try {
                  t.onComplete();
                } catch (e) {}
            })();
      }),
      {
        resizeImage: function (e, t) {
          if (null != e) {
            var i = new Image();
            if (
              ((i.onload = function () {
                this.height > this.width &&
                  $('img[data-img="' + e + '"]').addClass("vertical");
              }),
              (i.src = e),
              null == t)
            )
              return e;
            if ("master" == t) return e.replace(/http(s)?:/, "");
            var a = e.match(
              /\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?/i
            );
            if (null != a) {
              var s = e.split(a[0]),
                n = a[0];
              return (s[0] + "_" + t + n).replace(/http(s)?:/, "");
            }
            return null;
          }
          return (e =
            "https://cdn.shopify.com/s/images/admin/no-image-2048x2048.gif");
        },
        showRecentlyViewed: function (n) {
          (n = n || {}),
            $.extend(t, n),
            (i = o.read()),
            (s = $("#" + t.templateId)),
            (a = $("#" + t.wrapperId)),
            (e = $("#" + t.wrapperId + " .row")),
            (t.howManyToShow = Math.min(i.length, t.howManyToShow)),
            t.howManyToShow && s.length && a.length && r();
        },
        getConfig: function () {
          return t;
        },
        clearList: function () {
          o.destroy();
        },
        recordRecentlyViewed: function (e) {
          (e = e || {}), $.extend(t, e);
          var i = o.read();
          if (-1 !== window.location.pathname.indexOf("/products/")) {
            var a = window.location.pathname.match(/.*\/(.*)$/)[1],
              s = $.inArray(a, i);
            -1 === s
              ? (i.unshift(a), (i = i.splice(0, t.howManyToStoreInMemory)))
              : (i.splice(s, 1), i.unshift(a)),
              o.write(i);
          }
        },
      });
  }),
  (theme.multi = function () {
    $(function () {
      var e = $(".currencies"),
        t = $("header .currencies"),
        i = $("footer .currencies"),
        a = e.find("select"),
        s = (e.find("a"), e.find("ul"));
      s.find("a").click(function (e) {
        e.stopPropagation(),
          t
            .find('a[data-multi="' + $(this).data("multi") + '"]')
            .html("<small>" + $(this).data("header_symbol") + "</small>")
            .removeClass("active"),
          i
            .find('a[data-multi="' + $(this).data("multi") + '"]')
            .html("<small>" + $(this).data("footer_symbol") + "</small>")
            .removeClass("active"),
          a
            .find('option[value="' + $(this).data("code") + '"]')
            .prop("selected", "selected"),
          s.hide(),
          a.change();
      }),
        $(".currency-selector select").change(function () {
          $("#ajaxBusy").show();
          var e = $(this);
          setTimeout(function () {
            e.parents("form").submit();
          }, 1);
        }),
        $("li a,li input")
          .focus(function () {
            $(this).parents("li.parent-level").hasClass("isDesktop") &&
              $(this)
                .parents("li.parent-level")
                .addClass("focused")
                .find("ul")
                .attr("aria-hidden", "false");
          })
          .blur(function () {
            $(this)
              .parents("li")
              .removeClass("focused")
              .find("ul")
              .attr("aria-hidden", "true");
          });
    });
  }),
  (theme.HeaderSection = function e(t) {
    var i = (this.$container = $(t)),
      a = (this.sectionId = i.attr("data-section-id"));
    $(function () {
      $(".toggleMenu").click(function (e) {
        e.preventDefault(),
          $(this).hasClass("active") ||
            ($(".toggleMenu").removeClass("active"),
            $("body").removeClass("activeMobileMenu"),
            $(".responsiveMenu").hide().removeClass("active"),
            $("body").removeClass("no-scroll")),
          $(this).toggleClass("active"),
          $("body").addClass("activeMobileMenu"),
          $(".responsiveMenu").toggle(),
          $("body").toggleClass("no-scroll");
        var t = $(window).scrollTop();
        $("body.mobile-only").hasClass("no-scroll")
          ? ($(".no-scroll .sticky-navigation").data("ycoord", t),
            (t *= -1),
            $("body.mobile-only")
              .css("position", "fixed")
              .css("left", "0px")
              .css("right", "0px")
              .css("top", t + "px"))
          : ($("body.mobile-only")
              .css("position", "")
              .css("left", "auto")
              .css("right", "auto")
              .css("top", "auto"),
            $(window).scrollTop($(".sticky-navigation").data("ycoord"))),
          $(".header-searchbar.open-slide").hide().removeClass("active");
      });
    }),
      $(window).bind("resize orientationchange", function () {
        theme.adjustMenu(),
          $("body").hasClass("desktop-only") &&
            ($(".toggleMenu").removeClass("active"),
            $(".responsiveMenu").removeClass("active"),
            $("body")
              .removeClass("no-scroll")
              .css("position", "")
              .css("left", "auto")
              .css("right", "auto")
              .css("top", "auto"));
      }),
      $(".open-" + a).on("click", function (e) {
        $(window).scrollTop(),
          $(".toggleMenu").removeClass("active"),
          $(".mobile-only .responsiveMenu").hide().removeClass("active"),
          $("body.mobile-only").hasClass("no-scroll") &&
            ($("body").removeClass("no-scroll"),
            $("body.mobile-only")
              .css("position", "")
              .css("left", "auto")
              .css("right", "auto")
              .css("top", "auto"),
            $(window).scrollTop($(".sticky-navigation").data("ycoord")));
      }),
      $(".open-bullets").on("click", function () {
        var e = $(this),
          t = $(this)
            .closest(".open-container-bullets")
            .find(".open-slide-bullets");
        t.stop().slideToggle("fast", function () {
          t.toggleClass("active", e.is(":visible")),
            $(".open-bullets").toggleClass("active");
        });
      }),
      theme.multi(),
      theme.open_slide(i),
      theme.live_search(i),
      $(window).on("load", function () {
        setTimeout(function () {
          ("challenge" != $("body").attr("id") &&
            "/challenge" != location.pathname) ||
            ((document.location.hash = "challenge"),
            $("html, body").scrollTop(0));
        }, 150);
      }),
      (e.prototype.onSelect = function (e) {
        theme.adjustMenu();
      });
  }),
  (theme.Filter = function (e) {
    var t = (this.$container = $(e)),
      a = (this.sectionId = t.attr("data-section-id")),
      s = ".filter-form-" + a;
    for (i = 0; i < 4; i++)
      $(s + " #select_" + i).each(function () {
        var e = $(this).find("select"),
          t = $(this).find("a.styledSelect"),
          i = $(this).find("ul.options"),
          a = i.find("a");
        t.click(function (e) {
          e.stopPropagation(),
            $("a.styledSelect")
              .not(this)
              .next("ul.options")
              .hide()
              .removeClass("active"),
            $(this)
              .next(i)
              .stop()
              .slideToggle("fast", function () {
                $(this).toggleClass("active");
              }),
            $(".animate-section.filter").addClass("loaded");
        }),
          a.click(function (a) {
            a.stopPropagation(),
              t.text($(this).text()).removeClass("active"),
              e.find("option").prop("selected", !1),
              e
                .find(
                  'option[value="' +
                    $(this).attr("rel") +
                    '"][data-id="' +
                    $(this).attr("data-id") +
                    '"]'
                )
                .prop("selected", "selected"),
              i.hide(),
              e.change();
          }),
          $(document).click(function () {
            t.removeClass("active"), i.hide();
          });
      });
    $(s + " #directory_label_0_" + a).on("change", function () {
      var e = $(this).find("option:selected").val();
      if (
        ($(s + " .tag-filter").removeClass("last"),
        $(s + " .directory_label_0 .first").removeClass("hidden"),
        $(this).addClass("last"),
        "" === e)
      )
        for (
          $(s + " span.tag-select").addClass("disabled"),
            $(s + " .tag-base")
              .val("")
              .attr("disabled", !0),
            i = 1;
          i < 4;
          i++
        ) {
          var t = $(s + " .directory_label_" + i + " .first").attr(
            "data-select"
          );
          $(s + " .directory_label_" + i + " .first")
            .val("")
            .html(t);
        }
      else {
        for (
          $(s + " .select .error").hide(),
            $(s + " span.tag-select")
              .removeClass("disabled")
              .addClass("enabled"),
            $(s + " .tag-base")
              .val("")
              .attr("disabled", !1),
            i = 1;
          i < 4;
          i++
        ) {
          var a = $(
            s +
              " .directory_label_" +
              i +
              " .tag-base .item[data-collection=" +
              $(this).find(":selected").attr("data-id") +
              "]"
          ).data("group");
          void 0 === a
            ? ($(s + " span.directory_label_" + i + ".tag-select").addClass(
                "disabled"
              ),
              $(s + " .directory_label_" + i + " .tag-base")
                .val("")
                .attr("disabled", !0),
              $(s + " .directory_label_" + i + " .first")
                .val("")
                .html(theme.language.layout_general_unavailable),
              $(s + " .directory_label_" + i + " .styledSelect").attr(
                "data-id",
                theme.language.layout_general_unavailable
              ))
            : ($(s + " .directory_label_" + i + " .first")
                .val("")
                .html(a + "..."),
              $(s + " .directory_label_" + i + ".basic .first").html(
                theme.language.layout_general_next + "..."
              ),
              $(s + " .directory_label_" + i + " .styledSelect").attr(
                "data-id",
                a + "..."
              ));
        }
        $(s + " .tag-base .item").addClass("hidden"),
          $(s + " .tag-base .first").addClass("hidden"),
          $(
            s +
              " .tag-base .item[data-collection=" +
              $(this).find(":selected").attr("data-id") +
              "]"
          ).removeClass("hidden");
      }
    }),
      $(s + " .directory_label_1 .tag-base").on("change", function () {
        $(s + " .child .tag-base").val(""),
          $(s + " .infant .tag-base").val(""),
          $(s + " #directory_label_0_" + a)
            .find("option:selected")
            .val();
        var e = $(this).find("option:selected").data("id"),
          t = $(this).find("option:selected").data("id2"),
          i = ($(this).find("option:selected").val(), []);
        if (
          ($.each($(s + " .tag-filter option:selected"), function () {
            i.push($(this).val());
          }),
          $(s + " .tag-filter").removeClass("last"),
          $(s + " .directory_label_1 .first").removeClass("hidden"),
          $(this).addClass("last"),
          $(this).hasClass("advanced"))
        ) {
          var n = i.join("").slice(1, -1);
          $.ajax({
            type: "GET",
            data: {},
            dataType: "text",
            url: n + "?view=do_not_use",
            async: !0,
            success: function (t) {
              var i = s + " .child",
                a = s + " .infant";
              if (
                ($(i + " .tag-base .item[data-id=" + e + "]").each(function () {
                  var e = $(this).data("handle");
                  t.indexOf(e) > -1
                    ? $(this).removeClass("hidden")
                    : $(this).addClass("hidden");
                }),
                $(i + " .tag-base .item[data-id=" + e + "]").not(".hidden")
                  .length)
              ) {
                var n = $(i + " .tag-base .item[data-id=" + e + "]")
                  .not(".hidden")
                  .data("group");
                $(i + ".tag-select")
                  .removeClass("disabled")
                  .addClass("enabled"),
                  $(i + " .tag-base")
                    .val("")
                    .attr("disabled", !1),
                  $(i + " .first")
                    .val("")
                    .html(n + "..."),
                  $(i + " .styledSelect").attr("data-id", n + "..."),
                  $(i + " .first").addClass("hidden");
              } else
                $(i + " .tag-base")
                  .val("")
                  .val("")
                  .attr("disabled", !0),
                  $(i + ".tag-select")
                    .removeClass("enabled")
                    .addClass("disabled"),
                  $(i + " .first")
                    .val("")
                    .html(theme.language.layout_general_unavailable),
                  $(i + " .styledSelect").attr(
                    "data-id",
                    theme.language.layout_general_unavailable
                  );
              $(a + " .tag-base .item[data-id=" + e + "]").not(".hidden").length
                ? ((n = $(a + " .tag-base .item[data-id=" + e + "]")
                    .not(".hidden")
                    .data("group")),
                  $(a + ".tag-select")
                    .removeClass("disabled")
                    .addClass("enabled"),
                  $(a + " .tag-base")
                    .val("")
                    .attr("disabled", !1),
                  $(a + " .first")
                    .val("")
                    .html(n + "..."),
                  $(a + " .styledSelect").attr("data-id", n + "..."),
                  $(a + " .first").addClass("hidden"))
                : ($(a + " .tag-base")
                    .val("")
                    .val("")
                    .attr("disabled", !0),
                  $(a + ".tag-select")
                    .removeClass("enabled")
                    .addClass("disabled"),
                  $(a + " .first")
                    .val("")
                    .html(theme.language.layout_general_unavailable),
                  $(a + " .styledSelect").attr(
                    "data-id",
                    theme.language.layout_general_unavailable
                  ));
            },
          });
        } else {
          var o = s + " .child";
          if (
            ($(o + " .tag-base .item[data-id=" + e + "]").each(function () {
              $(this).data("id2") === t
                ? $(this).removeClass("hidden")
                : $(this).addClass("hidden");
            }),
            $(o + " .tag-base .item[data-id=" + e + "]").not(".hidden").length)
          ) {
            var r = $(o + " .tag-base .item[data-id=" + e + "]")
              .not(".hidden")
              .data("group");
            $(o + ".tag-select")
              .removeClass("disabled")
              .addClass("enabled"),
              $(o + " .tag-base")
                .val("")
                .attr("disabled", !1),
              $(o + " .first")
                .val("")
                .html(r + "..."),
              $(o + ".basic .first").html(
                theme.language.layout_general_next + "..."
              ),
              $(o + " .styledSelect").attr("data-id", r + "...");
          } else
            $(o + " .tag-base")
              .val("")
              .val("")
              .attr("disabled", !0),
              $(o + ".tag-select")
                .removeClass("enabled")
                .addClass("disabled"),
              $(o + " .first")
                .val("")
                .html(theme.language.layout_general_unavailable),
              $(o + " .styledSelect").attr(
                "data-id",
                theme.language.layout_general_unavailable
              );
        }
      }),
      $(s + " .directory_label_2 .tag-base").on("change", function () {
        $(s + " .infant .tag-base").val(""),
          $(s + " #directory_label_0_" + a)
            .find("option:selected")
            .val();
        var e = $(this).find("option:selected").data("id"),
          t =
            ($(s + " .directory_label_1 .tag-base.tag-filter")
              .find("option:selected")
              .val(),
            $(this).find("option:selected").val(),
            []);
        if (
          ($.each($(s + " .tag-filter option:selected"), function () {
            t.push($(this).val());
          }),
          $(s + " .tag-filter").removeClass("last"),
          $(s + " .directory_label_2 .first").removeClass("hidden"),
          $(this).addClass("last"),
          $(this).hasClass("advanced"))
        ) {
          var i = t.join("").slice(1, -1);
          $.ajax({
            type: "GET",
            data: {},
            dataType: "text",
            url: i + "?view=do_not_use",
            async: !0,
            success: function (t) {
              var i = s + " .infant";
              if (
                ($(i + " .tag-base .item[data-id=" + e + "]").each(function () {
                  var e = $(this).data("handle");
                  t.indexOf(e) > -1
                    ? $(this).removeClass("hidden")
                    : $(this).addClass("hidden");
                }),
                $(i + " .tag-base .item[data-id=" + e + "]").not(".hidden")
                  .length)
              ) {
                var a = $(i + " .tag-base .item[data-id=" + e + "]")
                  .not(".hidden")
                  .data("group");
                $(i + ".tag-select")
                  .removeClass("disabled")
                  .addClass("enabled"),
                  $(i + " .tag-base")
                    .val("")
                    .attr("disabled", !1),
                  $(i + " .first")
                    .val("")
                    .html(a + "..."),
                  $(i + " .styledSelect").attr("data-id", a + "..."),
                  $(i + " .first").addClass("hidden");
              } else
                $(i + " .tag-base")
                  .val("")
                  .val("")
                  .attr("disabled", !0),
                  $(i + ".tag-select")
                    .removeClass("enabled")
                    .addClass("disabled"),
                  $(i + " .first")
                    .val("")
                    .html(theme.language.layout_general_unavailable),
                  $(i + " .styledSelect").attr(
                    "data-id",
                    theme.language.layout_general_unavailable
                  );
            },
          });
        }
      }),
      $(s + " .directory_label_3 .tag-base").on("change", function () {
        $(s + " .directory_label_3 .first").removeClass("hidden");
      }),
      $(s + " .advanced.btn").click(function () {
        var e = [];
        $.each($(s + " .tag-filter option:selected"), function () {
          e.push($(this).val());
        }),
          0 == document.getElementById("directory_label_0_" + a).selectedIndex
            ? ($(s + " .select .error").show(),
              $(".animate-section.filter").addClass("loaded"))
            : ((window.location = e.join("").slice(1, -1) + "#collection"),
              $(s + " .select .error").hide());
      }),
      $(s + " .basic.btn").click(function () {
        $(s + " .tag-filter.last option:selected"),
          0 == document.getElementById("directory_label_0_" + a).selectedIndex
            ? ($(s + " .select .error").show(),
              $(".animate-section.filter").addClass("loaded"))
            : ((window.location =
                $(s + " .tag-filter.last option:selected").val() +
                "#collection"),
              $(s + " .select .error").hide());
      });
  }),
  (theme.HomeSlideshow = function e(t) {
    var i = (this.$container = $(t)),
      a = (this.sectionId = i.attr("data-section-id")),
      s = (this.Carousel = $("#slideshow-carousel-" + a)),
      n = s.width(),
      o = (this.autorotate = s.data("swiper-autorotate")),
      r = new Swiper(s, {
        autoHeight: !0,
        centeredSlides: !0,
        grabCursor: !0,
        keyboard: { enabled: !0, onlyInViewport: !0 },
        loop: !0,
        autoplay: o,
        navigation: {
          nextEl: "#swiper-button-next-" + a,
          prevEl: "#swiper-button-prev-" + a,
        },
        slidesPerView: 1,
        on: {
          init: function () {
            var e = s
              .find(".home-slideshow-image .swiper-slide-active img")
              .data("aspectratio");
            s.find(
              ".home-slideshow-image.swiper-wrapper,.home-slideshow-image .swiper-slide-active"
            ).css({ height: n / e });
          },
        },
      });
    r.on("slideChangeTransitionStart", function () {
      s.find(".swiper-slide-active .lazyloading").addClass("lazyload");
      var e = s
        .find(".home-slideshow-image .swiper-slide-active > div")
        .height();
      $(".home-slideshow-image.swiper-wrapper").css({ height: e });
    }),
      r.on("resize", function () {
        s.find(".home-slideshow-image .swiper-slide-active").css(
          "height",
          "auto"
        );
      }),
      (e.prototype.onBlockSelect = function (e) {
        var t = this.sectionId,
          i = $(e.target).data("swiper-slide-index");
        if ($("#slideshow-" + t).hasClass("swiper-enabled")) {
          document
            .querySelector("#slideshow-carousel-" + t)
            .swiper.slideToLoop(i, 300);
          var a = s
            .find(".home-slideshow-image .swiper-slide-active img")
            .data("aspectratio");
          $(
            "#slideshow-carousel-" + t + " .home-slideshow-image.swiper-wrapper"
          ).css({ height: n / a });
        }
      });
  }),
  (theme.HomeCollectionsTabbed = function e(t) {
    var i = (this.$container = $(t));
    (this.sectionId = i.attr("data-section-id")),
      theme.quick_view(i),
      theme.ajax_cart(i),
      theme.tabs(i),
      theme.swiper_carousel_loop(i),
      (e.prototype.onBlockSelect = function (e) {
        var t = this.sectionId,
          i = $(e.target),
          a = $(i.attr("href")),
          s = $(e.target).data("swiper-slide-index"),
          n = document.querySelector("#swiper-tabs-" + t).swiper;
        $("#swiper-tabs-" + t + " .title").removeClass("active"),
          $(".tab-body-id-" + t)
            .addClass("hide")
            .attr("aria-hidden", "true")
            .find("a,.tabindex")
            .attr("tabindex", "-1"),
          i.addClass("active"),
          a
            .removeClass("hide")
            .attr("aria-hidden", "false")
            .find("a,.tabindex")
            .attr("tabindex", "0"),
          n.slideTo(s, 300);
      });
  }),
  (theme.HomeCollection = function (e) {
    var t = (this.$container = $(e));
    (this.sectionId = t.attr("data-section-id")),
      theme.quick_view(t),
      theme.ajax_cart(t),
      theme.swiper_carousel(t);
  }),
  (theme.HomeCollectionsList = function e(t) {
    var i = (this.$container = $(t));
    (this.sectionId = i.attr("data-section-id")),
      theme.swiper_carousel(i),
      (e.prototype.onBlockSelect = function (e) {
        var t = this.sectionId,
          i = $(e.target).data("swiper-slide-index");
        $("#swiper-carousel-" + t).hasClass("swiper-enabled")
          ? document
              .querySelector("#swiper-carousel-" + t)
              .swiper.slideToLoop(i, 300)
          : $("#swiper-carousel-" + t + "-grid").hasClass("swiper-enabled") &&
            document
              .querySelector("#swiper-carousel-" + t + "-grid")
              .swiper.slideToLoop(i, 300);
      });
  }),
  (theme.HomeCollectionsGrid = function e(t) {
    var i = (this.$container = $(t));
    (this.sectionId = i.attr("data-section-id")),
      theme.swiper_carousel(i),
      (e.prototype.onBlockSelect = function (e) {
        var t = this.sectionId,
          i = $(e.target).data("swiper-slide-index");
        $("#swiper-carousel-" + t + "-grid").hasClass("swiper-enabled") &&
          document
            .querySelector("#swiper-carousel-" + t + "-grid")
            .swiper.slideToLoop(i, 300);
      });
  }),
  (theme.HomeMap = (function () {
    var e = null,
      t = [];
    function i(i) {
      var a = (this.$container = $(i)).data("section-key"),
        s = this.$container.find(".map-container"),
        n = this.$container.find(".fancybox-loading");
      if (
        ((window.gm_authFailure = function () {
          $(s).removeClass("no-background"), $(n).hide();
        }),
        "string" == typeof a && "" !== a)
      )
        if ("loaded" === e) {
          var o = this;
          0 === $('script[src*="' + a + '&"]').length
            ? $.getScript(
                "https://maps.googleapis.com/maps/api/js?key=" + a
              ).then(function () {
                (e = "loaded"), o.createMap();
              })
            : this.createMap();
        } else
          t.push(this),
            "loading" !== e &&
              ((e = "loading"),
              void 0 === window.google &&
                $.getScript(
                  "https://maps.googleapis.com/maps/api/js?key=" + a
                ).then(function () {
                  (e = "loaded"),
                    $.each(t, function (e, t) {
                      t.createMap();
                    });
                }));
    }
    return (
      (i.prototype = _.assignIn({}, i.prototype, {
        createMap: function () {
          var e = this.$container.find(".map-box"),
            t = this.$container.find(".map-container"),
            i = this.$container.find(".fancybox-loading"),
            a = e.data("section-zoom"),
            s = e.data("section-address");
          return (function (e) {
            var t = $.Deferred(),
              i = new google.maps.Geocoder(),
              a = e.data("section-address");
            return (
              i.geocode({ address: a }, function (e, i) {
                i !== google.maps.GeocoderStatus.OK && t.reject(i),
                  t.resolve(e);
              }),
              t
            );
          })(e)
            .then(
              function (t) {
                var i = {
                    zoom: a,
                    center: t[0].geometry.location,
                    draggable: !0,
                    clickableIcons: !0,
                    scrollwheel: !1,
                    disableDoubleClickZoom: !0,
                    disableDefaultUI: !0,
                  },
                  n = (this.map = new google.maps.Map(e[0], i)),
                  o = (this.center = n.getCenter());
                new google.maps.Marker({ map: n, position: o }).addListener(
                  "click",
                  function () {
                    window.open(
                      "https://www.google.com/maps/search/?api=1&query=" + s,
                      "_blank"
                    );
                  }
                ),
                  google.maps.event.addDomListener(
                    window,
                    "resize",
                    function () {
                      google.maps.event.trigger(n, "resize"), n.setCenter(o);
                    }
                  );
              }.bind(this)
            )
            .fail(function () {
              $(t).removeClass("no-background"), $(i).hide();
            });
        },
      })),
      i
    );
  })()),
  (theme.HomeBlog = function (e) {
    var t = (this.$container = $(e));
    (this.sectionId = t.attr("data-section-id")), theme.swiper_carousel(t);
  }),
  (theme.HomeSearch = function (e) {
    var t = (this.$container = $(e));
    (this.sectionId = t.attr("data-section-id")), theme.live_search(t);
  }),
  (theme.FooterSection = function (e) {
    var t = (this.$container = $(e));
    (this.sectionId = t.attr("data-section-id")),
      $(function () {
        $("footer").find("select");
        var e = $("footer").find("a.styledSelect"),
          t = $("footer").find("ul.options");
        t.find("a"),
          e.click(function (e) {
            e.stopPropagation(),
              $("a.styledSelect")
                .not(this)
                .next("ul.options")
                .hide()
                .removeClass("active"),
              $(this)
                .next(t)
                .stop()
                .slideToggle("fast", function () {
                  $(this).toggleClass("active");
                });
          }),
          $(document).click(function () {
            e.removeClass("active"), t.hide();
          });
      }),
      theme.multi(),
      theme.open_slide(t),
      theme.add_this();
  }),
  (theme.Collection = function (e) {
    var t = (this.$container = $(e)),
      i =
        ((this.sectionId = t.attr("data-section-id")),
        $(".header-toolbar.sticky").outerHeight());
    if (void 0 === i) var a = 0;
    else a = i;
    window.location.hash &&
      $("html, body").animate(
        { scrollTop: $("#collection").offset().top - a },
        0
      );
    var s = function (e) {
        $(".filter ul").each(function () {
          $(this).find("li").length > 5 &&
            ($("li", this).eq(4).nextAll().hide().addClass("toggleable"),
            $(this).append(
              '<li class="open-more-container"><a href="javascript:void(0)" class="open-more" title="' +
                theme.language.collections_general_open +
                '" aria-controls="' +
                theme.language.collections_general_open +
                '" role="button" aria-label="' +
                theme.language.collections_general_open +
                '">' +
                theme.language.collections_sidebar_more +
                "</a></li>"
            ));
        }),
          $(".filter ul .open-more").on("click", function (e) {
            $(this);
            var t = $(this).closest("ul"),
              i = $(this).closest(".filter");
            t.children("li.toggleable").slideToggle(300),
              $(this).hasClass("less")
                ? ($(this)
                    .text(theme.language.collections_sidebar_more)
                    .removeClass("less"),
                  i.position().top < $(window).scrollTop() &&
                    $("html, body").animate(
                      { scrollTop: i.offset().top - a },
                      300
                    ))
                : $(this)
                    .text(theme.language.collections_sidebar_less)
                    .addClass("less"),
              e.preventDefault();
          });
      },
      n = function (e) {
        $.getJSON("/cart.js", function (e) {
          var t = e.items;
          for (h = 0, len = t.length; h < len; h++) {
            let e = t[h],
              i = e.quantity,
              a = e.id;
            ($("input#updates_" + a) || null).val(i),
              $("#error_" + a)
                .show()
                .html(
                  theme.language.collections_general_update_cart_label_message
                ),
              $("#variant_" + a).addClass("item-in-cart");
          }
        });
      };
    function o(e) {
      e.preventDefault();
      var t = $(this).closest(".item"),
        i = t.data("product-id"),
        a = t.find(".item-qty").val(),
        s = t.find(".error"),
        n = $(".cartCountSelector"),
        o = $(".cartTotalSelector");
      if ($(t).hasClass("item-in-cart")) var r = "/cart/change.js";
      else r = "/cart/add.js";
      $.ajax({
        type: "POST",
        url: r,
        dataType: "json",
        data: { quantity: a, id: i },
        success: function (e) {
          $(n).html(),
            $(s).show().html(theme.language.products_product_ajax_updated),
            a > 0
              ? $(t).addClass("item-in-cart")
              : $(t).removeClass("item-in-cart"),
            $.getJSON("/cart.js", function (e) {
              if (n && $(n).length) {
                var t = $(n).html() || "0";
                $(n)
                  .html(t.replace(/[0-9]+/, e.item_count))
                  .removeClass("hidden"),
                  $(o).html(
                    Shopify.formatMoney(
                      e.total_price,
                      theme.moneyFormat
                    ).replace(/((\,00)|(\.00))$/g, "")
                  );
              }
            }),
            $.ajax({
              type: "GET",
              url: void 0,
              data: {},
              complete: function (e) {
                $("#cart-dropdown-span").html(
                  $("#cart-dropdown-span", e.responseText).html()
                );
              },
            });
        },
      });
    }
    $("#collection")
      .on("change, mouseup, keyup", ".item-qty", o)
      .on("change, click", ".qtybtn", o);
    var r = function (e) {
        $(".open-filter").on("click", function () {
          var e = $(this),
            t = $(this)
              .closest(".open-container-filter")
              .children(".open-slide-filter");
          t.stop().slideToggle("fast", function () {
            t.toggleClass("active", e.is(":visible")), e.toggleClass("active");
          });
        }),
          $(".filter li a")
            .mouseenter(function () {
              $(this).addClass("hover");
            })
            .mouseleave(function () {
              $(this).removeClass("hover");
            });
      },
      l = function (e) {
        $.ajax({
          type: "GET",
          url: e,
          data: {},
          beforeSend: function () {
            $("#ajaxBusy").show();
          },
          complete: function (i) {
            n(),
              $("#collection").html($("#collection", i.responseText).html()),
              $(".breadcrumbs").html($(".breadcrumbs", i.responseText).html()),
              $(".sortBy").html($(".sortBy", i.responseText).html()),
              $("#filters").html($("#filters", i.responseText).html()),
              theme.qtyinput_quantity(t),
              theme.quick_view(t),
              theme.wrap_options(),
              s(),
              r(),
              theme.ajax_cart(t),
              $("#ajaxBusy").hide(),
              history.replaceState({ page: e }, e, e),
              $("#responsiveMenu a").each(function () {
                window.location.href.indexOf(this.href) > -1
                  ? $(this).addClass("active").attr("aria-current", "page")
                  : $(this).removeClass("active").removeAttr("aria-current");
              }),
              $("html, body").animate(
                { scrollTop: $("#collection").offset().top - a },
                900
              );
          },
        });
      };
    s(),
      n(),
      theme.swiper_carousel(t),
      theme.qtyinput_quantity(t),
      theme.quick_view(t),
      theme.wrap_options(),
      theme.open_slide(t),
      r(),
      theme.ajax_cart(t);
    var d = "state" in window.history && null !== window.history.state;
    if (
      (location.href,
      $(window).bind("popstate", function (e) {
        !d && location.href, (d = !0);
      }),
      (Shopify.queryParams = {}),
      location.search.length)
    )
      for (
        var c, h = 0, u = location.search.substr(1).split("&");
        h < u.length;
        h++
      )
        (c = u[h].split("=")).length > 1 &&
          (Shopify.queryParams[decodeURIComponent(c[0])] = decodeURIComponent(
            c[1]
          ));
    $(".sorting").on("change", "select.sortBy", function (e) {
      Shopify.queryParams.sort_by = $(this).val();
      var t = "?" + $.param(Shopify.queryParams).replace(/\+/g, "%20");
      l(t);
    }),
      $("#filters").on("click", ".paginateBy", function (e) {
        Shopify.queryParams.view = $(this).text();
        var t = "?" + $.param(Shopify.queryParams).replace(/\+/g, "%20");
        l(t);
      }),
      $("#filters").on("click", "li.advanced-filter a", function (e) {
        e.preventDefault();
        var t = $(this).attr("href");
        l(t);
      }),
      $("#filters").on("change", ".tag-filters select", function (e) {
        e.preventDefault();
        var t = $(this).val();
        l(t);
      }),
      $("#filters").on("change", ".dropdown select", function (e) {
        $(this).val()
          ? (location.href = $(this).val())
          : (location.href = theme.routes_all_products_collection_url);
      });
  }),
  (theme.Product = function e(t) {
    var i = (this.$container = $(t));
    (this.sectionId = i.attr("data-section-id")),
      (this.productId = i.attr("data-product-id")),
      Shopify.Products.recordRecentlyViewed(),
      theme.product_options(i),
      theme.product_media(i),
      theme.qtyinput_quantity(i),
      theme.swiper_carousel(i),
      theme.swiper_carousel_loop(i),
      theme.quick_view(i),
      theme.ajax_cart(i),
      theme.wrap_options(),
      theme.tabs(i),
      theme.add_this();
    var a = function () {
      var e = document.querySelector(".product-recommendations");
      if (null === e)
        return (
          $(".loading").addClass("hidden"),
          void $(".related-product-loop").removeClass("hidden")
        );
      var t = e.dataset.productId,
        a = e.dataset.limit,
        s =
          theme.routes_product_recommendations_url +
          "?section_id=product-recommendations&limit=" +
          a +
          "&product_id=" +
          t,
        n = new XMLHttpRequest();
      n.open("GET", s),
        (n.onload = function () {
          if (n.status >= 200 && n.status < 300) {
            var t = document.createElement("div");
            (t.innerHTML = n.response),
              (e.innerHTML = t.querySelector(
                ".product-recommendations"
              ).innerHTML),
              e.children.length < 2 && $("#recommended").addClass("hidden"),
              $(".loading").addClass("hidden"),
              $(".related-product-loop").removeClass("hidden"),
              theme.swiper_carousel_loop(i),
              theme.ajax_cart(i);
          }
        }),
        n.send();
    };
    document.addEventListener("shopify:section:load", function (e) {
      "product-recommendations" === e.detail.sectionId && a();
    }),
      a(),
      (e.prototype.onBlockSelect = function (e) {
        $(".title").removeClass("active"),
          $(".tab-body")
            .addClass("hide")
            .attr("aria-hidden", "true")
            .find("a,.tabindex")
            .attr("tabindex", "-1");
        var t = this.sectionId,
          i = $(e.target).attr("aria-controls", e.detail.blockId),
          a = $(i.attr("href")),
          s = $(e.target).data("swiper-slide-index"),
          n = document.querySelector("#swiper-tabs-" + t).swiper;
        i.addClass("active"),
          a
            .removeClass("hide")
            .attr("aria-hidden", "false")
            .find("a,.tabindex")
            .attr("tabindex", "0"),
          n.slideTo(s, 300);
      });
  }),
  (theme.Cart = function (e) {
    var t = (this.$container = $(e));
    function i(e) {
      e.preventDefault();
      var i = $(this).closest(".item"),
        a = i.data("product-id"),
        s = i.find(".item-qty").val(),
        n = i.find(".badge-total"),
        o = i.find(".total-price-item"),
        r = i.find(".total-sale-item"),
        l = i.find(".total-sale-item").data("sale"),
        d = i.find(".total-discount-item"),
        c = i.find(".discount-amt"),
        h = $(".cartCountSelector"),
        u = $(".cartTotalSelector");
      s > 0 && $("#ajaxBusy").show(),
        $.ajax({
          type: "POST",
          url: "/cart/change.js",
          dataType: "json",
          data: { quantity: s, id: a },
          success: function (e) {
            var p = $(h).html();
            "" != s &&
              ($.ajax({
                type: "GET",
                url: void 0,
                data: {},
                complete: function (e) {
                  $("#cart-dropdown-span").html(
                    $("#cart-dropdown-span", e.responseText).html()
                  ),
                    $(".discount-cart").html(
                      $(".discount-cart", e.responseText).html()
                    ),
                    $(".cart-table").html(
                      $(".cart-table", e.responseText).html()
                    ),
                    theme.qtyinput_quantity(t);
                },
              }),
              0 == s
                ? (i.remove(),
                  0 == e.item_count &&
                    ($("#cart-table .form").remove(),
                    $("#cart-table .empty-form").removeClass("hidden"),
                    $(h).addClass("hidden")))
                : $.each(e.items, function (e, t) {
                    a == t.key &&
                      (l * t.quantity > t.final_line_price
                        ? (r.html(
                            Shopify.formatMoney(
                              t.final_line_price,
                              theme.moneyFormat
                            ) +
                              " <del>" +
                              Shopify.formatMoney(
                                l * t.quantity,
                                theme.moneyFormat
                              ) +
                              "</del>"
                          ),
                          n.html(
                            theme.language.products_product_savings +
                              "<br/>" +
                              Shopify.formatMoney(
                                l * t.quantity - t.final_line_price,
                                theme.moneyFormat
                              ).replace(/((\,00)|(\.00))$/g, "")
                          ))
                        : t.original_line_price != t.final_line_price
                        ? (d.html(
                            Shopify.formatMoney(
                              t.final_line_price,
                              theme.moneyFormat
                            ) +
                              " <del>" +
                              Shopify.formatMoney(
                                t.original_line_price,
                                theme.moneyFormat
                              ) +
                              "</del>"
                          ),
                          c.html("..."),
                          $(".discount-cart").html("..."),
                          n.html(
                            theme.language.products_product_savings +
                              "<br/>" +
                              Shopify.formatMoney(
                                t.original_line_price - t.final_line_price,
                                theme.moneyFormat
                              ).replace(/((\,00)|(\.00))$/g, "")
                          ))
                        : o.html(
                            Shopify.formatMoney(
                              t.original_line_price,
                              theme.moneyFormat
                            )
                          ));
                  }),
              $("#ajaxBusy").hide()),
              u &&
                $(u).length &&
                ((p = $(h).html() || "0"),
                $(h).html(p.replace(/[0-9]+/, e.item_count)),
                $(u).html(
                  Shopify.formatMoney(e.total_price, theme.moneyFormat)
                )),
              $("#total-cart-top,#total-cart-bottom").html(
                Shopify.formatMoney(e.total_price, theme.moneyFormat)
              ),
              $("#cart-total").html(
                Shopify.formatMoney(e.original_total_price, theme.moneyFormat)
              ),
              $(".discount-cart").html("...");
            var f = $(
                ".template-cart .shipping-message .shipping-threshold-value"
              ).data("shipping-threshold"),
              m = e.total_price / 100;
            (amountUntilThreshold =
              (100 * f).toFixed(2) - (100 * m).toFixed(2)),
              m >= f
                ? ($(".template-cart .under-threshold").addClass(
                    "hide-message"
                  ),
                  $(".template-cart .threshold-reached").removeClass(
                    "hide-message"
                  ))
                : ($(".template-cart .threshold-reached").addClass(
                    "hide-message"
                  ),
                  $(".template-cart .amount-until-threshold").html(
                    Shopify.formatMoney(amountUntilThreshold, theme.moneyFormat)
                  ),
                  $(".template-cart .under-threshold").removeClass(
                    "hide-message"
                  ));
          },
        });
    }
    (this.sectionId = t.attr("data-section-id")),
      theme.qtyinput_quantity(t),
      Shopify.Products.showRecentlyViewed(),
      theme.recently_viewed(),
      $("#cart-table")
        .on("change, mouseup, keyup", ".item-qty", i)
        .on("change, click", ".qtybtn", i);
  }),
  (theme.Blog = function (e) {
    theme.add_this();
  }),
  (theme.Contact = function (e) {
    var t = (this.$container = $(e)),
      i =
        ((this.sectionId = t.attr("data-section-id")),
        theme.language.contact_form_send,
        $(".header-toolbar.sticky").outerHeight());
    if (void 0 === i) var a = 0;
    else a = i;
    window.location.hash &&
      $("html, body").animate(
        { scrollTop: $("#contact_form").offset().top - a },
        0
      ),
      $("#honeypot").html(
        '<input class="btn standard-width bottompad" type="submit" value="' +
          theme.language.contact_form_send +
          '" id="contactFormSubmit" />'
      ),
      $("form").submit(function () {
        if ($('input[type="text"]#contactFormNumber').val().length > 0)
          return !1;
      });
  }),
  (theme.Password = function (e) {
    let t = window.innerHeight;
    $(".password,.password-page").css({ height: t + "px" }),
      $(window).bind("resize orientationchange", function () {
        let e = window.innerHeight;
        $(".password,.password-page").css({ height: e + "px" });
      }),
      theme.add_this();
  }),
  (theme.NotFound = function (e) {
    var t = (this.$container = $(e));
    (this.sectionId = t.attr("data-section-id")),
      theme.swiper_carousel_loop(t),
      theme.quick_view(t);
  }),
  (theme.HomeIngredientsSlideshow = function (e) {
    var t = (this.$container = $(e)),
      i = (this.sectionId = t.attr("data-section-id")),
      a = (this.Carousel = t.find(".ingredients_slider .swiper-container"));
    new Swiper(a, {
      autoHeight: !1,
      centeredSlides: !1,
      grabCursor: !0,
      keyboard: { enabled: !0, onlyInViewport: !0 },
      loop: !0,
      autoplay: !1,
      navigation: {
        nextEl: "#swiper-button-next-" + i,
        prevEl: "#swiper-button-prev-" + i,
      },
      slidesPerView: "auto",
    });
  }),
  (theme.HomeTestimonials = function (e) {
    var t = (this.$container = $(e)),
      i = (this.sectionId = t.attr("data-section-id")),
      a = (this.Carousel = t.find(".swiper-container"));
    new Swiper(a, {
      autoHeight: !1,
      centeredSlides: !1,
      grabCursor: !0,
      keyboard: { enabled: !0, onlyInViewport: !0 },
      loop: !0,
      autoplay: !1,
      navigation: {
        nextEl: "#swiper-button-next-" + i,
        prevEl: "#swiper-button-prev-" + i,
      },
      slidesPerView: "auto",
    });
  }),
  $(function () {
    var e = new theme.Sections();
    e.register("header-section", theme.HeaderSection),
      e.register("filter-section", theme.Filter),
      e.register("home-slideshow", theme.HomeSlideshow),
      e.register("home-collections-tabbed", theme.HomeCollectionsTabbed),
      e.register("home-collection", theme.HomeCollection),
      e.register("home-collections-list", theme.HomeCollectionsList),
      e.register("home-collections-grid", theme.HomeCollectionsGrid),
      e.register("home-map", theme.HomeMap),
      e.register("home-blog-list", theme.HomeBlog),
      e.register("home-search", theme.HomeSearch),
      e.register("footer-section", theme.FooterSection),
      e.register("collection-page", theme.Collection),

      e.register("cart-page", theme.Cart),
      e.register("blog-page", theme.Blog),
      e.register("page-contact", theme.Contact),
      e.register("password-page", theme.Password),
      e.register("error-page", theme.NotFound),
      e.register("ingredients_slideshow", theme.HomeIngredientsSlideshow),
      e.register("homepage-testimonials", theme.HomeTestimonials),
      $("form").each(function () {
        $(this).validate();
      }),
      theme.smooth_scroll(),
      theme.wrap_options();
  }),
  theme.adjustMenu(),
  theme.recently_viewed(),
  (theme.customerTemplates = {
    init: function () {
      $("#recover_password_btn,#customer_login_btn").on("click", function (e) {
        e.preventDefault(),
          $("#recover_password").toggleClass("hidden"),
          $("#customer_login").toggleClass("hidden");
      }),
        $("#recover-email").hasClass("reset-success") &&
          $("#resetSuccess").removeClass("hidden"),
        $("#recover-email").hasClass("reset-error") &&
          ($("#recover_password").removeClass("hidden"),
          $("#customer_login").addClass("hidden")),
        $("#add_address").length &&
          (Shopify &&
            new Shopify.CountryProvinceSelector(
              "address_country_new",
              "address_province_new",
              { hideElement: "address_province_container_new" }
            ),
          $(".address_country_option").each(function () {
            var e = $(this).data("form-id"),
              t = "address_country_" + e,
              i = "address_province_" + e,
              a = "address_province_container_" + e;
            new Shopify.CountryProvinceSelector(t, i, { hideElement: a });
          }));
    },
  }),
  $(document).one("touchstart", function () {
    theme.Helpers.setTouch();
  }),
  (theme.init = function () {
    theme.customerTemplates.init();
  }),
  $(theme.init),
  void 0 === window.Shopify && (window.Shopify = {}),
  (Shopify.each = function (e, t) {
    for (var i = 0; i < e.length; i++) t(e[i], i);
  }),
  (Shopify.map = function (e, t) {
    for (var i = [], a = 0; a < e.length; a++) i.push(t(e[a], a));
    return i;
  }),
  (Shopify.arrayIncludes = function (e, t) {
    for (var i = 0; i < e.length; i++) if (e[i] == t) return !0;
    return !1;
  }),
  (Shopify.uniq = function (e) {
    for (var t = [], i = 0; i < e.length; i++)
      Shopify.arrayIncludes(t, e[i]) || t.push(e[i]);
    return t;
  }),
  (Shopify.isDefined = function (e) {
    return void 0 !== e;
  }),
  (Shopify.getClass = function (e) {
    return Object.prototype.toString.call(e).slice(8, -1);
  }),
  (Shopify.extend = function (e, t) {
    function i() {}
    (i.prototype = t.prototype),
      (e.prototype = new i()),
      (e.prototype.constructor = e),
      (e.baseConstructor = t),
      (e.superClass = t.prototype);
  }),
  (Shopify.locationSearch = function () {
    return window.location.search;
  }),
  (Shopify.locationHash = function () {
    return window.location.hash;
  }),
  (Shopify.replaceState = function (e) {
    window.history.replaceState({}, document.title, e);
  }),
  (Shopify.urlParam = function (e) {
    var t = RegExp("[?&]" + e + "=([^&#]*)").exec(Shopify.locationSearch());
    return t && decodeURIComponent(t[1].replace(/\+/g, " "));
  }),
  (Shopify.newState = function (e, t) {
    return (
      (Shopify.urlParam(e)
        ? Shopify.locationSearch().replace(
            RegExp("(" + e + "=)[^&#]+"),
            "$1" + t
          )
        : "" === Shopify.locationSearch()
        ? "?" + e + "=" + t
        : Shopify.locationSearch() + "&" + e + "=" + t) + Shopify.locationHash()
    );
  }),
  (Shopify.setParam = function (e, t) {
    Shopify.replaceState(Shopify.newState(e, t));
  }),
  (Shopify.Product = function (e) {
    Shopify.isDefined(e) && this.update(e);
  }),
  (Shopify.Product.prototype.update = function (e) {
    for (property in e) this[property] = e[property];
  }),
  (Shopify.Product.prototype.optionNames = function () {
    return "Array" == Shopify.getClass(this.options) ? this.options : [];
  }),
  (Shopify.Product.prototype.optionValues = function (e) {
    if (!Shopify.isDefined(this.variants)) return null;
    var t = Shopify.map(this.variants, function (t) {
      var i = "option" + (e + 1);
      return null == t[i] ? null : t[i];
    });
    return null == t[0] ? null : Shopify.uniq(t);
  }),
  (Shopify.Product.prototype.getVariant = function (e) {
    var t = null;
    return (
      e.length != this.options.length ||
        Shopify.each(this.variants, function (i) {
          for (var a = !0, s = 0; s < e.length; s++)
            i["option" + (s + 1)] != e[s] && (a = !1);
          1 != a || (t = i);
        }),
      t
    );
  }),
  (Shopify.Product.prototype.getVariantById = function (e) {
    for (var t = 0; t < this.variants.length; t++) {
      var i = this.variants[t];
      if (e == i.id) return i;
    }
    return null;
  }),
  (Shopify.money_format = "${{amount}}"),
  (Shopify.formatMoney = function (e, t) {
    function i(e, t) {
      return void 0 === e ? t : e;
    }
    function a(e, t, a, s) {
      if (
        ((t = i(t, 2)), (a = i(a, ",")), (s = i(s, ".")), isNaN(e) || null == e)
      )
        return 0;
      var n = (e = (e / 100).toFixed(t)).split(".");
      return (
        n[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + a) +
        (n[1] ? s + n[1] : "")
      );
    }
    "string" == typeof e && (e = e.replace(".", ""));
    var s = "",
      n = /\{\{\s*(\w+)\s*\}\}/,
      o = t || this.money_format;
    switch (o.match(n)[1]) {
      case "amount":
        s = a(e, 2);
        break;
      case "amount_no_decimals":
        s = a(e, 0);
        break;
      case "amount_with_comma_separator":
        s = a(e, 2, ".", ",");
        break;
      case "amount_no_decimals_with_comma_separator":
        s = a(e, 0, ".", ",");
        break;
      case "amount_no_decimals_with_space_separator":
        s = a(e, 0, " ");
        break;
      case "amount_with_apostrophe_separator":
        s = a(e, 2, "'");
    }
    return o.replace(n, s);
  }),
  (Shopify.OptionSelectors = function (e, t) {
    return (
      (this.selectorDivClass = "selector-wrapper"),
      (this.selectorClass = "single-option-selector"),
      (this.variantIdFieldIdSuffix = "-variant-id"),
      (this.variantIdField = null),
      (this.historyState = null),
      (this.selectors = []),
      (this.domIdPrefix = e),
      (this.product = new Shopify.Product(t.product)),
      (this.onVariantSelected = Shopify.isDefined(t.onVariantSelected)
        ? t.onVariantSelected
        : function () {}),
      (this.setActiveThumbnail = t.setActiveThumbnail),
      (this.switchProductImage = t.switchProductImage),
      (this.settings = t.settings),
      this.replaceSelector(e),
      this.initDropdown(),
      t.enableHistoryState &&
        (this.historyState = new Shopify.OptionSelectors.HistoryState(this)),
      !0
    );
  }),
  (Shopify.OptionSelectors.prototype.initDropdown = function () {
    var e = { initialLoad: !0 };
    if (!this.selectVariantFromDropdown(e)) {
      var t = this;
      setTimeout(function () {
        t.selectVariantFromParams(e) ||
          t.fireOnChangeForFirstDropdown.call(t, e);
      });
    }
  }),
  (Shopify.OptionSelectors.prototype.fireOnChangeForFirstDropdown = function (
    e
  ) {
    this.selectors[0].element.onchange(e);
  }),
  (Shopify.OptionSelectors.prototype.selectVariantFromParamsOrDropdown =
    function (e) {
      this.selectVariantFromParams(e) || this.selectVariantFromDropdown(e);
    }),
  (Shopify.OptionSelectors.prototype.replaceSelector = function (e) {
    var t = document.getElementById(e),
      i = t.parentNode;
    Shopify.each(this.buildSelectors(), function (e) {
      i.insertBefore(e, t);
    }),
      (t.style.display = "none"),
      (this.variantIdField = t);
  }),
  (Shopify.OptionSelectors.prototype.selectVariantFromDropdown = function (e) {
    var t = document
      .getElementById(this.domIdPrefix)
      .querySelector("[selected]");
    if (
      (t ||
        (t = document
          .getElementById(this.domIdPrefix)
          .querySelector('[selected="selected"]')),
      !t)
    )
      return !1;
    var i = t.value;
    return this.selectVariant(i, e);
  }),
  (Shopify.OptionSelectors.prototype.selectVariantFromParams = function (e) {
    var t = Shopify.urlParam("variant");
    return this.selectVariant(t, e);
  }),
  (Shopify.OptionSelectors.prototype.selectVariant = function (e, t) {
    var i = this.product.getVariantById(e);
    if (null == i) return !1;
    for (var a = 0; a < this.selectors.length; a++) {
      var s = this.selectors[a].element,
        n = i[s.getAttribute("data-option")];
      null != n && this.optionExistInSelect(s, n) && (s.value = n);
    }
    return (
      "undefined" != typeof jQuery
        ? jQuery(this.selectors[0].element).trigger("change", t)
        : this.selectors[0].element.onchange(t),
      !0
    );
  }),
  (Shopify.OptionSelectors.prototype.optionExistInSelect = function (e, t) {
    for (var i = 0; i < e.options.length; i++)
      if (e.options[i].value == t) return !0;
  }),
  (Shopify.OptionSelectors.prototype.insertSelectors = function (e, t) {
    Shopify.isDefined(t) && this.setMessageElement(t),
      (this.domIdPrefix = "product-" + this.product.id + "-variant-selector");
    var i = document.getElementById(e);
    Shopify.each(this.buildSelectors(), function (e) {
      i.appendChild(e);
    });
  }),
  (Shopify.OptionSelectors.prototype.buildSelectors = function () {
    for (var e = 0; e < this.product.optionNames().length; e++) {
      var t = new Shopify.SingleOptionSelector(
        this,
        e,
        this.product.optionNames()[e],
        this.product.optionValues(e)
      );
      (t.element.disabled = !1), this.selectors.push(t);
    }
    var i = this.selectorDivClass,
      a = this.product.optionNames();
    return Shopify.map(this.selectors, function (e) {
      var t = document.createElement("div");
      if ((t.setAttribute("class", i), a.length >= 1)) {
        var s = document.createElement("label");
        (s.htmlFor = e.element.id), (s.innerHTML = e.name), t.appendChild(s);
      }
      return t.appendChild(e.element), t;
    });
  }),
  (Shopify.OptionSelectors.prototype.selectedValues = function () {
    for (var e = [], t = 0; t < this.selectors.length; t++) {
      var i = this.selectors[t].element.value;
      e.push(i);
    }
    return e;
  }),
  (Shopify.OptionSelectors.prototype.updateSelectors = function (e, t) {
    var i = this.selectedValues(),
      a = this.product.getVariant(i);
    a
      ? ((this.variantIdField.disabled = !1),
        (this.variantIdField.value = a.id))
      : (this.variantIdField.disabled = !0),
      this.onVariantSelected(a, this, t),
      null != this.historyState &&
        this.historyState.onVariantChange(a, this, t);
  }),
  (Shopify.OptionSelectorsFromDOM = function (e, t) {
    var i = t.optionNames || [],
      a = t.priceFieldExists || !0,
      s = t.delimiter || "/",
      n = this.createProductFromSelector(e, i, a, s);
    (t.product = n),
      Shopify.OptionSelectorsFromDOM.baseConstructor.call(this, e, t);
  }),
  Shopify.extend(Shopify.OptionSelectorsFromDOM, Shopify.OptionSelectors),
  (Shopify.OptionSelectorsFromDOM.prototype.createProductFromSelector =
    function (e, t, i, a) {
      Shopify.isDefined(i) || (i = !0), Shopify.isDefined(a) || (a = "/");
      var s = document.getElementById(e),
        n = s.childNodes,
        o = (s.parentNode, t.length),
        r = [];
      Shopify.each(n, function (e, s) {
        if (1 == e.nodeType && "option" == e.tagName.toLowerCase()) {
          var n = e.innerHTML.split(new RegExp("\\s*\\" + a + "\\s*"));
          0 == t.length && (o = n.length - (i ? 1 : 0));
          var l = n.slice(0, o),
            d = i ? n[o] : "",
            c =
              (e.getAttribute("value"),
              {
                available: !e.disabled,
                id: parseFloat(e.value),
                price: d,
                option1: l[0],
                option2: l[1],
                option3: l[2],
              });
          r.push(c);
        }
      });
      var l = { variants: r };
      if (0 == t.length) {
        l.options = [];
        for (var d = 0; d < o; d++) l.options[d] = "option " + (d + 1);
      } else l.options = t;
      return l;
    }),
  (Shopify.SingleOptionSelector = function (e, t, i, a) {
    (this.multiSelector = e),
      (this.values = a),
      (this.index = t),
      (this.name = i),
      (this.element = document.createElement("select"));
    for (var s = 0; s < a.length; s++) {
      var n = document.createElement("option");
      (n.value = a[s]), (n.innerHTML = a[s]), this.element.appendChild(n);
    }
    return (
      this.element.setAttribute("class", this.multiSelector.selectorClass),
      this.element.setAttribute("data-option", "option" + (t + 1)),
      (this.element.id = e.domIdPrefix + "-option-" + t),
      (this.element.onchange = function (i, a) {
        (a = a || {}), e.updateSelectors(t, a);
      }),
      !0
    );
  }),
  (Shopify.Image = {
    preload: function (e, t) {
      for (var i = 0; i < e.length; i++) {
        var a = e[i];
        this.loadImage(this.getSizedImageUrl(a, t));
      }
    },
    loadImage: function (e) {
      new Image().src = e;
    },
    switchImage: function (e, t, i) {
      if (e && t) {
        var a = this.imageSize(t.src),
          s = this.getSizedImageUrl(e.src, a);
        i ? i(s, e, t) : (t.src = s);
      }
    },
    imageSize: function (e) {
      var t = e.match(
        /.+_((?:pico|icon|thumb|small|compact|medium|large|grande)|\d{1,4}x\d{0,4}|x\d{1,4})[_\.@]/
      );
      return null !== t ? t[1] : null;
    },
    getSizedImageUrl: function (e, t) {
      if (null == t) return e;
      if ("master" == t) return this.removeProtocol(e);
      var i = e.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);
      if (null != i) {
        var a = e.split(i[0]),
          s = i[0];
        return this.removeProtocol(a[0] + "_" + t + s);
      }
      return null;
    },
    removeProtocol: function (e) {
      return e.replace(/http(s)?:/, "");
    },
  }),
  (Shopify.OptionSelectors.HistoryState = function (e) {
    this.browserSupports() && this.register(e);
  }),
  (Shopify.OptionSelectors.HistoryState.prototype.register = function (e) {
    window.addEventListener("popstate", function (t) {
      e.selectVariantFromParamsOrDropdown({ popStateCall: !0 });
    });
  }),
  (Shopify.OptionSelectors.HistoryState.prototype.onVariantChange = function (
    e,
    t,
    i
  ) {
    this.browserSupports() &&
      (!e ||
        i.initialLoad ||
        i.popStateCall ||
        Shopify.setParam("variant", e.id));
  }),
  (Shopify.OptionSelectors.HistoryState.prototype.browserSupports =
    function () {
      return window.history && window.history.replaceState;
    }),
  (function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define(t)
      : ((e = e || self).Swiper = t());
  })(this, function () {
    "use strict";
    var e =
        "undefined" == typeof document
          ? {
              body: {},
              addEventListener: function () {},
              removeEventListener: function () {},
              activeElement: { blur: function () {}, nodeName: "" },
              querySelector: function () {
                return null;
              },
              querySelectorAll: function () {
                return [];
              },
              getElementById: function () {
                return null;
              },
              createEvent: function () {
                return { initEvent: function () {} };
              },
              createElement: function () {
                return {
                  children: [],
                  childNodes: [],
                  style: {},
                  setAttribute: function () {},
                  getElementsByTagName: function () {
                    return [];
                  },
                };
              },
              location: { hash: "" },
            }
          : document,
      t =
        "undefined" == typeof window
          ? {
              document: e,
              navigator: { userAgent: "" },
              location: {},
              history: {},
              CustomEvent: function () {
                return this;
              },
              addEventListener: function () {},
              removeEventListener: function () {},
              getComputedStyle: function () {
                return {
                  getPropertyValue: function () {
                    return "";
                  },
                };
              },
              Image: function () {},
              Date: function () {},
              screen: {},
              setTimeout: function () {},
              clearTimeout: function () {},
            }
          : window,
      i = function (e) {
        for (var t = 0; t < e.length; t += 1) this[t] = e[t];
        return (this.length = e.length), this;
      };
    function a(a, s) {
      var n = [],
        o = 0;
      if (a && !s && a instanceof i) return a;
      if (a)
        if ("string" == typeof a) {
          var r,
            l,
            d = a.trim();
          if (d.indexOf("<") >= 0 && d.indexOf(">") >= 0) {
            var c = "div";
            for (
              0 === d.indexOf("<li") && (c = "ul"),
                0 === d.indexOf("<tr") && (c = "tbody"),
                (0 !== d.indexOf("<td") && 0 !== d.indexOf("<th")) ||
                  (c = "tr"),
                0 === d.indexOf("<tbody") && (c = "table"),
                0 === d.indexOf("<option") && (c = "select"),
                (l = e.createElement(c)).innerHTML = d,
                o = 0;
              o < l.childNodes.length;
              o += 1
            )
              n.push(l.childNodes[o]);
          } else
            for (
              r =
                s || "#" !== a[0] || a.match(/[ .<>:~]/)
                  ? (s || e).querySelectorAll(a.trim())
                  : [e.getElementById(a.trim().split("#")[1])],
                o = 0;
              o < r.length;
              o += 1
            )
              r[o] && n.push(r[o]);
        } else if (a.nodeType || a === t || a === e) n.push(a);
        else if (a.length > 0 && a[0].nodeType)
          for (o = 0; o < a.length; o += 1) n.push(a[o]);
      return new i(n);
    }
    function s(e) {
      for (var t = [], i = 0; i < e.length; i += 1)
        -1 === t.indexOf(e[i]) && t.push(e[i]);
      return t;
    }
    (a.fn = i.prototype), (a.Class = i), (a.Dom7 = i);
    var n = {
      addClass: function (e) {
        if (void 0 === e) return this;
        for (var t = e.split(" "), i = 0; i < t.length; i += 1)
          for (var a = 0; a < this.length; a += 1)
            void 0 !== this[a] &&
              void 0 !== this[a].classList &&
              this[a].classList.add(t[i]);
        return this;
      },
      removeClass: function (e) {
        for (var t = e.split(" "), i = 0; i < t.length; i += 1)
          for (var a = 0; a < this.length; a += 1)
            void 0 !== this[a] &&
              void 0 !== this[a].classList &&
              this[a].classList.remove(t[i]);
        return this;
      },
      hasClass: function (e) {
        return !!this[0] && this[0].classList.contains(e);
      },
      toggleClass: function (e) {
        for (var t = e.split(" "), i = 0; i < t.length; i += 1)
          for (var a = 0; a < this.length; a += 1)
            void 0 !== this[a] &&
              void 0 !== this[a].classList &&
              this[a].classList.toggle(t[i]);
        return this;
      },
      attr: function (e, t) {
        var i = arguments;
        if (1 === arguments.length && "string" == typeof e)
          return this[0] ? this[0].getAttribute(e) : void 0;
        for (var a = 0; a < this.length; a += 1)
          if (2 === i.length) this[a].setAttribute(e, t);
          else
            for (var s in e) (this[a][s] = e[s]), this[a].setAttribute(s, e[s]);
        return this;
      },
      removeAttr: function (e) {
        for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
        return this;
      },
      data: function (e, t) {
        var i;
        if (void 0 !== t) {
          for (var a = 0; a < this.length; a += 1)
            (i = this[a]).dom7ElementDataStorage ||
              (i.dom7ElementDataStorage = {}),
              (i.dom7ElementDataStorage[e] = t);
          return this;
        }
        if ((i = this[0]))
          return i.dom7ElementDataStorage && e in i.dom7ElementDataStorage
            ? i.dom7ElementDataStorage[e]
            : i.getAttribute("data-" + e) || void 0;
      },
      transform: function (e) {
        for (var t = 0; t < this.length; t += 1) {
          var i = this[t].style;
          (i.webkitTransform = e), (i.transform = e);
        }
        return this;
      },
      transition: function (e) {
        "string" != typeof e && (e += "ms");
        for (var t = 0; t < this.length; t += 1) {
          var i = this[t].style;
          (i.webkitTransitionDuration = e), (i.transitionDuration = e);
        }
        return this;
      },
      on: function () {
        for (var e, t = [], i = arguments.length; i--; ) t[i] = arguments[i];
        var s = t[0],
          n = t[1],
          o = t[2],
          r = t[3];
        function l(e) {
          var t = e.target;
          if (t) {
            var i = e.target.dom7EventData || [];
            if ((i.indexOf(e) < 0 && i.unshift(e), a(t).is(n))) o.apply(t, i);
            else
              for (var s = a(t).parents(), r = 0; r < s.length; r += 1)
                a(s[r]).is(n) && o.apply(s[r], i);
          }
        }
        function d(e) {
          var t = (e && e.target && e.target.dom7EventData) || [];
          t.indexOf(e) < 0 && t.unshift(e), o.apply(this, t);
        }
        "function" == typeof t[1] &&
          ((s = (e = t)[0]), (o = e[1]), (r = e[2]), (n = void 0)),
          r || (r = !1);
        for (var c, h = s.split(" "), u = 0; u < this.length; u += 1) {
          var p = this[u];
          if (n)
            for (c = 0; c < h.length; c += 1) {
              var f = h[c];
              p.dom7LiveListeners || (p.dom7LiveListeners = {}),
                p.dom7LiveListeners[f] || (p.dom7LiveListeners[f] = []),
                p.dom7LiveListeners[f].push({ listener: o, proxyListener: l }),
                p.addEventListener(f, l, r);
            }
          else
            for (c = 0; c < h.length; c += 1) {
              var m = h[c];
              p.dom7Listeners || (p.dom7Listeners = {}),
                p.dom7Listeners[m] || (p.dom7Listeners[m] = []),
                p.dom7Listeners[m].push({ listener: o, proxyListener: d }),
                p.addEventListener(m, d, r);
            }
        }
        return this;
      },
      off: function () {
        for (var e, t = [], i = arguments.length; i--; ) t[i] = arguments[i];
        var a = t[0],
          s = t[1],
          n = t[2],
          o = t[3];
        "function" == typeof t[1] &&
          ((a = (e = t)[0]), (n = e[1]), (o = e[2]), (s = void 0)),
          o || (o = !1);
        for (var r = a.split(" "), l = 0; l < r.length; l += 1)
          for (var d = r[l], c = 0; c < this.length; c += 1) {
            var h = this[c],
              u = void 0;
            if (
              (!s && h.dom7Listeners
                ? (u = h.dom7Listeners[d])
                : s && h.dom7LiveListeners && (u = h.dom7LiveListeners[d]),
              u && u.length)
            )
              for (var p = u.length - 1; p >= 0; p -= 1) {
                var f = u[p];
                (n && f.listener === n) ||
                (n &&
                  f.listener &&
                  f.listener.dom7proxy &&
                  f.listener.dom7proxy === n)
                  ? (h.removeEventListener(d, f.proxyListener, o),
                    u.splice(p, 1))
                  : n ||
                    (h.removeEventListener(d, f.proxyListener, o),
                    u.splice(p, 1));
              }
          }
        return this;
      },
      trigger: function () {
        for (var i = [], a = arguments.length; a--; ) i[a] = arguments[a];
        for (var s = i[0].split(" "), n = i[1], o = 0; o < s.length; o += 1)
          for (var r = s[o], l = 0; l < this.length; l += 1) {
            var d = this[l],
              c = void 0;
            try {
              c = new t.CustomEvent(r, {
                detail: n,
                bubbles: !0,
                cancelable: !0,
              });
            } catch (t) {
              (c = e.createEvent("Event")).initEvent(r, !0, !0), (c.detail = n);
            }
            (d.dom7EventData = i.filter(function (e, t) {
              return t > 0;
            })),
              d.dispatchEvent(c),
              (d.dom7EventData = []),
              delete d.dom7EventData;
          }
        return this;
      },
      transitionEnd: function (e) {
        var t,
          i = ["webkitTransitionEnd", "transitionend"],
          a = this;
        function s(n) {
          if (n.target === this)
            for (e.call(this, n), t = 0; t < i.length; t += 1) a.off(i[t], s);
        }
        if (e) for (t = 0; t < i.length; t += 1) a.on(i[t], s);
        return this;
      },
      outerWidth: function (e) {
        if (this.length > 0) {
          if (e) {
            var t = this.styles();
            return (
              this[0].offsetWidth +
              parseFloat(t.getPropertyValue("margin-right")) +
              parseFloat(t.getPropertyValue("margin-left"))
            );
          }
          return this[0].offsetWidth;
        }
        return null;
      },
      outerHeight: function (e) {
        if (this.length > 0) {
          if (e) {
            var t = this.styles();
            return (
              this[0].offsetHeight +
              parseFloat(t.getPropertyValue("margin-top")) +
              parseFloat(t.getPropertyValue("margin-bottom"))
            );
          }
          return this[0].offsetHeight;
        }
        return null;
      },
      offset: function () {
        if (this.length > 0) {
          var i = this[0],
            a = i.getBoundingClientRect(),
            s = e.body,
            n = i.clientTop || s.clientTop || 0,
            o = i.clientLeft || s.clientLeft || 0,
            r = i === t ? t.scrollY : i.scrollTop,
            l = i === t ? t.scrollX : i.scrollLeft;
          return { top: a.top + r - n, left: a.left + l - o };
        }
        return null;
      },
      css: function (e, i) {
        var a;
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (a = 0; a < this.length; a += 1)
              for (var s in e) this[a].style[s] = e[s];
            return this;
          }
          if (this[0])
            return t.getComputedStyle(this[0], null).getPropertyValue(e);
        }
        if (2 === arguments.length && "string" == typeof e) {
          for (a = 0; a < this.length; a += 1) this[a].style[e] = i;
          return this;
        }
        return this;
      },
      each: function (e) {
        if (!e) return this;
        for (var t = 0; t < this.length; t += 1)
          if (!1 === e.call(this[t], t, this[t])) return this;
        return this;
      },
      html: function (e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
        for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
        return this;
      },
      text: function (e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
        for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
        return this;
      },
      is: function (s) {
        var n,
          o,
          r = this[0];
        if (!r || void 0 === s) return !1;
        if ("string" == typeof s) {
          if (r.matches) return r.matches(s);
          if (r.webkitMatchesSelector) return r.webkitMatchesSelector(s);
          if (r.msMatchesSelector) return r.msMatchesSelector(s);
          for (n = a(s), o = 0; o < n.length; o += 1) if (n[o] === r) return !0;
          return !1;
        }
        if (s === e) return r === e;
        if (s === t) return r === t;
        if (s.nodeType || s instanceof i) {
          for (n = s.nodeType ? [s] : s, o = 0; o < n.length; o += 1)
            if (n[o] === r) return !0;
          return !1;
        }
        return !1;
      },
      index: function () {
        var e,
          t = this[0];
        if (t) {
          for (e = 0; null !== (t = t.previousSibling); )
            1 === t.nodeType && (e += 1);
          return e;
        }
      },
      eq: function (e) {
        if (void 0 === e) return this;
        var t,
          a = this.length;
        return new i(
          e > a - 1
            ? []
            : e < 0
            ? (t = a + e) < 0
              ? []
              : [this[t]]
            : [this[e]]
        );
      },
      append: function () {
        for (var t, a = [], s = arguments.length; s--; ) a[s] = arguments[s];
        for (var n = 0; n < a.length; n += 1) {
          t = a[n];
          for (var o = 0; o < this.length; o += 1)
            if ("string" == typeof t) {
              var r = e.createElement("div");
              for (r.innerHTML = t; r.firstChild; )
                this[o].appendChild(r.firstChild);
            } else if (t instanceof i)
              for (var l = 0; l < t.length; l += 1) this[o].appendChild(t[l]);
            else this[o].appendChild(t);
        }
        return this;
      },
      prepend: function (t) {
        var a, s;
        for (a = 0; a < this.length; a += 1)
          if ("string" == typeof t) {
            var n = e.createElement("div");
            for (n.innerHTML = t, s = n.childNodes.length - 1; s >= 0; s -= 1)
              this[a].insertBefore(n.childNodes[s], this[a].childNodes[0]);
          } else if (t instanceof i)
            for (s = 0; s < t.length; s += 1)
              this[a].insertBefore(t[s], this[a].childNodes[0]);
          else this[a].insertBefore(t, this[a].childNodes[0]);
        return this;
      },
      next: function (e) {
        return this.length > 0
          ? e
            ? this[0].nextElementSibling && a(this[0].nextElementSibling).is(e)
              ? new i([this[0].nextElementSibling])
              : new i([])
            : this[0].nextElementSibling
            ? new i([this[0].nextElementSibling])
            : new i([])
          : new i([]);
      },
      nextAll: function (e) {
        var t = [],
          s = this[0];
        if (!s) return new i([]);
        for (; s.nextElementSibling; ) {
          var n = s.nextElementSibling;
          e ? a(n).is(e) && t.push(n) : t.push(n), (s = n);
        }
        return new i(t);
      },
      prev: function (e) {
        if (this.length > 0) {
          var t = this[0];
          return e
            ? t.previousElementSibling && a(t.previousElementSibling).is(e)
              ? new i([t.previousElementSibling])
              : new i([])
            : t.previousElementSibling
            ? new i([t.previousElementSibling])
            : new i([]);
        }
        return new i([]);
      },
      prevAll: function (e) {
        var t = [],
          s = this[0];
        if (!s) return new i([]);
        for (; s.previousElementSibling; ) {
          var n = s.previousElementSibling;
          e ? a(n).is(e) && t.push(n) : t.push(n), (s = n);
        }
        return new i(t);
      },
      parent: function (e) {
        for (var t = [], i = 0; i < this.length; i += 1)
          null !== this[i].parentNode &&
            (e
              ? a(this[i].parentNode).is(e) && t.push(this[i].parentNode)
              : t.push(this[i].parentNode));
        return a(s(t));
      },
      parents: function (e) {
        for (var t = [], i = 0; i < this.length; i += 1)
          for (var n = this[i].parentNode; n; )
            e ? a(n).is(e) && t.push(n) : t.push(n), (n = n.parentNode);
        return a(s(t));
      },
      closest: function (e) {
        var t = this;
        return void 0 === e
          ? new i([])
          : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function (e) {
        for (var t = [], a = 0; a < this.length; a += 1)
          for (var s = this[a].querySelectorAll(e), n = 0; n < s.length; n += 1)
            t.push(s[n]);
        return new i(t);
      },
      children: function (e) {
        for (var t = [], n = 0; n < this.length; n += 1)
          for (var o = this[n].childNodes, r = 0; r < o.length; r += 1)
            e
              ? 1 === o[r].nodeType && a(o[r]).is(e) && t.push(o[r])
              : 1 === o[r].nodeType && t.push(o[r]);
        return new i(s(t));
      },
      filter: function (e) {
        for (var t = [], a = 0; a < this.length; a += 1)
          e.call(this[a], a, this[a]) && t.push(this[a]);
        return new i(t);
      },
      remove: function () {
        for (var e = 0; e < this.length; e += 1)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      },
      add: function () {
        for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
        var i, s;
        for (i = 0; i < e.length; i += 1) {
          var n = a(e[i]);
          for (s = 0; s < n.length; s += 1)
            (this[this.length] = n[s]), (this.length += 1);
        }
        return this;
      },
      styles: function () {
        return this[0] ? t.getComputedStyle(this[0], null) : {};
      },
    };
    Object.keys(n).forEach(function (e) {
      a.fn[e] = a.fn[e] || n[e];
    });
    var o = {
        deleteProps: function (e) {
          var t = e;
          Object.keys(t).forEach(function (e) {
            try {
              t[e] = null;
            } catch (e) {}
            try {
              delete t[e];
            } catch (e) {}
          });
        },
        nextTick: function (e, t) {
          return void 0 === t && (t = 0), setTimeout(e, t);
        },
        now: function () {
          return Date.now();
        },
        getTranslate: function (e, i) {
          var a, s, n;
          void 0 === i && (i = "x");
          var o = t.getComputedStyle(e, null);
          return (
            t.WebKitCSSMatrix
              ? ((s = o.transform || o.webkitTransform).split(",").length > 6 &&
                  (s = s
                    .split(", ")
                    .map(function (e) {
                      return e.replace(",", ".");
                    })
                    .join(", ")),
                (n = new t.WebKitCSSMatrix("none" === s ? "" : s)))
              : (a = (n =
                  o.MozTransform ||
                  o.OTransform ||
                  o.MsTransform ||
                  o.msTransform ||
                  o.transform ||
                  o
                    .getPropertyValue("transform")
                    .replace("translate(", "matrix(1, 0, 0, 1,"))
                  .toString()
                  .split(",")),
            "x" === i &&
              (s = t.WebKitCSSMatrix
                ? n.m41
                : 16 === a.length
                ? parseFloat(a[12])
                : parseFloat(a[4])),
            "y" === i &&
              (s = t.WebKitCSSMatrix
                ? n.m42
                : 16 === a.length
                ? parseFloat(a[13])
                : parseFloat(a[5])),
            s || 0
          );
        },
        parseUrlQuery: function (e) {
          var i,
            a,
            s,
            n,
            o = {},
            r = e || t.location.href;
          if ("string" == typeof r && r.length)
            for (
              n = (a = (r = r.indexOf("?") > -1 ? r.replace(/\S*\?/, "") : "")
                .split("&")
                .filter(function (e) {
                  return "" !== e;
                })).length,
                i = 0;
              i < n;
              i += 1
            )
              (s = a[i].replace(/#\S+/g, "").split("=")),
                (o[decodeURIComponent(s[0])] =
                  void 0 === s[1] ? void 0 : decodeURIComponent(s[1]) || "");
          return o;
        },
        isObject: function (e) {
          return (
            "object" == typeof e &&
            null !== e &&
            e.constructor &&
            e.constructor === Object
          );
        },
        extend: function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          for (var i = Object(e[0]), a = 1; a < e.length; a += 1) {
            var s = e[a];
            if (null != s)
              for (
                var n = Object.keys(Object(s)), r = 0, l = n.length;
                r < l;
                r += 1
              ) {
                var d = n[r],
                  c = Object.getOwnPropertyDescriptor(s, d);
                void 0 !== c &&
                  c.enumerable &&
                  (o.isObject(i[d]) && o.isObject(s[d])
                    ? o.extend(i[d], s[d])
                    : !o.isObject(i[d]) && o.isObject(s[d])
                    ? ((i[d] = {}), o.extend(i[d], s[d]))
                    : (i[d] = s[d]));
              }
          }
          return i;
        },
      },
      r = {
        touch:
          (t.Modernizr && !0 === t.Modernizr.touch) ||
          !!(
            t.navigator.maxTouchPoints > 0 ||
            "ontouchstart" in t ||
            (t.DocumentTouch && e instanceof t.DocumentTouch)
          ),
        pointerEvents:
          !!t.PointerEvent &&
          "maxTouchPoints" in t.navigator &&
          t.navigator.maxTouchPoints > 0,
        observer: "MutationObserver" in t || "WebkitMutationObserver" in t,
        passiveListener: (function () {
          var e = !1;
          try {
            var i = Object.defineProperty({}, "passive", {
              get: function () {
                e = !0;
              },
            });
            t.addEventListener("testPassiveListener", null, i);
          } catch (e) {}
          return e;
        })(),
        gestures: "ongesturestart" in t,
      },
      l = function (e) {
        void 0 === e && (e = {});
        var t = this;
        (t.params = e),
          (t.eventsListeners = {}),
          t.params &&
            t.params.on &&
            Object.keys(t.params.on).forEach(function (e) {
              t.on(e, t.params.on[e]);
            });
      },
      d = { components: { configurable: !0 } };
    (l.prototype.on = function (e, t, i) {
      var a = this;
      if ("function" != typeof t) return a;
      var s = i ? "unshift" : "push";
      return (
        e.split(" ").forEach(function (e) {
          a.eventsListeners[e] || (a.eventsListeners[e] = []),
            a.eventsListeners[e][s](t);
        }),
        a
      );
    }),
      (l.prototype.once = function (e, t, i) {
        var a = this;
        if ("function" != typeof t) return a;
        function s() {
          for (var i = [], n = arguments.length; n--; ) i[n] = arguments[n];
          a.off(e, s), s.f7proxy && delete s.f7proxy, t.apply(a, i);
        }
        return (s.f7proxy = t), a.on(e, s, i);
      }),
      (l.prototype.off = function (e, t) {
        var i = this;
        return i.eventsListeners
          ? (e.split(" ").forEach(function (e) {
              void 0 === t
                ? (i.eventsListeners[e] = [])
                : i.eventsListeners[e] &&
                  i.eventsListeners[e].length &&
                  i.eventsListeners[e].forEach(function (a, s) {
                    (a === t || (a.f7proxy && a.f7proxy === t)) &&
                      i.eventsListeners[e].splice(s, 1);
                  });
            }),
            i)
          : i;
      }),
      (l.prototype.emit = function () {
        for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
        var i,
          a,
          s,
          n = this;
        return n.eventsListeners
          ? ("string" == typeof e[0] || Array.isArray(e[0])
              ? ((i = e[0]), (a = e.slice(1, e.length)), (s = n))
              : ((i = e[0].events), (a = e[0].data), (s = e[0].context || n)),
            (Array.isArray(i) ? i : i.split(" ")).forEach(function (e) {
              if (n.eventsListeners && n.eventsListeners[e]) {
                var t = [];
                n.eventsListeners[e].forEach(function (e) {
                  t.push(e);
                }),
                  t.forEach(function (e) {
                    e.apply(s, a);
                  });
              }
            }),
            n)
          : n;
      }),
      (l.prototype.useModulesParams = function (e) {
        var t = this;
        t.modules &&
          Object.keys(t.modules).forEach(function (i) {
            var a = t.modules[i];
            a.params && o.extend(e, a.params);
          });
      }),
      (l.prototype.useModules = function (e) {
        void 0 === e && (e = {});
        var t = this;
        t.modules &&
          Object.keys(t.modules).forEach(function (i) {
            var a = t.modules[i],
              s = e[i] || {};
            a.instance &&
              Object.keys(a.instance).forEach(function (e) {
                var i = a.instance[e];
                t[e] = "function" == typeof i ? i.bind(t) : i;
              }),
              a.on &&
                t.on &&
                Object.keys(a.on).forEach(function (e) {
                  t.on(e, a.on[e]);
                }),
              a.create && a.create.bind(t)(s);
          });
      }),
      (d.components.set = function (e) {
        this.use && this.use(e);
      }),
      (l.installModule = function (e) {
        for (var t = [], i = arguments.length - 1; i-- > 0; )
          t[i] = arguments[i + 1];
        var a = this;
        a.prototype.modules || (a.prototype.modules = {});
        var s =
          e.name || Object.keys(a.prototype.modules).length + "_" + o.now();
        return (
          (a.prototype.modules[s] = e),
          e.proto &&
            Object.keys(e.proto).forEach(function (t) {
              a.prototype[t] = e.proto[t];
            }),
          e.static &&
            Object.keys(e.static).forEach(function (t) {
              a[t] = e.static[t];
            }),
          e.install && e.install.apply(a, t),
          a
        );
      }),
      (l.use = function (e) {
        for (var t = [], i = arguments.length - 1; i-- > 0; )
          t[i] = arguments[i + 1];
        var a = this;
        return Array.isArray(e)
          ? (e.forEach(function (e) {
              return a.installModule(e);
            }),
            a)
          : a.installModule.apply(a, [e].concat(t));
      }),
      Object.defineProperties(l, d);
    var c,
      h,
      u,
      p,
      f,
      m,
      v,
      g,
      b,
      y,
      w,
      x,
      $,
      C,
      S,
      T = {
        updateSize: function () {
          var e,
            t,
            i = this.$el;
          (e =
            void 0 !== this.params.width
              ? this.params.width
              : i[0].clientWidth),
            (t =
              void 0 !== this.params.height
                ? this.params.height
                : i[0].clientHeight),
            (0 === e && this.isHorizontal()) ||
              (0 === t && this.isVertical()) ||
              ((e =
                e -
                parseInt(i.css("padding-left"), 10) -
                parseInt(i.css("padding-right"), 10)),
              (t =
                t -
                parseInt(i.css("padding-top"), 10) -
                parseInt(i.css("padding-bottom"), 10)),
              o.extend(this, {
                width: e,
                height: t,
                size: this.isHorizontal() ? e : t,
              }));
        },
        updateSlides: function () {
          var e = this.params,
            i = this.$wrapperEl,
            a = this.size,
            s = this.rtlTranslate,
            n = this.wrongRTL,
            r = this.virtual && e.virtual.enabled,
            l = r ? this.virtual.slides.length : this.slides.length,
            d = i.children("." + this.params.slideClass),
            c = r ? this.virtual.slides.length : d.length,
            h = [],
            u = [],
            p = [];
          function f(t) {
            return !e.cssMode || t !== d.length - 1;
          }
          var m = e.slidesOffsetBefore;
          "function" == typeof m && (m = e.slidesOffsetBefore.call(this));
          var v = e.slidesOffsetAfter;
          "function" == typeof v && (v = e.slidesOffsetAfter.call(this));
          var g = this.snapGrid.length,
            b = this.snapGrid.length,
            y = e.spaceBetween,
            w = -m,
            x = 0,
            $ = 0;
          if (void 0 !== a) {
            var C, S;
            "string" == typeof y &&
              y.indexOf("%") >= 0 &&
              (y = (parseFloat(y.replace("%", "")) / 100) * a),
              (this.virtualSize = -y),
              s
                ? d.css({ marginLeft: "", marginTop: "" })
                : d.css({ marginRight: "", marginBottom: "" }),
              e.slidesPerColumn > 1 &&
                ((C =
                  Math.floor(c / e.slidesPerColumn) ===
                  c / this.params.slidesPerColumn
                    ? c
                    : Math.ceil(c / e.slidesPerColumn) * e.slidesPerColumn),
                "auto" !== e.slidesPerView &&
                  "row" === e.slidesPerColumnFill &&
                  (C = Math.max(C, e.slidesPerView * e.slidesPerColumn)));
            for (
              var T,
                E = e.slidesPerColumn,
                _ = C / E,
                M = Math.floor(c / e.slidesPerColumn),
                k = 0;
              k < c;
              k += 1
            ) {
              S = 0;
              var P = d.eq(k);
              if (e.slidesPerColumn > 1) {
                var I = void 0,
                  z = void 0,
                  L = void 0;
                if ("row" === e.slidesPerColumnFill && e.slidesPerGroup > 1) {
                  var D = Math.floor(
                      k / (e.slidesPerGroup * e.slidesPerColumn)
                    ),
                    O = k - e.slidesPerColumn * e.slidesPerGroup * D,
                    A =
                      0 === D
                        ? e.slidesPerGroup
                        : Math.min(
                            Math.ceil((c - D * E * e.slidesPerGroup) / E),
                            e.slidesPerGroup
                          );
                  (I =
                    (z =
                      O - (L = Math.floor(O / A)) * A + D * e.slidesPerGroup) +
                    (L * C) / E),
                    P.css({
                      "-webkit-box-ordinal-group": I,
                      "-moz-box-ordinal-group": I,
                      "-ms-flex-order": I,
                      "-webkit-order": I,
                      order: I,
                    });
                } else
                  "column" === e.slidesPerColumnFill
                    ? ((L = k - (z = Math.floor(k / E)) * E),
                      (z > M || (z === M && L === E - 1)) &&
                        (L += 1) >= E &&
                        ((L = 0), (z += 1)))
                    : (z = k - (L = Math.floor(k / _)) * _);
                P.css(
                  "margin-" + (this.isHorizontal() ? "top" : "left"),
                  0 !== L && e.spaceBetween && e.spaceBetween + "px"
                );
              }
              if ("none" !== P.css("display")) {
                if ("auto" === e.slidesPerView) {
                  var F = t.getComputedStyle(P[0], null),
                    H = P[0].style.transform,
                    B = P[0].style.webkitTransform;
                  if (
                    (H && (P[0].style.transform = "none"),
                    B && (P[0].style.webkitTransform = "none"),
                    e.roundLengths)
                  )
                    S = this.isHorizontal()
                      ? P.outerWidth(!0)
                      : P.outerHeight(!0);
                  else if (this.isHorizontal()) {
                    var j = parseFloat(F.getPropertyValue("width")),
                      q = parseFloat(F.getPropertyValue("padding-left")),
                      V = parseFloat(F.getPropertyValue("padding-right")),
                      R = parseFloat(F.getPropertyValue("margin-left")),
                      N = parseFloat(F.getPropertyValue("margin-right")),
                      X = F.getPropertyValue("box-sizing");
                    S = X && "border-box" === X ? j + R + N : j + q + V + R + N;
                  } else {
                    var Y = parseFloat(F.getPropertyValue("height")),
                      G = parseFloat(F.getPropertyValue("padding-top")),
                      W = parseFloat(F.getPropertyValue("padding-bottom")),
                      U = parseFloat(F.getPropertyValue("margin-top")),
                      Z = parseFloat(F.getPropertyValue("margin-bottom")),
                      K = F.getPropertyValue("box-sizing");
                    S = K && "border-box" === K ? Y + U + Z : Y + G + W + U + Z;
                  }
                  H && (P[0].style.transform = H),
                    B && (P[0].style.webkitTransform = B),
                    e.roundLengths && (S = Math.floor(S));
                } else
                  (S = (a - (e.slidesPerView - 1) * y) / e.slidesPerView),
                    e.roundLengths && (S = Math.floor(S)),
                    d[k] &&
                      (this.isHorizontal()
                        ? (d[k].style.width = S + "px")
                        : (d[k].style.height = S + "px"));
                d[k] && (d[k].swiperSlideSize = S),
                  p.push(S),
                  e.centeredSlides
                    ? ((w = w + S / 2 + x / 2 + y),
                      0 === x && 0 !== k && (w = w - a / 2 - y),
                      0 === k && (w = w - a / 2 - y),
                      Math.abs(w) < 0.001 && (w = 0),
                      e.roundLengths && (w = Math.floor(w)),
                      $ % e.slidesPerGroup == 0 && h.push(w),
                      u.push(w))
                    : (e.roundLengths && (w = Math.floor(w)),
                      ($ - Math.min(this.params.slidesPerGroupSkip, $)) %
                        this.params.slidesPerGroup ==
                        0 && h.push(w),
                      u.push(w),
                      (w = w + S + y)),
                  (this.virtualSize += S + y),
                  (x = S),
                  ($ += 1);
              }
            }
            if (
              ((this.virtualSize = Math.max(this.virtualSize, a) + v),
              s &&
                n &&
                ("slide" === e.effect || "coverflow" === e.effect) &&
                i.css({ width: this.virtualSize + e.spaceBetween + "px" }),
              e.setWrapperSize &&
                (this.isHorizontal()
                  ? i.css({ width: this.virtualSize + e.spaceBetween + "px" })
                  : i.css({
                      height: this.virtualSize + e.spaceBetween + "px",
                    })),
              e.slidesPerColumn > 1 &&
                ((this.virtualSize = (S + e.spaceBetween) * C),
                (this.virtualSize =
                  Math.ceil(this.virtualSize / e.slidesPerColumn) -
                  e.spaceBetween),
                this.isHorizontal()
                  ? i.css({ width: this.virtualSize + e.spaceBetween + "px" })
                  : i.css({ height: this.virtualSize + e.spaceBetween + "px" }),
                e.centeredSlides))
            ) {
              T = [];
              for (var Q = 0; Q < h.length; Q += 1) {
                var J = h[Q];
                e.roundLengths && (J = Math.floor(J)),
                  h[Q] < this.virtualSize + h[0] && T.push(J);
              }
              h = T;
            }
            if (!e.centeredSlides) {
              T = [];
              for (var ee = 0; ee < h.length; ee += 1) {
                var te = h[ee];
                e.roundLengths && (te = Math.floor(te)),
                  h[ee] <= this.virtualSize - a && T.push(te);
              }
              (h = T),
                Math.floor(this.virtualSize - a) - Math.floor(h[h.length - 1]) >
                  1 && h.push(this.virtualSize - a);
            }
            if (
              (0 === h.length && (h = [0]),
              0 !== e.spaceBetween &&
                (this.isHorizontal()
                  ? s
                    ? d.filter(f).css({ marginLeft: y + "px" })
                    : d.filter(f).css({ marginRight: y + "px" })
                  : d.filter(f).css({ marginBottom: y + "px" })),
              e.centeredSlides && e.centeredSlidesBounds)
            ) {
              var ie = 0;
              p.forEach(function (t) {
                ie += t + (e.spaceBetween ? e.spaceBetween : 0);
              });
              var ae = (ie -= e.spaceBetween) - a;
              h = h.map(function (e) {
                return e < 0 ? -m : e > ae ? ae + v : e;
              });
            }
            if (e.centerInsufficientSlides) {
              var se = 0;
              if (
                (p.forEach(function (t) {
                  se += t + (e.spaceBetween ? e.spaceBetween : 0);
                }),
                (se -= e.spaceBetween) < a)
              ) {
                var ne = (a - se) / 2;
                h.forEach(function (e, t) {
                  h[t] = e - ne;
                }),
                  u.forEach(function (e, t) {
                    u[t] = e + ne;
                  });
              }
            }
            o.extend(this, {
              slides: d,
              snapGrid: h,
              slidesGrid: u,
              slidesSizesGrid: p,
            }),
              c !== l && this.emit("slidesLengthChange"),
              h.length !== g &&
                (this.params.watchOverflow && this.checkOverflow(),
                this.emit("snapGridLengthChange")),
              u.length !== b && this.emit("slidesGridLengthChange"),
              (e.watchSlidesProgress || e.watchSlidesVisibility) &&
                this.updateSlidesOffset();
          }
        },
        updateAutoHeight: function (e) {
          var t,
            i = [],
            a = 0;
          if (
            ("number" == typeof e
              ? this.setTransition(e)
              : !0 === e && this.setTransition(this.params.speed),
            "auto" !== this.params.slidesPerView &&
              this.params.slidesPerView > 1)
          )
            if (this.params.centeredSlides) i.push.apply(i, this.visibleSlides);
            else
              for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
                var s = this.activeIndex + t;
                if (s > this.slides.length) break;
                i.push(this.slides.eq(s)[0]);
              }
          else i.push(this.slides.eq(this.activeIndex)[0]);
          for (t = 0; t < i.length; t += 1)
            if (void 0 !== i[t]) {
              var n = i[t].offsetHeight;
              a = n > a ? n : a;
            }
          a && this.$wrapperEl.css("height", a + "px");
        },
        updateSlidesOffset: function () {
          for (var e = this.slides, t = 0; t < e.length; t += 1)
            e[t].swiperSlideOffset = this.isHorizontal()
              ? e[t].offsetLeft
              : e[t].offsetTop;
        },
        updateSlidesProgress: function (e) {
          void 0 === e && (e = (this && this.translate) || 0);
          var t = this.params,
            i = this.slides,
            s = this.rtlTranslate;
          if (0 !== i.length) {
            void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
            var n = -e;
            s && (n = e),
              i.removeClass(t.slideVisibleClass),
              (this.visibleSlidesIndexes = []),
              (this.visibleSlides = []);
            for (var o = 0; o < i.length; o += 1) {
              var r = i[o],
                l =
                  (n +
                    (t.centeredSlides ? this.minTranslate() : 0) -
                    r.swiperSlideOffset) /
                  (r.swiperSlideSize + t.spaceBetween);
              if (
                t.watchSlidesVisibility ||
                (t.centeredSlides && t.autoHeight)
              ) {
                var d = -(n - r.swiperSlideOffset),
                  c = d + this.slidesSizesGrid[o];
                ((d >= 0 && d < this.size - 1) ||
                  (c > 1 && c <= this.size) ||
                  (d <= 0 && c >= this.size)) &&
                  (this.visibleSlides.push(r),
                  this.visibleSlidesIndexes.push(o),
                  i.eq(o).addClass(t.slideVisibleClass));
              }
              r.progress = s ? -l : l;
            }
            this.visibleSlides = a(this.visibleSlides);
          }
        },
        updateProgress: function (e) {
          if (void 0 === e) {
            var t = this.rtlTranslate ? -1 : 1;
            e = (this && this.translate && this.translate * t) || 0;
          }
          var i = this.params,
            a = this.maxTranslate() - this.minTranslate(),
            s = this.progress,
            n = this.isBeginning,
            r = this.isEnd,
            l = n,
            d = r;
          0 === a
            ? ((s = 0), (n = !0), (r = !0))
            : ((n = (s = (e - this.minTranslate()) / a) <= 0), (r = s >= 1)),
            o.extend(this, { progress: s, isBeginning: n, isEnd: r }),
            (i.watchSlidesProgress ||
              i.watchSlidesVisibility ||
              (i.centeredSlides && i.autoHeight)) &&
              this.updateSlidesProgress(e),
            n && !l && this.emit("reachBeginning toEdge"),
            r && !d && this.emit("reachEnd toEdge"),
            ((l && !n) || (d && !r)) && this.emit("fromEdge"),
            this.emit("progress", s);
        },
        updateSlidesClasses: function () {
          var e,
            t = this.slides,
            i = this.params,
            a = this.$wrapperEl,
            s = this.activeIndex,
            n = this.realIndex,
            o = this.virtual && i.virtual.enabled;
          t.removeClass(
            i.slideActiveClass +
              " " +
              i.slideNextClass +
              " " +
              i.slidePrevClass +
              " " +
              i.slideDuplicateActiveClass +
              " " +
              i.slideDuplicateNextClass +
              " " +
              i.slideDuplicatePrevClass
          ),
            (e = o
              ? this.$wrapperEl.find(
                  "." + i.slideClass + '[data-swiper-slide-index="' + s + '"]'
                )
              : t.eq(s)).addClass(i.slideActiveClass),
            i.loop &&
              (e.hasClass(i.slideDuplicateClass)
                ? a
                    .children(
                      "." +
                        i.slideClass +
                        ":not(." +
                        i.slideDuplicateClass +
                        ')[data-swiper-slide-index="' +
                        n +
                        '"]'
                    )
                    .addClass(i.slideDuplicateActiveClass)
                : a
                    .children(
                      "." +
                        i.slideClass +
                        "." +
                        i.slideDuplicateClass +
                        '[data-swiper-slide-index="' +
                        n +
                        '"]'
                    )
                    .addClass(i.slideDuplicateActiveClass));
          var r = e
            .nextAll("." + i.slideClass)
            .eq(0)
            .addClass(i.slideNextClass);
          i.loop && 0 === r.length && (r = t.eq(0)).addClass(i.slideNextClass);
          var l = e
            .prevAll("." + i.slideClass)
            .eq(0)
            .addClass(i.slidePrevClass);
          i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass),
            i.loop &&
              (r.hasClass(i.slideDuplicateClass)
                ? a
                    .children(
                      "." +
                        i.slideClass +
                        ":not(." +
                        i.slideDuplicateClass +
                        ')[data-swiper-slide-index="' +
                        r.attr("data-swiper-slide-index") +
                        '"]'
                    )
                    .addClass(i.slideDuplicateNextClass)
                : a
                    .children(
                      "." +
                        i.slideClass +
                        "." +
                        i.slideDuplicateClass +
                        '[data-swiper-slide-index="' +
                        r.attr("data-swiper-slide-index") +
                        '"]'
                    )
                    .addClass(i.slideDuplicateNextClass),
              l.hasClass(i.slideDuplicateClass)
                ? a
                    .children(
                      "." +
                        i.slideClass +
                        ":not(." +
                        i.slideDuplicateClass +
                        ')[data-swiper-slide-index="' +
                        l.attr("data-swiper-slide-index") +
                        '"]'
                    )
                    .addClass(i.slideDuplicatePrevClass)
                : a
                    .children(
                      "." +
                        i.slideClass +
                        "." +
                        i.slideDuplicateClass +
                        '[data-swiper-slide-index="' +
                        l.attr("data-swiper-slide-index") +
                        '"]'
                    )
                    .addClass(i.slideDuplicatePrevClass));
        },
        updateActiveIndex: function (e) {
          var t,
            i = this.rtlTranslate ? this.translate : -this.translate,
            a = this.slidesGrid,
            s = this.snapGrid,
            n = this.params,
            r = this.activeIndex,
            l = this.realIndex,
            d = this.snapIndex,
            c = e;
          if (void 0 === c) {
            for (var h = 0; h < a.length; h += 1)
              void 0 !== a[h + 1]
                ? i >= a[h] && i < a[h + 1] - (a[h + 1] - a[h]) / 2
                  ? (c = h)
                  : i >= a[h] && i < a[h + 1] && (c = h + 1)
                : i >= a[h] && (c = h);
            n.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
          }
          if (s.indexOf(i) >= 0) t = s.indexOf(i);
          else {
            var u = Math.min(n.slidesPerGroupSkip, c);
            t = u + Math.floor((c - u) / n.slidesPerGroup);
          }
          if ((t >= s.length && (t = s.length - 1), c !== r)) {
            var p = parseInt(
              this.slides.eq(c).attr("data-swiper-slide-index") || c,
              10
            );
            o.extend(this, {
              snapIndex: t,
              realIndex: p,
              previousIndex: r,
              activeIndex: c,
            }),
              this.emit("activeIndexChange"),
              this.emit("snapIndexChange"),
              l !== p && this.emit("realIndexChange"),
              (this.initialized || this.runCallbacksOnInit) &&
                this.emit("slideChange");
          } else
            t !== d && ((this.snapIndex = t), this.emit("snapIndexChange"));
        },
        updateClickedSlide: function (e) {
          var t = this.params,
            i = a(e.target).closest("." + t.slideClass)[0],
            s = !1;
          if (i)
            for (var n = 0; n < this.slides.length; n += 1)
              this.slides[n] === i && (s = !0);
          if (!i || !s)
            return (
              (this.clickedSlide = void 0), void (this.clickedIndex = void 0)
            );
          (this.clickedSlide = i),
            this.virtual && this.params.virtual.enabled
              ? (this.clickedIndex = parseInt(
                  a(i).attr("data-swiper-slide-index"),
                  10
                ))
              : (this.clickedIndex = a(i).index()),
            t.slideToClickedSlide &&
              void 0 !== this.clickedIndex &&
              this.clickedIndex !== this.activeIndex &&
              this.slideToClickedSlide();
        },
      },
      E = {
        getTranslate: function (e) {
          void 0 === e && (e = this.isHorizontal() ? "x" : "y");
          var t = this.params,
            i = this.rtlTranslate,
            a = this.translate,
            s = this.$wrapperEl;
          if (t.virtualTranslate) return i ? -a : a;
          if (t.cssMode) return a;
          var n = o.getTranslate(s[0], e);
          return i && (n = -n), n || 0;
        },
        setTranslate: function (e, t) {
          var i = this.rtlTranslate,
            a = this.params,
            s = this.$wrapperEl,
            n = this.wrapperEl,
            o = this.progress,
            r = 0,
            l = 0;
          this.isHorizontal() ? (r = i ? -e : e) : (l = e),
            a.roundLengths && ((r = Math.floor(r)), (l = Math.floor(l))),
            a.cssMode
              ? (n[this.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                  this.isHorizontal() ? -r : -l)
              : a.virtualTranslate ||
                s.transform("translate3d(" + r + "px, " + l + "px, 0px)"),
            (this.previousTranslate = this.translate),
            (this.translate = this.isHorizontal() ? r : l);
          var d = this.maxTranslate() - this.minTranslate();
          (0 === d ? 0 : (e - this.minTranslate()) / d) !== o &&
            this.updateProgress(e),
            this.emit("setTranslate", this.translate, t);
        },
        minTranslate: function () {
          return -this.snapGrid[0];
        },
        maxTranslate: function () {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function (e, t, i, a, s) {
          var n;
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === i && (i = !0),
            void 0 === a && (a = !0);
          var o = this,
            r = o.params,
            l = o.wrapperEl;
          if (o.animating && r.preventInteractionOnTransition) return !1;
          var d,
            c = o.minTranslate(),
            h = o.maxTranslate();
          if (
            ((d = a && e > c ? c : a && e < h ? h : e),
            o.updateProgress(d),
            r.cssMode)
          ) {
            var u = o.isHorizontal();
            return (
              0 === t
                ? (l[u ? "scrollLeft" : "scrollTop"] = -d)
                : l.scrollTo
                ? l.scrollTo(
                    (((n = {})[u ? "left" : "top"] = -d),
                    (n.behavior = "smooth"),
                    n)
                  )
                : (l[u ? "scrollLeft" : "scrollTop"] = -d),
              !0
            );
          }
          return (
            0 === t
              ? (o.setTransition(0),
                o.setTranslate(d),
                i &&
                  (o.emit("beforeTransitionStart", t, s),
                  o.emit("transitionEnd")))
              : (o.setTransition(t),
                o.setTranslate(d),
                i &&
                  (o.emit("beforeTransitionStart", t, s),
                  o.emit("transitionStart")),
                o.animating ||
                  ((o.animating = !0),
                  o.onTranslateToWrapperTransitionEnd ||
                    (o.onTranslateToWrapperTransitionEnd = function (e) {
                      o &&
                        !o.destroyed &&
                        e.target === this &&
                        (o.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          o.onTranslateToWrapperTransitionEnd
                        ),
                        o.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          o.onTranslateToWrapperTransitionEnd
                        ),
                        (o.onTranslateToWrapperTransitionEnd = null),
                        delete o.onTranslateToWrapperTransitionEnd,
                        i && o.emit("transitionEnd"));
                    }),
                  o.$wrapperEl[0].addEventListener(
                    "transitionend",
                    o.onTranslateToWrapperTransitionEnd
                  ),
                  o.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    o.onTranslateToWrapperTransitionEnd
                  ))),
            !0
          );
        },
      },
      _ = {
        slideTo: function (e, t, i, a) {
          var s;
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === i && (i = !0);
          var n = this,
            o = e;
          o < 0 && (o = 0);
          var r = n.params,
            l = n.snapGrid,
            d = n.slidesGrid,
            c = n.previousIndex,
            h = n.activeIndex,
            u = n.rtlTranslate,
            p = n.wrapperEl;
          if (n.animating && r.preventInteractionOnTransition) return !1;
          var f = Math.min(n.params.slidesPerGroupSkip, o),
            m = f + Math.floor((o - f) / n.params.slidesPerGroup);
          m >= l.length && (m = l.length - 1),
            (h || r.initialSlide || 0) === (c || 0) &&
              i &&
              n.emit("beforeSlideChangeStart");
          var v,
            g = -l[m];
          if ((n.updateProgress(g), r.normalizeSlideIndex))
            for (var b = 0; b < d.length; b += 1)
              -Math.floor(100 * g) >= Math.floor(100 * d[b]) && (o = b);
          if (n.initialized && o !== h) {
            if (!n.allowSlideNext && g < n.translate && g < n.minTranslate())
              return !1;
            if (
              !n.allowSlidePrev &&
              g > n.translate &&
              g > n.maxTranslate() &&
              (h || 0) !== o
            )
              return !1;
          }
          if (
            ((v = o > h ? "next" : o < h ? "prev" : "reset"),
            (u && -g === n.translate) || (!u && g === n.translate))
          )
            return (
              n.updateActiveIndex(o),
              r.autoHeight && n.updateAutoHeight(),
              n.updateSlidesClasses(),
              "slide" !== r.effect && n.setTranslate(g),
              "reset" !== v && (n.transitionStart(i, v), n.transitionEnd(i, v)),
              !1
            );
          if (r.cssMode) {
            var y = n.isHorizontal();
            return (
              0 === t
                ? (p[y ? "scrollLeft" : "scrollTop"] = -g)
                : p.scrollTo
                ? p.scrollTo(
                    (((s = {})[y ? "left" : "top"] = -g),
                    (s.behavior = "smooth"),
                    s)
                  )
                : (p[y ? "scrollLeft" : "scrollTop"] = -g),
              !0
            );
          }
          return (
            0 === t
              ? (n.setTransition(0),
                n.setTranslate(g),
                n.updateActiveIndex(o),
                n.updateSlidesClasses(),
                n.emit("beforeTransitionStart", t, a),
                n.transitionStart(i, v),
                n.transitionEnd(i, v))
              : (n.setTransition(t),
                n.setTranslate(g),
                n.updateActiveIndex(o),
                n.updateSlidesClasses(),
                n.emit("beforeTransitionStart", t, a),
                n.transitionStart(i, v),
                n.animating ||
                  ((n.animating = !0),
                  n.onSlideToWrapperTransitionEnd ||
                    (n.onSlideToWrapperTransitionEnd = function (e) {
                      n &&
                        !n.destroyed &&
                        e.target === this &&
                        (n.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          n.onSlideToWrapperTransitionEnd
                        ),
                        n.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          n.onSlideToWrapperTransitionEnd
                        ),
                        (n.onSlideToWrapperTransitionEnd = null),
                        delete n.onSlideToWrapperTransitionEnd,
                        n.transitionEnd(i, v));
                    }),
                  n.$wrapperEl[0].addEventListener(
                    "transitionend",
                    n.onSlideToWrapperTransitionEnd
                  ),
                  n.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    n.onSlideToWrapperTransitionEnd
                  ))),
            !0
          );
        },
        slideToLoop: function (e, t, i, a) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === i && (i = !0);
          var s = e;
          return (
            this.params.loop && (s += this.loopedSlides),
            this.slideTo(s, t, i, a)
          );
        },
        slideNext: function (e, t, i) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          var a = this.params,
            s = this.animating,
            n = this.activeIndex < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup;
          if (a.loop) {
            if (s) return !1;
            this.loopFix(), (this._clientLeft = this.$wrapperEl[0].clientLeft);
          }
          return this.slideTo(this.activeIndex + n, e, t, i);
        },
        slidePrev: function (e, t, i) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          var a = this.params,
            s = this.animating,
            n = this.snapGrid,
            o = this.slidesGrid,
            r = this.rtlTranslate;
          if (a.loop) {
            if (s) return !1;
            this.loopFix(), (this._clientLeft = this.$wrapperEl[0].clientLeft);
          }
          function l(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          var d,
            c = l(r ? this.translate : -this.translate),
            h = n.map(function (e) {
              return l(e);
            }),
            u =
              (o.map(function (e) {
                return l(e);
              }),
              n[h.indexOf(c)],
              n[h.indexOf(c) - 1]);
          return (
            void 0 === u &&
              a.cssMode &&
              n.forEach(function (e) {
                !u && c >= e && (u = e);
              }),
            void 0 !== u &&
              (d = o.indexOf(u)) < 0 &&
              (d = this.activeIndex - 1),
            this.slideTo(d, e, t, i)
          );
        },
        slideReset: function (e, t, i) {
          return (
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            this.slideTo(this.activeIndex, e, t, i)
          );
        },
        slideToClosest: function (e, t, i, a) {
          void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            void 0 === a && (a = 0.5);
          var s = this.activeIndex,
            n = Math.min(this.params.slidesPerGroupSkip, s),
            o = n + Math.floor((s - n) / this.params.slidesPerGroup),
            r = this.rtlTranslate ? this.translate : -this.translate;
          if (r >= this.snapGrid[o]) {
            var l = this.snapGrid[o];
            r - l > (this.snapGrid[o + 1] - l) * a &&
              (s += this.params.slidesPerGroup);
          } else {
            var d = this.snapGrid[o - 1];
            r - d <= (this.snapGrid[o] - d) * a &&
              (s -= this.params.slidesPerGroup);
          }
          return (
            (s = Math.max(s, 0)),
            (s = Math.min(s, this.slidesGrid.length - 1)),
            this.slideTo(s, e, t, i)
          );
        },
        slideToClickedSlide: function () {
          var e,
            t = this,
            i = t.params,
            s = t.$wrapperEl,
            n =
              "auto" === i.slidesPerView
                ? t.slidesPerViewDynamic()
                : i.slidesPerView,
            r = t.clickedIndex;
          if (i.loop) {
            if (t.animating) return;
            (e = parseInt(
              a(t.clickedSlide).attr("data-swiper-slide-index"),
              10
            )),
              i.centeredSlides
                ? r < t.loopedSlides - n / 2 ||
                  r > t.slides.length - t.loopedSlides + n / 2
                  ? (t.loopFix(),
                    (r = s
                      .children(
                        "." +
                          i.slideClass +
                          '[data-swiper-slide-index="' +
                          e +
                          '"]:not(.' +
                          i.slideDuplicateClass +
                          ")"
                      )
                      .eq(0)
                      .index()),
                    o.nextTick(function () {
                      t.slideTo(r);
                    }))
                  : t.slideTo(r)
                : r > t.slides.length - n
                ? (t.loopFix(),
                  (r = s
                    .children(
                      "." +
                        i.slideClass +
                        '[data-swiper-slide-index="' +
                        e +
                        '"]:not(.' +
                        i.slideDuplicateClass +
                        ")"
                    )
                    .eq(0)
                    .index()),
                  o.nextTick(function () {
                    t.slideTo(r);
                  }))
                : t.slideTo(r);
          } else t.slideTo(r);
        },
      },
      M = {
        loopCreate: function () {
          var t = this,
            i = t.params,
            s = t.$wrapperEl;
          s.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
          var n = s.children("." + i.slideClass);
          if (i.loopFillGroupWithBlank) {
            var o = i.slidesPerGroup - (n.length % i.slidesPerGroup);
            if (o !== i.slidesPerGroup) {
              for (var r = 0; r < o; r += 1) {
                var l = a(e.createElement("div")).addClass(
                  i.slideClass + " " + i.slideBlankClass
                );
                s.append(l);
              }
              n = s.children("." + i.slideClass);
            }
          }
          "auto" !== i.slidesPerView ||
            i.loopedSlides ||
            (i.loopedSlides = n.length),
            (t.loopedSlides = Math.ceil(
              parseFloat(i.loopedSlides || i.slidesPerView, 10)
            )),
            (t.loopedSlides += i.loopAdditionalSlides),
            t.loopedSlides > n.length && (t.loopedSlides = n.length);
          var d = [],
            c = [];
          n.each(function (e, i) {
            var s = a(i);
            e < t.loopedSlides && c.push(i),
              e < n.length && e >= n.length - t.loopedSlides && d.push(i),
              s.attr("data-swiper-slide-index", e);
          });
          for (var h = 0; h < c.length; h += 1)
            s.append(a(c[h].cloneNode(!0)).addClass(i.slideDuplicateClass));
          for (var u = d.length - 1; u >= 0; u -= 1)
            s.prepend(a(d[u].cloneNode(!0)).addClass(i.slideDuplicateClass));
        },
        loopFix: function () {
          this.emit("beforeLoopFix");
          var e,
            t = this.activeIndex,
            i = this.slides,
            a = this.loopedSlides,
            s = this.allowSlidePrev,
            n = this.allowSlideNext,
            o = this.snapGrid,
            r = this.rtlTranslate;
          (this.allowSlidePrev = !0), (this.allowSlideNext = !0);
          var l = -o[t] - this.getTranslate();
          t < a
            ? ((e = i.length - 3 * a + t),
              (e += a),
              this.slideTo(e, 0, !1, !0) &&
                0 !== l &&
                this.setTranslate((r ? -this.translate : this.translate) - l))
            : t >= i.length - a &&
              ((e = -i.length + t + a),
              (e += a),
              this.slideTo(e, 0, !1, !0) &&
                0 !== l &&
                this.setTranslate((r ? -this.translate : this.translate) - l)),
            (this.allowSlidePrev = s),
            (this.allowSlideNext = n),
            this.emit("loopFix");
        },
        loopDestroy: function () {
          var e = this.$wrapperEl,
            t = this.params,
            i = this.slides;
          e
            .children(
              "." +
                t.slideClass +
                "." +
                t.slideDuplicateClass +
                ",." +
                t.slideClass +
                "." +
                t.slideBlankClass
            )
            .remove(),
            i.removeAttr("data-swiper-slide-index");
        },
      },
      k = {
        setGrabCursor: function (e) {
          if (
            !(
              r.touch ||
              !this.params.simulateTouch ||
              (this.params.watchOverflow && this.isLocked) ||
              this.params.cssMode
            )
          ) {
            var t = this.el;
            (t.style.cursor = "move"),
              (t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
              (t.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
              (t.style.cursor = e ? "grabbing" : "grab");
          }
        },
        unsetGrabCursor: function () {
          r.touch ||
            (this.params.watchOverflow && this.isLocked) ||
            this.params.cssMode ||
            (this.el.style.cursor = "");
        },
      },
      P = {
        appendSlide: function (e) {
          var t = this.$wrapperEl,
            i = this.params;
          if (
            (i.loop && this.loopDestroy(),
            "object" == typeof e && "length" in e)
          )
            for (var a = 0; a < e.length; a += 1) e[a] && t.append(e[a]);
          else t.append(e);
          i.loop && this.loopCreate(),
            (i.observer && r.observer) || this.update();
        },
        prependSlide: function (e) {
          var t = this.params,
            i = this.$wrapperEl,
            a = this.activeIndex;
          t.loop && this.loopDestroy();
          var s = a + 1;
          if ("object" == typeof e && "length" in e) {
            for (var n = 0; n < e.length; n += 1) e[n] && i.prepend(e[n]);
            s = a + e.length;
          } else i.prepend(e);
          t.loop && this.loopCreate(),
            (t.observer && r.observer) || this.update(),
            this.slideTo(s, 0, !1);
        },
        addSlide: function (e, t) {
          var i = this.$wrapperEl,
            a = this.params,
            s = this.activeIndex;
          a.loop &&
            ((s -= this.loopedSlides),
            this.loopDestroy(),
            (this.slides = i.children("." + a.slideClass)));
          var n = this.slides.length;
          if (e <= 0) this.prependSlide(t);
          else if (e >= n) this.appendSlide(t);
          else {
            for (var o = s > e ? s + 1 : s, l = [], d = n - 1; d >= e; d -= 1) {
              var c = this.slides.eq(d);
              c.remove(), l.unshift(c);
            }
            if ("object" == typeof t && "length" in t) {
              for (var h = 0; h < t.length; h += 1) t[h] && i.append(t[h]);
              o = s > e ? s + t.length : s;
            } else i.append(t);
            for (var u = 0; u < l.length; u += 1) i.append(l[u]);
            a.loop && this.loopCreate(),
              (a.observer && r.observer) || this.update(),
              a.loop
                ? this.slideTo(o + this.loopedSlides, 0, !1)
                : this.slideTo(o, 0, !1);
          }
        },
        removeSlide: function (e) {
          var t = this.params,
            i = this.$wrapperEl,
            a = this.activeIndex;
          t.loop &&
            ((a -= this.loopedSlides),
            this.loopDestroy(),
            (this.slides = i.children("." + t.slideClass)));
          var s,
            n = a;
          if ("object" == typeof e && "length" in e) {
            for (var o = 0; o < e.length; o += 1)
              (s = e[o]),
                this.slides[s] && this.slides.eq(s).remove(),
                s < n && (n -= 1);
            n = Math.max(n, 0);
          } else
            (s = e),
              this.slides[s] && this.slides.eq(s).remove(),
              s < n && (n -= 1),
              (n = Math.max(n, 0));
          t.loop && this.loopCreate(),
            (t.observer && r.observer) || this.update(),
            t.loop
              ? this.slideTo(n + this.loopedSlides, 0, !1)
              : this.slideTo(n, 0, !1);
        },
        removeAllSlides: function () {
          for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
          this.removeSlide(e);
        },
      },
      I =
        ((c = t.navigator.platform),
        (h = t.navigator.userAgent),
        (u = {
          ios: !1,
          android: !1,
          androidChrome: !1,
          desktop: !1,
          iphone: !1,
          ipod: !1,
          ipad: !1,
          edge: !1,
          ie: !1,
          firefox: !1,
          macos: !1,
          windows: !1,
          cordova: !(!t.cordova && !t.phonegap),
          phonegap: !(!t.cordova && !t.phonegap),
          electron: !1,
        }),
        (p = t.screen.width),
        (f = t.screen.height),
        (m = h.match(/(Android);?[\s\/]+([\d.]+)?/)),
        (v = h.match(/(iPad).*OS\s([\d_]+)/)),
        (g = h.match(/(iPod)(.*OS\s([\d_]+))?/)),
        (b = !v && h.match(/(iPhone\sOS|iOS)\s([\d_]+)/)),
        (y = h.indexOf("MSIE ") >= 0 || h.indexOf("Trident/") >= 0),
        (w = h.indexOf("Edge/") >= 0),
        (x = h.indexOf("Gecko/") >= 0 && h.indexOf("Firefox/") >= 0),
        ($ = "Win32" === c),
        (C = h.toLowerCase().indexOf("electron") >= 0),
        (S = "MacIntel" === c),
        !v &&
          S &&
          r.touch &&
          ((1024 === p && 1366 === f) ||
            (834 === p && 1194 === f) ||
            (834 === p && 1112 === f) ||
            (768 === p && 1024 === f)) &&
          ((v = h.match(/(Version)\/([\d.]+)/)), (S = !1)),
        (u.ie = y),
        (u.edge = w),
        (u.firefox = x),
        m &&
          !$ &&
          ((u.os = "android"),
          (u.osVersion = m[2]),
          (u.android = !0),
          (u.androidChrome = h.toLowerCase().indexOf("chrome") >= 0)),
        (v || b || g) && ((u.os = "ios"), (u.ios = !0)),
        b && !g && ((u.osVersion = b[2].replace(/_/g, ".")), (u.iphone = !0)),
        v && ((u.osVersion = v[2].replace(/_/g, ".")), (u.ipad = !0)),
        g &&
          ((u.osVersion = g[3] ? g[3].replace(/_/g, ".") : null),
          (u.ipod = !0)),
        u.ios &&
          u.osVersion &&
          h.indexOf("Version/") >= 0 &&
          "10" === u.osVersion.split(".")[0] &&
          (u.osVersion = h.toLowerCase().split("version/")[1].split(" ")[0]),
        (u.webView =
          !(
            !(b || v || g) ||
            (!h.match(/.*AppleWebKit(?!.*Safari)/i) && !t.navigator.standalone)
          ) ||
          (t.matchMedia && t.matchMedia("(display-mode: standalone)").matches)),
        (u.webview = u.webView),
        (u.standalone = u.webView),
        (u.desktop = !(u.ios || u.android) || C),
        u.desktop &&
          ((u.electron = C),
          (u.macos = S),
          (u.windows = $),
          u.macos && (u.os = "macos"),
          u.windows && (u.os = "windows")),
        (u.pixelRatio = t.devicePixelRatio || 1),
        u);
    function z(i) {
      var s = this.touchEventsData,
        n = this.params,
        r = this.touches;
      if (!this.animating || !n.preventInteractionOnTransition) {
        var l = i;
        l.originalEvent && (l = l.originalEvent);
        var d = a(l.target);
        if (
          ("wrapper" !== n.touchEventsTarget ||
            d.closest(this.wrapperEl).length) &&
          ((s.isTouchEvent = "touchstart" === l.type),
          (s.isTouchEvent || !("which" in l) || 3 !== l.which) &&
            !(
              (!s.isTouchEvent && "button" in l && l.button > 0) ||
              (s.isTouched && s.isMoved)
            ))
        )
          if (
            n.noSwiping &&
            d.closest(
              n.noSwipingSelector ? n.noSwipingSelector : "." + n.noSwipingClass
            )[0]
          )
            this.allowClick = !0;
          else if (!n.swipeHandler || d.closest(n.swipeHandler)[0]) {
            (r.currentX =
              "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX),
              (r.currentY =
                "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY);
            var c = r.currentX,
              h = r.currentY,
              u = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection,
              p = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold;
            if (!u || !(c <= p || c >= t.screen.width - p)) {
              if (
                (o.extend(s, {
                  isTouched: !0,
                  isMoved: !1,
                  allowTouchCallbacks: !0,
                  isScrolling: void 0,
                  startMoving: void 0,
                }),
                (r.startX = c),
                (r.startY = h),
                (s.touchStartTime = o.now()),
                (this.allowClick = !0),
                this.updateSize(),
                (this.swipeDirection = void 0),
                n.threshold > 0 && (s.allowThresholdMove = !1),
                "touchstart" !== l.type)
              ) {
                var f = !0;
                d.is(s.formElements) && (f = !1),
                  e.activeElement &&
                    a(e.activeElement).is(s.formElements) &&
                    e.activeElement !== d[0] &&
                    e.activeElement.blur();
                var m = f && this.allowTouchMove && n.touchStartPreventDefault;
                (n.touchStartForcePreventDefault || m) && l.preventDefault();
              }
              this.emit("touchStart", l);
            }
          }
      }
    }
    function L(t) {
      var i = this.touchEventsData,
        s = this.params,
        n = this.touches,
        r = this.rtlTranslate,
        l = t;
      if ((l.originalEvent && (l = l.originalEvent), i.isTouched)) {
        if (!i.isTouchEvent || "mousemove" !== l.type) {
          var d =
              "touchmove" === l.type &&
              l.targetTouches &&
              (l.targetTouches[0] || l.changedTouches[0]),
            c = "touchmove" === l.type ? d.pageX : l.pageX,
            h = "touchmove" === l.type ? d.pageY : l.pageY;
          if (l.preventedByNestedSwiper)
            return (n.startX = c), void (n.startY = h);
          if (!this.allowTouchMove)
            return (
              (this.allowClick = !1),
              void (
                i.isTouched &&
                (o.extend(n, {
                  startX: c,
                  startY: h,
                  currentX: c,
                  currentY: h,
                }),
                (i.touchStartTime = o.now()))
              )
            );
          if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
            if (this.isVertical()) {
              if (
                (h < n.startY && this.translate <= this.maxTranslate()) ||
                (h > n.startY && this.translate >= this.minTranslate())
              )
                return (i.isTouched = !1), void (i.isMoved = !1);
            } else if (
              (c < n.startX && this.translate <= this.maxTranslate()) ||
              (c > n.startX && this.translate >= this.minTranslate())
            )
              return;
          if (
            i.isTouchEvent &&
            e.activeElement &&
            l.target === e.activeElement &&
            a(l.target).is(i.formElements)
          )
            return (i.isMoved = !0), void (this.allowClick = !1);
          if (
            (i.allowTouchCallbacks && this.emit("touchMove", l),
            !(l.targetTouches && l.targetTouches.length > 1))
          ) {
            (n.currentX = c), (n.currentY = h);
            var u,
              p = n.currentX - n.startX,
              f = n.currentY - n.startY;
            if (
              !(
                this.params.threshold &&
                Math.sqrt(Math.pow(p, 2) + Math.pow(f, 2)) <
                  this.params.threshold
              )
            )
              if (
                (void 0 === i.isScrolling &&
                  ((this.isHorizontal() && n.currentY === n.startY) ||
                  (this.isVertical() && n.currentX === n.startX)
                    ? (i.isScrolling = !1)
                    : p * p + f * f >= 25 &&
                      ((u =
                        (180 * Math.atan2(Math.abs(f), Math.abs(p))) / Math.PI),
                      (i.isScrolling = this.isHorizontal()
                        ? u > s.touchAngle
                        : 90 - u > s.touchAngle))),
                i.isScrolling && this.emit("touchMoveOpposite", l),
                void 0 === i.startMoving &&
                  ((n.currentX === n.startX && n.currentY === n.startY) ||
                    (i.startMoving = !0)),
                i.isScrolling)
              )
                i.isTouched = !1;
              else if (i.startMoving) {
                (this.allowClick = !1),
                  s.cssMode || l.preventDefault(),
                  s.touchMoveStopPropagation &&
                    !s.nested &&
                    l.stopPropagation(),
                  i.isMoved ||
                    (s.loop && this.loopFix(),
                    (i.startTranslate = this.getTranslate()),
                    this.setTransition(0),
                    this.animating &&
                      this.$wrapperEl.trigger(
                        "webkitTransitionEnd transitionend"
                      ),
                    (i.allowMomentumBounce = !1),
                    !s.grabCursor ||
                      (!0 !== this.allowSlideNext &&
                        !0 !== this.allowSlidePrev) ||
                      this.setGrabCursor(!0),
                    this.emit("sliderFirstMove", l)),
                  this.emit("sliderMove", l),
                  (i.isMoved = !0);
                var m = this.isHorizontal() ? p : f;
                (n.diff = m),
                  (m *= s.touchRatio),
                  r && (m = -m),
                  (this.swipeDirection = m > 0 ? "prev" : "next"),
                  (i.currentTranslate = m + i.startTranslate);
                var v = !0,
                  g = s.resistanceRatio;
                if (
                  (s.touchReleaseOnEdges && (g = 0),
                  m > 0 && i.currentTranslate > this.minTranslate()
                    ? ((v = !1),
                      s.resistance &&
                        (i.currentTranslate =
                          this.minTranslate() -
                          1 +
                          Math.pow(
                            -this.minTranslate() + i.startTranslate + m,
                            g
                          )))
                    : m < 0 &&
                      i.currentTranslate < this.maxTranslate() &&
                      ((v = !1),
                      s.resistance &&
                        (i.currentTranslate =
                          this.maxTranslate() +
                          1 -
                          Math.pow(
                            this.maxTranslate() - i.startTranslate - m,
                            g
                          ))),
                  v && (l.preventedByNestedSwiper = !0),
                  !this.allowSlideNext &&
                    "next" === this.swipeDirection &&
                    i.currentTranslate < i.startTranslate &&
                    (i.currentTranslate = i.startTranslate),
                  !this.allowSlidePrev &&
                    "prev" === this.swipeDirection &&
                    i.currentTranslate > i.startTranslate &&
                    (i.currentTranslate = i.startTranslate),
                  s.threshold > 0)
                ) {
                  if (!(Math.abs(m) > s.threshold || i.allowThresholdMove))
                    return void (i.currentTranslate = i.startTranslate);
                  if (!i.allowThresholdMove)
                    return (
                      (i.allowThresholdMove = !0),
                      (n.startX = n.currentX),
                      (n.startY = n.currentY),
                      (i.currentTranslate = i.startTranslate),
                      void (n.diff = this.isHorizontal()
                        ? n.currentX - n.startX
                        : n.currentY - n.startY)
                    );
                }
                s.followFinger &&
                  !s.cssMode &&
                  ((s.freeMode ||
                    s.watchSlidesProgress ||
                    s.watchSlidesVisibility) &&
                    (this.updateActiveIndex(), this.updateSlidesClasses()),
                  s.freeMode &&
                    (0 === i.velocities.length &&
                      i.velocities.push({
                        position: n[this.isHorizontal() ? "startX" : "startY"],
                        time: i.touchStartTime,
                      }),
                    i.velocities.push({
                      position:
                        n[this.isHorizontal() ? "currentX" : "currentY"],
                      time: o.now(),
                    })),
                  this.updateProgress(i.currentTranslate),
                  this.setTranslate(i.currentTranslate));
              }
          }
        }
      } else i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", l);
    }
    function D(e) {
      var t = this,
        i = t.touchEventsData,
        a = t.params,
        s = t.touches,
        n = t.rtlTranslate,
        r = t.$wrapperEl,
        l = t.slidesGrid,
        d = t.snapGrid,
        c = e;
      if (
        (c.originalEvent && (c = c.originalEvent),
        i.allowTouchCallbacks && t.emit("touchEnd", c),
        (i.allowTouchCallbacks = !1),
        !i.isTouched)
      )
        return (
          i.isMoved && a.grabCursor && t.setGrabCursor(!1),
          (i.isMoved = !1),
          void (i.startMoving = !1)
        );
      a.grabCursor &&
        i.isMoved &&
        i.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      var h,
        u = o.now(),
        p = u - i.touchStartTime;
      if (
        (t.allowClick &&
          (t.updateClickedSlide(c),
          t.emit("tap click", c),
          p < 300 &&
            u - i.lastClickTime < 300 &&
            t.emit("doubleTap doubleClick", c)),
        (i.lastClickTime = o.now()),
        o.nextTick(function () {
          t.destroyed || (t.allowClick = !0);
        }),
        !i.isTouched ||
          !i.isMoved ||
          !t.swipeDirection ||
          0 === s.diff ||
          i.currentTranslate === i.startTranslate)
      )
        return (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1);
      if (
        ((i.isTouched = !1),
        (i.isMoved = !1),
        (i.startMoving = !1),
        (h = a.followFinger
          ? n
            ? t.translate
            : -t.translate
          : -i.currentTranslate),
        !a.cssMode)
      )
        if (a.freeMode) {
          if (h < -t.minTranslate()) return void t.slideTo(t.activeIndex);
          if (h > -t.maxTranslate())
            return void (t.slides.length < d.length
              ? t.slideTo(d.length - 1)
              : t.slideTo(t.slides.length - 1));
          if (a.freeModeMomentum) {
            if (i.velocities.length > 1) {
              var f = i.velocities.pop(),
                m = i.velocities.pop(),
                v = f.position - m.position,
                g = f.time - m.time;
              (t.velocity = v / g),
                (t.velocity /= 2),
                Math.abs(t.velocity) < a.freeModeMinimumVelocity &&
                  (t.velocity = 0),
                (g > 150 || o.now() - f.time > 300) && (t.velocity = 0);
            } else t.velocity = 0;
            (t.velocity *= a.freeModeMomentumVelocityRatio),
              (i.velocities.length = 0);
            var b = 1e3 * a.freeModeMomentumRatio,
              y = t.velocity * b,
              w = t.translate + y;
            n && (w = -w);
            var x,
              $,
              C = !1,
              S = 20 * Math.abs(t.velocity) * a.freeModeMomentumBounceRatio;
            if (w < t.maxTranslate())
              a.freeModeMomentumBounce
                ? (w + t.maxTranslate() < -S && (w = t.maxTranslate() - S),
                  (x = t.maxTranslate()),
                  (C = !0),
                  (i.allowMomentumBounce = !0))
                : (w = t.maxTranslate()),
                a.loop && a.centeredSlides && ($ = !0);
            else if (w > t.minTranslate())
              a.freeModeMomentumBounce
                ? (w - t.minTranslate() > S && (w = t.minTranslate() + S),
                  (x = t.minTranslate()),
                  (C = !0),
                  (i.allowMomentumBounce = !0))
                : (w = t.minTranslate()),
                a.loop && a.centeredSlides && ($ = !0);
            else if (a.freeModeSticky) {
              for (var T, E = 0; E < d.length; E += 1)
                if (d[E] > -w) {
                  T = E;
                  break;
                }
              w = -(w =
                Math.abs(d[T] - w) < Math.abs(d[T - 1] - w) ||
                "next" === t.swipeDirection
                  ? d[T]
                  : d[T - 1]);
            }
            if (
              ($ &&
                t.once("transitionEnd", function () {
                  t.loopFix();
                }),
              0 !== t.velocity)
            ) {
              if (
                ((b = n
                  ? Math.abs((-w - t.translate) / t.velocity)
                  : Math.abs((w - t.translate) / t.velocity)),
                a.freeModeSticky)
              ) {
                var _ = Math.abs((n ? -w : w) - t.translate),
                  M = t.slidesSizesGrid[t.activeIndex];
                b = _ < M ? a.speed : _ < 2 * M ? 1.5 * a.speed : 2.5 * a.speed;
              }
            } else if (a.freeModeSticky) return void t.slideToClosest();
            a.freeModeMomentumBounce && C
              ? (t.updateProgress(x),
                t.setTransition(b),
                t.setTranslate(w),
                t.transitionStart(!0, t.swipeDirection),
                (t.animating = !0),
                r.transitionEnd(function () {
                  t &&
                    !t.destroyed &&
                    i.allowMomentumBounce &&
                    (t.emit("momentumBounce"),
                    t.setTransition(a.speed),
                    t.setTranslate(x),
                    r.transitionEnd(function () {
                      t && !t.destroyed && t.transitionEnd();
                    }));
                }))
              : t.velocity
              ? (t.updateProgress(w),
                t.setTransition(b),
                t.setTranslate(w),
                t.transitionStart(!0, t.swipeDirection),
                t.animating ||
                  ((t.animating = !0),
                  r.transitionEnd(function () {
                    t && !t.destroyed && t.transitionEnd();
                  })))
              : t.updateProgress(w),
              t.updateActiveIndex(),
              t.updateSlidesClasses();
          } else if (a.freeModeSticky) return void t.slideToClosest();
          (!a.freeModeMomentum || p >= a.longSwipesMs) &&
            (t.updateProgress(),
            t.updateActiveIndex(),
            t.updateSlidesClasses());
        } else {
          for (
            var k = 0, P = t.slidesSizesGrid[0], I = 0;
            I < l.length;
            I += I < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup
          ) {
            var z = I < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
            void 0 !== l[I + z]
              ? h >= l[I] && h < l[I + z] && ((k = I), (P = l[I + z] - l[I]))
              : h >= l[I] && ((k = I), (P = l[l.length - 1] - l[l.length - 2]));
          }
          var L = (h - l[k]) / P,
            D = k < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
          if (p > a.longSwipesMs) {
            if (!a.longSwipes) return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection &&
              (L >= a.longSwipesRatio ? t.slideTo(k + D) : t.slideTo(k)),
              "prev" === t.swipeDirection &&
                (L > 1 - a.longSwipesRatio ? t.slideTo(k + D) : t.slideTo(k));
          } else {
            if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
            !t.navigation ||
            (c.target !== t.navigation.nextEl &&
              c.target !== t.navigation.prevEl)
              ? ("next" === t.swipeDirection && t.slideTo(k + D),
                "prev" === t.swipeDirection && t.slideTo(k))
              : c.target === t.navigation.nextEl
              ? t.slideTo(k + D)
              : t.slideTo(k);
          }
        }
    }
    function O() {
      var e = this.params,
        t = this.el;
      if (!t || 0 !== t.offsetWidth) {
        e.breakpoints && this.setBreakpoint();
        var i = this.allowSlideNext,
          a = this.allowSlidePrev,
          s = this.snapGrid;
        (this.allowSlideNext = !0),
          (this.allowSlidePrev = !0),
          this.updateSize(),
          this.updateSlides(),
          this.updateSlidesClasses(),
          ("auto" === e.slidesPerView || e.slidesPerView > 1) &&
          this.isEnd &&
          !this.params.centeredSlides
            ? this.slideTo(this.slides.length - 1, 0, !1, !0)
            : this.slideTo(this.activeIndex, 0, !1, !0),
          this.autoplay &&
            this.autoplay.running &&
            this.autoplay.paused &&
            this.autoplay.run(),
          (this.allowSlidePrev = a),
          (this.allowSlideNext = i),
          this.params.watchOverflow &&
            s !== this.snapGrid &&
            this.checkOverflow();
      }
    }
    var A = !1;
    function F() {}
    var H = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "container",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        preventInteractionOnTransition: !1,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: 0.02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !1,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-container-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
      },
      B = {
        update: T,
        translate: E,
        transition: {
          setTransition: function (e, t) {
            this.params.cssMode || this.$wrapperEl.transition(e),
              this.emit("setTransition", e, t);
          },
          transitionStart: function (e, t) {
            void 0 === e && (e = !0);
            var i = this.activeIndex,
              a = this.params,
              s = this.previousIndex;
            if (!a.cssMode) {
              a.autoHeight && this.updateAutoHeight();
              var n = t;
              if (
                (n || (n = i > s ? "next" : i < s ? "prev" : "reset"),
                this.emit("transitionStart"),
                e && i !== s)
              ) {
                if ("reset" === n)
                  return void this.emit("slideResetTransitionStart");
                this.emit("slideChangeTransitionStart"),
                  "next" === n
                    ? this.emit("slideNextTransitionStart")
                    : this.emit("slidePrevTransitionStart");
              }
            }
          },
          transitionEnd: function (e, t) {
            void 0 === e && (e = !0);
            var i = this.activeIndex,
              a = this.previousIndex,
              s = this.params;
            if (((this.animating = !1), !s.cssMode)) {
              this.setTransition(0);
              var n = t;
              if (
                (n || (n = i > a ? "next" : i < a ? "prev" : "reset"),
                this.emit("transitionEnd"),
                e && i !== a)
              ) {
                if ("reset" === n)
                  return void this.emit("slideResetTransitionEnd");
                this.emit("slideChangeTransitionEnd"),
                  "next" === n
                    ? this.emit("slideNextTransitionEnd")
                    : this.emit("slidePrevTransitionEnd");
              }
            }
          },
        },
        slide: _,
        loop: M,
        grabCursor: k,
        manipulation: P,
        events: {
          attachEvents: function () {
            var t = this.params,
              i = this.touchEvents,
              a = this.el,
              s = this.wrapperEl;
            (this.onTouchStart = z.bind(this)),
              (this.onTouchMove = L.bind(this)),
              (this.onTouchEnd = D.bind(this)),
              t.cssMode &&
                (this.onScroll = function () {
                  var e = this.wrapperEl;
                  (this.previousTranslate = this.translate),
                    (this.translate = this.isHorizontal()
                      ? -e.scrollLeft
                      : -e.scrollTop),
                    -0 === this.translate && (this.translate = 0),
                    this.updateActiveIndex(),
                    this.updateSlidesClasses();
                  var t = this.maxTranslate() - this.minTranslate();
                  (0 === t ? 0 : (this.translate - this.minTranslate()) / t) !==
                    this.progress && this.updateProgress(this.translate),
                    this.emit("setTranslate", this.translate, !1);
                }.bind(this)),
              (this.onClick = function (e) {
                this.allowClick ||
                  (this.params.preventClicks && e.preventDefault(),
                  this.params.preventClicksPropagation &&
                    this.animating &&
                    (e.stopPropagation(), e.stopImmediatePropagation()));
              }.bind(this));
            var n = !!t.nested;
            if (!r.touch && r.pointerEvents)
              a.addEventListener(i.start, this.onTouchStart, !1),
                e.addEventListener(i.move, this.onTouchMove, n),
                e.addEventListener(i.end, this.onTouchEnd, !1);
            else {
              if (r.touch) {
                var o = !(
                  "touchstart" !== i.start ||
                  !r.passiveListener ||
                  !t.passiveListeners
                ) && { passive: !0, capture: !1 };
                a.addEventListener(i.start, this.onTouchStart, o),
                  a.addEventListener(
                    i.move,
                    this.onTouchMove,
                    r.passiveListener ? { passive: !1, capture: n } : n
                  ),
                  a.addEventListener(i.end, this.onTouchEnd, o),
                  i.cancel && a.addEventListener(i.cancel, this.onTouchEnd, o),
                  A || (e.addEventListener("touchstart", F), (A = !0));
              }
              ((t.simulateTouch && !I.ios && !I.android) ||
                (t.simulateTouch && !r.touch && I.ios)) &&
                (a.addEventListener("mousedown", this.onTouchStart, !1),
                e.addEventListener("mousemove", this.onTouchMove, n),
                e.addEventListener("mouseup", this.onTouchEnd, !1));
            }
            (t.preventClicks || t.preventClicksPropagation) &&
              a.addEventListener("click", this.onClick, !0),
              t.cssMode && s.addEventListener("scroll", this.onScroll),
              t.updateOnWindowResize
                ? this.on(
                    I.ios || I.android
                      ? "resize orientationchange observerUpdate"
                      : "resize observerUpdate",
                    O,
                    !0
                  )
                : this.on("observerUpdate", O, !0);
          },
          detachEvents: function () {
            var t = this.params,
              i = this.touchEvents,
              a = this.el,
              s = this.wrapperEl,
              n = !!t.nested;
            if (!r.touch && r.pointerEvents)
              a.removeEventListener(i.start, this.onTouchStart, !1),
                e.removeEventListener(i.move, this.onTouchMove, n),
                e.removeEventListener(i.end, this.onTouchEnd, !1);
            else {
              if (r.touch) {
                var o = !(
                  "onTouchStart" !== i.start ||
                  !r.passiveListener ||
                  !t.passiveListeners
                ) && { passive: !0, capture: !1 };
                a.removeEventListener(i.start, this.onTouchStart, o),
                  a.removeEventListener(i.move, this.onTouchMove, n),
                  a.removeEventListener(i.end, this.onTouchEnd, o),
                  i.cancel &&
                    a.removeEventListener(i.cancel, this.onTouchEnd, o);
              }
              ((t.simulateTouch && !I.ios && !I.android) ||
                (t.simulateTouch && !r.touch && I.ios)) &&
                (a.removeEventListener("mousedown", this.onTouchStart, !1),
                e.removeEventListener("mousemove", this.onTouchMove, n),
                e.removeEventListener("mouseup", this.onTouchEnd, !1));
            }
            (t.preventClicks || t.preventClicksPropagation) &&
              a.removeEventListener("click", this.onClick, !0),
              t.cssMode && s.removeEventListener("scroll", this.onScroll),
              this.off(
                I.ios || I.android
                  ? "resize orientationchange observerUpdate"
                  : "resize observerUpdate",
                O
              );
          },
        },
        breakpoints: {
          setBreakpoint: function () {
            var e = this.activeIndex,
              t = this.initialized,
              i = this.loopedSlides;
            void 0 === i && (i = 0);
            var a = this.params,
              s = this.$el,
              n = a.breakpoints;
            if (n && (!n || 0 !== Object.keys(n).length)) {
              var r = this.getBreakpoint(n);
              if (r && this.currentBreakpoint !== r) {
                var l = r in n ? n[r] : void 0;
                l &&
                  [
                    "slidesPerView",
                    "spaceBetween",
                    "slidesPerGroup",
                    "slidesPerGroupSkip",
                    "slidesPerColumn",
                  ].forEach(function (e) {
                    var t = l[e];
                    void 0 !== t &&
                      (l[e] =
                        "slidesPerView" !== e || ("AUTO" !== t && "auto" !== t)
                          ? "slidesPerView" === e
                            ? parseFloat(t)
                            : parseInt(t, 10)
                          : "auto");
                  });
                var d = l || this.originalParams,
                  c = a.slidesPerColumn > 1,
                  h = d.slidesPerColumn > 1;
                c && !h
                  ? s.removeClass(
                      a.containerModifierClass +
                        "multirow " +
                        a.containerModifierClass +
                        "multirow-column"
                    )
                  : !c &&
                    h &&
                    (s.addClass(a.containerModifierClass + "multirow"),
                    "column" === d.slidesPerColumnFill &&
                      s.addClass(a.containerModifierClass + "multirow-column"));
                var u = d.direction && d.direction !== a.direction,
                  p = a.loop && (d.slidesPerView !== a.slidesPerView || u);
                u && t && this.changeDirection(),
                  o.extend(this.params, d),
                  o.extend(this, {
                    allowTouchMove: this.params.allowTouchMove,
                    allowSlideNext: this.params.allowSlideNext,
                    allowSlidePrev: this.params.allowSlidePrev,
                  }),
                  (this.currentBreakpoint = r),
                  p &&
                    t &&
                    (this.loopDestroy(),
                    this.loopCreate(),
                    this.updateSlides(),
                    this.slideTo(e - i + this.loopedSlides, 0, !1)),
                  this.emit("breakpoint", d);
              }
            }
          },
          getBreakpoint: function (e) {
            if (e) {
              var i = !1,
                a = Object.keys(e).map(function (e) {
                  if ("string" == typeof e && 0 === e.indexOf("@")) {
                    var i = parseFloat(e.substr(1));
                    return { value: t.innerHeight * i, point: e };
                  }
                  return { value: e, point: e };
                });
              a.sort(function (e, t) {
                return parseInt(e.value, 10) - parseInt(t.value, 10);
              });
              for (var s = 0; s < a.length; s += 1) {
                var n = a[s],
                  o = n.point;
                n.value <= t.innerWidth && (i = o);
              }
              return i || "max";
            }
          },
        },
        checkOverflow: {
          checkOverflow: function () {
            var e = this.params,
              t = this.isLocked,
              i =
                this.slides.length > 0 &&
                e.slidesOffsetBefore +
                  e.spaceBetween * (this.slides.length - 1) +
                  this.slides[0].offsetWidth * this.slides.length;
            e.slidesOffsetBefore && e.slidesOffsetAfter && i
              ? (this.isLocked = i <= this.size)
              : (this.isLocked = 1 === this.snapGrid.length),
              (this.allowSlideNext = !this.isLocked),
              (this.allowSlidePrev = !this.isLocked),
              t !== this.isLocked &&
                this.emit(this.isLocked ? "lock" : "unlock"),
              t &&
                t !== this.isLocked &&
                ((this.isEnd = !1), this.navigation.update());
          },
        },
        classes: {
          addClasses: function () {
            var e = this.classNames,
              t = this.params,
              i = this.rtl,
              a = this.$el,
              s = [];
            s.push("initialized"),
              s.push(t.direction),
              t.freeMode && s.push("free-mode"),
              t.autoHeight && s.push("autoheight"),
              i && s.push("rtl"),
              t.slidesPerColumn > 1 &&
                (s.push("multirow"),
                "column" === t.slidesPerColumnFill &&
                  s.push("multirow-column")),
              I.android && s.push("android"),
              I.ios && s.push("ios"),
              t.cssMode && s.push("css-mode"),
              s.forEach(function (i) {
                e.push(t.containerModifierClass + i);
              }),
              a.addClass(e.join(" "));
          },
          removeClasses: function () {
            var e = this.$el,
              t = this.classNames;
            e.removeClass(t.join(" "));
          },
        },
        images: {
          loadImage: function (e, i, a, s, n, o) {
            var r;
            function l() {
              o && o();
            }
            e.complete && n
              ? l()
              : i
              ? (((r = new t.Image()).onload = l),
                (r.onerror = l),
                s && (r.sizes = s),
                a && (r.srcset = a),
                i && (r.src = i))
              : l();
          },
          preloadImages: function () {
            var e = this;
            function t() {
              null != e &&
                e &&
                !e.destroyed &&
                (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                e.imagesLoaded === e.imagesToLoad.length &&
                  (e.params.updateOnImagesReady && e.update(),
                  e.emit("imagesReady")));
            }
            e.imagesToLoad = e.$el.find("img");
            for (var i = 0; i < e.imagesToLoad.length; i += 1) {
              var a = e.imagesToLoad[i];
              e.loadImage(
                a,
                a.currentSrc || a.getAttribute("src"),
                a.srcset || a.getAttribute("srcset"),
                a.sizes || a.getAttribute("sizes"),
                !0,
                t
              );
            }
          },
        },
      },
      j = {},
      q = (function (e) {
        function t() {
          for (var i, s, n, l = [], d = arguments.length; d--; )
            l[d] = arguments[d];
          1 === l.length && l[0].constructor && l[0].constructor === Object
            ? (n = l[0])
            : ((s = (i = l)[0]), (n = i[1])),
            n || (n = {}),
            (n = o.extend({}, n)),
            s && !n.el && (n.el = s),
            e.call(this, n),
            Object.keys(B).forEach(function (e) {
              Object.keys(B[e]).forEach(function (i) {
                t.prototype[i] || (t.prototype[i] = B[e][i]);
              });
            });
          var c = this;
          void 0 === c.modules && (c.modules = {}),
            Object.keys(c.modules).forEach(function (e) {
              var t = c.modules[e];
              if (t.params) {
                var i = Object.keys(t.params)[0],
                  a = t.params[i];
                if ("object" != typeof a || null === a) return;
                if (!(i in n) || !("enabled" in a)) return;
                !0 === n[i] && (n[i] = { enabled: !0 }),
                  "object" != typeof n[i] ||
                    "enabled" in n[i] ||
                    (n[i].enabled = !0),
                  n[i] || (n[i] = { enabled: !1 });
              }
            });
          var h = o.extend({}, H);
          c.useModulesParams(h),
            (c.params = o.extend({}, h, j, n)),
            (c.originalParams = o.extend({}, c.params)),
            (c.passedParams = o.extend({}, n)),
            (c.$ = a);
          var u = a(c.params.el);
          if ((s = u[0])) {
            if (u.length > 1) {
              var p = [];
              return (
                u.each(function (e, i) {
                  var a = o.extend({}, n, { el: i });
                  p.push(new t(a));
                }),
                p
              );
            }
            var f, m, v;
            return (
              (s.swiper = c),
              u.data("swiper", c),
              s && s.shadowRoot && s.shadowRoot.querySelector
                ? ((f = a(
                    s.shadowRoot.querySelector("." + c.params.wrapperClass)
                  )).children = function (e) {
                    return u.children(e);
                  })
                : (f = u.children("." + c.params.wrapperClass)),
              o.extend(c, {
                $el: u,
                el: s,
                $wrapperEl: f,
                wrapperEl: f[0],
                classNames: [],
                slides: a(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: function () {
                  return "horizontal" === c.params.direction;
                },
                isVertical: function () {
                  return "vertical" === c.params.direction;
                },
                rtl:
                  "rtl" === s.dir.toLowerCase() || "rtl" === u.css("direction"),
                rtlTranslate:
                  "horizontal" === c.params.direction &&
                  ("rtl" === s.dir.toLowerCase() ||
                    "rtl" === u.css("direction")),
                wrongRTL: "-webkit-box" === f.css("display"),
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: c.params.allowSlideNext,
                allowSlidePrev: c.params.allowSlidePrev,
                touchEvents:
                  ((m = ["touchstart", "touchmove", "touchend", "touchcancel"]),
                  (v = ["mousedown", "mousemove", "mouseup"]),
                  r.pointerEvents &&
                    (v = ["pointerdown", "pointermove", "pointerup"]),
                  (c.touchEventsTouch = {
                    start: m[0],
                    move: m[1],
                    end: m[2],
                    cancel: m[3],
                  }),
                  (c.touchEventsDesktop = {
                    start: v[0],
                    move: v[1],
                    end: v[2],
                  }),
                  r.touch || !c.params.simulateTouch
                    ? c.touchEventsTouch
                    : c.touchEventsDesktop),
                touchEventsData: {
                  isTouched: void 0,
                  isMoved: void 0,
                  allowTouchCallbacks: void 0,
                  touchStartTime: void 0,
                  isScrolling: void 0,
                  currentTranslate: void 0,
                  startTranslate: void 0,
                  allowThresholdMove: void 0,
                  formElements:
                    "input, select, option, textarea, button, video, label",
                  lastClickTime: o.now(),
                  clickTimeout: void 0,
                  velocities: [],
                  allowMomentumBounce: void 0,
                  isTouchEvent: void 0,
                  startMoving: void 0,
                },
                allowClick: !0,
                allowTouchMove: c.params.allowTouchMove,
                touches: {
                  startX: 0,
                  startY: 0,
                  currentX: 0,
                  currentY: 0,
                  diff: 0,
                },
                imagesToLoad: [],
                imagesLoaded: 0,
              }),
              c.useModules(),
              c.params.init && c.init(),
              c
            );
          }
        }
        e && (t.__proto__ = e),
          (t.prototype = Object.create(e && e.prototype)),
          (t.prototype.constructor = t);
        var i = {
          extendedDefaults: { configurable: !0 },
          defaults: { configurable: !0 },
          Class: { configurable: !0 },
          $: { configurable: !0 },
        };
        return (
          (t.prototype.slidesPerViewDynamic = function () {
            var e = this.params,
              t = this.slides,
              i = this.slidesGrid,
              a = this.size,
              s = this.activeIndex,
              n = 1;
            if (e.centeredSlides) {
              for (
                var o, r = t[s].swiperSlideSize, l = s + 1;
                l < t.length;
                l += 1
              )
                t[l] &&
                  !o &&
                  ((n += 1), (r += t[l].swiperSlideSize) > a && (o = !0));
              for (var d = s - 1; d >= 0; d -= 1)
                t[d] &&
                  !o &&
                  ((n += 1), (r += t[d].swiperSlideSize) > a && (o = !0));
            } else
              for (var c = s + 1; c < t.length; c += 1)
                i[c] - i[s] < a && (n += 1);
            return n;
          }),
          (t.prototype.update = function () {
            var e = this;
            if (e && !e.destroyed) {
              var t = e.snapGrid,
                i = e.params;
              i.breakpoints && e.setBreakpoint(),
                e.updateSize(),
                e.updateSlides(),
                e.updateProgress(),
                e.updateSlidesClasses(),
                e.params.freeMode
                  ? (a(), e.params.autoHeight && e.updateAutoHeight())
                  : (("auto" === e.params.slidesPerView ||
                      e.params.slidesPerView > 1) &&
                    e.isEnd &&
                    !e.params.centeredSlides
                      ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                      : e.slideTo(e.activeIndex, 0, !1, !0)) || a(),
                i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
                e.emit("update");
            }
            function a() {
              var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
              e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
            }
          }),
          (t.prototype.changeDirection = function (e, t) {
            void 0 === t && (t = !0);
            var i = this.params.direction;
            return (
              e || (e = "horizontal" === i ? "vertical" : "horizontal"),
              e === i ||
                ("horizontal" !== e && "vertical" !== e) ||
                (this.$el
                  .removeClass("" + this.params.containerModifierClass + i)
                  .addClass("" + this.params.containerModifierClass + e),
                (this.params.direction = e),
                this.slides.each(function (t, i) {
                  "vertical" === e
                    ? (i.style.width = "")
                    : (i.style.height = "");
                }),
                this.emit("changeDirection"),
                t && this.update()),
              this
            );
          }),
          (t.prototype.init = function () {
            this.initialized ||
              (this.emit("beforeInit"),
              this.params.breakpoints && this.setBreakpoint(),
              this.addClasses(),
              this.params.loop && this.loopCreate(),
              this.updateSize(),
              this.updateSlides(),
              this.params.watchOverflow && this.checkOverflow(),
              this.params.grabCursor && this.setGrabCursor(),
              this.params.preloadImages && this.preloadImages(),
              this.params.loop
                ? this.slideTo(
                    this.params.initialSlide + this.loopedSlides,
                    0,
                    this.params.runCallbacksOnInit
                  )
                : this.slideTo(
                    this.params.initialSlide,
                    0,
                    this.params.runCallbacksOnInit
                  ),
              this.attachEvents(),
              (this.initialized = !0),
              this.emit("init"));
          }),
          (t.prototype.destroy = function (e, t) {
            void 0 === e && (e = !0), void 0 === t && (t = !0);
            var i = this,
              a = i.params,
              s = i.$el,
              n = i.$wrapperEl,
              r = i.slides;
            return (
              void 0 === i.params ||
                i.destroyed ||
                (i.emit("beforeDestroy"),
                (i.initialized = !1),
                i.detachEvents(),
                a.loop && i.loopDestroy(),
                t &&
                  (i.removeClasses(),
                  s.removeAttr("style"),
                  n.removeAttr("style"),
                  r &&
                    r.length &&
                    r
                      .removeClass(
                        [
                          a.slideVisibleClass,
                          a.slideActiveClass,
                          a.slideNextClass,
                          a.slidePrevClass,
                        ].join(" ")
                      )
                      .removeAttr("style")
                      .removeAttr("data-swiper-slide-index")),
                i.emit("destroy"),
                Object.keys(i.eventsListeners).forEach(function (e) {
                  i.off(e);
                }),
                !1 !== e &&
                  ((i.$el[0].swiper = null),
                  i.$el.data("swiper", null),
                  o.deleteProps(i)),
                (i.destroyed = !0)),
              null
            );
          }),
          (t.extendDefaults = function (e) {
            o.extend(j, e);
          }),
          (i.extendedDefaults.get = function () {
            return j;
          }),
          (i.defaults.get = function () {
            return H;
          }),
          (i.Class.get = function () {
            return e;
          }),
          (i.$.get = function () {
            return a;
          }),
          Object.defineProperties(t, i),
          t
        );
      })(l),
      V = { name: "device", proto: { device: I }, static: { device: I } },
      R = { name: "support", proto: { support: r }, static: { support: r } },
      N = {
        isEdge: !!t.navigator.userAgent.match(/Edge/g),
        isSafari: (function () {
          var e = t.navigator.userAgent.toLowerCase();
          return (
            e.indexOf("safari") >= 0 &&
            e.indexOf("chrome") < 0 &&
            e.indexOf("android") < 0
          );
        })(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
          t.navigator.userAgent
        ),
      },
      X = { name: "browser", proto: { browser: N }, static: { browser: N } },
      Y = {
        name: "resize",
        create: function () {
          var e = this;
          o.extend(e, {
            resize: {
              resizeHandler: function () {
                e &&
                  !e.destroyed &&
                  e.initialized &&
                  (e.emit("beforeResize"), e.emit("resize"));
              },
              orientationChangeHandler: function () {
                e &&
                  !e.destroyed &&
                  e.initialized &&
                  e.emit("orientationchange");
              },
            },
          });
        },
        on: {
          init: function () {
            t.addEventListener("resize", this.resize.resizeHandler),
              t.addEventListener(
                "orientationchange",
                this.resize.orientationChangeHandler
              );
          },
          destroy: function () {
            t.removeEventListener("resize", this.resize.resizeHandler),
              t.removeEventListener(
                "orientationchange",
                this.resize.orientationChangeHandler
              );
          },
        },
      },
      G = {
        func: t.MutationObserver || t.WebkitMutationObserver,
        attach: function (e, i) {
          void 0 === i && (i = {});
          var a = this,
            s = new (0, G.func)(function (e) {
              if (1 !== e.length) {
                var i = function () {
                  a.emit("observerUpdate", e[0]);
                };
                t.requestAnimationFrame
                  ? t.requestAnimationFrame(i)
                  : t.setTimeout(i, 0);
              } else a.emit("observerUpdate", e[0]);
            });
          s.observe(e, {
            attributes: void 0 === i.attributes || i.attributes,
            childList: void 0 === i.childList || i.childList,
            characterData: void 0 === i.characterData || i.characterData,
          }),
            a.observer.observers.push(s);
        },
        init: function () {
          if (r.observer && this.params.observer) {
            if (this.params.observeParents)
              for (var e = this.$el.parents(), t = 0; t < e.length; t += 1)
                this.observer.attach(e[t]);
            this.observer.attach(this.$el[0], {
              childList: this.params.observeSlideChildren,
            }),
              this.observer.attach(this.$wrapperEl[0], { attributes: !1 });
          }
        },
        destroy: function () {
          this.observer.observers.forEach(function (e) {
            e.disconnect();
          }),
            (this.observer.observers = []);
        },
      },
      W = {
        name: "observer",
        params: { observer: !1, observeParents: !1, observeSlideChildren: !1 },
        create: function () {
          o.extend(this, {
            observer: {
              init: G.init.bind(this),
              attach: G.attach.bind(this),
              destroy: G.destroy.bind(this),
              observers: [],
            },
          });
        },
        on: {
          init: function () {
            this.observer.init();
          },
          destroy: function () {
            this.observer.destroy();
          },
        },
      },
      U = {
        update: function (e) {
          var t = this,
            i = t.params,
            a = i.slidesPerView,
            s = i.slidesPerGroup,
            n = i.centeredSlides,
            r = t.params.virtual,
            l = r.addSlidesBefore,
            d = r.addSlidesAfter,
            c = t.virtual,
            h = c.from,
            u = c.to,
            p = c.slides,
            f = c.slidesGrid,
            m = c.renderSlide,
            v = c.offset;
          t.updateActiveIndex();
          var g,
            b,
            y,
            w = t.activeIndex || 0;
          (g = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top"),
            n
              ? ((b = Math.floor(a / 2) + s + l),
                (y = Math.floor(a / 2) + s + d))
              : ((b = a + (s - 1) + l), (y = s + d));
          var x = Math.max((w || 0) - y, 0),
            $ = Math.min((w || 0) + b, p.length - 1),
            C = (t.slidesGrid[x] || 0) - (t.slidesGrid[0] || 0);
          function S() {
            t.updateSlides(),
              t.updateProgress(),
              t.updateSlidesClasses(),
              t.lazy && t.params.lazy.enabled && t.lazy.load();
          }
          if (
            (o.extend(t.virtual, {
              from: x,
              to: $,
              offset: C,
              slidesGrid: t.slidesGrid,
            }),
            h === x && u === $ && !e)
          )
            return (
              t.slidesGrid !== f && C !== v && t.slides.css(g, C + "px"),
              void t.updateProgress()
            );
          if (t.params.virtual.renderExternal)
            return (
              t.params.virtual.renderExternal.call(t, {
                offset: C,
                from: x,
                to: $,
                slides: (function () {
                  for (var e = [], t = x; t <= $; t += 1) e.push(p[t]);
                  return e;
                })(),
              }),
              void S()
            );
          var T = [],
            E = [];
          if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
          else
            for (var _ = h; _ <= u; _ += 1)
              (_ < x || _ > $) &&
                t.$wrapperEl
                  .find(
                    "." +
                      t.params.slideClass +
                      '[data-swiper-slide-index="' +
                      _ +
                      '"]'
                  )
                  .remove();
          for (var M = 0; M < p.length; M += 1)
            M >= x &&
              M <= $ &&
              (void 0 === u || e
                ? E.push(M)
                : (M > u && E.push(M), M < h && T.push(M)));
          E.forEach(function (e) {
            t.$wrapperEl.append(m(p[e], e));
          }),
            T.sort(function (e, t) {
              return t - e;
            }).forEach(function (e) {
              t.$wrapperEl.prepend(m(p[e], e));
            }),
            t.$wrapperEl.children(".swiper-slide").css(g, C + "px"),
            S();
        },
        renderSlide: function (e, t) {
          var i = this.params.virtual;
          if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t];
          var s = i.renderSlide
            ? a(i.renderSlide.call(this, e, t))
            : a(
                '<div class="' +
                  this.params.slideClass +
                  '" data-swiper-slide-index="' +
                  t +
                  '">' +
                  e +
                  "</div>"
              );
          return (
            s.attr("data-swiper-slide-index") ||
              s.attr("data-swiper-slide-index", t),
            i.cache && (this.virtual.cache[t] = s),
            s
          );
        },
        appendSlide: function (e) {
          if ("object" == typeof e && "length" in e)
            for (var t = 0; t < e.length; t += 1)
              e[t] && this.virtual.slides.push(e[t]);
          else this.virtual.slides.push(e);
          this.virtual.update(!0);
        },
        prependSlide: function (e) {
          var t = this.activeIndex,
            i = t + 1,
            a = 1;
          if (Array.isArray(e)) {
            for (var s = 0; s < e.length; s += 1)
              e[s] && this.virtual.slides.unshift(e[s]);
            (i = t + e.length), (a = e.length);
          } else this.virtual.slides.unshift(e);
          if (this.params.virtual.cache) {
            var n = this.virtual.cache,
              o = {};
            Object.keys(n).forEach(function (e) {
              var t = n[e],
                i = t.attr("data-swiper-slide-index");
              i && t.attr("data-swiper-slide-index", parseInt(i, 10) + 1),
                (o[parseInt(e, 10) + a] = t);
            }),
              (this.virtual.cache = o);
          }
          this.virtual.update(!0), this.slideTo(i, 0);
        },
        removeSlide: function (e) {
          if (null != e) {
            var t = this.activeIndex;
            if (Array.isArray(e))
              for (var i = e.length - 1; i >= 0; i -= 1)
                this.virtual.slides.splice(e[i], 1),
                  this.params.virtual.cache && delete this.virtual.cache[e[i]],
                  e[i] < t && (t -= 1),
                  (t = Math.max(t, 0));
            else
              this.virtual.slides.splice(e, 1),
                this.params.virtual.cache && delete this.virtual.cache[e],
                e < t && (t -= 1),
                (t = Math.max(t, 0));
            this.virtual.update(!0), this.slideTo(t, 0);
          }
        },
        removeAllSlides: function () {
          (this.virtual.slides = []),
            this.params.virtual.cache && (this.virtual.cache = {}),
            this.virtual.update(!0),
            this.slideTo(0, 0);
        },
      },
      Z = {
        name: "virtual",
        params: {
          virtual: {
            enabled: !1,
            slides: [],
            cache: !0,
            renderSlide: null,
            renderExternal: null,
            addSlidesBefore: 0,
            addSlidesAfter: 0,
          },
        },
        create: function () {
          o.extend(this, {
            virtual: {
              update: U.update.bind(this),
              appendSlide: U.appendSlide.bind(this),
              prependSlide: U.prependSlide.bind(this),
              removeSlide: U.removeSlide.bind(this),
              removeAllSlides: U.removeAllSlides.bind(this),
              renderSlide: U.renderSlide.bind(this),
              slides: this.params.virtual.slides,
              cache: {},
            },
          });
        },
        on: {
          beforeInit: function () {
            if (this.params.virtual.enabled) {
              this.classNames.push(
                this.params.containerModifierClass + "virtual"
              );
              var e = { watchSlidesProgress: !0 };
              o.extend(this.params, e),
                o.extend(this.originalParams, e),
                this.params.initialSlide || this.virtual.update();
            }
          },
          setTranslate: function () {
            this.params.virtual.enabled && this.virtual.update();
          },
        },
      },
      K = {
        handle: function (i) {
          var a = this.rtlTranslate,
            s = i;
          s.originalEvent && (s = s.originalEvent);
          var n = s.keyCode || s.charCode;
          if (
            !this.allowSlideNext &&
            ((this.isHorizontal() && 39 === n) ||
              (this.isVertical() && 40 === n) ||
              34 === n)
          )
            return !1;
          if (
            !this.allowSlidePrev &&
            ((this.isHorizontal() && 37 === n) ||
              (this.isVertical() && 38 === n) ||
              33 === n)
          )
            return !1;
          if (
            !(
              s.shiftKey ||
              s.altKey ||
              s.ctrlKey ||
              s.metaKey ||
              (e.activeElement &&
                e.activeElement.nodeName &&
                ("input" === e.activeElement.nodeName.toLowerCase() ||
                  "textarea" === e.activeElement.nodeName.toLowerCase()))
            )
          ) {
            if (
              this.params.keyboard.onlyInViewport &&
              (33 === n ||
                34 === n ||
                37 === n ||
                39 === n ||
                38 === n ||
                40 === n)
            ) {
              var o = !1;
              if (
                this.$el.parents("." + this.params.slideClass).length > 0 &&
                0 ===
                  this.$el.parents("." + this.params.slideActiveClass).length
              )
                return;
              var r = t.innerWidth,
                l = t.innerHeight,
                d = this.$el.offset();
              a && (d.left -= this.$el[0].scrollLeft);
              for (
                var c = [
                    [d.left, d.top],
                    [d.left + this.width, d.top],
                    [d.left, d.top + this.height],
                    [d.left + this.width, d.top + this.height],
                  ],
                  h = 0;
                h < c.length;
                h += 1
              ) {
                var u = c[h];
                u[0] >= 0 && u[0] <= r && u[1] >= 0 && u[1] <= l && (o = !0);
              }
              if (!o) return;
            }
            this.isHorizontal()
              ? ((33 !== n && 34 !== n && 37 !== n && 39 !== n) ||
                  (s.preventDefault
                    ? s.preventDefault()
                    : (s.returnValue = !1)),
                (((34 !== n && 39 !== n) || a) &&
                  ((33 !== n && 37 !== n) || !a)) ||
                  this.slideNext(),
                (((33 !== n && 37 !== n) || a) &&
                  ((34 !== n && 39 !== n) || !a)) ||
                  this.slidePrev())
              : ((33 !== n && 34 !== n && 38 !== n && 40 !== n) ||
                  (s.preventDefault
                    ? s.preventDefault()
                    : (s.returnValue = !1)),
                (34 !== n && 40 !== n) || this.slideNext(),
                (33 !== n && 38 !== n) || this.slidePrev()),
              this.emit("keyPress", n);
          }
        },
        enable: function () {
          this.keyboard.enabled ||
            (a(e).on("keydown", this.keyboard.handle),
            (this.keyboard.enabled = !0));
        },
        disable: function () {
          this.keyboard.enabled &&
            (a(e).off("keydown", this.keyboard.handle),
            (this.keyboard.enabled = !1));
        },
      },
      Q = {
        name: "keyboard",
        params: { keyboard: { enabled: !1, onlyInViewport: !0 } },
        create: function () {
          o.extend(this, {
            keyboard: {
              enabled: !1,
              enable: K.enable.bind(this),
              disable: K.disable.bind(this),
              handle: K.handle.bind(this),
            },
          });
        },
        on: {
          init: function () {
            this.params.keyboard.enabled && this.keyboard.enable();
          },
          destroy: function () {
            this.keyboard.enabled && this.keyboard.disable();
          },
        },
      },
      J = {
        lastScrollTime: o.now(),
        lastEventBeforeSnap: void 0,
        recentWheelEvents: [],
        event: function () {
          return t.navigator.userAgent.indexOf("firefox") > -1
            ? "DOMMouseScroll"
            : (function () {
                var t = "onwheel" in e;
                if (!t) {
                  var i = e.createElement("div");
                  i.setAttribute("onwheel", "return;"),
                    (t = "function" == typeof i.onwheel);
                }
                return (
                  !t &&
                    e.implementation &&
                    e.implementation.hasFeature &&
                    !0 !== e.implementation.hasFeature("", "") &&
                    (t = e.implementation.hasFeature("Events.wheel", "3.0")),
                  t
                );
              })()
            ? "wheel"
            : "mousewheel";
        },
        normalize: function (e) {
          var t = 0,
            i = 0,
            a = 0,
            s = 0;
          return (
            "detail" in e && (i = e.detail),
            "wheelDelta" in e && (i = -e.wheelDelta / 120),
            "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120),
            "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
            "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((t = i), (i = 0)),
            (a = 10 * t),
            (s = 10 * i),
            "deltaY" in e && (s = e.deltaY),
            "deltaX" in e && (a = e.deltaX),
            e.shiftKey && !a && ((a = s), (s = 0)),
            (a || s) &&
              e.deltaMode &&
              (1 === e.deltaMode
                ? ((a *= 40), (s *= 40))
                : ((a *= 800), (s *= 800))),
            a && !t && (t = a < 1 ? -1 : 1),
            s && !i && (i = s < 1 ? -1 : 1),
            { spinX: t, spinY: i, pixelX: a, pixelY: s }
          );
        },
        handleMouseEnter: function () {
          this.mouseEntered = !0;
        },
        handleMouseLeave: function () {
          this.mouseEntered = !1;
        },
        handle: function (e) {
          var t = e,
            i = this,
            s = i.params.mousewheel;
          i.params.cssMode && t.preventDefault();
          var n = i.$el;
          if (
            ("container" !== i.params.mousewheel.eventsTarged &&
              (n = a(i.params.mousewheel.eventsTarged)),
            !i.mouseEntered && !n[0].contains(t.target) && !s.releaseOnEdges)
          )
            return !0;
          t.originalEvent && (t = t.originalEvent);
          var r = 0,
            l = i.rtlTranslate ? -1 : 1,
            d = J.normalize(t);
          if (s.forceToAxis)
            if (i.isHorizontal()) {
              if (!(Math.abs(d.pixelX) > Math.abs(d.pixelY))) return !0;
              r = d.pixelX * l;
            } else {
              if (!(Math.abs(d.pixelY) > Math.abs(d.pixelX))) return !0;
              r = d.pixelY;
            }
          else
            r =
              Math.abs(d.pixelX) > Math.abs(d.pixelY)
                ? -d.pixelX * l
                : -d.pixelY;
          if (0 === r) return !0;
          if ((s.invert && (r = -r), i.params.freeMode)) {
            var c = {
                time: o.now(),
                delta: Math.abs(r),
                direction: Math.sign(r),
              },
              h = i.mousewheel.lastEventBeforeSnap,
              u =
                h &&
                c.time < h.time + 500 &&
                c.delta <= h.delta &&
                c.direction === h.direction;
            if (!u) {
              (i.mousewheel.lastEventBeforeSnap = void 0),
                i.params.loop && i.loopFix();
              var p = i.getTranslate() + r * s.sensitivity,
                f = i.isBeginning,
                m = i.isEnd;
              if (
                (p >= i.minTranslate() && (p = i.minTranslate()),
                p <= i.maxTranslate() && (p = i.maxTranslate()),
                i.setTransition(0),
                i.setTranslate(p),
                i.updateProgress(),
                i.updateActiveIndex(),
                i.updateSlidesClasses(),
                ((!f && i.isBeginning) || (!m && i.isEnd)) &&
                  i.updateSlidesClasses(),
                i.params.freeModeSticky)
              ) {
                clearTimeout(i.mousewheel.timeout),
                  (i.mousewheel.timeout = void 0);
                var v = i.mousewheel.recentWheelEvents;
                v.length >= 15 && v.shift();
                var g = v.length ? v[v.length - 1] : void 0,
                  b = v[0];
                if (
                  (v.push(c),
                  g && (c.delta > g.delta || c.direction !== g.direction))
                )
                  v.splice(0);
                else if (
                  v.length >= 15 &&
                  c.time - b.time < 500 &&
                  b.delta - c.delta >= 1 &&
                  c.delta <= 6
                ) {
                  var y = r > 0 ? 0.8 : 0.2;
                  (i.mousewheel.lastEventBeforeSnap = c),
                    v.splice(0),
                    (i.mousewheel.timeout = o.nextTick(function () {
                      i.slideToClosest(i.params.speed, !0, void 0, y);
                    }, 0));
                }
                i.mousewheel.timeout ||
                  (i.mousewheel.timeout = o.nextTick(function () {
                    (i.mousewheel.lastEventBeforeSnap = c),
                      v.splice(0),
                      i.slideToClosest(i.params.speed, !0, void 0, 0.5);
                  }, 500));
              }
              if (
                (u || i.emit("scroll", t),
                i.params.autoplay &&
                  i.params.autoplayDisableOnInteraction &&
                  i.autoplay.stop(),
                p === i.minTranslate() || p === i.maxTranslate())
              )
                return !0;
            }
          } else {
            var w = {
                time: o.now(),
                delta: Math.abs(r),
                direction: Math.sign(r),
                raw: e,
              },
              x = i.mousewheel.recentWheelEvents;
            x.length >= 2 && x.shift();
            var $ = x.length ? x[x.length - 1] : void 0;
            if (
              (x.push(w),
              $
                ? (w.direction !== $.direction || w.delta > $.delta) &&
                  i.mousewheel.animateSlider(w)
                : i.mousewheel.animateSlider(w),
              i.mousewheel.releaseScroll(w))
            )
              return !0;
          }
          return (
            t.preventDefault ? t.preventDefault() : (t.returnValue = !1), !1
          );
        },
        animateSlider: function (e) {
          return (
            (e.delta >= 6 && o.now() - this.mousewheel.lastScrollTime < 60) ||
            (e.direction < 0
              ? (this.isEnd && !this.params.loop) ||
                this.animating ||
                (this.slideNext(), this.emit("scroll", e.raw))
              : (this.isBeginning && !this.params.loop) ||
                this.animating ||
                (this.slidePrev(), this.emit("scroll", e.raw)),
            (this.mousewheel.lastScrollTime = new t.Date().getTime()),
            !1)
          );
        },
        releaseScroll: function (e) {
          var t = this.params.mousewheel;
          if (e.direction < 0) {
            if (this.isEnd && !this.params.loop && t.releaseOnEdges) return !0;
          } else if (this.isBeginning && !this.params.loop && t.releaseOnEdges)
            return !0;
          return !1;
        },
        enable: function () {
          var e = J.event();
          if (this.params.cssMode)
            return (
              this.wrapperEl.removeEventListener(e, this.mousewheel.handle), !0
            );
          if (!e) return !1;
          if (this.mousewheel.enabled) return !1;
          var t = this.$el;
          return (
            "container" !== this.params.mousewheel.eventsTarged &&
              (t = a(this.params.mousewheel.eventsTarged)),
            t.on("mouseenter", this.mousewheel.handleMouseEnter),
            t.on("mouseleave", this.mousewheel.handleMouseLeave),
            t.on(e, this.mousewheel.handle),
            (this.mousewheel.enabled = !0),
            !0
          );
        },
        disable: function () {
          var e = J.event();
          if (this.params.cssMode)
            return (
              this.wrapperEl.addEventListener(e, this.mousewheel.handle), !0
            );
          if (!e) return !1;
          if (!this.mousewheel.enabled) return !1;
          var t = this.$el;
          return (
            "container" !== this.params.mousewheel.eventsTarged &&
              (t = a(this.params.mousewheel.eventsTarged)),
            t.off(e, this.mousewheel.handle),
            (this.mousewheel.enabled = !1),
            !0
          );
        },
      },
      ee = {
        update: function () {
          var e = this.params.navigation;
          if (!this.params.loop) {
            var t = this.navigation,
              i = t.$nextEl,
              a = t.$prevEl;
            a &&
              a.length > 0 &&
              (this.isBeginning
                ? a.addClass(e.disabledClass)
                : a.removeClass(e.disabledClass),
              a[
                this.params.watchOverflow && this.isLocked
                  ? "addClass"
                  : "removeClass"
              ](e.lockClass)),
              i &&
                i.length > 0 &&
                (this.isEnd
                  ? i.addClass(e.disabledClass)
                  : i.removeClass(e.disabledClass),
                i[
                  this.params.watchOverflow && this.isLocked
                    ? "addClass"
                    : "removeClass"
                ](e.lockClass));
          }
        },
        onPrevClick: function (e) {
          e.preventDefault(),
            (this.isBeginning && !this.params.loop) || this.slidePrev();
        },
        onNextClick: function (e) {
          e.preventDefault(),
            (this.isEnd && !this.params.loop) || this.slideNext();
        },
        init: function () {
          var e,
            t,
            i = this.params.navigation;
          (i.nextEl || i.prevEl) &&
            (i.nextEl &&
              ((e = a(i.nextEl)),
              this.params.uniqueNavElements &&
                "string" == typeof i.nextEl &&
                e.length > 1 &&
                1 === this.$el.find(i.nextEl).length &&
                (e = this.$el.find(i.nextEl))),
            i.prevEl &&
              ((t = a(i.prevEl)),
              this.params.uniqueNavElements &&
                "string" == typeof i.prevEl &&
                t.length > 1 &&
                1 === this.$el.find(i.prevEl).length &&
                (t = this.$el.find(i.prevEl))),
            e && e.length > 0 && e.on("click", this.navigation.onNextClick),
            t && t.length > 0 && t.on("click", this.navigation.onPrevClick),
            o.extend(this.navigation, {
              $nextEl: e,
              nextEl: e && e[0],
              $prevEl: t,
              prevEl: t && t[0],
            }));
        },
        destroy: function () {
          var e = this.navigation,
            t = e.$nextEl,
            i = e.$prevEl;
          t &&
            t.length &&
            (t.off("click", this.navigation.onNextClick),
            t.removeClass(this.params.navigation.disabledClass)),
            i &&
              i.length &&
              (i.off("click", this.navigation.onPrevClick),
              i.removeClass(this.params.navigation.disabledClass));
        },
      },
      te = {
        update: function () {
          var e = this.rtl,
            t = this.params.pagination;
          if (
            t.el &&
            this.pagination.el &&
            this.pagination.$el &&
            0 !== this.pagination.$el.length
          ) {
            var i,
              s =
                this.virtual && this.params.virtual.enabled
                  ? this.virtual.slides.length
                  : this.slides.length,
              n = this.pagination.$el,
              o = this.params.loop
                ? Math.ceil(
                    (s - 2 * this.loopedSlides) / this.params.slidesPerGroup
                  )
                : this.snapGrid.length;
            if (
              (this.params.loop
                ? ((i = Math.ceil(
                    (this.activeIndex - this.loopedSlides) /
                      this.params.slidesPerGroup
                  )) >
                    s - 1 - 2 * this.loopedSlides &&
                    (i -= s - 2 * this.loopedSlides),
                  i > o - 1 && (i -= o),
                  i < 0 &&
                    "bullets" !== this.params.paginationType &&
                    (i = o + i))
                : (i =
                    void 0 !== this.snapIndex
                      ? this.snapIndex
                      : this.activeIndex || 0),
              "bullets" === t.type &&
                this.pagination.bullets &&
                this.pagination.bullets.length > 0)
            ) {
              var r,
                l,
                d,
                c = this.pagination.bullets;
              if (
                (t.dynamicBullets &&
                  ((this.pagination.bulletSize = c
                    .eq(0)
                    [this.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                  n.css(
                    this.isHorizontal() ? "width" : "height",
                    this.pagination.bulletSize * (t.dynamicMainBullets + 4) +
                      "px"
                  ),
                  t.dynamicMainBullets > 1 &&
                    void 0 !== this.previousIndex &&
                    ((this.pagination.dynamicBulletIndex +=
                      i - this.previousIndex),
                    this.pagination.dynamicBulletIndex >
                    t.dynamicMainBullets - 1
                      ? (this.pagination.dynamicBulletIndex =
                          t.dynamicMainBullets - 1)
                      : this.pagination.dynamicBulletIndex < 0 &&
                        (this.pagination.dynamicBulletIndex = 0)),
                  (r = i - this.pagination.dynamicBulletIndex),
                  (d =
                    ((l = r + (Math.min(c.length, t.dynamicMainBullets) - 1)) +
                      r) /
                    2)),
                c.removeClass(
                  t.bulletActiveClass +
                    " " +
                    t.bulletActiveClass +
                    "-next " +
                    t.bulletActiveClass +
                    "-next-next " +
                    t.bulletActiveClass +
                    "-prev " +
                    t.bulletActiveClass +
                    "-prev-prev " +
                    t.bulletActiveClass +
                    "-main"
                ),
                n.length > 1)
              )
                c.each(function (e, s) {
                  var n = a(s),
                    o = n.index();
                  o === i && n.addClass(t.bulletActiveClass),
                    t.dynamicBullets &&
                      (o >= r &&
                        o <= l &&
                        n.addClass(t.bulletActiveClass + "-main"),
                      o === r &&
                        n
                          .prev()
                          .addClass(t.bulletActiveClass + "-prev")
                          .prev()
                          .addClass(t.bulletActiveClass + "-prev-prev"),
                      o === l &&
                        n
                          .next()
                          .addClass(t.bulletActiveClass + "-next")
                          .next()
                          .addClass(t.bulletActiveClass + "-next-next"));
                });
              else {
                var h = c.eq(i),
                  u = h.index();
                if ((h.addClass(t.bulletActiveClass), t.dynamicBullets)) {
                  for (var p = c.eq(r), f = c.eq(l), m = r; m <= l; m += 1)
                    c.eq(m).addClass(t.bulletActiveClass + "-main");
                  if (this.params.loop)
                    if (u >= c.length - t.dynamicMainBullets) {
                      for (var v = t.dynamicMainBullets; v >= 0; v -= 1)
                        c.eq(c.length - v).addClass(
                          t.bulletActiveClass + "-main"
                        );
                      c.eq(c.length - t.dynamicMainBullets - 1).addClass(
                        t.bulletActiveClass + "-prev"
                      );
                    } else
                      p
                        .prev()
                        .addClass(t.bulletActiveClass + "-prev")
                        .prev()
                        .addClass(t.bulletActiveClass + "-prev-prev"),
                        f
                          .next()
                          .addClass(t.bulletActiveClass + "-next")
                          .next()
                          .addClass(t.bulletActiveClass + "-next-next");
                  else
                    p
                      .prev()
                      .addClass(t.bulletActiveClass + "-prev")
                      .prev()
                      .addClass(t.bulletActiveClass + "-prev-prev"),
                      f
                        .next()
                        .addClass(t.bulletActiveClass + "-next")
                        .next()
                        .addClass(t.bulletActiveClass + "-next-next");
                }
              }
              if (t.dynamicBullets) {
                var g = Math.min(c.length, t.dynamicMainBullets + 4),
                  b =
                    (this.pagination.bulletSize * g -
                      this.pagination.bulletSize) /
                      2 -
                    d * this.pagination.bulletSize,
                  y = e ? "right" : "left";
                c.css(this.isHorizontal() ? y : "top", b + "px");
              }
            }
            if (
              ("fraction" === t.type &&
                (n
                  .find("." + t.currentClass)
                  .text(t.formatFractionCurrent(i + 1)),
                n.find("." + t.totalClass).text(t.formatFractionTotal(o))),
              "progressbar" === t.type)
            ) {
              var w;
              w = t.progressbarOpposite
                ? this.isHorizontal()
                  ? "vertical"
                  : "horizontal"
                : this.isHorizontal()
                ? "horizontal"
                : "vertical";
              var x = (i + 1) / o,
                $ = 1,
                C = 1;
              "horizontal" === w ? ($ = x) : (C = x),
                n
                  .find("." + t.progressbarFillClass)
                  .transform(
                    "translate3d(0,0,0) scaleX(" + $ + ") scaleY(" + C + ")"
                  )
                  .transition(this.params.speed);
            }
            "custom" === t.type && t.renderCustom
              ? (n.html(t.renderCustom(this, i + 1, o)),
                this.emit("paginationRender", this, n[0]))
              : this.emit("paginationUpdate", this, n[0]),
              n[
                this.params.watchOverflow && this.isLocked
                  ? "addClass"
                  : "removeClass"
              ](t.lockClass);
          }
        },
        render: function () {
          var e = this.params.pagination;
          if (
            e.el &&
            this.pagination.el &&
            this.pagination.$el &&
            0 !== this.pagination.$el.length
          ) {
            var t =
                this.virtual && this.params.virtual.enabled
                  ? this.virtual.slides.length
                  : this.slides.length,
              i = this.pagination.$el,
              a = "";
            if ("bullets" === e.type) {
              for (
                var s = this.params.loop
                    ? Math.ceil(
                        (t - 2 * this.loopedSlides) / this.params.slidesPerGroup
                      )
                    : this.snapGrid.length,
                  n = 0;
                n < s;
                n += 1
              )
                e.renderBullet
                  ? (a += e.renderBullet.call(this, n, e.bulletClass))
                  : (a +=
                      "<" +
                      e.bulletElement +
                      ' class="' +
                      e.bulletClass +
                      '"></' +
                      e.bulletElement +
                      ">");
              i.html(a),
                (this.pagination.bullets = i.find("." + e.bulletClass));
            }
            "fraction" === e.type &&
              ((a = e.renderFraction
                ? e.renderFraction.call(this, e.currentClass, e.totalClass)
                : '<span class="' +
                  e.currentClass +
                  '"></span> / <span class="' +
                  e.totalClass +
                  '"></span>'),
              i.html(a)),
              "progressbar" === e.type &&
                ((a = e.renderProgressbar
                  ? e.renderProgressbar.call(this, e.progressbarFillClass)
                  : '<span class="' + e.progressbarFillClass + '"></span>'),
                i.html(a)),
              "custom" !== e.type &&
                this.emit("paginationRender", this.pagination.$el[0]);
          }
        },
        init: function () {
          var e = this,
            t = e.params.pagination;
          if (t.el) {
            var i = a(t.el);
            0 !== i.length &&
              (e.params.uniqueNavElements &&
                "string" == typeof t.el &&
                i.length > 1 &&
                1 === e.$el.find(t.el).length &&
                (i = e.$el.find(t.el)),
              "bullets" === t.type &&
                t.clickable &&
                i.addClass(t.clickableClass),
              i.addClass(t.modifierClass + t.type),
              "bullets" === t.type &&
                t.dynamicBullets &&
                (i.addClass("" + t.modifierClass + t.type + "-dynamic"),
                (e.pagination.dynamicBulletIndex = 0),
                t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
              "progressbar" === t.type &&
                t.progressbarOpposite &&
                i.addClass(t.progressbarOppositeClass),
              t.clickable &&
                i.on("click", "." + t.bulletClass, function (t) {
                  t.preventDefault();
                  var i = a(this).index() * e.params.slidesPerGroup;
                  e.params.loop && (i += e.loopedSlides), e.slideTo(i);
                }),
              o.extend(e.pagination, { $el: i, el: i[0] }));
          }
        },
        destroy: function () {
          var e = this.params.pagination;
          if (
            e.el &&
            this.pagination.el &&
            this.pagination.$el &&
            0 !== this.pagination.$el.length
          ) {
            var t = this.pagination.$el;
            t.removeClass(e.hiddenClass),
              t.removeClass(e.modifierClass + e.type),
              this.pagination.bullets &&
                this.pagination.bullets.removeClass(e.bulletActiveClass),
              e.clickable && t.off("click", "." + e.bulletClass);
          }
        },
      },
      ie = {
        setTranslate: function () {
          if (this.params.scrollbar.el && this.scrollbar.el) {
            var e = this.scrollbar,
              t = this.rtlTranslate,
              i = this.progress,
              a = e.dragSize,
              s = e.trackSize,
              n = e.$dragEl,
              o = e.$el,
              r = this.params.scrollbar,
              l = a,
              d = (s - a) * i;
            t
              ? (d = -d) > 0
                ? ((l = a - d), (d = 0))
                : -d + a > s && (l = s + d)
              : d < 0
              ? ((l = a + d), (d = 0))
              : d + a > s && (l = s - d),
              this.isHorizontal()
                ? (n.transform("translate3d(" + d + "px, 0, 0)"),
                  (n[0].style.width = l + "px"))
                : (n.transform("translate3d(0px, " + d + "px, 0)"),
                  (n[0].style.height = l + "px")),
              r.hide &&
                (clearTimeout(this.scrollbar.timeout),
                (o[0].style.opacity = 1),
                (this.scrollbar.timeout = setTimeout(function () {
                  (o[0].style.opacity = 0), o.transition(400);
                }, 1e3)));
          }
        },
        setTransition: function (e) {
          this.params.scrollbar.el &&
            this.scrollbar.el &&
            this.scrollbar.$dragEl.transition(e);
        },
        updateSize: function () {
          if (this.params.scrollbar.el && this.scrollbar.el) {
            var e = this.scrollbar,
              t = e.$dragEl,
              i = e.$el;
            (t[0].style.width = ""), (t[0].style.height = "");
            var a,
              s = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
              n = this.size / this.virtualSize,
              r = n * (s / this.size);
            (a =
              "auto" === this.params.scrollbar.dragSize
                ? s * n
                : parseInt(this.params.scrollbar.dragSize, 10)),
              this.isHorizontal()
                ? (t[0].style.width = a + "px")
                : (t[0].style.height = a + "px"),
              (i[0].style.display = n >= 1 ? "none" : ""),
              this.params.scrollbar.hide && (i[0].style.opacity = 0),
              o.extend(e, {
                trackSize: s,
                divider: n,
                moveDivider: r,
                dragSize: a,
              }),
              e.$el[
                this.params.watchOverflow && this.isLocked
                  ? "addClass"
                  : "removeClass"
              ](this.params.scrollbar.lockClass);
          }
        },
        getPointerPosition: function (e) {
          return this.isHorizontal()
            ? "touchstart" === e.type || "touchmove" === e.type
              ? e.targetTouches[0].clientX
              : e.clientX
            : "touchstart" === e.type || "touchmove" === e.type
            ? e.targetTouches[0].clientY
            : e.clientY;
        },
        setDragPosition: function (e) {
          var t,
            i = this.scrollbar,
            a = this.rtlTranslate,
            s = i.$el,
            n = i.dragSize,
            o = i.trackSize,
            r = i.dragStartPos;
          (t =
            (i.getPointerPosition(e) -
              s.offset()[this.isHorizontal() ? "left" : "top"] -
              (null !== r ? r : n / 2)) /
            (o - n)),
            (t = Math.max(Math.min(t, 1), 0)),
            a && (t = 1 - t);
          var l =
            this.minTranslate() +
            (this.maxTranslate() - this.minTranslate()) * t;
          this.updateProgress(l),
            this.setTranslate(l),
            this.updateActiveIndex(),
            this.updateSlidesClasses();
        },
        onDragStart: function (e) {
          var t = this.params.scrollbar,
            i = this.scrollbar,
            a = this.$wrapperEl,
            s = i.$el,
            n = i.$dragEl;
          (this.scrollbar.isTouched = !0),
            (this.scrollbar.dragStartPos =
              e.target === n[0] || e.target === n
                ? i.getPointerPosition(e) -
                  e.target.getBoundingClientRect()[
                    this.isHorizontal() ? "left" : "top"
                  ]
                : null),
            e.preventDefault(),
            e.stopPropagation(),
            a.transition(100),
            n.transition(100),
            i.setDragPosition(e),
            clearTimeout(this.scrollbar.dragTimeout),
            s.transition(0),
            t.hide && s.css("opacity", 1),
            this.params.cssMode &&
              this.$wrapperEl.css("scroll-snap-type", "none"),
            this.emit("scrollbarDragStart", e);
        },
        onDragMove: function (e) {
          var t = this.scrollbar,
            i = this.$wrapperEl,
            a = t.$el,
            s = t.$dragEl;
          this.scrollbar.isTouched &&
            (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
            t.setDragPosition(e),
            i.transition(0),
            a.transition(0),
            s.transition(0),
            this.emit("scrollbarDragMove", e));
        },
        onDragEnd: function (e) {
          var t = this.params.scrollbar,
            i = this.scrollbar,
            a = this.$wrapperEl,
            s = i.$el;
          this.scrollbar.isTouched &&
            ((this.scrollbar.isTouched = !1),
            this.params.cssMode &&
              (this.$wrapperEl.css("scroll-snap-type", ""), a.transition("")),
            t.hide &&
              (clearTimeout(this.scrollbar.dragTimeout),
              (this.scrollbar.dragTimeout = o.nextTick(function () {
                s.css("opacity", 0), s.transition(400);
              }, 1e3))),
            this.emit("scrollbarDragEnd", e),
            t.snapOnRelease && this.slideToClosest());
        },
        enableDraggable: function () {
          if (this.params.scrollbar.el) {
            var t = this.scrollbar,
              i = this.touchEventsTouch,
              a = this.touchEventsDesktop,
              s = this.params,
              n = t.$el[0],
              o = !(!r.passiveListener || !s.passiveListeners) && {
                passive: !1,
                capture: !1,
              },
              l = !(!r.passiveListener || !s.passiveListeners) && {
                passive: !0,
                capture: !1,
              };
            r.touch
              ? (n.addEventListener(i.start, this.scrollbar.onDragStart, o),
                n.addEventListener(i.move, this.scrollbar.onDragMove, o),
                n.addEventListener(i.end, this.scrollbar.onDragEnd, l))
              : (n.addEventListener(a.start, this.scrollbar.onDragStart, o),
                e.addEventListener(a.move, this.scrollbar.onDragMove, o),
                e.addEventListener(a.end, this.scrollbar.onDragEnd, l));
          }
        },
        disableDraggable: function () {
          if (this.params.scrollbar.el) {
            var t = this.scrollbar,
              i = this.touchEventsTouch,
              a = this.touchEventsDesktop,
              s = this.params,
              n = t.$el[0],
              o = !(!r.passiveListener || !s.passiveListeners) && {
                passive: !1,
                capture: !1,
              },
              l = !(!r.passiveListener || !s.passiveListeners) && {
                passive: !0,
                capture: !1,
              };
            r.touch
              ? (n.removeEventListener(i.start, this.scrollbar.onDragStart, o),
                n.removeEventListener(i.move, this.scrollbar.onDragMove, o),
                n.removeEventListener(i.end, this.scrollbar.onDragEnd, l))
              : (n.removeEventListener(a.start, this.scrollbar.onDragStart, o),
                e.removeEventListener(a.move, this.scrollbar.onDragMove, o),
                e.removeEventListener(a.end, this.scrollbar.onDragEnd, l));
          }
        },
        init: function () {
          if (this.params.scrollbar.el) {
            var e = this.scrollbar,
              t = this.$el,
              i = this.params.scrollbar,
              s = a(i.el);
            this.params.uniqueNavElements &&
              "string" == typeof i.el &&
              s.length > 1 &&
              1 === t.find(i.el).length &&
              (s = t.find(i.el));
            var n = s.find("." + this.params.scrollbar.dragClass);
            0 === n.length &&
              ((n = a(
                '<div class="' + this.params.scrollbar.dragClass + '"></div>'
              )),
              s.append(n)),
              o.extend(e, { $el: s, el: s[0], $dragEl: n, dragEl: n[0] }),
              i.draggable && e.enableDraggable();
          }
        },
        destroy: function () {
          this.scrollbar.disableDraggable();
        },
      },
      ae = {
        setTransform: function (e, t) {
          var i = this.rtl,
            s = a(e),
            n = i ? -1 : 1,
            o = s.attr("data-swiper-parallax") || "0",
            r = s.attr("data-swiper-parallax-x"),
            l = s.attr("data-swiper-parallax-y"),
            d = s.attr("data-swiper-parallax-scale"),
            c = s.attr("data-swiper-parallax-opacity");
          if (
            (r || l
              ? ((r = r || "0"), (l = l || "0"))
              : this.isHorizontal()
              ? ((r = o), (l = "0"))
              : ((l = o), (r = "0")),
            (r =
              r.indexOf("%") >= 0
                ? parseInt(r, 10) * t * n + "%"
                : r * t * n + "px"),
            (l =
              l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px"),
            null != c)
          ) {
            var h = c - (c - 1) * (1 - Math.abs(t));
            s[0].style.opacity = h;
          }
          if (null == d) s.transform("translate3d(" + r + ", " + l + ", 0px)");
          else {
            var u = d - (d - 1) * (1 - Math.abs(t));
            s.transform(
              "translate3d(" + r + ", " + l + ", 0px) scale(" + u + ")"
            );
          }
        },
        setTranslate: function () {
          var e = this,
            t = e.$el,
            i = e.slides,
            s = e.progress,
            n = e.snapGrid;
          t
            .children(
              "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
            )
            .each(function (t, i) {
              e.parallax.setTransform(i, s);
            }),
            i.each(function (t, i) {
              var o = i.progress;
              e.params.slidesPerGroup > 1 &&
                "auto" !== e.params.slidesPerView &&
                (o += Math.ceil(t / 2) - s * (n.length - 1)),
                (o = Math.min(Math.max(o, -1), 1)),
                a(i)
                  .find(
                    "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                  )
                  .each(function (t, i) {
                    e.parallax.setTransform(i, o);
                  });
            });
        },
        setTransition: function (e) {
          void 0 === e && (e = this.params.speed),
            this.$el
              .find(
                "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
              )
              .each(function (t, i) {
                var s = a(i),
                  n =
                    parseInt(s.attr("data-swiper-parallax-duration"), 10) || e;
                0 === e && (n = 0), s.transition(n);
              });
        },
      },
      se = {
        getDistanceBetweenTouches: function (e) {
          if (e.targetTouches.length < 2) return 1;
          var t = e.targetTouches[0].pageX,
            i = e.targetTouches[0].pageY,
            a = e.targetTouches[1].pageX,
            s = e.targetTouches[1].pageY;
          return Math.sqrt(Math.pow(a - t, 2) + Math.pow(s - i, 2));
        },
        onGestureStart: function (e) {
          var t = this.params.zoom,
            i = this.zoom,
            s = i.gesture;
          if (
            ((i.fakeGestureTouched = !1),
            (i.fakeGestureMoved = !1),
            !r.gestures)
          ) {
            if (
              "touchstart" !== e.type ||
              ("touchstart" === e.type && e.targetTouches.length < 2)
            )
              return;
            (i.fakeGestureTouched = !0),
              (s.scaleStart = se.getDistanceBetweenTouches(e));
          }
          (s.$slideEl && s.$slideEl.length) ||
          ((s.$slideEl = a(e.target).closest("." + this.params.slideClass)),
          0 === s.$slideEl.length &&
            (s.$slideEl = this.slides.eq(this.activeIndex)),
          (s.$imageEl = s.$slideEl.find(
            "img, svg, canvas, picture, .swiper-zoom-target"
          )),
          (s.$imageWrapEl = s.$imageEl.parent("." + t.containerClass)),
          (s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio),
          0 !== s.$imageWrapEl.length)
            ? (s.$imageEl.transition(0), (this.zoom.isScaling = !0))
            : (s.$imageEl = void 0);
        },
        onGestureChange: function (e) {
          var t = this.params.zoom,
            i = this.zoom,
            a = i.gesture;
          if (!r.gestures) {
            if (
              "touchmove" !== e.type ||
              ("touchmove" === e.type && e.targetTouches.length < 2)
            )
              return;
            (i.fakeGestureMoved = !0),
              (a.scaleMove = se.getDistanceBetweenTouches(e));
          }
          a.$imageEl &&
            0 !== a.$imageEl.length &&
            ((i.scale = r.gestures
              ? e.scale * i.currentScale
              : (a.scaleMove / a.scaleStart) * i.currentScale),
            i.scale > a.maxRatio &&
              (i.scale =
                a.maxRatio - 1 + Math.pow(i.scale - a.maxRatio + 1, 0.5)),
            i.scale < t.minRatio &&
              (i.scale =
                t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, 0.5)),
            a.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"));
        },
        onGestureEnd: function (e) {
          var t = this.params.zoom,
            i = this.zoom,
            a = i.gesture;
          if (!r.gestures) {
            if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
            if (
              "touchend" !== e.type ||
              ("touchend" === e.type &&
                e.changedTouches.length < 2 &&
                !I.android)
            )
              return;
            (i.fakeGestureTouched = !1), (i.fakeGestureMoved = !1);
          }
          a.$imageEl &&
            0 !== a.$imageEl.length &&
            ((i.scale = Math.max(Math.min(i.scale, a.maxRatio), t.minRatio)),
            a.$imageEl
              .transition(this.params.speed)
              .transform("translate3d(0,0,0) scale(" + i.scale + ")"),
            (i.currentScale = i.scale),
            (i.isScaling = !1),
            1 === i.scale && (a.$slideEl = void 0));
        },
        onTouchStart: function (e) {
          var t = this.zoom,
            i = t.gesture,
            a = t.image;
          i.$imageEl &&
            0 !== i.$imageEl.length &&
            (a.isTouched ||
              (I.android && e.preventDefault(),
              (a.isTouched = !0),
              (a.touchesStart.x =
                "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX),
              (a.touchesStart.y =
                "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY)));
        },
        onTouchMove: function (e) {
          var t = this.zoom,
            i = t.gesture,
            a = t.image,
            s = t.velocity;
          if (
            i.$imageEl &&
            0 !== i.$imageEl.length &&
            ((this.allowClick = !1), a.isTouched && i.$slideEl)
          ) {
            a.isMoved ||
              ((a.width = i.$imageEl[0].offsetWidth),
              (a.height = i.$imageEl[0].offsetHeight),
              (a.startX = o.getTranslate(i.$imageWrapEl[0], "x") || 0),
              (a.startY = o.getTranslate(i.$imageWrapEl[0], "y") || 0),
              (i.slideWidth = i.$slideEl[0].offsetWidth),
              (i.slideHeight = i.$slideEl[0].offsetHeight),
              i.$imageWrapEl.transition(0),
              this.rtl && ((a.startX = -a.startX), (a.startY = -a.startY)));
            var n = a.width * t.scale,
              r = a.height * t.scale;
            if (!(n < i.slideWidth && r < i.slideHeight)) {
              if (
                ((a.minX = Math.min(i.slideWidth / 2 - n / 2, 0)),
                (a.maxX = -a.minX),
                (a.minY = Math.min(i.slideHeight / 2 - r / 2, 0)),
                (a.maxY = -a.minY),
                (a.touchesCurrent.x =
                  "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX),
                (a.touchesCurrent.y =
                  "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY),
                !a.isMoved && !t.isScaling)
              ) {
                if (
                  this.isHorizontal() &&
                  ((Math.floor(a.minX) === Math.floor(a.startX) &&
                    a.touchesCurrent.x < a.touchesStart.x) ||
                    (Math.floor(a.maxX) === Math.floor(a.startX) &&
                      a.touchesCurrent.x > a.touchesStart.x))
                )
                  return void (a.isTouched = !1);
                if (
                  !this.isHorizontal() &&
                  ((Math.floor(a.minY) === Math.floor(a.startY) &&
                    a.touchesCurrent.y < a.touchesStart.y) ||
                    (Math.floor(a.maxY) === Math.floor(a.startY) &&
                      a.touchesCurrent.y > a.touchesStart.y))
                )
                  return void (a.isTouched = !1);
              }
              e.preventDefault(),
                e.stopPropagation(),
                (a.isMoved = !0),
                (a.currentX = a.touchesCurrent.x - a.touchesStart.x + a.startX),
                (a.currentY = a.touchesCurrent.y - a.touchesStart.y + a.startY),
                a.currentX < a.minX &&
                  (a.currentX =
                    a.minX + 1 - Math.pow(a.minX - a.currentX + 1, 0.8)),
                a.currentX > a.maxX &&
                  (a.currentX =
                    a.maxX - 1 + Math.pow(a.currentX - a.maxX + 1, 0.8)),
                a.currentY < a.minY &&
                  (a.currentY =
                    a.minY + 1 - Math.pow(a.minY - a.currentY + 1, 0.8)),
                a.currentY > a.maxY &&
                  (a.currentY =
                    a.maxY - 1 + Math.pow(a.currentY - a.maxY + 1, 0.8)),
                s.prevPositionX || (s.prevPositionX = a.touchesCurrent.x),
                s.prevPositionY || (s.prevPositionY = a.touchesCurrent.y),
                s.prevTime || (s.prevTime = Date.now()),
                (s.x =
                  (a.touchesCurrent.x - s.prevPositionX) /
                  (Date.now() - s.prevTime) /
                  2),
                (s.y =
                  (a.touchesCurrent.y - s.prevPositionY) /
                  (Date.now() - s.prevTime) /
                  2),
                Math.abs(a.touchesCurrent.x - s.prevPositionX) < 2 && (s.x = 0),
                Math.abs(a.touchesCurrent.y - s.prevPositionY) < 2 && (s.y = 0),
                (s.prevPositionX = a.touchesCurrent.x),
                (s.prevPositionY = a.touchesCurrent.y),
                (s.prevTime = Date.now()),
                i.$imageWrapEl.transform(
                  "translate3d(" + a.currentX + "px, " + a.currentY + "px,0)"
                );
            }
          }
        },
        onTouchEnd: function () {
          var e = this.zoom,
            t = e.gesture,
            i = e.image,
            a = e.velocity;
          if (t.$imageEl && 0 !== t.$imageEl.length) {
            if (!i.isTouched || !i.isMoved)
              return (i.isTouched = !1), void (i.isMoved = !1);
            (i.isTouched = !1), (i.isMoved = !1);
            var s = 300,
              n = 300,
              o = a.x * s,
              r = i.currentX + o,
              l = a.y * n,
              d = i.currentY + l;
            0 !== a.x && (s = Math.abs((r - i.currentX) / a.x)),
              0 !== a.y && (n = Math.abs((d - i.currentY) / a.y));
            var c = Math.max(s, n);
            (i.currentX = r), (i.currentY = d);
            var h = i.width * e.scale,
              u = i.height * e.scale;
            (i.minX = Math.min(t.slideWidth / 2 - h / 2, 0)),
              (i.maxX = -i.minX),
              (i.minY = Math.min(t.slideHeight / 2 - u / 2, 0)),
              (i.maxY = -i.minY),
              (i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX)),
              (i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY)),
              t.$imageWrapEl
                .transition(c)
                .transform(
                  "translate3d(" + i.currentX + "px, " + i.currentY + "px,0)"
                );
          }
        },
        onTransitionEnd: function () {
          var e = this.zoom,
            t = e.gesture;
          t.$slideEl &&
            this.previousIndex !== this.activeIndex &&
            (t.$imageEl.transform("translate3d(0,0,0) scale(1)"),
            t.$imageWrapEl.transform("translate3d(0,0,0)"),
            (e.scale = 1),
            (e.currentScale = 1),
            (t.$slideEl = void 0),
            (t.$imageEl = void 0),
            (t.$imageWrapEl = void 0));
        },
        toggle: function (e) {
          var t = this.zoom;
          t.scale && 1 !== t.scale ? t.out() : t.in(e);
        },
        in: function (e) {
          var t,
            i,
            a,
            s,
            n,
            o,
            r,
            l,
            d,
            c,
            h,
            u,
            p,
            f,
            m,
            v,
            g = this.zoom,
            b = this.params.zoom,
            y = g.gesture,
            w = g.image;
          y.$slideEl ||
            ((y.$slideEl = this.slides.eq(this.activeIndex)),
            (y.$imageEl = y.$slideEl.find(
              "img, svg, canvas, picture, .swiper-zoom-target"
            )),
            (y.$imageWrapEl = y.$imageEl.parent("." + b.containerClass))),
            y.$imageEl &&
              0 !== y.$imageEl.length &&
              (y.$slideEl.addClass("" + b.zoomedSlideClass),
              void 0 === w.touchesStart.x && e
                ? ((t =
                    "touchend" === e.type
                      ? e.changedTouches[0].pageX
                      : e.pageX),
                  (i =
                    "touchend" === e.type
                      ? e.changedTouches[0].pageY
                      : e.pageY))
                : ((t = w.touchesStart.x), (i = w.touchesStart.y)),
              (g.scale = y.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio),
              (g.currentScale =
                y.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio),
              e
                ? ((m = y.$slideEl[0].offsetWidth),
                  (v = y.$slideEl[0].offsetHeight),
                  (a = y.$slideEl.offset().left + m / 2 - t),
                  (s = y.$slideEl.offset().top + v / 2 - i),
                  (r = y.$imageEl[0].offsetWidth),
                  (l = y.$imageEl[0].offsetHeight),
                  (d = r * g.scale),
                  (c = l * g.scale),
                  (p = -(h = Math.min(m / 2 - d / 2, 0))),
                  (f = -(u = Math.min(v / 2 - c / 2, 0))),
                  (n = a * g.scale) < h && (n = h),
                  n > p && (n = p),
                  (o = s * g.scale) < u && (o = u),
                  o > f && (o = f))
                : ((n = 0), (o = 0)),
              y.$imageWrapEl
                .transition(300)
                .transform("translate3d(" + n + "px, " + o + "px,0)"),
              y.$imageEl
                .transition(300)
                .transform("translate3d(0,0,0) scale(" + g.scale + ")"));
        },
        out: function () {
          var e = this.zoom,
            t = this.params.zoom,
            i = e.gesture;
          i.$slideEl ||
            ((i.$slideEl = this.slides.eq(this.activeIndex)),
            (i.$imageEl = i.$slideEl.find(
              "img, svg, canvas, picture, .swiper-zoom-target"
            )),
            (i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass))),
            i.$imageEl &&
              0 !== i.$imageEl.length &&
              ((e.scale = 1),
              (e.currentScale = 1),
              i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
              i.$imageEl
                .transition(300)
                .transform("translate3d(0,0,0) scale(1)"),
              i.$slideEl.removeClass("" + t.zoomedSlideClass),
              (i.$slideEl = void 0));
        },
        enable: function () {
          var e = this.zoom;
          if (!e.enabled) {
            e.enabled = !0;
            var t = !(
                "touchstart" !== this.touchEvents.start ||
                !r.passiveListener ||
                !this.params.passiveListeners
              ) && { passive: !0, capture: !1 },
              i = !r.passiveListener || { passive: !1, capture: !0 },
              a = "." + this.params.slideClass;
            r.gestures
              ? (this.$wrapperEl.on("gesturestart", a, e.onGestureStart, t),
                this.$wrapperEl.on("gesturechange", a, e.onGestureChange, t),
                this.$wrapperEl.on("gestureend", a, e.onGestureEnd, t))
              : "touchstart" === this.touchEvents.start &&
                (this.$wrapperEl.on(
                  this.touchEvents.start,
                  a,
                  e.onGestureStart,
                  t
                ),
                this.$wrapperEl.on(
                  this.touchEvents.move,
                  a,
                  e.onGestureChange,
                  i
                ),
                this.$wrapperEl.on(this.touchEvents.end, a, e.onGestureEnd, t),
                this.touchEvents.cancel &&
                  this.$wrapperEl.on(
                    this.touchEvents.cancel,
                    a,
                    e.onGestureEnd,
                    t
                  )),
              this.$wrapperEl.on(
                this.touchEvents.move,
                "." + this.params.zoom.containerClass,
                e.onTouchMove,
                i
              );
          }
        },
        disable: function () {
          var e = this.zoom;
          if (e.enabled) {
            this.zoom.enabled = !1;
            var t = !(
                "touchstart" !== this.touchEvents.start ||
                !r.passiveListener ||
                !this.params.passiveListeners
              ) && { passive: !0, capture: !1 },
              i = !r.passiveListener || { passive: !1, capture: !0 },
              a = "." + this.params.slideClass;
            r.gestures
              ? (this.$wrapperEl.off("gesturestart", a, e.onGestureStart, t),
                this.$wrapperEl.off("gesturechange", a, e.onGestureChange, t),
                this.$wrapperEl.off("gestureend", a, e.onGestureEnd, t))
              : "touchstart" === this.touchEvents.start &&
                (this.$wrapperEl.off(
                  this.touchEvents.start,
                  a,
                  e.onGestureStart,
                  t
                ),
                this.$wrapperEl.off(
                  this.touchEvents.move,
                  a,
                  e.onGestureChange,
                  i
                ),
                this.$wrapperEl.off(this.touchEvents.end, a, e.onGestureEnd, t),
                this.touchEvents.cancel &&
                  this.$wrapperEl.off(
                    this.touchEvents.cancel,
                    a,
                    e.onGestureEnd,
                    t
                  )),
              this.$wrapperEl.off(
                this.touchEvents.move,
                "." + this.params.zoom.containerClass,
                e.onTouchMove,
                i
              );
          }
        },
      },
      ne = {
        loadInSlide: function (e, t) {
          void 0 === t && (t = !0);
          var i = this,
            s = i.params.lazy;
          if (void 0 !== e && 0 !== i.slides.length) {
            var n =
                i.virtual && i.params.virtual.enabled
                  ? i.$wrapperEl.children(
                      "." +
                        i.params.slideClass +
                        '[data-swiper-slide-index="' +
                        e +
                        '"]'
                    )
                  : i.slides.eq(e),
              o = n.find(
                "." +
                  s.elementClass +
                  ":not(." +
                  s.loadedClass +
                  "):not(." +
                  s.loadingClass +
                  ")"
              );
            !n.hasClass(s.elementClass) ||
              n.hasClass(s.loadedClass) ||
              n.hasClass(s.loadingClass) ||
              (o = o.add(n[0])),
              0 !== o.length &&
                o.each(function (e, o) {
                  var r = a(o);
                  r.addClass(s.loadingClass);
                  var l = r.attr("data-background"),
                    d = r.attr("data-src"),
                    c = r.attr("data-srcset"),
                    h = r.attr("data-sizes");
                  i.loadImage(r[0], d || l, c, h, !1, function () {
                    if (null != i && i && (!i || i.params) && !i.destroyed) {
                      if (
                        (l
                          ? (r.css("background-image", 'url("' + l + '")'),
                            r.removeAttr("data-background"))
                          : (c &&
                              (r.attr("srcset", c),
                              r.removeAttr("data-srcset")),
                            h &&
                              (r.attr("sizes", h), r.removeAttr("data-sizes")),
                            d && (r.attr("src", d), r.removeAttr("data-src"))),
                        r.addClass(s.loadedClass).removeClass(s.loadingClass),
                        n.find("." + s.preloaderClass).remove(),
                        i.params.loop && t)
                      ) {
                        var e = n.attr("data-swiper-slide-index");
                        if (n.hasClass(i.params.slideDuplicateClass)) {
                          var a = i.$wrapperEl.children(
                            '[data-swiper-slide-index="' +
                              e +
                              '"]:not(.' +
                              i.params.slideDuplicateClass +
                              ")"
                          );
                          i.lazy.loadInSlide(a.index(), !1);
                        } else {
                          var o = i.$wrapperEl.children(
                            "." +
                              i.params.slideDuplicateClass +
                              '[data-swiper-slide-index="' +
                              e +
                              '"]'
                          );
                          i.lazy.loadInSlide(o.index(), !1);
                        }
                      }
                      i.emit("lazyImageReady", n[0], r[0]),
                        i.params.autoHeight && i.updateAutoHeight();
                    }
                  }),
                    i.emit("lazyImageLoad", n[0], r[0]);
                });
          }
        },
        load: function () {
          var e = this,
            t = e.$wrapperEl,
            i = e.params,
            s = e.slides,
            n = e.activeIndex,
            o = e.virtual && i.virtual.enabled,
            r = i.lazy,
            l = i.slidesPerView;
          function d(e) {
            if (o) {
              if (
                t.children(
                  "." + i.slideClass + '[data-swiper-slide-index="' + e + '"]'
                ).length
              )
                return !0;
            } else if (s[e]) return !0;
            return !1;
          }
          function c(e) {
            return o ? a(e).attr("data-swiper-slide-index") : a(e).index();
          }
          if (
            ("auto" === l && (l = 0),
            e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0),
            e.params.watchSlidesVisibility)
          )
            t.children("." + i.slideVisibleClass).each(function (t, i) {
              var s = o ? a(i).attr("data-swiper-slide-index") : a(i).index();
              e.lazy.loadInSlide(s);
            });
          else if (l > 1)
            for (var h = n; h < n + l; h += 1) d(h) && e.lazy.loadInSlide(h);
          else e.lazy.loadInSlide(n);
          if (r.loadPrevNext)
            if (l > 1 || (r.loadPrevNextAmount && r.loadPrevNextAmount > 1)) {
              for (
                var u = r.loadPrevNextAmount,
                  p = l,
                  f = Math.min(n + p + Math.max(u, p), s.length),
                  m = Math.max(n - Math.max(p, u), 0),
                  v = n + l;
                v < f;
                v += 1
              )
                d(v) && e.lazy.loadInSlide(v);
              for (var g = m; g < n; g += 1) d(g) && e.lazy.loadInSlide(g);
            } else {
              var b = t.children("." + i.slideNextClass);
              b.length > 0 && e.lazy.loadInSlide(c(b));
              var y = t.children("." + i.slidePrevClass);
              y.length > 0 && e.lazy.loadInSlide(c(y));
            }
        },
      },
      oe = {
        LinearSpline: function (e, t) {
          var i, a, s, n, o;
          return (
            (this.x = e),
            (this.y = t),
            (this.lastIndex = e.length - 1),
            (this.interpolate = function (e) {
              return e
                ? ((o = (function (e, t) {
                    for (a = -1, i = e.length; i - a > 1; )
                      e[(s = (i + a) >> 1)] <= t ? (a = s) : (i = s);
                    return i;
                  })(this.x, e)),
                  (n = o - 1),
                  ((e - this.x[n]) * (this.y[o] - this.y[n])) /
                    (this.x[o] - this.x[n]) +
                    this.y[n])
                : 0;
            }),
            this
          );
        },
        getInterpolateFunction: function (e) {
          this.controller.spline ||
            (this.controller.spline = this.params.loop
              ? new oe.LinearSpline(this.slidesGrid, e.slidesGrid)
              : new oe.LinearSpline(this.snapGrid, e.snapGrid));
        },
        setTranslate: function (e, t) {
          var i,
            a,
            s = this,
            n = s.controller.control;
          function o(e) {
            var t = s.rtlTranslate ? -s.translate : s.translate;
            "slide" === s.params.controller.by &&
              (s.controller.getInterpolateFunction(e),
              (a = -s.controller.spline.interpolate(-t))),
              (a && "container" !== s.params.controller.by) ||
                ((i =
                  (e.maxTranslate() - e.minTranslate()) /
                  (s.maxTranslate() - s.minTranslate())),
                (a = (t - s.minTranslate()) * i + e.minTranslate())),
              s.params.controller.inverse && (a = e.maxTranslate() - a),
              e.updateProgress(a),
              e.setTranslate(a, s),
              e.updateActiveIndex(),
              e.updateSlidesClasses();
          }
          if (Array.isArray(n))
            for (var r = 0; r < n.length; r += 1)
              n[r] !== t && n[r] instanceof q && o(n[r]);
          else n instanceof q && t !== n && o(n);
        },
        setTransition: function (e, t) {
          var i,
            a = this,
            s = a.controller.control;
          function n(t) {
            t.setTransition(e, a),
              0 !== e &&
                (t.transitionStart(),
                t.params.autoHeight &&
                  o.nextTick(function () {
                    t.updateAutoHeight();
                  }),
                t.$wrapperEl.transitionEnd(function () {
                  s &&
                    (t.params.loop &&
                      "slide" === a.params.controller.by &&
                      t.loopFix(),
                    t.transitionEnd());
                }));
          }
          if (Array.isArray(s))
            for (i = 0; i < s.length; i += 1)
              s[i] !== t && s[i] instanceof q && n(s[i]);
          else s instanceof q && t !== s && n(s);
        },
      },
      re = {
        makeElFocusable: function (e) {
          return e.attr("tabIndex", "0"), e;
        },
        addElRole: function (e, t) {
          return e.attr("role", t), e;
        },
        addElLabel: function (e, t) {
          return e.attr("aria-label", t), e;
        },
        disableEl: function (e) {
          return e.attr("aria-disabled", !0), e;
        },
        enableEl: function (e) {
          return e.attr("aria-disabled", !1), e;
        },
        onEnterKey: function (e) {
          var t = this.params.a11y;
          if (13 === e.keyCode) {
            var i = a(e.target);
            this.navigation &&
              this.navigation.$nextEl &&
              i.is(this.navigation.$nextEl) &&
              ((this.isEnd && !this.params.loop) || this.slideNext(),
              this.isEnd
                ? this.a11y.notify(t.lastSlideMessage)
                : this.a11y.notify(t.nextSlideMessage)),
              this.navigation &&
                this.navigation.$prevEl &&
                i.is(this.navigation.$prevEl) &&
                ((this.isBeginning && !this.params.loop) || this.slidePrev(),
                this.isBeginning
                  ? this.a11y.notify(t.firstSlideMessage)
                  : this.a11y.notify(t.prevSlideMessage)),
              this.pagination &&
                i.is("." + this.params.pagination.bulletClass) &&
                i[0].click();
          }
        },
        notify: function (e) {
          var t = this.a11y.liveRegion;
          0 !== t.length && (t.html(""), t.html(e));
        },
        updateNavigation: function () {
          if (!this.params.loop && this.navigation) {
            var e = this.navigation,
              t = e.$nextEl,
              i = e.$prevEl;
            i &&
              i.length > 0 &&
              (this.isBeginning
                ? this.a11y.disableEl(i)
                : this.a11y.enableEl(i)),
              t &&
                t.length > 0 &&
                (this.isEnd ? this.a11y.disableEl(t) : this.a11y.enableEl(t));
          }
        },
        updatePagination: function () {
          var e = this,
            t = e.params.a11y;
          e.pagination &&
            e.params.pagination.clickable &&
            e.pagination.bullets &&
            e.pagination.bullets.length &&
            e.pagination.bullets.each(function (i, s) {
              var n = a(s);
              e.a11y.makeElFocusable(n),
                e.a11y.addElRole(n, "button"),
                e.a11y.addElLabel(
                  n,
                  t.paginationBulletMessage.replace(/{{index}}/, n.index() + 1)
                );
            });
        },
        init: function () {
          this.$el.append(this.a11y.liveRegion);
          var e,
            t,
            i = this.params.a11y;
          this.navigation &&
            this.navigation.$nextEl &&
            (e = this.navigation.$nextEl),
            this.navigation &&
              this.navigation.$prevEl &&
              (t = this.navigation.$prevEl),
            e &&
              (this.a11y.makeElFocusable(e),
              this.a11y.addElRole(e, "button"),
              this.a11y.addElLabel(e, i.nextSlideMessage),
              e.on("keydown", this.a11y.onEnterKey)),
            t &&
              (this.a11y.makeElFocusable(t),
              this.a11y.addElRole(t, "button"),
              this.a11y.addElLabel(t, i.prevSlideMessage),
              t.on("keydown", this.a11y.onEnterKey)),
            this.pagination &&
              this.params.pagination.clickable &&
              this.pagination.bullets &&
              this.pagination.bullets.length &&
              this.pagination.$el.on(
                "keydown",
                "." + this.params.pagination.bulletClass,
                this.a11y.onEnterKey
              );
        },
        destroy: function () {
          var e, t;
          this.a11y.liveRegion &&
            this.a11y.liveRegion.length > 0 &&
            this.a11y.liveRegion.remove(),
            this.navigation &&
              this.navigation.$nextEl &&
              (e = this.navigation.$nextEl),
            this.navigation &&
              this.navigation.$prevEl &&
              (t = this.navigation.$prevEl),
            e && e.off("keydown", this.a11y.onEnterKey),
            t && t.off("keydown", this.a11y.onEnterKey),
            this.pagination &&
              this.params.pagination.clickable &&
              this.pagination.bullets &&
              this.pagination.bullets.length &&
              this.pagination.$el.off(
                "keydown",
                "." + this.params.pagination.bulletClass,
                this.a11y.onEnterKey
              );
        },
      },
      le = {
        init: function () {
          if (this.params.history) {
            if (!t.history || !t.history.pushState)
              return (
                (this.params.history.enabled = !1),
                void (this.params.hashNavigation.enabled = !0)
              );
            var e = this.history;
            (e.initialized = !0),
              (e.paths = le.getPathValues()),
              (e.paths.key || e.paths.value) &&
                (e.scrollToSlide(
                  0,
                  e.paths.value,
                  this.params.runCallbacksOnInit
                ),
                this.params.history.replaceState ||
                  t.addEventListener(
                    "popstate",
                    this.history.setHistoryPopState
                  ));
          }
        },
        destroy: function () {
          this.params.history.replaceState ||
            t.removeEventListener("popstate", this.history.setHistoryPopState);
        },
        setHistoryPopState: function () {
          (this.history.paths = le.getPathValues()),
            this.history.scrollToSlide(
              this.params.speed,
              this.history.paths.value,
              !1
            );
        },
        getPathValues: function () {
          var e = t.location.pathname
              .slice(1)
              .split("/")
              .filter(function (e) {
                return "" !== e;
              }),
            i = e.length;
          return { key: e[i - 2], value: e[i - 1] };
        },
        setHistory: function (e, i) {
          if (this.history.initialized && this.params.history.enabled) {
            var a = this.slides.eq(i),
              s = le.slugify(a.attr("data-history"));
            t.location.pathname.includes(e) || (s = e + "/" + s);
            var n = t.history.state;
            (n && n.value === s) ||
              (this.params.history.replaceState
                ? t.history.replaceState({ value: s }, null, s)
                : t.history.pushState({ value: s }, null, s));
          }
        },
        slugify: function (e) {
          return e
            .toString()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]+/g, "")
            .replace(/--+/g, "-")
            .replace(/^-+/, "")
            .replace(/-+$/, "");
        },
        scrollToSlide: function (e, t, i) {
          if (t)
            for (var a = 0, s = this.slides.length; a < s; a += 1) {
              var n = this.slides.eq(a);
              if (
                le.slugify(n.attr("data-history")) === t &&
                !n.hasClass(this.params.slideDuplicateClass)
              ) {
                var o = n.index();
                this.slideTo(o, e, i);
              }
            }
          else this.slideTo(0, e, i);
        },
      },
      de = {
        onHashCange: function () {
          var t = e.location.hash.replace("#", "");
          if (t !== this.slides.eq(this.activeIndex).attr("data-hash")) {
            var i = this.$wrapperEl
              .children(
                "." + this.params.slideClass + '[data-hash="' + t + '"]'
              )
              .index();
            if (void 0 === i) return;
            this.slideTo(i);
          }
        },
        setHash: function () {
          if (
            this.hashNavigation.initialized &&
            this.params.hashNavigation.enabled
          )
            if (
              this.params.hashNavigation.replaceState &&
              t.history &&
              t.history.replaceState
            )
              t.history.replaceState(
                null,
                null,
                "#" + this.slides.eq(this.activeIndex).attr("data-hash") || ""
              );
            else {
              var i = this.slides.eq(this.activeIndex),
                a = i.attr("data-hash") || i.attr("data-history");
              e.location.hash = a || "";
            }
        },
        init: function () {
          if (
            !(
              !this.params.hashNavigation.enabled ||
              (this.params.history && this.params.history.enabled)
            )
          ) {
            this.hashNavigation.initialized = !0;
            var i = e.location.hash.replace("#", "");
            if (i)
              for (var s = 0, n = this.slides.length; s < n; s += 1) {
                var o = this.slides.eq(s);
                if (
                  (o.attr("data-hash") || o.attr("data-history")) === i &&
                  !o.hasClass(this.params.slideDuplicateClass)
                ) {
                  var r = o.index();
                  this.slideTo(r, 0, this.params.runCallbacksOnInit, !0);
                }
              }
            this.params.hashNavigation.watchState &&
              a(t).on("hashchange", this.hashNavigation.onHashCange);
          }
        },
        destroy: function () {
          this.params.hashNavigation.watchState &&
            a(t).off("hashchange", this.hashNavigation.onHashCange);
        },
      },
      ce = {
        run: function () {
          var e = this,
            t = e.slides.eq(e.activeIndex),
            i = e.params.autoplay.delay;
          t.attr("data-swiper-autoplay") &&
            (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
            clearTimeout(e.autoplay.timeout),
            (e.autoplay.timeout = o.nextTick(function () {
              e.params.autoplay.reverseDirection
                ? e.params.loop
                  ? (e.loopFix(),
                    e.slidePrev(e.params.speed, !0, !0),
                    e.emit("autoplay"))
                  : e.isBeginning
                  ? e.params.autoplay.stopOnLastSlide
                    ? e.autoplay.stop()
                    : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0),
                      e.emit("autoplay"))
                  : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay"))
                : e.params.loop
                ? (e.loopFix(),
                  e.slideNext(e.params.speed, !0, !0),
                  e.emit("autoplay"))
                : e.isEnd
                ? e.params.autoplay.stopOnLastSlide
                  ? e.autoplay.stop()
                  : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay"))
                : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")),
                e.params.cssMode && e.autoplay.running && e.autoplay.run();
            }, i));
        },
        start: function () {
          return (
            void 0 === this.autoplay.timeout &&
            !this.autoplay.running &&
            ((this.autoplay.running = !0),
            this.emit("autoplayStart"),
            this.autoplay.run(),
            !0)
          );
        },
        stop: function () {
          return (
            !!this.autoplay.running &&
            void 0 !== this.autoplay.timeout &&
            (this.autoplay.timeout &&
              (clearTimeout(this.autoplay.timeout),
              (this.autoplay.timeout = void 0)),
            (this.autoplay.running = !1),
            this.emit("autoplayStop"),
            !0)
          );
        },
        pause: function (e) {
          this.autoplay.running &&
            (this.autoplay.paused ||
              (this.autoplay.timeout && clearTimeout(this.autoplay.timeout),
              (this.autoplay.paused = !0),
              0 !== e && this.params.autoplay.waitForTransition
                ? (this.$wrapperEl[0].addEventListener(
                    "transitionend",
                    this.autoplay.onTransitionEnd
                  ),
                  this.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    this.autoplay.onTransitionEnd
                  ))
                : ((this.autoplay.paused = !1), this.autoplay.run())));
        },
      },
      he = {
        setTranslate: function () {
          for (var e = this.slides, t = 0; t < e.length; t += 1) {
            var i = this.slides.eq(t),
              a = -i[0].swiperSlideOffset;
            this.params.virtualTranslate || (a -= this.translate);
            var s = 0;
            this.isHorizontal() || ((s = a), (a = 0));
            var n = this.params.fadeEffect.crossFade
              ? Math.max(1 - Math.abs(i[0].progress), 0)
              : 1 + Math.min(Math.max(i[0].progress, -1), 0);
            i.css({ opacity: n }).transform(
              "translate3d(" + a + "px, " + s + "px, 0px)"
            );
          }
        },
        setTransition: function (e) {
          var t = this,
            i = t.slides,
            a = t.$wrapperEl;
          if ((i.transition(e), t.params.virtualTranslate && 0 !== e)) {
            var s = !1;
            i.transitionEnd(function () {
              if (!s && t && !t.destroyed) {
                (s = !0), (t.animating = !1);
                for (
                  var e = ["webkitTransitionEnd", "transitionend"], i = 0;
                  i < e.length;
                  i += 1
                )
                  a.trigger(e[i]);
              }
            });
          }
        },
      },
      ue = {
        setTranslate: function () {
          var e,
            t = this.$el,
            i = this.$wrapperEl,
            s = this.slides,
            n = this.width,
            o = this.height,
            r = this.rtlTranslate,
            l = this.size,
            d = this.params.cubeEffect,
            c = this.isHorizontal(),
            h = this.virtual && this.params.virtual.enabled,
            u = 0;
          d.shadow &&
            (c
              ? (0 === (e = i.find(".swiper-cube-shadow")).length &&
                  ((e = a('<div class="swiper-cube-shadow"></div>')),
                  i.append(e)),
                e.css({ height: n + "px" }))
              : 0 === (e = t.find(".swiper-cube-shadow")).length &&
                ((e = a('<div class="swiper-cube-shadow"></div>')),
                t.append(e)));
          for (var p = 0; p < s.length; p += 1) {
            var f = s.eq(p),
              m = p;
            h && (m = parseInt(f.attr("data-swiper-slide-index"), 10));
            var v = 90 * m,
              g = Math.floor(v / 360);
            r && ((v = -v), (g = Math.floor(-v / 360)));
            var b = Math.max(Math.min(f[0].progress, 1), -1),
              y = 0,
              w = 0,
              x = 0;
            m % 4 == 0
              ? ((y = 4 * -g * l), (x = 0))
              : (m - 1) % 4 == 0
              ? ((y = 0), (x = 4 * -g * l))
              : (m - 2) % 4 == 0
              ? ((y = l + 4 * g * l), (x = l))
              : (m - 3) % 4 == 0 && ((y = -l), (x = 3 * l + 4 * l * g)),
              r && (y = -y),
              c || ((w = y), (y = 0));
            var $ =
              "rotateX(" +
              (c ? 0 : -v) +
              "deg) rotateY(" +
              (c ? v : 0) +
              "deg) translate3d(" +
              y +
              "px, " +
              w +
              "px, " +
              x +
              "px)";
            if (
              (b <= 1 &&
                b > -1 &&
                ((u = 90 * m + 90 * b), r && (u = 90 * -m - 90 * b)),
              f.transform($),
              d.slideShadows)
            ) {
              var C = c
                  ? f.find(".swiper-slide-shadow-left")
                  : f.find(".swiper-slide-shadow-top"),
                S = c
                  ? f.find(".swiper-slide-shadow-right")
                  : f.find(".swiper-slide-shadow-bottom");
              0 === C.length &&
                ((C = a(
                  '<div class="swiper-slide-shadow-' +
                    (c ? "left" : "top") +
                    '"></div>'
                )),
                f.append(C)),
                0 === S.length &&
                  ((S = a(
                    '<div class="swiper-slide-shadow-' +
                      (c ? "right" : "bottom") +
                      '"></div>'
                  )),
                  f.append(S)),
                C.length && (C[0].style.opacity = Math.max(-b, 0)),
                S.length && (S[0].style.opacity = Math.max(b, 0));
            }
          }
          if (
            (i.css({
              "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
              "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
              "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
              "transform-origin": "50% 50% -" + l / 2 + "px",
            }),
            d.shadow)
          )
            if (c)
              e.transform(
                "translate3d(0px, " +
                  (n / 2 + d.shadowOffset) +
                  "px, " +
                  -n / 2 +
                  "px) rotateX(90deg) rotateZ(0deg) scale(" +
                  d.shadowScale +
                  ")"
              );
            else {
              var T = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90),
                E =
                  1.5 -
                  (Math.sin((2 * T * Math.PI) / 360) / 2 +
                    Math.cos((2 * T * Math.PI) / 360) / 2),
                _ = d.shadowScale,
                M = d.shadowScale / E,
                k = d.shadowOffset;
              e.transform(
                "scale3d(" +
                  _ +
                  ", 1, " +
                  M +
                  ") translate3d(0px, " +
                  (o / 2 + k) +
                  "px, " +
                  -o / 2 / M +
                  "px) rotateX(-90deg)"
              );
            }
          var P = N.isSafari || N.isUiWebView ? -l / 2 : 0;
          i.transform(
            "translate3d(0px,0," +
              P +
              "px) rotateX(" +
              (this.isHorizontal() ? 0 : u) +
              "deg) rotateY(" +
              (this.isHorizontal() ? -u : 0) +
              "deg)"
          );
        },
        setTransition: function (e) {
          var t = this.$el;
          this.slides
            .transition(e)
            .find(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
            )
            .transition(e),
            this.params.cubeEffect.shadow &&
              !this.isHorizontal() &&
              t.find(".swiper-cube-shadow").transition(e);
        },
      },
      pe = {
        setTranslate: function () {
          for (
            var e = this.slides, t = this.rtlTranslate, i = 0;
            i < e.length;
            i += 1
          ) {
            var s = e.eq(i),
              n = s[0].progress;
            this.params.flipEffect.limitRotation &&
              (n = Math.max(Math.min(s[0].progress, 1), -1));
            var o = -180 * n,
              r = 0,
              l = -s[0].swiperSlideOffset,
              d = 0;
            if (
              (this.isHorizontal()
                ? t && (o = -o)
                : ((d = l), (l = 0), (r = -o), (o = 0)),
              (s[0].style.zIndex = -Math.abs(Math.round(n)) + e.length),
              this.params.flipEffect.slideShadows)
            ) {
              var c = this.isHorizontal()
                  ? s.find(".swiper-slide-shadow-left")
                  : s.find(".swiper-slide-shadow-top"),
                h = this.isHorizontal()
                  ? s.find(".swiper-slide-shadow-right")
                  : s.find(".swiper-slide-shadow-bottom");
              0 === c.length &&
                ((c = a(
                  '<div class="swiper-slide-shadow-' +
                    (this.isHorizontal() ? "left" : "top") +
                    '"></div>'
                )),
                s.append(c)),
                0 === h.length &&
                  ((h = a(
                    '<div class="swiper-slide-shadow-' +
                      (this.isHorizontal() ? "right" : "bottom") +
                      '"></div>'
                  )),
                  s.append(h)),
                c.length && (c[0].style.opacity = Math.max(-n, 0)),
                h.length && (h[0].style.opacity = Math.max(n, 0));
            }
            s.transform(
              "translate3d(" +
                l +
                "px, " +
                d +
                "px, 0px) rotateX(" +
                r +
                "deg) rotateY(" +
                o +
                "deg)"
            );
          }
        },
        setTransition: function (e) {
          var t = this,
            i = t.slides,
            a = t.activeIndex,
            s = t.$wrapperEl;
          if (
            (i
              .transition(e)
              .find(
                ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
              )
              .transition(e),
            t.params.virtualTranslate && 0 !== e)
          ) {
            var n = !1;
            i.eq(a).transitionEnd(function () {
              if (!n && t && !t.destroyed) {
                (n = !0), (t.animating = !1);
                for (
                  var e = ["webkitTransitionEnd", "transitionend"], i = 0;
                  i < e.length;
                  i += 1
                )
                  s.trigger(e[i]);
              }
            });
          }
        },
      },
      fe = {
        setTranslate: function () {
          for (
            var e = this.width,
              t = this.height,
              i = this.slides,
              s = this.$wrapperEl,
              n = this.slidesSizesGrid,
              o = this.params.coverflowEffect,
              l = this.isHorizontal(),
              d = this.translate,
              c = l ? e / 2 - d : t / 2 - d,
              h = l ? o.rotate : -o.rotate,
              u = o.depth,
              p = 0,
              f = i.length;
            p < f;
            p += 1
          ) {
            var m = i.eq(p),
              v = n[p],
              g = ((c - m[0].swiperSlideOffset - v / 2) / v) * o.modifier,
              b = l ? h * g : 0,
              y = l ? 0 : h * g,
              w = -u * Math.abs(g),
              x = o.stretch;
            "string" == typeof x &&
              -1 !== x.indexOf("%") &&
              (x = (parseFloat(o.stretch) / 100) * v);
            var $ = l ? 0 : x * g,
              C = l ? x * g : 0;
            Math.abs(C) < 0.001 && (C = 0),
              Math.abs($) < 0.001 && ($ = 0),
              Math.abs(w) < 0.001 && (w = 0),
              Math.abs(b) < 0.001 && (b = 0),
              Math.abs(y) < 0.001 && (y = 0);
            var S =
              "translate3d(" +
              C +
              "px," +
              $ +
              "px," +
              w +
              "px)  rotateX(" +
              y +
              "deg) rotateY(" +
              b +
              "deg)";
            if (
              (m.transform(S),
              (m[0].style.zIndex = 1 - Math.abs(Math.round(g))),
              o.slideShadows)
            ) {
              var T = l
                  ? m.find(".swiper-slide-shadow-left")
                  : m.find(".swiper-slide-shadow-top"),
                E = l
                  ? m.find(".swiper-slide-shadow-right")
                  : m.find(".swiper-slide-shadow-bottom");
              0 === T.length &&
                ((T = a(
                  '<div class="swiper-slide-shadow-' +
                    (l ? "left" : "top") +
                    '"></div>'
                )),
                m.append(T)),
                0 === E.length &&
                  ((E = a(
                    '<div class="swiper-slide-shadow-' +
                      (l ? "right" : "bottom") +
                      '"></div>'
                  )),
                  m.append(E)),
                T.length && (T[0].style.opacity = g > 0 ? g : 0),
                E.length && (E[0].style.opacity = -g > 0 ? -g : 0);
            }
          }
          (r.pointerEvents || r.prefixedPointerEvents) &&
            (s[0].style.perspectiveOrigin = c + "px 50%");
        },
        setTransition: function (e) {
          this.slides
            .transition(e)
            .find(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
            )
            .transition(e);
        },
      },
      me = {
        init: function () {
          var e = this.params.thumbs,
            t = this.constructor;
          e.swiper instanceof t
            ? ((this.thumbs.swiper = e.swiper),
              o.extend(this.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              }),
              o.extend(this.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              }))
            : o.isObject(e.swiper) &&
              ((this.thumbs.swiper = new t(
                o.extend({}, e.swiper, {
                  watchSlidesVisibility: !0,
                  watchSlidesProgress: !0,
                  slideToClickedSlide: !1,
                })
              )),
              (this.thumbs.swiperCreated = !0)),
            this.thumbs.swiper.$el.addClass(
              this.params.thumbs.thumbsContainerClass
            ),
            this.thumbs.swiper.on("tap", this.thumbs.onThumbClick);
        },
        onThumbClick: function () {
          var e = this.thumbs.swiper;
          if (e) {
            var t = e.clickedIndex,
              i = e.clickedSlide;
            if (
              !(
                (i &&
                  a(i).hasClass(this.params.thumbs.slideThumbActiveClass)) ||
                null == t
              )
            ) {
              var s;
              if (
                ((s = e.params.loop
                  ? parseInt(
                      a(e.clickedSlide).attr("data-swiper-slide-index"),
                      10
                    )
                  : t),
                this.params.loop)
              ) {
                var n = this.activeIndex;
                this.slides.eq(n).hasClass(this.params.slideDuplicateClass) &&
                  (this.loopFix(),
                  (this._clientLeft = this.$wrapperEl[0].clientLeft),
                  (n = this.activeIndex));
                var o = this.slides
                    .eq(n)
                    .prevAll('[data-swiper-slide-index="' + s + '"]')
                    .eq(0)
                    .index(),
                  r = this.slides
                    .eq(n)
                    .nextAll('[data-swiper-slide-index="' + s + '"]')
                    .eq(0)
                    .index();
                s = void 0 === o ? r : void 0 === r ? o : r - n < n - o ? r : o;
              }
              this.slideTo(s);
            }
          }
        },
        update: function (e) {
          var t = this.thumbs.swiper;
          if (t) {
            var i =
              "auto" === t.params.slidesPerView
                ? t.slidesPerViewDynamic()
                : t.params.slidesPerView;
            if (this.realIndex !== t.realIndex) {
              var a,
                s = t.activeIndex;
              if (t.params.loop) {
                t.slides.eq(s).hasClass(t.params.slideDuplicateClass) &&
                  (t.loopFix(),
                  (t._clientLeft = t.$wrapperEl[0].clientLeft),
                  (s = t.activeIndex));
                var n = t.slides
                    .eq(s)
                    .prevAll(
                      '[data-swiper-slide-index="' + this.realIndex + '"]'
                    )
                    .eq(0)
                    .index(),
                  o = t.slides
                    .eq(s)
                    .nextAll(
                      '[data-swiper-slide-index="' + this.realIndex + '"]'
                    )
                    .eq(0)
                    .index();
                a =
                  void 0 === n
                    ? o
                    : void 0 === o
                    ? n
                    : o - s == s - n
                    ? s
                    : o - s < s - n
                    ? o
                    : n;
              } else a = this.realIndex;
              t.visibleSlidesIndexes &&
                t.visibleSlidesIndexes.indexOf(a) < 0 &&
                (t.params.centeredSlides
                  ? (a =
                      a > s
                        ? a - Math.floor(i / 2) + 1
                        : a + Math.floor(i / 2) - 1)
                  : a > s && (a = a - i + 1),
                t.slideTo(a, e ? 0 : void 0));
            }
            var r = 1,
              l = this.params.thumbs.slideThumbActiveClass;
            if (
              (this.params.slidesPerView > 1 &&
                !this.params.centeredSlides &&
                (r = this.params.slidesPerView),
              this.params.thumbs.multipleActiveThumbs || (r = 1),
              (r = Math.floor(r)),
              t.slides.removeClass(l),
              t.params.loop || (t.params.virtual && t.params.virtual.enabled))
            )
              for (var d = 0; d < r; d += 1)
                t.$wrapperEl
                  .children(
                    '[data-swiper-slide-index="' + (this.realIndex + d) + '"]'
                  )
                  .addClass(l);
            else
              for (var c = 0; c < r; c += 1)
                t.slides.eq(this.realIndex + c).addClass(l);
          }
        },
      },
      ve = [
        V,
        R,
        X,
        Y,
        W,
        Z,
        Q,
        {
          name: "mousewheel",
          params: {
            mousewheel: {
              enabled: !1,
              releaseOnEdges: !1,
              invert: !1,
              forceToAxis: !1,
              sensitivity: 1,
              eventsTarged: "container",
            },
          },
          create: function () {
            o.extend(this, {
              mousewheel: {
                enabled: !1,
                enable: J.enable.bind(this),
                disable: J.disable.bind(this),
                handle: J.handle.bind(this),
                handleMouseEnter: J.handleMouseEnter.bind(this),
                handleMouseLeave: J.handleMouseLeave.bind(this),
                animateSlider: J.animateSlider.bind(this),
                releaseScroll: J.releaseScroll.bind(this),
                lastScrollTime: o.now(),
                lastEventBeforeSnap: void 0,
                recentWheelEvents: [],
              },
            });
          },
          on: {
            init: function () {
              !this.params.mousewheel.enabled &&
                this.params.cssMode &&
                this.mousewheel.disable(),
                this.params.mousewheel.enabled && this.mousewheel.enable();
            },
            destroy: function () {
              this.params.cssMode && this.mousewheel.enable(),
                this.mousewheel.enabled && this.mousewheel.disable();
            },
          },
        },
        {
          name: "navigation",
          params: {
            navigation: {
              nextEl: null,
              prevEl: null,
              hideOnClick: !1,
              disabledClass: "swiper-button-disabled",
              hiddenClass: "swiper-button-hidden",
              lockClass: "swiper-button-lock",
            },
          },
          create: function () {
            o.extend(this, {
              navigation: {
                init: ee.init.bind(this),
                update: ee.update.bind(this),
                destroy: ee.destroy.bind(this),
                onNextClick: ee.onNextClick.bind(this),
                onPrevClick: ee.onPrevClick.bind(this),
              },
            });
          },
          on: {
            init: function () {
              this.navigation.init(), this.navigation.update();
            },
            toEdge: function () {
              this.navigation.update();
            },
            fromEdge: function () {
              this.navigation.update();
            },
            destroy: function () {
              this.navigation.destroy();
            },
            click: function (e) {
              var t,
                i = this.navigation,
                s = i.$nextEl,
                n = i.$prevEl;
              !this.params.navigation.hideOnClick ||
                a(e.target).is(n) ||
                a(e.target).is(s) ||
                (s
                  ? (t = s.hasClass(this.params.navigation.hiddenClass))
                  : n && (t = n.hasClass(this.params.navigation.hiddenClass)),
                !0 === t
                  ? this.emit("navigationShow", this)
                  : this.emit("navigationHide", this),
                s && s.toggleClass(this.params.navigation.hiddenClass),
                n && n.toggleClass(this.params.navigation.hiddenClass));
            },
          },
        },
        {
          name: "pagination",
          params: {
            pagination: {
              el: null,
              bulletElement: "span",
              clickable: !1,
              hideOnClick: !1,
              renderBullet: null,
              renderProgressbar: null,
              renderFraction: null,
              renderCustom: null,
              progressbarOpposite: !1,
              type: "bullets",
              dynamicBullets: !1,
              dynamicMainBullets: 1,
              formatFractionCurrent: function (e) {
                return e;
              },
              formatFractionTotal: function (e) {
                return e;
              },
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
              modifierClass: "swiper-pagination-",
              currentClass: "swiper-pagination-current",
              totalClass: "swiper-pagination-total",
              hiddenClass: "swiper-pagination-hidden",
              progressbarFillClass: "swiper-pagination-progressbar-fill",
              progressbarOppositeClass:
                "swiper-pagination-progressbar-opposite",
              clickableClass: "swiper-pagination-clickable",
              lockClass: "swiper-pagination-lock",
            },
          },
          create: function () {
            o.extend(this, {
              pagination: {
                init: te.init.bind(this),
                render: te.render.bind(this),
                update: te.update.bind(this),
                destroy: te.destroy.bind(this),
                dynamicBulletIndex: 0,
              },
            });
          },
          on: {
            init: function () {
              this.pagination.init(),
                this.pagination.render(),
                this.pagination.update();
            },
            activeIndexChange: function () {
              (this.params.loop || void 0 === this.snapIndex) &&
                this.pagination.update();
            },
            snapIndexChange: function () {
              this.params.loop || this.pagination.update();
            },
            slidesLengthChange: function () {
              this.params.loop &&
                (this.pagination.render(), this.pagination.update());
            },
            snapGridLengthChange: function () {
              this.params.loop ||
                (this.pagination.render(), this.pagination.update());
            },
            destroy: function () {
              this.pagination.destroy();
            },
            click: function (e) {
              this.params.pagination.el &&
                this.params.pagination.hideOnClick &&
                this.pagination.$el.length > 0 &&
                !a(e.target).hasClass(this.params.pagination.bulletClass) &&
                (!0 ===
                this.pagination.$el.hasClass(this.params.pagination.hiddenClass)
                  ? this.emit("paginationShow", this)
                  : this.emit("paginationHide", this),
                this.pagination.$el.toggleClass(
                  this.params.pagination.hiddenClass
                ));
            },
          },
        },
        {
          name: "scrollbar",
          params: {
            scrollbar: {
              el: null,
              dragSize: "auto",
              hide: !1,
              draggable: !1,
              snapOnRelease: !0,
              lockClass: "swiper-scrollbar-lock",
              dragClass: "swiper-scrollbar-drag",
            },
          },
          create: function () {
            o.extend(this, {
              scrollbar: {
                init: ie.init.bind(this),
                destroy: ie.destroy.bind(this),
                updateSize: ie.updateSize.bind(this),
                setTranslate: ie.setTranslate.bind(this),
                setTransition: ie.setTransition.bind(this),
                enableDraggable: ie.enableDraggable.bind(this),
                disableDraggable: ie.disableDraggable.bind(this),
                setDragPosition: ie.setDragPosition.bind(this),
                getPointerPosition: ie.getPointerPosition.bind(this),
                onDragStart: ie.onDragStart.bind(this),
                onDragMove: ie.onDragMove.bind(this),
                onDragEnd: ie.onDragEnd.bind(this),
                isTouched: !1,
                timeout: null,
                dragTimeout: null,
              },
            });
          },
          on: {
            init: function () {
              this.scrollbar.init(),
                this.scrollbar.updateSize(),
                this.scrollbar.setTranslate();
            },
            update: function () {
              this.scrollbar.updateSize();
            },
            resize: function () {
              this.scrollbar.updateSize();
            },
            observerUpdate: function () {
              this.scrollbar.updateSize();
            },
            setTranslate: function () {
              this.scrollbar.setTranslate();
            },
            setTransition: function (e) {
              this.scrollbar.setTransition(e);
            },
            destroy: function () {
              this.scrollbar.destroy();
            },
          },
        },
        {
          name: "parallax",
          params: { parallax: { enabled: !1 } },
          create: function () {
            o.extend(this, {
              parallax: {
                setTransform: ae.setTransform.bind(this),
                setTranslate: ae.setTranslate.bind(this),
                setTransition: ae.setTransition.bind(this),
              },
            });
          },
          on: {
            beforeInit: function () {
              this.params.parallax.enabled &&
                ((this.params.watchSlidesProgress = !0),
                (this.originalParams.watchSlidesProgress = !0));
            },
            init: function () {
              this.params.parallax.enabled && this.parallax.setTranslate();
            },
            setTranslate: function () {
              this.params.parallax.enabled && this.parallax.setTranslate();
            },
            setTransition: function (e) {
              this.params.parallax.enabled && this.parallax.setTransition(e);
            },
          },
        },
        {
          name: "zoom",
          params: {
            zoom: {
              enabled: !1,
              maxRatio: 3,
              minRatio: 1,
              toggle: !0,
              containerClass: "swiper-zoom-container",
              zoomedSlideClass: "swiper-slide-zoomed",
            },
          },
          create: function () {
            var e = this,
              t = {
                enabled: !1,
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                  $slideEl: void 0,
                  slideWidth: void 0,
                  slideHeight: void 0,
                  $imageEl: void 0,
                  $imageWrapEl: void 0,
                  maxRatio: 3,
                },
                image: {
                  isTouched: void 0,
                  isMoved: void 0,
                  currentX: void 0,
                  currentY: void 0,
                  minX: void 0,
                  minY: void 0,
                  maxX: void 0,
                  maxY: void 0,
                  width: void 0,
                  height: void 0,
                  startX: void 0,
                  startY: void 0,
                  touchesStart: {},
                  touchesCurrent: {},
                },
                velocity: {
                  x: void 0,
                  y: void 0,
                  prevPositionX: void 0,
                  prevPositionY: void 0,
                  prevTime: void 0,
                },
              };
            "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out"
              .split(" ")
              .forEach(function (i) {
                t[i] = se[i].bind(e);
              }),
              o.extend(e, { zoom: t });
            var i = 1;
            Object.defineProperty(e.zoom, "scale", {
              get: function () {
                return i;
              },
              set: function (t) {
                if (i !== t) {
                  var a = e.zoom.gesture.$imageEl
                      ? e.zoom.gesture.$imageEl[0]
                      : void 0,
                    s = e.zoom.gesture.$slideEl
                      ? e.zoom.gesture.$slideEl[0]
                      : void 0;
                  e.emit("zoomChange", t, a, s);
                }
                i = t;
              },
            });
          },
          on: {
            init: function () {
              this.params.zoom.enabled && this.zoom.enable();
            },
            destroy: function () {
              this.zoom.disable();
            },
            touchStart: function (e) {
              this.zoom.enabled && this.zoom.onTouchStart(e);
            },
            touchEnd: function (e) {
              this.zoom.enabled && this.zoom.onTouchEnd(e);
            },
            doubleTap: function (e) {
              this.params.zoom.enabled &&
                this.zoom.enabled &&
                this.params.zoom.toggle &&
                this.zoom.toggle(e);
            },
            transitionEnd: function () {
              this.zoom.enabled &&
                this.params.zoom.enabled &&
                this.zoom.onTransitionEnd();
            },
            slideChange: function () {
              this.zoom.enabled &&
                this.params.zoom.enabled &&
                this.params.cssMode &&
                this.zoom.onTransitionEnd();
            },
          },
        },
        {
          name: "lazy",
          params: {
            lazy: {
              enabled: !1,
              loadPrevNext: !1,
              loadPrevNextAmount: 1,
              loadOnTransitionStart: !1,
              elementClass: "swiper-lazy",
              loadingClass: "swiper-lazy-loading",
              loadedClass: "swiper-lazy-loaded",
              preloaderClass: "swiper-lazy-preloader",
            },
          },
          create: function () {
            o.extend(this, {
              lazy: {
                initialImageLoaded: !1,
                load: ne.load.bind(this),
                loadInSlide: ne.loadInSlide.bind(this),
              },
            });
          },
          on: {
            beforeInit: function () {
              this.params.lazy.enabled &&
                this.params.preloadImages &&
                (this.params.preloadImages = !1);
            },
            init: function () {
              this.params.lazy.enabled &&
                !this.params.loop &&
                0 === this.params.initialSlide &&
                this.lazy.load();
            },
            scroll: function () {
              this.params.freeMode &&
                !this.params.freeModeSticky &&
                this.lazy.load();
            },
            resize: function () {
              this.params.lazy.enabled && this.lazy.load();
            },
            scrollbarDragMove: function () {
              this.params.lazy.enabled && this.lazy.load();
            },
            transitionStart: function () {
              this.params.lazy.enabled &&
                (this.params.lazy.loadOnTransitionStart ||
                  (!this.params.lazy.loadOnTransitionStart &&
                    !this.lazy.initialImageLoaded)) &&
                this.lazy.load();
            },
            transitionEnd: function () {
              this.params.lazy.enabled &&
                !this.params.lazy.loadOnTransitionStart &&
                this.lazy.load();
            },
            slideChange: function () {
              this.params.lazy.enabled &&
                this.params.cssMode &&
                this.lazy.load();
            },
          },
        },
        {
          name: "controller",
          params: { controller: { control: void 0, inverse: !1, by: "slide" } },
          create: function () {
            o.extend(this, {
              controller: {
                control: this.params.controller.control,
                getInterpolateFunction: oe.getInterpolateFunction.bind(this),
                setTranslate: oe.setTranslate.bind(this),
                setTransition: oe.setTransition.bind(this),
              },
            });
          },
          on: {
            update: function () {
              this.controller.control &&
                this.controller.spline &&
                ((this.controller.spline = void 0),
                delete this.controller.spline);
            },
            resize: function () {
              this.controller.control &&
                this.controller.spline &&
                ((this.controller.spline = void 0),
                delete this.controller.spline);
            },
            observerUpdate: function () {
              this.controller.control &&
                this.controller.spline &&
                ((this.controller.spline = void 0),
                delete this.controller.spline);
            },
            setTranslate: function (e, t) {
              this.controller.control && this.controller.setTranslate(e, t);
            },
            setTransition: function (e, t) {
              this.controller.control && this.controller.setTransition(e, t);
            },
          },
        },
        {
          name: "a11y",
          params: {
            a11y: {
              enabled: !0,
              notificationClass: "swiper-notification",
              prevSlideMessage: "Previous slide",
              nextSlideMessage: "Next slide",
              firstSlideMessage: "This is the first slide",
              lastSlideMessage: "This is the last slide",
              paginationBulletMessage: "Go to slide {{index}}",
            },
          },
          create: function () {
            var e = this;
            o.extend(e, {
              a11y: {
                liveRegion: a(
                  '<span class="' +
                    e.params.a11y.notificationClass +
                    '" aria-live="assertive" aria-atomic="true"></span>'
                ),
              },
            }),
              Object.keys(re).forEach(function (t) {
                e.a11y[t] = re[t].bind(e);
              });
          },
          on: {
            init: function () {
              this.params.a11y.enabled &&
                (this.a11y.init(), this.a11y.updateNavigation());
            },
            toEdge: function () {
              this.params.a11y.enabled && this.a11y.updateNavigation();
            },
            fromEdge: function () {
              this.params.a11y.enabled && this.a11y.updateNavigation();
            },
            paginationUpdate: function () {
              this.params.a11y.enabled && this.a11y.updatePagination();
            },
            destroy: function () {
              this.params.a11y.enabled && this.a11y.destroy();
            },
          },
        },
        {
          name: "history",
          params: { history: { enabled: !1, replaceState: !1, key: "slides" } },
          create: function () {
            o.extend(this, {
              history: {
                init: le.init.bind(this),
                setHistory: le.setHistory.bind(this),
                setHistoryPopState: le.setHistoryPopState.bind(this),
                scrollToSlide: le.scrollToSlide.bind(this),
                destroy: le.destroy.bind(this),
              },
            });
          },
          on: {
            init: function () {
              this.params.history.enabled && this.history.init();
            },
            destroy: function () {
              this.params.history.enabled && this.history.destroy();
            },
            transitionEnd: function () {
              this.history.initialized &&
                this.history.setHistory(
                  this.params.history.key,
                  this.activeIndex
                );
            },
            slideChange: function () {
              this.history.initialized &&
                this.params.cssMode &&
                this.history.setHistory(
                  this.params.history.key,
                  this.activeIndex
                );
            },
          },
        },
        {
          name: "hash-navigation",
          params: {
            hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 },
          },
          create: function () {
            o.extend(this, {
              hashNavigation: {
                initialized: !1,
                init: de.init.bind(this),
                destroy: de.destroy.bind(this),
                setHash: de.setHash.bind(this),
                onHashCange: de.onHashCange.bind(this),
              },
            });
          },
          on: {
            init: function () {
              this.params.hashNavigation.enabled && this.hashNavigation.init();
            },
            destroy: function () {
              this.params.hashNavigation.enabled &&
                this.hashNavigation.destroy();
            },
            transitionEnd: function () {
              this.hashNavigation.initialized && this.hashNavigation.setHash();
            },
            slideChange: function () {
              this.hashNavigation.initialized &&
                this.params.cssMode &&
                this.hashNavigation.setHash();
            },
          },
        },
        {
          name: "autoplay",
          params: {
            autoplay: {
              enabled: !1,
              delay: 3e3,
              waitForTransition: !0,
              disableOnInteraction: !0,
              stopOnLastSlide: !1,
              reverseDirection: !1,
            },
          },
          create: function () {
            var e = this;
            o.extend(e, {
              autoplay: {
                running: !1,
                paused: !1,
                run: ce.run.bind(e),
                start: ce.start.bind(e),
                stop: ce.stop.bind(e),
                pause: ce.pause.bind(e),
                onVisibilityChange: function () {
                  "hidden" === document.visibilityState &&
                    e.autoplay.running &&
                    e.autoplay.pause(),
                    "visible" === document.visibilityState &&
                      e.autoplay.paused &&
                      (e.autoplay.run(), (e.autoplay.paused = !1));
                },
                onTransitionEnd: function (t) {
                  e &&
                    !e.destroyed &&
                    e.$wrapperEl &&
                    t.target === this &&
                    (e.$wrapperEl[0].removeEventListener(
                      "transitionend",
                      e.autoplay.onTransitionEnd
                    ),
                    e.$wrapperEl[0].removeEventListener(
                      "webkitTransitionEnd",
                      e.autoplay.onTransitionEnd
                    ),
                    (e.autoplay.paused = !1),
                    e.autoplay.running ? e.autoplay.run() : e.autoplay.stop());
                },
              },
            });
          },
          on: {
            init: function () {
              this.params.autoplay.enabled &&
                (this.autoplay.start(),
                document.addEventListener(
                  "visibilitychange",
                  this.autoplay.onVisibilityChange
                ));
            },
            beforeTransitionStart: function (e, t) {
              this.autoplay.running &&
                (t || !this.params.autoplay.disableOnInteraction
                  ? this.autoplay.pause(e)
                  : this.autoplay.stop());
            },
            sliderFirstMove: function () {
              this.autoplay.running &&
                (this.params.autoplay.disableOnInteraction
                  ? this.autoplay.stop()
                  : this.autoplay.pause());
            },
            touchEnd: function () {
              this.params.cssMode &&
                this.autoplay.paused &&
                !this.params.autoplay.disableOnInteraction &&
                this.autoplay.run();
            },
            destroy: function () {
              this.autoplay.running && this.autoplay.stop(),
                document.removeEventListener(
                  "visibilitychange",
                  this.autoplay.onVisibilityChange
                );
            },
          },
        },
        {
          name: "effect-fade",
          params: { fadeEffect: { crossFade: !1 } },
          create: function () {
            o.extend(this, {
              fadeEffect: {
                setTranslate: he.setTranslate.bind(this),
                setTransition: he.setTransition.bind(this),
              },
            });
          },
          on: {
            beforeInit: function () {
              if ("fade" === this.params.effect) {
                this.classNames.push(
                  this.params.containerModifierClass + "fade"
                );
                var e = {
                  slidesPerView: 1,
                  slidesPerColumn: 1,
                  slidesPerGroup: 1,
                  watchSlidesProgress: !0,
                  spaceBetween: 0,
                  virtualTranslate: !0,
                };
                o.extend(this.params, e), o.extend(this.originalParams, e);
              }
            },
            setTranslate: function () {
              "fade" === this.params.effect && this.fadeEffect.setTranslate();
            },
            setTransition: function (e) {
              "fade" === this.params.effect && this.fadeEffect.setTransition(e);
            },
          },
        },
        {
          name: "effect-cube",
          params: {
            cubeEffect: {
              slideShadows: !0,
              shadow: !0,
              shadowOffset: 20,
              shadowScale: 0.94,
            },
          },
          create: function () {
            o.extend(this, {
              cubeEffect: {
                setTranslate: ue.setTranslate.bind(this),
                setTransition: ue.setTransition.bind(this),
              },
            });
          },
          on: {
            beforeInit: function () {
              if ("cube" === this.params.effect) {
                this.classNames.push(
                  this.params.containerModifierClass + "cube"
                ),
                  this.classNames.push(
                    this.params.containerModifierClass + "3d"
                  );
                var e = {
                  slidesPerView: 1,
                  slidesPerColumn: 1,
                  slidesPerGroup: 1,
                  watchSlidesProgress: !0,
                  resistanceRatio: 0,
                  spaceBetween: 0,
                  centeredSlides: !1,
                  virtualTranslate: !0,
                };
                o.extend(this.params, e), o.extend(this.originalParams, e);
              }
            },
            setTranslate: function () {
              "cube" === this.params.effect && this.cubeEffect.setTranslate();
            },
            setTransition: function (e) {
              "cube" === this.params.effect && this.cubeEffect.setTransition(e);
            },
          },
        },
        {
          name: "effect-flip",
          params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
          create: function () {
            o.extend(this, {
              flipEffect: {
                setTranslate: pe.setTranslate.bind(this),
                setTransition: pe.setTransition.bind(this),
              },
            });
          },
          on: {
            beforeInit: function () {
              if ("flip" === this.params.effect) {
                this.classNames.push(
                  this.params.containerModifierClass + "flip"
                ),
                  this.classNames.push(
                    this.params.containerModifierClass + "3d"
                  );
                var e = {
                  slidesPerView: 1,
                  slidesPerColumn: 1,
                  slidesPerGroup: 1,
                  watchSlidesProgress: !0,
                  spaceBetween: 0,
                  virtualTranslate: !0,
                };
                o.extend(this.params, e), o.extend(this.originalParams, e);
              }
            },
            setTranslate: function () {
              "flip" === this.params.effect && this.flipEffect.setTranslate();
            },
            setTransition: function (e) {
              "flip" === this.params.effect && this.flipEffect.setTransition(e);
            },
          },
        },
        {
          name: "effect-coverflow",
          params: {
            coverflowEffect: {
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: !0,
            },
          },
          create: function () {
            o.extend(this, {
              coverflowEffect: {
                setTranslate: fe.setTranslate.bind(this),
                setTransition: fe.setTransition.bind(this),
              },
            });
          },
          on: {
            beforeInit: function () {
              "coverflow" === this.params.effect &&
                (this.classNames.push(
                  this.params.containerModifierClass + "coverflow"
                ),
                this.classNames.push(this.params.containerModifierClass + "3d"),
                (this.params.watchSlidesProgress = !0),
                (this.originalParams.watchSlidesProgress = !0));
            },
            setTranslate: function () {
              "coverflow" === this.params.effect &&
                this.coverflowEffect.setTranslate();
            },
            setTransition: function (e) {
              "coverflow" === this.params.effect &&
                this.coverflowEffect.setTransition(e);
            },
          },
        },
        {
          name: "thumbs",
          params: {
            thumbs: {
              multipleActiveThumbs: !0,
              swiper: null,
              slideThumbActiveClass: "swiper-slide-thumb-active",
              thumbsContainerClass: "swiper-container-thumbs",
            },
          },
          create: function () {
            o.extend(this, {
              thumbs: {
                swiper: null,
                init: me.init.bind(this),
                update: me.update.bind(this),
                onThumbClick: me.onThumbClick.bind(this),
              },
            });
          },
          on: {
            beforeInit: function () {
              var e = this.params.thumbs;
              e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0));
            },
            slideChange: function () {
              this.thumbs.swiper && this.thumbs.update();
            },
            update: function () {
              this.thumbs.swiper && this.thumbs.update();
            },
            resize: function () {
              this.thumbs.swiper && this.thumbs.update();
            },
            observerUpdate: function () {
              this.thumbs.swiper && this.thumbs.update();
            },
            setTransition: function (e) {
              var t = this.thumbs.swiper;
              t && t.setTransition(e);
            },
            beforeDestroy: function () {
              var e = this.thumbs.swiper;
              e && this.thumbs.swiperCreated && e && e.destroy();
            },
          },
        },
      ];
    return (
      void 0 === q.use &&
        ((q.use = q.Class.use), (q.installModule = q.Class.installModule)),
      q.use(ve),
      q
    );
  }),
  (function (e, t, i, a) {
    "use strict";
    function s(e, t) {
      var a,
        s,
        n,
        o = [],
        r = 0;
      (e && e.isDefaultPrevented()) ||
        (e.preventDefault(),
        (t = t || {}),
        e && e.data && (t = p(e.data.options, t)),
        (a = t.$target || i(e.currentTarget).trigger("blur")),
        ((n = i.fancybox.getInstance()) && n.$trigger && n.$trigger.is(a)) ||
          ((o = t.selector
            ? i(t.selector)
            : (s = a.attr("data-fancybox") || "")
            ? (o = e.data ? e.data.items : []).length
              ? o.filter('[data-fancybox="' + s + '"]')
              : i('[data-fancybox="' + s + '"]')
            : [a]),
          (r = i(o).index(a)) < 0 && (r = 0),
          ((n = i.fancybox.open(o, t, r)).$trigger = a)));
    }
    if (((e.console = e.console || { info: function (e) {} }), i)) {
      if (i.fn.fancybox)
        return void console.info("fancyBox already initialized");
      var n = {
          closeExisting: !1,
          loop: !1,
          gutter: 50,
          keyboard: !0,
          preventCaptionOverlap: !0,
          arrows: !0,
          infobar: !0,
          smallBtn: "auto",
          toolbar: "auto",
          buttons: ["zoom", "slideShow", "thumbs", "close"],
          idleTime: 3,
          protect: !1,
          modal: !1,
          image: { preload: !1 },
          ajax: { settings: { data: { fancybox: !0 } } },
          iframe: {
            tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
            preload: !0,
            css: {},
            attr: { scrolling: "auto" },
          },
          video: {
            tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
            format: "",
            autoStart: !0,
          },
          defaultType: "image",
          animationEffect: "zoom",
          animationDuration: 366,
          zoomOpacity: "auto",
          transitionEffect: "fade",
          transitionDuration: 366,
          slideClass: "",
          baseClass: "",
          baseTpl:
            '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
          spinnerTpl: '<div class="fancybox-loading"></div>',
          errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
          btnTpl: {
            download:
              '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
            zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
            close:
              '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
            arrowLeft:
              '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
            arrowRight:
              '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
            smallBtn:
              '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>',
          },
          parentEl: "body",
          hideScrollbar: !0,
          autoFocus: !0,
          backFocus: !0,
          trapFocus: !0,
          fullScreen: { autoStart: !1 },
          touch: { vertical: !0, momentum: !0 },
          hash: null,
          media: {},
          slideShow: { autoStart: !1, speed: 3e3 },
          thumbs: {
            autoStart: !1,
            hideOnClose: !0,
            parentEl: ".fancybox-container",
            axis: "y",
          },
          wheel: "auto",
          onInit: i.noop,
          beforeLoad: i.noop,
          afterLoad: i.noop,
          beforeShow: i.noop,
          afterShow: i.noop,
          beforeClose: i.noop,
          afterClose: i.noop,
          onActivate: i.noop,
          onDeactivate: i.noop,
          clickContent: function (e, t) {
            return "image" === e.type && "zoom";
          },
          clickSlide: "close",
          clickOutside: "close",
          dblclickContent: !1,
          dblclickSlide: !1,
          dblclickOutside: !1,
          mobile: {
            preventCaptionOverlap: !1,
            idleTime: !1,
            clickContent: function (e, t) {
              return "image" === e.type && "toggleControls";
            },
            clickSlide: function (e, t) {
              return "image" === e.type ? "toggleControls" : "close";
            },
            dblclickContent: function (e, t) {
              return "image" === e.type && "zoom";
            },
            dblclickSlide: function (e, t) {
              return "image" === e.type && "zoom";
            },
          },
          lang: "en",
          i18n: {
            en: {
              CLOSE: "Close",
              NEXT: "Next",
              PREV: "Previous",
              ERROR:
                "The requested content cannot be loaded. <br/> Please try again later.",
              PLAY_START: "Start slideshow",
              PLAY_STOP: "Pause slideshow",
              FULL_SCREEN: "Full screen",
              THUMBS: "Thumbnails",
              DOWNLOAD: "Download",
              SHARE: "Share",
              ZOOM: "Zoom",
            },
            de: {
              CLOSE: "Schlie&szlig;en",
              NEXT: "Weiter",
              PREV: "Zur&uuml;ck",
              ERROR:
                "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
              PLAY_START: "Diaschau starten",
              PLAY_STOP: "Diaschau beenden",
              FULL_SCREEN: "Vollbild",
              THUMBS: "Vorschaubilder",
              DOWNLOAD: "Herunterladen",
              SHARE: "Teilen",
              ZOOM: "Vergr&ouml;&szlig;ern",
            },
          },
        },
        o = i(e),
        r = i(t),
        l = 0,
        d =
          e.requestAnimationFrame ||
          e.webkitRequestAnimationFrame ||
          e.mozRequestAnimationFrame ||
          e.oRequestAnimationFrame ||
          function (t) {
            return e.setTimeout(t, 1e3 / 60);
          },
        c =
          e.cancelAnimationFrame ||
          e.webkitCancelAnimationFrame ||
          e.mozCancelAnimationFrame ||
          e.oCancelAnimationFrame ||
          function (t) {
            e.clearTimeout(t);
          },
        h = (function () {
          var e,
            i = t.createElement("fakeelement"),
            a = {
              transition: "transitionend",
              OTransition: "oTransitionEnd",
              MozTransition: "transitionend",
              WebkitTransition: "webkitTransitionEnd",
            };
          for (e in a) if (void 0 !== i.style[e]) return a[e];
          return "transitionend";
        })(),
        u = function (e) {
          return e && e.length && e[0].offsetHeight;
        },
        p = function (e, t) {
          var a = i.extend(!0, {}, e, t);
          return (
            i.each(t, function (e, t) {
              i.isArray(t) && (a[e] = t);
            }),
            a
          );
        },
        f = function (e) {
          var a, s;
          return (
            !(!e || e.ownerDocument !== t) &&
            (i(".fancybox-container").css("pointer-events", "none"),
            (a = {
              x: e.getBoundingClientRect().left + e.offsetWidth / 2,
              y: e.getBoundingClientRect().top + e.offsetHeight / 2,
            }),
            (s = t.elementFromPoint(a.x, a.y) === e),
            i(".fancybox-container").css("pointer-events", ""),
            s)
          );
        },
        m = function (e, t, a) {
          var s = this;
          (s.opts = p({ index: a }, i.fancybox.defaults)),
            i.isPlainObject(t) && (s.opts = p(s.opts, t)),
            i.fancybox.isMobile && (s.opts = p(s.opts, s.opts.mobile)),
            (s.id = s.opts.id || ++l),
            (s.currIndex = parseInt(s.opts.index, 10) || 0),
            (s.prevIndex = null),
            (s.prevPos = null),
            (s.currPos = 0),
            (s.firstRun = !0),
            (s.group = []),
            (s.slides = {}),
            s.addContent(e),
            s.group.length && s.init();
        };
      i.extend(m.prototype, {
        init: function () {
          var a,
            s,
            n = this,
            o = n.group[n.currIndex].opts;
          o.closeExisting && i.fancybox.close(!0),
            i("body").addClass("fancybox-active"),
            !i.fancybox.getInstance() &&
              !1 !== o.hideScrollbar &&
              !i.fancybox.isMobile &&
              t.body.scrollHeight > e.innerHeight &&
              (i("head").append(
                '<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' +
                  (e.innerWidth - t.documentElement.clientWidth) +
                  "px;}</style>"
              ),
              i("body").addClass("compensate-for-scrollbar")),
            (s = ""),
            i.each(o.buttons, function (e, t) {
              s += o.btnTpl[t] || "";
            }),
            (a = i(
              n.translate(
                n,
                o.baseTpl
                  .replace("{{buttons}}", s)
                  .replace(
                    "{{arrows}}",
                    o.btnTpl.arrowLeft + o.btnTpl.arrowRight
                  )
              )
            )
              .attr("id", "fancybox-container-" + n.id)
              .addClass(o.baseClass)
              .data("FancyBox", n)
              .appendTo(o.parentEl)),
            (n.$refs = { container: a }),
            [
              "bg",
              "inner",
              "infobar",
              "toolbar",
              "stage",
              "caption",
              "navigation",
            ].forEach(function (e) {
              n.$refs[e] = a.find(".fancybox-" + e);
            }),
            n.trigger("onInit"),
            n.activate(),
            n.jumpTo(n.currIndex);
        },
        translate: function (e, t) {
          var i = e.opts.i18n[e.opts.lang] || e.opts.i18n.en;
          return t.replace(/\{\{(\w+)\}\}/g, function (e, t) {
            return void 0 === i[t] ? e : i[t];
          });
        },
        addContent: function (e) {
          var t,
            a = this,
            s = i.makeArray(e);
          i.each(s, function (e, t) {
            var s,
              n,
              o,
              r,
              l,
              d = {},
              c = {};
            i.isPlainObject(t)
              ? ((d = t), (c = t.opts || t))
              : "object" === i.type(t) && i(t).length
              ? ((c = (s = i(t)).data() || {}),
                ((c = i.extend(!0, {}, c, c.options)).$orig = s),
                (d.src = a.opts.src || c.src || s.attr("href")),
                d.type || d.src || ((d.type = "inline"), (d.src = t)))
              : (d = { type: "html", src: t + "" }),
              (d.opts = i.extend(!0, {}, a.opts, c)),
              i.isArray(c.buttons) && (d.opts.buttons = c.buttons),
              i.fancybox.isMobile &&
                d.opts.mobile &&
                (d.opts = p(d.opts, d.opts.mobile)),
              (n = d.type || d.opts.type),
              (r = d.src || ""),
              !n &&
                r &&
                ((o = r.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))
                  ? ((n = "video"),
                    d.opts.video.format ||
                      (d.opts.video.format =
                        "video/" + ("ogv" === o[1] ? "ogg" : o[1])))
                  : r.match(
                      /(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i
                    )
                  ? (n = "image")
                  : r.match(/\.(pdf)((\?|#).*)?$/i)
                  ? ((n = "iframe"),
                    (d = i.extend(!0, d, {
                      contentType: "pdf",
                      opts: { iframe: { preload: !1 } },
                    })))
                  : "#" === r.charAt(0) && (n = "inline")),
              n ? (d.type = n) : a.trigger("objectNeedsType", d),
              d.contentType ||
                (d.contentType =
                  i.inArray(d.type, ["html", "inline", "ajax"]) > -1
                    ? "html"
                    : d.type),
              (d.index = a.group.length),
              "auto" == d.opts.smallBtn &&
                (d.opts.smallBtn =
                  i.inArray(d.type, ["html", "inline", "ajax"]) > -1),
              "auto" === d.opts.toolbar && (d.opts.toolbar = !d.opts.smallBtn),
              (d.$thumb = d.opts.$thumb || null),
              d.opts.$trigger &&
                d.index === a.opts.index &&
                ((d.$thumb = d.opts.$trigger.find("img:first")),
                d.$thumb.length && (d.opts.$orig = d.opts.$trigger)),
              (d.$thumb && d.$thumb.length) ||
                !d.opts.$orig ||
                (d.$thumb = d.opts.$orig.find("img:first")),
              d.$thumb && !d.$thumb.length && (d.$thumb = null),
              (d.thumb = d.opts.thumb || (d.$thumb ? d.$thumb[0].src : null)),
              "function" === i.type(d.opts.caption) &&
                (d.opts.caption = d.opts.caption.apply(t, [a, d])),
              "function" === i.type(a.opts.caption) &&
                (d.opts.caption = a.opts.caption.apply(t, [a, d])),
              d.opts.caption instanceof i ||
                (d.opts.caption =
                  void 0 === d.opts.caption ? "" : d.opts.caption + ""),
              "ajax" === d.type &&
                (l = r.split(/\s+/, 2)).length > 1 &&
                ((d.src = l.shift()), (d.opts.filter = l.shift())),
              d.opts.modal &&
                (d.opts = i.extend(!0, d.opts, {
                  trapFocus: !0,
                  infobar: 0,
                  toolbar: 0,
                  smallBtn: 0,
                  keyboard: 0,
                  slideShow: 0,
                  fullScreen: 0,
                  thumbs: 0,
                  touch: 0,
                  clickContent: !1,
                  clickSlide: !1,
                  clickOutside: !1,
                  dblclickContent: !1,
                  dblclickSlide: !1,
                  dblclickOutside: !1,
                })),
              a.group.push(d);
          }),
            Object.keys(a.slides).length &&
              (a.updateControls(),
              (t = a.Thumbs) && t.isActive && (t.create(), t.focus()));
        },
        addEvents: function () {
          var t = this;
          t.removeEvents(),
            t.$refs.container
              .on("click.fb-close", "[data-fancybox-close]", function (e) {
                e.stopPropagation(), e.preventDefault(), t.close(e);
              })
              .on(
                "touchstart.fb-prev click.fb-prev",
                "[data-fancybox-prev]",
                function (e) {
                  e.stopPropagation(), e.preventDefault(), t.previous();
                }
              )
              .on(
                "touchstart.fb-next click.fb-next",
                "[data-fancybox-next]",
                function (e) {
                  e.stopPropagation(), e.preventDefault(), t.next();
                }
              )
              .on("click.fb", "[data-fancybox-zoom]", function (e) {
                t[t.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
              }),
            o.on("orientationchange.fb resize.fb", function (e) {
              e && e.originalEvent && "resize" === e.originalEvent.type
                ? (t.requestId && c(t.requestId),
                  (t.requestId = d(function () {
                    t.update(e);
                  })))
                : (t.current &&
                    "iframe" === t.current.type &&
                    t.$refs.stage.hide(),
                  setTimeout(
                    function () {
                      t.$refs.stage.show(), t.update(e);
                    },
                    i.fancybox.isMobile ? 600 : 250
                  ));
            }),
            r.on("keydown.fb", function (e) {
              var a = (i.fancybox ? i.fancybox.getInstance() : null).current,
                s = e.keyCode || e.which;
              if (9 != s)
                return !a.opts.keyboard ||
                  e.ctrlKey ||
                  e.altKey ||
                  e.shiftKey ||
                  i(e.target).is("input,textarea,video,audio,select")
                  ? void 0
                  : 8 === s || 27 === s
                  ? (e.preventDefault(), void t.close(e))
                  : 37 === s || 38 === s
                  ? (e.preventDefault(), void t.previous())
                  : 39 === s || 40 === s
                  ? (e.preventDefault(), void t.next())
                  : void t.trigger("afterKeydown", e, s);
              a.opts.trapFocus && t.focus(e);
            }),
            t.group[t.currIndex].opts.idleTime &&
              ((t.idleSecondsCounter = 0),
              r.on(
                "mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",
                function (e) {
                  (t.idleSecondsCounter = 0),
                    t.isIdle && t.showControls(),
                    (t.isIdle = !1);
                }
              ),
              (t.idleInterval = e.setInterval(function () {
                ++t.idleSecondsCounter >= t.group[t.currIndex].opts.idleTime &&
                  !t.isDragging &&
                  ((t.isIdle = !0),
                  (t.idleSecondsCounter = 0),
                  t.hideControls());
              }, 1e3)));
        },
        removeEvents: function () {
          var t = this;
          o.off("orientationchange.fb resize.fb"),
            r.off("keydown.fb .fb-idle"),
            this.$refs.container.off(".fb-close .fb-prev .fb-next"),
            t.idleInterval &&
              (e.clearInterval(t.idleInterval), (t.idleInterval = null));
        },
        previous: function (e) {
          return this.jumpTo(this.currPos - 1, e);
        },
        next: function (e) {
          return this.jumpTo(this.currPos + 1, e);
        },
        jumpTo: function (e, t) {
          var a,
            s,
            n,
            o,
            r,
            l,
            d,
            c,
            h,
            p = this,
            f = p.group.length;
          if (!(p.isDragging || p.isClosing || (p.isAnimating && p.firstRun))) {
            if (
              ((e = parseInt(e, 10)),
              !(n = p.current ? p.current.opts.loop : p.opts.loop) &&
                (e < 0 || e >= f))
            )
              return !1;
            if (
              ((a = p.firstRun = !Object.keys(p.slides).length),
              (r = p.current),
              (p.prevIndex = p.currIndex),
              (p.prevPos = p.currPos),
              (o = p.createSlide(e)),
              f > 1 &&
                ((n || o.index < f - 1) && p.createSlide(e + 1),
                (n || o.index > 0) && p.createSlide(e - 1)),
              (p.current = o),
              (p.currIndex = o.index),
              (p.currPos = o.pos),
              p.trigger("beforeShow", a),
              p.updateControls(),
              (o.forcedDuration = void 0),
              i.isNumeric(t)
                ? (o.forcedDuration = t)
                : (t = o.opts[a ? "animationDuration" : "transitionDuration"]),
              (t = parseInt(t, 10)),
              (s = p.isMoved(o)),
              o.$slide.addClass("fancybox-slide--current"),
              a)
            )
              return (
                o.opts.animationEffect &&
                  t &&
                  p.$refs.container.css("transition-duration", t + "ms"),
                p.$refs.container.addClass("fancybox-is-open").trigger("focus"),
                p.loadSlide(o),
                void p.preload("image")
              );
            (l = i.fancybox.getTranslate(r.$slide)),
              (d = i.fancybox.getTranslate(p.$refs.stage)),
              i.each(p.slides, function (e, t) {
                i.fancybox.stop(t.$slide, !0);
              }),
              r.pos !== o.pos && (r.isComplete = !1),
              r.$slide.removeClass(
                "fancybox-slide--complete fancybox-slide--current"
              ),
              s
                ? ((h = l.left - (r.pos * l.width + r.pos * r.opts.gutter)),
                  i.each(p.slides, function (e, a) {
                    a.$slide
                      .removeClass("fancybox-animated")
                      .removeClass(function (e, t) {
                        return (t.match(/(^|\s)fancybox-fx-\S+/g) || []).join(
                          " "
                        );
                      });
                    var s = a.pos * l.width + a.pos * a.opts.gutter;
                    i.fancybox.setTranslate(a.$slide, {
                      top: 0,
                      left: s - d.left + h,
                    }),
                      a.pos !== o.pos &&
                        a.$slide.addClass(
                          "fancybox-slide--" +
                            (a.pos > o.pos ? "next" : "previous")
                        ),
                      u(a.$slide),
                      i.fancybox.animate(
                        a.$slide,
                        {
                          top: 0,
                          left:
                            (a.pos - o.pos) * l.width +
                            (a.pos - o.pos) * a.opts.gutter,
                        },
                        t,
                        function () {
                          a.$slide
                            .css({ transform: "", opacity: "" })
                            .removeClass(
                              "fancybox-slide--next fancybox-slide--previous"
                            ),
                            a.pos === p.currPos && p.complete();
                        }
                      );
                  }))
                : t &&
                  o.opts.transitionEffect &&
                  ((c =
                    "fancybox-animated fancybox-fx-" + o.opts.transitionEffect),
                  r.$slide.addClass(
                    "fancybox-slide--" + (r.pos > o.pos ? "next" : "previous")
                  ),
                  i.fancybox.animate(
                    r.$slide,
                    c,
                    t,
                    function () {
                      r.$slide
                        .removeClass(c)
                        .removeClass(
                          "fancybox-slide--next fancybox-slide--previous"
                        );
                    },
                    !1
                  )),
              o.isLoaded ? p.revealContent(o) : p.loadSlide(o),
              p.preload("image");
          }
        },
        createSlide: function (e) {
          var t,
            a,
            s = this;
          return (
            (a = (a = e % s.group.length) < 0 ? s.group.length + a : a),
            !s.slides[e] &&
              s.group[a] &&
              ((t = i('<div class="fancybox-slide"></div>').appendTo(
                s.$refs.stage
              )),
              (s.slides[e] = i.extend(!0, {}, s.group[a], {
                pos: e,
                $slide: t,
                isLoaded: !1,
              })),
              s.updateSlide(s.slides[e])),
            s.slides[e]
          );
        },
        scaleToActual: function (e, t, a) {
          var s,
            n,
            o,
            r,
            l,
            d = this,
            c = d.current,
            h = c.$content,
            u = i.fancybox.getTranslate(c.$slide).width,
            p = i.fancybox.getTranslate(c.$slide).height,
            f = c.width,
            m = c.height;
          d.isAnimating ||
            d.isMoved() ||
            !h ||
            "image" != c.type ||
            !c.isLoaded ||
            c.hasError ||
            ((d.isAnimating = !0),
            i.fancybox.stop(h),
            (e = void 0 === e ? 0.5 * u : e),
            (t = void 0 === t ? 0.5 * p : t),
            ((s = i.fancybox.getTranslate(h)).top -= i.fancybox.getTranslate(
              c.$slide
            ).top),
            (s.left -= i.fancybox.getTranslate(c.$slide).left),
            (r = f / s.width),
            (l = m / s.height),
            (n = 0.5 * u - 0.5 * f),
            (o = 0.5 * p - 0.5 * m),
            f > u &&
              ((n = s.left * r - (e * r - e)) > 0 && (n = 0),
              n < u - f && (n = u - f)),
            m > p &&
              ((o = s.top * l - (t * l - t)) > 0 && (o = 0),
              o < p - m && (o = p - m)),
            d.updateCursor(f, m),
            i.fancybox.animate(
              h,
              { top: o, left: n, scaleX: r, scaleY: l },
              a || 366,
              function () {
                d.isAnimating = !1;
              }
            ),
            d.SlideShow && d.SlideShow.isActive && d.SlideShow.stop());
        },
        scaleToFit: function (e) {
          var t,
            a = this,
            s = a.current,
            n = s.$content;
          a.isAnimating ||
            a.isMoved() ||
            !n ||
            "image" != s.type ||
            !s.isLoaded ||
            s.hasError ||
            ((a.isAnimating = !0),
            i.fancybox.stop(n),
            (t = a.getFitPos(s)),
            a.updateCursor(t.width, t.height),
            i.fancybox.animate(
              n,
              {
                top: t.top,
                left: t.left,
                scaleX: t.width / n.width(),
                scaleY: t.height / n.height(),
              },
              e || 366,
              function () {
                a.isAnimating = !1;
              }
            ));
        },
        getFitPos: function (e) {
          var t,
            a,
            s,
            n,
            o = e.$content,
            r = e.$slide,
            l = e.width || e.opts.width,
            d = e.height || e.opts.height,
            c = {};
          return (
            !!(e.isLoaded && o && o.length) &&
            ((t = i.fancybox.getTranslate(this.$refs.stage).width),
            (a = i.fancybox.getTranslate(this.$refs.stage).height),
            (t -=
              parseFloat(r.css("paddingLeft")) +
              parseFloat(r.css("paddingRight")) +
              parseFloat(o.css("marginLeft")) +
              parseFloat(o.css("marginRight"))),
            (a -=
              parseFloat(r.css("paddingTop")) +
              parseFloat(r.css("paddingBottom")) +
              parseFloat(o.css("marginTop")) +
              parseFloat(o.css("marginBottom"))),
            (l && d) || ((l = t), (d = a)),
            (l *= s = Math.min(1, t / l, a / d)) > t - 0.5 && (l = t),
            (d *= s) > a - 0.5 && (d = a),
            "image" === e.type
              ? ((c.top =
                  Math.floor(0.5 * (a - d)) + parseFloat(r.css("paddingTop"))),
                (c.left =
                  Math.floor(0.5 * (t - l)) + parseFloat(r.css("paddingLeft"))))
              : "video" === e.contentType &&
                (d >
                l /
                  (n =
                    e.opts.width && e.opts.height
                      ? l / d
                      : e.opts.ratio || 16 / 9)
                  ? (d = l / n)
                  : l > d * n && (l = d * n)),
            (c.width = l),
            (c.height = d),
            c)
          );
        },
        update: function (e) {
          var t = this;
          i.each(t.slides, function (i, a) {
            t.updateSlide(a, e);
          });
        },
        updateSlide: function (e, t) {
          var a = this,
            s = e && e.$content,
            n = e.width || e.opts.width,
            o = e.height || e.opts.height,
            r = e.$slide;
          a.adjustCaption(e),
            s &&
              (n || o || "video" === e.contentType) &&
              !e.hasError &&
              (i.fancybox.stop(s),
              i.fancybox.setTranslate(s, a.getFitPos(e)),
              e.pos === a.currPos && ((a.isAnimating = !1), a.updateCursor())),
            a.adjustLayout(e),
            r.length &&
              (r.trigger("refresh"),
              e.pos === a.currPos &&
                a.$refs.toolbar
                  .add(a.$refs.navigation.find(".fancybox-button--arrow_right"))
                  .toggleClass(
                    "compensate-for-scrollbar",
                    r.get(0).scrollHeight > r.get(0).clientHeight
                  )),
            a.trigger("onUpdate", e, t);
        },
        centerSlide: function (e) {
          var t = this,
            a = t.current,
            s = a.$slide;
          !t.isClosing &&
            a &&
            (s.siblings().css({ transform: "", opacity: "" }),
            s
              .parent()
              .children()
              .removeClass("fancybox-slide--previous fancybox-slide--next"),
            i.fancybox.animate(
              s,
              { top: 0, left: 0, opacity: 1 },
              void 0 === e ? 0 : e,
              function () {
                s.css({ transform: "", opacity: "" }),
                  a.isComplete || t.complete();
              },
              !1
            ));
        },
        isMoved: function (e) {
          var t,
            a,
            s = e || this.current;
          return (
            !!s &&
            ((a = i.fancybox.getTranslate(this.$refs.stage)),
            (t = i.fancybox.getTranslate(s.$slide)),
            !s.$slide.hasClass("fancybox-animated") &&
              (Math.abs(t.top - a.top) > 0.5 ||
                Math.abs(t.left - a.left) > 0.5))
          );
        },
        updateCursor: function (e, t) {
          var a,
            s,
            n = this,
            o = n.current,
            r = n.$refs.container;
          o &&
            !n.isClosing &&
            n.Guestures &&
            (r.removeClass(
              "fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"
            ),
            (s = !!(a = n.canPan(e, t)) || n.isZoomable()),
            r.toggleClass("fancybox-is-zoomable", s),
            i("[data-fancybox-zoom]").prop("disabled", !s),
            a
              ? r.addClass("fancybox-can-pan")
              : s &&
                ("zoom" === o.opts.clickContent ||
                  (i.isFunction(o.opts.clickContent) &&
                    "zoom" == o.opts.clickContent(o)))
              ? r.addClass("fancybox-can-zoomIn")
              : o.opts.touch &&
                (o.opts.touch.vertical || n.group.length > 1) &&
                "video" !== o.contentType &&
                r.addClass("fancybox-can-swipe"));
        },
        isZoomable: function () {
          var e,
            t = this,
            i = t.current;
          if (i && !t.isClosing && "image" === i.type && !i.hasError) {
            if (!i.isLoaded) return !0;
            if (
              (e = t.getFitPos(i)) &&
              (i.width > e.width || i.height > e.height)
            )
              return !0;
          }
          return !1;
        },
        isScaledDown: function (e, t) {
          var a = !1,
            s = this.current,
            n = s.$content;
          return (
            void 0 !== e && void 0 !== t
              ? (a = e < s.width && t < s.height)
              : n &&
                (a =
                  (a = i.fancybox.getTranslate(n)).width < s.width &&
                  a.height < s.height),
            a
          );
        },
        canPan: function (e, t) {
          var a = this.current,
            s = null,
            n = !1;
          return (
            "image" === a.type &&
              (a.isComplete || (e && t)) &&
              !a.hasError &&
              ((n = this.getFitPos(a)),
              void 0 !== e && void 0 !== t
                ? (s = { width: e, height: t })
                : a.isComplete && (s = i.fancybox.getTranslate(a.$content)),
              s &&
                n &&
                (n =
                  Math.abs(s.width - n.width) > 1.5 ||
                  Math.abs(s.height - n.height) > 1.5)),
            n
          );
        },
        loadSlide: function (e) {
          var t,
            a,
            s,
            n = this;
          if (!e.isLoading && !e.isLoaded) {
            if (((e.isLoading = !0), !1 === n.trigger("beforeLoad", e)))
              return (e.isLoading = !1), !1;
            switch (
              ((t = e.type),
              (a = e.$slide)
                .off("refresh")
                .trigger("onReset")
                .addClass(e.opts.slideClass),
              t)
            ) {
              case "image":
                n.setImage(e);
                break;
              case "iframe":
                n.setIframe(e);
                break;
              case "html":
                n.setContent(e, e.src || e.content);
                break;
              case "video":
                n.setContent(
                  e,
                  e.opts.video.tpl
                    .replace(/\{\{src\}\}/gi, e.src)
                    .replace(
                      "{{format}}",
                      e.opts.videoFormat || e.opts.video.format || ""
                    )
                    .replace("{{poster}}", e.thumb || "")
                );
                break;
              case "inline":
                i(e.src).length ? n.setContent(e, i(e.src)) : n.setError(e);
                break;
              case "ajax":
                n.showLoading(e),
                  (s = i.ajax(
                    i.extend({}, e.opts.ajax.settings, {
                      url: e.src,
                      success: function (t, i) {
                        "success" === i && n.setContent(e, t);
                      },
                      error: function (t, i) {
                        t && "abort" !== i && n.setError(e);
                      },
                    })
                  )),
                  a.one("onReset", function () {
                    s.abort();
                  });
                break;
              default:
                n.setError(e);
            }
            return !0;
          }
        },
        setImage: function (e) {
          var a,
            s = this;
          setTimeout(function () {
            var t = e.$image;
            s.isClosing ||
              !e.isLoading ||
              (t && t.length && t[0].complete) ||
              e.hasError ||
              s.showLoading(e);
          }, 50),
            s.checkSrcset(e),
            (e.$content = i('<div class="fancybox-content"></div>')
              .addClass("fancybox-is-hidden")
              .appendTo(e.$slide.addClass("fancybox-slide--image"))),
            !1 !== e.opts.preload &&
              e.opts.width &&
              e.opts.height &&
              e.thumb &&
              ((e.width = e.opts.width),
              (e.height = e.opts.height),
              ((a = t.createElement("img")).onerror = function () {
                i(this).remove(), (e.$ghost = null);
              }),
              (a.onload = function () {
                s.afterLoad(e);
              }),
              (e.$ghost = i(a)
                .addClass("fancybox-image")
                .appendTo(e.$content)
                .attr("src", e.thumb))),
            s.setBigImage(e);
        },
        checkSrcset: function (t) {
          var i,
            a,
            s,
            n,
            o = t.opts.srcset || t.opts.image.srcset;
          if (o) {
            (s = e.devicePixelRatio || 1),
              (n = e.innerWidth * s),
              (a = o.split(",").map(function (e) {
                var t = {};
                return (
                  e
                    .trim()
                    .split(/\s+/)
                    .forEach(function (e, i) {
                      var a = parseInt(e.substring(0, e.length - 1), 10);
                      if (0 === i) return (t.url = e);
                      a && ((t.value = a), (t.postfix = e[e.length - 1]));
                    }),
                  t
                );
              })).sort(function (e, t) {
                return e.value - t.value;
              });
            for (var r = 0; r < a.length; r++) {
              var l = a[r];
              if (
                ("w" === l.postfix && l.value >= n) ||
                ("x" === l.postfix && l.value >= s)
              ) {
                i = l;
                break;
              }
            }
            !i && a.length && (i = a[a.length - 1]),
              i &&
                ((t.src = i.url),
                t.width &&
                  t.height &&
                  "w" == i.postfix &&
                  ((t.height = (t.width / t.height) * i.value),
                  (t.width = i.value)),
                (t.opts.srcset = o));
          }
        },
        setBigImage: function (e) {
          var a = this,
            s = t.createElement("img"),
            n = i(s);
          (e.$image = n
            .one("error", function () {
              a.setError(e);
            })
            .one("load", function () {
              var t;
              e.$ghost ||
                (a.resolveImageSlideSize(
                  e,
                  this.naturalWidth,
                  this.naturalHeight
                ),
                a.afterLoad(e)),
                a.isClosing ||
                  (e.opts.srcset &&
                    (((t = e.opts.sizes) && "auto" !== t) ||
                      (t =
                        (e.width / e.height > 1 && o.width() / o.height() > 1
                          ? "100"
                          : Math.round((e.width / e.height) * 100)) + "vw"),
                    n.attr("sizes", t).attr("srcset", e.opts.srcset)),
                  e.$ghost &&
                    setTimeout(function () {
                      e.$ghost && !a.isClosing && e.$ghost.hide();
                    }, Math.min(300, Math.max(1e3, e.height / 1600))),
                  a.hideLoading(e));
            })
            .addClass("fancybox-image")
            .attr("src", e.src)
            .appendTo(e.$content)),
            (s.complete || "complete" == s.readyState) &&
            n.naturalWidth &&
            n.naturalHeight
              ? n.trigger("load")
              : s.error && n.trigger("error");
        },
        resolveImageSlideSize: function (e, t, i) {
          var a = parseInt(e.opts.width, 10),
            s = parseInt(e.opts.height, 10);
          (e.width = t),
            (e.height = i),
            a > 0 && ((e.width = a), (e.height = Math.floor((a * i) / t))),
            s > 0 && ((e.width = Math.floor((s * t) / i)), (e.height = s));
        },
        setIframe: function (e) {
          var t,
            a = this,
            s = e.opts.iframe,
            n = e.$slide;
          (e.$content = i(
            '<div class="fancybox-content' +
              (s.preload ? " fancybox-is-hidden" : "") +
              '"></div>'
          )
            .css(s.css)
            .appendTo(n)),
            n.addClass("fancybox-slide--" + e.contentType),
            (e.$iframe = t =
              i(s.tpl.replace(/\{rnd\}/g, new Date().getTime()))
                .attr(s.attr)
                .appendTo(e.$content)),
            s.preload
              ? (a.showLoading(e),
                t.on("load.fb error.fb", function (t) {
                  (this.isReady = 1),
                    e.$slide.trigger("refresh"),
                    a.afterLoad(e);
                }),
                n.on("refresh.fb", function () {
                  var i,
                    a = e.$content,
                    o = s.css.width,
                    r = s.css.height;
                  if (1 === t[0].isReady) {
                    try {
                      i = t.contents().find("body");
                    } catch (e) {}
                    i &&
                      i.length &&
                      i.children().length &&
                      (n.css("overflow", "visible"),
                      a.css({
                        width: "100%",
                        "max-width": "100%",
                        height: "9999px",
                      }),
                      void 0 === o &&
                        (o = Math.ceil(
                          Math.max(i[0].clientWidth, i.outerWidth(!0))
                        )),
                      a.css("width", o || "").css("max-width", ""),
                      void 0 === r &&
                        (r = Math.ceil(
                          Math.max(i[0].clientHeight, i.outerHeight(!0))
                        )),
                      a.css("height", r || ""),
                      n.css("overflow", "auto")),
                      a.removeClass("fancybox-is-hidden");
                  }
                }))
              : a.afterLoad(e),
            t.attr("src", e.src),
            n.one("onReset", function () {
              try {
                i(this)
                  .find("iframe")
                  .hide()
                  .unbind()
                  .attr("src", "//about:blank");
              } catch (e) {}
              i(this).off("refresh.fb").empty(),
                (e.isLoaded = !1),
                (e.isRevealed = !1);
            });
        },
        setContent: function (e, t) {
          var a = this;
          a.isClosing ||
            (a.hideLoading(e),
            e.$content && i.fancybox.stop(e.$content),
            e.$slide.empty(),
            (function (e) {
              return e && e.hasOwnProperty && e instanceof i;
            })(t) && t.parent().length
              ? ((t.hasClass("fancybox-content") ||
                  t.parent().hasClass("fancybox-content")) &&
                  t.parents(".fancybox-slide").trigger("onReset"),
                (e.$placeholder = i("<div>").hide().insertAfter(t)),
                t.css("display", "inline-block"))
              : e.hasError ||
                ("string" === i.type(t) &&
                  (t = i("<div>").append(i.trim(t)).contents()),
                e.opts.filter && (t = i("<div>").html(t).find(e.opts.filter))),
            e.$slide.one("onReset", function () {
              i(this).find("video,audio").trigger("pause"),
                e.$placeholder &&
                  (e.$placeholder
                    .after(t.removeClass("fancybox-content").hide())
                    .remove(),
                  (e.$placeholder = null)),
                e.$smallBtn && (e.$smallBtn.remove(), (e.$smallBtn = null)),
                e.hasError ||
                  (i(this).empty(), (e.isLoaded = !1), (e.isRevealed = !1));
            }),
            i(t).appendTo(e.$slide),
            i(t).is("video,audio") &&
              (i(t).addClass("fancybox-video"),
              i(t).wrap("<div></div>"),
              (e.contentType = "video"),
              (e.opts.width = e.opts.width || i(t).attr("width")),
              (e.opts.height = e.opts.height || i(t).attr("height"))),
            (e.$content = e.$slide
              .children()
              .filter("div,form,main,video,audio,article,.fancybox-content")
              .first()),
            e.$content.siblings().hide(),
            e.$content.length ||
              (e.$content = e.$slide
                .wrapInner("<div></div>")
                .children()
                .first()),
            e.$content.addClass("fancybox-content"),
            e.$slide.addClass("fancybox-slide--" + e.contentType),
            a.afterLoad(e));
        },
        setError: function (e) {
          (e.hasError = !0),
            e.$slide
              .trigger("onReset")
              .removeClass("fancybox-slide--" + e.contentType)
              .addClass("fancybox-slide--error"),
            (e.contentType = "html"),
            this.setContent(e, this.translate(e, e.opts.errorTpl)),
            e.pos === this.currPos && (this.isAnimating = !1);
        },
        showLoading: function (e) {
          var t = this;
          (e = e || t.current) &&
            !e.$spinner &&
            (e.$spinner = i(t.translate(t, t.opts.spinnerTpl))
              .appendTo(e.$slide)
              .hide()
              .fadeIn("fast"));
        },
        hideLoading: function (e) {
          (e = e || this.current) &&
            e.$spinner &&
            (e.$spinner.stop().remove(), delete e.$spinner);
        },
        afterLoad: function (e) {
          var t = this;
          t.isClosing ||
            ((e.isLoading = !1),
            (e.isLoaded = !0),
            t.trigger("afterLoad", e),
            t.hideLoading(e),
            !e.opts.smallBtn ||
              (e.$smallBtn && e.$smallBtn.length) ||
              (e.$smallBtn = i(t.translate(e, e.opts.btnTpl.smallBtn)).appendTo(
                e.$content
              )),
            e.opts.protect &&
              e.$content &&
              !e.hasError &&
              (e.$content.on("contextmenu.fb", function (e) {
                return 2 == e.button && e.preventDefault(), !0;
              }),
              "image" === e.type &&
                i('<div class="fancybox-spaceball"></div>').appendTo(
                  e.$content
                )),
            t.adjustCaption(e),
            t.adjustLayout(e),
            e.pos === t.currPos && t.updateCursor(),
            t.revealContent(e));
        },
        adjustCaption: function (e) {
          var t,
            i = this,
            a = e || i.current,
            s = a.opts.caption,
            n = a.opts.preventCaptionOverlap,
            o = i.$refs.caption,
            r = !1;
          o.toggleClass("fancybox-caption--separate", n),
            n &&
              s &&
              s.length &&
              (a.pos !== i.currPos
                ? ((t = o.clone().appendTo(o.parent()))
                    .children()
                    .eq(0)
                    .empty()
                    .html(s),
                  (r = t.outerHeight(!0)),
                  t.empty().remove())
                : i.$caption && (r = i.$caption.outerHeight(!0)),
              a.$slide.css("padding-bottom", r || ""));
        },
        adjustLayout: function (e) {
          var t,
            i,
            a,
            s,
            n = e || this.current;
          n.isLoaded &&
            !0 !== n.opts.disableLayoutFix &&
            (n.$content.css("margin-bottom", ""),
            n.$content.outerHeight() > n.$slide.height() + 0.5 &&
              ((a = n.$slide[0].style["padding-bottom"]),
              (s = n.$slide.css("padding-bottom")),
              parseFloat(s) > 0 &&
                ((t = n.$slide[0].scrollHeight),
                n.$slide.css("padding-bottom", 0),
                Math.abs(t - n.$slide[0].scrollHeight) < 1 && (i = s),
                n.$slide.css("padding-bottom", a))),
            n.$content.css("margin-bottom", i));
        },
        revealContent: function (e) {
          var t,
            a,
            s,
            n,
            o = this,
            r = e.$slide,
            l = !1,
            d = !1,
            c = o.isMoved(e),
            h = e.isRevealed;
          return (
            (e.isRevealed = !0),
            (t = e.opts[o.firstRun ? "animationEffect" : "transitionEffect"]),
            (s =
              e.opts[o.firstRun ? "animationDuration" : "transitionDuration"]),
            (s = parseInt(
              void 0 === e.forcedDuration ? s : e.forcedDuration,
              10
            )),
            (!c && e.pos === o.currPos && s) || (t = !1),
            "zoom" === t &&
              (e.pos === o.currPos &&
              s &&
              "image" === e.type &&
              !e.hasError &&
              (d = o.getThumbPos(e))
                ? (l = o.getFitPos(e))
                : (t = "fade")),
            "zoom" === t
              ? ((o.isAnimating = !0),
                (l.scaleX = l.width / d.width),
                (l.scaleY = l.height / d.height),
                "auto" == (n = e.opts.zoomOpacity) &&
                  (n = Math.abs(e.width / e.height - d.width / d.height) > 0.1),
                n && ((d.opacity = 0.1), (l.opacity = 1)),
                i.fancybox.setTranslate(
                  e.$content.removeClass("fancybox-is-hidden"),
                  d
                ),
                u(e.$content),
                void i.fancybox.animate(e.$content, l, s, function () {
                  (o.isAnimating = !1), o.complete();
                }))
              : (o.updateSlide(e),
                t
                  ? (i.fancybox.stop(r),
                    (a =
                      "fancybox-slide--" +
                      (e.pos >= o.prevPos ? "next" : "previous") +
                      " fancybox-animated fancybox-fx-" +
                      t),
                    r.addClass(a).removeClass("fancybox-slide--current"),
                    e.$content.removeClass("fancybox-is-hidden"),
                    u(r),
                    "image" !== e.type && e.$content.hide().show(0),
                    void i.fancybox.animate(
                      r,
                      "fancybox-slide--current",
                      s,
                      function () {
                        r.removeClass(a).css({ transform: "", opacity: "" }),
                          e.pos === o.currPos && o.complete();
                      },
                      !0
                    ))
                  : (e.$content.removeClass("fancybox-is-hidden"),
                    h ||
                      !c ||
                      "image" !== e.type ||
                      e.hasError ||
                      e.$content.hide().fadeIn("fast"),
                    void (e.pos === o.currPos && o.complete())))
          );
        },
        getThumbPos: function (e) {
          var t,
            a,
            s,
            n,
            o,
            r = !1,
            l = e.$thumb;
          return (
            !(!l || !f(l[0])) &&
            ((t = i.fancybox.getTranslate(l)),
            (a = parseFloat(l.css("border-top-width") || 0)),
            (s = parseFloat(l.css("border-right-width") || 0)),
            (n = parseFloat(l.css("border-bottom-width") || 0)),
            (o = parseFloat(l.css("border-left-width") || 0)),
            (r = {
              top: t.top + a,
              left: t.left + o,
              width: t.width - s - o,
              height: t.height - a - n,
              scaleX: 1,
              scaleY: 1,
            }),
            t.width > 0 && t.height > 0 && r)
          );
        },
        complete: function () {
          var e,
            t = this,
            a = t.current,
            s = {};
          !t.isMoved() &&
            a.isLoaded &&
            (a.isComplete ||
              ((a.isComplete = !0),
              a.$slide.siblings().trigger("onReset"),
              t.preload("inline"),
              u(a.$slide),
              a.$slide.addClass("fancybox-slide--complete"),
              i.each(t.slides, function (e, a) {
                a.pos >= t.currPos - 1 && a.pos <= t.currPos + 1
                  ? (s[a.pos] = a)
                  : a && (i.fancybox.stop(a.$slide), a.$slide.off().remove());
              }),
              (t.slides = s)),
            (t.isAnimating = !1),
            t.updateCursor(),
            t.trigger("afterShow"),
            a.opts.video.autoStart &&
              a.$slide
                .find("video,audio")
                .filter(":visible:first")
                .trigger("play")
                .one("ended", function () {
                  Document.exitFullscreen
                    ? Document.exitFullscreen()
                    : this.webkitExitFullscreen && this.webkitExitFullscreen(),
                    t.next();
                }),
            a.opts.autoFocus &&
              "html" === a.contentType &&
              ((e = a.$content.find("input[autofocus]:enabled:visible:first"))
                .length
                ? e.trigger("focus")
                : t.focus(null, !0)),
            a.$slide.scrollTop(0).scrollLeft(0));
        },
        preload: function (e) {
          var t,
            i,
            a = this;
          a.group.length < 2 ||
            ((i = a.slides[a.currPos + 1]),
            (t = a.slides[a.currPos - 1]) && t.type === e && a.loadSlide(t),
            i && i.type === e && a.loadSlide(i));
        },
        focus: function (e, a) {
          var s,
            n,
            o = this,
            r = [
              "a[href]",
              "area[href]",
              'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
              "select:not([disabled]):not([aria-hidden])",
              "textarea:not([disabled]):not([aria-hidden])",
              "button:not([disabled]):not([aria-hidden])",
              "iframe",
              "object",
              "embed",
              "video",
              "audio",
              "[contenteditable]",
              '[tabindex]:not([tabindex^="-"])',
            ].join(",");
          o.isClosing ||
            ((s = (s =
              !e && o.current && o.current.isComplete
                ? o.current.$slide.find(
                    "*:visible" + (a ? ":not(.fancybox-close-small)" : "")
                  )
                : o.$refs.container.find("*:visible"))
              .filter(r)
              .filter(function () {
                return (
                  "hidden" !== i(this).css("visibility") &&
                  !i(this).hasClass("disabled")
                );
              })).length
              ? ((n = s.index(t.activeElement)),
                e && e.shiftKey
                  ? (n < 0 || 0 == n) &&
                    (e.preventDefault(), s.eq(s.length - 1).trigger("focus"))
                  : (n < 0 || n == s.length - 1) &&
                    (e && e.preventDefault(), s.eq(0).trigger("focus")))
              : o.$refs.container.trigger("focus"));
        },
        activate: function () {
          var e = this;
          i(".fancybox-container").each(function () {
            var t = i(this).data("FancyBox");
            t &&
              t.id !== e.id &&
              !t.isClosing &&
              (t.trigger("onDeactivate"), t.removeEvents(), (t.isVisible = !1));
          }),
            (e.isVisible = !0),
            (e.current || e.isIdle) && (e.update(), e.updateControls()),
            e.trigger("onActivate"),
            e.addEvents();
        },
        close: function (e, t) {
          var a,
            s,
            n,
            o,
            r,
            l,
            c,
            h = this,
            p = h.current,
            f = function () {
              h.cleanUp(e);
            };
          return !(
            h.isClosing ||
            ((h.isClosing = !0),
            !1 === h.trigger("beforeClose", e)
              ? ((h.isClosing = !1),
                d(function () {
                  h.update();
                }),
                1)
              : (h.removeEvents(),
                (n = p.$content),
                (a = p.opts.animationEffect),
                (s = i.isNumeric(t) ? t : a ? p.opts.animationDuration : 0),
                p.$slide.removeClass(
                  "fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"
                ),
                !0 !== e ? i.fancybox.stop(p.$slide) : (a = !1),
                p.$slide.siblings().trigger("onReset").remove(),
                s &&
                  h.$refs.container
                    .removeClass("fancybox-is-open")
                    .addClass("fancybox-is-closing")
                    .css("transition-duration", s + "ms"),
                h.hideLoading(p),
                h.hideControls(!0),
                h.updateCursor(),
                "zoom" !== a ||
                  (n &&
                    s &&
                    "image" === p.type &&
                    !h.isMoved() &&
                    !p.hasError &&
                    (c = h.getThumbPos(p))) ||
                  (a = "fade"),
                "zoom" === a
                  ? (i.fancybox.stop(n),
                    (o = i.fancybox.getTranslate(n)),
                    (l = {
                      top: o.top,
                      left: o.left,
                      scaleX: o.width / c.width,
                      scaleY: o.height / c.height,
                      width: c.width,
                      height: c.height,
                    }),
                    (r = p.opts.zoomOpacity),
                    "auto" == r &&
                      (r =
                        Math.abs(p.width / p.height - c.width / c.height) >
                        0.1),
                    r && (c.opacity = 0),
                    i.fancybox.setTranslate(n, l),
                    u(n),
                    i.fancybox.animate(n, c, s, f),
                    0)
                  : (a && s
                      ? i.fancybox.animate(
                          p.$slide
                            .addClass("fancybox-slide--previous")
                            .removeClass("fancybox-slide--current"),
                          "fancybox-animated fancybox-fx-" + a,
                          s,
                          f
                        )
                      : !0 === e
                      ? setTimeout(f, s)
                      : f(),
                    0)))
          );
        },
        cleanUp: function (t) {
          var a,
            s,
            n,
            o = this,
            r = o.current.opts.$orig;
          o.current.$slide.trigger("onReset"),
            o.$refs.container.empty().remove(),
            o.trigger("afterClose", t),
            o.current.opts.backFocus &&
              ((r && r.length && r.is(":visible")) || (r = o.$trigger),
              r &&
                r.length &&
                ((s = e.scrollX),
                (n = e.scrollY),
                r.trigger("focus"),
                i("html, body").scrollTop(n).scrollLeft(s))),
            (o.current = null),
            (a = i.fancybox.getInstance())
              ? a.activate()
              : (i("body").removeClass(
                  "fancybox-active compensate-for-scrollbar"
                ),
                i("#fancybox-style-noscroll").remove());
        },
        trigger: function (e, t) {
          var a,
            s = Array.prototype.slice.call(arguments, 1),
            n = this,
            o = t && t.opts ? t : n.current;
          if (
            (o ? s.unshift(o) : (o = n),
            s.unshift(n),
            i.isFunction(o.opts[e]) && (a = o.opts[e].apply(o, s)),
            !1 === a)
          )
            return a;
          "afterClose" !== e && n.$refs
            ? n.$refs.container.trigger(e + ".fb", s)
            : r.trigger(e + ".fb", s);
        },
        updateControls: function () {
          var e = this,
            a = e.current,
            s = a.index,
            n = e.$refs.container,
            o = e.$refs.caption,
            r = a.opts.caption;
          a.$slide.trigger("refresh"),
            r && r.length
              ? ((e.$caption = o), o.children().eq(0).html(r))
              : (e.$caption = null),
            e.hasHiddenControls || e.isIdle || e.showControls(),
            n.find("[data-fancybox-count]").html(e.group.length),
            n.find("[data-fancybox-index]").html(s + 1),
            n
              .find("[data-fancybox-prev]")
              .prop("disabled", !a.opts.loop && s <= 0),
            n
              .find("[data-fancybox-next]")
              .prop("disabled", !a.opts.loop && s >= e.group.length - 1),
            "image" === a.type
              ? n
                  .find("[data-fancybox-zoom]")
                  .show()
                  .end()
                  .find("[data-fancybox-download]")
                  .attr("href", a.opts.image.src || a.src)
                  .show()
              : a.opts.toolbar &&
                n.find("[data-fancybox-download],[data-fancybox-zoom]").hide(),
            i(t.activeElement).is(":hidden,[disabled]") &&
              e.$refs.container.trigger("focus");
        },
        hideControls: function (e) {
          var t = ["infobar", "toolbar", "nav"];
          (!e && this.current.opts.preventCaptionOverlap) || t.push("caption"),
            this.$refs.container.removeClass(
              t
                .map(function (e) {
                  return "fancybox-show-" + e;
                })
                .join(" ")
            ),
            (this.hasHiddenControls = !0);
        },
        showControls: function () {
          var e = this,
            t = e.current ? e.current.opts : e.opts,
            i = e.$refs.container;
          (e.hasHiddenControls = !1),
            (e.idleSecondsCounter = 0),
            i
              .toggleClass("fancybox-show-toolbar", !(!t.toolbar || !t.buttons))
              .toggleClass(
                "fancybox-show-infobar",
                !!(t.infobar && e.group.length > 1)
              )
              .toggleClass("fancybox-show-caption", !!e.$caption)
              .toggleClass(
                "fancybox-show-nav",
                !!(t.arrows && e.group.length > 1)
              )
              .toggleClass("fancybox-is-modal", !!t.modal);
        },
        toggleControls: function () {
          this.hasHiddenControls ? this.showControls() : this.hideControls();
        },
      }),
        (i.fancybox = {
          version: "3.5.7",
          defaults: n,
          getInstance: function (e) {
            var t = i(
                '.fancybox-container:not(".fancybox-is-closing"):last'
              ).data("FancyBox"),
              a = Array.prototype.slice.call(arguments, 1);
            return (
              t instanceof m &&
              ("string" === i.type(e)
                ? t[e].apply(t, a)
                : "function" === i.type(e) && e.apply(t, a),
              t)
            );
          },
          open: function (e, t, i) {
            return new m(e, t, i);
          },
          close: function (e) {
            var t = this.getInstance();
            t && (t.close(), !0 === e && this.close(e));
          },
          destroy: function () {
            this.close(!0), r.add("body").off("click.fb-start", "**");
          },
          isMobile:
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
              navigator.userAgent
            ),
          use3d: (function () {
            var i = t.createElement("div");
            return (
              e.getComputedStyle &&
              e.getComputedStyle(i) &&
              e.getComputedStyle(i).getPropertyValue("transform") &&
              !(t.documentMode && t.documentMode < 11)
            );
          })(),
          getTranslate: function (e) {
            var t;
            return (
              !(!e || !e.length) && {
                top: (t = e[0].getBoundingClientRect()).top || 0,
                left: t.left || 0,
                width: t.width,
                height: t.height,
                opacity: parseFloat(e.css("opacity")),
              }
            );
          },
          setTranslate: function (e, t) {
            var i = "",
              a = {};
            if (e && t)
              return (
                (void 0 === t.left && void 0 === t.top) ||
                  ((i =
                    (void 0 === t.left ? e.position().left : t.left) +
                    "px, " +
                    (void 0 === t.top ? e.position().top : t.top) +
                    "px"),
                  (i = this.use3d
                    ? "translate3d(" + i + ", 0px)"
                    : "translate(" + i + ")")),
                void 0 !== t.scaleX && void 0 !== t.scaleY
                  ? (i += " scale(" + t.scaleX + ", " + t.scaleY + ")")
                  : void 0 !== t.scaleX && (i += " scaleX(" + t.scaleX + ")"),
                i.length && (a.transform = i),
                void 0 !== t.opacity && (a.opacity = t.opacity),
                void 0 !== t.width && (a.width = t.width),
                void 0 !== t.height && (a.height = t.height),
                e.css(a)
              );
          },
          animate: function (e, t, a, s, n) {
            var o,
              r = this;
            i.isFunction(a) && ((s = a), (a = null)),
              r.stop(e),
              (o = r.getTranslate(e)),
              e.on(h, function (l) {
                (!l ||
                  !l.originalEvent ||
                  (e.is(l.originalEvent.target) &&
                    "z-index" != l.originalEvent.propertyName)) &&
                  (r.stop(e),
                  i.isNumeric(a) && e.css("transition-duration", ""),
                  i.isPlainObject(t)
                    ? void 0 !== t.scaleX &&
                      void 0 !== t.scaleY &&
                      r.setTranslate(e, {
                        top: t.top,
                        left: t.left,
                        width: o.width * t.scaleX,
                        height: o.height * t.scaleY,
                        scaleX: 1,
                        scaleY: 1,
                      })
                    : !0 !== n && e.removeClass(t),
                  i.isFunction(s) && s(l));
              }),
              i.isNumeric(a) && e.css("transition-duration", a + "ms"),
              i.isPlainObject(t)
                ? (void 0 !== t.scaleX &&
                    void 0 !== t.scaleY &&
                    (delete t.width,
                    delete t.height,
                    e.parent().hasClass("fancybox-slide--image") &&
                      e.parent().addClass("fancybox-is-scaling")),
                  i.fancybox.setTranslate(e, t))
                : e.addClass(t),
              e.data(
                "timer",
                setTimeout(function () {
                  e.trigger(h);
                }, a + 33)
              );
          },
          stop: function (e, t) {
            e &&
              e.length &&
              (clearTimeout(e.data("timer")),
              t && e.trigger(h),
              e.off(h).css("transition-duration", ""),
              e.parent().removeClass("fancybox-is-scaling"));
          },
        }),
        (i.fn.fancybox = function (e) {
          var t;
          return (
            (t = (e = e || {}).selector || !1)
              ? i("body")
                  .off("click.fb-start", t)
                  .on("click.fb-start", t, { options: e }, s)
              : this.off("click.fb-start").on(
                  "click.fb-start",
                  { items: this, options: e },
                  s
                ),
            this
          );
        }),
        r.on("click.fb-start", "[data-fancybox]", s),
        r.on("click.fb-start", "[data-fancybox-trigger]", function (e) {
          i('[data-fancybox="' + i(this).attr("data-fancybox-trigger") + '"]')
            .eq(i(this).attr("data-fancybox-index") || 0)
            .trigger("click.fb-start", { $trigger: i(this) });
        }),
        (function () {
          var e = null;
          r.on(
            "mousedown mouseup focus blur",
            ".fancybox-button",
            function (t) {
              switch (t.type) {
                case "mousedown":
                  e = i(this);
                  break;
                case "mouseup":
                  e = null;
                  break;
                case "focusin":
                  i(".fancybox-button").removeClass("fancybox-focus"),
                    i(this).is(e) ||
                      i(this).is("[disabled]") ||
                      i(this).addClass("fancybox-focus");
                  break;
                case "focusout":
                  i(".fancybox-button").removeClass("fancybox-focus");
              }
            }
          );
        })();
    }
  })(window, document, jQuery),
  (function (e) {
    "use strict";
    var t = {
        youtube: {
          matcher:
            /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
          params: {
            autoplay: 1,
            autohide: 1,
            fs: 1,
            rel: 0,
            hd: 1,
            wmode: "transparent",
            enablejsapi: 1,
            html5: 1,
          },
          paramPlace: 8,
          type: "iframe",
          url: "https://www.youtube-nocookie.com/embed/$4",
          thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg",
        },
        vimeo: {
          matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
          params: {
            autoplay: 1,
            hd: 1,
            show_title: 1,
            show_byline: 1,
            show_portrait: 0,
            fullscreen: 1,
          },
          paramPlace: 3,
          type: "iframe",
          url: "//player.vimeo.com/video/$2",
        },
        instagram: {
          matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
          type: "image",
          url: "//$1/p/$2/media/?size=l",
        },
        gmap_place: {
          matcher:
            /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
          type: "iframe",
          url: function (e) {
            return (
              "//maps.google." +
              e[2] +
              "/?ll=" +
              (e[9]
                ? e[9] +
                  "&z=" +
                  Math.floor(e[10]) +
                  (e[12] ? e[12].replace(/^\//, "&") : "")
                : e[12] + ""
              ).replace(/\?/, "&") +
              "&output=" +
              (e[12] && e[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
            );
          },
        },
        gmap_search: {
          matcher:
            /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
          type: "iframe",
          url: function (e) {
            return (
              "//maps.google." +
              e[2] +
              "/maps?q=" +
              e[5].replace("query=", "q=").replace("api=1", "") +
              "&output=embed"
            );
          },
        },
      },
      i = function (t, i, a) {
        if (t)
          return (
            (a = a || ""),
            "object" === e.type(a) && (a = e.param(a, !0)),
            e.each(i, function (e, i) {
              t = t.replace("$" + e, i || "");
            }),
            a.length && (t += (t.indexOf("?") > 0 ? "&" : "?") + a),
            t
          );
      };
    e(document).on("objectNeedsType.fb", function (a, s, n) {
      var o,
        r,
        l,
        d,
        c,
        h,
        u,
        p = n.src || "",
        f = !1;
      (o = e.extend(!0, {}, t, n.opts.media)),
        e.each(o, function (t, a) {
          if ((l = p.match(a.matcher))) {
            if (
              ((f = a.type), (u = t), (h = {}), a.paramPlace && l[a.paramPlace])
            ) {
              "?" == (c = l[a.paramPlace])[0] && (c = c.substring(1)),
                (c = c.split("&"));
              for (var s = 0; s < c.length; ++s) {
                var o = c[s].split("=", 2);
                2 == o.length &&
                  (h[o[0]] = decodeURIComponent(o[1].replace(/\+/g, " ")));
              }
            }
            return (
              (d = e.extend(!0, {}, a.params, n.opts[t], h)),
              (p =
                "function" === e.type(a.url)
                  ? a.url.call(this, l, d, n)
                  : i(a.url, l, d)),
              (r =
                "function" === e.type(a.thumb)
                  ? a.thumb.call(this, l, d, n)
                  : i(a.thumb, l)),
              "youtube" === t
                ? (p = p.replace(/&t=((\d+)m)?(\d+)s/, function (e, t, i, a) {
                    return (
                      "&start=" +
                      ((i ? 60 * parseInt(i, 10) : 0) + parseInt(a, 10))
                    );
                  }))
                : "vimeo" === t && (p = p.replace("&%23", "#")),
              !1
            );
          }
        }),
        f
          ? (n.opts.thumb ||
              (n.opts.$thumb && n.opts.$thumb.length) ||
              (n.opts.thumb = r),
            "iframe" === f &&
              (n.opts = e.extend(!0, n.opts, {
                iframe: { preload: !1, attr: { scrolling: "no" } },
              })),
            e.extend(n, {
              type: f,
              src: p,
              origSrc: n.src,
              contentSource: u,
              contentType:
                "image" === f
                  ? "image"
                  : "gmap_place" == u || "gmap_search" == u
                  ? "map"
                  : "video",
            }))
          : p && (n.type = n.opts.defaultType);
    });
    var a = {
      youtube: {
        src: "https://www.youtube.com/iframe_api",
        class: "YT",
        loading: !1,
        loaded: !1,
      },
      vimeo: {
        src: "https://player.vimeo.com/api/player.js",
        class: "Vimeo",
        loading: !1,
        loaded: !1,
      },
      load: function (e) {
        var t,
          i = this;
        this[e].loaded
          ? setTimeout(function () {
              i.done(e);
            })
          : this[e].loading ||
            ((this[e].loading = !0),
            ((t = document.createElement("script")).type = "text/javascript"),
            (t.src = this[e].src),
            "youtube" === e
              ? (window.onYouTubeIframeAPIReady = function () {
                  (i[e].loaded = !0), i.done(e);
                })
              : (t.onload = function () {
                  (i[e].loaded = !0), i.done(e);
                }),
            document.body.appendChild(t));
      },
      done: function (t) {
        var i, a;
        "youtube" === t && delete window.onYouTubeIframeAPIReady,
          (i = e.fancybox.getInstance()) &&
            ((a = i.current.$content.find("iframe")),
            "youtube" === t && void 0 !== YT && YT
              ? new YT.Player(a.attr("id"), {
                  events: {
                    onStateChange: function (e) {
                      0 == e.data && i.next();
                    },
                  },
                })
              : "vimeo" === t &&
                void 0 !== Vimeo &&
                Vimeo &&
                new Vimeo.Player(a).on("ended", function () {
                  i.next();
                }));
      },
    };
    e(document).on({
      "afterShow.fb": function (e, t, i) {
        t.group.length > 1 &&
          ("youtube" === i.contentSource || "vimeo" === i.contentSource) &&
          a.load(i.contentSource);
      },
    });
  })(jQuery),
  (function (e, t, i) {
    "use strict";
    var a =
        e.requestAnimationFrame ||
        e.webkitRequestAnimationFrame ||
        e.mozRequestAnimationFrame ||
        e.oRequestAnimationFrame ||
        function (t) {
          return e.setTimeout(t, 1e3 / 60);
        },
      s =
        e.cancelAnimationFrame ||
        e.webkitCancelAnimationFrame ||
        e.mozCancelAnimationFrame ||
        e.oCancelAnimationFrame ||
        function (t) {
          e.clearTimeout(t);
        },
      n = function (t) {
        var i = [];
        for (var a in (t =
          (t = t.originalEvent || t || e.e).touches && t.touches.length
            ? t.touches
            : t.changedTouches && t.changedTouches.length
            ? t.changedTouches
            : [t]))
          t[a].pageX
            ? i.push({ x: t[a].pageX, y: t[a].pageY })
            : t[a].clientX && i.push({ x: t[a].clientX, y: t[a].clientY });
        return i;
      },
      o = function (e, t, i) {
        return t && e
          ? "x" === i
            ? e.x - t.x
            : "y" === i
            ? e.y - t.y
            : Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
          : 0;
      },
      r = function (e) {
        if (
          e.is(
            'a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe'
          ) ||
          i.isFunction(e.get(0).onclick) ||
          e.data("selectable")
        )
          return !0;
        for (var t = 0, a = e[0].attributes, s = a.length; t < s; t++)
          if ("data-fancybox-" === a[t].nodeName.substr(0, 14)) return !0;
        return !1;
      },
      l = function (t) {
        var i = e.getComputedStyle(t)["overflow-y"],
          a = e.getComputedStyle(t)["overflow-x"],
          s =
            ("scroll" === i || "auto" === i) && t.scrollHeight > t.clientHeight,
          n = ("scroll" === a || "auto" === a) && t.scrollWidth > t.clientWidth;
        return s || n;
      },
      d = function (e) {
        for (
          var t = !1;
          !(t = l(e.get(0))) &&
          (e = e.parent()).length &&
          !e.hasClass("fancybox-stage") &&
          !e.is("body");

        );
        return t;
      },
      c = function (e) {
        var t = this;
        (t.instance = e),
          (t.$bg = e.$refs.bg),
          (t.$stage = e.$refs.stage),
          (t.$container = e.$refs.container),
          t.destroy(),
          t.$container.on(
            "touchstart.fb.touch mousedown.fb.touch",
            i.proxy(t, "ontouchstart")
          );
      };
    (c.prototype.destroy = function () {
      var e = this;
      e.$container.off(".fb.touch"),
        i(t).off(".fb.touch"),
        e.requestId && (s(e.requestId), (e.requestId = null)),
        e.tapped && (clearTimeout(e.tapped), (e.tapped = null));
    }),
      (c.prototype.ontouchstart = function (a) {
        var s = this,
          l = i(a.target),
          c = s.instance,
          h = c.current,
          u = h.$slide,
          p = h.$content,
          f = "touchstart" == a.type;
        if (
          (f && s.$container.off("mousedown.fb.touch"),
          (!a.originalEvent || 2 != a.originalEvent.button) &&
            u.length &&
            l.length &&
            !r(l) &&
            !r(l.parent()) &&
            (l.is("img") ||
              !(a.originalEvent.clientX > l[0].clientWidth + l.offset().left)))
        ) {
          if (!h || c.isAnimating || h.$slide.hasClass("fancybox-animated"))
            return a.stopPropagation(), void a.preventDefault();
          (s.realPoints = s.startPoints = n(a)),
            s.startPoints.length &&
              (h.touch && a.stopPropagation(),
              (s.startEvent = a),
              (s.canTap = !0),
              (s.$target = l),
              (s.$content = p),
              (s.opts = h.opts.touch),
              (s.isPanning = !1),
              (s.isSwiping = !1),
              (s.isZooming = !1),
              (s.isScrolling = !1),
              (s.canPan = c.canPan()),
              (s.startTime = new Date().getTime()),
              (s.distanceX = s.distanceY = s.distance = 0),
              (s.canvasWidth = Math.round(u[0].clientWidth)),
              (s.canvasHeight = Math.round(u[0].clientHeight)),
              (s.contentLastPos = null),
              (s.contentStartPos = i.fancybox.getTranslate(s.$content) || {
                top: 0,
                left: 0,
              }),
              (s.sliderStartPos = i.fancybox.getTranslate(u)),
              (s.stagePos = i.fancybox.getTranslate(c.$refs.stage)),
              (s.sliderStartPos.top -= s.stagePos.top),
              (s.sliderStartPos.left -= s.stagePos.left),
              (s.contentStartPos.top -= s.stagePos.top),
              (s.contentStartPos.left -= s.stagePos.left),
              i(t)
                .off(".fb.touch")
                .on(
                  f
                    ? "touchend.fb.touch touchcancel.fb.touch"
                    : "mouseup.fb.touch mouseleave.fb.touch",
                  i.proxy(s, "ontouchend")
                )
                .on(
                  f ? "touchmove.fb.touch" : "mousemove.fb.touch",
                  i.proxy(s, "ontouchmove")
                ),
              i.fancybox.isMobile &&
                t.addEventListener("scroll", s.onscroll, !0),
              (((s.opts || s.canPan) &&
                (l.is(s.$stage) || s.$stage.find(l).length)) ||
                (l.is(".fancybox-image") && a.preventDefault(),
                i.fancybox.isMobile &&
                  l.parents(".fancybox-caption").length)) &&
                ((s.isScrollable = d(l) || d(l.parent())),
                (i.fancybox.isMobile && s.isScrollable) || a.preventDefault(),
                (1 === s.startPoints.length || h.hasError) &&
                  (s.canPan
                    ? (i.fancybox.stop(s.$content), (s.isPanning = !0))
                    : (s.isSwiping = !0),
                  s.$container.addClass("fancybox-is-grabbing")),
                2 === s.startPoints.length &&
                  "image" === h.type &&
                  (h.isLoaded || h.$ghost) &&
                  ((s.canTap = !1),
                  (s.isSwiping = !1),
                  (s.isPanning = !1),
                  (s.isZooming = !0),
                  i.fancybox.stop(s.$content),
                  (s.centerPointStartX =
                    0.5 * (s.startPoints[0].x + s.startPoints[1].x) -
                    i(e).scrollLeft()),
                  (s.centerPointStartY =
                    0.5 * (s.startPoints[0].y + s.startPoints[1].y) -
                    i(e).scrollTop()),
                  (s.percentageOfImageAtPinchPointX =
                    (s.centerPointStartX - s.contentStartPos.left) /
                    s.contentStartPos.width),
                  (s.percentageOfImageAtPinchPointY =
                    (s.centerPointStartY - s.contentStartPos.top) /
                    s.contentStartPos.height),
                  (s.startDistanceBetweenFingers = o(
                    s.startPoints[0],
                    s.startPoints[1]
                  )))));
        }
      }),
      (c.prototype.onscroll = function (e) {
        (this.isScrolling = !0),
          t.removeEventListener("scroll", this.onscroll, !0);
      }),
      (c.prototype.ontouchmove = function (e) {
        var t = this;
        return void 0 !== e.originalEvent.buttons &&
          0 === e.originalEvent.buttons
          ? void t.ontouchend(e)
          : t.isScrolling
          ? void (t.canTap = !1)
          : ((t.newPoints = n(e)),
            void (
              (t.opts || t.canPan) &&
              t.newPoints.length &&
              t.newPoints.length &&
              ((t.isSwiping && !0 === t.isSwiping) || e.preventDefault(),
              (t.distanceX = o(t.newPoints[0], t.startPoints[0], "x")),
              (t.distanceY = o(t.newPoints[0], t.startPoints[0], "y")),
              (t.distance = o(t.newPoints[0], t.startPoints[0])),
              t.distance > 0 &&
                (t.isSwiping
                  ? t.onSwipe(e)
                  : t.isPanning
                  ? t.onPan()
                  : t.isZooming && t.onZoom()))
            ));
      }),
      (c.prototype.onSwipe = function (t) {
        var n,
          o = this,
          r = o.instance,
          l = o.isSwiping,
          d = o.sliderStartPos.left || 0;
        if (!0 !== l)
          "x" == l &&
            (o.distanceX > 0 &&
            (o.instance.group.length < 2 ||
              (0 === o.instance.current.index && !o.instance.current.opts.loop))
              ? (d += Math.pow(o.distanceX, 0.8))
              : o.distanceX < 0 &&
                (o.instance.group.length < 2 ||
                  (o.instance.current.index === o.instance.group.length - 1 &&
                    !o.instance.current.opts.loop))
              ? (d -= Math.pow(-o.distanceX, 0.8))
              : (d += o.distanceX)),
            (o.sliderLastPos = {
              top: "x" == l ? 0 : o.sliderStartPos.top + o.distanceY,
              left: d,
            }),
            o.requestId && (s(o.requestId), (o.requestId = null)),
            (o.requestId = a(function () {
              o.sliderLastPos &&
                (i.each(o.instance.slides, function (e, t) {
                  var a = t.pos - o.instance.currPos;
                  i.fancybox.setTranslate(t.$slide, {
                    top: o.sliderLastPos.top,
                    left:
                      o.sliderLastPos.left +
                      a * o.canvasWidth +
                      a * t.opts.gutter,
                  });
                }),
                o.$container.addClass("fancybox-is-sliding"));
            }));
        else if (Math.abs(o.distance) > 10) {
          if (
            ((o.canTap = !1),
            r.group.length < 2 && o.opts.vertical
              ? (o.isSwiping = "y")
              : r.isDragging ||
                !1 === o.opts.vertical ||
                ("auto" === o.opts.vertical && i(e).width() > 800)
              ? (o.isSwiping = "x")
              : ((n = Math.abs(
                  (180 * Math.atan2(o.distanceY, o.distanceX)) / Math.PI
                )),
                (o.isSwiping = n > 45 && n < 135 ? "y" : "x")),
            "y" === o.isSwiping && i.fancybox.isMobile && o.isScrollable)
          )
            return void (o.isScrolling = !0);
          (r.isDragging = o.isSwiping),
            (o.startPoints = o.newPoints),
            i.each(r.slides, function (e, t) {
              var a, s;
              i.fancybox.stop(t.$slide),
                (a = i.fancybox.getTranslate(t.$slide)),
                (s = i.fancybox.getTranslate(r.$refs.stage)),
                t.$slide
                  .css({
                    transform: "",
                    opacity: "",
                    "transition-duration": "",
                  })
                  .removeClass("fancybox-animated")
                  .removeClass(function (e, t) {
                    return (t.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
                  }),
                t.pos === r.current.pos &&
                  ((o.sliderStartPos.top = a.top - s.top),
                  (o.sliderStartPos.left = a.left - s.left)),
                i.fancybox.setTranslate(t.$slide, {
                  top: a.top - s.top,
                  left: a.left - s.left,
                });
            }),
            r.SlideShow && r.SlideShow.isActive && r.SlideShow.stop();
        }
      }),
      (c.prototype.onPan = function () {
        var e = this;
        o(e.newPoints[0], e.realPoints[0]) < (i.fancybox.isMobile ? 10 : 5)
          ? (e.startPoints = e.newPoints)
          : ((e.canTap = !1),
            (e.contentLastPos = e.limitMovement()),
            e.requestId && s(e.requestId),
            (e.requestId = a(function () {
              i.fancybox.setTranslate(e.$content, e.contentLastPos);
            })));
      }),
      (c.prototype.limitMovement = function () {
        var e,
          t,
          i,
          a,
          s,
          n,
          o = this,
          r = o.canvasWidth,
          l = o.canvasHeight,
          d = o.distanceX,
          c = o.distanceY,
          h = o.contentStartPos,
          u = h.left,
          p = h.top,
          f = h.width,
          m = h.height;
        return (
          (s = f > r ? u + d : u),
          (n = p + c),
          (e = Math.max(0, 0.5 * r - 0.5 * f)),
          (t = Math.max(0, 0.5 * l - 0.5 * m)),
          (i = Math.min(r - f, 0.5 * r - 0.5 * f)),
          (a = Math.min(l - m, 0.5 * l - 0.5 * m)),
          d > 0 && s > e && (s = e - 1 + Math.pow(-e + u + d, 0.8) || 0),
          d < 0 && s < i && (s = i + 1 - Math.pow(i - u - d, 0.8) || 0),
          c > 0 && n > t && (n = t - 1 + Math.pow(-t + p + c, 0.8) || 0),
          c < 0 && n < a && (n = a + 1 - Math.pow(a - p - c, 0.8) || 0),
          { top: n, left: s }
        );
      }),
      (c.prototype.limitPosition = function (e, t, i, a) {
        var s = this.canvasWidth,
          n = this.canvasHeight;
        return (
          (e =
            i > s
              ? (e = e > 0 ? 0 : e) < s - i
                ? s - i
                : e
              : Math.max(0, s / 2 - i / 2)),
          {
            top: (t =
              a > n
                ? (t = t > 0 ? 0 : t) < n - a
                  ? n - a
                  : t
                : Math.max(0, n / 2 - a / 2)),
            left: e,
          }
        );
      }),
      (c.prototype.onZoom = function () {
        var t = this,
          n = t.contentStartPos,
          r = n.width,
          l = n.height,
          d = n.left,
          c = n.top,
          h = o(t.newPoints[0], t.newPoints[1]) / t.startDistanceBetweenFingers,
          u = Math.floor(r * h),
          p = Math.floor(l * h),
          f = (r - u) * t.percentageOfImageAtPinchPointX,
          m = (l - p) * t.percentageOfImageAtPinchPointY,
          v = (t.newPoints[0].x + t.newPoints[1].x) / 2 - i(e).scrollLeft(),
          g = (t.newPoints[0].y + t.newPoints[1].y) / 2 - i(e).scrollTop(),
          b = v - t.centerPointStartX,
          y = {
            top: c + (m + (g - t.centerPointStartY)),
            left: d + (f + b),
            scaleX: h,
            scaleY: h,
          };
        (t.canTap = !1),
          (t.newWidth = u),
          (t.newHeight = p),
          (t.contentLastPos = y),
          t.requestId && s(t.requestId),
          (t.requestId = a(function () {
            i.fancybox.setTranslate(t.$content, t.contentLastPos);
          }));
      }),
      (c.prototype.ontouchend = function (e) {
        var a = this,
          o = a.isSwiping,
          r = a.isPanning,
          l = a.isZooming,
          d = a.isScrolling;
        if (
          ((a.endPoints = n(e)),
          (a.dMs = Math.max(new Date().getTime() - a.startTime, 1)),
          a.$container.removeClass("fancybox-is-grabbing"),
          i(t).off(".fb.touch"),
          t.removeEventListener("scroll", a.onscroll, !0),
          a.requestId && (s(a.requestId), (a.requestId = null)),
          (a.isSwiping = !1),
          (a.isPanning = !1),
          (a.isZooming = !1),
          (a.isScrolling = !1),
          (a.instance.isDragging = !1),
          a.canTap)
        )
          return a.onTap(e);
        (a.speed = 100),
          (a.velocityX = (a.distanceX / a.dMs) * 0.5),
          (a.velocityY = (a.distanceY / a.dMs) * 0.5),
          r ? a.endPanning() : l ? a.endZooming() : a.endSwiping(o, d);
      }),
      (c.prototype.endSwiping = function (e, t) {
        var a = this,
          s = !1,
          n = a.instance.group.length,
          o = Math.abs(a.distanceX),
          r = "x" == e && n > 1 && ((a.dMs > 130 && o > 10) || o > 50);
        (a.sliderLastPos = null),
          "y" == e && !t && Math.abs(a.distanceY) > 50
            ? (i.fancybox.animate(
                a.instance.current.$slide,
                {
                  top: a.sliderStartPos.top + a.distanceY + 150 * a.velocityY,
                  opacity: 0,
                },
                200
              ),
              (s = a.instance.close(!0, 250)))
            : r && a.distanceX > 0
            ? (s = a.instance.previous(300))
            : r && a.distanceX < 0 && (s = a.instance.next(300)),
          !1 !== s || ("x" != e && "y" != e) || a.instance.centerSlide(200),
          a.$container.removeClass("fancybox-is-sliding");
      }),
      (c.prototype.endPanning = function () {
        var e,
          t,
          a,
          s = this;
        s.contentLastPos &&
          (!1 === s.opts.momentum || s.dMs > 350
            ? ((e = s.contentLastPos.left), (t = s.contentLastPos.top))
            : ((e = s.contentLastPos.left + 500 * s.velocityX),
              (t = s.contentLastPos.top + 500 * s.velocityY)),
          ((a = s.limitPosition(
            e,
            t,
            s.contentStartPos.width,
            s.contentStartPos.height
          )).width = s.contentStartPos.width),
          (a.height = s.contentStartPos.height),
          i.fancybox.animate(s.$content, a, 366));
      }),
      (c.prototype.endZooming = function () {
        var e,
          t,
          a,
          s,
          n = this,
          o = n.instance.current,
          r = n.newWidth,
          l = n.newHeight;
        n.contentLastPos &&
          ((e = n.contentLastPos.left),
          (s = {
            top: (t = n.contentLastPos.top),
            left: e,
            width: r,
            height: l,
            scaleX: 1,
            scaleY: 1,
          }),
          i.fancybox.setTranslate(n.$content, s),
          r < n.canvasWidth && l < n.canvasHeight
            ? n.instance.scaleToFit(150)
            : r > o.width || l > o.height
            ? n.instance.scaleToActual(
                n.centerPointStartX,
                n.centerPointStartY,
                150
              )
            : ((a = n.limitPosition(e, t, r, l)),
              i.fancybox.animate(n.$content, a, 150)));
      }),
      (c.prototype.onTap = function (t) {
        var a,
          s = this,
          o = i(t.target),
          r = s.instance,
          l = r.current,
          d = (t && n(t)) || s.startPoints,
          c = d[0] ? d[0].x - i(e).scrollLeft() - s.stagePos.left : 0,
          h = d[0] ? d[0].y - i(e).scrollTop() - s.stagePos.top : 0,
          u = function (e) {
            var a = l.opts[e];
            if ((i.isFunction(a) && (a = a.apply(r, [l, t])), a))
              switch (a) {
                case "close":
                  r.close(s.startEvent);
                  break;
                case "toggleControls":
                  r.toggleControls();
                  break;
                case "next":
                  r.next();
                  break;
                case "nextOrClose":
                  r.group.length > 1 ? r.next() : r.close(s.startEvent);
                  break;
                case "zoom":
                  "image" == l.type &&
                    (l.isLoaded || l.$ghost) &&
                    (r.canPan()
                      ? r.scaleToFit()
                      : r.isScaledDown()
                      ? r.scaleToActual(c, h)
                      : r.group.length < 2 && r.close(s.startEvent));
              }
          };
        if (
          (!t.originalEvent || 2 != t.originalEvent.button) &&
          (o.is("img") || !(c > o[0].clientWidth + o.offset().left))
        ) {
          if (
            o.is(
              ".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"
            )
          )
            a = "Outside";
          else if (o.is(".fancybox-slide")) a = "Slide";
          else {
            if (
              !r.current.$content ||
              !r.current.$content.find(o).addBack().filter(o).length
            )
              return;
            a = "Content";
          }
          if (s.tapped) {
            if (
              (clearTimeout(s.tapped),
              (s.tapped = null),
              Math.abs(c - s.tapX) > 50 || Math.abs(h - s.tapY) > 50)
            )
              return this;
            u("dblclick" + a);
          } else
            (s.tapX = c),
              (s.tapY = h),
              l.opts["dblclick" + a] &&
              l.opts["dblclick" + a] !== l.opts["click" + a]
                ? (s.tapped = setTimeout(function () {
                    (s.tapped = null), r.isAnimating || u("click" + a);
                  }, 500))
                : u("click" + a);
          return this;
        }
      }),
      i(t)
        .on("onActivate.fb", function (e, t) {
          t && !t.Guestures && (t.Guestures = new c(t));
        })
        .on("beforeClose.fb", function (e, t) {
          t && t.Guestures && t.Guestures.destroy();
        });
  })(window, document, jQuery),
  (function (e, t) {
    "use strict";
    t.extend(!0, t.fancybox.defaults, {
      btnTpl: {
        slideShow:
          '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>',
      },
      slideShow: { autoStart: !1, speed: 3e3, progress: !0 },
    });
    var i = function (e) {
      (this.instance = e), this.init();
    };
    t.extend(i.prototype, {
      timer: null,
      isActive: !1,
      $button: null,
      init: function () {
        var e = this,
          i = e.instance,
          a = i.group[i.currIndex].opts.slideShow;
        (e.$button = i.$refs.toolbar
          .find("[data-fancybox-play]")
          .on("click", function () {
            e.toggle();
          })),
          i.group.length < 2 || !a
            ? e.$button.hide()
            : a.progress &&
              (e.$progress = t(
                '<div class="fancybox-progress"></div>'
              ).appendTo(i.$refs.inner));
      },
      set: function (e) {
        var i = this,
          a = i.instance,
          s = a.current;
        s && (!0 === e || s.opts.loop || a.currIndex < a.group.length - 1)
          ? i.isActive &&
            "video" !== s.contentType &&
            (i.$progress &&
              t.fancybox.animate(
                i.$progress.show(),
                { scaleX: 1 },
                s.opts.slideShow.speed
              ),
            (i.timer = setTimeout(function () {
              a.current.opts.loop || a.current.index != a.group.length - 1
                ? a.next()
                : a.jumpTo(0);
            }, s.opts.slideShow.speed)))
          : (i.stop(), (a.idleSecondsCounter = 0), a.showControls());
      },
      clear: function () {
        var e = this;
        clearTimeout(e.timer),
          (e.timer = null),
          e.$progress && e.$progress.removeAttr("style").hide();
      },
      start: function () {
        var e = this,
          t = e.instance.current;
        t &&
          (e.$button
            .attr(
              "title",
              (t.opts.i18n[t.opts.lang] || t.opts.i18n.en).PLAY_STOP
            )
            .removeClass("fancybox-button--play")
            .addClass("fancybox-button--pause"),
          (e.isActive = !0),
          t.isComplete && e.set(!0),
          e.instance.trigger("onSlideShowChange", !0));
      },
      stop: function () {
        var e = this,
          t = e.instance.current;
        e.clear(),
          e.$button
            .attr(
              "title",
              (t.opts.i18n[t.opts.lang] || t.opts.i18n.en).PLAY_START
            )
            .removeClass("fancybox-button--pause")
            .addClass("fancybox-button--play"),
          (e.isActive = !1),
          e.instance.trigger("onSlideShowChange", !1),
          e.$progress && e.$progress.removeAttr("style").hide();
      },
      toggle: function () {
        var e = this;
        e.isActive ? e.stop() : e.start();
      },
    }),
      t(e).on({
        "onInit.fb": function (e, t) {
          t && !t.SlideShow && (t.SlideShow = new i(t));
        },
        "beforeShow.fb": function (e, t, i, a) {
          var s = t && t.SlideShow;
          a
            ? s && i.opts.slideShow.autoStart && s.start()
            : s && s.isActive && s.clear();
        },
        "afterShow.fb": function (e, t, i) {
          var a = t && t.SlideShow;
          a && a.isActive && a.set();
        },
        "afterKeydown.fb": function (i, a, s, n, o) {
          var r = a && a.SlideShow;
          !r ||
            !s.opts.slideShow ||
            (80 !== o && 32 !== o) ||
            t(e.activeElement).is("button,a,input") ||
            (n.preventDefault(), r.toggle());
        },
        "beforeClose.fb onDeactivate.fb": function (e, t) {
          var i = t && t.SlideShow;
          i && i.stop();
        },
      }),
      t(e).on("visibilitychange", function () {
        var i = t.fancybox.getInstance(),
          a = i && i.SlideShow;
        a && a.isActive && (e.hidden ? a.clear() : a.set());
      });
  })(document, jQuery),
  (function (e, t) {
    "use strict";
    var i = (function () {
      for (
        var t = [
            [
              "requestFullscreen",
              "exitFullscreen",
              "fullscreenElement",
              "fullscreenEnabled",
              "fullscreenchange",
              "fullscreenerror",
            ],
            [
              "webkitRequestFullscreen",
              "webkitExitFullscreen",
              "webkitFullscreenElement",
              "webkitFullscreenEnabled",
              "webkitfullscreenchange",
              "webkitfullscreenerror",
            ],
            [
              "webkitRequestFullScreen",
              "webkitCancelFullScreen",
              "webkitCurrentFullScreenElement",
              "webkitCancelFullScreen",
              "webkitfullscreenchange",
              "webkitfullscreenerror",
            ],
            [
              "mozRequestFullScreen",
              "mozCancelFullScreen",
              "mozFullScreenElement",
              "mozFullScreenEnabled",
              "mozfullscreenchange",
              "mozfullscreenerror",
            ],
            [
              "msRequestFullscreen",
              "msExitFullscreen",
              "msFullscreenElement",
              "msFullscreenEnabled",
              "MSFullscreenChange",
              "MSFullscreenError",
            ],
          ],
          i = {},
          a = 0;
        a < t.length;
        a++
      ) {
        var s = t[a];
        if (s && s[1] in e) {
          for (var n = 0; n < s.length; n++) i[t[0][n]] = s[n];
          return i;
        }
      }
      return !1;
    })();
    if (i) {
      var a = {
        request: function (t) {
          (t = t || e.documentElement)[i.requestFullscreen](
            t.ALLOW_KEYBOARD_INPUT
          );
        },
        exit: function () {
          e[i.exitFullscreen]();
        },
        toggle: function (t) {
          (t = t || e.documentElement),
            this.isFullscreen() ? this.exit() : this.request(t);
        },
        isFullscreen: function () {
          return Boolean(e[i.fullscreenElement]);
        },
        enabled: function () {
          return Boolean(e[i.fullscreenEnabled]);
        },
      };
      t.extend(!0, t.fancybox.defaults, {
        btnTpl: {
          fullScreen:
            '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>',
        },
        fullScreen: { autoStart: !1 },
      }),
        t(e).on(i.fullscreenchange, function () {
          var e = a.isFullscreen(),
            i = t.fancybox.getInstance();
          i &&
            (i.current &&
              "image" === i.current.type &&
              i.isAnimating &&
              ((i.isAnimating = !1),
              i.update(!0, !0, 0),
              i.isComplete || i.complete()),
            i.trigger("onFullscreenChange", e),
            i.$refs.container.toggleClass("fancybox-is-fullscreen", e),
            i.$refs.toolbar
              .find("[data-fancybox-fullscreen]")
              .toggleClass("fancybox-button--fsenter", !e)
              .toggleClass("fancybox-button--fsexit", e));
        });
    }
    t(e).on({
      "onInit.fb": function (e, t) {
        i
          ? t && t.group[t.currIndex].opts.fullScreen
            ? (t.$refs.container.on(
                "click.fb-fullscreen",
                "[data-fancybox-fullscreen]",
                function (e) {
                  e.stopPropagation(), e.preventDefault(), a.toggle();
                }
              ),
              t.opts.fullScreen &&
                !0 === t.opts.fullScreen.autoStart &&
                a.request(),
              (t.FullScreen = a))
            : t && t.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()
          : t.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();
      },
      "afterKeydown.fb": function (e, t, i, a, s) {
        t &&
          t.FullScreen &&
          70 === s &&
          (a.preventDefault(), t.FullScreen.toggle());
      },
      "beforeClose.fb": function (e, t) {
        t &&
          t.FullScreen &&
          t.$refs.container.hasClass("fancybox-is-fullscreen") &&
          a.exit();
      },
    });
  })(document, jQuery),
  (function (e, t) {
    "use strict";
    var i = "fancybox-thumbs";
    t.fancybox.defaults = t.extend(
      !0,
      {
        btnTpl: {
          thumbs:
            '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>',
        },
        thumbs: {
          autoStart: !1,
          hideOnClose: !0,
          parentEl: ".fancybox-container",
          axis: "y",
        },
      },
      t.fancybox.defaults
    );
    var a = function (e) {
      this.init(e);
    };
    t.extend(a.prototype, {
      $button: null,
      $grid: null,
      $list: null,
      isVisible: !1,
      isActive: !1,
      init: function (e) {
        var t = this,
          i = e.group,
          a = 0;
        (t.instance = e),
          (t.opts = i[e.currIndex].opts.thumbs),
          (e.Thumbs = t),
          (t.$button = e.$refs.toolbar.find("[data-fancybox-thumbs]"));
        for (
          var s = 0, n = i.length;
          s < n && (i[s].thumb && a++, !(a > 1));
          s++
        );
        a > 1 && t.opts
          ? (t.$button.removeAttr("style").on("click", function () {
              t.toggle();
            }),
            (t.isActive = !0))
          : t.$button.hide();
      },
      create: function () {
        var e,
          a = this,
          s = a.instance,
          n = a.opts.parentEl,
          o = [];
        a.$grid ||
          ((a.$grid = t(
            '<div class="' + i + " " + i + "-" + a.opts.axis + '"></div>'
          ).appendTo(s.$refs.container.find(n).addBack().filter(n))),
          a.$grid.on("click", "a", function () {
            s.jumpTo(t(this).attr("data-index"));
          })),
          a.$list ||
            (a.$list = t('<div class="' + i + '__list">').appendTo(a.$grid)),
          t.each(s.group, function (t, i) {
            (e = i.thumb) || "image" !== i.type || (e = i.src),
              o.push(
                '<a href="javascript:;" tabindex="0" data-index="' +
                  t +
                  '"' +
                  (e && e.length
                    ? ' style="background-image:url(' + e + ')"'
                    : 'class="fancybox-thumbs-missing"') +
                  "></a>"
              );
          }),
          (a.$list[0].innerHTML = o.join("")),
          "x" === a.opts.axis &&
            a.$list.width(
              parseInt(a.$grid.css("padding-right"), 10) +
                s.group.length * a.$list.children().eq(0).outerWidth(!0)
            );
      },
      focus: function (e) {
        var t,
          i,
          a = this,
          s = a.$list,
          n = a.$grid;
        a.instance.current &&
          ((i = (t = s
            .children()
            .removeClass("fancybox-thumbs-active")
            .filter('[data-index="' + a.instance.current.index + '"]')
            .addClass("fancybox-thumbs-active")).position()),
          "y" === a.opts.axis &&
          (i.top < 0 || i.top > s.height() - t.outerHeight())
            ? s.stop().animate({ scrollTop: s.scrollTop() + i.top }, e)
            : "x" === a.opts.axis &&
              (i.left < n.scrollLeft() ||
                i.left > n.scrollLeft() + (n.width() - t.outerWidth())) &&
              s.parent().stop().animate({ scrollLeft: i.left }, e));
      },
      update: function () {
        var e = this;
        e.instance.$refs.container.toggleClass(
          "fancybox-show-thumbs",
          this.isVisible
        ),
          e.isVisible
            ? (e.$grid || e.create(),
              e.instance.trigger("onThumbsShow"),
              e.focus(0))
            : e.$grid && e.instance.trigger("onThumbsHide"),
          e.instance.update();
      },
      hide: function () {
        (this.isVisible = !1), this.update();
      },
      show: function () {
        (this.isVisible = !0), this.update();
      },
      toggle: function () {
        (this.isVisible = !this.isVisible), this.update();
      },
    }),
      t(e).on({
        "onInit.fb": function (e, t) {
          var i;
          t &&
            !t.Thumbs &&
            (i = new a(t)).isActive &&
            !0 === i.opts.autoStart &&
            i.show();
        },
        "beforeShow.fb": function (e, t, i, a) {
          var s = t && t.Thumbs;
          s && s.isVisible && s.focus(a ? 0 : 250);
        },
        "afterKeydown.fb": function (e, t, i, a, s) {
          var n = t && t.Thumbs;
          n && n.isActive && 71 === s && (a.preventDefault(), n.toggle());
        },
        "beforeClose.fb": function (e, t) {
          var i = t && t.Thumbs;
          i && i.isVisible && !1 !== i.opts.hideOnClose && i.$grid.hide();
        },
      });
  })(document, jQuery),
  (function (e, t) {
    "use strict";
    t.extend(!0, t.fancybox.defaults, {
      btnTpl: {
        share:
          '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>',
      },
      share: {
        url: function (e, t) {
          return (
            (!e.currentHash &&
              "inline" !== t.type &&
              "html" !== t.type &&
              (t.origSrc || t.src)) ||
            window.location
          );
        },
        tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>',
      },
    }),
      t(e).on("click", "[data-fancybox-share]", function () {
        var e,
          i,
          a = t.fancybox.getInstance(),
          s = a.current || null;
        s &&
          ("function" === t.type(s.opts.share.url) &&
            (e = s.opts.share.url.apply(s, [a, s])),
          (i = s.opts.share.tpl
            .replace(
              /\{\{media\}\}/g,
              "image" === s.type ? encodeURIComponent(s.src) : ""
            )
            .replace(/\{\{url\}\}/g, encodeURIComponent(e))
            .replace(
              /\{\{url_raw\}\}/g,
              (function (e) {
                var t = {
                  "&": "&amp;",
                  "<": "&lt;",
                  ">": "&gt;",
                  '"': "&quot;",
                  "'": "&#39;",
                  "/": "&#x2F;",
                  "`": "&#x60;",
                  "=": "&#x3D;",
                };
                return String(e).replace(/[&<>"'`=\/]/g, function (e) {
                  return t[e];
                });
              })(e)
            )
            .replace(
              /\{\{descr\}\}/g,
              a.$caption ? encodeURIComponent(a.$caption.text()) : ""
            )),
          t.fancybox.open({
            src: a.translate(a, i),
            type: "html",
            opts: {
              touch: !1,
              animationEffect: !1,
              afterLoad: function (e, t) {
                a.$refs.container.one("beforeClose.fb", function () {
                  e.close(null, 0);
                }),
                  t.$content.find(".fancybox-share__button").click(function () {
                    return (
                      window.open(this.href, "Share", "width=550, height=450"),
                      !1
                    );
                  });
              },
              mobile: { autoFocus: !1 },
            },
          }));
      });
  })(document, jQuery),
  (function (e, t, i) {
    "use strict";
    function a() {
      var t = e.location.hash.substr(1),
        i = t.split("-"),
        a =
          (i.length > 1 &&
            /^\+?\d+$/.test(i[i.length - 1]) &&
            parseInt(i.pop(-1), 10)) ||
          1;
      return { hash: t, index: a < 1 ? 1 : a, gallery: i.join("-") };
    }
    function s(e) {
      "" !== e.gallery &&
        i("[data-fancybox='" + i.escapeSelector(e.gallery) + "']")
          .eq(e.index - 1)
          .focus()
          .trigger("click.fb-start");
    }
    function n(e) {
      var t, i;
      return (
        !!e &&
        "" !==
          (i =
            (t = e.current ? e.current.opts : e.opts).hash ||
            (t.$orig
              ? t.$orig.data("fancybox") || t.$orig.data("fancybox-trigger")
              : "")) &&
        i
      );
    }
    i.escapeSelector ||
      (i.escapeSelector = function (e) {
        return (e + "").replace(
          /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
          function (e, t) {
            return t
              ? "\0" === e
                ? "�"
                : e.slice(0, -1) +
                  "\\" +
                  e.charCodeAt(e.length - 1).toString(16) +
                  " "
              : "\\" + e;
          }
        );
      }),
      i(function () {
        !1 !== i.fancybox.defaults.hash &&
          (i(t).on({
            "onInit.fb": function (e, t) {
              var i, s;
              !1 !== t.group[t.currIndex].opts.hash &&
                ((i = a()),
                (s = n(t)) &&
                  i.gallery &&
                  s == i.gallery &&
                  (t.currIndex = i.index - 1));
            },
            "beforeShow.fb": function (i, a, s, o) {
              var r;
              s &&
                !1 !== s.opts.hash &&
                (r = n(a)) &&
                ((a.currentHash =
                  r + (a.group.length > 1 ? "-" + (s.index + 1) : "")),
                e.location.hash !== "#" + a.currentHash &&
                  (o && !a.origHash && (a.origHash = e.location.hash),
                  a.hashTimer && clearTimeout(a.hashTimer),
                  (a.hashTimer = setTimeout(function () {
                    "replaceState" in e.history
                      ? (e.history[o ? "pushState" : "replaceState"](
                          {},
                          t.title,
                          e.location.pathname +
                            e.location.search +
                            "#" +
                            a.currentHash
                        ),
                        o && (a.hasCreatedHistory = !0))
                      : (e.location.hash = a.currentHash),
                      (a.hashTimer = null);
                  }, 300))));
            },
            "beforeClose.fb": function (i, a, s) {
              s &&
                !1 !== s.opts.hash &&
                (clearTimeout(a.hashTimer),
                a.currentHash && a.hasCreatedHistory
                  ? e.history.back()
                  : a.currentHash &&
                    ("replaceState" in e.history
                      ? e.history.replaceState(
                          {},
                          t.title,
                          e.location.pathname +
                            e.location.search +
                            (a.origHash || "")
                        )
                      : (e.location.hash = a.origHash)),
                (a.currentHash = null));
            },
          }),
          i(e).on("hashchange.fb", function () {
            var e = a(),
              t = null;
            i.each(i(".fancybox-container").get().reverse(), function (e, a) {
              var s = i(a).data("FancyBox");
              if (s && s.currentHash) return (t = s), !1;
            }),
              t
                ? t.currentHash === e.gallery + "-" + e.index ||
                  (1 === e.index && t.currentHash == e.gallery) ||
                  ((t.currentHash = null), t.close())
                : "" !== e.gallery && s(e);
          }),
          setTimeout(function () {
            i.fancybox.getInstance() || s(a());
          }, 50));
      });
  })(window, document, jQuery),
  (function (e, t) {
    "use strict";
    var i = new Date().getTime();
    t(e).on({
      "onInit.fb": function (e, t, a) {
        t.$refs.stage.on(
          "mousewheel DOMMouseScroll wheel MozMousePixelScroll",
          function (e) {
            var a = t.current,
              s = new Date().getTime();
            t.group.length < 2 ||
              !1 === a.opts.wheel ||
              ("auto" === a.opts.wheel && "image" !== a.type) ||
              (e.preventDefault(),
              e.stopPropagation(),
              a.$slide.hasClass("fancybox-animated") ||
                ((e = e.originalEvent || e),
                s - i < 250 ||
                  ((i = s),
                  t[
                    (-e.deltaY || -e.deltaX || e.wheelDelta || -e.detail) < 0
                      ? "next"
                      : "previous"
                  ]())));
          }
        );
      },
    });
  })(document, jQuery),
  (jQuery.cookie = function (e, t, i) {
    if (void 0 === t) {
      var a = null;
      if (document.cookie && "" != document.cookie)
        for (var s = document.cookie.split(";"), n = 0; n < s.length; n++) {
          var o = jQuery.trim(s[n]);
          if (o.substring(0, e.length + 1) == e + "=") {
            a = decodeURIComponent(o.substring(e.length + 1));
            break;
          }
        }
      return a;
    }
    (i = i || {}), null === t && ((t = ""), (i.expires = -1));
    var r,
      l = "";
    i.expires &&
      ("number" == typeof i.expires || i.expires.toUTCString) &&
      ("number" == typeof i.expires
        ? (r = new Date()).setTime(r.getTime() + 24 * i.expires * 60 * 60 * 1e3)
        : (r = i.expires),
      (l = "; expires=" + r.toUTCString()));
    var d = i.path ? "; path=" + i.path : "",
      c = i.domain ? "; domain=" + i.domain : "",
      h = i.secure ? "; secure" : "";
    document.cookie = [e, "=", encodeURIComponent(t), l, d, c, h].join("");
  }),
  (function (e, t) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["jquery"], function (e) {
          t(e);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e.EasyZoom = t(require("jquery")))
      : (e.EasyZoom = t(e.jQuery));
  })(this, function (e) {
    "use strict";
    var t,
      i,
      a,
      s,
      n,
      o,
      r = {
        loadingNotice: theme.language.general_validation_loading,
        errorNotice: theme.language.general_validation_error,
        errorDuration: 2500,
        linkAttribute: "href",
        preventClicks: !0,
        beforeShow: e.noop,
        beforeHide: e.noop,
        onShow: e.noop,
        onHide: e.noop,
        onMove: e.noop,
      };
    function l(t, i) {
      (this.$target = e(t)),
        (this.opts = e.extend({}, r, i, this.$target.data())),
        void 0 === this.isOpen && this._init();
    }
    return (
      (l.prototype._init = function () {
        (this.$link = this.$target.find("a")),
          (this.$image = this.$target.find("img")),
          (this.$flyout = e('<div class="easyzoom-flyout" />')),
          (this.$notice = e('<div class="easyzoom-notice" />')),
          this.$target.on({
            "mousemove.easyzoom touchmove.easyzoom": e.proxy(
              this._onMove,
              this
            ),
            "mouseleave.easyzoom touchend.easyzoom": e.proxy(
              this._onLeave,
              this
            ),
            "mouseenter.easyzoom touchstart.easyzoom": e.proxy(
              this._onEnter,
              this
            ),
          }),
          this.opts.preventClicks &&
            this.$target.on("click.easyzoom", function (e) {
              e.preventDefault();
            });
      }),
      (l.prototype.show = function (e, n) {
        var o = this;
        if (!1 !== this.opts.beforeShow.call(this)) {
          if (!this.isReady)
            return this._loadImage(
              this.$link.attr(this.opts.linkAttribute),
              function () {
                (!o.isMouseOver && n) || o.show(e);
              }
            );
          this.$target.append(this.$flyout);
          var r = this.$target.outerWidth(),
            l = this.$target.outerHeight(),
            d = this.$flyout.width(),
            c = this.$flyout.height(),
            h = this.$zoom.width(),
            u = this.$zoom.height();
          (t = h - d) < 0 && (t = 0),
            (i = u - c) < 0 && (i = 0),
            (a = t / r),
            (s = i / l),
            (this.isOpen = !0),
            this.opts.onShow.call(this),
            e && this._move(e);
        }
      }),
      (l.prototype._onEnter = function (e) {
        var t = e.originalEvent.touches;
        (this.isMouseOver = !0),
          (t && 1 != t.length) || (e.preventDefault(), this.show(e, !0));
      }),
      (l.prototype._onMove = function (e) {
        this.isOpen && (e.preventDefault(), this._move(e));
      }),
      (l.prototype._onLeave = function () {
        (this.isMouseOver = !1), this.isOpen && this.hide();
      }),
      (l.prototype._onLoad = function (e) {
        e.currentTarget.width &&
          ((this.isReady = !0),
          this.$notice.detach(),
          this.$flyout.html(this.$zoom),
          this.$target.removeClass("is-loading").addClass("is-ready"),
          e.data.call && e.data());
      }),
      (l.prototype._onError = function () {
        var e = this;
        this.$notice.text(this.opts.errorNotice),
          this.$target.removeClass("is-loading").addClass("is-error"),
          (this.detachNotice = setTimeout(function () {
            e.$notice.detach(), (e.detachNotice = null);
          }, this.opts.errorDuration));
      }),
      (l.prototype._loadImage = function (t, i) {
        var a = new Image();
        this.$target
          .addClass("is-loading")
          .append(this.$notice.text(this.opts.loadingNotice)),
          (this.$zoom = e(a)
            .on("error", e.proxy(this._onError, this))
            .on("load", i, e.proxy(this._onLoad, this))),
          (a.style.position = "absolute"),
          (a.src = t);
      }),
      (l.prototype._move = function (e) {
        if (0 === e.type.indexOf("touch")) {
          var r = e.touches || e.originalEvent.touches;
          (n = r[0].pageX), (o = r[0].pageY);
        } else (n = e.pageX || n), (o = e.pageY || o);
        var l = this.$target.offset(),
          d = o - l.top,
          c = n - l.left,
          h = Math.ceil(d * s),
          u = Math.ceil(c * a);
        if (u < 0 || h < 0 || t < u || i < h) this.hide();
        else {
          var p = -1 * h,
            f = -1 * u;
          this.$zoom.css({ top: p, left: f }),
            this.opts.onMove.call(this, p, f);
        }
      }),
      (l.prototype.hide = function () {
        this.isOpen &&
          !1 !== this.opts.beforeHide.call(this) &&
          (this.$flyout.detach(),
          (this.isOpen = !1),
          this.opts.onHide.call(this));
      }),
      (l.prototype.swap = function (t, i, a) {
        this.hide(),
          (this.isReady = !1),
          this.detachNotice && clearTimeout(this.detachNotice),
          this.$notice.parent().length && this.$notice.detach(),
          this.$target.removeClass("is-loading is-ready is-error"),
          this.$image.attr({ src: t, srcset: e.isArray(a) ? a.join() : a }),
          this.$link.attr(this.opts.linkAttribute, i);
      }),
      (l.prototype.teardown = function () {
        this.hide(),
          this.$target
            .off(".easyzoom")
            .removeClass("is-loading is-ready is-error"),
          this.detachNotice && clearTimeout(this.detachNotice),
          delete this.$link,
          delete this.$zoom,
          delete this.$image,
          delete this.$notice,
          delete this.$flyout,
          delete this.isOpen,
          delete this.isReady;
      }),
      (e.fn.easyZoom = function (t) {
        return this.each(function () {
          var i = e.data(this, "easyZoom");
          i
            ? void 0 === i.isOpen && i._init()
            : e.data(this, "easyZoom", new l(this, t));
        });
      }),
      l
    );
  }),
  (function (e) {
    "function" == typeof define && define.amd
      ? define(["jquery"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("jquery")))
      : e(jQuery);
  })(function (e) {
    e.extend(e.fn, {
      validate: function (t) {
        if (this.length) {
          var i = e.data(this[0], "validator");
          return (
            i ||
            (this.attr("novalidate", "novalidate"),
            (i = new e.validator(t, this[0])),
            e.data(this[0], "validator", i),
            i.settings.onsubmit &&
              (this.on("click.validate", ":submit", function (t) {
                (i.submitButton = t.currentTarget),
                  e(this).hasClass("cancel") && (i.cancelSubmit = !0),
                  void 0 !== e(this).attr("formnovalidate") &&
                    (i.cancelSubmit = !0);
              }),
              this.on("submit.validate", function (t) {
                function a() {
                  var a, s;
                  return (
                    i.submitButton &&
                      (i.settings.submitHandler || i.formSubmitted) &&
                      (a = e("<input type='hidden'/>")
                        .attr("name", i.submitButton.name)
                        .val(e(i.submitButton).val())
                        .appendTo(i.currentForm)),
                    !(i.settings.submitHandler && !i.settings.debug) ||
                      ((s = i.settings.submitHandler.call(i, i.currentForm, t)),
                      a && a.remove(),
                      void 0 !== s && s)
                  );
                }
                return (
                  i.settings.debug && t.preventDefault(),
                  i.cancelSubmit
                    ? ((i.cancelSubmit = !1), a())
                    : i.form()
                    ? i.pendingRequest
                      ? ((i.formSubmitted = !0), !1)
                      : a()
                    : (i.focusInvalid(), !1)
                );
              })),
            i)
          );
        }
        t &&
          t.debug &&
          window.console &&
          console.warn("Nothing selected, can't validate, returning nothing.");
      },
      valid: function () {
        var t, i, a;
        return (
          e(this[0]).is("form")
            ? (t = this.validate().form())
            : ((a = []),
              (t = !0),
              (i = e(this[0].form).validate()),
              this.each(function () {
                (t = i.element(this) && t) || (a = a.concat(i.errorList));
              }),
              (i.errorList = a)),
          t
        );
      },
      rules: function (t, i) {
        var a,
          s,
          n,
          o,
          r,
          l,
          d = this[0],
          c =
            void 0 !== this.attr("contenteditable") &&
            "false" !== this.attr("contenteditable");
        if (
          null != d &&
          (!d.form &&
            c &&
            ((d.form = this.closest("form")[0]), (d.name = this.attr("name"))),
          null != d.form)
        ) {
          if (t)
            switch (
              ((a = e.data(d.form, "validator").settings),
              (s = a.rules),
              (n = e.validator.staticRules(d)),
              t)
            ) {
              case "add":
                e.extend(n, e.validator.normalizeRule(i)),
                  delete n.messages,
                  (s[d.name] = n),
                  i.messages &&
                    (a.messages[d.name] = e.extend(
                      a.messages[d.name],
                      i.messages
                    ));
                break;
              case "remove":
                return i
                  ? ((l = {}),
                    e.each(i.split(/\s/), function (e, t) {
                      (l[t] = n[t]), delete n[t];
                    }),
                    l)
                  : (delete s[d.name], n);
            }
          return (
            (o = e.validator.normalizeRules(
              e.extend(
                {},
                e.validator.classRules(d),
                e.validator.attributeRules(d),
                e.validator.dataRules(d),
                e.validator.staticRules(d)
              ),
              d
            )).required &&
              ((r = o.required),
              delete o.required,
              (o = e.extend({ required: r }, o))),
            o.remote &&
              ((r = o.remote),
              delete o.remote,
              (o = e.extend(o, { remote: r }))),
            o
          );
        }
      },
    }),
      e.extend(e.expr.pseudos || e.expr[":"], {
        blank: function (t) {
          return !e.trim("" + e(t).val());
        },
        filled: function (t) {
          var i = e(t).val();
          return null !== i && !!e.trim("" + i);
        },
        unchecked: function (t) {
          return !e(t).prop("checked");
        },
      }),
      (e.validator = function (t, i) {
        (this.settings = e.extend(!0, {}, e.validator.defaults, t)),
          (this.currentForm = i),
          this.init();
      }),
      (e.validator.format = function (t, i) {
        return 1 === arguments.length
          ? function () {
              var i = e.makeArray(arguments);
              return i.unshift(t), e.validator.format.apply(this, i);
            }
          : (void 0 === i ||
              (arguments.length > 2 &&
                i.constructor !== Array &&
                (i = e.makeArray(arguments).slice(1)),
              i.constructor !== Array && (i = [i]),
              e.each(i, function (e, i) {
                t = t.replace(new RegExp("\\{" + e + "\\}", "g"), function () {
                  return i;
                });
              })),
            t);
      }),
      e.extend(e.validator, {
        defaults: {
          messages: {},
          groups: {},
          rules: {},
          errorClass: "error",
          pendingClass: "pending",
          validClass: "valid",
          errorElement: "label",
          focusCleanup: !1,
          focusInvalid: !0,
          errorContainer: e([]),
          errorLabelContainer: e([]),
          onsubmit: !0,
          ignore: ":hidden",
          ignoreTitle: !1,
          onfocusin: function (e) {
            (this.lastActive = e),
              this.settings.focusCleanup &&
                (this.settings.unhighlight &&
                  this.settings.unhighlight.call(
                    this,
                    e,
                    this.settings.errorClass,
                    this.settings.validClass
                  ),
                this.hideThese(this.errorsFor(e)));
          },
          onfocusout: function (e) {
            this.checkable(e) ||
              (!(e.name in this.submitted) && this.optional(e)) ||
              this.element(e);
          },
          onkeyup: function (t, i) {
            (9 === i.which && "" === this.elementValue(t)) ||
              -1 !==
                e.inArray(
                  i.keyCode,
                  [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]
                ) ||
              ((t.name in this.submitted || t.name in this.invalid) &&
                this.element(t));
          },
          onclick: function (e) {
            e.name in this.submitted
              ? this.element(e)
              : e.parentNode.name in this.submitted &&
                this.element(e.parentNode);
          },
          highlight: function (t, i, a) {
            "radio" === t.type
              ? this.findByName(t.name).addClass(i).removeClass(a)
              : e(t).addClass(i).removeClass(a);
          },
          unhighlight: function (t, i, a) {
            "radio" === t.type
              ? this.findByName(t.name).removeClass(i).addClass(a)
              : e(t).removeClass(i).addClass(a);
          },
        },
        setDefaults: function (t) {
          e.extend(e.validator.defaults, t);
        },
        messages: {
          required: theme.language.general_validation_required,
          remote: theme.language.general_validation_fix_field,
          email: theme.language.general_validation_valid_email,
          url: theme.language.general_validation_valid_url,
          date: theme.language.general_validation_valid_date,
          dateISO: theme.language.general_validation_valid_iso,
          number: theme.language.general_validation_valid_number,
          digits: theme.language.general_validation_only_digits,
          equalTo: theme.language.general_validation_same_value,
          maxlength: e.validator.format(
            theme.language.general_validation_characters_exceed + " {0}"
          ),
          minlength: e.validator.format(
            theme.language.general_validation_characters_min + " {0}"
          ),
          rangelength: e.validator.format(
            theme.language.general_validation_characters_range + " {0} - {1}"
          ),
          range: e.validator.format(
            theme.language.general_validation_value_range + " {0} - {1}"
          ),
          max: e.validator.format(
            theme.language.general_validation_value_less + " {0}"
          ),
          min: e.validator.format(
            theme.language.general_validation_value_greater + " {0}"
          ),
          step: e.validator.format(
            theme.language.general_validation_multiple + " {0}"
          ),
        },
        autoCreateRanges: !1,
        prototype: {
          init: function () {
            function t(t) {
              var i =
                void 0 !== e(this).attr("contenteditable") &&
                "false" !== e(this).attr("contenteditable");
              if (
                (!this.form &&
                  i &&
                  ((this.form = e(this).closest("form")[0]),
                  (this.name = e(this).attr("name"))),
                a === this.form)
              ) {
                var s = e.data(this.form, "validator"),
                  n = "on" + t.type.replace(/^validate/, ""),
                  o = s.settings;
                o[n] && !e(this).is(o.ignore) && o[n].call(s, this, t);
              }
            }
            (this.labelContainer = e(this.settings.errorLabelContainer)),
              (this.errorContext =
                (this.labelContainer.length && this.labelContainer) ||
                e(this.currentForm)),
              (this.containers = e(this.settings.errorContainer).add(
                this.settings.errorLabelContainer
              )),
              (this.submitted = {}),
              (this.valueCache = {}),
              (this.pendingRequest = 0),
              (this.pending = {}),
              (this.invalid = {}),
              this.reset();
            var i,
              a = this.currentForm,
              s = (this.groups = {});
            e.each(this.settings.groups, function (t, i) {
              "string" == typeof i && (i = i.split(/\s/)),
                e.each(i, function (e, i) {
                  s[i] = t;
                });
            }),
              (i = this.settings.rules),
              e.each(i, function (t, a) {
                i[t] = e.validator.normalizeRule(a);
              }),
              e(this.currentForm)
                .on(
                  "focusin.validate focusout.validate keyup.validate",
                  ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",
                  t
                )
                .on(
                  "click.validate",
                  "select, option, [type='radio'], [type='checkbox']",
                  t
                ),
              this.settings.invalidHandler &&
                e(this.currentForm).on(
                  "invalid-form.validate",
                  this.settings.invalidHandler
                );
          },
          form: function () {
            return (
              this.checkForm(),
              e.extend(this.submitted, this.errorMap),
              (this.invalid = e.extend({}, this.errorMap)),
              this.valid() ||
                e(this.currentForm).triggerHandler("invalid-form", [this]),
              this.showErrors(),
              this.valid()
            );
          },
          checkForm: function () {
            this.prepareForm();
            for (
              var e = 0, t = (this.currentElements = this.elements());
              t[e];
              e++
            )
              this.check(t[e]);
            return this.valid();
          },
          element: function (t) {
            var i,
              a,
              s = this.clean(t),
              n = this.validationTargetFor(s),
              o = this,
              r = !0;
            return (
              void 0 === n
                ? delete this.invalid[s.name]
                : (this.prepareElement(n),
                  (this.currentElements = e(n)),
                  (a = this.groups[n.name]) &&
                    e.each(this.groups, function (e, t) {
                      t === a &&
                        e !== n.name &&
                        (s = o.validationTargetFor(o.clean(o.findByName(e)))) &&
                        s.name in o.invalid &&
                        (o.currentElements.push(s), (r = o.check(s) && r));
                    }),
                  (i = !1 !== this.check(n)),
                  (r = r && i),
                  (this.invalid[n.name] = !i),
                  this.numberOfInvalids() ||
                    (this.toHide = this.toHide.add(this.containers)),
                  this.showErrors(),
                  e(t).attr("aria-invalid", !i)),
              r
            );
          },
          showErrors: function (t) {
            if (t) {
              var i = this;
              e.extend(this.errorMap, t),
                (this.errorList = e.map(this.errorMap, function (e, t) {
                  return { message: e, element: i.findByName(t)[0] };
                })),
                (this.successList = e.grep(this.successList, function (e) {
                  return !(e.name in t);
                }));
            }
            this.settings.showErrors
              ? this.settings.showErrors.call(
                  this,
                  this.errorMap,
                  this.errorList
                )
              : this.defaultShowErrors();
          },
          resetForm: function () {
            e.fn.resetForm && e(this.currentForm).resetForm(),
              (this.invalid = {}),
              (this.submitted = {}),
              this.prepareForm(),
              this.hideErrors();
            var t = this.elements()
              .removeData("previousValue")
              .removeAttr("aria-invalid");
            this.resetElements(t);
          },
          resetElements: function (e) {
            var t;
            if (this.settings.unhighlight)
              for (t = 0; e[t]; t++)
                this.settings.unhighlight.call(
                  this,
                  e[t],
                  this.settings.errorClass,
                  ""
                ),
                  this.findByName(e[t].name).removeClass(
                    this.settings.validClass
                  );
            else
              e.removeClass(this.settings.errorClass).removeClass(
                this.settings.validClass
              );
          },
          numberOfInvalids: function () {
            return this.objectLength(this.invalid);
          },
          objectLength: function (e) {
            var t,
              i = 0;
            for (t in e) void 0 !== e[t] && null !== e[t] && !1 !== e[t] && i++;
            return i;
          },
          hideErrors: function () {
            this.hideThese(this.toHide);
          },
          hideThese: function (e) {
            e.not(this.containers).text(""), this.addWrapper(e).hide();
          },
          valid: function () {
            return 0 === this.size();
          },
          size: function () {
            return this.errorList.length;
          },
          focusInvalid: function () {
            if (this.settings.focusInvalid)
              try {
                e(
                  this.findLastActive() ||
                    (this.errorList.length && this.errorList[0].element) ||
                    []
                )
                  .filter(":visible")
                  .trigger("focus")
                  .trigger("focusin");
              } catch (e) {}
          },
          findLastActive: function () {
            var t = this.lastActive;
            return (
              t &&
              1 ===
                e.grep(this.errorList, function (e) {
                  return e.element.name === t.name;
                }).length &&
              t
            );
          },
          elements: function () {
            var t = this,
              i = {};
            return e(this.currentForm)
              .find("input, select, textarea, [contenteditable]")
              .not(":submit, :reset, :image, :disabled")
              .not(this.settings.ignore)
              .filter(function () {
                var a = this.name || e(this).attr("name"),
                  s =
                    void 0 !== e(this).attr("contenteditable") &&
                    "false" !== e(this).attr("contenteditable");
                return (
                  !a &&
                    t.settings.debug &&
                    window.console &&
                    console.error("%o has no name assigned", this),
                  s &&
                    ((this.form = e(this).closest("form")[0]), (this.name = a)),
                  !(
                    this.form !== t.currentForm ||
                    a in i ||
                    !t.objectLength(e(this).rules()) ||
                    ((i[a] = !0), 0)
                  )
                );
              });
          },
          clean: function (t) {
            return e(t)[0];
          },
          errors: function () {
            var t = this.settings.errorClass.split(" ").join(".");
            return e(this.settings.errorElement + "." + t, this.errorContext);
          },
          resetInternals: function () {
            (this.successList = []),
              (this.errorList = []),
              (this.errorMap = {}),
              (this.toShow = e([])),
              (this.toHide = e([]));
          },
          reset: function () {
            this.resetInternals(), (this.currentElements = e([]));
          },
          prepareForm: function () {
            this.reset(), (this.toHide = this.errors().add(this.containers));
          },
          prepareElement: function (e) {
            this.reset(), (this.toHide = this.errorsFor(e));
          },
          elementValue: function (t) {
            var i,
              a,
              s = e(t),
              n = t.type,
              o =
                void 0 !== s.attr("contenteditable") &&
                "false" !== s.attr("contenteditable");
            return "radio" === n || "checkbox" === n
              ? this.findByName(t.name).filter(":checked").val()
              : "number" === n && void 0 !== t.validity
              ? t.validity.badInput
                ? "NaN"
                : s.val()
              : ((i = o ? s.text() : s.val()),
                "file" === n
                  ? "C:\\fakepath\\" === i.substr(0, 12)
                    ? i.substr(12)
                    : (a = i.lastIndexOf("/")) >= 0 ||
                      (a = i.lastIndexOf("\\")) >= 0
                    ? i.substr(a + 1)
                    : i
                  : "string" == typeof i
                  ? i.replace(/\r/g, "")
                  : i);
          },
          check: function (t) {
            t = this.validationTargetFor(this.clean(t));
            var i,
              a,
              s,
              n,
              o = e(t).rules(),
              r = e.map(o, function (e, t) {
                return t;
              }).length,
              l = !1,
              d = this.elementValue(t);
            for (a in ("function" == typeof o.normalizer
              ? (n = o.normalizer)
              : "function" == typeof this.settings.normalizer &&
                (n = this.settings.normalizer),
            n && ((d = n.call(t, d)), delete o.normalizer),
            o)) {
              s = { method: a, parameters: o[a] };
              try {
                if (
                  "dependency-mismatch" ===
                    (i = e.validator.methods[a].call(
                      this,
                      d,
                      t,
                      s.parameters
                    )) &&
                  1 === r
                ) {
                  l = !0;
                  continue;
                }
                if (((l = !1), "pending" === i))
                  return void (this.toHide = this.toHide.not(
                    this.errorsFor(t)
                  ));
                if (!i) return this.formatAndAdd(t, s), !1;
              } catch (e) {
                throw (
                  (this.settings.debug &&
                    window.console &&
                    console.log(
                      "Exception occurred when checking element " +
                        t.id +
                        ", check the '" +
                        s.method +
                        "' method.",
                      e
                    ),
                  e instanceof TypeError &&
                    (e.message +=
                      ".  Exception occurred when checking element " +
                      t.id +
                      ", check the '" +
                      s.method +
                      "' method."),
                  e)
                );
              }
            }
            if (!l) return this.objectLength(o) && this.successList.push(t), !0;
          },
          customDataMessage: function (t, i) {
            return (
              e(t).data(
                "msg" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()
              ) || e(t).data("msg")
            );
          },
          customMessage: function (e, t) {
            var i = this.settings.messages[e];
            return i && (i.constructor === String ? i : i[t]);
          },
          findDefined: function () {
            for (var e = 0; e < arguments.length; e++)
              if (void 0 !== arguments[e]) return arguments[e];
          },
          defaultMessage: function (t, i) {
            "string" == typeof i && (i = { method: i });
            var a = this.findDefined(
                this.customMessage(t.name, i.method),
                this.customDataMessage(t, i.method),
                (!this.settings.ignoreTitle && t.title) || void 0,
                e.validator.messages[i.method],
                "<strong>Warning: No message defined for " +
                  t.name +
                  "</strong>"
              ),
              s = /\$?\{(\d+)\}/g;
            return (
              "function" == typeof a
                ? (a = a.call(this, i.parameters, t))
                : s.test(a) &&
                  (a = e.validator.format(a.replace(s, "{$1}"), i.parameters)),
              a
            );
          },
          formatAndAdd: function (e, t) {
            var i = this.defaultMessage(e, t);
            this.errorList.push({ message: i, element: e, method: t.method }),
              (this.errorMap[e.name] = i),
              (this.submitted[e.name] = i);
          },
          addWrapper: function (e) {
            return (
              this.settings.wrapper &&
                (e = e.add(e.parent(this.settings.wrapper))),
              e
            );
          },
          defaultShowErrors: function () {
            var e, t, i;
            for (e = 0; this.errorList[e]; e++)
              (i = this.errorList[e]),
                this.settings.highlight &&
                  this.settings.highlight.call(
                    this,
                    i.element,
                    this.settings.errorClass,
                    this.settings.validClass
                  ),
                this.showLabel(i.element, i.message);
            if (
              (this.errorList.length &&
                (this.toShow = this.toShow.add(this.containers)),
              this.settings.success)
            )
              for (e = 0; this.successList[e]; e++)
                this.showLabel(this.successList[e]);
            if (this.settings.unhighlight)
              for (e = 0, t = this.validElements(); t[e]; e++)
                this.settings.unhighlight.call(
                  this,
                  t[e],
                  this.settings.errorClass,
                  this.settings.validClass
                );
            (this.toHide = this.toHide.not(this.toShow)),
              this.hideErrors(),
              this.addWrapper(this.toShow).show();
          },
          validElements: function () {
            return this.currentElements.not(this.invalidElements());
          },
          invalidElements: function () {
            return e(this.errorList).map(function () {
              return this.element;
            });
          },
          showLabel: function (t, i) {
            var a,
              s,
              n,
              o,
              r = this.errorsFor(t),
              l = this.idOrName(t),
              d = e(t).attr("aria-describedby");
            r.length
              ? (r
                  .removeClass(this.settings.validClass)
                  .addClass(this.settings.errorClass),
                r.html(i))
              : ((a = r =
                  e("<" + this.settings.errorElement + ">")
                    .attr("id", l + "-error")
                    .addClass(this.settings.errorClass)
                    .html(i || "")),
                this.settings.wrapper &&
                  (a = r
                    .hide()
                    .show()
                    .wrap("<" + this.settings.wrapper + "/>")
                    .parent()),
                this.labelContainer.length
                  ? this.labelContainer.append(a)
                  : this.settings.errorPlacement
                  ? this.settings.errorPlacement.call(this, a, e(t))
                  : a.insertAfter(t),
                r.is("label")
                  ? r.attr("for", l)
                  : 0 ===
                      r.parents("label[for='" + this.escapeCssMeta(l) + "']")
                        .length &&
                    ((n = r.attr("id")),
                    d
                      ? d.match(
                          new RegExp("\\b" + this.escapeCssMeta(n) + "\\b")
                        ) || (d += " " + n)
                      : (d = n),
                    e(t).attr("aria-describedby", d),
                    (s = this.groups[t.name]) &&
                      ((o = this),
                      e.each(o.groups, function (t, i) {
                        i === s &&
                          e(
                            "[name='" + o.escapeCssMeta(t) + "']",
                            o.currentForm
                          ).attr("aria-describedby", r.attr("id"));
                      })))),
              !i &&
                this.settings.success &&
                (r.text(""),
                "string" == typeof this.settings.success
                  ? r.addClass(this.settings.success)
                  : this.settings.success(r, t)),
              (this.toShow = this.toShow.add(r));
          },
          errorsFor: function (t) {
            var i = this.escapeCssMeta(this.idOrName(t)),
              a = e(t).attr("aria-describedby"),
              s = "label[for='" + i + "'], label[for='" + i + "'] *";
            return (
              a &&
                (s = s + ", #" + this.escapeCssMeta(a).replace(/\s+/g, ", #")),
              this.errors().filter(s)
            );
          },
          escapeCssMeta: function (e) {
            return e.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1");
          },
          idOrName: function (e) {
            return (
              this.groups[e.name] ||
              (this.checkable(e) ? e.name : e.id || e.name)
            );
          },
          validationTargetFor: function (t) {
            return (
              this.checkable(t) && (t = this.findByName(t.name)),
              e(t).not(this.settings.ignore)[0]
            );
          },
          checkable: function (e) {
            return /radio|checkbox/i.test(e.type);
          },
          findByName: function (t) {
            return e(this.currentForm).find(
              "[name='" + this.escapeCssMeta(t) + "']"
            );
          },
          getLength: function (t, i) {
            switch (i.nodeName.toLowerCase()) {
              case "select":
                return e("option:selected", i).length;
              case "input":
                if (this.checkable(i))
                  return this.findByName(i.name).filter(":checked").length;
            }
            return t.length;
          },
          depend: function (e, t) {
            return (
              !this.dependTypes[typeof e] || this.dependTypes[typeof e](e, t)
            );
          },
          dependTypes: {
            boolean: function (e) {
              return e;
            },
            string: function (t, i) {
              return !!e(t, i.form).length;
            },
            function: function (e, t) {
              return e(t);
            },
          },
          optional: function (t) {
            var i = this.elementValue(t);
            return (
              !e.validator.methods.required.call(this, i, t) &&
              "dependency-mismatch"
            );
          },
          startRequest: function (t) {
            this.pending[t.name] ||
              (this.pendingRequest++,
              e(t).addClass(this.settings.pendingClass),
              (this.pending[t.name] = !0));
          },
          stopRequest: function (t, i) {
            this.pendingRequest--,
              this.pendingRequest < 0 && (this.pendingRequest = 0),
              delete this.pending[t.name],
              e(t).removeClass(this.settings.pendingClass),
              i &&
              0 === this.pendingRequest &&
              this.formSubmitted &&
              this.form()
                ? (e(this.currentForm).submit(),
                  this.submitButton &&
                    e(
                      "input:hidden[name='" + this.submitButton.name + "']",
                      this.currentForm
                    ).remove(),
                  (this.formSubmitted = !1))
                : !i &&
                  0 === this.pendingRequest &&
                  this.formSubmitted &&
                  (e(this.currentForm).triggerHandler("invalid-form", [this]),
                  (this.formSubmitted = !1));
          },
          previousValue: function (t, i) {
            return (
              (i = ("string" == typeof i && i) || "remote"),
              e.data(t, "previousValue") ||
                e.data(t, "previousValue", {
                  old: null,
                  valid: !0,
                  message: this.defaultMessage(t, { method: i }),
                })
            );
          },
          destroy: function () {
            this.resetForm(),
              e(this.currentForm)
                .off(".validate")
                .removeData("validator")
                .find(".validate-equalTo-blur")
                .off(".validate-equalTo")
                .removeClass("validate-equalTo-blur")
                .find(".validate-lessThan-blur")
                .off(".validate-lessThan")
                .removeClass("validate-lessThan-blur")
                .find(".validate-lessThanEqual-blur")
                .off(".validate-lessThanEqual")
                .removeClass("validate-lessThanEqual-blur")
                .find(".validate-greaterThanEqual-blur")
                .off(".validate-greaterThanEqual")
                .removeClass("validate-greaterThanEqual-blur")
                .find(".validate-greaterThan-blur")
                .off(".validate-greaterThan")
                .removeClass("validate-greaterThan-blur");
          },
        },
        classRuleSettings: {
          required: { required: !0 },
          email: { email: !0 },
          url: { url: !0 },
          date: { date: !0 },
          dateISO: { dateISO: !0 },
          number: { number: !0 },
          digits: { digits: !0 },
          creditcard: { creditcard: !0 },
        },
        addClassRules: function (t, i) {
          t.constructor === String
            ? (this.classRuleSettings[t] = i)
            : e.extend(this.classRuleSettings, t);
        },
        classRules: function (t) {
          var i = {},
            a = e(t).attr("class");
          return (
            a &&
              e.each(a.split(" "), function () {
                this in e.validator.classRuleSettings &&
                  e.extend(i, e.validator.classRuleSettings[this]);
              }),
            i
          );
        },
        normalizeAttributeRule: function (e, t, i, a) {
          /min|max|step/.test(i) &&
            (null === t || /number|range|text/.test(t)) &&
            ((a = Number(a)), isNaN(a) && (a = void 0)),
            a || 0 === a ? (e[i] = a) : t === i && "range" !== t && (e[i] = !0);
        },
        attributeRules: function (t) {
          var i,
            a,
            s = {},
            n = e(t),
            o = t.getAttribute("type");
          for (i in e.validator.methods)
            "required" === i
              ? ("" === (a = t.getAttribute(i)) && (a = !0), (a = !!a))
              : (a = n.attr(i)),
              this.normalizeAttributeRule(s, o, i, a);
          return (
            s.maxlength &&
              /-1|2147483647|524288/.test(s.maxlength) &&
              delete s.maxlength,
            s
          );
        },
        dataRules: function (t) {
          var i,
            a,
            s = {},
            n = e(t),
            o = t.getAttribute("type");
          for (i in e.validator.methods)
            "" ===
              (a = n.data(
                "rule" +
                  i.charAt(0).toUpperCase() +
                  i.substring(1).toLowerCase()
              )) && (a = !0),
              this.normalizeAttributeRule(s, o, i, a);
          return s;
        },
        staticRules: function (t) {
          var i = {},
            a = e.data(t.form, "validator");
          return (
            a.settings.rules &&
              (i = e.validator.normalizeRule(a.settings.rules[t.name]) || {}),
            i
          );
        },
        normalizeRules: function (t, i) {
          return (
            e.each(t, function (a, s) {
              if (!1 !== s) {
                if (s.param || s.depends) {
                  var n = !0;
                  switch (typeof s.depends) {
                    case "string":
                      n = !!e(s.depends, i.form).length;
                      break;
                    case "function":
                      n = s.depends.call(i, i);
                  }
                  n
                    ? (t[a] = void 0 === s.param || s.param)
                    : (e.data(i.form, "validator").resetElements(e(i)),
                      delete t[a]);
                }
              } else delete t[a];
            }),
            e.each(t, function (a, s) {
              t[a] = e.isFunction(s) && "normalizer" !== a ? s(i) : s;
            }),
            e.each(["minlength", "maxlength"], function () {
              t[this] && (t[this] = Number(t[this]));
            }),
            e.each(["rangelength", "range"], function () {
              var i;
              t[this] &&
                (e.isArray(t[this])
                  ? (t[this] = [Number(t[this][0]), Number(t[this][1])])
                  : "string" == typeof t[this] &&
                    ((i = t[this].replace(/[\[\]]/g, "").split(/[\s,]+/)),
                    (t[this] = [Number(i[0]), Number(i[1])])));
            }),
            e.validator.autoCreateRanges &&
              (null != t.min &&
                null != t.max &&
                ((t.range = [t.min, t.max]), delete t.min, delete t.max),
              null != t.minlength &&
                null != t.maxlength &&
                ((t.rangelength = [t.minlength, t.maxlength]),
                delete t.minlength,
                delete t.maxlength)),
            t
          );
        },
        normalizeRule: function (t) {
          if ("string" == typeof t) {
            var i = {};
            e.each(t.split(/\s/), function () {
              i[this] = !0;
            }),
              (t = i);
          }
          return t;
        },
        addMethod: function (t, i, a) {
          (e.validator.methods[t] = i),
            (e.validator.messages[t] =
              void 0 !== a ? a : e.validator.messages[t]),
            i.length < 3 &&
              e.validator.addClassRules(t, e.validator.normalizeRule(t));
        },
        methods: {
          required: function (t, i, a) {
            if (!this.depend(a, i)) return "dependency-mismatch";
            if ("select" === i.nodeName.toLowerCase()) {
              var s = e(i).val();
              return s && s.length > 0;
            }
            return this.checkable(i)
              ? this.getLength(t, i) > 0
              : null != t && t.length > 0;
          },
          email: function (e, t) {
            return (
              this.optional(t) ||
              /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
                e
              )
            );
          },
          url: function (e, t) {
            return (
              this.optional(t) ||
              /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(
                e
              )
            );
          },
          date: (function () {
            var e = !1;
            return function (t, i) {
              return (
                e ||
                  ((e = !0),
                  this.settings.debug &&
                    window.console &&
                    console.warn(
                      "The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`."
                    )),
                this.optional(i) || !/Invalid|NaN/.test(new Date(t).toString())
              );
            };
          })(),
          dateISO: function (e, t) {
            return (
              this.optional(t) ||
              /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(
                e
              )
            );
          },
          number: function (e, t) {
            return (
              this.optional(t) ||
              /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)
            );
          },
          digits: function (e, t) {
            return this.optional(t) || /^\d+$/.test(e);
          },
          minlength: function (t, i, a) {
            var s = e.isArray(t) ? t.length : this.getLength(t, i);
            return this.optional(i) || s >= a;
          },
          maxlength: function (t, i, a) {
            var s = e.isArray(t) ? t.length : this.getLength(t, i);
            return this.optional(i) || s <= a;
          },
          rangelength: function (t, i, a) {
            var s = e.isArray(t) ? t.length : this.getLength(t, i);
            return this.optional(i) || (s >= a[0] && s <= a[1]);
          },
          min: function (e, t, i) {
            return this.optional(t) || e >= i;
          },
          max: function (e, t, i) {
            return this.optional(t) || e <= i;
          },
          range: function (e, t, i) {
            return this.optional(t) || (e >= i[0] && e <= i[1]);
          },
          step: function (t, i, a) {
            var s,
              n = e(i).attr("type"),
              o = "Step attribute on input type " + n + " is not supported.",
              r = new RegExp("\\b" + n + "\\b"),
              l = function (e) {
                var t = ("" + e).match(/(?:\.(\d+))?$/);
                return t && t[1] ? t[1].length : 0;
              },
              d = function (e) {
                return Math.round(e * Math.pow(10, s));
              },
              c = !0;
            if (n && !r.test(["text", "number", "range"].join()))
              throw new Error(o);
            return (
              (s = l(a)),
              (l(t) > s || d(t) % d(a) != 0) && (c = !1),
              this.optional(i) || c
            );
          },
          equalTo: function (t, i, a) {
            var s = e(a);
            return (
              this.settings.onfocusout &&
                s.not(".validate-equalTo-blur").length &&
                s
                  .addClass("validate-equalTo-blur")
                  .on("blur.validate-equalTo", function () {
                    e(i).valid();
                  }),
              t === s.val()
            );
          },
          remote: function (t, i, a, s) {
            if (this.optional(i)) return "dependency-mismatch";
            s = ("string" == typeof s && s) || "remote";
            var n,
              o,
              r,
              l = this.previousValue(i, s);
            return (
              this.settings.messages[i.name] ||
                (this.settings.messages[i.name] = {}),
              (l.originalMessage =
                l.originalMessage || this.settings.messages[i.name][s]),
              (this.settings.messages[i.name][s] = l.message),
              (a = ("string" == typeof a && { url: a }) || a),
              (r = e.param(e.extend({ data: t }, a.data))),
              l.old === r
                ? l.valid
                : ((l.old = r),
                  (n = this),
                  this.startRequest(i),
                  ((o = {})[i.name] = t),
                  e.ajax(
                    e.extend(
                      !0,
                      {
                        mode: "abort",
                        port: "validate" + i.name,
                        dataType: "json",
                        data: o,
                        context: n.currentForm,
                        success: function (e) {
                          var a,
                            o,
                            r,
                            d = !0 === e || "true" === e;
                          (n.settings.messages[i.name][s] = l.originalMessage),
                            d
                              ? ((r = n.formSubmitted),
                                n.resetInternals(),
                                (n.toHide = n.errorsFor(i)),
                                (n.formSubmitted = r),
                                n.successList.push(i),
                                (n.invalid[i.name] = !1),
                                n.showErrors())
                              : ((a = {}),
                                (o =
                                  e ||
                                  n.defaultMessage(i, {
                                    method: s,
                                    parameters: t,
                                  })),
                                (a[i.name] = l.message = o),
                                (n.invalid[i.name] = !0),
                                n.showErrors(a)),
                            (l.valid = d),
                            n.stopRequest(i, d);
                        },
                      },
                      a
                    )
                  ),
                  "pending")
            );
          },
        },
      });
    var t,
      i = {};
    return (
      e.ajaxPrefilter
        ? e.ajaxPrefilter(function (e, t, a) {
            var s = e.port;
            "abort" === e.mode && (i[s] && i[s].abort(), (i[s] = a));
          })
        : ((t = e.ajax),
          (e.ajax = function (a) {
            var s = ("mode" in a ? a : e.ajaxSettings).mode,
              n = ("port" in a ? a : e.ajaxSettings).port;
            return "abort" === s
              ? (i[n] && i[n].abort(), (i[n] = t.apply(this, arguments)), i[n])
              : t.apply(this, arguments);
          })),
      e
    );
  }),
  $(document).ready(function () {
    $("body").on("click", ".close-btn", function (e) {
      e.preventDefault(),
        $(".toggleMenu").trigger("click"),
        $("body").removeClass("activeMobileMenu");
    }),
      $(window).scroll(function () {
        var e = window.scrollY,
          t = $("#shopify-section-header");
        e >= 50 ? t.addClass("sticky_header") : t.removeClass("sticky_header");
      }),
      $(window).trigger("scroll"),
      $("body").on("click", ".additional_details_anchor", function (e) {
        e.preventDefault();
        var t = $(".custom_tabs");
        if (t.length) {
          var i = $("header").innerHeight(),
            a = t.offset().top - i - 20;
          $("body,html").animate({ scrollTop: a }, 1500);
        }
      }),
      $('[data-target="#videoModal"]').fancybox({
        baseClass: "videoModal",
        toolbar: !1,
        smallBtn: !0,
        iframe: { preload: !1 },
      }),
      $('[data-fancybox="images"]').fancybox({
        baseClass: "product-gallery__lightbox",
      }),
      $("body").on("click", ".custom_tabs  .tabs_menu a", function (e) {
        e.preventDefault();
        var t = $(this).closest(".custom_tabs"),
          i = ($(this).attr("data-index"), $(this).attr("data-href")),
          a = t.find(".tabs_menu"),
          s = t.find(".tabs_content");
        a.find("a.active").removeClass("active"),
          s.find(".custom-tab-body-content.active").removeClass("active"),
          t.find(i).addClass("active"),
          $(this).addClass("active");
      }),
      $("body").on("click", ".mobile_accordion_title", function (e) {
        e.preventDefault();
        var t = $(this).closest(".custom_tabs .mobile_tabs"),
          i = ($(this).attr("data-index"), $(this).attr("data-href")),
          a = t.find(".tabs_content");
        $(this).hasClass("active")
          ? (t.find(i).slideUp(), $(this).removeClass("active"))
          : (t
              .find(".custom-tab-body-content.active_tab")
              .slideUp()
              .removeClass("active_tab"),
            a.find(".mobile_accordion_title.active").removeClass("active"),
            t.find(i).addClass("active_tab").slideDown(),
            $(this).addClass("active"));
      }),
      $("body").on(
        "click",
        ".recent-blog  .right-category .blog-subTitle",
        function (e) {
          e.preventDefault(),
            $(window).width() < 992
              ? ($(this).toggleClass("open"),
                $(this).next("#category-list").slideToggle())
              : ($(this).removeClass("open"),
                $(this).next("#category-list").removeAttr("style"));
        }
      ),
      $(".recent-blog  .right-category .blog-subTitle").length &&
        $(window).resize(function () {
          $(window).width() >= 992 &&
            ($(".recent-blog  .right-category .blog-subTitle").removeClass(
              "open"
            ),
            $("#category-list").removeAttr("style"));
        }),
      $(".custom_page_template .main-video #video").length &&
        $("body").on("click", ".play-btn", function (e) {
          e.preventDefault();
          var t = $(this).closest(".main-video").find("iframe"),
            i = t.attr("src");
          (i += "&autoPlay=true"),
            t.addClass("openVideo"),
            t.attr("src", i),
            $(this).hide();
        }),
      $(".custom_page_template .faq-info .nav-tabs").length &&
        ($("body").on(
          "click",
          ".custom_page_template .faq-info .nav-tabs .nav-link",
          function (e) {
            $(this).off(), e.preventDefault();
            var t = $(this).closest(".faq-area"),
              i = $(this).attr("href"),
              a = t.find(".nav-tabs"),
              s = t.find(".tab-content");
            return (
              a.find("a.active").removeClass("active"),
              s
                .find(".card.tab-pane.active.show")
                .removeClass("active")
                .removeClass("show"),
              t.find(i).addClass("active").addClass("show"),
              $(this).addClass("active"),
              !1
            );
          }
        ),
        $("body").on(
          "click",
          ".custom_page_template .tab-pane .card-header",
          function (e) {
            e.preventDefault();
            var t = $(this).closest(".card-area"),
              i = $(this).closest(".card-body"),
              a = $(this).next(".collapse");
            t.hasClass("active")
              ? (a.slideUp(400, function () {
                  $(this).removeClass("show");
                }),
                t.removeClass("active"))
              : (i
                  .find(".card-area.active")
                  .find(".collapse")
                  .slideUp()
                  .removeClass("show"),
                i.find(".card-area.active").removeClass("active"),
                a.slideDown(400, function () {
                  $(this).addClass("show"), t.addClass("active");
                  var e = $("#shopify-section-header header").innerHeight(),
                    i = t.offset().top - e - 15;
                  $("html, body").animate({ scrollTop: i }, 700);
                }));
          }
        ),
        $("body").on("click", ".tab-content .hidetab", function (e) {
          e.preventDefault();
          var t = $(this).closest(".tab-pane"),
            i = $(this).attr("href"),
            a = t.closest(".tab-content");
          t.find('[role="tabpanel"]'),
            $(this).hasClass("collapsed")
              ? (t.find(i).slideUp(400, function () {
                  $(this).removeClass("show");
                }),
                $(this).removeClass("collapsed"))
              : (a.find(".collapse.show").slideUp(400, function () {
                  $(this).removeClass("show");
                }),
                a.find(".hidetab.collapsed").removeClass("collapsed"),
                t.find(i).slideDown(400, function () {
                  $(this).addClass("show");
                }),
                $(this).addClass("collapsed"));
        }),
        $(window).resize(function () {
          $(window).width() >= 992 &&
            $(".custom_page_template .card>.collapse").removeAttr("style");
        })),
      $(".form-group").length &&
        ($("body").on("input", ".form-group input", function (e) {
          return (
            e.preventDefault(),
            $(this).val().length > 0
              ? $(this).attr("data-empty", "false")
              : $(this).attr("data-empty", "true"),
            !1
          );
        }),
        $("body").on("input", ".form-group textarea", function (e) {
          return (
            e.preventDefault(),
            $(this).html().length > 0
              ? $(this).attr("data-empty", "false")
              : $(this).attr("data-empty", "true"),
            !1
          );
        }),
        $(".form-group input").trigger("input"),
        $(".form-group textarea").trigger("input")),
      $(".redbarn-team .list-anchor").length &&
        ($("body").on("click", ".redbarn-team .list-anchor", function (e) {
          e.preventDefault();
          var t = $(this).attr("data-target");
          $(t).length &&
            $(t).fadeIn("slow", function () {
              $("body").addClass("modal-open"), $(this).addClass("show");
            });
        }),
        $("body").on(
          "click",
          ".custom_page_template .close-modal",
          function (e) {
            e.preventDefault();
            var t = $(this).closest(".modal");
            t.removeClass("show"),
              t.fadeOut("slow", function () {
                $("body").removeClass("modal-open");
              });
          }
        ),
        $("body").on("click", ".modal.team", function (e) {
          var t = $(e.target);
          if (t.hasClass("modal-dialog") || t.hasClass("modal")) {
            if (t.hasClass("modal-dialog")) var i = t.closest(".modal");
            else i = t;
            i.removeClass("show"),
              i.fadeOut("slow", function () {
                $("body").removeClass("modal-open");
              });
          }
        }),
        $(".team-modal-scroll").mCustomScrollbar()),
      $("body").on("click", '[data-cookie-set="accept"]', function (e) {
        e.preventDefault(),
          localStorage.setItem("cookie_notice", "true"),
          $("#cookie-notice").fadeOut("100", function () {
            $(this).addClass("hidden");
          });
      }),
      "true" != localStorage.getItem("cookie_notice") &&
        $("#cookie-notice").fadeIn("100", function () {
          $(this).removeClass("hidden");
        });
    var e = $(".custom_page_template .video_with_text .video_block .play_btn");
    e.length &&
      e.on("click", function (e) {
        e.preventDefault();
        var t = $(this).closest(".video_block"),
          i = t.find("iframe"),
          a = i.attr("src");
        (a += "&autoplay=1"), i.attr("src", a), t.addClass("show_video");
      }),
      $(".mobileMenuOverlay").addClass("activeTransition"),
      $(".redbarn-ingredient .input-formArea form").on("submit", function (e) {
        e.preventDefault();
        var t = $(this).find(".form-control").val();
        "" == t
          ? $(".inside-thumb-item.pro-list").show()
          : $(".inside-thumb-item.pro-list").each(function () {
              -1 != $(this).text().trim().indexOf(t)
                ? $(this).show()
                : $(this).hide();
            });
      });
    var t = $(".video_control_btn .video_btn_icon");
    t.length &&
      (t.on("click", function (e) {
        e.preventDefault();
        var t = $(this).closest(".video_control_btn");
        $(this).closest(".video_wrapper").find("video")[0].play(), t.hide();
      }),
      $(".video_wrapper video").on("pause", function (e) {
        $(this).closest(".video_wrapper").find(".video_control_btn").show();
      })),
      $("body").on("click", ".store_locator_link", function (e) {
        e.preventDefault();
        var t = $(this).attr("data-search-params");
        window.location.href =
          "" != t
            ? "https://redbarn-shop.myshopify.com/pages/store-locator?stockist-tags=" +
              t
            : "https://redbarn-shop.myshopify.com/pages/store-locator";
      }),
      $("body").hasClass("template-article") &&
        (function () {
          var e = document.querySelector(".product-recommendations");
          if (null === e)
            return (
              $(".loading").addClass("hidden"),
              void $(".related-product-loop").removeClass("hidden")
            );
          if ("collection_handle" == e.dataset.type)
            theme.swiper_carousel_loop($(".article-template"));
          else {
            var t = e.dataset.productId,
              i = e.dataset.limit,
              a =
                theme.routes_product_recommendations_url +
                "?section_id=product-recommendations&limit=" +
                i +
                "&product_id=" +
                t,
              s = new XMLHttpRequest();
            s.open("GET", a),
              (s.onload = function () {
                if (s.status >= 200 && s.status < 300) {
                  var t = document.createElement("div");
                  (t.innerHTML = s.response),
                    (e.innerHTML = t.querySelector(
                      ".product-recommendations"
                    ).innerHTML),
                    null != t.querySelector(".product-loop-product-template") &&
                      $(".product-loop-product-template").addClass(
                        "product-loop-article-template"
                      ),
                    e.children.length < 2 &&
                      $("#recommended").addClass("hidden"),
                    $(".loading").addClass("hidden"),
                    $(".related-product-loop").removeClass("hidden"),
                    theme.swiper_carousel_loop($(".article-template"));
                }
              }),
              s.send();
          }
        })(),
      $("body").on(
        "click",
        "#cart-notification .modal__close-button",
        function (e) {
          e.preventDefault(),
            $(this).closest("#cart-notification").removeClass("active");
        }
      ),
      $("#cart-count-desktop").on("mouseover", function (e) {
        var t = $("#cart-notification");
        t.length && t.hasClass("active") && t.removeClass("active");
      });
  });
