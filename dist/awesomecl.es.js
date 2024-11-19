var Ko = Object.defineProperty;
var Uo = (n, a, t) => a in n ? Ko(n, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[a] = t;
var S = (n, a, t) => Uo(n, typeof a != "symbol" ? a + "" : a, t);
import * as Y from "react";
import _, { useState as it, cloneElement as _n, useLayoutEffect as Ya, useEffect as gn, createElement as Xo, Component as pe, createRef as et, useRef as on, useCallback as Go } from "react";
import * as Jo from "react-dom";
import Zo from "react-dom";
var sn = { exports: {} }, Nt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kn;
function es() {
  if (Kn) return Nt;
  Kn = 1;
  var n = _, a = Symbol.for("react.element"), t = Symbol.for("react.fragment"), e = Object.prototype.hasOwnProperty, r = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(i, c, l) {
    var u, d = {}, p = null, m = null;
    l !== void 0 && (p = "" + l), c.key !== void 0 && (p = "" + c.key), c.ref !== void 0 && (m = c.ref);
    for (u in c) e.call(c, u) && !o.hasOwnProperty(u) && (d[u] = c[u]);
    if (i && i.defaultProps) for (u in c = i.defaultProps, c) d[u] === void 0 && (d[u] = c[u]);
    return { $$typeof: a, type: i, key: p, ref: m, props: d, _owner: r.current };
  }
  return Nt.Fragment = t, Nt.jsx = s, Nt.jsxs = s, Nt;
}
var Rt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Un;
function ts() {
  return Un || (Un = 1, process.env.NODE_ENV !== "production" && function() {
    var n = _, a = Symbol.for("react.element"), t = Symbol.for("react.portal"), e = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), h = Symbol.iterator, g = "@@iterator";
    function v(f) {
      if (f === null || typeof f != "object")
        return null;
      var w = h && f[h] || f[g];
      return typeof w == "function" ? w : null;
    }
    var b = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function D(f) {
      {
        for (var w = arguments.length, C = new Array(w > 1 ? w - 1 : 0), I = 1; I < w; I++)
          C[I - 1] = arguments[I];
        k("error", f, C);
      }
    }
    function k(f, w, C) {
      {
        var I = b.ReactDebugCurrentFrame, G = I.getStackAddendum();
        G !== "" && (w += "%s", C = C.concat([G]));
        var te = C.map(function(q) {
          return String(q);
        });
        te.unshift("Warning: " + w), Function.prototype.apply.call(console[f], console, te);
      }
    }
    var T = !1, N = !1, L = !1, M = !1, P = !1, O;
    O = Symbol.for("react.module.reference");
    function z(f) {
      return !!(typeof f == "string" || typeof f == "function" || f === e || f === o || P || f === r || f === l || f === u || M || f === m || T || N || L || typeof f == "object" && f !== null && (f.$$typeof === p || f.$$typeof === d || f.$$typeof === s || f.$$typeof === i || f.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      f.$$typeof === O || f.getModuleId !== void 0));
    }
    function U(f, w, C) {
      var I = f.displayName;
      if (I)
        return I;
      var G = w.displayName || w.name || "";
      return G !== "" ? C + "(" + G + ")" : C;
    }
    function H(f) {
      return f.displayName || "Context";
    }
    function j(f) {
      if (f == null)
        return null;
      if (typeof f.tag == "number" && D("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof f == "function")
        return f.displayName || f.name || null;
      if (typeof f == "string")
        return f;
      switch (f) {
        case e:
          return "Fragment";
        case t:
          return "Portal";
        case o:
          return "Profiler";
        case r:
          return "StrictMode";
        case l:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case i:
            var w = f;
            return H(w) + ".Consumer";
          case s:
            var C = f;
            return H(C._context) + ".Provider";
          case c:
            return U(f, f.render, "ForwardRef");
          case d:
            var I = f.displayName || null;
            return I !== null ? I : j(f.type) || "Memo";
          case p: {
            var G = f, te = G._payload, q = G._init;
            try {
              return j(q(te));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var B = Object.assign, Q = 0, R, A, F, ae, be, we, Nn;
    function Rn() {
    }
    Rn.__reactDisabledLog = !0;
    function yo() {
      {
        if (Q === 0) {
          R = console.log, A = console.info, F = console.warn, ae = console.error, be = console.group, we = console.groupCollapsed, Nn = console.groupEnd;
          var f = {
            configurable: !0,
            enumerable: !0,
            value: Rn,
            writable: !0
          };
          Object.defineProperties(console, {
            info: f,
            log: f,
            warn: f,
            error: f,
            group: f,
            groupCollapsed: f,
            groupEnd: f
          });
        }
        Q++;
      }
    }
    function Do() {
      {
        if (Q--, Q === 0) {
          var f = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: B({}, f, {
              value: R
            }),
            info: B({}, f, {
              value: A
            }),
            warn: B({}, f, {
              value: F
            }),
            error: B({}, f, {
              value: ae
            }),
            group: B({}, f, {
              value: be
            }),
            groupCollapsed: B({}, f, {
              value: we
            }),
            groupEnd: B({}, f, {
              value: Nn
            })
          });
        }
        Q < 0 && D("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Wr = b.ReactCurrentDispatcher, $r;
    function Gt(f, w, C) {
      {
        if ($r === void 0)
          try {
            throw Error();
          } catch (G) {
            var I = G.stack.trim().match(/\n( *(at )?)/);
            $r = I && I[1] || "";
          }
        return `
` + $r + f;
      }
    }
    var zr = !1, Jt;
    {
      var ko = typeof WeakMap == "function" ? WeakMap : Map;
      Jt = new ko();
    }
    function Yn(f, w) {
      if (!f || zr)
        return "";
      {
        var C = Jt.get(f);
        if (C !== void 0)
          return C;
      }
      var I;
      zr = !0;
      var G = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var te;
      te = Wr.current, Wr.current = null, yo();
      try {
        if (w) {
          var q = function() {
            throw Error();
          };
          if (Object.defineProperty(q.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(q, []);
            } catch (ye) {
              I = ye;
            }
            Reflect.construct(f, [], q);
          } else {
            try {
              q.call();
            } catch (ye) {
              I = ye;
            }
            f.call(q.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ye) {
            I = ye;
          }
          f();
        }
      } catch (ye) {
        if (ye && I && typeof ye.stack == "string") {
          for (var $ = ye.stack.split(`
`), he = I.stack.split(`
`), ie = $.length - 1, ue = he.length - 1; ie >= 1 && ue >= 0 && $[ie] !== he[ue]; )
            ue--;
          for (; ie >= 1 && ue >= 0; ie--, ue--)
            if ($[ie] !== he[ue]) {
              if (ie !== 1 || ue !== 1)
                do
                  if (ie--, ue--, ue < 0 || $[ie] !== he[ue]) {
                    var Ce = `
` + $[ie].replace(" at new ", " at ");
                    return f.displayName && Ce.includes("<anonymous>") && (Ce = Ce.replace("<anonymous>", f.displayName)), typeof f == "function" && Jt.set(f, Ce), Ce;
                  }
                while (ie >= 1 && ue >= 0);
              break;
            }
        }
      } finally {
        zr = !1, Wr.current = te, Do(), Error.prepareStackTrace = G;
      }
      var _t = f ? f.displayName || f.name : "", nt = _t ? Gt(_t) : "";
      return typeof f == "function" && Jt.set(f, nt), nt;
    }
    function xo(f, w, C) {
      return Yn(f, !1);
    }
    function Co(f) {
      var w = f.prototype;
      return !!(w && w.isReactComponent);
    }
    function Zt(f, w, C) {
      if (f == null)
        return "";
      if (typeof f == "function")
        return Yn(f, Co(f));
      if (typeof f == "string")
        return Gt(f);
      switch (f) {
        case l:
          return Gt("Suspense");
        case u:
          return Gt("SuspenseList");
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case c:
            return xo(f.render);
          case d:
            return Zt(f.type, w, C);
          case p: {
            var I = f, G = I._payload, te = I._init;
            try {
              return Zt(te(G), w, C);
            } catch {
            }
          }
        }
      return "";
    }
    var Ot = Object.prototype.hasOwnProperty, In = {}, Fn = b.ReactDebugCurrentFrame;
    function er(f) {
      if (f) {
        var w = f._owner, C = Zt(f.type, f._source, w ? w.type : null);
        Fn.setExtraStackFrame(C);
      } else
        Fn.setExtraStackFrame(null);
    }
    function Mo(f, w, C, I, G) {
      {
        var te = Function.call.bind(Ot);
        for (var q in f)
          if (te(f, q)) {
            var $ = void 0;
            try {
              if (typeof f[q] != "function") {
                var he = Error((I || "React class") + ": " + C + " type `" + q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof f[q] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw he.name = "Invariant Violation", he;
              }
              $ = f[q](w, q, I, C, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ie) {
              $ = ie;
            }
            $ && !($ instanceof Error) && (er(G), D("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", I || "React class", C, q, typeof $), er(null)), $ instanceof Error && !($.message in In) && (In[$.message] = !0, er(G), D("Failed %s type: %s", C, $.message), er(null));
          }
      }
    }
    var Eo = Array.isArray;
    function Hr(f) {
      return Eo(f);
    }
    function So(f) {
      {
        var w = typeof Symbol == "function" && Symbol.toStringTag, C = w && f[Symbol.toStringTag] || f.constructor.name || "Object";
        return C;
      }
    }
    function Po(f) {
      try {
        return Ln(f), !1;
      } catch {
        return !0;
      }
    }
    function Ln(f) {
      return "" + f;
    }
    function An(f) {
      if (Po(f))
        return D("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", So(f)), Ln(f);
    }
    var Tt = b.ReactCurrentOwner, Oo = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, jn, Wn, Br;
    Br = {};
    function To(f) {
      if (Ot.call(f, "ref")) {
        var w = Object.getOwnPropertyDescriptor(f, "ref").get;
        if (w && w.isReactWarning)
          return !1;
      }
      return f.ref !== void 0;
    }
    function No(f) {
      if (Ot.call(f, "key")) {
        var w = Object.getOwnPropertyDescriptor(f, "key").get;
        if (w && w.isReactWarning)
          return !1;
      }
      return f.key !== void 0;
    }
    function Ro(f, w) {
      if (typeof f.ref == "string" && Tt.current && w && Tt.current.stateNode !== w) {
        var C = j(Tt.current.type);
        Br[C] || (D('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', j(Tt.current.type), f.ref), Br[C] = !0);
      }
    }
    function Yo(f, w) {
      {
        var C = function() {
          jn || (jn = !0, D("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        C.isReactWarning = !0, Object.defineProperty(f, "key", {
          get: C,
          configurable: !0
        });
      }
    }
    function Io(f, w) {
      {
        var C = function() {
          Wn || (Wn = !0, D("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        C.isReactWarning = !0, Object.defineProperty(f, "ref", {
          get: C,
          configurable: !0
        });
      }
    }
    var Fo = function(f, w, C, I, G, te, q) {
      var $ = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: f,
        key: w,
        ref: C,
        props: q,
        // Record the component responsible for creating this element.
        _owner: te
      };
      return $._store = {}, Object.defineProperty($._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty($, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: I
      }), Object.defineProperty($, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: G
      }), Object.freeze && (Object.freeze($.props), Object.freeze($)), $;
    };
    function Lo(f, w, C, I, G) {
      {
        var te, q = {}, $ = null, he = null;
        C !== void 0 && (An(C), $ = "" + C), No(w) && (An(w.key), $ = "" + w.key), To(w) && (he = w.ref, Ro(w, G));
        for (te in w)
          Ot.call(w, te) && !Oo.hasOwnProperty(te) && (q[te] = w[te]);
        if (f && f.defaultProps) {
          var ie = f.defaultProps;
          for (te in ie)
            q[te] === void 0 && (q[te] = ie[te]);
        }
        if ($ || he) {
          var ue = typeof f == "function" ? f.displayName || f.name || "Unknown" : f;
          $ && Yo(q, ue), he && Io(q, ue);
        }
        return Fo(f, $, he, G, I, Tt.current, q);
      }
    }
    var Qr = b.ReactCurrentOwner, $n = b.ReactDebugCurrentFrame;
    function ht(f) {
      if (f) {
        var w = f._owner, C = Zt(f.type, f._source, w ? w.type : null);
        $n.setExtraStackFrame(C);
      } else
        $n.setExtraStackFrame(null);
    }
    var qr;
    qr = !1;
    function Vr(f) {
      return typeof f == "object" && f !== null && f.$$typeof === a;
    }
    function zn() {
      {
        if (Qr.current) {
          var f = j(Qr.current.type);
          if (f)
            return `

Check the render method of \`` + f + "`.";
        }
        return "";
      }
    }
    function Ao(f) {
      return "";
    }
    var Hn = {};
    function jo(f) {
      {
        var w = zn();
        if (!w) {
          var C = typeof f == "string" ? f : f.displayName || f.name;
          C && (w = `

Check the top-level render call using <` + C + ">.");
        }
        return w;
      }
    }
    function Bn(f, w) {
      {
        if (!f._store || f._store.validated || f.key != null)
          return;
        f._store.validated = !0;
        var C = jo(w);
        if (Hn[C])
          return;
        Hn[C] = !0;
        var I = "";
        f && f._owner && f._owner !== Qr.current && (I = " It was passed a child from " + j(f._owner.type) + "."), ht(f), D('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', C, I), ht(null);
      }
    }
    function Qn(f, w) {
      {
        if (typeof f != "object")
          return;
        if (Hr(f))
          for (var C = 0; C < f.length; C++) {
            var I = f[C];
            Vr(I) && Bn(I, w);
          }
        else if (Vr(f))
          f._store && (f._store.validated = !0);
        else if (f) {
          var G = v(f);
          if (typeof G == "function" && G !== f.entries)
            for (var te = G.call(f), q; !(q = te.next()).done; )
              Vr(q.value) && Bn(q.value, w);
        }
      }
    }
    function Wo(f) {
      {
        var w = f.type;
        if (w == null || typeof w == "string")
          return;
        var C;
        if (typeof w == "function")
          C = w.propTypes;
        else if (typeof w == "object" && (w.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        w.$$typeof === d))
          C = w.propTypes;
        else
          return;
        if (C) {
          var I = j(w);
          Mo(C, f.props, "prop", I, f);
        } else if (w.PropTypes !== void 0 && !qr) {
          qr = !0;
          var G = j(w);
          D("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", G || "Unknown");
        }
        typeof w.getDefaultProps == "function" && !w.getDefaultProps.isReactClassApproved && D("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function $o(f) {
      {
        for (var w = Object.keys(f.props), C = 0; C < w.length; C++) {
          var I = w[C];
          if (I !== "children" && I !== "key") {
            ht(f), D("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", I), ht(null);
            break;
          }
        }
        f.ref !== null && (ht(f), D("Invalid attribute `ref` supplied to `React.Fragment`."), ht(null));
      }
    }
    var qn = {};
    function Vn(f, w, C, I, G, te) {
      {
        var q = z(f);
        if (!q) {
          var $ = "";
          (f === void 0 || typeof f == "object" && f !== null && Object.keys(f).length === 0) && ($ += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var he = Ao();
          he ? $ += he : $ += zn();
          var ie;
          f === null ? ie = "null" : Hr(f) ? ie = "array" : f !== void 0 && f.$$typeof === a ? (ie = "<" + (j(f.type) || "Unknown") + " />", $ = " Did you accidentally export a JSX literal instead of a component?") : ie = typeof f, D("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ie, $);
        }
        var ue = Lo(f, w, C, G, te);
        if (ue == null)
          return ue;
        if (q) {
          var Ce = w.children;
          if (Ce !== void 0)
            if (I)
              if (Hr(Ce)) {
                for (var _t = 0; _t < Ce.length; _t++)
                  Qn(Ce[_t], f);
                Object.freeze && Object.freeze(Ce);
              } else
                D("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Qn(Ce, f);
        }
        if (Ot.call(w, "key")) {
          var nt = j(f), ye = Object.keys(w).filter(function(Vo) {
            return Vo !== "key";
          }), Kr = ye.length > 0 ? "{key: someKey, " + ye.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!qn[nt + Kr]) {
            var qo = ye.length > 0 ? "{" + ye.join(": ..., ") + ": ...}" : "{}";
            D(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Kr, nt, qo, nt), qn[nt + Kr] = !0;
          }
        }
        return f === e ? $o(ue) : Wo(ue), ue;
      }
    }
    function zo(f, w, C) {
      return Vn(f, w, C, !0);
    }
    function Ho(f, w, C) {
      return Vn(f, w, C, !1);
    }
    var Bo = Ho, Qo = zo;
    Rt.Fragment = e, Rt.jsx = Bo, Rt.jsxs = Qo;
  }()), Rt;
}
process.env.NODE_ENV === "production" ? sn.exports = es() : sn.exports = ts();
var y = sn.exports;
const rs = "_button_1wnfs_110", Yt = {
  button: rs,
  "size-sm": "_size-sm_1wnfs_118",
  "size-md": "_size-md_1wnfs_123",
  "size-lg": "_size-lg_1wnfs_128",
  "radius-none": "_radius-none_1wnfs_134",
  "radius-sm": "_radius-sm_1wnfs_138",
  "radius-md": "_radius-md_1wnfs_142",
  "radius-lg": "_radius-lg_1wnfs_146",
  "radius-full": "_radius-full_1wnfs_150",
  "border-none": "_border-none_1wnfs_155",
  "border-xs": "_border-xs_1wnfs_159",
  "border-sm": "_border-sm_1wnfs_163",
  "border-md": "_border-md_1wnfs_167",
  "border-lg": "_border-lg_1wnfs_171",
  "border-xl": "_border-xl_1wnfs_175",
  "color-primary": "_color-primary_1wnfs_180",
  "color-default": "_color-default_1wnfs_186",
  "color-secondary": "_color-secondary_1wnfs_192",
  "color-success": "_color-success_1wnfs_198",
  "color-warning": "_color-warning_1wnfs_204",
  "color-danger": "_color-danger_1wnfs_210"
}, ns = ({
  children: n,
  aria: a = "button",
  color: t = "primary",
  onClick: e,
  style: r,
  size: o = "md",
  radius: s = "none",
  border: i = "none",
  className: c = ""
}) => {
  const u = `${`
  ${Yt.button} 
  ${Yt[`border-${i}`]} 
  ${Yt[`radius-${s}`]} 
  ${Yt[`color-${t}`]} 
  ${Yt[`size-${o}`]} 
  `.trim()} ${c}`.trim();
  return /* @__PURE__ */ y.jsx(
    "button",
    {
      onClick: e,
      style: r,
      className: u,
      "aria-label": a,
      children: n
    }
  );
}, as = "_label_1rby4_109", os = "_input_1rby4_113", $e = {
  label: as,
  "input-wrapper": "_input-wrapper_1rby4_113",
  "input-wrapper-inline": "_input-wrapper-inline_1rby4_118",
  "label-outside": "_label-outside_1rby4_123",
  "label-outside-left": "_label-outside-left_1rby4_129",
  input: os,
  "size-sm": "_size-sm_1rby4_140",
  "size-md": "_size-md_1rby4_145",
  "size-lg": "_size-lg_1rby4_150",
  "radius-none": "_radius-none_1rby4_155",
  "radius-sm": "_radius-sm_1rby4_159",
  "radius-md": "_radius-md_1rby4_163",
  "radius-lg": "_radius-lg_1rby4_167",
  "radius-full": "_radius-full_1rby4_171",
  "border-none": "_border-none_1rby4_176",
  "border-default": "_border-default_1rby4_180",
  "border-bottom": "_border-bottom_1rby4_184",
  "color-primary": "_color-primary_1rby4_190",
  "color-default": "_color-default_1rby4_200",
  "color-secondary": "_color-secondary_1rby4_210",
  "color-success": "_color-success_1rby4_220",
  "color-warning": "_color-warning_1rby4_230",
  "color-danger": "_color-danger_1rby4_240"
}, cp = ({
  className: n = "",
  type: a = "text",
  required: t = !1,
  aria: e = "input",
  color: r = "default",
  style: o,
  size: s = "sm",
  radius: i = "md",
  border: c = "default",
  label: l,
  placeholder: u,
  labelPlacement: d = "outside",
  value: p,
  onValueChange: m
}) => {
  const g = `${`
    ${$e.input} 
    ${$e[`size-${s}`]} 
    ${$e[`radius-${i}`]} 
    ${$e[`color-${r}`]} 
    ${$e[`border-${c}`]} 
  `.trim()} ${n}`.trim(), v = `${$e.label} ${$e[`label-${d}`]}`.trim(), b = d === "outside-left" ? $e["input-wrapper-inline"] : $e["input-wrapper"];
  return /* @__PURE__ */ y.jsxs("div", { style: o, className: b, children: [
    /* @__PURE__ */ y.jsx("label", { htmlFor: l, className: v, children: l }),
    /* @__PURE__ */ y.jsx(
      "input",
      {
        type: a,
        required: t,
        className: g,
        "aria-label": e,
        placeholder: u,
        value: p,
        name: l,
        onChange: m
      }
    )
  ] });
};
var Ia = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Xn = _.createContext && /* @__PURE__ */ _.createContext(Ia), ss = ["attr", "size", "title"];
function is(n, a) {
  if (n == null) return {};
  var t = cs(n, a), e, r;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    for (r = 0; r < o.length; r++)
      e = o[r], !(a.indexOf(e) >= 0) && Object.prototype.propertyIsEnumerable.call(n, e) && (t[e] = n[e]);
  }
  return t;
}
function cs(n, a) {
  if (n == null) return {};
  var t = {};
  for (var e in n)
    if (Object.prototype.hasOwnProperty.call(n, e)) {
      if (a.indexOf(e) >= 0) continue;
      t[e] = n[e];
    }
  return t;
}
function _r() {
  return _r = Object.assign ? Object.assign.bind() : function(n) {
    for (var a = 1; a < arguments.length; a++) {
      var t = arguments[a];
      for (var e in t)
        Object.prototype.hasOwnProperty.call(t, e) && (n[e] = t[e]);
    }
    return n;
  }, _r.apply(this, arguments);
}
function Gn(n, a) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var e = Object.getOwnPropertySymbols(n);
    a && (e = e.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), t.push.apply(t, e);
  }
  return t;
}
function gr(n) {
  for (var a = 1; a < arguments.length; a++) {
    var t = arguments[a] != null ? arguments[a] : {};
    a % 2 ? Gn(Object(t), !0).forEach(function(e) {
      ls(n, e, t[e]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : Gn(Object(t)).forEach(function(e) {
      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
    });
  }
  return n;
}
function ls(n, a, t) {
  return a = us(a), a in n ? Object.defineProperty(n, a, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : n[a] = t, n;
}
function us(n) {
  var a = ds(n, "string");
  return typeof a == "symbol" ? a : a + "";
}
function ds(n, a) {
  if (typeof n != "object" || !n) return n;
  var t = n[Symbol.toPrimitive];
  if (t !== void 0) {
    var e = t.call(n, a || "default");
    if (typeof e != "object") return e;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (a === "string" ? String : Number)(n);
}
function Fa(n) {
  return n && n.map((a, t) => /* @__PURE__ */ _.createElement(a.tag, gr({
    key: t
  }, a.attr), Fa(a.child)));
}
function St(n) {
  return (a) => /* @__PURE__ */ _.createElement(ps, _r({
    attr: gr({}, n.attr)
  }, a), Fa(n.child));
}
function ps(n) {
  var a = (t) => {
    var {
      attr: e,
      size: r,
      title: o
    } = n, s = is(n, ss), i = r || t.size || "1em", c;
    return t.className && (c = t.className), n.className && (c = (c ? c + " " : "") + n.className), /* @__PURE__ */ _.createElement("svg", _r({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, t.attr, e, s, {
      className: c,
      style: gr(gr({
        color: n.color || t.color
      }, t.style), n.style),
      height: i,
      width: i,
      xmlns: "http://www.w3.org/2000/svg"
    }), o && /* @__PURE__ */ _.createElement("title", null, o), n.children);
  };
  return Xn !== void 0 ? /* @__PURE__ */ _.createElement(Xn.Consumer, null, (t) => a(t)) : a(Ia);
}
function fs(n) {
  return St({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M8.2 275.4c0-8.6 3.4-17.401 10-24.001 13.2-13.2 34.8-13.2 48 0l451.8 451.8 445.2-445.2c13.2-13.2 34.8-13.2 48 0s13.2 34.8 0 48L542 775.399c-13.2 13.2-34.8 13.2-48 0l-475.8-475.8c-6.8-6.8-10-15.4-10-24.199z" }, child: [] }] })(n);
}
function ms(n) {
  return St({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M752.145 0c8.685 0 17.572 3.434 24.237 10.099 13.33 13.33 13.33 35.143 0 48.473L320.126 515.03l449.591 449.591c13.33 13.33 13.33 35.144 0 48.474-13.33 13.33-35.142 13.33-48.472 0L247.418 539.268c-13.33-13.33-13.33-35.144 0-48.474L727.91 10.1C734.575 3.435 743.46.002 752.146.002z" }, child: [] }] })(n);
}
function hs(n) {
  return St({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" }, child: [] }] })(n);
}
function _s(n) {
  return St({ tag: "svg", attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" }, child: [] }] })(n);
}
function gs(n) {
  return St({ tag: "svg", attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" }, child: [] }] })(n);
}
const lp = ({
  title: n,
  subtitle: a,
  children: t,
  isOpen: e,
  onToggle: r,
  iconClose: o,
  iconOpen: s,
  aria: i = "accordion-item"
}) => (o === "FaMinus" ? o = /* @__PURE__ */ y.jsx(gs, {}) : o == null ? o = /* @__PURE__ */ y.jsx(fs, {}) : o = o, s === "FaPlus" ? s = /* @__PURE__ */ y.jsx(_s, {}) : s == null ? s = /* @__PURE__ */ y.jsx(ms, {}) : s = s, /* @__PURE__ */ y.jsxs("div", { className: "accordion-item", aria: i, children: [
  /* @__PURE__ */ y.jsxs("button", { className: "accordion-toggle", onClick: r, children: [
    /* @__PURE__ */ y.jsxs("div", { className: "title-wrapper", children: [
      /* @__PURE__ */ y.jsx("div", { children: n }),
      /* @__PURE__ */ y.jsx("div", { children: a })
    ] }),
    e ? o : s
  ] }),
  /* @__PURE__ */ y.jsx("div", { className: `accordion-content ${e ? "open" : ""}`, children: e && t })
] })), up = ({
  children: n,
  allowMultipleOpen: a = !1,
  variant: t = "bordered",
  className: e = "",
  style: r,
  aria: o = "accordion"
}) => {
  const [s, i] = it([]), c = (u) => {
    i(
      a ? (d) => d.includes(u) ? d.filter((p) => p !== u) : [...d, u] : (d) => d.includes(u) ? [] : [u]
    );
  }, l = `accordion-wrapper ${e} variant-${t}`;
  return /* @__PURE__ */ y.jsx("div", { className: l, style: r, children: _.Children.map(
    n,
    (u, d) => _n(u, {
      isOpen: s.includes(d),
      onToggle: () => c(d),
      key: d
    })
  ) });
};
function vs(n) {
  return St({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }, child: [] }] })(n);
}
const bs = "__button_sumvt_71_1mzck_1", ws = "__label_1u6ug_70_1mzck_171", ys = "__input_1u6ug_74_1mzck_198", Ds = "_container_1mzck_1", ks = "_visible_1mzck_1", xs = "_relative_1mzck_1", Cs = "_inline_1mzck_1", Ms = "_flex_1mzck_1", Es = "_table_1mzck_1", Ss = "_hidden_1mzck_1", Ps = "_border_1mzck_1", Os = "_shadow_1mzck_1", Ts = "_filter_1mzck_1", Ns = "_sidebarOpen_1mzck_392", Rs = "_sidebarClosed_1mzck_395", Ys = "_backdrop_1mzck_399", Is = "_modal_1mzck_421", Fs = "_openButton_1mzck_479", Ls = "_closeButton_1mzck_491", As = "_modalHeader_1mzck_508", De = {
  _button_sumvt_71: bs,
  "_size-sm_sumvt_82": "__size-sm_sumvt_82_1mzck_10",
  "_size-md_sumvt_87": "__size-md_sumvt_87_1mzck_15",
  "_size-lg_sumvt_92": "__size-lg_sumvt_92_1mzck_20",
  "_radius-none_sumvt_98": "__radius-none_sumvt_98_1mzck_25",
  "_radius-sm_sumvt_102": "__radius-sm_sumvt_102_1mzck_29",
  "_radius-md_sumvt_106": "__radius-md_sumvt_106_1mzck_33",
  "_radius-lg_sumvt_110": "__radius-lg_sumvt_110_1mzck_37",
  "_radius-full_sumvt_114": "__radius-full_sumvt_114_1mzck_41",
  "_border-none_sumvt_119": "__border-none_sumvt_119_1mzck_45",
  "_border-xs_sumvt_123": "__border-xs_sumvt_123_1mzck_49",
  "_border-sm_sumvt_127": "__border-sm_sumvt_127_1mzck_53",
  "_border-md_sumvt_131": "__border-md_sumvt_131_1mzck_57",
  "_border-lg_sumvt_135": "__border-lg_sumvt_135_1mzck_61",
  "_border-xl_sumvt_139": "__border-xl_sumvt_139_1mzck_65",
  "_color-primary_sumvt_144": "__color-primary_sumvt_144_1mzck_69",
  "_color-default_sumvt_150": "__color-default_sumvt_150_1mzck_75",
  "_color-secondary_sumvt_156": "__color-secondary_sumvt_156_1mzck_81",
  "_color-success_sumvt_162": "__color-success_sumvt_162_1mzck_87",
  "_color-warning_sumvt_168": "__color-warning_sumvt_168_1mzck_93",
  "_color-danger_sumvt_174": "__color-danger_sumvt_174_1mzck_99",
  _label_1u6ug_70: ws,
  "_input-wrapper_1u6ug_74": "__input-wrapper_1u6ug_74_1mzck_175",
  "_input-wrapper-inline_1u6ug_79": "__input-wrapper-inline_1u6ug_79_1mzck_180",
  "_label-outside_1u6ug_84": "__label-outside_1u6ug_84_1mzck_185",
  "_label-outside-left_1u6ug_90": "__label-outside-left_1u6ug_90_1mzck_191",
  _input_1u6ug_74: ys,
  "_size-sm_1u6ug_101": "__size-sm_1u6ug_101_1mzck_202",
  "_size-md_1u6ug_106": "__size-md_1u6ug_106_1mzck_207",
  "_size-lg_1u6ug_111": "__size-lg_1u6ug_111_1mzck_212",
  "_radius-none_1u6ug_116": "__radius-none_1u6ug_116_1mzck_217",
  "_radius-sm_1u6ug_120": "__radius-sm_1u6ug_120_1mzck_221",
  "_radius-md_1u6ug_124": "__radius-md_1u6ug_124_1mzck_225",
  "_radius-lg_1u6ug_128": "__radius-lg_1u6ug_128_1mzck_229",
  "_radius-full_1u6ug_132": "__radius-full_1u6ug_132_1mzck_233",
  "_border-none_1u6ug_137": "__border-none_1u6ug_137_1mzck_237",
  "_border-default_1u6ug_141": "__border-default_1u6ug_141_1mzck_241",
  "_border-bottom_1u6ug_145": "__border-bottom_1u6ug_145_1mzck_245",
  "_color-primary_1u6ug_151": "__color-primary_1u6ug_151_1mzck_250",
  "_color-default_1u6ug_161": "__color-default_1u6ug_161_1mzck_266",
  "_color-secondary_1u6ug_171": "__color-secondary_1u6ug_171_1mzck_282",
  "_color-success_1u6ug_181": "__color-success_1u6ug_181_1mzck_298",
  "_color-warning_1u6ug_191": "__color-warning_1u6ug_191_1mzck_314",
  "_color-danger_1u6ug_201": "__color-danger_1u6ug_201_1mzck_330",
  container: Ds,
  visible: ks,
  relative: xs,
  "mx-auto": "_mx-auto_1mzck_1",
  "mb-2": "_mb-2_1mzck_1",
  "mt-5": "_mt-5_1mzck_1",
  inline: Cs,
  flex: Ms,
  table: Es,
  hidden: Ss,
  "w-2/3": "_w-2/3_1mzck_1",
  "cursor-pointer": "_cursor-pointer_1mzck_1",
  border: Ps,
  "bg-pink-500": "_bg-pink-500_1mzck_1",
  "p-4": "_p-4_1mzck_1",
  "text-white": "_text-white_1mzck_1",
  shadow: Os,
  filter: Ts,
  "app-container": "_app-container_1mzck_372",
  "layout-content": "_layout-content_1mzck_378",
  "content-wrapper": "_content-wrapper_1mzck_383",
  sidebarOpen: Ns,
  sidebarClosed: Rs,
  backdrop: Ys,
  "backdrop-transparent": "_backdrop-transparent_1mzck_413",
  "backdrop-blur": "_backdrop-blur_1mzck_416",
  modal: Is,
  "size-sm": "_size-sm_1mzck_433",
  "size-md": "_size-md_1mzck_437",
  "size-lg": "_size-lg_1mzck_441",
  "radius-none": "_radius-none_1mzck_445",
  "radius-sm": "_radius-sm_1mzck_448",
  "radius-md": "_radius-md_1mzck_451",
  "radius-lg": "_radius-lg_1mzck_454",
  "placement-center": "_placement-center_1mzck_457",
  "placement-top": "_placement-top_1mzck_460",
  "placement-bottom": "_placement-bottom_1mzck_464",
  "placement-top-center": "_placement-top-center_1mzck_468",
  "placement-bottom-center": "_placement-bottom-center_1mzck_473",
  openButton: Fs,
  closeButton: Ls,
  modalHeader: As,
  "hover:bg-pink-100": "_hover:bg-pink-100_1mzck_1",
  "hover:bg-pink-300": "_hover:bg-pink-300_1mzck_1",
  "md:shadow-lg": "_md:shadow-lg_1mzck_1"
}, dp = ({
  children: n = "button",
  modalHeader: a,
  modalBody: t,
  size: e = "md",
  radius: r = "md",
  placement: o = "center",
  backdrop: s = "transparent",
  color: i = "primary",
  classNames: c = ""
}) => {
  const [l, u] = it(!1), d = () => {
    u(!0);
  }, p = () => {
    u(!1);
  }, h = `${`
   ${De.modal}
   ${De[`size-${e}`]}
   ${De[`radius-${r}`]}
   ${De[`placement-${o}`]}
   ${De[`backdrop-${s}`]}
   ${De[`color-${i}`]}
  ${scroll !== "none" ? De[`scroll-${scroll}`] : ""}
   `.trim()} ${c}`.trim();
  return /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
    /* @__PURE__ */ y.jsx("button", { className: De.openButton, onClick: d, children: n }),
    l && /* @__PURE__ */ y.jsx(
      "div",
      {
        className: `${De.backdrop} ${De[`backdrop-${s}`]}`,
        onClick: p,
        children: /* @__PURE__ */ y.jsxs("aside", { className: h, role: "dialog", "aria-modal": "true", children: [
          a && /* @__PURE__ */ y.jsx("div", { className: De.modalHeader, children: a }),
          /* @__PURE__ */ y.jsx("div", { className: De.modalBody, children: t }),
          /* @__PURE__ */ y.jsx("button", { className: De.closeButton, onClick: p, children: /* @__PURE__ */ y.jsx(vs, {}) })
        ] })
      }
    )
  ] });
};
function La(n) {
  var a, t, e = "";
  if (typeof n == "string" || typeof n == "number") e += n;
  else if (typeof n == "object") if (Array.isArray(n)) {
    var r = n.length;
    for (a = 0; a < r; a++) n[a] && (t = La(n[a])) && (e && (e += " "), e += t);
  } else for (t in n) n[t] && (e && (e += " "), e += t);
  return e;
}
function de() {
  for (var n, a, t = 0, e = "", r = arguments.length; t < r; t++) (n = arguments[t]) && (a = La(n)) && (e && (e += " "), e += a);
  return e;
}
function E(n) {
  const a = Object.prototype.toString.call(n);
  return n instanceof Date || typeof n == "object" && a === "[object Date]" ? new n.constructor(+n) : typeof n == "number" || a === "[object Number]" || typeof n == "string" || a === "[object String]" ? new Date(n) : /* @__PURE__ */ new Date(NaN);
}
function Z(n, a) {
  return n instanceof Date ? new n.constructor(a) : new Date(a);
}
function Ue(n, a) {
  const t = E(n);
  return isNaN(a) ? Z(n, NaN) : (a && t.setDate(t.getDate() + a), t);
}
function Oe(n, a) {
  const t = E(n);
  if (isNaN(a)) return Z(n, NaN);
  if (!a)
    return t;
  const e = t.getDate(), r = Z(n, t.getTime());
  r.setMonth(t.getMonth() + a + 1, 0);
  const o = r.getDate();
  return e >= o ? r : (t.setFullYear(
    r.getFullYear(),
    r.getMonth(),
    e
  ), t);
}
function vn(n, a) {
  const t = +E(n);
  return Z(n, t + a);
}
const Aa = 6048e5, js = 864e5, Nr = 6e4, Rr = 36e5, Ws = 1e3;
function $s(n, a) {
  return vn(n, a * Rr);
}
let zs = {};
function mt() {
  return zs;
}
function Xe(n, a) {
  var i, c, l, u;
  const t = mt(), e = (a == null ? void 0 : a.weekStartsOn) ?? ((c = (i = a == null ? void 0 : a.locale) == null ? void 0 : i.options) == null ? void 0 : c.weekStartsOn) ?? t.weekStartsOn ?? ((u = (l = t.locale) == null ? void 0 : l.options) == null ? void 0 : u.weekStartsOn) ?? 0, r = E(n), o = r.getDay(), s = (o < e ? 7 : 0) + o - e;
  return r.setDate(r.getDate() - s), r.setHours(0, 0, 0, 0), r;
}
function yt(n) {
  return Xe(n, { weekStartsOn: 1 });
}
function ja(n) {
  const a = E(n), t = a.getFullYear(), e = Z(n, 0);
  e.setFullYear(t + 1, 0, 4), e.setHours(0, 0, 0, 0);
  const r = yt(e), o = Z(n, 0);
  o.setFullYear(t, 0, 4), o.setHours(0, 0, 0, 0);
  const s = yt(o);
  return a.getTime() >= r.getTime() ? t + 1 : a.getTime() >= s.getTime() ? t : t - 1;
}
function dt(n) {
  const a = E(n);
  return a.setHours(0, 0, 0, 0), a;
}
function vr(n) {
  const a = E(n), t = new Date(
    Date.UTC(
      a.getFullYear(),
      a.getMonth(),
      a.getDate(),
      a.getHours(),
      a.getMinutes(),
      a.getSeconds(),
      a.getMilliseconds()
    )
  );
  return t.setUTCFullYear(a.getFullYear()), +n - +t;
}
function Dt(n, a) {
  const t = dt(n), e = dt(a), r = +t - vr(t), o = +e - vr(e);
  return Math.round((r - o) / js);
}
function Hs(n) {
  const a = ja(n), t = Z(n, 0);
  return t.setFullYear(a, 0, 4), t.setHours(0, 0, 0, 0), yt(t);
}
function cn(n, a) {
  return vn(n, a * Nr);
}
function bn(n, a) {
  const t = a * 3;
  return Oe(n, t);
}
function Bs(n, a) {
  return vn(n, a * 1e3);
}
function br(n, a) {
  const t = a * 7;
  return Ue(n, t);
}
function Qe(n, a) {
  return Oe(n, a * 12);
}
function Jn(n) {
  let a;
  return n.forEach(function(t) {
    const e = E(t);
    (a === void 0 || a < e || isNaN(Number(e))) && (a = e);
  }), a || /* @__PURE__ */ new Date(NaN);
}
function Zn(n) {
  let a;
  return n.forEach((t) => {
    const e = E(t);
    (!a || a > e || isNaN(+e)) && (a = e);
  }), a || /* @__PURE__ */ new Date(NaN);
}
function Qs(n, a) {
  const t = dt(n), e = dt(a);
  return +t == +e;
}
function qe(n) {
  return n instanceof Date || typeof n == "object" && Object.prototype.toString.call(n) === "[object Date]";
}
function wr(n) {
  if (!qe(n) && typeof n != "number")
    return !1;
  const a = E(n);
  return !isNaN(Number(a));
}
function yr(n, a) {
  const t = E(n), e = E(a), r = t.getFullYear() - e.getFullYear(), o = t.getMonth() - e.getMonth();
  return r * 12 + o;
}
function ct(n) {
  const a = E(n);
  return Math.trunc(a.getMonth() / 3) + 1;
}
function Dr(n, a) {
  const t = E(n), e = E(a), r = t.getFullYear() - e.getFullYear(), o = ct(t) - ct(e);
  return r * 4 + o;
}
function kr(n, a) {
  const t = E(n), e = E(a);
  return t.getFullYear() - e.getFullYear();
}
function qs(n, a) {
  const t = E(n), e = E(a), r = ea(t, e), o = Math.abs(Dt(t, e));
  t.setDate(t.getDate() - r * o);
  const s = +(ea(t, e) === -r), i = r * (o - s);
  return i === 0 ? 0 : i;
}
function ea(n, a) {
  const t = n.getFullYear() - a.getFullYear() || n.getMonth() - a.getMonth() || n.getDate() - a.getDate() || n.getHours() - a.getHours() || n.getMinutes() - a.getMinutes() || n.getSeconds() - a.getSeconds() || n.getMilliseconds() - a.getMilliseconds();
  return t < 0 ? -1 : t > 0 ? 1 : t;
}
function Wa(n) {
  const a = E(n);
  return a.setHours(23, 59, 59, 999), a;
}
function $a(n) {
  const a = E(n), t = a.getMonth();
  return a.setFullYear(a.getFullYear(), t + 1, 0), a.setHours(23, 59, 59, 999), a;
}
function ln(n) {
  const a = E(n), t = a.getMonth(), e = t - t % 3;
  return a.setMonth(e, 1), a.setHours(0, 0, 0, 0), a;
}
function za(n) {
  const a = E(n);
  return a.setDate(1), a.setHours(0, 0, 0, 0), a;
}
function Ha(n) {
  const a = E(n), t = a.getFullYear();
  return a.setFullYear(t + 1, 0, 0), a.setHours(23, 59, 59, 999), a;
}
function Yr(n) {
  const a = E(n), t = Z(n, 0);
  return t.setFullYear(a.getFullYear(), 0, 1), t.setHours(0, 0, 0, 0), t;
}
function Vs(n, a) {
  var i, c;
  const t = mt(), e = t.weekStartsOn ?? ((c = (i = t.locale) == null ? void 0 : i.options) == null ? void 0 : c.weekStartsOn) ?? 0, r = E(n), o = r.getDay(), s = (o < e ? -7 : 0) + 6 - (o - e);
  return r.setDate(r.getDate() + s), r.setHours(23, 59, 59, 999), r;
}
const Ks = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, Us = (n, a, t) => {
  let e;
  const r = Ks[n];
  return typeof r == "string" ? e = r : a === 1 ? e = r.one : e = r.other.replace("{{count}}", a.toString()), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "in " + e : e + " ago" : e;
};
function Ur(n) {
  return (a = {}) => {
    const t = a.width ? String(a.width) : n.defaultWidth;
    return n.formats[t] || n.formats[n.defaultWidth];
  };
}
const Xs = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Gs = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Js = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Zs = {
  date: Ur({
    formats: Xs,
    defaultWidth: "full"
  }),
  time: Ur({
    formats: Gs,
    defaultWidth: "full"
  }),
  dateTime: Ur({
    formats: Js,
    defaultWidth: "full"
  })
}, ei = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, ti = (n, a, t, e) => ei[n];
function It(n) {
  return (a, t) => {
    const e = t != null && t.context ? String(t.context) : "standalone";
    let r;
    if (e === "formatting" && n.formattingValues) {
      const s = n.defaultFormattingWidth || n.defaultWidth, i = t != null && t.width ? String(t.width) : s;
      r = n.formattingValues[i] || n.formattingValues[s];
    } else {
      const s = n.defaultWidth, i = t != null && t.width ? String(t.width) : n.defaultWidth;
      r = n.values[i] || n.values[s];
    }
    const o = n.argumentCallback ? n.argumentCallback(a) : a;
    return r[o];
  };
}
const ri = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, ni = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, ai = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, oi = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, si = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, ii = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, ci = (n, a) => {
  const t = Number(n), e = t % 100;
  if (e > 20 || e < 10)
    switch (e % 10) {
      case 1:
        return t + "st";
      case 2:
        return t + "nd";
      case 3:
        return t + "rd";
    }
  return t + "th";
}, li = {
  ordinalNumber: ci,
  era: It({
    values: ri,
    defaultWidth: "wide"
  }),
  quarter: It({
    values: ni,
    defaultWidth: "wide",
    argumentCallback: (n) => n - 1
  }),
  month: It({
    values: ai,
    defaultWidth: "wide"
  }),
  day: It({
    values: oi,
    defaultWidth: "wide"
  }),
  dayPeriod: It({
    values: si,
    defaultWidth: "wide",
    formattingValues: ii,
    defaultFormattingWidth: "wide"
  })
};
function Ft(n) {
  return (a, t = {}) => {
    const e = t.width, r = e && n.matchPatterns[e] || n.matchPatterns[n.defaultMatchWidth], o = a.match(r);
    if (!o)
      return null;
    const s = o[0], i = e && n.parsePatterns[e] || n.parsePatterns[n.defaultParseWidth], c = Array.isArray(i) ? di(i, (d) => d.test(s)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      ui(i, (d) => d.test(s))
    );
    let l;
    l = n.valueCallback ? n.valueCallback(c) : c, l = t.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      t.valueCallback(l)
    ) : l;
    const u = a.slice(s.length);
    return { value: l, rest: u };
  };
}
function ui(n, a) {
  for (const t in n)
    if (Object.prototype.hasOwnProperty.call(n, t) && a(n[t]))
      return t;
}
function di(n, a) {
  for (let t = 0; t < n.length; t++)
    if (a(n[t]))
      return t;
}
function pi(n) {
  return (a, t = {}) => {
    const e = a.match(n.matchPattern);
    if (!e) return null;
    const r = e[0], o = a.match(n.parsePattern);
    if (!o) return null;
    let s = n.valueCallback ? n.valueCallback(o[0]) : o[0];
    s = t.valueCallback ? t.valueCallback(s) : s;
    const i = a.slice(r.length);
    return { value: s, rest: i };
  };
}
const fi = /^(\d+)(th|st|nd|rd)?/i, mi = /\d+/i, hi = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, _i = {
  any: [/^b/i, /^(a|c)/i]
}, gi = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, vi = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, bi = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, wi = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, yi = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Di = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, ki = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, xi = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, Ci = {
  ordinalNumber: pi({
    matchPattern: fi,
    parsePattern: mi,
    valueCallback: (n) => parseInt(n, 10)
  }),
  era: Ft({
    matchPatterns: hi,
    defaultMatchWidth: "wide",
    parsePatterns: _i,
    defaultParseWidth: "any"
  }),
  quarter: Ft({
    matchPatterns: gi,
    defaultMatchWidth: "wide",
    parsePatterns: vi,
    defaultParseWidth: "any",
    valueCallback: (n) => n + 1
  }),
  month: Ft({
    matchPatterns: bi,
    defaultMatchWidth: "wide",
    parsePatterns: wi,
    defaultParseWidth: "any"
  }),
  day: Ft({
    matchPatterns: yi,
    defaultMatchWidth: "wide",
    parsePatterns: Di,
    defaultParseWidth: "any"
  }),
  dayPeriod: Ft({
    matchPatterns: ki,
    defaultMatchWidth: "any",
    parsePatterns: xi,
    defaultParseWidth: "any"
  })
}, Ba = {
  code: "en-US",
  formatDistance: Us,
  formatLong: Zs,
  formatRelative: ti,
  localize: li,
  match: Ci,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Mi(n) {
  const a = E(n);
  return Dt(a, Yr(a)) + 1;
}
function wn(n) {
  const a = E(n), t = +yt(a) - +Hs(a);
  return Math.round(t / Aa) + 1;
}
function yn(n, a) {
  var u, d, p, m;
  const t = E(n), e = t.getFullYear(), r = mt(), o = (a == null ? void 0 : a.firstWeekContainsDate) ?? ((d = (u = a == null ? void 0 : a.locale) == null ? void 0 : u.options) == null ? void 0 : d.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((m = (p = r.locale) == null ? void 0 : p.options) == null ? void 0 : m.firstWeekContainsDate) ?? 1, s = Z(n, 0);
  s.setFullYear(e + 1, 0, o), s.setHours(0, 0, 0, 0);
  const i = Xe(s, a), c = Z(n, 0);
  c.setFullYear(e, 0, o), c.setHours(0, 0, 0, 0);
  const l = Xe(c, a);
  return t.getTime() >= i.getTime() ? e + 1 : t.getTime() >= l.getTime() ? e : e - 1;
}
function Ei(n, a) {
  var i, c, l, u;
  const t = mt(), e = (a == null ? void 0 : a.firstWeekContainsDate) ?? ((c = (i = a == null ? void 0 : a.locale) == null ? void 0 : i.options) == null ? void 0 : c.firstWeekContainsDate) ?? t.firstWeekContainsDate ?? ((u = (l = t.locale) == null ? void 0 : l.options) == null ? void 0 : u.firstWeekContainsDate) ?? 1, r = yn(n, a), o = Z(n, 0);
  return o.setFullYear(r, 0, e), o.setHours(0, 0, 0, 0), Xe(o, a);
}
function Qa(n, a) {
  const t = E(n), e = +Xe(t, a) - +Ei(t, a);
  return Math.round(e / Aa) + 1;
}
function J(n, a) {
  const t = n < 0 ? "-" : "", e = Math.abs(n).toString().padStart(a, "0");
  return t + e;
}
const Ge = {
  // Year
  y(n, a) {
    const t = n.getFullYear(), e = t > 0 ? t : 1 - t;
    return J(a === "yy" ? e % 100 : e, a.length);
  },
  // Month
  M(n, a) {
    const t = n.getMonth();
    return a === "M" ? String(t + 1) : J(t + 1, 2);
  },
  // Day of the month
  d(n, a) {
    return J(n.getDate(), a.length);
  },
  // AM or PM
  a(n, a) {
    const t = n.getHours() / 12 >= 1 ? "pm" : "am";
    switch (a) {
      case "a":
      case "aa":
        return t.toUpperCase();
      case "aaa":
        return t;
      case "aaaaa":
        return t[0];
      case "aaaa":
      default:
        return t === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(n, a) {
    return J(n.getHours() % 12 || 12, a.length);
  },
  // Hour [0-23]
  H(n, a) {
    return J(n.getHours(), a.length);
  },
  // Minute
  m(n, a) {
    return J(n.getMinutes(), a.length);
  },
  // Second
  s(n, a) {
    return J(n.getSeconds(), a.length);
  },
  // Fraction of second
  S(n, a) {
    const t = a.length, e = n.getMilliseconds(), r = Math.trunc(
      e * Math.pow(10, t - 3)
    );
    return J(r, a.length);
  }
}, gt = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, ta = {
  // Era
  G: function(n, a, t) {
    const e = n.getFullYear() > 0 ? 1 : 0;
    switch (a) {
      case "G":
      case "GG":
      case "GGG":
        return t.era(e, { width: "abbreviated" });
      case "GGGGG":
        return t.era(e, { width: "narrow" });
      case "GGGG":
      default:
        return t.era(e, { width: "wide" });
    }
  },
  // Year
  y: function(n, a, t) {
    if (a === "yo") {
      const e = n.getFullYear(), r = e > 0 ? e : 1 - e;
      return t.ordinalNumber(r, { unit: "year" });
    }
    return Ge.y(n, a);
  },
  // Local week-numbering year
  Y: function(n, a, t, e) {
    const r = yn(n, e), o = r > 0 ? r : 1 - r;
    if (a === "YY") {
      const s = o % 100;
      return J(s, 2);
    }
    return a === "Yo" ? t.ordinalNumber(o, { unit: "year" }) : J(o, a.length);
  },
  // ISO week-numbering year
  R: function(n, a) {
    const t = ja(n);
    return J(t, a.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(n, a) {
    const t = n.getFullYear();
    return J(t, a.length);
  },
  // Quarter
  Q: function(n, a, t) {
    const e = Math.ceil((n.getMonth() + 1) / 3);
    switch (a) {
      case "Q":
        return String(e);
      case "QQ":
        return J(e, 2);
      case "Qo":
        return t.ordinalNumber(e, { unit: "quarter" });
      case "QQQ":
        return t.quarter(e, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return t.quarter(e, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return t.quarter(e, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(n, a, t) {
    const e = Math.ceil((n.getMonth() + 1) / 3);
    switch (a) {
      case "q":
        return String(e);
      case "qq":
        return J(e, 2);
      case "qo":
        return t.ordinalNumber(e, { unit: "quarter" });
      case "qqq":
        return t.quarter(e, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return t.quarter(e, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return t.quarter(e, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(n, a, t) {
    const e = n.getMonth();
    switch (a) {
      case "M":
      case "MM":
        return Ge.M(n, a);
      case "Mo":
        return t.ordinalNumber(e + 1, { unit: "month" });
      case "MMM":
        return t.month(e, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return t.month(e, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return t.month(e, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(n, a, t) {
    const e = n.getMonth();
    switch (a) {
      case "L":
        return String(e + 1);
      case "LL":
        return J(e + 1, 2);
      case "Lo":
        return t.ordinalNumber(e + 1, { unit: "month" });
      case "LLL":
        return t.month(e, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return t.month(e, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return t.month(e, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(n, a, t, e) {
    const r = Qa(n, e);
    return a === "wo" ? t.ordinalNumber(r, { unit: "week" }) : J(r, a.length);
  },
  // ISO week of year
  I: function(n, a, t) {
    const e = wn(n);
    return a === "Io" ? t.ordinalNumber(e, { unit: "week" }) : J(e, a.length);
  },
  // Day of the month
  d: function(n, a, t) {
    return a === "do" ? t.ordinalNumber(n.getDate(), { unit: "date" }) : Ge.d(n, a);
  },
  // Day of year
  D: function(n, a, t) {
    const e = Mi(n);
    return a === "Do" ? t.ordinalNumber(e, { unit: "dayOfYear" }) : J(e, a.length);
  },
  // Day of week
  E: function(n, a, t) {
    const e = n.getDay();
    switch (a) {
      case "E":
      case "EE":
      case "EEE":
        return t.day(e, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return t.day(e, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return t.day(e, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return t.day(e, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(n, a, t, e) {
    const r = n.getDay(), o = (r - e.weekStartsOn + 8) % 7 || 7;
    switch (a) {
      case "e":
        return String(o);
      case "ee":
        return J(o, 2);
      case "eo":
        return t.ordinalNumber(o, { unit: "day" });
      case "eee":
        return t.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return t.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return t.day(r, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return t.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(n, a, t, e) {
    const r = n.getDay(), o = (r - e.weekStartsOn + 8) % 7 || 7;
    switch (a) {
      case "c":
        return String(o);
      case "cc":
        return J(o, a.length);
      case "co":
        return t.ordinalNumber(o, { unit: "day" });
      case "ccc":
        return t.day(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return t.day(r, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return t.day(r, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return t.day(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(n, a, t) {
    const e = n.getDay(), r = e === 0 ? 7 : e;
    switch (a) {
      case "i":
        return String(r);
      case "ii":
        return J(r, a.length);
      case "io":
        return t.ordinalNumber(r, { unit: "day" });
      case "iii":
        return t.day(e, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return t.day(e, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return t.day(e, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return t.day(e, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(n, a, t) {
    const r = n.getHours() / 12 >= 1 ? "pm" : "am";
    switch (a) {
      case "a":
      case "aa":
        return t.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return t.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return t.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return t.dayPeriod(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(n, a, t) {
    const e = n.getHours();
    let r;
    switch (e === 12 ? r = gt.noon : e === 0 ? r = gt.midnight : r = e / 12 >= 1 ? "pm" : "am", a) {
      case "b":
      case "bb":
        return t.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return t.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return t.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return t.dayPeriod(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(n, a, t) {
    const e = n.getHours();
    let r;
    switch (e >= 17 ? r = gt.evening : e >= 12 ? r = gt.afternoon : e >= 4 ? r = gt.morning : r = gt.night, a) {
      case "B":
      case "BB":
      case "BBB":
        return t.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return t.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return t.dayPeriod(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(n, a, t) {
    if (a === "ho") {
      let e = n.getHours() % 12;
      return e === 0 && (e = 12), t.ordinalNumber(e, { unit: "hour" });
    }
    return Ge.h(n, a);
  },
  // Hour [0-23]
  H: function(n, a, t) {
    return a === "Ho" ? t.ordinalNumber(n.getHours(), { unit: "hour" }) : Ge.H(n, a);
  },
  // Hour [0-11]
  K: function(n, a, t) {
    const e = n.getHours() % 12;
    return a === "Ko" ? t.ordinalNumber(e, { unit: "hour" }) : J(e, a.length);
  },
  // Hour [1-24]
  k: function(n, a, t) {
    let e = n.getHours();
    return e === 0 && (e = 24), a === "ko" ? t.ordinalNumber(e, { unit: "hour" }) : J(e, a.length);
  },
  // Minute
  m: function(n, a, t) {
    return a === "mo" ? t.ordinalNumber(n.getMinutes(), { unit: "minute" }) : Ge.m(n, a);
  },
  // Second
  s: function(n, a, t) {
    return a === "so" ? t.ordinalNumber(n.getSeconds(), { unit: "second" }) : Ge.s(n, a);
  },
  // Fraction of second
  S: function(n, a) {
    return Ge.S(n, a);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(n, a, t) {
    const e = n.getTimezoneOffset();
    if (e === 0)
      return "Z";
    switch (a) {
      case "X":
        return na(e);
      case "XXXX":
      case "XX":
        return ot(e);
      case "XXXXX":
      case "XXX":
      default:
        return ot(e, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(n, a, t) {
    const e = n.getTimezoneOffset();
    switch (a) {
      case "x":
        return na(e);
      case "xxxx":
      case "xx":
        return ot(e);
      case "xxxxx":
      case "xxx":
      default:
        return ot(e, ":");
    }
  },
  // Timezone (GMT)
  O: function(n, a, t) {
    const e = n.getTimezoneOffset();
    switch (a) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + ra(e, ":");
      case "OOOO":
      default:
        return "GMT" + ot(e, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(n, a, t) {
    const e = n.getTimezoneOffset();
    switch (a) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + ra(e, ":");
      case "zzzz":
      default:
        return "GMT" + ot(e, ":");
    }
  },
  // Seconds timestamp
  t: function(n, a, t) {
    const e = Math.trunc(n.getTime() / 1e3);
    return J(e, a.length);
  },
  // Milliseconds timestamp
  T: function(n, a, t) {
    const e = n.getTime();
    return J(e, a.length);
  }
};
function ra(n, a = "") {
  const t = n > 0 ? "-" : "+", e = Math.abs(n), r = Math.trunc(e / 60), o = e % 60;
  return o === 0 ? t + String(r) : t + String(r) + a + J(o, 2);
}
function na(n, a) {
  return n % 60 === 0 ? (n > 0 ? "-" : "+") + J(Math.abs(n) / 60, 2) : ot(n, a);
}
function ot(n, a = "") {
  const t = n > 0 ? "-" : "+", e = Math.abs(n), r = J(Math.trunc(e / 60), 2), o = J(e % 60, 2);
  return t + r + a + o;
}
const aa = (n, a) => {
  switch (n) {
    case "P":
      return a.date({ width: "short" });
    case "PP":
      return a.date({ width: "medium" });
    case "PPP":
      return a.date({ width: "long" });
    case "PPPP":
    default:
      return a.date({ width: "full" });
  }
}, qa = (n, a) => {
  switch (n) {
    case "p":
      return a.time({ width: "short" });
    case "pp":
      return a.time({ width: "medium" });
    case "ppp":
      return a.time({ width: "long" });
    case "pppp":
    default:
      return a.time({ width: "full" });
  }
}, Si = (n, a) => {
  const t = n.match(/(P+)(p+)?/) || [], e = t[1], r = t[2];
  if (!r)
    return aa(n, a);
  let o;
  switch (e) {
    case "P":
      o = a.dateTime({ width: "short" });
      break;
    case "PP":
      o = a.dateTime({ width: "medium" });
      break;
    case "PPP":
      o = a.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      o = a.dateTime({ width: "full" });
      break;
  }
  return o.replace("{{date}}", aa(e, a)).replace("{{time}}", qa(r, a));
}, xr = {
  p: qa,
  P: Si
}, Pi = /^D+$/, Oi = /^Y+$/, Ti = ["D", "DD", "YY", "YYYY"];
function Va(n) {
  return Pi.test(n);
}
function Ka(n) {
  return Oi.test(n);
}
function un(n, a, t) {
  const e = Ni(n, a, t);
  if (console.warn(e), Ti.includes(n)) throw new RangeError(e);
}
function Ni(n, a, t) {
  const e = n[0] === "Y" ? "years" : "days of the month";
  return `Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${a}\`) for formatting ${e} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Ri = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Yi = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Ii = /^'([^]*?)'?$/, Fi = /''/g, Li = /[a-zA-Z]/;
function oa(n, a, t) {
  var u, d, p, m, h, g, v, b;
  const e = mt(), r = (t == null ? void 0 : t.locale) ?? e.locale ?? Ba, o = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((d = (u = t == null ? void 0 : t.locale) == null ? void 0 : u.options) == null ? void 0 : d.firstWeekContainsDate) ?? e.firstWeekContainsDate ?? ((m = (p = e.locale) == null ? void 0 : p.options) == null ? void 0 : m.firstWeekContainsDate) ?? 1, s = (t == null ? void 0 : t.weekStartsOn) ?? ((g = (h = t == null ? void 0 : t.locale) == null ? void 0 : h.options) == null ? void 0 : g.weekStartsOn) ?? e.weekStartsOn ?? ((b = (v = e.locale) == null ? void 0 : v.options) == null ? void 0 : b.weekStartsOn) ?? 0, i = E(n);
  if (!wr(i))
    throw new RangeError("Invalid time value");
  let c = a.match(Yi).map((D) => {
    const k = D[0];
    if (k === "p" || k === "P") {
      const T = xr[k];
      return T(D, r.formatLong);
    }
    return D;
  }).join("").match(Ri).map((D) => {
    if (D === "''")
      return { isToken: !1, value: "'" };
    const k = D[0];
    if (k === "'")
      return { isToken: !1, value: Ai(D) };
    if (ta[k])
      return { isToken: !0, value: D };
    if (k.match(Li))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + k + "`"
      );
    return { isToken: !1, value: D };
  });
  r.localize.preprocessor && (c = r.localize.preprocessor(i, c));
  const l = {
    firstWeekContainsDate: o,
    weekStartsOn: s,
    locale: r
  };
  return c.map((D) => {
    if (!D.isToken) return D.value;
    const k = D.value;
    (!(t != null && t.useAdditionalWeekYearTokens) && Ka(k) || !(t != null && t.useAdditionalDayOfYearTokens) && Va(k)) && un(k, a, String(n));
    const T = ta[k[0]];
    return T(i, k, r.localize, l);
  }).join("");
}
function Ai(n) {
  const a = n.match(Ii);
  return a ? a[1].replace(Fi, "'") : n;
}
function sa(n) {
  return E(n).getDate();
}
function ji(n) {
  return E(n).getDay();
}
function Wi(n) {
  const a = E(n), t = a.getFullYear(), e = a.getMonth(), r = Z(n, 0);
  return r.setFullYear(t, e + 1, 0), r.setHours(0, 0, 0, 0), r.getDate();
}
function $i() {
  return Object.assign({}, mt());
}
function Fe(n) {
  return E(n).getHours();
}
function zi(n) {
  let t = E(n).getDay();
  return t === 0 && (t = 7), t;
}
function Le(n) {
  return E(n).getMinutes();
}
function ve(n) {
  return E(n).getMonth();
}
function Ve(n) {
  return E(n).getSeconds();
}
function dn(n) {
  return E(n).getTime();
}
function W(n) {
  return E(n).getFullYear();
}
function tt(n, a) {
  const t = E(n), e = E(a);
  return t.getTime() > e.getTime();
}
function pt(n, a) {
  const t = E(n), e = E(a);
  return +t < +e;
}
function Hi(n, a) {
  const t = E(n), e = E(a);
  return +t == +e;
}
function Bi(n, a) {
  const t = a instanceof Date ? Z(a, 0) : new a(0);
  return t.setFullYear(
    n.getFullYear(),
    n.getMonth(),
    n.getDate()
  ), t.setHours(
    n.getHours(),
    n.getMinutes(),
    n.getSeconds(),
    n.getMilliseconds()
  ), t;
}
const Qi = 10;
class Ua {
  constructor() {
    S(this, "subPriority", 0);
  }
  validate(a, t) {
    return !0;
  }
}
class qi extends Ua {
  constructor(a, t, e, r, o) {
    super(), this.value = a, this.validateValue = t, this.setValue = e, this.priority = r, o && (this.subPriority = o);
  }
  validate(a, t) {
    return this.validateValue(a, this.value, t);
  }
  set(a, t, e) {
    return this.setValue(a, t, this.value, e);
  }
}
class Vi extends Ua {
  constructor() {
    super(...arguments);
    S(this, "priority", Qi);
    S(this, "subPriority", -1);
  }
  set(t, e) {
    return e.timestampIsSet ? t : Z(t, Bi(t, Date));
  }
}
class X {
  run(a, t, e, r) {
    const o = this.parse(a, t, e, r);
    return o ? {
      setter: new qi(
        o.value,
        this.validate,
        this.set,
        this.priority,
        this.subPriority
      ),
      rest: o.rest
    } : null;
  }
  validate(a, t, e) {
    return !0;
  }
}
class Ki extends X {
  constructor() {
    super(...arguments);
    S(this, "priority", 140);
    S(this, "incompatibleTokens", ["R", "u", "t", "T"]);
  }
  parse(t, e, r) {
    switch (e) {
      case "G":
      case "GG":
      case "GGG":
        return r.era(t, { width: "abbreviated" }) || r.era(t, { width: "narrow" });
      case "GGGGG":
        return r.era(t, { width: "narrow" });
      case "GGGG":
      default:
        return r.era(t, { width: "wide" }) || r.era(t, { width: "abbreviated" }) || r.era(t, { width: "narrow" });
    }
  }
  set(t, e, r) {
    return e.era = r, t.setFullYear(r, 0, 1), t.setHours(0, 0, 0, 0), t;
  }
}
const ce = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/
  // 0 to 9999, -0 to -9999
}, Re = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function le(n, a) {
  return n && {
    value: a(n.value),
    rest: n.rest
  };
}
function ne(n, a) {
  const t = a.match(n);
  return t ? {
    value: parseInt(t[0], 10),
    rest: a.slice(t[0].length)
  } : null;
}
function Ye(n, a) {
  const t = a.match(n);
  if (!t)
    return null;
  if (t[0] === "Z")
    return {
      value: 0,
      rest: a.slice(1)
    };
  const e = t[1] === "+" ? 1 : -1, r = t[2] ? parseInt(t[2], 10) : 0, o = t[3] ? parseInt(t[3], 10) : 0, s = t[5] ? parseInt(t[5], 10) : 0;
  return {
    value: e * (r * Rr + o * Nr + s * Ws),
    rest: a.slice(t[0].length)
  };
}
function Xa(n) {
  return ne(ce.anyDigitsSigned, n);
}
function se(n, a) {
  switch (n) {
    case 1:
      return ne(ce.singleDigit, a);
    case 2:
      return ne(ce.twoDigits, a);
    case 3:
      return ne(ce.threeDigits, a);
    case 4:
      return ne(ce.fourDigits, a);
    default:
      return ne(new RegExp("^\\d{1," + n + "}"), a);
  }
}
function Cr(n, a) {
  switch (n) {
    case 1:
      return ne(ce.singleDigitSigned, a);
    case 2:
      return ne(ce.twoDigitsSigned, a);
    case 3:
      return ne(ce.threeDigitsSigned, a);
    case 4:
      return ne(ce.fourDigitsSigned, a);
    default:
      return ne(new RegExp("^-?\\d{1," + n + "}"), a);
  }
}
function Dn(n) {
  switch (n) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function Ga(n, a) {
  const t = a > 0, e = t ? a : 1 - a;
  let r;
  if (e <= 50)
    r = n || 100;
  else {
    const o = e + 50, s = Math.trunc(o / 100) * 100, i = n >= o % 100;
    r = n + s - (i ? 100 : 0);
  }
  return t ? r : 1 - r;
}
function Ja(n) {
  return n % 400 === 0 || n % 4 === 0 && n % 100 !== 0;
}
class Ui extends X {
  constructor() {
    super(...arguments);
    S(this, "priority", 130);
    S(this, "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(t, e, r) {
    const o = (s) => ({
      year: s,
      isTwoDigitYear: e === "yy"
    });
    switch (e) {
      case "y":
        return le(se(4, t), o);
      case "yo":
        return le(
          r.ordinalNumber(t, {
            unit: "year"
          }),
          o
        );
      default:
        return le(se(e.length, t), o);
    }
  }
  validate(t, e) {
    return e.isTwoDigitYear || e.year > 0;
  }
  set(t, e, r) {
    const o = t.getFullYear();
    if (r.isTwoDigitYear) {
      const i = Ga(
        r.year,
        o
      );
      return t.setFullYear(i, 0, 1), t.setHours(0, 0, 0, 0), t;
    }
    const s = !("era" in e) || e.era === 1 ? r.year : 1 - r.year;
    return t.setFullYear(s, 0, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class Xi extends X {
  constructor() {
    super(...arguments);
    S(this, "priority", 130);
    S(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "Q",
      "q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "i",
      "t",
      "T"
    ]);
  }
  parse(t, e, r) {
    const o = (s) => ({
      year: s,
      isTwoDigitYear: e === "YY"
    });
    switch (e) {
      case "Y":
        return le(se(4, t), o);
      case "Yo":
        return le(
          r.ordinalNumber(t, {
            unit: "year"
          }),
          o
        );
      default:
        return le(se(e.length, t), o);
    }
  }
  validate(t, e) {
    return e.isTwoDigitYear || e.year > 0;
  }
  set(t, e, r, o) {
    const s = yn(t, o);
    if (r.isTwoDigitYear) {
      const c = Ga(
        r.year,
        s
      );
      return t.setFullYear(
        c,
        0,
        o.firstWeekContainsDate
      ), t.setHours(0, 0, 0, 0), Xe(t, o);
    }
    const i = !("era" in e) || e.era === 1 ? r.year : 1 - r.year;
    return t.setFullYear(i, 0, o.firstWeekContainsDate), t.setHours(0, 0, 0, 0), Xe(t, o);
  }
}
class Gi extends X {
  constructor() {
    super(...arguments);
    S(this, "priority", 130);
    S(this, "incompatibleTokens", [
      "G",
      "y",
      "Y",
      "u",
      "Q",
      "q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, e) {
    return Cr(e === "R" ? 4 : e.length, t);
  }
  set(t, e, r) {
    const o = Z(t, 0);
    return o.setFullYear(r, 0, 4), o.setHours(0, 0, 0, 0), yt(o);
  }
}
class Ji extends X {
  constructor() {
    super(...arguments);
    S(this, "priority", 130);
    S(this, "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(t, e) {
    return Cr(e === "u" ? 4 : e.length, t);
  }
  set(t, e, r) {
    return t.setFullYear(r, 0, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class Zi extends X {
  constructor() {
    super(...arguments);
    S(this, "priority", 120);
    S(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, e, r) {
    switch (e) {
      case "Q":
      case "QQ":
        return se(e.length, t);
      case "Qo":
        return r.ordinalNumber(t, { unit: "quarter" });
      case "QQQ":
        return r.quarter(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.quarter(t, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQQ":
        return r.quarter(t, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return r.quarter(t, {
          width: "wide",
          context: "formatting"
        }) || r.quarter(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.quarter(t, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  validate(t, e) {
    return e >= 1 && e <= 4;
  }
  set(t, e, r) {
    return t.setMonth((r - 1) * 3, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class ec extends X {
  constructor() {
    super(...arguments);
    S(this, "priority", 120);
    S(this, "incompatibleTokens", [
      "Y",
      "R",
      "Q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, e, r) {
    switch (e) {
      case "q":
      case "qq":
        return se(e.length, t);
      case "qo":
        return r.ordinalNumber(t, { unit: "quarter" });
      case "qqq":
        return r.quarter(t, {
          width: "abbreviated",
          context: "standalone"
        }) || r.quarter(t, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqqq":
        return r.quarter(t, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return r.quarter(t, {
          width: "wide",
          context: "standalone"
        }) || r.quarter(t, {
          width: "abbreviated",
          context: "standalone"
        }) || r.quarter(t, {
          width: "narrow",
          context: "standalone"
        });
    }
  }
  validate(t, e) {
    return e >= 1 && e <= 4;
  }
  set(t, e, r) {
    return t.setMonth((r - 1) * 3, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class tc extends X {
  constructor() {
    super(...arguments);
    S(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "L",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
    S(this, "priority", 110);
  }
  parse(t, e, r) {
    const o = (s) => s - 1;
    switch (e) {
      case "M":
        return le(
          ne(ce.month, t),
          o
        );
      case "MM":
        return le(se(2, t), o);
      case "Mo":
        return le(
          r.ordinalNumber(t, {
            unit: "month"
          }),
          o
        );
      case "MMM":
        return r.month(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.month(t, { width: "narrow", context: "formatting" });
      case "MMMMM":
        return r.month(t, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return r.month(t, { width: "wide", context: "formatting" }) || r.month(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.month(t, { width: "narrow", context: "formatting" });
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 11;
  }
  set(t, e, r) {
    return t.setMonth(r, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class rc extends X {
  constructor() {
    super(...arguments);
    S(this, "priority", 110);
    S(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "M",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, e, r) {
    const o = (s) => s - 1;
    switch (e) {
      case "L":
        return le(
          ne(ce.month, t),
          o
        );
      case "LL":
        return le(se(2, t), o);
      case "Lo":
        return le(
          r.ordinalNumber(t, {
            unit: "month"
          }),
          o
        );
      case "LLL":
        return r.month(t, {
          width: "abbreviated",
          context: "standalone"
        }) || r.month(t, { width: "narrow", context: "standalone" });
      case "LLLLL":
        return r.month(t, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return r.month(t, { width: "wide", context: "standalone" }) || r.month(t, {
          width: "abbreviated",
          context: "standalone"
        }) || r.month(t, { width: "narrow", context: "standalone" });
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 11;
  }
  set(t, e, r) {
    return t.setMonth(r, 1), t.setHours(0, 0, 0, 0), t;
  }
}
function nc(n, a, t) {
  const e = E(n), r = Qa(e, t) - a;
  return e.setDate(e.getDate() - r * 7), e;
}
class ac extends X {
  constructor() {
    super(...arguments);
    S(this, "priority", 100);
    S(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "i",
      "t",
      "T"
    ]);
  }
  parse(t, e, r) {
    switch (e) {
      case "w":
        return ne(ce.week, t);
      case "wo":
        return r.ordinalNumber(t, { unit: "week" });
      default:
        return se(e.length, t);
    }
  }
  validate(t, e) {
    return e >= 1 && e <= 53;
  }
  set(t, e, r, o) {
    return Xe(nc(t, r, o), o);
  }
}
function oc(n, a) {
  const t = E(n), e = wn(t) - a;
  return t.setDate(t.getDate() - e * 7), t;
}
class sc extends X {
  constructor() {
    super(...arguments);
    S(this, "priority", 100);
    S(this, "incompatibleTokens", [
      "y",
      "Y",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, e, r) {
    switch (e) {
      case "I":
        return ne(ce.week, t);
      case "Io":
        return r.ordinalNumber(t, { unit: "week" });
      default:
        return se(e.length, t);
    }
  }
  validate(t, e) {
    return e >= 1 && e <= 53;
  }
  set(t, e, r) {
    return yt(oc(t, r));
  }
}
const ic = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], cc = [
  31,
  29,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31
];
class lc extends X {
  constructor() {
    super(...arguments);
    S(this, "priority", 90);
    S(this, "subPriority", 1);
    S(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, e, r) {
    switch (e) {
      case "d":
        return ne(ce.date, t);
      case "do":
        return r.ordinalNumber(t, { unit: "date" });
      default:
        return se(e.length, t);
    }
  }
  validate(t, e) {
    const r = t.getFullYear(), o = Ja(r), s = t.getMonth();
    return o ? e >= 1 && e <= cc[s] : e >= 1 && e <= ic[s];
  }
  set(t, e, r) {
    return t.setDate(r), t.setHours(0, 0, 0, 0), t;
  }
}
class uc extends X {
  constructor() {
    super(...arguments);
    S(this, "priority", 90);
    S(this, "subpriority", 1);
    S(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "E",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, e, r) {
    switch (e) {
      case "D":
      case "DD":
        return ne(ce.dayOfYear, t);
      case "Do":
        return r.ordinalNumber(t, { unit: "date" });
      default:
        return se(e.length, t);
    }
  }
  validate(t, e) {
    const r = t.getFullYear();
    return Ja(r) ? e >= 1 && e <= 366 : e >= 1 && e <= 365;
  }
  set(t, e, r) {
    return t.setMonth(0, r), t.setHours(0, 0, 0, 0), t;
  }
}
function kn(n, a, t) {
  var d, p, m, h;
  const e = mt(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((p = (d = t == null ? void 0 : t.locale) == null ? void 0 : d.options) == null ? void 0 : p.weekStartsOn) ?? e.weekStartsOn ?? ((h = (m = e.locale) == null ? void 0 : m.options) == null ? void 0 : h.weekStartsOn) ?? 0, o = E(n), s = o.getDay(), c = (a % 7 + 7) % 7, l = 7 - r, u = a < 0 || a > 6 ? a - (s + l) % 7 : (c + l) % 7 - (s + l) % 7;
  return Ue(o, u);
}
class dc extends X {
  constructor() {
    super(...arguments);
    S(this, "priority", 90);
    S(this, "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]);
  }
  parse(t, e, r) {
    switch (e) {
      case "E":
      case "EE":
      case "EEE":
        return r.day(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.day(t, { width: "short", context: "formatting" }) || r.day(t, { width: "narrow", context: "formatting" });
      case "EEEEE":
        return r.day(t, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return r.day(t, { width: "short", context: "formatting" }) || r.day(t, { width: "narrow", context: "formatting" });
      case "EEEE":
      default:
        return r.day(t, { width: "wide", context: "formatting" }) || r.day(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.day(t, { width: "short", context: "formatting" }) || r.day(t, { width: "narrow", context: "formatting" });
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 6;
  }
  set(t, e, r, o) {
    return t = kn(t, r, o), t.setHours(0, 0, 0, 0), t;
  }
}
class pc extends X {
  constructor() {
    super(...arguments);
    S(this, "priority", 90);
    S(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "E",
      "i",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, e, r, o) {
    const s = (i) => {
      const c = Math.floor((i - 1) / 7) * 7;
      return (i + o.weekStartsOn + 6) % 7 + c;
    };
    switch (e) {
      case "e":
      case "ee":
        return le(se(e.length, t), s);
      case "eo":
        return le(
          r.ordinalNumber(t, {
            unit: "day"
          }),
          s
        );
      case "eee":
        return r.day(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.day(t, { width: "short", context: "formatting" }) || r.day(t, { width: "narrow", context: "formatting" });
      case "eeeee":
        return r.day(t, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return r.day(t, { width: "short", context: "formatting" }) || r.day(t, { width: "narrow", context: "formatting" });
      case "eeee":
      default:
        return r.day(t, { width: "wide", context: "formatting" }) || r.day(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.day(t, { width: "short", context: "formatting" }) || r.day(t, { width: "narrow", context: "formatting" });
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 6;
  }
  set(t, e, r, o) {
    return t = kn(t, r, o), t.setHours(0, 0, 0, 0), t;
  }
}
class fc extends X {
  constructor() {
    super(...arguments);
    S(this, "priority", 90);
    S(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "E",
      "i",
      "e",
      "t",
      "T"
    ]);
  }
  parse(t, e, r, o) {
    const s = (i) => {
      const c = Math.floor((i - 1) / 7) * 7;
      return (i + o.weekStartsOn + 6) % 7 + c;
    };
    switch (e) {
      case "c":
      case "cc":
        return le(se(e.length, t), s);
      case "co":
        return le(
          r.ordinalNumber(t, {
            unit: "day"
          }),
          s
        );
      case "ccc":
        return r.day(t, {
          width: "abbreviated",
          context: "standalone"
        }) || r.day(t, { width: "short", context: "standalone" }) || r.day(t, { width: "narrow", context: "standalone" });
      case "ccccc":
        return r.day(t, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return r.day(t, { width: "short", context: "standalone" }) || r.day(t, { width: "narrow", context: "standalone" });
      case "cccc":
      default:
        return r.day(t, { width: "wide", context: "standalone" }) || r.day(t, {
          width: "abbreviated",
          context: "standalone"
        }) || r.day(t, { width: "short", context: "standalone" }) || r.day(t, { width: "narrow", context: "standalone" });
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 6;
  }
  set(t, e, r, o) {
    return t = kn(t, r, o), t.setHours(0, 0, 0, 0), t;
  }
}
function mc(n, a) {
  const t = E(n), e = zi(t), r = a - e;
  return Ue(t, r);
}
class hc extends X {
  constructor() {
    super(...arguments);
    S(this, "priority", 90);
    S(this, "incompatibleTokens", [
      "y",
      "Y",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "E",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, e, r) {
    const o = (s) => s === 0 ? 7 : s;
    switch (e) {
      case "i":
      case "ii":
        return se(e.length, t);
      case "io":
        return r.ordinalNumber(t, { unit: "day" });
      case "iii":
        return le(
          r.day(t, {
            width: "abbreviated",
            context: "formatting"
          }) || r.day(t, {
            width: "short",
            context: "formatting"
          }) || r.day(t, {
            width: "narrow",
            context: "formatting"
          }),
          o
        );
      case "iiiii":
        return le(
          r.day(t, {
            width: "narrow",
            context: "formatting"
          }),
          o
        );
      case "iiiiii":
        return le(
          r.day(t, {
            width: "short",
            context: "formatting"
          }) || r.day(t, {
            width: "narrow",
            context: "formatting"
          }),
          o
        );
      case "iiii":
      default:
        return le(
          r.day(t, {
            width: "wide",
            context: "formatting"
          }) || r.day(t, {
            width: "abbreviated",
            context: "formatting"
          }) || r.day(t, {
            width: "short",
            context: "formatting"
          }) || r.day(t, {
            width: "narrow",
            context: "formatting"
          }),
          o
        );
    }
  }
  validate(t, e) {
    return e >= 1 && e <= 7;
  }
  set(t, e, r) {
    return t = mc(t, r), t.setHours(0, 0, 0, 0), t;
  }
}
class _c extends X {
  constructor() {
    super(...arguments);
    S(this, "priority", 80);
    S(this, "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]);
  }
  parse(t, e, r) {
    switch (e) {
      case "a":
      case "aa":
      case "aaa":
        return r.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaaa":
        return r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return r.dayPeriod(t, {
          width: "wide",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(t, e, r) {
    return t.setHours(Dn(r), 0, 0, 0), t;
  }
}
class gc extends X {
  constructor() {
    super(...arguments);
    S(this, "priority", 80);
    S(this, "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]);
  }
  parse(t, e, r) {
    switch (e) {
      case "b":
      case "bb":
      case "bbb":
        return r.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbbb":
        return r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return r.dayPeriod(t, {
          width: "wide",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(t, e, r) {
    return t.setHours(Dn(r), 0, 0, 0), t;
  }
}
class vc extends X {
  constructor() {
    super(...arguments);
    S(this, "priority", 80);
    S(this, "incompatibleTokens", ["a", "b", "t", "T"]);
  }
  parse(t, e, r) {
    switch (e) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return r.dayPeriod(t, {
          width: "wide",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(t, e, r) {
    return t.setHours(Dn(r), 0, 0, 0), t;
  }
}
class bc extends X {
  constructor() {
    super(...arguments);
    S(this, "priority", 70);
    S(this, "incompatibleTokens", ["H", "K", "k", "t", "T"]);
  }
  parse(t, e, r) {
    switch (e) {
      case "h":
        return ne(ce.hour12h, t);
      case "ho":
        return r.ordinalNumber(t, { unit: "hour" });
      default:
        return se(e.length, t);
    }
  }
  validate(t, e) {
    return e >= 1 && e <= 12;
  }
  set(t, e, r) {
    const o = t.getHours() >= 12;
    return o && r < 12 ? t.setHours(r + 12, 0, 0, 0) : !o && r === 12 ? t.setHours(0, 0, 0, 0) : t.setHours(r, 0, 0, 0), t;
  }
}
class wc extends X {
  constructor() {
    super(...arguments);
    S(this, "priority", 70);
    S(this, "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]);
  }
  parse(t, e, r) {
    switch (e) {
      case "H":
        return ne(ce.hour23h, t);
      case "Ho":
        return r.ordinalNumber(t, { unit: "hour" });
      default:
        return se(e.length, t);
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 23;
  }
  set(t, e, r) {
    return t.setHours(r, 0, 0, 0), t;
  }
}
class yc extends X {
  constructor() {
    super(...arguments);
    S(this, "priority", 70);
    S(this, "incompatibleTokens", ["h", "H", "k", "t", "T"]);
  }
  parse(t, e, r) {
    switch (e) {
      case "K":
        return ne(ce.hour11h, t);
      case "Ko":
        return r.ordinalNumber(t, { unit: "hour" });
      default:
        return se(e.length, t);
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 11;
  }
  set(t, e, r) {
    return t.getHours() >= 12 && r < 12 ? t.setHours(r + 12, 0, 0, 0) : t.setHours(r, 0, 0, 0), t;
  }
}
class Dc extends X {
  constructor() {
    super(...arguments);
    S(this, "priority", 70);
    S(this, "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]);
  }
  parse(t, e, r) {
    switch (e) {
      case "k":
        return ne(ce.hour24h, t);
      case "ko":
        return r.ordinalNumber(t, { unit: "hour" });
      default:
        return se(e.length, t);
    }
  }
  validate(t, e) {
    return e >= 1 && e <= 24;
  }
  set(t, e, r) {
    const o = r <= 24 ? r % 24 : r;
    return t.setHours(o, 0, 0, 0), t;
  }
}
class kc extends X {
  constructor() {
    super(...arguments);
    S(this, "priority", 60);
    S(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(t, e, r) {
    switch (e) {
      case "m":
        return ne(ce.minute, t);
      case "mo":
        return r.ordinalNumber(t, { unit: "minute" });
      default:
        return se(e.length, t);
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 59;
  }
  set(t, e, r) {
    return t.setMinutes(r, 0, 0), t;
  }
}
class xc extends X {
  constructor() {
    super(...arguments);
    S(this, "priority", 50);
    S(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(t, e, r) {
    switch (e) {
      case "s":
        return ne(ce.second, t);
      case "so":
        return r.ordinalNumber(t, { unit: "second" });
      default:
        return se(e.length, t);
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 59;
  }
  set(t, e, r) {
    return t.setSeconds(r, 0), t;
  }
}
class Cc extends X {
  constructor() {
    super(...arguments);
    S(this, "priority", 30);
    S(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(t, e) {
    const r = (o) => Math.trunc(o * Math.pow(10, -e.length + 3));
    return le(se(e.length, t), r);
  }
  set(t, e, r) {
    return t.setMilliseconds(r), t;
  }
}
class Mc extends X {
  constructor() {
    super(...arguments);
    S(this, "priority", 10);
    S(this, "incompatibleTokens", ["t", "T", "x"]);
  }
  parse(t, e) {
    switch (e) {
      case "X":
        return Ye(
          Re.basicOptionalMinutes,
          t
        );
      case "XX":
        return Ye(Re.basic, t);
      case "XXXX":
        return Ye(
          Re.basicOptionalSeconds,
          t
        );
      case "XXXXX":
        return Ye(
          Re.extendedOptionalSeconds,
          t
        );
      case "XXX":
      default:
        return Ye(Re.extended, t);
    }
  }
  set(t, e, r) {
    return e.timestampIsSet ? t : Z(
      t,
      t.getTime() - vr(t) - r
    );
  }
}
class Ec extends X {
  constructor() {
    super(...arguments);
    S(this, "priority", 10);
    S(this, "incompatibleTokens", ["t", "T", "X"]);
  }
  parse(t, e) {
    switch (e) {
      case "x":
        return Ye(
          Re.basicOptionalMinutes,
          t
        );
      case "xx":
        return Ye(Re.basic, t);
      case "xxxx":
        return Ye(
          Re.basicOptionalSeconds,
          t
        );
      case "xxxxx":
        return Ye(
          Re.extendedOptionalSeconds,
          t
        );
      case "xxx":
      default:
        return Ye(Re.extended, t);
    }
  }
  set(t, e, r) {
    return e.timestampIsSet ? t : Z(
      t,
      t.getTime() - vr(t) - r
    );
  }
}
class Sc extends X {
  constructor() {
    super(...arguments);
    S(this, "priority", 40);
    S(this, "incompatibleTokens", "*");
  }
  parse(t) {
    return Xa(t);
  }
  set(t, e, r) {
    return [Z(t, r * 1e3), { timestampIsSet: !0 }];
  }
}
class Pc extends X {
  constructor() {
    super(...arguments);
    S(this, "priority", 20);
    S(this, "incompatibleTokens", "*");
  }
  parse(t) {
    return Xa(t);
  }
  set(t, e, r) {
    return [Z(t, r), { timestampIsSet: !0 }];
  }
}
const Oc = {
  G: new Ki(),
  y: new Ui(),
  Y: new Xi(),
  R: new Gi(),
  u: new Ji(),
  Q: new Zi(),
  q: new ec(),
  M: new tc(),
  L: new rc(),
  w: new ac(),
  I: new sc(),
  d: new lc(),
  D: new uc(),
  E: new dc(),
  e: new pc(),
  c: new fc(),
  i: new hc(),
  a: new _c(),
  b: new gc(),
  B: new vc(),
  h: new bc(),
  H: new wc(),
  K: new yc(),
  k: new Dc(),
  m: new kc(),
  s: new xc(),
  S: new Cc(),
  X: new Mc(),
  x: new Ec(),
  t: new Sc(),
  T: new Pc()
}, Tc = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Nc = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Rc = /^'([^]*?)'?$/, Yc = /''/g, Ic = /\S/, Fc = /[a-zA-Z]/;
function Xr(n, a, t, e) {
  var g, v, b, D, k, T, N, L;
  const r = $i(), o = (e == null ? void 0 : e.locale) ?? r.locale ?? Ba, s = (e == null ? void 0 : e.firstWeekContainsDate) ?? ((v = (g = e == null ? void 0 : e.locale) == null ? void 0 : g.options) == null ? void 0 : v.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((D = (b = r.locale) == null ? void 0 : b.options) == null ? void 0 : D.firstWeekContainsDate) ?? 1, i = (e == null ? void 0 : e.weekStartsOn) ?? ((T = (k = e == null ? void 0 : e.locale) == null ? void 0 : k.options) == null ? void 0 : T.weekStartsOn) ?? r.weekStartsOn ?? ((L = (N = r.locale) == null ? void 0 : N.options) == null ? void 0 : L.weekStartsOn) ?? 0;
  if (a === "")
    return n === "" ? E(t) : Z(t, NaN);
  const c = {
    firstWeekContainsDate: s,
    weekStartsOn: i,
    locale: o
  }, l = [new Vi()], u = a.match(Nc).map((M) => {
    const P = M[0];
    if (P in xr) {
      const O = xr[P];
      return O(M, o.formatLong);
    }
    return M;
  }).join("").match(Tc), d = [];
  for (let M of u) {
    !(e != null && e.useAdditionalWeekYearTokens) && Ka(M) && un(M, a, n), !(e != null && e.useAdditionalDayOfYearTokens) && Va(M) && un(M, a, n);
    const P = M[0], O = Oc[P];
    if (O) {
      const { incompatibleTokens: z } = O;
      if (Array.isArray(z)) {
        const H = d.find(
          (j) => z.includes(j.token) || j.token === P
        );
        if (H)
          throw new RangeError(
            `The format string mustn't contain \`${H.fullToken}\` and \`${M}\` at the same time`
          );
      } else if (O.incompatibleTokens === "*" && d.length > 0)
        throw new RangeError(
          `The format string mustn't contain \`${M}\` and any other token at the same time`
        );
      d.push({ token: P, fullToken: M });
      const U = O.run(
        n,
        M,
        o.match,
        c
      );
      if (!U)
        return Z(t, NaN);
      l.push(U.setter), n = U.rest;
    } else {
      if (P.match(Fc))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" + P + "`"
        );
      if (M === "''" ? M = "'" : P === "'" && (M = Lc(M)), n.indexOf(M) === 0)
        n = n.slice(M.length);
      else
        return Z(t, NaN);
    }
  }
  if (n.length > 0 && Ic.test(n))
    return Z(t, NaN);
  const p = l.map((M) => M.priority).sort((M, P) => P - M).filter((M, P, O) => O.indexOf(M) === P).map(
    (M) => l.filter((P) => P.priority === M).sort((P, O) => O.subPriority - P.subPriority)
  ).map((M) => M[0]);
  let m = E(t);
  if (isNaN(m.getTime()))
    return Z(t, NaN);
  const h = {};
  for (const M of p) {
    if (!M.validate(m, c))
      return Z(t, NaN);
    const P = M.set(m, h, c);
    Array.isArray(P) ? (m = P[0], Object.assign(h, P[1])) : m = P;
  }
  return Z(t, m);
}
function Lc(n) {
  return n.match(Rc)[1].replace(Yc, "'");
}
function Ac(n, a) {
  const t = E(n), e = E(a);
  return t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth();
}
function jc(n, a) {
  const t = ln(n), e = ln(a);
  return +t == +e;
}
function Wc(n, a) {
  const t = E(n), e = E(a);
  return t.getFullYear() === e.getFullYear();
}
function Ht(n, a) {
  const t = +E(n), [e, r] = [
    +E(a.start),
    +E(a.end)
  ].sort((o, s) => o - s);
  return t >= e && t <= r;
}
function $c(n, a) {
  return Ue(n, -a);
}
function zc(n, a) {
  const e = qc(n);
  let r;
  if (e.date) {
    const c = Vc(e.date, 2);
    r = Kc(c.restDateString, c.year);
  }
  if (!r || isNaN(r.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  const o = r.getTime();
  let s = 0, i;
  if (e.time && (s = Uc(e.time), isNaN(s)))
    return /* @__PURE__ */ new Date(NaN);
  if (e.timezone) {
    if (i = Xc(e.timezone), isNaN(i))
      return /* @__PURE__ */ new Date(NaN);
  } else {
    const c = new Date(o + s), l = /* @__PURE__ */ new Date(0);
    return l.setFullYear(
      c.getUTCFullYear(),
      c.getUTCMonth(),
      c.getUTCDate()
    ), l.setHours(
      c.getUTCHours(),
      c.getUTCMinutes(),
      c.getUTCSeconds(),
      c.getUTCMilliseconds()
    ), l;
  }
  return new Date(o + s + i);
}
const tr = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
}, Hc = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/, Bc = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/, Qc = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function qc(n) {
  const a = {}, t = n.split(tr.dateTimeDelimiter);
  let e;
  if (t.length > 2)
    return a;
  if (/:/.test(t[0]) ? e = t[0] : (a.date = t[0], e = t[1], tr.timeZoneDelimiter.test(a.date) && (a.date = n.split(tr.timeZoneDelimiter)[0], e = n.substr(
    a.date.length,
    n.length
  ))), e) {
    const r = tr.timezone.exec(e);
    r ? (a.time = e.replace(r[1], ""), a.timezone = r[1]) : a.time = e;
  }
  return a;
}
function Vc(n, a) {
  const t = new RegExp(
    "^(?:(\\d{4}|[+-]\\d{" + (4 + a) + "})|(\\d{2}|[+-]\\d{" + (2 + a) + "})$)"
  ), e = n.match(t);
  if (!e) return { year: NaN, restDateString: "" };
  const r = e[1] ? parseInt(e[1]) : null, o = e[2] ? parseInt(e[2]) : null;
  return {
    year: o === null ? r : o * 100,
    restDateString: n.slice((e[1] || e[2]).length)
  };
}
function Kc(n, a) {
  if (a === null) return /* @__PURE__ */ new Date(NaN);
  const t = n.match(Hc);
  if (!t) return /* @__PURE__ */ new Date(NaN);
  const e = !!t[4], r = Lt(t[1]), o = Lt(t[2]) - 1, s = Lt(t[3]), i = Lt(t[4]), c = Lt(t[5]) - 1;
  if (e)
    return tl(a, i, c) ? Gc(a, i, c) : /* @__PURE__ */ new Date(NaN);
  {
    const l = /* @__PURE__ */ new Date(0);
    return !Zc(a, o, s) || !el(a, r) ? /* @__PURE__ */ new Date(NaN) : (l.setUTCFullYear(a, o, Math.max(r, s)), l);
  }
}
function Lt(n) {
  return n ? parseInt(n) : 1;
}
function Uc(n) {
  const a = n.match(Bc);
  if (!a) return NaN;
  const t = Gr(a[1]), e = Gr(a[2]), r = Gr(a[3]);
  return rl(t, e, r) ? t * Rr + e * Nr + r * 1e3 : NaN;
}
function Gr(n) {
  return n && parseFloat(n.replace(",", ".")) || 0;
}
function Xc(n) {
  if (n === "Z") return 0;
  const a = n.match(Qc);
  if (!a) return 0;
  const t = a[1] === "+" ? -1 : 1, e = parseInt(a[2]), r = a[3] && parseInt(a[3]) || 0;
  return nl(e, r) ? t * (e * Rr + r * Nr) : NaN;
}
function Gc(n, a, t) {
  const e = /* @__PURE__ */ new Date(0);
  e.setUTCFullYear(n, 0, 4);
  const r = e.getUTCDay() || 7, o = (a - 1) * 7 + t + 1 - r;
  return e.setUTCDate(e.getUTCDate() + o), e;
}
const Jc = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function Za(n) {
  return n % 400 === 0 || n % 4 === 0 && n % 100 !== 0;
}
function Zc(n, a, t) {
  return a >= 0 && a <= 11 && t >= 1 && t <= (Jc[a] || (Za(n) ? 29 : 28));
}
function el(n, a) {
  return a >= 1 && a <= (Za(n) ? 366 : 365);
}
function tl(n, a, t) {
  return a >= 1 && a <= 53 && t >= 0 && t <= 6;
}
function rl(n, a, t) {
  return n === 24 ? a === 0 && t === 0 : t >= 0 && t < 60 && a >= 0 && a < 60 && n >= 0 && n < 25;
}
function nl(n, a) {
  return a >= 0 && a <= 59;
}
function ke(n, a) {
  const t = E(n), e = t.getFullYear(), r = t.getDate(), o = Z(n, 0);
  o.setFullYear(e, a, 15), o.setHours(0, 0, 0, 0);
  const s = Wi(o);
  return t.setMonth(a, Math.min(r, s)), t;
}
function al(n, a) {
  let t = E(n);
  return isNaN(+t) ? Z(n, NaN) : (a.year != null && t.setFullYear(a.year), a.month != null && (t = ke(t, a.month)), a.date != null && t.setDate(a.date), a.hours != null && t.setHours(a.hours), a.minutes != null && t.setMinutes(a.minutes), a.seconds != null && t.setSeconds(a.seconds), a.milliseconds != null && t.setMilliseconds(a.milliseconds), t);
}
function ur(n, a) {
  const t = E(n);
  return t.setHours(a), t;
}
function dr(n, a) {
  const t = E(n);
  return t.setMinutes(a), t;
}
function vt(n, a) {
  const t = E(n), e = Math.trunc(t.getMonth() / 3) + 1, r = a - e;
  return ke(t, t.getMonth() + r * 3);
}
function pr(n, a) {
  const t = E(n);
  return t.setSeconds(a), t;
}
function Te(n, a) {
  const t = E(n);
  return isNaN(+t) ? Z(n, NaN) : (t.setFullYear(a), t);
}
function kt(n, a) {
  return Oe(n, -a);
}
function eo(n, a) {
  return bn(n, -a);
}
function ia(n, a) {
  return br(n, -a);
}
function xt(n, a) {
  return Qe(n, -a);
}
function Ir() {
  return typeof window < "u";
}
function Pt(n) {
  return to(n) ? (n.nodeName || "").toLowerCase() : "#document";
}
function xe(n) {
  var a;
  return (n == null || (a = n.ownerDocument) == null ? void 0 : a.defaultView) || window;
}
function We(n) {
  var a;
  return (a = (to(n) ? n.ownerDocument : n.document) || window.document) == null ? void 0 : a.documentElement;
}
function to(n) {
  return Ir() ? n instanceof Node || n instanceof xe(n).Node : !1;
}
function me(n) {
  return Ir() ? n instanceof Element || n instanceof xe(n).Element : !1;
}
function je(n) {
  return Ir() ? n instanceof HTMLElement || n instanceof xe(n).HTMLElement : !1;
}
function ca(n) {
  return !Ir() || typeof ShadowRoot > "u" ? !1 : n instanceof ShadowRoot || n instanceof xe(n).ShadowRoot;
}
function Vt(n) {
  const {
    overflow: a,
    overflowX: t,
    overflowY: e,
    display: r
  } = Pe(n);
  return /auto|scroll|overlay|hidden|clip/.test(a + e + t) && !["inline", "contents"].includes(r);
}
function ol(n) {
  return ["table", "td", "th"].includes(Pt(n));
}
function Fr(n) {
  return [":popover-open", ":modal"].some((a) => {
    try {
      return n.matches(a);
    } catch {
      return !1;
    }
  });
}
function xn(n) {
  const a = Cn(), t = me(n) ? Pe(n) : n;
  return t.transform !== "none" || t.perspective !== "none" || (t.containerType ? t.containerType !== "normal" : !1) || !a && (t.backdropFilter ? t.backdropFilter !== "none" : !1) || !a && (t.filter ? t.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((e) => (t.willChange || "").includes(e)) || ["paint", "layout", "strict", "content"].some((e) => (t.contain || "").includes(e));
}
function sl(n) {
  let a = rt(n);
  for (; je(a) && !Ct(a); ) {
    if (xn(a))
      return a;
    if (Fr(a))
      return null;
    a = rt(a);
  }
  return null;
}
function Cn() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ct(n) {
  return ["html", "body", "#document"].includes(Pt(n));
}
function Pe(n) {
  return xe(n).getComputedStyle(n);
}
function Lr(n) {
  return me(n) ? {
    scrollLeft: n.scrollLeft,
    scrollTop: n.scrollTop
  } : {
    scrollLeft: n.scrollX,
    scrollTop: n.scrollY
  };
}
function rt(n) {
  if (Pt(n) === "html")
    return n;
  const a = (
    // Step into the shadow DOM of the parent of a slotted node.
    n.assignedSlot || // DOM Element detected.
    n.parentNode || // ShadowRoot detected.
    ca(n) && n.host || // Fallback.
    We(n)
  );
  return ca(a) ? a.host : a;
}
function ro(n) {
  const a = rt(n);
  return Ct(a) ? n.ownerDocument ? n.ownerDocument.body : n.body : je(a) && Vt(a) ? a : ro(a);
}
function Bt(n, a, t) {
  var e;
  a === void 0 && (a = []), t === void 0 && (t = !0);
  const r = ro(n), o = r === ((e = n.ownerDocument) == null ? void 0 : e.body), s = xe(r);
  if (o) {
    const i = pn(s);
    return a.concat(s, s.visualViewport || [], Vt(r) ? r : [], i && t ? Bt(i) : []);
  }
  return a.concat(r, Bt(r, [], t));
}
function pn(n) {
  return n.parent && Object.getPrototypeOf(n.parent) ? n.frameElement : null;
}
const Mt = Math.min, lt = Math.max, Mr = Math.round, rr = Math.floor, Ae = (n) => ({
  x: n,
  y: n
}), il = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, cl = {
  start: "end",
  end: "start"
};
function ll(n, a, t) {
  return lt(n, Mt(a, t));
}
function Ar(n, a) {
  return typeof n == "function" ? n(a) : n;
}
function Et(n) {
  return n.split("-")[0];
}
function Kt(n) {
  return n.split("-")[1];
}
function ul(n) {
  return n === "x" ? "y" : "x";
}
function Mn(n) {
  return n === "y" ? "height" : "width";
}
function Qt(n) {
  return ["top", "bottom"].includes(Et(n)) ? "y" : "x";
}
function En(n) {
  return ul(Qt(n));
}
function dl(n, a, t) {
  t === void 0 && (t = !1);
  const e = Kt(n), r = En(n), o = Mn(r);
  let s = r === "x" ? e === (t ? "end" : "start") ? "right" : "left" : e === "start" ? "bottom" : "top";
  return a.reference[o] > a.floating[o] && (s = Er(s)), [s, Er(s)];
}
function pl(n) {
  const a = Er(n);
  return [fn(n), a, fn(a)];
}
function fn(n) {
  return n.replace(/start|end/g, (a) => cl[a]);
}
function fl(n, a, t) {
  const e = ["left", "right"], r = ["right", "left"], o = ["top", "bottom"], s = ["bottom", "top"];
  switch (n) {
    case "top":
    case "bottom":
      return t ? a ? r : e : a ? e : r;
    case "left":
    case "right":
      return a ? o : s;
    default:
      return [];
  }
}
function ml(n, a, t, e) {
  const r = Kt(n);
  let o = fl(Et(n), t === "start", e);
  return r && (o = o.map((s) => s + "-" + r), a && (o = o.concat(o.map(fn)))), o;
}
function Er(n) {
  return n.replace(/left|right|bottom|top/g, (a) => il[a]);
}
function hl(n) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...n
  };
}
function no(n) {
  return typeof n != "number" ? hl(n) : {
    top: n,
    right: n,
    bottom: n,
    left: n
  };
}
function Sr(n) {
  const {
    x: a,
    y: t,
    width: e,
    height: r
  } = n;
  return {
    width: e,
    height: r,
    top: t,
    left: a,
    right: a + e,
    bottom: t + r,
    x: a,
    y: t
  };
}
function la(n, a, t) {
  let {
    reference: e,
    floating: r
  } = n;
  const o = Qt(a), s = En(a), i = Mn(s), c = Et(a), l = o === "y", u = e.x + e.width / 2 - r.width / 2, d = e.y + e.height / 2 - r.height / 2, p = e[i] / 2 - r[i] / 2;
  let m;
  switch (c) {
    case "top":
      m = {
        x: u,
        y: e.y - r.height
      };
      break;
    case "bottom":
      m = {
        x: u,
        y: e.y + e.height
      };
      break;
    case "right":
      m = {
        x: e.x + e.width,
        y: d
      };
      break;
    case "left":
      m = {
        x: e.x - r.width,
        y: d
      };
      break;
    default:
      m = {
        x: e.x,
        y: e.y
      };
  }
  switch (Kt(a)) {
    case "start":
      m[s] -= p * (t && l ? -1 : 1);
      break;
    case "end":
      m[s] += p * (t && l ? -1 : 1);
      break;
  }
  return m;
}
const _l = async (n, a, t) => {
  const {
    placement: e = "bottom",
    strategy: r = "absolute",
    middleware: o = [],
    platform: s
  } = t, i = o.filter(Boolean), c = await (s.isRTL == null ? void 0 : s.isRTL(a));
  let l = await s.getElementRects({
    reference: n,
    floating: a,
    strategy: r
  }), {
    x: u,
    y: d
  } = la(l, e, c), p = e, m = {}, h = 0;
  for (let g = 0; g < i.length; g++) {
    const {
      name: v,
      fn: b
    } = i[g], {
      x: D,
      y: k,
      data: T,
      reset: N
    } = await b({
      x: u,
      y: d,
      initialPlacement: e,
      placement: p,
      strategy: r,
      middlewareData: m,
      rects: l,
      platform: s,
      elements: {
        reference: n,
        floating: a
      }
    });
    u = D ?? u, d = k ?? d, m = {
      ...m,
      [v]: {
        ...m[v],
        ...T
      }
    }, N && h <= 50 && (h++, typeof N == "object" && (N.placement && (p = N.placement), N.rects && (l = N.rects === !0 ? await s.getElementRects({
      reference: n,
      floating: a,
      strategy: r
    }) : N.rects), {
      x: u,
      y: d
    } = la(l, p, c)), g = -1);
  }
  return {
    x: u,
    y: d,
    placement: p,
    strategy: r,
    middlewareData: m
  };
};
async function gl(n, a) {
  var t;
  a === void 0 && (a = {});
  const {
    x: e,
    y: r,
    platform: o,
    rects: s,
    elements: i,
    strategy: c
  } = n, {
    boundary: l = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: d = "floating",
    altBoundary: p = !1,
    padding: m = 0
  } = Ar(a, n), h = no(m), v = i[p ? d === "floating" ? "reference" : "floating" : d], b = Sr(await o.getClippingRect({
    element: (t = await (o.isElement == null ? void 0 : o.isElement(v))) == null || t ? v : v.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(i.floating)),
    boundary: l,
    rootBoundary: u,
    strategy: c
  })), D = d === "floating" ? {
    x: e,
    y: r,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, k = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(i.floating)), T = await (o.isElement == null ? void 0 : o.isElement(k)) ? await (o.getScale == null ? void 0 : o.getScale(k)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, N = Sr(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: D,
    offsetParent: k,
    strategy: c
  }) : D);
  return {
    top: (b.top - N.top + h.top) / T.y,
    bottom: (N.bottom - b.bottom + h.bottom) / T.y,
    left: (b.left - N.left + h.left) / T.x,
    right: (N.right - b.right + h.right) / T.x
  };
}
const vl = (n) => ({
  name: "arrow",
  options: n,
  async fn(a) {
    const {
      x: t,
      y: e,
      placement: r,
      rects: o,
      platform: s,
      elements: i,
      middlewareData: c
    } = a, {
      element: l,
      padding: u = 0
    } = Ar(n, a) || {};
    if (l == null)
      return {};
    const d = no(u), p = {
      x: t,
      y: e
    }, m = En(r), h = Mn(m), g = await s.getDimensions(l), v = m === "y", b = v ? "top" : "left", D = v ? "bottom" : "right", k = v ? "clientHeight" : "clientWidth", T = o.reference[h] + o.reference[m] - p[m] - o.floating[h], N = p[m] - o.reference[m], L = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l));
    let M = L ? L[k] : 0;
    (!M || !await (s.isElement == null ? void 0 : s.isElement(L))) && (M = i.floating[k] || o.floating[h]);
    const P = T / 2 - N / 2, O = M / 2 - g[h] / 2 - 1, z = Mt(d[b], O), U = Mt(d[D], O), H = z, j = M - g[h] - U, B = M / 2 - g[h] / 2 + P, Q = ll(H, B, j), R = !c.arrow && Kt(r) != null && B !== Q && o.reference[h] / 2 - (B < H ? z : U) - g[h] / 2 < 0, A = R ? B < H ? B - H : B - j : 0;
    return {
      [m]: p[m] + A,
      data: {
        [m]: Q,
        centerOffset: B - Q - A,
        ...R && {
          alignmentOffset: A
        }
      },
      reset: R
    };
  }
}), bl = function(n) {
  return n === void 0 && (n = {}), {
    name: "flip",
    options: n,
    async fn(a) {
      var t, e;
      const {
        placement: r,
        middlewareData: o,
        rects: s,
        initialPlacement: i,
        platform: c,
        elements: l
      } = a, {
        mainAxis: u = !0,
        crossAxis: d = !0,
        fallbackPlacements: p,
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: g = !0,
        ...v
      } = Ar(n, a);
      if ((t = o.arrow) != null && t.alignmentOffset)
        return {};
      const b = Et(r), D = Qt(i), k = Et(i) === i, T = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), N = p || (k || !g ? [Er(i)] : pl(i)), L = h !== "none";
      !p && L && N.push(...ml(i, g, h, T));
      const M = [i, ...N], P = await gl(a, v), O = [];
      let z = ((e = o.flip) == null ? void 0 : e.overflows) || [];
      if (u && O.push(P[b]), d) {
        const B = dl(r, s, T);
        O.push(P[B[0]], P[B[1]]);
      }
      if (z = [...z, {
        placement: r,
        overflows: O
      }], !O.every((B) => B <= 0)) {
        var U, H;
        const B = (((U = o.flip) == null ? void 0 : U.index) || 0) + 1, Q = M[B];
        if (Q)
          return {
            data: {
              index: B,
              overflows: z
            },
            reset: {
              placement: Q
            }
          };
        let R = (H = z.filter((A) => A.overflows[0] <= 0).sort((A, F) => A.overflows[1] - F.overflows[1])[0]) == null ? void 0 : H.placement;
        if (!R)
          switch (m) {
            case "bestFit": {
              var j;
              const A = (j = z.filter((F) => {
                if (L) {
                  const ae = Qt(F.placement);
                  return ae === D || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  ae === "y";
                }
                return !0;
              }).map((F) => [F.placement, F.overflows.filter((ae) => ae > 0).reduce((ae, be) => ae + be, 0)]).sort((F, ae) => F[1] - ae[1])[0]) == null ? void 0 : j[0];
              A && (R = A);
              break;
            }
            case "initialPlacement":
              R = i;
              break;
          }
        if (r !== R)
          return {
            reset: {
              placement: R
            }
          };
      }
      return {};
    }
  };
};
async function wl(n, a) {
  const {
    placement: t,
    platform: e,
    elements: r
  } = n, o = await (e.isRTL == null ? void 0 : e.isRTL(r.floating)), s = Et(t), i = Kt(t), c = Qt(t) === "y", l = ["left", "top"].includes(s) ? -1 : 1, u = o && c ? -1 : 1, d = Ar(a, n);
  let {
    mainAxis: p,
    crossAxis: m,
    alignmentAxis: h
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return i && typeof h == "number" && (m = i === "end" ? h * -1 : h), c ? {
    x: m * u,
    y: p * l
  } : {
    x: p * l,
    y: m * u
  };
}
const yl = function(n) {
  return n === void 0 && (n = 0), {
    name: "offset",
    options: n,
    async fn(a) {
      var t, e;
      const {
        x: r,
        y: o,
        placement: s,
        middlewareData: i
      } = a, c = await wl(a, n);
      return s === ((t = i.offset) == null ? void 0 : t.placement) && (e = i.arrow) != null && e.alignmentOffset ? {} : {
        x: r + c.x,
        y: o + c.y,
        data: {
          ...c,
          placement: s
        }
      };
    }
  };
};
function ao(n) {
  const a = Pe(n);
  let t = parseFloat(a.width) || 0, e = parseFloat(a.height) || 0;
  const r = je(n), o = r ? n.offsetWidth : t, s = r ? n.offsetHeight : e, i = Mr(t) !== o || Mr(e) !== s;
  return i && (t = o, e = s), {
    width: t,
    height: e,
    $: i
  };
}
function Sn(n) {
  return me(n) ? n : n.contextElement;
}
function bt(n) {
  const a = Sn(n);
  if (!je(a))
    return Ae(1);
  const t = a.getBoundingClientRect(), {
    width: e,
    height: r,
    $: o
  } = ao(a);
  let s = (o ? Mr(t.width) : t.width) / e, i = (o ? Mr(t.height) : t.height) / r;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const Dl = /* @__PURE__ */ Ae(0);
function oo(n) {
  const a = xe(n);
  return !Cn() || !a.visualViewport ? Dl : {
    x: a.visualViewport.offsetLeft,
    y: a.visualViewport.offsetTop
  };
}
function kl(n, a, t) {
  return a === void 0 && (a = !1), !t || a && t !== xe(n) ? !1 : a;
}
function ft(n, a, t, e) {
  a === void 0 && (a = !1), t === void 0 && (t = !1);
  const r = n.getBoundingClientRect(), o = Sn(n);
  let s = Ae(1);
  a && (e ? me(e) && (s = bt(e)) : s = bt(n));
  const i = kl(o, t, e) ? oo(o) : Ae(0);
  let c = (r.left + i.x) / s.x, l = (r.top + i.y) / s.y, u = r.width / s.x, d = r.height / s.y;
  if (o) {
    const p = xe(o), m = e && me(e) ? xe(e) : e;
    let h = p, g = pn(h);
    for (; g && e && m !== h; ) {
      const v = bt(g), b = g.getBoundingClientRect(), D = Pe(g), k = b.left + (g.clientLeft + parseFloat(D.paddingLeft)) * v.x, T = b.top + (g.clientTop + parseFloat(D.paddingTop)) * v.y;
      c *= v.x, l *= v.y, u *= v.x, d *= v.y, c += k, l += T, h = xe(g), g = pn(h);
    }
  }
  return Sr({
    width: u,
    height: d,
    x: c,
    y: l
  });
}
function Pn(n, a) {
  const t = Lr(n).scrollLeft;
  return a ? a.left + t : ft(We(n)).left + t;
}
function so(n, a, t) {
  t === void 0 && (t = !1);
  const e = n.getBoundingClientRect(), r = e.left + a.scrollLeft - (t ? 0 : (
    // RTL <body> scrollbar.
    Pn(n, e)
  )), o = e.top + a.scrollTop;
  return {
    x: r,
    y: o
  };
}
function xl(n) {
  let {
    elements: a,
    rect: t,
    offsetParent: e,
    strategy: r
  } = n;
  const o = r === "fixed", s = We(e), i = a ? Fr(a.floating) : !1;
  if (e === s || i && o)
    return t;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = Ae(1);
  const u = Ae(0), d = je(e);
  if ((d || !d && !o) && ((Pt(e) !== "body" || Vt(s)) && (c = Lr(e)), je(e))) {
    const m = ft(e);
    l = bt(e), u.x = m.x + e.clientLeft, u.y = m.y + e.clientTop;
  }
  const p = s && !d && !o ? so(s, c, !0) : Ae(0);
  return {
    width: t.width * l.x,
    height: t.height * l.y,
    x: t.x * l.x - c.scrollLeft * l.x + u.x + p.x,
    y: t.y * l.y - c.scrollTop * l.y + u.y + p.y
  };
}
function Cl(n) {
  return Array.from(n.getClientRects());
}
function Ml(n) {
  const a = We(n), t = Lr(n), e = n.ownerDocument.body, r = lt(a.scrollWidth, a.clientWidth, e.scrollWidth, e.clientWidth), o = lt(a.scrollHeight, a.clientHeight, e.scrollHeight, e.clientHeight);
  let s = -t.scrollLeft + Pn(n);
  const i = -t.scrollTop;
  return Pe(e).direction === "rtl" && (s += lt(a.clientWidth, e.clientWidth) - r), {
    width: r,
    height: o,
    x: s,
    y: i
  };
}
function El(n, a) {
  const t = xe(n), e = We(n), r = t.visualViewport;
  let o = e.clientWidth, s = e.clientHeight, i = 0, c = 0;
  if (r) {
    o = r.width, s = r.height;
    const l = Cn();
    (!l || l && a === "fixed") && (i = r.offsetLeft, c = r.offsetTop);
  }
  return {
    width: o,
    height: s,
    x: i,
    y: c
  };
}
function Sl(n, a) {
  const t = ft(n, !0, a === "fixed"), e = t.top + n.clientTop, r = t.left + n.clientLeft, o = je(n) ? bt(n) : Ae(1), s = n.clientWidth * o.x, i = n.clientHeight * o.y, c = r * o.x, l = e * o.y;
  return {
    width: s,
    height: i,
    x: c,
    y: l
  };
}
function ua(n, a, t) {
  let e;
  if (a === "viewport")
    e = El(n, t);
  else if (a === "document")
    e = Ml(We(n));
  else if (me(a))
    e = Sl(a, t);
  else {
    const r = oo(n);
    e = {
      x: a.x - r.x,
      y: a.y - r.y,
      width: a.width,
      height: a.height
    };
  }
  return Sr(e);
}
function io(n, a) {
  const t = rt(n);
  return t === a || !me(t) || Ct(t) ? !1 : Pe(t).position === "fixed" || io(t, a);
}
function Pl(n, a) {
  const t = a.get(n);
  if (t)
    return t;
  let e = Bt(n, [], !1).filter((i) => me(i) && Pt(i) !== "body"), r = null;
  const o = Pe(n).position === "fixed";
  let s = o ? rt(n) : n;
  for (; me(s) && !Ct(s); ) {
    const i = Pe(s), c = xn(s);
    !c && i.position === "fixed" && (r = null), (o ? !c && !r : !c && i.position === "static" && !!r && ["absolute", "fixed"].includes(r.position) || Vt(s) && !c && io(n, s)) ? e = e.filter((u) => u !== s) : r = i, s = rt(s);
  }
  return a.set(n, e), e;
}
function Ol(n) {
  let {
    element: a,
    boundary: t,
    rootBoundary: e,
    strategy: r
  } = n;
  const s = [...t === "clippingAncestors" ? Fr(a) ? [] : Pl(a, this._c) : [].concat(t), e], i = s[0], c = s.reduce((l, u) => {
    const d = ua(a, u, r);
    return l.top = lt(d.top, l.top), l.right = Mt(d.right, l.right), l.bottom = Mt(d.bottom, l.bottom), l.left = lt(d.left, l.left), l;
  }, ua(a, i, r));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function Tl(n) {
  const {
    width: a,
    height: t
  } = ao(n);
  return {
    width: a,
    height: t
  };
}
function Nl(n, a, t) {
  const e = je(a), r = We(a), o = t === "fixed", s = ft(n, !0, o, a);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = Ae(0);
  if (e || !e && !o)
    if ((Pt(a) !== "body" || Vt(r)) && (i = Lr(a)), e) {
      const p = ft(a, !0, o, a);
      c.x = p.x + a.clientLeft, c.y = p.y + a.clientTop;
    } else r && (c.x = Pn(r));
  const l = r && !e && !o ? so(r, i) : Ae(0), u = s.left + i.scrollLeft - c.x - l.x, d = s.top + i.scrollTop - c.y - l.y;
  return {
    x: u,
    y: d,
    width: s.width,
    height: s.height
  };
}
function Jr(n) {
  return Pe(n).position === "static";
}
function da(n, a) {
  if (!je(n) || Pe(n).position === "fixed")
    return null;
  if (a)
    return a(n);
  let t = n.offsetParent;
  return We(n) === t && (t = t.ownerDocument.body), t;
}
function co(n, a) {
  const t = xe(n);
  if (Fr(n))
    return t;
  if (!je(n)) {
    let r = rt(n);
    for (; r && !Ct(r); ) {
      if (me(r) && !Jr(r))
        return r;
      r = rt(r);
    }
    return t;
  }
  let e = da(n, a);
  for (; e && ol(e) && Jr(e); )
    e = da(e, a);
  return e && Ct(e) && Jr(e) && !xn(e) ? t : e || sl(n) || t;
}
const Rl = async function(n) {
  const a = this.getOffsetParent || co, t = this.getDimensions, e = await t(n.floating);
  return {
    reference: Nl(n.reference, await a(n.floating), n.strategy),
    floating: {
      x: 0,
      y: 0,
      width: e.width,
      height: e.height
    }
  };
};
function Yl(n) {
  return Pe(n).direction === "rtl";
}
const Il = {
  convertOffsetParentRelativeRectToViewportRelativeRect: xl,
  getDocumentElement: We,
  getClippingRect: Ol,
  getOffsetParent: co,
  getElementRects: Rl,
  getClientRects: Cl,
  getDimensions: Tl,
  getScale: bt,
  isElement: me,
  isRTL: Yl
};
function Fl(n, a) {
  let t = null, e;
  const r = We(n);
  function o() {
    var i;
    clearTimeout(e), (i = t) == null || i.disconnect(), t = null;
  }
  function s(i, c) {
    i === void 0 && (i = !1), c === void 0 && (c = 1), o();
    const {
      left: l,
      top: u,
      width: d,
      height: p
    } = n.getBoundingClientRect();
    if (i || a(), !d || !p)
      return;
    const m = rr(u), h = rr(r.clientWidth - (l + d)), g = rr(r.clientHeight - (u + p)), v = rr(l), D = {
      rootMargin: -m + "px " + -h + "px " + -g + "px " + -v + "px",
      threshold: lt(0, Mt(1, c)) || 1
    };
    let k = !0;
    function T(N) {
      const L = N[0].intersectionRatio;
      if (L !== c) {
        if (!k)
          return s();
        L ? s(!1, L) : e = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      k = !1;
    }
    try {
      t = new IntersectionObserver(T, {
        ...D,
        // Handle <iframe>s
        root: r.ownerDocument
      });
    } catch {
      t = new IntersectionObserver(T, D);
    }
    t.observe(n);
  }
  return s(!0), o;
}
function Ll(n, a, t, e) {
  e === void 0 && (e = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: o = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = e, l = Sn(n), u = r || o ? [...l ? Bt(l) : [], ...Bt(a)] : [];
  u.forEach((b) => {
    r && b.addEventListener("scroll", t, {
      passive: !0
    }), o && b.addEventListener("resize", t);
  });
  const d = l && i ? Fl(l, t) : null;
  let p = -1, m = null;
  s && (m = new ResizeObserver((b) => {
    let [D] = b;
    D && D.target === l && m && (m.unobserve(a), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var k;
      (k = m) == null || k.observe(a);
    })), t();
  }), l && !c && m.observe(l), m.observe(a));
  let h, g = c ? ft(n) : null;
  c && v();
  function v() {
    const b = ft(n);
    g && (b.x !== g.x || b.y !== g.y || b.width !== g.width || b.height !== g.height) && t(), g = b, h = requestAnimationFrame(v);
  }
  return t(), () => {
    var b;
    u.forEach((D) => {
      r && D.removeEventListener("scroll", t), o && D.removeEventListener("resize", t);
    }), d == null || d(), (b = m) == null || b.disconnect(), m = null, c && cancelAnimationFrame(h);
  };
}
const Al = yl, jl = bl, pa = vl, Wl = (n, a, t) => {
  const e = /* @__PURE__ */ new Map(), r = {
    platform: Il,
    ...t
  }, o = {
    ...r.platform,
    _c: e
  };
  return _l(n, a, {
    ...r,
    platform: o
  });
};
var fr = typeof document < "u" ? Ya : gn;
function Pr(n, a) {
  if (n === a)
    return !0;
  if (typeof n != typeof a)
    return !1;
  if (typeof n == "function" && n.toString() === a.toString())
    return !0;
  let t, e, r;
  if (n && a && typeof n == "object") {
    if (Array.isArray(n)) {
      if (t = n.length, t !== a.length) return !1;
      for (e = t; e-- !== 0; )
        if (!Pr(n[e], a[e]))
          return !1;
      return !0;
    }
    if (r = Object.keys(n), t = r.length, t !== Object.keys(a).length)
      return !1;
    for (e = t; e-- !== 0; )
      if (!{}.hasOwnProperty.call(a, r[e]))
        return !1;
    for (e = t; e-- !== 0; ) {
      const o = r[e];
      if (!(o === "_owner" && n.$$typeof) && !Pr(n[o], a[o]))
        return !1;
    }
    return !0;
  }
  return n !== n && a !== a;
}
function lo(n) {
  return typeof window > "u" ? 1 : (n.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function fa(n, a) {
  const t = lo(n);
  return Math.round(a * t) / t;
}
function Zr(n) {
  const a = Y.useRef(n);
  return fr(() => {
    a.current = n;
  }), a;
}
function $l(n) {
  n === void 0 && (n = {});
  const {
    placement: a = "bottom",
    strategy: t = "absolute",
    middleware: e = [],
    platform: r,
    elements: {
      reference: o,
      floating: s
    } = {},
    transform: i = !0,
    whileElementsMounted: c,
    open: l
  } = n, [u, d] = Y.useState({
    x: 0,
    y: 0,
    strategy: t,
    placement: a,
    middlewareData: {},
    isPositioned: !1
  }), [p, m] = Y.useState(e);
  Pr(p, e) || m(e);
  const [h, g] = Y.useState(null), [v, b] = Y.useState(null), D = Y.useCallback((F) => {
    F !== L.current && (L.current = F, g(F));
  }, []), k = Y.useCallback((F) => {
    F !== M.current && (M.current = F, b(F));
  }, []), T = o || h, N = s || v, L = Y.useRef(null), M = Y.useRef(null), P = Y.useRef(u), O = c != null, z = Zr(c), U = Zr(r), H = Zr(l), j = Y.useCallback(() => {
    if (!L.current || !M.current)
      return;
    const F = {
      placement: a,
      strategy: t,
      middleware: p
    };
    U.current && (F.platform = U.current), Wl(L.current, M.current, F).then((ae) => {
      const be = {
        ...ae,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: H.current !== !1
      };
      B.current && !Pr(P.current, be) && (P.current = be, Jo.flushSync(() => {
        d(be);
      }));
    });
  }, [p, a, t, U, H]);
  fr(() => {
    l === !1 && P.current.isPositioned && (P.current.isPositioned = !1, d((F) => ({
      ...F,
      isPositioned: !1
    })));
  }, [l]);
  const B = Y.useRef(!1);
  fr(() => (B.current = !0, () => {
    B.current = !1;
  }), []), fr(() => {
    if (T && (L.current = T), N && (M.current = N), T && N) {
      if (z.current)
        return z.current(T, N, j);
      j();
    }
  }, [T, N, j, z, O]);
  const Q = Y.useMemo(() => ({
    reference: L,
    floating: M,
    setReference: D,
    setFloating: k
  }), [D, k]), R = Y.useMemo(() => ({
    reference: T,
    floating: N
  }), [T, N]), A = Y.useMemo(() => {
    const F = {
      position: t,
      left: 0,
      top: 0
    };
    if (!R.floating)
      return F;
    const ae = fa(R.floating, u.x), be = fa(R.floating, u.y);
    return i ? {
      ...F,
      transform: "translate(" + ae + "px, " + be + "px)",
      ...lo(R.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: t,
      left: ae,
      top: be
    };
  }, [t, i, R.floating, u.x, u.y]);
  return Y.useMemo(() => ({
    ...u,
    update: j,
    refs: Q,
    elements: R,
    floatingStyles: A
  }), [u, j, Q, R, A]);
}
const zl = (n) => {
  function a(t) {
    return {}.hasOwnProperty.call(t, "current");
  }
  return {
    name: "arrow",
    options: n,
    fn(t) {
      const {
        element: e,
        padding: r
      } = typeof n == "function" ? n(t) : n;
      return e && a(e) ? e.current != null ? pa({
        element: e.current,
        padding: r
      }).fn(t) : {} : e ? pa({
        element: e,
        padding: r
      }).fn(t) : {};
    }
  };
}, Hl = (n, a) => ({
  ...Al(n),
  options: [n, a]
}), Bl = (n, a) => ({
  ...jl(n),
  options: [n, a]
}), Ql = (n, a) => ({
  ...zl(n),
  options: [n, a]
}), uo = {
  ...Y
}, ql = uo.useInsertionEffect, Vl = ql || ((n) => n());
function Kl(n) {
  const a = Y.useRef(() => {
    if (process.env.NODE_ENV !== "production")
      throw new Error("Cannot call an event handler while rendering.");
  });
  return Vl(() => {
    a.current = n;
  }), Y.useCallback(function() {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
      e[r] = arguments[r];
    return a.current == null ? void 0 : a.current(...e);
  }, []);
}
var Or = typeof document < "u" ? Ya : gn;
function mn() {
  return mn = Object.assign ? Object.assign.bind() : function(n) {
    for (var a = 1; a < arguments.length; a++) {
      var t = arguments[a];
      for (var e in t)
        Object.prototype.hasOwnProperty.call(t, e) && (n[e] = t[e]);
    }
    return n;
  }, mn.apply(this, arguments);
}
let ma = !1, Ul = 0;
const ha = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + Ul++
);
function Xl() {
  const [n, a] = Y.useState(() => ma ? ha() : void 0);
  return Or(() => {
    n == null && a(ha());
  }, []), Y.useEffect(() => {
    ma = !0;
  }, []), n;
}
const Gl = uo.useId, po = Gl || Xl;
let qt;
process.env.NODE_ENV !== "production" && (qt = /* @__PURE__ */ new Set());
function Jl() {
  for (var n, a = arguments.length, t = new Array(a), e = 0; e < a; e++)
    t[e] = arguments[e];
  const r = "Floating UI: " + t.join(" ");
  if (!((n = qt) != null && n.has(r))) {
    var o;
    (o = qt) == null || o.add(r), console.warn(r);
  }
}
function Zl() {
  for (var n, a = arguments.length, t = new Array(a), e = 0; e < a; e++)
    t[e] = arguments[e];
  const r = "Floating UI: " + t.join(" ");
  if (!((n = qt) != null && n.has(r))) {
    var o;
    (o = qt) == null || o.add(r), console.error(r);
  }
}
const eu = /* @__PURE__ */ Y.forwardRef(function(a, t) {
  const {
    context: {
      placement: e,
      elements: {
        floating: r
      },
      middlewareData: {
        arrow: o,
        shift: s
      }
    },
    width: i = 14,
    height: c = 7,
    tipRadius: l = 0,
    strokeWidth: u = 0,
    staticOffset: d,
    stroke: p,
    d: m,
    style: {
      transform: h,
      ...g
    } = {},
    ...v
  } = a;
  process.env.NODE_ENV !== "production" && (t || Jl("The `ref` prop is required for `FloatingArrow`."));
  const b = po(), [D, k] = Y.useState(!1);
  if (Or(() => {
    if (!r) return;
    Pe(r).direction === "rtl" && k(!0);
  }, [r]), !r)
    return null;
  const [T, N] = e.split("-"), L = T === "top" || T === "bottom";
  let M = d;
  (L && s != null && s.x || !L && s != null && s.y) && (M = null);
  const P = u * 2, O = P / 2, z = i / 2 * (l / -8 + 1), U = c / 2 * l / 4, H = !!m, j = M && N === "end" ? "bottom" : "top";
  let B = M && N === "end" ? "right" : "left";
  M && D && (B = N === "end" ? "left" : "right");
  const Q = (o == null ? void 0 : o.x) != null ? M || o.x : "", R = (o == null ? void 0 : o.y) != null ? M || o.y : "", A = m || "M0,0" + (" H" + i) + (" L" + (i - z) + "," + (c - U)) + (" Q" + i / 2 + "," + c + " " + z + "," + (c - U)) + " Z", F = {
    top: H ? "rotate(180deg)" : "",
    left: H ? "rotate(90deg)" : "rotate(-90deg)",
    bottom: H ? "" : "rotate(180deg)",
    right: H ? "rotate(-90deg)" : "rotate(90deg)"
  }[T];
  return /* @__PURE__ */ Y.createElement("svg", mn({}, v, {
    "aria-hidden": !0,
    ref: t,
    width: H ? i : i + P,
    height: i,
    viewBox: "0 0 " + i + " " + (c > i ? c : i),
    style: {
      position: "absolute",
      pointerEvents: "none",
      [B]: Q,
      [j]: R,
      [T]: L || H ? "100%" : "calc(100% - " + P / 2 + "px)",
      transform: [F, h].filter((ae) => !!ae).join(" "),
      ...g
    }
  }), P > 0 && /* @__PURE__ */ Y.createElement("path", {
    clipPath: "url(#" + b + ")",
    fill: "none",
    stroke: p,
    strokeWidth: P + (m ? 0 : 1),
    d: A
  }), /* @__PURE__ */ Y.createElement("path", {
    stroke: P && !m ? v.fill : "none",
    d: A
  }), /* @__PURE__ */ Y.createElement("clipPath", {
    id: b
  }, /* @__PURE__ */ Y.createElement("rect", {
    x: -O,
    y: O * (H ? -1 : 1),
    width: i + P,
    height: i
  })));
});
function tu() {
  const n = /* @__PURE__ */ new Map();
  return {
    emit(a, t) {
      var e;
      (e = n.get(a)) == null || e.forEach((r) => r(t));
    },
    on(a, t) {
      n.set(a, [...n.get(a) || [], t]);
    },
    off(a, t) {
      var e;
      n.set(a, ((e = n.get(a)) == null ? void 0 : e.filter((r) => r !== t)) || []);
    }
  };
}
const ru = /* @__PURE__ */ Y.createContext(null), nu = /* @__PURE__ */ Y.createContext(null), au = () => {
  var n;
  return ((n = Y.useContext(ru)) == null ? void 0 : n.id) || null;
}, ou = () => Y.useContext(nu);
function su(n) {
  const {
    open: a = !1,
    onOpenChange: t,
    elements: e
  } = n, r = po(), o = Y.useRef({}), [s] = Y.useState(() => tu()), i = au() != null;
  if (process.env.NODE_ENV !== "production") {
    const m = e.reference;
    m && !me(m) && Zl("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
  }
  const [c, l] = Y.useState(e.reference), u = Kl((m, h, g) => {
    o.current.openEvent = m ? h : void 0, s.emit("openchange", {
      open: m,
      event: h,
      reason: g,
      nested: i
    }), t == null || t(m, h, g);
  }), d = Y.useMemo(() => ({
    setPositionReference: l
  }), []), p = Y.useMemo(() => ({
    reference: c || e.reference || null,
    floating: e.floating || null,
    domReference: e.reference
  }), [c, e.reference, e.floating]);
  return Y.useMemo(() => ({
    dataRef: o,
    open: a,
    onOpenChange: u,
    elements: p,
    events: s,
    floatingId: r,
    refs: d
  }), [a, u, p, s, r, d]);
}
function iu(n) {
  n === void 0 && (n = {});
  const {
    nodeId: a
  } = n, t = su({
    ...n,
    elements: {
      reference: null,
      floating: null,
      ...n.elements
    }
  }), e = n.rootContext || t, r = e.elements, [o, s] = Y.useState(null), [i, c] = Y.useState(null), u = (r == null ? void 0 : r.domReference) || o, d = Y.useRef(null), p = ou();
  Or(() => {
    u && (d.current = u);
  }, [u]);
  const m = $l({
    ...n,
    elements: {
      ...r,
      ...i && {
        reference: i
      }
    }
  }), h = Y.useCallback((k) => {
    const T = me(k) ? {
      getBoundingClientRect: () => k.getBoundingClientRect(),
      contextElement: k
    } : k;
    c(T), m.refs.setReference(T);
  }, [m.refs]), g = Y.useCallback((k) => {
    (me(k) || k === null) && (d.current = k, s(k)), (me(m.refs.reference.current) || m.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    k !== null && !me(k)) && m.refs.setReference(k);
  }, [m.refs]), v = Y.useMemo(() => ({
    ...m.refs,
    setReference: g,
    setPositionReference: h,
    domReference: d
  }), [m.refs, g, h]), b = Y.useMemo(() => ({
    ...m.elements,
    domReference: u
  }), [m.elements, u]), D = Y.useMemo(() => ({
    ...m,
    ...e,
    refs: v,
    elements: b,
    nodeId: a
  }), [m, v, b, a, e]);
  return Or(() => {
    e.dataRef.current.floatingContext = D;
    const k = p == null ? void 0 : p.nodesRef.current.find((T) => T.id === a);
    k && (k.context = D);
  }), Y.useMemo(() => ({
    ...m,
    context: D,
    refs: v,
    elements: b
  }), [m, v, b, D]);
}
/*!
  react-datepicker v7.5.0
  https://github.com/Hacker0x01/react-datepicker
  Released under the MIT License.
*/
var hn = function(a, t) {
  return hn = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function(e, r) {
    e.__proto__ = r;
  } || function(e, r) {
    for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
  }, hn(a, t);
};
function fe(n, a) {
  if (typeof a != "function" && a !== null) throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
  hn(n, a);
  function t() {
    this.constructor = n;
  }
  n.prototype = a === null ? Object.create(a) : (t.prototype = a.prototype, new t());
}
var K = function() {
  return K = Object.assign || function(t) {
    for (var e, r = 1, o = arguments.length; r < o; r++) {
      e = arguments[r];
      for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
    }
    return t;
  }, K.apply(this, arguments);
};
function Ie(n, a, t) {
  if (t || arguments.length === 2) for (var e = 0, r = a.length, o; e < r; e++)
    (o || !(e in a)) && (o || (o = Array.prototype.slice.call(a, 0, e)), o[e] = a[e]);
  return n.concat(o || Array.prototype.slice.call(a));
}
var cu = function(n) {
  var a = n.showTimeSelectOnly, t = a === void 0 ? !1 : a, e = n.showTime, r = e === void 0 ? !1 : e, o = n.className, s = n.children, i = t ? "Choose Time" : "Choose Date".concat(r ? " and Time" : "");
  return _.createElement("div", { className: o, role: "dialog", "aria-label": i, "aria-modal": "true" }, s);
}, lu = function(n, a) {
  var t = on(null), e = on(n);
  e.current = n;
  var r = Go(function(o) {
    var s;
    t.current && !t.current.contains(o.target) && (a && o.target instanceof HTMLElement && o.target.classList.contains(a) || (s = e.current) === null || s === void 0 || s.call(e, o));
  }, [a]);
  return gn(function() {
    return document.addEventListener("mousedown", r), function() {
      document.removeEventListener("mousedown", r);
    };
  }, [r]), t;
}, jr = function(n) {
  var a = n.children, t = n.onClickOutside, e = n.className, r = n.containerRef, o = n.style, s = n.ignoreClass, i = lu(t, s);
  return _.createElement("div", { className: e, style: o, ref: function(c) {
    i.current = c, r && (r.current = c);
  } }, a);
}, x;
(function(n) {
  n.ArrowUp = "ArrowUp", n.ArrowDown = "ArrowDown", n.ArrowLeft = "ArrowLeft", n.ArrowRight = "ArrowRight", n.PageUp = "PageUp", n.PageDown = "PageDown", n.Home = "Home", n.End = "End", n.Enter = "Enter", n.Space = " ", n.Tab = "Tab", n.Escape = "Escape", n.Backspace = "Backspace", n.X = "x";
})(x || (x = {}));
function fo() {
  var n = typeof window < "u" ? window : globalThis;
  return n;
}
var Ut = 12, uu = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
function ee(n) {
  if (n == null)
    return /* @__PURE__ */ new Date();
  var a = typeof n == "string" ? zc(n) : E(n);
  return Be(a) ? a : /* @__PURE__ */ new Date();
}
function en(n, a, t, e, r) {
  var o, s = null, i = ut(t) || ut(zt()), c = !0;
  if (Array.isArray(a))
    return a.forEach(function(u) {
      var d = Xr(n, u, /* @__PURE__ */ new Date(), {
        locale: i,
        useAdditionalWeekYearTokens: !0,
        useAdditionalDayOfYearTokens: !0
      });
      e && (c = Be(d, r) && n === re(d, u, t)), Be(d, r) && c && (s = d);
    }), s;
  if (s = Xr(n, a, /* @__PURE__ */ new Date(), {
    locale: i,
    useAdditionalWeekYearTokens: !0,
    useAdditionalDayOfYearTokens: !0
  }), e)
    c = Be(s) && n === re(s, a, t);
  else if (!Be(s)) {
    var l = ((o = a.match(uu)) !== null && o !== void 0 ? o : []).map(function(u) {
      var d = u[0];
      if (d === "p" || d === "P") {
        var p = xr[d];
        return i ? p(u, i.formatLong) : d;
      }
      return u;
    }).join("");
    n.length > 0 && (s = Xr(n, l.slice(0, n.length), /* @__PURE__ */ new Date(), {
      useAdditionalWeekYearTokens: !0,
      useAdditionalDayOfYearTokens: !0
    })), Be(s) || (s = new Date(n));
  }
  return Be(s) && c ? s : null;
}
function Be(n, a) {
  return wr(n) && !pt(n, a ?? /* @__PURE__ */ new Date("1/1/1800"));
}
function re(n, a, t) {
  if (t === "en")
    return oa(n, a, {
      useAdditionalWeekYearTokens: !0,
      useAdditionalDayOfYearTokens: !0
    });
  var e = t ? ut(t) : void 0;
  return t && !e && console.warn('A locale object was not found for the provided string ["'.concat(t, '"].')), !e && zt() && ut(zt()) && (e = ut(zt())), oa(n, a, {
    locale: e,
    useAdditionalWeekYearTokens: !0,
    useAdditionalDayOfYearTokens: !0
  });
}
function Ee(n, a) {
  var t = a.dateFormat, e = a.locale, r = Array.isArray(t) && t.length > 0 ? t[0] : t;
  return n && re(n, r, e) || "";
}
function du(n, a, t) {
  if (!n)
    return "";
  var e = Ee(n, t), r = a ? Ee(a, t) : "";
  return "".concat(e, " - ").concat(r);
}
function pu(n, a) {
  if (!(n != null && n.length))
    return "";
  var t = n[0] ? Ee(n[0], a) : "";
  if (n.length === 1)
    return t;
  if (n.length === 2 && n[1]) {
    var e = Ee(n[1], a);
    return "".concat(t, ", ").concat(e);
  }
  var r = n.length - 1;
  return "".concat(t, " (+").concat(r, ")");
}
function tn(n, a) {
  var t = a.hour, e = t === void 0 ? 0 : t, r = a.minute, o = r === void 0 ? 0 : r, s = a.second, i = s === void 0 ? 0 : s;
  return ur(dr(pr(n, i), o), e);
}
function fu(n) {
  return wn(n);
}
function mu(n, a) {
  return re(n, "ddd", a);
}
function mr(n) {
  return dt(n);
}
function Ze(n, a, t) {
  var e = ut(a || zt());
  return Xe(n, {
    locale: e,
    weekStartsOn: t
  });
}
function Ke(n) {
  return za(n);
}
function Wt(n) {
  return Yr(n);
}
function _a(n) {
  return ln(n);
}
function ga() {
  return dt(ee());
}
function va(n) {
  return Wa(n);
}
function hu(n) {
  return Vs(n);
}
function _u(n) {
  return $a(n);
}
function Ne(n, a) {
  return n && a ? Wc(n, a) : !n && !a;
}
function ge(n, a) {
  return n && a ? Ac(n, a) : !n && !a;
}
function Tr(n, a) {
  return n && a ? jc(n, a) : !n && !a;
}
function V(n, a) {
  return n && a ? Qs(n, a) : !n && !a;
}
function st(n, a) {
  return n && a ? Hi(n, a) : !n && !a;
}
function $t(n, a, t) {
  var e, r = dt(a), o = Wa(t);
  try {
    e = Ht(n, { start: r, end: o });
  } catch {
    e = !1;
  }
  return e;
}
function zt() {
  var n = fo();
  return n.__localeId__;
}
function ut(n) {
  if (typeof n == "string") {
    var a = fo();
    return a.__localeData__ ? a.__localeData__[n] : void 0;
  } else
    return n;
}
function gu(n, a, t) {
  return a(re(n, "EEEE", t));
}
function vu(n, a) {
  return re(n, "EEEEEE", a);
}
function bu(n, a) {
  return re(n, "EEE", a);
}
function On(n, a) {
  return re(ke(ee(), n), "LLLL", a);
}
function mo(n, a) {
  return re(ke(ee(), n), "LLL", a);
}
function wu(n, a) {
  return re(vt(ee(), n), "QQQ", a);
}
function Se(n, a) {
  var t = a === void 0 ? {} : a, e = t.minDate, r = t.maxDate, o = t.excludeDates, s = t.excludeDateIntervals, i = t.includeDates, c = t.includeDateIntervals, l = t.filterDate;
  return Xt(n, { minDate: e, maxDate: r }) || o && o.some(function(u) {
    return u instanceof Date ? V(n, u) : V(n, u.date);
  }) || s && s.some(function(u) {
    var d = u.start, p = u.end;
    return Ht(n, { start: d, end: p });
  }) || i && !i.some(function(u) {
    return V(n, u);
  }) || c && !c.some(function(u) {
    var d = u.start, p = u.end;
    return Ht(n, { start: d, end: p });
  }) || l && !l(ee(n)) || !1;
}
function Tn(n, a) {
  var t = a === void 0 ? {} : a, e = t.excludeDates, r = t.excludeDateIntervals;
  return r && r.length > 0 ? r.some(function(o) {
    var s = o.start, i = o.end;
    return Ht(n, { start: s, end: i });
  }) : e && e.some(function(o) {
    var s;
    return o instanceof Date ? V(n, o) : V(n, (s = o.date) !== null && s !== void 0 ? s : /* @__PURE__ */ new Date());
  }) || !1;
}
function ho(n, a) {
  var t = a === void 0 ? {} : a, e = t.minDate, r = t.maxDate, o = t.excludeDates, s = t.includeDates, i = t.filterDate;
  return Xt(n, {
    minDate: e ? za(e) : void 0,
    maxDate: r ? $a(r) : void 0
  }) || (o == null ? void 0 : o.some(function(c) {
    return ge(n, c instanceof Date ? c : c.date);
  })) || s && !s.some(function(c) {
    return ge(n, c);
  }) || i && !i(ee(n)) || !1;
}
function nr(n, a, t, e) {
  var r = W(n), o = ve(n), s = W(a), i = ve(a), c = W(e);
  return r === s && r === c ? o <= t && t <= i : r < s ? c === r && o <= t || c === s && i >= t || c < s && c > r : !1;
}
function yu(n, a) {
  var t = a === void 0 ? {} : a, e = t.minDate, r = t.maxDate, o = t.excludeDates, s = t.includeDates;
  return Xt(n, { minDate: e, maxDate: r }) || o && o.some(function(i) {
    return ge(i instanceof Date ? i : i.date, n);
  }) || s && !s.some(function(i) {
    return ge(i, n);
  }) || !1;
}
function ar(n, a) {
  var t = a === void 0 ? {} : a, e = t.minDate, r = t.maxDate, o = t.excludeDates, s = t.includeDates, i = t.filterDate;
  return Xt(n, { minDate: e, maxDate: r }) || (o == null ? void 0 : o.some(function(c) {
    return Tr(n, c instanceof Date ? c : c.date);
  })) || s && !s.some(function(c) {
    return Tr(n, c);
  }) || i && !i(ee(n)) || !1;
}
function or(n, a, t) {
  if (!a || !t || !wr(a) || !wr(t))
    return !1;
  var e = W(a), r = W(t);
  return e <= n && r >= n;
}
function hr(n, a) {
  var t = a === void 0 ? {} : a, e = t.minDate, r = t.maxDate, o = t.excludeDates, s = t.includeDates, i = t.filterDate, c = new Date(n, 0, 1);
  return Xt(c, {
    minDate: e ? Yr(e) : void 0,
    maxDate: r ? Ha(r) : void 0
  }) || (o == null ? void 0 : o.some(function(l) {
    return Ne(c, l instanceof Date ? l : l.date);
  })) || s && !s.some(function(l) {
    return Ne(c, l);
  }) || i && !i(ee(c)) || !1;
}
function sr(n, a, t, e) {
  var r = W(n), o = ct(n), s = W(a), i = ct(a), c = W(e);
  return r === s && r === c ? o <= t && t <= i : r < s ? c === r && o <= t || c === s && i >= t || c < s && c > r : !1;
}
function Xt(n, a) {
  var t, e = a === void 0 ? {} : a, r = e.minDate, o = e.maxDate;
  return (t = r && Dt(n, r) < 0 || o && Dt(n, o) > 0) !== null && t !== void 0 ? t : !1;
}
function ba(n, a) {
  return a.some(function(t) {
    return Fe(t) === Fe(n) && Le(t) === Le(n) && Ve(t) === Ve(n);
  });
}
function wa(n, a) {
  var t = a === void 0 ? {} : a, e = t.excludeTimes, r = t.includeTimes, o = t.filterTime;
  return e && ba(n, e) || r && !ba(n, r) || o && !o(n) || !1;
}
function ya(n, a) {
  var t = a.minTime, e = a.maxTime;
  if (!t || !e)
    throw new Error("Both minTime and maxTime props required");
  var r = ee();
  r = ur(r, Fe(n)), r = dr(r, Le(n)), r = pr(r, Ve(n));
  var o = ee();
  o = ur(o, Fe(t)), o = dr(o, Le(t)), o = pr(o, Ve(t));
  var s = ee();
  s = ur(s, Fe(e)), s = dr(s, Le(e)), s = pr(s, Ve(e));
  var i;
  try {
    i = !Ht(r, { start: o, end: s });
  } catch {
    i = !1;
  }
  return i;
}
function Da(n, a) {
  var t = a === void 0 ? {} : a, e = t.minDate, r = t.includeDates, o = kt(n, 1);
  return e && yr(e, o) > 0 || r && r.every(function(s) {
    return yr(s, o) > 0;
  }) || !1;
}
function ka(n, a) {
  var t = a === void 0 ? {} : a, e = t.maxDate, r = t.includeDates, o = Oe(n, 1);
  return e && yr(o, e) > 0 || r && r.every(function(s) {
    return yr(o, s) > 0;
  }) || !1;
}
function Du(n, a) {
  var t = a === void 0 ? {} : a, e = t.minDate, r = t.includeDates, o = Yr(n), s = eo(o, 1);
  return e && Dr(e, s) > 0 || r && r.every(function(i) {
    return Dr(i, s) > 0;
  }) || !1;
}
function ku(n, a) {
  var t = a === void 0 ? {} : a, e = t.maxDate, r = t.includeDates, o = Ha(n), s = bn(o, 1);
  return e && Dr(s, e) > 0 || r && r.every(function(i) {
    return Dr(s, i) > 0;
  }) || !1;
}
function xa(n, a) {
  var t = a === void 0 ? {} : a, e = t.minDate, r = t.includeDates, o = xt(n, 1);
  return e && kr(e, o) > 0 || r && r.every(function(s) {
    return kr(s, o) > 0;
  }) || !1;
}
function xu(n, a) {
  var t = a === void 0 ? {} : a, e = t.minDate, r = t.yearItemNumber, o = r === void 0 ? Ut : r, s = Wt(xt(n, o)), i = Je(s, o).endPeriod, c = e && W(e);
  return c && c > i || !1;
}
function Ca(n, a) {
  var t = a === void 0 ? {} : a, e = t.maxDate, r = t.includeDates, o = Qe(n, 1);
  return e && kr(o, e) > 0 || r && r.every(function(s) {
    return kr(o, s) > 0;
  }) || !1;
}
function Cu(n, a) {
  var t = a === void 0 ? {} : a, e = t.maxDate, r = t.yearItemNumber, o = r === void 0 ? Ut : r, s = Qe(n, o), i = Je(s, o).startPeriod, c = e && W(e);
  return c && c < i || !1;
}
function _o(n) {
  var a = n.minDate, t = n.includeDates;
  if (t && a) {
    var e = t.filter(function(r) {
      return Dt(r, a) >= 0;
    });
    return Zn(e);
  } else return t ? Zn(t) : a;
}
function go(n) {
  var a = n.maxDate, t = n.includeDates;
  if (t && a) {
    var e = t.filter(function(r) {
      return Dt(r, a) <= 0;
    });
    return Jn(e);
  } else return t ? Jn(t) : a;
}
function Ma(n, a) {
  var t;
  n === void 0 && (n = []), a === void 0 && (a = "react-datepicker__day--highlighted");
  for (var e = /* @__PURE__ */ new Map(), r = 0, o = n.length; r < o; r++) {
    var s = n[r];
    if (qe(s)) {
      var i = re(s, "MM.dd.yyyy"), c = e.get(i) || [];
      c.includes(a) || (c.push(a), e.set(i, c));
    } else if (typeof s == "object") {
      var l = Object.keys(s), u = (t = l[0]) !== null && t !== void 0 ? t : "", d = s[u];
      if (typeof u == "string" && Array.isArray(d))
        for (var p = 0, m = d.length; p < m; p++) {
          var h = d[p];
          if (h) {
            var i = re(h, "MM.dd.yyyy"), c = e.get(i) || [];
            c.includes(u) || (c.push(u), e.set(i, c));
          }
        }
    }
  }
  return e;
}
function Mu(n, a) {
  return n.length !== a.length ? !1 : n.every(function(t, e) {
    return t === a[e];
  });
}
function Eu(n, a) {
  n === void 0 && (n = []), a === void 0 && (a = "react-datepicker__day--holidays");
  var t = /* @__PURE__ */ new Map();
  return n.forEach(function(e) {
    var r = e.date, o = e.holidayName;
    if (qe(r)) {
      var s = re(r, "MM.dd.yyyy"), i = t.get(s) || {
        className: "",
        holidayNames: []
      };
      if (!("className" in i && i.className === a && Mu(i.holidayNames, [o]))) {
        i.className = a;
        var c = i.holidayNames;
        i.holidayNames = c ? Ie(Ie([], c, !0), [o], !1) : [o], t.set(s, i);
      }
    }
  }), t;
}
function Su(n, a, t, e, r) {
  for (var o = r.length, s = [], i = 0; i < o; i++) {
    var c = n, l = r[i];
    l && (c = $s(c, Fe(l)), c = cn(c, Le(l)), c = Bs(c, Ve(l)));
    var u = cn(n, (t + 1) * e);
    tt(c, a) && pt(c, u) && l != null && s.push(l);
  }
  return s;
}
function Ea(n) {
  return n < 10 ? "0".concat(n) : "".concat(n);
}
function Je(n, a) {
  a === void 0 && (a = Ut);
  var t = Math.ceil(W(n) / a) * a, e = t - (a - 1);
  return { startPeriod: e, endPeriod: t };
}
function Pu(n) {
  var a = new Date(n.getFullYear(), n.getMonth(), n.getDate()), t = new Date(n.getFullYear(), n.getMonth(), n.getDate(), 24);
  return Math.round((+t - +a) / 36e5);
}
function Sa(n) {
  var a = n.getSeconds(), t = n.getMilliseconds();
  return E(n.getTime() - a * 1e3 - t);
}
function Ou(n, a) {
  return Sa(n).getTime() === Sa(a).getTime();
}
function Pa(n) {
  if (!qe(n))
    throw new Error("Invalid date");
  var a = new Date(n);
  return a.setHours(0, 0, 0, 0), a;
}
function Oa(n, a) {
  if (!qe(n) || !qe(a))
    throw new Error("Invalid date received");
  var t = Pa(n), e = Pa(a);
  return pt(t, e);
}
function vo(n) {
  return n.key === x.Space;
}
var Tu = (
  /** @class */
  function(n) {
    fe(a, n);
    function a(t) {
      var e = n.call(this, t) || this;
      return e.inputRef = _.createRef(), e.onTimeChange = function(r) {
        var o, s;
        e.setState({ time: r });
        var i = e.props.date, c = i instanceof Date && !isNaN(+i), l = c ? i : /* @__PURE__ */ new Date();
        if (r != null && r.includes(":")) {
          var u = r.split(":"), d = u[0], p = u[1];
          l.setHours(Number(d)), l.setMinutes(Number(p));
        }
        (s = (o = e.props).onChange) === null || s === void 0 || s.call(o, l);
      }, e.renderTimeInput = function() {
        var r = e.state.time, o = e.props, s = o.date, i = o.timeString, c = o.customTimeInput;
        return c ? _n(c, {
          date: s,
          value: r,
          onChange: e.onTimeChange
        }) : _.createElement("input", { type: "time", className: "react-datepicker-time__input", placeholder: "Time", name: "time-input", ref: e.inputRef, onClick: function() {
          var l;
          (l = e.inputRef.current) === null || l === void 0 || l.focus();
        }, required: !0, value: r, onChange: function(l) {
          e.onTimeChange(l.target.value || i);
        } });
      }, e.state = {
        time: e.props.timeString
      }, e;
    }
    return a.getDerivedStateFromProps = function(t, e) {
      return t.timeString !== e.time ? {
        time: t.timeString
      } : null;
    }, a.prototype.render = function() {
      return _.createElement(
        "div",
        { className: "react-datepicker__input-time-container" },
        _.createElement("div", { className: "react-datepicker-time__caption" }, this.props.timeInputLabel),
        _.createElement(
          "div",
          { className: "react-datepicker-time__input-container" },
          _.createElement("div", { className: "react-datepicker-time__input" }, this.renderTimeInput())
        )
      );
    }, a;
  }(pe)
), Nu = (
  /** @class */
  function(n) {
    fe(a, n);
    function a() {
      var t = n !== null && n.apply(this, arguments) || this;
      return t.dayEl = et(), t.handleClick = function(e) {
        !t.isDisabled() && t.props.onClick && t.props.onClick(e);
      }, t.handleMouseEnter = function(e) {
        !t.isDisabled() && t.props.onMouseEnter && t.props.onMouseEnter(e);
      }, t.handleOnKeyDown = function(e) {
        var r, o, s = e.key;
        s === x.Space && (e.preventDefault(), e.key = x.Enter), (o = (r = t.props).handleOnKeyDown) === null || o === void 0 || o.call(r, e);
      }, t.isSameDay = function(e) {
        return V(t.props.day, e);
      }, t.isKeyboardSelected = function() {
        var e;
        if (t.props.disabledKeyboardNavigation)
          return !1;
        var r = t.props.selectsMultiple ? (e = t.props.selectedDates) === null || e === void 0 ? void 0 : e.some(function(s) {
          return t.isSameDayOrWeek(s);
        }) : t.isSameDayOrWeek(t.props.selected), o = t.props.preSelection && t.isDisabled(t.props.preSelection);
        return !r && t.isSameDayOrWeek(t.props.preSelection) && !o;
      }, t.isDisabled = function(e) {
        return e === void 0 && (e = t.props.day), Se(e, {
          minDate: t.props.minDate,
          maxDate: t.props.maxDate,
          excludeDates: t.props.excludeDates,
          excludeDateIntervals: t.props.excludeDateIntervals,
          includeDateIntervals: t.props.includeDateIntervals,
          includeDates: t.props.includeDates,
          filterDate: t.props.filterDate
        });
      }, t.isExcluded = function() {
        return Tn(t.props.day, {
          excludeDates: t.props.excludeDates,
          excludeDateIntervals: t.props.excludeDateIntervals
        });
      }, t.isStartOfWeek = function() {
        return V(t.props.day, Ze(t.props.day, t.props.locale, t.props.calendarStartDay));
      }, t.isSameWeek = function(e) {
        return t.props.showWeekPicker && V(e, Ze(t.props.day, t.props.locale, t.props.calendarStartDay));
      }, t.isSameDayOrWeek = function(e) {
        return t.isSameDay(e) || t.isSameWeek(e);
      }, t.getHighLightedClass = function() {
        var e = t.props, r = e.day, o = e.highlightDates;
        if (!o)
          return !1;
        var s = re(r, "MM.dd.yyyy");
        return o.get(s);
      }, t.getHolidaysClass = function() {
        var e, r = t.props, o = r.day, s = r.holidays;
        if (!s)
          return [void 0];
        var i = re(o, "MM.dd.yyyy");
        return s.has(i) ? [(e = s.get(i)) === null || e === void 0 ? void 0 : e.className] : [void 0];
      }, t.isInRange = function() {
        var e = t.props, r = e.day, o = e.startDate, s = e.endDate;
        return !o || !s ? !1 : $t(r, o, s);
      }, t.isInSelectingRange = function() {
        var e, r = t.props, o = r.day, s = r.selectsStart, i = r.selectsEnd, c = r.selectsRange, l = r.selectsDisabledDaysInRange, u = r.startDate, d = r.endDate, p = (e = t.props.selectingDate) !== null && e !== void 0 ? e : t.props.preSelection;
        return !(s || i || c) || !p || !l && t.isDisabled() ? !1 : s && d && (pt(p, d) || st(p, d)) ? $t(o, p, d) : i && u && (tt(p, u) || st(p, u)) || c && u && !d && (tt(p, u) || st(p, u)) ? $t(o, u, p) : !1;
      }, t.isSelectingRangeStart = function() {
        var e;
        if (!t.isInSelectingRange())
          return !1;
        var r = t.props, o = r.day, s = r.startDate, i = r.selectsStart, c = (e = t.props.selectingDate) !== null && e !== void 0 ? e : t.props.preSelection;
        return i ? V(o, c) : V(o, s);
      }, t.isSelectingRangeEnd = function() {
        var e;
        if (!t.isInSelectingRange())
          return !1;
        var r = t.props, o = r.day, s = r.endDate, i = r.selectsEnd, c = r.selectsRange, l = (e = t.props.selectingDate) !== null && e !== void 0 ? e : t.props.preSelection;
        return i || c ? V(o, l) : V(o, s);
      }, t.isRangeStart = function() {
        var e = t.props, r = e.day, o = e.startDate, s = e.endDate;
        return !o || !s ? !1 : V(o, r);
      }, t.isRangeEnd = function() {
        var e = t.props, r = e.day, o = e.startDate, s = e.endDate;
        return !o || !s ? !1 : V(s, r);
      }, t.isWeekend = function() {
        var e = ji(t.props.day);
        return e === 0 || e === 6;
      }, t.isAfterMonth = function() {
        return t.props.month !== void 0 && (t.props.month + 1) % 12 === ve(t.props.day);
      }, t.isBeforeMonth = function() {
        return t.props.month !== void 0 && (ve(t.props.day) + 1) % 12 === t.props.month;
      }, t.isCurrentDay = function() {
        return t.isSameDay(ee());
      }, t.isSelected = function() {
        var e;
        return t.props.selectsMultiple ? (e = t.props.selectedDates) === null || e === void 0 ? void 0 : e.some(function(r) {
          return t.isSameDayOrWeek(r);
        }) : t.isSameDayOrWeek(t.props.selected);
      }, t.getClassNames = function(e) {
        var r = t.props.dayClassName ? t.props.dayClassName(e) : void 0;
        return de("react-datepicker__day", r, "react-datepicker__day--" + mu(t.props.day), {
          "react-datepicker__day--disabled": t.isDisabled(),
          "react-datepicker__day--excluded": t.isExcluded(),
          "react-datepicker__day--selected": t.isSelected(),
          "react-datepicker__day--keyboard-selected": t.isKeyboardSelected(),
          "react-datepicker__day--range-start": t.isRangeStart(),
          "react-datepicker__day--range-end": t.isRangeEnd(),
          "react-datepicker__day--in-range": t.isInRange(),
          "react-datepicker__day--in-selecting-range": t.isInSelectingRange(),
          "react-datepicker__day--selecting-range-start": t.isSelectingRangeStart(),
          "react-datepicker__day--selecting-range-end": t.isSelectingRangeEnd(),
          "react-datepicker__day--today": t.isCurrentDay(),
          "react-datepicker__day--weekend": t.isWeekend(),
          "react-datepicker__day--outside-month": t.isAfterMonth() || t.isBeforeMonth()
        }, t.getHighLightedClass(), t.getHolidaysClass());
      }, t.getAriaLabel = function() {
        var e = t.props, r = e.day, o = e.ariaLabelPrefixWhenEnabled, s = o === void 0 ? "Choose" : o, i = e.ariaLabelPrefixWhenDisabled, c = i === void 0 ? "Not available" : i, l = t.isDisabled() || t.isExcluded() ? c : s;
        return "".concat(l, " ").concat(re(r, "PPPP", t.props.locale));
      }, t.getTitle = function() {
        var e = t.props, r = e.day, o = e.holidays, s = o === void 0 ? /* @__PURE__ */ new Map() : o, i = e.excludeDates, c = re(r, "MM.dd.yyyy"), l = [];
        return s.has(c) && l.push.apply(l, s.get(c).holidayNames), t.isExcluded() && l.push(i == null ? void 0 : i.filter(function(u) {
          return u instanceof Date ? V(u, r) : V(u == null ? void 0 : u.date, r);
        }).map(function(u) {
          if (!(u instanceof Date))
            return u == null ? void 0 : u.message;
        })), l.join(", ");
      }, t.getTabIndex = function() {
        var e = t.props.selected, r = t.props.preSelection, o = !(t.props.showWeekPicker && (t.props.showWeekNumber || !t.isStartOfWeek())) && (t.isKeyboardSelected() || t.isSameDay(e) && V(r, e)) ? 0 : -1;
        return o;
      }, t.handleFocusDay = function() {
        var e;
        t.shouldFocusDay() && ((e = t.dayEl.current) === null || e === void 0 || e.focus({ preventScroll: !0 }));
      }, t.renderDayContents = function() {
        return t.props.monthShowsDuplicateDaysEnd && t.isAfterMonth() || t.props.monthShowsDuplicateDaysStart && t.isBeforeMonth() ? null : t.props.renderDayContents ? t.props.renderDayContents(sa(t.props.day), t.props.day) : sa(t.props.day);
      }, t.render = function() {
        return (
          // TODO: Use <option> instead of the "option" role to ensure accessibility across all devices.
          _.createElement(
            "div",
            { ref: t.dayEl, className: t.getClassNames(t.props.day), onKeyDown: t.handleOnKeyDown, onClick: t.handleClick, onMouseEnter: t.props.usePointerEvent ? void 0 : t.handleMouseEnter, onPointerEnter: t.props.usePointerEvent ? t.handleMouseEnter : void 0, tabIndex: t.getTabIndex(), "aria-label": t.getAriaLabel(), role: "option", title: t.getTitle(), "aria-disabled": t.isDisabled(), "aria-current": t.isCurrentDay() ? "date" : void 0, "aria-selected": t.isSelected() || t.isInRange() },
            t.renderDayContents(),
            t.getTitle() !== "" && _.createElement("span", { className: "overlay" }, t.getTitle())
          )
        );
      }, t;
    }
    return a.prototype.componentDidMount = function() {
      this.handleFocusDay();
    }, a.prototype.componentDidUpdate = function() {
      this.handleFocusDay();
    }, a.prototype.shouldFocusDay = function() {
      var t = !1;
      return this.getTabIndex() === 0 && this.isSameDay(this.props.preSelection) && ((!document.activeElement || document.activeElement === document.body) && (t = !0), this.props.inline && !this.props.shouldFocusDayInline && (t = !1), this.isDayActiveElement() && (t = !0), this.isDuplicateDay() && (t = !1)), t;
    }, a.prototype.isDayActiveElement = function() {
      var t, e, r;
      return ((e = (t = this.props.containerRef) === null || t === void 0 ? void 0 : t.current) === null || e === void 0 ? void 0 : e.contains(document.activeElement)) && ((r = document.activeElement) === null || r === void 0 ? void 0 : r.classList.contains("react-datepicker__day"));
    }, a.prototype.isDuplicateDay = function() {
      return (
        //day is one of the non rendered duplicate days
        this.props.monthShowsDuplicateDaysEnd && this.isAfterMonth() || this.props.monthShowsDuplicateDaysStart && this.isBeforeMonth()
      );
    }, a;
  }(pe)
), Ru = (
  /** @class */
  function(n) {
    fe(a, n);
    function a() {
      var t = n !== null && n.apply(this, arguments) || this;
      return t.weekNumberEl = et(), t.handleClick = function(e) {
        t.props.onClick && t.props.onClick(e);
      }, t.handleOnKeyDown = function(e) {
        var r, o, s = e.key;
        s === x.Space && (e.preventDefault(), e.key = x.Enter), (o = (r = t.props).handleOnKeyDown) === null || o === void 0 || o.call(r, e);
      }, t.isKeyboardSelected = function() {
        return !t.props.disabledKeyboardNavigation && !V(t.props.date, t.props.selected) && V(t.props.date, t.props.preSelection);
      }, t.getTabIndex = function() {
        return t.props.showWeekPicker && t.props.showWeekNumber && (t.isKeyboardSelected() || V(t.props.date, t.props.selected) && V(t.props.preSelection, t.props.selected)) ? 0 : -1;
      }, t.handleFocusWeekNumber = function(e) {
        var r = !1;
        t.getTabIndex() === 0 && !(e != null && e.isInputFocused) && V(t.props.date, t.props.preSelection) && ((!document.activeElement || document.activeElement === document.body) && (r = !0), t.props.inline && !t.props.shouldFocusDayInline && (r = !1), t.props.containerRef && t.props.containerRef.current && t.props.containerRef.current.contains(document.activeElement) && document.activeElement && document.activeElement.classList.contains("react-datepicker__week-number") && (r = !0)), r && t.weekNumberEl.current && t.weekNumberEl.current.focus({ preventScroll: !0 });
      }, t;
    }
    return Object.defineProperty(a, "defaultProps", {
      get: function() {
        return {
          ariaLabelPrefix: "week "
        };
      },
      enumerable: !1,
      configurable: !0
    }), a.prototype.componentDidMount = function() {
      this.handleFocusWeekNumber();
    }, a.prototype.componentDidUpdate = function(t) {
      this.handleFocusWeekNumber(t);
    }, a.prototype.render = function() {
      var t = this.props, e = t.weekNumber, r = t.ariaLabelPrefix, o = r === void 0 ? a.defaultProps.ariaLabelPrefix : r, s = t.onClick, i = {
        "react-datepicker__week-number": !0,
        "react-datepicker__week-number--clickable": !!s,
        "react-datepicker__week-number--selected": !!s && V(this.props.date, this.props.selected),
        "react-datepicker__week-number--keyboard-selected": this.isKeyboardSelected()
      };
      return _.createElement("div", { ref: this.weekNumberEl, className: de(i), "aria-label": "".concat(o, " ").concat(this.props.weekNumber), onClick: this.handleClick, onKeyDown: this.handleOnKeyDown, tabIndex: this.getTabIndex() }, e);
    }, a;
  }(pe)
), Yu = (
  /** @class */
  function(n) {
    fe(a, n);
    function a() {
      var t = n !== null && n.apply(this, arguments) || this;
      return t.isDisabled = function(e) {
        return Se(e, {
          minDate: t.props.minDate,
          maxDate: t.props.maxDate,
          excludeDates: t.props.excludeDates,
          excludeDateIntervals: t.props.excludeDateIntervals,
          includeDateIntervals: t.props.includeDateIntervals,
          includeDates: t.props.includeDates,
          filterDate: t.props.filterDate
        });
      }, t.handleDayClick = function(e, r) {
        t.props.onDayClick && t.props.onDayClick(e, r);
      }, t.handleDayMouseEnter = function(e) {
        t.props.onDayMouseEnter && t.props.onDayMouseEnter(e);
      }, t.handleWeekClick = function(e, r, o) {
        for (var s, i, c, l = new Date(e), u = 0; u < 7; u++) {
          var d = new Date(e);
          d.setDate(d.getDate() + u);
          var p = !t.isDisabled(d);
          if (p) {
            l = d;
            break;
          }
        }
        typeof t.props.onWeekSelect == "function" && t.props.onWeekSelect(l, r, o), t.props.showWeekPicker && t.handleDayClick(l, o), ((s = t.props.shouldCloseOnSelect) !== null && s !== void 0 ? s : a.defaultProps.shouldCloseOnSelect) && ((c = (i = t.props).setOpen) === null || c === void 0 || c.call(i, !1));
      }, t.formatWeekNumber = function(e) {
        return t.props.formatWeekNumber ? t.props.formatWeekNumber(e) : fu(e);
      }, t.renderDays = function() {
        var e = t.startOfWeek(), r = [], o = t.formatWeekNumber(e);
        if (t.props.showWeekNumber) {
          var s = t.props.onWeekSelect || t.props.showWeekPicker ? t.handleWeekClick.bind(t, e, o) : void 0;
          r.push(_.createElement(Ru, K({ key: "W" }, a.defaultProps, t.props, { weekNumber: o, date: e, onClick: s })));
        }
        return r.concat([0, 1, 2, 3, 4, 5, 6].map(function(i) {
          var c = Ue(e, i);
          return _.createElement(Nu, K({}, a.defaultProps, t.props, { ariaLabelPrefixWhenEnabled: t.props.chooseDayAriaLabelPrefix, ariaLabelPrefixWhenDisabled: t.props.disabledDayAriaLabelPrefix, key: c.valueOf(), day: c, onClick: t.handleDayClick.bind(t, c), onMouseEnter: t.handleDayMouseEnter.bind(t, c) }));
        }));
      }, t.startOfWeek = function() {
        return Ze(t.props.day, t.props.locale, t.props.calendarStartDay);
      }, t.isKeyboardSelected = function() {
        return !t.props.disabledKeyboardNavigation && !V(t.startOfWeek(), t.props.selected) && V(t.startOfWeek(), t.props.preSelection);
      }, t;
    }
    return Object.defineProperty(a, "defaultProps", {
      get: function() {
        return {
          shouldCloseOnSelect: !0
        };
      },
      enumerable: !1,
      configurable: !0
    }), a.prototype.render = function() {
      var t = {
        "react-datepicker__week": !0,
        "react-datepicker__week--selected": V(this.startOfWeek(), this.props.selected),
        "react-datepicker__week--keyboard-selected": this.isKeyboardSelected()
      };
      return _.createElement("div", { className: de(t) }, this.renderDays());
    }, a;
  }(pe)
), At, Iu = 6, wt = {
  TWO_COLUMNS: "two_columns",
  THREE_COLUMNS: "three_columns",
  FOUR_COLUMNS: "four_columns"
}, rn = (At = {}, At[wt.TWO_COLUMNS] = {
  grid: [
    [0, 1],
    [2, 3],
    [4, 5],
    [6, 7],
    [8, 9],
    [10, 11]
  ],
  verticalNavigationOffset: 2
}, At[wt.THREE_COLUMNS] = {
  grid: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [9, 10, 11]
  ],
  verticalNavigationOffset: 3
}, At[wt.FOUR_COLUMNS] = {
  grid: [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11]
  ],
  verticalNavigationOffset: 4
}, At), ir = 1;
function Ta(n, a) {
  return n ? wt.FOUR_COLUMNS : a ? wt.TWO_COLUMNS : wt.THREE_COLUMNS;
}
var Fu = (
  /** @class */
  function(n) {
    fe(a, n);
    function a() {
      var t = n !== null && n.apply(this, arguments) || this;
      return t.MONTH_REFS = Ie([], Array(12), !0).map(function() {
        return et();
      }), t.QUARTER_REFS = Ie([], Array(4), !0).map(function() {
        return et();
      }), t.isDisabled = function(e) {
        return Se(e, {
          minDate: t.props.minDate,
          maxDate: t.props.maxDate,
          excludeDates: t.props.excludeDates,
          excludeDateIntervals: t.props.excludeDateIntervals,
          includeDateIntervals: t.props.includeDateIntervals,
          includeDates: t.props.includeDates,
          filterDate: t.props.filterDate
        });
      }, t.isExcluded = function(e) {
        return Tn(e, {
          excludeDates: t.props.excludeDates,
          excludeDateIntervals: t.props.excludeDateIntervals
        });
      }, t.handleDayClick = function(e, r) {
        var o, s;
        (s = (o = t.props).onDayClick) === null || s === void 0 || s.call(o, e, r, t.props.orderInDisplay);
      }, t.handleDayMouseEnter = function(e) {
        var r, o;
        (o = (r = t.props).onDayMouseEnter) === null || o === void 0 || o.call(r, e);
      }, t.handleMouseLeave = function() {
        var e, r;
        (r = (e = t.props).onMouseLeave) === null || r === void 0 || r.call(e);
      }, t.isRangeStartMonth = function(e) {
        var r = t.props, o = r.day, s = r.startDate, i = r.endDate;
        return !s || !i ? !1 : ge(ke(o, e), s);
      }, t.isRangeStartQuarter = function(e) {
        var r = t.props, o = r.day, s = r.startDate, i = r.endDate;
        return !s || !i ? !1 : Tr(vt(o, e), s);
      }, t.isRangeEndMonth = function(e) {
        var r = t.props, o = r.day, s = r.startDate, i = r.endDate;
        return !s || !i ? !1 : ge(ke(o, e), i);
      }, t.isRangeEndQuarter = function(e) {
        var r = t.props, o = r.day, s = r.startDate, i = r.endDate;
        return !s || !i ? !1 : Tr(vt(o, e), i);
      }, t.isInSelectingRangeMonth = function(e) {
        var r, o = t.props, s = o.day, i = o.selectsStart, c = o.selectsEnd, l = o.selectsRange, u = o.startDate, d = o.endDate, p = (r = t.props.selectingDate) !== null && r !== void 0 ? r : t.props.preSelection;
        return !(i || c || l) || !p ? !1 : i && d ? nr(p, d, e, s) : c && u || l && u && !d ? nr(u, p, e, s) : !1;
      }, t.isSelectingMonthRangeStart = function(e) {
        var r;
        if (!t.isInSelectingRangeMonth(e))
          return !1;
        var o = t.props, s = o.day, i = o.startDate, c = o.selectsStart, l = ke(s, e), u = (r = t.props.selectingDate) !== null && r !== void 0 ? r : t.props.preSelection;
        return c ? ge(l, u) : ge(l, i);
      }, t.isSelectingMonthRangeEnd = function(e) {
        var r;
        if (!t.isInSelectingRangeMonth(e))
          return !1;
        var o = t.props, s = o.day, i = o.endDate, c = o.selectsEnd, l = o.selectsRange, u = ke(s, e), d = (r = t.props.selectingDate) !== null && r !== void 0 ? r : t.props.preSelection;
        return c || l ? ge(u, d) : ge(u, i);
      }, t.isInSelectingRangeQuarter = function(e) {
        var r, o = t.props, s = o.day, i = o.selectsStart, c = o.selectsEnd, l = o.selectsRange, u = o.startDate, d = o.endDate, p = (r = t.props.selectingDate) !== null && r !== void 0 ? r : t.props.preSelection;
        return !(i || c || l) || !p ? !1 : i && d ? sr(p, d, e, s) : c && u || l && u && !d ? sr(u, p, e, s) : !1;
      }, t.isWeekInMonth = function(e) {
        var r = t.props.day, o = Ue(e, 6);
        return ge(e, r) || ge(o, r);
      }, t.isCurrentMonth = function(e, r) {
        return W(e) === W(ee()) && r === ve(ee());
      }, t.isCurrentQuarter = function(e, r) {
        return W(e) === W(ee()) && r === ct(ee());
      }, t.isSelectedMonth = function(e, r, o) {
        return ve(o) === r && W(e) === W(o);
      }, t.isSelectMonthInList = function(e, r, o) {
        return o.some(function(s) {
          return t.isSelectedMonth(e, r, s);
        });
      }, t.isSelectedQuarter = function(e, r, o) {
        return ct(e) === r && W(e) === W(o);
      }, t.renderWeeks = function() {
        for (var e = [], r = t.props.fixedHeight, o = 0, s = !1, i = Ze(Ke(t.props.day), t.props.locale, t.props.calendarStartDay), c = function(h) {
          return t.props.showWeekPicker ? Ze(h, t.props.locale, t.props.calendarStartDay) : t.props.preSelection;
        }, l = function(h) {
          return t.props.showWeekPicker ? Ze(h, t.props.locale, t.props.calendarStartDay) : t.props.selected;
        }, u = t.props.selected ? l(t.props.selected) : void 0, d = t.props.preSelection ? c(t.props.preSelection) : void 0; e.push(_.createElement(Yu, K({}, t.props, { ariaLabelPrefix: t.props.weekAriaLabelPrefix, key: o, day: i, month: ve(t.props.day), onDayClick: t.handleDayClick, onDayMouseEnter: t.handleDayMouseEnter, selected: u, preSelection: d, showWeekNumber: t.props.showWeekNumbers }))), !s; ) {
          o++, i = br(i, 1);
          var p = r && o >= Iu, m = !r && !t.isWeekInMonth(i);
          if (p || m)
            if (t.props.peekNextMonth)
              s = !0;
            else
              break;
        }
        return e;
      }, t.onMonthClick = function(e, r) {
        var o = t.isMonthDisabledForLabelDate(r), s = o.isDisabled, i = o.labelDate;
        s || t.handleDayClick(Ke(i), e);
      }, t.onMonthMouseEnter = function(e) {
        var r = t.isMonthDisabledForLabelDate(e), o = r.isDisabled, s = r.labelDate;
        o || t.handleDayMouseEnter(Ke(s));
      }, t.handleMonthNavigation = function(e, r) {
        var o, s, i, c;
        (s = (o = t.props).setPreSelection) === null || s === void 0 || s.call(o, r), (c = (i = t.MONTH_REFS[e]) === null || i === void 0 ? void 0 : i.current) === null || c === void 0 || c.focus();
      }, t.handleKeyboardNavigation = function(e, r, o) {
        var s, i = t.props, c = i.selected, l = i.preSelection, u = i.setPreSelection, d = i.minDate, p = i.maxDate, m = i.showFourColumnMonthYearPicker, h = i.showTwoColumnMonthYearPicker;
        if (l) {
          var g = Ta(m, h), v = t.getVerticalOffset(g), b = (s = rn[g]) === null || s === void 0 ? void 0 : s.grid, D = function(M, P, O) {
            var z, U, H = P, j = O;
            switch (M) {
              case x.ArrowRight:
                H = Oe(P, ir), j = O === 11 ? 0 : O + ir;
                break;
              case x.ArrowLeft:
                H = kt(P, ir), j = O === 0 ? 11 : O - ir;
                break;
              case x.ArrowUp:
                H = kt(P, v), j = !((z = b == null ? void 0 : b[0]) === null || z === void 0) && z.includes(O) ? O + 12 - v : O - v;
                break;
              case x.ArrowDown:
                H = Oe(P, v), j = !((U = b == null ? void 0 : b[b.length - 1]) === null || U === void 0) && U.includes(O) ? O - 12 + v : O + v;
                break;
            }
            return { newCalculatedDate: H, newCalculatedMonth: j };
          }, k = function(M, P, O) {
            for (var z = 40, U = M, H = !1, j = 0, B = D(U, P, O), Q = B.newCalculatedDate, R = B.newCalculatedMonth; !H; ) {
              if (j >= z) {
                Q = P, R = O;
                break;
              }
              if (d && Q < d) {
                U = x.ArrowRight;
                var A = D(U, Q, R);
                Q = A.newCalculatedDate, R = A.newCalculatedMonth;
              }
              if (p && Q > p) {
                U = x.ArrowLeft;
                var A = D(U, Q, R);
                Q = A.newCalculatedDate, R = A.newCalculatedMonth;
              }
              if (yu(Q, t.props)) {
                var A = D(U, Q, R);
                Q = A.newCalculatedDate, R = A.newCalculatedMonth;
              } else
                H = !0;
              j++;
            }
            return { newCalculatedDate: Q, newCalculatedMonth: R };
          };
          if (r === x.Enter) {
            t.isMonthDisabled(o) || (t.onMonthClick(e, o), u == null || u(c));
            return;
          }
          var T = k(r, l, o), N = T.newCalculatedDate, L = T.newCalculatedMonth;
          switch (r) {
            case x.ArrowRight:
            case x.ArrowLeft:
            case x.ArrowUp:
            case x.ArrowDown:
              t.handleMonthNavigation(L, N);
              break;
          }
        }
      }, t.getVerticalOffset = function(e) {
        var r, o;
        return (o = (r = rn[e]) === null || r === void 0 ? void 0 : r.verticalNavigationOffset) !== null && o !== void 0 ? o : 0;
      }, t.onMonthKeyDown = function(e, r) {
        var o = t.props, s = o.disabledKeyboardNavigation, i = o.handleOnMonthKeyDown, c = e.key;
        c !== x.Tab && e.preventDefault(), s || t.handleKeyboardNavigation(e, c, r), i && i(e);
      }, t.onQuarterClick = function(e, r) {
        var o = vt(t.props.day, r);
        ar(o, t.props) || t.handleDayClick(_a(o), e);
      }, t.onQuarterMouseEnter = function(e) {
        var r = vt(t.props.day, e);
        ar(r, t.props) || t.handleDayMouseEnter(_a(r));
      }, t.handleQuarterNavigation = function(e, r) {
        var o, s, i, c;
        t.isDisabled(r) || t.isExcluded(r) || ((s = (o = t.props).setPreSelection) === null || s === void 0 || s.call(o, r), (c = (i = t.QUARTER_REFS[e - 1]) === null || i === void 0 ? void 0 : i.current) === null || c === void 0 || c.focus());
      }, t.onQuarterKeyDown = function(e, r) {
        var o, s, i = e.key;
        if (!t.props.disabledKeyboardNavigation)
          switch (i) {
            case x.Enter:
              t.onQuarterClick(e, r), (s = (o = t.props).setPreSelection) === null || s === void 0 || s.call(o, t.props.selected);
              break;
            case x.ArrowRight:
              if (!t.props.preSelection)
                break;
              t.handleQuarterNavigation(r === 4 ? 1 : r + 1, bn(t.props.preSelection, 1));
              break;
            case x.ArrowLeft:
              if (!t.props.preSelection)
                break;
              t.handleQuarterNavigation(r === 1 ? 4 : r - 1, eo(t.props.preSelection, 1));
              break;
          }
      }, t.isMonthDisabledForLabelDate = function(e) {
        var r, o = t.props, s = o.day, i = o.minDate, c = o.maxDate, l = o.excludeDates, u = o.includeDates, d = ke(s, e);
        return {
          isDisabled: (r = (i || c || l || u) && ho(d, t.props)) !== null && r !== void 0 ? r : !1,
          labelDate: d
        };
      }, t.isMonthDisabled = function(e) {
        var r = t.isMonthDisabledForLabelDate(e).isDisabled;
        return r;
      }, t.getMonthClassNames = function(e) {
        var r = t.props, o = r.day, s = r.startDate, i = r.endDate, c = r.preSelection, l = r.monthClassName, u = l ? l(ke(o, e)) : void 0, d = t.getSelection();
        return de("react-datepicker__month-text", "react-datepicker__month-".concat(e), u, {
          "react-datepicker__month-text--disabled": t.isMonthDisabled(e),
          "react-datepicker__month-text--selected": d ? t.isSelectMonthInList(o, e, d) : void 0,
          "react-datepicker__month-text--keyboard-selected": !t.props.disabledKeyboardNavigation && c && t.isSelectedMonth(o, e, c) && !t.isMonthDisabled(e),
          "react-datepicker__month-text--in-selecting-range": t.isInSelectingRangeMonth(e),
          "react-datepicker__month-text--in-range": s && i ? nr(s, i, e, o) : void 0,
          "react-datepicker__month-text--range-start": t.isRangeStartMonth(e),
          "react-datepicker__month-text--range-end": t.isRangeEndMonth(e),
          "react-datepicker__month-text--selecting-range-start": t.isSelectingMonthRangeStart(e),
          "react-datepicker__month-text--selecting-range-end": t.isSelectingMonthRangeEnd(e),
          "react-datepicker__month-text--today": t.isCurrentMonth(o, e)
        });
      }, t.getTabIndex = function(e) {
        if (t.props.preSelection == null)
          return "-1";
        var r = ve(t.props.preSelection), o = t.isMonthDisabledForLabelDate(r).isDisabled, s = e === r && !(o || t.props.disabledKeyboardNavigation) ? "0" : "-1";
        return s;
      }, t.getQuarterTabIndex = function(e) {
        if (t.props.preSelection == null)
          return "-1";
        var r = ct(t.props.preSelection), o = ar(t.props.day, t.props), s = e === r && !(o || t.props.disabledKeyboardNavigation) ? "0" : "-1";
        return s;
      }, t.getAriaLabel = function(e) {
        var r = t.props, o = r.chooseDayAriaLabelPrefix, s = o === void 0 ? "Choose" : o, i = r.disabledDayAriaLabelPrefix, c = i === void 0 ? "Not available" : i, l = r.day, u = r.locale, d = ke(l, e), p = t.isDisabled(d) || t.isExcluded(d) ? c : s;
        return "".concat(p, " ").concat(re(d, "MMMM yyyy", u));
      }, t.getQuarterClassNames = function(e) {
        var r = t.props, o = r.day, s = r.startDate, i = r.endDate, c = r.selected, l = r.minDate, u = r.maxDate, d = r.excludeDates, p = r.includeDates, m = r.filterDate, h = r.preSelection, g = r.disabledKeyboardNavigation, v = (l || u || d || p || m) && ar(vt(o, e), t.props);
        return de("react-datepicker__quarter-text", "react-datepicker__quarter-".concat(e), {
          "react-datepicker__quarter-text--disabled": v,
          "react-datepicker__quarter-text--selected": c ? t.isSelectedQuarter(o, e, c) : void 0,
          "react-datepicker__quarter-text--keyboard-selected": !g && h && t.isSelectedQuarter(o, e, h) && !v,
          "react-datepicker__quarter-text--in-selecting-range": t.isInSelectingRangeQuarter(e),
          "react-datepicker__quarter-text--in-range": s && i ? sr(s, i, e, o) : void 0,
          "react-datepicker__quarter-text--range-start": t.isRangeStartQuarter(e),
          "react-datepicker__quarter-text--range-end": t.isRangeEndQuarter(e)
        });
      }, t.getMonthContent = function(e) {
        var r = t.props, o = r.showFullMonthYearPicker, s = r.renderMonthContent, i = r.locale, c = r.day, l = mo(e, i), u = On(e, i);
        return s ? s(e, l, u, c) : o ? u : l;
      }, t.getQuarterContent = function(e) {
        var r, o = t.props, s = o.renderQuarterContent, i = o.locale, c = wu(e, i);
        return (r = s == null ? void 0 : s(e, c)) !== null && r !== void 0 ? r : c;
      }, t.renderMonths = function() {
        var e, r = t.props, o = r.showTwoColumnMonthYearPicker, s = r.showFourColumnMonthYearPicker, i = r.day, c = r.selected, l = (e = rn[Ta(s, o)]) === null || e === void 0 ? void 0 : e.grid;
        return l == null ? void 0 : l.map(function(u, d) {
          return _.createElement("div", { className: "react-datepicker__month-wrapper", key: d }, u.map(function(p, m) {
            return _.createElement("div", { ref: t.MONTH_REFS[p], key: m, onClick: function(h) {
              t.onMonthClick(h, p);
            }, onKeyDown: function(h) {
              vo(h) && (h.preventDefault(), h.key = x.Enter), t.onMonthKeyDown(h, p);
            }, onMouseEnter: t.props.usePointerEvent ? void 0 : function() {
              return t.onMonthMouseEnter(p);
            }, onPointerEnter: t.props.usePointerEvent ? function() {
              return t.onMonthMouseEnter(p);
            } : void 0, tabIndex: Number(t.getTabIndex(p)), className: t.getMonthClassNames(p), "aria-disabled": t.isMonthDisabled(p), role: "option", "aria-label": t.getAriaLabel(p), "aria-current": t.isCurrentMonth(i, p) ? "date" : void 0, "aria-selected": c ? t.isSelectedMonth(i, p, c) : void 0 }, t.getMonthContent(p));
          }));
        });
      }, t.renderQuarters = function() {
        var e = t.props, r = e.day, o = e.selected, s = [1, 2, 3, 4];
        return _.createElement("div", { className: "react-datepicker__quarter-wrapper" }, s.map(function(i, c) {
          return _.createElement("div", { key: c, ref: t.QUARTER_REFS[c], role: "option", onClick: function(l) {
            t.onQuarterClick(l, i);
          }, onKeyDown: function(l) {
            t.onQuarterKeyDown(l, i);
          }, onMouseEnter: t.props.usePointerEvent ? void 0 : function() {
            return t.onQuarterMouseEnter(i);
          }, onPointerEnter: t.props.usePointerEvent ? function() {
            return t.onQuarterMouseEnter(i);
          } : void 0, className: t.getQuarterClassNames(i), "aria-selected": o ? t.isSelectedQuarter(r, i, o) : void 0, tabIndex: Number(t.getQuarterTabIndex(i)), "aria-current": t.isCurrentQuarter(r, i) ? "date" : void 0 }, t.getQuarterContent(i));
        }));
      }, t.getClassNames = function() {
        var e = t.props, r = e.selectingDate, o = e.selectsStart, s = e.selectsEnd, i = e.showMonthYearPicker, c = e.showQuarterYearPicker, l = e.showWeekPicker;
        return de("react-datepicker__month", {
          "react-datepicker__month--selecting-range": r && (o || s)
        }, { "react-datepicker__monthPicker": i }, { "react-datepicker__quarterPicker": c }, { "react-datepicker__weekPicker": l });
      }, t;
    }
    return a.prototype.getSelection = function() {
      var t = this.props, e = t.selected, r = t.selectedDates, o = t.selectsMultiple;
      if (o)
        return r;
      if (e)
        return [e];
    }, a.prototype.render = function() {
      var t = this.props, e = t.showMonthYearPicker, r = t.showQuarterYearPicker, o = t.day, s = t.ariaLabelPrefix, i = s === void 0 ? "Month " : s, c = i ? i.trim() + " " : "";
      return _.createElement("div", { className: this.getClassNames(), onMouseLeave: this.props.usePointerEvent ? void 0 : this.handleMouseLeave, onPointerLeave: this.props.usePointerEvent ? this.handleMouseLeave : void 0, "aria-label": "".concat(c).concat(re(o, "MMMM, yyyy", this.props.locale)), role: "listbox" }, e ? this.renderMonths() : r ? this.renderQuarters() : this.renderWeeks());
    }, a;
  }(pe)
), Lu = (
  /** @class */
  function(n) {
    fe(a, n);
    function a() {
      var t = n !== null && n.apply(this, arguments) || this;
      return t.isSelectedMonth = function(e) {
        return t.props.month === e;
      }, t.renderOptions = function() {
        return t.props.monthNames.map(function(e, r) {
          return _.createElement(
            "div",
            { className: t.isSelectedMonth(r) ? "react-datepicker__month-option react-datepicker__month-option--selected_month" : "react-datepicker__month-option", key: e, onClick: t.onChange.bind(t, r), "aria-selected": t.isSelectedMonth(r) ? "true" : void 0 },
            t.isSelectedMonth(r) ? _.createElement("span", { className: "react-datepicker__month-option--selected" }, "✓") : "",
            e
          );
        });
      }, t.onChange = function(e) {
        return t.props.onChange(e);
      }, t.handleClickOutside = function() {
        return t.props.onCancel();
      }, t;
    }
    return a.prototype.render = function() {
      return _.createElement(jr, { className: "react-datepicker__month-dropdown", onClickOutside: this.handleClickOutside }, this.renderOptions());
    }, a;
  }(pe)
), Au = (
  /** @class */
  function(n) {
    fe(a, n);
    function a() {
      var t = n !== null && n.apply(this, arguments) || this;
      return t.state = {
        dropdownVisible: !1
      }, t.renderSelectOptions = function(e) {
        return e.map(function(r, o) {
          return _.createElement("option", { key: r, value: o }, r);
        });
      }, t.renderSelectMode = function(e) {
        return _.createElement("select", { value: t.props.month, className: "react-datepicker__month-select", onChange: function(r) {
          return t.onChange(parseInt(r.target.value));
        } }, t.renderSelectOptions(e));
      }, t.renderReadView = function(e, r) {
        return _.createElement(
          "div",
          { key: "read", style: { visibility: e ? "visible" : "hidden" }, className: "react-datepicker__month-read-view", onClick: t.toggleDropdown },
          _.createElement("span", { className: "react-datepicker__month-read-view--down-arrow" }),
          _.createElement("span", { className: "react-datepicker__month-read-view--selected-month" }, r[t.props.month])
        );
      }, t.renderDropdown = function(e) {
        return _.createElement(Lu, K({ key: "dropdown" }, t.props, { monthNames: e, onChange: t.onChange, onCancel: t.toggleDropdown }));
      }, t.renderScrollMode = function(e) {
        var r = t.state.dropdownVisible, o = [t.renderReadView(!r, e)];
        return r && o.unshift(t.renderDropdown(e)), o;
      }, t.onChange = function(e) {
        t.toggleDropdown(), e !== t.props.month && t.props.onChange(e);
      }, t.toggleDropdown = function() {
        return t.setState({
          dropdownVisible: !t.state.dropdownVisible
        });
      }, t;
    }
    return a.prototype.render = function() {
      var t = this, e = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(this.props.useShortMonthInDropdown ? function(o) {
        return mo(o, t.props.locale);
      } : function(o) {
        return On(o, t.props.locale);
      }), r;
      switch (this.props.dropdownMode) {
        case "scroll":
          r = this.renderScrollMode(e);
          break;
        case "select":
          r = this.renderSelectMode(e);
          break;
      }
      return _.createElement("div", { className: "react-datepicker__month-dropdown-container react-datepicker__month-dropdown-container--".concat(this.props.dropdownMode) }, r);
    }, a;
  }(pe)
);
function ju(n, a) {
  for (var t = [], e = Ke(n), r = Ke(a); !tt(e, r); )
    t.push(ee(e)), e = Oe(e, 1);
  return t;
}
var Wu = (
  /** @class */
  function(n) {
    fe(a, n);
    function a(t) {
      var e = n.call(this, t) || this;
      return e.renderOptions = function() {
        return e.state.monthYearsList.map(function(r) {
          var o = dn(r), s = Ne(e.props.date, r) && ge(e.props.date, r);
          return _.createElement(
            "div",
            { className: s ? "react-datepicker__month-year-option--selected_month-year" : "react-datepicker__month-year-option", key: o, onClick: e.onChange.bind(e, o), "aria-selected": s ? "true" : void 0 },
            s ? _.createElement("span", { className: "react-datepicker__month-year-option--selected" }, "✓") : "",
            re(r, e.props.dateFormat, e.props.locale)
          );
        });
      }, e.onChange = function(r) {
        return e.props.onChange(r);
      }, e.handleClickOutside = function() {
        e.props.onCancel();
      }, e.state = {
        monthYearsList: ju(e.props.minDate, e.props.maxDate)
      }, e;
    }
    return a.prototype.render = function() {
      var t = de({
        "react-datepicker__month-year-dropdown": !0,
        "react-datepicker__month-year-dropdown--scrollable": this.props.scrollableMonthYearDropdown
      });
      return _.createElement(jr, { className: t, onClickOutside: this.handleClickOutside }, this.renderOptions());
    }, a;
  }(pe)
), $u = (
  /** @class */
  function(n) {
    fe(a, n);
    function a() {
      var t = n !== null && n.apply(this, arguments) || this;
      return t.state = {
        dropdownVisible: !1
      }, t.renderSelectOptions = function() {
        for (var e = Ke(t.props.minDate), r = Ke(t.props.maxDate), o = []; !tt(e, r); ) {
          var s = dn(e);
          o.push(_.createElement("option", { key: s, value: s }, re(e, t.props.dateFormat, t.props.locale))), e = Oe(e, 1);
        }
        return o;
      }, t.onSelectChange = function(e) {
        t.onChange(parseInt(e.target.value));
      }, t.renderSelectMode = function() {
        return _.createElement("select", { value: dn(Ke(t.props.date)), className: "react-datepicker__month-year-select", onChange: t.onSelectChange }, t.renderSelectOptions());
      }, t.renderReadView = function(e) {
        var r = re(t.props.date, t.props.dateFormat, t.props.locale);
        return _.createElement(
          "div",
          { key: "read", style: { visibility: e ? "visible" : "hidden" }, className: "react-datepicker__month-year-read-view", onClick: t.toggleDropdown },
          _.createElement("span", { className: "react-datepicker__month-year-read-view--down-arrow" }),
          _.createElement("span", { className: "react-datepicker__month-year-read-view--selected-month-year" }, r)
        );
      }, t.renderDropdown = function() {
        return _.createElement(Wu, K({ key: "dropdown" }, t.props, { onChange: t.onChange, onCancel: t.toggleDropdown }));
      }, t.renderScrollMode = function() {
        var e = t.state.dropdownVisible, r = [t.renderReadView(!e)];
        return e && r.unshift(t.renderDropdown()), r;
      }, t.onChange = function(e) {
        t.toggleDropdown();
        var r = ee(e);
        Ne(t.props.date, r) && ge(t.props.date, r) || t.props.onChange(r);
      }, t.toggleDropdown = function() {
        return t.setState({
          dropdownVisible: !t.state.dropdownVisible
        });
      }, t;
    }
    return a.prototype.render = function() {
      var t;
      switch (this.props.dropdownMode) {
        case "scroll":
          t = this.renderScrollMode();
          break;
        case "select":
          t = this.renderSelectMode();
          break;
      }
      return _.createElement("div", { className: "react-datepicker__month-year-dropdown-container react-datepicker__month-year-dropdown-container--".concat(this.props.dropdownMode) }, t);
    }, a;
  }(pe)
), zu = (
  /** @class */
  function(n) {
    fe(a, n);
    function a() {
      var t = n !== null && n.apply(this, arguments) || this;
      return t.state = {
        height: null
      }, t.scrollToTheSelectedTime = function() {
        requestAnimationFrame(function() {
          var e, r, o;
          t.list && (t.list.scrollTop = (o = t.centerLi && a.calcCenterPosition(t.props.monthRef ? t.props.monthRef.clientHeight - ((r = (e = t.header) === null || e === void 0 ? void 0 : e.clientHeight) !== null && r !== void 0 ? r : 0) : t.list.clientHeight, t.centerLi)) !== null && o !== void 0 ? o : 0);
        });
      }, t.handleClick = function(e) {
        var r, o;
        (t.props.minTime || t.props.maxTime) && ya(e, t.props) || (t.props.excludeTimes || t.props.includeTimes || t.props.filterTime) && wa(e, t.props) || (o = (r = t.props).onChange) === null || o === void 0 || o.call(r, e);
      }, t.isSelectedTime = function(e) {
        return t.props.selected && Ou(t.props.selected, e);
      }, t.isDisabledTime = function(e) {
        return (t.props.minTime || t.props.maxTime) && ya(e, t.props) || (t.props.excludeTimes || t.props.includeTimes || t.props.filterTime) && wa(e, t.props);
      }, t.liClasses = function(e) {
        var r, o = [
          "react-datepicker__time-list-item",
          t.props.timeClassName ? t.props.timeClassName(e) : void 0
        ];
        return t.isSelectedTime(e) && o.push("react-datepicker__time-list-item--selected"), t.isDisabledTime(e) && o.push("react-datepicker__time-list-item--disabled"), t.props.injectTimes && (Fe(e) * 3600 + Le(e) * 60 + Ve(e)) % (((r = t.props.intervals) !== null && r !== void 0 ? r : a.defaultProps.intervals) * 60) !== 0 && o.push("react-datepicker__time-list-item--injected"), o.join(" ");
      }, t.handleOnKeyDown = function(e, r) {
        var o, s;
        e.key === x.Space && (e.preventDefault(), e.key = x.Enter), (e.key === x.ArrowUp || e.key === x.ArrowLeft) && e.target instanceof HTMLElement && e.target.previousSibling && (e.preventDefault(), e.target.previousSibling instanceof HTMLElement && e.target.previousSibling.focus()), (e.key === x.ArrowDown || e.key === x.ArrowRight) && e.target instanceof HTMLElement && e.target.nextSibling && (e.preventDefault(), e.target.nextSibling instanceof HTMLElement && e.target.nextSibling.focus()), e.key === x.Enter && t.handleClick(r), (s = (o = t.props).handleOnKeyDown) === null || s === void 0 || s.call(o, e);
      }, t.renderTimes = function() {
        for (var e, r = [], o = typeof t.props.format == "string" ? t.props.format : "p", s = (e = t.props.intervals) !== null && e !== void 0 ? e : a.defaultProps.intervals, i = t.props.selected || t.props.openToDate || ee(), c = mr(i), l = t.props.injectTimes && t.props.injectTimes.sort(function(v, b) {
          return v.getTime() - b.getTime();
        }), u = 60 * Pu(i), d = u / s, p = 0; p < d; p++) {
          var m = cn(c, p * s);
          if (r.push(m), l) {
            var h = Su(c, m, p, s, l);
            r = r.concat(h);
          }
        }
        var g = r.reduce(function(v, b) {
          return b.getTime() <= i.getTime() ? b : v;
        }, r[0]);
        return r.map(function(v) {
          return _.createElement("li", { key: v.valueOf(), onClick: t.handleClick.bind(t, v), className: t.liClasses(v), ref: function(b) {
            v === g && (t.centerLi = b);
          }, onKeyDown: function(b) {
            t.handleOnKeyDown(b, v);
          }, tabIndex: v === g ? 0 : -1, role: "option", "aria-selected": t.isSelectedTime(v) ? "true" : void 0, "aria-disabled": t.isDisabledTime(v) ? "true" : void 0 }, re(v, o, t.props.locale));
        });
      }, t.renderTimeCaption = function() {
        return t.props.showTimeCaption === !1 ? _.createElement(_.Fragment, null) : _.createElement(
          "div",
          { className: "react-datepicker__header react-datepicker__header--time ".concat(t.props.showTimeSelectOnly ? "react-datepicker__header--time--only" : ""), ref: function(e) {
            t.header = e;
          } },
          _.createElement("div", { className: "react-datepicker-time__header" }, t.props.timeCaption)
        );
      }, t;
    }
    return Object.defineProperty(a, "defaultProps", {
      get: function() {
        return {
          intervals: 30,
          todayButton: null,
          timeCaption: "Time",
          showTimeCaption: !0
        };
      },
      enumerable: !1,
      configurable: !0
    }), a.prototype.componentDidMount = function() {
      this.scrollToTheSelectedTime(), this.props.monthRef && this.header && this.setState({
        height: this.props.monthRef.clientHeight - this.header.clientHeight
      });
    }, a.prototype.render = function() {
      var t = this, e, r = this.state.height;
      return _.createElement(
        "div",
        { className: "react-datepicker__time-container ".concat(((e = this.props.todayButton) !== null && e !== void 0 ? e : a.defaultProps.todayButton) ? "react-datepicker__time-container--with-today-button" : "") },
        this.renderTimeCaption(),
        _.createElement(
          "div",
          { className: "react-datepicker__time" },
          _.createElement(
            "div",
            { className: "react-datepicker__time-box" },
            _.createElement("ul", { className: "react-datepicker__time-list", ref: function(o) {
              t.list = o;
            }, style: r ? { height: r } : {}, role: "listbox", "aria-label": this.props.timeCaption }, this.renderTimes())
          )
        )
      );
    }, a.calcCenterPosition = function(t, e) {
      return e.offsetTop - (t / 2 - e.clientHeight / 2);
    }, a;
  }(pe)
), Na = 3, Hu = (
  /** @class */
  function(n) {
    fe(a, n);
    function a(t) {
      var e = n.call(this, t) || this;
      return e.YEAR_REFS = Ie([], Array(e.props.yearItemNumber), !0).map(function() {
        return et();
      }), e.isDisabled = function(r) {
        return Se(r, {
          minDate: e.props.minDate,
          maxDate: e.props.maxDate,
          excludeDates: e.props.excludeDates,
          includeDates: e.props.includeDates,
          filterDate: e.props.filterDate
        });
      }, e.isExcluded = function(r) {
        return Tn(r, {
          excludeDates: e.props.excludeDates
        });
      }, e.selectingDate = function() {
        var r;
        return (r = e.props.selectingDate) !== null && r !== void 0 ? r : e.props.preSelection;
      }, e.updateFocusOnPaginate = function(r) {
        var o = function() {
          var s, i;
          (i = (s = e.YEAR_REFS[r]) === null || s === void 0 ? void 0 : s.current) === null || i === void 0 || i.focus();
        };
        window.requestAnimationFrame(o);
      }, e.handleYearClick = function(r, o) {
        e.props.onDayClick && e.props.onDayClick(r, o);
      }, e.handleYearNavigation = function(r, o) {
        var s, i, c, l, u = e.props, d = u.date, p = u.yearItemNumber;
        if (!(d === void 0 || p === void 0)) {
          var m = Je(d, p).startPeriod;
          e.isDisabled(o) || e.isExcluded(o) || ((i = (s = e.props).setPreSelection) === null || i === void 0 || i.call(s, o), r - m < 0 ? e.updateFocusOnPaginate(p - (m - r)) : r - m >= p ? e.updateFocusOnPaginate(Math.abs(p - (r - m))) : (l = (c = e.YEAR_REFS[r - m]) === null || c === void 0 ? void 0 : c.current) === null || l === void 0 || l.focus());
        }
      }, e.isSameDay = function(r, o) {
        return V(r, o);
      }, e.isCurrentYear = function(r) {
        return r === W(ee());
      }, e.isRangeStart = function(r) {
        return e.props.startDate && e.props.endDate && Ne(Te(ee(), r), e.props.startDate);
      }, e.isRangeEnd = function(r) {
        return e.props.startDate && e.props.endDate && Ne(Te(ee(), r), e.props.endDate);
      }, e.isInRange = function(r) {
        return or(r, e.props.startDate, e.props.endDate);
      }, e.isInSelectingRange = function(r) {
        var o = e.props, s = o.selectsStart, i = o.selectsEnd, c = o.selectsRange, l = o.startDate, u = o.endDate;
        return !(s || i || c) || !e.selectingDate() ? !1 : s && u ? or(r, e.selectingDate(), u) : i && l || c && l && !u ? or(r, l, e.selectingDate()) : !1;
      }, e.isSelectingRangeStart = function(r) {
        var o;
        if (!e.isInSelectingRange(r))
          return !1;
        var s = e.props, i = s.startDate, c = s.selectsStart, l = Te(ee(), r);
        return c ? Ne(l, (o = e.selectingDate()) !== null && o !== void 0 ? o : null) : Ne(l, i ?? null);
      }, e.isSelectingRangeEnd = function(r) {
        var o;
        if (!e.isInSelectingRange(r))
          return !1;
        var s = e.props, i = s.endDate, c = s.selectsEnd, l = s.selectsRange, u = Te(ee(), r);
        return c || l ? Ne(u, (o = e.selectingDate()) !== null && o !== void 0 ? o : null) : Ne(u, i ?? null);
      }, e.isKeyboardSelected = function(r) {
        if (!(e.props.date === void 0 || e.props.selected == null || e.props.preSelection == null)) {
          var o = e.props, s = o.minDate, i = o.maxDate, c = o.excludeDates, l = o.includeDates, u = o.filterDate, d = Wt(Te(e.props.date, r)), p = (s || i || c || l || u) && hr(r, e.props);
          return !e.props.disabledKeyboardNavigation && !e.props.inline && !V(d, Wt(e.props.selected)) && V(d, Wt(e.props.preSelection)) && !p;
        }
      }, e.onYearClick = function(r, o) {
        var s = e.props.date;
        s !== void 0 && e.handleYearClick(Wt(Te(s, o)), r);
      }, e.onYearKeyDown = function(r, o) {
        var s, i, c = r.key, l = e.props, u = l.date, d = l.yearItemNumber, p = l.handleOnKeyDown;
        if (c !== x.Tab && r.preventDefault(), !e.props.disabledKeyboardNavigation)
          switch (c) {
            case x.Enter:
              if (e.props.selected == null)
                break;
              e.onYearClick(r, o), (i = (s = e.props).setPreSelection) === null || i === void 0 || i.call(s, e.props.selected);
              break;
            case x.ArrowRight:
              if (e.props.preSelection == null)
                break;
              e.handleYearNavigation(o + 1, Qe(e.props.preSelection, 1));
              break;
            case x.ArrowLeft:
              if (e.props.preSelection == null)
                break;
              e.handleYearNavigation(o - 1, xt(e.props.preSelection, 1));
              break;
            case x.ArrowUp: {
              if (u === void 0 || d === void 0 || e.props.preSelection == null)
                break;
              var m = Je(u, d).startPeriod, h = Na, g = o - h;
              if (g < m) {
                var v = d % h;
                o >= m && o < m + v ? h = v : h += v, g = o - h;
              }
              e.handleYearNavigation(g, xt(e.props.preSelection, h));
              break;
            }
            case x.ArrowDown: {
              if (u === void 0 || d === void 0 || e.props.preSelection == null)
                break;
              var b = Je(u, d).endPeriod, h = Na, g = o + h;
              if (g > b) {
                var v = d % h;
                o <= b && o > b - v ? h = v : h += v, g = o + h;
              }
              e.handleYearNavigation(g, Qe(e.props.preSelection, h));
              break;
            }
          }
        p && p(r);
      }, e.getYearClassNames = function(r) {
        var o = e.props, s = o.date, i = o.minDate, c = o.maxDate, l = o.selected, u = o.excludeDates, d = o.includeDates, p = o.filterDate, m = o.yearClassName;
        return de("react-datepicker__year-text", "react-datepicker__year-".concat(r), s ? m == null ? void 0 : m(Te(s, r)) : void 0, {
          "react-datepicker__year-text--selected": l ? r === W(l) : void 0,
          "react-datepicker__year-text--disabled": (i || c || u || d || p) && hr(r, e.props),
          "react-datepicker__year-text--keyboard-selected": e.isKeyboardSelected(r),
          "react-datepicker__year-text--range-start": e.isRangeStart(r),
          "react-datepicker__year-text--range-end": e.isRangeEnd(r),
          "react-datepicker__year-text--in-range": e.isInRange(r),
          "react-datepicker__year-text--in-selecting-range": e.isInSelectingRange(r),
          "react-datepicker__year-text--selecting-range-start": e.isSelectingRangeStart(r),
          "react-datepicker__year-text--selecting-range-end": e.isSelectingRangeEnd(r),
          "react-datepicker__year-text--today": e.isCurrentYear(r)
        });
      }, e.getYearTabIndex = function(r) {
        if (e.props.disabledKeyboardNavigation || e.props.preSelection == null)
          return "-1";
        var o = W(e.props.preSelection), s = hr(r, e.props);
        return r === o && !s ? "0" : "-1";
      }, e.getYearContainerClassNames = function() {
        var r = e.props, o = r.selectingDate, s = r.selectsStart, i = r.selectsEnd, c = r.selectsRange;
        return de("react-datepicker__year", {
          "react-datepicker__year--selecting-range": o && (s || i || c)
        });
      }, e.getYearContent = function(r) {
        return e.props.renderYearContent ? e.props.renderYearContent(r) : r;
      }, e;
    }
    return a.prototype.render = function() {
      var t = this, e = [], r = this.props, o = r.date, s = r.yearItemNumber, i = r.onYearMouseEnter, c = r.onYearMouseLeave;
      if (o === void 0)
        return null;
      for (var l = Je(o, s), u = l.startPeriod, d = l.endPeriod, p = function(g) {
        e.push(_.createElement("div", { ref: m.YEAR_REFS[g - u], onClick: function(v) {
          t.onYearClick(v, g);
        }, onKeyDown: function(v) {
          vo(v) && (v.preventDefault(), v.key = x.Enter), t.onYearKeyDown(v, g);
        }, tabIndex: Number(m.getYearTabIndex(g)), className: m.getYearClassNames(g), onMouseEnter: m.props.usePointerEvent ? void 0 : function(v) {
          return i(v, g);
        }, onPointerEnter: m.props.usePointerEvent ? function(v) {
          return i(v, g);
        } : void 0, onMouseLeave: m.props.usePointerEvent ? void 0 : function(v) {
          return c(v, g);
        }, onPointerLeave: m.props.usePointerEvent ? function(v) {
          return c(v, g);
        } : void 0, key: g, "aria-current": m.isCurrentYear(g) ? "date" : void 0 }, m.getYearContent(g)));
      }, m = this, h = u; h <= d; h++)
        p(h);
      return _.createElement(
        "div",
        { className: this.getYearContainerClassNames() },
        _.createElement("div", { className: "react-datepicker__year-wrapper", onMouseLeave: this.props.usePointerEvent ? void 0 : this.props.clearSelectingDate, onPointerLeave: this.props.usePointerEvent ? this.props.clearSelectingDate : void 0 }, e)
      );
    }, a;
  }(pe)
);
function Bu(n, a, t, e) {
  for (var r = [], o = 0; o < 2 * a + 1; o++) {
    var s = n + a - o, i = !0;
    t && (i = W(t) <= s), e && i && (i = W(e) >= s), i && r.push(s);
  }
  return r;
}
var Qu = (
  /** @class */
  function(n) {
    fe(a, n);
    function a(t) {
      var e = n.call(this, t) || this;
      e.renderOptions = function() {
        var i = e.props.year, c = e.state.yearsList.map(function(d) {
          return _.createElement(
            "div",
            { className: i === d ? "react-datepicker__year-option react-datepicker__year-option--selected_year" : "react-datepicker__year-option", key: d, onClick: e.onChange.bind(e, d), "aria-selected": i === d ? "true" : void 0 },
            i === d ? _.createElement("span", { className: "react-datepicker__year-option--selected" }, "✓") : "",
            d
          );
        }), l = e.props.minDate ? W(e.props.minDate) : null, u = e.props.maxDate ? W(e.props.maxDate) : null;
        return (!u || !e.state.yearsList.find(function(d) {
          return d === u;
        })) && c.unshift(_.createElement(
          "div",
          { className: "react-datepicker__year-option", key: "upcoming", onClick: e.incrementYears },
          _.createElement("a", { className: "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming" })
        )), (!l || !e.state.yearsList.find(function(d) {
          return d === l;
        })) && c.push(_.createElement(
          "div",
          { className: "react-datepicker__year-option", key: "previous", onClick: e.decrementYears },
          _.createElement("a", { className: "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous" })
        )), c;
      }, e.onChange = function(i) {
        e.props.onChange(i);
      }, e.handleClickOutside = function() {
        e.props.onCancel();
      }, e.shiftYears = function(i) {
        var c = e.state.yearsList.map(function(l) {
          return l + i;
        });
        e.setState({
          yearsList: c
        });
      }, e.incrementYears = function() {
        return e.shiftYears(1);
      }, e.decrementYears = function() {
        return e.shiftYears(-1);
      };
      var r = t.yearDropdownItemNumber, o = t.scrollableYearDropdown, s = r || (o ? 10 : 5);
      return e.state = {
        yearsList: Bu(e.props.year, s, e.props.minDate, e.props.maxDate)
      }, e.dropdownRef = et(), e;
    }
    return a.prototype.componentDidMount = function() {
      var t = this.dropdownRef.current;
      if (t) {
        var e = t.children ? Array.from(t.children) : null, r = e ? e.find(function(o) {
          return o.ariaSelected;
        }) : null;
        t.scrollTop = r && r instanceof HTMLElement ? r.offsetTop + (r.clientHeight - t.clientHeight) / 2 : (t.scrollHeight - t.clientHeight) / 2;
      }
    }, a.prototype.render = function() {
      var t = de({
        "react-datepicker__year-dropdown": !0,
        "react-datepicker__year-dropdown--scrollable": this.props.scrollableYearDropdown
      });
      return _.createElement(jr, { className: t, containerRef: this.dropdownRef, onClickOutside: this.handleClickOutside }, this.renderOptions());
    }, a;
  }(pe)
), qu = (
  /** @class */
  function(n) {
    fe(a, n);
    function a() {
      var t = n !== null && n.apply(this, arguments) || this;
      return t.state = {
        dropdownVisible: !1
      }, t.renderSelectOptions = function() {
        for (var e = t.props.minDate ? W(t.props.minDate) : 1900, r = t.props.maxDate ? W(t.props.maxDate) : 2100, o = [], s = e; s <= r; s++)
          o.push(_.createElement("option", { key: s, value: s }, s));
        return o;
      }, t.onSelectChange = function(e) {
        t.onChange(parseInt(e.target.value));
      }, t.renderSelectMode = function() {
        return _.createElement("select", { value: t.props.year, className: "react-datepicker__year-select", onChange: t.onSelectChange }, t.renderSelectOptions());
      }, t.renderReadView = function(e) {
        return _.createElement(
          "div",
          { key: "read", style: { visibility: e ? "visible" : "hidden" }, className: "react-datepicker__year-read-view", onClick: function(r) {
            return t.toggleDropdown(r);
          } },
          _.createElement("span", { className: "react-datepicker__year-read-view--down-arrow" }),
          _.createElement("span", { className: "react-datepicker__year-read-view--selected-year" }, t.props.year)
        );
      }, t.renderDropdown = function() {
        return _.createElement(Qu, K({ key: "dropdown" }, t.props, { onChange: t.onChange, onCancel: t.toggleDropdown }));
      }, t.renderScrollMode = function() {
        var e = t.state.dropdownVisible, r = [t.renderReadView(!e)];
        return e && r.unshift(t.renderDropdown()), r;
      }, t.onChange = function(e) {
        t.toggleDropdown(), e !== t.props.year && t.props.onChange(e);
      }, t.toggleDropdown = function(e) {
        t.setState({
          dropdownVisible: !t.state.dropdownVisible
        }, function() {
          t.props.adjustDateOnChange && t.handleYearChange(t.props.date, e);
        });
      }, t.handleYearChange = function(e, r) {
        var o;
        (o = t.onSelect) === null || o === void 0 || o.call(t, e, r), t.setOpen();
      }, t.onSelect = function(e, r) {
        var o, s;
        (s = (o = t.props).onSelect) === null || s === void 0 || s.call(o, e, r);
      }, t.setOpen = function() {
        var e, r;
        (r = (e = t.props).setOpen) === null || r === void 0 || r.call(e, !0);
      }, t;
    }
    return a.prototype.render = function() {
      var t;
      switch (this.props.dropdownMode) {
        case "scroll":
          t = this.renderScrollMode();
          break;
        case "select":
          t = this.renderSelectMode();
          break;
      }
      return _.createElement("div", { className: "react-datepicker__year-dropdown-container react-datepicker__year-dropdown-container--".concat(this.props.dropdownMode) }, t);
    }, a;
  }(pe)
), Vu = [
  "react-datepicker__year-select",
  "react-datepicker__month-select",
  "react-datepicker__month-year-select"
], Ku = function(n) {
  var a = (n.className || "").split(/\s+/);
  return Vu.some(function(t) {
    return a.indexOf(t) >= 0;
  });
}, Uu = (
  /** @class */
  function(n) {
    fe(a, n);
    function a(t) {
      var e = n.call(this, t) || this;
      return e.monthContainer = void 0, e.handleClickOutside = function(r) {
        e.props.onClickOutside(r);
      }, e.setClickOutsideRef = function() {
        return e.containerRef.current;
      }, e.handleDropdownFocus = function(r) {
        var o, s;
        Ku(r.target) && ((s = (o = e.props).onDropdownFocus) === null || s === void 0 || s.call(o, r));
      }, e.getDateInView = function() {
        var r = e.props, o = r.preSelection, s = r.selected, i = r.openToDate, c = _o(e.props), l = go(e.props), u = ee(), d = i || s || o;
        return d || (c && pt(u, c) ? c : l && tt(u, l) ? l : u);
      }, e.increaseMonth = function() {
        e.setState(function(r) {
          var o = r.date;
          return {
            date: Oe(o, 1)
          };
        }, function() {
          return e.handleMonthChange(e.state.date);
        });
      }, e.decreaseMonth = function() {
        e.setState(function(r) {
          var o = r.date;
          return {
            date: kt(o, 1)
          };
        }, function() {
          return e.handleMonthChange(e.state.date);
        });
      }, e.handleDayClick = function(r, o, s) {
        e.props.onSelect(r, o, s), e.props.setPreSelection && e.props.setPreSelection(r);
      }, e.handleDayMouseEnter = function(r) {
        e.setState({ selectingDate: r }), e.props.onDayMouseEnter && e.props.onDayMouseEnter(r);
      }, e.handleMonthMouseLeave = function() {
        e.setState({ selectingDate: void 0 }), e.props.onMonthMouseLeave && e.props.onMonthMouseLeave();
      }, e.handleYearMouseEnter = function(r, o) {
        e.setState({ selectingDate: Te(ee(), o) }), e.props.onYearMouseEnter && e.props.onYearMouseEnter(r, o);
      }, e.handleYearMouseLeave = function(r, o) {
        e.props.onYearMouseLeave && e.props.onYearMouseLeave(r, o);
      }, e.handleYearChange = function(r) {
        var o, s, i, c;
        (s = (o = e.props).onYearChange) === null || s === void 0 || s.call(o, r), e.setState({ isRenderAriaLiveMessage: !0 }), e.props.adjustDateOnChange && (e.props.onSelect(r), (c = (i = e.props).setOpen) === null || c === void 0 || c.call(i, !0)), e.props.setPreSelection && e.props.setPreSelection(r);
      }, e.getEnabledPreSelectionDateForMonth = function(r) {
        if (!Se(r, e.props))
          return r;
        for (var o = Ke(r), s = _u(r), i = qs(s, o), c = null, l = 0; l <= i; l++) {
          var u = Ue(o, l);
          if (!Se(u, e.props)) {
            c = u;
            break;
          }
        }
        return c;
      }, e.handleMonthChange = function(r) {
        var o, s, i, c = (o = e.getEnabledPreSelectionDateForMonth(r)) !== null && o !== void 0 ? o : r;
        e.handleCustomMonthChange(c), e.props.adjustDateOnChange && (e.props.onSelect(c), (i = (s = e.props).setOpen) === null || i === void 0 || i.call(s, !0)), e.props.setPreSelection && e.props.setPreSelection(c);
      }, e.handleCustomMonthChange = function(r) {
        var o, s;
        (s = (o = e.props).onMonthChange) === null || s === void 0 || s.call(o, r), e.setState({ isRenderAriaLiveMessage: !0 });
      }, e.handleMonthYearChange = function(r) {
        e.handleYearChange(r), e.handleMonthChange(r);
      }, e.changeYear = function(r) {
        e.setState(function(o) {
          var s = o.date;
          return {
            date: Te(s, Number(r))
          };
        }, function() {
          return e.handleYearChange(e.state.date);
        });
      }, e.changeMonth = function(r) {
        e.setState(function(o) {
          var s = o.date;
          return {
            date: ke(s, Number(r))
          };
        }, function() {
          return e.handleMonthChange(e.state.date);
        });
      }, e.changeMonthYear = function(r) {
        e.setState(function(o) {
          var s = o.date;
          return {
            date: Te(ke(s, ve(r)), W(r))
          };
        }, function() {
          return e.handleMonthYearChange(e.state.date);
        });
      }, e.header = function(r) {
        r === void 0 && (r = e.state.date);
        var o = Ze(r, e.props.locale, e.props.calendarStartDay), s = [];
        return e.props.showWeekNumbers && s.push(_.createElement("div", { key: "W", className: "react-datepicker__day-name" }, e.props.weekLabel || "#")), s.concat([0, 1, 2, 3, 4, 5, 6].map(function(i) {
          var c = Ue(o, i), l = e.formatWeekday(c, e.props.locale), u = e.props.weekDayClassName ? e.props.weekDayClassName(c) : void 0;
          return _.createElement("div", { key: i, "aria-label": re(c, "EEEE", e.props.locale), className: de("react-datepicker__day-name", u) }, l);
        }));
      }, e.formatWeekday = function(r, o) {
        return e.props.formatWeekDay ? gu(r, e.props.formatWeekDay, o) : e.props.useWeekdaysShort ? bu(r, o) : vu(r, o);
      }, e.decreaseYear = function() {
        e.setState(function(r) {
          var o, s = r.date;
          return {
            date: xt(s, e.props.showYearPicker ? (o = e.props.yearItemNumber) !== null && o !== void 0 ? o : a.defaultProps.yearItemNumber : 1)
          };
        }, function() {
          return e.handleYearChange(e.state.date);
        });
      }, e.clearSelectingDate = function() {
        e.setState({ selectingDate: void 0 });
      }, e.renderPreviousButton = function() {
        var r;
        if (!e.props.renderCustomHeader) {
          var o;
          switch (!0) {
            case e.props.showMonthYearPicker:
              o = xa(e.state.date, e.props);
              break;
            case e.props.showYearPicker:
              o = xu(e.state.date, e.props);
              break;
            case e.props.showQuarterYearPicker:
              o = Du(e.state.date, e.props);
              break;
            default:
              o = Da(e.state.date, e.props);
              break;
          }
          if (!(!((r = e.props.forceShowMonthNavigation) !== null && r !== void 0 ? r : a.defaultProps.forceShowMonthNavigation) && !e.props.showDisabledMonthNavigation && o || e.props.showTimeSelectOnly)) {
            var s = [
              "react-datepicker__navigation-icon",
              "react-datepicker__navigation-icon--previous"
            ], i = [
              "react-datepicker__navigation",
              "react-datepicker__navigation--previous"
            ], c = e.decreaseMonth;
            (e.props.showMonthYearPicker || e.props.showQuarterYearPicker || e.props.showYearPicker) && (c = e.decreaseYear), o && e.props.showDisabledMonthNavigation && (i.push("react-datepicker__navigation--previous--disabled"), c = void 0);
            var l = e.props.showMonthYearPicker || e.props.showQuarterYearPicker || e.props.showYearPicker, u = e.props, d = u.previousMonthButtonLabel, p = d === void 0 ? a.defaultProps.previousMonthButtonLabel : d, m = u.previousYearButtonLabel, h = m === void 0 ? a.defaultProps.previousYearButtonLabel : m, g = e.props, v = g.previousMonthAriaLabel, b = v === void 0 ? typeof p == "string" ? p : "Previous Month" : v, D = g.previousYearAriaLabel, k = D === void 0 ? typeof h == "string" ? h : "Previous Year" : D;
            return _.createElement(
              "button",
              { type: "button", className: i.join(" "), onClick: c, onKeyDown: e.props.handleOnKeyDown, "aria-label": l ? k : b },
              _.createElement("span", { className: s.join(" ") }, l ? h : p)
            );
          }
        }
      }, e.increaseYear = function() {
        e.setState(function(r) {
          var o, s = r.date;
          return {
            date: Qe(s, e.props.showYearPicker ? (o = e.props.yearItemNumber) !== null && o !== void 0 ? o : a.defaultProps.yearItemNumber : 1)
          };
        }, function() {
          return e.handleYearChange(e.state.date);
        });
      }, e.renderNextButton = function() {
        var r;
        if (!e.props.renderCustomHeader) {
          var o;
          switch (!0) {
            case e.props.showMonthYearPicker:
              o = Ca(e.state.date, e.props);
              break;
            case e.props.showYearPicker:
              o = Cu(e.state.date, e.props);
              break;
            case e.props.showQuarterYearPicker:
              o = ku(e.state.date, e.props);
              break;
            default:
              o = ka(e.state.date, e.props);
              break;
          }
          if (!(!((r = e.props.forceShowMonthNavigation) !== null && r !== void 0 ? r : a.defaultProps.forceShowMonthNavigation) && !e.props.showDisabledMonthNavigation && o || e.props.showTimeSelectOnly)) {
            var s = [
              "react-datepicker__navigation",
              "react-datepicker__navigation--next"
            ], i = [
              "react-datepicker__navigation-icon",
              "react-datepicker__navigation-icon--next"
            ];
            e.props.showTimeSelect && s.push("react-datepicker__navigation--next--with-time"), e.props.todayButton && s.push("react-datepicker__navigation--next--with-today-button");
            var c = e.increaseMonth;
            (e.props.showMonthYearPicker || e.props.showQuarterYearPicker || e.props.showYearPicker) && (c = e.increaseYear), o && e.props.showDisabledMonthNavigation && (s.push("react-datepicker__navigation--next--disabled"), c = void 0);
            var l = e.props.showMonthYearPicker || e.props.showQuarterYearPicker || e.props.showYearPicker, u = e.props, d = u.nextMonthButtonLabel, p = d === void 0 ? a.defaultProps.nextMonthButtonLabel : d, m = u.nextYearButtonLabel, h = m === void 0 ? a.defaultProps.nextYearButtonLabel : m, g = e.props, v = g.nextMonthAriaLabel, b = v === void 0 ? typeof p == "string" ? p : "Next Month" : v, D = g.nextYearAriaLabel, k = D === void 0 ? typeof h == "string" ? h : "Next Year" : D;
            return _.createElement(
              "button",
              { type: "button", className: s.join(" "), onClick: c, onKeyDown: e.props.handleOnKeyDown, "aria-label": l ? k : b },
              _.createElement("span", { className: i.join(" ") }, l ? h : p)
            );
          }
        }
      }, e.renderCurrentMonth = function(r) {
        r === void 0 && (r = e.state.date);
        var o = ["react-datepicker__current-month"];
        return e.props.showYearDropdown && o.push("react-datepicker__current-month--hasYearDropdown"), e.props.showMonthDropdown && o.push("react-datepicker__current-month--hasMonthDropdown"), e.props.showMonthYearDropdown && o.push("react-datepicker__current-month--hasMonthYearDropdown"), _.createElement("h2", { className: o.join(" ") }, re(r, e.props.dateFormat, e.props.locale));
      }, e.renderYearDropdown = function(r) {
        if (r === void 0 && (r = !1), !(!e.props.showYearDropdown || r))
          return _.createElement(qu, K({}, a.defaultProps, e.props, { date: e.state.date, onChange: e.changeYear, year: W(e.state.date) }));
      }, e.renderMonthDropdown = function(r) {
        if (r === void 0 && (r = !1), !(!e.props.showMonthDropdown || r))
          return _.createElement(Au, K({}, a.defaultProps, e.props, { month: ve(e.state.date), onChange: e.changeMonth }));
      }, e.renderMonthYearDropdown = function(r) {
        if (r === void 0 && (r = !1), !(!e.props.showMonthYearDropdown || r))
          return _.createElement($u, K({}, a.defaultProps, e.props, { date: e.state.date, onChange: e.changeMonthYear }));
      }, e.handleTodayButtonClick = function(r) {
        e.props.onSelect(ga(), r), e.props.setPreSelection && e.props.setPreSelection(ga());
      }, e.renderTodayButton = function() {
        if (!(!e.props.todayButton || e.props.showTimeSelectOnly))
          return _.createElement("div", { className: "react-datepicker__today-button", onClick: e.handleTodayButtonClick }, e.props.todayButton);
      }, e.renderDefaultHeader = function(r) {
        var o = r.monthDate, s = r.i;
        return _.createElement(
          "div",
          { className: "react-datepicker__header ".concat(e.props.showTimeSelect ? "react-datepicker__header--has-time-select" : "") },
          e.renderCurrentMonth(o),
          _.createElement(
            "div",
            { className: "react-datepicker__header__dropdown react-datepicker__header__dropdown--".concat(e.props.dropdownMode), onFocus: e.handleDropdownFocus },
            e.renderMonthDropdown(s !== 0),
            e.renderMonthYearDropdown(s !== 0),
            e.renderYearDropdown(s !== 0)
          ),
          _.createElement("div", { className: "react-datepicker__day-names" }, e.header(o))
        );
      }, e.renderCustomHeader = function(r) {
        var o, s, i = r.monthDate, c = r.i;
        if (e.props.showTimeSelect && !e.state.monthContainer || e.props.showTimeSelectOnly)
          return null;
        var l = Da(e.state.date, e.props), u = ka(e.state.date, e.props), d = xa(e.state.date, e.props), p = Ca(e.state.date, e.props), m = !e.props.showMonthYearPicker && !e.props.showQuarterYearPicker && !e.props.showYearPicker;
        return _.createElement(
          "div",
          { className: "react-datepicker__header react-datepicker__header--custom", onFocus: e.props.onDropdownFocus },
          (s = (o = e.props).renderCustomHeader) === null || s === void 0 ? void 0 : s.call(o, K(K({}, e.state), { customHeaderCount: c, monthDate: i, changeMonth: e.changeMonth, changeYear: e.changeYear, decreaseMonth: e.decreaseMonth, increaseMonth: e.increaseMonth, decreaseYear: e.decreaseYear, increaseYear: e.increaseYear, prevMonthButtonDisabled: l, nextMonthButtonDisabled: u, prevYearButtonDisabled: d, nextYearButtonDisabled: p })),
          m && _.createElement("div", { className: "react-datepicker__day-names" }, e.header(i))
        );
      }, e.renderYearHeader = function(r) {
        var o = r.monthDate, s = e.props, i = s.showYearPicker, c = s.yearItemNumber, l = c === void 0 ? a.defaultProps.yearItemNumber : c, u = Je(o, l), d = u.startPeriod, p = u.endPeriod;
        return _.createElement("div", { className: "react-datepicker__header react-datepicker-year-header" }, i ? "".concat(d, " - ").concat(p) : W(o));
      }, e.renderHeader = function(r) {
        var o = r.monthDate, s = r.i, i = s === void 0 ? 0 : s, c = { monthDate: o, i };
        switch (!0) {
          case e.props.renderCustomHeader !== void 0:
            return e.renderCustomHeader(c);
          case (e.props.showMonthYearPicker || e.props.showQuarterYearPicker || e.props.showYearPicker):
            return e.renderYearHeader(c);
          default:
            return e.renderDefaultHeader(c);
        }
      }, e.renderMonths = function() {
        var r, o;
        if (!(e.props.showTimeSelectOnly || e.props.showYearPicker)) {
          for (var s = [], i = (r = e.props.monthsShown) !== null && r !== void 0 ? r : a.defaultProps.monthsShown, c = e.props.showPreviousMonths ? i - 1 : 0, l = e.props.showMonthYearPicker || e.props.showQuarterYearPicker ? Qe(e.state.date, c) : kt(e.state.date, c), u = (o = e.props.monthSelectedIn) !== null && o !== void 0 ? o : c, d = 0; d < i; ++d) {
            var p = d - u + c, m = e.props.showMonthYearPicker || e.props.showQuarterYearPicker ? Qe(l, p) : Oe(l, p), h = "month-".concat(d), g = d < i - 1, v = d > 0;
            s.push(_.createElement(
              "div",
              { key: h, ref: function(b) {
                e.monthContainer = b ?? void 0;
              }, className: "react-datepicker__month-container" },
              e.renderHeader({ monthDate: m, i: d }),
              _.createElement(Fu, K({}, a.defaultProps, e.props, { ariaLabelPrefix: e.props.monthAriaLabelPrefix, day: m, onDayClick: e.handleDayClick, handleOnKeyDown: e.props.handleOnDayKeyDown, handleOnMonthKeyDown: e.props.handleOnKeyDown, onDayMouseEnter: e.handleDayMouseEnter, onMouseLeave: e.handleMonthMouseLeave, orderInDisplay: d, selectingDate: e.state.selectingDate, monthShowsDuplicateDaysEnd: g, monthShowsDuplicateDaysStart: v }))
            ));
          }
          return s;
        }
      }, e.renderYears = function() {
        if (!e.props.showTimeSelectOnly && e.props.showYearPicker)
          return _.createElement(
            "div",
            { className: "react-datepicker__year--container" },
            e.renderHeader({ monthDate: e.state.date }),
            _.createElement(Hu, K({}, a.defaultProps, e.props, { selectingDate: e.state.selectingDate, date: e.state.date, onDayClick: e.handleDayClick, clearSelectingDate: e.clearSelectingDate, onYearMouseEnter: e.handleYearMouseEnter, onYearMouseLeave: e.handleYearMouseLeave }))
          );
      }, e.renderTimeSection = function() {
        if (e.props.showTimeSelect && (e.state.monthContainer || e.props.showTimeSelectOnly))
          return _.createElement(zu, K({}, a.defaultProps, e.props, { onChange: e.props.onTimeChange, format: e.props.timeFormat, intervals: e.props.timeIntervals, monthRef: e.state.monthContainer }));
      }, e.renderInputTimeSection = function() {
        var r = e.props.selected ? new Date(e.props.selected) : void 0, o = r && Be(r) && !!e.props.selected, s = o ? "".concat(Ea(r.getHours()), ":").concat(Ea(r.getMinutes())) : "";
        if (e.props.showTimeInput)
          return _.createElement(Tu, K({}, a.defaultProps, e.props, { date: r, timeString: s, onChange: e.props.onTimeChange }));
      }, e.renderAriaLiveRegion = function() {
        var r, o = Je(e.state.date, (r = e.props.yearItemNumber) !== null && r !== void 0 ? r : a.defaultProps.yearItemNumber), s = o.startPeriod, i = o.endPeriod, c;
        return e.props.showYearPicker ? c = "".concat(s, " - ").concat(i) : e.props.showMonthYearPicker || e.props.showQuarterYearPicker ? c = W(e.state.date) : c = "".concat(On(ve(e.state.date), e.props.locale), " ").concat(W(e.state.date)), _.createElement("span", { role: "alert", "aria-live": "polite", className: "react-datepicker__aria-live" }, e.state.isRenderAriaLiveMessage && c);
      }, e.renderChildren = function() {
        if (e.props.children)
          return _.createElement("div", { className: "react-datepicker__children-container" }, e.props.children);
      }, e.containerRef = et(), e.state = {
        date: e.getDateInView(),
        selectingDate: void 0,
        monthContainer: void 0,
        isRenderAriaLiveMessage: !1
      }, e;
    }
    return Object.defineProperty(a, "defaultProps", {
      get: function() {
        return {
          monthsShown: 1,
          forceShowMonthNavigation: !1,
          timeCaption: "Time",
          previousYearButtonLabel: "Previous Year",
          nextYearButtonLabel: "Next Year",
          previousMonthButtonLabel: "Previous Month",
          nextMonthButtonLabel: "Next Month",
          yearItemNumber: Ut
        };
      },
      enumerable: !1,
      configurable: !0
    }), a.prototype.componentDidMount = function() {
      var t = this;
      this.props.showTimeSelect && (this.assignMonthContainer = function() {
        t.setState({ monthContainer: t.monthContainer });
      }());
    }, a.prototype.componentDidUpdate = function(t) {
      var e = this;
      if (this.props.preSelection && (!V(this.props.preSelection, t.preSelection) || this.props.monthSelectedIn !== t.monthSelectedIn)) {
        var r = !ge(this.state.date, this.props.preSelection);
        this.setState({
          date: this.props.preSelection
        }, function() {
          return r && e.handleCustomMonthChange(e.state.date);
        });
      } else this.props.openToDate && !V(this.props.openToDate, t.openToDate) && this.setState({
        date: this.props.openToDate
      });
    }, a.prototype.render = function() {
      var t = this.props.container || cu;
      return _.createElement(
        jr,
        { onClickOutside: this.handleClickOutside, style: { display: "contents" }, containerRef: this.containerRef, ignoreClass: this.props.outsideClickIgnoreClass },
        _.createElement(
          t,
          { className: de("react-datepicker", this.props.className, {
            "react-datepicker--time-only": this.props.showTimeSelectOnly
          }), showTime: this.props.showTimeSelect || this.props.showTimeInput, showTimeSelectOnly: this.props.showTimeSelectOnly },
          this.renderAriaLiveRegion(),
          this.renderPreviousButton(),
          this.renderNextButton(),
          this.renderMonths(),
          this.renderYears(),
          this.renderTodayButton(),
          this.renderTimeSection(),
          this.renderInputTimeSection(),
          this.renderChildren()
        )
      );
    }, a;
  }(pe)
), Xu = function(n) {
  var a = n.icon, t = n.className, e = t === void 0 ? "" : t, r = n.onClick, o = "react-datepicker__calendar-icon";
  return typeof a == "string" ? _.createElement("i", { className: "".concat(o, " ").concat(a, " ").concat(e), "aria-hidden": "true", onClick: r }) : _.isValidElement(a) ? _.cloneElement(a, {
    className: "".concat(a.props.className || "", " ").concat(o, " ").concat(e),
    onClick: function(s) {
      typeof a.props.onClick == "function" && a.props.onClick(s), typeof r == "function" && r(s);
    }
  }) : _.createElement(
    "svg",
    { className: "".concat(o, " ").concat(e), xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", onClick: r },
    _.createElement("path", { d: "M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z" })
  );
}, bo = (
  /** @class */
  function(n) {
    fe(a, n);
    function a(t) {
      var e = n.call(this, t) || this;
      return e.portalRoot = null, e.el = document.createElement("div"), e;
    }
    return a.prototype.componentDidMount = function() {
      this.portalRoot = (this.props.portalHost || document).getElementById(this.props.portalId), this.portalRoot || (this.portalRoot = document.createElement("div"), this.portalRoot.setAttribute("id", this.props.portalId), (this.props.portalHost || document.body).appendChild(this.portalRoot)), this.portalRoot.appendChild(this.el);
    }, a.prototype.componentWillUnmount = function() {
      this.portalRoot && this.portalRoot.removeChild(this.el);
    }, a.prototype.render = function() {
      return Zo.createPortal(this.props.children, this.el);
    }, a;
  }(pe)
), Gu = "[tabindex], a, button, input, select, textarea", Ju = function(n) {
  return (n instanceof HTMLAnchorElement || !n.disabled) && n.tabIndex !== -1;
}, wo = (
  /** @class */
  function(n) {
    fe(a, n);
    function a(t) {
      var e = n.call(this, t) || this;
      return e.getTabChildren = function() {
        var r;
        return Array.prototype.slice.call((r = e.tabLoopRef.current) === null || r === void 0 ? void 0 : r.querySelectorAll(Gu), 1, -1).filter(Ju);
      }, e.handleFocusStart = function() {
        var r = e.getTabChildren();
        r && r.length > 1 && r[r.length - 1].focus();
      }, e.handleFocusEnd = function() {
        var r = e.getTabChildren();
        r && r.length > 1 && r[0].focus();
      }, e.tabLoopRef = et(), e;
    }
    return a.prototype.render = function() {
      var t;
      return ((t = this.props.enableTabLoop) !== null && t !== void 0 ? t : a.defaultProps.enableTabLoop) ? _.createElement(
        "div",
        { className: "react-datepicker__tab-loop", ref: this.tabLoopRef },
        _.createElement("div", { className: "react-datepicker__tab-loop__start", tabIndex: 0, onFocus: this.handleFocusStart }),
        this.props.children,
        _.createElement("div", { className: "react-datepicker__tab-loop__end", tabIndex: 0, onFocus: this.handleFocusEnd })
      ) : this.props.children;
    }, a.defaultProps = {
      enableTabLoop: !0
    }, a;
  }(pe)
);
function Zu(n) {
  var a = function(t) {
    var e, r = typeof t.hidePopper == "boolean" ? t.hidePopper : !0, o = on(null), s = iu(K({ open: !r, whileElementsMounted: Ll, placement: t.popperPlacement, middleware: Ie([
      Bl({ padding: 15 }),
      Hl(10),
      Ql({ element: o })
    ], (e = t.popperModifiers) !== null && e !== void 0 ? e : [], !0) }, t.popperProps)), i = K(K({}, t), { hidePopper: r, popperProps: K(K({}, s), { arrowRef: o }) });
    return _.createElement(n, K({}, i));
  };
  return a;
}
var ed = (
  /** @class */
  function(n) {
    fe(a, n);
    function a() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return Object.defineProperty(a, "defaultProps", {
      get: function() {
        return {
          hidePopper: !0
        };
      },
      enumerable: !1,
      configurable: !0
    }), a.prototype.render = function() {
      var t = this.props, e = t.className, r = t.wrapperClassName, o = t.hidePopper, s = o === void 0 ? a.defaultProps.hidePopper : o, i = t.popperComponent, c = t.targetComponent, l = t.enableTabLoop, u = t.popperOnKeyDown, d = t.portalId, p = t.portalHost, m = t.popperProps, h = t.showArrow, g = void 0;
      if (!s) {
        var v = de("react-datepicker-popper", e);
        g = _.createElement(
          wo,
          { enableTabLoop: l },
          _.createElement(
            "div",
            { ref: m.refs.setFloating, style: m.floatingStyles, className: v, "data-placement": m.placement, onKeyDown: u },
            i,
            h && _.createElement(eu, { ref: m.arrowRef, context: m.context, fill: "currentColor", strokeWidth: 1, height: 8, width: 16, style: { transform: "translateY(-1px)" }, className: "react-datepicker__triangle" })
          )
        );
      }
      this.props.popperContainer && (g = Xo(this.props.popperContainer, {}, g)), d && !s && (g = _.createElement(bo, { portalId: d, portalHost: p }, g));
      var b = de("react-datepicker-wrapper", r);
      return _.createElement(
        _.Fragment,
        null,
        _.createElement("div", { ref: m.refs.setReference, className: b }, c),
        g
      );
    }, a;
  }(pe)
), td = Zu(ed), Ra = "react-datepicker-ignore-onclickoutside";
function rd(n, a) {
  return n && a ? ve(n) !== ve(a) || W(n) !== W(a) : n !== a;
}
var nn = "Date input not valid.", nd = (
  /** @class */
  function(n) {
    fe(a, n);
    function a(t) {
      var e = n.call(this, t) || this;
      return e.calendar = null, e.input = null, e.getPreSelection = function() {
        return e.props.openToDate ? e.props.openToDate : e.props.selectsEnd && e.props.startDate ? e.props.startDate : e.props.selectsStart && e.props.endDate ? e.props.endDate : ee();
      }, e.modifyHolidays = function() {
        var r;
        return (r = e.props.holidays) === null || r === void 0 ? void 0 : r.reduce(function(o, s) {
          var i = new Date(s.date);
          return Be(i) ? Ie(Ie([], o, !0), [K(K({}, s), { date: i })], !1) : o;
        }, []);
      }, e.calcInitialState = function() {
        var r, o = e.getPreSelection(), s = _o(e.props), i = go(e.props), c = s && pt(o, mr(s)) ? s : i && tt(o, va(i)) ? i : o;
        return {
          open: e.props.startOpen || !1,
          preventFocus: !1,
          inputValue: null,
          preSelection: (r = e.props.selectsRange ? e.props.startDate : e.props.selected) !== null && r !== void 0 ? r : c,
          // transforming highlighted days (perhaps nested array)
          // to flat Map for faster access in day.jsx
          highlightDates: Ma(e.props.highlightDates),
          focused: !1,
          // used to focus day in inline version after month has changed, but not on
          // initial render
          shouldFocusDayInline: !1,
          isRenderAriaLiveMessage: !1,
          wasHidden: !1
        };
      }, e.resetHiddenStatus = function() {
        e.setState(K(K({}, e.state), { wasHidden: !1 }));
      }, e.setHiddenStatus = function() {
        e.setState(K(K({}, e.state), { wasHidden: !0 }));
      }, e.setHiddenStateOnVisibilityHidden = function() {
        document.visibilityState === "hidden" && e.setHiddenStatus();
      }, e.clearPreventFocusTimeout = function() {
        e.preventFocusTimeout && clearTimeout(e.preventFocusTimeout);
      }, e.setFocus = function() {
        e.input && e.input.focus && e.input.focus({ preventScroll: !0 });
      }, e.setBlur = function() {
        e.input && e.input.blur && e.input.blur(), e.cancelFocusInput();
      }, e.setOpen = function(r, o) {
        o === void 0 && (o = !1), e.setState({
          open: r,
          preSelection: r && e.state.open ? e.state.preSelection : e.calcInitialState().preSelection,
          lastPreSelectChange: an
        }, function() {
          r || e.setState(function(s) {
            return {
              focused: o ? s.focused : !1
            };
          }, function() {
            !o && e.setBlur(), e.setState({ inputValue: null });
          });
        });
      }, e.inputOk = function() {
        return qe(e.state.preSelection);
      }, e.isCalendarOpen = function() {
        return e.props.open === void 0 ? e.state.open && !e.props.disabled && !e.props.readOnly : e.props.open;
      }, e.handleFocus = function(r) {
        var o, s, i = e.state.wasHidden, c = i ? e.state.open : !0;
        i && e.resetHiddenStatus(), !e.state.preventFocus && c && ((s = (o = e.props).onFocus) === null || s === void 0 || s.call(o, r), !e.props.preventOpenOnFocus && !e.props.readOnly && e.setOpen(!0)), e.setState({ focused: !0 });
      }, e.sendFocusBackToInput = function() {
        e.preventFocusTimeout && e.clearPreventFocusTimeout(), e.setState({ preventFocus: !0 }, function() {
          e.preventFocusTimeout = setTimeout(function() {
            e.setFocus(), e.setState({ preventFocus: !1 });
          });
        });
      }, e.cancelFocusInput = function() {
        clearTimeout(e.inputFocusTimeout), e.inputFocusTimeout = void 0;
      }, e.deferFocusInput = function() {
        e.cancelFocusInput(), e.inputFocusTimeout = setTimeout(function() {
          return e.setFocus();
        }, 1);
      }, e.handleDropdownFocus = function() {
        e.cancelFocusInput();
      }, e.handleBlur = function(r) {
        var o, s;
        (!e.state.open || e.props.withPortal || e.props.showTimeInput) && ((s = (o = e.props).onBlur) === null || s === void 0 || s.call(o, r)), e.setState({ focused: !1 });
      }, e.handleCalendarClickOutside = function(r) {
        var o, s;
        e.props.inline || e.setOpen(!1), (s = (o = e.props).onClickOutside) === null || s === void 0 || s.call(o, r), e.props.withPortal && r.preventDefault();
      }, e.handleChange = function() {
        for (var r, o, s = [], i = 0; i < arguments.length; i++)
          s[i] = arguments[i];
        var c = s[0];
        if (!(e.props.onChangeRaw && (e.props.onChangeRaw.apply(e, s), !c || typeof c.isDefaultPrevented != "function" || c.isDefaultPrevented()))) {
          e.setState({
            inputValue: (c == null ? void 0 : c.target) instanceof HTMLInputElement ? c.target.value : null,
            lastPreSelectChange: ad
          });
          var l = e.props, u = l.dateFormat, d = u === void 0 ? a.defaultProps.dateFormat : u, p = l.strictParsing, m = p === void 0 ? a.defaultProps.strictParsing : p, h = l.selectsRange, g = l.startDate, v = l.endDate, b = (c == null ? void 0 : c.target) instanceof HTMLInputElement ? c.target.value : "";
          if (h) {
            var D = b.split("-", 2).map(function(z) {
              return z.trim();
            }), k = D[0], T = D[1], N = en(k ?? "", d, e.props.locale, m), L = en(T ?? "", d, e.props.locale, m), M = (g == null ? void 0 : g.getTime()) !== (N == null ? void 0 : N.getTime()), P = (v == null ? void 0 : v.getTime()) !== (L == null ? void 0 : L.getTime());
            if (!M && !P || N && Se(N, e.props) || L && Se(L, e.props))
              return;
            (o = (r = e.props).onChange) === null || o === void 0 || o.call(r, [N, L], c);
          } else {
            var O = en(b, d, e.props.locale, m, e.props.minDate);
            e.props.showTimeSelectOnly && e.props.selected && O && !V(O, e.props.selected) && (O = al(e.props.selected, {
              hours: Fe(O),
              minutes: Le(O),
              seconds: Ve(O)
            })), (O || !b) && e.setSelected(O, c, !0);
          }
        }
      }, e.handleSelect = function(r, o, s) {
        if (e.props.shouldCloseOnSelect && !e.props.showTimeSelect && e.sendFocusBackToInput(), e.props.onChangeRaw && e.props.onChangeRaw(o), e.setSelected(r, o, !1, s), e.props.showDateSelect && e.setState({ isRenderAriaLiveMessage: !0 }), !e.props.shouldCloseOnSelect || e.props.showTimeSelect)
          e.setPreSelection(r);
        else if (!e.props.inline) {
          e.props.selectsRange || e.setOpen(!1);
          var i = e.props, c = i.startDate, l = i.endDate;
          c && !l && (e.props.swapRange || !Oa(r, c)) && e.setOpen(!1);
        }
      }, e.setSelected = function(r, o, s, i) {
        var c, l, u = r;
        if (e.props.showYearPicker) {
          if (u !== null && hr(W(u), e.props))
            return;
        } else if (e.props.showMonthYearPicker) {
          if (u !== null && ho(u, e.props))
            return;
        } else if (u !== null && Se(u, e.props))
          return;
        var d = e.props, p = d.onChange, m = d.selectsRange, h = d.startDate, g = d.endDate, v = d.selectsMultiple, b = d.selectedDates, D = d.minTime, k = d.swapRange;
        if (!st(e.props.selected, u) || e.props.allowSameDay || m || v)
          if (u !== null && (e.props.selected && (!s || !e.props.showTimeSelect && !e.props.showTimeSelectOnly && !e.props.showTimeInput) && (u = tn(u, {
            hour: Fe(e.props.selected),
            minute: Le(e.props.selected),
            second: Ve(e.props.selected)
          })), !s && (e.props.showTimeSelect || e.props.showTimeSelectOnly) && D && (u = tn(u, {
            hour: D.getHours(),
            minute: D.getMinutes(),
            second: D.getSeconds()
          })), e.props.inline || e.setState({
            preSelection: u
          }), e.props.focusSelectedMonth || e.setState({ monthSelectedIn: i })), m) {
            var T = !h && !g, N = h && !g, L = h && g;
            T ? p == null || p([u, null], o) : N && (u === null ? p == null || p([null, null], o) : Oa(u, h) ? k ? p == null || p([u, h], o) : p == null || p([u, null], o) : p == null || p([h, u], o)), L && (p == null || p([u, null], o));
          } else if (v) {
            if (u !== null)
              if (!(b != null && b.length))
                p == null || p([u], o);
              else {
                var M = b.some(function(O) {
                  return V(O, u);
                });
                if (M) {
                  var P = b.filter(function(O) {
                    return !V(O, u);
                  });
                  p == null || p(P, o);
                } else
                  p == null || p(Ie(Ie([], b, !0), [u], !1), o);
              }
          } else
            p == null || p(u, o);
        s || ((l = (c = e.props).onSelect) === null || l === void 0 || l.call(c, u, o), e.setState({ inputValue: null }));
      }, e.setPreSelection = function(r) {
        var o = qe(e.props.minDate), s = qe(e.props.maxDate), i = !0;
        if (r) {
          var c = mr(r);
          if (o && s)
            i = $t(r, e.props.minDate, e.props.maxDate);
          else if (o) {
            var l = mr(e.props.minDate);
            i = tt(r, l) || st(c, l);
          } else if (s) {
            var u = va(e.props.maxDate);
            i = pt(r, u) || st(c, u);
          }
        }
        i && e.setState({
          preSelection: r
        });
      }, e.toggleCalendar = function() {
        e.setOpen(!e.state.open);
      }, e.handleTimeChange = function(r) {
        var o, s;
        if (!(e.props.selectsRange || e.props.selectsMultiple)) {
          var i = e.props.selected ? e.props.selected : e.getPreSelection(), c = e.props.selected ? r : tn(i, {
            hour: Fe(r),
            minute: Le(r)
          });
          e.setState({
            preSelection: c
          }), (s = (o = e.props).onChange) === null || s === void 0 || s.call(o, c), e.props.shouldCloseOnSelect && !e.props.showTimeInput && (e.sendFocusBackToInput(), e.setOpen(!1)), e.props.showTimeInput && e.setOpen(!0), (e.props.showTimeSelectOnly || e.props.showTimeSelect) && e.setState({ isRenderAriaLiveMessage: !0 }), e.setState({ inputValue: null });
        }
      }, e.onInputClick = function() {
        var r, o;
        !e.props.disabled && !e.props.readOnly && e.setOpen(!0), (o = (r = e.props).onInputClick) === null || o === void 0 || o.call(r);
      }, e.onInputKeyDown = function(r) {
        var o, s, i, c, l, u;
        (s = (o = e.props).onKeyDown) === null || s === void 0 || s.call(o, r);
        var d = r.key;
        if (!e.state.open && !e.props.inline && !e.props.preventOpenOnFocus) {
          (d === x.ArrowDown || d === x.ArrowUp || d === x.Enter) && ((i = e.onInputClick) === null || i === void 0 || i.call(e));
          return;
        }
        if (e.state.open) {
          if (d === x.ArrowDown || d === x.ArrowUp) {
            r.preventDefault();
            var p = e.props.showTimeSelectOnly ? ".react-datepicker__time-list-item[tabindex='0']" : e.props.showWeekPicker && e.props.showWeekNumbers ? '.react-datepicker__week-number[tabindex="0"]' : e.props.showFullMonthYearPicker || e.props.showMonthYearPicker ? '.react-datepicker__month-text[tabindex="0"]' : '.react-datepicker__day[tabindex="0"]', m = ((c = e.calendar) === null || c === void 0 ? void 0 : c.containerRef.current) instanceof Element && e.calendar.containerRef.current.querySelector(p);
            m instanceof HTMLElement && m.focus({ preventScroll: !0 });
            return;
          }
          var h = ee(e.state.preSelection);
          d === x.Enter ? (r.preventDefault(), e.inputOk() && e.state.lastPreSelectChange === an ? (e.handleSelect(h, r), !e.props.shouldCloseOnSelect && e.setPreSelection(h)) : e.setOpen(!1)) : d === x.Escape ? (r.preventDefault(), e.sendFocusBackToInput(), e.setOpen(!1)) : d === x.Tab && e.setOpen(!1), e.inputOk() || (u = (l = e.props).onInputError) === null || u === void 0 || u.call(l, { code: 1, msg: nn });
        }
      }, e.onPortalKeyDown = function(r) {
        var o = r.key;
        o === x.Escape && (r.preventDefault(), e.setState({
          preventFocus: !0
        }, function() {
          e.setOpen(!1), setTimeout(function() {
            e.setFocus(), e.setState({ preventFocus: !1 });
          });
        }));
      }, e.onDayKeyDown = function(r) {
        var o, s, i, c, l, u, d = e.props, p = d.minDate, m = d.maxDate, h = d.disabledKeyboardNavigation, g = d.showWeekPicker, v = d.shouldCloseOnSelect, b = d.locale, D = d.calendarStartDay, k = d.adjustDateOnChange, T = d.inline;
        if ((s = (o = e.props).onKeyDown) === null || s === void 0 || s.call(o, r), !h) {
          var N = r.key, L = r.shiftKey, M = ee(e.state.preSelection), P = function(Q, R) {
            var A = R;
            switch (Q) {
              case x.ArrowRight:
                A = g ? br(R, 1) : Ue(R, 1);
                break;
              case x.ArrowLeft:
                A = g ? ia(R, 1) : $c(R, 1);
                break;
              case x.ArrowUp:
                A = ia(R, 1);
                break;
              case x.ArrowDown:
                A = br(R, 1);
                break;
              case x.PageUp:
                A = L ? xt(R, 1) : kt(R, 1);
                break;
              case x.PageDown:
                A = L ? Qe(R, 1) : Oe(R, 1);
                break;
              case x.Home:
                A = Ze(R, b, D);
                break;
              case x.End:
                A = hu(R);
                break;
            }
            return A;
          }, O = function(Q, R) {
            for (var A = 40, F = Q, ae = !1, be = 0, we = P(Q, R); !ae; ) {
              if (be >= A) {
                we = R;
                break;
              }
              p && we < p && (F = x.ArrowRight, we = Se(p, e.props) ? P(F, we) : p), m && we > m && (F = x.ArrowLeft, we = Se(m, e.props) ? P(F, we) : m), Se(we, e.props) ? ((F === x.PageUp || F === x.Home) && (F = x.ArrowRight), (F === x.PageDown || F === x.End) && (F = x.ArrowLeft), we = P(F, we)) : ae = !0, be++;
            }
            return we;
          };
          if (N === x.Enter) {
            r.preventDefault(), e.handleSelect(M, r), !v && e.setPreSelection(M);
            return;
          } else if (N === x.Escape) {
            r.preventDefault(), e.setOpen(!1), e.inputOk() || (c = (i = e.props).onInputError) === null || c === void 0 || c.call(i, { code: 1, msg: nn });
            return;
          }
          var z = null;
          switch (N) {
            case x.ArrowLeft:
            case x.ArrowRight:
            case x.ArrowUp:
            case x.ArrowDown:
            case x.PageUp:
            case x.PageDown:
            case x.Home:
            case x.End:
              z = O(N, M);
              break;
          }
          if (!z) {
            (u = (l = e.props).onInputError) === null || u === void 0 || u.call(l, { code: 1, msg: nn });
            return;
          }
          if (r.preventDefault(), e.setState({ lastPreSelectChange: an }), k && e.setSelected(z), e.setPreSelection(z), T) {
            var U = ve(M), H = ve(z), j = W(M), B = W(z);
            U !== H || j !== B ? e.setState({ shouldFocusDayInline: !0 }) : e.setState({ shouldFocusDayInline: !1 });
          }
        }
      }, e.onPopperKeyDown = function(r) {
        var o = r.key;
        o === x.Escape && (r.preventDefault(), e.sendFocusBackToInput());
      }, e.onClearClick = function(r) {
        r && r.preventDefault && r.preventDefault(), e.sendFocusBackToInput();
        var o = e.props, s = o.selectsRange, i = o.onChange;
        s ? i == null || i([null, null], r) : i == null || i(null, r), e.setState({ inputValue: null });
      }, e.clear = function() {
        e.onClearClick();
      }, e.onScroll = function(r) {
        typeof e.props.closeOnScroll == "boolean" && e.props.closeOnScroll ? (r.target === document || r.target === document.documentElement || r.target === document.body) && e.setOpen(!1) : typeof e.props.closeOnScroll == "function" && e.props.closeOnScroll(r) && e.setOpen(!1);
      }, e.renderCalendar = function() {
        var r, o;
        return !e.props.inline && !e.isCalendarOpen() ? null : _.createElement(Uu, K({ showMonthYearDropdown: void 0, ref: function(s) {
          e.calendar = s;
        } }, e.props, e.state, { setOpen: e.setOpen, dateFormat: (r = e.props.dateFormatCalendar) !== null && r !== void 0 ? r : a.defaultProps.dateFormatCalendar, onSelect: e.handleSelect, onClickOutside: e.handleCalendarClickOutside, holidays: Eu(e.modifyHolidays()), outsideClickIgnoreClass: Ra, onDropdownFocus: e.handleDropdownFocus, onTimeChange: e.handleTimeChange, className: e.props.calendarClassName, container: e.props.calendarContainer, handleOnKeyDown: e.props.onKeyDown, handleOnDayKeyDown: e.onDayKeyDown, setPreSelection: e.setPreSelection, dropdownMode: (o = e.props.dropdownMode) !== null && o !== void 0 ? o : a.defaultProps.dropdownMode }), e.props.children);
      }, e.renderAriaLiveRegion = function() {
        var r = e.props, o = r.dateFormat, s = o === void 0 ? a.defaultProps.dateFormat : o, i = r.locale, c = e.props.showTimeInput || e.props.showTimeSelect, l = c ? "PPPPp" : "PPPP", u;
        return e.props.selectsRange ? u = "Selected start date: ".concat(Ee(e.props.startDate, {
          dateFormat: l,
          locale: i
        }), ". ").concat(e.props.endDate ? "End date: " + Ee(e.props.endDate, {
          dateFormat: l,
          locale: i
        }) : "") : e.props.showTimeSelectOnly ? u = "Selected time: ".concat(Ee(e.props.selected, { dateFormat: s, locale: i })) : e.props.showYearPicker ? u = "Selected year: ".concat(Ee(e.props.selected, { dateFormat: "yyyy", locale: i })) : e.props.showMonthYearPicker ? u = "Selected month: ".concat(Ee(e.props.selected, { dateFormat: "MMMM yyyy", locale: i })) : e.props.showQuarterYearPicker ? u = "Selected quarter: ".concat(Ee(e.props.selected, {
          dateFormat: "yyyy, QQQ",
          locale: i
        })) : u = "Selected date: ".concat(Ee(e.props.selected, {
          dateFormat: l,
          locale: i
        })), _.createElement("span", { role: "alert", "aria-live": "polite", className: "react-datepicker__aria-live" }, u);
      }, e.renderDateInput = function() {
        var r, o, s, i = de(e.props.className, (r = {}, r[Ra] = e.state.open, r)), c = e.props.customInput || _.createElement("input", { type: "text" }), l = e.props.customInputRef || "ref", u = e.props, d = u.dateFormat, p = d === void 0 ? a.defaultProps.dateFormat : d, m = u.locale, h = typeof e.props.value == "string" ? e.props.value : typeof e.state.inputValue == "string" ? e.state.inputValue : e.props.selectsRange ? du(e.props.startDate, e.props.endDate, {
          dateFormat: p,
          locale: m
        }) : e.props.selectsMultiple ? pu((s = e.props.selectedDates) !== null && s !== void 0 ? s : [], {
          dateFormat: p,
          locale: m
        }) : Ee(e.props.selected, {
          dateFormat: p,
          locale: m
        });
        return _n(c, (o = {}, o[l] = function(g) {
          e.input = g;
        }, o.value = h, o.onBlur = e.handleBlur, o.onChange = e.handleChange, o.onClick = e.onInputClick, o.onFocus = e.handleFocus, o.onKeyDown = e.onInputKeyDown, o.id = e.props.id, o.name = e.props.name, o.form = e.props.form, o.autoFocus = e.props.autoFocus, o.placeholder = e.props.placeholderText, o.disabled = e.props.disabled, o.autoComplete = e.props.autoComplete, o.className = de(c.props.className, i), o.title = e.props.title, o.readOnly = e.props.readOnly, o.required = e.props.required, o.tabIndex = e.props.tabIndex, o["aria-describedby"] = e.props.ariaDescribedBy, o["aria-invalid"] = e.props.ariaInvalid, o["aria-labelledby"] = e.props.ariaLabelledBy, o["aria-required"] = e.props.ariaRequired, o));
      }, e.renderClearButton = function() {
        var r = e.props, o = r.isClearable, s = r.disabled, i = r.selected, c = r.startDate, l = r.endDate, u = r.clearButtonTitle, d = r.clearButtonClassName, p = d === void 0 ? "" : d, m = r.ariaLabelClose, h = m === void 0 ? "Close" : m, g = r.selectedDates;
        return o && (i != null || c != null || l != null || g != null && g.length) ? _.createElement("button", { type: "button", className: de("react-datepicker__close-icon", p, { "react-datepicker__close-icon--disabled": s }), disabled: s, "aria-label": h, onClick: e.onClearClick, title: u, tabIndex: -1 }) : null;
      }, e.state = e.calcInitialState(), e.preventFocusTimeout = void 0, e;
    }
    return Object.defineProperty(a, "defaultProps", {
      get: function() {
        return {
          allowSameDay: !1,
          dateFormat: "MM/dd/yyyy",
          dateFormatCalendar: "LLLL yyyy",
          disabled: !1,
          disabledKeyboardNavigation: !1,
          dropdownMode: "scroll",
          preventOpenOnFocus: !1,
          monthsShown: 1,
          readOnly: !1,
          withPortal: !1,
          selectsDisabledDaysInRange: !1,
          shouldCloseOnSelect: !0,
          showTimeSelect: !1,
          showTimeInput: !1,
          showPreviousMonths: !1,
          showMonthYearPicker: !1,
          showFullMonthYearPicker: !1,
          showTwoColumnMonthYearPicker: !1,
          showFourColumnMonthYearPicker: !1,
          showYearPicker: !1,
          showQuarterYearPicker: !1,
          showWeekPicker: !1,
          strictParsing: !1,
          swapRange: !1,
          timeIntervals: 30,
          timeCaption: "Time",
          previousMonthAriaLabel: "Previous Month",
          previousMonthButtonLabel: "Previous Month",
          nextMonthAriaLabel: "Next Month",
          nextMonthButtonLabel: "Next Month",
          previousYearAriaLabel: "Previous Year",
          previousYearButtonLabel: "Previous Year",
          nextYearAriaLabel: "Next Year",
          nextYearButtonLabel: "Next Year",
          timeInputLabel: "Time",
          enableTabLoop: !0,
          yearItemNumber: Ut,
          focusSelectedMonth: !1,
          showPopperArrow: !0,
          excludeScrollbar: !0,
          customTimeInput: null,
          calendarStartDay: void 0,
          toggleCalendarOnIconClick: !1,
          usePointerEvent: !1
        };
      },
      enumerable: !1,
      configurable: !0
    }), a.prototype.componentDidMount = function() {
      window.addEventListener("scroll", this.onScroll, !0), document.addEventListener("visibilitychange", this.setHiddenStateOnVisibilityHidden);
    }, a.prototype.componentDidUpdate = function(t, e) {
      var r, o, s, i;
      t.inline && rd(t.selected, this.props.selected) && this.setPreSelection(this.props.selected), this.state.monthSelectedIn !== void 0 && t.monthsShown !== this.props.monthsShown && this.setState({ monthSelectedIn: 0 }), t.highlightDates !== this.props.highlightDates && this.setState({
        highlightDates: Ma(this.props.highlightDates)
      }), !e.focused && !st(t.selected, this.props.selected) && this.setState({ inputValue: null }), e.open !== this.state.open && (e.open === !1 && this.state.open === !0 && ((o = (r = this.props).onCalendarOpen) === null || o === void 0 || o.call(r)), e.open === !0 && this.state.open === !1 && ((i = (s = this.props).onCalendarClose) === null || i === void 0 || i.call(s)));
    }, a.prototype.componentWillUnmount = function() {
      this.clearPreventFocusTimeout(), window.removeEventListener("scroll", this.onScroll, !0), document.removeEventListener("visibilitychange", this.setHiddenStateOnVisibilityHidden);
    }, a.prototype.renderInputContainer = function() {
      var t = this.props, e = t.showIcon, r = t.icon, o = t.calendarIconClassname, s = t.calendarIconClassName, i = t.toggleCalendarOnIconClick, c = this.state.open;
      return o && console.warn("calendarIconClassname props is deprecated. should use calendarIconClassName props."), _.createElement(
        "div",
        { className: "react-datepicker__input-container".concat(e ? " react-datepicker__view-calendar-icon" : "") },
        e && _.createElement(Xu, K({ icon: r, className: de(s, !s && o, c && "react-datepicker-ignore-onclickoutside") }, i ? {
          onClick: this.toggleCalendar
        } : null)),
        this.state.isRenderAriaLiveMessage && this.renderAriaLiveRegion(),
        this.renderDateInput(),
        this.renderClearButton()
      );
    }, a.prototype.render = function() {
      var t = this.renderCalendar();
      if (this.props.inline)
        return t;
      if (this.props.withPortal) {
        var e = this.state.open ? _.createElement(
          wo,
          { enableTabLoop: this.props.enableTabLoop },
          _.createElement("div", { className: "react-datepicker__portal", tabIndex: -1, onKeyDown: this.onPortalKeyDown }, t)
        ) : null;
        return this.state.open && this.props.portalId && (e = _.createElement(bo, K({ portalId: this.props.portalId }, this.props), e)), _.createElement(
          "div",
          null,
          this.renderInputContainer(),
          e
        );
      }
      return _.createElement(td, K({}, this.props, { className: this.props.popperClassName, hidePopper: !this.isCalendarOpen(), targetComponent: this.renderInputContainer(), popperComponent: t, popperOnKeyDown: this.onPopperKeyDown, showArrow: this.props.showPopperArrow }));
    }, a;
  }(pe)
), ad = "input", an = "navigate";
const od = "__button_sumvt_71_ggimc_1", sd = "__label_1u6ug_70_ggimc_171", id = "__input_1u6ug_74_ggimc_198", cd = "_container_ggimc_1", ld = "_visible_ggimc_1", ud = "_relative_ggimc_1", dd = "_inline_ggimc_1", pd = "_flex_ggimc_1", fd = "_table_ggimc_1", md = "_hidden_ggimc_1", hd = "_border_ggimc_1", _d = "_shadow_ggimc_1", gd = "_filter_ggimc_1", vd = "_sidebarOpen_ggimc_392", bd = "_sidebarClosed_ggimc_395", wd = "_formBackdrop_ggimc_399", yd = "_formContainer_ggimc_412", Dd = "_contactForm_ggimc_428", kd = "_inputRow_ggimc_431", xd = "_label_ggimc_435", Cd = "_submitButton_ggimc_441", Md = "_appointmentForm_ggimc_445", Ed = "_button_ggimc_448", Sd = "_feedbackForm_ggimc_452", Pd = "_inquiryForm_ggimc_459", Od = "_newsletterForm_ggimc_466", Td = "_form_ggimc_399", Nd = "_inputField_ggimc_513", Rd = "_datePicker_ggimc_514", Yd = "_closeButton_ggimc_543", Id = "_openButton_ggimc_559", Fd = "_submitHeader_ggimc_571", Ld = "_fadeInSlideUp_ggimc_1", Ad = "_successMessage_ggimc_582", jd = "_helperText_ggimc_589", oe = {
  _button_sumvt_71: od,
  "_size-sm_sumvt_82": "__size-sm_sumvt_82_ggimc_10",
  "_size-md_sumvt_87": "__size-md_sumvt_87_ggimc_15",
  "_size-lg_sumvt_92": "__size-lg_sumvt_92_ggimc_20",
  "_radius-none_sumvt_98": "__radius-none_sumvt_98_ggimc_25",
  "_radius-sm_sumvt_102": "__radius-sm_sumvt_102_ggimc_29",
  "_radius-md_sumvt_106": "__radius-md_sumvt_106_ggimc_33",
  "_radius-lg_sumvt_110": "__radius-lg_sumvt_110_ggimc_37",
  "_radius-full_sumvt_114": "__radius-full_sumvt_114_ggimc_41",
  "_border-none_sumvt_119": "__border-none_sumvt_119_ggimc_45",
  "_border-xs_sumvt_123": "__border-xs_sumvt_123_ggimc_49",
  "_border-sm_sumvt_127": "__border-sm_sumvt_127_ggimc_53",
  "_border-md_sumvt_131": "__border-md_sumvt_131_ggimc_57",
  "_border-lg_sumvt_135": "__border-lg_sumvt_135_ggimc_61",
  "_border-xl_sumvt_139": "__border-xl_sumvt_139_ggimc_65",
  "_color-primary_sumvt_144": "__color-primary_sumvt_144_ggimc_69",
  "_color-default_sumvt_150": "__color-default_sumvt_150_ggimc_75",
  "_color-secondary_sumvt_156": "__color-secondary_sumvt_156_ggimc_81",
  "_color-success_sumvt_162": "__color-success_sumvt_162_ggimc_87",
  "_color-warning_sumvt_168": "__color-warning_sumvt_168_ggimc_93",
  "_color-danger_sumvt_174": "__color-danger_sumvt_174_ggimc_99",
  _label_1u6ug_70: sd,
  "_input-wrapper_1u6ug_74": "__input-wrapper_1u6ug_74_ggimc_175",
  "_input-wrapper-inline_1u6ug_79": "__input-wrapper-inline_1u6ug_79_ggimc_180",
  "_label-outside_1u6ug_84": "__label-outside_1u6ug_84_ggimc_185",
  "_label-outside-left_1u6ug_90": "__label-outside-left_1u6ug_90_ggimc_191",
  _input_1u6ug_74: id,
  "_size-sm_1u6ug_101": "__size-sm_1u6ug_101_ggimc_202",
  "_size-md_1u6ug_106": "__size-md_1u6ug_106_ggimc_207",
  "_size-lg_1u6ug_111": "__size-lg_1u6ug_111_ggimc_212",
  "_radius-none_1u6ug_116": "__radius-none_1u6ug_116_ggimc_217",
  "_radius-sm_1u6ug_120": "__radius-sm_1u6ug_120_ggimc_221",
  "_radius-md_1u6ug_124": "__radius-md_1u6ug_124_ggimc_225",
  "_radius-lg_1u6ug_128": "__radius-lg_1u6ug_128_ggimc_229",
  "_radius-full_1u6ug_132": "__radius-full_1u6ug_132_ggimc_233",
  "_border-none_1u6ug_137": "__border-none_1u6ug_137_ggimc_237",
  "_border-default_1u6ug_141": "__border-default_1u6ug_141_ggimc_241",
  "_border-bottom_1u6ug_145": "__border-bottom_1u6ug_145_ggimc_245",
  "_color-primary_1u6ug_151": "__color-primary_1u6ug_151_ggimc_250",
  "_color-default_1u6ug_161": "__color-default_1u6ug_161_ggimc_266",
  "_color-secondary_1u6ug_171": "__color-secondary_1u6ug_171_ggimc_282",
  "_color-success_1u6ug_181": "__color-success_1u6ug_181_ggimc_298",
  "_color-warning_1u6ug_191": "__color-warning_1u6ug_191_ggimc_314",
  "_color-danger_1u6ug_201": "__color-danger_1u6ug_201_ggimc_330",
  container: cd,
  visible: ld,
  relative: ud,
  "mx-auto": "_mx-auto_ggimc_1",
  "mb-2": "_mb-2_ggimc_1",
  "mt-5": "_mt-5_ggimc_1",
  inline: dd,
  flex: pd,
  table: fd,
  hidden: md,
  "w-2/3": "_w-2/3_ggimc_1",
  "cursor-pointer": "_cursor-pointer_ggimc_1",
  border: hd,
  "bg-pink-500": "_bg-pink-500_ggimc_1",
  "p-4": "_p-4_ggimc_1",
  "text-white": "_text-white_ggimc_1",
  shadow: _d,
  filter: gd,
  "app-container": "_app-container_ggimc_372",
  "layout-content": "_layout-content_ggimc_378",
  "content-wrapper": "_content-wrapper_ggimc_383",
  sidebarOpen: vd,
  sidebarClosed: bd,
  formBackdrop: wd,
  formContainer: yd,
  contactForm: Dd,
  inputRow: kd,
  label: xd,
  submitButton: Cd,
  appointmentForm: Md,
  button: Ed,
  feedbackForm: Sd,
  inquiryForm: Pd,
  newsletterForm: Od,
  form: Td,
  inputField: Nd,
  datePicker: Rd,
  closeButton: Yd,
  openButton: Id,
  submitHeader: Fd,
  fadeInSlideUp: Ld,
  successMessage: Ad,
  helperText: jd,
  "hover:bg-pink-100": "_hover:bg-pink-100_ggimc_1",
  "hover:bg-pink-300": "_hover:bg-pink-300_ggimc_1",
  "md:shadow-lg": "_md:shadow-lg_ggimc_1"
}, at = {
  CONTACT: "contact",
  APPOINTMENT: "appointment",
  FEEDBACK: "feedback",
  INQUIRY: "inquiry",
  NEWSLETTER: "newsletter"
}, Wd = [
  "Frontend Development",
  "Backend Development",
  "Full Stack Development",
  "DevOps",
  "UI/UX Design",
  "Mobile Development",
  "Data Science",
  "Machine Learning",
  "Cloud Computing"
], Me = ({
  label: n,
  name: a,
  value: t,
  onChange: e,
  required: r = !1,
  type: o = "text"
}) => /* @__PURE__ */ y.jsxs("label", { className: oe.label, children: [
  n,
  /* @__PURE__ */ y.jsx(
    "input",
    {
      type: o,
      name: a,
      value: t,
      onChange: e,
      required: r,
      className: oe.inputField
    }
  )
] }), cr = ({
  label: n,
  name: a,
  value: t,
  onChange: e,
  placeholder: r,
  required: o = !1
}) => /* @__PURE__ */ y.jsxs("label", { className: oe.label, children: [
  n,
  /* @__PURE__ */ y.jsx(
    "textarea",
    {
      name: a,
      value: t,
      onChange: e,
      placeholder: r,
      required: o,
      className: oe.inputField
    }
  )
] }), $d = ({
  label: n,
  name: a,
  value: t,
  onChange: e,
  options: r,
  required: o = !1
}) => /* @__PURE__ */ y.jsxs("label", { className: oe.label, children: [
  n,
  /* @__PURE__ */ y.jsx(
    "select",
    {
      name: a,
      multiple: !0,
      value: t,
      onChange: e,
      required: o,
      className: oe.multipleSelectField,
      children: r.map((s) => /* @__PURE__ */ y.jsx("option", { value: s, children: s }, s))
    }
  )
] }), zd = ({ label: n, selected: a, onChange: t }) => /* @__PURE__ */ y.jsxs("div", { className: oe.datePickerContainer, children: [
  /* @__PURE__ */ y.jsx("label", { className: oe.label, children: n }),
  /* @__PURE__ */ y.jsx(
    nd,
    {
      selected: a,
      onChange: t,
      showTimeSelect: !0,
      timeFormat: "HH:mm",
      timeIntervals: 15,
      timeCaption: "Time",
      dateFormat: "MMMM d, yyyy h:mm aa",
      className: oe.datePicker
    }
  )
] }), pp = ({ variant: n = at.PROJECT }) => {
  const [a, t] = it({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    organization: ""
  }), [e, r] = it(!1), [o, s] = it(!1), i = () => r(!0), c = () => {
    s(!1), r(!1);
  }, l = (m) => {
    const { name: h, value: g, type: v, selectedOptions: b } = m.target, D = v === "select-multiple" ? Array.from(b, (k) => k.value) : g;
    t((k) => ({ ...k, [h]: D }));
  }, u = (m) => {
    t((h) => ({ ...h, appointmentDate: m }));
  }, d = (m) => {
    m.preventDefault(), s(!0);
  }, p = () => {
    switch (n) {
      case at.CONTACT:
        return /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
          /* @__PURE__ */ y.jsx(
            Me,
            {
              label: "Phone Number",
              name: "phone",
              value: a.phone,
              onChange: l,
              type: "tel",
              required: !0
            }
          ),
          /* @__PURE__ */ y.jsx(
            Me,
            {
              label: "Subject",
              name: "subject",
              value: a.subject,
              onChange: l,
              required: !0
            }
          ),
          /* @__PURE__ */ y.jsx(
            Me,
            {
              label: "Organization / Company",
              name: "organization",
              value: a.organization,
              onChange: l
            }
          ),
          /* @__PURE__ */ y.jsx(
            cr,
            {
              label: "Message",
              name: "message",
              value: a.message,
              onChange: l,
              placeholder: "Enter your message here",
              required: !0
            }
          )
        ] });
      case at.APPOINTMENT:
        return /* @__PURE__ */ y.jsx(
          zd,
          {
            label: "Appointment Date and Time",
            selected: a.appointmentDate,
            onChange: u
          }
        );
      case at.FEEDBACK:
        return /* @__PURE__ */ y.jsx(
          cr,
          {
            label: "Your Feedback",
            name: "feedback",
            value: a.feedback,
            onChange: l,
            placeholder: "Share your feedback"
          }
        );
      case at.INQUIRY:
        return /* @__PURE__ */ y.jsx(
          cr,
          {
            label: "Your Inquiry",
            name: "inquiry",
            value: a.inquiry,
            onChange: l,
            placeholder: "What would you like to inquire about?"
          }
        );
      case at.NEWSLETTER:
        return /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
          /* @__PURE__ */ y.jsx("p", { className: oe.helperText, children: "Select the topics you're interested in to customize your newsletter content." }),
          /* @__PURE__ */ y.jsx(
            $d,
            {
              label: "Areas of Interest",
              name: "interests",
              value: a.interests,
              onChange: l,
              options: Wd,
              required: !0
            }
          )
        ] });
      default:
        return null;
    }
  };
  return /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
    /* @__PURE__ */ y.jsx("button", { className: oe.openButton, onClick: i, children: n.charAt(0).toUpperCase() + n.slice(1) }),
    e && /* @__PURE__ */ y.jsx("div", { className: oe.formBackdrop, onClick: c, children: /* @__PURE__ */ y.jsxs(
      "div",
      {
        className: `${oe.formContainer} ${oe[`${n}Form`]}`,
        onClick: (m) => m.stopPropagation(),
        children: [
          /* @__PURE__ */ y.jsx("button", { className: oe.closeButton, onClick: c, children: "×" }),
          /* @__PURE__ */ y.jsx("h1", { className: oe.submitHeader, children: `${n.charAt(0).toUpperCase() + n.slice(1)} Form` }),
          o ? /* @__PURE__ */ y.jsx("p", { className: oe.successMessage, children: "Thank you! Your form has been submitted." }) : /* @__PURE__ */ y.jsxs("form", { onSubmit: d, className: oe.form, children: [
            n === at.CONTACT ? /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
              /* @__PURE__ */ y.jsxs("div", { className: oe.inputRow, children: [
                /* @__PURE__ */ y.jsx(
                  Me,
                  {
                    label: "First Name",
                    name: "firstName",
                    value: a.firstName,
                    onChange: l,
                    required: !0
                  }
                ),
                /* @__PURE__ */ y.jsx(
                  Me,
                  {
                    label: "Last Name",
                    name: "lastName",
                    value: a.lastName,
                    onChange: l,
                    required: !0
                  }
                )
              ] }),
              /* @__PURE__ */ y.jsxs("div", { className: oe.inputRow, children: [
                /* @__PURE__ */ y.jsx(
                  Me,
                  {
                    label: "Email Address",
                    name: "email",
                    value: a.email,
                    onChange: l,
                    required: !0,
                    type: "email"
                  }
                ),
                /* @__PURE__ */ y.jsx(
                  Me,
                  {
                    label: "Phone Number",
                    name: "phone",
                    value: a.phone,
                    onChange: l,
                    type: "tel",
                    required: !0
                  }
                )
              ] }),
              /* @__PURE__ */ y.jsxs("div", { className: oe.inputRow, children: [
                /* @__PURE__ */ y.jsx(
                  Me,
                  {
                    label: "Subject",
                    name: "subject",
                    value: a.subject,
                    onChange: l,
                    required: !0
                  }
                ),
                /* @__PURE__ */ y.jsx(
                  Me,
                  {
                    label: "Organization / Company",
                    name: "organization",
                    value: a.organization,
                    onChange: l
                  }
                )
              ] }),
              /* @__PURE__ */ y.jsx(
                cr,
                {
                  label: "Message",
                  name: "message",
                  value: a.message,
                  onChange: l,
                  placeholder: "Enter your message here",
                  required: !0
                }
              )
            ] }) : /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
              /* @__PURE__ */ y.jsx(
                Me,
                {
                  label: "First Name",
                  name: "firstName",
                  value: a.firstName,
                  onChange: l,
                  required: !0
                }
              ),
              /* @__PURE__ */ y.jsx(
                Me,
                {
                  label: "Last Name",
                  name: "lastName",
                  value: a.lastName,
                  onChange: l,
                  required: !0
                }
              ),
              /* @__PURE__ */ y.jsx(
                Me,
                {
                  label: "Email Address",
                  name: "email",
                  value: a.email,
                  onChange: l,
                  required: !0,
                  type: "email"
                }
              ),
              p()
            ] }),
            /* @__PURE__ */ y.jsx("button", { type: "submit", className: oe.submitButton, children: "Submit" })
          ] })
        ]
      }
    ) })
  ] });
}, Hd = "_input_1bfqh_121", Bd = "_button_1bfqh_128", Qd = "_bordered_1bfqh_309", _e = {
  "outer-wrapper": "_outer-wrapper_1bfqh_113",
  "inner-wrapper": "_inner-wrapper_1bfqh_117",
  input: Hd,
  button: Bd,
  "size-sm": "_size-sm_1bfqh_133",
  "size-md": "_size-md_1bfqh_138",
  "size-lg": "_size-lg_1bfqh_143",
  "radius-none": "_radius-none_1bfqh_148",
  "radius-sm": "_radius-sm_1bfqh_152",
  "radius-md": "_radius-md_1bfqh_156",
  "radius-lg": "_radius-lg_1bfqh_160",
  "radius-full": "_radius-full_1bfqh_164",
  "border-none": "_border-none_1bfqh_169",
  "border-default": "_border-default_1bfqh_173",
  "border-bottom": "_border-bottom_1bfqh_177",
  "color-primary": "_color-primary_1bfqh_183",
  "color-default": "_color-default_1bfqh_204",
  "color-secondary": "_color-secondary_1bfqh_225",
  "color-success": "_color-success_1bfqh_246",
  "color-warning": "_color-warning_1bfqh_267",
  "color-danger": "_color-danger_1bfqh_288",
  bordered: Qd
}, fp = ({
  className: n = "",
  aria: a = "search",
  color: t = "default",
  size: e = "sm",
  radius: r = "md",
  border: o = "default",
  placeholder: s,
  buttonPlacement: i = "inside-end",
  style: c,
  value: l,
  onValueChange: u,
  onSearchClick: d
}) => {
  const m = `${`
    ${_e.input} 
    ${_e[`size-${e}`]} 
    ${i.includes("outside") ? _e[`border-${o}`] : ""}
    ${i.includes("outside") ? _e[`radius-${r}`] : ""}
  `.trim()} ${n}`.trim(), h = `${_e.button} ${_e[i]} ${i.includes("outside") ? _e[`radius-${r}`] : ""} ${i.includes("outside") ? _e[`border-${o}`] : ""} ${_e[`border-${o}`]}`.trim(), g = `${_e["inner-wrapper"]} ${i.includes("inside") ? _e.bordered : ""} ${i.includes("inside") ? _e[`border-${o}`] : ""}
    ${i.includes("inside") ? _e[`radius-${r}`] : ""}`.trim(), v = `${_e["outer-wrapper"]} ${_e[`color-${t}`]}`.trim(), b = () => /* @__PURE__ */ y.jsx(
    ns,
    {
      className: h,
      onClick: d,
      "aria-label": "search button",
      children: /* @__PURE__ */ y.jsx(hs, {})
    }
  );
  return /* @__PURE__ */ y.jsxs("div", { className: v, style: c, children: [
    i === "outside-start" && b(),
    /* @__PURE__ */ y.jsxs("div", { className: g, children: [
      i === "inside-start" && b(),
      /* @__PURE__ */ y.jsx(
        "input",
        {
          type: "search",
          className: m,
          "aria-label": a,
          placeholder: s,
          value: l,
          onChange: u
        }
      ),
      i === "inside-end" && b()
    ] }),
    i === "outside-end" && b()
  ] });
}, qd = "_spinner_tchpb_169", Vd = "_spin_tchpb_169", lr = {
  spinner: qd,
  spin: Vd,
  "size-sm": "_size-sm_tchpb_185",
  "size-md": "_size-md_tchpb_190",
  "size-lg": "_size-lg_tchpb_195",
  "thickness-sm": "_thickness-sm_tchpb_200",
  "thickness-md": "_thickness-md_tchpb_204",
  "thickness-lg": "_thickness-lg_tchpb_208",
  "color-default": "_color-default_tchpb_212",
  "color-primary": "_color-primary_tchpb_217",
  "color-secondary": "_color-secondary_tchpb_222",
  "color-success": "_color-success_tchpb_227",
  "color-warning": "_color-warning_tchpb_232",
  "color-danger": "_color-danger_tchpb_237"
}, mp = ({
  size: n = "lg",
  thickness: a = "lg",
  color: t = "default",
  speed: e = "1s",
  style: r,
  className: o = ""
}) => {
  const i = `${`
 ${lr.spinner} 
${lr[`thickness-${a}`]}
 ${lr[`color-${t}`]} 
 ${lr[`size-${n}`]} 
 `.trim()} ${o}`.trim();
  return /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
    " ",
    /* @__PURE__ */ y.jsx(
      "div",
      {
        role: "status",
        "aria-busy": "true",
        style: { ...r, animationDuration: e },
        className: i
      }
    )
  ] });
}, Kd = "_switchContainer_ajmx2_169", Ud = "_switchLabel_ajmx2_176", Xd = "_slider_ajmx2_191", Gd = "_checked_ajmx2_212", ze = {
  switchContainer: Kd,
  switchLabel: Ud,
  switch: "_switch_ajmx2_169",
  slider: Xd,
  "size-sm": "_size-sm_ajmx2_203",
  checked: Gd,
  "size-md": "_size-md_ajmx2_216",
  "size-lg": "_size-lg_ajmx2_229",
  "size-xl": "_size-xl_ajmx2_242",
  "radius-none": "_radius-none_ajmx2_255",
  "radius-sm": "_radius-sm_ajmx2_259",
  "radius-lg": "_radius-lg_ajmx2_263",
  "color-default": "_color-default_ajmx2_268",
  "color-primary": "_color-primary_ajmx2_272",
  "color-secondary": "_color-secondary_ajmx2_276",
  "color-success": "_color-success_ajmx2_280",
  "color-warning": "_color-warning_ajmx2_284",
  "color-danger": "_color-danger_ajmx2_288"
}, hp = ({
  aria: n = "switch",
  color: a = "default",
  onChange: t,
  style: e,
  size: r = "md",
  radius: o = "lg",
  checked: s = !1,
  className: i = "",
  sliderColor: c = "",
  children: l
}) => {
  const [u, d] = it(s), m = `${`
 ${ze.switch} 
 ${ze[`radius-${o}`]} 
 ${ze[`size-${r}`]} 
  ${ze[`color-${a}`]}
   ${u ? ze.checked : ""}
 `.trim()} ${i}`.trim(), h = () => {
    d((g) => {
      const v = !g;
      return t && t(v), v;
    });
  };
  return console.log("isChecked", u), /* @__PURE__ */ y.jsxs("div", { className: ze.switchContainer, children: [
    /* @__PURE__ */ y.jsx(
      "div",
      {
        role: "switch",
        "aria-checked": u,
        "aria-label": n,
        onClick: h,
        style: e,
        className: m,
        children: /* @__PURE__ */ y.jsx(
          "div",
          {
            className: `${ze.slider} ${u ? ze.checked : ""}`,
            style: {
              backgroundColor: c
            }
          }
        )
      }
    ),
    " ",
    l && /* @__PURE__ */ y.jsx("label", { className: ze.switchLabel, children: l })
  ] });
}, Jd = "_container_txmjl_169", Zd = "_label_txmjl_176", ep = "_checkbox_txmjl_211", tp = "_checkmark_txmjl_219", He = {
  container: Jd,
  label: Zd,
  "label-left": "_label-left_txmjl_183",
  "label-right": "_label-right_txmjl_191",
  "label-bottom": "_label-bottom_txmjl_195",
  "label-top": "_label-top_txmjl_203",
  checkbox: ep,
  checkmark: tp,
  "size-sm": "_size-sm_txmjl_229",
  "size-md": "_size-md_txmjl_234",
  "size-lg": "_size-lg_txmjl_239",
  "radius-none": "_radius-none_txmjl_245",
  "radius-sm": "_radius-sm_txmjl_249",
  "radius-md": "_radius-md_txmjl_253",
  "radius-full": "_radius-full_txmjl_257",
  "border-none": "_border-none_txmjl_262",
  "border-sm": "_border-sm_txmjl_266",
  "border-md": "_border-md_txmjl_270",
  "border-lg": "_border-lg_txmjl_274",
  "color-default-light": "_color-default-light_txmjl_279",
  "color-default-dark": "_color-default-dark_txmjl_287",
  "color-primary": "_color-primary_txmjl_295",
  "color-secondary": "_color-secondary_txmjl_303",
  "color-success": "_color-success_txmjl_311",
  "color-warning": "_color-warning_txmjl_319",
  "color-danger": "_color-danger_txmjl_327"
}, _p = ({
  aria: n = "checkbox",
  color: a = "default-light",
  onChange: t,
  style: e,
  size: r = "md",
  radius: o = "sm",
  border: s = "sm",
  checked: i = !1,
  className: c = "",
  checkmarkColor: l = "currentColor",
  children: u,
  labelPosition: d = "right"
}) => {
  const m = `${`
 ${He.checkbox} 
 ${He[`border-${s}`]} 
 ${He[`radius-${o}`]} 
 ${He[`color-${a}`]} 
 ${He[`size-${r}`]} 
 `.trim()} ${c}`.trim(), [h, g] = it(i), v = () => {
    g((b) => {
      const D = !b;
      return console.log("Checkbox checked:", D), t && t(D), D;
    });
  };
  return /* @__PURE__ */ y.jsxs(
    "div",
    {
      className: `${He.container} ${He[`label-${d}`]}`,
      style: e,
      onClick: v,
      role: "checkbox",
      "aria-checked": h,
      "aria-label": n,
      children: [
        /* @__PURE__ */ y.jsx("div", { className: m, children: h && /* @__PURE__ */ y.jsx(
          "svg",
          {
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            className: He.checkmark,
            style: { fill: l },
            children: /* @__PURE__ */ y.jsx("path", { d: "M20.285 6.71a1 1 0 0 0-1.414-1.414l-9.9 9.9-3.958-3.958a1 1 0 0 0-1.414 1.414l4.672 4.672a1 1 0 0 0 1.414 0l10.6-10.6z" })
          }
        ) }),
        u && /* @__PURE__ */ y.jsx("span", { className: He.label, children: u })
      ]
    }
  );
}, rp = "_image_1xiy3_9", np = "_zoomedWrapper_1xiy3_22", ap = "_zoomedImage_1xiy3_26", jt = {
  "image-wrapper": "_image-wrapper_1xiy3_9",
  image: rp,
  zoomedWrapper: np,
  zoomedImage: ap,
  "radius-none": "_radius-none_1xiy3_33",
  "radius-sm": "_radius-sm_1xiy3_37",
  "radius-md": "_radius-md_1xiy3_41",
  "radius-lg": "_radius-lg_1xiy3_45",
  "radius-full": "_radius-full_1xiy3_49"
}, gp = ({
  width: n,
  height: a,
  alt: t = "Image alt text",
  src: e,
  isZoomed: r = !1,
  aria: o,
  classNameWrapper: s = "",
  classNameImage: i = "",
  radius: c = "lg",
  style: l,
  objectFit: u = "cover",
  onClick: d,
  onLoad: p
}) => {
  const m = `${jt["image-wrapper"]} ${jt[`radius-${c}`]} ${r ? jt.zoomedWrapper : ""} ${s}`.trim(), h = `${jt.image} ${i} ${r ? jt.zoomedImage : ""}`.trim(), g = { width: n, height: a, objectFit: u, ...l };
  return /* @__PURE__ */ y.jsx("div", { className: m, children: /* @__PURE__ */ y.jsx(
    "img",
    {
      alt: t,
      src: e,
      "aria-label": o,
      className: h,
      style: g,
      onClick: d,
      onLoad: p
    }
  ) });
};
export {
  up as Accordion,
  lp as AccordionItem,
  ns as Button,
  _p as Checkbox,
  pp as Form,
  gp as Image,
  cp as Input,
  dp as Modal,
  fp as Search,
  mp as Spinner,
  hp as Switch
};
