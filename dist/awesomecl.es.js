import Sr from "react";
var Q = { exports: {} }, z = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Or;
function fe() {
  if (Or) return z;
  Or = 1;
  var k = Sr, h = Symbol.for("react.element"), D = Symbol.for("react.fragment"), y = Object.prototype.hasOwnProperty, C = k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, S = { key: !0, ref: !0, __self: !0, __source: !0 };
  function E(g, c, R) {
    var d, m = {}, x = null, Y = null;
    R !== void 0 && (x = "" + R), c.key !== void 0 && (x = "" + c.key), c.ref !== void 0 && (Y = c.ref);
    for (d in c) y.call(c, d) && !S.hasOwnProperty(d) && (m[d] = c[d]);
    if (g && g.defaultProps) for (d in c = g.defaultProps, c) m[d] === void 0 && (m[d] = c[d]);
    return { $$typeof: h, type: g, key: x, ref: Y, props: m, _owner: C.current };
  }
  return z.Fragment = D, z.jsx = E, z.jsxs = E, z;
}
var I = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cr;
function de() {
  return Cr || (Cr = 1, process.env.NODE_ENV !== "production" && function() {
    var k = Sr, h = Symbol.for("react.element"), D = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), g = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), Y = Symbol.for("react.offscreen"), rr = Symbol.iterator, wr = "@@iterator";
    function Pr(r) {
      if (r === null || typeof r != "object")
        return null;
      var e = rr && r[rr] || r[wr];
      return typeof e == "function" ? e : null;
    }
    var w = k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function f(r) {
      {
        for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
          t[n - 1] = arguments[n];
        jr("error", r, t);
      }
    }
    function jr(r, e, t) {
      {
        var n = w.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (e += "%s", t = t.concat([i]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + e), Function.prototype.apply.call(console[r], console, u);
      }
    }
    var kr = !1, Dr = !1, Fr = !1, $r = !1, Ar = !1, er;
    er = Symbol.for("react.module.reference");
    function zr(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === y || r === S || Ar || r === C || r === R || r === d || $r || r === Y || kr || Dr || Fr || typeof r == "object" && r !== null && (r.$$typeof === x || r.$$typeof === m || r.$$typeof === E || r.$$typeof === g || r.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === er || r.getModuleId !== void 0));
    }
    function Ir(r, e, t) {
      var n = r.displayName;
      if (n)
        return n;
      var i = e.displayName || e.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function tr(r) {
      return r.displayName || "Context";
    }
    function p(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case y:
          return "Fragment";
        case D:
          return "Portal";
        case S:
          return "Profiler";
        case C:
          return "StrictMode";
        case R:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case g:
            var e = r;
            return tr(e) + ".Consumer";
          case E:
            var t = r;
            return tr(t._context) + ".Provider";
          case c:
            return Ir(r, r.render, "ForwardRef");
          case m:
            var n = r.displayName || null;
            return n !== null ? n : p(r.type) || "Memo";
          case x: {
            var i = r, u = i._payload, o = i._init;
            try {
              return p(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var T = Object.assign, F = 0, nr, ar, or, ir, ur, sr, lr;
    function cr() {
    }
    cr.__reactDisabledLog = !0;
    function Wr() {
      {
        if (F === 0) {
          nr = console.log, ar = console.info, or = console.warn, ir = console.error, ur = console.group, sr = console.groupCollapsed, lr = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: cr,
            writable: !0
          };
          Object.defineProperties(console, {
            info: r,
            log: r,
            warn: r,
            error: r,
            group: r,
            groupCollapsed: r,
            groupEnd: r
          });
        }
        F++;
      }
    }
    function Yr() {
      {
        if (F--, F === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: T({}, r, {
              value: nr
            }),
            info: T({}, r, {
              value: ar
            }),
            warn: T({}, r, {
              value: or
            }),
            error: T({}, r, {
              value: ir
            }),
            group: T({}, r, {
              value: ur
            }),
            groupCollapsed: T({}, r, {
              value: sr
            }),
            groupEnd: T({}, r, {
              value: lr
            })
          });
        }
        F < 0 && f("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var U = w.ReactCurrentDispatcher, B;
    function L(r, e, t) {
      {
        if (B === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            B = n && n[1] || "";
          }
        return `
` + B + r;
      }
    }
    var J = !1, N;
    {
      var Lr = typeof WeakMap == "function" ? WeakMap : Map;
      N = new Lr();
    }
    function fr(r, e) {
      if (!r || J)
        return "";
      {
        var t = N.get(r);
        if (t !== void 0)
          return t;
      }
      var n;
      J = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = U.current, U.current = null, Wr();
      try {
        if (e) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (_) {
              n = _;
            }
            Reflect.construct(r, [], o);
          } else {
            try {
              o.call();
            } catch (_) {
              n = _;
            }
            r.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_) {
            n = _;
          }
          r();
        }
      } catch (_) {
        if (_ && n && typeof _.stack == "string") {
          for (var a = _.stack.split(`
`), v = n.stack.split(`
`), s = a.length - 1, l = v.length - 1; s >= 1 && l >= 0 && a[s] !== v[l]; )
            l--;
          for (; s >= 1 && l >= 0; s--, l--)
            if (a[s] !== v[l]) {
              if (s !== 1 || l !== 1)
                do
                  if (s--, l--, l < 0 || a[s] !== v[l]) {
                    var b = `
` + a[s].replace(" at new ", " at ");
                    return r.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", r.displayName)), typeof r == "function" && N.set(r, b), b;
                  }
                while (s >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        J = !1, U.current = u, Yr(), Error.prepareStackTrace = i;
      }
      var j = r ? r.displayName || r.name : "", O = j ? L(j) : "";
      return typeof r == "function" && N.set(r, O), O;
    }
    function Nr(r, e, t) {
      return fr(r, !1);
    }
    function Vr(r) {
      var e = r.prototype;
      return !!(e && e.isReactComponent);
    }
    function V(r, e, t) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return fr(r, Vr(r));
      if (typeof r == "string")
        return L(r);
      switch (r) {
        case R:
          return L("Suspense");
        case d:
          return L("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case c:
            return Nr(r.render);
          case m:
            return V(r.type, e, t);
          case x: {
            var n = r, i = n._payload, u = n._init;
            try {
              return V(u(i), e, t);
            } catch {
            }
          }
        }
      return "";
    }
    var $ = Object.prototype.hasOwnProperty, dr = {}, vr = w.ReactDebugCurrentFrame;
    function M(r) {
      if (r) {
        var e = r._owner, t = V(r.type, r._source, e ? e.type : null);
        vr.setExtraStackFrame(t);
      } else
        vr.setExtraStackFrame(null);
    }
    function Mr(r, e, t, n, i) {
      {
        var u = Function.call.bind($);
        for (var o in r)
          if (u(r, o)) {
            var a = void 0;
            try {
              if (typeof r[o] != "function") {
                var v = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              a = r[o](e, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              a = s;
            }
            a && !(a instanceof Error) && (M(i), f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), M(null)), a instanceof Error && !(a.message in dr) && (dr[a.message] = !0, M(i), f("Failed %s type: %s", t, a.message), M(null));
          }
      }
    }
    var Ur = Array.isArray;
    function q(r) {
      return Ur(r);
    }
    function Br(r) {
      {
        var e = typeof Symbol == "function" && Symbol.toStringTag, t = e && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return t;
      }
    }
    function Jr(r) {
      try {
        return _r(r), !1;
      } catch {
        return !0;
      }
    }
    function _r(r) {
      return "" + r;
    }
    function br(r) {
      if (Jr(r))
        return f("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Br(r)), _r(r);
    }
    var A = w.ReactCurrentOwner, qr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, pr, gr, K;
    K = {};
    function Kr(r) {
      if ($.call(r, "ref")) {
        var e = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (e && e.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function Gr(r) {
      if ($.call(r, "key")) {
        var e = Object.getOwnPropertyDescriptor(r, "key").get;
        if (e && e.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function Xr(r, e) {
      if (typeof r.ref == "string" && A.current && e && A.current.stateNode !== e) {
        var t = p(A.current.type);
        K[t] || (f('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', p(A.current.type), r.ref), K[t] = !0);
      }
    }
    function Hr(r, e) {
      {
        var t = function() {
          pr || (pr = !0, f("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", e));
        };
        t.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Zr(r, e) {
      {
        var t = function() {
          gr || (gr = !0, f("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", e));
        };
        t.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Qr = function(r, e, t, n, i, u, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: h,
        // Built-in properties that belong on the element
        type: r,
        key: e,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function re(r, e, t, n, i) {
      {
        var u, o = {}, a = null, v = null;
        t !== void 0 && (br(t), a = "" + t), Gr(e) && (br(e.key), a = "" + e.key), Kr(e) && (v = e.ref, Xr(e, i));
        for (u in e)
          $.call(e, u) && !qr.hasOwnProperty(u) && (o[u] = e[u]);
        if (r && r.defaultProps) {
          var s = r.defaultProps;
          for (u in s)
            o[u] === void 0 && (o[u] = s[u]);
        }
        if (a || v) {
          var l = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          a && Hr(o, l), v && Zr(o, l);
        }
        return Qr(r, a, v, i, n, A.current, o);
      }
    }
    var G = w.ReactCurrentOwner, mr = w.ReactDebugCurrentFrame;
    function P(r) {
      if (r) {
        var e = r._owner, t = V(r.type, r._source, e ? e.type : null);
        mr.setExtraStackFrame(t);
      } else
        mr.setExtraStackFrame(null);
    }
    var X;
    X = !1;
    function H(r) {
      return typeof r == "object" && r !== null && r.$$typeof === h;
    }
    function yr() {
      {
        if (G.current) {
          var r = p(G.current.type);
          if (r)
            return `

Check the render method of \`` + r + "`.";
        }
        return "";
      }
    }
    function ee(r) {
      return "";
    }
    var hr = {};
    function te(r) {
      {
        var e = yr();
        if (!e) {
          var t = typeof r == "string" ? r : r.displayName || r.name;
          t && (e = `

Check the top-level render call using <` + t + ">.");
        }
        return e;
      }
    }
    function Er(r, e) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var t = te(e);
        if (hr[t])
          return;
        hr[t] = !0;
        var n = "";
        r && r._owner && r._owner !== G.current && (n = " It was passed a child from " + p(r._owner.type) + "."), P(r), f('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), P(null);
      }
    }
    function Rr(r, e) {
      {
        if (typeof r != "object")
          return;
        if (q(r))
          for (var t = 0; t < r.length; t++) {
            var n = r[t];
            H(n) && Er(n, e);
          }
        else if (H(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var i = Pr(r);
          if (typeof i == "function" && i !== r.entries)
            for (var u = i.call(r), o; !(o = u.next()).done; )
              H(o.value) && Er(o.value, e);
        }
      }
    }
    function ne(r) {
      {
        var e = r.type;
        if (e == null || typeof e == "string")
          return;
        var t;
        if (typeof e == "function")
          t = e.propTypes;
        else if (typeof e == "object" && (e.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        e.$$typeof === m))
          t = e.propTypes;
        else
          return;
        if (t) {
          var n = p(e);
          Mr(t, r.props, "prop", n, r);
        } else if (e.PropTypes !== void 0 && !X) {
          X = !0;
          var i = p(e);
          f("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof e.getDefaultProps == "function" && !e.getDefaultProps.isReactClassApproved && f("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ae(r) {
      {
        for (var e = Object.keys(r.props), t = 0; t < e.length; t++) {
          var n = e[t];
          if (n !== "children" && n !== "key") {
            P(r), f("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), P(null);
            break;
          }
        }
        r.ref !== null && (P(r), f("Invalid attribute `ref` supplied to `React.Fragment`."), P(null));
      }
    }
    var xr = {};
    function Tr(r, e, t, n, i, u) {
      {
        var o = zr(r);
        if (!o) {
          var a = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var v = ee();
          v ? a += v : a += yr();
          var s;
          r === null ? s = "null" : q(r) ? s = "array" : r !== void 0 && r.$$typeof === h ? (s = "<" + (p(r.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof r, f("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
        }
        var l = re(r, e, t, i, u);
        if (l == null)
          return l;
        if (o) {
          var b = e.children;
          if (b !== void 0)
            if (n)
              if (q(b)) {
                for (var j = 0; j < b.length; j++)
                  Rr(b[j], r);
                Object.freeze && Object.freeze(b);
              } else
                f("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Rr(b, r);
        }
        if ($.call(e, "key")) {
          var O = p(r), _ = Object.keys(e).filter(function(ce) {
            return ce !== "key";
          }), Z = _.length > 0 ? "{key: someKey, " + _.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!xr[O + Z]) {
            var le = _.length > 0 ? "{" + _.join(": ..., ") + ": ...}" : "{}";
            f(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Z, O, le, O), xr[O + Z] = !0;
          }
        }
        return r === y ? ae(l) : ne(l), l;
      }
    }
    function oe(r, e, t) {
      return Tr(r, e, t, !0);
    }
    function ie(r, e, t) {
      return Tr(r, e, t, !1);
    }
    var ue = ie, se = oe;
    I.Fragment = y, I.jsx = ue, I.jsxs = se;
  }()), I;
}
process.env.NODE_ENV === "production" ? Q.exports = fe() : Q.exports = de();
var ve = Q.exports;
const _e = "_button_czb8x_71", W = {
  button: _e,
  "size-sm": "_size-sm_czb8x_79",
  "size-md": "_size-md_czb8x_84",
  "size-lg": "_size-lg_czb8x_89",
  "radius-none": "_radius-none_czb8x_95",
  "radius-sm": "_radius-sm_czb8x_99",
  "radius-md": "_radius-md_czb8x_103",
  "radius-lg": "_radius-lg_czb8x_107",
  "radius-full": "_radius-full_czb8x_111",
  "border-none": "_border-none_czb8x_116",
  "border-xs": "_border-xs_czb8x_120",
  "border-sm": "_border-sm_czb8x_124",
  "border-md": "_border-md_czb8x_128",
  "border-lg": "_border-lg_czb8x_132",
  "border-xl": "_border-xl_czb8x_136",
  "color-primary": "_color-primary_czb8x_141",
  "color-default": "_color-default_czb8x_147",
  "color-secondary": "_color-secondary_czb8x_153",
  "color-success": "_color-success_czb8x_159",
  "color-warning": "_color-warning_czb8x_165",
  "color-danger": "_color-danger_czb8x_171"
}, pe = ({
  children: k,
  aria: h = "button",
  color: D = "primary",
  onClick: y,
  style: C,
  size: S = "md",
  radius: E = "none",
  border: g = "none",
  className: c = ""
}) => {
  const d = `${`
  ${W.button} 
  ${W[`border-${g}`]} 
  ${W[`radius-${E}`]} 
  ${W[`color-${D}`]} 
  ${W[`size-${S}`]} 
  `.trim()} ${c}`.trim();
  return /* @__PURE__ */ ve.jsx(
    "button",
    {
      onClick: y,
      style: C,
      className: d,
      "aria-label": h,
      children: k
    }
  );
};
export {
  pe as Button
};