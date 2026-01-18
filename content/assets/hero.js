"use strict";
(() => {
    var ud = Object.create;
    var Ea = Object.defineProperty
        , dd = Object.defineProperties
        , fd = Object.getOwnPropertyDescriptor
        , pd = Object.getOwnPropertyDescriptors
        , md = Object.getOwnPropertyNames
        , vc = Object.getOwnPropertySymbols
        , gd = Object.getPrototypeOf
        , xc = Object.prototype.hasOwnProperty
        , _d = Object.prototype.propertyIsEnumerable;
    var ii = Math.pow
        , Ta = (n, t, e) => t in n ? Ea(n, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : n[t] = e
        , gs = (n, t) => {
            for (var e in t || (t = {}))
                xc.call(t, e) && Ta(n, e, t[e]);
            if (vc)
                for (var e of vc(t))
                    _d.call(t, e) && Ta(n, e, t[e]);
            return n
        }
        , or = (n, t) => dd(n, pd(t));
    var vd = (n, t) => () => (t || n((t = {
        exports: {}
    }).exports, t),
        t.exports);
    var xd = (n, t, e, i) => {
        if (t && typeof t == "object" || typeof t == "function")
            for (let s of md(t))
                !xc.call(n, s) && s !== e && Ea(n, s, {
                    get: () => t[s],
                    enumerable: !(i = fd(t, s)) || i.enumerable
                });
        return n
    }
        ;
    var yd = (n, t, e) => (e = n != null ? ud(gd(n)) : {},
        xd(t || !n || !n.__esModule ? Ea(e, "default", {
            value: n,
            enumerable: !0
        }) : e, n));
    var Ue = (n, t, e) => Ta(n, typeof t != "symbol" ? t + "" : t, e);
    var ar = (n, t, e) => new Promise((i, s) => {
        var r = c => {
            try {
                a(e.next(c))
            } catch (l) {
                s(l)
            }
        }
            , o = c => {
                try {
                    a(e.throw(c))
                } catch (l) {
                    s(l)
                }
            }
            , a = c => c.done ? i(c.value) : Promise.resolve(c.value).then(r, o);
        a((e = e.apply(n, t)).next())
    }
    );
    var Ju = vd((DM, $u) => {
        var h0 = 4
            , u0 = .001
            , d0 = 1e-7
            , f0 = 10
            , er = 11
            , da = 1 / (er - 1)
            , p0 = typeof Float32Array == "function";
        function Xu(n, t) {
            return 1 - 3 * t + 3 * n
        }
        function qu(n, t) {
            return 3 * t - 6 * n
        }
        function Yu(n) {
            return 3 * n
        }
        function fa(n, t, e) {
            return ((Xu(t, e) * n + qu(t, e)) * n + Yu(t)) * n
        }
        function Zu(n, t, e) {
            return 3 * Xu(t, e) * n * n + 2 * qu(t, e) * n + Yu(t)
        }
        function m0(n, t, e, i, s) {
            var r, o, a = 0;
            do
                o = t + (e - t) / 2,
                    r = fa(o, i, s) - n,
                    r > 0 ? e = o : t = o;
            while (Math.abs(r) > d0 && ++a < f0);
            return o
        }
        function g0(n, t, e, i) {
            for (var s = 0; s < h0; ++s) {
                var r = Zu(t, e, i);
                if (r === 0)
                    return t;
                var o = fa(t, e, i) - n;
                t -= o / r
            }
            return t
        }
        function _0(n) {
            return n
        }
        $u.exports = function (t, e, i, s) {
            if (!(0 <= t && t <= 1 && 0 <= i && i <= 1))
                throw new Error("bezier x values must be in [0, 1] range");
            if (t === e && i === s)
                return _0;
            for (var r = p0 ? new Float32Array(er) : new Array(er), o = 0; o < er; ++o)
                r[o] = fa(o * da, t, i);
            function a(c) {
                for (var l = 0, d = 1, h = er - 1; d !== h && r[d] <= c; ++d)
                    l += da;
                --d;
                var f = (c - r[d]) / (r[d + 1] - r[d])
                    , p = l + f * da
                    , v = Zu(p, t, i);
                return v >= u0 ? g0(c, p, t, i) : v === 0 ? p : m0(c, l, l + da, t, i)
            }
            return function (l) {
                return l === 0 ? 0 : l === 1 ? 1 : fa(a(l), e, s)
            }
        }
    }
    );
    var ur, _t, Tc, Ra, si, yc, Ec, wc, Ac, Pa, wa, Aa, Md, _s = {}, Cc = [], Sd = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, dr = Array.isArray;
    function En(n, t) {
        for (var e in t)
            n[e] = t[e];
        return n
    }
    function Ia(n) {
        n && n.parentNode && n.parentNode.removeChild(n)
    }
    function ue(n, t, e) {
        var i, s, r, o = {};
        for (r in t)
            r == "key" ? i = t[r] : r == "ref" ? s = t[r] : o[r] = t[r];
        if (arguments.length > 2 && (o.children = arguments.length > 3 ? ur.call(arguments, 2) : e),
            typeof n == "function" && n.defaultProps != null)
            for (r in n.defaultProps)
                o[r] === void 0 && (o[r] = n.defaultProps[r]);
        return cr(n, o, i, s, null)
    }
    function cr(n, t, e, i, s) {
        var r = {
            type: n,
            props: t,
            key: e,
            ref: i,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __c: null,
            constructor: void 0,
            __v: s == null ? ++Tc : s,
            __i: -1,
            __u: 0
        };
        return s == null && _t.vnode != null && _t.vnode(r),
            r
    }
    function He(n) {
        return n.children
    }
    function Ve(n, t) {
        this.props = n,
            this.context = t
    }
    function Pi(n, t) {
        if (t == null)
            return n.__ ? Pi(n.__, n.__i + 1) : null;
        for (var e; t < n.__k.length; t++)
            if ((e = n.__k[t]) != null && e.__e != null)
                return e.__e;
        return typeof n.type == "function" ? Pi(n) : null
    }
    function Rc(n) {
        var t, e;
        if ((n = n.__) != null && n.__c != null) {
            for (n.__e = n.__c.base = null,
                t = 0; t < n.__k.length; t++)
                if ((e = n.__k[t]) != null && e.__e != null) {
                    n.__e = n.__c.base = e.__e;
                    break
                }
            return Rc(n)
        }
    }
    function Mc(n) {
        (!n.__d && (n.__d = !0) && si.push(n) && !hr.__r++ || yc != _t.debounceRendering) && ((yc = _t.debounceRendering) || Ec)(hr)
    }
    function hr() {
        for (var n, t, e, i, s, r, o, a = 1; si.length;)
            si.length > a && si.sort(wc),
                n = si.shift(),
                a = si.length,
                n.__d && (e = void 0,
                    s = (i = (t = n).__v).__e,
                    r = [],
                    o = [],
                    t.__P && ((e = En({}, i)).__v = i.__v + 1,
                        _t.vnode && _t.vnode(e),
                        Da(t.__P, e, i, t.__n, t.__P.namespaceURI, 32 & i.__u ? [s] : null, r, s == null ? Pi(i) : s, !!(32 & i.__u), o),
                        e.__v = i.__v,
                        e.__.__k[e.__i] = e,
                        Dc(r, e, o),
                        e.__e != s && Rc(e)));
        hr.__r = 0
    }
    function Pc(n, t, e, i, s, r, o, a, c, l, d) {
        var h, f, p, v, g, m, u, E = i && i.__k || Cc, T = t.length;
        for (c = bd(e, t, E, c, T),
            h = 0; h < T; h++)
            (p = e.__k[h]) != null && (f = p.__i == -1 ? _s : E[p.__i] || _s,
                p.__i = h,
                m = Da(n, p, f, s, r, o, a, c, l, d),
                v = p.__e,
                p.ref && f.ref != p.ref && (f.ref && La(f.ref, null, p),
                    d.push(p.ref, p.__c || v, p)),
                g == null && v != null && (g = v),
                (u = !!(4 & p.__u)) || f.__k === p.__k ? c = Ic(p, c, n, u) : typeof p.type == "function" && m !== void 0 ? c = m : v && (c = v.nextSibling),
                p.__u &= -7);
        return e.__e = g,
            c
    }
    function bd(n, t, e, i, s) {
        var r, o, a, c, l, d = e.length, h = d, f = 0;
        for (n.__k = new Array(s),
            r = 0; r < s; r++)
            (o = t[r]) != null && typeof o != "boolean" && typeof o != "function" ? (c = r + f,
                (o = n.__k[r] = typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? cr(null, o, null, null, null) : dr(o) ? cr(He, {
                    children: o
                }, null, null, null) : o.constructor == null && o.__b > 0 ? cr(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : o).__ = n,
                o.__b = n.__b + 1,
                a = null,
                (l = o.__i = Td(o, e, c, h)) != -1 && (h--,
                    (a = e[l]) && (a.__u |= 2)),
                a == null || a.__v == null ? (l == -1 && (s > d ? f-- : s < d && f++),
                    typeof o.type != "function" && (o.__u |= 4)) : l != c && (l == c - 1 ? f-- : l == c + 1 ? f++ : (l > c ? f-- : f++,
                        o.__u |= 4))) : n.__k[r] = null;
        if (h)
            for (r = 0; r < d; r++)
                (a = e[r]) != null && (2 & a.__u) == 0 && (a.__e == i && (i = Pi(a)),
                    Uc(a, a));
        return i
    }
    function Ic(n, t, e, i) {
        var s, r;
        if (typeof n.type == "function") {
            for (s = n.__k,
                r = 0; s && r < s.length; r++)
                s[r] && (s[r].__ = n,
                    t = Ic(s[r], t, e, i));
            return t
        }
        n.__e != t && (i && (t && n.type && !t.parentNode && (t = Pi(n)),
            e.insertBefore(n.__e, t || null)),
            t = n.__e);
        do
            t = t && t.nextSibling;
        while (t != null && t.nodeType == 8);
        return t
    }
    function Td(n, t, e, i) {
        var s, r, o, a = n.key, c = n.type, l = t[e], d = l != null && (2 & l.__u) == 0;
        if (l === null && n.key == null || d && a == l.key && c == l.type)
            return e;
        if (i > (d ? 1 : 0)) {
            for (s = e - 1,
                r = e + 1; s >= 0 || r < t.length;)
                if ((l = t[o = s >= 0 ? s-- : r++]) != null && (2 & l.__u) == 0 && a == l.key && c == l.type)
                    return o
        }
        return -1
    }
    function Sc(n, t, e) {
        t[0] == "-" ? n.setProperty(t, e == null ? "" : e) : n[t] = e == null ? "" : typeof e != "number" || Sd.test(t) ? e : e + "px"
    }
    function lr(n, t, e, i, s) {
        var r, o;
        t: if (t == "style")
            if (typeof e == "string")
                n.style.cssText = e;
            else {
                if (typeof i == "string" && (n.style.cssText = i = ""),
                    i)
                    for (t in i)
                        e && t in e || Sc(n.style, t, "");
                if (e)
                    for (t in e)
                        i && e[t] == i[t] || Sc(n.style, t, e[t])
            }
        else if (t[0] == "o" && t[1] == "n")
            r = t != (t = t.replace(Ac, "$1")),
                o = t.toLowerCase(),
                t = o in n || t == "onFocusOut" || t == "onFocusIn" ? o.slice(2) : t.slice(2),
                n.l || (n.l = {}),
                n.l[t + r] = e,
                e ? i ? e.u = i.u : (e.u = Pa,
                    n.addEventListener(t, r ? Aa : wa, r)) : n.removeEventListener(t, r ? Aa : wa, r);
        else {
            if (s == "http://www.w3.org/2000/svg")
                t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
            else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in n)
                try {
                    n[t] = e == null ? "" : e;
                    break t
                } catch (a) { }
            typeof e == "function" || (e == null || e === !1 && t[4] != "-" ? n.removeAttribute(t) : n.setAttribute(t, t == "popover" && e == 1 ? "" : e))
        }
    }
    function bc(n) {
        return function (t) {
            if (this.l) {
                var e = this.l[t.type + n];
                if (t.t == null)
                    t.t = Pa++;
                else if (t.t < e.u)
                    return;
                return e(_t.event ? _t.event(t) : t)
            }
        }
    }
    function Da(n, t, e, i, s, r, o, a, c, l) {
        var d, h, f, p, v, g, m, u, E, T, y, C, R, D, N, S, M, w = t.type;
        if (t.constructor != null)
            return null;
        128 & e.__u && (c = !!(32 & e.__u),
            r = [a = t.__e = e.__e]),
            (d = _t.__b) && d(t);
        t: if (typeof w == "function")
            try {
                if (u = t.props,
                    E = "prototype" in w && w.prototype.render,
                    T = (d = w.contextType) && i[d.__c],
                    y = d ? T ? T.props.value : d.__ : i,
                    e.__c ? m = (h = t.__c = e.__c).__ = h.__E : (E ? t.__c = h = new w(u, y) : (t.__c = h = new Ve(u, y),
                        h.constructor = w,
                        h.render = wd),
                        T && T.sub(h),
                        h.props = u,
                        h.state || (h.state = {}),
                        h.context = y,
                        h.__n = i,
                        f = h.__d = !0,
                        h.__h = [],
                        h._sb = []),
                    E && h.__s == null && (h.__s = h.state),
                    E && w.getDerivedStateFromProps != null && (h.__s == h.state && (h.__s = En({}, h.__s)),
                        En(h.__s, w.getDerivedStateFromProps(u, h.__s))),
                    p = h.props,
                    v = h.state,
                    h.__v = t,
                    f)
                    E && w.getDerivedStateFromProps == null && h.componentWillMount != null && h.componentWillMount(),
                        E && h.componentDidMount != null && h.__h.push(h.componentDidMount);
                else {
                    if (E && w.getDerivedStateFromProps == null && u !== p && h.componentWillReceiveProps != null && h.componentWillReceiveProps(u, y),
                        !h.__e && h.shouldComponentUpdate != null && h.shouldComponentUpdate(u, h.__s, y) === !1 || t.__v == e.__v) {
                        for (t.__v != e.__v && (h.props = u,
                            h.state = h.__s,
                            h.__d = !1),
                            t.__e = e.__e,
                            t.__k = e.__k,
                            t.__k.some(function (V) {
                                V && (V.__ = t)
                            }),
                            C = 0; C < h._sb.length; C++)
                            h.__h.push(h._sb[C]);
                        h._sb = [],
                            h.__h.length && o.push(h);
                        break t
                    }
                    h.componentWillUpdate != null && h.componentWillUpdate(u, h.__s, y),
                        E && h.componentDidUpdate != null && h.__h.push(function () {
                            h.componentDidUpdate(p, v, g)
                        })
                }
                if (h.context = y,
                    h.props = u,
                    h.__P = n,
                    h.__e = !1,
                    R = _t.__r,
                    D = 0,
                    E) {
                    for (h.state = h.__s,
                        h.__d = !1,
                        R && R(t),
                        d = h.render(h.props, h.state, h.context),
                        N = 0; N < h._sb.length; N++)
                        h.__h.push(h._sb[N]);
                    h._sb = []
                } else
                    do
                        h.__d = !1,
                            R && R(t),
                            d = h.render(h.props, h.state, h.context),
                            h.state = h.__s;
                    while (h.__d && ++D < 25);
                h.state = h.__s,
                    h.getChildContext != null && (i = En(En({}, i), h.getChildContext())),
                    E && !f && h.getSnapshotBeforeUpdate != null && (g = h.getSnapshotBeforeUpdate(p, v)),
                    S = d,
                    d != null && d.type === He && d.key == null && (S = Lc(d.props.children)),
                    a = Pc(n, dr(S) ? S : [S], t, e, i, s, r, o, a, c, l),
                    h.base = t.__e,
                    t.__u &= -161,
                    h.__h.length && o.push(h),
                    m && (h.__E = h.__ = null)
            } catch (V) {
                if (t.__v = null,
                    c || r != null)
                    if (V.then) {
                        for (t.__u |= c ? 160 : 128; a && a.nodeType == 8 && a.nextSibling;)
                            a = a.nextSibling;
                        r[r.indexOf(a)] = null,
                            t.__e = a
                    } else {
                        for (M = r.length; M--;)
                            Ia(r[M]);
                        Ca(t)
                    }
                else
                    t.__e = e.__e,
                        t.__k = e.__k,
                        V.then || Ca(t);
                _t.__e(V, t, e)
            }
        else
            r == null && t.__v == e.__v ? (t.__k = e.__k,
                t.__e = e.__e) : a = t.__e = Ed(e.__e, t, e, i, s, r, o, c, l);
        return (d = _t.diffed) && d(t),
            128 & t.__u ? void 0 : a
    }
    function Ca(n) {
        n && n.__c && (n.__c.__e = !0),
            n && n.__k && n.__k.forEach(Ca)
    }
    function Dc(n, t, e) {
        for (var i = 0; i < e.length; i++)
            La(e[i], e[++i], e[++i]);
        _t.__c && _t.__c(t, n),
            n.some(function (s) {
                try {
                    n = s.__h,
                        s.__h = [],
                        n.some(function (r) {
                            r.call(s)
                        })
                } catch (r) {
                    _t.__e(r, s.__v)
                }
            })
    }
    function Lc(n) {
        return typeof n != "object" || n == null || n.__b && n.__b > 0 ? n : dr(n) ? n.map(Lc) : En({}, n)
    }
    function Ed(n, t, e, i, s, r, o, a, c) {
        var l, d, h, f, p, v, g, m = e.props, u = t.props, E = t.type;
        if (E == "svg" ? s = "http://www.w3.org/2000/svg" : E == "math" ? s = "http://www.w3.org/1998/Math/MathML" : s || (s = "http://www.w3.org/1999/xhtml"),
            r != null) {
            for (l = 0; l < r.length; l++)
                if ((p = r[l]) && "setAttribute" in p == !!E && (E ? p.localName == E : p.nodeType == 3)) {
                    n = p,
                        r[l] = null;
                    break
                }
        }
        if (n == null) {
            if (E == null)
                return document.createTextNode(u);
            n = document.createElementNS(s, E, u.is && u),
                a && (_t.__m && _t.__m(t, r),
                    a = !1),
                r = null
        }
        if (E == null)
            m === u || a && n.data == u || (n.data = u);
        else {
            if (r = r && ur.call(n.childNodes),
                m = e.props || _s,
                !a && r != null)
                for (m = {},
                    l = 0; l < n.attributes.length; l++)
                    m[(p = n.attributes[l]).name] = p.value;
            for (l in m)
                if (p = m[l],
                    l != "children") {
                    if (l == "dangerouslySetInnerHTML")
                        h = p;
                    else if (!(l in u)) {
                        if (l == "value" && "defaultValue" in u || l == "checked" && "defaultChecked" in u)
                            continue;
                        lr(n, l, null, p, s)
                    }
                }
            for (l in u)
                p = u[l],
                    l == "children" ? f = p : l == "dangerouslySetInnerHTML" ? d = p : l == "value" ? v = p : l == "checked" ? g = p : a && typeof p != "function" || m[l] === p || lr(n, l, p, m[l], s);
            if (d)
                a || h && (d.__html == h.__html || d.__html == n.innerHTML) || (n.innerHTML = d.__html),
                    t.__k = [];
            else if (h && (n.innerHTML = ""),
                Pc(t.type == "template" ? n.content : n, dr(f) ? f : [f], t, e, i, E == "foreignObject" ? "http://www.w3.org/1999/xhtml" : s, r, o, r ? r[0] : e.__k && Pi(e, 0), a, c),
                r != null)
                for (l = r.length; l--;)
                    Ia(r[l]);
            a || (l = "value",
                E == "progress" && v == null ? n.removeAttribute("value") : v != null && (v !== n[l] || E == "progress" && !v || E == "option" && v != m[l]) && lr(n, l, v, m[l], s),
                l = "checked",
                g != null && g != n[l] && lr(n, l, g, m[l], s))
        }
        return n
    }
    function La(n, t, e) {
        try {
            if (typeof n == "function") {
                var i = typeof n.__u == "function";
                i && n.__u(),
                    i && t == null || (n.__u = n(t))
            } else
                n.current = t
        } catch (s) {
            _t.__e(s, e)
        }
    }
    function Uc(n, t, e) {
        var i, s;
        if (_t.unmount && _t.unmount(n),
            (i = n.ref) && (i.current && i.current != n.__e || La(i, null, t)),
            (i = n.__c) != null) {
            if (i.componentWillUnmount)
                try {
                    i.componentWillUnmount()
                } catch (r) {
                    _t.__e(r, t)
                }
            i.base = i.__P = null
        }
        if (i = n.__k)
            for (s = 0; s < i.length; s++)
                i[s] && Uc(i[s], t, e || typeof n.type != "function");
        e || Ia(n.__e),
            n.__c = n.__ = n.__e = void 0
    }
    function wd(n, t, e) {
        return this.constructor(n, e)
    }
    function Nc(n, t, e) {
        var i, s, r, o;
        t == document && (t = document.documentElement),
            _t.__ && _t.__(n, t),
            s = (i = typeof e == "function") ? null : e && e.__k || t.__k,
            r = [],
            o = [],
            Da(t, n = (!i && e || t).__k = ue(He, null, [n]), s || _s, _s, t.namespaceURI, !i && e ? [e] : s ? null : t.firstChild ? ur.call(t.childNodes) : null, r, !i && e ? e : s ? s.__e : t.firstChild, i, o),
            Dc(r, n, o)
    }
    ur = Cc.slice,
        _t = {
            __e: function (n, t, e, i) {
                for (var s, r, o; t = t.__;)
                    if ((s = t.__c) && !s.__)
                        try {
                            if ((r = s.constructor) && r.getDerivedStateFromError != null && (s.setState(r.getDerivedStateFromError(n)),
                                o = s.__d),
                                s.componentDidCatch != null && (s.componentDidCatch(n, i || {}),
                                    o = s.__d),
                                o)
                                return s.__E = s
                        } catch (a) {
                            n = a
                        }
                throw n
            }
        },
        Tc = 0,
        Ra = function (n) {
            return n != null && n.constructor == null
        }
        ,
        Ve.prototype.setState = function (n, t) {
            var e;
            e = this.__s != null && this.__s != this.state ? this.__s : this.__s = En({}, this.state),
                typeof n == "function" && (n = n(En({}, e), this.props)),
                n && En(e, n),
                n != null && this.__v && (t && this._sb.push(t),
                    Mc(this))
        }
        ,
        Ve.prototype.forceUpdate = function (n) {
            this.__v && (this.__e = !0,
                n && this.__h.push(n),
                Mc(this))
        }
        ,
        Ve.prototype.render = He,
        si = [],
        Ec = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout,
        wc = function (n, t) {
            return n.__v.__b - t.__v.__b
        }
        ,
        hr.__r = 0,
        Ac = /(PointerCapture)$|Capture$/i,
        Pa = 0,
        wa = bc(!1),
        Aa = bc(!0),
        Md = 0;
    var Ua;
    (Ua = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : void 0) != null && Ua.__PREACT_DEVTOOLS__ && Ua.__PREACT_DEVTOOLS__.attachPreact("10.27.1", _t, {
        Fragment: He,
        Component: Ve
    });
    var Fc = {};
    function mn(n) {
        return n.type === He ? "Fragment" : typeof n.type == "function" ? n.type.displayName || n.type.name : typeof n.type == "string" ? n.type : "#text"
    }
    var vs = []
        , Ii = [];
    function Bc() {
        return vs.length > 0 ? vs[vs.length - 1] : null
    }
    var Oc = !0;
    function Na(n) {
        return typeof n.type == "function" && n.type != He
    }
    function ge(n) {
        for (var t = [n], e = n; e.__o != null;)
            t.push(e.__o),
                e = e.__o;
        return t.reduce(function (i, s) {
            i += "  in " + mn(s);
            var r = s.__source;
            return r ? i += " (at " + r.fileName + ":" + r.lineNumber + ")" : Oc && console.warn("Add @babel/plugin-transform-react-jsx-source to get a more detailed component stack. Note that you should not add it to production builds of your App for bundle size reasons."),
                Oc = !1,
                i + `
`
        }, "")
    }
    var Ad = typeof WeakMap == "function";
    function Oa(n) {
        var t = [];
        return n.__k && n.__k.forEach(function (e) {
            e && typeof e.type == "function" ? t.push.apply(t, Oa(e)) : e && typeof e.type == "string" && t.push(e.type)
        }),
            t
    }
    function zc(n) {
        return n ? typeof n.type == "function" ? n.__ == null ? n.__e != null && n.__e.parentNode != null ? n.__e.parentNode.localName : "" : zc(n.__) : n.type : ""
    }
    var Cd = Ve.prototype.setState;
    function Fa(n) {
        return n === "table" || n === "tfoot" || n === "tbody" || n === "thead" || n === "td" || n === "tr" || n === "th"
    }
    Ve.prototype.setState = function (n, t) {
        return this.__v == null && this.state == null && console.warn(`Calling "this.setState" inside the constructor of a component is a no-op and might be a bug in your application. Instead, set "this.state = {}" directly.

` + ge(Bc())),
            Cd.call(this, n, t)
    }
        ;
    var Rd = /^(address|article|aside|blockquote|details|div|dl|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hgroup|hr|main|menu|nav|ol|p|pre|search|section|table|ul)$/
        , Pd = Ve.prototype.forceUpdate;
    function Qe(n) {
        var t = n.props
            , e = mn(n)
            , i = "";
        for (var s in t)
            if (t.hasOwnProperty(s) && s !== "children") {
                var r = t[s];
                typeof r == "function" && (r = "function " + (r.displayName || r.name) + "() {}"),
                    r = Object(r) !== r || r.toString ? r + "" : Object.prototype.toString.call(r),
                    i += " " + s + "=" + JSON.stringify(r)
            }
        var o = t.children;
        return "<" + e + i + (o && o.length ? ">..</" + e + ">" : " />")
    }
    Ve.prototype.forceUpdate = function (n) {
        return this.__v == null ? console.warn(`Calling "this.forceUpdate" inside the constructor of a component is a no-op and might be a bug in your application.

` + ge(Bc())) : this.__P == null && console.warn(`Can't call "this.forceUpdate" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.

` + ge(this.__v)),
            Pd.call(this, n)
    }
        ,
        _t.__m = function (n, t) {
            var e = n.type
                , i = t.map(function (s) {
                    return s && s.localName
                }).filter(Boolean);
            console.error('Expected a DOM node of type "' + e + '" but found "' + i.join(", ") + `" as available DOM-node(s), this is caused by the SSR'd HTML containing different DOM-nodes compared to the hydrated one.

` + ge(n))
        }
        ,
        (function () {
            (function () {
                var g = _t.__b
                    , m = _t.diffed
                    , u = _t.__
                    , E = _t.vnode
                    , T = _t.__r;
                _t.diffed = function (y) {
                    Na(y) && Ii.pop(),
                        vs.pop(),
                        m && m(y)
                }
                    ,
                    _t.__b = function (y) {
                        Na(y) && vs.push(y),
                            g && g(y)
                    }
                    ,
                    _t.__ = function (y, C) {
                        Ii = [],
                            u && u(y, C)
                    }
                    ,
                    _t.vnode = function (y) {
                        y.__o = Ii.length > 0 ? Ii[Ii.length - 1] : null,
                            E && E(y)
                    }
                    ,
                    _t.__r = function (y) {
                        Na(y) && Ii.push(y),
                            T && T(y)
                    }
            }
            )();
            var n = !1
                , t = _t.__b
                , e = _t.diffed
                , i = _t.vnode
                , s = _t.__r
                , r = _t.__e
                , o = _t.__
                , a = _t.__h
                , c = Ad ? {
                    useEffect: new WeakMap,
                    useLayoutEffect: new WeakMap,
                    lazyPropTypes: new WeakMap
                } : null
                , l = [];
            _t.__e = function (g, m, u, E) {
                if (m && m.__c && typeof g.then == "function") {
                    var T = g;
                    g = new Error("Missing Suspense. The throwing component was: " + mn(m));
                    for (var y = m; y; y = y.__)
                        if (y.__c && y.__c.__c) {
                            g = T;
                            break
                        }
                    if (g instanceof Error)
                        throw g
                }
                try {
                    (E = E || {}).componentStack = ge(m),
                        r(g, m, u, E),
                        typeof g.then != "function" && setTimeout(function () {
                            throw g
                        })
                } catch (C) {
                    throw C
                }
            }
                ,
                _t.__ = function (g, m) {
                    if (!m)
                        throw new Error(`Undefined parent passed to render(), this is the second argument.
Check if the element is available in the DOM/has the correct id.`);
                    var u;
                    switch (m.nodeType) {
                        case 1:
                        case 11:
                        case 9:
                            u = !0;
                            break;
                        default:
                            u = !1
                    }
                    if (!u) {
                        var E = mn(g);
                        throw new Error("Expected a valid HTML node as a second argument to render.	Received " + m + " instead: render(<" + E + " />, " + m + ");")
                    }
                    o && o(g, m)
                }
                ,
                _t.__b = function (g) {
                    var m = g.type;
                    if (n = !0,
                        m === void 0)
                        throw new Error(`Undefined component passed to createElement()

You likely forgot to export your component or might have mixed up default and named imports` + Qe(g) + `

` + ge(g));
                    if (m != null && typeof m == "object")
                        throw m.__k !== void 0 && m.__e !== void 0 ? new Error("Invalid type passed to createElement(): " + m + `

Did you accidentally pass a JSX literal as JSX twice?

  let My` + mn(g) + " = " + Qe(m) + `;
  let vnode = <My` + mn(g) + ` />;

This usually happens when you export a JSX literal and not the component.

` + ge(g)) : new Error("Invalid type passed to createElement(): " + (Array.isArray(m) ? "array" : m));
                    if (g.ref !== void 0 && typeof g.ref != "function" && typeof g.ref != "object" && !("$$typeof" in g))
                        throw new Error(`Component's "ref" property should be a function, or an object created by createRef(), but got [` + typeof g.ref + `] instead
` + Qe(g) + `

` + ge(g));
                    if (typeof g.type == "string") {
                        for (var u in g.props)
                            if (u[0] === "o" && u[1] === "n" && typeof g.props[u] != "function" && g.props[u] != null)
                                throw new Error(`Component's "` + u + '" property should be a function, but got [' + typeof g.props[u] + `] instead
` + Qe(g) + `

` + ge(g))
                    }
                    if (typeof g.type == "function" && g.type.propTypes) {
                        if (g.type.displayName === "Lazy" && c && !c.lazyPropTypes.has(g.type)) {
                            var E = "PropTypes are not supported on lazy(). Use propTypes on the wrapped component itself. ";
                            try {
                                var T = g.type();
                                c.lazyPropTypes.set(g.type, !0),
                                    console.warn(E + "Component wrapped in lazy() is " + mn(T))
                            } catch (C) {
                                console.warn(E + "We will log the wrapped component's name once it is loaded.")
                            }
                        }
                        var y = g.props;
                        g.type.__f && delete (y = (function (C, R) {
                            for (var D in R)
                                C[D] = R[D];
                            return C
                        }
                        )({}, y)).ref,
                            (function (C, R, D, N, S) {
                                Object.keys(C).forEach(function (M) {
                                    var w;
                                    try {
                                        w = C[M](R, M, N, "prop", null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")
                                    } catch (V) {
                                        w = V
                                    }
                                    w && !(w.message in Fc) && (Fc[w.message] = !0,
                                        console.error("Failed prop type: " + w.message + (S && `
` + S() || "")))
                                })
                            }
                            )(g.type.propTypes, y, 0, mn(g), function () {
                                return ge(g)
                            })
                    }
                    t && t(g)
                }
                ;
            var d, h = 0;
            _t.__r = function (g) {
                s && s(g),
                    n = !0;
                var m = g.__c;
                if (m === d ? h++ : h = 1,
                    h >= 25)
                    throw new Error("Too many re-renders. This is limited to prevent an infinite loop which may lock up your browser. The component causing this is: " + mn(g));
                d = m
            }
                ,
                _t.__h = function (g, m, u) {
                    if (!g || !n)
                        throw new Error("Hook can only be invoked from render methods.");
                    a && a(g, m, u)
                }
                ;
            var f = function (g, m) {
                return {
                    get: function () {
                        var u = "get" + g + m;
                        l && l.indexOf(u) < 0 && (l.push(u),
                            console.warn("getting vnode." + g + " is deprecated, " + m))
                    },
                    set: function () {
                        var u = "set" + g + m;
                        l && l.indexOf(u) < 0 && (l.push(u),
                            console.warn("setting vnode." + g + " is not allowed, " + m))
                    }
                }
            }
                , p = {
                    nodeName: f("nodeName", "use vnode.type"),
                    attributes: f("attributes", "use vnode.props"),
                    children: f("children", "use vnode.props.children")
                }
                , v = Object.create({}, p);
            _t.vnode = function (g) {
                var m = g.props;
                if (g.type !== null && m != null && ("__source" in m || "__self" in m)) {
                    var u = g.props = {};
                    for (var E in m) {
                        var T = m[E];
                        E === "__source" ? g.__source = T : E === "__self" ? g.__self = T : u[E] = T
                    }
                }
                g.__proto__ = v,
                    i && i(g)
            }
                ,
                _t.diffed = function (g) {
                    var m, u = g.type, E = g.__;
                    if (g.__k && g.__k.forEach(function (z) {
                        if (typeof z == "object" && z && z.type === void 0) {
                            var Z = Object.keys(z).join(",");
                            throw new Error("Objects are not valid as a child. Encountered an object with the keys {" + Z + `}.

` + ge(g))
                        }
                    }),
                        g.__c === d && (h = 0),
                        typeof u == "string" && (Fa(u) || u === "p" || u === "a" || u === "button")) {
                        var T = zc(E);
                        if (T !== "" && Fa(u))
                            u === "table" && T !== "td" && Fa(T) ? console.error("Improper nesting of table. Your <table> should not have a table-node parent." + Qe(g) + `

` + ge(g)) : u !== "thead" && u !== "tfoot" && u !== "tbody" || T === "table" ? u === "tr" && T !== "thead" && T !== "tfoot" && T !== "tbody" ? console.error("Improper nesting of table. Your <tr> should have a <thead/tbody/tfoot> parent." + Qe(g) + `

` + ge(g)) : u === "td" && T !== "tr" ? console.error("Improper nesting of table. Your <td> should have a <tr> parent." + Qe(g) + `

` + ge(g)) : u === "th" && T !== "tr" && console.error("Improper nesting of table. Your <th> should have a <tr>." + Qe(g) + `

` + ge(g)) : console.error("Improper nesting of table. Your <thead/tbody/tfoot> should have a <table> parent." + Qe(g) + `

` + ge(g));
                        else if (u === "p") {
                            var y = Oa(g).filter(function (z) {
                                return Rd.test(z)
                            });
                            y.length && console.error("Improper nesting of paragraph. Your <p> should not have " + y.join(", ") + " as child-elements." + Qe(g) + `

` + ge(g))
                        } else
                            u !== "a" && u !== "button" || Oa(g).indexOf(u) !== -1 && console.error("Improper nesting of interactive content. Your <" + u + "> should not have other " + (u === "a" ? "anchor" : "button") + " tags as child-elements." + Qe(g) + `

` + ge(g))
                    }
                    if (n = !1,
                        e && e(g),
                        g.__k != null)
                        for (var C = [], R = 0; R < g.__k.length; R++) {
                            var D = g.__k[R];
                            if (D && D.key != null) {
                                var N = D.key;
                                if (C.indexOf(N) !== -1) {
                                    console.error('Following component has two or more children with the same key attribute: "' + N + `". This may cause glitches and misbehavior in rendering process. Component:

` + Qe(g) + `

` + ge(g));
                                    break
                                }
                                C.push(N)
                            }
                        }
                    if (g.__c != null && g.__c.__H != null) {
                        var S = g.__c.__H.__;
                        if (S)
                            for (var M = 0; M < S.length; M += 1) {
                                var w = S[M];
                                if (w.__H) {
                                    for (var V = 0; V < w.__H.length; V++)
                                        if ((m = w.__H[V]) != m) {
                                            var H = mn(g);
                                            console.warn("Invalid argument passed to hook. Hooks should not be called with NaN in the dependency array. Hook index " + M + " in component " + H + " was called with NaN.")
                                        }
                                }
                            }
                    }
                }
        }
        )();
    var xs, de, Ba, kc, pr = 0, Zc = [], fe = _t, Vc = fe.__b, Hc = fe.__r, Gc = fe.diffed, Wc = fe.__c, Xc = fe.unmount, qc = fe.__;
    function ka(n, t) {
        fe.__h && fe.__h(de, n, pr || t),
            pr = 0;
        var e = de.__H || (de.__H = {
            __: [],
            __h: []
        });
        return n >= e.__.length && e.__.push({}),
            e.__[n]
    }
    function mr(n) {
        return pr = 1,
            Id(Jc, n)
    }
    function Id(n, t, e) {
        var i = ka(xs++, 2);
        if (i.t = n,
            !i.__c && (i.__ = [e ? e(t) : Jc(void 0, t), function (a) {
                var c = i.__N ? i.__N[0] : i.__[0]
                    , l = i.t(c, a);
                c !== l && (i.__N = [l, i.__[1]],
                    i.__c.setState({}))
            }
            ],
                i.__c = de,
                !de.__f)) {
            var s = function (a, c, l) {
                if (!i.__c.__H)
                    return !0;
                var d = i.__c.__H.__.filter(function (f) {
                    return !!f.__c
                });
                if (d.every(function (f) {
                    return !f.__N
                }))
                    return !r || r.call(this, a, c, l);
                var h = i.__c.props !== a;
                return d.forEach(function (f) {
                    if (f.__N) {
                        var p = f.__[0];
                        f.__ = f.__N,
                            f.__N = void 0,
                            p !== f.__[0] && (h = !0)
                    }
                }),
                    r && r.call(this, a, c, l) || h
            };
            de.__f = !0;
            var r = de.shouldComponentUpdate
                , o = de.componentWillUpdate;
            de.componentWillUpdate = function (a, c, l) {
                if (this.__e) {
                    var d = r;
                    r = void 0,
                        s(a, c, l),
                        r = d
                }
                o && o.call(this, a, c, l)
            }
                ,
                de.shouldComponentUpdate = s
        }
        return i.__N || i.__
    }
    function gr(n, t) {
        var e = ka(xs++, 3);
        !fe.__s && $c(e.__H, t) && (e.__ = n,
            e.u = t,
            de.__H.__h.push(e))
    }
    function Va(n) {
        return pr = 5,
            Ha(function () {
                return {
                    current: n
                }
            }, [])
    }
    function Ha(n, t) {
        var e = ka(xs++, 7);
        return $c(e.__H, t) && (e.__ = n(),
            e.__H = t,
            e.__h = n),
            e.__
    }
    function Dd() {
        for (var n; n = Zc.shift();)
            if (n.__P && n.__H)
                try {
                    n.__H.__h.forEach(fr),
                        n.__H.__h.forEach(za),
                        n.__H.__h = []
                } catch (t) {
                    n.__H.__h = [],
                        fe.__e(t, n.__v)
                }
    }
    fe.__b = function (n) {
        de = null,
            Vc && Vc(n)
    }
        ,
        fe.__ = function (n, t) {
            n && t.__k && t.__k.__m && (n.__m = t.__k.__m),
                qc && qc(n, t)
        }
        ,
        fe.__r = function (n) {
            Hc && Hc(n),
                xs = 0;
            var t = (de = n.__c).__H;
            t && (Ba === de ? (t.__h = [],
                de.__h = [],
                t.__.forEach(function (e) {
                    e.__N && (e.__ = e.__N),
                        e.u = e.__N = void 0
                })) : (t.__h.forEach(fr),
                    t.__h.forEach(za),
                    t.__h = [],
                    xs = 0)),
                Ba = de
        }
        ,
        fe.diffed = function (n) {
            Gc && Gc(n);
            var t = n.__c;
            t && t.__H && (t.__H.__h.length && (Zc.push(t) !== 1 && kc === fe.requestAnimationFrame || ((kc = fe.requestAnimationFrame) || Ld)(Dd)),
                t.__H.__.forEach(function (e) {
                    e.u && (e.__H = e.u),
                        e.u = void 0
                })),
                Ba = de = null
        }
        ,
        fe.__c = function (n, t) {
            t.some(function (e) {
                try {
                    e.__h.forEach(fr),
                        e.__h = e.__h.filter(function (i) {
                            return !i.__ || za(i)
                        })
                } catch (i) {
                    t.some(function (s) {
                        s.__h && (s.__h = [])
                    }),
                        t = [],
                        fe.__e(i, e.__v)
                }
            }),
                Wc && Wc(n, t)
        }
        ,
        fe.unmount = function (n) {
            Xc && Xc(n);
            var t, e = n.__c;
            e && e.__H && (e.__H.__.forEach(function (i) {
                try {
                    fr(i)
                } catch (s) {
                    t = s
                }
            }),
                e.__H = void 0,
                t && fe.__e(t, e.__v))
        }
        ;
    var Yc = typeof requestAnimationFrame == "function";
    function Ld(n) {
        var t, e = function () {
            clearTimeout(i),
                Yc && cancelAnimationFrame(t),
                setTimeout(n)
        }, i = setTimeout(e, 35);
        Yc && (t = requestAnimationFrame(e))
    }
    function fr(n) {
        var t = de
            , e = n.__c;
        typeof e == "function" && (n.__c = void 0,
            e()),
            de = t
    }
    function za(n) {
        var t = de;
        n.__c = n.__(),
            de = t
    }
    function $c(n, t) {
        return !n || n.length !== t.length || t.some(function (e, i) {
            return e !== n[i]
        })
    }
    function Jc(n, t) {
        return typeof t == "function" ? t(n) : t
    }
    var Ud = Symbol.for("preact-signals");
    function vr() {
        if (On > 1)
            On--;
        else {
            for (var n, t = !1; ys !== void 0;) {
                var e = ys;
                for (ys = void 0,
                    Ga++; e !== void 0;) {
                    var i = e.o;
                    if (e.o = void 0,
                        e.f &= -3,
                        !(8 & e.f) && jc(e))
                        try {
                            e.c()
                        } catch (s) {
                            t || (n = s,
                                t = !0)
                        }
                    e = i
                }
            }
            if (Ga = 0,
                On--,
                t)
                throw n
        }
    }
    function Wa(n) {
        if (On > 0)
            return n();
        On++;
        try {
            return n()
        } finally {
            vr()
        }
    }
    var Yt = void 0;
    function Di(n) {
        var t = Yt;
        Yt = void 0;
        try {
            return n()
        } finally {
            Yt = t
        }
    }
    var ys = void 0
        , On = 0
        , Ga = 0
        , _r = 0;
    function Kc(n) {
        if (Yt !== void 0) {
            var t = n.n;
            if (t === void 0 || t.t !== Yt)
                return t = {
                    i: 0,
                    S: n,
                    p: Yt.s,
                    n: void 0,
                    t: Yt,
                    e: void 0,
                    x: void 0,
                    r: t
                },
                    Yt.s !== void 0 && (Yt.s.n = t),
                    Yt.s = t,
                    n.n = t,
                    32 & Yt.f && n.S(t),
                    t;
            if (t.i === -1)
                return t.i = 0,
                    t.n !== void 0 && (t.n.p = t.p,
                        t.p !== void 0 && (t.p.n = t.n),
                        t.p = Yt.s,
                        t.n = void 0,
                        Yt.s.n = t,
                        Yt.s = t),
                    t
        }
    }
    function _e(n, t) {
        this.v = n,
            this.i = 0,
            this.n = void 0,
            this.t = void 0,
            this.W = t == null ? void 0 : t.watched,
            this.Z = t == null ? void 0 : t.unwatched,
            this.name = t == null ? void 0 : t.name
    }
    _e.prototype.brand = Ud;
    _e.prototype.h = function () {
        return !0
    }
        ;
    _e.prototype.S = function (n) {
        var t = this
            , e = this.t;
        e !== n && n.e === void 0 && (n.x = e,
            this.t = n,
            e !== void 0 ? e.e = n : Di(function () {
                var i;
                (i = t.W) == null || i.call(t)
            }))
    }
        ;
    _e.prototype.U = function (n) {
        var t = this;
        if (this.t !== void 0) {
            var e = n.e
                , i = n.x;
            e !== void 0 && (e.x = i,
                n.e = void 0),
                i !== void 0 && (i.e = e,
                    n.x = void 0),
                n === this.t && (this.t = i,
                    i === void 0 && Di(function () {
                        var s;
                        (s = t.Z) == null || s.call(t)
                    }))
        }
    }
        ;
    _e.prototype.subscribe = function (n) {
        var t = this;
        return gn(function () {
            var e = t.value
                , i = Yt;
            Yt = void 0;
            try {
                n(e)
            } finally {
                Yt = i
            }
        }, {
            name: "sub"
        })
    }
        ;
    _e.prototype.valueOf = function () {
        return this.value
    }
        ;
    _e.prototype.toString = function () {
        return this.value + ""
    }
        ;
    _e.prototype.toJSON = function () {
        return this.value
    }
        ;
    _e.prototype.peek = function () {
        var n = Yt;
        Yt = void 0;
        try {
            return this.value
        } finally {
            Yt = n
        }
    }
        ;
    Object.defineProperty(_e.prototype, "value", {
        get: function () {
            var n = Kc(this);
            return n !== void 0 && (n.i = this.i),
                this.v
        },
        set: function (n) {
            if (n !== this.v) {
                if (Ga > 100)
                    throw new Error("Cycle detected");
                this.v = n,
                    this.i++,
                    _r++,
                    On++;
                try {
                    for (var t = this.t; t !== void 0; t = t.x)
                        t.t.N()
                } finally {
                    vr()
                }
            }
        }
    });
    function tn(n, t) {
        return new _e(n, t)
    }
    function jc(n) {
        for (var t = n.s; t !== void 0; t = t.n)
            if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i)
                return !0;
        return !1
    }
    function Qc(n) {
        for (var t = n.s; t !== void 0; t = t.n) {
            var e = t.S.n;
            if (e !== void 0 && (t.r = e),
                t.S.n = t,
                t.i = -1,
                t.n === void 0) {
                n.s = t;
                break
            }
        }
    }
    function th(n) {
        for (var t = n.s, e = void 0; t !== void 0;) {
            var i = t.p;
            t.i === -1 ? (t.S.U(t),
                i !== void 0 && (i.n = t.n),
                t.n !== void 0 && (t.n.p = i)) : e = t,
                t.S.n = t.r,
                t.r !== void 0 && (t.r = void 0),
                t = i
        }
        n.s = e
    }
    function ri(n, t) {
        _e.call(this, void 0),
            this.x = n,
            this.s = void 0,
            this.g = _r - 1,
            this.f = 4,
            this.W = t == null ? void 0 : t.watched,
            this.Z = t == null ? void 0 : t.unwatched,
            this.name = t == null ? void 0 : t.name
    }
    ri.prototype = new _e;
    ri.prototype.h = function () {
        if (this.f &= -3,
            1 & this.f)
            return !1;
        if ((36 & this.f) == 32 || (this.f &= -5,
            this.g === _r))
            return !0;
        if (this.g = _r,
            this.f |= 1,
            this.i > 0 && !jc(this))
            return this.f &= -2,
                !0;
        var n = Yt;
        try {
            Qc(this),
                Yt = this;
            var t = this.x();
            (16 & this.f || this.v !== t || this.i === 0) && (this.v = t,
                this.f &= -17,
                this.i++)
        } catch (e) {
            this.v = e,
                this.f |= 16,
                this.i++
        }
        return Yt = n,
            th(this),
            this.f &= -2,
            !0
    }
        ;
    ri.prototype.S = function (n) {
        if (this.t === void 0) {
            this.f |= 36;
            for (var t = this.s; t !== void 0; t = t.n)
                t.S.S(t)
        }
        _e.prototype.S.call(this, n)
    }
        ;
    ri.prototype.U = function (n) {
        if (this.t !== void 0 && (_e.prototype.U.call(this, n),
            this.t === void 0)) {
            this.f &= -33;
            for (var t = this.s; t !== void 0; t = t.n)
                t.S.U(t)
        }
    }
        ;
    ri.prototype.N = function () {
        if (!(2 & this.f)) {
            this.f |= 6;
            for (var n = this.t; n !== void 0; n = n.x)
                n.t.N()
        }
    }
        ;
    Object.defineProperty(ri.prototype, "value", {
        get: function () {
            if (1 & this.f)
                throw new Error("Cycle detected");
            var n = Kc(this);
            if (this.h(),
                n !== void 0 && (n.i = this.i),
                16 & this.f)
                throw this.v;
            return this.v
        }
    });
    function xr(n, t) {
        return new ri(n, t)
    }
    function eh(n) {
        var t = n.u;
        if (n.u = void 0,
            typeof t == "function") {
            On++;
            var e = Yt;
            Yt = void 0;
            try {
                t()
            } catch (i) {
                throw n.f &= -2,
                n.f |= 8,
                Xa(n),
                i
            } finally {
                Yt = e,
                    vr()
            }
        }
    }
    function Xa(n) {
        for (var t = n.s; t !== void 0; t = t.n)
            t.S.U(t);
        n.x = void 0,
            n.s = void 0,
            eh(n)
    }
    function Nd(n) {
        if (Yt !== this)
            throw new Error("Out-of-order effect");
        th(this),
            Yt = n,
            this.f &= -2,
            8 & this.f && Xa(this),
            vr()
    }
    function Li(n, t) {
        this.x = n,
            this.u = void 0,
            this.s = void 0,
            this.o = void 0,
            this.f = 32,
            this.name = t == null ? void 0 : t.name
    }
    Li.prototype.c = function () {
        var n = this.S();
        try {
            if (8 & this.f || this.x === void 0)
                return;
            var t = this.x();
            typeof t == "function" && (this.u = t)
        } finally {
            n()
        }
    }
        ;
    Li.prototype.S = function () {
        if (1 & this.f)
            throw new Error("Cycle detected");
        this.f |= 1,
            this.f &= -9,
            eh(this),
            Qc(this),
            On++;
        var n = Yt;
        return Yt = this,
            Nd.bind(this, n)
    }
        ;
    Li.prototype.N = function () {
        2 & this.f || (this.f |= 2,
            this.o = ys,
            ys = this)
    }
        ;
    Li.prototype.d = function () {
        this.f |= 8,
            1 & this.f || Xa(this)
    }
        ;
    Li.prototype.dispose = function () {
        this.d()
    }
        ;
    function gn(n, t) {
        var e = new Li(n, t);
        try {
            e.c()
        } catch (s) {
            throw e.d(),
            s
        }
        var i = e.d.bind(e);
        return i[Symbol.dispose] = i,
            i
    }
    var nh, Ya, qa;
    var ih = [];
    gn(function () {
        nh = this.N
    })();
    function Ui(n, t) {
        _t[n] = t.bind(null, _t[n] || function () { }
        )
    }
    function yr(n) {
        qa && qa(),
            qa = n && n.S()
    }
    function sh(n) {
        var t = this
            , e = n.data
            , i = Od(e);
        i.value = e;
        var s = Ha(function () {
            for (var a = t, c = t.__v; c = c.__;)
                if (c.__c) {
                    c.__c.__$f |= 4;
                    break
                }
            var l = xr(function () {
                var p = i.value.value;
                return p === 0 ? 0 : p === !0 ? "" : p || ""
            })
                , d = xr(function () {
                    return !Array.isArray(l.value) && !Ra(l.value)
                })
                , h = gn(function () {
                    if (this.N = rh,
                        d.value) {
                        var p = l.value;
                        a.__v && a.__v.__e && a.__v.__e.nodeType === 3 && (a.__v.__e.data = p)
                    }
                })
                , f = t.__$u.d;
            return t.__$u.d = function () {
                h(),
                    f.call(this)
            }
                ,
                [d, l]
        }, [])
            , r = s[0]
            , o = s[1];
        return r.value ? o.peek() : o.value
    }
    sh.displayName = "ReactiveTextNode";
    Object.defineProperties(_e.prototype, {
        constructor: {
            configurable: !0,
            value: void 0
        },
        type: {
            configurable: !0,
            value: sh
        },
        props: {
            configurable: !0,
            get: function () {
                return {
                    data: this
                }
            }
        },
        __b: {
            configurable: !0,
            value: 1
        }
    });
    Ui("__b", function (n, t) {
        if (typeof t.type == "function" && typeof window != "undefined" && window.__PREACT_SIGNALS_DEVTOOLS__ && window.__PREACT_SIGNALS_DEVTOOLS__.exitComponent(),
            typeof t.type == "string") {
            var e, i = t.props;
            for (var s in i)
                if (s !== "children") {
                    var r = i[s];
                    r instanceof _e && (e || (t.__np = e = {}),
                        e[s] = r,
                        i[s] = r.peek())
                }
        }
        n(t)
    });
    Ui("__r", function (n, t) {
        if (typeof t.type == "function" && typeof window != "undefined" && window.__PREACT_SIGNALS_DEVTOOLS__ && window.__PREACT_SIGNALS_DEVTOOLS__.enterComponent(t.type.displayName || t.type.name || "Unknown"),
            t.type !== He) {
            yr();
            var e, i = t.__c;
            i && (i.__$f &= -2,
                (e = i.__$u) === void 0 && (i.__$u = e = (function (s) {
                    var r;
                    return gn(function () {
                        r = this
                    }),
                        r.c = function () {
                            i.__$f |= 1,
                                i.setState({})
                        }
                        ,
                        r
                }
                )())),
                Ya = i,
                yr(e)
        }
        n(t)
    });
    Ui("__e", function (n, t, e, i) {
        typeof window != "undefined" && window.__PREACT_SIGNALS_DEVTOOLS__ && window.__PREACT_SIGNALS_DEVTOOLS__.exitComponent(),
            yr(),
            Ya = void 0,
            n(t, e, i)
    });
    Ui("diffed", function (n, t) {
        typeof t.type == "function" && typeof window != "undefined" && window.__PREACT_SIGNALS_DEVTOOLS__ && window.__PREACT_SIGNALS_DEVTOOLS__.exitComponent(),
            yr(),
            Ya = void 0;
        var e;
        if (typeof t.type == "string" && (e = t.__e)) {
            var i = t.__np
                , s = t.props;
            if (i) {
                var r = e.U;
                if (r)
                    for (var o in r) {
                        var a = r[o];
                        a !== void 0 && !(o in i) && (a.d(),
                            r[o] = void 0)
                    }
                else
                    r = {},
                        e.U = r;
                for (var c in i) {
                    var l = r[c]
                        , d = i[c];
                    l === void 0 ? (l = Fd(e, c, d, s),
                        r[c] = l) : l.o(d, s)
                }
            }
        }
        n(t)
    });
    function Fd(n, t, e, i) {
        var s = t in n && n.ownerSVGElement === void 0
            , r = tn(e);
        return {
            o: function (o, a) {
                r.value = o,
                    i = a
            },
            d: gn(function () {
                this.N = rh;
                var o = r.value.value;
                i[t] !== o && (i[t] = o,
                    s ? n[t] = o : o ? n.setAttribute(t, o) : n.removeAttribute(t))
            })
        }
    }
    Ui("unmount", function (n, t) {
        if (typeof t.type == "string") {
            var e = t.__e;
            if (e) {
                var i = e.U;
                if (i) {
                    e.U = void 0;
                    for (var s in i) {
                        var r = i[s];
                        r && r.d()
                    }
                }
            }
        } else {
            var o = t.__c;
            if (o) {
                var a = o.__$u;
                a && (o.__$u = void 0,
                    a.d())
            }
        }
        n(t)
    });
    Ui("__h", function (n, t, e, i) {
        (i < 3 || i === 9) && (t.__$f |= 2),
            n(t, e, i)
    });
    Ve.prototype.shouldComponentUpdate = function (n, t) {
        var e = this.__$u
            , i = e && e.s !== void 0;
        for (var s in t)
            return !0;
        if (this.__f || typeof this.u == "boolean" && this.u === !0) {
            var r = 2 & this.__$f;
            if (!(i || r || 4 & this.__$f) || 1 & this.__$f)
                return !0
        } else if (!(i || 4 & this.__$f) || 3 & this.__$f)
            return !0;
        for (var o in n)
            if (o !== "__source" && n[o] !== this.props[o])
                return !0;
        for (var a in this.props)
            if (!(a in n))
                return !0;
        return !1
    }
        ;
    function Od(n, t) {
        return mr(function () {
            return tn(n, t)
        })[0]
    }
    var Bd = function (n) {
        queueMicrotask(function () {
            queueMicrotask(n)
        })
    };
    function zd() {
        Wa(function () {
            for (var n; n = ih.shift();)
                nh.call(n)
        })
    }
    function rh() {
        ih.push(this) === 1 && (_t.requestAnimationFrame || Bd)(zd)
    }
    var Kn = {
        LEFT: 0,
        MIDDLE: 1,
        RIGHT: 2,
        ROTATE: 0,
        DOLLY: 1,
        PAN: 2
    }
        , jn = {
            ROTATE: 0,
            PAN: 1,
            DOLLY_PAN: 2,
            DOLLY_ROTATE: 3
        }
        , wh = 0
        , Sl = 1
        , Ah = 2;
    var bl = 1
        , Ch = 2
        , xn = 3
        , Ln = 0
        , De = 1
        , yn = 2
        , un = 0
        , ui = 1
        , xi = 2
        , Tl = 3
        , El = 4
        , Rh = 5
        , qn = 100
        , Ph = 101
        , Ih = 102
        , Dh = 103
        , Lh = 104
        , Uh = 200
        , Nh = 201
        , Fh = 202
        , Oh = 203
        , Hr = 204
        , Gr = 205
        , Bh = 206
        , zh = 207
        , kh = 208
        , Vh = 209
        , Hh = 210
        , Gh = 211
        , Wh = 212
        , Xh = 213
        , qh = 214
        , fo = 0
        , po = 1
        , mo = 2
        , di = 3
        , go = 4
        , _o = 5
        , vo = 6
        , xo = 7
        , wl = 0
        , Yh = 1
        , Zh = 2
        , Un = 0
        , $h = 1
        , Jh = 2
        , Kh = 3
        , yo = 4
        , jh = 5
        , Qh = 6
        , tu = 7;
    var Al = 300
        , yi = 301
        , Mi = 302
        , Mo = 303
        , So = 304
        , Ys = 306
        , Wr = 1e3
        , Xn = 1001
        , Xr = 1002
        , sn = 1003
        , eu = 1004;
    var Zs = 1005;
    var Ne = 1006
        , bo = 1007;
    var Qn = 1008;
    var Mn = 1009
        , Cl = 1010
        , Rl = 1011
        , is = 1012
        , To = 1013
        , ti = 1014
        , Sn = 1015
        , on = 1016
        , Eo = 1017
        , wo = 1018
        , ss = 1020
        , Pl = 35902
        , Il = 1021
        , Dl = 1022
        , Oe = 1023
        , $i = 1026
        , rs = 1027
        , Ll = 1028
        , Ao = 1029
        , Ul = 1030
        , Co = 1031;
    var Ro = 1033
        , $s = 33776
        , Js = 33777
        , Ks = 33778
        , js = 33779
        , Po = 35840
        , Io = 35841
        , Do = 35842
        , Lo = 35843
        , Uo = 36196
        , No = 37492
        , Fo = 37496
        , Oo = 37808
        , Bo = 37809
        , zo = 37810
        , ko = 37811
        , Vo = 37812
        , Ho = 37813
        , Go = 37814
        , Wo = 37815
        , Xo = 37816
        , qo = 37817
        , Yo = 37818
        , Zo = 37819
        , $o = 37820
        , Jo = 37821
        , Qs = 36492
        , Ko = 36494
        , jo = 36495
        , Nl = 36283
        , Qo = 36284
        , ta = 36285
        , ea = 36286;
    var Cs = 2300
        , qr = 2301
        , Vr = 2302
        , gl = 2400
        , _l = 2401
        , vl = 2402;
    var nu = 3200
        , iu = 3201;
    var su = 0
        , ru = 1
        , Nn = ""
        , Xe = "srgb"
        , fi = "srgb-linear"
        , Rs = "linear"
        , Zt = "srgb";
    var hi = 7680;
    var xl = 519
        , ou = 512
        , au = 513
        , lu = 514
        , Fl = 515
        , cu = 516
        , hu = 517
        , uu = 518
        , du = 519
        , yl = 35044;
    var Ol = "300 es"
        , hn = 2e3
        , Ps = 2001;
    var _n = class {
        addEventListener(t, e) {
            this._listeners === void 0 && (this._listeners = {});
            let i = this._listeners;
            i[t] === void 0 && (i[t] = []),
                i[t].indexOf(e) === -1 && i[t].push(e)
        }
        hasEventListener(t, e) {
            let i = this._listeners;
            return i === void 0 ? !1 : i[t] !== void 0 && i[t].indexOf(e) !== -1
        }
        removeEventListener(t, e) {
            let i = this._listeners;
            if (i === void 0)
                return;
            let s = i[t];
            if (s !== void 0) {
                let r = s.indexOf(e);
                r !== -1 && s.splice(r, 1)
            }
        }
        dispatchEvent(t) {
            let e = this._listeners;
            if (e === void 0)
                return;
            let i = e[t.type];
            if (i !== void 0) {
                t.target = this;
                let s = i.slice(0);
                for (let r = 0, o = s.length; r < o; r++)
                    s[r].call(this, t);
                t.target = null
            }
        }
    }
        , Ee = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"]
        , oh = 1234567
        , ws = Math.PI / 180
        , Ji = 180 / Math.PI;
    function os() {
        let n = Math.random() * 4294967295 | 0
            , t = Math.random() * 4294967295 | 0
            , e = Math.random() * 4294967295 | 0
            , i = Math.random() * 4294967295 | 0;
        return (Ee[n & 255] + Ee[n >> 8 & 255] + Ee[n >> 16 & 255] + Ee[n >> 24 & 255] + "-" + Ee[t & 255] + Ee[t >> 8 & 255] + "-" + Ee[t >> 16 & 15 | 64] + Ee[t >> 24 & 255] + "-" + Ee[e & 63 | 128] + Ee[e >> 8 & 255] + "-" + Ee[e >> 16 & 255] + Ee[e >> 24 & 255] + Ee[i & 255] + Ee[i >> 8 & 255] + Ee[i >> 16 & 255] + Ee[i >> 24 & 255]).toLowerCase()
    }
    function kt(n, t, e) {
        return Math.max(t, Math.min(e, n))
    }
    function Bl(n, t) {
        return (n % t + t) % t
    }
    function kd(n, t, e, i, s) {
        return i + (n - t) * (s - i) / (e - t)
    }
    function Vd(n, t, e) {
        return n !== t ? (e - n) / (t - n) : 0
    }
    function As(n, t, e) {
        return (1 - e) * n + e * t
    }
    function Hd(n, t, e, i) {
        return As(n, t, 1 - Math.exp(-e * i))
    }
    function Gd(n, t = 1) {
        return t - Math.abs(Bl(n, t * 2) - t)
    }
    function Wd(n, t, e) {
        return n <= t ? 0 : n >= e ? 1 : (n = (n - t) / (e - t),
            n * n * (3 - 2 * n))
    }
    function Xd(n, t, e) {
        return n <= t ? 0 : n >= e ? 1 : (n = (n - t) / (e - t),
            n * n * n * (n * (n * 6 - 15) + 10))
    }
    function qd(n, t) {
        return n + Math.floor(Math.random() * (t - n + 1))
    }
    function Yd(n, t) {
        return n + Math.random() * (t - n)
    }
    function Zd(n) {
        return n * (.5 - Math.random())
    }
    function $d(n) {
        n !== void 0 && (oh = n);
        let t = oh += 1831565813;
        return t = Math.imul(t ^ t >>> 15, t | 1),
            t ^= t + Math.imul(t ^ t >>> 7, t | 61),
            ((t ^ t >>> 14) >>> 0) / 4294967296
    }
    function Jd(n) {
        return n * ws
    }
    function Kd(n) {
        return n * Ji
    }
    function jd(n) {
        return (n & n - 1) === 0 && n !== 0
    }
    function Qd(n) {
        return Math.pow(2, Math.ceil(Math.log(n) / Math.LN2))
    }
    function tf(n) {
        return Math.pow(2, Math.floor(Math.log(n) / Math.LN2))
    }
    function ef(n, t, e, i, s) {
        let r = Math.cos
            , o = Math.sin
            , a = r(e / 2)
            , c = o(e / 2)
            , l = r((t + i) / 2)
            , d = o((t + i) / 2)
            , h = r((t - i) / 2)
            , f = o((t - i) / 2)
            , p = r((i - t) / 2)
            , v = o((i - t) / 2);
        switch (s) {
            case "XYX":
                n.set(a * d, c * h, c * f, a * l);
                break;
            case "YZY":
                n.set(c * f, a * d, c * h, a * l);
                break;
            case "ZXZ":
                n.set(c * h, c * f, a * d, a * l);
                break;
            case "XZX":
                n.set(a * d, c * v, c * p, a * l);
                break;
            case "YXY":
                n.set(c * p, a * d, c * v, a * l);
                break;
            case "ZYZ":
                n.set(c * v, c * p, a * d, a * l);
                break;
            default:
                console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + s)
        }
    }
    function Yi(n, t) {
        switch (t.constructor) {
            case Float32Array:
                return n;
            case Uint32Array:
                return n / 4294967295;
            case Uint16Array:
                return n / 65535;
            case Uint8Array:
                return n / 255;
            case Int32Array:
                return Math.max(n / 2147483647, -1);
            case Int16Array:
                return Math.max(n / 32767, -1);
            case Int8Array:
                return Math.max(n / 127, -1);
            default:
                throw new Error("Invalid component type.")
        }
    }
    function Ie(n, t) {
        switch (t.constructor) {
            case Float32Array:
                return n;
            case Uint32Array:
                return Math.round(n * 4294967295);
            case Uint16Array:
                return Math.round(n * 65535);
            case Uint8Array:
                return Math.round(n * 255);
            case Int32Array:
                return Math.round(n * 2147483647);
            case Int16Array:
                return Math.round(n * 32767);
            case Int8Array:
                return Math.round(n * 127);
            default:
                throw new Error("Invalid component type.")
        }
    }
    var zl = {
        DEG2RAD: ws,
        RAD2DEG: Ji,
        generateUUID: os,
        clamp: kt,
        euclideanModulo: Bl,
        mapLinear: kd,
        inverseLerp: Vd,
        lerp: As,
        damp: Hd,
        pingpong: Gd,
        smoothstep: Wd,
        smootherstep: Xd,
        randInt: qd,
        randFloat: Yd,
        randFloatSpread: Zd,
        seededRandom: $d,
        degToRad: Jd,
        radToDeg: Kd,
        isPowerOfTwo: jd,
        ceilPowerOfTwo: Qd,
        floorPowerOfTwo: tf,
        setQuaternionFromProperEuler: ef,
        normalize: Ie,
        denormalize: Yi
    }
        , Mt = class n {
            constructor(t = 0, e = 0) {
                n.prototype.isVector2 = !0,
                    this.x = t,
                    this.y = e
            }
            get width() {
                return this.x
            }
            set width(t) {
                this.x = t
            }
            get height() {
                return this.y
            }
            set height(t) {
                this.y = t
            }
            set(t, e) {
                return this.x = t,
                    this.y = e,
                    this
            }
            setScalar(t) {
                return this.x = t,
                    this.y = t,
                    this
            }
            setX(t) {
                return this.x = t,
                    this
            }
            setY(t) {
                return this.y = t,
                    this
            }
            setComponent(t, e) {
                switch (t) {
                    case 0:
                        this.x = e;
                        break;
                    case 1:
                        this.y = e;
                        break;
                    default:
                        throw new Error("index is out of range: " + t)
                }
                return this
            }
            getComponent(t) {
                switch (t) {
                    case 0:
                        return this.x;
                    case 1:
                        return this.y;
                    default:
                        throw new Error("index is out of range: " + t)
                }
            }
            clone() {
                return new this.constructor(this.x, this.y)
            }
            copy(t) {
                return this.x = t.x,
                    this.y = t.y,
                    this
            }
            add(t) {
                return this.x += t.x,
                    this.y += t.y,
                    this
            }
            addScalar(t) {
                return this.x += t,
                    this.y += t,
                    this
            }
            addVectors(t, e) {
                return this.x = t.x + e.x,
                    this.y = t.y + e.y,
                    this
            }
            addScaledVector(t, e) {
                return this.x += t.x * e,
                    this.y += t.y * e,
                    this
            }
            sub(t) {
                return this.x -= t.x,
                    this.y -= t.y,
                    this
            }
            subScalar(t) {
                return this.x -= t,
                    this.y -= t,
                    this
            }
            subVectors(t, e) {
                return this.x = t.x - e.x,
                    this.y = t.y - e.y,
                    this
            }
            multiply(t) {
                return this.x *= t.x,
                    this.y *= t.y,
                    this
            }
            multiplyScalar(t) {
                return this.x *= t,
                    this.y *= t,
                    this
            }
            divide(t) {
                return this.x /= t.x,
                    this.y /= t.y,
                    this
            }
            divideScalar(t) {
                return this.multiplyScalar(1 / t)
            }
            applyMatrix3(t) {
                let e = this.x
                    , i = this.y
                    , s = t.elements;
                return this.x = s[0] * e + s[3] * i + s[6],
                    this.y = s[1] * e + s[4] * i + s[7],
                    this
            }
            min(t) {
                return this.x = Math.min(this.x, t.x),
                    this.y = Math.min(this.y, t.y),
                    this
            }
            max(t) {
                return this.x = Math.max(this.x, t.x),
                    this.y = Math.max(this.y, t.y),
                    this
            }
            clamp(t, e) {
                return this.x = kt(this.x, t.x, e.x),
                    this.y = kt(this.y, t.y, e.y),
                    this
            }
            clampScalar(t, e) {
                return this.x = kt(this.x, t, e),
                    this.y = kt(this.y, t, e),
                    this
            }
            clampLength(t, e) {
                let i = this.length();
                return this.divideScalar(i || 1).multiplyScalar(kt(i, t, e))
            }
            floor() {
                return this.x = Math.floor(this.x),
                    this.y = Math.floor(this.y),
                    this
            }
            ceil() {
                return this.x = Math.ceil(this.x),
                    this.y = Math.ceil(this.y),
                    this
            }
            round() {
                return this.x = Math.round(this.x),
                    this.y = Math.round(this.y),
                    this
            }
            roundToZero() {
                return this.x = Math.trunc(this.x),
                    this.y = Math.trunc(this.y),
                    this
            }
            negate() {
                return this.x = -this.x,
                    this.y = -this.y,
                    this
            }
            dot(t) {
                return this.x * t.x + this.y * t.y
            }
            cross(t) {
                return this.x * t.y - this.y * t.x
            }
            lengthSq() {
                return this.x * this.x + this.y * this.y
            }
            length() {
                return Math.sqrt(this.x * this.x + this.y * this.y)
            }
            manhattanLength() {
                return Math.abs(this.x) + Math.abs(this.y)
            }
            normalize() {
                return this.divideScalar(this.length() || 1)
            }
            angle() {
                return Math.atan2(-this.y, -this.x) + Math.PI
            }
            angleTo(t) {
                let e = Math.sqrt(this.lengthSq() * t.lengthSq());
                if (e === 0)
                    return Math.PI / 2;
                let i = this.dot(t) / e;
                return Math.acos(kt(i, -1, 1))
            }
            distanceTo(t) {
                return Math.sqrt(this.distanceToSquared(t))
            }
            distanceToSquared(t) {
                let e = this.x - t.x
                    , i = this.y - t.y;
                return e * e + i * i
            }
            manhattanDistanceTo(t) {
                return Math.abs(this.x - t.x) + Math.abs(this.y - t.y)
            }
            setLength(t) {
                return this.normalize().multiplyScalar(t)
            }
            lerp(t, e) {
                return this.x += (t.x - this.x) * e,
                    this.y += (t.y - this.y) * e,
                    this
            }
            lerpVectors(t, e, i) {
                return this.x = t.x + (e.x - t.x) * i,
                    this.y = t.y + (e.y - t.y) * i,
                    this
            }
            equals(t) {
                return t.x === this.x && t.y === this.y
            }
            fromArray(t, e = 0) {
                return this.x = t[e],
                    this.y = t[e + 1],
                    this
            }
            toArray(t = [], e = 0) {
                return t[e] = this.x,
                    t[e + 1] = this.y,
                    t
            }
            fromBufferAttribute(t, e) {
                return this.x = t.getX(e),
                    this.y = t.getY(e),
                    this
            }
            rotateAround(t, e) {
                let i = Math.cos(e)
                    , s = Math.sin(e)
                    , r = this.x - t.x
                    , o = this.y - t.y;
                return this.x = r * i - o * s + t.x,
                    this.y = r * s + o * i + t.y,
                    this
            }
            random() {
                return this.x = Math.random(),
                    this.y = Math.random(),
                    this
            }
            *[Symbol.iterator]() {
                yield this.x,
                    yield this.y
            }
        }
        , rn = class {
            constructor(t = 0, e = 0, i = 0, s = 1) {
                this.isQuaternion = !0,
                    this._x = t,
                    this._y = e,
                    this._z = i,
                    this._w = s
            }
            static slerpFlat(t, e, i, s, r, o, a) {
                let c = i[s + 0]
                    , l = i[s + 1]
                    , d = i[s + 2]
                    , h = i[s + 3]
                    , f = r[o + 0]
                    , p = r[o + 1]
                    , v = r[o + 2]
                    , g = r[o + 3];
                if (a === 0) {
                    t[e + 0] = c,
                        t[e + 1] = l,
                        t[e + 2] = d,
                        t[e + 3] = h;
                    return
                }
                if (a === 1) {
                    t[e + 0] = f,
                        t[e + 1] = p,
                        t[e + 2] = v,
                        t[e + 3] = g;
                    return
                }
                if (h !== g || c !== f || l !== p || d !== v) {
                    let m = 1 - a
                        , u = c * f + l * p + d * v + h * g
                        , E = u >= 0 ? 1 : -1
                        , T = 1 - u * u;
                    if (T > Number.EPSILON) {
                        let C = Math.sqrt(T)
                            , R = Math.atan2(C, u * E);
                        m = Math.sin(m * R) / C,
                            a = Math.sin(a * R) / C
                    }
                    let y = a * E;
                    if (c = c * m + f * y,
                        l = l * m + p * y,
                        d = d * m + v * y,
                        h = h * m + g * y,
                        m === 1 - a) {
                        let C = 1 / Math.sqrt(c * c + l * l + d * d + h * h);
                        c *= C,
                            l *= C,
                            d *= C,
                            h *= C
                    }
                }
                t[e] = c,
                    t[e + 1] = l,
                    t[e + 2] = d,
                    t[e + 3] = h
            }
            static multiplyQuaternionsFlat(t, e, i, s, r, o) {
                let a = i[s]
                    , c = i[s + 1]
                    , l = i[s + 2]
                    , d = i[s + 3]
                    , h = r[o]
                    , f = r[o + 1]
                    , p = r[o + 2]
                    , v = r[o + 3];
                return t[e] = a * v + d * h + c * p - l * f,
                    t[e + 1] = c * v + d * f + l * h - a * p,
                    t[e + 2] = l * v + d * p + a * f - c * h,
                    t[e + 3] = d * v - a * h - c * f - l * p,
                    t
            }
            get x() {
                return this._x
            }
            set x(t) {
                this._x = t,
                    this._onChangeCallback()
            }
            get y() {
                return this._y
            }
            set y(t) {
                this._y = t,
                    this._onChangeCallback()
            }
            get z() {
                return this._z
            }
            set z(t) {
                this._z = t,
                    this._onChangeCallback()
            }
            get w() {
                return this._w
            }
            set w(t) {
                this._w = t,
                    this._onChangeCallback()
            }
            set(t, e, i, s) {
                return this._x = t,
                    this._y = e,
                    this._z = i,
                    this._w = s,
                    this._onChangeCallback(),
                    this
            }
            clone() {
                return new this.constructor(this._x, this._y, this._z, this._w)
            }
            copy(t) {
                return this._x = t.x,
                    this._y = t.y,
                    this._z = t.z,
                    this._w = t.w,
                    this._onChangeCallback(),
                    this
            }
            setFromEuler(t, e = !0) {
                let i = t._x
                    , s = t._y
                    , r = t._z
                    , o = t._order
                    , a = Math.cos
                    , c = Math.sin
                    , l = a(i / 2)
                    , d = a(s / 2)
                    , h = a(r / 2)
                    , f = c(i / 2)
                    , p = c(s / 2)
                    , v = c(r / 2);
                switch (o) {
                    case "XYZ":
                        this._x = f * d * h + l * p * v,
                            this._y = l * p * h - f * d * v,
                            this._z = l * d * v + f * p * h,
                            this._w = l * d * h - f * p * v;
                        break;
                    case "YXZ":
                        this._x = f * d * h + l * p * v,
                            this._y = l * p * h - f * d * v,
                            this._z = l * d * v - f * p * h,
                            this._w = l * d * h + f * p * v;
                        break;
                    case "ZXY":
                        this._x = f * d * h - l * p * v,
                            this._y = l * p * h + f * d * v,
                            this._z = l * d * v + f * p * h,
                            this._w = l * d * h - f * p * v;
                        break;
                    case "ZYX":
                        this._x = f * d * h - l * p * v,
                            this._y = l * p * h + f * d * v,
                            this._z = l * d * v - f * p * h,
                            this._w = l * d * h + f * p * v;
                        break;
                    case "YZX":
                        this._x = f * d * h + l * p * v,
                            this._y = l * p * h + f * d * v,
                            this._z = l * d * v - f * p * h,
                            this._w = l * d * h - f * p * v;
                        break;
                    case "XZY":
                        this._x = f * d * h - l * p * v,
                            this._y = l * p * h - f * d * v,
                            this._z = l * d * v + f * p * h,
                            this._w = l * d * h + f * p * v;
                        break;
                    default:
                        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o)
                }
                return e === !0 && this._onChangeCallback(),
                    this
            }
            setFromAxisAngle(t, e) {
                let i = e / 2
                    , s = Math.sin(i);
                return this._x = t.x * s,
                    this._y = t.y * s,
                    this._z = t.z * s,
                    this._w = Math.cos(i),
                    this._onChangeCallback(),
                    this
            }
            setFromRotationMatrix(t) {
                let e = t.elements
                    , i = e[0]
                    , s = e[4]
                    , r = e[8]
                    , o = e[1]
                    , a = e[5]
                    , c = e[9]
                    , l = e[2]
                    , d = e[6]
                    , h = e[10]
                    , f = i + a + h;
                if (f > 0) {
                    let p = .5 / Math.sqrt(f + 1);
                    this._w = .25 / p,
                        this._x = (d - c) * p,
                        this._y = (r - l) * p,
                        this._z = (o - s) * p
                } else if (i > a && i > h) {
                    let p = 2 * Math.sqrt(1 + i - a - h);
                    this._w = (d - c) / p,
                        this._x = .25 * p,
                        this._y = (s + o) / p,
                        this._z = (r + l) / p
                } else if (a > h) {
                    let p = 2 * Math.sqrt(1 + a - i - h);
                    this._w = (r - l) / p,
                        this._x = (s + o) / p,
                        this._y = .25 * p,
                        this._z = (c + d) / p
                } else {
                    let p = 2 * Math.sqrt(1 + h - i - a);
                    this._w = (o - s) / p,
                        this._x = (r + l) / p,
                        this._y = (c + d) / p,
                        this._z = .25 * p
                }
                return this._onChangeCallback(),
                    this
            }
            setFromUnitVectors(t, e) {
                let i = t.dot(e) + 1;
                return i < 1e-8 ? (i = 0,
                    Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y,
                        this._y = t.x,
                        this._z = 0,
                        this._w = i) : (this._x = 0,
                            this._y = -t.z,
                            this._z = t.y,
                            this._w = i)) : (this._x = t.y * e.z - t.z * e.y,
                                this._y = t.z * e.x - t.x * e.z,
                                this._z = t.x * e.y - t.y * e.x,
                                this._w = i),
                    this.normalize()
            }
            angleTo(t) {
                return 2 * Math.acos(Math.abs(kt(this.dot(t), -1, 1)))
            }
            rotateTowards(t, e) {
                let i = this.angleTo(t);
                if (i === 0)
                    return this;
                let s = Math.min(1, e / i);
                return this.slerp(t, s),
                    this
            }
            identity() {
                return this.set(0, 0, 0, 1)
            }
            invert() {
                return this.conjugate()
            }
            conjugate() {
                return this._x *= -1,
                    this._y *= -1,
                    this._z *= -1,
                    this._onChangeCallback(),
                    this
            }
            dot(t) {
                return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w
            }
            lengthSq() {
                return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
            }
            length() {
                return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
            }
            normalize() {
                let t = this.length();
                return t === 0 ? (this._x = 0,
                    this._y = 0,
                    this._z = 0,
                    this._w = 1) : (t = 1 / t,
                        this._x = this._x * t,
                        this._y = this._y * t,
                        this._z = this._z * t,
                        this._w = this._w * t),
                    this._onChangeCallback(),
                    this
            }
            multiply(t) {
                return this.multiplyQuaternions(this, t)
            }
            premultiply(t) {
                return this.multiplyQuaternions(t, this)
            }
            multiplyQuaternions(t, e) {
                let i = t._x
                    , s = t._y
                    , r = t._z
                    , o = t._w
                    , a = e._x
                    , c = e._y
                    , l = e._z
                    , d = e._w;
                return this._x = i * d + o * a + s * l - r * c,
                    this._y = s * d + o * c + r * a - i * l,
                    this._z = r * d + o * l + i * c - s * a,
                    this._w = o * d - i * a - s * c - r * l,
                    this._onChangeCallback(),
                    this
            }
            slerp(t, e) {
                if (e === 0)
                    return this;
                if (e === 1)
                    return this.copy(t);
                let i = this._x
                    , s = this._y
                    , r = this._z
                    , o = this._w
                    , a = o * t._w + i * t._x + s * t._y + r * t._z;
                if (a < 0 ? (this._w = -t._w,
                    this._x = -t._x,
                    this._y = -t._y,
                    this._z = -t._z,
                    a = -a) : this.copy(t),
                    a >= 1)
                    return this._w = o,
                        this._x = i,
                        this._y = s,
                        this._z = r,
                        this;
                let c = 1 - a * a;
                if (c <= Number.EPSILON) {
                    let p = 1 - e;
                    return this._w = p * o + e * this._w,
                        this._x = p * i + e * this._x,
                        this._y = p * s + e * this._y,
                        this._z = p * r + e * this._z,
                        this.normalize(),
                        this
                }
                let l = Math.sqrt(c)
                    , d = Math.atan2(l, a)
                    , h = Math.sin((1 - e) * d) / l
                    , f = Math.sin(e * d) / l;
                return this._w = o * h + this._w * f,
                    this._x = i * h + this._x * f,
                    this._y = s * h + this._y * f,
                    this._z = r * h + this._z * f,
                    this._onChangeCallback(),
                    this
            }
            slerpQuaternions(t, e, i) {
                return this.copy(t).slerp(e, i)
            }
            random() {
                let t = 2 * Math.PI * Math.random()
                    , e = 2 * Math.PI * Math.random()
                    , i = Math.random()
                    , s = Math.sqrt(1 - i)
                    , r = Math.sqrt(i);
                return this.set(s * Math.sin(t), s * Math.cos(t), r * Math.sin(e), r * Math.cos(e))
            }
            equals(t) {
                return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w
            }
            fromArray(t, e = 0) {
                return this._x = t[e],
                    this._y = t[e + 1],
                    this._z = t[e + 2],
                    this._w = t[e + 3],
                    this._onChangeCallback(),
                    this
            }
            toArray(t = [], e = 0) {
                return t[e] = this._x,
                    t[e + 1] = this._y,
                    t[e + 2] = this._z,
                    t[e + 3] = this._w,
                    t
            }
            fromBufferAttribute(t, e) {
                return this._x = t.getX(e),
                    this._y = t.getY(e),
                    this._z = t.getZ(e),
                    this._w = t.getW(e),
                    this._onChangeCallback(),
                    this
            }
            toJSON() {
                return this.toArray()
            }
            _onChange(t) {
                return this._onChangeCallback = t,
                    this
            }
            _onChangeCallback() { }
            *[Symbol.iterator]() {
                yield this._x,
                    yield this._y,
                    yield this._z,
                    yield this._w
            }
        }
        , P = class n {
            constructor(t = 0, e = 0, i = 0) {
                n.prototype.isVector3 = !0,
                    this.x = t,
                    this.y = e,
                    this.z = i
            }
            set(t, e, i) {
                return i === void 0 && (i = this.z),
                    this.x = t,
                    this.y = e,
                    this.z = i,
                    this
            }
            setScalar(t) {
                return this.x = t,
                    this.y = t,
                    this.z = t,
                    this
            }
            setX(t) {
                return this.x = t,
                    this
            }
            setY(t) {
                return this.y = t,
                    this
            }
            setZ(t) {
                return this.z = t,
                    this
            }
            setComponent(t, e) {
                switch (t) {
                    case 0:
                        this.x = e;
                        break;
                    case 1:
                        this.y = e;
                        break;
                    case 2:
                        this.z = e;
                        break;
                    default:
                        throw new Error("index is out of range: " + t)
                }
                return this
            }
            getComponent(t) {
                switch (t) {
                    case 0:
                        return this.x;
                    case 1:
                        return this.y;
                    case 2:
                        return this.z;
                    default:
                        throw new Error("index is out of range: " + t)
                }
            }
            clone() {
                return new this.constructor(this.x, this.y, this.z)
            }
            copy(t) {
                return this.x = t.x,
                    this.y = t.y,
                    this.z = t.z,
                    this
            }
            add(t) {
                return this.x += t.x,
                    this.y += t.y,
                    this.z += t.z,
                    this
            }
            addScalar(t) {
                return this.x += t,
                    this.y += t,
                    this.z += t,
                    this
            }
            addVectors(t, e) {
                return this.x = t.x + e.x,
                    this.y = t.y + e.y,
                    this.z = t.z + e.z,
                    this
            }
            addScaledVector(t, e) {
                return this.x += t.x * e,
                    this.y += t.y * e,
                    this.z += t.z * e,
                    this
            }
            sub(t) {
                return this.x -= t.x,
                    this.y -= t.y,
                    this.z -= t.z,
                    this
            }
            subScalar(t) {
                return this.x -= t,
                    this.y -= t,
                    this.z -= t,
                    this
            }
            subVectors(t, e) {
                return this.x = t.x - e.x,
                    this.y = t.y - e.y,
                    this.z = t.z - e.z,
                    this
            }
            multiply(t) {
                return this.x *= t.x,
                    this.y *= t.y,
                    this.z *= t.z,
                    this
            }
            multiplyScalar(t) {
                return this.x *= t,
                    this.y *= t,
                    this.z *= t,
                    this
            }
            multiplyVectors(t, e) {
                return this.x = t.x * e.x,
                    this.y = t.y * e.y,
                    this.z = t.z * e.z,
                    this
            }
            applyEuler(t) {
                return this.applyQuaternion(ah.setFromEuler(t))
            }
            applyAxisAngle(t, e) {
                return this.applyQuaternion(ah.setFromAxisAngle(t, e))
            }
            applyMatrix3(t) {
                let e = this.x
                    , i = this.y
                    , s = this.z
                    , r = t.elements;
                return this.x = r[0] * e + r[3] * i + r[6] * s,
                    this.y = r[1] * e + r[4] * i + r[7] * s,
                    this.z = r[2] * e + r[5] * i + r[8] * s,
                    this
            }
            applyNormalMatrix(t) {
                return this.applyMatrix3(t).normalize()
            }
            applyMatrix4(t) {
                let e = this.x
                    , i = this.y
                    , s = this.z
                    , r = t.elements
                    , o = 1 / (r[3] * e + r[7] * i + r[11] * s + r[15]);
                return this.x = (r[0] * e + r[4] * i + r[8] * s + r[12]) * o,
                    this.y = (r[1] * e + r[5] * i + r[9] * s + r[13]) * o,
                    this.z = (r[2] * e + r[6] * i + r[10] * s + r[14]) * o,
                    this
            }
            applyQuaternion(t) {
                let e = this.x
                    , i = this.y
                    , s = this.z
                    , r = t.x
                    , o = t.y
                    , a = t.z
                    , c = t.w
                    , l = 2 * (o * s - a * i)
                    , d = 2 * (a * e - r * s)
                    , h = 2 * (r * i - o * e);
                return this.x = e + c * l + o * h - a * d,
                    this.y = i + c * d + a * l - r * h,
                    this.z = s + c * h + r * d - o * l,
                    this
            }
            project(t) {
                return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)
            }
            unproject(t) {
                return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)
            }
            transformDirection(t) {
                let e = this.x
                    , i = this.y
                    , s = this.z
                    , r = t.elements;
                return this.x = r[0] * e + r[4] * i + r[8] * s,
                    this.y = r[1] * e + r[5] * i + r[9] * s,
                    this.z = r[2] * e + r[6] * i + r[10] * s,
                    this.normalize()
            }
            divide(t) {
                return this.x /= t.x,
                    this.y /= t.y,
                    this.z /= t.z,
                    this
            }
            divideScalar(t) {
                return this.multiplyScalar(1 / t)
            }
            min(t) {
                return this.x = Math.min(this.x, t.x),
                    this.y = Math.min(this.y, t.y),
                    this.z = Math.min(this.z, t.z),
                    this
            }
            max(t) {
                return this.x = Math.max(this.x, t.x),
                    this.y = Math.max(this.y, t.y),
                    this.z = Math.max(this.z, t.z),
                    this
            }
            clamp(t, e) {
                return this.x = kt(this.x, t.x, e.x),
                    this.y = kt(this.y, t.y, e.y),
                    this.z = kt(this.z, t.z, e.z),
                    this
            }
            clampScalar(t, e) {
                return this.x = kt(this.x, t, e),
                    this.y = kt(this.y, t, e),
                    this.z = kt(this.z, t, e),
                    this
            }
            clampLength(t, e) {
                let i = this.length();
                return this.divideScalar(i || 1).multiplyScalar(kt(i, t, e))
            }
            floor() {
                return this.x = Math.floor(this.x),
                    this.y = Math.floor(this.y),
                    this.z = Math.floor(this.z),
                    this
            }
            ceil() {
                return this.x = Math.ceil(this.x),
                    this.y = Math.ceil(this.y),
                    this.z = Math.ceil(this.z),
                    this
            }
            round() {
                return this.x = Math.round(this.x),
                    this.y = Math.round(this.y),
                    this.z = Math.round(this.z),
                    this
            }
            roundToZero() {
                return this.x = Math.trunc(this.x),
                    this.y = Math.trunc(this.y),
                    this.z = Math.trunc(this.z),
                    this
            }
            negate() {
                return this.x = -this.x,
                    this.y = -this.y,
                    this.z = -this.z,
                    this
            }
            dot(t) {
                return this.x * t.x + this.y * t.y + this.z * t.z
            }
            lengthSq() {
                return this.x * this.x + this.y * this.y + this.z * this.z
            }
            length() {
                return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
            }
            manhattanLength() {
                return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
            }
            normalize() {
                return this.divideScalar(this.length() || 1)
            }
            setLength(t) {
                return this.normalize().multiplyScalar(t)
            }
            lerp(t, e) {
                return this.x += (t.x - this.x) * e,
                    this.y += (t.y - this.y) * e,
                    this.z += (t.z - this.z) * e,
                    this
            }
            lerpVectors(t, e, i) {
                return this.x = t.x + (e.x - t.x) * i,
                    this.y = t.y + (e.y - t.y) * i,
                    this.z = t.z + (e.z - t.z) * i,
                    this
            }
            cross(t) {
                return this.crossVectors(this, t)
            }
            crossVectors(t, e) {
                let i = t.x
                    , s = t.y
                    , r = t.z
                    , o = e.x
                    , a = e.y
                    , c = e.z;
                return this.x = s * c - r * a,
                    this.y = r * o - i * c,
                    this.z = i * a - s * o,
                    this
            }
            projectOnVector(t) {
                let e = t.lengthSq();
                if (e === 0)
                    return this.set(0, 0, 0);
                let i = t.dot(this) / e;
                return this.copy(t).multiplyScalar(i)
            }
            projectOnPlane(t) {
                return Za.copy(this).projectOnVector(t),
                    this.sub(Za)
            }
            reflect(t) {
                return this.sub(Za.copy(t).multiplyScalar(2 * this.dot(t)))
            }
            angleTo(t) {
                let e = Math.sqrt(this.lengthSq() * t.lengthSq());
                if (e === 0)
                    return Math.PI / 2;
                let i = this.dot(t) / e;
                return Math.acos(kt(i, -1, 1))
            }
            distanceTo(t) {
                return Math.sqrt(this.distanceToSquared(t))
            }
            distanceToSquared(t) {
                let e = this.x - t.x
                    , i = this.y - t.y
                    , s = this.z - t.z;
                return e * e + i * i + s * s
            }
            manhattanDistanceTo(t) {
                return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)
            }
            setFromSpherical(t) {
                return this.setFromSphericalCoords(t.radius, t.phi, t.theta)
            }
            setFromSphericalCoords(t, e, i) {
                let s = Math.sin(e) * t;
                return this.x = s * Math.sin(i),
                    this.y = Math.cos(e) * t,
                    this.z = s * Math.cos(i),
                    this
            }
            setFromCylindrical(t) {
                return this.setFromCylindricalCoords(t.radius, t.theta, t.y)
            }
            setFromCylindricalCoords(t, e, i) {
                return this.x = t * Math.sin(e),
                    this.y = i,
                    this.z = t * Math.cos(e),
                    this
            }
            setFromMatrixPosition(t) {
                let e = t.elements;
                return this.x = e[12],
                    this.y = e[13],
                    this.z = e[14],
                    this
            }
            setFromMatrixScale(t) {
                let e = this.setFromMatrixColumn(t, 0).length()
                    , i = this.setFromMatrixColumn(t, 1).length()
                    , s = this.setFromMatrixColumn(t, 2).length();
                return this.x = e,
                    this.y = i,
                    this.z = s,
                    this
            }
            setFromMatrixColumn(t, e) {
                return this.fromArray(t.elements, e * 4)
            }
            setFromMatrix3Column(t, e) {
                return this.fromArray(t.elements, e * 3)
            }
            setFromEuler(t) {
                return this.x = t._x,
                    this.y = t._y,
                    this.z = t._z,
                    this
            }
            setFromColor(t) {
                return this.x = t.r,
                    this.y = t.g,
                    this.z = t.b,
                    this
            }
            equals(t) {
                return t.x === this.x && t.y === this.y && t.z === this.z
            }
            fromArray(t, e = 0) {
                return this.x = t[e],
                    this.y = t[e + 1],
                    this.z = t[e + 2],
                    this
            }
            toArray(t = [], e = 0) {
                return t[e] = this.x,
                    t[e + 1] = this.y,
                    t[e + 2] = this.z,
                    t
            }
            fromBufferAttribute(t, e) {
                return this.x = t.getX(e),
                    this.y = t.getY(e),
                    this.z = t.getZ(e),
                    this
            }
            random() {
                return this.x = Math.random(),
                    this.y = Math.random(),
                    this.z = Math.random(),
                    this
            }
            randomDirection() {
                let t = Math.random() * Math.PI * 2
                    , e = Math.random() * 2 - 1
                    , i = Math.sqrt(1 - e * e);
                return this.x = i * Math.cos(t),
                    this.y = e,
                    this.z = i * Math.sin(t),
                    this
            }
            *[Symbol.iterator]() {
                yield this.x,
                    yield this.y,
                    yield this.z
            }
        }
        , Za = new P
        , ah = new rn
        , Nt = class n {
            constructor(t, e, i, s, r, o, a, c, l) {
                n.prototype.isMatrix3 = !0,
                    this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1],
                    t !== void 0 && this.set(t, e, i, s, r, o, a, c, l)
            }
            set(t, e, i, s, r, o, a, c, l) {
                let d = this.elements;
                return d[0] = t,
                    d[1] = s,
                    d[2] = a,
                    d[3] = e,
                    d[4] = r,
                    d[5] = c,
                    d[6] = i,
                    d[7] = o,
                    d[8] = l,
                    this
            }
            identity() {
                return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1),
                    this
            }
            copy(t) {
                let e = this.elements
                    , i = t.elements;
                return e[0] = i[0],
                    e[1] = i[1],
                    e[2] = i[2],
                    e[3] = i[3],
                    e[4] = i[4],
                    e[5] = i[5],
                    e[6] = i[6],
                    e[7] = i[7],
                    e[8] = i[8],
                    this
            }
            extractBasis(t, e, i) {
                return t.setFromMatrix3Column(this, 0),
                    e.setFromMatrix3Column(this, 1),
                    i.setFromMatrix3Column(this, 2),
                    this
            }
            setFromMatrix4(t) {
                let e = t.elements;
                return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]),
                    this
            }
            multiply(t) {
                return this.multiplyMatrices(this, t)
            }
            premultiply(t) {
                return this.multiplyMatrices(t, this)
            }
            multiplyMatrices(t, e) {
                let i = t.elements
                    , s = e.elements
                    , r = this.elements
                    , o = i[0]
                    , a = i[3]
                    , c = i[6]
                    , l = i[1]
                    , d = i[4]
                    , h = i[7]
                    , f = i[2]
                    , p = i[5]
                    , v = i[8]
                    , g = s[0]
                    , m = s[3]
                    , u = s[6]
                    , E = s[1]
                    , T = s[4]
                    , y = s[7]
                    , C = s[2]
                    , R = s[5]
                    , D = s[8];
                return r[0] = o * g + a * E + c * C,
                    r[3] = o * m + a * T + c * R,
                    r[6] = o * u + a * y + c * D,
                    r[1] = l * g + d * E + h * C,
                    r[4] = l * m + d * T + h * R,
                    r[7] = l * u + d * y + h * D,
                    r[2] = f * g + p * E + v * C,
                    r[5] = f * m + p * T + v * R,
                    r[8] = f * u + p * y + v * D,
                    this
            }
            multiplyScalar(t) {
                let e = this.elements;
                return e[0] *= t,
                    e[3] *= t,
                    e[6] *= t,
                    e[1] *= t,
                    e[4] *= t,
                    e[7] *= t,
                    e[2] *= t,
                    e[5] *= t,
                    e[8] *= t,
                    this
            }
            determinant() {
                let t = this.elements
                    , e = t[0]
                    , i = t[1]
                    , s = t[2]
                    , r = t[3]
                    , o = t[4]
                    , a = t[5]
                    , c = t[6]
                    , l = t[7]
                    , d = t[8];
                return e * o * d - e * a * l - i * r * d + i * a * c + s * r * l - s * o * c
            }
            invert() {
                let t = this.elements
                    , e = t[0]
                    , i = t[1]
                    , s = t[2]
                    , r = t[3]
                    , o = t[4]
                    , a = t[5]
                    , c = t[6]
                    , l = t[7]
                    , d = t[8]
                    , h = d * o - a * l
                    , f = a * c - d * r
                    , p = l * r - o * c
                    , v = e * h + i * f + s * p;
                if (v === 0)
                    return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
                let g = 1 / v;
                return t[0] = h * g,
                    t[1] = (s * l - d * i) * g,
                    t[2] = (a * i - s * o) * g,
                    t[3] = f * g,
                    t[4] = (d * e - s * c) * g,
                    t[5] = (s * r - a * e) * g,
                    t[6] = p * g,
                    t[7] = (i * c - l * e) * g,
                    t[8] = (o * e - i * r) * g,
                    this
            }
            transpose() {
                let t, e = this.elements;
                return t = e[1],
                    e[1] = e[3],
                    e[3] = t,
                    t = e[2],
                    e[2] = e[6],
                    e[6] = t,
                    t = e[5],
                    e[5] = e[7],
                    e[7] = t,
                    this
            }
            getNormalMatrix(t) {
                return this.setFromMatrix4(t).invert().transpose()
            }
            transposeIntoArray(t) {
                let e = this.elements;
                return t[0] = e[0],
                    t[1] = e[3],
                    t[2] = e[6],
                    t[3] = e[1],
                    t[4] = e[4],
                    t[5] = e[7],
                    t[6] = e[2],
                    t[7] = e[5],
                    t[8] = e[8],
                    this
            }
            setUvTransform(t, e, i, s, r, o, a) {
                let c = Math.cos(r)
                    , l = Math.sin(r);
                return this.set(i * c, i * l, -i * (c * o + l * a) + o + t, -s * l, s * c, -s * (-l * o + c * a) + a + e, 0, 0, 1),
                    this
            }
            scale(t, e) {
                return this.premultiply($a.makeScale(t, e)),
                    this
            }
            rotate(t) {
                return this.premultiply($a.makeRotation(-t)),
                    this
            }
            translate(t, e) {
                return this.premultiply($a.makeTranslation(t, e)),
                    this
            }
            makeTranslation(t, e) {
                return t.isVector2 ? this.set(1, 0, t.x, 0, 1, t.y, 0, 0, 1) : this.set(1, 0, t, 0, 1, e, 0, 0, 1),
                    this
            }
            makeRotation(t) {
                let e = Math.cos(t)
                    , i = Math.sin(t);
                return this.set(e, -i, 0, i, e, 0, 0, 0, 1),
                    this
            }
            makeScale(t, e) {
                return this.set(t, 0, 0, 0, e, 0, 0, 0, 1),
                    this
            }
            equals(t) {
                let e = this.elements
                    , i = t.elements;
                for (let s = 0; s < 9; s++)
                    if (e[s] !== i[s])
                        return !1;
                return !0
            }
            fromArray(t, e = 0) {
                for (let i = 0; i < 9; i++)
                    this.elements[i] = t[i + e];
                return this
            }
            toArray(t = [], e = 0) {
                let i = this.elements;
                return t[e] = i[0],
                    t[e + 1] = i[1],
                    t[e + 2] = i[2],
                    t[e + 3] = i[3],
                    t[e + 4] = i[4],
                    t[e + 5] = i[5],
                    t[e + 6] = i[6],
                    t[e + 7] = i[7],
                    t[e + 8] = i[8],
                    t
            }
            clone() {
                return new this.constructor().fromArray(this.elements)
            }
        }
        , $a = new Nt;
    function kl(n) {
        for (let t = n.length - 1; t >= 0; --t)
            if (n[t] >= 65535)
                return !0;
        return !1
    }
    function Is(n) {
        return document.createElementNS("http://www.w3.org/1999/xhtml", n)
    }
    function fu() {
        let n = Is("canvas");
        return n.style.display = "block",
            n
    }
    var lh = {};
    function pi(n) {
        n in lh || (lh[n] = !0,
            console.warn(n))
    }
    function pu(n, t, e) {
        return new Promise(function (i, s) {
            function r() {
                switch (n.clientWaitSync(t, n.SYNC_FLUSH_COMMANDS_BIT, 0)) {
                    case n.WAIT_FAILED:
                        s();
                        break;
                    case n.TIMEOUT_EXPIRED:
                        setTimeout(r, e);
                        break;
                    default:
                        i()
                }
            }
            setTimeout(r, e)
        }
        )
    }
    var ch = new Nt().set(.4123908, .3575843, .1804808, .212639, .7151687, .0721923, .0193308, .1191948, .9505322)
        , hh = new Nt().set(3.2409699, -1.5373832, -.4986108, -.9692436, 1.8759675, .0415551, .0556301, -.203977, 1.0569715);
    function nf() {
        let n = {
            enabled: !0,
            workingColorSpace: fi,
            spaces: {},
            convert: function (s, r, o) {
                return this.enabled === !1 || r === o || !r || !o || (this.spaces[r].transfer === Zt && (s.r = Dn(s.r),
                    s.g = Dn(s.g),
                    s.b = Dn(s.b)),
                    this.spaces[r].primaries !== this.spaces[o].primaries && (s.applyMatrix3(this.spaces[r].toXYZ),
                        s.applyMatrix3(this.spaces[o].fromXYZ)),
                    this.spaces[o].transfer === Zt && (s.r = Zi(s.r),
                        s.g = Zi(s.g),
                        s.b = Zi(s.b))),
                    s
            },
            workingToColorSpace: function (s, r) {
                return this.convert(s, this.workingColorSpace, r)
            },
            colorSpaceToWorking: function (s, r) {
                return this.convert(s, r, this.workingColorSpace)
            },
            getPrimaries: function (s) {
                return this.spaces[s].primaries
            },
            getTransfer: function (s) {
                return s === Nn ? Rs : this.spaces[s].transfer
            },
            getLuminanceCoefficients: function (s, r = this.workingColorSpace) {
                return s.fromArray(this.spaces[r].luminanceCoefficients)
            },
            define: function (s) {
                Object.assign(this.spaces, s)
            },
            _getMatrix: function (s, r, o) {
                return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)
            },
            _getDrawingBufferColorSpace: function (s) {
                return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace
            },
            _getUnpackColorSpace: function (s = this.workingColorSpace) {
                return this.spaces[s].workingColorSpaceConfig.unpackColorSpace
            },
            fromWorkingColorSpace: function (s, r) {
                return pi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),
                    n.workingToColorSpace(s, r)
            },
            toWorkingColorSpace: function (s, r) {
                return pi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),
                    n.colorSpaceToWorking(s, r)
            }
        }
            , t = [.64, .33, .3, .6, .15, .06]
            , e = [.2126, .7152, .0722]
            , i = [.3127, .329];
        return n.define({
            [fi]: {
                primaries: t,
                whitePoint: i,
                transfer: Rs,
                toXYZ: ch,
                fromXYZ: hh,
                luminanceCoefficients: e,
                workingColorSpaceConfig: {
                    unpackColorSpace: Xe
                },
                outputColorSpaceConfig: {
                    drawingBufferColorSpace: Xe
                }
            },
            [Xe]: {
                primaries: t,
                whitePoint: i,
                transfer: Zt,
                toXYZ: ch,
                fromXYZ: hh,
                luminanceCoefficients: e,
                outputColorSpaceConfig: {
                    drawingBufferColorSpace: Xe
                }
            }
        }),
            n
    }
    var Gt = nf();
    function Dn(n) {
        return n < .04045 ? n * .0773993808 : Math.pow(n * .9478672986 + .0521327014, 2.4)
    }
    function Zi(n) {
        return n < .0031308 ? n * 12.92 : 1.055 * Math.pow(n, .41666) - .055
    }
    var Ni, Yr = class {
        static getDataURL(t, e = "image/png") {
            if (/^data:/i.test(t.src) || typeof HTMLCanvasElement == "undefined")
                return t.src;
            let i;
            if (t instanceof HTMLCanvasElement)
                i = t;
            else {
                Ni === void 0 && (Ni = Is("canvas")),
                    Ni.width = t.width,
                    Ni.height = t.height;
                let s = Ni.getContext("2d");
                t instanceof ImageData ? s.putImageData(t, 0, 0) : s.drawImage(t, 0, 0, t.width, t.height),
                    i = Ni
            }
            return i.toDataURL(e)
        }
        static sRGBToLinear(t) {
            if (typeof HTMLImageElement != "undefined" && t instanceof HTMLImageElement || typeof HTMLCanvasElement != "undefined" && t instanceof HTMLCanvasElement || typeof ImageBitmap != "undefined" && t instanceof ImageBitmap) {
                let e = Is("canvas");
                e.width = t.width,
                    e.height = t.height;
                let i = e.getContext("2d");
                i.drawImage(t, 0, 0, t.width, t.height);
                let s = i.getImageData(0, 0, t.width, t.height)
                    , r = s.data;
                for (let o = 0; o < r.length; o++)
                    r[o] = Dn(r[o] / 255) * 255;
                return i.putImageData(s, 0, 0),
                    e
            } else if (t.data) {
                let e = t.data.slice(0);
                for (let i = 0; i < e.length; i++)
                    e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[i] = Math.floor(Dn(e[i] / 255) * 255) : e[i] = Dn(e[i]);
                return {
                    data: e,
                    width: t.width,
                    height: t.height
                }
            } else
                return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),
                    t
        }
    }
        , sf = 0, Ki = class {
            constructor(t = null) {
                this.isSource = !0,
                    Object.defineProperty(this, "id", {
                        value: sf++
                    }),
                    this.uuid = os(),
                    this.data = t,
                    this.dataReady = !0,
                    this.version = 0
            }
            getSize(t) {
                let e = this.data;
                return e instanceof HTMLVideoElement ? t.set(e.videoWidth, e.videoHeight, 0) : e instanceof VideoFrame ? t.set(e.displayHeight, e.displayWidth, 0) : e !== null ? t.set(e.width, e.height, e.depth || 0) : t.set(0, 0, 0),
                    t
            }
            set needsUpdate(t) {
                t === !0 && this.version++
            }
            toJSON(t) {
                let e = t === void 0 || typeof t == "string";
                if (!e && t.images[this.uuid] !== void 0)
                    return t.images[this.uuid];
                let i = {
                    uuid: this.uuid,
                    url: ""
                }
                    , s = this.data;
                if (s !== null) {
                    let r;
                    if (Array.isArray(s)) {
                        r = [];
                        for (let o = 0, a = s.length; o < a; o++)
                            s[o].isDataTexture ? r.push(Ja(s[o].image)) : r.push(Ja(s[o]))
                    } else
                        r = Ja(s);
                    i.url = r
                }
                return e || (t.images[this.uuid] = i),
                    i
            }
        }
        ;
    function Ja(n) {
        return typeof HTMLImageElement != "undefined" && n instanceof HTMLImageElement || typeof HTMLCanvasElement != "undefined" && n instanceof HTMLCanvasElement || typeof ImageBitmap != "undefined" && n instanceof ImageBitmap ? Yr.getDataURL(n) : n.data ? {
            data: Array.from(n.data),
            width: n.width,
            height: n.height,
            type: n.data.constructor.name
        } : (console.warn("THREE.Texture: Unable to serialize Texture."),
            {})
    }
    var rf = 0
        , Ka = new P
        , Ye = class n extends _n {
            constructor(t = n.DEFAULT_IMAGE, e = n.DEFAULT_MAPPING, i = Xn, s = Xn, r = Ne, o = Qn, a = Oe, c = Mn, l = n.DEFAULT_ANISOTROPY, d = Nn) {
                super(),
                    this.isTexture = !0,
                    Object.defineProperty(this, "id", {
                        value: rf++
                    }),
                    this.uuid = os(),
                    this.name = "",
                    this.source = new Ki(t),
                    this.mipmaps = [],
                    this.mapping = e,
                    this.channel = 0,
                    this.wrapS = i,
                    this.wrapT = s,
                    this.magFilter = r,
                    this.minFilter = o,
                    this.anisotropy = l,
                    this.format = a,
                    this.internalFormat = null,
                    this.type = c,
                    this.offset = new Mt(0, 0),
                    this.repeat = new Mt(1, 1),
                    this.center = new Mt(0, 0),
                    this.rotation = 0,
                    this.matrixAutoUpdate = !0,
                    this.matrix = new Nt,
                    this.generateMipmaps = !0,
                    this.premultiplyAlpha = !1,
                    this.flipY = !0,
                    this.unpackAlignment = 4,
                    this.colorSpace = d,
                    this.userData = {},
                    this.updateRanges = [],
                    this.version = 0,
                    this.onUpdate = null,
                    this.renderTarget = null,
                    this.isRenderTargetTexture = !1,
                    this.isArrayTexture = !!(t && t.depth && t.depth > 1),
                    this.pmremVersion = 0
            }
            get width() {
                return this.source.getSize(Ka).x
            }
            get height() {
                return this.source.getSize(Ka).y
            }
            get depth() {
                return this.source.getSize(Ka).z
            }
            get image() {
                return this.source.data
            }
            set image(t = null) {
                this.source.data = t
            }
            updateMatrix() {
                this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
            }
            addUpdateRange(t, e) {
                this.updateRanges.push({
                    start: t,
                    count: e
                })
            }
            clearUpdateRanges() {
                this.updateRanges.length = 0
            }
            clone() {
                return new this.constructor().copy(this)
            }
            copy(t) {
                return this.name = t.name,
                    this.source = t.source,
                    this.mipmaps = t.mipmaps.slice(0),
                    this.mapping = t.mapping,
                    this.channel = t.channel,
                    this.wrapS = t.wrapS,
                    this.wrapT = t.wrapT,
                    this.magFilter = t.magFilter,
                    this.minFilter = t.minFilter,
                    this.anisotropy = t.anisotropy,
                    this.format = t.format,
                    this.internalFormat = t.internalFormat,
                    this.type = t.type,
                    this.offset.copy(t.offset),
                    this.repeat.copy(t.repeat),
                    this.center.copy(t.center),
                    this.rotation = t.rotation,
                    this.matrixAutoUpdate = t.matrixAutoUpdate,
                    this.matrix.copy(t.matrix),
                    this.generateMipmaps = t.generateMipmaps,
                    this.premultiplyAlpha = t.premultiplyAlpha,
                    this.flipY = t.flipY,
                    this.unpackAlignment = t.unpackAlignment,
                    this.colorSpace = t.colorSpace,
                    this.renderTarget = t.renderTarget,
                    this.isRenderTargetTexture = t.isRenderTargetTexture,
                    this.isArrayTexture = t.isArrayTexture,
                    this.userData = JSON.parse(JSON.stringify(t.userData)),
                    this.needsUpdate = !0,
                    this
            }
            setValues(t) {
                for (let e in t) {
                    let i = t[e];
                    if (i === void 0) {
                        console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);
                        continue
                    }
                    let s = this[e];
                    if (s === void 0) {
                        console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);
                        continue
                    }
                    s && i && s.isVector2 && i.isVector2 || s && i && s.isVector3 && i.isVector3 || s && i && s.isMatrix3 && i.isMatrix3 ? s.copy(i) : this[e] = i
                }
            }
            toJSON(t) {
                let e = t === void 0 || typeof t == "string";
                if (!e && t.textures[this.uuid] !== void 0)
                    return t.textures[this.uuid];
                let i = {
                    metadata: {
                        version: 4.7,
                        type: "Texture",
                        generator: "Texture.toJSON"
                    },
                    uuid: this.uuid,
                    name: this.name,
                    image: this.source.toJSON(t).uuid,
                    mapping: this.mapping,
                    channel: this.channel,
                    repeat: [this.repeat.x, this.repeat.y],
                    offset: [this.offset.x, this.offset.y],
                    center: [this.center.x, this.center.y],
                    rotation: this.rotation,
                    wrap: [this.wrapS, this.wrapT],
                    format: this.format,
                    internalFormat: this.internalFormat,
                    type: this.type,
                    colorSpace: this.colorSpace,
                    minFilter: this.minFilter,
                    magFilter: this.magFilter,
                    anisotropy: this.anisotropy,
                    flipY: this.flipY,
                    generateMipmaps: this.generateMipmaps,
                    premultiplyAlpha: this.premultiplyAlpha,
                    unpackAlignment: this.unpackAlignment
                };
                return Object.keys(this.userData).length > 0 && (i.userData = this.userData),
                    e || (t.textures[this.uuid] = i),
                    i
            }
            dispose() {
                this.dispatchEvent({
                    type: "dispose"
                })
            }
            transformUv(t) {
                if (this.mapping !== Al)
                    return t;
                if (t.applyMatrix3(this.matrix),
                    t.x < 0 || t.x > 1)
                    switch (this.wrapS) {
                        case Wr:
                            t.x = t.x - Math.floor(t.x);
                            break;
                        case Xn:
                            t.x = t.x < 0 ? 0 : 1;
                            break;
                        case Xr:
                            Math.abs(Math.floor(t.x) % 2) === 1 ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x);
                            break
                    }
                if (t.y < 0 || t.y > 1)
                    switch (this.wrapT) {
                        case Wr:
                            t.y = t.y - Math.floor(t.y);
                            break;
                        case Xn:
                            t.y = t.y < 0 ? 0 : 1;
                            break;
                        case Xr:
                            Math.abs(Math.floor(t.y) % 2) === 1 ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y);
                            break
                    }
                return this.flipY && (t.y = 1 - t.y),
                    t
            }
            set needsUpdate(t) {
                t === !0 && (this.version++,
                    this.source.needsUpdate = !0)
            }
            set needsPMREMUpdate(t) {
                t === !0 && this.pmremVersion++
            }
        }
        ;
    Ye.DEFAULT_IMAGE = null;
    Ye.DEFAULT_MAPPING = Al;
    Ye.DEFAULT_ANISOTROPY = 1;
    var le = class n {
        constructor(t = 0, e = 0, i = 0, s = 1) {
            n.prototype.isVector4 = !0,
                this.x = t,
                this.y = e,
                this.z = i,
                this.w = s
        }
        get width() {
            return this.z
        }
        set width(t) {
            this.z = t
        }
        get height() {
            return this.w
        }
        set height(t) {
            this.w = t
        }
        set(t, e, i, s) {
            return this.x = t,
                this.y = e,
                this.z = i,
                this.w = s,
                this
        }
        setScalar(t) {
            return this.x = t,
                this.y = t,
                this.z = t,
                this.w = t,
                this
        }
        setX(t) {
            return this.x = t,
                this
        }
        setY(t) {
            return this.y = t,
                this
        }
        setZ(t) {
            return this.z = t,
                this
        }
        setW(t) {
            return this.w = t,
                this
        }
        setComponent(t, e) {
            switch (t) {
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                case 2:
                    this.z = e;
                    break;
                case 3:
                    this.w = e;
                    break;
                default:
                    throw new Error("index is out of range: " + t)
            }
            return this
        }
        getComponent(t) {
            switch (t) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                case 3:
                    return this.w;
                default:
                    throw new Error("index is out of range: " + t)
            }
        }
        clone() {
            return new this.constructor(this.x, this.y, this.z, this.w)
        }
        copy(t) {
            return this.x = t.x,
                this.y = t.y,
                this.z = t.z,
                this.w = t.w !== void 0 ? t.w : 1,
                this
        }
        add(t) {
            return this.x += t.x,
                this.y += t.y,
                this.z += t.z,
                this.w += t.w,
                this
        }
        addScalar(t) {
            return this.x += t,
                this.y += t,
                this.z += t,
                this.w += t,
                this
        }
        addVectors(t, e) {
            return this.x = t.x + e.x,
                this.y = t.y + e.y,
                this.z = t.z + e.z,
                this.w = t.w + e.w,
                this
        }
        addScaledVector(t, e) {
            return this.x += t.x * e,
                this.y += t.y * e,
                this.z += t.z * e,
                this.w += t.w * e,
                this
        }
        sub(t) {
            return this.x -= t.x,
                this.y -= t.y,
                this.z -= t.z,
                this.w -= t.w,
                this
        }
        subScalar(t) {
            return this.x -= t,
                this.y -= t,
                this.z -= t,
                this.w -= t,
                this
        }
        subVectors(t, e) {
            return this.x = t.x - e.x,
                this.y = t.y - e.y,
                this.z = t.z - e.z,
                this.w = t.w - e.w,
                this
        }
        multiply(t) {
            return this.x *= t.x,
                this.y *= t.y,
                this.z *= t.z,
                this.w *= t.w,
                this
        }
        multiplyScalar(t) {
            return this.x *= t,
                this.y *= t,
                this.z *= t,
                this.w *= t,
                this
        }
        applyMatrix4(t) {
            let e = this.x
                , i = this.y
                , s = this.z
                , r = this.w
                , o = t.elements;
            return this.x = o[0] * e + o[4] * i + o[8] * s + o[12] * r,
                this.y = o[1] * e + o[5] * i + o[9] * s + o[13] * r,
                this.z = o[2] * e + o[6] * i + o[10] * s + o[14] * r,
                this.w = o[3] * e + o[7] * i + o[11] * s + o[15] * r,
                this
        }
        divide(t) {
            return this.x /= t.x,
                this.y /= t.y,
                this.z /= t.z,
                this.w /= t.w,
                this
        }
        divideScalar(t) {
            return this.multiplyScalar(1 / t)
        }
        setAxisAngleFromQuaternion(t) {
            this.w = 2 * Math.acos(t.w);
            let e = Math.sqrt(1 - t.w * t.w);
            return e < 1e-4 ? (this.x = 1,
                this.y = 0,
                this.z = 0) : (this.x = t.x / e,
                    this.y = t.y / e,
                    this.z = t.z / e),
                this
        }
        setAxisAngleFromRotationMatrix(t) {
            let e, i, s, r, c = t.elements, l = c[0], d = c[4], h = c[8], f = c[1], p = c[5], v = c[9], g = c[2], m = c[6], u = c[10];
            if (Math.abs(d - f) < .01 && Math.abs(h - g) < .01 && Math.abs(v - m) < .01) {
                if (Math.abs(d + f) < .1 && Math.abs(h + g) < .1 && Math.abs(v + m) < .1 && Math.abs(l + p + u - 3) < .1)
                    return this.set(1, 0, 0, 0),
                        this;
                e = Math.PI;
                let T = (l + 1) / 2
                    , y = (p + 1) / 2
                    , C = (u + 1) / 2
                    , R = (d + f) / 4
                    , D = (h + g) / 4
                    , N = (v + m) / 4;
                return T > y && T > C ? T < .01 ? (i = 0,
                    s = .707106781,
                    r = .707106781) : (i = Math.sqrt(T),
                        s = R / i,
                        r = D / i) : y > C ? y < .01 ? (i = .707106781,
                            s = 0,
                            r = .707106781) : (s = Math.sqrt(y),
                                i = R / s,
                                r = N / s) : C < .01 ? (i = .707106781,
                                    s = .707106781,
                                    r = 0) : (r = Math.sqrt(C),
                                        i = D / r,
                                        s = N / r),
                    this.set(i, s, r, e),
                    this
            }
            let E = Math.sqrt((m - v) * (m - v) + (h - g) * (h - g) + (f - d) * (f - d));
            return Math.abs(E) < .001 && (E = 1),
                this.x = (m - v) / E,
                this.y = (h - g) / E,
                this.z = (f - d) / E,
                this.w = Math.acos((l + p + u - 1) / 2),
                this
        }
        setFromMatrixPosition(t) {
            let e = t.elements;
            return this.x = e[12],
                this.y = e[13],
                this.z = e[14],
                this.w = e[15],
                this
        }
        min(t) {
            return this.x = Math.min(this.x, t.x),
                this.y = Math.min(this.y, t.y),
                this.z = Math.min(this.z, t.z),
                this.w = Math.min(this.w, t.w),
                this
        }
        max(t) {
            return this.x = Math.max(this.x, t.x),
                this.y = Math.max(this.y, t.y),
                this.z = Math.max(this.z, t.z),
                this.w = Math.max(this.w, t.w),
                this
        }
        clamp(t, e) {
            return this.x = kt(this.x, t.x, e.x),
                this.y = kt(this.y, t.y, e.y),
                this.z = kt(this.z, t.z, e.z),
                this.w = kt(this.w, t.w, e.w),
                this
        }
        clampScalar(t, e) {
            return this.x = kt(this.x, t, e),
                this.y = kt(this.y, t, e),
                this.z = kt(this.z, t, e),
                this.w = kt(this.w, t, e),
                this
        }
        clampLength(t, e) {
            let i = this.length();
            return this.divideScalar(i || 1).multiplyScalar(kt(i, t, e))
        }
        floor() {
            return this.x = Math.floor(this.x),
                this.y = Math.floor(this.y),
                this.z = Math.floor(this.z),
                this.w = Math.floor(this.w),
                this
        }
        ceil() {
            return this.x = Math.ceil(this.x),
                this.y = Math.ceil(this.y),
                this.z = Math.ceil(this.z),
                this.w = Math.ceil(this.w),
                this
        }
        round() {
            return this.x = Math.round(this.x),
                this.y = Math.round(this.y),
                this.z = Math.round(this.z),
                this.w = Math.round(this.w),
                this
        }
        roundToZero() {
            return this.x = Math.trunc(this.x),
                this.y = Math.trunc(this.y),
                this.z = Math.trunc(this.z),
                this.w = Math.trunc(this.w),
                this
        }
        negate() {
            return this.x = -this.x,
                this.y = -this.y,
                this.z = -this.z,
                this.w = -this.w,
                this
        }
        dot(t) {
            return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w
        }
        lengthSq() {
            return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
        }
        length() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
        }
        manhattanLength() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
        }
        normalize() {
            return this.divideScalar(this.length() || 1)
        }
        setLength(t) {
            return this.normalize().multiplyScalar(t)
        }
        lerp(t, e) {
            return this.x += (t.x - this.x) * e,
                this.y += (t.y - this.y) * e,
                this.z += (t.z - this.z) * e,
                this.w += (t.w - this.w) * e,
                this
        }
        lerpVectors(t, e, i) {
            return this.x = t.x + (e.x - t.x) * i,
                this.y = t.y + (e.y - t.y) * i,
                this.z = t.z + (e.z - t.z) * i,
                this.w = t.w + (e.w - t.w) * i,
                this
        }
        equals(t) {
            return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
        }
        fromArray(t, e = 0) {
            return this.x = t[e],
                this.y = t[e + 1],
                this.z = t[e + 2],
                this.w = t[e + 3],
                this
        }
        toArray(t = [], e = 0) {
            return t[e] = this.x,
                t[e + 1] = this.y,
                t[e + 2] = this.z,
                t[e + 3] = this.w,
                t
        }
        fromBufferAttribute(t, e) {
            return this.x = t.getX(e),
                this.y = t.getY(e),
                this.z = t.getZ(e),
                this.w = t.getW(e),
                this
        }
        random() {
            return this.x = Math.random(),
                this.y = Math.random(),
                this.z = Math.random(),
                this.w = Math.random(),
                this
        }
        *[Symbol.iterator]() {
            yield this.x,
                yield this.y,
                yield this.z,
                yield this.w
        }
    }
        , Zr = class extends _n {
            constructor(t = 1, e = 1, i = {}) {
                super(),
                    i = Object.assign({
                        generateMipmaps: !1,
                        internalFormat: null,
                        minFilter: Ne,
                        depthBuffer: !0,
                        stencilBuffer: !1,
                        resolveDepthBuffer: !0,
                        resolveStencilBuffer: !0,
                        depthTexture: null,
                        samples: 0,
                        count: 1,
                        depth: 1,
                        multiview: !1
                    }, i),
                    this.isRenderTarget = !0,
                    this.width = t,
                    this.height = e,
                    this.depth = i.depth,
                    this.scissor = new le(0, 0, t, e),
                    this.scissorTest = !1,
                    this.viewport = new le(0, 0, t, e);
                let s = {
                    width: t,
                    height: e,
                    depth: i.depth
                }
                    , r = new Ye(s);
                this.textures = [];
                let o = i.count;
                for (let a = 0; a < o; a++)
                    this.textures[a] = r.clone(),
                        this.textures[a].isRenderTargetTexture = !0,
                        this.textures[a].renderTarget = this;
                this._setTextureOptions(i),
                    this.depthBuffer = i.depthBuffer,
                    this.stencilBuffer = i.stencilBuffer,
                    this.resolveDepthBuffer = i.resolveDepthBuffer,
                    this.resolveStencilBuffer = i.resolveStencilBuffer,
                    this._depthTexture = null,
                    this.depthTexture = i.depthTexture,
                    this.samples = i.samples,
                    this.multiview = i.multiview
            }
            _setTextureOptions(t = {}) {
                let e = {
                    minFilter: Ne,
                    generateMipmaps: !1,
                    flipY: !1,
                    internalFormat: null
                };
                t.mapping !== void 0 && (e.mapping = t.mapping),
                    t.wrapS !== void 0 && (e.wrapS = t.wrapS),
                    t.wrapT !== void 0 && (e.wrapT = t.wrapT),
                    t.wrapR !== void 0 && (e.wrapR = t.wrapR),
                    t.magFilter !== void 0 && (e.magFilter = t.magFilter),
                    t.minFilter !== void 0 && (e.minFilter = t.minFilter),
                    t.format !== void 0 && (e.format = t.format),
                    t.type !== void 0 && (e.type = t.type),
                    t.anisotropy !== void 0 && (e.anisotropy = t.anisotropy),
                    t.colorSpace !== void 0 && (e.colorSpace = t.colorSpace),
                    t.flipY !== void 0 && (e.flipY = t.flipY),
                    t.generateMipmaps !== void 0 && (e.generateMipmaps = t.generateMipmaps),
                    t.internalFormat !== void 0 && (e.internalFormat = t.internalFormat);
                for (let i = 0; i < this.textures.length; i++)
                    this.textures[i].setValues(e)
            }
            get texture() {
                return this.textures[0]
            }
            set texture(t) {
                this.textures[0] = t
            }
            set depthTexture(t) {
                this._depthTexture !== null && (this._depthTexture.renderTarget = null),
                    t !== null && (t.renderTarget = this),
                    this._depthTexture = t
            }
            get depthTexture() {
                return this._depthTexture
            }
            setSize(t, e, i = 1) {
                if (this.width !== t || this.height !== e || this.depth !== i) {
                    this.width = t,
                        this.height = e,
                        this.depth = i;
                    for (let s = 0, r = this.textures.length; s < r; s++)
                        this.textures[s].image.width = t,
                            this.textures[s].image.height = e,
                            this.textures[s].image.depth = i,
                            this.textures[s].isArrayTexture = this.textures[s].image.depth > 1;
                    this.dispose()
                }
                this.viewport.set(0, 0, t, e),
                    this.scissor.set(0, 0, t, e)
            }
            clone() {
                return new this.constructor().copy(this)
            }
            copy(t) {
                this.width = t.width,
                    this.height = t.height,
                    this.depth = t.depth,
                    this.scissor.copy(t.scissor),
                    this.scissorTest = t.scissorTest,
                    this.viewport.copy(t.viewport),
                    this.textures.length = 0;
                for (let e = 0, i = t.textures.length; e < i; e++) {
                    this.textures[e] = t.textures[e].clone(),
                        this.textures[e].isRenderTargetTexture = !0,
                        this.textures[e].renderTarget = this;
                    let s = Object.assign({}, t.textures[e].image);
                    this.textures[e].source = new Ki(s)
                }
                return this.depthBuffer = t.depthBuffer,
                    this.stencilBuffer = t.stencilBuffer,
                    this.resolveDepthBuffer = t.resolveDepthBuffer,
                    this.resolveStencilBuffer = t.resolveStencilBuffer,
                    t.depthTexture !== null && (this.depthTexture = t.depthTexture.clone()),
                    this.samples = t.samples,
                    this
            }
            dispose() {
                this.dispatchEvent({
                    type: "dispose"
                })
            }
        }
        , Te = class extends Zr {
            constructor(t = 1, e = 1, i = {}) {
                super(t, e, i),
                    this.isWebGLRenderTarget = !0
            }
        }
        , Ds = class extends Ye {
            constructor(t = null, e = 1, i = 1, s = 1) {
                super(null),
                    this.isDataArrayTexture = !0,
                    this.image = {
                        data: t,
                        width: e,
                        height: i,
                        depth: s
                    },
                    this.magFilter = sn,
                    this.minFilter = sn,
                    this.wrapR = Xn,
                    this.generateMipmaps = !1,
                    this.flipY = !1,
                    this.unpackAlignment = 1,
                    this.layerUpdates = new Set
            }
            addLayerUpdate(t) {
                this.layerUpdates.add(t)
            }
            clearLayerUpdates() {
                this.layerUpdates.clear()
            }
        }
        ;
    var $r = class extends Ye {
        constructor(t = null, e = 1, i = 1, s = 1) {
            super(null),
                this.isData3DTexture = !0,
                this.image = {
                    data: t,
                    width: e,
                    height: i,
                    depth: s
                },
                this.magFilter = sn,
                this.minFilter = sn,
                this.wrapR = Xn,
                this.generateMipmaps = !1,
                this.flipY = !1,
                this.unpackAlignment = 1
        }
    }
        ;
    var Yn = class {
        constructor(t = new P(1 / 0, 1 / 0, 1 / 0), e = new P(-1 / 0, -1 / 0, -1 / 0)) {
            this.isBox3 = !0,
                this.min = t,
                this.max = e
        }
        set(t, e) {
            return this.min.copy(t),
                this.max.copy(e),
                this
        }
        setFromArray(t) {
            this.makeEmpty();
            for (let e = 0, i = t.length; e < i; e += 3)
                this.expandByPoint(an.fromArray(t, e));
            return this
        }
        setFromBufferAttribute(t) {
            this.makeEmpty();
            for (let e = 0, i = t.count; e < i; e++)
                this.expandByPoint(an.fromBufferAttribute(t, e));
            return this
        }
        setFromPoints(t) {
            this.makeEmpty();
            for (let e = 0, i = t.length; e < i; e++)
                this.expandByPoint(t[e]);
            return this
        }
        setFromCenterAndSize(t, e) {
            let i = an.copy(e).multiplyScalar(.5);
            return this.min.copy(t).sub(i),
                this.max.copy(t).add(i),
                this
        }
        setFromObject(t, e = !1) {
            return this.makeEmpty(),
                this.expandByObject(t, e)
        }
        clone() {
            return new this.constructor().copy(this)
        }
        copy(t) {
            return this.min.copy(t.min),
                this.max.copy(t.max),
                this
        }
        makeEmpty() {
            return this.min.x = this.min.y = this.min.z = 1 / 0,
                this.max.x = this.max.y = this.max.z = -1 / 0,
                this
        }
        isEmpty() {
            return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
        }
        getCenter(t) {
            return this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
        }
        getSize(t) {
            return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min)
        }
        expandByPoint(t) {
            return this.min.min(t),
                this.max.max(t),
                this
        }
        expandByVector(t) {
            return this.min.sub(t),
                this.max.add(t),
                this
        }
        expandByScalar(t) {
            return this.min.addScalar(-t),
                this.max.addScalar(t),
                this
        }
        expandByObject(t, e = !1) {
            t.updateWorldMatrix(!1, !1);
            let i = t.geometry;
            if (i !== void 0) {
                let r = i.getAttribute("position");
                if (e === !0 && r !== void 0 && t.isInstancedMesh !== !0)
                    for (let o = 0, a = r.count; o < a; o++)
                        t.isMesh === !0 ? t.getVertexPosition(o, an) : an.fromBufferAttribute(r, o),
                            an.applyMatrix4(t.matrixWorld),
                            this.expandByPoint(an);
                else
                    t.boundingBox !== void 0 ? (t.boundingBox === null && t.computeBoundingBox(),
                        Mr.copy(t.boundingBox)) : (i.boundingBox === null && i.computeBoundingBox(),
                            Mr.copy(i.boundingBox)),
                        Mr.applyMatrix4(t.matrixWorld),
                        this.union(Mr)
            }
            let s = t.children;
            for (let r = 0, o = s.length; r < o; r++)
                this.expandByObject(s[r], e);
            return this
        }
        containsPoint(t) {
            return t.x >= this.min.x && t.x <= this.max.x && t.y >= this.min.y && t.y <= this.max.y && t.z >= this.min.z && t.z <= this.max.z
        }
        containsBox(t) {
            return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z
        }
        getParameter(t, e) {
            return e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z))
        }
        intersectsBox(t) {
            return t.max.x >= this.min.x && t.min.x <= this.max.x && t.max.y >= this.min.y && t.min.y <= this.max.y && t.max.z >= this.min.z && t.min.z <= this.max.z
        }
        intersectsSphere(t) {
            return this.clampPoint(t.center, an),
                an.distanceToSquared(t.center) <= t.radius * t.radius
        }
        intersectsPlane(t) {
            let e, i;
            return t.normal.x > 0 ? (e = t.normal.x * this.min.x,
                i = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x,
                    i = t.normal.x * this.min.x),
                t.normal.y > 0 ? (e += t.normal.y * this.min.y,
                    i += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y,
                        i += t.normal.y * this.min.y),
                t.normal.z > 0 ? (e += t.normal.z * this.min.z,
                    i += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z,
                        i += t.normal.z * this.min.z),
                e <= -t.constant && i >= -t.constant
        }
        intersectsTriangle(t) {
            if (this.isEmpty())
                return !1;
            this.getCenter(Ms),
                Sr.subVectors(this.max, Ms),
                Fi.subVectors(t.a, Ms),
                Oi.subVectors(t.b, Ms),
                Bi.subVectors(t.c, Ms),
                Bn.subVectors(Oi, Fi),
                zn.subVectors(Bi, Oi),
                oi.subVectors(Fi, Bi);
            let e = [0, -Bn.z, Bn.y, 0, -zn.z, zn.y, 0, -oi.z, oi.y, Bn.z, 0, -Bn.x, zn.z, 0, -zn.x, oi.z, 0, -oi.x, -Bn.y, Bn.x, 0, -zn.y, zn.x, 0, -oi.y, oi.x, 0];
            return !ja(e, Fi, Oi, Bi, Sr) || (e = [1, 0, 0, 0, 1, 0, 0, 0, 1],
                !ja(e, Fi, Oi, Bi, Sr)) ? !1 : (br.crossVectors(Bn, zn),
                    e = [br.x, br.y, br.z],
                    ja(e, Fi, Oi, Bi, Sr))
        }
        clampPoint(t, e) {
            return e.copy(t).clamp(this.min, this.max)
        }
        distanceToPoint(t) {
            return this.clampPoint(t, an).distanceTo(t)
        }
        getBoundingSphere(t) {
            return this.isEmpty() ? t.makeEmpty() : (this.getCenter(t.center),
                t.radius = this.getSize(an).length() * .5),
                t
        }
        intersect(t) {
            return this.min.max(t.min),
                this.max.min(t.max),
                this.isEmpty() && this.makeEmpty(),
                this
        }
        union(t) {
            return this.min.min(t.min),
                this.max.max(t.max),
                this
        }
        applyMatrix4(t) {
            return this.isEmpty() ? this : (wn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t),
                wn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t),
                wn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t),
                wn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t),
                wn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t),
                wn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t),
                wn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t),
                wn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t),
                this.setFromPoints(wn),
                this)
        }
        translate(t) {
            return this.min.add(t),
                this.max.add(t),
                this
        }
        equals(t) {
            return t.min.equals(this.min) && t.max.equals(this.max)
        }
        toJSON() {
            return {
                min: this.min.toArray(),
                max: this.max.toArray()
            }
        }
        fromJSON(t) {
            return this.min.fromArray(t.min),
                this.max.fromArray(t.max),
                this
        }
    }
        , wn = [new P, new P, new P, new P, new P, new P, new P, new P]
        , an = new P
        , Mr = new Yn
        , Fi = new P
        , Oi = new P
        , Bi = new P
        , Bn = new P
        , zn = new P
        , oi = new P
        , Ms = new P
        , Sr = new P
        , br = new P
        , ai = new P;
    function ja(n, t, e, i, s) {
        for (let r = 0, o = n.length - 3; r <= o; r += 3) {
            ai.fromArray(n, r);
            let a = s.x * Math.abs(ai.x) + s.y * Math.abs(ai.y) + s.z * Math.abs(ai.z)
                , c = t.dot(ai)
                , l = e.dot(ai)
                , d = i.dot(ai);
            if (Math.max(-Math.max(c, l, d), Math.min(c, l, d)) > a)
                return !1
        }
        return !0
    }
    var of = new Yn
        , Ss = new P
        , Qa = new P
        , mi = class {
            constructor(t = new P, e = -1) {
                this.isSphere = !0,
                    this.center = t,
                    this.radius = e
            }
            set(t, e) {
                return this.center.copy(t),
                    this.radius = e,
                    this
            }
            setFromPoints(t, e) {
                let i = this.center;
                e !== void 0 ? i.copy(e) : of.setFromPoints(t).getCenter(i);
                let s = 0;
                for (let r = 0, o = t.length; r < o; r++)
                    s = Math.max(s, i.distanceToSquared(t[r]));
                return this.radius = Math.sqrt(s),
                    this
            }
            copy(t) {
                return this.center.copy(t.center),
                    this.radius = t.radius,
                    this
            }
            isEmpty() {
                return this.radius < 0
            }
            makeEmpty() {
                return this.center.set(0, 0, 0),
                    this.radius = -1,
                    this
            }
            containsPoint(t) {
                return t.distanceToSquared(this.center) <= this.radius * this.radius
            }
            distanceToPoint(t) {
                return t.distanceTo(this.center) - this.radius
            }
            intersectsSphere(t) {
                let e = this.radius + t.radius;
                return t.center.distanceToSquared(this.center) <= e * e
            }
            intersectsBox(t) {
                return t.intersectsSphere(this)
            }
            intersectsPlane(t) {
                return Math.abs(t.distanceToPoint(this.center)) <= this.radius
            }
            clampPoint(t, e) {
                let i = this.center.distanceToSquared(t);
                return e.copy(t),
                    i > this.radius * this.radius && (e.sub(this.center).normalize(),
                        e.multiplyScalar(this.radius).add(this.center)),
                    e
            }
            getBoundingBox(t) {
                return this.isEmpty() ? (t.makeEmpty(),
                    t) : (t.set(this.center, this.center),
                        t.expandByScalar(this.radius),
                        t)
            }
            applyMatrix4(t) {
                return this.center.applyMatrix4(t),
                    this.radius = this.radius * t.getMaxScaleOnAxis(),
                    this
            }
            translate(t) {
                return this.center.add(t),
                    this
            }
            expandByPoint(t) {
                if (this.isEmpty())
                    return this.center.copy(t),
                        this.radius = 0,
                        this;
                Ss.subVectors(t, this.center);
                let e = Ss.lengthSq();
                if (e > this.radius * this.radius) {
                    let i = Math.sqrt(e)
                        , s = (i - this.radius) * .5;
                    this.center.addScaledVector(Ss, s / i),
                        this.radius += s
                }
                return this
            }
            union(t) {
                return t.isEmpty() ? this : this.isEmpty() ? (this.copy(t),
                    this) : (this.center.equals(t.center) === !0 ? this.radius = Math.max(this.radius, t.radius) : (Qa.subVectors(t.center, this.center).setLength(t.radius),
                        this.expandByPoint(Ss.copy(t.center).add(Qa)),
                        this.expandByPoint(Ss.copy(t.center).sub(Qa))),
                        this)
            }
            equals(t) {
                return t.center.equals(this.center) && t.radius === this.radius
            }
            clone() {
                return new this.constructor().copy(this)
            }
            toJSON() {
                return {
                    radius: this.radius,
                    center: this.center.toArray()
                }
            }
            fromJSON(t) {
                return this.radius = t.radius,
                    this.center.fromArray(t.center),
                    this
            }
        }
        , An = new P
        , tl = new P
        , Tr = new P
        , kn = new P
        , el = new P
        , Er = new P
        , nl = new P
        , gi = class {
            constructor(t = new P, e = new P(0, 0, -1)) {
                this.origin = t,
                    this.direction = e
            }
            set(t, e) {
                return this.origin.copy(t),
                    this.direction.copy(e),
                    this
            }
            copy(t) {
                return this.origin.copy(t.origin),
                    this.direction.copy(t.direction),
                    this
            }
            at(t, e) {
                return e.copy(this.origin).addScaledVector(this.direction, t)
            }
            lookAt(t) {
                return this.direction.copy(t).sub(this.origin).normalize(),
                    this
            }
            recast(t) {
                return this.origin.copy(this.at(t, An)),
                    this
            }
            closestPointToPoint(t, e) {
                e.subVectors(t, this.origin);
                let i = e.dot(this.direction);
                return i < 0 ? e.copy(this.origin) : e.copy(this.origin).addScaledVector(this.direction, i)
            }
            distanceToPoint(t) {
                return Math.sqrt(this.distanceSqToPoint(t))
            }
            distanceSqToPoint(t) {
                let e = An.subVectors(t, this.origin).dot(this.direction);
                return e < 0 ? this.origin.distanceToSquared(t) : (An.copy(this.origin).addScaledVector(this.direction, e),
                    An.distanceToSquared(t))
            }
            distanceSqToSegment(t, e, i, s) {
                tl.copy(t).add(e).multiplyScalar(.5),
                    Tr.copy(e).sub(t).normalize(),
                    kn.copy(this.origin).sub(tl);
                let r = t.distanceTo(e) * .5, o = -this.direction.dot(Tr), a = kn.dot(this.direction), c = -kn.dot(Tr), l = kn.lengthSq(), d = Math.abs(1 - o * o), h, f, p, v;
                if (d > 0)
                    if (h = o * c - a,
                        f = o * a - c,
                        v = r * d,
                        h >= 0)
                        if (f >= -v)
                            if (f <= v) {
                                let g = 1 / d;
                                h *= g,
                                    f *= g,
                                    p = h * (h + o * f + 2 * a) + f * (o * h + f + 2 * c) + l
                            } else
                                f = r,
                                    h = Math.max(0, -(o * f + a)),
                                    p = -h * h + f * (f + 2 * c) + l;
                        else
                            f = -r,
                                h = Math.max(0, -(o * f + a)),
                                p = -h * h + f * (f + 2 * c) + l;
                    else
                        f <= -v ? (h = Math.max(0, -(-o * r + a)),
                            f = h > 0 ? -r : Math.min(Math.max(-r, -c), r),
                            p = -h * h + f * (f + 2 * c) + l) : f <= v ? (h = 0,
                                f = Math.min(Math.max(-r, -c), r),
                                p = f * (f + 2 * c) + l) : (h = Math.max(0, -(o * r + a)),
                                    f = h > 0 ? r : Math.min(Math.max(-r, -c), r),
                                    p = -h * h + f * (f + 2 * c) + l);
                else
                    f = o > 0 ? -r : r,
                        h = Math.max(0, -(o * f + a)),
                        p = -h * h + f * (f + 2 * c) + l;
                return i && i.copy(this.origin).addScaledVector(this.direction, h),
                    s && s.copy(tl).addScaledVector(Tr, f),
                    p
            }
            intersectSphere(t, e) {
                An.subVectors(t.center, this.origin);
                let i = An.dot(this.direction)
                    , s = An.dot(An) - i * i
                    , r = t.radius * t.radius;
                if (s > r)
                    return null;
                let o = Math.sqrt(r - s)
                    , a = i - o
                    , c = i + o;
                return c < 0 ? null : a < 0 ? this.at(c, e) : this.at(a, e)
            }
            intersectsSphere(t) {
                return t.radius < 0 ? !1 : this.distanceSqToPoint(t.center) <= t.radius * t.radius
            }
            distanceToPlane(t) {
                let e = t.normal.dot(this.direction);
                if (e === 0)
                    return t.distanceToPoint(this.origin) === 0 ? 0 : null;
                let i = -(this.origin.dot(t.normal) + t.constant) / e;
                return i >= 0 ? i : null
            }
            intersectPlane(t, e) {
                let i = this.distanceToPlane(t);
                return i === null ? null : this.at(i, e)
            }
            intersectsPlane(t) {
                let e = t.distanceToPoint(this.origin);
                return e === 0 || t.normal.dot(this.direction) * e < 0
            }
            intersectBox(t, e) {
                let i, s, r, o, a, c, l = 1 / this.direction.x, d = 1 / this.direction.y, h = 1 / this.direction.z, f = this.origin;
                return l >= 0 ? (i = (t.min.x - f.x) * l,
                    s = (t.max.x - f.x) * l) : (i = (t.max.x - f.x) * l,
                        s = (t.min.x - f.x) * l),
                    d >= 0 ? (r = (t.min.y - f.y) * d,
                        o = (t.max.y - f.y) * d) : (r = (t.max.y - f.y) * d,
                            o = (t.min.y - f.y) * d),
                    i > o || r > s || ((r > i || isNaN(i)) && (i = r),
                        (o < s || isNaN(s)) && (s = o),
                        h >= 0 ? (a = (t.min.z - f.z) * h,
                            c = (t.max.z - f.z) * h) : (a = (t.max.z - f.z) * h,
                                c = (t.min.z - f.z) * h),
                        i > c || a > s) || ((a > i || i !== i) && (i = a),
                            (c < s || s !== s) && (s = c),
                            s < 0) ? null : this.at(i >= 0 ? i : s, e)
            }
            intersectsBox(t) {
                return this.intersectBox(t, An) !== null
            }
            intersectTriangle(t, e, i, s, r) {
                el.subVectors(e, t),
                    Er.subVectors(i, t),
                    nl.crossVectors(el, Er);
                let o = this.direction.dot(nl), a;
                if (o > 0) {
                    if (s)
                        return null;
                    a = 1
                } else if (o < 0)
                    a = -1,
                        o = -o;
                else
                    return null;
                kn.subVectors(this.origin, t);
                let c = a * this.direction.dot(Er.crossVectors(kn, Er));
                if (c < 0)
                    return null;
                let l = a * this.direction.dot(el.cross(kn));
                if (l < 0 || c + l > o)
                    return null;
                let d = -a * kn.dot(nl);
                return d < 0 ? null : this.at(d / o, r)
            }
            applyMatrix4(t) {
                return this.origin.applyMatrix4(t),
                    this.direction.transformDirection(t),
                    this
            }
            equals(t) {
                return t.origin.equals(this.origin) && t.direction.equals(this.direction)
            }
            clone() {
                return new this.constructor().copy(this)
            }
        }
        , me = class n {
            constructor(t, e, i, s, r, o, a, c, l, d, h, f, p, v, g, m) {
                n.prototype.isMatrix4 = !0,
                    this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                    t !== void 0 && this.set(t, e, i, s, r, o, a, c, l, d, h, f, p, v, g, m)
            }
            set(t, e, i, s, r, o, a, c, l, d, h, f, p, v, g, m) {
                let u = this.elements;
                return u[0] = t,
                    u[4] = e,
                    u[8] = i,
                    u[12] = s,
                    u[1] = r,
                    u[5] = o,
                    u[9] = a,
                    u[13] = c,
                    u[2] = l,
                    u[6] = d,
                    u[10] = h,
                    u[14] = f,
                    u[3] = p,
                    u[7] = v,
                    u[11] = g,
                    u[15] = m,
                    this
            }
            identity() {
                return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
                    this
            }
            clone() {
                return new n().fromArray(this.elements)
            }
            copy(t) {
                let e = this.elements
                    , i = t.elements;
                return e[0] = i[0],
                    e[1] = i[1],
                    e[2] = i[2],
                    e[3] = i[3],
                    e[4] = i[4],
                    e[5] = i[5],
                    e[6] = i[6],
                    e[7] = i[7],
                    e[8] = i[8],
                    e[9] = i[9],
                    e[10] = i[10],
                    e[11] = i[11],
                    e[12] = i[12],
                    e[13] = i[13],
                    e[14] = i[14],
                    e[15] = i[15],
                    this
            }
            copyPosition(t) {
                let e = this.elements
                    , i = t.elements;
                return e[12] = i[12],
                    e[13] = i[13],
                    e[14] = i[14],
                    this
            }
            setFromMatrix3(t) {
                let e = t.elements;
                return this.set(e[0], e[3], e[6], 0, e[1], e[4], e[7], 0, e[2], e[5], e[8], 0, 0, 0, 0, 1),
                    this
            }
            extractBasis(t, e, i) {
                return t.setFromMatrixColumn(this, 0),
                    e.setFromMatrixColumn(this, 1),
                    i.setFromMatrixColumn(this, 2),
                    this
            }
            makeBasis(t, e, i) {
                return this.set(t.x, e.x, i.x, 0, t.y, e.y, i.y, 0, t.z, e.z, i.z, 0, 0, 0, 0, 1),
                    this
            }
            extractRotation(t) {
                let e = this.elements
                    , i = t.elements
                    , s = 1 / zi.setFromMatrixColumn(t, 0).length()
                    , r = 1 / zi.setFromMatrixColumn(t, 1).length()
                    , o = 1 / zi.setFromMatrixColumn(t, 2).length();
                return e[0] = i[0] * s,
                    e[1] = i[1] * s,
                    e[2] = i[2] * s,
                    e[3] = 0,
                    e[4] = i[4] * r,
                    e[5] = i[5] * r,
                    e[6] = i[6] * r,
                    e[7] = 0,
                    e[8] = i[8] * o,
                    e[9] = i[9] * o,
                    e[10] = i[10] * o,
                    e[11] = 0,
                    e[12] = 0,
                    e[13] = 0,
                    e[14] = 0,
                    e[15] = 1,
                    this
            }
            makeRotationFromEuler(t) {
                let e = this.elements
                    , i = t.x
                    , s = t.y
                    , r = t.z
                    , o = Math.cos(i)
                    , a = Math.sin(i)
                    , c = Math.cos(s)
                    , l = Math.sin(s)
                    , d = Math.cos(r)
                    , h = Math.sin(r);
                if (t.order === "XYZ") {
                    let f = o * d
                        , p = o * h
                        , v = a * d
                        , g = a * h;
                    e[0] = c * d,
                        e[4] = -c * h,
                        e[8] = l,
                        e[1] = p + v * l,
                        e[5] = f - g * l,
                        e[9] = -a * c,
                        e[2] = g - f * l,
                        e[6] = v + p * l,
                        e[10] = o * c
                } else if (t.order === "YXZ") {
                    let f = c * d
                        , p = c * h
                        , v = l * d
                        , g = l * h;
                    e[0] = f + g * a,
                        e[4] = v * a - p,
                        e[8] = o * l,
                        e[1] = o * h,
                        e[5] = o * d,
                        e[9] = -a,
                        e[2] = p * a - v,
                        e[6] = g + f * a,
                        e[10] = o * c
                } else if (t.order === "ZXY") {
                    let f = c * d
                        , p = c * h
                        , v = l * d
                        , g = l * h;
                    e[0] = f - g * a,
                        e[4] = -o * h,
                        e[8] = v + p * a,
                        e[1] = p + v * a,
                        e[5] = o * d,
                        e[9] = g - f * a,
                        e[2] = -o * l,
                        e[6] = a,
                        e[10] = o * c
                } else if (t.order === "ZYX") {
                    let f = o * d
                        , p = o * h
                        , v = a * d
                        , g = a * h;
                    e[0] = c * d,
                        e[4] = v * l - p,
                        e[8] = f * l + g,
                        e[1] = c * h,
                        e[5] = g * l + f,
                        e[9] = p * l - v,
                        e[2] = -l,
                        e[6] = a * c,
                        e[10] = o * c
                } else if (t.order === "YZX") {
                    let f = o * c
                        , p = o * l
                        , v = a * c
                        , g = a * l;
                    e[0] = c * d,
                        e[4] = g - f * h,
                        e[8] = v * h + p,
                        e[1] = h,
                        e[5] = o * d,
                        e[9] = -a * d,
                        e[2] = -l * d,
                        e[6] = p * h + v,
                        e[10] = f - g * h
                } else if (t.order === "XZY") {
                    let f = o * c
                        , p = o * l
                        , v = a * c
                        , g = a * l;
                    e[0] = c * d,
                        e[4] = -h,
                        e[8] = l * d,
                        e[1] = f * h + g,
                        e[5] = o * d,
                        e[9] = p * h - v,
                        e[2] = v * h - p,
                        e[6] = a * d,
                        e[10] = g * h + f
                }
                return e[3] = 0,
                    e[7] = 0,
                    e[11] = 0,
                    e[12] = 0,
                    e[13] = 0,
                    e[14] = 0,
                    e[15] = 1,
                    this
            }
            makeRotationFromQuaternion(t) {
                return this.compose(af, t, lf)
            }
            lookAt(t, e, i) {
                let s = this.elements;
                return Ge.subVectors(t, e),
                    Ge.lengthSq() === 0 && (Ge.z = 1),
                    Ge.normalize(),
                    Vn.crossVectors(i, Ge),
                    Vn.lengthSq() === 0 && (Math.abs(i.z) === 1 ? Ge.x += 1e-4 : Ge.z += 1e-4,
                        Ge.normalize(),
                        Vn.crossVectors(i, Ge)),
                    Vn.normalize(),
                    wr.crossVectors(Ge, Vn),
                    s[0] = Vn.x,
                    s[4] = wr.x,
                    s[8] = Ge.x,
                    s[1] = Vn.y,
                    s[5] = wr.y,
                    s[9] = Ge.y,
                    s[2] = Vn.z,
                    s[6] = wr.z,
                    s[10] = Ge.z,
                    this
            }
            multiply(t) {
                return this.multiplyMatrices(this, t)
            }
            premultiply(t) {
                return this.multiplyMatrices(t, this)
            }
            multiplyMatrices(t, e) {
                let i = t.elements
                    , s = e.elements
                    , r = this.elements
                    , o = i[0]
                    , a = i[4]
                    , c = i[8]
                    , l = i[12]
                    , d = i[1]
                    , h = i[5]
                    , f = i[9]
                    , p = i[13]
                    , v = i[2]
                    , g = i[6]
                    , m = i[10]
                    , u = i[14]
                    , E = i[3]
                    , T = i[7]
                    , y = i[11]
                    , C = i[15]
                    , R = s[0]
                    , D = s[4]
                    , N = s[8]
                    , S = s[12]
                    , M = s[1]
                    , w = s[5]
                    , V = s[9]
                    , H = s[13]
                    , z = s[2]
                    , Z = s[6]
                    , q = s[10]
                    , tt = s[14]
                    , k = s[3]
                    , rt = s[7]
                    , ht = s[11]
                    , bt = s[15];
                return r[0] = o * R + a * M + c * z + l * k,
                    r[4] = o * D + a * w + c * Z + l * rt,
                    r[8] = o * N + a * V + c * q + l * ht,
                    r[12] = o * S + a * H + c * tt + l * bt,
                    r[1] = d * R + h * M + f * z + p * k,
                    r[5] = d * D + h * w + f * Z + p * rt,
                    r[9] = d * N + h * V + f * q + p * ht,
                    r[13] = d * S + h * H + f * tt + p * bt,
                    r[2] = v * R + g * M + m * z + u * k,
                    r[6] = v * D + g * w + m * Z + u * rt,
                    r[10] = v * N + g * V + m * q + u * ht,
                    r[14] = v * S + g * H + m * tt + u * bt,
                    r[3] = E * R + T * M + y * z + C * k,
                    r[7] = E * D + T * w + y * Z + C * rt,
                    r[11] = E * N + T * V + y * q + C * ht,
                    r[15] = E * S + T * H + y * tt + C * bt,
                    this
            }
            multiplyScalar(t) {
                let e = this.elements;
                return e[0] *= t,
                    e[4] *= t,
                    e[8] *= t,
                    e[12] *= t,
                    e[1] *= t,
                    e[5] *= t,
                    e[9] *= t,
                    e[13] *= t,
                    e[2] *= t,
                    e[6] *= t,
                    e[10] *= t,
                    e[14] *= t,
                    e[3] *= t,
                    e[7] *= t,
                    e[11] *= t,
                    e[15] *= t,
                    this
            }
            determinant() {
                let t = this.elements
                    , e = t[0]
                    , i = t[4]
                    , s = t[8]
                    , r = t[12]
                    , o = t[1]
                    , a = t[5]
                    , c = t[9]
                    , l = t[13]
                    , d = t[2]
                    , h = t[6]
                    , f = t[10]
                    , p = t[14]
                    , v = t[3]
                    , g = t[7]
                    , m = t[11]
                    , u = t[15];
                return v * (+r * c * h - s * l * h - r * a * f + i * l * f + s * a * p - i * c * p) + g * (+e * c * p - e * l * f + r * o * f - s * o * p + s * l * d - r * c * d) + m * (+e * l * h - e * a * p - r * o * h + i * o * p + r * a * d - i * l * d) + u * (-s * a * d - e * c * h + e * a * f + s * o * h - i * o * f + i * c * d)
            }
            transpose() {
                let t = this.elements, e;
                return e = t[1],
                    t[1] = t[4],
                    t[4] = e,
                    e = t[2],
                    t[2] = t[8],
                    t[8] = e,
                    e = t[6],
                    t[6] = t[9],
                    t[9] = e,
                    e = t[3],
                    t[3] = t[12],
                    t[12] = e,
                    e = t[7],
                    t[7] = t[13],
                    t[13] = e,
                    e = t[11],
                    t[11] = t[14],
                    t[14] = e,
                    this
            }
            setPosition(t, e, i) {
                let s = this.elements;
                return t.isVector3 ? (s[12] = t.x,
                    s[13] = t.y,
                    s[14] = t.z) : (s[12] = t,
                        s[13] = e,
                        s[14] = i),
                    this
            }
            invert() {
                let t = this.elements
                    , e = t[0]
                    , i = t[1]
                    , s = t[2]
                    , r = t[3]
                    , o = t[4]
                    , a = t[5]
                    , c = t[6]
                    , l = t[7]
                    , d = t[8]
                    , h = t[9]
                    , f = t[10]
                    , p = t[11]
                    , v = t[12]
                    , g = t[13]
                    , m = t[14]
                    , u = t[15]
                    , E = h * m * l - g * f * l + g * c * p - a * m * p - h * c * u + a * f * u
                    , T = v * f * l - d * m * l - v * c * p + o * m * p + d * c * u - o * f * u
                    , y = d * g * l - v * h * l + v * a * p - o * g * p - d * a * u + o * h * u
                    , C = v * h * c - d * g * c - v * a * f + o * g * f + d * a * m - o * h * m
                    , R = e * E + i * T + s * y + r * C;
                if (R === 0)
                    return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                let D = 1 / R;
                return t[0] = E * D,
                    t[1] = (g * f * r - h * m * r - g * s * p + i * m * p + h * s * u - i * f * u) * D,
                    t[2] = (a * m * r - g * c * r + g * s * l - i * m * l - a * s * u + i * c * u) * D,
                    t[3] = (h * c * r - a * f * r - h * s * l + i * f * l + a * s * p - i * c * p) * D,
                    t[4] = T * D,
                    t[5] = (d * m * r - v * f * r + v * s * p - e * m * p - d * s * u + e * f * u) * D,
                    t[6] = (v * c * r - o * m * r - v * s * l + e * m * l + o * s * u - e * c * u) * D,
                    t[7] = (o * f * r - d * c * r + d * s * l - e * f * l - o * s * p + e * c * p) * D,
                    t[8] = y * D,
                    t[9] = (v * h * r - d * g * r - v * i * p + e * g * p + d * i * u - e * h * u) * D,
                    t[10] = (o * g * r - v * a * r + v * i * l - e * g * l - o * i * u + e * a * u) * D,
                    t[11] = (d * a * r - o * h * r - d * i * l + e * h * l + o * i * p - e * a * p) * D,
                    t[12] = C * D,
                    t[13] = (d * g * s - v * h * s + v * i * f - e * g * f - d * i * m + e * h * m) * D,
                    t[14] = (v * a * s - o * g * s - v * i * c + e * g * c + o * i * m - e * a * m) * D,
                    t[15] = (o * h * s - d * a * s + d * i * c - e * h * c - o * i * f + e * a * f) * D,
                    this
            }
            scale(t) {
                let e = this.elements
                    , i = t.x
                    , s = t.y
                    , r = t.z;
                return e[0] *= i,
                    e[4] *= s,
                    e[8] *= r,
                    e[1] *= i,
                    e[5] *= s,
                    e[9] *= r,
                    e[2] *= i,
                    e[6] *= s,
                    e[10] *= r,
                    e[3] *= i,
                    e[7] *= s,
                    e[11] *= r,
                    this
            }
            getMaxScaleOnAxis() {
                let t = this.elements
                    , e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2]
                    , i = t[4] * t[4] + t[5] * t[5] + t[6] * t[6]
                    , s = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
                return Math.sqrt(Math.max(e, i, s))
            }
            makeTranslation(t, e, i) {
                return t.isVector3 ? this.set(1, 0, 0, t.x, 0, 1, 0, t.y, 0, 0, 1, t.z, 0, 0, 0, 1) : this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, i, 0, 0, 0, 1),
                    this
            }
            makeRotationX(t) {
                let e = Math.cos(t)
                    , i = Math.sin(t);
                return this.set(1, 0, 0, 0, 0, e, -i, 0, 0, i, e, 0, 0, 0, 0, 1),
                    this
            }
            makeRotationY(t) {
                let e = Math.cos(t)
                    , i = Math.sin(t);
                return this.set(e, 0, i, 0, 0, 1, 0, 0, -i, 0, e, 0, 0, 0, 0, 1),
                    this
            }
            makeRotationZ(t) {
                let e = Math.cos(t)
                    , i = Math.sin(t);
                return this.set(e, -i, 0, 0, i, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
                    this
            }
            makeRotationAxis(t, e) {
                let i = Math.cos(e)
                    , s = Math.sin(e)
                    , r = 1 - i
                    , o = t.x
                    , a = t.y
                    , c = t.z
                    , l = r * o
                    , d = r * a;
                return this.set(l * o + i, l * a - s * c, l * c + s * a, 0, l * a + s * c, d * a + i, d * c - s * o, 0, l * c - s * a, d * c + s * o, r * c * c + i, 0, 0, 0, 0, 1),
                    this
            }
            makeScale(t, e, i) {
                return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1),
                    this
            }
            makeShear(t, e, i, s, r, o) {
                return this.set(1, i, r, 0, t, 1, o, 0, e, s, 1, 0, 0, 0, 0, 1),
                    this
            }
            compose(t, e, i) {
                let s = this.elements
                    , r = e._x
                    , o = e._y
                    , a = e._z
                    , c = e._w
                    , l = r + r
                    , d = o + o
                    , h = a + a
                    , f = r * l
                    , p = r * d
                    , v = r * h
                    , g = o * d
                    , m = o * h
                    , u = a * h
                    , E = c * l
                    , T = c * d
                    , y = c * h
                    , C = i.x
                    , R = i.y
                    , D = i.z;
                return s[0] = (1 - (g + u)) * C,
                    s[1] = (p + y) * C,
                    s[2] = (v - T) * C,
                    s[3] = 0,
                    s[4] = (p - y) * R,
                    s[5] = (1 - (f + u)) * R,
                    s[6] = (m + E) * R,
                    s[7] = 0,
                    s[8] = (v + T) * D,
                    s[9] = (m - E) * D,
                    s[10] = (1 - (f + g)) * D,
                    s[11] = 0,
                    s[12] = t.x,
                    s[13] = t.y,
                    s[14] = t.z,
                    s[15] = 1,
                    this
            }
            decompose(t, e, i) {
                let s = this.elements
                    , r = zi.set(s[0], s[1], s[2]).length()
                    , o = zi.set(s[4], s[5], s[6]).length()
                    , a = zi.set(s[8], s[9], s[10]).length();
                this.determinant() < 0 && (r = -r),
                    t.x = s[12],
                    t.y = s[13],
                    t.z = s[14],
                    ln.copy(this);
                let l = 1 / r
                    , d = 1 / o
                    , h = 1 / a;
                return ln.elements[0] *= l,
                    ln.elements[1] *= l,
                    ln.elements[2] *= l,
                    ln.elements[4] *= d,
                    ln.elements[5] *= d,
                    ln.elements[6] *= d,
                    ln.elements[8] *= h,
                    ln.elements[9] *= h,
                    ln.elements[10] *= h,
                    e.setFromRotationMatrix(ln),
                    i.x = r,
                    i.y = o,
                    i.z = a,
                    this
            }
            makePerspective(t, e, i, s, r, o, a = hn, c = !1) {
                let l = this.elements, d = 2 * r / (e - t), h = 2 * r / (i - s), f = (e + t) / (e - t), p = (i + s) / (i - s), v, g;
                if (c)
                    v = r / (o - r),
                        g = o * r / (o - r);
                else if (a === hn)
                    v = -(o + r) / (o - r),
                        g = -2 * o * r / (o - r);
                else if (a === Ps)
                    v = -o / (o - r),
                        g = -o * r / (o - r);
                else
                    throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a);
                return l[0] = d,
                    l[4] = 0,
                    l[8] = f,
                    l[12] = 0,
                    l[1] = 0,
                    l[5] = h,
                    l[9] = p,
                    l[13] = 0,
                    l[2] = 0,
                    l[6] = 0,
                    l[10] = v,
                    l[14] = g,
                    l[3] = 0,
                    l[7] = 0,
                    l[11] = -1,
                    l[15] = 0,
                    this
            }
            makeOrthographic(t, e, i, s, r, o, a = hn, c = !1) {
                let l = this.elements, d = 2 / (e - t), h = 2 / (i - s), f = -(e + t) / (e - t), p = -(i + s) / (i - s), v, g;
                if (c)
                    v = 1 / (o - r),
                        g = o / (o - r);
                else if (a === hn)
                    v = -2 / (o - r),
                        g = -(o + r) / (o - r);
                else if (a === Ps)
                    v = -1 / (o - r),
                        g = -r / (o - r);
                else
                    throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a);
                return l[0] = d,
                    l[4] = 0,
                    l[8] = 0,
                    l[12] = f,
                    l[1] = 0,
                    l[5] = h,
                    l[9] = 0,
                    l[13] = p,
                    l[2] = 0,
                    l[6] = 0,
                    l[10] = v,
                    l[14] = g,
                    l[3] = 0,
                    l[7] = 0,
                    l[11] = 0,
                    l[15] = 1,
                    this
            }
            equals(t) {
                let e = this.elements
                    , i = t.elements;
                for (let s = 0; s < 16; s++)
                    if (e[s] !== i[s])
                        return !1;
                return !0
            }
            fromArray(t, e = 0) {
                for (let i = 0; i < 16; i++)
                    this.elements[i] = t[i + e];
                return this
            }
            toArray(t = [], e = 0) {
                let i = this.elements;
                return t[e] = i[0],
                    t[e + 1] = i[1],
                    t[e + 2] = i[2],
                    t[e + 3] = i[3],
                    t[e + 4] = i[4],
                    t[e + 5] = i[5],
                    t[e + 6] = i[6],
                    t[e + 7] = i[7],
                    t[e + 8] = i[8],
                    t[e + 9] = i[9],
                    t[e + 10] = i[10],
                    t[e + 11] = i[11],
                    t[e + 12] = i[12],
                    t[e + 13] = i[13],
                    t[e + 14] = i[14],
                    t[e + 15] = i[15],
                    t
            }
        }
        , zi = new P
        , ln = new me
        , af = new P(0, 0, 0)
        , lf = new P(1, 1, 1)
        , Vn = new P
        , wr = new P
        , Ge = new P
        , uh = new me
        , dh = new rn
        , vn = class n {
            constructor(t = 0, e = 0, i = 0, s = n.DEFAULT_ORDER) {
                this.isEuler = !0,
                    this._x = t,
                    this._y = e,
                    this._z = i,
                    this._order = s
            }
            get x() {
                return this._x
            }
            set x(t) {
                this._x = t,
                    this._onChangeCallback()
            }
            get y() {
                return this._y
            }
            set y(t) {
                this._y = t,
                    this._onChangeCallback()
            }
            get z() {
                return this._z
            }
            set z(t) {
                this._z = t,
                    this._onChangeCallback()
            }
            get order() {
                return this._order
            }
            set order(t) {
                this._order = t,
                    this._onChangeCallback()
            }
            set(t, e, i, s = this._order) {
                return this._x = t,
                    this._y = e,
                    this._z = i,
                    this._order = s,
                    this._onChangeCallback(),
                    this
            }
            clone() {
                return new this.constructor(this._x, this._y, this._z, this._order)
            }
            copy(t) {
                return this._x = t._x,
                    this._y = t._y,
                    this._z = t._z,
                    this._order = t._order,
                    this._onChangeCallback(),
                    this
            }
            setFromRotationMatrix(t, e = this._order, i = !0) {
                let s = t.elements
                    , r = s[0]
                    , o = s[4]
                    , a = s[8]
                    , c = s[1]
                    , l = s[5]
                    , d = s[9]
                    , h = s[2]
                    , f = s[6]
                    , p = s[10];
                switch (e) {
                    case "XYZ":
                        this._y = Math.asin(kt(a, -1, 1)),
                            Math.abs(a) < .9999999 ? (this._x = Math.atan2(-d, p),
                                this._z = Math.atan2(-o, r)) : (this._x = Math.atan2(f, l),
                                    this._z = 0);
                        break;
                    case "YXZ":
                        this._x = Math.asin(-kt(d, -1, 1)),
                            Math.abs(d) < .9999999 ? (this._y = Math.atan2(a, p),
                                this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-h, r),
                                    this._z = 0);
                        break;
                    case "ZXY":
                        this._x = Math.asin(kt(f, -1, 1)),
                            Math.abs(f) < .9999999 ? (this._y = Math.atan2(-h, p),
                                this._z = Math.atan2(-o, l)) : (this._y = 0,
                                    this._z = Math.atan2(c, r));
                        break;
                    case "ZYX":
                        this._y = Math.asin(-kt(h, -1, 1)),
                            Math.abs(h) < .9999999 ? (this._x = Math.atan2(f, p),
                                this._z = Math.atan2(c, r)) : (this._x = 0,
                                    this._z = Math.atan2(-o, l));
                        break;
                    case "YZX":
                        this._z = Math.asin(kt(c, -1, 1)),
                            Math.abs(c) < .9999999 ? (this._x = Math.atan2(-d, l),
                                this._y = Math.atan2(-h, r)) : (this._x = 0,
                                    this._y = Math.atan2(a, p));
                        break;
                    case "XZY":
                        this._z = Math.asin(-kt(o, -1, 1)),
                            Math.abs(o) < .9999999 ? (this._x = Math.atan2(f, l),
                                this._y = Math.atan2(a, r)) : (this._x = Math.atan2(-d, p),
                                    this._y = 0);
                        break;
                    default:
                        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e)
                }
                return this._order = e,
                    i === !0 && this._onChangeCallback(),
                    this
            }
            setFromQuaternion(t, e, i) {
                return uh.makeRotationFromQuaternion(t),
                    this.setFromRotationMatrix(uh, e, i)
            }
            setFromVector3(t, e = this._order) {
                return this.set(t.x, t.y, t.z, e)
            }
            reorder(t) {
                return dh.setFromEuler(this),
                    this.setFromQuaternion(dh, t)
            }
            equals(t) {
                return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order
            }
            fromArray(t) {
                return this._x = t[0],
                    this._y = t[1],
                    this._z = t[2],
                    t[3] !== void 0 && (this._order = t[3]),
                    this._onChangeCallback(),
                    this
            }
            toArray(t = [], e = 0) {
                return t[e] = this._x,
                    t[e + 1] = this._y,
                    t[e + 2] = this._z,
                    t[e + 3] = this._order,
                    t
            }
            _onChange(t) {
                return this._onChangeCallback = t,
                    this
            }
            _onChangeCallback() { }
            *[Symbol.iterator]() {
                yield this._x,
                    yield this._y,
                    yield this._z,
                    yield this._order
            }
        }
        ;
    vn.DEFAULT_ORDER = "XYZ";
    var Ls = class {
        constructor() {
            this.mask = 1
        }
        set(t) {
            this.mask = (1 << t | 0) >>> 0
        }
        enable(t) {
            this.mask |= 1 << t | 0
        }
        enableAll() {
            this.mask = -1
        }
        toggle(t) {
            this.mask ^= 1 << t | 0
        }
        disable(t) {
            this.mask &= ~(1 << t | 0)
        }
        disableAll() {
            this.mask = 0
        }
        test(t) {
            return (this.mask & t.mask) !== 0
        }
        isEnabled(t) {
            return (this.mask & (1 << t | 0)) !== 0
        }
    }
        , cf = 0
        , fh = new P
        , ki = new rn
        , Cn = new me
        , Ar = new P
        , bs = new P
        , hf = new P
        , uf = new rn
        , ph = new P(1, 0, 0)
        , mh = new P(0, 1, 0)
        , gh = new P(0, 0, 1)
        , _h = {
            type: "added"
        }
        , df = {
            type: "removed"
        }
        , Vi = {
            type: "childadded",
            child: null
        }
        , il = {
            type: "childremoved",
            child: null
        }
        , Ze = class n extends _n {
            constructor() {
                super(),
                    this.isObject3D = !0,
                    Object.defineProperty(this, "id", {
                        value: cf++
                    }),
                    this.uuid = os(),
                    this.name = "",
                    this.type = "Object3D",
                    this.parent = null,
                    this.children = [],
                    this.up = n.DEFAULT_UP.clone();
                let t = new P
                    , e = new vn
                    , i = new rn
                    , s = new P(1, 1, 1);
                function r() {
                    i.setFromEuler(e, !1)
                }
                function o() {
                    e.setFromQuaternion(i, void 0, !1)
                }
                e._onChange(r),
                    i._onChange(o),
                    Object.defineProperties(this, {
                        position: {
                            configurable: !0,
                            enumerable: !0,
                            value: t
                        },
                        rotation: {
                            configurable: !0,
                            enumerable: !0,
                            value: e
                        },
                        quaternion: {
                            configurable: !0,
                            enumerable: !0,
                            value: i
                        },
                        scale: {
                            configurable: !0,
                            enumerable: !0,
                            value: s
                        },
                        modelViewMatrix: {
                            value: new me
                        },
                        normalMatrix: {
                            value: new Nt
                        }
                    }),
                    this.matrix = new me,
                    this.matrixWorld = new me,
                    this.matrixAutoUpdate = n.DEFAULT_MATRIX_AUTO_UPDATE,
                    this.matrixWorldAutoUpdate = n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,
                    this.matrixWorldNeedsUpdate = !1,
                    this.layers = new Ls,
                    this.visible = !0,
                    this.castShadow = !1,
                    this.receiveShadow = !1,
                    this.frustumCulled = !0,
                    this.renderOrder = 0,
                    this.animations = [],
                    this.customDepthMaterial = void 0,
                    this.customDistanceMaterial = void 0,
                    this.userData = {}
            }
            onBeforeShadow() { }
            onAfterShadow() { }
            onBeforeRender() { }
            onAfterRender() { }
            applyMatrix4(t) {
                this.matrixAutoUpdate && this.updateMatrix(),
                    this.matrix.premultiply(t),
                    this.matrix.decompose(this.position, this.quaternion, this.scale)
            }
            applyQuaternion(t) {
                return this.quaternion.premultiply(t),
                    this
            }
            setRotationFromAxisAngle(t, e) {
                this.quaternion.setFromAxisAngle(t, e)
            }
            setRotationFromEuler(t) {
                this.quaternion.setFromEuler(t, !0)
            }
            setRotationFromMatrix(t) {
                this.quaternion.setFromRotationMatrix(t)
            }
            setRotationFromQuaternion(t) {
                this.quaternion.copy(t)
            }
            rotateOnAxis(t, e) {
                return ki.setFromAxisAngle(t, e),
                    this.quaternion.multiply(ki),
                    this
            }
            rotateOnWorldAxis(t, e) {
                return ki.setFromAxisAngle(t, e),
                    this.quaternion.premultiply(ki),
                    this
            }
            rotateX(t) {
                return this.rotateOnAxis(ph, t)
            }
            rotateY(t) {
                return this.rotateOnAxis(mh, t)
            }
            rotateZ(t) {
                return this.rotateOnAxis(gh, t)
            }
            translateOnAxis(t, e) {
                return fh.copy(t).applyQuaternion(this.quaternion),
                    this.position.add(fh.multiplyScalar(e)),
                    this
            }
            translateX(t) {
                return this.translateOnAxis(ph, t)
            }
            translateY(t) {
                return this.translateOnAxis(mh, t)
            }
            translateZ(t) {
                return this.translateOnAxis(gh, t)
            }
            localToWorld(t) {
                return this.updateWorldMatrix(!0, !1),
                    t.applyMatrix4(this.matrixWorld)
            }
            worldToLocal(t) {
                return this.updateWorldMatrix(!0, !1),
                    t.applyMatrix4(Cn.copy(this.matrixWorld).invert())
            }
            lookAt(t, e, i) {
                t.isVector3 ? Ar.copy(t) : Ar.set(t, e, i);
                let s = this.parent;
                this.updateWorldMatrix(!0, !1),
                    bs.setFromMatrixPosition(this.matrixWorld),
                    this.isCamera || this.isLight ? Cn.lookAt(bs, Ar, this.up) : Cn.lookAt(Ar, bs, this.up),
                    this.quaternion.setFromRotationMatrix(Cn),
                    s && (Cn.extractRotation(s.matrixWorld),
                        ki.setFromRotationMatrix(Cn),
                        this.quaternion.premultiply(ki.invert()))
            }
            add(t) {
                if (arguments.length > 1) {
                    for (let e = 0; e < arguments.length; e++)
                        this.add(arguments[e]);
                    return this
                }
                return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t),
                    this) : (t && t.isObject3D ? (t.removeFromParent(),
                        t.parent = this,
                        this.children.push(t),
                        t.dispatchEvent(_h),
                        Vi.child = t,
                        this.dispatchEvent(Vi),
                        Vi.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t),
                        this)
            }
            remove(t) {
                if (arguments.length > 1) {
                    for (let i = 0; i < arguments.length; i++)
                        this.remove(arguments[i]);
                    return this
                }
                let e = this.children.indexOf(t);
                return e !== -1 && (t.parent = null,
                    this.children.splice(e, 1),
                    t.dispatchEvent(df),
                    il.child = t,
                    this.dispatchEvent(il),
                    il.child = null),
                    this
            }
            removeFromParent() {
                let t = this.parent;
                return t !== null && t.remove(this),
                    this
            }
            clear() {
                return this.remove(...this.children)
            }
            attach(t) {
                return this.updateWorldMatrix(!0, !1),
                    Cn.copy(this.matrixWorld).invert(),
                    t.parent !== null && (t.parent.updateWorldMatrix(!0, !1),
                        Cn.multiply(t.parent.matrixWorld)),
                    t.applyMatrix4(Cn),
                    t.removeFromParent(),
                    t.parent = this,
                    this.children.push(t),
                    t.updateWorldMatrix(!1, !0),
                    t.dispatchEvent(_h),
                    Vi.child = t,
                    this.dispatchEvent(Vi),
                    Vi.child = null,
                    this
            }
            getObjectById(t) {
                return this.getObjectByProperty("id", t)
            }
            getObjectByName(t) {
                return this.getObjectByProperty("name", t)
            }
            getObjectByProperty(t, e) {
                if (this[t] === e)
                    return this;
                for (let i = 0, s = this.children.length; i < s; i++) {
                    let o = this.children[i].getObjectByProperty(t, e);
                    if (o !== void 0)
                        return o
                }
            }
            getObjectsByProperty(t, e, i = []) {
                this[t] === e && i.push(this);
                let s = this.children;
                for (let r = 0, o = s.length; r < o; r++)
                    s[r].getObjectsByProperty(t, e, i);
                return i
            }
            getWorldPosition(t) {
                return this.updateWorldMatrix(!0, !1),
                    t.setFromMatrixPosition(this.matrixWorld)
            }
            getWorldQuaternion(t) {
                return this.updateWorldMatrix(!0, !1),
                    this.matrixWorld.decompose(bs, t, hf),
                    t
            }
            getWorldScale(t) {
                return this.updateWorldMatrix(!0, !1),
                    this.matrixWorld.decompose(bs, uf, t),
                    t
            }
            getWorldDirection(t) {
                this.updateWorldMatrix(!0, !1);
                let e = this.matrixWorld.elements;
                return t.set(e[8], e[9], e[10]).normalize()
            }
            raycast() { }
            traverse(t) {
                t(this);
                let e = this.children;
                for (let i = 0, s = e.length; i < s; i++)
                    e[i].traverse(t)
            }
            traverseVisible(t) {
                if (this.visible === !1)
                    return;
                t(this);
                let e = this.children;
                for (let i = 0, s = e.length; i < s; i++)
                    e[i].traverseVisible(t)
            }
            traverseAncestors(t) {
                let e = this.parent;
                e !== null && (t(e),
                    e.traverseAncestors(t))
            }
            updateMatrix() {
                this.matrix.compose(this.position, this.quaternion, this.scale),
                    this.matrixWorldNeedsUpdate = !0
            }
            updateMatrixWorld(t) {
                this.matrixAutoUpdate && this.updateMatrix(),
                    (this.matrixWorldNeedsUpdate || t) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)),
                        this.matrixWorldNeedsUpdate = !1,
                        t = !0);
                let e = this.children;
                for (let i = 0, s = e.length; i < s; i++)
                    e[i].updateMatrixWorld(t)
            }
            updateWorldMatrix(t, e) {
                let i = this.parent;
                if (t === !0 && i !== null && i.updateWorldMatrix(!0, !1),
                    this.matrixAutoUpdate && this.updateMatrix(),
                    this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)),
                    e === !0) {
                    let s = this.children;
                    for (let r = 0, o = s.length; r < o; r++)
                        s[r].updateWorldMatrix(!1, !0)
                }
            }
            toJSON(t) {
                let e = t === void 0 || typeof t == "string"
                    , i = {};
                e && (t = {
                    geometries: {},
                    materials: {},
                    textures: {},
                    images: {},
                    shapes: {},
                    skeletons: {},
                    animations: {},
                    nodes: {}
                },
                    i.metadata = {
                        version: 4.7,
                        type: "Object",
                        generator: "Object3D.toJSON"
                    });
                let s = {};
                s.uuid = this.uuid,
                    s.type = this.type,
                    this.name !== "" && (s.name = this.name),
                    this.castShadow === !0 && (s.castShadow = !0),
                    this.receiveShadow === !0 && (s.receiveShadow = !0),
                    this.visible === !1 && (s.visible = !1),
                    this.frustumCulled === !1 && (s.frustumCulled = !1),
                    this.renderOrder !== 0 && (s.renderOrder = this.renderOrder),
                    Object.keys(this.userData).length > 0 && (s.userData = this.userData),
                    s.layers = this.layers.mask,
                    s.matrix = this.matrix.toArray(),
                    s.up = this.up.toArray(),
                    this.matrixAutoUpdate === !1 && (s.matrixAutoUpdate = !1),
                    this.isInstancedMesh && (s.type = "InstancedMesh",
                        s.count = this.count,
                        s.instanceMatrix = this.instanceMatrix.toJSON(),
                        this.instanceColor !== null && (s.instanceColor = this.instanceColor.toJSON())),
                    this.isBatchedMesh && (s.type = "BatchedMesh",
                        s.perObjectFrustumCulled = this.perObjectFrustumCulled,
                        s.sortObjects = this.sortObjects,
                        s.drawRanges = this._drawRanges,
                        s.reservedRanges = this._reservedRanges,
                        s.geometryInfo = this._geometryInfo.map(a => or(gs({}, a), {
                            boundingBox: a.boundingBox ? a.boundingBox.toJSON() : void 0,
                            boundingSphere: a.boundingSphere ? a.boundingSphere.toJSON() : void 0
                        })),
                        s.instanceInfo = this._instanceInfo.map(a => gs({}, a)),
                        s.availableInstanceIds = this._availableInstanceIds.slice(),
                        s.availableGeometryIds = this._availableGeometryIds.slice(),
                        s.nextIndexStart = this._nextIndexStart,
                        s.nextVertexStart = this._nextVertexStart,
                        s.geometryCount = this._geometryCount,
                        s.maxInstanceCount = this._maxInstanceCount,
                        s.maxVertexCount = this._maxVertexCount,
                        s.maxIndexCount = this._maxIndexCount,
                        s.geometryInitialized = this._geometryInitialized,
                        s.matricesTexture = this._matricesTexture.toJSON(t),
                        s.indirectTexture = this._indirectTexture.toJSON(t),
                        this._colorsTexture !== null && (s.colorsTexture = this._colorsTexture.toJSON(t)),
                        this.boundingSphere !== null && (s.boundingSphere = this.boundingSphere.toJSON()),
                        this.boundingBox !== null && (s.boundingBox = this.boundingBox.toJSON()));
                function r(a, c) {
                    return a[c.uuid] === void 0 && (a[c.uuid] = c.toJSON(t)),
                        c.uuid
                }
                if (this.isScene)
                    this.background && (this.background.isColor ? s.background = this.background.toJSON() : this.background.isTexture && (s.background = this.background.toJSON(t).uuid)),
                        this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (s.environment = this.environment.toJSON(t).uuid);
                else if (this.isMesh || this.isLine || this.isPoints) {
                    s.geometry = r(t.geometries, this.geometry);
                    let a = this.geometry.parameters;
                    if (a !== void 0 && a.shapes !== void 0) {
                        let c = a.shapes;
                        if (Array.isArray(c))
                            for (let l = 0, d = c.length; l < d; l++) {
                                let h = c[l];
                                r(t.shapes, h)
                            }
                        else
                            r(t.shapes, c)
                    }
                }
                if (this.isSkinnedMesh && (s.bindMode = this.bindMode,
                    s.bindMatrix = this.bindMatrix.toArray(),
                    this.skeleton !== void 0 && (r(t.skeletons, this.skeleton),
                        s.skeleton = this.skeleton.uuid)),
                    this.material !== void 0)
                    if (Array.isArray(this.material)) {
                        let a = [];
                        for (let c = 0, l = this.material.length; c < l; c++)
                            a.push(r(t.materials, this.material[c]));
                        s.material = a
                    } else
                        s.material = r(t.materials, this.material);
                if (this.children.length > 0) {
                    s.children = [];
                    for (let a = 0; a < this.children.length; a++)
                        s.children.push(this.children[a].toJSON(t).object)
                }
                if (this.animations.length > 0) {
                    s.animations = [];
                    for (let a = 0; a < this.animations.length; a++) {
                        let c = this.animations[a];
                        s.animations.push(r(t.animations, c))
                    }
                }
                if (e) {
                    let a = o(t.geometries)
                        , c = o(t.materials)
                        , l = o(t.textures)
                        , d = o(t.images)
                        , h = o(t.shapes)
                        , f = o(t.skeletons)
                        , p = o(t.animations)
                        , v = o(t.nodes);
                    a.length > 0 && (i.geometries = a),
                        c.length > 0 && (i.materials = c),
                        l.length > 0 && (i.textures = l),
                        d.length > 0 && (i.images = d),
                        h.length > 0 && (i.shapes = h),
                        f.length > 0 && (i.skeletons = f),
                        p.length > 0 && (i.animations = p),
                        v.length > 0 && (i.nodes = v)
                }
                return i.object = s,
                    i;
                function o(a) {
                    let c = [];
                    for (let l in a) {
                        let d = a[l];
                        delete d.metadata,
                            c.push(d)
                    }
                    return c
                }
            }
            clone(t) {
                return new this.constructor().copy(this, t)
            }
            copy(t, e = !0) {
                if (this.name = t.name,
                    this.up.copy(t.up),
                    this.position.copy(t.position),
                    this.rotation.order = t.rotation.order,
                    this.quaternion.copy(t.quaternion),
                    this.scale.copy(t.scale),
                    this.matrix.copy(t.matrix),
                    this.matrixWorld.copy(t.matrixWorld),
                    this.matrixAutoUpdate = t.matrixAutoUpdate,
                    this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate,
                    this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate,
                    this.layers.mask = t.layers.mask,
                    this.visible = t.visible,
                    this.castShadow = t.castShadow,
                    this.receiveShadow = t.receiveShadow,
                    this.frustumCulled = t.frustumCulled,
                    this.renderOrder = t.renderOrder,
                    this.animations = t.animations.slice(),
                    this.userData = JSON.parse(JSON.stringify(t.userData)),
                    e === !0)
                    for (let i = 0; i < t.children.length; i++) {
                        let s = t.children[i];
                        this.add(s.clone())
                    }
                return this
            }
        }
        ;
    Ze.DEFAULT_UP = new P(0, 1, 0);
    Ze.DEFAULT_MATRIX_AUTO_UPDATE = !0;
    Ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
    var cn = new P
        , Rn = new P
        , sl = new P
        , Pn = new P
        , Hi = new P
        , Gi = new P
        , vh = new P
        , rl = new P
        , ol = new P
        , al = new P
        , ll = new le
        , cl = new le
        , hl = new le
        , Wn = class n {
            constructor(t = new P, e = new P, i = new P) {
                this.a = t,
                    this.b = e,
                    this.c = i
            }
            static getNormal(t, e, i, s) {
                s.subVectors(i, e),
                    cn.subVectors(t, e),
                    s.cross(cn);
                let r = s.lengthSq();
                return r > 0 ? s.multiplyScalar(1 / Math.sqrt(r)) : s.set(0, 0, 0)
            }
            static getBarycoord(t, e, i, s, r) {
                cn.subVectors(s, e),
                    Rn.subVectors(i, e),
                    sl.subVectors(t, e);
                let o = cn.dot(cn)
                    , a = cn.dot(Rn)
                    , c = cn.dot(sl)
                    , l = Rn.dot(Rn)
                    , d = Rn.dot(sl)
                    , h = o * l - a * a;
                if (h === 0)
                    return r.set(0, 0, 0),
                        null;
                let f = 1 / h
                    , p = (l * c - a * d) * f
                    , v = (o * d - a * c) * f;
                return r.set(1 - p - v, v, p)
            }
            static containsPoint(t, e, i, s) {
                return this.getBarycoord(t, e, i, s, Pn) === null ? !1 : Pn.x >= 0 && Pn.y >= 0 && Pn.x + Pn.y <= 1
            }
            static getInterpolation(t, e, i, s, r, o, a, c) {
                return this.getBarycoord(t, e, i, s, Pn) === null ? (c.x = 0,
                    c.y = 0,
                    "z" in c && (c.z = 0),
                    "w" in c && (c.w = 0),
                    null) : (c.setScalar(0),
                        c.addScaledVector(r, Pn.x),
                        c.addScaledVector(o, Pn.y),
                        c.addScaledVector(a, Pn.z),
                        c)
            }
            static getInterpolatedAttribute(t, e, i, s, r, o) {
                return ll.setScalar(0),
                    cl.setScalar(0),
                    hl.setScalar(0),
                    ll.fromBufferAttribute(t, e),
                    cl.fromBufferAttribute(t, i),
                    hl.fromBufferAttribute(t, s),
                    o.setScalar(0),
                    o.addScaledVector(ll, r.x),
                    o.addScaledVector(cl, r.y),
                    o.addScaledVector(hl, r.z),
                    o
            }
            static isFrontFacing(t, e, i, s) {
                return cn.subVectors(i, e),
                    Rn.subVectors(t, e),
                    cn.cross(Rn).dot(s) < 0
            }
            set(t, e, i) {
                return this.a.copy(t),
                    this.b.copy(e),
                    this.c.copy(i),
                    this
            }
            setFromPointsAndIndices(t, e, i, s) {
                return this.a.copy(t[e]),
                    this.b.copy(t[i]),
                    this.c.copy(t[s]),
                    this
            }
            setFromAttributeAndIndices(t, e, i, s) {
                return this.a.fromBufferAttribute(t, e),
                    this.b.fromBufferAttribute(t, i),
                    this.c.fromBufferAttribute(t, s),
                    this
            }
            clone() {
                return new this.constructor().copy(this)
            }
            copy(t) {
                return this.a.copy(t.a),
                    this.b.copy(t.b),
                    this.c.copy(t.c),
                    this
            }
            getArea() {
                return cn.subVectors(this.c, this.b),
                    Rn.subVectors(this.a, this.b),
                    cn.cross(Rn).length() * .5
            }
            getMidpoint(t) {
                return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
            }
            getNormal(t) {
                return n.getNormal(this.a, this.b, this.c, t)
            }
            getPlane(t) {
                return t.setFromCoplanarPoints(this.a, this.b, this.c)
            }
            getBarycoord(t, e) {
                return n.getBarycoord(t, this.a, this.b, this.c, e)
            }
            getInterpolation(t, e, i, s, r) {
                return n.getInterpolation(t, this.a, this.b, this.c, e, i, s, r)
            }
            containsPoint(t) {
                return n.containsPoint(t, this.a, this.b, this.c)
            }
            isFrontFacing(t) {
                return n.isFrontFacing(this.a, this.b, this.c, t)
            }
            intersectsBox(t) {
                return t.intersectsTriangle(this)
            }
            closestPointToPoint(t, e) {
                let i = this.a, s = this.b, r = this.c, o, a;
                Hi.subVectors(s, i),
                    Gi.subVectors(r, i),
                    rl.subVectors(t, i);
                let c = Hi.dot(rl)
                    , l = Gi.dot(rl);
                if (c <= 0 && l <= 0)
                    return e.copy(i);
                ol.subVectors(t, s);
                let d = Hi.dot(ol)
                    , h = Gi.dot(ol);
                if (d >= 0 && h <= d)
                    return e.copy(s);
                let f = c * h - d * l;
                if (f <= 0 && c >= 0 && d <= 0)
                    return o = c / (c - d),
                        e.copy(i).addScaledVector(Hi, o);
                al.subVectors(t, r);
                let p = Hi.dot(al)
                    , v = Gi.dot(al);
                if (v >= 0 && p <= v)
                    return e.copy(r);
                let g = p * l - c * v;
                if (g <= 0 && l >= 0 && v <= 0)
                    return a = l / (l - v),
                        e.copy(i).addScaledVector(Gi, a);
                let m = d * v - p * h;
                if (m <= 0 && h - d >= 0 && p - v >= 0)
                    return vh.subVectors(r, s),
                        a = (h - d) / (h - d + (p - v)),
                        e.copy(s).addScaledVector(vh, a);
                let u = 1 / (m + g + f);
                return o = g * u,
                    a = f * u,
                    e.copy(i).addScaledVector(Hi, o).addScaledVector(Gi, a)
            }
            equals(t) {
                return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c)
            }
        }
        , mu = {
            aliceblue: 15792383,
            antiquewhite: 16444375,
            aqua: 65535,
            aquamarine: 8388564,
            azure: 15794175,
            beige: 16119260,
            bisque: 16770244,
            black: 0,
            blanchedalmond: 16772045,
            blue: 255,
            blueviolet: 9055202,
            brown: 10824234,
            burlywood: 14596231,
            cadetblue: 6266528,
            chartreuse: 8388352,
            chocolate: 13789470,
            coral: 16744272,
            cornflowerblue: 6591981,
            cornsilk: 16775388,
            crimson: 14423100,
            cyan: 65535,
            darkblue: 139,
            darkcyan: 35723,
            darkgoldenrod: 12092939,
            darkgray: 11119017,
            darkgreen: 25600,
            darkgrey: 11119017,
            darkkhaki: 12433259,
            darkmagenta: 9109643,
            darkolivegreen: 5597999,
            darkorange: 16747520,
            darkorchid: 10040012,
            darkred: 9109504,
            darksalmon: 15308410,
            darkseagreen: 9419919,
            darkslateblue: 4734347,
            darkslategray: 3100495,
            darkslategrey: 3100495,
            darkturquoise: 52945,
            darkviolet: 9699539,
            deeppink: 16716947,
            deepskyblue: 49151,
            dimgray: 6908265,
            dimgrey: 6908265,
            dodgerblue: 2003199,
            firebrick: 11674146,
            floralwhite: 16775920,
            forestgreen: 2263842,
            fuchsia: 16711935,
            gainsboro: 14474460,
            ghostwhite: 16316671,
            gold: 16766720,
            goldenrod: 14329120,
            gray: 8421504,
            green: 32768,
            greenyellow: 11403055,
            grey: 8421504,
            honeydew: 15794160,
            hotpink: 16738740,
            indianred: 13458524,
            indigo: 4915330,
            ivory: 16777200,
            khaki: 15787660,
            lavender: 15132410,
            lavenderblush: 16773365,
            lawngreen: 8190976,
            lemonchiffon: 16775885,
            lightblue: 11393254,
            lightcoral: 15761536,
            lightcyan: 14745599,
            lightgoldenrodyellow: 16448210,
            lightgray: 13882323,
            lightgreen: 9498256,
            lightgrey: 13882323,
            lightpink: 16758465,
            lightsalmon: 16752762,
            lightseagreen: 2142890,
            lightskyblue: 8900346,
            lightslategray: 7833753,
            lightslategrey: 7833753,
            lightsteelblue: 11584734,
            lightyellow: 16777184,
            lime: 65280,
            limegreen: 3329330,
            linen: 16445670,
            magenta: 16711935,
            maroon: 8388608,
            mediumaquamarine: 6737322,
            mediumblue: 205,
            mediumorchid: 12211667,
            mediumpurple: 9662683,
            mediumseagreen: 3978097,
            mediumslateblue: 8087790,
            mediumspringgreen: 64154,
            mediumturquoise: 4772300,
            mediumvioletred: 13047173,
            midnightblue: 1644912,
            mintcream: 16121850,
            mistyrose: 16770273,
            moccasin: 16770229,
            navajowhite: 16768685,
            navy: 128,
            oldlace: 16643558,
            olive: 8421376,
            olivedrab: 7048739,
            orange: 16753920,
            orangered: 16729344,
            orchid: 14315734,
            palegoldenrod: 15657130,
            palegreen: 10025880,
            paleturquoise: 11529966,
            palevioletred: 14381203,
            papayawhip: 16773077,
            peachpuff: 16767673,
            peru: 13468991,
            pink: 16761035,
            plum: 14524637,
            powderblue: 11591910,
            purple: 8388736,
            rebeccapurple: 6697881,
            red: 16711680,
            rosybrown: 12357519,
            royalblue: 4286945,
            saddlebrown: 9127187,
            salmon: 16416882,
            sandybrown: 16032864,
            seagreen: 3050327,
            seashell: 16774638,
            sienna: 10506797,
            silver: 12632256,
            skyblue: 8900331,
            slateblue: 6970061,
            slategray: 7372944,
            slategrey: 7372944,
            snow: 16775930,
            springgreen: 65407,
            steelblue: 4620980,
            tan: 13808780,
            teal: 32896,
            thistle: 14204888,
            tomato: 16737095,
            turquoise: 4251856,
            violet: 15631086,
            wheat: 16113331,
            white: 16777215,
            whitesmoke: 16119285,
            yellow: 16776960,
            yellowgreen: 10145074
        }
        , Hn = {
            h: 0,
            s: 0,
            l: 0
        }
        , Cr = {
            h: 0,
            s: 0,
            l: 0
        };
    function ul(n, t, e) {
        return e < 0 && (e += 1),
            e > 1 && (e -= 1),
            e < 1 / 6 ? n + (t - n) * 6 * e : e < 1 / 2 ? t : e < 2 / 3 ? n + (t - n) * 6 * (2 / 3 - e) : n
    }
    var Dt = class {
        constructor(t, e, i) {
            return this.isColor = !0,
                this.r = 1,
                this.g = 1,
                this.b = 1,
                this.set(t, e, i)
        }
        set(t, e, i) {
            if (e === void 0 && i === void 0) {
                let s = t;
                s && s.isColor ? this.copy(s) : typeof s == "number" ? this.setHex(s) : typeof s == "string" && this.setStyle(s)
            } else
                this.setRGB(t, e, i);
            return this
        }
        setScalar(t) {
            return this.r = t,
                this.g = t,
                this.b = t,
                this
        }
        setHex(t, e = Xe) {
            return t = Math.floor(t),
                this.r = (t >> 16 & 255) / 255,
                this.g = (t >> 8 & 255) / 255,
                this.b = (t & 255) / 255,
                Gt.colorSpaceToWorking(this, e),
                this
        }
        setRGB(t, e, i, s = Gt.workingColorSpace) {
            return this.r = t,
                this.g = e,
                this.b = i,
                Gt.colorSpaceToWorking(this, s),
                this
        }
        setHSL(t, e, i, s = Gt.workingColorSpace) {
            if (t = Bl(t, 1),
                e = kt(e, 0, 1),
                i = kt(i, 0, 1),
                e === 0)
                this.r = this.g = this.b = i;
            else {
                let r = i <= .5 ? i * (1 + e) : i + e - i * e
                    , o = 2 * i - r;
                this.r = ul(o, r, t + 1 / 3),
                    this.g = ul(o, r, t),
                    this.b = ul(o, r, t - 1 / 3)
            }
            return Gt.colorSpaceToWorking(this, s),
                this
        }
        setStyle(t, e = Xe) {
            function i(r) {
                r !== void 0 && parseFloat(r) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.")
            }
            let s;
            if (s = /^(\w+)\(([^\)]*)\)/.exec(t)) {
                let r, o = s[1], a = s[2];
                switch (o) {
                    case "rgb":
                    case "rgba":
                        if (r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
                            return i(r[4]),
                                this.setRGB(Math.min(255, parseInt(r[1], 10)) / 255, Math.min(255, parseInt(r[2], 10)) / 255, Math.min(255, parseInt(r[3], 10)) / 255, e);
                        if (r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
                            return i(r[4]),
                                this.setRGB(Math.min(100, parseInt(r[1], 10)) / 100, Math.min(100, parseInt(r[2], 10)) / 100, Math.min(100, parseInt(r[3], 10)) / 100, e);
                        break;
                    case "hsl":
                    case "hsla":
                        if (r = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
                            return i(r[4]),
                                this.setHSL(parseFloat(r[1]) / 360, parseFloat(r[2]) / 100, parseFloat(r[3]) / 100, e);
                        break;
                    default:
                        console.warn("THREE.Color: Unknown color model " + t)
                }
            } else if (s = /^\#([A-Fa-f\d]+)$/.exec(t)) {
                let r = s[1]
                    , o = r.length;
                if (o === 3)
                    return this.setRGB(parseInt(r.charAt(0), 16) / 15, parseInt(r.charAt(1), 16) / 15, parseInt(r.charAt(2), 16) / 15, e);
                if (o === 6)
                    return this.setHex(parseInt(r, 16), e);
                console.warn("THREE.Color: Invalid hex color " + t)
            } else if (t && t.length > 0)
                return this.setColorName(t, e);
            return this
        }
        setColorName(t, e = Xe) {
            let i = mu[t.toLowerCase()];
            return i !== void 0 ? this.setHex(i, e) : console.warn("THREE.Color: Unknown color " + t),
                this
        }
        clone() {
            return new this.constructor(this.r, this.g, this.b)
        }
        copy(t) {
            return this.r = t.r,
                this.g = t.g,
                this.b = t.b,
                this
        }
        copySRGBToLinear(t) {
            return this.r = Dn(t.r),
                this.g = Dn(t.g),
                this.b = Dn(t.b),
                this
        }
        copyLinearToSRGB(t) {
            return this.r = Zi(t.r),
                this.g = Zi(t.g),
                this.b = Zi(t.b),
                this
        }
        convertSRGBToLinear() {
            return this.copySRGBToLinear(this),
                this
        }
        convertLinearToSRGB() {
            return this.copyLinearToSRGB(this),
                this
        }
        getHex(t = Xe) {
            return Gt.workingToColorSpace(we.copy(this), t),
                Math.round(kt(we.r * 255, 0, 255)) * 65536 + Math.round(kt(we.g * 255, 0, 255)) * 256 + Math.round(kt(we.b * 255, 0, 255))
        }
        getHexString(t = Xe) {
            return ("000000" + this.getHex(t).toString(16)).slice(-6)
        }
        getHSL(t, e = Gt.workingColorSpace) {
            Gt.workingToColorSpace(we.copy(this), e);
            let i = we.r, s = we.g, r = we.b, o = Math.max(i, s, r), a = Math.min(i, s, r), c, l, d = (a + o) / 2;
            if (a === o)
                c = 0,
                    l = 0;
            else {
                let h = o - a;
                switch (l = d <= .5 ? h / (o + a) : h / (2 - o - a),
                o) {
                    case i:
                        c = (s - r) / h + (s < r ? 6 : 0);
                        break;
                    case s:
                        c = (r - i) / h + 2;
                        break;
                    case r:
                        c = (i - s) / h + 4;
                        break
                }
                c /= 6
            }
            return t.h = c,
                t.s = l,
                t.l = d,
                t
        }
        getRGB(t, e = Gt.workingColorSpace) {
            return Gt.workingToColorSpace(we.copy(this), e),
                t.r = we.r,
                t.g = we.g,
                t.b = we.b,
                t
        }
        getStyle(t = Xe) {
            Gt.workingToColorSpace(we.copy(this), t);
            let e = we.r
                , i = we.g
                , s = we.b;
            return t !== Xe ? `color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})` : `rgb(${Math.round(e * 255)},${Math.round(i * 255)},${Math.round(s * 255)})`
        }
        offsetHSL(t, e, i) {
            return this.getHSL(Hn),
                this.setHSL(Hn.h + t, Hn.s + e, Hn.l + i)
        }
        add(t) {
            return this.r += t.r,
                this.g += t.g,
                this.b += t.b,
                this
        }
        addColors(t, e) {
            return this.r = t.r + e.r,
                this.g = t.g + e.g,
                this.b = t.b + e.b,
                this
        }
        addScalar(t) {
            return this.r += t,
                this.g += t,
                this.b += t,
                this
        }
        sub(t) {
            return this.r = Math.max(0, this.r - t.r),
                this.g = Math.max(0, this.g - t.g),
                this.b = Math.max(0, this.b - t.b),
                this
        }
        multiply(t) {
            return this.r *= t.r,
                this.g *= t.g,
                this.b *= t.b,
                this
        }
        multiplyScalar(t) {
            return this.r *= t,
                this.g *= t,
                this.b *= t,
                this
        }
        lerp(t, e) {
            return this.r += (t.r - this.r) * e,
                this.g += (t.g - this.g) * e,
                this.b += (t.b - this.b) * e,
                this
        }
        lerpColors(t, e, i) {
            return this.r = t.r + (e.r - t.r) * i,
                this.g = t.g + (e.g - t.g) * i,
                this.b = t.b + (e.b - t.b) * i,
                this
        }
        lerpHSL(t, e) {
            this.getHSL(Hn),
                t.getHSL(Cr);
            let i = As(Hn.h, Cr.h, e)
                , s = As(Hn.s, Cr.s, e)
                , r = As(Hn.l, Cr.l, e);
            return this.setHSL(i, s, r),
                this
        }
        setFromVector3(t) {
            return this.r = t.x,
                this.g = t.y,
                this.b = t.z,
                this
        }
        applyMatrix3(t) {
            let e = this.r
                , i = this.g
                , s = this.b
                , r = t.elements;
            return this.r = r[0] * e + r[3] * i + r[6] * s,
                this.g = r[1] * e + r[4] * i + r[7] * s,
                this.b = r[2] * e + r[5] * i + r[8] * s,
                this
        }
        equals(t) {
            return t.r === this.r && t.g === this.g && t.b === this.b
        }
        fromArray(t, e = 0) {
            return this.r = t[e],
                this.g = t[e + 1],
                this.b = t[e + 2],
                this
        }
        toArray(t = [], e = 0) {
            return t[e] = this.r,
                t[e + 1] = this.g,
                t[e + 2] = this.b,
                t
        }
        fromBufferAttribute(t, e) {
            return this.r = t.getX(e),
                this.g = t.getY(e),
                this.b = t.getZ(e),
                this
        }
        toJSON() {
            return this.getHex()
        }
        *[Symbol.iterator]() {
            yield this.r,
                yield this.g,
                yield this.b
        }
    }
        , we = new Dt;
    Dt.NAMES = mu;
    var ff = 0
        , Zn = class extends _n {
            constructor() {
                super(),
                    this.isMaterial = !0,
                    Object.defineProperty(this, "id", {
                        value: ff++
                    }),
                    this.uuid = os(),
                    this.name = "",
                    this.type = "Material",
                    this.blending = ui,
                    this.side = Ln,
                    this.vertexColors = !1,
                    this.opacity = 1,
                    this.transparent = !1,
                    this.alphaHash = !1,
                    this.blendSrc = Hr,
                    this.blendDst = Gr,
                    this.blendEquation = qn,
                    this.blendSrcAlpha = null,
                    this.blendDstAlpha = null,
                    this.blendEquationAlpha = null,
                    this.blendColor = new Dt(0, 0, 0),
                    this.blendAlpha = 0,
                    this.depthFunc = di,
                    this.depthTest = !0,
                    this.depthWrite = !0,
                    this.stencilWriteMask = 255,
                    this.stencilFunc = xl,
                    this.stencilRef = 0,
                    this.stencilFuncMask = 255,
                    this.stencilFail = hi,
                    this.stencilZFail = hi,
                    this.stencilZPass = hi,
                    this.stencilWrite = !1,
                    this.clippingPlanes = null,
                    this.clipIntersection = !1,
                    this.clipShadows = !1,
                    this.shadowSide = null,
                    this.colorWrite = !0,
                    this.precision = null,
                    this.polygonOffset = !1,
                    this.polygonOffsetFactor = 0,
                    this.polygonOffsetUnits = 0,
                    this.dithering = !1,
                    this.alphaToCoverage = !1,
                    this.premultipliedAlpha = !1,
                    this.forceSinglePass = !1,
                    this.allowOverride = !0,
                    this.visible = !0,
                    this.toneMapped = !0,
                    this.userData = {},
                    this.version = 0,
                    this._alphaTest = 0
            }
            get alphaTest() {
                return this._alphaTest
            }
            set alphaTest(t) {
                this._alphaTest > 0 != t > 0 && this.version++,
                    this._alphaTest = t
            }
            onBeforeRender() { }
            onBeforeCompile() { }
            customProgramCacheKey() {
                return this.onBeforeCompile.toString()
            }
            setValues(t) {
                if (t !== void 0)
                    for (let e in t) {
                        let i = t[e];
                        if (i === void 0) {
                            console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);
                            continue
                        }
                        let s = this[e];
                        if (s === void 0) {
                            console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);
                            continue
                        }
                        s && s.isColor ? s.set(i) : s && s.isVector3 && i && i.isVector3 ? s.copy(i) : this[e] = i
                    }
            }
            toJSON(t) {
                let e = t === void 0 || typeof t == "string";
                e && (t = {
                    textures: {},
                    images: {}
                });
                let i = {
                    metadata: {
                        version: 4.7,
                        type: "Material",
                        generator: "Material.toJSON"
                    }
                };
                i.uuid = this.uuid,
                    i.type = this.type,
                    this.name !== "" && (i.name = this.name),
                    this.color && this.color.isColor && (i.color = this.color.getHex()),
                    this.roughness !== void 0 && (i.roughness = this.roughness),
                    this.metalness !== void 0 && (i.metalness = this.metalness),
                    this.sheen !== void 0 && (i.sheen = this.sheen),
                    this.sheenColor && this.sheenColor.isColor && (i.sheenColor = this.sheenColor.getHex()),
                    this.sheenRoughness !== void 0 && (i.sheenRoughness = this.sheenRoughness),
                    this.emissive && this.emissive.isColor && (i.emissive = this.emissive.getHex()),
                    this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (i.emissiveIntensity = this.emissiveIntensity),
                    this.specular && this.specular.isColor && (i.specular = this.specular.getHex()),
                    this.specularIntensity !== void 0 && (i.specularIntensity = this.specularIntensity),
                    this.specularColor && this.specularColor.isColor && (i.specularColor = this.specularColor.getHex()),
                    this.shininess !== void 0 && (i.shininess = this.shininess),
                    this.clearcoat !== void 0 && (i.clearcoat = this.clearcoat),
                    this.clearcoatRoughness !== void 0 && (i.clearcoatRoughness = this.clearcoatRoughness),
                    this.clearcoatMap && this.clearcoatMap.isTexture && (i.clearcoatMap = this.clearcoatMap.toJSON(t).uuid),
                    this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (i.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid),
                    this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (i.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid,
                        i.clearcoatNormalScale = this.clearcoatNormalScale.toArray()),
                    this.dispersion !== void 0 && (i.dispersion = this.dispersion),
                    this.iridescence !== void 0 && (i.iridescence = this.iridescence),
                    this.iridescenceIOR !== void 0 && (i.iridescenceIOR = this.iridescenceIOR),
                    this.iridescenceThicknessRange !== void 0 && (i.iridescenceThicknessRange = this.iridescenceThicknessRange),
                    this.iridescenceMap && this.iridescenceMap.isTexture && (i.iridescenceMap = this.iridescenceMap.toJSON(t).uuid),
                    this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (i.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t).uuid),
                    this.anisotropy !== void 0 && (i.anisotropy = this.anisotropy),
                    this.anisotropyRotation !== void 0 && (i.anisotropyRotation = this.anisotropyRotation),
                    this.anisotropyMap && this.anisotropyMap.isTexture && (i.anisotropyMap = this.anisotropyMap.toJSON(t).uuid),
                    this.map && this.map.isTexture && (i.map = this.map.toJSON(t).uuid),
                    this.matcap && this.matcap.isTexture && (i.matcap = this.matcap.toJSON(t).uuid),
                    this.alphaMap && this.alphaMap.isTexture && (i.alphaMap = this.alphaMap.toJSON(t).uuid),
                    this.lightMap && this.lightMap.isTexture && (i.lightMap = this.lightMap.toJSON(t).uuid,
                        i.lightMapIntensity = this.lightMapIntensity),
                    this.aoMap && this.aoMap.isTexture && (i.aoMap = this.aoMap.toJSON(t).uuid,
                        i.aoMapIntensity = this.aoMapIntensity),
                    this.bumpMap && this.bumpMap.isTexture && (i.bumpMap = this.bumpMap.toJSON(t).uuid,
                        i.bumpScale = this.bumpScale),
                    this.normalMap && this.normalMap.isTexture && (i.normalMap = this.normalMap.toJSON(t).uuid,
                        i.normalMapType = this.normalMapType,
                        i.normalScale = this.normalScale.toArray()),
                    this.displacementMap && this.displacementMap.isTexture && (i.displacementMap = this.displacementMap.toJSON(t).uuid,
                        i.displacementScale = this.displacementScale,
                        i.displacementBias = this.displacementBias),
                    this.roughnessMap && this.roughnessMap.isTexture && (i.roughnessMap = this.roughnessMap.toJSON(t).uuid),
                    this.metalnessMap && this.metalnessMap.isTexture && (i.metalnessMap = this.metalnessMap.toJSON(t).uuid),
                    this.emissiveMap && this.emissiveMap.isTexture && (i.emissiveMap = this.emissiveMap.toJSON(t).uuid),
                    this.specularMap && this.specularMap.isTexture && (i.specularMap = this.specularMap.toJSON(t).uuid),
                    this.specularIntensityMap && this.specularIntensityMap.isTexture && (i.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid),
                    this.specularColorMap && this.specularColorMap.isTexture && (i.specularColorMap = this.specularColorMap.toJSON(t).uuid),
                    this.envMap && this.envMap.isTexture && (i.envMap = this.envMap.toJSON(t).uuid,
                        this.combine !== void 0 && (i.combine = this.combine)),
                    this.envMapRotation !== void 0 && (i.envMapRotation = this.envMapRotation.toArray()),
                    this.envMapIntensity !== void 0 && (i.envMapIntensity = this.envMapIntensity),
                    this.reflectivity !== void 0 && (i.reflectivity = this.reflectivity),
                    this.refractionRatio !== void 0 && (i.refractionRatio = this.refractionRatio),
                    this.gradientMap && this.gradientMap.isTexture && (i.gradientMap = this.gradientMap.toJSON(t).uuid),
                    this.transmission !== void 0 && (i.transmission = this.transmission),
                    this.transmissionMap && this.transmissionMap.isTexture && (i.transmissionMap = this.transmissionMap.toJSON(t).uuid),
                    this.thickness !== void 0 && (i.thickness = this.thickness),
                    this.thicknessMap && this.thicknessMap.isTexture && (i.thicknessMap = this.thicknessMap.toJSON(t).uuid),
                    this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (i.attenuationDistance = this.attenuationDistance),
                    this.attenuationColor !== void 0 && (i.attenuationColor = this.attenuationColor.getHex()),
                    this.size !== void 0 && (i.size = this.size),
                    this.shadowSide !== null && (i.shadowSide = this.shadowSide),
                    this.sizeAttenuation !== void 0 && (i.sizeAttenuation = this.sizeAttenuation),
                    this.blending !== ui && (i.blending = this.blending),
                    this.side !== Ln && (i.side = this.side),
                    this.vertexColors === !0 && (i.vertexColors = !0),
                    this.opacity < 1 && (i.opacity = this.opacity),
                    this.transparent === !0 && (i.transparent = !0),
                    this.blendSrc !== Hr && (i.blendSrc = this.blendSrc),
                    this.blendDst !== Gr && (i.blendDst = this.blendDst),
                    this.blendEquation !== qn && (i.blendEquation = this.blendEquation),
                    this.blendSrcAlpha !== null && (i.blendSrcAlpha = this.blendSrcAlpha),
                    this.blendDstAlpha !== null && (i.blendDstAlpha = this.blendDstAlpha),
                    this.blendEquationAlpha !== null && (i.blendEquationAlpha = this.blendEquationAlpha),
                    this.blendColor && this.blendColor.isColor && (i.blendColor = this.blendColor.getHex()),
                    this.blendAlpha !== 0 && (i.blendAlpha = this.blendAlpha),
                    this.depthFunc !== di && (i.depthFunc = this.depthFunc),
                    this.depthTest === !1 && (i.depthTest = this.depthTest),
                    this.depthWrite === !1 && (i.depthWrite = this.depthWrite),
                    this.colorWrite === !1 && (i.colorWrite = this.colorWrite),
                    this.stencilWriteMask !== 255 && (i.stencilWriteMask = this.stencilWriteMask),
                    this.stencilFunc !== xl && (i.stencilFunc = this.stencilFunc),
                    this.stencilRef !== 0 && (i.stencilRef = this.stencilRef),
                    this.stencilFuncMask !== 255 && (i.stencilFuncMask = this.stencilFuncMask),
                    this.stencilFail !== hi && (i.stencilFail = this.stencilFail),
                    this.stencilZFail !== hi && (i.stencilZFail = this.stencilZFail),
                    this.stencilZPass !== hi && (i.stencilZPass = this.stencilZPass),
                    this.stencilWrite === !0 && (i.stencilWrite = this.stencilWrite),
                    this.rotation !== void 0 && this.rotation !== 0 && (i.rotation = this.rotation),
                    this.polygonOffset === !0 && (i.polygonOffset = !0),
                    this.polygonOffsetFactor !== 0 && (i.polygonOffsetFactor = this.polygonOffsetFactor),
                    this.polygonOffsetUnits !== 0 && (i.polygonOffsetUnits = this.polygonOffsetUnits),
                    this.linewidth !== void 0 && this.linewidth !== 1 && (i.linewidth = this.linewidth),
                    this.dashSize !== void 0 && (i.dashSize = this.dashSize),
                    this.gapSize !== void 0 && (i.gapSize = this.gapSize),
                    this.scale !== void 0 && (i.scale = this.scale),
                    this.dithering === !0 && (i.dithering = !0),
                    this.alphaTest > 0 && (i.alphaTest = this.alphaTest),
                    this.alphaHash === !0 && (i.alphaHash = !0),
                    this.alphaToCoverage === !0 && (i.alphaToCoverage = !0),
                    this.premultipliedAlpha === !0 && (i.premultipliedAlpha = !0),
                    this.forceSinglePass === !0 && (i.forceSinglePass = !0),
                    this.wireframe === !0 && (i.wireframe = !0),
                    this.wireframeLinewidth > 1 && (i.wireframeLinewidth = this.wireframeLinewidth),
                    this.wireframeLinecap !== "round" && (i.wireframeLinecap = this.wireframeLinecap),
                    this.wireframeLinejoin !== "round" && (i.wireframeLinejoin = this.wireframeLinejoin),
                    this.flatShading === !0 && (i.flatShading = !0),
                    this.visible === !1 && (i.visible = !1),
                    this.toneMapped === !1 && (i.toneMapped = !1),
                    this.fog === !1 && (i.fog = !1),
                    Object.keys(this.userData).length > 0 && (i.userData = this.userData);
                function s(r) {
                    let o = [];
                    for (let a in r) {
                        let c = r[a];
                        delete c.metadata,
                            o.push(c)
                    }
                    return o
                }
                if (e) {
                    let r = s(t.textures)
                        , o = s(t.images);
                    r.length > 0 && (i.textures = r),
                        o.length > 0 && (i.images = o)
                }
                return i
            }
            clone() {
                return new this.constructor().copy(this)
            }
            copy(t) {
                this.name = t.name,
                    this.blending = t.blending,
                    this.side = t.side,
                    this.vertexColors = t.vertexColors,
                    this.opacity = t.opacity,
                    this.transparent = t.transparent,
                    this.blendSrc = t.blendSrc,
                    this.blendDst = t.blendDst,
                    this.blendEquation = t.blendEquation,
                    this.blendSrcAlpha = t.blendSrcAlpha,
                    this.blendDstAlpha = t.blendDstAlpha,
                    this.blendEquationAlpha = t.blendEquationAlpha,
                    this.blendColor.copy(t.blendColor),
                    this.blendAlpha = t.blendAlpha,
                    this.depthFunc = t.depthFunc,
                    this.depthTest = t.depthTest,
                    this.depthWrite = t.depthWrite,
                    this.stencilWriteMask = t.stencilWriteMask,
                    this.stencilFunc = t.stencilFunc,
                    this.stencilRef = t.stencilRef,
                    this.stencilFuncMask = t.stencilFuncMask,
                    this.stencilFail = t.stencilFail,
                    this.stencilZFail = t.stencilZFail,
                    this.stencilZPass = t.stencilZPass,
                    this.stencilWrite = t.stencilWrite;
                let e = t.clippingPlanes
                    , i = null;
                if (e !== null) {
                    let s = e.length;
                    i = new Array(s);
                    for (let r = 0; r !== s; ++r)
                        i[r] = e[r].clone()
                }
                return this.clippingPlanes = i,
                    this.clipIntersection = t.clipIntersection,
                    this.clipShadows = t.clipShadows,
                    this.shadowSide = t.shadowSide,
                    this.colorWrite = t.colorWrite,
                    this.precision = t.precision,
                    this.polygonOffset = t.polygonOffset,
                    this.polygonOffsetFactor = t.polygonOffsetFactor,
                    this.polygonOffsetUnits = t.polygonOffsetUnits,
                    this.dithering = t.dithering,
                    this.alphaTest = t.alphaTest,
                    this.alphaHash = t.alphaHash,
                    this.alphaToCoverage = t.alphaToCoverage,
                    this.premultipliedAlpha = t.premultipliedAlpha,
                    this.forceSinglePass = t.forceSinglePass,
                    this.visible = t.visible,
                    this.toneMapped = t.toneMapped,
                    this.userData = JSON.parse(JSON.stringify(t.userData)),
                    this
            }
            dispose() {
                this.dispatchEvent({
                    type: "dispose"
                })
            }
            set needsUpdate(t) {
                t === !0 && this.version++
            }
        }
        , _i = class extends Zn {
            constructor(t) {
                super(),
                    this.isMeshBasicMaterial = !0,
                    this.type = "MeshBasicMaterial",
                    this.color = new Dt(16777215),
                    this.map = null,
                    this.lightMap = null,
                    this.lightMapIntensity = 1,
                    this.aoMap = null,
                    this.aoMapIntensity = 1,
                    this.specularMap = null,
                    this.alphaMap = null,
                    this.envMap = null,
                    this.envMapRotation = new vn,
                    this.combine = wl,
                    this.reflectivity = 1,
                    this.refractionRatio = .98,
                    this.wireframe = !1,
                    this.wireframeLinewidth = 1,
                    this.wireframeLinecap = "round",
                    this.wireframeLinejoin = "round",
                    this.fog = !0,
                    this.setValues(t)
            }
            copy(t) {
                return super.copy(t),
                    this.color.copy(t.color),
                    this.map = t.map,
                    this.lightMap = t.lightMap,
                    this.lightMapIntensity = t.lightMapIntensity,
                    this.aoMap = t.aoMap,
                    this.aoMapIntensity = t.aoMapIntensity,
                    this.specularMap = t.specularMap,
                    this.alphaMap = t.alphaMap,
                    this.envMap = t.envMap,
                    this.envMapRotation.copy(t.envMapRotation),
                    this.combine = t.combine,
                    this.reflectivity = t.reflectivity,
                    this.refractionRatio = t.refractionRatio,
                    this.wireframe = t.wireframe,
                    this.wireframeLinewidth = t.wireframeLinewidth,
                    this.wireframeLinecap = t.wireframeLinecap,
                    this.wireframeLinejoin = t.wireframeLinejoin,
                    this.fog = t.fog,
                    this
            }
        }
        ;
    var pe = new P
        , Rr = new Mt
        , pf = 0
        , qe = class {
            constructor(t, e, i = !1) {
                if (Array.isArray(t))
                    throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
                this.isBufferAttribute = !0,
                    Object.defineProperty(this, "id", {
                        value: pf++
                    }),
                    this.name = "",
                    this.array = t,
                    this.itemSize = e,
                    this.count = t !== void 0 ? t.length / e : 0,
                    this.normalized = i,
                    this.usage = yl,
                    this.updateRanges = [],
                    this.gpuType = Sn,
                    this.version = 0
            }
            onUploadCallback() { }
            set needsUpdate(t) {
                t === !0 && this.version++
            }
            setUsage(t) {
                return this.usage = t,
                    this
            }
            addUpdateRange(t, e) {
                this.updateRanges.push({
                    start: t,
                    count: e
                })
            }
            clearUpdateRanges() {
                this.updateRanges.length = 0
            }
            copy(t) {
                return this.name = t.name,
                    this.array = new t.array.constructor(t.array),
                    this.itemSize = t.itemSize,
                    this.count = t.count,
                    this.normalized = t.normalized,
                    this.usage = t.usage,
                    this.gpuType = t.gpuType,
                    this
            }
            copyAt(t, e, i) {
                t *= this.itemSize,
                    i *= e.itemSize;
                for (let s = 0, r = this.itemSize; s < r; s++)
                    this.array[t + s] = e.array[i + s];
                return this
            }
            copyArray(t) {
                return this.array.set(t),
                    this
            }
            applyMatrix3(t) {
                if (this.itemSize === 2)
                    for (let e = 0, i = this.count; e < i; e++)
                        Rr.fromBufferAttribute(this, e),
                            Rr.applyMatrix3(t),
                            this.setXY(e, Rr.x, Rr.y);
                else if (this.itemSize === 3)
                    for (let e = 0, i = this.count; e < i; e++)
                        pe.fromBufferAttribute(this, e),
                            pe.applyMatrix3(t),
                            this.setXYZ(e, pe.x, pe.y, pe.z);
                return this
            }
            applyMatrix4(t) {
                for (let e = 0, i = this.count; e < i; e++)
                    pe.fromBufferAttribute(this, e),
                        pe.applyMatrix4(t),
                        this.setXYZ(e, pe.x, pe.y, pe.z);
                return this
            }
            applyNormalMatrix(t) {
                for (let e = 0, i = this.count; e < i; e++)
                    pe.fromBufferAttribute(this, e),
                        pe.applyNormalMatrix(t),
                        this.setXYZ(e, pe.x, pe.y, pe.z);
                return this
            }
            transformDirection(t) {
                for (let e = 0, i = this.count; e < i; e++)
                    pe.fromBufferAttribute(this, e),
                        pe.transformDirection(t),
                        this.setXYZ(e, pe.x, pe.y, pe.z);
                return this
            }
            set(t, e = 0) {
                return this.array.set(t, e),
                    this
            }
            getComponent(t, e) {
                let i = this.array[t * this.itemSize + e];
                return this.normalized && (i = Yi(i, this.array)),
                    i
            }
            setComponent(t, e, i) {
                return this.normalized && (i = Ie(i, this.array)),
                    this.array[t * this.itemSize + e] = i,
                    this
            }
            getX(t) {
                let e = this.array[t * this.itemSize];
                return this.normalized && (e = Yi(e, this.array)),
                    e
            }
            setX(t, e) {
                return this.normalized && (e = Ie(e, this.array)),
                    this.array[t * this.itemSize] = e,
                    this
            }
            getY(t) {
                let e = this.array[t * this.itemSize + 1];
                return this.normalized && (e = Yi(e, this.array)),
                    e
            }
            setY(t, e) {
                return this.normalized && (e = Ie(e, this.array)),
                    this.array[t * this.itemSize + 1] = e,
                    this
            }
            getZ(t) {
                let e = this.array[t * this.itemSize + 2];
                return this.normalized && (e = Yi(e, this.array)),
                    e
            }
            setZ(t, e) {
                return this.normalized && (e = Ie(e, this.array)),
                    this.array[t * this.itemSize + 2] = e,
                    this
            }
            getW(t) {
                let e = this.array[t * this.itemSize + 3];
                return this.normalized && (e = Yi(e, this.array)),
                    e
            }
            setW(t, e) {
                return this.normalized && (e = Ie(e, this.array)),
                    this.array[t * this.itemSize + 3] = e,
                    this
            }
            setXY(t, e, i) {
                return t *= this.itemSize,
                    this.normalized && (e = Ie(e, this.array),
                        i = Ie(i, this.array)),
                    this.array[t + 0] = e,
                    this.array[t + 1] = i,
                    this
            }
            setXYZ(t, e, i, s) {
                return t *= this.itemSize,
                    this.normalized && (e = Ie(e, this.array),
                        i = Ie(i, this.array),
                        s = Ie(s, this.array)),
                    this.array[t + 0] = e,
                    this.array[t + 1] = i,
                    this.array[t + 2] = s,
                    this
            }
            setXYZW(t, e, i, s, r) {
                return t *= this.itemSize,
                    this.normalized && (e = Ie(e, this.array),
                        i = Ie(i, this.array),
                        s = Ie(s, this.array),
                        r = Ie(r, this.array)),
                    this.array[t + 0] = e,
                    this.array[t + 1] = i,
                    this.array[t + 2] = s,
                    this.array[t + 3] = r,
                    this
            }
            onUpload(t) {
                return this.onUploadCallback = t,
                    this
            }
            clone() {
                return new this.constructor(this.array, this.itemSize).copy(this)
            }
            toJSON() {
                let t = {
                    itemSize: this.itemSize,
                    type: this.array.constructor.name,
                    array: Array.from(this.array),
                    normalized: this.normalized
                };
                return this.name !== "" && (t.name = this.name),
                    this.usage !== yl && (t.usage = this.usage),
                    t
            }
        }
        ;
    var Us = class extends qe {
        constructor(t, e, i) {
            super(new Uint16Array(t), e, i)
        }
    }
        ;
    var Ns = class extends qe {
        constructor(t, e, i) {
            super(new Uint32Array(t), e, i)
        }
    }
        ;
    var Ce = class extends qe {
        constructor(t, e, i) {
            super(new Float32Array(t), e, i)
        }
    }
        , mf = 0
        , en = new me
        , dl = new Ze
        , Wi = new P
        , We = new Yn
        , Ts = new Yn
        , be = new P
        , $e = class n extends _n {
            constructor() {
                super(),
                    this.isBufferGeometry = !0,
                    Object.defineProperty(this, "id", {
                        value: mf++
                    }),
                    this.uuid = os(),
                    this.name = "",
                    this.type = "BufferGeometry",
                    this.index = null,
                    this.indirect = null,
                    this.attributes = {},
                    this.morphAttributes = {},
                    this.morphTargetsRelative = !1,
                    this.groups = [],
                    this.boundingBox = null,
                    this.boundingSphere = null,
                    this.drawRange = {
                        start: 0,
                        count: 1 / 0
                    },
                    this.userData = {}
            }
            getIndex() {
                return this.index
            }
            setIndex(t) {
                return Array.isArray(t) ? this.index = new (kl(t) ? Ns : Us)(t, 1) : this.index = t,
                    this
            }
            setIndirect(t) {
                return this.indirect = t,
                    this
            }
            getIndirect() {
                return this.indirect
            }
            getAttribute(t) {
                return this.attributes[t]
            }
            setAttribute(t, e) {
                return this.attributes[t] = e,
                    this
            }
            deleteAttribute(t) {
                return delete this.attributes[t],
                    this
            }
            hasAttribute(t) {
                return this.attributes[t] !== void 0
            }
            addGroup(t, e, i = 0) {
                this.groups.push({
                    start: t,
                    count: e,
                    materialIndex: i
                })
            }
            clearGroups() {
                this.groups = []
            }
            setDrawRange(t, e) {
                this.drawRange.start = t,
                    this.drawRange.count = e
            }
            applyMatrix4(t) {
                let e = this.attributes.position;
                e !== void 0 && (e.applyMatrix4(t),
                    e.needsUpdate = !0);
                let i = this.attributes.normal;
                if (i !== void 0) {
                    let r = new Nt().getNormalMatrix(t);
                    i.applyNormalMatrix(r),
                        i.needsUpdate = !0
                }
                let s = this.attributes.tangent;
                return s !== void 0 && (s.transformDirection(t),
                    s.needsUpdate = !0),
                    this.boundingBox !== null && this.computeBoundingBox(),
                    this.boundingSphere !== null && this.computeBoundingSphere(),
                    this
            }
            applyQuaternion(t) {
                return en.makeRotationFromQuaternion(t),
                    this.applyMatrix4(en),
                    this
            }
            rotateX(t) {
                return en.makeRotationX(t),
                    this.applyMatrix4(en),
                    this
            }
            rotateY(t) {
                return en.makeRotationY(t),
                    this.applyMatrix4(en),
                    this
            }
            rotateZ(t) {
                return en.makeRotationZ(t),
                    this.applyMatrix4(en),
                    this
            }
            translate(t, e, i) {
                return en.makeTranslation(t, e, i),
                    this.applyMatrix4(en),
                    this
            }
            scale(t, e, i) {
                return en.makeScale(t, e, i),
                    this.applyMatrix4(en),
                    this
            }
            lookAt(t) {
                return dl.lookAt(t),
                    dl.updateMatrix(),
                    this.applyMatrix4(dl.matrix),
                    this
            }
            center() {
                return this.computeBoundingBox(),
                    this.boundingBox.getCenter(Wi).negate(),
                    this.translate(Wi.x, Wi.y, Wi.z),
                    this
            }
            setFromPoints(t) {
                let e = this.getAttribute("position");
                if (e === void 0) {
                    let i = [];
                    for (let s = 0, r = t.length; s < r; s++) {
                        let o = t[s];
                        i.push(o.x, o.y, o.z || 0)
                    }
                    this.setAttribute("position", new Ce(i, 3))
                } else {
                    let i = Math.min(t.length, e.count);
                    for (let s = 0; s < i; s++) {
                        let r = t[s];
                        e.setXYZ(s, r.x, r.y, r.z || 0)
                    }
                    t.length > e.count && console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),
                        e.needsUpdate = !0
                }
                return this
            }
            computeBoundingBox() {
                this.boundingBox === null && (this.boundingBox = new Yn);
                let t = this.attributes.position
                    , e = this.morphAttributes.position;
                if (t && t.isGLBufferAttribute) {
                    console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this),
                        this.boundingBox.set(new P(-1 / 0, -1 / 0, -1 / 0), new P(1 / 0, 1 / 0, 1 / 0));
                    return
                }
                if (t !== void 0) {
                    if (this.boundingBox.setFromBufferAttribute(t),
                        e)
                        for (let i = 0, s = e.length; i < s; i++) {
                            let r = e[i];
                            We.setFromBufferAttribute(r),
                                this.morphTargetsRelative ? (be.addVectors(this.boundingBox.min, We.min),
                                    this.boundingBox.expandByPoint(be),
                                    be.addVectors(this.boundingBox.max, We.max),
                                    this.boundingBox.expandByPoint(be)) : (this.boundingBox.expandByPoint(We.min),
                                        this.boundingBox.expandByPoint(We.max))
                        }
                } else
                    this.boundingBox.makeEmpty();
                (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
            }
            computeBoundingSphere() {
                this.boundingSphere === null && (this.boundingSphere = new mi);
                let t = this.attributes.position
                    , e = this.morphAttributes.position;
                if (t && t.isGLBufferAttribute) {
                    console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this),
                        this.boundingSphere.set(new P, 1 / 0);
                    return
                }
                if (t) {
                    let i = this.boundingSphere.center;
                    if (We.setFromBufferAttribute(t),
                        e)
                        for (let r = 0, o = e.length; r < o; r++) {
                            let a = e[r];
                            Ts.setFromBufferAttribute(a),
                                this.morphTargetsRelative ? (be.addVectors(We.min, Ts.min),
                                    We.expandByPoint(be),
                                    be.addVectors(We.max, Ts.max),
                                    We.expandByPoint(be)) : (We.expandByPoint(Ts.min),
                                        We.expandByPoint(Ts.max))
                        }
                    We.getCenter(i);
                    let s = 0;
                    for (let r = 0, o = t.count; r < o; r++)
                        be.fromBufferAttribute(t, r),
                            s = Math.max(s, i.distanceToSquared(be));
                    if (e)
                        for (let r = 0, o = e.length; r < o; r++) {
                            let a = e[r]
                                , c = this.morphTargetsRelative;
                            for (let l = 0, d = a.count; l < d; l++)
                                be.fromBufferAttribute(a, l),
                                    c && (Wi.fromBufferAttribute(t, l),
                                        be.add(Wi)),
                                    s = Math.max(s, i.distanceToSquared(be))
                        }
                    this.boundingSphere.radius = Math.sqrt(s),
                        isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
                }
            }
            computeTangents() {
                let t = this.index
                    , e = this.attributes;
                if (t === null || e.position === void 0 || e.normal === void 0 || e.uv === void 0) {
                    console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
                    return
                }
                let i = e.position
                    , s = e.normal
                    , r = e.uv;
                this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new qe(new Float32Array(4 * i.count), 4));
                let o = this.getAttribute("tangent")
                    , a = []
                    , c = [];
                for (let N = 0; N < i.count; N++)
                    a[N] = new P,
                        c[N] = new P;
                let l = new P
                    , d = new P
                    , h = new P
                    , f = new Mt
                    , p = new Mt
                    , v = new Mt
                    , g = new P
                    , m = new P;
                function u(N, S, M) {
                    l.fromBufferAttribute(i, N),
                        d.fromBufferAttribute(i, S),
                        h.fromBufferAttribute(i, M),
                        f.fromBufferAttribute(r, N),
                        p.fromBufferAttribute(r, S),
                        v.fromBufferAttribute(r, M),
                        d.sub(l),
                        h.sub(l),
                        p.sub(f),
                        v.sub(f);
                    let w = 1 / (p.x * v.y - v.x * p.y);
                    isFinite(w) && (g.copy(d).multiplyScalar(v.y).addScaledVector(h, -p.y).multiplyScalar(w),
                        m.copy(h).multiplyScalar(p.x).addScaledVector(d, -v.x).multiplyScalar(w),
                        a[N].add(g),
                        a[S].add(g),
                        a[M].add(g),
                        c[N].add(m),
                        c[S].add(m),
                        c[M].add(m))
                }
                let E = this.groups;
                E.length === 0 && (E = [{
                    start: 0,
                    count: t.count
                }]);
                for (let N = 0, S = E.length; N < S; ++N) {
                    let M = E[N]
                        , w = M.start
                        , V = M.count;
                    for (let H = w, z = w + V; H < z; H += 3)
                        u(t.getX(H + 0), t.getX(H + 1), t.getX(H + 2))
                }
                let T = new P
                    , y = new P
                    , C = new P
                    , R = new P;
                function D(N) {
                    C.fromBufferAttribute(s, N),
                        R.copy(C);
                    let S = a[N];
                    T.copy(S),
                        T.sub(C.multiplyScalar(C.dot(S))).normalize(),
                        y.crossVectors(R, S);
                    let w = y.dot(c[N]) < 0 ? -1 : 1;
                    o.setXYZW(N, T.x, T.y, T.z, w)
                }
                for (let N = 0, S = E.length; N < S; ++N) {
                    let M = E[N]
                        , w = M.start
                        , V = M.count;
                    for (let H = w, z = w + V; H < z; H += 3)
                        D(t.getX(H + 0)),
                            D(t.getX(H + 1)),
                            D(t.getX(H + 2))
                }
            }
            computeVertexNormals() {
                let t = this.index
                    , e = this.getAttribute("position");
                if (e !== void 0) {
                    let i = this.getAttribute("normal");
                    if (i === void 0)
                        i = new qe(new Float32Array(e.count * 3), 3),
                            this.setAttribute("normal", i);
                    else
                        for (let f = 0, p = i.count; f < p; f++)
                            i.setXYZ(f, 0, 0, 0);
                    let s = new P
                        , r = new P
                        , o = new P
                        , a = new P
                        , c = new P
                        , l = new P
                        , d = new P
                        , h = new P;
                    if (t)
                        for (let f = 0, p = t.count; f < p; f += 3) {
                            let v = t.getX(f + 0)
                                , g = t.getX(f + 1)
                                , m = t.getX(f + 2);
                            s.fromBufferAttribute(e, v),
                                r.fromBufferAttribute(e, g),
                                o.fromBufferAttribute(e, m),
                                d.subVectors(o, r),
                                h.subVectors(s, r),
                                d.cross(h),
                                a.fromBufferAttribute(i, v),
                                c.fromBufferAttribute(i, g),
                                l.fromBufferAttribute(i, m),
                                a.add(d),
                                c.add(d),
                                l.add(d),
                                i.setXYZ(v, a.x, a.y, a.z),
                                i.setXYZ(g, c.x, c.y, c.z),
                                i.setXYZ(m, l.x, l.y, l.z)
                        }
                    else
                        for (let f = 0, p = e.count; f < p; f += 3)
                            s.fromBufferAttribute(e, f + 0),
                                r.fromBufferAttribute(e, f + 1),
                                o.fromBufferAttribute(e, f + 2),
                                d.subVectors(o, r),
                                h.subVectors(s, r),
                                d.cross(h),
                                i.setXYZ(f + 0, d.x, d.y, d.z),
                                i.setXYZ(f + 1, d.x, d.y, d.z),
                                i.setXYZ(f + 2, d.x, d.y, d.z);
                    this.normalizeNormals(),
                        i.needsUpdate = !0
                }
            }
            normalizeNormals() {
                let t = this.attributes.normal;
                for (let e = 0, i = t.count; e < i; e++)
                    be.fromBufferAttribute(t, e),
                        be.normalize(),
                        t.setXYZ(e, be.x, be.y, be.z)
            }
            toNonIndexed() {
                function t(a, c) {
                    let l = a.array
                        , d = a.itemSize
                        , h = a.normalized
                        , f = new l.constructor(c.length * d)
                        , p = 0
                        , v = 0;
                    for (let g = 0, m = c.length; g < m; g++) {
                        a.isInterleavedBufferAttribute ? p = c[g] * a.data.stride + a.offset : p = c[g] * d;
                        for (let u = 0; u < d; u++)
                            f[v++] = l[p++]
                    }
                    return new qe(f, d, h)
                }
                if (this.index === null)
                    return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),
                        this;
                let e = new n
                    , i = this.index.array
                    , s = this.attributes;
                for (let a in s) {
                    let c = s[a]
                        , l = t(c, i);
                    e.setAttribute(a, l)
                }
                let r = this.morphAttributes;
                for (let a in r) {
                    let c = []
                        , l = r[a];
                    for (let d = 0, h = l.length; d < h; d++) {
                        let f = l[d]
                            , p = t(f, i);
                        c.push(p)
                    }
                    e.morphAttributes[a] = c
                }
                e.morphTargetsRelative = this.morphTargetsRelative;
                let o = this.groups;
                for (let a = 0, c = o.length; a < c; a++) {
                    let l = o[a];
                    e.addGroup(l.start, l.count, l.materialIndex)
                }
                return e
            }
            toJSON() {
                let t = {
                    metadata: {
                        version: 4.7,
                        type: "BufferGeometry",
                        generator: "BufferGeometry.toJSON"
                    }
                };
                if (t.uuid = this.uuid,
                    t.type = this.type,
                    this.name !== "" && (t.name = this.name),
                    Object.keys(this.userData).length > 0 && (t.userData = this.userData),
                    this.parameters !== void 0) {
                    let c = this.parameters;
                    for (let l in c)
                        c[l] !== void 0 && (t[l] = c[l]);
                    return t
                }
                t.data = {
                    attributes: {}
                };
                let e = this.index;
                e !== null && (t.data.index = {
                    type: e.array.constructor.name,
                    array: Array.prototype.slice.call(e.array)
                });
                let i = this.attributes;
                for (let c in i) {
                    let l = i[c];
                    t.data.attributes[c] = l.toJSON(t.data)
                }
                let s = {}
                    , r = !1;
                for (let c in this.morphAttributes) {
                    let l = this.morphAttributes[c]
                        , d = [];
                    for (let h = 0, f = l.length; h < f; h++) {
                        let p = l[h];
                        d.push(p.toJSON(t.data))
                    }
                    d.length > 0 && (s[c] = d,
                        r = !0)
                }
                r && (t.data.morphAttributes = s,
                    t.data.morphTargetsRelative = this.morphTargetsRelative);
                let o = this.groups;
                o.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(o)));
                let a = this.boundingSphere;
                return a !== null && (t.data.boundingSphere = a.toJSON()),
                    t
            }
            clone() {
                return new this.constructor().copy(this)
            }
            copy(t) {
                this.index = null,
                    this.attributes = {},
                    this.morphAttributes = {},
                    this.groups = [],
                    this.boundingBox = null,
                    this.boundingSphere = null;
                let e = {};
                this.name = t.name;
                let i = t.index;
                i !== null && this.setIndex(i.clone());
                let s = t.attributes;
                for (let l in s) {
                    let d = s[l];
                    this.setAttribute(l, d.clone(e))
                }
                let r = t.morphAttributes;
                for (let l in r) {
                    let d = []
                        , h = r[l];
                    for (let f = 0, p = h.length; f < p; f++)
                        d.push(h[f].clone(e));
                    this.morphAttributes[l] = d
                }
                this.morphTargetsRelative = t.morphTargetsRelative;
                let o = t.groups;
                for (let l = 0, d = o.length; l < d; l++) {
                    let h = o[l];
                    this.addGroup(h.start, h.count, h.materialIndex)
                }
                let a = t.boundingBox;
                a !== null && (this.boundingBox = a.clone());
                let c = t.boundingSphere;
                return c !== null && (this.boundingSphere = c.clone()),
                    this.drawRange.start = t.drawRange.start,
                    this.drawRange.count = t.drawRange.count,
                    this.userData = t.userData,
                    this
            }
            dispose() {
                this.dispatchEvent({
                    type: "dispose"
                })
            }
        }
        , xh = new me
        , li = new gi
        , Pr = new mi
        , yh = new P
        , Ir = new P
        , Dr = new P
        , Lr = new P
        , fl = new P
        , Ur = new P
        , Mh = new P
        , Nr = new P
        , Fe = class extends Ze {
            constructor(t = new $e, e = new _i) {
                super(),
                    this.isMesh = !0,
                    this.type = "Mesh",
                    this.geometry = t,
                    this.material = e,
                    this.morphTargetDictionary = void 0,
                    this.morphTargetInfluences = void 0,
                    this.count = 1,
                    this.updateMorphTargets()
            }
            copy(t, e) {
                return super.copy(t, e),
                    t.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = t.morphTargetInfluences.slice()),
                    t.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)),
                    this.material = Array.isArray(t.material) ? t.material.slice() : t.material,
                    this.geometry = t.geometry,
                    this
            }
            updateMorphTargets() {
                let e = this.geometry.morphAttributes
                    , i = Object.keys(e);
                if (i.length > 0) {
                    let s = e[i[0]];
                    if (s !== void 0) {
                        this.morphTargetInfluences = [],
                            this.morphTargetDictionary = {};
                        for (let r = 0, o = s.length; r < o; r++) {
                            let a = s[r].name || String(r);
                            this.morphTargetInfluences.push(0),
                                this.morphTargetDictionary[a] = r
                        }
                    }
                }
            }
            getVertexPosition(t, e) {
                let i = this.geometry
                    , s = i.attributes.position
                    , r = i.morphAttributes.position
                    , o = i.morphTargetsRelative;
                e.fromBufferAttribute(s, t);
                let a = this.morphTargetInfluences;
                if (r && a) {
                    Ur.set(0, 0, 0);
                    for (let c = 0, l = r.length; c < l; c++) {
                        let d = a[c]
                            , h = r[c];
                        d !== 0 && (fl.fromBufferAttribute(h, t),
                            o ? Ur.addScaledVector(fl, d) : Ur.addScaledVector(fl.sub(e), d))
                    }
                    e.add(Ur)
                }
                return e
            }
            raycast(t, e) {
                let i = this.geometry
                    , s = this.material
                    , r = this.matrixWorld;
                s !== void 0 && (i.boundingSphere === null && i.computeBoundingSphere(),
                    Pr.copy(i.boundingSphere),
                    Pr.applyMatrix4(r),
                    li.copy(t.ray).recast(t.near),
                    !(Pr.containsPoint(li.origin) === !1 && (li.intersectSphere(Pr, yh) === null || li.origin.distanceToSquared(yh) > ii(t.far - t.near, 2))) && (xh.copy(r).invert(),
                        li.copy(t.ray).applyMatrix4(xh),
                        !(i.boundingBox !== null && li.intersectsBox(i.boundingBox) === !1) && this._computeIntersections(t, e, li)))
            }
            _computeIntersections(t, e, i) {
                let s, r = this.geometry, o = this.material, a = r.index, c = r.attributes.position, l = r.attributes.uv, d = r.attributes.uv1, h = r.attributes.normal, f = r.groups, p = r.drawRange;
                if (a !== null)
                    if (Array.isArray(o))
                        for (let v = 0, g = f.length; v < g; v++) {
                            let m = f[v]
                                , u = o[m.materialIndex]
                                , E = Math.max(m.start, p.start)
                                , T = Math.min(a.count, Math.min(m.start + m.count, p.start + p.count));
                            for (let y = E, C = T; y < C; y += 3) {
                                let R = a.getX(y)
                                    , D = a.getX(y + 1)
                                    , N = a.getX(y + 2);
                                s = Fr(this, u, t, i, l, d, h, R, D, N),
                                    s && (s.faceIndex = Math.floor(y / 3),
                                        s.face.materialIndex = m.materialIndex,
                                        e.push(s))
                            }
                        }
                    else {
                        let v = Math.max(0, p.start)
                            , g = Math.min(a.count, p.start + p.count);
                        for (let m = v, u = g; m < u; m += 3) {
                            let E = a.getX(m)
                                , T = a.getX(m + 1)
                                , y = a.getX(m + 2);
                            s = Fr(this, o, t, i, l, d, h, E, T, y),
                                s && (s.faceIndex = Math.floor(m / 3),
                                    e.push(s))
                        }
                    }
                else if (c !== void 0)
                    if (Array.isArray(o))
                        for (let v = 0, g = f.length; v < g; v++) {
                            let m = f[v]
                                , u = o[m.materialIndex]
                                , E = Math.max(m.start, p.start)
                                , T = Math.min(c.count, Math.min(m.start + m.count, p.start + p.count));
                            for (let y = E, C = T; y < C; y += 3) {
                                let R = y
                                    , D = y + 1
                                    , N = y + 2;
                                s = Fr(this, u, t, i, l, d, h, R, D, N),
                                    s && (s.faceIndex = Math.floor(y / 3),
                                        s.face.materialIndex = m.materialIndex,
                                        e.push(s))
                            }
                        }
                    else {
                        let v = Math.max(0, p.start)
                            , g = Math.min(c.count, p.start + p.count);
                        for (let m = v, u = g; m < u; m += 3) {
                            let E = m
                                , T = m + 1
                                , y = m + 2;
                            s = Fr(this, o, t, i, l, d, h, E, T, y),
                                s && (s.faceIndex = Math.floor(m / 3),
                                    e.push(s))
                        }
                    }
            }
        }
        ;
    function gf(n, t, e, i, s, r, o, a) {
        let c;
        if (t.side === De ? c = i.intersectTriangle(o, r, s, !0, a) : c = i.intersectTriangle(s, r, o, t.side === Ln, a),
            c === null)
            return null;
        Nr.copy(a),
            Nr.applyMatrix4(n.matrixWorld);
        let l = e.ray.origin.distanceTo(Nr);
        return l < e.near || l > e.far ? null : {
            distance: l,
            point: Nr.clone(),
            object: n
        }
    }
    function Fr(n, t, e, i, s, r, o, a, c, l) {
        n.getVertexPosition(a, Ir),
            n.getVertexPosition(c, Dr),
            n.getVertexPosition(l, Lr);
        let d = gf(n, t, e, i, Ir, Dr, Lr, Mh);
        if (d) {
            let h = new P;
            Wn.getBarycoord(Mh, Ir, Dr, Lr, h),
                s && (d.uv = Wn.getInterpolatedAttribute(s, a, c, l, h, new Mt)),
                r && (d.uv1 = Wn.getInterpolatedAttribute(r, a, c, l, h, new Mt)),
                o && (d.normal = Wn.getInterpolatedAttribute(o, a, c, l, h, new P),
                    d.normal.dot(i.direction) > 0 && d.normal.multiplyScalar(-1));
            let f = {
                a,
                b: c,
                c: l,
                normal: new P,
                materialIndex: 0
            };
            Wn.getNormal(Ir, Dr, Lr, f.normal),
                d.face = f,
                d.barycoord = h
        }
        return d
    }
    var ji = class n extends $e {
        constructor(t = 1, e = 1, i = 1, s = 1, r = 1, o = 1) {
            super(),
                this.type = "BoxGeometry",
                this.parameters = {
                    width: t,
                    height: e,
                    depth: i,
                    widthSegments: s,
                    heightSegments: r,
                    depthSegments: o
                };
            let a = this;
            s = Math.floor(s),
                r = Math.floor(r),
                o = Math.floor(o);
            let c = []
                , l = []
                , d = []
                , h = []
                , f = 0
                , p = 0;
            v("z", "y", "x", -1, -1, i, e, t, o, r, 0),
                v("z", "y", "x", 1, -1, i, e, -t, o, r, 1),
                v("x", "z", "y", 1, 1, t, i, e, s, o, 2),
                v("x", "z", "y", 1, -1, t, i, -e, s, o, 3),
                v("x", "y", "z", 1, -1, t, e, i, s, r, 4),
                v("x", "y", "z", -1, -1, t, e, -i, s, r, 5),
                this.setIndex(c),
                this.setAttribute("position", new Ce(l, 3)),
                this.setAttribute("normal", new Ce(d, 3)),
                this.setAttribute("uv", new Ce(h, 2));
            function v(g, m, u, E, T, y, C, R, D, N, S) {
                let M = y / D
                    , w = C / N
                    , V = y / 2
                    , H = C / 2
                    , z = R / 2
                    , Z = D + 1
                    , q = N + 1
                    , tt = 0
                    , k = 0
                    , rt = new P;
                for (let ht = 0; ht < q; ht++) {
                    let bt = ht * w - H;
                    for (let Bt = 0; Bt < Z; Bt++) {
                        let ie = Bt * M - V;
                        rt[g] = ie * E,
                            rt[m] = bt * T,
                            rt[u] = z,
                            l.push(rt.x, rt.y, rt.z),
                            rt[g] = 0,
                            rt[m] = 0,
                            rt[u] = R > 0 ? 1 : -1,
                            d.push(rt.x, rt.y, rt.z),
                            h.push(Bt / D),
                            h.push(1 - ht / N),
                            tt += 1
                    }
                }
                for (let ht = 0; ht < N; ht++)
                    for (let bt = 0; bt < D; bt++) {
                        let Bt = f + bt + Z * ht
                            , ie = f + bt + Z * (ht + 1)
                            , Kt = f + (bt + 1) + Z * (ht + 1)
                            , X = f + (bt + 1) + Z * ht;
                        c.push(Bt, ie, X),
                            c.push(ie, Kt, X),
                            k += 6
                    }
                a.addGroup(p, k, S),
                    p += k,
                    f += tt
            }
        }
        copy(t) {
            return super.copy(t),
                this.parameters = Object.assign({}, t.parameters),
                this
        }
        static fromJSON(t) {
            return new n(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments)
        }
    }
        ;
    function Si(n) {
        let t = {};
        for (let e in n) {
            t[e] = {};
            for (let i in n[e]) {
                let s = n[e][i];
                s && (s.isColor || s.isMatrix3 || s.isMatrix4 || s.isVector2 || s.isVector3 || s.isVector4 || s.isTexture || s.isQuaternion) ? s.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),
                    t[e][i] = null) : t[e][i] = s.clone() : Array.isArray(s) ? t[e][i] = s.slice() : t[e][i] = s
            }
        }
        return t
    }
    function Re(n) {
        let t = {};
        for (let e = 0; e < n.length; e++) {
            let i = Si(n[e]);
            for (let s in i)
                t[s] = i[s]
        }
        return t
    }
    function _f(n) {
        let t = [];
        for (let e = 0; e < n.length; e++)
            t.push(n[e].clone());
        return t
    }
    function Vl(n) {
        let t = n.getRenderTarget();
        return t === null ? n.outputColorSpace : t.isXRRenderTarget === !0 ? t.texture.colorSpace : Gt.workingColorSpace
    }
    var bi = {
        clone: Si,
        merge: Re
    }
        , vf = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`
        , xf = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`
        , ve = class extends Zn {
            constructor(t) {
                super(),
                    this.isShaderMaterial = !0,
                    this.type = "ShaderMaterial",
                    this.defines = {},
                    this.uniforms = {},
                    this.uniformsGroups = [],
                    this.vertexShader = vf,
                    this.fragmentShader = xf,
                    this.linewidth = 1,
                    this.wireframe = !1,
                    this.wireframeLinewidth = 1,
                    this.fog = !1,
                    this.lights = !1,
                    this.clipping = !1,
                    this.forceSinglePass = !0,
                    this.extensions = {
                        clipCullDistance: !1,
                        multiDraw: !1
                    },
                    this.defaultAttributeValues = {
                        color: [1, 1, 1],
                        uv: [0, 0],
                        uv1: [0, 0]
                    },
                    this.index0AttributeName = void 0,
                    this.uniformsNeedUpdate = !1,
                    this.glslVersion = null,
                    t !== void 0 && this.setValues(t)
            }
            copy(t) {
                return super.copy(t),
                    this.fragmentShader = t.fragmentShader,
                    this.vertexShader = t.vertexShader,
                    this.uniforms = Si(t.uniforms),
                    this.uniformsGroups = _f(t.uniformsGroups),
                    this.defines = Object.assign({}, t.defines),
                    this.wireframe = t.wireframe,
                    this.wireframeLinewidth = t.wireframeLinewidth,
                    this.fog = t.fog,
                    this.lights = t.lights,
                    this.clipping = t.clipping,
                    this.extensions = Object.assign({}, t.extensions),
                    this.glslVersion = t.glslVersion,
                    this
            }
            toJSON(t) {
                let e = super.toJSON(t);
                e.glslVersion = this.glslVersion,
                    e.uniforms = {};
                for (let s in this.uniforms) {
                    let o = this.uniforms[s].value;
                    o && o.isTexture ? e.uniforms[s] = {
                        type: "t",
                        value: o.toJSON(t).uuid
                    } : o && o.isColor ? e.uniforms[s] = {
                        type: "c",
                        value: o.getHex()
                    } : o && o.isVector2 ? e.uniforms[s] = {
                        type: "v2",
                        value: o.toArray()
                    } : o && o.isVector3 ? e.uniforms[s] = {
                        type: "v3",
                        value: o.toArray()
                    } : o && o.isVector4 ? e.uniforms[s] = {
                        type: "v4",
                        value: o.toArray()
                    } : o && o.isMatrix3 ? e.uniforms[s] = {
                        type: "m3",
                        value: o.toArray()
                    } : o && o.isMatrix4 ? e.uniforms[s] = {
                        type: "m4",
                        value: o.toArray()
                    } : e.uniforms[s] = {
                        value: o
                    }
                }
                Object.keys(this.defines).length > 0 && (e.defines = this.defines),
                    e.vertexShader = this.vertexShader,
                    e.fragmentShader = this.fragmentShader,
                    e.lights = this.lights,
                    e.clipping = this.clipping;
                let i = {};
                for (let s in this.extensions)
                    this.extensions[s] === !0 && (i[s] = !0);
                return Object.keys(i).length > 0 && (e.extensions = i),
                    e
            }
        }
        , Fs = class extends Ze {
            constructor() {
                super(),
                    this.isCamera = !0,
                    this.type = "Camera",
                    this.matrixWorldInverse = new me,
                    this.projectionMatrix = new me,
                    this.projectionMatrixInverse = new me,
                    this.coordinateSystem = hn,
                    this._reversedDepth = !1
            }
            get reversedDepth() {
                return this._reversedDepth
            }
            copy(t, e) {
                return super.copy(t, e),
                    this.matrixWorldInverse.copy(t.matrixWorldInverse),
                    this.projectionMatrix.copy(t.projectionMatrix),
                    this.projectionMatrixInverse.copy(t.projectionMatrixInverse),
                    this.coordinateSystem = t.coordinateSystem,
                    this
            }
            getWorldDirection(t) {
                return super.getWorldDirection(t).negate()
            }
            updateMatrixWorld(t) {
                super.updateMatrixWorld(t),
                    this.matrixWorldInverse.copy(this.matrixWorld).invert()
            }
            updateWorldMatrix(t, e) {
                super.updateWorldMatrix(t, e),
                    this.matrixWorldInverse.copy(this.matrixWorld).invert()
            }
            clone() {
                return new this.constructor().copy(this)
            }
        }
        , Gn = new P
        , Sh = new Mt
        , bh = new Mt
        , Ae = class extends Fs {
            constructor(t = 50, e = 1, i = .1, s = 2e3) {
                super(),
                    this.isPerspectiveCamera = !0,
                    this.type = "PerspectiveCamera",
                    this.fov = t,
                    this.zoom = 1,
                    this.near = i,
                    this.far = s,
                    this.focus = 10,
                    this.aspect = e,
                    this.view = null,
                    this.filmGauge = 35,
                    this.filmOffset = 0,
                    this.updateProjectionMatrix()
            }
            copy(t, e) {
                return super.copy(t, e),
                    this.fov = t.fov,
                    this.zoom = t.zoom,
                    this.near = t.near,
                    this.far = t.far,
                    this.focus = t.focus,
                    this.aspect = t.aspect,
                    this.view = t.view === null ? null : Object.assign({}, t.view),
                    this.filmGauge = t.filmGauge,
                    this.filmOffset = t.filmOffset,
                    this
            }
            setFocalLength(t) {
                let e = .5 * this.getFilmHeight() / t;
                this.fov = Ji * 2 * Math.atan(e),
                    this.updateProjectionMatrix()
            }
            getFocalLength() {
                let t = Math.tan(ws * .5 * this.fov);
                return .5 * this.getFilmHeight() / t
            }
            getEffectiveFOV() {
                return Ji * 2 * Math.atan(Math.tan(ws * .5 * this.fov) / this.zoom)
            }
            getFilmWidth() {
                return this.filmGauge * Math.min(this.aspect, 1)
            }
            getFilmHeight() {
                return this.filmGauge / Math.max(this.aspect, 1)
            }
            getViewBounds(t, e, i) {
                Gn.set(-1, -1, .5).applyMatrix4(this.projectionMatrixInverse),
                    e.set(Gn.x, Gn.y).multiplyScalar(-t / Gn.z),
                    Gn.set(1, 1, .5).applyMatrix4(this.projectionMatrixInverse),
                    i.set(Gn.x, Gn.y).multiplyScalar(-t / Gn.z)
            }
            getViewSize(t, e) {
                return this.getViewBounds(t, Sh, bh),
                    e.subVectors(bh, Sh)
            }
            setViewOffset(t, e, i, s, r, o) {
                this.aspect = t / e,
                    this.view === null && (this.view = {
                        enabled: !0,
                        fullWidth: 1,
                        fullHeight: 1,
                        offsetX: 0,
                        offsetY: 0,
                        width: 1,
                        height: 1
                    }),
                    this.view.enabled = !0,
                    this.view.fullWidth = t,
                    this.view.fullHeight = e,
                    this.view.offsetX = i,
                    this.view.offsetY = s,
                    this.view.width = r,
                    this.view.height = o,
                    this.updateProjectionMatrix()
            }
            clearViewOffset() {
                this.view !== null && (this.view.enabled = !1),
                    this.updateProjectionMatrix()
            }
            updateProjectionMatrix() {
                let t = this.near
                    , e = t * Math.tan(ws * .5 * this.fov) / this.zoom
                    , i = 2 * e
                    , s = this.aspect * i
                    , r = -.5 * s
                    , o = this.view;
                if (this.view !== null && this.view.enabled) {
                    let c = o.fullWidth
                        , l = o.fullHeight;
                    r += o.offsetX * s / c,
                        e -= o.offsetY * i / l,
                        s *= o.width / c,
                        i *= o.height / l
                }
                let a = this.filmOffset;
                a !== 0 && (r += t * a / this.getFilmWidth()),
                    this.projectionMatrix.makePerspective(r, r + s, e, e - i, t, this.far, this.coordinateSystem, this.reversedDepth),
                    this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
            }
            toJSON(t) {
                let e = super.toJSON(t);
                return e.object.fov = this.fov,
                    e.object.zoom = this.zoom,
                    e.object.near = this.near,
                    e.object.far = this.far,
                    e.object.focus = this.focus,
                    e.object.aspect = this.aspect,
                    this.view !== null && (e.object.view = Object.assign({}, this.view)),
                    e.object.filmGauge = this.filmGauge,
                    e.object.filmOffset = this.filmOffset,
                    e
            }
        }
        , Xi = -90
        , qi = 1
        , Jr = class extends Ze {
            constructor(t, e, i) {
                super(),
                    this.type = "CubeCamera",
                    this.renderTarget = i,
                    this.coordinateSystem = null,
                    this.activeMipmapLevel = 0;
                let s = new Ae(Xi, qi, t, e);
                s.layers = this.layers,
                    this.add(s);
                let r = new Ae(Xi, qi, t, e);
                r.layers = this.layers,
                    this.add(r);
                let o = new Ae(Xi, qi, t, e);
                o.layers = this.layers,
                    this.add(o);
                let a = new Ae(Xi, qi, t, e);
                a.layers = this.layers,
                    this.add(a);
                let c = new Ae(Xi, qi, t, e);
                c.layers = this.layers,
                    this.add(c);
                let l = new Ae(Xi, qi, t, e);
                l.layers = this.layers,
                    this.add(l)
            }
            updateCoordinateSystem() {
                let t = this.coordinateSystem
                    , e = this.children.concat()
                    , [i, s, r, o, a, c] = e;
                for (let l of e)
                    this.remove(l);
                if (t === hn)
                    i.up.set(0, 1, 0),
                        i.lookAt(1, 0, 0),
                        s.up.set(0, 1, 0),
                        s.lookAt(-1, 0, 0),
                        r.up.set(0, 0, -1),
                        r.lookAt(0, 1, 0),
                        o.up.set(0, 0, 1),
                        o.lookAt(0, -1, 0),
                        a.up.set(0, 1, 0),
                        a.lookAt(0, 0, 1),
                        c.up.set(0, 1, 0),
                        c.lookAt(0, 0, -1);
                else if (t === Ps)
                    i.up.set(0, -1, 0),
                        i.lookAt(-1, 0, 0),
                        s.up.set(0, -1, 0),
                        s.lookAt(1, 0, 0),
                        r.up.set(0, 0, 1),
                        r.lookAt(0, 1, 0),
                        o.up.set(0, 0, -1),
                        o.lookAt(0, -1, 0),
                        a.up.set(0, -1, 0),
                        a.lookAt(0, 0, 1),
                        c.up.set(0, -1, 0),
                        c.lookAt(0, 0, -1);
                else
                    throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + t);
                for (let l of e)
                    this.add(l),
                        l.updateMatrixWorld()
            }
            update(t, e) {
                this.parent === null && this.updateMatrixWorld();
                let { renderTarget: i, activeMipmapLevel: s } = this;
                this.coordinateSystem !== t.coordinateSystem && (this.coordinateSystem = t.coordinateSystem,
                    this.updateCoordinateSystem());
                let [r, o, a, c, l, d] = this.children
                    , h = t.getRenderTarget()
                    , f = t.getActiveCubeFace()
                    , p = t.getActiveMipmapLevel()
                    , v = t.xr.enabled;
                t.xr.enabled = !1;
                let g = i.texture.generateMipmaps;
                i.texture.generateMipmaps = !1,
                    t.setRenderTarget(i, 0, s),
                    t.render(e, r),
                    t.setRenderTarget(i, 1, s),
                    t.render(e, o),
                    t.setRenderTarget(i, 2, s),
                    t.render(e, a),
                    t.setRenderTarget(i, 3, s),
                    t.render(e, c),
                    t.setRenderTarget(i, 4, s),
                    t.render(e, l),
                    i.texture.generateMipmaps = g,
                    t.setRenderTarget(i, 5, s),
                    t.render(e, d),
                    t.setRenderTarget(h, f, p),
                    t.xr.enabled = v,
                    i.texture.needsPMREMUpdate = !0
            }
        }
        , Os = class extends Ye {
            constructor(t = [], e = yi, i, s, r, o, a, c, l, d) {
                super(t, e, i, s, r, o, a, c, l, d),
                    this.isCubeTexture = !0,
                    this.flipY = !1
            }
            get images() {
                return this.image
            }
            set images(t) {
                this.image = t
            }
        }
        , Kr = class extends Te {
            constructor(t = 1, e = {}) {
                super(t, t, e),
                    this.isWebGLCubeRenderTarget = !0;
                let i = {
                    width: t,
                    height: t,
                    depth: 1
                }
                    , s = [i, i, i, i, i, i];
                this.texture = new Os(s),
                    this._setTextureOptions(e),
                    this.texture.isRenderTargetTexture = !0
            }
            fromEquirectangularTexture(t, e) {
                this.texture.type = e.type,
                    this.texture.colorSpace = e.colorSpace,
                    this.texture.generateMipmaps = e.generateMipmaps,
                    this.texture.minFilter = e.minFilter,
                    this.texture.magFilter = e.magFilter;
                let i = {
                    uniforms: {
                        tEquirect: {
                            value: null
                        }
                    },
                    vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
                    fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
                }
                    , s = new ji(5, 5, 5)
                    , r = new ve({
                        name: "CubemapFromEquirect",
                        uniforms: Si(i.uniforms),
                        vertexShader: i.vertexShader,
                        fragmentShader: i.fragmentShader,
                        side: De,
                        blending: un
                    });
                r.uniforms.tEquirect.value = e;
                let o = new Fe(s, r)
                    , a = e.minFilter;
                return e.minFilter === Qn && (e.minFilter = Ne),
                    new Jr(1, 10, this).update(t, o),
                    e.minFilter = a,
                    o.geometry.dispose(),
                    o.material.dispose(),
                    this
            }
            clear(t, e = !0, i = !0, s = !0) {
                let r = t.getRenderTarget();
                for (let o = 0; o < 6; o++)
                    t.setRenderTarget(this, o),
                        t.clear(e, i, s);
                t.setRenderTarget(r)
            }
        }
        , In = class extends Ze {
            constructor() {
                super(),
                    this.isGroup = !0,
                    this.type = "Group"
            }
        }
        , yf = {
            type: "move"
        }
        , Qi = class {
            constructor() {
                this._targetRay = null,
                    this._grip = null,
                    this._hand = null
            }
            getHandSpace() {
                return this._hand === null && (this._hand = new In,
                    this._hand.matrixAutoUpdate = !1,
                    this._hand.visible = !1,
                    this._hand.joints = {},
                    this._hand.inputState = {
                        pinching: !1
                    }),
                    this._hand
            }
            getTargetRaySpace() {
                return this._targetRay === null && (this._targetRay = new In,
                    this._targetRay.matrixAutoUpdate = !1,
                    this._targetRay.visible = !1,
                    this._targetRay.hasLinearVelocity = !1,
                    this._targetRay.linearVelocity = new P,
                    this._targetRay.hasAngularVelocity = !1,
                    this._targetRay.angularVelocity = new P),
                    this._targetRay
            }
            getGripSpace() {
                return this._grip === null && (this._grip = new In,
                    this._grip.matrixAutoUpdate = !1,
                    this._grip.visible = !1,
                    this._grip.hasLinearVelocity = !1,
                    this._grip.linearVelocity = new P,
                    this._grip.hasAngularVelocity = !1,
                    this._grip.angularVelocity = new P),
                    this._grip
            }
            dispatchEvent(t) {
                return this._targetRay !== null && this._targetRay.dispatchEvent(t),
                    this._grip !== null && this._grip.dispatchEvent(t),
                    this._hand !== null && this._hand.dispatchEvent(t),
                    this
            }
            connect(t) {
                if (t && t.hand) {
                    let e = this._hand;
                    if (e)
                        for (let i of t.hand.values())
                            this._getHandJoint(e, i)
                }
                return this.dispatchEvent({
                    type: "connected",
                    data: t
                }),
                    this
            }
            disconnect(t) {
                return this.dispatchEvent({
                    type: "disconnected",
                    data: t
                }),
                    this._targetRay !== null && (this._targetRay.visible = !1),
                    this._grip !== null && (this._grip.visible = !1),
                    this._hand !== null && (this._hand.visible = !1),
                    this
            }
            update(t, e, i) {
                let s = null
                    , r = null
                    , o = null
                    , a = this._targetRay
                    , c = this._grip
                    , l = this._hand;
                if (t && e.session.visibilityState !== "visible-blurred") {
                    if (l && t.hand) {
                        o = !0;
                        for (let g of t.hand.values()) {
                            let m = e.getJointPose(g, i)
                                , u = this._getHandJoint(l, g);
                            m !== null && (u.matrix.fromArray(m.transform.matrix),
                                u.matrix.decompose(u.position, u.rotation, u.scale),
                                u.matrixWorldNeedsUpdate = !0,
                                u.jointRadius = m.radius),
                                u.visible = m !== null
                        }
                        let d = l.joints["index-finger-tip"]
                            , h = l.joints["thumb-tip"]
                            , f = d.position.distanceTo(h.position)
                            , p = .02
                            , v = .005;
                        l.inputState.pinching && f > p + v ? (l.inputState.pinching = !1,
                            this.dispatchEvent({
                                type: "pinchend",
                                handedness: t.handedness,
                                target: this
                            })) : !l.inputState.pinching && f <= p - v && (l.inputState.pinching = !0,
                                this.dispatchEvent({
                                    type: "pinchstart",
                                    handedness: t.handedness,
                                    target: this
                                }))
                    } else
                        c !== null && t.gripSpace && (r = e.getPose(t.gripSpace, i),
                            r !== null && (c.matrix.fromArray(r.transform.matrix),
                                c.matrix.decompose(c.position, c.rotation, c.scale),
                                c.matrixWorldNeedsUpdate = !0,
                                r.linearVelocity ? (c.hasLinearVelocity = !0,
                                    c.linearVelocity.copy(r.linearVelocity)) : c.hasLinearVelocity = !1,
                                r.angularVelocity ? (c.hasAngularVelocity = !0,
                                    c.angularVelocity.copy(r.angularVelocity)) : c.hasAngularVelocity = !1));
                    a !== null && (s = e.getPose(t.targetRaySpace, i),
                        s === null && r !== null && (s = r),
                        s !== null && (a.matrix.fromArray(s.transform.matrix),
                            a.matrix.decompose(a.position, a.rotation, a.scale),
                            a.matrixWorldNeedsUpdate = !0,
                            s.linearVelocity ? (a.hasLinearVelocity = !0,
                                a.linearVelocity.copy(s.linearVelocity)) : a.hasLinearVelocity = !1,
                            s.angularVelocity ? (a.hasAngularVelocity = !0,
                                a.angularVelocity.copy(s.angularVelocity)) : a.hasAngularVelocity = !1,
                            this.dispatchEvent(yf)))
                }
                return a !== null && (a.visible = s !== null),
                    c !== null && (c.visible = r !== null),
                    l !== null && (l.visible = o !== null),
                    this
            }
            _getHandJoint(t, e) {
                if (t.joints[e.jointName] === void 0) {
                    let i = new In;
                    i.matrixAutoUpdate = !1,
                        i.visible = !1,
                        t.joints[e.jointName] = i,
                        t.add(i)
                }
                return t.joints[e.jointName]
            }
        }
        ;
    var Bs = class n {
        constructor(t, e = 1, i = 1e3) {
            this.isFog = !0,
                this.name = "",
                this.color = new Dt(t),
                this.near = e,
                this.far = i
        }
        clone() {
            return new n(this.color, this.near, this.far)
        }
        toJSON() {
            return {
                type: "Fog",
                name: this.name,
                color: this.color.getHex(),
                near: this.near,
                far: this.far
            }
        }
    }
        , zs = class extends Ze {
            constructor() {
                super(),
                    this.isScene = !0,
                    this.type = "Scene",
                    this.background = null,
                    this.environment = null,
                    this.fog = null,
                    this.backgroundBlurriness = 0,
                    this.backgroundIntensity = 1,
                    this.backgroundRotation = new vn,
                    this.environmentIntensity = 1,
                    this.environmentRotation = new vn,
                    this.overrideMaterial = null,
                    typeof __THREE_DEVTOOLS__ != "undefined" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
                        detail: this
                    }))
            }
            copy(t, e) {
                return super.copy(t, e),
                    t.background !== null && (this.background = t.background.clone()),
                    t.environment !== null && (this.environment = t.environment.clone()),
                    t.fog !== null && (this.fog = t.fog.clone()),
                    this.backgroundBlurriness = t.backgroundBlurriness,
                    this.backgroundIntensity = t.backgroundIntensity,
                    this.backgroundRotation.copy(t.backgroundRotation),
                    this.environmentIntensity = t.environmentIntensity,
                    this.environmentRotation.copy(t.environmentRotation),
                    t.overrideMaterial !== null && (this.overrideMaterial = t.overrideMaterial.clone()),
                    this.matrixAutoUpdate = t.matrixAutoUpdate,
                    this
            }
            toJSON(t) {
                let e = super.toJSON(t);
                return this.fog !== null && (e.object.fog = this.fog.toJSON()),
                    this.backgroundBlurriness > 0 && (e.object.backgroundBlurriness = this.backgroundBlurriness),
                    this.backgroundIntensity !== 1 && (e.object.backgroundIntensity = this.backgroundIntensity),
                    e.object.backgroundRotation = this.backgroundRotation.toArray(),
                    this.environmentIntensity !== 1 && (e.object.environmentIntensity = this.environmentIntensity),
                    e.object.environmentRotation = this.environmentRotation.toArray(),
                    e
            }
        }
        ;
    var pl = new P
        , Mf = new P
        , Sf = new Nt
        , nn = class {
            constructor(t = new P(1, 0, 0), e = 0) {
                this.isPlane = !0,
                    this.normal = t,
                    this.constant = e
            }
            set(t, e) {
                return this.normal.copy(t),
                    this.constant = e,
                    this
            }
            setComponents(t, e, i, s) {
                return this.normal.set(t, e, i),
                    this.constant = s,
                    this
            }
            setFromNormalAndCoplanarPoint(t, e) {
                return this.normal.copy(t),
                    this.constant = -e.dot(this.normal),
                    this
            }
            setFromCoplanarPoints(t, e, i) {
                let s = pl.subVectors(i, e).cross(Mf.subVectors(t, e)).normalize();
                return this.setFromNormalAndCoplanarPoint(s, t),
                    this
            }
            copy(t) {
                return this.normal.copy(t.normal),
                    this.constant = t.constant,
                    this
            }
            normalize() {
                let t = 1 / this.normal.length();
                return this.normal.multiplyScalar(t),
                    this.constant *= t,
                    this
            }
            negate() {
                return this.constant *= -1,
                    this.normal.negate(),
                    this
            }
            distanceToPoint(t) {
                return this.normal.dot(t) + this.constant
            }
            distanceToSphere(t) {
                return this.distanceToPoint(t.center) - t.radius
            }
            projectPoint(t, e) {
                return e.copy(t).addScaledVector(this.normal, -this.distanceToPoint(t))
            }
            intersectLine(t, e) {
                let i = t.delta(pl)
                    , s = this.normal.dot(i);
                if (s === 0)
                    return this.distanceToPoint(t.start) === 0 ? e.copy(t.start) : null;
                let r = -(t.start.dot(this.normal) + this.constant) / s;
                return r < 0 || r > 1 ? null : e.copy(t.start).addScaledVector(i, r)
            }
            intersectsLine(t) {
                let e = this.distanceToPoint(t.start)
                    , i = this.distanceToPoint(t.end);
                return e < 0 && i > 0 || i < 0 && e > 0
            }
            intersectsBox(t) {
                return t.intersectsPlane(this)
            }
            intersectsSphere(t) {
                return t.intersectsPlane(this)
            }
            coplanarPoint(t) {
                return t.copy(this.normal).multiplyScalar(-this.constant)
            }
            applyMatrix4(t, e) {
                let i = e || Sf.getNormalMatrix(t)
                    , s = this.coplanarPoint(pl).applyMatrix4(t)
                    , r = this.normal.applyMatrix3(i).normalize();
                return this.constant = -s.dot(r),
                    this
            }
            translate(t) {
                return this.constant -= t.dot(this.normal),
                    this
            }
            equals(t) {
                return t.normal.equals(this.normal) && t.constant === this.constant
            }
            clone() {
                return new this.constructor().copy(this)
            }
        }
        , ci = new mi
        , bf = new Mt(.5, .5)
        , Or = new P
        , ks = class {
            constructor(t = new nn, e = new nn, i = new nn, s = new nn, r = new nn, o = new nn) {
                this.planes = [t, e, i, s, r, o]
            }
            set(t, e, i, s, r, o) {
                let a = this.planes;
                return a[0].copy(t),
                    a[1].copy(e),
                    a[2].copy(i),
                    a[3].copy(s),
                    a[4].copy(r),
                    a[5].copy(o),
                    this
            }
            copy(t) {
                let e = this.planes;
                for (let i = 0; i < 6; i++)
                    e[i].copy(t.planes[i]);
                return this
            }
            setFromProjectionMatrix(t, e = hn, i = !1) {
                let s = this.planes
                    , r = t.elements
                    , o = r[0]
                    , a = r[1]
                    , c = r[2]
                    , l = r[3]
                    , d = r[4]
                    , h = r[5]
                    , f = r[6]
                    , p = r[7]
                    , v = r[8]
                    , g = r[9]
                    , m = r[10]
                    , u = r[11]
                    , E = r[12]
                    , T = r[13]
                    , y = r[14]
                    , C = r[15];
                if (s[0].setComponents(l - o, p - d, u - v, C - E).normalize(),
                    s[1].setComponents(l + o, p + d, u + v, C + E).normalize(),
                    s[2].setComponents(l + a, p + h, u + g, C + T).normalize(),
                    s[3].setComponents(l - a, p - h, u - g, C - T).normalize(),
                    i)
                    s[4].setComponents(c, f, m, y).normalize(),
                        s[5].setComponents(l - c, p - f, u - m, C - y).normalize();
                else if (s[4].setComponents(l - c, p - f, u - m, C - y).normalize(),
                    e === hn)
                    s[5].setComponents(l + c, p + f, u + m, C + y).normalize();
                else if (e === Ps)
                    s[5].setComponents(c, f, m, y).normalize();
                else
                    throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + e);
                return this
            }
            intersectsObject(t) {
                if (t.boundingSphere !== void 0)
                    t.boundingSphere === null && t.computeBoundingSphere(),
                        ci.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);
                else {
                    let e = t.geometry;
                    e.boundingSphere === null && e.computeBoundingSphere(),
                        ci.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)
                }
                return this.intersectsSphere(ci)
            }
            intersectsSprite(t) {
                ci.center.set(0, 0, 0);
                let e = bf.distanceTo(t.center);
                return ci.radius = .7071067811865476 + e,
                    ci.applyMatrix4(t.matrixWorld),
                    this.intersectsSphere(ci)
            }
            intersectsSphere(t) {
                let e = this.planes
                    , i = t.center
                    , s = -t.radius;
                for (let r = 0; r < 6; r++)
                    if (e[r].distanceToPoint(i) < s)
                        return !1;
                return !0
            }
            intersectsBox(t) {
                let e = this.planes;
                for (let i = 0; i < 6; i++) {
                    let s = e[i];
                    if (Or.x = s.normal.x > 0 ? t.max.x : t.min.x,
                        Or.y = s.normal.y > 0 ? t.max.y : t.min.y,
                        Or.z = s.normal.z > 0 ? t.max.z : t.min.z,
                        s.distanceToPoint(Or) < 0)
                        return !1
                }
                return !0
            }
            containsPoint(t) {
                let e = this.planes;
                for (let i = 0; i < 6; i++)
                    if (e[i].distanceToPoint(t) < 0)
                        return !1;
                return !0
            }
            clone() {
                return new this.constructor().copy(this)
            }
        }
        ;
    var ts = class extends Zn {
        constructor(t) {
            super(),
                this.isLineBasicMaterial = !0,
                this.type = "LineBasicMaterial",
                this.color = new Dt(16777215),
                this.map = null,
                this.linewidth = 1,
                this.linecap = "round",
                this.linejoin = "round",
                this.fog = !0,
                this.setValues(t)
        }
        copy(t) {
            return super.copy(t),
                this.color.copy(t.color),
                this.map = t.map,
                this.linewidth = t.linewidth,
                this.linecap = t.linecap,
                this.linejoin = t.linejoin,
                this.fog = t.fog,
                this
        }
    }
        , jr = new P
        , Qr = new P
        , Th = new me
        , Es = new gi
        , Br = new mi
        , ml = new P
        , Eh = new P
        , Vs = class extends Ze {
            constructor(t = new $e, e = new ts) {
                super(),
                    this.isLine = !0,
                    this.type = "Line",
                    this.geometry = t,
                    this.material = e,
                    this.morphTargetDictionary = void 0,
                    this.morphTargetInfluences = void 0,
                    this.updateMorphTargets()
            }
            copy(t, e) {
                return super.copy(t, e),
                    this.material = Array.isArray(t.material) ? t.material.slice() : t.material,
                    this.geometry = t.geometry,
                    this
            }
            computeLineDistances() {
                let t = this.geometry;
                if (t.index === null) {
                    let e = t.attributes.position
                        , i = [0];
                    for (let s = 1, r = e.count; s < r; s++)
                        jr.fromBufferAttribute(e, s - 1),
                            Qr.fromBufferAttribute(e, s),
                            i[s] = i[s - 1],
                            i[s] += jr.distanceTo(Qr);
                    t.setAttribute("lineDistance", new Ce(i, 1))
                } else
                    console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
                return this
            }
            raycast(t, e) {
                let i = this.geometry
                    , s = this.matrixWorld
                    , r = t.params.Line.threshold
                    , o = i.drawRange;
                if (i.boundingSphere === null && i.computeBoundingSphere(),
                    Br.copy(i.boundingSphere),
                    Br.applyMatrix4(s),
                    Br.radius += r,
                    t.ray.intersectsSphere(Br) === !1)
                    return;
                Th.copy(s).invert(),
                    Es.copy(t.ray).applyMatrix4(Th);
                let a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3)
                    , c = a * a
                    , l = this.isLineSegments ? 2 : 1
                    , d = i.index
                    , f = i.attributes.position;
                if (d !== null) {
                    let p = Math.max(0, o.start)
                        , v = Math.min(d.count, o.start + o.count);
                    for (let g = p, m = v - 1; g < m; g += l) {
                        let u = d.getX(g)
                            , E = d.getX(g + 1)
                            , T = zr(this, t, Es, c, u, E, g);
                        T && e.push(T)
                    }
                    if (this.isLineLoop) {
                        let g = d.getX(v - 1)
                            , m = d.getX(p)
                            , u = zr(this, t, Es, c, g, m, v - 1);
                        u && e.push(u)
                    }
                } else {
                    let p = Math.max(0, o.start)
                        , v = Math.min(f.count, o.start + o.count);
                    for (let g = p, m = v - 1; g < m; g += l) {
                        let u = zr(this, t, Es, c, g, g + 1, g);
                        u && e.push(u)
                    }
                    if (this.isLineLoop) {
                        let g = zr(this, t, Es, c, v - 1, p, v - 1);
                        g && e.push(g)
                    }
                }
            }
            updateMorphTargets() {
                let e = this.geometry.morphAttributes
                    , i = Object.keys(e);
                if (i.length > 0) {
                    let s = e[i[0]];
                    if (s !== void 0) {
                        this.morphTargetInfluences = [],
                            this.morphTargetDictionary = {};
                        for (let r = 0, o = s.length; r < o; r++) {
                            let a = s[r].name || String(r);
                            this.morphTargetInfluences.push(0),
                                this.morphTargetDictionary[a] = r
                        }
                    }
                }
            }
        }
        ;
    function zr(n, t, e, i, s, r, o) {
        let a = n.geometry.attributes.position;
        if (jr.fromBufferAttribute(a, s),
            Qr.fromBufferAttribute(a, r),
            e.distanceSqToSegment(jr, Qr, ml, Eh) > i)
            return;
        ml.applyMatrix4(n.matrixWorld);
        let l = t.ray.origin.distanceTo(ml);
        if (!(l < t.near || l > t.far))
            return {
                distance: l,
                point: Eh.clone().applyMatrix4(n.matrixWorld),
                index: o,
                face: null,
                faceIndex: null,
                barycoord: null,
                object: n
            }
    }
    var Hs = class extends Ye {
        constructor(t, e, i = ti, s, r, o, a = sn, c = sn, l, d = $i, h = 1) {
            if (d !== $i && d !== rs)
                throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
            let f = {
                width: t,
                height: e,
                depth: h
            };
            super(f, s, r, o, a, c, d, i, l),
                this.isDepthTexture = !0,
                this.flipY = !1,
                this.generateMipmaps = !1,
                this.compareFunction = null
        }
        copy(t) {
            return super.copy(t),
                this.source = new Ki(Object.assign({}, t.image)),
                this.compareFunction = t.compareFunction,
                this
        }
        toJSON(t) {
            let e = super.toJSON(t);
            return this.compareFunction !== null && (e.compareFunction = this.compareFunction),
                e
        }
    }
        ;
    var Gs = class n extends $e {
        constructor(t = 1, e = 1, i = 1, s = 1) {
            super(),
                this.type = "PlaneGeometry",
                this.parameters = {
                    width: t,
                    height: e,
                    widthSegments: i,
                    heightSegments: s
                };
            let r = t / 2
                , o = e / 2
                , a = Math.floor(i)
                , c = Math.floor(s)
                , l = a + 1
                , d = c + 1
                , h = t / a
                , f = e / c
                , p = []
                , v = []
                , g = []
                , m = [];
            for (let u = 0; u < d; u++) {
                let E = u * f - o;
                for (let T = 0; T < l; T++) {
                    let y = T * h - r;
                    v.push(y, -E, 0),
                        g.push(0, 0, 1),
                        m.push(T / a),
                        m.push(1 - u / c)
                }
            }
            for (let u = 0; u < c; u++)
                for (let E = 0; E < a; E++) {
                    let T = E + l * u
                        , y = E + l * (u + 1)
                        , C = E + 1 + l * (u + 1)
                        , R = E + 1 + l * u;
                    p.push(T, y, R),
                        p.push(y, C, R)
                }
            this.setIndex(p),
                this.setAttribute("position", new Ce(v, 3)),
                this.setAttribute("normal", new Ce(g, 3)),
                this.setAttribute("uv", new Ce(m, 2))
        }
        copy(t) {
            return super.copy(t),
                this.parameters = Object.assign({}, t.parameters),
                this
        }
        static fromJSON(t) {
            return new n(t.width, t.height, t.widthSegments, t.heightSegments)
        }
    }
        ;
    var to = class extends Zn {
        constructor(t) {
            super(),
                this.isMeshDepthMaterial = !0,
                this.type = "MeshDepthMaterial",
                this.depthPacking = nu,
                this.map = null,
                this.alphaMap = null,
                this.displacementMap = null,
                this.displacementScale = 1,
                this.displacementBias = 0,
                this.wireframe = !1,
                this.wireframeLinewidth = 1,
                this.setValues(t)
        }
        copy(t) {
            return super.copy(t),
                this.depthPacking = t.depthPacking,
                this.map = t.map,
                this.alphaMap = t.alphaMap,
                this.displacementMap = t.displacementMap,
                this.displacementScale = t.displacementScale,
                this.displacementBias = t.displacementBias,
                this.wireframe = t.wireframe,
                this.wireframeLinewidth = t.wireframeLinewidth,
                this
        }
    }
        , eo = class extends Zn {
            constructor(t) {
                super(),
                    this.isMeshDistanceMaterial = !0,
                    this.type = "MeshDistanceMaterial",
                    this.map = null,
                    this.alphaMap = null,
                    this.displacementMap = null,
                    this.displacementScale = 1,
                    this.displacementBias = 0,
                    this.setValues(t)
            }
            copy(t) {
                return super.copy(t),
                    this.map = t.map,
                    this.alphaMap = t.alphaMap,
                    this.displacementMap = t.displacementMap,
                    this.displacementScale = t.displacementScale,
                    this.displacementBias = t.displacementBias,
                    this
            }
        }
        ;
    function kr(n, t) {
        return !n || n.constructor === t ? n : typeof t.BYTES_PER_ELEMENT == "number" ? new t(n) : Array.prototype.slice.call(n)
    }
    function Tf(n) {
        return ArrayBuffer.isView(n) && !(n instanceof DataView)
    }
    var vi = class {
        constructor(t, e, i, s) {
            this.parameterPositions = t,
                this._cachedIndex = 0,
                this.resultBuffer = s !== void 0 ? s : new e.constructor(i),
                this.sampleValues = e,
                this.valueSize = i,
                this.settings = null,
                this.DefaultSettings_ = {}
        }
        evaluate(t) {
            let e = this.parameterPositions
                , i = this._cachedIndex
                , s = e[i]
                , r = e[i - 1];
            t: {
                e: {
                    let o;
                    n: {
                        i: if (!(t < s)) {
                            for (let a = i + 2; ;) {
                                if (s === void 0) {
                                    if (t < r)
                                        break i;
                                    return i = e.length,
                                        this._cachedIndex = i,
                                        this.copySampleValue_(i - 1)
                                }
                                if (i === a)
                                    break;
                                if (r = s,
                                    s = e[++i],
                                    t < s)
                                    break e
                            }
                            o = e.length;
                            break n
                        }
                        if (!(t >= r)) {
                            let a = e[1];
                            t < a && (i = 2,
                                r = a);
                            for (let c = i - 2; ;) {
                                if (r === void 0)
                                    return this._cachedIndex = 0,
                                        this.copySampleValue_(0);
                                if (i === c)
                                    break;
                                if (s = r,
                                    r = e[--i - 1],
                                    t >= r)
                                    break e
                            }
                            o = i,
                                i = 0;
                            break n
                        }
                        break t
                    }
                    for (; i < o;) {
                        let a = i + o >>> 1;
                        t < e[a] ? o = a : i = a + 1
                    }
                    if (s = e[i],
                        r = e[i - 1],
                        r === void 0)
                        return this._cachedIndex = 0,
                            this.copySampleValue_(0);
                    if (s === void 0)
                        return i = e.length,
                            this._cachedIndex = i,
                            this.copySampleValue_(i - 1)
                }
                this._cachedIndex = i,
                    this.intervalChanged_(i, r, s)
            }
            return this.interpolate_(i, r, t, s)
        }
        getSettings_() {
            return this.settings || this.DefaultSettings_
        }
        copySampleValue_(t) {
            let e = this.resultBuffer
                , i = this.sampleValues
                , s = this.valueSize
                , r = t * s;
            for (let o = 0; o !== s; ++o)
                e[o] = i[r + o];
            return e
        }
        interpolate_() {
            throw new Error("call to abstract method")
        }
        intervalChanged_() { }
    }
        , no = class extends vi {
            constructor(t, e, i, s) {
                super(t, e, i, s),
                    this._weightPrev = -0,
                    this._offsetPrev = -0,
                    this._weightNext = -0,
                    this._offsetNext = -0,
                    this.DefaultSettings_ = {
                        endingStart: gl,
                        endingEnd: gl
                    }
            }
            intervalChanged_(t, e, i) {
                let s = this.parameterPositions
                    , r = t - 2
                    , o = t + 1
                    , a = s[r]
                    , c = s[o];
                if (a === void 0)
                    switch (this.getSettings_().endingStart) {
                        case _l:
                            r = t,
                                a = 2 * e - i;
                            break;
                        case vl:
                            r = s.length - 2,
                                a = e + s[r] - s[r + 1];
                            break;
                        default:
                            r = t,
                                a = i
                    }
                if (c === void 0)
                    switch (this.getSettings_().endingEnd) {
                        case _l:
                            o = t,
                                c = 2 * i - e;
                            break;
                        case vl:
                            o = 1,
                                c = i + s[1] - s[0];
                            break;
                        default:
                            o = t - 1,
                                c = e
                    }
                let l = (i - e) * .5
                    , d = this.valueSize;
                this._weightPrev = l / (e - a),
                    this._weightNext = l / (c - i),
                    this._offsetPrev = r * d,
                    this._offsetNext = o * d
            }
            interpolate_(t, e, i, s) {
                let r = this.resultBuffer
                    , o = this.sampleValues
                    , a = this.valueSize
                    , c = t * a
                    , l = c - a
                    , d = this._offsetPrev
                    , h = this._offsetNext
                    , f = this._weightPrev
                    , p = this._weightNext
                    , v = (i - e) / (s - e)
                    , g = v * v
                    , m = g * v
                    , u = -f * m + 2 * f * g - f * v
                    , E = (1 + f) * m + (-1.5 - 2 * f) * g + (-.5 + f) * v + 1
                    , T = (-1 - p) * m + (1.5 + p) * g + .5 * v
                    , y = p * m - p * g;
                for (let C = 0; C !== a; ++C)
                    r[C] = u * o[d + C] + E * o[l + C] + T * o[c + C] + y * o[h + C];
                return r
            }
        }
        , io = class extends vi {
            constructor(t, e, i, s) {
                super(t, e, i, s)
            }
            interpolate_(t, e, i, s) {
                let r = this.resultBuffer
                    , o = this.sampleValues
                    , a = this.valueSize
                    , c = t * a
                    , l = c - a
                    , d = (i - e) / (s - e)
                    , h = 1 - d;
                for (let f = 0; f !== a; ++f)
                    r[f] = o[l + f] * h + o[c + f] * d;
                return r
            }
        }
        , so = class extends vi {
            constructor(t, e, i, s) {
                super(t, e, i, s)
            }
            interpolate_(t) {
                return this.copySampleValue_(t - 1)
            }
        }
        , Je = class {
            constructor(t, e, i, s) {
                if (t === void 0)
                    throw new Error("THREE.KeyframeTrack: track name is undefined");
                if (e === void 0 || e.length === 0)
                    throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t);
                this.name = t,
                    this.times = kr(e, this.TimeBufferType),
                    this.values = kr(i, this.ValueBufferType),
                    this.setInterpolation(s || this.DefaultInterpolation)
            }
            static toJSON(t) {
                let e = t.constructor, i;
                if (e.toJSON !== this.toJSON)
                    i = e.toJSON(t);
                else {
                    i = {
                        name: t.name,
                        times: kr(t.times, Array),
                        values: kr(t.values, Array)
                    };
                    let s = t.getInterpolation();
                    s !== t.DefaultInterpolation && (i.interpolation = s)
                }
                return i.type = t.ValueTypeName,
                    i
            }
            InterpolantFactoryMethodDiscrete(t) {
                return new so(this.times, this.values, this.getValueSize(), t)
            }
            InterpolantFactoryMethodLinear(t) {
                return new io(this.times, this.values, this.getValueSize(), t)
            }
            InterpolantFactoryMethodSmooth(t) {
                return new no(this.times, this.values, this.getValueSize(), t)
            }
            setInterpolation(t) {
                let e;
                switch (t) {
                    case Cs:
                        e = this.InterpolantFactoryMethodDiscrete;
                        break;
                    case qr:
                        e = this.InterpolantFactoryMethodLinear;
                        break;
                    case Vr:
                        e = this.InterpolantFactoryMethodSmooth;
                        break
                }
                if (e === void 0) {
                    let i = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
                    if (this.createInterpolant === void 0)
                        if (t !== this.DefaultInterpolation)
                            this.setInterpolation(this.DefaultInterpolation);
                        else
                            throw new Error(i);
                    return console.warn("THREE.KeyframeTrack:", i),
                        this
                }
                return this.createInterpolant = e,
                    this
            }
            getInterpolation() {
                switch (this.createInterpolant) {
                    case this.InterpolantFactoryMethodDiscrete:
                        return Cs;
                    case this.InterpolantFactoryMethodLinear:
                        return qr;
                    case this.InterpolantFactoryMethodSmooth:
                        return Vr
                }
            }
            getValueSize() {
                return this.values.length / this.times.length
            }
            shift(t) {
                if (t !== 0) {
                    let e = this.times;
                    for (let i = 0, s = e.length; i !== s; ++i)
                        e[i] += t
                }
                return this
            }
            scale(t) {
                if (t !== 1) {
                    let e = this.times;
                    for (let i = 0, s = e.length; i !== s; ++i)
                        e[i] *= t
                }
                return this
            }
            trim(t, e) {
                let i = this.times
                    , s = i.length
                    , r = 0
                    , o = s - 1;
                for (; r !== s && i[r] < t;)
                    ++r;
                for (; o !== -1 && i[o] > e;)
                    --o;
                if (++o,
                    r !== 0 || o !== s) {
                    r >= o && (o = Math.max(o, 1),
                        r = o - 1);
                    let a = this.getValueSize();
                    this.times = i.slice(r, o),
                        this.values = this.values.slice(r * a, o * a)
                }
                return this
            }
            validate() {
                let t = !0
                    , e = this.getValueSize();
                e - Math.floor(e) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this),
                    t = !1);
                let i = this.times
                    , s = this.values
                    , r = i.length;
                r === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this),
                    t = !1);
                let o = null;
                for (let a = 0; a !== r; a++) {
                    let c = i[a];
                    if (typeof c == "number" && isNaN(c)) {
                        console.error("THREE.KeyframeTrack: Time is not a valid number.", this, a, c),
                            t = !1;
                        break
                    }
                    if (o !== null && o > c) {
                        console.error("THREE.KeyframeTrack: Out of order keys.", this, a, c, o),
                            t = !1;
                        break
                    }
                    o = c
                }
                if (s !== void 0 && Tf(s))
                    for (let a = 0, c = s.length; a !== c; ++a) {
                        let l = s[a];
                        if (isNaN(l)) {
                            console.error("THREE.KeyframeTrack: Value is not a valid number.", this, a, l),
                                t = !1;
                            break
                        }
                    }
                return t
            }
            optimize() {
                let t = this.times.slice()
                    , e = this.values.slice()
                    , i = this.getValueSize()
                    , s = this.getInterpolation() === Vr
                    , r = t.length - 1
                    , o = 1;
                for (let a = 1; a < r; ++a) {
                    let c = !1
                        , l = t[a]
                        , d = t[a + 1];
                    if (l !== d && (a !== 1 || l !== t[0]))
                        if (s)
                            c = !0;
                        else {
                            let h = a * i
                                , f = h - i
                                , p = h + i;
                            for (let v = 0; v !== i; ++v) {
                                let g = e[h + v];
                                if (g !== e[f + v] || g !== e[p + v]) {
                                    c = !0;
                                    break
                                }
                            }
                        }
                    if (c) {
                        if (a !== o) {
                            t[o] = t[a];
                            let h = a * i
                                , f = o * i;
                            for (let p = 0; p !== i; ++p)
                                e[f + p] = e[h + p]
                        }
                        ++o
                    }
                }
                if (r > 0) {
                    t[o] = t[r];
                    for (let a = r * i, c = o * i, l = 0; l !== i; ++l)
                        e[c + l] = e[a + l];
                    ++o
                }
                return o !== t.length ? (this.times = t.slice(0, o),
                    this.values = e.slice(0, o * i)) : (this.times = t,
                        this.values = e),
                    this
            }
            clone() {
                let t = this.times.slice()
                    , e = this.values.slice()
                    , i = this.constructor
                    , s = new i(this.name, t, e);
                return s.createInterpolant = this.createInterpolant,
                    s
            }
        }
        ;
    Je.prototype.ValueTypeName = "";
    Je.prototype.TimeBufferType = Float32Array;
    Je.prototype.ValueBufferType = Float32Array;
    Je.prototype.DefaultInterpolation = qr;
    var $n = class extends Je {
        constructor(t, e, i) {
            super(t, e, i)
        }
    }
        ;
    $n.prototype.ValueTypeName = "bool";
    $n.prototype.ValueBufferType = Array;
    $n.prototype.DefaultInterpolation = Cs;
    $n.prototype.InterpolantFactoryMethodLinear = void 0;
    $n.prototype.InterpolantFactoryMethodSmooth = void 0;
    var ro = class extends Je {
        constructor(t, e, i, s) {
            super(t, e, i, s)
        }
    }
        ;
    ro.prototype.ValueTypeName = "color";
    var oo = class extends Je {
        constructor(t, e, i, s) {
            super(t, e, i, s)
        }
    }
        ;
    oo.prototype.ValueTypeName = "number";
    var ao = class extends vi {
        constructor(t, e, i, s) {
            super(t, e, i, s)
        }
        interpolate_(t, e, i, s) {
            let r = this.resultBuffer
                , o = this.sampleValues
                , a = this.valueSize
                , c = (i - e) / (s - e)
                , l = t * a;
            for (let d = l + a; l !== d; l += 4)
                rn.slerpFlat(r, 0, o, l - a, o, l, c);
            return r
        }
    }
        , Ws = class extends Je {
            constructor(t, e, i, s) {
                super(t, e, i, s)
            }
            InterpolantFactoryMethodLinear(t) {
                return new ao(this.times, this.values, this.getValueSize(), t)
            }
        }
        ;
    Ws.prototype.ValueTypeName = "quaternion";
    Ws.prototype.InterpolantFactoryMethodSmooth = void 0;
    var Jn = class extends Je {
        constructor(t, e, i) {
            super(t, e, i)
        }
    }
        ;
    Jn.prototype.ValueTypeName = "string";
    Jn.prototype.ValueBufferType = Array;
    Jn.prototype.DefaultInterpolation = Cs;
    Jn.prototype.InterpolantFactoryMethodLinear = void 0;
    Jn.prototype.InterpolantFactoryMethodSmooth = void 0;
    var lo = class extends Je {
        constructor(t, e, i, s) {
            super(t, e, i, s)
        }
    }
        ;
    lo.prototype.ValueTypeName = "vector";
    var co = class {
        constructor(t, e, i) {
            let s = this, r = !1, o = 0, a = 0, c, l = [];
            this.onStart = void 0,
                this.onLoad = t,
                this.onProgress = e,
                this.onError = i,
                this.abortController = new AbortController,
                this.itemStart = function (d) {
                    a++,
                        r === !1 && s.onStart !== void 0 && s.onStart(d, o, a),
                        r = !0
                }
                ,
                this.itemEnd = function (d) {
                    o++,
                        s.onProgress !== void 0 && s.onProgress(d, o, a),
                        o === a && (r = !1,
                            s.onLoad !== void 0 && s.onLoad())
                }
                ,
                this.itemError = function (d) {
                    s.onError !== void 0 && s.onError(d)
                }
                ,
                this.resolveURL = function (d) {
                    return c ? c(d) : d
                }
                ,
                this.setURLModifier = function (d) {
                    return c = d,
                        this
                }
                ,
                this.addHandler = function (d, h) {
                    return l.push(d, h),
                        this
                }
                ,
                this.removeHandler = function (d) {
                    let h = l.indexOf(d);
                    return h !== -1 && l.splice(h, 2),
                        this
                }
                ,
                this.getHandler = function (d) {
                    for (let h = 0, f = l.length; h < f; h += 2) {
                        let p = l[h]
                            , v = l[h + 1];
                        if (p.global && (p.lastIndex = 0),
                            p.test(d))
                            return v
                    }
                    return null
                }
                ,
                this.abort = function () {
                    return this.abortController.abort(),
                        this.abortController = new AbortController,
                        this
                }
        }
    }
        , gu = new co
        , ho = class {
            constructor(t) {
                this.manager = t !== void 0 ? t : gu,
                    this.crossOrigin = "anonymous",
                    this.withCredentials = !1,
                    this.path = "",
                    this.resourcePath = "",
                    this.requestHeader = {}
            }
            load() { }
            loadAsync(t, e) {
                let i = this;
                return new Promise(function (s, r) {
                    i.load(t, s, e, r)
                }
                )
            }
            parse() { }
            setCrossOrigin(t) {
                return this.crossOrigin = t,
                    this
            }
            setWithCredentials(t) {
                return this.withCredentials = t,
                    this
            }
            setPath(t) {
                return this.path = t,
                    this
            }
            setResourcePath(t) {
                return this.resourcePath = t,
                    this
            }
            setRequestHeader(t) {
                return this.requestHeader = t,
                    this
            }
            abort() {
                return this
            }
        }
        ;
    ho.DEFAULT_MATERIAL_NAME = "__DEFAULT";
    var es = class extends Fs {
        constructor(t = -1, e = 1, i = 1, s = -1, r = .1, o = 2e3) {
            super(),
                this.isOrthographicCamera = !0,
                this.type = "OrthographicCamera",
                this.zoom = 1,
                this.view = null,
                this.left = t,
                this.right = e,
                this.top = i,
                this.bottom = s,
                this.near = r,
                this.far = o,
                this.updateProjectionMatrix()
        }
        copy(t, e) {
            return super.copy(t, e),
                this.left = t.left,
                this.right = t.right,
                this.top = t.top,
                this.bottom = t.bottom,
                this.near = t.near,
                this.far = t.far,
                this.zoom = t.zoom,
                this.view = t.view === null ? null : Object.assign({}, t.view),
                this
        }
        setViewOffset(t, e, i, s, r, o) {
            this.view === null && (this.view = {
                enabled: !0,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1
            }),
                this.view.enabled = !0,
                this.view.fullWidth = t,
                this.view.fullHeight = e,
                this.view.offsetX = i,
                this.view.offsetY = s,
                this.view.width = r,
                this.view.height = o,
                this.updateProjectionMatrix()
        }
        clearViewOffset() {
            this.view !== null && (this.view.enabled = !1),
                this.updateProjectionMatrix()
        }
        updateProjectionMatrix() {
            let t = (this.right - this.left) / (2 * this.zoom)
                , e = (this.top - this.bottom) / (2 * this.zoom)
                , i = (this.right + this.left) / 2
                , s = (this.top + this.bottom) / 2
                , r = i - t
                , o = i + t
                , a = s + e
                , c = s - e;
            if (this.view !== null && this.view.enabled) {
                let l = (this.right - this.left) / this.view.fullWidth / this.zoom
                    , d = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
                r += l * this.view.offsetX,
                    o = r + l * this.view.width,
                    a -= d * this.view.offsetY,
                    c = a - d * this.view.height
            }
            this.projectionMatrix.makeOrthographic(r, o, a, c, this.near, this.far, this.coordinateSystem, this.reversedDepth),
                this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
        }
        toJSON(t) {
            let e = super.toJSON(t);
            return e.object.zoom = this.zoom,
                e.object.left = this.left,
                e.object.right = this.right,
                e.object.top = this.top,
                e.object.bottom = this.bottom,
                e.object.near = this.near,
                e.object.far = this.far,
                this.view !== null && (e.object.view = Object.assign({}, this.view)),
                e
        }
    }
        ;
    var uo = class extends Ae {
        constructor(t = []) {
            super(),
                this.isArrayCamera = !0,
                this.isMultiViewCamera = !1,
                this.cameras = t
        }
    }
        , Xs = class {
            constructor(t = !0) {
                this.autoStart = t,
                    this.startTime = 0,
                    this.oldTime = 0,
                    this.elapsedTime = 0,
                    this.running = !1
            }
            start() {
                this.startTime = performance.now(),
                    this.oldTime = this.startTime,
                    this.elapsedTime = 0,
                    this.running = !0
            }
            stop() {
                this.getElapsedTime(),
                    this.running = !1,
                    this.autoStart = !1
            }
            getElapsedTime() {
                return this.getDelta(),
                    this.elapsedTime
            }
            getDelta() {
                let t = 0;
                if (this.autoStart && !this.running)
                    return this.start(),
                        0;
                if (this.running) {
                    let e = performance.now();
                    t = (e - this.oldTime) / 1e3,
                        this.oldTime = e,
                        this.elapsedTime += t
                }
                return t
            }
        }
        ;
    var Hl = "\\[\\]\\.:\\/"
        , Ef = new RegExp("[" + Hl + "]", "g")
        , Gl = "[^" + Hl + "]"
        , wf = "[^" + Hl.replace("\\.", "") + "]"
        , Af = /((?:WC+[\/:])*)/.source.replace("WC", Gl)
        , Cf = /(WCOD+)?/.source.replace("WCOD", wf)
        , Rf = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Gl)
        , Pf = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Gl)
        , If = new RegExp("^" + Af + Cf + Rf + Pf + "$")
        , Df = ["material", "materials", "bones", "map"]
        , Ml = class {
            constructor(t, e, i) {
                let s = i || ne.parseTrackName(e);
                this._targetGroup = t,
                    this._bindings = t.subscribe_(e, s)
            }
            getValue(t, e) {
                this.bind();
                let i = this._targetGroup.nCachedObjects_
                    , s = this._bindings[i];
                s !== void 0 && s.getValue(t, e)
            }
            setValue(t, e) {
                let i = this._bindings;
                for (let s = this._targetGroup.nCachedObjects_, r = i.length; s !== r; ++s)
                    i[s].setValue(t, e)
            }
            bind() {
                let t = this._bindings;
                for (let e = this._targetGroup.nCachedObjects_, i = t.length; e !== i; ++e)
                    t[e].bind()
            }
            unbind() {
                let t = this._bindings;
                for (let e = this._targetGroup.nCachedObjects_, i = t.length; e !== i; ++e)
                    t[e].unbind()
            }
        }
        , ne = class n {
            constructor(t, e, i) {
                this.path = e,
                    this.parsedPath = i || n.parseTrackName(e),
                    this.node = n.findNode(t, this.parsedPath.nodeName),
                    this.rootNode = t,
                    this.getValue = this._getValue_unbound,
                    this.setValue = this._setValue_unbound
            }
            static create(t, e, i) {
                return t && t.isAnimationObjectGroup ? new n.Composite(t, e, i) : new n(t, e, i)
            }
            static sanitizeNodeName(t) {
                return t.replace(/\s/g, "_").replace(Ef, "")
            }
            static parseTrackName(t) {
                let e = If.exec(t);
                if (e === null)
                    throw new Error("PropertyBinding: Cannot parse trackName: " + t);
                let i = {
                    nodeName: e[2],
                    objectName: e[3],
                    objectIndex: e[4],
                    propertyName: e[5],
                    propertyIndex: e[6]
                }
                    , s = i.nodeName && i.nodeName.lastIndexOf(".");
                if (s !== void 0 && s !== -1) {
                    let r = i.nodeName.substring(s + 1);
                    Df.indexOf(r) !== -1 && (i.nodeName = i.nodeName.substring(0, s),
                        i.objectName = r)
                }
                if (i.propertyName === null || i.propertyName.length === 0)
                    throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t);
                return i
            }
            static findNode(t, e) {
                if (e === void 0 || e === "" || e === "." || e === -1 || e === t.name || e === t.uuid)
                    return t;
                if (t.skeleton) {
                    let i = t.skeleton.getBoneByName(e);
                    if (i !== void 0)
                        return i
                }
                if (t.children) {
                    let i = function (r) {
                        for (let o = 0; o < r.length; o++) {
                            let a = r[o];
                            if (a.name === e || a.uuid === e)
                                return a;
                            let c = i(a.children);
                            if (c)
                                return c
                        }
                        return null
                    }
                        , s = i(t.children);
                    if (s)
                        return s
                }
                return null
            }
            _getValue_unavailable() { }
            _setValue_unavailable() { }
            _getValue_direct(t, e) {
                t[e] = this.targetObject[this.propertyName]
            }
            _getValue_array(t, e) {
                let i = this.resolvedProperty;
                for (let s = 0, r = i.length; s !== r; ++s)
                    t[e++] = i[s]
            }
            _getValue_arrayElement(t, e) {
                t[e] = this.resolvedProperty[this.propertyIndex]
            }
            _getValue_toArray(t, e) {
                this.resolvedProperty.toArray(t, e)
            }
            _setValue_direct(t, e) {
                this.targetObject[this.propertyName] = t[e]
            }
            _setValue_direct_setNeedsUpdate(t, e) {
                this.targetObject[this.propertyName] = t[e],
                    this.targetObject.needsUpdate = !0
            }
            _setValue_direct_setMatrixWorldNeedsUpdate(t, e) {
                this.targetObject[this.propertyName] = t[e],
                    this.targetObject.matrixWorldNeedsUpdate = !0
            }
            _setValue_array(t, e) {
                let i = this.resolvedProperty;
                for (let s = 0, r = i.length; s !== r; ++s)
                    i[s] = t[e++]
            }
            _setValue_array_setNeedsUpdate(t, e) {
                let i = this.resolvedProperty;
                for (let s = 0, r = i.length; s !== r; ++s)
                    i[s] = t[e++];
                this.targetObject.needsUpdate = !0
            }
            _setValue_array_setMatrixWorldNeedsUpdate(t, e) {
                let i = this.resolvedProperty;
                for (let s = 0, r = i.length; s !== r; ++s)
                    i[s] = t[e++];
                this.targetObject.matrixWorldNeedsUpdate = !0
            }
            _setValue_arrayElement(t, e) {
                this.resolvedProperty[this.propertyIndex] = t[e]
            }
            _setValue_arrayElement_setNeedsUpdate(t, e) {
                this.resolvedProperty[this.propertyIndex] = t[e],
                    this.targetObject.needsUpdate = !0
            }
            _setValue_arrayElement_setMatrixWorldNeedsUpdate(t, e) {
                this.resolvedProperty[this.propertyIndex] = t[e],
                    this.targetObject.matrixWorldNeedsUpdate = !0
            }
            _setValue_fromArray(t, e) {
                this.resolvedProperty.fromArray(t, e)
            }
            _setValue_fromArray_setNeedsUpdate(t, e) {
                this.resolvedProperty.fromArray(t, e),
                    this.targetObject.needsUpdate = !0
            }
            _setValue_fromArray_setMatrixWorldNeedsUpdate(t, e) {
                this.resolvedProperty.fromArray(t, e),
                    this.targetObject.matrixWorldNeedsUpdate = !0
            }
            _getValue_unbound(t, e) {
                this.bind(),
                    this.getValue(t, e)
            }
            _setValue_unbound(t, e) {
                this.bind(),
                    this.setValue(t, e)
            }
            bind() {
                let t = this.node
                    , e = this.parsedPath
                    , i = e.objectName
                    , s = e.propertyName
                    , r = e.propertyIndex;
                if (t || (t = n.findNode(this.rootNode, e.nodeName),
                    this.node = t),
                    this.getValue = this._getValue_unavailable,
                    this.setValue = this._setValue_unavailable,
                    !t) {
                    console.warn("THREE.PropertyBinding: No target node found for track: " + this.path + ".");
                    return
                }
                if (i) {
                    let l = e.objectIndex;
                    switch (i) {
                        case "materials":
                            if (!t.material) {
                                console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                                return
                            }
                            if (!t.material.materials) {
                                console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
                                return
                            }
                            t = t.material.materials;
                            break;
                        case "bones":
                            if (!t.skeleton) {
                                console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
                                return
                            }
                            t = t.skeleton.bones;
                            for (let d = 0; d < t.length; d++)
                                if (t[d].name === l) {
                                    l = d;
                                    break
                                }
                            break;
                        case "map":
                            if ("map" in t) {
                                t = t.map;
                                break
                            }
                            if (!t.material) {
                                console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                                return
                            }
                            if (!t.material.map) {
                                console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
                                return
                            }
                            t = t.material.map;
                            break;
                        default:
                            if (t[i] === void 0) {
                                console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
                                return
                            }
                            t = t[i]
                    }
                    if (l !== void 0) {
                        if (t[l] === void 0) {
                            console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
                            return
                        }
                        t = t[l]
                    }
                }
                let o = t[s];
                if (o === void 0) {
                    let l = e.nodeName;
                    console.error("THREE.PropertyBinding: Trying to update property for track: " + l + "." + s + " but it wasn't found.", t);
                    return
                }
                let a = this.Versioning.None;
                this.targetObject = t,
                    t.isMaterial === !0 ? a = this.Versioning.NeedsUpdate : t.isObject3D === !0 && (a = this.Versioning.MatrixWorldNeedsUpdate);
                let c = this.BindingType.Direct;
                if (r !== void 0) {
                    if (s === "morphTargetInfluences") {
                        if (!t.geometry) {
                            console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
                            return
                        }
                        if (!t.geometry.morphAttributes) {
                            console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
                            return
                        }
                        t.morphTargetDictionary[r] !== void 0 && (r = t.morphTargetDictionary[r])
                    }
                    c = this.BindingType.ArrayElement,
                        this.resolvedProperty = o,
                        this.propertyIndex = r
                } else
                    o.fromArray !== void 0 && o.toArray !== void 0 ? (c = this.BindingType.HasFromToArray,
                        this.resolvedProperty = o) : Array.isArray(o) ? (c = this.BindingType.EntireArray,
                            this.resolvedProperty = o) : this.propertyName = s;
                this.getValue = this.GetterByBindingType[c],
                    this.setValue = this.SetterByBindingTypeAndVersioning[c][a]
            }
            unbind() {
                this.node = null,
                    this.getValue = this._getValue_unbound,
                    this.setValue = this._setValue_unbound
            }
        }
        ;
    ne.Composite = Ml;
    ne.prototype.BindingType = {
        Direct: 0,
        EntireArray: 1,
        ArrayElement: 2,
        HasFromToArray: 3
    };
    ne.prototype.Versioning = {
        None: 0,
        NeedsUpdate: 1,
        MatrixWorldNeedsUpdate: 2
    };
    ne.prototype.GetterByBindingType = [ne.prototype._getValue_direct, ne.prototype._getValue_array, ne.prototype._getValue_arrayElement, ne.prototype._getValue_toArray];
    ne.prototype.SetterByBindingTypeAndVersioning = [[ne.prototype._setValue_direct, ne.prototype._setValue_direct_setNeedsUpdate, ne.prototype._setValue_direct_setMatrixWorldNeedsUpdate], [ne.prototype._setValue_array, ne.prototype._setValue_array_setNeedsUpdate, ne.prototype._setValue_array_setMatrixWorldNeedsUpdate], [ne.prototype._setValue_arrayElement, ne.prototype._setValue_arrayElement_setNeedsUpdate, ne.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate], [ne.prototype._setValue_fromArray, ne.prototype._setValue_fromArray_setNeedsUpdate, ne.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];
    var K0 = new Float32Array(1);
    var ns = class {
        constructor(t = 1, e = 0, i = 0) {
            this.radius = t,
                this.phi = e,
                this.theta = i
        }
        set(t, e, i) {
            return this.radius = t,
                this.phi = e,
                this.theta = i,
                this
        }
        copy(t) {
            return this.radius = t.radius,
                this.phi = t.phi,
                this.theta = t.theta,
                this
        }
        makeSafe() {
            return this.phi = kt(this.phi, 1e-6, Math.PI - 1e-6),
                this
        }
        setFromVector3(t) {
            return this.setFromCartesianCoords(t.x, t.y, t.z)
        }
        setFromCartesianCoords(t, e, i) {
            return this.radius = Math.sqrt(t * t + e * e + i * i),
                this.radius === 0 ? (this.theta = 0,
                    this.phi = 0) : (this.theta = Math.atan2(t, i),
                        this.phi = Math.acos(kt(e / this.radius, -1, 1))),
                this
        }
        clone() {
            return new this.constructor().copy(this)
        }
    }
        ;
    var qs = class extends _n {
        constructor(t, e = null) {
            super(),
                this.object = t,
                this.domElement = e,
                this.enabled = !0,
                this.state = -1,
                this.keys = {},
                this.mouseButtons = {
                    LEFT: null,
                    MIDDLE: null,
                    RIGHT: null
                },
                this.touches = {
                    ONE: null,
                    TWO: null
                }
        }
        connect(t) {
            if (t === void 0) {
                console.warn("THREE.Controls: connect() now requires an element.");
                return
            }
            this.domElement !== null && this.disconnect(),
                this.domElement = t
        }
        disconnect() { }
        dispose() { }
        update() { }
    }
        ;
    function Wl(n, t, e, i) {
        let s = Lf(i);
        switch (e) {
            case Il:
                return n * t;
            case Ll:
                return n * t / s.components * s.byteLength;
            case Ao:
                return n * t / s.components * s.byteLength;
            case Ul:
                return n * t * 2 / s.components * s.byteLength;
            case Co:
                return n * t * 2 / s.components * s.byteLength;
            case Dl:
                return n * t * 3 / s.components * s.byteLength;
            case Oe:
                return n * t * 4 / s.components * s.byteLength;
            case Ro:
                return n * t * 4 / s.components * s.byteLength;
            case $s:
            case Js:
                return Math.floor((n + 3) / 4) * Math.floor((t + 3) / 4) * 8;
            case Ks:
            case js:
                return Math.floor((n + 3) / 4) * Math.floor((t + 3) / 4) * 16;
            case Io:
            case Lo:
                return Math.max(n, 16) * Math.max(t, 8) / 4;
            case Po:
            case Do:
                return Math.max(n, 8) * Math.max(t, 8) / 2;
            case Uo:
            case No:
                return Math.floor((n + 3) / 4) * Math.floor((t + 3) / 4) * 8;
            case Fo:
                return Math.floor((n + 3) / 4) * Math.floor((t + 3) / 4) * 16;
            case Oo:
                return Math.floor((n + 3) / 4) * Math.floor((t + 3) / 4) * 16;
            case Bo:
                return Math.floor((n + 4) / 5) * Math.floor((t + 3) / 4) * 16;
            case zo:
                return Math.floor((n + 4) / 5) * Math.floor((t + 4) / 5) * 16;
            case ko:
                return Math.floor((n + 5) / 6) * Math.floor((t + 4) / 5) * 16;
            case Vo:
                return Math.floor((n + 5) / 6) * Math.floor((t + 5) / 6) * 16;
            case Ho:
                return Math.floor((n + 7) / 8) * Math.floor((t + 4) / 5) * 16;
            case Go:
                return Math.floor((n + 7) / 8) * Math.floor((t + 5) / 6) * 16;
            case Wo:
                return Math.floor((n + 7) / 8) * Math.floor((t + 7) / 8) * 16;
            case Xo:
                return Math.floor((n + 9) / 10) * Math.floor((t + 4) / 5) * 16;
            case qo:
                return Math.floor((n + 9) / 10) * Math.floor((t + 5) / 6) * 16;
            case Yo:
                return Math.floor((n + 9) / 10) * Math.floor((t + 7) / 8) * 16;
            case Zo:
                return Math.floor((n + 9) / 10) * Math.floor((t + 9) / 10) * 16;
            case $o:
                return Math.floor((n + 11) / 12) * Math.floor((t + 9) / 10) * 16;
            case Jo:
                return Math.floor((n + 11) / 12) * Math.floor((t + 11) / 12) * 16;
            case Qs:
            case Ko:
            case jo:
                return Math.ceil(n / 4) * Math.ceil(t / 4) * 16;
            case Nl:
            case Qo:
                return Math.ceil(n / 4) * Math.ceil(t / 4) * 8;
            case ta:
            case ea:
                return Math.ceil(n / 4) * Math.ceil(t / 4) * 16
        }
        throw new Error(`Unable to determine texture byte length for ${e} format.`)
    }
    function Lf(n) {
        switch (n) {
            case Mn:
            case Cl:
                return {
                    byteLength: 1,
                    components: 1
                };
            case is:
            case Rl:
            case on:
                return {
                    byteLength: 2,
                    components: 1
                };
            case Eo:
            case wo:
                return {
                    byteLength: 2,
                    components: 4
                };
            case ti:
            case To:
            case Sn:
                return {
                    byteLength: 4,
                    components: 1
                };
            case Pl:
                return {
                    byteLength: 4,
                    components: 3
                }
        }
        throw new Error(`Unknown texture type ${n}.`)
    }
    typeof __THREE_DEVTOOLS__ != "undefined" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {
        detail: {
            revision: "179"
        }
    }));
    typeof window != "undefined" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "179");
    function ku() {
        let n = null
            , t = !1
            , e = null
            , i = null;
        function s(r, o) {
            e(r, o),
                i = n.requestAnimationFrame(s)
        }
        return {
            start: function () {
                t !== !0 && e !== null && (i = n.requestAnimationFrame(s),
                    t = !0)
            },
            stop: function () {
                n.cancelAnimationFrame(i),
                    t = !1
            },
            setAnimationLoop: function (r) {
                e = r
            },
            setContext: function (r) {
                n = r
            }
        }
    }
    function Nf(n) {
        let t = new WeakMap;
        function e(a, c) {
            let l = a.array
                , d = a.usage
                , h = l.byteLength
                , f = n.createBuffer();
            n.bindBuffer(c, f),
                n.bufferData(c, l, d),
                a.onUploadCallback();
            let p;
            if (l instanceof Float32Array)
                p = n.FLOAT;
            else if (typeof Float16Array != "undefined" && l instanceof Float16Array)
                p = n.HALF_FLOAT;
            else if (l instanceof Uint16Array)
                a.isFloat16BufferAttribute ? p = n.HALF_FLOAT : p = n.UNSIGNED_SHORT;
            else if (l instanceof Int16Array)
                p = n.SHORT;
            else if (l instanceof Uint32Array)
                p = n.UNSIGNED_INT;
            else if (l instanceof Int32Array)
                p = n.INT;
            else if (l instanceof Int8Array)
                p = n.BYTE;
            else if (l instanceof Uint8Array)
                p = n.UNSIGNED_BYTE;
            else if (l instanceof Uint8ClampedArray)
                p = n.UNSIGNED_BYTE;
            else
                throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + l);
            return {
                buffer: f,
                type: p,
                bytesPerElement: l.BYTES_PER_ELEMENT,
                version: a.version,
                size: h
            }
        }
        function i(a, c, l) {
            let d = c.array
                , h = c.updateRanges;
            if (n.bindBuffer(l, a),
                h.length === 0)
                n.bufferSubData(l, 0, d);
            else {
                h.sort((p, v) => p.start - v.start);
                let f = 0;
                for (let p = 1; p < h.length; p++) {
                    let v = h[f]
                        , g = h[p];
                    g.start <= v.start + v.count + 1 ? v.count = Math.max(v.count, g.start + g.count - v.start) : (++f,
                        h[f] = g)
                }
                h.length = f + 1;
                for (let p = 0, v = h.length; p < v; p++) {
                    let g = h[p];
                    n.bufferSubData(l, g.start * d.BYTES_PER_ELEMENT, d, g.start, g.count)
                }
                c.clearUpdateRanges()
            }
            c.onUploadCallback()
        }
        function s(a) {
            return a.isInterleavedBufferAttribute && (a = a.data),
                t.get(a)
        }
        function r(a) {
            a.isInterleavedBufferAttribute && (a = a.data);
            let c = t.get(a);
            c && (n.deleteBuffer(c.buffer),
                t.delete(a))
        }
        function o(a, c) {
            if (a.isInterleavedBufferAttribute && (a = a.data),
                a.isGLBufferAttribute) {
                let d = t.get(a);
                (!d || d.version < a.version) && t.set(a, {
                    buffer: a.buffer,
                    type: a.type,
                    bytesPerElement: a.elementSize,
                    version: a.version
                });
                return
            }
            let l = t.get(a);
            if (l === void 0)
                t.set(a, e(a, c));
            else if (l.version < a.version) {
                if (l.size !== a.array.byteLength)
                    throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
                i(l.buffer, a, c),
                    l.version = a.version
            }
        }
        return {
            get: s,
            remove: r,
            update: o
        }
    }
    var Ff = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`
        , Of = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`
        , Bf = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`
        , zf = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`
        , kf = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`
        , Vf = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`
        , Hf = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT )
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN )
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`
        , Gf = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`
        , Wf = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`
        , Xf = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`
        , qf = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`
        , Yf = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`
        , Zf = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`
        , $f = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`
        , Jf = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`
        , Kf = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`
        , jf = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`
        , Qf = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`
        , tp = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`
        , ep = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`
        , np = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`
        , ip = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`
        , sp = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`
        , rp = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`
        , op = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`
        , ap = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`
        , lp = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`
        , cp = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`
        , hp = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`
        , up = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`
        , dp = "gl_FragColor = linearToOutputTexel( gl_FragColor );"
        , fp = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`
        , pp = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`
        , mp = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif

#endif`
        , gp = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`
        , _p = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`
        , vp = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`
        , xp = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`
        , yp = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`
        , Mp = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`
        , Sp = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`
        , bp = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`
        , Tp = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`
        , Ep = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`
        , wp = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`
        , Ap = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`
        , Cp = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`
        , Rp = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`
        , Pp = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`
        , Ip = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`
        , Dp = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`
        , Lp = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`
        , Up = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`
        , Np = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`
        , Fp = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`
        , Op = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`
        , Bp = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`
        , zp = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`
        , kp = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`
        , Vp = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`
        , Hp = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`
        , Gp = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`
        , Wp = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`
        , Xp = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`
        , qp = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`
        , Yp = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`
        , Zp = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`
        , $p = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`
        , Jp = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`
        , Kp = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`
        , jp = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`
        , Qp = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`
        , tm = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`
        , em = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`
        , nm = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`
        , im = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`
        , sm = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`
        , rm = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`
        , om = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`
        , am = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`
        , lm = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`
        , cm = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`
        , hm = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`
        , um = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`
        , dm = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`
        , fm = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`
        , pm = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`
        , mm = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`
        , gm = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`
        , _m = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;

		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`
        , vm = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`
        , xm = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`
        , ym = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`
        , Mm = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`
        , Sm = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`
        , bm = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`
        , Tm = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`
        , Em = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`
        , wm = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`
        , Am = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`
        , Cm = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`
        , Rm = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`
        , Pm = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`
        , Im = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`
        , Dm = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`
        , Lm = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`
        , Um = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`
        , Nm = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`
        , Fm = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`
        , Om = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`
        , Bm = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`
        , zm = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`
        , km = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`
        , Vm = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`
        , Hm = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`
        , Gm = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`
        , Wm = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`
        , Xm = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`
        , qm = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`
        , Ym = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`
        , Zm = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`
        , $m = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`
        , Jm = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`
        , Km = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`
        , jm = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`
        , Qm = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`
        , tg = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`
        , eg = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`
        , ng = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`
        , ig = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`
        , sg = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`
        , rg = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`
        , og = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`
        , ag = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`
        , lg = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`
        , cg = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`
        , hg = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`
        , ug = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`
        , dg = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`
        , fg = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`
        , pg = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`
        , Ot = {
            alphahash_fragment: Ff,
            alphahash_pars_fragment: Of,
            alphamap_fragment: Bf,
            alphamap_pars_fragment: zf,
            alphatest_fragment: kf,
            alphatest_pars_fragment: Vf,
            aomap_fragment: Hf,
            aomap_pars_fragment: Gf,
            batching_pars_vertex: Wf,
            batching_vertex: Xf,
            begin_vertex: qf,
            beginnormal_vertex: Yf,
            bsdfs: Zf,
            iridescence_fragment: $f,
            bumpmap_pars_fragment: Jf,
            clipping_planes_fragment: Kf,
            clipping_planes_pars_fragment: jf,
            clipping_planes_pars_vertex: Qf,
            clipping_planes_vertex: tp,
            color_fragment: ep,
            color_pars_fragment: np,
            color_pars_vertex: ip,
            color_vertex: sp,
            common: rp,
            cube_uv_reflection_fragment: op,
            defaultnormal_vertex: ap,
            displacementmap_pars_vertex: lp,
            displacementmap_vertex: cp,
            emissivemap_fragment: hp,
            emissivemap_pars_fragment: up,
            colorspace_fragment: dp,
            colorspace_pars_fragment: fp,
            envmap_fragment: pp,
            envmap_common_pars_fragment: mp,
            envmap_pars_fragment: gp,
            envmap_pars_vertex: _p,
            envmap_physical_pars_fragment: Cp,
            envmap_vertex: vp,
            fog_vertex: xp,
            fog_pars_vertex: yp,
            fog_fragment: Mp,
            fog_pars_fragment: Sp,
            gradientmap_pars_fragment: bp,
            lightmap_pars_fragment: Tp,
            lights_lambert_fragment: Ep,
            lights_lambert_pars_fragment: wp,
            lights_pars_begin: Ap,
            lights_toon_fragment: Rp,
            lights_toon_pars_fragment: Pp,
            lights_phong_fragment: Ip,
            lights_phong_pars_fragment: Dp,
            lights_physical_fragment: Lp,
            lights_physical_pars_fragment: Up,
            lights_fragment_begin: Np,
            lights_fragment_maps: Fp,
            lights_fragment_end: Op,
            logdepthbuf_fragment: Bp,
            logdepthbuf_pars_fragment: zp,
            logdepthbuf_pars_vertex: kp,
            logdepthbuf_vertex: Vp,
            map_fragment: Hp,
            map_pars_fragment: Gp,
            map_particle_fragment: Wp,
            map_particle_pars_fragment: Xp,
            metalnessmap_fragment: qp,
            metalnessmap_pars_fragment: Yp,
            morphinstance_vertex: Zp,
            morphcolor_vertex: $p,
            morphnormal_vertex: Jp,
            morphtarget_pars_vertex: Kp,
            morphtarget_vertex: jp,
            normal_fragment_begin: Qp,
            normal_fragment_maps: tm,
            normal_pars_fragment: em,
            normal_pars_vertex: nm,
            normal_vertex: im,
            normalmap_pars_fragment: sm,
            clearcoat_normal_fragment_begin: rm,
            clearcoat_normal_fragment_maps: om,
            clearcoat_pars_fragment: am,
            iridescence_pars_fragment: lm,
            opaque_fragment: cm,
            packing: hm,
            premultiplied_alpha_fragment: um,
            project_vertex: dm,
            dithering_fragment: fm,
            dithering_pars_fragment: pm,
            roughnessmap_fragment: mm,
            roughnessmap_pars_fragment: gm,
            shadowmap_pars_fragment: _m,
            shadowmap_pars_vertex: vm,
            shadowmap_vertex: xm,
            shadowmask_pars_fragment: ym,
            skinbase_vertex: Mm,
            skinning_pars_vertex: Sm,
            skinning_vertex: bm,
            skinnormal_vertex: Tm,
            specularmap_fragment: Em,
            specularmap_pars_fragment: wm,
            tonemapping_fragment: Am,
            tonemapping_pars_fragment: Cm,
            transmission_fragment: Rm,
            transmission_pars_fragment: Pm,
            uv_pars_fragment: Im,
            uv_pars_vertex: Dm,
            uv_vertex: Lm,
            worldpos_vertex: Um,
            background_vert: Nm,
            background_frag: Fm,
            backgroundCube_vert: Om,
            backgroundCube_frag: Bm,
            cube_vert: zm,
            cube_frag: km,
            depth_vert: Vm,
            depth_frag: Hm,
            distanceRGBA_vert: Gm,
            distanceRGBA_frag: Wm,
            equirect_vert: Xm,
            equirect_frag: qm,
            linedashed_vert: Ym,
            linedashed_frag: Zm,
            meshbasic_vert: $m,
            meshbasic_frag: Jm,
            meshlambert_vert: Km,
            meshlambert_frag: jm,
            meshmatcap_vert: Qm,
            meshmatcap_frag: tg,
            meshnormal_vert: eg,
            meshnormal_frag: ng,
            meshphong_vert: ig,
            meshphong_frag: sg,
            meshphysical_vert: rg,
            meshphysical_frag: og,
            meshtoon_vert: ag,
            meshtoon_frag: lg,
            points_vert: cg,
            points_frag: hg,
            shadow_vert: ug,
            shadow_frag: dg,
            sprite_vert: fg,
            sprite_frag: pg
        }
        , st = {
            common: {
                diffuse: {
                    value: new Dt(16777215)
                },
                opacity: {
                    value: 1
                },
                map: {
                    value: null
                },
                mapTransform: {
                    value: new Nt
                },
                alphaMap: {
                    value: null
                },
                alphaMapTransform: {
                    value: new Nt
                },
                alphaTest: {
                    value: 0
                }
            },
            specularmap: {
                specularMap: {
                    value: null
                },
                specularMapTransform: {
                    value: new Nt
                }
            },
            envmap: {
                envMap: {
                    value: null
                },
                envMapRotation: {
                    value: new Nt
                },
                flipEnvMap: {
                    value: -1
                },
                reflectivity: {
                    value: 1
                },
                ior: {
                    value: 1.5
                },
                refractionRatio: {
                    value: .98
                }
            },
            aomap: {
                aoMap: {
                    value: null
                },
                aoMapIntensity: {
                    value: 1
                },
                aoMapTransform: {
                    value: new Nt
                }
            },
            lightmap: {
                lightMap: {
                    value: null
                },
                lightMapIntensity: {
                    value: 1
                },
                lightMapTransform: {
                    value: new Nt
                }
            },
            bumpmap: {
                bumpMap: {
                    value: null
                },
                bumpMapTransform: {
                    value: new Nt
                },
                bumpScale: {
                    value: 1
                }
            },
            normalmap: {
                normalMap: {
                    value: null
                },
                normalMapTransform: {
                    value: new Nt
                },
                normalScale: {
                    value: new Mt(1, 1)
                }
            },
            displacementmap: {
                displacementMap: {
                    value: null
                },
                displacementMapTransform: {
                    value: new Nt
                },
                displacementScale: {
                    value: 1
                },
                displacementBias: {
                    value: 0
                }
            },
            emissivemap: {
                emissiveMap: {
                    value: null
                },
                emissiveMapTransform: {
                    value: new Nt
                }
            },
            metalnessmap: {
                metalnessMap: {
                    value: null
                },
                metalnessMapTransform: {
                    value: new Nt
                }
            },
            roughnessmap: {
                roughnessMap: {
                    value: null
                },
                roughnessMapTransform: {
                    value: new Nt
                }
            },
            gradientmap: {
                gradientMap: {
                    value: null
                }
            },
            fog: {
                fogDensity: {
                    value: 25e-5
                },
                fogNear: {
                    value: 1
                },
                fogFar: {
                    value: 2e3
                },
                fogColor: {
                    value: new Dt(16777215)
                }
            },
            lights: {
                ambientLightColor: {
                    value: []
                },
                lightProbe: {
                    value: []
                },
                directionalLights: {
                    value: [],
                    properties: {
                        direction: {},
                        color: {}
                    }
                },
                directionalLightShadows: {
                    value: [],
                    properties: {
                        shadowIntensity: 1,
                        shadowBias: {},
                        shadowNormalBias: {},
                        shadowRadius: {},
                        shadowMapSize: {}
                    }
                },
                directionalShadowMap: {
                    value: []
                },
                directionalShadowMatrix: {
                    value: []
                },
                spotLights: {
                    value: [],
                    properties: {
                        color: {},
                        position: {},
                        direction: {},
                        distance: {},
                        coneCos: {},
                        penumbraCos: {},
                        decay: {}
                    }
                },
                spotLightShadows: {
                    value: [],
                    properties: {
                        shadowIntensity: 1,
                        shadowBias: {},
                        shadowNormalBias: {},
                        shadowRadius: {},
                        shadowMapSize: {}
                    }
                },
                spotLightMap: {
                    value: []
                },
                spotShadowMap: {
                    value: []
                },
                spotLightMatrix: {
                    value: []
                },
                pointLights: {
                    value: [],
                    properties: {
                        color: {},
                        position: {},
                        decay: {},
                        distance: {}
                    }
                },
                pointLightShadows: {
                    value: [],
                    properties: {
                        shadowIntensity: 1,
                        shadowBias: {},
                        shadowNormalBias: {},
                        shadowRadius: {},
                        shadowMapSize: {},
                        shadowCameraNear: {},
                        shadowCameraFar: {}
                    }
                },
                pointShadowMap: {
                    value: []
                },
                pointShadowMatrix: {
                    value: []
                },
                hemisphereLights: {
                    value: [],
                    properties: {
                        direction: {},
                        skyColor: {},
                        groundColor: {}
                    }
                },
                rectAreaLights: {
                    value: [],
                    properties: {
                        color: {},
                        position: {},
                        width: {},
                        height: {}
                    }
                },
                ltc_1: {
                    value: null
                },
                ltc_2: {
                    value: null
                }
            },
            points: {
                diffuse: {
                    value: new Dt(16777215)
                },
                opacity: {
                    value: 1
                },
                size: {
                    value: 1
                },
                scale: {
                    value: 1
                },
                map: {
                    value: null
                },
                alphaMap: {
                    value: null
                },
                alphaMapTransform: {
                    value: new Nt
                },
                alphaTest: {
                    value: 0
                },
                uvTransform: {
                    value: new Nt
                }
            },
            sprite: {
                diffuse: {
                    value: new Dt(16777215)
                },
                opacity: {
                    value: 1
                },
                center: {
                    value: new Mt(.5, .5)
                },
                rotation: {
                    value: 0
                },
                map: {
                    value: null
                },
                mapTransform: {
                    value: new Nt
                },
                alphaMap: {
                    value: null
                },
                alphaMapTransform: {
                    value: new Nt
                },
                alphaTest: {
                    value: 0
                }
            }
        }
        , bn = {
            basic: {
                uniforms: Re([st.common, st.specularmap, st.envmap, st.aomap, st.lightmap, st.fog]),
                vertexShader: Ot.meshbasic_vert,
                fragmentShader: Ot.meshbasic_frag
            },
            lambert: {
                uniforms: Re([st.common, st.specularmap, st.envmap, st.aomap, st.lightmap, st.emissivemap, st.bumpmap, st.normalmap, st.displacementmap, st.fog, st.lights, {
                    emissive: {
                        value: new Dt(0)
                    }
                }]),
                vertexShader: Ot.meshlambert_vert,
                fragmentShader: Ot.meshlambert_frag
            },
            phong: {
                uniforms: Re([st.common, st.specularmap, st.envmap, st.aomap, st.lightmap, st.emissivemap, st.bumpmap, st.normalmap, st.displacementmap, st.fog, st.lights, {
                    emissive: {
                        value: new Dt(0)
                    },
                    specular: {
                        value: new Dt(1118481)
                    },
                    shininess: {
                        value: 30
                    }
                }]),
                vertexShader: Ot.meshphong_vert,
                fragmentShader: Ot.meshphong_frag
            },
            standard: {
                uniforms: Re([st.common, st.envmap, st.aomap, st.lightmap, st.emissivemap, st.bumpmap, st.normalmap, st.displacementmap, st.roughnessmap, st.metalnessmap, st.fog, st.lights, {
                    emissive: {
                        value: new Dt(0)
                    },
                    roughness: {
                        value: 1
                    },
                    metalness: {
                        value: 0
                    },
                    envMapIntensity: {
                        value: 1
                    }
                }]),
                vertexShader: Ot.meshphysical_vert,
                fragmentShader: Ot.meshphysical_frag
            },
            toon: {
                uniforms: Re([st.common, st.aomap, st.lightmap, st.emissivemap, st.bumpmap, st.normalmap, st.displacementmap, st.gradientmap, st.fog, st.lights, {
                    emissive: {
                        value: new Dt(0)
                    }
                }]),
                vertexShader: Ot.meshtoon_vert,
                fragmentShader: Ot.meshtoon_frag
            },
            matcap: {
                uniforms: Re([st.common, st.bumpmap, st.normalmap, st.displacementmap, st.fog, {
                    matcap: {
                        value: null
                    }
                }]),
                vertexShader: Ot.meshmatcap_vert,
                fragmentShader: Ot.meshmatcap_frag
            },
            points: {
                uniforms: Re([st.points, st.fog]),
                vertexShader: Ot.points_vert,
                fragmentShader: Ot.points_frag
            },
            dashed: {
                uniforms: Re([st.common, st.fog, {
                    scale: {
                        value: 1
                    },
                    dashSize: {
                        value: 1
                    },
                    totalSize: {
                        value: 2
                    }
                }]),
                vertexShader: Ot.linedashed_vert,
                fragmentShader: Ot.linedashed_frag
            },
            depth: {
                uniforms: Re([st.common, st.displacementmap]),
                vertexShader: Ot.depth_vert,
                fragmentShader: Ot.depth_frag
            },
            normal: {
                uniforms: Re([st.common, st.bumpmap, st.normalmap, st.displacementmap, {
                    opacity: {
                        value: 1
                    }
                }]),
                vertexShader: Ot.meshnormal_vert,
                fragmentShader: Ot.meshnormal_frag
            },
            sprite: {
                uniforms: Re([st.sprite, st.fog]),
                vertexShader: Ot.sprite_vert,
                fragmentShader: Ot.sprite_frag
            },
            background: {
                uniforms: {
                    uvTransform: {
                        value: new Nt
                    },
                    t2D: {
                        value: null
                    },
                    backgroundIntensity: {
                        value: 1
                    }
                },
                vertexShader: Ot.background_vert,
                fragmentShader: Ot.background_frag
            },
            backgroundCube: {
                uniforms: {
                    envMap: {
                        value: null
                    },
                    flipEnvMap: {
                        value: -1
                    },
                    backgroundBlurriness: {
                        value: 0
                    },
                    backgroundIntensity: {
                        value: 1
                    },
                    backgroundRotation: {
                        value: new Nt
                    }
                },
                vertexShader: Ot.backgroundCube_vert,
                fragmentShader: Ot.backgroundCube_frag
            },
            cube: {
                uniforms: {
                    tCube: {
                        value: null
                    },
                    tFlip: {
                        value: -1
                    },
                    opacity: {
                        value: 1
                    }
                },
                vertexShader: Ot.cube_vert,
                fragmentShader: Ot.cube_frag
            },
            equirect: {
                uniforms: {
                    tEquirect: {
                        value: null
                    }
                },
                vertexShader: Ot.equirect_vert,
                fragmentShader: Ot.equirect_frag
            },
            distanceRGBA: {
                uniforms: Re([st.common, st.displacementmap, {
                    referencePosition: {
                        value: new P
                    },
                    nearDistance: {
                        value: 1
                    },
                    farDistance: {
                        value: 1e3
                    }
                }]),
                vertexShader: Ot.distanceRGBA_vert,
                fragmentShader: Ot.distanceRGBA_frag
            },
            shadow: {
                uniforms: Re([st.lights, st.fog, {
                    color: {
                        value: new Dt(0)
                    },
                    opacity: {
                        value: 1
                    }
                }]),
                vertexShader: Ot.shadow_vert,
                fragmentShader: Ot.shadow_frag
            }
        };
    bn.physical = {
        uniforms: Re([bn.standard.uniforms, {
            clearcoat: {
                value: 0
            },
            clearcoatMap: {
                value: null
            },
            clearcoatMapTransform: {
                value: new Nt
            },
            clearcoatNormalMap: {
                value: null
            },
            clearcoatNormalMapTransform: {
                value: new Nt
            },
            clearcoatNormalScale: {
                value: new Mt(1, 1)
            },
            clearcoatRoughness: {
                value: 0
            },
            clearcoatRoughnessMap: {
                value: null
            },
            clearcoatRoughnessMapTransform: {
                value: new Nt
            },
            dispersion: {
                value: 0
            },
            iridescence: {
                value: 0
            },
            iridescenceMap: {
                value: null
            },
            iridescenceMapTransform: {
                value: new Nt
            },
            iridescenceIOR: {
                value: 1.3
            },
            iridescenceThicknessMinimum: {
                value: 100
            },
            iridescenceThicknessMaximum: {
                value: 400
            },
            iridescenceThicknessMap: {
                value: null
            },
            iridescenceThicknessMapTransform: {
                value: new Nt
            },
            sheen: {
                value: 0
            },
            sheenColor: {
                value: new Dt(0)
            },
            sheenColorMap: {
                value: null
            },
            sheenColorMapTransform: {
                value: new Nt
            },
            sheenRoughness: {
                value: 1
            },
            sheenRoughnessMap: {
                value: null
            },
            sheenRoughnessMapTransform: {
                value: new Nt
            },
            transmission: {
                value: 0
            },
            transmissionMap: {
                value: null
            },
            transmissionMapTransform: {
                value: new Nt
            },
            transmissionSamplerSize: {
                value: new Mt
            },
            transmissionSamplerMap: {
                value: null
            },
            thickness: {
                value: 0
            },
            thicknessMap: {
                value: null
            },
            thicknessMapTransform: {
                value: new Nt
            },
            attenuationDistance: {
                value: 0
            },
            attenuationColor: {
                value: new Dt(0)
            },
            specularColor: {
                value: new Dt(1, 1, 1)
            },
            specularColorMap: {
                value: null
            },
            specularColorMapTransform: {
                value: new Nt
            },
            specularIntensity: {
                value: 1
            },
            specularIntensityMap: {
                value: null
            },
            specularIntensityMapTransform: {
                value: new Nt
            },
            anisotropyVector: {
                value: new Mt
            },
            anisotropyMap: {
                value: null
            },
            anisotropyMapTransform: {
                value: new Nt
            }
        }]),
        vertexShader: Ot.meshphysical_vert,
        fragmentShader: Ot.meshphysical_frag
    };
    var na = {
        r: 0,
        b: 0,
        g: 0
    }
        , Ti = new vn
        , mg = new me;
    function gg(n, t, e, i, s, r, o) {
        let a = new Dt(0), c = r === !0 ? 0 : 1, l, d, h = null, f = 0, p = null;
        function v(T) {
            let y = T.isScene === !0 ? T.background : null;
            return y && y.isTexture && (y = (T.backgroundBlurriness > 0 ? e : t).get(y)),
                y
        }
        function g(T) {
            let y = !1
                , C = v(T);
            C === null ? u(a, c) : C && C.isColor && (u(C, 1),
                y = !0);
            let R = n.xr.getEnvironmentBlendMode();
            R === "additive" ? i.buffers.color.setClear(0, 0, 0, 1, o) : R === "alpha-blend" && i.buffers.color.setClear(0, 0, 0, 0, o),
                (n.autoClear || y) && (i.buffers.depth.setTest(!0),
                    i.buffers.depth.setMask(!0),
                    i.buffers.color.setMask(!0),
                    n.clear(n.autoClearColor, n.autoClearDepth, n.autoClearStencil))
        }
        function m(T, y) {
            let C = v(y);
            C && (C.isCubeTexture || C.mapping === Ys) ? (d === void 0 && (d = new Fe(new ji(1, 1, 1), new ve({
                name: "BackgroundCubeMaterial",
                uniforms: Si(bn.backgroundCube.uniforms),
                vertexShader: bn.backgroundCube.vertexShader,
                fragmentShader: bn.backgroundCube.fragmentShader,
                side: De,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
                allowOverride: !1
            })),
                d.geometry.deleteAttribute("normal"),
                d.geometry.deleteAttribute("uv"),
                d.onBeforeRender = function (R, D, N) {
                    this.matrixWorld.copyPosition(N.matrixWorld)
                }
                ,
                Object.defineProperty(d.material, "envMap", {
                    get: function () {
                        return this.uniforms.envMap.value
                    }
                }),
                s.update(d)),
                Ti.copy(y.backgroundRotation),
                Ti.x *= -1,
                Ti.y *= -1,
                Ti.z *= -1,
                C.isCubeTexture && C.isRenderTargetTexture === !1 && (Ti.y *= -1,
                    Ti.z *= -1),
                d.material.uniforms.envMap.value = C,
                d.material.uniforms.flipEnvMap.value = C.isCubeTexture && C.isRenderTargetTexture === !1 ? -1 : 1,
                d.material.uniforms.backgroundBlurriness.value = y.backgroundBlurriness,
                d.material.uniforms.backgroundIntensity.value = y.backgroundIntensity,
                d.material.uniforms.backgroundRotation.value.setFromMatrix4(mg.makeRotationFromEuler(Ti)),
                d.material.toneMapped = Gt.getTransfer(C.colorSpace) !== Zt,
                (h !== C || f !== C.version || p !== n.toneMapping) && (d.material.needsUpdate = !0,
                    h = C,
                    f = C.version,
                    p = n.toneMapping),
                d.layers.enableAll(),
                T.unshift(d, d.geometry, d.material, 0, 0, null)) : C && C.isTexture && (l === void 0 && (l = new Fe(new Gs(2, 2), new ve({
                    name: "BackgroundMaterial",
                    uniforms: Si(bn.background.uniforms),
                    vertexShader: bn.background.vertexShader,
                    fragmentShader: bn.background.fragmentShader,
                    side: Ln,
                    depthTest: !1,
                    depthWrite: !1,
                    fog: !1,
                    allowOverride: !1
                })),
                    l.geometry.deleteAttribute("normal"),
                    Object.defineProperty(l.material, "map", {
                        get: function () {
                            return this.uniforms.t2D.value
                        }
                    }),
                    s.update(l)),
                    l.material.uniforms.t2D.value = C,
                    l.material.uniforms.backgroundIntensity.value = y.backgroundIntensity,
                    l.material.toneMapped = Gt.getTransfer(C.colorSpace) !== Zt,
                    C.matrixAutoUpdate === !0 && C.updateMatrix(),
                    l.material.uniforms.uvTransform.value.copy(C.matrix),
                    (h !== C || f !== C.version || p !== n.toneMapping) && (l.material.needsUpdate = !0,
                        h = C,
                        f = C.version,
                        p = n.toneMapping),
                    l.layers.enableAll(),
                    T.unshift(l, l.geometry, l.material, 0, 0, null))
        }
        function u(T, y) {
            T.getRGB(na, Vl(n)),
                i.buffers.color.setClear(na.r, na.g, na.b, y, o)
        }
        function E() {
            d !== void 0 && (d.geometry.dispose(),
                d.material.dispose(),
                d = void 0),
                l !== void 0 && (l.geometry.dispose(),
                    l.material.dispose(),
                    l = void 0)
        }
        return {
            getClearColor: function () {
                return a
            },
            setClearColor: function (T, y = 1) {
                a.set(T),
                    c = y,
                    u(a, c)
            },
            getClearAlpha: function () {
                return c
            },
            setClearAlpha: function (T) {
                c = T,
                    u(a, c)
            },
            render: g,
            addToRenderList: m,
            dispose: E
        }
    }
    function _g(n, t) {
        let e = n.getParameter(n.MAX_VERTEX_ATTRIBS)
            , i = {}
            , s = f(null)
            , r = s
            , o = !1;
        function a(M, w, V, H, z) {
            let Z = !1
                , q = h(H, V, w);
            r !== q && (r = q,
                l(r.object)),
                Z = p(M, H, V, z),
                Z && v(M, H, V, z),
                z !== null && t.update(z, n.ELEMENT_ARRAY_BUFFER),
                (Z || o) && (o = !1,
                    y(M, w, V, H),
                    z !== null && n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, t.get(z).buffer))
        }
        function c() {
            return n.createVertexArray()
        }
        function l(M) {
            return n.bindVertexArray(M)
        }
        function d(M) {
            return n.deleteVertexArray(M)
        }
        function h(M, w, V) {
            let H = V.wireframe === !0
                , z = i[M.id];
            z === void 0 && (z = {},
                i[M.id] = z);
            let Z = z[w.id];
            Z === void 0 && (Z = {},
                z[w.id] = Z);
            let q = Z[H];
            return q === void 0 && (q = f(c()),
                Z[H] = q),
                q
        }
        function f(M) {
            let w = []
                , V = []
                , H = [];
            for (let z = 0; z < e; z++)
                w[z] = 0,
                    V[z] = 0,
                    H[z] = 0;
            return {
                geometry: null,
                program: null,
                wireframe: !1,
                newAttributes: w,
                enabledAttributes: V,
                attributeDivisors: H,
                object: M,
                attributes: {},
                index: null
            }
        }
        function p(M, w, V, H) {
            let z = r.attributes
                , Z = w.attributes
                , q = 0
                , tt = V.getAttributes();
            for (let k in tt)
                if (tt[k].location >= 0) {
                    let ht = z[k]
                        , bt = Z[k];
                    if (bt === void 0 && (k === "instanceMatrix" && M.instanceMatrix && (bt = M.instanceMatrix),
                        k === "instanceColor" && M.instanceColor && (bt = M.instanceColor)),
                        ht === void 0 || ht.attribute !== bt || bt && ht.data !== bt.data)
                        return !0;
                    q++
                }
            return r.attributesNum !== q || r.index !== H
        }
        function v(M, w, V, H) {
            let z = {}
                , Z = w.attributes
                , q = 0
                , tt = V.getAttributes();
            for (let k in tt)
                if (tt[k].location >= 0) {
                    let ht = Z[k];
                    ht === void 0 && (k === "instanceMatrix" && M.instanceMatrix && (ht = M.instanceMatrix),
                        k === "instanceColor" && M.instanceColor && (ht = M.instanceColor));
                    let bt = {};
                    bt.attribute = ht,
                        ht && ht.data && (bt.data = ht.data),
                        z[k] = bt,
                        q++
                }
            r.attributes = z,
                r.attributesNum = q,
                r.index = H
        }
        function g() {
            let M = r.newAttributes;
            for (let w = 0, V = M.length; w < V; w++)
                M[w] = 0
        }
        function m(M) {
            u(M, 0)
        }
        function u(M, w) {
            let V = r.newAttributes
                , H = r.enabledAttributes
                , z = r.attributeDivisors;
            V[M] = 1,
                H[M] === 0 && (n.enableVertexAttribArray(M),
                    H[M] = 1),
                z[M] !== w && (n.vertexAttribDivisor(M, w),
                    z[M] = w)
        }
        function E() {
            let M = r.newAttributes
                , w = r.enabledAttributes;
            for (let V = 0, H = w.length; V < H; V++)
                w[V] !== M[V] && (n.disableVertexAttribArray(V),
                    w[V] = 0)
        }
        function T(M, w, V, H, z, Z, q) {
            q === !0 ? n.vertexAttribIPointer(M, w, V, z, Z) : n.vertexAttribPointer(M, w, V, H, z, Z)
        }
        function y(M, w, V, H) {
            g();
            let z = H.attributes
                , Z = V.getAttributes()
                , q = w.defaultAttributeValues;
            for (let tt in Z) {
                let k = Z[tt];
                if (k.location >= 0) {
                    let rt = z[tt];
                    if (rt === void 0 && (tt === "instanceMatrix" && M.instanceMatrix && (rt = M.instanceMatrix),
                        tt === "instanceColor" && M.instanceColor && (rt = M.instanceColor)),
                        rt !== void 0) {
                        let ht = rt.normalized
                            , bt = rt.itemSize
                            , Bt = t.get(rt);
                        if (Bt === void 0)
                            continue;
                        let ie = Bt.buffer
                            , Kt = Bt.type
                            , X = Bt.bytesPerElement
                            , ot = Kt === n.INT || Kt === n.UNSIGNED_INT || rt.gpuType === To;
                        if (rt.isInterleavedBufferAttribute) {
                            let nt = rt.data
                                , At = nt.stride
                                , Ct = rt.offset;
                            if (nt.isInstancedInterleavedBuffer) {
                                for (let Lt = 0; Lt < k.locationSize; Lt++)
                                    u(k.location + Lt, nt.meshPerAttribute);
                                M.isInstancedMesh !== !0 && H._maxInstanceCount === void 0 && (H._maxInstanceCount = nt.meshPerAttribute * nt.count)
                            } else
                                for (let Lt = 0; Lt < k.locationSize; Lt++)
                                    m(k.location + Lt);
                            n.bindBuffer(n.ARRAY_BUFFER, ie);
                            for (let Lt = 0; Lt < k.locationSize; Lt++)
                                T(k.location + Lt, bt / k.locationSize, Kt, ht, At * X, (Ct + bt / k.locationSize * Lt) * X, ot)
                        } else {
                            if (rt.isInstancedBufferAttribute) {
                                for (let nt = 0; nt < k.locationSize; nt++)
                                    u(k.location + nt, rt.meshPerAttribute);
                                M.isInstancedMesh !== !0 && H._maxInstanceCount === void 0 && (H._maxInstanceCount = rt.meshPerAttribute * rt.count)
                            } else
                                for (let nt = 0; nt < k.locationSize; nt++)
                                    m(k.location + nt);
                            n.bindBuffer(n.ARRAY_BUFFER, ie);
                            for (let nt = 0; nt < k.locationSize; nt++)
                                T(k.location + nt, bt / k.locationSize, Kt, ht, bt * X, bt / k.locationSize * nt * X, ot)
                        }
                    } else if (q !== void 0) {
                        let ht = q[tt];
                        if (ht !== void 0)
                            switch (ht.length) {
                                case 2:
                                    n.vertexAttrib2fv(k.location, ht);
                                    break;
                                case 3:
                                    n.vertexAttrib3fv(k.location, ht);
                                    break;
                                case 4:
                                    n.vertexAttrib4fv(k.location, ht);
                                    break;
                                default:
                                    n.vertexAttrib1fv(k.location, ht)
                            }
                    }
                }
            }
            E()
        }
        function C() {
            N();
            for (let M in i) {
                let w = i[M];
                for (let V in w) {
                    let H = w[V];
                    for (let z in H)
                        d(H[z].object),
                            delete H[z];
                    delete w[V]
                }
                delete i[M]
            }
        }
        function R(M) {
            if (i[M.id] === void 0)
                return;
            let w = i[M.id];
            for (let V in w) {
                let H = w[V];
                for (let z in H)
                    d(H[z].object),
                        delete H[z];
                delete w[V]
            }
            delete i[M.id]
        }
        function D(M) {
            for (let w in i) {
                let V = i[w];
                if (V[M.id] === void 0)
                    continue;
                let H = V[M.id];
                for (let z in H)
                    d(H[z].object),
                        delete H[z];
                delete V[M.id]
            }
        }
        function N() {
            S(),
                o = !0,
                r !== s && (r = s,
                    l(r.object))
        }
        function S() {
            s.geometry = null,
                s.program = null,
                s.wireframe = !1
        }
        return {
            setup: a,
            reset: N,
            resetDefaultState: S,
            dispose: C,
            releaseStatesOfGeometry: R,
            releaseStatesOfProgram: D,
            initAttributes: g,
            enableAttribute: m,
            disableUnusedAttributes: E
        }
    }
    function vg(n, t, e) {
        let i;
        function s(l) {
            i = l
        }
        function r(l, d) {
            n.drawArrays(i, l, d),
                e.update(d, i, 1)
        }
        function o(l, d, h) {
            h !== 0 && (n.drawArraysInstanced(i, l, d, h),
                e.update(d, i, h))
        }
        function a(l, d, h) {
            if (h === 0)
                return;
            t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i, l, 0, d, 0, h);
            let p = 0;
            for (let v = 0; v < h; v++)
                p += d[v];
            e.update(p, i, 1)
        }
        function c(l, d, h, f) {
            if (h === 0)
                return;
            let p = t.get("WEBGL_multi_draw");
            if (p === null)
                for (let v = 0; v < l.length; v++)
                    o(l[v], d[v], f[v]);
            else {
                p.multiDrawArraysInstancedWEBGL(i, l, 0, d, 0, f, 0, h);
                let v = 0;
                for (let g = 0; g < h; g++)
                    v += d[g] * f[g];
                e.update(v, i, 1)
            }
        }
        this.setMode = s,
            this.render = r,
            this.renderInstances = o,
            this.renderMultiDraw = a,
            this.renderMultiDrawInstances = c
    }
    function xg(n, t, e, i) {
        let s;
        function r() {
            if (s !== void 0)
                return s;
            if (t.has("EXT_texture_filter_anisotropic") === !0) {
                let D = t.get("EXT_texture_filter_anisotropic");
                s = n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
            } else
                s = 0;
            return s
        }
        function o(D) {
            return !(D !== Oe && i.convert(D) !== n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))
        }
        function a(D) {
            let N = D === on && (t.has("EXT_color_buffer_half_float") || t.has("EXT_color_buffer_float"));
            return !(D !== Mn && i.convert(D) !== n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE) && D !== Sn && !N)
        }
        function c(D) {
            if (D === "highp") {
                if (n.getShaderPrecisionFormat(n.VERTEX_SHADER, n.HIGH_FLOAT).precision > 0 && n.getShaderPrecisionFormat(n.FRAGMENT_SHADER, n.HIGH_FLOAT).precision > 0)
                    return "highp";
                D = "mediump"
            }
            return D === "mediump" && n.getShaderPrecisionFormat(n.VERTEX_SHADER, n.MEDIUM_FLOAT).precision > 0 && n.getShaderPrecisionFormat(n.FRAGMENT_SHADER, n.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp"
        }
        let l = e.precision !== void 0 ? e.precision : "highp"
            , d = c(l);
        d !== l && (console.warn("THREE.WebGLRenderer:", l, "not supported, using", d, "instead."),
            l = d);
        let h = e.logarithmicDepthBuffer === !0
            , f = e.reversedDepthBuffer === !0 && t.has("EXT_clip_control")
            , p = n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS)
            , v = n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS)
            , g = n.getParameter(n.MAX_TEXTURE_SIZE)
            , m = n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE)
            , u = n.getParameter(n.MAX_VERTEX_ATTRIBS)
            , E = n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS)
            , T = n.getParameter(n.MAX_VARYING_VECTORS)
            , y = n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS)
            , C = v > 0
            , R = n.getParameter(n.MAX_SAMPLES);
        return {
            isWebGL2: !0,
            getMaxAnisotropy: r,
            getMaxPrecision: c,
            textureFormatReadable: o,
            textureTypeReadable: a,
            precision: l,
            logarithmicDepthBuffer: h,
            reversedDepthBuffer: f,
            maxTextures: p,
            maxVertexTextures: v,
            maxTextureSize: g,
            maxCubemapSize: m,
            maxAttributes: u,
            maxVertexUniforms: E,
            maxVaryings: T,
            maxFragmentUniforms: y,
            vertexTextures: C,
            maxSamples: R
        }
    }
    function yg(n) {
        let t = this
            , e = null
            , i = 0
            , s = !1
            , r = !1
            , o = new nn
            , a = new Nt
            , c = {
                value: null,
                needsUpdate: !1
            };
        this.uniform = c,
            this.numPlanes = 0,
            this.numIntersection = 0,
            this.init = function (h, f) {
                let p = h.length !== 0 || f || i !== 0 || s;
                return s = f,
                    i = h.length,
                    p
            }
            ,
            this.beginShadows = function () {
                r = !0,
                    d(null)
            }
            ,
            this.endShadows = function () {
                r = !1
            }
            ,
            this.setGlobalState = function (h, f) {
                e = d(h, f, 0)
            }
            ,
            this.setState = function (h, f, p) {
                let v = h.clippingPlanes
                    , g = h.clipIntersection
                    , m = h.clipShadows
                    , u = n.get(h);
                if (!s || v === null || v.length === 0 || r && !m)
                    r ? d(null) : l();
                else {
                    let E = r ? 0 : i
                        , T = E * 4
                        , y = u.clippingState || null;
                    c.value = y,
                        y = d(v, f, T, p);
                    for (let C = 0; C !== T; ++C)
                        y[C] = e[C];
                    u.clippingState = y,
                        this.numIntersection = g ? this.numPlanes : 0,
                        this.numPlanes += E
                }
            }
            ;
        function l() {
            c.value !== e && (c.value = e,
                c.needsUpdate = i > 0),
                t.numPlanes = i,
                t.numIntersection = 0
        }
        function d(h, f, p, v) {
            let g = h !== null ? h.length : 0
                , m = null;
            if (g !== 0) {
                if (m = c.value,
                    v !== !0 || m === null) {
                    let u = p + g * 4
                        , E = f.matrixWorldInverse;
                    a.getNormalMatrix(E),
                        (m === null || m.length < u) && (m = new Float32Array(u));
                    for (let T = 0, y = p; T !== g; ++T,
                        y += 4)
                        o.copy(h[T]).applyMatrix4(E, a),
                            o.normal.toArray(m, y),
                            m[y + 3] = o.constant
                }
                c.value = m,
                    c.needsUpdate = !0
            }
            return t.numPlanes = g,
                t.numIntersection = 0,
                m
        }
    }
    function Mg(n) {
        let t = new WeakMap;
        function e(o, a) {
            return a === Mo ? o.mapping = yi : a === So && (o.mapping = Mi),
                o
        }
        function i(o) {
            if (o && o.isTexture) {
                let a = o.mapping;
                if (a === Mo || a === So)
                    if (t.has(o)) {
                        let c = t.get(o).texture;
                        return e(c, o.mapping)
                    } else {
                        let c = o.image;
                        if (c && c.height > 0) {
                            let l = new Kr(c.height);
                            return l.fromEquirectangularTexture(n, o),
                                t.set(o, l),
                                o.addEventListener("dispose", s),
                                e(l.texture, o.mapping)
                        } else
                            return null
                    }
            }
            return o
        }
        function s(o) {
            let a = o.target;
            a.removeEventListener("dispose", s);
            let c = t.get(a);
            c !== void 0 && (t.delete(a),
                c.dispose())
        }
        function r() {
            t = new WeakMap
        }
        return {
            get: i,
            dispose: r
        }
    }
    var ls = 4
        , _u = [.125, .215, .35, .446, .526, .582]
        , Ai = 20
        , Xl = new es
        , vu = new Dt
        , ql = null
        , Yl = 0
        , Zl = 0
        , $l = !1
        , wi = (1 + Math.sqrt(5)) / 2
        , as = 1 / wi
        , xu = [new P(-wi, as, 0), new P(wi, as, 0), new P(-as, 0, wi), new P(as, 0, wi), new P(0, wi, -as), new P(0, wi, as), new P(-1, 1, -1), new P(1, 1, -1), new P(-1, 1, 1), new P(1, 1, 1)]
        , Sg = new P
        , ra = class {
            constructor(t) {
                this._renderer = t,
                    this._pingPongRenderTarget = null,
                    this._lodMax = 0,
                    this._cubeSize = 0,
                    this._lodPlanes = [],
                    this._sizeLods = [],
                    this._sigmas = [],
                    this._blurMaterial = null,
                    this._cubemapMaterial = null,
                    this._equirectMaterial = null,
                    this._compileMaterial(this._blurMaterial)
            }
            fromScene(t, e = 0, i = .1, s = 100, r = {}) {
                let { size: o = 256, position: a = Sg } = r;
                ql = this._renderer.getRenderTarget(),
                    Yl = this._renderer.getActiveCubeFace(),
                    Zl = this._renderer.getActiveMipmapLevel(),
                    $l = this._renderer.xr.enabled,
                    this._renderer.xr.enabled = !1,
                    this._setSize(o);
                let c = this._allocateTargets();
                return c.depthBuffer = !0,
                    this._sceneToCubeUV(t, i, s, c, a),
                    e > 0 && this._blur(c, 0, 0, e),
                    this._applyPMREM(c),
                    this._cleanup(c),
                    c
            }
            fromEquirectangular(t, e = null) {
                return this._fromTexture(t, e)
            }
            fromCubemap(t, e = null) {
                return this._fromTexture(t, e)
            }
            compileCubemapShader() {
                this._cubemapMaterial === null && (this._cubemapMaterial = Su(),
                    this._compileMaterial(this._cubemapMaterial))
            }
            compileEquirectangularShader() {
                this._equirectMaterial === null && (this._equirectMaterial = Mu(),
                    this._compileMaterial(this._equirectMaterial))
            }
            dispose() {
                this._dispose(),
                    this._cubemapMaterial !== null && this._cubemapMaterial.dispose(),
                    this._equirectMaterial !== null && this._equirectMaterial.dispose()
            }
            _setSize(t) {
                this._lodMax = Math.floor(Math.log2(t)),
                    this._cubeSize = Math.pow(2, this._lodMax)
            }
            _dispose() {
                this._blurMaterial !== null && this._blurMaterial.dispose(),
                    this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
                for (let t = 0; t < this._lodPlanes.length; t++)
                    this._lodPlanes[t].dispose()
            }
            _cleanup(t) {
                this._renderer.setRenderTarget(ql, Yl, Zl),
                    this._renderer.xr.enabled = $l,
                    t.scissorTest = !1,
                    ia(t, 0, 0, t.width, t.height)
            }
            _fromTexture(t, e) {
                t.mapping === yi || t.mapping === Mi ? this._setSize(t.image.length === 0 ? 16 : t.image[0].width || t.image[0].image.width) : this._setSize(t.image.width / 4),
                    ql = this._renderer.getRenderTarget(),
                    Yl = this._renderer.getActiveCubeFace(),
                    Zl = this._renderer.getActiveMipmapLevel(),
                    $l = this._renderer.xr.enabled,
                    this._renderer.xr.enabled = !1;
                let i = e || this._allocateTargets();
                return this._textureToCubeUV(t, i),
                    this._applyPMREM(i),
                    this._cleanup(i),
                    i
            }
            _allocateTargets() {
                let t = 3 * Math.max(this._cubeSize, 112)
                    , e = 4 * this._cubeSize
                    , i = {
                        magFilter: Ne,
                        minFilter: Ne,
                        generateMipmaps: !1,
                        type: on,
                        format: Oe,
                        colorSpace: fi,
                        depthBuffer: !1
                    }
                    , s = yu(t, e, i);
                if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== t || this._pingPongRenderTarget.height !== e) {
                    this._pingPongRenderTarget !== null && this._dispose(),
                        this._pingPongRenderTarget = yu(t, e, i);
                    let { _lodMax: r } = this;
                    ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = bg(r)),
                        this._blurMaterial = Tg(r, t, e)
                }
                return s
            }
            _compileMaterial(t) {
                let e = new Fe(this._lodPlanes[0], t);
                this._renderer.compile(e, Xl)
            }
            _sceneToCubeUV(t, e, i, s, r) {
                let c = new Ae(90, 1, e, i)
                    , l = [1, -1, 1, 1, 1, 1]
                    , d = [1, 1, 1, -1, -1, -1]
                    , h = this._renderer
                    , f = h.autoClear
                    , p = h.toneMapping;
                h.getClearColor(vu),
                    h.toneMapping = Un,
                    h.autoClear = !1,
                    h.state.buffers.depth.getReversed() && (h.setRenderTarget(s),
                        h.clearDepth(),
                        h.setRenderTarget(null));
                let g = new _i({
                    name: "PMREM.Background",
                    side: De,
                    depthWrite: !1,
                    depthTest: !1
                })
                    , m = new Fe(new ji, g)
                    , u = !1
                    , E = t.background;
                E ? E.isColor && (g.color.copy(E),
                    t.background = null,
                    u = !0) : (g.color.copy(vu),
                        u = !0);
                for (let T = 0; T < 6; T++) {
                    let y = T % 3;
                    y === 0 ? (c.up.set(0, l[T], 0),
                        c.position.set(r.x, r.y, r.z),
                        c.lookAt(r.x + d[T], r.y, r.z)) : y === 1 ? (c.up.set(0, 0, l[T]),
                            c.position.set(r.x, r.y, r.z),
                            c.lookAt(r.x, r.y + d[T], r.z)) : (c.up.set(0, l[T], 0),
                                c.position.set(r.x, r.y, r.z),
                                c.lookAt(r.x, r.y, r.z + d[T]));
                    let C = this._cubeSize;
                    ia(s, y * C, T > 2 ? C : 0, C, C),
                        h.setRenderTarget(s),
                        u && h.render(m, c),
                        h.render(t, c)
                }
                m.geometry.dispose(),
                    m.material.dispose(),
                    h.toneMapping = p,
                    h.autoClear = f,
                    t.background = E
            }
            _textureToCubeUV(t, e) {
                let i = this._renderer
                    , s = t.mapping === yi || t.mapping === Mi;
                s ? (this._cubemapMaterial === null && (this._cubemapMaterial = Su()),
                    this._cubemapMaterial.uniforms.flipEnvMap.value = t.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Mu());
                let r = s ? this._cubemapMaterial : this._equirectMaterial
                    , o = new Fe(this._lodPlanes[0], r)
                    , a = r.uniforms;
                a.envMap.value = t;
                let c = this._cubeSize;
                ia(e, 0, 0, 3 * c, 2 * c),
                    i.setRenderTarget(e),
                    i.render(o, Xl)
            }
            _applyPMREM(t) {
                let e = this._renderer
                    , i = e.autoClear;
                e.autoClear = !1;
                let s = this._lodPlanes.length;
                for (let r = 1; r < s; r++) {
                    let o = Math.sqrt(this._sigmas[r] * this._sigmas[r] - this._sigmas[r - 1] * this._sigmas[r - 1])
                        , a = xu[(s - r - 1) % xu.length];
                    this._blur(t, r - 1, r, o, a)
                }
                e.autoClear = i
            }
            _blur(t, e, i, s, r) {
                let o = this._pingPongRenderTarget;
                this._halfBlur(t, o, e, i, s, "latitudinal", r),
                    this._halfBlur(o, t, i, i, s, "longitudinal", r)
            }
            _halfBlur(t, e, i, s, r, o, a) {
                let c = this._renderer
                    , l = this._blurMaterial;
                o !== "latitudinal" && o !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!");
                let d = 3
                    , h = new Fe(this._lodPlanes[s], l)
                    , f = l.uniforms
                    , p = this._sizeLods[i] - 1
                    , v = isFinite(r) ? Math.PI / (2 * p) : 2 * Math.PI / (2 * Ai - 1)
                    , g = r / v
                    , m = isFinite(r) ? 1 + Math.floor(d * g) : Ai;
                m > Ai && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ai}`);
                let u = []
                    , E = 0;
                for (let D = 0; D < Ai; ++D) {
                    let N = D / g
                        , S = Math.exp(-N * N / 2);
                    u.push(S),
                        D === 0 ? E += S : D < m && (E += 2 * S)
                }
                for (let D = 0; D < u.length; D++)
                    u[D] = u[D] / E;
                f.envMap.value = t.texture,
                    f.samples.value = m,
                    f.weights.value = u,
                    f.latitudinal.value = o === "latitudinal",
                    a && (f.poleAxis.value = a);
                let { _lodMax: T } = this;
                f.dTheta.value = v,
                    f.mipInt.value = T - i;
                let y = this._sizeLods[s]
                    , C = 3 * y * (s > T - ls ? s - T + ls : 0)
                    , R = 4 * (this._cubeSize - y);
                ia(e, C, R, 3 * y, 2 * y),
                    c.setRenderTarget(e),
                    c.render(h, Xl)
            }
        }
        ;
    function bg(n) {
        let t = []
            , e = []
            , i = []
            , s = n
            , r = n - ls + 1 + _u.length;
        for (let o = 0; o < r; o++) {
            let a = Math.pow(2, s);
            e.push(a);
            let c = 1 / a;
            o > n - ls ? c = _u[o - n + ls - 1] : o === 0 && (c = 0),
                i.push(c);
            let l = 1 / (a - 2)
                , d = -l
                , h = 1 + l
                , f = [d, d, h, d, h, h, d, d, h, h, d, h]
                , p = 6
                , v = 6
                , g = 3
                , m = 2
                , u = 1
                , E = new Float32Array(g * v * p)
                , T = new Float32Array(m * v * p)
                , y = new Float32Array(u * v * p);
            for (let R = 0; R < p; R++) {
                let D = R % 3 * 2 / 3 - 1
                    , N = R > 2 ? 0 : -1
                    , S = [D, N, 0, D + 2 / 3, N, 0, D + 2 / 3, N + 1, 0, D, N, 0, D + 2 / 3, N + 1, 0, D, N + 1, 0];
                E.set(S, g * v * R),
                    T.set(f, m * v * R);
                let M = [R, R, R, R, R, R];
                y.set(M, u * v * R)
            }
            let C = new $e;
            C.setAttribute("position", new qe(E, g)),
                C.setAttribute("uv", new qe(T, m)),
                C.setAttribute("faceIndex", new qe(y, u)),
                t.push(C),
                s > ls && s--
        }
        return {
            lodPlanes: t,
            sizeLods: e,
            sigmas: i
        }
    }
    function yu(n, t, e) {
        let i = new Te(n, t, e);
        return i.texture.mapping = Ys,
            i.texture.name = "PMREM.cubeUv",
            i.scissorTest = !0,
            i
    }
    function ia(n, t, e, i, s) {
        n.viewport.set(t, e, i, s),
            n.scissor.set(t, e, i, s)
    }
    function Tg(n, t, e) {
        let i = new Float32Array(Ai)
            , s = new P(0, 1, 0);
        return new ve({
            name: "SphericalGaussianBlur",
            defines: {
                n: Ai,
                CUBEUV_TEXEL_WIDTH: 1 / t,
                CUBEUV_TEXEL_HEIGHT: 1 / e,
                CUBEUV_MAX_MIP: `${n}.0`
            },
            uniforms: {
                envMap: {
                    value: null
                },
                samples: {
                    value: 1
                },
                weights: {
                    value: i
                },
                latitudinal: {
                    value: !1
                },
                dTheta: {
                    value: 0
                },
                mipInt: {
                    value: 0
                },
                poleAxis: {
                    value: s
                }
            },
            vertexShader: rc(),
            fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
            blending: un,
            depthTest: !1,
            depthWrite: !1
        })
    }
    function Mu() {
        return new ve({
            name: "EquirectangularToCubeUV",
            uniforms: {
                envMap: {
                    value: null
                }
            },
            vertexShader: rc(),
            fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
            blending: un,
            depthTest: !1,
            depthWrite: !1
        })
    }
    function Su() {
        return new ve({
            name: "CubemapToCubeUV",
            uniforms: {
                envMap: {
                    value: null
                },
                flipEnvMap: {
                    value: -1
                }
            },
            vertexShader: rc(),
            fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
            blending: un,
            depthTest: !1,
            depthWrite: !1
        })
    }
    function rc() {
        return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
    }
    function Eg(n) {
        let t = new WeakMap
            , e = null;
        function i(a) {
            if (a && a.isTexture) {
                let c = a.mapping
                    , l = c === Mo || c === So
                    , d = c === yi || c === Mi;
                if (l || d) {
                    let h = t.get(a)
                        , f = h !== void 0 ? h.texture.pmremVersion : 0;
                    if (a.isRenderTargetTexture && a.pmremVersion !== f)
                        return e === null && (e = new ra(n)),
                            h = l ? e.fromEquirectangular(a, h) : e.fromCubemap(a, h),
                            h.texture.pmremVersion = a.pmremVersion,
                            t.set(a, h),
                            h.texture;
                    if (h !== void 0)
                        return h.texture;
                    {
                        let p = a.image;
                        return l && p && p.height > 0 || d && p && s(p) ? (e === null && (e = new ra(n)),
                            h = l ? e.fromEquirectangular(a) : e.fromCubemap(a),
                            h.texture.pmremVersion = a.pmremVersion,
                            t.set(a, h),
                            a.addEventListener("dispose", r),
                            h.texture) : null
                    }
                }
            }
            return a
        }
        function s(a) {
            let c = 0
                , l = 6;
            for (let d = 0; d < l; d++)
                a[d] !== void 0 && c++;
            return c === l
        }
        function r(a) {
            let c = a.target;
            c.removeEventListener("dispose", r);
            let l = t.get(c);
            l !== void 0 && (t.delete(c),
                l.dispose())
        }
        function o() {
            t = new WeakMap,
                e !== null && (e.dispose(),
                    e = null)
        }
        return {
            get: i,
            dispose: o
        }
    }
    function wg(n) {
        let t = {};
        function e(i) {
            if (t[i] !== void 0)
                return t[i];
            let s;
            switch (i) {
                case "WEBGL_depth_texture":
                    s = n.getExtension("WEBGL_depth_texture") || n.getExtension("MOZ_WEBGL_depth_texture") || n.getExtension("WEBKIT_WEBGL_depth_texture");
                    break;
                case "EXT_texture_filter_anisotropic":
                    s = n.getExtension("EXT_texture_filter_anisotropic") || n.getExtension("MOZ_EXT_texture_filter_anisotropic") || n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                    break;
                case "WEBGL_compressed_texture_s3tc":
                    s = n.getExtension("WEBGL_compressed_texture_s3tc") || n.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                    break;
                case "WEBGL_compressed_texture_pvrtc":
                    s = n.getExtension("WEBGL_compressed_texture_pvrtc") || n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                    break;
                default:
                    s = n.getExtension(i)
            }
            return t[i] = s,
                s
        }
        return {
            has: function (i) {
                return e(i) !== null
            },
            init: function () {
                e("EXT_color_buffer_float"),
                    e("WEBGL_clip_cull_distance"),
                    e("OES_texture_float_linear"),
                    e("EXT_color_buffer_half_float"),
                    e("WEBGL_multisampled_render_to_texture"),
                    e("WEBGL_render_shared_exponent")
            },
            get: function (i) {
                let s = e(i);
                return s === null && pi("THREE.WebGLRenderer: " + i + " extension not supported."),
                    s
            }
        }
    }
    function Ag(n, t, e, i) {
        let s = {}
            , r = new WeakMap;
        function o(h) {
            let f = h.target;
            f.index !== null && t.remove(f.index);
            for (let v in f.attributes)
                t.remove(f.attributes[v]);
            f.removeEventListener("dispose", o),
                delete s[f.id];
            let p = r.get(f);
            p && (t.remove(p),
                r.delete(f)),
                i.releaseStatesOfGeometry(f),
                f.isInstancedBufferGeometry === !0 && delete f._maxInstanceCount,
                e.memory.geometries--
        }
        function a(h, f) {
            return s[f.id] === !0 || (f.addEventListener("dispose", o),
                s[f.id] = !0,
                e.memory.geometries++),
                f
        }
        function c(h) {
            let f = h.attributes;
            for (let p in f)
                t.update(f[p], n.ARRAY_BUFFER)
        }
        function l(h) {
            let f = []
                , p = h.index
                , v = h.attributes.position
                , g = 0;
            if (p !== null) {
                let E = p.array;
                g = p.version;
                for (let T = 0, y = E.length; T < y; T += 3) {
                    let C = E[T + 0]
                        , R = E[T + 1]
                        , D = E[T + 2];
                    f.push(C, R, R, D, D, C)
                }
            } else if (v !== void 0) {
                let E = v.array;
                g = v.version;
                for (let T = 0, y = E.length / 3 - 1; T < y; T += 3) {
                    let C = T + 0
                        , R = T + 1
                        , D = T + 2;
                    f.push(C, R, R, D, D, C)
                }
            } else
                return;
            let m = new (kl(f) ? Ns : Us)(f, 1);
            m.version = g;
            let u = r.get(h);
            u && t.remove(u),
                r.set(h, m)
        }
        function d(h) {
            let f = r.get(h);
            if (f) {
                let p = h.index;
                p !== null && f.version < p.version && l(h)
            } else
                l(h);
            return r.get(h)
        }
        return {
            get: a,
            update: c,
            getWireframeAttribute: d
        }
    }
    function Cg(n, t, e) {
        let i;
        function s(f) {
            i = f
        }
        let r, o;
        function a(f) {
            r = f.type,
                o = f.bytesPerElement
        }
        function c(f, p) {
            n.drawElements(i, p, r, f * o),
                e.update(p, i, 1)
        }
        function l(f, p, v) {
            v !== 0 && (n.drawElementsInstanced(i, p, r, f * o, v),
                e.update(p, i, v))
        }
        function d(f, p, v) {
            if (v === 0)
                return;
            t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i, p, 0, r, f, 0, v);
            let m = 0;
            for (let u = 0; u < v; u++)
                m += p[u];
            e.update(m, i, 1)
        }
        function h(f, p, v, g) {
            if (v === 0)
                return;
            let m = t.get("WEBGL_multi_draw");
            if (m === null)
                for (let u = 0; u < f.length; u++)
                    l(f[u] / o, p[u], g[u]);
            else {
                m.multiDrawElementsInstancedWEBGL(i, p, 0, r, f, 0, g, 0, v);
                let u = 0;
                for (let E = 0; E < v; E++)
                    u += p[E] * g[E];
                e.update(u, i, 1)
            }
        }
        this.setMode = s,
            this.setIndex = a,
            this.render = c,
            this.renderInstances = l,
            this.renderMultiDraw = d,
            this.renderMultiDrawInstances = h
    }
    function Rg(n) {
        let t = {
            geometries: 0,
            textures: 0
        }
            , e = {
                frame: 0,
                calls: 0,
                triangles: 0,
                points: 0,
                lines: 0
            };
        function i(r, o, a) {
            switch (e.calls++,
            o) {
                case n.TRIANGLES:
                    e.triangles += a * (r / 3);
                    break;
                case n.LINES:
                    e.lines += a * (r / 2);
                    break;
                case n.LINE_STRIP:
                    e.lines += a * (r - 1);
                    break;
                case n.LINE_LOOP:
                    e.lines += a * r;
                    break;
                case n.POINTS:
                    e.points += a * r;
                    break;
                default:
                    console.error("THREE.WebGLInfo: Unknown draw mode:", o);
                    break
            }
        }
        function s() {
            e.calls = 0,
                e.triangles = 0,
                e.points = 0,
                e.lines = 0
        }
        return {
            memory: t,
            render: e,
            programs: null,
            autoReset: !0,
            reset: s,
            update: i
        }
    }
    function Pg(n, t, e) {
        let i = new WeakMap
            , s = new le;
        function r(o, a, c) {
            let l = o.morphTargetInfluences
                , d = a.morphAttributes.position || a.morphAttributes.normal || a.morphAttributes.color
                , h = d !== void 0 ? d.length : 0
                , f = i.get(a);
            if (f === void 0 || f.count !== h) {
                let S = function () {
                    D.dispose(),
                        i.delete(a),
                        a.removeEventListener("dispose", S)
                };
                f !== void 0 && f.texture.dispose();
                let p = a.morphAttributes.position !== void 0
                    , v = a.morphAttributes.normal !== void 0
                    , g = a.morphAttributes.color !== void 0
                    , m = a.morphAttributes.position || []
                    , u = a.morphAttributes.normal || []
                    , E = a.morphAttributes.color || []
                    , T = 0;
                p === !0 && (T = 1),
                    v === !0 && (T = 2),
                    g === !0 && (T = 3);
                let y = a.attributes.position.count * T
                    , C = 1;
                y > t.maxTextureSize && (C = Math.ceil(y / t.maxTextureSize),
                    y = t.maxTextureSize);
                let R = new Float32Array(y * C * 4 * h)
                    , D = new Ds(R, y, C, h);
                D.type = Sn,
                    D.needsUpdate = !0;
                let N = T * 4;
                for (let M = 0; M < h; M++) {
                    let w = m[M]
                        , V = u[M]
                        , H = E[M]
                        , z = y * C * 4 * M;
                    for (let Z = 0; Z < w.count; Z++) {
                        let q = Z * N;
                        p === !0 && (s.fromBufferAttribute(w, Z),
                            R[z + q + 0] = s.x,
                            R[z + q + 1] = s.y,
                            R[z + q + 2] = s.z,
                            R[z + q + 3] = 0),
                            v === !0 && (s.fromBufferAttribute(V, Z),
                                R[z + q + 4] = s.x,
                                R[z + q + 5] = s.y,
                                R[z + q + 6] = s.z,
                                R[z + q + 7] = 0),
                            g === !0 && (s.fromBufferAttribute(H, Z),
                                R[z + q + 8] = s.x,
                                R[z + q + 9] = s.y,
                                R[z + q + 10] = s.z,
                                R[z + q + 11] = H.itemSize === 4 ? s.w : 1)
                    }
                }
                f = {
                    count: h,
                    texture: D,
                    size: new Mt(y, C)
                },
                    i.set(a, f),
                    a.addEventListener("dispose", S)
            }
            if (o.isInstancedMesh === !0 && o.morphTexture !== null)
                c.getUniforms().setValue(n, "morphTexture", o.morphTexture, e);
            else {
                let p = 0;
                for (let g = 0; g < l.length; g++)
                    p += l[g];
                let v = a.morphTargetsRelative ? 1 : 1 - p;
                c.getUniforms().setValue(n, "morphTargetBaseInfluence", v),
                    c.getUniforms().setValue(n, "morphTargetInfluences", l)
            }
            c.getUniforms().setValue(n, "morphTargetsTexture", f.texture, e),
                c.getUniforms().setValue(n, "morphTargetsTextureSize", f.size)
        }
        return {
            update: r
        }
    }
    function Ig(n, t, e, i) {
        let s = new WeakMap;
        function r(c) {
            let l = i.render.frame
                , d = c.geometry
                , h = t.get(c, d);
            if (s.get(h) !== l && (t.update(h),
                s.set(h, l)),
                c.isInstancedMesh && (c.hasEventListener("dispose", a) === !1 && c.addEventListener("dispose", a),
                    s.get(c) !== l && (e.update(c.instanceMatrix, n.ARRAY_BUFFER),
                        c.instanceColor !== null && e.update(c.instanceColor, n.ARRAY_BUFFER),
                        s.set(c, l))),
                c.isSkinnedMesh) {
                let f = c.skeleton;
                s.get(f) !== l && (f.update(),
                    s.set(f, l))
            }
            return h
        }
        function o() {
            s = new WeakMap
        }
        function a(c) {
            let l = c.target;
            l.removeEventListener("dispose", a),
                e.remove(l.instanceMatrix),
                l.instanceColor !== null && e.remove(l.instanceColor)
        }
        return {
            update: r,
            dispose: o
        }
    }
    var Vu = new Ye
        , bu = new Hs(1, 1)
        , Hu = new Ds
        , Gu = new $r
        , Wu = new Os
        , Tu = []
        , Eu = []
        , wu = new Float32Array(16)
        , Au = new Float32Array(9)
        , Cu = new Float32Array(4);
    function hs(n, t, e) {
        let i = n[0];
        if (i <= 0 || i > 0)
            return n;
        let s = t * e
            , r = Tu[s];
        if (r === void 0 && (r = new Float32Array(s),
            Tu[s] = r),
            t !== 0) {
            i.toArray(r, 0);
            for (let o = 1, a = 0; o !== t; ++o)
                a += e,
                    n[o].toArray(r, a)
        }
        return r
    }
    function xe(n, t) {
        if (n.length !== t.length)
            return !1;
        for (let e = 0, i = n.length; e < i; e++)
            if (n[e] !== t[e])
                return !1;
        return !0
    }
    function ye(n, t) {
        for (let e = 0, i = t.length; e < i; e++)
            n[e] = t[e]
    }
    function la(n, t) {
        let e = Eu[t];
        e === void 0 && (e = new Int32Array(t),
            Eu[t] = e);
        for (let i = 0; i !== t; ++i)
            e[i] = n.allocateTextureUnit();
        return e
    }
    function Dg(n, t) {
        let e = this.cache;
        e[0] !== t && (n.uniform1f(this.addr, t),
            e[0] = t)
    }
    function Lg(n, t) {
        let e = this.cache;
        if (t.x !== void 0)
            (e[0] !== t.x || e[1] !== t.y) && (n.uniform2f(this.addr, t.x, t.y),
                e[0] = t.x,
                e[1] = t.y);
        else {
            if (xe(e, t))
                return;
            n.uniform2fv(this.addr, t),
                ye(e, t)
        }
    }
    function Ug(n, t) {
        let e = this.cache;
        if (t.x !== void 0)
            (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (n.uniform3f(this.addr, t.x, t.y, t.z),
                e[0] = t.x,
                e[1] = t.y,
                e[2] = t.z);
        else if (t.r !== void 0)
            (e[0] !== t.r || e[1] !== t.g || e[2] !== t.b) && (n.uniform3f(this.addr, t.r, t.g, t.b),
                e[0] = t.r,
                e[1] = t.g,
                e[2] = t.b);
        else {
            if (xe(e, t))
                return;
            n.uniform3fv(this.addr, t),
                ye(e, t)
        }
    }
    function Ng(n, t) {
        let e = this.cache;
        if (t.x !== void 0)
            (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (n.uniform4f(this.addr, t.x, t.y, t.z, t.w),
                e[0] = t.x,
                e[1] = t.y,
                e[2] = t.z,
                e[3] = t.w);
        else {
            if (xe(e, t))
                return;
            n.uniform4fv(this.addr, t),
                ye(e, t)
        }
    }
    function Fg(n, t) {
        let e = this.cache
            , i = t.elements;
        if (i === void 0) {
            if (xe(e, t))
                return;
            n.uniformMatrix2fv(this.addr, !1, t),
                ye(e, t)
        } else {
            if (xe(e, i))
                return;
            Cu.set(i),
                n.uniformMatrix2fv(this.addr, !1, Cu),
                ye(e, i)
        }
    }
    function Og(n, t) {
        let e = this.cache
            , i = t.elements;
        if (i === void 0) {
            if (xe(e, t))
                return;
            n.uniformMatrix3fv(this.addr, !1, t),
                ye(e, t)
        } else {
            if (xe(e, i))
                return;
            Au.set(i),
                n.uniformMatrix3fv(this.addr, !1, Au),
                ye(e, i)
        }
    }
    function Bg(n, t) {
        let e = this.cache
            , i = t.elements;
        if (i === void 0) {
            if (xe(e, t))
                return;
            n.uniformMatrix4fv(this.addr, !1, t),
                ye(e, t)
        } else {
            if (xe(e, i))
                return;
            wu.set(i),
                n.uniformMatrix4fv(this.addr, !1, wu),
                ye(e, i)
        }
    }
    function zg(n, t) {
        let e = this.cache;
        e[0] !== t && (n.uniform1i(this.addr, t),
            e[0] = t)
    }
    function kg(n, t) {
        let e = this.cache;
        if (t.x !== void 0)
            (e[0] !== t.x || e[1] !== t.y) && (n.uniform2i(this.addr, t.x, t.y),
                e[0] = t.x,
                e[1] = t.y);
        else {
            if (xe(e, t))
                return;
            n.uniform2iv(this.addr, t),
                ye(e, t)
        }
    }
    function Vg(n, t) {
        let e = this.cache;
        if (t.x !== void 0)
            (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (n.uniform3i(this.addr, t.x, t.y, t.z),
                e[0] = t.x,
                e[1] = t.y,
                e[2] = t.z);
        else {
            if (xe(e, t))
                return;
            n.uniform3iv(this.addr, t),
                ye(e, t)
        }
    }
    function Hg(n, t) {
        let e = this.cache;
        if (t.x !== void 0)
            (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (n.uniform4i(this.addr, t.x, t.y, t.z, t.w),
                e[0] = t.x,
                e[1] = t.y,
                e[2] = t.z,
                e[3] = t.w);
        else {
            if (xe(e, t))
                return;
            n.uniform4iv(this.addr, t),
                ye(e, t)
        }
    }
    function Gg(n, t) {
        let e = this.cache;
        e[0] !== t && (n.uniform1ui(this.addr, t),
            e[0] = t)
    }
    function Wg(n, t) {
        let e = this.cache;
        if (t.x !== void 0)
            (e[0] !== t.x || e[1] !== t.y) && (n.uniform2ui(this.addr, t.x, t.y),
                e[0] = t.x,
                e[1] = t.y);
        else {
            if (xe(e, t))
                return;
            n.uniform2uiv(this.addr, t),
                ye(e, t)
        }
    }
    function Xg(n, t) {
        let e = this.cache;
        if (t.x !== void 0)
            (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (n.uniform3ui(this.addr, t.x, t.y, t.z),
                e[0] = t.x,
                e[1] = t.y,
                e[2] = t.z);
        else {
            if (xe(e, t))
                return;
            n.uniform3uiv(this.addr, t),
                ye(e, t)
        }
    }
    function qg(n, t) {
        let e = this.cache;
        if (t.x !== void 0)
            (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (n.uniform4ui(this.addr, t.x, t.y, t.z, t.w),
                e[0] = t.x,
                e[1] = t.y,
                e[2] = t.z,
                e[3] = t.w);
        else {
            if (xe(e, t))
                return;
            n.uniform4uiv(this.addr, t),
                ye(e, t)
        }
    }
    function Yg(n, t, e) {
        let i = this.cache
            , s = e.allocateTextureUnit();
        i[0] !== s && (n.uniform1i(this.addr, s),
            i[0] = s);
        let r;
        this.type === n.SAMPLER_2D_SHADOW ? (bu.compareFunction = Fl,
            r = bu) : r = Vu,
            e.setTexture2D(t || r, s)
    }
    function Zg(n, t, e) {
        let i = this.cache
            , s = e.allocateTextureUnit();
        i[0] !== s && (n.uniform1i(this.addr, s),
            i[0] = s),
            e.setTexture3D(t || Gu, s)
    }
    function $g(n, t, e) {
        let i = this.cache
            , s = e.allocateTextureUnit();
        i[0] !== s && (n.uniform1i(this.addr, s),
            i[0] = s),
            e.setTextureCube(t || Wu, s)
    }
    function Jg(n, t, e) {
        let i = this.cache
            , s = e.allocateTextureUnit();
        i[0] !== s && (n.uniform1i(this.addr, s),
            i[0] = s),
            e.setTexture2DArray(t || Hu, s)
    }
    function Kg(n) {
        switch (n) {
            case 5126:
                return Dg;
            case 35664:
                return Lg;
            case 35665:
                return Ug;
            case 35666:
                return Ng;
            case 35674:
                return Fg;
            case 35675:
                return Og;
            case 35676:
                return Bg;
            case 5124:
            case 35670:
                return zg;
            case 35667:
            case 35671:
                return kg;
            case 35668:
            case 35672:
                return Vg;
            case 35669:
            case 35673:
                return Hg;
            case 5125:
                return Gg;
            case 36294:
                return Wg;
            case 36295:
                return Xg;
            case 36296:
                return qg;
            case 35678:
            case 36198:
            case 36298:
            case 36306:
            case 35682:
                return Yg;
            case 35679:
            case 36299:
            case 36307:
                return Zg;
            case 35680:
            case 36300:
            case 36308:
            case 36293:
                return $g;
            case 36289:
            case 36303:
            case 36311:
            case 36292:
                return Jg
        }
    }
    function jg(n, t) {
        n.uniform1fv(this.addr, t)
    }
    function Qg(n, t) {
        let e = hs(t, this.size, 2);
        n.uniform2fv(this.addr, e)
    }
    function t_(n, t) {
        let e = hs(t, this.size, 3);
        n.uniform3fv(this.addr, e)
    }
    function e_(n, t) {
        let e = hs(t, this.size, 4);
        n.uniform4fv(this.addr, e)
    }
    function n_(n, t) {
        let e = hs(t, this.size, 4);
        n.uniformMatrix2fv(this.addr, !1, e)
    }
    function i_(n, t) {
        let e = hs(t, this.size, 9);
        n.uniformMatrix3fv(this.addr, !1, e)
    }
    function s_(n, t) {
        let e = hs(t, this.size, 16);
        n.uniformMatrix4fv(this.addr, !1, e)
    }
    function r_(n, t) {
        n.uniform1iv(this.addr, t)
    }
    function o_(n, t) {
        n.uniform2iv(this.addr, t)
    }
    function a_(n, t) {
        n.uniform3iv(this.addr, t)
    }
    function l_(n, t) {
        n.uniform4iv(this.addr, t)
    }
    function c_(n, t) {
        n.uniform1uiv(this.addr, t)
    }
    function h_(n, t) {
        n.uniform2uiv(this.addr, t)
    }
    function u_(n, t) {
        n.uniform3uiv(this.addr, t)
    }
    function d_(n, t) {
        n.uniform4uiv(this.addr, t)
    }
    function f_(n, t, e) {
        let i = this.cache
            , s = t.length
            , r = la(e, s);
        xe(i, r) || (n.uniform1iv(this.addr, r),
            ye(i, r));
        for (let o = 0; o !== s; ++o)
            e.setTexture2D(t[o] || Vu, r[o])
    }
    function p_(n, t, e) {
        let i = this.cache
            , s = t.length
            , r = la(e, s);
        xe(i, r) || (n.uniform1iv(this.addr, r),
            ye(i, r));
        for (let o = 0; o !== s; ++o)
            e.setTexture3D(t[o] || Gu, r[o])
    }
    function m_(n, t, e) {
        let i = this.cache
            , s = t.length
            , r = la(e, s);
        xe(i, r) || (n.uniform1iv(this.addr, r),
            ye(i, r));
        for (let o = 0; o !== s; ++o)
            e.setTextureCube(t[o] || Wu, r[o])
    }
    function g_(n, t, e) {
        let i = this.cache
            , s = t.length
            , r = la(e, s);
        xe(i, r) || (n.uniform1iv(this.addr, r),
            ye(i, r));
        for (let o = 0; o !== s; ++o)
            e.setTexture2DArray(t[o] || Hu, r[o])
    }
    function __(n) {
        switch (n) {
            case 5126:
                return jg;
            case 35664:
                return Qg;
            case 35665:
                return t_;
            case 35666:
                return e_;
            case 35674:
                return n_;
            case 35675:
                return i_;
            case 35676:
                return s_;
            case 5124:
            case 35670:
                return r_;
            case 35667:
            case 35671:
                return o_;
            case 35668:
            case 35672:
                return a_;
            case 35669:
            case 35673:
                return l_;
            case 5125:
                return c_;
            case 36294:
                return h_;
            case 36295:
                return u_;
            case 36296:
                return d_;
            case 35678:
            case 36198:
            case 36298:
            case 36306:
            case 35682:
                return f_;
            case 35679:
            case 36299:
            case 36307:
                return p_;
            case 35680:
            case 36300:
            case 36308:
            case 36293:
                return m_;
            case 36289:
            case 36303:
            case 36311:
            case 36292:
                return g_
        }
    }
    var Kl = class {
        constructor(t, e, i) {
            this.id = t,
                this.addr = i,
                this.cache = [],
                this.type = e.type,
                this.setValue = Kg(e.type)
        }
    }
        , jl = class {
            constructor(t, e, i) {
                this.id = t,
                    this.addr = i,
                    this.cache = [],
                    this.type = e.type,
                    this.size = e.size,
                    this.setValue = __(e.type)
            }
        }
        , Ql = class {
            constructor(t) {
                this.id = t,
                    this.seq = [],
                    this.map = {}
            }
            setValue(t, e, i) {
                let s = this.seq;
                for (let r = 0, o = s.length; r !== o; ++r) {
                    let a = s[r];
                    a.setValue(t, e[a.id], i)
                }
            }
        }
        , Jl = /(\w+)(\])?(\[|\.)?/g;
    function Ru(n, t) {
        n.seq.push(t),
            n.map[t.id] = t
    }
    function v_(n, t, e) {
        let i = n.name
            , s = i.length;
        for (Jl.lastIndex = 0; ;) {
            let r = Jl.exec(i)
                , o = Jl.lastIndex
                , a = r[1]
                , c = r[2] === "]"
                , l = r[3];
            if (c && (a = a | 0),
                l === void 0 || l === "[" && o + 2 === s) {
                Ru(e, l === void 0 ? new Kl(a, n, t) : new jl(a, n, t));
                break
            } else {
                let h = e.map[a];
                h === void 0 && (h = new Ql(a),
                    Ru(e, h)),
                    e = h
            }
        }
    }
    var cs = class {
        constructor(t, e) {
            this.seq = [],
                this.map = {};
            let i = t.getProgramParameter(e, t.ACTIVE_UNIFORMS);
            for (let s = 0; s < i; ++s) {
                let r = t.getActiveUniform(e, s)
                    , o = t.getUniformLocation(e, r.name);
                v_(r, o, this)
            }
        }
        setValue(t, e, i, s) {
            let r = this.map[e];
            r !== void 0 && r.setValue(t, i, s)
        }
        setOptional(t, e, i) {
            let s = e[i];
            s !== void 0 && this.setValue(t, i, s)
        }
        static upload(t, e, i, s) {
            for (let r = 0, o = e.length; r !== o; ++r) {
                let a = e[r]
                    , c = i[a.id];
                c.needsUpdate !== !1 && a.setValue(t, c.value, s)
            }
        }
        static seqWithValue(t, e) {
            let i = [];
            for (let s = 0, r = t.length; s !== r; ++s) {
                let o = t[s];
                o.id in e && i.push(o)
            }
            return i
        }
    }
        ;
    function Pu(n, t, e) {
        let i = n.createShader(t);
        return n.shaderSource(i, e),
            n.compileShader(i),
            i
    }
    var x_ = 37297
        , y_ = 0;
    function M_(n, t) {
        let e = n.split(`
`)
            , i = []
            , s = Math.max(t - 6, 0)
            , r = Math.min(t + 6, e.length);
        for (let o = s; o < r; o++) {
            let a = o + 1;
            i.push(`${a === t ? ">" : " "} ${a}: ${e[o]}`)
        }
        return i.join(`
`)
    }
    var Iu = new Nt;
    function S_(n) {
        Gt._getMatrix(Iu, Gt.workingColorSpace, n);
        let t = `mat3( ${Iu.elements.map(e => e.toFixed(4))} )`;
        switch (Gt.getTransfer(n)) {
            case Rs:
                return [t, "LinearTransferOETF"];
            case Zt:
                return [t, "sRGBTransferOETF"];
            default:
                return console.warn("THREE.WebGLProgram: Unsupported color space: ", n),
                    [t, "LinearTransferOETF"]
        }
    }
    function Du(n, t, e) {
        let i = n.getShaderParameter(t, n.COMPILE_STATUS)
            , r = (n.getShaderInfoLog(t) || "").trim();
        if (i && r === "")
            return "";
        let o = /ERROR: 0:(\d+)/.exec(r);
        if (o) {
            let a = parseInt(o[1]);
            return e.toUpperCase() + `

` + r + `

` + M_(n.getShaderSource(t), a)
        } else
            return r
    }
    function b_(n, t) {
        let e = S_(t);
        return [`vec4 ${n}( vec4 value ) {`, `	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`, "}"].join(`
`)
    }
    function T_(n, t) {
        let e;
        switch (t) {
            case $h:
                e = "Linear";
                break;
            case Jh:
                e = "Reinhard";
                break;
            case Kh:
                e = "Cineon";
                break;
            case yo:
                e = "ACESFilmic";
                break;
            case Qh:
                e = "AgX";
                break;
            case tu:
                e = "Neutral";
                break;
            case jh:
                e = "Custom";
                break;
            default:
                console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t),
                    e = "Linear"
        }
        return "vec3 " + n + "( vec3 color ) { return " + e + "ToneMapping( color ); }"
    }
    var sa = new P;
    function E_() {
        Gt.getLuminanceCoefficients(sa);
        let n = sa.x.toFixed(4)
            , t = sa.y.toFixed(4)
            , e = sa.z.toFixed(4);
        return ["float luminance( const in vec3 rgb ) {", `	const vec3 weights = vec3( ${n}, ${t}, ${e} );`, "	return dot( weights, rgb );", "}"].join(`
`)
    }
    function w_(n) {
        return [n.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", n.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(tr).join(`
`)
    }
    function A_(n) {
        let t = [];
        for (let e in n) {
            let i = n[e];
            i !== !1 && t.push("#define " + e + " " + i)
        }
        return t.join(`
`)
    }
    function C_(n, t) {
        let e = {}
            , i = n.getProgramParameter(t, n.ACTIVE_ATTRIBUTES);
        for (let s = 0; s < i; s++) {
            let r = n.getActiveAttrib(t, s)
                , o = r.name
                , a = 1;
            r.type === n.FLOAT_MAT2 && (a = 2),
                r.type === n.FLOAT_MAT3 && (a = 3),
                r.type === n.FLOAT_MAT4 && (a = 4),
                e[o] = {
                    type: r.type,
                    location: n.getAttribLocation(t, o),
                    locationSize: a
                }
        }
        return e
    }
    function tr(n) {
        return n !== ""
    }
    function Lu(n, t) {
        let e = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
        return n.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, e).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows)
    }
    function Uu(n, t) {
        return n.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection)
    }
    var R_ = /^[ \t]*#include +<([\w\d./]+)>/gm;
    function tc(n) {
        return n.replace(R_, I_)
    }
    var P_ = new Map;
    function I_(n, t) {
        let e = Ot[t];
        if (e === void 0) {
            let i = P_.get(t);
            if (i !== void 0)
                e = Ot[i],
                    console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', t, i);
            else
                throw new Error("Can not resolve #include <" + t + ">")
        }
        return tc(e)
    }
    var D_ = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
    function Nu(n) {
        return n.replace(D_, L_)
    }
    function L_(n, t, e, i) {
        let s = "";
        for (let r = parseInt(t); r < parseInt(e); r++)
            s += i.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r);
        return s
    }
    function Fu(n) {
        let t = `precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;
        return n.precision === "highp" ? t += `
#define HIGH_PRECISION` : n.precision === "mediump" ? t += `
#define MEDIUM_PRECISION` : n.precision === "lowp" && (t += `
#define LOW_PRECISION`),
            t
    }
    function U_(n) {
        let t = "SHADOWMAP_TYPE_BASIC";
        return n.shadowMapType === bl ? t = "SHADOWMAP_TYPE_PCF" : n.shadowMapType === Ch ? t = "SHADOWMAP_TYPE_PCF_SOFT" : n.shadowMapType === xn && (t = "SHADOWMAP_TYPE_VSM"),
            t
    }
    function N_(n) {
        let t = "ENVMAP_TYPE_CUBE";
        if (n.envMap)
            switch (n.envMapMode) {
                case yi:
                case Mi:
                    t = "ENVMAP_TYPE_CUBE";
                    break;
                case Ys:
                    t = "ENVMAP_TYPE_CUBE_UV";
                    break
            }
        return t
    }
    function F_(n) {
        let t = "ENVMAP_MODE_REFLECTION";
        if (n.envMap)
            switch (n.envMapMode) {
                case Mi:
                    t = "ENVMAP_MODE_REFRACTION";
                    break
            }
        return t
    }
    function O_(n) {
        let t = "ENVMAP_BLENDING_NONE";
        if (n.envMap)
            switch (n.combine) {
                case wl:
                    t = "ENVMAP_BLENDING_MULTIPLY";
                    break;
                case Yh:
                    t = "ENVMAP_BLENDING_MIX";
                    break;
                case Zh:
                    t = "ENVMAP_BLENDING_ADD";
                    break
            }
        return t
    }
    function B_(n) {
        let t = n.envMapCubeUVHeight;
        if (t === null)
            return null;
        let e = Math.log2(t) - 2
            , i = 1 / t;
        return {
            texelWidth: 1 / (3 * Math.max(Math.pow(2, e), 112)),
            texelHeight: i,
            maxMip: e
        }
    }
    function z_(n, t, e, i) {
        let s = n.getContext(), r = e.defines, o = e.vertexShader, a = e.fragmentShader, c = U_(e), l = N_(e), d = F_(e), h = O_(e), f = B_(e), p = w_(e), v = A_(r), g = s.createProgram(), m, u, E = e.glslVersion ? "#version " + e.glslVersion + `
` : "";
        e.isRawShaderMaterial ? (m = ["#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, v].filter(tr).join(`
`),
            m.length > 0 && (m += `
`),
            u = ["#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, v].filter(tr).join(`
`),
            u.length > 0 && (u += `
`)) : (m = [Fu(e), "#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, v, e.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", e.batching ? "#define USE_BATCHING" : "", e.batchingColor ? "#define USE_BATCHING_COLOR" : "", e.instancing ? "#define USE_INSTANCING" : "", e.instancingColor ? "#define USE_INSTANCING_COLOR" : "", e.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", e.useFog && e.fog ? "#define USE_FOG" : "", e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "", e.map ? "#define USE_MAP" : "", e.envMap ? "#define USE_ENVMAP" : "", e.envMap ? "#define " + d : "", e.lightMap ? "#define USE_LIGHTMAP" : "", e.aoMap ? "#define USE_AOMAP" : "", e.bumpMap ? "#define USE_BUMPMAP" : "", e.normalMap ? "#define USE_NORMALMAP" : "", e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", e.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", e.emissiveMap ? "#define USE_EMISSIVEMAP" : "", e.anisotropy ? "#define USE_ANISOTROPY" : "", e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", e.specularMap ? "#define USE_SPECULARMAP" : "", e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", e.metalnessMap ? "#define USE_METALNESSMAP" : "", e.alphaMap ? "#define USE_ALPHAMAP" : "", e.alphaHash ? "#define USE_ALPHAHASH" : "", e.transmission ? "#define USE_TRANSMISSION" : "", e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", e.thicknessMap ? "#define USE_THICKNESSMAP" : "", e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", e.mapUv ? "#define MAP_UV " + e.mapUv : "", e.alphaMapUv ? "#define ALPHAMAP_UV " + e.alphaMapUv : "", e.lightMapUv ? "#define LIGHTMAP_UV " + e.lightMapUv : "", e.aoMapUv ? "#define AOMAP_UV " + e.aoMapUv : "", e.emissiveMapUv ? "#define EMISSIVEMAP_UV " + e.emissiveMapUv : "", e.bumpMapUv ? "#define BUMPMAP_UV " + e.bumpMapUv : "", e.normalMapUv ? "#define NORMALMAP_UV " + e.normalMapUv : "", e.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + e.displacementMapUv : "", e.metalnessMapUv ? "#define METALNESSMAP_UV " + e.metalnessMapUv : "", e.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + e.roughnessMapUv : "", e.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + e.anisotropyMapUv : "", e.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + e.clearcoatMapUv : "", e.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + e.clearcoatNormalMapUv : "", e.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + e.clearcoatRoughnessMapUv : "", e.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + e.iridescenceMapUv : "", e.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + e.iridescenceThicknessMapUv : "", e.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + e.sheenColorMapUv : "", e.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + e.sheenRoughnessMapUv : "", e.specularMapUv ? "#define SPECULARMAP_UV " + e.specularMapUv : "", e.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + e.specularColorMapUv : "", e.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + e.specularIntensityMapUv : "", e.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + e.transmissionMapUv : "", e.thicknessMapUv ? "#define THICKNESSMAP_UV " + e.thicknessMapUv : "", e.vertexTangents && e.flatShading === !1 ? "#define USE_TANGENT" : "", e.vertexColors ? "#define USE_COLOR" : "", e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", e.vertexUv1s ? "#define USE_UV1" : "", e.vertexUv2s ? "#define USE_UV2" : "", e.vertexUv3s ? "#define USE_UV3" : "", e.pointsUvs ? "#define USE_POINTS_UV" : "", e.flatShading ? "#define FLAT_SHADED" : "", e.skinning ? "#define USE_SKINNING" : "", e.morphTargets ? "#define USE_MORPHTARGETS" : "", e.morphNormals && e.flatShading === !1 ? "#define USE_MORPHNORMALS" : "", e.morphColors ? "#define USE_MORPHCOLORS" : "", e.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + e.morphTextureStride : "", e.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + e.morphTargetsCount : "", e.doubleSided ? "#define DOUBLE_SIDED" : "", e.flipSided ? "#define FLIP_SIDED" : "", e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", e.shadowMapEnabled ? "#define " + c : "", e.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", e.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", e.reversedDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "	uniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(tr).join(`
`),
            u = [Fu(e), "#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, v, e.useFog && e.fog ? "#define USE_FOG" : "", e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "", e.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", e.map ? "#define USE_MAP" : "", e.matcap ? "#define USE_MATCAP" : "", e.envMap ? "#define USE_ENVMAP" : "", e.envMap ? "#define " + l : "", e.envMap ? "#define " + d : "", e.envMap ? "#define " + h : "", f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "", f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "", f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "", e.lightMap ? "#define USE_LIGHTMAP" : "", e.aoMap ? "#define USE_AOMAP" : "", e.bumpMap ? "#define USE_BUMPMAP" : "", e.normalMap ? "#define USE_NORMALMAP" : "", e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", e.emissiveMap ? "#define USE_EMISSIVEMAP" : "", e.anisotropy ? "#define USE_ANISOTROPY" : "", e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", e.clearcoat ? "#define USE_CLEARCOAT" : "", e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", e.dispersion ? "#define USE_DISPERSION" : "", e.iridescence ? "#define USE_IRIDESCENCE" : "", e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", e.specularMap ? "#define USE_SPECULARMAP" : "", e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", e.metalnessMap ? "#define USE_METALNESSMAP" : "", e.alphaMap ? "#define USE_ALPHAMAP" : "", e.alphaTest ? "#define USE_ALPHATEST" : "", e.alphaHash ? "#define USE_ALPHAHASH" : "", e.sheen ? "#define USE_SHEEN" : "", e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", e.transmission ? "#define USE_TRANSMISSION" : "", e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", e.thicknessMap ? "#define USE_THICKNESSMAP" : "", e.vertexTangents && e.flatShading === !1 ? "#define USE_TANGENT" : "", e.vertexColors || e.instancingColor || e.batchingColor ? "#define USE_COLOR" : "", e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", e.vertexUv1s ? "#define USE_UV1" : "", e.vertexUv2s ? "#define USE_UV2" : "", e.vertexUv3s ? "#define USE_UV3" : "", e.pointsUvs ? "#define USE_POINTS_UV" : "", e.gradientMap ? "#define USE_GRADIENTMAP" : "", e.flatShading ? "#define FLAT_SHADED" : "", e.doubleSided ? "#define DOUBLE_SIDED" : "", e.flipSided ? "#define FLIP_SIDED" : "", e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", e.shadowMapEnabled ? "#define " + c : "", e.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", e.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", e.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "", e.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", e.reversedDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", e.toneMapping !== Un ? "#define TONE_MAPPING" : "", e.toneMapping !== Un ? Ot.tonemapping_pars_fragment : "", e.toneMapping !== Un ? T_("toneMapping", e.toneMapping) : "", e.dithering ? "#define DITHERING" : "", e.opaque ? "#define OPAQUE" : "", Ot.colorspace_pars_fragment, b_("linearToOutputTexel", e.outputColorSpace), E_(), e.useDepthPacking ? "#define DEPTH_PACKING " + e.depthPacking : "", `
`].filter(tr).join(`
`)),
            o = tc(o),
            o = Lu(o, e),
            o = Uu(o, e),
            a = tc(a),
            a = Lu(a, e),
            a = Uu(a, e),
            o = Nu(o),
            a = Nu(a),
            e.isRawShaderMaterial !== !0 && (E = `#version 300 es
`,
                m = [p, "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
` + m,
                u = ["#define varying in", e.glslVersion === Ol ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", e.glslVersion === Ol ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
` + u);
        let T = E + m + o
            , y = E + u + a
            , C = Pu(s, s.VERTEX_SHADER, T)
            , R = Pu(s, s.FRAGMENT_SHADER, y);
        s.attachShader(g, C),
            s.attachShader(g, R),
            e.index0AttributeName !== void 0 ? s.bindAttribLocation(g, 0, e.index0AttributeName) : e.morphTargets === !0 && s.bindAttribLocation(g, 0, "position"),
            s.linkProgram(g);
        function D(w) {
            if (n.debug.checkShaderErrors) {
                let V = s.getProgramInfoLog(g) || ""
                    , H = s.getShaderInfoLog(C) || ""
                    , z = s.getShaderInfoLog(R) || ""
                    , Z = V.trim()
                    , q = H.trim()
                    , tt = z.trim()
                    , k = !0
                    , rt = !0;
                if (s.getProgramParameter(g, s.LINK_STATUS) === !1)
                    if (k = !1,
                        typeof n.debug.onShaderError == "function")
                        n.debug.onShaderError(s, g, C, R);
                    else {
                        let ht = Du(s, C, "vertex")
                            , bt = Du(s, R, "fragment");
                        console.error("THREE.WebGLProgram: Shader Error " + s.getError() + " - VALIDATE_STATUS " + s.getProgramParameter(g, s.VALIDATE_STATUS) + `

Material Name: ` + w.name + `
Material Type: ` + w.type + `

Program Info Log: ` + Z + `
` + ht + `
` + bt)
                    }
                else
                    Z !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", Z) : (q === "" || tt === "") && (rt = !1);
                rt && (w.diagnostics = {
                    runnable: k,
                    programLog: Z,
                    vertexShader: {
                        log: q,
                        prefix: m
                    },
                    fragmentShader: {
                        log: tt,
                        prefix: u
                    }
                })
            }
            s.deleteShader(C),
                s.deleteShader(R),
                N = new cs(s, g),
                S = C_(s, g)
        }
        let N;
        this.getUniforms = function () {
            return N === void 0 && D(this),
                N
        }
            ;
        let S;
        this.getAttributes = function () {
            return S === void 0 && D(this),
                S
        }
            ;
        let M = e.rendererExtensionParallelShaderCompile === !1;
        return this.isReady = function () {
            return M === !1 && (M = s.getProgramParameter(g, x_)),
                M
        }
            ,
            this.destroy = function () {
                i.releaseStatesOfProgram(this),
                    s.deleteProgram(g),
                    this.program = void 0
            }
            ,
            this.type = e.shaderType,
            this.name = e.shaderName,
            this.id = y_++,
            this.cacheKey = t,
            this.usedTimes = 1,
            this.program = g,
            this.vertexShader = C,
            this.fragmentShader = R,
            this
    }
    var k_ = 0
        , ec = class {
            constructor() {
                this.shaderCache = new Map,
                    this.materialCache = new Map
            }
            update(t) {
                let e = t.vertexShader
                    , i = t.fragmentShader
                    , s = this._getShaderStage(e)
                    , r = this._getShaderStage(i)
                    , o = this._getShaderCacheForMaterial(t);
                return o.has(s) === !1 && (o.add(s),
                    s.usedTimes++),
                    o.has(r) === !1 && (o.add(r),
                        r.usedTimes++),
                    this
            }
            remove(t) {
                let e = this.materialCache.get(t);
                for (let i of e)
                    i.usedTimes--,
                        i.usedTimes === 0 && this.shaderCache.delete(i.code);
                return this.materialCache.delete(t),
                    this
            }
            getVertexShaderID(t) {
                return this._getShaderStage(t.vertexShader).id
            }
            getFragmentShaderID(t) {
                return this._getShaderStage(t.fragmentShader).id
            }
            dispose() {
                this.shaderCache.clear(),
                    this.materialCache.clear()
            }
            _getShaderCacheForMaterial(t) {
                let e = this.materialCache
                    , i = e.get(t);
                return i === void 0 && (i = new Set,
                    e.set(t, i)),
                    i
            }
            _getShaderStage(t) {
                let e = this.shaderCache
                    , i = e.get(t);
                return i === void 0 && (i = new nc(t),
                    e.set(t, i)),
                    i
            }
        }
        , nc = class {
            constructor(t) {
                this.id = k_++,
                    this.code = t,
                    this.usedTimes = 0
            }
        }
        ;
    function V_(n, t, e, i, s, r, o) {
        let a = new Ls
            , c = new ec
            , l = new Set
            , d = []
            , h = s.logarithmicDepthBuffer
            , f = s.vertexTextures
            , p = s.precision
            , v = {
                MeshDepthMaterial: "depth",
                MeshDistanceMaterial: "distanceRGBA",
                MeshNormalMaterial: "normal",
                MeshBasicMaterial: "basic",
                MeshLambertMaterial: "lambert",
                MeshPhongMaterial: "phong",
                MeshToonMaterial: "toon",
                MeshStandardMaterial: "physical",
                MeshPhysicalMaterial: "physical",
                MeshMatcapMaterial: "matcap",
                LineBasicMaterial: "basic",
                LineDashedMaterial: "dashed",
                PointsMaterial: "points",
                ShadowMaterial: "shadow",
                SpriteMaterial: "sprite"
            };
        function g(S) {
            return l.add(S),
                S === 0 ? "uv" : `uv${S}`
        }
        function m(S, M, w, V, H) {
            let z = V.fog
                , Z = H.geometry
                , q = S.isMeshStandardMaterial ? V.environment : null
                , tt = (S.isMeshStandardMaterial ? e : t).get(S.envMap || q)
                , k = tt && tt.mapping === Ys ? tt.image.height : null
                , rt = v[S.type];
            S.precision !== null && (p = s.getMaxPrecision(S.precision),
                p !== S.precision && console.warn("THREE.WebGLProgram.getParameters:", S.precision, "not supported, using", p, "instead."));
            let ht = Z.morphAttributes.position || Z.morphAttributes.normal || Z.morphAttributes.color
                , bt = ht !== void 0 ? ht.length : 0
                , Bt = 0;
            Z.morphAttributes.position !== void 0 && (Bt = 1),
                Z.morphAttributes.normal !== void 0 && (Bt = 2),
                Z.morphAttributes.color !== void 0 && (Bt = 3);
            let ie, Kt, X, ot;
            if (rt) {
                let qt = bn[rt];
                ie = qt.vertexShader,
                    Kt = qt.fragmentShader
            } else
                ie = S.vertexShader,
                    Kt = S.fragmentShader,
                    c.update(S),
                    X = c.getVertexShaderID(S),
                    ot = c.getFragmentShaderID(S);
            let nt = n.getRenderTarget()
                , At = n.state.buffers.depth.getReversed()
                , Ct = H.isInstancedMesh === !0
                , Lt = H.isBatchedMesh === !0
                , ce = !!S.map
                , Ht = !!S.matcap
                , A = !!tt
                , Qt = !!S.aoMap
                , Et = !!S.lightMap
                , Xt = !!S.bumpMap
                , St = !!S.normalMap
                , se = !!S.displacementMap
                , ft = !!S.emissiveMap
                , zt = !!S.metalnessMap
                , Se = !!S.roughnessMap
                , he = S.anisotropy > 0
                , b = S.clearcoat > 0
                , _ = S.dispersion > 0
                , F = S.iridescence > 0
                , W = S.sheen > 0
                , $ = S.transmission > 0
                , G = he && !!S.anisotropyMap
                , yt = b && !!S.clearcoatMap
                , et = b && !!S.clearcoatNormalMap
                , gt = b && !!S.clearcoatRoughnessMap
                , vt = F && !!S.iridescenceMap
                , j = F && !!S.iridescenceThicknessMap
                , ct = W && !!S.sheenColorMap
                , Pt = W && !!S.sheenRoughnessMap
                , xt = !!S.specularMap
                , at = !!S.specularColorMap
                , Ft = !!S.specularIntensityMap
                , I = $ && !!S.transmissionMap
                , Q = $ && !!S.thicknessMap
                , it = !!S.gradientMap
                , dt = !!S.alphaMap
                , J = S.alphaTest > 0
                , Y = !!S.alphaHash
                , mt = !!S.extensions
                , Ut = Un;
            S.toneMapped && (nt === null || nt.isXRRenderTarget === !0) && (Ut = n.toneMapping);
            let te = {
                shaderID: rt,
                shaderType: S.type,
                shaderName: S.name,
                vertexShader: ie,
                fragmentShader: Kt,
                defines: S.defines,
                customVertexShaderID: X,
                customFragmentShaderID: ot,
                isRawShaderMaterial: S.isRawShaderMaterial === !0,
                glslVersion: S.glslVersion,
                precision: p,
                batching: Lt,
                batchingColor: Lt && H._colorsTexture !== null,
                instancing: Ct,
                instancingColor: Ct && H.instanceColor !== null,
                instancingMorph: Ct && H.morphTexture !== null,
                supportsVertexTextures: f,
                outputColorSpace: nt === null ? n.outputColorSpace : nt.isXRRenderTarget === !0 ? nt.texture.colorSpace : fi,
                alphaToCoverage: !!S.alphaToCoverage,
                map: ce,
                matcap: Ht,
                envMap: A,
                envMapMode: A && tt.mapping,
                envMapCubeUVHeight: k,
                aoMap: Qt,
                lightMap: Et,
                bumpMap: Xt,
                normalMap: St,
                displacementMap: f && se,
                emissiveMap: ft,
                normalMapObjectSpace: St && S.normalMapType === ru,
                normalMapTangentSpace: St && S.normalMapType === su,
                metalnessMap: zt,
                roughnessMap: Se,
                anisotropy: he,
                anisotropyMap: G,
                clearcoat: b,
                clearcoatMap: yt,
                clearcoatNormalMap: et,
                clearcoatRoughnessMap: gt,
                dispersion: _,
                iridescence: F,
                iridescenceMap: vt,
                iridescenceThicknessMap: j,
                sheen: W,
                sheenColorMap: ct,
                sheenRoughnessMap: Pt,
                specularMap: xt,
                specularColorMap: at,
                specularIntensityMap: Ft,
                transmission: $,
                transmissionMap: I,
                thicknessMap: Q,
                gradientMap: it,
                opaque: S.transparent === !1 && S.blending === ui && S.alphaToCoverage === !1,
                alphaMap: dt,
                alphaTest: J,
                alphaHash: Y,
                combine: S.combine,
                mapUv: ce && g(S.map.channel),
                aoMapUv: Qt && g(S.aoMap.channel),
                lightMapUv: Et && g(S.lightMap.channel),
                bumpMapUv: Xt && g(S.bumpMap.channel),
                normalMapUv: St && g(S.normalMap.channel),
                displacementMapUv: se && g(S.displacementMap.channel),
                emissiveMapUv: ft && g(S.emissiveMap.channel),
                metalnessMapUv: zt && g(S.metalnessMap.channel),
                roughnessMapUv: Se && g(S.roughnessMap.channel),
                anisotropyMapUv: G && g(S.anisotropyMap.channel),
                clearcoatMapUv: yt && g(S.clearcoatMap.channel),
                clearcoatNormalMapUv: et && g(S.clearcoatNormalMap.channel),
                clearcoatRoughnessMapUv: gt && g(S.clearcoatRoughnessMap.channel),
                iridescenceMapUv: vt && g(S.iridescenceMap.channel),
                iridescenceThicknessMapUv: j && g(S.iridescenceThicknessMap.channel),
                sheenColorMapUv: ct && g(S.sheenColorMap.channel),
                sheenRoughnessMapUv: Pt && g(S.sheenRoughnessMap.channel),
                specularMapUv: xt && g(S.specularMap.channel),
                specularColorMapUv: at && g(S.specularColorMap.channel),
                specularIntensityMapUv: Ft && g(S.specularIntensityMap.channel),
                transmissionMapUv: I && g(S.transmissionMap.channel),
                thicknessMapUv: Q && g(S.thicknessMap.channel),
                alphaMapUv: dt && g(S.alphaMap.channel),
                vertexTangents: !!Z.attributes.tangent && (St || he),
                vertexColors: S.vertexColors,
                vertexAlphas: S.vertexColors === !0 && !!Z.attributes.color && Z.attributes.color.itemSize === 4,
                pointsUvs: H.isPoints === !0 && !!Z.attributes.uv && (ce || dt),
                fog: !!z,
                useFog: S.fog === !0,
                fogExp2: !!z && z.isFogExp2,
                flatShading: S.flatShading === !0 && S.wireframe === !1,
                sizeAttenuation: S.sizeAttenuation === !0,
                logarithmicDepthBuffer: h,
                reversedDepthBuffer: At,
                skinning: H.isSkinnedMesh === !0,
                morphTargets: Z.morphAttributes.position !== void 0,
                morphNormals: Z.morphAttributes.normal !== void 0,
                morphColors: Z.morphAttributes.color !== void 0,
                morphTargetsCount: bt,
                morphTextureStride: Bt,
                numDirLights: M.directional.length,
                numPointLights: M.point.length,
                numSpotLights: M.spot.length,
                numSpotLightMaps: M.spotLightMap.length,
                numRectAreaLights: M.rectArea.length,
                numHemiLights: M.hemi.length,
                numDirLightShadows: M.directionalShadowMap.length,
                numPointLightShadows: M.pointShadowMap.length,
                numSpotLightShadows: M.spotShadowMap.length,
                numSpotLightShadowsWithMaps: M.numSpotLightShadowsWithMaps,
                numLightProbes: M.numLightProbes,
                numClippingPlanes: o.numPlanes,
                numClipIntersection: o.numIntersection,
                dithering: S.dithering,
                shadowMapEnabled: n.shadowMap.enabled && w.length > 0,
                shadowMapType: n.shadowMap.type,
                toneMapping: Ut,
                decodeVideoTexture: ce && S.map.isVideoTexture === !0 && Gt.getTransfer(S.map.colorSpace) === Zt,
                decodeVideoTextureEmissive: ft && S.emissiveMap.isVideoTexture === !0 && Gt.getTransfer(S.emissiveMap.colorSpace) === Zt,
                premultipliedAlpha: S.premultipliedAlpha,
                doubleSided: S.side === yn,
                flipSided: S.side === De,
                useDepthPacking: S.depthPacking >= 0,
                depthPacking: S.depthPacking || 0,
                index0AttributeName: S.index0AttributeName,
                extensionClipCullDistance: mt && S.extensions.clipCullDistance === !0 && i.has("WEBGL_clip_cull_distance"),
                extensionMultiDraw: (mt && S.extensions.multiDraw === !0 || Lt) && i.has("WEBGL_multi_draw"),
                rendererExtensionParallelShaderCompile: i.has("KHR_parallel_shader_compile"),
                customProgramCacheKey: S.customProgramCacheKey()
            };
            return te.vertexUv1s = l.has(1),
                te.vertexUv2s = l.has(2),
                te.vertexUv3s = l.has(3),
                l.clear(),
                te
        }
        function u(S) {
            let M = [];
            if (S.shaderID ? M.push(S.shaderID) : (M.push(S.customVertexShaderID),
                M.push(S.customFragmentShaderID)),
                S.defines !== void 0)
                for (let w in S.defines)
                    M.push(w),
                        M.push(S.defines[w]);
            return S.isRawShaderMaterial === !1 && (E(M, S),
                T(M, S),
                M.push(n.outputColorSpace)),
                M.push(S.customProgramCacheKey),
                M.join()
        }
        function E(S, M) {
            S.push(M.precision),
                S.push(M.outputColorSpace),
                S.push(M.envMapMode),
                S.push(M.envMapCubeUVHeight),
                S.push(M.mapUv),
                S.push(M.alphaMapUv),
                S.push(M.lightMapUv),
                S.push(M.aoMapUv),
                S.push(M.bumpMapUv),
                S.push(M.normalMapUv),
                S.push(M.displacementMapUv),
                S.push(M.emissiveMapUv),
                S.push(M.metalnessMapUv),
                S.push(M.roughnessMapUv),
                S.push(M.anisotropyMapUv),
                S.push(M.clearcoatMapUv),
                S.push(M.clearcoatNormalMapUv),
                S.push(M.clearcoatRoughnessMapUv),
                S.push(M.iridescenceMapUv),
                S.push(M.iridescenceThicknessMapUv),
                S.push(M.sheenColorMapUv),
                S.push(M.sheenRoughnessMapUv),
                S.push(M.specularMapUv),
                S.push(M.specularColorMapUv),
                S.push(M.specularIntensityMapUv),
                S.push(M.transmissionMapUv),
                S.push(M.thicknessMapUv),
                S.push(M.combine),
                S.push(M.fogExp2),
                S.push(M.sizeAttenuation),
                S.push(M.morphTargetsCount),
                S.push(M.morphAttributeCount),
                S.push(M.numDirLights),
                S.push(M.numPointLights),
                S.push(M.numSpotLights),
                S.push(M.numSpotLightMaps),
                S.push(M.numHemiLights),
                S.push(M.numRectAreaLights),
                S.push(M.numDirLightShadows),
                S.push(M.numPointLightShadows),
                S.push(M.numSpotLightShadows),
                S.push(M.numSpotLightShadowsWithMaps),
                S.push(M.numLightProbes),
                S.push(M.shadowMapType),
                S.push(M.toneMapping),
                S.push(M.numClippingPlanes),
                S.push(M.numClipIntersection),
                S.push(M.depthPacking)
        }
        function T(S, M) {
            a.disableAll(),
                M.supportsVertexTextures && a.enable(0),
                M.instancing && a.enable(1),
                M.instancingColor && a.enable(2),
                M.instancingMorph && a.enable(3),
                M.matcap && a.enable(4),
                M.envMap && a.enable(5),
                M.normalMapObjectSpace && a.enable(6),
                M.normalMapTangentSpace && a.enable(7),
                M.clearcoat && a.enable(8),
                M.iridescence && a.enable(9),
                M.alphaTest && a.enable(10),
                M.vertexColors && a.enable(11),
                M.vertexAlphas && a.enable(12),
                M.vertexUv1s && a.enable(13),
                M.vertexUv2s && a.enable(14),
                M.vertexUv3s && a.enable(15),
                M.vertexTangents && a.enable(16),
                M.anisotropy && a.enable(17),
                M.alphaHash && a.enable(18),
                M.batching && a.enable(19),
                M.dispersion && a.enable(20),
                M.batchingColor && a.enable(21),
                M.gradientMap && a.enable(22),
                S.push(a.mask),
                a.disableAll(),
                M.fog && a.enable(0),
                M.useFog && a.enable(1),
                M.flatShading && a.enable(2),
                M.logarithmicDepthBuffer && a.enable(3),
                M.reversedDepthBuffer && a.enable(4),
                M.skinning && a.enable(5),
                M.morphTargets && a.enable(6),
                M.morphNormals && a.enable(7),
                M.morphColors && a.enable(8),
                M.premultipliedAlpha && a.enable(9),
                M.shadowMapEnabled && a.enable(10),
                M.doubleSided && a.enable(11),
                M.flipSided && a.enable(12),
                M.useDepthPacking && a.enable(13),
                M.dithering && a.enable(14),
                M.transmission && a.enable(15),
                M.sheen && a.enable(16),
                M.opaque && a.enable(17),
                M.pointsUvs && a.enable(18),
                M.decodeVideoTexture && a.enable(19),
                M.decodeVideoTextureEmissive && a.enable(20),
                M.alphaToCoverage && a.enable(21),
                S.push(a.mask)
        }
        function y(S) {
            let M = v[S.type], w;
            if (M) {
                let V = bn[M];
                w = bi.clone(V.uniforms)
            } else
                w = S.uniforms;
            return w
        }
        function C(S, M) {
            let w;
            for (let V = 0, H = d.length; V < H; V++) {
                let z = d[V];
                if (z.cacheKey === M) {
                    w = z,
                        ++w.usedTimes;
                    break
                }
            }
            return w === void 0 && (w = new z_(n, M, S, r),
                d.push(w)),
                w
        }
        function R(S) {
            if (--S.usedTimes === 0) {
                let M = d.indexOf(S);
                d[M] = d[d.length - 1],
                    d.pop(),
                    S.destroy()
            }
        }
        function D(S) {
            c.remove(S)
        }
        function N() {
            c.dispose()
        }
        return {
            getParameters: m,
            getProgramCacheKey: u,
            getUniforms: y,
            acquireProgram: C,
            releaseProgram: R,
            releaseShaderCache: D,
            programs: d,
            dispose: N
        }
    }
    function H_() {
        let n = new WeakMap;
        function t(o) {
            return n.has(o)
        }
        function e(o) {
            let a = n.get(o);
            return a === void 0 && (a = {},
                n.set(o, a)),
                a
        }
        function i(o) {
            n.delete(o)
        }
        function s(o, a, c) {
            n.get(o)[a] = c
        }
        function r() {
            n = new WeakMap
        }
        return {
            has: t,
            get: e,
            remove: i,
            update: s,
            dispose: r
        }
    }
    function G_(n, t) {
        return n.groupOrder !== t.groupOrder ? n.groupOrder - t.groupOrder : n.renderOrder !== t.renderOrder ? n.renderOrder - t.renderOrder : n.material.id !== t.material.id ? n.material.id - t.material.id : n.z !== t.z ? n.z - t.z : n.id - t.id
    }
    function Ou(n, t) {
        return n.groupOrder !== t.groupOrder ? n.groupOrder - t.groupOrder : n.renderOrder !== t.renderOrder ? n.renderOrder - t.renderOrder : n.z !== t.z ? t.z - n.z : n.id - t.id
    }
    function Bu() {
        let n = []
            , t = 0
            , e = []
            , i = []
            , s = [];
        function r() {
            t = 0,
                e.length = 0,
                i.length = 0,
                s.length = 0
        }
        function o(h, f, p, v, g, m) {
            let u = n[t];
            return u === void 0 ? (u = {
                id: h.id,
                object: h,
                geometry: f,
                material: p,
                groupOrder: v,
                renderOrder: h.renderOrder,
                z: g,
                group: m
            },
                n[t] = u) : (u.id = h.id,
                    u.object = h,
                    u.geometry = f,
                    u.material = p,
                    u.groupOrder = v,
                    u.renderOrder = h.renderOrder,
                    u.z = g,
                    u.group = m),
                t++,
                u
        }
        function a(h, f, p, v, g, m) {
            let u = o(h, f, p, v, g, m);
            p.transmission > 0 ? i.push(u) : p.transparent === !0 ? s.push(u) : e.push(u)
        }
        function c(h, f, p, v, g, m) {
            let u = o(h, f, p, v, g, m);
            p.transmission > 0 ? i.unshift(u) : p.transparent === !0 ? s.unshift(u) : e.unshift(u)
        }
        function l(h, f) {
            e.length > 1 && e.sort(h || G_),
                i.length > 1 && i.sort(f || Ou),
                s.length > 1 && s.sort(f || Ou)
        }
        function d() {
            for (let h = t, f = n.length; h < f; h++) {
                let p = n[h];
                if (p.id === null)
                    break;
                p.id = null,
                    p.object = null,
                    p.geometry = null,
                    p.material = null,
                    p.group = null
            }
        }
        return {
            opaque: e,
            transmissive: i,
            transparent: s,
            init: r,
            push: a,
            unshift: c,
            finish: d,
            sort: l
        }
    }
    function W_() {
        let n = new WeakMap;
        function t(i, s) {
            let r = n.get(i), o;
            return r === void 0 ? (o = new Bu,
                n.set(i, [o])) : s >= r.length ? (o = new Bu,
                    r.push(o)) : o = r[s],
                o
        }
        function e() {
            n = new WeakMap
        }
        return {
            get: t,
            dispose: e
        }
    }
    function X_() {
        let n = {};
        return {
            get: function (t) {
                if (n[t.id] !== void 0)
                    return n[t.id];
                let e;
                switch (t.type) {
                    case "DirectionalLight":
                        e = {
                            direction: new P,
                            color: new Dt
                        };
                        break;
                    case "SpotLight":
                        e = {
                            position: new P,
                            direction: new P,
                            color: new Dt,
                            distance: 0,
                            coneCos: 0,
                            penumbraCos: 0,
                            decay: 0
                        };
                        break;
                    case "PointLight":
                        e = {
                            position: new P,
                            color: new Dt,
                            distance: 0,
                            decay: 0
                        };
                        break;
                    case "HemisphereLight":
                        e = {
                            direction: new P,
                            skyColor: new Dt,
                            groundColor: new Dt
                        };
                        break;
                    case "RectAreaLight":
                        e = {
                            color: new Dt,
                            position: new P,
                            halfWidth: new P,
                            halfHeight: new P
                        };
                        break
                }
                return n[t.id] = e,
                    e
            }
        }
    }
    function q_() {
        let n = {};
        return {
            get: function (t) {
                if (n[t.id] !== void 0)
                    return n[t.id];
                let e;
                switch (t.type) {
                    case "DirectionalLight":
                        e = {
                            shadowIntensity: 1,
                            shadowBias: 0,
                            shadowNormalBias: 0,
                            shadowRadius: 1,
                            shadowMapSize: new Mt
                        };
                        break;
                    case "SpotLight":
                        e = {
                            shadowIntensity: 1,
                            shadowBias: 0,
                            shadowNormalBias: 0,
                            shadowRadius: 1,
                            shadowMapSize: new Mt
                        };
                        break;
                    case "PointLight":
                        e = {
                            shadowIntensity: 1,
                            shadowBias: 0,
                            shadowNormalBias: 0,
                            shadowRadius: 1,
                            shadowMapSize: new Mt,
                            shadowCameraNear: 1,
                            shadowCameraFar: 1e3
                        };
                        break
                }
                return n[t.id] = e,
                    e
            }
        }
    }
    var Y_ = 0;
    function Z_(n, t) {
        return (t.castShadow ? 2 : 0) - (n.castShadow ? 2 : 0) + (t.map ? 1 : 0) - (n.map ? 1 : 0)
    }
    function $_(n) {
        let t = new X_
            , e = q_()
            , i = {
                version: 0,
                hash: {
                    directionalLength: -1,
                    pointLength: -1,
                    spotLength: -1,
                    rectAreaLength: -1,
                    hemiLength: -1,
                    numDirectionalShadows: -1,
                    numPointShadows: -1,
                    numSpotShadows: -1,
                    numSpotMaps: -1,
                    numLightProbes: -1
                },
                ambient: [0, 0, 0],
                probe: [],
                directional: [],
                directionalShadow: [],
                directionalShadowMap: [],
                directionalShadowMatrix: [],
                spot: [],
                spotLightMap: [],
                spotShadow: [],
                spotShadowMap: [],
                spotLightMatrix: [],
                rectArea: [],
                rectAreaLTC1: null,
                rectAreaLTC2: null,
                point: [],
                pointShadow: [],
                pointShadowMap: [],
                pointShadowMatrix: [],
                hemi: [],
                numSpotLightShadowsWithMaps: 0,
                numLightProbes: 0
            };
        for (let l = 0; l < 9; l++)
            i.probe.push(new P);
        let s = new P
            , r = new me
            , o = new me;
        function a(l) {
            let d = 0
                , h = 0
                , f = 0;
            for (let S = 0; S < 9; S++)
                i.probe[S].set(0, 0, 0);
            let p = 0
                , v = 0
                , g = 0
                , m = 0
                , u = 0
                , E = 0
                , T = 0
                , y = 0
                , C = 0
                , R = 0
                , D = 0;
            l.sort(Z_);
            for (let S = 0, M = l.length; S < M; S++) {
                let w = l[S]
                    , V = w.color
                    , H = w.intensity
                    , z = w.distance
                    , Z = w.shadow && w.shadow.map ? w.shadow.map.texture : null;
                if (w.isAmbientLight)
                    d += V.r * H,
                        h += V.g * H,
                        f += V.b * H;
                else if (w.isLightProbe) {
                    for (let q = 0; q < 9; q++)
                        i.probe[q].addScaledVector(w.sh.coefficients[q], H);
                    D++
                } else if (w.isDirectionalLight) {
                    let q = t.get(w);
                    if (q.color.copy(w.color).multiplyScalar(w.intensity),
                        w.castShadow) {
                        let tt = w.shadow
                            , k = e.get(w);
                        k.shadowIntensity = tt.intensity,
                            k.shadowBias = tt.bias,
                            k.shadowNormalBias = tt.normalBias,
                            k.shadowRadius = tt.radius,
                            k.shadowMapSize = tt.mapSize,
                            i.directionalShadow[p] = k,
                            i.directionalShadowMap[p] = Z,
                            i.directionalShadowMatrix[p] = w.shadow.matrix,
                            E++
                    }
                    i.directional[p] = q,
                        p++
                } else if (w.isSpotLight) {
                    let q = t.get(w);
                    q.position.setFromMatrixPosition(w.matrixWorld),
                        q.color.copy(V).multiplyScalar(H),
                        q.distance = z,
                        q.coneCos = Math.cos(w.angle),
                        q.penumbraCos = Math.cos(w.angle * (1 - w.penumbra)),
                        q.decay = w.decay,
                        i.spot[g] = q;
                    let tt = w.shadow;
                    if (w.map && (i.spotLightMap[C] = w.map,
                        C++,
                        tt.updateMatrices(w),
                        w.castShadow && R++),
                        i.spotLightMatrix[g] = tt.matrix,
                        w.castShadow) {
                        let k = e.get(w);
                        k.shadowIntensity = tt.intensity,
                            k.shadowBias = tt.bias,
                            k.shadowNormalBias = tt.normalBias,
                            k.shadowRadius = tt.radius,
                            k.shadowMapSize = tt.mapSize,
                            i.spotShadow[g] = k,
                            i.spotShadowMap[g] = Z,
                            y++
                    }
                    g++
                } else if (w.isRectAreaLight) {
                    let q = t.get(w);
                    q.color.copy(V).multiplyScalar(H),
                        q.halfWidth.set(w.width * .5, 0, 0),
                        q.halfHeight.set(0, w.height * .5, 0),
                        i.rectArea[m] = q,
                        m++
                } else if (w.isPointLight) {
                    let q = t.get(w);
                    if (q.color.copy(w.color).multiplyScalar(w.intensity),
                        q.distance = w.distance,
                        q.decay = w.decay,
                        w.castShadow) {
                        let tt = w.shadow
                            , k = e.get(w);
                        k.shadowIntensity = tt.intensity,
                            k.shadowBias = tt.bias,
                            k.shadowNormalBias = tt.normalBias,
                            k.shadowRadius = tt.radius,
                            k.shadowMapSize = tt.mapSize,
                            k.shadowCameraNear = tt.camera.near,
                            k.shadowCameraFar = tt.camera.far,
                            i.pointShadow[v] = k,
                            i.pointShadowMap[v] = Z,
                            i.pointShadowMatrix[v] = w.shadow.matrix,
                            T++
                    }
                    i.point[v] = q,
                        v++
                } else if (w.isHemisphereLight) {
                    let q = t.get(w);
                    q.skyColor.copy(w.color).multiplyScalar(H),
                        q.groundColor.copy(w.groundColor).multiplyScalar(H),
                        i.hemi[u] = q,
                        u++
                }
            }
            m > 0 && (n.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = st.LTC_FLOAT_1,
                i.rectAreaLTC2 = st.LTC_FLOAT_2) : (i.rectAreaLTC1 = st.LTC_HALF_1,
                    i.rectAreaLTC2 = st.LTC_HALF_2)),
                i.ambient[0] = d,
                i.ambient[1] = h,
                i.ambient[2] = f;
            let N = i.hash;
            (N.directionalLength !== p || N.pointLength !== v || N.spotLength !== g || N.rectAreaLength !== m || N.hemiLength !== u || N.numDirectionalShadows !== E || N.numPointShadows !== T || N.numSpotShadows !== y || N.numSpotMaps !== C || N.numLightProbes !== D) && (i.directional.length = p,
                i.spot.length = g,
                i.rectArea.length = m,
                i.point.length = v,
                i.hemi.length = u,
                i.directionalShadow.length = E,
                i.directionalShadowMap.length = E,
                i.pointShadow.length = T,
                i.pointShadowMap.length = T,
                i.spotShadow.length = y,
                i.spotShadowMap.length = y,
                i.directionalShadowMatrix.length = E,
                i.pointShadowMatrix.length = T,
                i.spotLightMatrix.length = y + C - R,
                i.spotLightMap.length = C,
                i.numSpotLightShadowsWithMaps = R,
                i.numLightProbes = D,
                N.directionalLength = p,
                N.pointLength = v,
                N.spotLength = g,
                N.rectAreaLength = m,
                N.hemiLength = u,
                N.numDirectionalShadows = E,
                N.numPointShadows = T,
                N.numSpotShadows = y,
                N.numSpotMaps = C,
                N.numLightProbes = D,
                i.version = Y_++)
        }
        function c(l, d) {
            let h = 0
                , f = 0
                , p = 0
                , v = 0
                , g = 0
                , m = d.matrixWorldInverse;
            for (let u = 0, E = l.length; u < E; u++) {
                let T = l[u];
                if (T.isDirectionalLight) {
                    let y = i.directional[h];
                    y.direction.setFromMatrixPosition(T.matrixWorld),
                        s.setFromMatrixPosition(T.target.matrixWorld),
                        y.direction.sub(s),
                        y.direction.transformDirection(m),
                        h++
                } else if (T.isSpotLight) {
                    let y = i.spot[p];
                    y.position.setFromMatrixPosition(T.matrixWorld),
                        y.position.applyMatrix4(m),
                        y.direction.setFromMatrixPosition(T.matrixWorld),
                        s.setFromMatrixPosition(T.target.matrixWorld),
                        y.direction.sub(s),
                        y.direction.transformDirection(m),
                        p++
                } else if (T.isRectAreaLight) {
                    let y = i.rectArea[v];
                    y.position.setFromMatrixPosition(T.matrixWorld),
                        y.position.applyMatrix4(m),
                        o.identity(),
                        r.copy(T.matrixWorld),
                        r.premultiply(m),
                        o.extractRotation(r),
                        y.halfWidth.set(T.width * .5, 0, 0),
                        y.halfHeight.set(0, T.height * .5, 0),
                        y.halfWidth.applyMatrix4(o),
                        y.halfHeight.applyMatrix4(o),
                        v++
                } else if (T.isPointLight) {
                    let y = i.point[f];
                    y.position.setFromMatrixPosition(T.matrixWorld),
                        y.position.applyMatrix4(m),
                        f++
                } else if (T.isHemisphereLight) {
                    let y = i.hemi[g];
                    y.direction.setFromMatrixPosition(T.matrixWorld),
                        y.direction.transformDirection(m),
                        g++
                }
            }
        }
        return {
            setup: a,
            setupView: c,
            state: i
        }
    }
    function zu(n) {
        let t = new $_(n)
            , e = []
            , i = [];
        function s(d) {
            l.camera = d,
                e.length = 0,
                i.length = 0
        }
        function r(d) {
            e.push(d)
        }
        function o(d) {
            i.push(d)
        }
        function a() {
            t.setup(e)
        }
        function c(d) {
            t.setupView(e, d)
        }
        let l = {
            lightsArray: e,
            shadowsArray: i,
            camera: null,
            lights: t,
            transmissionRenderTarget: {}
        };
        return {
            init: s,
            state: l,
            setupLights: a,
            setupLightsView: c,
            pushLight: r,
            pushShadow: o
        }
    }
    function J_(n) {
        let t = new WeakMap;
        function e(s, r = 0) {
            let o = t.get(s), a;
            return o === void 0 ? (a = new zu(n),
                t.set(s, [a])) : r >= o.length ? (a = new zu(n),
                    o.push(a)) : a = o[r],
                a
        }
        function i() {
            t = new WeakMap
        }
        return {
            get: e,
            dispose: i
        }
    }
    var K_ = `void main() {
	gl_Position = vec4( position, 1.0 );
}`
        , j_ = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
    function Q_(n, t, e) {
        let i = new ks
            , s = new Mt
            , r = new Mt
            , o = new le
            , a = new to({
                depthPacking: iu
            })
            , c = new eo
            , l = {}
            , d = e.maxTextureSize
            , h = {
                [Ln]: De,
                [De]: Ln,
                [yn]: yn
            }
            , f = new ve({
                defines: {
                    VSM_SAMPLES: 8
                },
                uniforms: {
                    shadow_pass: {
                        value: null
                    },
                    resolution: {
                        value: new Mt
                    },
                    radius: {
                        value: 4
                    }
                },
                vertexShader: K_,
                fragmentShader: j_
            })
            , p = f.clone();
        p.defines.HORIZONTAL_PASS = 1;
        let v = new $e;
        v.setAttribute("position", new qe(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]), 3));
        let g = new Fe(v, f)
            , m = this;
        this.enabled = !1,
            this.autoUpdate = !0,
            this.needsUpdate = !1,
            this.type = bl;
        let u = this.type;
        this.render = function (R, D, N) {
            if (m.enabled === !1 || m.autoUpdate === !1 && m.needsUpdate === !1 || R.length === 0)
                return;
            let S = n.getRenderTarget()
                , M = n.getActiveCubeFace()
                , w = n.getActiveMipmapLevel()
                , V = n.state;
            V.setBlending(un),
                V.buffers.depth.getReversed() ? V.buffers.color.setClear(0, 0, 0, 0) : V.buffers.color.setClear(1, 1, 1, 1),
                V.buffers.depth.setTest(!0),
                V.setScissorTest(!1);
            let H = u !== xn && this.type === xn
                , z = u === xn && this.type !== xn;
            for (let Z = 0, q = R.length; Z < q; Z++) {
                let tt = R[Z]
                    , k = tt.shadow;
                if (k === void 0) {
                    console.warn("THREE.WebGLShadowMap:", tt, "has no shadow.");
                    continue
                }
                if (k.autoUpdate === !1 && k.needsUpdate === !1)
                    continue;
                s.copy(k.mapSize);
                let rt = k.getFrameExtents();
                if (s.multiply(rt),
                    r.copy(k.mapSize),
                    (s.x > d || s.y > d) && (s.x > d && (r.x = Math.floor(d / rt.x),
                        s.x = r.x * rt.x,
                        k.mapSize.x = r.x),
                        s.y > d && (r.y = Math.floor(d / rt.y),
                            s.y = r.y * rt.y,
                            k.mapSize.y = r.y)),
                    k.map === null || H === !0 || z === !0) {
                    let bt = this.type !== xn ? {
                        minFilter: sn,
                        magFilter: sn
                    } : {};
                    k.map !== null && k.map.dispose(),
                        k.map = new Te(s.x, s.y, bt),
                        k.map.texture.name = tt.name + ".shadowMap",
                        k.camera.updateProjectionMatrix()
                }
                n.setRenderTarget(k.map),
                    n.clear();
                let ht = k.getViewportCount();
                for (let bt = 0; bt < ht; bt++) {
                    let Bt = k.getViewport(bt);
                    o.set(r.x * Bt.x, r.y * Bt.y, r.x * Bt.z, r.y * Bt.w),
                        V.viewport(o),
                        k.updateMatrices(tt, bt),
                        i = k.getFrustum(),
                        y(D, N, k.camera, tt, this.type)
                }
                k.isPointLightShadow !== !0 && this.type === xn && E(k, N),
                    k.needsUpdate = !1
            }
            u = this.type,
                m.needsUpdate = !1,
                n.setRenderTarget(S, M, w)
        }
            ;
        function E(R, D) {
            let N = t.update(g);
            f.defines.VSM_SAMPLES !== R.blurSamples && (f.defines.VSM_SAMPLES = R.blurSamples,
                p.defines.VSM_SAMPLES = R.blurSamples,
                f.needsUpdate = !0,
                p.needsUpdate = !0),
                R.mapPass === null && (R.mapPass = new Te(s.x, s.y)),
                f.uniforms.shadow_pass.value = R.map.texture,
                f.uniforms.resolution.value = R.mapSize,
                f.uniforms.radius.value = R.radius,
                n.setRenderTarget(R.mapPass),
                n.clear(),
                n.renderBufferDirect(D, null, N, f, g, null),
                p.uniforms.shadow_pass.value = R.mapPass.texture,
                p.uniforms.resolution.value = R.mapSize,
                p.uniforms.radius.value = R.radius,
                n.setRenderTarget(R.map),
                n.clear(),
                n.renderBufferDirect(D, null, N, p, g, null)
        }
        function T(R, D, N, S) {
            let M = null
                , w = N.isPointLight === !0 ? R.customDistanceMaterial : R.customDepthMaterial;
            if (w !== void 0)
                M = w;
            else if (M = N.isPointLight === !0 ? c : a,
                n.localClippingEnabled && D.clipShadows === !0 && Array.isArray(D.clippingPlanes) && D.clippingPlanes.length !== 0 || D.displacementMap && D.displacementScale !== 0 || D.alphaMap && D.alphaTest > 0 || D.map && D.alphaTest > 0 || D.alphaToCoverage === !0) {
                let V = M.uuid
                    , H = D.uuid
                    , z = l[V];
                z === void 0 && (z = {},
                    l[V] = z);
                let Z = z[H];
                Z === void 0 && (Z = M.clone(),
                    z[H] = Z,
                    D.addEventListener("dispose", C)),
                    M = Z
            }
            if (M.visible = D.visible,
                M.wireframe = D.wireframe,
                S === xn ? M.side = D.shadowSide !== null ? D.shadowSide : D.side : M.side = D.shadowSide !== null ? D.shadowSide : h[D.side],
                M.alphaMap = D.alphaMap,
                M.alphaTest = D.alphaToCoverage === !0 ? .5 : D.alphaTest,
                M.map = D.map,
                M.clipShadows = D.clipShadows,
                M.clippingPlanes = D.clippingPlanes,
                M.clipIntersection = D.clipIntersection,
                M.displacementMap = D.displacementMap,
                M.displacementScale = D.displacementScale,
                M.displacementBias = D.displacementBias,
                M.wireframeLinewidth = D.wireframeLinewidth,
                M.linewidth = D.linewidth,
                N.isPointLight === !0 && M.isMeshDistanceMaterial === !0) {
                let V = n.properties.get(M);
                V.light = N
            }
            return M
        }
        function y(R, D, N, S, M) {
            if (R.visible === !1)
                return;
            if (R.layers.test(D.layers) && (R.isMesh || R.isLine || R.isPoints) && (R.castShadow || R.receiveShadow && M === xn) && (!R.frustumCulled || i.intersectsObject(R))) {
                R.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse, R.matrixWorld);
                let H = t.update(R)
                    , z = R.material;
                if (Array.isArray(z)) {
                    let Z = H.groups;
                    for (let q = 0, tt = Z.length; q < tt; q++) {
                        let k = Z[q]
                            , rt = z[k.materialIndex];
                        if (rt && rt.visible) {
                            let ht = T(R, rt, S, M);
                            R.onBeforeShadow(n, R, D, N, H, ht, k),
                                n.renderBufferDirect(N, null, H, ht, R, k),
                                R.onAfterShadow(n, R, D, N, H, ht, k)
                        }
                    }
                } else if (z.visible) {
                    let Z = T(R, z, S, M);
                    R.onBeforeShadow(n, R, D, N, H, Z, null),
                        n.renderBufferDirect(N, null, H, Z, R, null),
                        R.onAfterShadow(n, R, D, N, H, Z, null)
                }
            }
            let V = R.children;
            for (let H = 0, z = V.length; H < z; H++)
                y(V[H], D, N, S, M)
        }
        function C(R) {
            R.target.removeEventListener("dispose", C);
            for (let N in l) {
                let S = l[N]
                    , M = R.target.uuid;
                M in S && (S[M].dispose(),
                    delete S[M])
            }
        }
    }
    var t0 = {
        [fo]: po,
        [mo]: vo,
        [go]: xo,
        [di]: _o,
        [po]: fo,
        [vo]: mo,
        [xo]: go,
        [_o]: di
    };
    function e0(n, t) {
        function e() {
            let I = !1
                , Q = new le
                , it = null
                , dt = new le(0, 0, 0, 0);
            return {
                setMask: function (J) {
                    it !== J && !I && (n.colorMask(J, J, J, J),
                        it = J)
                },
                setLocked: function (J) {
                    I = J
                },
                setClear: function (J, Y, mt, Ut, te) {
                    te === !0 && (J *= Ut,
                        Y *= Ut,
                        mt *= Ut),
                        Q.set(J, Y, mt, Ut),
                        dt.equals(Q) === !1 && (n.clearColor(J, Y, mt, Ut),
                            dt.copy(Q))
                },
                reset: function () {
                    I = !1,
                        it = null,
                        dt.set(-1, 0, 0, 0)
                }
            }
        }
        function i() {
            let I = !1
                , Q = !1
                , it = null
                , dt = null
                , J = null;
            return {
                setReversed: function (Y) {
                    if (Q !== Y) {
                        let mt = t.get("EXT_clip_control");
                        Y ? mt.clipControlEXT(mt.LOWER_LEFT_EXT, mt.ZERO_TO_ONE_EXT) : mt.clipControlEXT(mt.LOWER_LEFT_EXT, mt.NEGATIVE_ONE_TO_ONE_EXT),
                            Q = Y;
                        let Ut = J;
                        J = null,
                            this.setClear(Ut)
                    }
                },
                getReversed: function () {
                    return Q
                },
                setTest: function (Y) {
                    Y ? nt(n.DEPTH_TEST) : At(n.DEPTH_TEST)
                },
                setMask: function (Y) {
                    it !== Y && !I && (n.depthMask(Y),
                        it = Y)
                },
                setFunc: function (Y) {
                    if (Q && (Y = t0[Y]),
                        dt !== Y) {
                        switch (Y) {
                            case fo:
                                n.depthFunc(n.NEVER);
                                break;
                            case po:
                                n.depthFunc(n.ALWAYS);
                                break;
                            case mo:
                                n.depthFunc(n.LESS);
                                break;
                            case di:
                                n.depthFunc(n.LEQUAL);
                                break;
                            case go:
                                n.depthFunc(n.EQUAL);
                                break;
                            case _o:
                                n.depthFunc(n.GEQUAL);
                                break;
                            case vo:
                                n.depthFunc(n.GREATER);
                                break;
                            case xo:
                                n.depthFunc(n.NOTEQUAL);
                                break;
                            default:
                                n.depthFunc(n.LEQUAL)
                        }
                        dt = Y
                    }
                },
                setLocked: function (Y) {
                    I = Y
                },
                setClear: function (Y) {
                    J !== Y && (Q && (Y = 1 - Y),
                        n.clearDepth(Y),
                        J = Y)
                },
                reset: function () {
                    I = !1,
                        it = null,
                        dt = null,
                        J = null,
                        Q = !1
                }
            }
        }
        function s() {
            let I = !1
                , Q = null
                , it = null
                , dt = null
                , J = null
                , Y = null
                , mt = null
                , Ut = null
                , te = null;
            return {
                setTest: function (qt) {
                    I || (qt ? nt(n.STENCIL_TEST) : At(n.STENCIL_TEST))
                },
                setMask: function (qt) {
                    Q !== qt && !I && (n.stencilMask(qt),
                        Q = qt)
                },
                setFunc: function (qt, Tn, pn) {
                    (it !== qt || dt !== Tn || J !== pn) && (n.stencilFunc(qt, Tn, pn),
                        it = qt,
                        dt = Tn,
                        J = pn)
                },
                setOp: function (qt, Tn, pn) {
                    (Y !== qt || mt !== Tn || Ut !== pn) && (n.stencilOp(qt, Tn, pn),
                        Y = qt,
                        mt = Tn,
                        Ut = pn)
                },
                setLocked: function (qt) {
                    I = qt
                },
                setClear: function (qt) {
                    te !== qt && (n.clearStencil(qt),
                        te = qt)
                },
                reset: function () {
                    I = !1,
                        Q = null,
                        it = null,
                        dt = null,
                        J = null,
                        Y = null,
                        mt = null,
                        Ut = null,
                        te = null
                }
            }
        }
        let r = new e
            , o = new i
            , a = new s
            , c = new WeakMap
            , l = new WeakMap
            , d = {}
            , h = {}
            , f = new WeakMap
            , p = []
            , v = null
            , g = !1
            , m = null
            , u = null
            , E = null
            , T = null
            , y = null
            , C = null
            , R = null
            , D = new Dt(0, 0, 0)
            , N = 0
            , S = !1
            , M = null
            , w = null
            , V = null
            , H = null
            , z = null
            , Z = n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS)
            , q = !1
            , tt = 0
            , k = n.getParameter(n.VERSION);
        k.indexOf("WebGL") !== -1 ? (tt = parseFloat(/^WebGL (\d)/.exec(k)[1]),
            q = tt >= 1) : k.indexOf("OpenGL ES") !== -1 && (tt = parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),
                q = tt >= 2);
        let rt = null
            , ht = {}
            , bt = n.getParameter(n.SCISSOR_BOX)
            , Bt = n.getParameter(n.VIEWPORT)
            , ie = new le().fromArray(bt)
            , Kt = new le().fromArray(Bt);
        function X(I, Q, it, dt) {
            let J = new Uint8Array(4)
                , Y = n.createTexture();
            n.bindTexture(I, Y),
                n.texParameteri(I, n.TEXTURE_MIN_FILTER, n.NEAREST),
                n.texParameteri(I, n.TEXTURE_MAG_FILTER, n.NEAREST);
            for (let mt = 0; mt < it; mt++)
                I === n.TEXTURE_3D || I === n.TEXTURE_2D_ARRAY ? n.texImage3D(Q, 0, n.RGBA, 1, 1, dt, 0, n.RGBA, n.UNSIGNED_BYTE, J) : n.texImage2D(Q + mt, 0, n.RGBA, 1, 1, 0, n.RGBA, n.UNSIGNED_BYTE, J);
            return Y
        }
        let ot = {};
        ot[n.TEXTURE_2D] = X(n.TEXTURE_2D, n.TEXTURE_2D, 1),
            ot[n.TEXTURE_CUBE_MAP] = X(n.TEXTURE_CUBE_MAP, n.TEXTURE_CUBE_MAP_POSITIVE_X, 6),
            ot[n.TEXTURE_2D_ARRAY] = X(n.TEXTURE_2D_ARRAY, n.TEXTURE_2D_ARRAY, 1, 1),
            ot[n.TEXTURE_3D] = X(n.TEXTURE_3D, n.TEXTURE_3D, 1, 1),
            r.setClear(0, 0, 0, 1),
            o.setClear(1),
            a.setClear(0),
            nt(n.DEPTH_TEST),
            o.setFunc(di),
            Xt(!1),
            St(Sl),
            nt(n.CULL_FACE),
            Qt(un);
        function nt(I) {
            d[I] !== !0 && (n.enable(I),
                d[I] = !0)
        }
        function At(I) {
            d[I] !== !1 && (n.disable(I),
                d[I] = !1)
        }
        function Ct(I, Q) {
            return h[I] !== Q ? (n.bindFramebuffer(I, Q),
                h[I] = Q,
                I === n.DRAW_FRAMEBUFFER && (h[n.FRAMEBUFFER] = Q),
                I === n.FRAMEBUFFER && (h[n.DRAW_FRAMEBUFFER] = Q),
                !0) : !1
        }
        function Lt(I, Q) {
            let it = p
                , dt = !1;
            if (I) {
                it = f.get(Q),
                    it === void 0 && (it = [],
                        f.set(Q, it));
                let J = I.textures;
                if (it.length !== J.length || it[0] !== n.COLOR_ATTACHMENT0) {
                    for (let Y = 0, mt = J.length; Y < mt; Y++)
                        it[Y] = n.COLOR_ATTACHMENT0 + Y;
                    it.length = J.length,
                        dt = !0
                }
            } else
                it[0] !== n.BACK && (it[0] = n.BACK,
                    dt = !0);
            dt && n.drawBuffers(it)
        }
        function ce(I) {
            return v !== I ? (n.useProgram(I),
                v = I,
                !0) : !1
        }
        let Ht = {
            [qn]: n.FUNC_ADD,
            [Ph]: n.FUNC_SUBTRACT,
            [Ih]: n.FUNC_REVERSE_SUBTRACT
        };
        Ht[Dh] = n.MIN,
            Ht[Lh] = n.MAX;
        let A = {
            [Uh]: n.ZERO,
            [Nh]: n.ONE,
            [Fh]: n.SRC_COLOR,
            [Hr]: n.SRC_ALPHA,
            [Hh]: n.SRC_ALPHA_SATURATE,
            [kh]: n.DST_COLOR,
            [Bh]: n.DST_ALPHA,
            [Oh]: n.ONE_MINUS_SRC_COLOR,
            [Gr]: n.ONE_MINUS_SRC_ALPHA,
            [Vh]: n.ONE_MINUS_DST_COLOR,
            [zh]: n.ONE_MINUS_DST_ALPHA,
            [Gh]: n.CONSTANT_COLOR,
            [Wh]: n.ONE_MINUS_CONSTANT_COLOR,
            [Xh]: n.CONSTANT_ALPHA,
            [qh]: n.ONE_MINUS_CONSTANT_ALPHA
        };
        function Qt(I, Q, it, dt, J, Y, mt, Ut, te, qt) {
            if (I === un) {
                g === !0 && (At(n.BLEND),
                    g = !1);
                return
            }
            if (g === !1 && (nt(n.BLEND),
                g = !0),
                I !== Rh) {
                if (I !== m || qt !== S) {
                    if ((u !== qn || y !== qn) && (n.blendEquation(n.FUNC_ADD),
                        u = qn,
                        y = qn),
                        qt)
                        switch (I) {
                            case ui:
                                n.blendFuncSeparate(n.ONE, n.ONE_MINUS_SRC_ALPHA, n.ONE, n.ONE_MINUS_SRC_ALPHA);
                                break;
                            case xi:
                                n.blendFunc(n.ONE, n.ONE);
                                break;
                            case Tl:
                                n.blendFuncSeparate(n.ZERO, n.ONE_MINUS_SRC_COLOR, n.ZERO, n.ONE);
                                break;
                            case El:
                                n.blendFuncSeparate(n.DST_COLOR, n.ONE_MINUS_SRC_ALPHA, n.ZERO, n.ONE);
                                break;
                            default:
                                console.error("THREE.WebGLState: Invalid blending: ", I);
                                break
                        }
                    else
                        switch (I) {
                            case ui:
                                n.blendFuncSeparate(n.SRC_ALPHA, n.ONE_MINUS_SRC_ALPHA, n.ONE, n.ONE_MINUS_SRC_ALPHA);
                                break;
                            case xi:
                                n.blendFuncSeparate(n.SRC_ALPHA, n.ONE, n.ONE, n.ONE);
                                break;
                            case Tl:
                                console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");
                                break;
                            case El:
                                console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");
                                break;
                            default:
                                console.error("THREE.WebGLState: Invalid blending: ", I);
                                break
                        }
                    E = null,
                        T = null,
                        C = null,
                        R = null,
                        D.set(0, 0, 0),
                        N = 0,
                        m = I,
                        S = qt
                }
                return
            }
            J = J || Q,
                Y = Y || it,
                mt = mt || dt,
                (Q !== u || J !== y) && (n.blendEquationSeparate(Ht[Q], Ht[J]),
                    u = Q,
                    y = J),
                (it !== E || dt !== T || Y !== C || mt !== R) && (n.blendFuncSeparate(A[it], A[dt], A[Y], A[mt]),
                    E = it,
                    T = dt,
                    C = Y,
                    R = mt),
                (Ut.equals(D) === !1 || te !== N) && (n.blendColor(Ut.r, Ut.g, Ut.b, te),
                    D.copy(Ut),
                    N = te),
                m = I,
                S = !1
        }
        function Et(I, Q) {
            I.side === yn ? At(n.CULL_FACE) : nt(n.CULL_FACE);
            let it = I.side === De;
            Q && (it = !it),
                Xt(it),
                I.blending === ui && I.transparent === !1 ? Qt(un) : Qt(I.blending, I.blendEquation, I.blendSrc, I.blendDst, I.blendEquationAlpha, I.blendSrcAlpha, I.blendDstAlpha, I.blendColor, I.blendAlpha, I.premultipliedAlpha),
                o.setFunc(I.depthFunc),
                o.setTest(I.depthTest),
                o.setMask(I.depthWrite),
                r.setMask(I.colorWrite);
            let dt = I.stencilWrite;
            a.setTest(dt),
                dt && (a.setMask(I.stencilWriteMask),
                    a.setFunc(I.stencilFunc, I.stencilRef, I.stencilFuncMask),
                    a.setOp(I.stencilFail, I.stencilZFail, I.stencilZPass)),
                ft(I.polygonOffset, I.polygonOffsetFactor, I.polygonOffsetUnits),
                I.alphaToCoverage === !0 ? nt(n.SAMPLE_ALPHA_TO_COVERAGE) : At(n.SAMPLE_ALPHA_TO_COVERAGE)
        }
        function Xt(I) {
            M !== I && (I ? n.frontFace(n.CW) : n.frontFace(n.CCW),
                M = I)
        }
        function St(I) {
            I !== wh ? (nt(n.CULL_FACE),
                I !== w && (I === Sl ? n.cullFace(n.BACK) : I === Ah ? n.cullFace(n.FRONT) : n.cullFace(n.FRONT_AND_BACK))) : At(n.CULL_FACE),
                w = I
        }
        function se(I) {
            I !== V && (q && n.lineWidth(I),
                V = I)
        }
        function ft(I, Q, it) {
            I ? (nt(n.POLYGON_OFFSET_FILL),
                (H !== Q || z !== it) && (n.polygonOffset(Q, it),
                    H = Q,
                    z = it)) : At(n.POLYGON_OFFSET_FILL)
        }
        function zt(I) {
            I ? nt(n.SCISSOR_TEST) : At(n.SCISSOR_TEST)
        }
        function Se(I) {
            I === void 0 && (I = n.TEXTURE0 + Z - 1),
                rt !== I && (n.activeTexture(I),
                    rt = I)
        }
        function he(I, Q, it) {
            it === void 0 && (rt === null ? it = n.TEXTURE0 + Z - 1 : it = rt);
            let dt = ht[it];
            dt === void 0 && (dt = {
                type: void 0,
                texture: void 0
            },
                ht[it] = dt),
                (dt.type !== I || dt.texture !== Q) && (rt !== it && (n.activeTexture(it),
                    rt = it),
                    n.bindTexture(I, Q || ot[I]),
                    dt.type = I,
                    dt.texture = Q)
        }
        function b() {
            let I = ht[rt];
            I !== void 0 && I.type !== void 0 && (n.bindTexture(I.type, null),
                I.type = void 0,
                I.texture = void 0)
        }
        function _() {
            try {
                n.compressedTexImage2D(...arguments)
            } catch (I) {
                console.error("THREE.WebGLState:", I)
            }
        }
        function F() {
            try {
                n.compressedTexImage3D(...arguments)
            } catch (I) {
                console.error("THREE.WebGLState:", I)
            }
        }
        function W() {
            try {
                n.texSubImage2D(...arguments)
            } catch (I) {
                console.error("THREE.WebGLState:", I)
            }
        }
        function $() {
            try {
                n.texSubImage3D(...arguments)
            } catch (I) {
                console.error("THREE.WebGLState:", I)
            }
        }
        function G() {
            try {
                n.compressedTexSubImage2D(...arguments)
            } catch (I) {
                console.error("THREE.WebGLState:", I)
            }
        }
        function yt() {
            try {
                n.compressedTexSubImage3D(...arguments)
            } catch (I) {
                console.error("THREE.WebGLState:", I)
            }
        }
        function et() {
            try {
                n.texStorage2D(...arguments)
            } catch (I) {
                console.error("THREE.WebGLState:", I)
            }
        }
        function gt() {
            try {
                n.texStorage3D(...arguments)
            } catch (I) {
                console.error("THREE.WebGLState:", I)
            }
        }
        function vt() {
            try {
                n.texImage2D(...arguments)
            } catch (I) {
                console.error("THREE.WebGLState:", I)
            }
        }
        function j() {
            try {
                n.texImage3D(...arguments)
            } catch (I) {
                console.error("THREE.WebGLState:", I)
            }
        }
        function ct(I) {
            ie.equals(I) === !1 && (n.scissor(I.x, I.y, I.z, I.w),
                ie.copy(I))
        }
        function Pt(I) {
            Kt.equals(I) === !1 && (n.viewport(I.x, I.y, I.z, I.w),
                Kt.copy(I))
        }
        function xt(I, Q) {
            let it = l.get(Q);
            it === void 0 && (it = new WeakMap,
                l.set(Q, it));
            let dt = it.get(I);
            dt === void 0 && (dt = n.getUniformBlockIndex(Q, I.name),
                it.set(I, dt))
        }
        function at(I, Q) {
            let dt = l.get(Q).get(I);
            c.get(Q) !== dt && (n.uniformBlockBinding(Q, dt, I.__bindingPointIndex),
                c.set(Q, dt))
        }
        function Ft() {
            n.disable(n.BLEND),
                n.disable(n.CULL_FACE),
                n.disable(n.DEPTH_TEST),
                n.disable(n.POLYGON_OFFSET_FILL),
                n.disable(n.SCISSOR_TEST),
                n.disable(n.STENCIL_TEST),
                n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),
                n.blendEquation(n.FUNC_ADD),
                n.blendFunc(n.ONE, n.ZERO),
                n.blendFuncSeparate(n.ONE, n.ZERO, n.ONE, n.ZERO),
                n.blendColor(0, 0, 0, 0),
                n.colorMask(!0, !0, !0, !0),
                n.clearColor(0, 0, 0, 0),
                n.depthMask(!0),
                n.depthFunc(n.LESS),
                o.setReversed(!1),
                n.clearDepth(1),
                n.stencilMask(4294967295),
                n.stencilFunc(n.ALWAYS, 0, 4294967295),
                n.stencilOp(n.KEEP, n.KEEP, n.KEEP),
                n.clearStencil(0),
                n.cullFace(n.BACK),
                n.frontFace(n.CCW),
                n.polygonOffset(0, 0),
                n.activeTexture(n.TEXTURE0),
                n.bindFramebuffer(n.FRAMEBUFFER, null),
                n.bindFramebuffer(n.DRAW_FRAMEBUFFER, null),
                n.bindFramebuffer(n.READ_FRAMEBUFFER, null),
                n.useProgram(null),
                n.lineWidth(1),
                n.scissor(0, 0, n.canvas.width, n.canvas.height),
                n.viewport(0, 0, n.canvas.width, n.canvas.height),
                d = {},
                rt = null,
                ht = {},
                h = {},
                f = new WeakMap,
                p = [],
                v = null,
                g = !1,
                m = null,
                u = null,
                E = null,
                T = null,
                y = null,
                C = null,
                R = null,
                D = new Dt(0, 0, 0),
                N = 0,
                S = !1,
                M = null,
                w = null,
                V = null,
                H = null,
                z = null,
                ie.set(0, 0, n.canvas.width, n.canvas.height),
                Kt.set(0, 0, n.canvas.width, n.canvas.height),
                r.reset(),
                o.reset(),
                a.reset()
        }
        return {
            buffers: {
                color: r,
                depth: o,
                stencil: a
            },
            enable: nt,
            disable: At,
            bindFramebuffer: Ct,
            drawBuffers: Lt,
            useProgram: ce,
            setBlending: Qt,
            setMaterial: Et,
            setFlipSided: Xt,
            setCullFace: St,
            setLineWidth: se,
            setPolygonOffset: ft,
            setScissorTest: zt,
            activeTexture: Se,
            bindTexture: he,
            unbindTexture: b,
            compressedTexImage2D: _,
            compressedTexImage3D: F,
            texImage2D: vt,
            texImage3D: j,
            updateUBOMapping: xt,
            uniformBlockBinding: at,
            texStorage2D: et,
            texStorage3D: gt,
            texSubImage2D: W,
            texSubImage3D: $,
            compressedTexSubImage2D: G,
            compressedTexSubImage3D: yt,
            scissor: ct,
            viewport: Pt,
            reset: Ft
        }
    }
    function n0(n, t, e, i, s, r, o) {
        let a = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : null, c = typeof navigator == "undefined" ? !1 : /OculusBrowser/g.test(navigator.userAgent), l = new Mt, d = new WeakMap, h, f = new WeakMap, p = !1;
        try {
            p = typeof OffscreenCanvas != "undefined" && new OffscreenCanvas(1, 1).getContext("2d") !== null
        } catch (b) { }
        function v(b, _) {
            return p ? new OffscreenCanvas(b, _) : Is("canvas")
        }
        function g(b, _, F) {
            let W = 1
                , $ = he(b);
            if (($.width > F || $.height > F) && (W = F / Math.max($.width, $.height)),
                W < 1)
                if (typeof HTMLImageElement != "undefined" && b instanceof HTMLImageElement || typeof HTMLCanvasElement != "undefined" && b instanceof HTMLCanvasElement || typeof ImageBitmap != "undefined" && b instanceof ImageBitmap || typeof VideoFrame != "undefined" && b instanceof VideoFrame) {
                    let G = Math.floor(W * $.width)
                        , yt = Math.floor(W * $.height);
                    h === void 0 && (h = v(G, yt));
                    let et = _ ? v(G, yt) : h;
                    return et.width = G,
                        et.height = yt,
                        et.getContext("2d").drawImage(b, 0, 0, G, yt),
                        console.warn("THREE.WebGLRenderer: Texture has been resized from (" + $.width + "x" + $.height + ") to (" + G + "x" + yt + ")."),
                        et
                } else
                    return "data" in b && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + $.width + "x" + $.height + ")."),
                        b;
            return b
        }
        function m(b) {
            return b.generateMipmaps
        }
        function u(b) {
            n.generateMipmap(b)
        }
        function E(b) {
            return b.isWebGLCubeRenderTarget ? n.TEXTURE_CUBE_MAP : b.isWebGL3DRenderTarget ? n.TEXTURE_3D : b.isWebGLArrayRenderTarget || b.isCompressedArrayTexture ? n.TEXTURE_2D_ARRAY : n.TEXTURE_2D
        }
        function T(b, _, F, W, $ = !1) {
            if (b !== null) {
                if (n[b] !== void 0)
                    return n[b];
                console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + b + "'")
            }
            let G = _;
            if (_ === n.RED && (F === n.FLOAT && (G = n.R32F),
                F === n.HALF_FLOAT && (G = n.R16F),
                F === n.UNSIGNED_BYTE && (G = n.R8)),
                _ === n.RED_INTEGER && (F === n.UNSIGNED_BYTE && (G = n.R8UI),
                    F === n.UNSIGNED_SHORT && (G = n.R16UI),
                    F === n.UNSIGNED_INT && (G = n.R32UI),
                    F === n.BYTE && (G = n.R8I),
                    F === n.SHORT && (G = n.R16I),
                    F === n.INT && (G = n.R32I)),
                _ === n.RG && (F === n.FLOAT && (G = n.RG32F),
                    F === n.HALF_FLOAT && (G = n.RG16F),
                    F === n.UNSIGNED_BYTE && (G = n.RG8)),
                _ === n.RG_INTEGER && (F === n.UNSIGNED_BYTE && (G = n.RG8UI),
                    F === n.UNSIGNED_SHORT && (G = n.RG16UI),
                    F === n.UNSIGNED_INT && (G = n.RG32UI),
                    F === n.BYTE && (G = n.RG8I),
                    F === n.SHORT && (G = n.RG16I),
                    F === n.INT && (G = n.RG32I)),
                _ === n.RGB_INTEGER && (F === n.UNSIGNED_BYTE && (G = n.RGB8UI),
                    F === n.UNSIGNED_SHORT && (G = n.RGB16UI),
                    F === n.UNSIGNED_INT && (G = n.RGB32UI),
                    F === n.BYTE && (G = n.RGB8I),
                    F === n.SHORT && (G = n.RGB16I),
                    F === n.INT && (G = n.RGB32I)),
                _ === n.RGBA_INTEGER && (F === n.UNSIGNED_BYTE && (G = n.RGBA8UI),
                    F === n.UNSIGNED_SHORT && (G = n.RGBA16UI),
                    F === n.UNSIGNED_INT && (G = n.RGBA32UI),
                    F === n.BYTE && (G = n.RGBA8I),
                    F === n.SHORT && (G = n.RGBA16I),
                    F === n.INT && (G = n.RGBA32I)),
                _ === n.RGB && F === n.UNSIGNED_INT_5_9_9_9_REV && (G = n.RGB9_E5),
                _ === n.RGBA) {
                let yt = $ ? Rs : Gt.getTransfer(W);
                F === n.FLOAT && (G = n.RGBA32F),
                    F === n.HALF_FLOAT && (G = n.RGBA16F),
                    F === n.UNSIGNED_BYTE && (G = yt === Zt ? n.SRGB8_ALPHA8 : n.RGBA8),
                    F === n.UNSIGNED_SHORT_4_4_4_4 && (G = n.RGBA4),
                    F === n.UNSIGNED_SHORT_5_5_5_1 && (G = n.RGB5_A1)
            }
            return (G === n.R16F || G === n.R32F || G === n.RG16F || G === n.RG32F || G === n.RGBA16F || G === n.RGBA32F) && t.get("EXT_color_buffer_float"),
                G
        }
        function y(b, _) {
            let F;
            return b ? _ === null || _ === ti || _ === ss ? F = n.DEPTH24_STENCIL8 : _ === Sn ? F = n.DEPTH32F_STENCIL8 : _ === is && (F = n.DEPTH24_STENCIL8,
                console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : _ === null || _ === ti || _ === ss ? F = n.DEPTH_COMPONENT24 : _ === Sn ? F = n.DEPTH_COMPONENT32F : _ === is && (F = n.DEPTH_COMPONENT16),
                F
        }
        function C(b, _) {
            return m(b) === !0 || b.isFramebufferTexture && b.minFilter !== sn && b.minFilter !== Ne ? Math.log2(Math.max(_.width, _.height)) + 1 : b.mipmaps !== void 0 && b.mipmaps.length > 0 ? b.mipmaps.length : b.isCompressedTexture && Array.isArray(b.image) ? _.mipmaps.length : 1
        }
        function R(b) {
            let _ = b.target;
            _.removeEventListener("dispose", R),
                N(_),
                _.isVideoTexture && d.delete(_)
        }
        function D(b) {
            let _ = b.target;
            _.removeEventListener("dispose", D),
                M(_)
        }
        function N(b) {
            let _ = i.get(b);
            if (_.__webglInit === void 0)
                return;
            let F = b.source
                , W = f.get(F);
            if (W) {
                let $ = W[_.__cacheKey];
                $.usedTimes--,
                    $.usedTimes === 0 && S(b),
                    Object.keys(W).length === 0 && f.delete(F)
            }
            i.remove(b)
        }
        function S(b) {
            let _ = i.get(b);
            n.deleteTexture(_.__webglTexture);
            let F = b.source
                , W = f.get(F);
            delete W[_.__cacheKey],
                o.memory.textures--
        }
        function M(b) {
            let _ = i.get(b);
            if (b.depthTexture && (b.depthTexture.dispose(),
                i.remove(b.depthTexture)),
                b.isWebGLCubeRenderTarget)
                for (let W = 0; W < 6; W++) {
                    if (Array.isArray(_.__webglFramebuffer[W]))
                        for (let $ = 0; $ < _.__webglFramebuffer[W].length; $++)
                            n.deleteFramebuffer(_.__webglFramebuffer[W][$]);
                    else
                        n.deleteFramebuffer(_.__webglFramebuffer[W]);
                    _.__webglDepthbuffer && n.deleteRenderbuffer(_.__webglDepthbuffer[W])
                }
            else {
                if (Array.isArray(_.__webglFramebuffer))
                    for (let W = 0; W < _.__webglFramebuffer.length; W++)
                        n.deleteFramebuffer(_.__webglFramebuffer[W]);
                else
                    n.deleteFramebuffer(_.__webglFramebuffer);
                if (_.__webglDepthbuffer && n.deleteRenderbuffer(_.__webglDepthbuffer),
                    _.__webglMultisampledFramebuffer && n.deleteFramebuffer(_.__webglMultisampledFramebuffer),
                    _.__webglColorRenderbuffer)
                    for (let W = 0; W < _.__webglColorRenderbuffer.length; W++)
                        _.__webglColorRenderbuffer[W] && n.deleteRenderbuffer(_.__webglColorRenderbuffer[W]);
                _.__webglDepthRenderbuffer && n.deleteRenderbuffer(_.__webglDepthRenderbuffer)
            }
            let F = b.textures;
            for (let W = 0, $ = F.length; W < $; W++) {
                let G = i.get(F[W]);
                G.__webglTexture && (n.deleteTexture(G.__webglTexture),
                    o.memory.textures--),
                    i.remove(F[W])
            }
            i.remove(b)
        }
        let w = 0;
        function V() {
            w = 0
        }
        function H() {
            let b = w;
            return b >= s.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + b + " texture units while this GPU supports only " + s.maxTextures),
                w += 1,
                b
        }
        function z(b) {
            let _ = [];
            return _.push(b.wrapS),
                _.push(b.wrapT),
                _.push(b.wrapR || 0),
                _.push(b.magFilter),
                _.push(b.minFilter),
                _.push(b.anisotropy),
                _.push(b.internalFormat),
                _.push(b.format),
                _.push(b.type),
                _.push(b.generateMipmaps),
                _.push(b.premultiplyAlpha),
                _.push(b.flipY),
                _.push(b.unpackAlignment),
                _.push(b.colorSpace),
                _.join()
        }
        function Z(b, _) {
            let F = i.get(b);
            if (b.isVideoTexture && zt(b),
                b.isRenderTargetTexture === !1 && b.isExternalTexture !== !0 && b.version > 0 && F.__version !== b.version) {
                let W = b.image;
                if (W === null)
                    console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
                else if (W.complete === !1)
                    console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
                else {
                    ot(F, b, _);
                    return
                }
            } else
                b.isExternalTexture && (F.__webglTexture = b.sourceTexture ? b.sourceTexture : null);
            e.bindTexture(n.TEXTURE_2D, F.__webglTexture, n.TEXTURE0 + _)
        }
        function q(b, _) {
            let F = i.get(b);
            if (b.isRenderTargetTexture === !1 && b.version > 0 && F.__version !== b.version) {
                ot(F, b, _);
                return
            }
            e.bindTexture(n.TEXTURE_2D_ARRAY, F.__webglTexture, n.TEXTURE0 + _)
        }
        function tt(b, _) {
            let F = i.get(b);
            if (b.isRenderTargetTexture === !1 && b.version > 0 && F.__version !== b.version) {
                ot(F, b, _);
                return
            }
            e.bindTexture(n.TEXTURE_3D, F.__webglTexture, n.TEXTURE0 + _)
        }
        function k(b, _) {
            let F = i.get(b);
            if (b.version > 0 && F.__version !== b.version) {
                nt(F, b, _);
                return
            }
            e.bindTexture(n.TEXTURE_CUBE_MAP, F.__webglTexture, n.TEXTURE0 + _)
        }
        let rt = {
            [Wr]: n.REPEAT,
            [Xn]: n.CLAMP_TO_EDGE,
            [Xr]: n.MIRRORED_REPEAT
        }
            , ht = {
                [sn]: n.NEAREST,
                [eu]: n.NEAREST_MIPMAP_NEAREST,
                [Zs]: n.NEAREST_MIPMAP_LINEAR,
                [Ne]: n.LINEAR,
                [bo]: n.LINEAR_MIPMAP_NEAREST,
                [Qn]: n.LINEAR_MIPMAP_LINEAR
            }
            , bt = {
                [ou]: n.NEVER,
                [du]: n.ALWAYS,
                [au]: n.LESS,
                [Fl]: n.LEQUAL,
                [lu]: n.EQUAL,
                [uu]: n.GEQUAL,
                [cu]: n.GREATER,
                [hu]: n.NOTEQUAL
            };
        function Bt(b, _) {
            if (_.type === Sn && t.has("OES_texture_float_linear") === !1 && (_.magFilter === Ne || _.magFilter === bo || _.magFilter === Zs || _.magFilter === Qn || _.minFilter === Ne || _.minFilter === bo || _.minFilter === Zs || _.minFilter === Qn) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),
                n.texParameteri(b, n.TEXTURE_WRAP_S, rt[_.wrapS]),
                n.texParameteri(b, n.TEXTURE_WRAP_T, rt[_.wrapT]),
                (b === n.TEXTURE_3D || b === n.TEXTURE_2D_ARRAY) && n.texParameteri(b, n.TEXTURE_WRAP_R, rt[_.wrapR]),
                n.texParameteri(b, n.TEXTURE_MAG_FILTER, ht[_.magFilter]),
                n.texParameteri(b, n.TEXTURE_MIN_FILTER, ht[_.minFilter]),
                _.compareFunction && (n.texParameteri(b, n.TEXTURE_COMPARE_MODE, n.COMPARE_REF_TO_TEXTURE),
                    n.texParameteri(b, n.TEXTURE_COMPARE_FUNC, bt[_.compareFunction])),
                t.has("EXT_texture_filter_anisotropic") === !0) {
                if (_.magFilter === sn || _.minFilter !== Zs && _.minFilter !== Qn || _.type === Sn && t.has("OES_texture_float_linear") === !1)
                    return;
                if (_.anisotropy > 1 || i.get(_).__currentAnisotropy) {
                    let F = t.get("EXT_texture_filter_anisotropic");
                    n.texParameterf(b, F.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(_.anisotropy, s.getMaxAnisotropy())),
                        i.get(_).__currentAnisotropy = _.anisotropy
                }
            }
        }
        function ie(b, _) {
            let F = !1;
            b.__webglInit === void 0 && (b.__webglInit = !0,
                _.addEventListener("dispose", R));
            let W = _.source
                , $ = f.get(W);
            $ === void 0 && ($ = {},
                f.set(W, $));
            let G = z(_);
            if (G !== b.__cacheKey) {
                $[G] === void 0 && ($[G] = {
                    texture: n.createTexture(),
                    usedTimes: 0
                },
                    o.memory.textures++,
                    F = !0),
                    $[G].usedTimes++;
                let yt = $[b.__cacheKey];
                yt !== void 0 && ($[b.__cacheKey].usedTimes--,
                    yt.usedTimes === 0 && S(_)),
                    b.__cacheKey = G,
                    b.__webglTexture = $[G].texture
            }
            return F
        }
        function Kt(b, _, F) {
            return Math.floor(Math.floor(b / F) / _)
        }
        function X(b, _, F, W) {
            let G = b.updateRanges;
            if (G.length === 0)
                e.texSubImage2D(n.TEXTURE_2D, 0, 0, 0, _.width, _.height, F, W, _.data);
            else {
                G.sort((j, ct) => j.start - ct.start);
                let yt = 0;
                for (let j = 1; j < G.length; j++) {
                    let ct = G[yt]
                        , Pt = G[j]
                        , xt = ct.start + ct.count
                        , at = Kt(Pt.start, _.width, 4)
                        , Ft = Kt(ct.start, _.width, 4);
                    Pt.start <= xt + 1 && at === Ft && Kt(Pt.start + Pt.count - 1, _.width, 4) === at ? ct.count = Math.max(ct.count, Pt.start + Pt.count - ct.start) : (++yt,
                        G[yt] = Pt)
                }
                G.length = yt + 1;
                let et = n.getParameter(n.UNPACK_ROW_LENGTH)
                    , gt = n.getParameter(n.UNPACK_SKIP_PIXELS)
                    , vt = n.getParameter(n.UNPACK_SKIP_ROWS);
                n.pixelStorei(n.UNPACK_ROW_LENGTH, _.width);
                for (let j = 0, ct = G.length; j < ct; j++) {
                    let Pt = G[j]
                        , xt = Math.floor(Pt.start / 4)
                        , at = Math.ceil(Pt.count / 4)
                        , Ft = xt % _.width
                        , I = Math.floor(xt / _.width)
                        , Q = at
                        , it = 1;
                    n.pixelStorei(n.UNPACK_SKIP_PIXELS, Ft),
                        n.pixelStorei(n.UNPACK_SKIP_ROWS, I),
                        e.texSubImage2D(n.TEXTURE_2D, 0, Ft, I, Q, it, F, W, _.data)
                }
                b.clearUpdateRanges(),
                    n.pixelStorei(n.UNPACK_ROW_LENGTH, et),
                    n.pixelStorei(n.UNPACK_SKIP_PIXELS, gt),
                    n.pixelStorei(n.UNPACK_SKIP_ROWS, vt)
            }
        }
        function ot(b, _, F) {
            let W = n.TEXTURE_2D;
            (_.isDataArrayTexture || _.isCompressedArrayTexture) && (W = n.TEXTURE_2D_ARRAY),
                _.isData3DTexture && (W = n.TEXTURE_3D);
            let $ = ie(b, _)
                , G = _.source;
            e.bindTexture(W, b.__webglTexture, n.TEXTURE0 + F);
            let yt = i.get(G);
            if (G.version !== yt.__version || $ === !0) {
                e.activeTexture(n.TEXTURE0 + F);
                let et = Gt.getPrimaries(Gt.workingColorSpace)
                    , gt = _.colorSpace === Nn ? null : Gt.getPrimaries(_.colorSpace)
                    , vt = _.colorSpace === Nn || et === gt ? n.NONE : n.BROWSER_DEFAULT_WEBGL;
                n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, _.flipY),
                    n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha),
                    n.pixelStorei(n.UNPACK_ALIGNMENT, _.unpackAlignment),
                    n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL, vt);
                let j = g(_.image, !1, s.maxTextureSize);
                j = Se(_, j);
                let ct = r.convert(_.format, _.colorSpace)
                    , Pt = r.convert(_.type)
                    , xt = T(_.internalFormat, ct, Pt, _.colorSpace, _.isVideoTexture);
                Bt(W, _);
                let at, Ft = _.mipmaps, I = _.isVideoTexture !== !0, Q = yt.__version === void 0 || $ === !0, it = G.dataReady, dt = C(_, j);
                if (_.isDepthTexture)
                    xt = y(_.format === rs, _.type),
                        Q && (I ? e.texStorage2D(n.TEXTURE_2D, 1, xt, j.width, j.height) : e.texImage2D(n.TEXTURE_2D, 0, xt, j.width, j.height, 0, ct, Pt, null));
                else if (_.isDataTexture)
                    if (Ft.length > 0) {
                        I && Q && e.texStorage2D(n.TEXTURE_2D, dt, xt, Ft[0].width, Ft[0].height);
                        for (let J = 0, Y = Ft.length; J < Y; J++)
                            at = Ft[J],
                                I ? it && e.texSubImage2D(n.TEXTURE_2D, J, 0, 0, at.width, at.height, ct, Pt, at.data) : e.texImage2D(n.TEXTURE_2D, J, xt, at.width, at.height, 0, ct, Pt, at.data);
                        _.generateMipmaps = !1
                    } else
                        I ? (Q && e.texStorage2D(n.TEXTURE_2D, dt, xt, j.width, j.height),
                            it && X(_, j, ct, Pt)) : e.texImage2D(n.TEXTURE_2D, 0, xt, j.width, j.height, 0, ct, Pt, j.data);
                else if (_.isCompressedTexture)
                    if (_.isCompressedArrayTexture) {
                        I && Q && e.texStorage3D(n.TEXTURE_2D_ARRAY, dt, xt, Ft[0].width, Ft[0].height, j.depth);
                        for (let J = 0, Y = Ft.length; J < Y; J++)
                            if (at = Ft[J],
                                _.format !== Oe)
                                if (ct !== null)
                                    if (I) {
                                        if (it)
                                            if (_.layerUpdates.size > 0) {
                                                let mt = Wl(at.width, at.height, _.format, _.type);
                                                for (let Ut of _.layerUpdates) {
                                                    let te = at.data.subarray(Ut * mt / at.data.BYTES_PER_ELEMENT, (Ut + 1) * mt / at.data.BYTES_PER_ELEMENT);
                                                    e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY, J, 0, 0, Ut, at.width, at.height, 1, ct, te)
                                                }
                                                _.clearLayerUpdates()
                                            } else
                                                e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY, J, 0, 0, 0, at.width, at.height, j.depth, ct, at.data)
                                    } else
                                        e.compressedTexImage3D(n.TEXTURE_2D_ARRAY, J, xt, at.width, at.height, j.depth, 0, at.data, 0, 0);
                                else
                                    console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
                            else
                                I ? it && e.texSubImage3D(n.TEXTURE_2D_ARRAY, J, 0, 0, 0, at.width, at.height, j.depth, ct, Pt, at.data) : e.texImage3D(n.TEXTURE_2D_ARRAY, J, xt, at.width, at.height, j.depth, 0, ct, Pt, at.data)
                    } else {
                        I && Q && e.texStorage2D(n.TEXTURE_2D, dt, xt, Ft[0].width, Ft[0].height);
                        for (let J = 0, Y = Ft.length; J < Y; J++)
                            at = Ft[J],
                                _.format !== Oe ? ct !== null ? I ? it && e.compressedTexSubImage2D(n.TEXTURE_2D, J, 0, 0, at.width, at.height, ct, at.data) : e.compressedTexImage2D(n.TEXTURE_2D, J, xt, at.width, at.height, 0, at.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : I ? it && e.texSubImage2D(n.TEXTURE_2D, J, 0, 0, at.width, at.height, ct, Pt, at.data) : e.texImage2D(n.TEXTURE_2D, J, xt, at.width, at.height, 0, ct, Pt, at.data)
                    }
                else if (_.isDataArrayTexture)
                    if (I) {
                        if (Q && e.texStorage3D(n.TEXTURE_2D_ARRAY, dt, xt, j.width, j.height, j.depth),
                            it)
                            if (_.layerUpdates.size > 0) {
                                let J = Wl(j.width, j.height, _.format, _.type);
                                for (let Y of _.layerUpdates) {
                                    let mt = j.data.subarray(Y * J / j.data.BYTES_PER_ELEMENT, (Y + 1) * J / j.data.BYTES_PER_ELEMENT);
                                    e.texSubImage3D(n.TEXTURE_2D_ARRAY, 0, 0, 0, Y, j.width, j.height, 1, ct, Pt, mt)
                                }
                                _.clearLayerUpdates()
                            } else
                                e.texSubImage3D(n.TEXTURE_2D_ARRAY, 0, 0, 0, 0, j.width, j.height, j.depth, ct, Pt, j.data)
                    } else
                        e.texImage3D(n.TEXTURE_2D_ARRAY, 0, xt, j.width, j.height, j.depth, 0, ct, Pt, j.data);
                else if (_.isData3DTexture)
                    I ? (Q && e.texStorage3D(n.TEXTURE_3D, dt, xt, j.width, j.height, j.depth),
                        it && e.texSubImage3D(n.TEXTURE_3D, 0, 0, 0, 0, j.width, j.height, j.depth, ct, Pt, j.data)) : e.texImage3D(n.TEXTURE_3D, 0, xt, j.width, j.height, j.depth, 0, ct, Pt, j.data);
                else if (_.isFramebufferTexture) {
                    if (Q)
                        if (I)
                            e.texStorage2D(n.TEXTURE_2D, dt, xt, j.width, j.height);
                        else {
                            let J = j.width
                                , Y = j.height;
                            for (let mt = 0; mt < dt; mt++)
                                e.texImage2D(n.TEXTURE_2D, mt, xt, J, Y, 0, ct, Pt, null),
                                    J >>= 1,
                                    Y >>= 1
                        }
                } else if (Ft.length > 0) {
                    if (I && Q) {
                        let J = he(Ft[0]);
                        e.texStorage2D(n.TEXTURE_2D, dt, xt, J.width, J.height)
                    }
                    for (let J = 0, Y = Ft.length; J < Y; J++)
                        at = Ft[J],
                            I ? it && e.texSubImage2D(n.TEXTURE_2D, J, 0, 0, ct, Pt, at) : e.texImage2D(n.TEXTURE_2D, J, xt, ct, Pt, at);
                    _.generateMipmaps = !1
                } else if (I) {
                    if (Q) {
                        let J = he(j);
                        e.texStorage2D(n.TEXTURE_2D, dt, xt, J.width, J.height)
                    }
                    it && e.texSubImage2D(n.TEXTURE_2D, 0, 0, 0, ct, Pt, j)
                } else
                    e.texImage2D(n.TEXTURE_2D, 0, xt, ct, Pt, j);
                m(_) && u(W),
                    yt.__version = G.version,
                    _.onUpdate && _.onUpdate(_)
            }
            b.__version = _.version
        }
        function nt(b, _, F) {
            if (_.image.length !== 6)
                return;
            let W = ie(b, _)
                , $ = _.source;
            e.bindTexture(n.TEXTURE_CUBE_MAP, b.__webglTexture, n.TEXTURE0 + F);
            let G = i.get($);
            if ($.version !== G.__version || W === !0) {
                e.activeTexture(n.TEXTURE0 + F);
                let yt = Gt.getPrimaries(Gt.workingColorSpace)
                    , et = _.colorSpace === Nn ? null : Gt.getPrimaries(_.colorSpace)
                    , gt = _.colorSpace === Nn || yt === et ? n.NONE : n.BROWSER_DEFAULT_WEBGL;
                n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, _.flipY),
                    n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha),
                    n.pixelStorei(n.UNPACK_ALIGNMENT, _.unpackAlignment),
                    n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL, gt);
                let vt = _.isCompressedTexture || _.image[0].isCompressedTexture
                    , j = _.image[0] && _.image[0].isDataTexture
                    , ct = [];
                for (let Y = 0; Y < 6; Y++)
                    !vt && !j ? ct[Y] = g(_.image[Y], !0, s.maxCubemapSize) : ct[Y] = j ? _.image[Y].image : _.image[Y],
                        ct[Y] = Se(_, ct[Y]);
                let Pt = ct[0]
                    , xt = r.convert(_.format, _.colorSpace)
                    , at = r.convert(_.type)
                    , Ft = T(_.internalFormat, xt, at, _.colorSpace)
                    , I = _.isVideoTexture !== !0
                    , Q = G.__version === void 0 || W === !0
                    , it = $.dataReady
                    , dt = C(_, Pt);
                Bt(n.TEXTURE_CUBE_MAP, _);
                let J;
                if (vt) {
                    I && Q && e.texStorage2D(n.TEXTURE_CUBE_MAP, dt, Ft, Pt.width, Pt.height);
                    for (let Y = 0; Y < 6; Y++) {
                        J = ct[Y].mipmaps;
                        for (let mt = 0; mt < J.length; mt++) {
                            let Ut = J[mt];
                            _.format !== Oe ? xt !== null ? I ? it && e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Y, mt, 0, 0, Ut.width, Ut.height, xt, Ut.data) : e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Y, mt, Ft, Ut.width, Ut.height, 0, Ut.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : I ? it && e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Y, mt, 0, 0, Ut.width, Ut.height, xt, at, Ut.data) : e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Y, mt, Ft, Ut.width, Ut.height, 0, xt, at, Ut.data)
                        }
                    }
                } else {
                    if (J = _.mipmaps,
                        I && Q) {
                        J.length > 0 && dt++;
                        let Y = he(ct[0]);
                        e.texStorage2D(n.TEXTURE_CUBE_MAP, dt, Ft, Y.width, Y.height)
                    }
                    for (let Y = 0; Y < 6; Y++)
                        if (j) {
                            I ? it && e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Y, 0, 0, 0, ct[Y].width, ct[Y].height, xt, at, ct[Y].data) : e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Y, 0, Ft, ct[Y].width, ct[Y].height, 0, xt, at, ct[Y].data);
                            for (let mt = 0; mt < J.length; mt++) {
                                let te = J[mt].image[Y].image;
                                I ? it && e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Y, mt + 1, 0, 0, te.width, te.height, xt, at, te.data) : e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Y, mt + 1, Ft, te.width, te.height, 0, xt, at, te.data)
                            }
                        } else {
                            I ? it && e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Y, 0, 0, 0, xt, at, ct[Y]) : e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Y, 0, Ft, xt, at, ct[Y]);
                            for (let mt = 0; mt < J.length; mt++) {
                                let Ut = J[mt];
                                I ? it && e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Y, mt + 1, 0, 0, xt, at, Ut.image[Y]) : e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Y, mt + 1, Ft, xt, at, Ut.image[Y])
                            }
                        }
                }
                m(_) && u(n.TEXTURE_CUBE_MAP),
                    G.__version = $.version,
                    _.onUpdate && _.onUpdate(_)
            }
            b.__version = _.version
        }
        function At(b, _, F, W, $, G) {
            let yt = r.convert(F.format, F.colorSpace)
                , et = r.convert(F.type)
                , gt = T(F.internalFormat, yt, et, F.colorSpace)
                , vt = i.get(_)
                , j = i.get(F);
            if (j.__renderTarget = _,
                !vt.__hasExternalTextures) {
                let ct = Math.max(1, _.width >> G)
                    , Pt = Math.max(1, _.height >> G);
                $ === n.TEXTURE_3D || $ === n.TEXTURE_2D_ARRAY ? e.texImage3D($, G, gt, ct, Pt, _.depth, 0, yt, et, null) : e.texImage2D($, G, gt, ct, Pt, 0, yt, et, null)
            }
            e.bindFramebuffer(n.FRAMEBUFFER, b),
                ft(_) ? a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER, W, $, j.__webglTexture, 0, se(_)) : ($ === n.TEXTURE_2D || $ >= n.TEXTURE_CUBE_MAP_POSITIVE_X && $ <= n.TEXTURE_CUBE_MAP_NEGATIVE_Z) && n.framebufferTexture2D(n.FRAMEBUFFER, W, $, j.__webglTexture, G),
                e.bindFramebuffer(n.FRAMEBUFFER, null)
        }
        function Ct(b, _, F) {
            if (n.bindRenderbuffer(n.RENDERBUFFER, b),
                _.depthBuffer) {
                let W = _.depthTexture
                    , $ = W && W.isDepthTexture ? W.type : null
                    , G = y(_.stencilBuffer, $)
                    , yt = _.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT
                    , et = se(_);
                ft(_) ? a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER, et, G, _.width, _.height) : F ? n.renderbufferStorageMultisample(n.RENDERBUFFER, et, G, _.width, _.height) : n.renderbufferStorage(n.RENDERBUFFER, G, _.width, _.height),
                    n.framebufferRenderbuffer(n.FRAMEBUFFER, yt, n.RENDERBUFFER, b)
            } else {
                let W = _.textures;
                for (let $ = 0; $ < W.length; $++) {
                    let G = W[$]
                        , yt = r.convert(G.format, G.colorSpace)
                        , et = r.convert(G.type)
                        , gt = T(G.internalFormat, yt, et, G.colorSpace)
                        , vt = se(_);
                    F && ft(_) === !1 ? n.renderbufferStorageMultisample(n.RENDERBUFFER, vt, gt, _.width, _.height) : ft(_) ? a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER, vt, gt, _.width, _.height) : n.renderbufferStorage(n.RENDERBUFFER, gt, _.width, _.height)
                }
            }
            n.bindRenderbuffer(n.RENDERBUFFER, null)
        }
        function Lt(b, _) {
            if (_ && _.isWebGLCubeRenderTarget)
                throw new Error("Depth Texture with cube render targets is not supported");
            if (e.bindFramebuffer(n.FRAMEBUFFER, b),
                !(_.depthTexture && _.depthTexture.isDepthTexture))
                throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
            let W = i.get(_.depthTexture);
            W.__renderTarget = _,
                (!W.__webglTexture || _.depthTexture.image.width !== _.width || _.depthTexture.image.height !== _.height) && (_.depthTexture.image.width = _.width,
                    _.depthTexture.image.height = _.height,
                    _.depthTexture.needsUpdate = !0),
                Z(_.depthTexture, 0);
            let $ = W.__webglTexture
                , G = se(_);
            if (_.depthTexture.format === $i)
                ft(_) ? a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER, n.DEPTH_ATTACHMENT, n.TEXTURE_2D, $, 0, G) : n.framebufferTexture2D(n.FRAMEBUFFER, n.DEPTH_ATTACHMENT, n.TEXTURE_2D, $, 0);
            else if (_.depthTexture.format === rs)
                ft(_) ? a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER, n.DEPTH_STENCIL_ATTACHMENT, n.TEXTURE_2D, $, 0, G) : n.framebufferTexture2D(n.FRAMEBUFFER, n.DEPTH_STENCIL_ATTACHMENT, n.TEXTURE_2D, $, 0);
            else
                throw new Error("Unknown depthTexture format")
        }
        function ce(b) {
            let _ = i.get(b)
                , F = b.isWebGLCubeRenderTarget === !0;
            if (_.__boundDepthTexture !== b.depthTexture) {
                let W = b.depthTexture;
                if (_.__depthDisposeCallback && _.__depthDisposeCallback(),
                    W) {
                    let $ = () => {
                        delete _.__boundDepthTexture,
                            delete _.__depthDisposeCallback,
                            W.removeEventListener("dispose", $)
                    }
                        ;
                    W.addEventListener("dispose", $),
                        _.__depthDisposeCallback = $
                }
                _.__boundDepthTexture = W
            }
            if (b.depthTexture && !_.__autoAllocateDepthBuffer) {
                if (F)
                    throw new Error("target.depthTexture not supported in Cube render targets");
                let W = b.texture.mipmaps;
                W && W.length > 0 ? Lt(_.__webglFramebuffer[0], b) : Lt(_.__webglFramebuffer, b)
            } else if (F) {
                _.__webglDepthbuffer = [];
                for (let W = 0; W < 6; W++)
                    if (e.bindFramebuffer(n.FRAMEBUFFER, _.__webglFramebuffer[W]),
                        _.__webglDepthbuffer[W] === void 0)
                        _.__webglDepthbuffer[W] = n.createRenderbuffer(),
                            Ct(_.__webglDepthbuffer[W], b, !1);
                    else {
                        let $ = b.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT
                            , G = _.__webglDepthbuffer[W];
                        n.bindRenderbuffer(n.RENDERBUFFER, G),
                            n.framebufferRenderbuffer(n.FRAMEBUFFER, $, n.RENDERBUFFER, G)
                    }
            } else {
                let W = b.texture.mipmaps;
                if (W && W.length > 0 ? e.bindFramebuffer(n.FRAMEBUFFER, _.__webglFramebuffer[0]) : e.bindFramebuffer(n.FRAMEBUFFER, _.__webglFramebuffer),
                    _.__webglDepthbuffer === void 0)
                    _.__webglDepthbuffer = n.createRenderbuffer(),
                        Ct(_.__webglDepthbuffer, b, !1);
                else {
                    let $ = b.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT
                        , G = _.__webglDepthbuffer;
                    n.bindRenderbuffer(n.RENDERBUFFER, G),
                        n.framebufferRenderbuffer(n.FRAMEBUFFER, $, n.RENDERBUFFER, G)
                }
            }
            e.bindFramebuffer(n.FRAMEBUFFER, null)
        }
        function Ht(b, _, F) {
            let W = i.get(b);
            _ !== void 0 && At(W.__webglFramebuffer, b, b.texture, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, 0),
                F !== void 0 && ce(b)
        }
        function A(b) {
            let _ = b.texture
                , F = i.get(b)
                , W = i.get(_);
            b.addEventListener("dispose", D);
            let $ = b.textures
                , G = b.isWebGLCubeRenderTarget === !0
                , yt = $.length > 1;
            if (yt || (W.__webglTexture === void 0 && (W.__webglTexture = n.createTexture()),
                W.__version = _.version,
                o.memory.textures++),
                G) {
                F.__webglFramebuffer = [];
                for (let et = 0; et < 6; et++)
                    if (_.mipmaps && _.mipmaps.length > 0) {
                        F.__webglFramebuffer[et] = [];
                        for (let gt = 0; gt < _.mipmaps.length; gt++)
                            F.__webglFramebuffer[et][gt] = n.createFramebuffer()
                    } else
                        F.__webglFramebuffer[et] = n.createFramebuffer()
            } else {
                if (_.mipmaps && _.mipmaps.length > 0) {
                    F.__webglFramebuffer = [];
                    for (let et = 0; et < _.mipmaps.length; et++)
                        F.__webglFramebuffer[et] = n.createFramebuffer()
                } else
                    F.__webglFramebuffer = n.createFramebuffer();
                if (yt)
                    for (let et = 0, gt = $.length; et < gt; et++) {
                        let vt = i.get($[et]);
                        vt.__webglTexture === void 0 && (vt.__webglTexture = n.createTexture(),
                            o.memory.textures++)
                    }
                if (b.samples > 0 && ft(b) === !1) {
                    F.__webglMultisampledFramebuffer = n.createFramebuffer(),
                        F.__webglColorRenderbuffer = [],
                        e.bindFramebuffer(n.FRAMEBUFFER, F.__webglMultisampledFramebuffer);
                    for (let et = 0; et < $.length; et++) {
                        let gt = $[et];
                        F.__webglColorRenderbuffer[et] = n.createRenderbuffer(),
                            n.bindRenderbuffer(n.RENDERBUFFER, F.__webglColorRenderbuffer[et]);
                        let vt = r.convert(gt.format, gt.colorSpace)
                            , j = r.convert(gt.type)
                            , ct = T(gt.internalFormat, vt, j, gt.colorSpace, b.isXRRenderTarget === !0)
                            , Pt = se(b);
                        n.renderbufferStorageMultisample(n.RENDERBUFFER, Pt, ct, b.width, b.height),
                            n.framebufferRenderbuffer(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0 + et, n.RENDERBUFFER, F.__webglColorRenderbuffer[et])
                    }
                    n.bindRenderbuffer(n.RENDERBUFFER, null),
                        b.depthBuffer && (F.__webglDepthRenderbuffer = n.createRenderbuffer(),
                            Ct(F.__webglDepthRenderbuffer, b, !0)),
                        e.bindFramebuffer(n.FRAMEBUFFER, null)
                }
            }
            if (G) {
                e.bindTexture(n.TEXTURE_CUBE_MAP, W.__webglTexture),
                    Bt(n.TEXTURE_CUBE_MAP, _);
                for (let et = 0; et < 6; et++)
                    if (_.mipmaps && _.mipmaps.length > 0)
                        for (let gt = 0; gt < _.mipmaps.length; gt++)
                            At(F.__webglFramebuffer[et][gt], b, _, n.COLOR_ATTACHMENT0, n.TEXTURE_CUBE_MAP_POSITIVE_X + et, gt);
                    else
                        At(F.__webglFramebuffer[et], b, _, n.COLOR_ATTACHMENT0, n.TEXTURE_CUBE_MAP_POSITIVE_X + et, 0);
                m(_) && u(n.TEXTURE_CUBE_MAP),
                    e.unbindTexture()
            } else if (yt) {
                for (let et = 0, gt = $.length; et < gt; et++) {
                    let vt = $[et]
                        , j = i.get(vt)
                        , ct = n.TEXTURE_2D;
                    (b.isWebGL3DRenderTarget || b.isWebGLArrayRenderTarget) && (ct = b.isWebGL3DRenderTarget ? n.TEXTURE_3D : n.TEXTURE_2D_ARRAY),
                        e.bindTexture(ct, j.__webglTexture),
                        Bt(ct, vt),
                        At(F.__webglFramebuffer, b, vt, n.COLOR_ATTACHMENT0 + et, ct, 0),
                        m(vt) && u(ct)
                }
                e.unbindTexture()
            } else {
                let et = n.TEXTURE_2D;
                if ((b.isWebGL3DRenderTarget || b.isWebGLArrayRenderTarget) && (et = b.isWebGL3DRenderTarget ? n.TEXTURE_3D : n.TEXTURE_2D_ARRAY),
                    e.bindTexture(et, W.__webglTexture),
                    Bt(et, _),
                    _.mipmaps && _.mipmaps.length > 0)
                    for (let gt = 0; gt < _.mipmaps.length; gt++)
                        At(F.__webglFramebuffer[gt], b, _, n.COLOR_ATTACHMENT0, et, gt);
                else
                    At(F.__webglFramebuffer, b, _, n.COLOR_ATTACHMENT0, et, 0);
                m(_) && u(et),
                    e.unbindTexture()
            }
            b.depthBuffer && ce(b)
        }
        function Qt(b) {
            let _ = b.textures;
            for (let F = 0, W = _.length; F < W; F++) {
                let $ = _[F];
                if (m($)) {
                    let G = E(b)
                        , yt = i.get($).__webglTexture;
                    e.bindTexture(G, yt),
                        u(G),
                        e.unbindTexture()
                }
            }
        }
        let Et = []
            , Xt = [];
        function St(b) {
            if (b.samples > 0) {
                if (ft(b) === !1) {
                    let _ = b.textures
                        , F = b.width
                        , W = b.height
                        , $ = n.COLOR_BUFFER_BIT
                        , G = b.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT
                        , yt = i.get(b)
                        , et = _.length > 1;
                    if (et)
                        for (let vt = 0; vt < _.length; vt++)
                            e.bindFramebuffer(n.FRAMEBUFFER, yt.__webglMultisampledFramebuffer),
                                n.framebufferRenderbuffer(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0 + vt, n.RENDERBUFFER, null),
                                e.bindFramebuffer(n.FRAMEBUFFER, yt.__webglFramebuffer),
                                n.framebufferTexture2D(n.DRAW_FRAMEBUFFER, n.COLOR_ATTACHMENT0 + vt, n.TEXTURE_2D, null, 0);
                    e.bindFramebuffer(n.READ_FRAMEBUFFER, yt.__webglMultisampledFramebuffer);
                    let gt = b.texture.mipmaps;
                    gt && gt.length > 0 ? e.bindFramebuffer(n.DRAW_FRAMEBUFFER, yt.__webglFramebuffer[0]) : e.bindFramebuffer(n.DRAW_FRAMEBUFFER, yt.__webglFramebuffer);
                    for (let vt = 0; vt < _.length; vt++) {
                        if (b.resolveDepthBuffer && (b.depthBuffer && ($ |= n.DEPTH_BUFFER_BIT),
                            b.stencilBuffer && b.resolveStencilBuffer && ($ |= n.STENCIL_BUFFER_BIT)),
                            et) {
                            n.framebufferRenderbuffer(n.READ_FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.RENDERBUFFER, yt.__webglColorRenderbuffer[vt]);
                            let j = i.get(_[vt]).__webglTexture;
                            n.framebufferTexture2D(n.DRAW_FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, j, 0)
                        }
                        n.blitFramebuffer(0, 0, F, W, 0, 0, F, W, $, n.NEAREST),
                            c === !0 && (Et.length = 0,
                                Xt.length = 0,
                                Et.push(n.COLOR_ATTACHMENT0 + vt),
                                b.depthBuffer && b.resolveDepthBuffer === !1 && (Et.push(G),
                                    Xt.push(G),
                                    n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER, Xt)),
                                n.invalidateFramebuffer(n.READ_FRAMEBUFFER, Et))
                    }
                    if (e.bindFramebuffer(n.READ_FRAMEBUFFER, null),
                        e.bindFramebuffer(n.DRAW_FRAMEBUFFER, null),
                        et)
                        for (let vt = 0; vt < _.length; vt++) {
                            e.bindFramebuffer(n.FRAMEBUFFER, yt.__webglMultisampledFramebuffer),
                                n.framebufferRenderbuffer(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0 + vt, n.RENDERBUFFER, yt.__webglColorRenderbuffer[vt]);
                            let j = i.get(_[vt]).__webglTexture;
                            e.bindFramebuffer(n.FRAMEBUFFER, yt.__webglFramebuffer),
                                n.framebufferTexture2D(n.DRAW_FRAMEBUFFER, n.COLOR_ATTACHMENT0 + vt, n.TEXTURE_2D, j, 0)
                        }
                    e.bindFramebuffer(n.DRAW_FRAMEBUFFER, yt.__webglMultisampledFramebuffer)
                } else if (b.depthBuffer && b.resolveDepthBuffer === !1 && c) {
                    let _ = b.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT;
                    n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER, [_])
                }
            }
        }
        function se(b) {
            return Math.min(s.maxSamples, b.samples)
        }
        function ft(b) {
            let _ = i.get(b);
            return b.samples > 0 && t.has("WEBGL_multisampled_render_to_texture") === !0 && _.__useRenderToTexture !== !1
        }
        function zt(b) {
            let _ = o.render.frame;
            d.get(b) !== _ && (d.set(b, _),
                b.update())
        }
        function Se(b, _) {
            let F = b.colorSpace
                , W = b.format
                , $ = b.type;
            return b.isCompressedTexture === !0 || b.isVideoTexture === !0 || F !== fi && F !== Nn && (Gt.getTransfer(F) === Zt ? (W !== Oe || $ !== Mn) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", F)),
                _
        }
        function he(b) {
            return typeof HTMLImageElement != "undefined" && b instanceof HTMLImageElement ? (l.width = b.naturalWidth || b.width,
                l.height = b.naturalHeight || b.height) : typeof VideoFrame != "undefined" && b instanceof VideoFrame ? (l.width = b.displayWidth,
                    l.height = b.displayHeight) : (l.width = b.width,
                        l.height = b.height),
                l
        }
        this.allocateTextureUnit = H,
            this.resetTextureUnits = V,
            this.setTexture2D = Z,
            this.setTexture2DArray = q,
            this.setTexture3D = tt,
            this.setTextureCube = k,
            this.rebindTextures = Ht,
            this.setupRenderTarget = A,
            this.updateRenderTargetMipmap = Qt,
            this.updateMultisampleRenderTarget = St,
            this.setupDepthRenderbuffer = ce,
            this.setupFrameBufferTexture = At,
            this.useMultisampledRTT = ft
    }
    function i0(n, t) {
        function e(i, s = Nn) {
            let r, o = Gt.getTransfer(s);
            if (i === Mn)
                return n.UNSIGNED_BYTE;
            if (i === Eo)
                return n.UNSIGNED_SHORT_4_4_4_4;
            if (i === wo)
                return n.UNSIGNED_SHORT_5_5_5_1;
            if (i === Pl)
                return n.UNSIGNED_INT_5_9_9_9_REV;
            if (i === Cl)
                return n.BYTE;
            if (i === Rl)
                return n.SHORT;
            if (i === is)
                return n.UNSIGNED_SHORT;
            if (i === To)
                return n.INT;
            if (i === ti)
                return n.UNSIGNED_INT;
            if (i === Sn)
                return n.FLOAT;
            if (i === on)
                return n.HALF_FLOAT;
            if (i === Il)
                return n.ALPHA;
            if (i === Dl)
                return n.RGB;
            if (i === Oe)
                return n.RGBA;
            if (i === $i)
                return n.DEPTH_COMPONENT;
            if (i === rs)
                return n.DEPTH_STENCIL;
            if (i === Ll)
                return n.RED;
            if (i === Ao)
                return n.RED_INTEGER;
            if (i === Ul)
                return n.RG;
            if (i === Co)
                return n.RG_INTEGER;
            if (i === Ro)
                return n.RGBA_INTEGER;
            if (i === $s || i === Js || i === Ks || i === js)
                if (o === Zt)
                    if (r = t.get("WEBGL_compressed_texture_s3tc_srgb"),
                        r !== null) {
                        if (i === $s)
                            return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
                        if (i === Js)
                            return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
                        if (i === Ks)
                            return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
                        if (i === js)
                            return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT
                    } else
                        return null;
                else if (r = t.get("WEBGL_compressed_texture_s3tc"),
                    r !== null) {
                    if (i === $s)
                        return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
                    if (i === Js)
                        return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                    if (i === Ks)
                        return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                    if (i === js)
                        return r.COMPRESSED_RGBA_S3TC_DXT5_EXT
                } else
                    return null;
            if (i === Po || i === Io || i === Do || i === Lo)
                if (r = t.get("WEBGL_compressed_texture_pvrtc"),
                    r !== null) {
                    if (i === Po)
                        return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                    if (i === Io)
                        return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                    if (i === Do)
                        return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                    if (i === Lo)
                        return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
                } else
                    return null;
            if (i === Uo || i === No || i === Fo)
                if (r = t.get("WEBGL_compressed_texture_etc"),
                    r !== null) {
                    if (i === Uo || i === No)
                        return o === Zt ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2;
                    if (i === Fo)
                        return o === Zt ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : r.COMPRESSED_RGBA8_ETC2_EAC
                } else
                    return null;
            if (i === Oo || i === Bo || i === zo || i === ko || i === Vo || i === Ho || i === Go || i === Wo || i === Xo || i === qo || i === Yo || i === Zo || i === $o || i === Jo)
                if (r = t.get("WEBGL_compressed_texture_astc"),
                    r !== null) {
                    if (i === Oo)
                        return o === Zt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
                    if (i === Bo)
                        return o === Zt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
                    if (i === zo)
                        return o === Zt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
                    if (i === ko)
                        return o === Zt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
                    if (i === Vo)
                        return o === Zt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
                    if (i === Ho)
                        return o === Zt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
                    if (i === Go)
                        return o === Zt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
                    if (i === Wo)
                        return o === Zt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
                    if (i === Xo)
                        return o === Zt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
                    if (i === qo)
                        return o === Zt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
                    if (i === Yo)
                        return o === Zt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
                    if (i === Zo)
                        return o === Zt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
                    if (i === $o)
                        return o === Zt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
                    if (i === Jo)
                        return o === Zt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : r.COMPRESSED_RGBA_ASTC_12x12_KHR
                } else
                    return null;
            if (i === Qs || i === Ko || i === jo)
                if (r = t.get("EXT_texture_compression_bptc"),
                    r !== null) {
                    if (i === Qs)
                        return o === Zt ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
                    if (i === Ko)
                        return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
                    if (i === jo)
                        return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT
                } else
                    return null;
            if (i === Nl || i === Qo || i === ta || i === ea)
                if (r = t.get("EXT_texture_compression_rgtc"),
                    r !== null) {
                    if (i === Qs)
                        return r.COMPRESSED_RED_RGTC1_EXT;
                    if (i === Qo)
                        return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;
                    if (i === ta)
                        return r.COMPRESSED_RED_GREEN_RGTC2_EXT;
                    if (i === ea)
                        return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT
                } else
                    return null;
            return i === ss ? n.UNSIGNED_INT_24_8 : n[i] !== void 0 ? n[i] : null
        }
        return {
            convert: e
        }
    }
    var oa = class extends Ye {
        constructor(t = null) {
            super(),
                this.sourceTexture = t,
                this.isExternalTexture = !0
        }
    }
        , s0 = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`
        , r0 = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`
        , ic = class {
            constructor() {
                this.texture = null,
                    this.mesh = null,
                    this.depthNear = 0,
                    this.depthFar = 0
            }
            init(t, e) {
                if (this.texture === null) {
                    let i = new oa(t.texture);
                    (t.depthNear !== e.depthNear || t.depthFar !== e.depthFar) && (this.depthNear = t.depthNear,
                        this.depthFar = t.depthFar),
                        this.texture = i
                }
            }
            getMesh(t) {
                if (this.texture !== null && this.mesh === null) {
                    let e = t.cameras[0].viewport
                        , i = new ve({
                            vertexShader: s0,
                            fragmentShader: r0,
                            uniforms: {
                                depthColor: {
                                    value: this.texture
                                },
                                depthWidth: {
                                    value: e.z
                                },
                                depthHeight: {
                                    value: e.w
                                }
                            }
                        });
                    this.mesh = new Fe(new Gs(20, 20), i)
                }
                return this.mesh
            }
            reset() {
                this.texture = null,
                    this.mesh = null
            }
            getDepthTexture() {
                return this.texture
            }
        }
        , sc = class extends _n {
            constructor(t, e) {
                super();
                let i = this
                    , s = null
                    , r = 1
                    , o = null
                    , a = "local-floor"
                    , c = 1
                    , l = null
                    , d = null
                    , h = null
                    , f = null
                    , p = null
                    , v = null
                    , g = new ic
                    , m = {}
                    , u = e.getContextAttributes()
                    , E = null
                    , T = null
                    , y = []
                    , C = []
                    , R = new Mt
                    , D = null
                    , N = new Ae;
                N.viewport = new le;
                let S = new Ae;
                S.viewport = new le;
                let M = [N, S]
                    , w = new uo
                    , V = null
                    , H = null;
                this.cameraAutoUpdate = !0,
                    this.enabled = !1,
                    this.isPresenting = !1,
                    this.getController = function (X) {
                        let ot = y[X];
                        return ot === void 0 && (ot = new Qi,
                            y[X] = ot),
                            ot.getTargetRaySpace()
                    }
                    ,
                    this.getControllerGrip = function (X) {
                        let ot = y[X];
                        return ot === void 0 && (ot = new Qi,
                            y[X] = ot),
                            ot.getGripSpace()
                    }
                    ,
                    this.getHand = function (X) {
                        let ot = y[X];
                        return ot === void 0 && (ot = new Qi,
                            y[X] = ot),
                            ot.getHandSpace()
                    }
                    ;
                function z(X) {
                    let ot = C.indexOf(X.inputSource);
                    if (ot === -1)
                        return;
                    let nt = y[ot];
                    nt !== void 0 && (nt.update(X.inputSource, X.frame, l || o),
                        nt.dispatchEvent({
                            type: X.type,
                            data: X.inputSource
                        }))
                }
                function Z() {
                    s.removeEventListener("select", z),
                        s.removeEventListener("selectstart", z),
                        s.removeEventListener("selectend", z),
                        s.removeEventListener("squeeze", z),
                        s.removeEventListener("squeezestart", z),
                        s.removeEventListener("squeezeend", z),
                        s.removeEventListener("end", Z),
                        s.removeEventListener("inputsourceschange", q);
                    for (let X = 0; X < y.length; X++) {
                        let ot = C[X];
                        ot !== null && (C[X] = null,
                            y[X].disconnect(ot))
                    }
                    V = null,
                        H = null,
                        g.reset();
                    for (let X in m)
                        delete m[X];
                    t.setRenderTarget(E),
                        p = null,
                        f = null,
                        h = null,
                        s = null,
                        T = null,
                        Kt.stop(),
                        i.isPresenting = !1,
                        t.setPixelRatio(D),
                        t.setSize(R.width, R.height, !1),
                        i.dispatchEvent({
                            type: "sessionend"
                        })
                }
                this.setFramebufferScaleFactor = function (X) {
                    r = X,
                        i.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")
                }
                    ,
                    this.setReferenceSpaceType = function (X) {
                        a = X,
                            i.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")
                    }
                    ,
                    this.getReferenceSpace = function () {
                        return l || o
                    }
                    ,
                    this.setReferenceSpace = function (X) {
                        l = X
                    }
                    ,
                    this.getBaseLayer = function () {
                        return f !== null ? f : p
                    }
                    ,
                    this.getBinding = function () {
                        return h
                    }
                    ,
                    this.getFrame = function () {
                        return v
                    }
                    ,
                    this.getSession = function () {
                        return s
                    }
                    ,
                    this.setSession = function (X) {
                        return ar(this, null, function* () {
                            if (s = X,
                                s !== null) {
                                if (E = t.getRenderTarget(),
                                    s.addEventListener("select", z),
                                    s.addEventListener("selectstart", z),
                                    s.addEventListener("selectend", z),
                                    s.addEventListener("squeeze", z),
                                    s.addEventListener("squeezestart", z),
                                    s.addEventListener("squeezeend", z),
                                    s.addEventListener("end", Z),
                                    s.addEventListener("inputsourceschange", q),
                                    u.xrCompatible !== !0 && (yield e.makeXRCompatible()),
                                    D = t.getPixelRatio(),
                                    t.getSize(R),
                                    typeof XRWebGLBinding != "undefined" && (h = new XRWebGLBinding(s, e)),
                                    h !== null && "createProjectionLayer" in XRWebGLBinding.prototype) {
                                    let nt = null
                                        , At = null
                                        , Ct = null;
                                    u.depth && (Ct = u.stencil ? e.DEPTH24_STENCIL8 : e.DEPTH_COMPONENT24,
                                        nt = u.stencil ? rs : $i,
                                        At = u.stencil ? ss : ti);
                                    let Lt = {
                                        colorFormat: e.RGBA8,
                                        depthFormat: Ct,
                                        scaleFactor: r
                                    };
                                    f = h.createProjectionLayer(Lt),
                                        s.updateRenderState({
                                            layers: [f]
                                        }),
                                        t.setPixelRatio(1),
                                        t.setSize(f.textureWidth, f.textureHeight, !1),
                                        T = new Te(f.textureWidth, f.textureHeight, {
                                            format: Oe,
                                            type: Mn,
                                            depthTexture: new Hs(f.textureWidth, f.textureHeight, At, void 0, void 0, void 0, void 0, void 0, void 0, nt),
                                            stencilBuffer: u.stencil,
                                            colorSpace: t.outputColorSpace,
                                            samples: u.antialias ? 4 : 0,
                                            resolveDepthBuffer: f.ignoreDepthValues === !1,
                                            resolveStencilBuffer: f.ignoreDepthValues === !1
                                        })
                                } else {
                                    let nt = {
                                        antialias: u.antialias,
                                        alpha: !0,
                                        depth: u.depth,
                                        stencil: u.stencil,
                                        framebufferScaleFactor: r
                                    };
                                    p = new XRWebGLLayer(s, e, nt),
                                        s.updateRenderState({
                                            baseLayer: p
                                        }),
                                        t.setPixelRatio(1),
                                        t.setSize(p.framebufferWidth, p.framebufferHeight, !1),
                                        T = new Te(p.framebufferWidth, p.framebufferHeight, {
                                            format: Oe,
                                            type: Mn,
                                            colorSpace: t.outputColorSpace,
                                            stencilBuffer: u.stencil,
                                            resolveDepthBuffer: p.ignoreDepthValues === !1,
                                            resolveStencilBuffer: p.ignoreDepthValues === !1
                                        })
                                }
                                T.isXRRenderTarget = !0,
                                    this.setFoveation(c),
                                    l = null,
                                    o = yield s.requestReferenceSpace(a),
                                    Kt.setContext(s),
                                    Kt.start(),
                                    i.isPresenting = !0,
                                    i.dispatchEvent({
                                        type: "sessionstart"
                                    })
                            }
                        })
                    }
                    ,
                    this.getEnvironmentBlendMode = function () {
                        if (s !== null)
                            return s.environmentBlendMode
                    }
                    ,
                    this.getDepthTexture = function () {
                        return g.getDepthTexture()
                    }
                    ;
                function q(X) {
                    for (let ot = 0; ot < X.removed.length; ot++) {
                        let nt = X.removed[ot]
                            , At = C.indexOf(nt);
                        At >= 0 && (C[At] = null,
                            y[At].disconnect(nt))
                    }
                    for (let ot = 0; ot < X.added.length; ot++) {
                        let nt = X.added[ot]
                            , At = C.indexOf(nt);
                        if (At === -1) {
                            for (let Lt = 0; Lt < y.length; Lt++)
                                if (Lt >= C.length) {
                                    C.push(nt),
                                        At = Lt;
                                    break
                                } else if (C[Lt] === null) {
                                    C[Lt] = nt,
                                        At = Lt;
                                    break
                                }
                            if (At === -1)
                                break
                        }
                        let Ct = y[At];
                        Ct && Ct.connect(nt)
                    }
                }
                let tt = new P
                    , k = new P;
                function rt(X, ot, nt) {
                    tt.setFromMatrixPosition(ot.matrixWorld),
                        k.setFromMatrixPosition(nt.matrixWorld);
                    let At = tt.distanceTo(k)
                        , Ct = ot.projectionMatrix.elements
                        , Lt = nt.projectionMatrix.elements
                        , ce = Ct[14] / (Ct[10] - 1)
                        , Ht = Ct[14] / (Ct[10] + 1)
                        , A = (Ct[9] + 1) / Ct[5]
                        , Qt = (Ct[9] - 1) / Ct[5]
                        , Et = (Ct[8] - 1) / Ct[0]
                        , Xt = (Lt[8] + 1) / Lt[0]
                        , St = ce * Et
                        , se = ce * Xt
                        , ft = At / (-Et + Xt)
                        , zt = ft * -Et;
                    if (ot.matrixWorld.decompose(X.position, X.quaternion, X.scale),
                        X.translateX(zt),
                        X.translateZ(ft),
                        X.matrixWorld.compose(X.position, X.quaternion, X.scale),
                        X.matrixWorldInverse.copy(X.matrixWorld).invert(),
                        Ct[10] === -1)
                        X.projectionMatrix.copy(ot.projectionMatrix),
                            X.projectionMatrixInverse.copy(ot.projectionMatrixInverse);
                    else {
                        let Se = ce + ft
                            , he = Ht + ft
                            , b = St - zt
                            , _ = se + (At - zt)
                            , F = A * Ht / he * Se
                            , W = Qt * Ht / he * Se;
                        X.projectionMatrix.makePerspective(b, _, F, W, Se, he),
                            X.projectionMatrixInverse.copy(X.projectionMatrix).invert()
                    }
                }
                function ht(X, ot) {
                    ot === null ? X.matrixWorld.copy(X.matrix) : X.matrixWorld.multiplyMatrices(ot.matrixWorld, X.matrix),
                        X.matrixWorldInverse.copy(X.matrixWorld).invert()
                }
                this.updateCamera = function (X) {
                    if (s === null)
                        return;
                    let ot = X.near
                        , nt = X.far;
                    g.texture !== null && (g.depthNear > 0 && (ot = g.depthNear),
                        g.depthFar > 0 && (nt = g.depthFar)),
                        w.near = S.near = N.near = ot,
                        w.far = S.far = N.far = nt,
                        (V !== w.near || H !== w.far) && (s.updateRenderState({
                            depthNear: w.near,
                            depthFar: w.far
                        }),
                            V = w.near,
                            H = w.far),
                        w.layers.mask = X.layers.mask | 6,
                        N.layers.mask = w.layers.mask & 3,
                        S.layers.mask = w.layers.mask & 5;
                    let At = X.parent
                        , Ct = w.cameras;
                    ht(w, At);
                    for (let Lt = 0; Lt < Ct.length; Lt++)
                        ht(Ct[Lt], At);
                    Ct.length === 2 ? rt(w, N, S) : w.projectionMatrix.copy(N.projectionMatrix),
                        bt(X, w, At)
                }
                    ;
                function bt(X, ot, nt) {
                    nt === null ? X.matrix.copy(ot.matrixWorld) : (X.matrix.copy(nt.matrixWorld),
                        X.matrix.invert(),
                        X.matrix.multiply(ot.matrixWorld)),
                        X.matrix.decompose(X.position, X.quaternion, X.scale),
                        X.updateMatrixWorld(!0),
                        X.projectionMatrix.copy(ot.projectionMatrix),
                        X.projectionMatrixInverse.copy(ot.projectionMatrixInverse),
                        X.isPerspectiveCamera && (X.fov = Ji * 2 * Math.atan(1 / X.projectionMatrix.elements[5]),
                            X.zoom = 1)
                }
                this.getCamera = function () {
                    return w
                }
                    ,
                    this.getFoveation = function () {
                        if (!(f === null && p === null))
                            return c
                    }
                    ,
                    this.setFoveation = function (X) {
                        c = X,
                            f !== null && (f.fixedFoveation = X),
                            p !== null && p.fixedFoveation !== void 0 && (p.fixedFoveation = X)
                    }
                    ,
                    this.hasDepthSensing = function () {
                        return g.texture !== null
                    }
                    ,
                    this.getDepthSensingMesh = function () {
                        return g.getMesh(w)
                    }
                    ,
                    this.getCameraTexture = function (X) {
                        return m[X]
                    }
                    ;
                let Bt = null;
                function ie(X, ot) {
                    if (d = ot.getViewerPose(l || o),
                        v = ot,
                        d !== null) {
                        let nt = d.views;
                        p !== null && (t.setRenderTargetFramebuffer(T, p.framebuffer),
                            t.setRenderTarget(T));
                        let At = !1;
                        nt.length !== w.cameras.length && (w.cameras.length = 0,
                            At = !0);
                        for (let Ht = 0; Ht < nt.length; Ht++) {
                            let A = nt[Ht]
                                , Qt = null;
                            if (p !== null)
                                Qt = p.getViewport(A);
                            else {
                                let Xt = h.getViewSubImage(f, A);
                                Qt = Xt.viewport,
                                    Ht === 0 && (t.setRenderTargetTextures(T, Xt.colorTexture, Xt.depthStencilTexture),
                                        t.setRenderTarget(T))
                            }
                            let Et = M[Ht];
                            Et === void 0 && (Et = new Ae,
                                Et.layers.enable(Ht),
                                Et.viewport = new le,
                                M[Ht] = Et),
                                Et.matrix.fromArray(A.transform.matrix),
                                Et.matrix.decompose(Et.position, Et.quaternion, Et.scale),
                                Et.projectionMatrix.fromArray(A.projectionMatrix),
                                Et.projectionMatrixInverse.copy(Et.projectionMatrix).invert(),
                                Et.viewport.set(Qt.x, Qt.y, Qt.width, Qt.height),
                                Ht === 0 && (w.matrix.copy(Et.matrix),
                                    w.matrix.decompose(w.position, w.quaternion, w.scale)),
                                At === !0 && w.cameras.push(Et)
                        }
                        let Ct = s.enabledFeatures;
                        if (Ct && Ct.includes("depth-sensing") && s.depthUsage == "gpu-optimized" && h) {
                            let Ht = h.getDepthInformation(nt[0]);
                            Ht && Ht.isValid && Ht.texture && g.init(Ht, s.renderState)
                        }
                        if (Ct && Ct.includes("camera-access") && (t.state.unbindTexture(),
                            h))
                            for (let Ht = 0; Ht < nt.length; Ht++) {
                                let A = nt[Ht].camera;
                                if (A) {
                                    let Qt = m[A];
                                    Qt || (Qt = new oa,
                                        m[A] = Qt);
                                    let Et = h.getCameraImage(A);
                                    Qt.sourceTexture = Et
                                }
                            }
                    }
                    for (let nt = 0; nt < y.length; nt++) {
                        let At = C[nt]
                            , Ct = y[nt];
                        At !== null && Ct !== void 0 && Ct.update(At, ot, l || o)
                    }
                    Bt && Bt(X, ot),
                        ot.detectedPlanes && i.dispatchEvent({
                            type: "planesdetected",
                            data: ot
                        }),
                        v = null
                }
                let Kt = new ku;
                Kt.setAnimationLoop(ie),
                    this.setAnimationLoop = function (X) {
                        Bt = X
                    }
                    ,
                    this.dispose = function () { }
            }
        }
        , Ei = new vn
        , o0 = new me;
    function a0(n, t) {
        function e(m, u) {
            m.matrixAutoUpdate === !0 && m.updateMatrix(),
                u.value.copy(m.matrix)
        }
        function i(m, u) {
            u.color.getRGB(m.fogColor.value, Vl(n)),
                u.isFog ? (m.fogNear.value = u.near,
                    m.fogFar.value = u.far) : u.isFogExp2 && (m.fogDensity.value = u.density)
        }
        function s(m, u, E, T, y) {
            u.isMeshBasicMaterial || u.isMeshLambertMaterial ? r(m, u) : u.isMeshToonMaterial ? (r(m, u),
                h(m, u)) : u.isMeshPhongMaterial ? (r(m, u),
                    d(m, u)) : u.isMeshStandardMaterial ? (r(m, u),
                        f(m, u),
                        u.isMeshPhysicalMaterial && p(m, u, y)) : u.isMeshMatcapMaterial ? (r(m, u),
                            v(m, u)) : u.isMeshDepthMaterial ? r(m, u) : u.isMeshDistanceMaterial ? (r(m, u),
                                g(m, u)) : u.isMeshNormalMaterial ? r(m, u) : u.isLineBasicMaterial ? (o(m, u),
                                    u.isLineDashedMaterial && a(m, u)) : u.isPointsMaterial ? c(m, u, E, T) : u.isSpriteMaterial ? l(m, u) : u.isShadowMaterial ? (m.color.value.copy(u.color),
                                        m.opacity.value = u.opacity) : u.isShaderMaterial && (u.uniformsNeedUpdate = !1)
        }
        function r(m, u) {
            m.opacity.value = u.opacity,
                u.color && m.diffuse.value.copy(u.color),
                u.emissive && m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),
                u.map && (m.map.value = u.map,
                    e(u.map, m.mapTransform)),
                u.alphaMap && (m.alphaMap.value = u.alphaMap,
                    e(u.alphaMap, m.alphaMapTransform)),
                u.bumpMap && (m.bumpMap.value = u.bumpMap,
                    e(u.bumpMap, m.bumpMapTransform),
                    m.bumpScale.value = u.bumpScale,
                    u.side === De && (m.bumpScale.value *= -1)),
                u.normalMap && (m.normalMap.value = u.normalMap,
                    e(u.normalMap, m.normalMapTransform),
                    m.normalScale.value.copy(u.normalScale),
                    u.side === De && m.normalScale.value.negate()),
                u.displacementMap && (m.displacementMap.value = u.displacementMap,
                    e(u.displacementMap, m.displacementMapTransform),
                    m.displacementScale.value = u.displacementScale,
                    m.displacementBias.value = u.displacementBias),
                u.emissiveMap && (m.emissiveMap.value = u.emissiveMap,
                    e(u.emissiveMap, m.emissiveMapTransform)),
                u.specularMap && (m.specularMap.value = u.specularMap,
                    e(u.specularMap, m.specularMapTransform)),
                u.alphaTest > 0 && (m.alphaTest.value = u.alphaTest);
            let E = t.get(u)
                , T = E.envMap
                , y = E.envMapRotation;
            T && (m.envMap.value = T,
                Ei.copy(y),
                Ei.x *= -1,
                Ei.y *= -1,
                Ei.z *= -1,
                T.isCubeTexture && T.isRenderTargetTexture === !1 && (Ei.y *= -1,
                    Ei.z *= -1),
                m.envMapRotation.value.setFromMatrix4(o0.makeRotationFromEuler(Ei)),
                m.flipEnvMap.value = T.isCubeTexture && T.isRenderTargetTexture === !1 ? -1 : 1,
                m.reflectivity.value = u.reflectivity,
                m.ior.value = u.ior,
                m.refractionRatio.value = u.refractionRatio),
                u.lightMap && (m.lightMap.value = u.lightMap,
                    m.lightMapIntensity.value = u.lightMapIntensity,
                    e(u.lightMap, m.lightMapTransform)),
                u.aoMap && (m.aoMap.value = u.aoMap,
                    m.aoMapIntensity.value = u.aoMapIntensity,
                    e(u.aoMap, m.aoMapTransform))
        }
        function o(m, u) {
            m.diffuse.value.copy(u.color),
                m.opacity.value = u.opacity,
                u.map && (m.map.value = u.map,
                    e(u.map, m.mapTransform))
        }
        function a(m, u) {
            m.dashSize.value = u.dashSize,
                m.totalSize.value = u.dashSize + u.gapSize,
                m.scale.value = u.scale
        }
        function c(m, u, E, T) {
            m.diffuse.value.copy(u.color),
                m.opacity.value = u.opacity,
                m.size.value = u.size * E,
                m.scale.value = T * .5,
                u.map && (m.map.value = u.map,
                    e(u.map, m.uvTransform)),
                u.alphaMap && (m.alphaMap.value = u.alphaMap,
                    e(u.alphaMap, m.alphaMapTransform)),
                u.alphaTest > 0 && (m.alphaTest.value = u.alphaTest)
        }
        function l(m, u) {
            m.diffuse.value.copy(u.color),
                m.opacity.value = u.opacity,
                m.rotation.value = u.rotation,
                u.map && (m.map.value = u.map,
                    e(u.map, m.mapTransform)),
                u.alphaMap && (m.alphaMap.value = u.alphaMap,
                    e(u.alphaMap, m.alphaMapTransform)),
                u.alphaTest > 0 && (m.alphaTest.value = u.alphaTest)
        }
        function d(m, u) {
            m.specular.value.copy(u.specular),
                m.shininess.value = Math.max(u.shininess, 1e-4)
        }
        function h(m, u) {
            u.gradientMap && (m.gradientMap.value = u.gradientMap)
        }
        function f(m, u) {
            m.metalness.value = u.metalness,
                u.metalnessMap && (m.metalnessMap.value = u.metalnessMap,
                    e(u.metalnessMap, m.metalnessMapTransform)),
                m.roughness.value = u.roughness,
                u.roughnessMap && (m.roughnessMap.value = u.roughnessMap,
                    e(u.roughnessMap, m.roughnessMapTransform)),
                u.envMap && (m.envMapIntensity.value = u.envMapIntensity)
        }
        function p(m, u, E) {
            m.ior.value = u.ior,
                u.sheen > 0 && (m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),
                    m.sheenRoughness.value = u.sheenRoughness,
                    u.sheenColorMap && (m.sheenColorMap.value = u.sheenColorMap,
                        e(u.sheenColorMap, m.sheenColorMapTransform)),
                    u.sheenRoughnessMap && (m.sheenRoughnessMap.value = u.sheenRoughnessMap,
                        e(u.sheenRoughnessMap, m.sheenRoughnessMapTransform))),
                u.clearcoat > 0 && (m.clearcoat.value = u.clearcoat,
                    m.clearcoatRoughness.value = u.clearcoatRoughness,
                    u.clearcoatMap && (m.clearcoatMap.value = u.clearcoatMap,
                        e(u.clearcoatMap, m.clearcoatMapTransform)),
                    u.clearcoatRoughnessMap && (m.clearcoatRoughnessMap.value = u.clearcoatRoughnessMap,
                        e(u.clearcoatRoughnessMap, m.clearcoatRoughnessMapTransform)),
                    u.clearcoatNormalMap && (m.clearcoatNormalMap.value = u.clearcoatNormalMap,
                        e(u.clearcoatNormalMap, m.clearcoatNormalMapTransform),
                        m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),
                        u.side === De && m.clearcoatNormalScale.value.negate())),
                u.dispersion > 0 && (m.dispersion.value = u.dispersion),
                u.iridescence > 0 && (m.iridescence.value = u.iridescence,
                    m.iridescenceIOR.value = u.iridescenceIOR,
                    m.iridescenceThicknessMinimum.value = u.iridescenceThicknessRange[0],
                    m.iridescenceThicknessMaximum.value = u.iridescenceThicknessRange[1],
                    u.iridescenceMap && (m.iridescenceMap.value = u.iridescenceMap,
                        e(u.iridescenceMap, m.iridescenceMapTransform)),
                    u.iridescenceThicknessMap && (m.iridescenceThicknessMap.value = u.iridescenceThicknessMap,
                        e(u.iridescenceThicknessMap, m.iridescenceThicknessMapTransform))),
                u.transmission > 0 && (m.transmission.value = u.transmission,
                    m.transmissionSamplerMap.value = E.texture,
                    m.transmissionSamplerSize.value.set(E.width, E.height),
                    u.transmissionMap && (m.transmissionMap.value = u.transmissionMap,
                        e(u.transmissionMap, m.transmissionMapTransform)),
                    m.thickness.value = u.thickness,
                    u.thicknessMap && (m.thicknessMap.value = u.thicknessMap,
                        e(u.thicknessMap, m.thicknessMapTransform)),
                    m.attenuationDistance.value = u.attenuationDistance,
                    m.attenuationColor.value.copy(u.attenuationColor)),
                u.anisotropy > 0 && (m.anisotropyVector.value.set(u.anisotropy * Math.cos(u.anisotropyRotation), u.anisotropy * Math.sin(u.anisotropyRotation)),
                    u.anisotropyMap && (m.anisotropyMap.value = u.anisotropyMap,
                        e(u.anisotropyMap, m.anisotropyMapTransform))),
                m.specularIntensity.value = u.specularIntensity,
                m.specularColor.value.copy(u.specularColor),
                u.specularColorMap && (m.specularColorMap.value = u.specularColorMap,
                    e(u.specularColorMap, m.specularColorMapTransform)),
                u.specularIntensityMap && (m.specularIntensityMap.value = u.specularIntensityMap,
                    e(u.specularIntensityMap, m.specularIntensityMapTransform))
        }
        function v(m, u) {
            u.matcap && (m.matcap.value = u.matcap)
        }
        function g(m, u) {
            let E = t.get(u).light;
            m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),
                m.nearDistance.value = E.shadow.camera.near,
                m.farDistance.value = E.shadow.camera.far
        }
        return {
            refreshFogUniforms: i,
            refreshMaterialUniforms: s
        }
    }
    function l0(n, t, e, i) {
        let s = {}
            , r = {}
            , o = []
            , a = n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);
        function c(E, T) {
            let y = T.program;
            i.uniformBlockBinding(E, y)
        }
        function l(E, T) {
            let y = s[E.id];
            y === void 0 && (v(E),
                y = d(E),
                s[E.id] = y,
                E.addEventListener("dispose", m));
            let C = T.program;
            i.updateUBOMapping(E, C);
            let R = t.render.frame;
            r[E.id] !== R && (f(E),
                r[E.id] = R)
        }
        function d(E) {
            let T = h();
            E.__bindingPointIndex = T;
            let y = n.createBuffer()
                , C = E.__size
                , R = E.usage;
            return n.bindBuffer(n.UNIFORM_BUFFER, y),
                n.bufferData(n.UNIFORM_BUFFER, C, R),
                n.bindBuffer(n.UNIFORM_BUFFER, null),
                n.bindBufferBase(n.UNIFORM_BUFFER, T, y),
                y
        }
        function h() {
            for (let E = 0; E < a; E++)
                if (o.indexOf(E) === -1)
                    return o.push(E),
                        E;
            return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),
                0
        }
        function f(E) {
            let T = s[E.id]
                , y = E.uniforms
                , C = E.__cache;
            n.bindBuffer(n.UNIFORM_BUFFER, T);
            for (let R = 0, D = y.length; R < D; R++) {
                let N = Array.isArray(y[R]) ? y[R] : [y[R]];
                for (let S = 0, M = N.length; S < M; S++) {
                    let w = N[S];
                    if (p(w, R, S, C) === !0) {
                        let V = w.__offset
                            , H = Array.isArray(w.value) ? w.value : [w.value]
                            , z = 0;
                        for (let Z = 0; Z < H.length; Z++) {
                            let q = H[Z]
                                , tt = g(q);
                            typeof q == "number" || typeof q == "boolean" ? (w.__data[0] = q,
                                n.bufferSubData(n.UNIFORM_BUFFER, V + z, w.__data)) : q.isMatrix3 ? (w.__data[0] = q.elements[0],
                                    w.__data[1] = q.elements[1],
                                    w.__data[2] = q.elements[2],
                                    w.__data[3] = 0,
                                    w.__data[4] = q.elements[3],
                                    w.__data[5] = q.elements[4],
                                    w.__data[6] = q.elements[5],
                                    w.__data[7] = 0,
                                    w.__data[8] = q.elements[6],
                                    w.__data[9] = q.elements[7],
                                    w.__data[10] = q.elements[8],
                                    w.__data[11] = 0) : (q.toArray(w.__data, z),
                                        z += tt.storage / Float32Array.BYTES_PER_ELEMENT)
                        }
                        n.bufferSubData(n.UNIFORM_BUFFER, V, w.__data)
                    }
                }
            }
            n.bindBuffer(n.UNIFORM_BUFFER, null)
        }
        function p(E, T, y, C) {
            let R = E.value
                , D = T + "_" + y;
            if (C[D] === void 0)
                return typeof R == "number" || typeof R == "boolean" ? C[D] = R : C[D] = R.clone(),
                    !0;
            {
                let N = C[D];
                if (typeof R == "number" || typeof R == "boolean") {
                    if (N !== R)
                        return C[D] = R,
                            !0
                } else if (N.equals(R) === !1)
                    return N.copy(R),
                        !0
            }
            return !1
        }
        function v(E) {
            let T = E.uniforms
                , y = 0
                , C = 16;
            for (let D = 0, N = T.length; D < N; D++) {
                let S = Array.isArray(T[D]) ? T[D] : [T[D]];
                for (let M = 0, w = S.length; M < w; M++) {
                    let V = S[M]
                        , H = Array.isArray(V.value) ? V.value : [V.value];
                    for (let z = 0, Z = H.length; z < Z; z++) {
                        let q = H[z]
                            , tt = g(q)
                            , k = y % C
                            , rt = k % tt.boundary
                            , ht = k + rt;
                        y += rt,
                            ht !== 0 && C - ht < tt.storage && (y += C - ht),
                            V.__data = new Float32Array(tt.storage / Float32Array.BYTES_PER_ELEMENT),
                            V.__offset = y,
                            y += tt.storage
                    }
                }
            }
            let R = y % C;
            return R > 0 && (y += C - R),
                E.__size = y,
                E.__cache = {},
                this
        }
        function g(E) {
            let T = {
                boundary: 0,
                storage: 0
            };
            return typeof E == "number" || typeof E == "boolean" ? (T.boundary = 4,
                T.storage = 4) : E.isVector2 ? (T.boundary = 8,
                    T.storage = 8) : E.isVector3 || E.isColor ? (T.boundary = 16,
                        T.storage = 12) : E.isVector4 ? (T.boundary = 16,
                            T.storage = 16) : E.isMatrix3 ? (T.boundary = 48,
                                T.storage = 48) : E.isMatrix4 ? (T.boundary = 64,
                                    T.storage = 64) : E.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", E),
                T
        }
        function m(E) {
            let T = E.target;
            T.removeEventListener("dispose", m);
            let y = o.indexOf(T.__bindingPointIndex);
            o.splice(y, 1),
                n.deleteBuffer(s[T.id]),
                delete s[T.id],
                delete r[T.id]
        }
        function u() {
            for (let E in s)
                n.deleteBuffer(s[E]);
            o = [],
                s = {},
                r = {}
        }
        return {
            bind: c,
            update: l,
            dispose: u
        }
    }
    var aa = class {
        constructor(t = {}) {
            let { canvas: e = fu(), context: i = null, depth: s = !0, stencil: r = !1, alpha: o = !1, antialias: a = !1, premultipliedAlpha: c = !0, preserveDrawingBuffer: l = !1, powerPreference: d = "default", failIfMajorPerformanceCaveat: h = !1, reversedDepthBuffer: f = !1 } = t;
            this.isWebGLRenderer = !0;
            let p;
            if (i !== null) {
                if (typeof WebGLRenderingContext != "undefined" && i instanceof WebGLRenderingContext)
                    throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
                p = i.getContextAttributes().alpha
            } else
                p = o;
            let v = new Uint32Array(4)
                , g = new Int32Array(4)
                , m = null
                , u = null
                , E = []
                , T = [];
            this.domElement = e,
                this.debug = {
                    checkShaderErrors: !0,
                    onShaderError: null
                },
                this.autoClear = !0,
                this.autoClearColor = !0,
                this.autoClearDepth = !0,
                this.autoClearStencil = !0,
                this.sortObjects = !0,
                this.clippingPlanes = [],
                this.localClippingEnabled = !1,
                this.toneMapping = Un,
                this.toneMappingExposure = 1,
                this.transmissionResolutionScale = 1;
            let y = this
                , C = !1;
            this._outputColorSpace = Xe;
            let R = 0
                , D = 0
                , N = null
                , S = -1
                , M = null
                , w = new le
                , V = new le
                , H = null
                , z = new Dt(0)
                , Z = 0
                , q = e.width
                , tt = e.height
                , k = 1
                , rt = null
                , ht = null
                , bt = new le(0, 0, q, tt)
                , Bt = new le(0, 0, q, tt)
                , ie = !1
                , Kt = new ks
                , X = !1
                , ot = !1
                , nt = new me
                , At = new P
                , Ct = new le
                , Lt = {
                    background: null,
                    fog: null,
                    environment: null,
                    overrideMaterial: null,
                    isScene: !0
                }
                , ce = !1;
            function Ht() {
                return N === null ? k : 1
            }
            let A = i;
            function Qt(x, L) {
                return e.getContext(x, L)
            }
            try {
                let x = {
                    alpha: !0,
                    depth: s,
                    stencil: r,
                    antialias: a,
                    premultipliedAlpha: c,
                    preserveDrawingBuffer: l,
                    powerPreference: d,
                    failIfMajorPerformanceCaveat: h
                };
                if ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${"179"}`),
                    e.addEventListener("webglcontextlost", it, !1),
                    e.addEventListener("webglcontextrestored", dt, !1),
                    e.addEventListener("webglcontextcreationerror", J, !1),
                    A === null) {
                    let L = "webgl2";
                    if (A = Qt(L, x),
                        A === null)
                        throw Qt(L) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.")
                }
            } catch (x) {
                throw console.error("THREE.WebGLRenderer: " + x.message),
                x
            }
            let Et, Xt, St, se, ft, zt, Se, he, b, _, F, W, $, G, yt, et, gt, vt, j, ct, Pt, xt, at, Ft;
            function I() {
                Et = new wg(A),
                    Et.init(),
                    xt = new i0(A, Et),
                    Xt = new xg(A, Et, t, xt),
                    St = new e0(A, Et),
                    Xt.reversedDepthBuffer && f && St.buffers.depth.setReversed(!0),
                    se = new Rg(A),
                    ft = new H_,
                    zt = new n0(A, Et, St, ft, Xt, xt, se),
                    Se = new Mg(y),
                    he = new Eg(y),
                    b = new Nf(A),
                    at = new _g(A, b),
                    _ = new Ag(A, b, se, at),
                    F = new Ig(A, _, b, se),
                    j = new Pg(A, Xt, zt),
                    et = new yg(ft),
                    W = new V_(y, Se, he, Et, Xt, at, et),
                    $ = new a0(y, ft),
                    G = new W_,
                    yt = new J_(Et),
                    vt = new gg(y, Se, he, St, F, p, c),
                    gt = new Q_(y, F, Xt),
                    Ft = new l0(A, se, Xt, St),
                    ct = new vg(A, Et, se),
                    Pt = new Cg(A, Et, se),
                    se.programs = W.programs,
                    y.capabilities = Xt,
                    y.extensions = Et,
                    y.properties = ft,
                    y.renderLists = G,
                    y.shadowMap = gt,
                    y.state = St,
                    y.info = se
            }
            I();
            let Q = new sc(y, A);
            this.xr = Q,
                this.getContext = function () {
                    return A
                }
                ,
                this.getContextAttributes = function () {
                    return A.getContextAttributes()
                }
                ,
                this.forceContextLoss = function () {
                    let x = Et.get("WEBGL_lose_context");
                    x && x.loseContext()
                }
                ,
                this.forceContextRestore = function () {
                    let x = Et.get("WEBGL_lose_context");
                    x && x.restoreContext()
                }
                ,
                this.getPixelRatio = function () {
                    return k
                }
                ,
                this.setPixelRatio = function (x) {
                    x !== void 0 && (k = x,
                        this.setSize(q, tt, !1))
                }
                ,
                this.getSize = function (x) {
                    return x.set(q, tt)
                }
                ,
                this.setSize = function (x, L, O = !0) {
                    if (Q.isPresenting) {
                        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
                        return
                    }
                    q = x,
                        tt = L,
                        e.width = Math.floor(x * k),
                        e.height = Math.floor(L * k),
                        O === !0 && (e.style.width = x + "px",
                            e.style.height = L + "px"),
                        this.setViewport(0, 0, x, L)
                }
                ,
                this.getDrawingBufferSize = function (x) {
                    return x.set(q * k, tt * k).floor()
                }
                ,
                this.setDrawingBufferSize = function (x, L, O) {
                    q = x,
                        tt = L,
                        k = O,
                        e.width = Math.floor(x * O),
                        e.height = Math.floor(L * O),
                        this.setViewport(0, 0, x, L)
                }
                ,
                this.getCurrentViewport = function (x) {
                    return x.copy(w)
                }
                ,
                this.getViewport = function (x) {
                    return x.copy(bt)
                }
                ,
                this.setViewport = function (x, L, O, B) {
                    x.isVector4 ? bt.set(x.x, x.y, x.z, x.w) : bt.set(x, L, O, B),
                        St.viewport(w.copy(bt).multiplyScalar(k).round())
                }
                ,
                this.getScissor = function (x) {
                    return x.copy(Bt)
                }
                ,
                this.setScissor = function (x, L, O, B) {
                    x.isVector4 ? Bt.set(x.x, x.y, x.z, x.w) : Bt.set(x, L, O, B),
                        St.scissor(V.copy(Bt).multiplyScalar(k).round())
                }
                ,
                this.getScissorTest = function () {
                    return ie
                }
                ,
                this.setScissorTest = function (x) {
                    St.setScissorTest(ie = x)
                }
                ,
                this.setOpaqueSort = function (x) {
                    rt = x
                }
                ,
                this.setTransparentSort = function (x) {
                    ht = x
                }
                ,
                this.getClearColor = function (x) {
                    return x.copy(vt.getClearColor())
                }
                ,
                this.setClearColor = function () {
                    vt.setClearColor(...arguments)
                }
                ,
                this.getClearAlpha = function () {
                    return vt.getClearAlpha()
                }
                ,
                this.setClearAlpha = function () {
                    vt.setClearAlpha(...arguments)
                }
                ,
                this.clear = function (x = !0, L = !0, O = !0) {
                    let B = 0;
                    if (x) {
                        let U = !1;
                        if (N !== null) {
                            let K = N.texture.format;
                            U = K === Ro || K === Co || K === Ao
                        }
                        if (U) {
                            let K = N.texture.type
                                , lt = K === Mn || K === ti || K === is || K === ss || K === Eo || K === wo
                                , pt = vt.getClearColor()
                                , ut = vt.getClearAlpha()
                                , Rt = pt.r
                                , It = pt.g
                                , Tt = pt.b;
                            lt ? (v[0] = Rt,
                                v[1] = It,
                                v[2] = Tt,
                                v[3] = ut,
                                A.clearBufferuiv(A.COLOR, 0, v)) : (g[0] = Rt,
                                    g[1] = It,
                                    g[2] = Tt,
                                    g[3] = ut,
                                    A.clearBufferiv(A.COLOR, 0, g))
                        } else
                            B |= A.COLOR_BUFFER_BIT
                    }
                    L && (B |= A.DEPTH_BUFFER_BIT),
                        O && (B |= A.STENCIL_BUFFER_BIT,
                            this.state.buffers.stencil.setMask(4294967295)),
                        A.clear(B)
                }
                ,
                this.clearColor = function () {
                    this.clear(!0, !1, !1)
                }
                ,
                this.clearDepth = function () {
                    this.clear(!1, !0, !1)
                }
                ,
                this.clearStencil = function () {
                    this.clear(!1, !1, !0)
                }
                ,
                this.dispose = function () {
                    e.removeEventListener("webglcontextlost", it, !1),
                        e.removeEventListener("webglcontextrestored", dt, !1),
                        e.removeEventListener("webglcontextcreationerror", J, !1),
                        vt.dispose(),
                        G.dispose(),
                        yt.dispose(),
                        ft.dispose(),
                        Se.dispose(),
                        he.dispose(),
                        F.dispose(),
                        at.dispose(),
                        Ft.dispose(),
                        W.dispose(),
                        Q.dispose(),
                        Q.removeEventListener("sessionstart", pn),
                        Q.removeEventListener("sessionend", dc),
                        ei.stop()
                }
                ;
            function it(x) {
                x.preventDefault(),
                    console.log("THREE.WebGLRenderer: Context Lost."),
                    C = !0
            }
            function dt() {
                console.log("THREE.WebGLRenderer: Context Restored."),
                    C = !1;
                let x = se.autoReset
                    , L = gt.enabled
                    , O = gt.autoUpdate
                    , B = gt.needsUpdate
                    , U = gt.type;
                I(),
                    se.autoReset = x,
                    gt.enabled = L,
                    gt.autoUpdate = O,
                    gt.needsUpdate = B,
                    gt.type = U
            }
            function J(x) {
                console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", x.statusMessage)
            }
            function Y(x) {
                let L = x.target;
                L.removeEventListener("dispose", Y),
                    mt(L)
            }
            function mt(x) {
                Ut(x),
                    ft.remove(x)
            }
            function Ut(x) {
                let L = ft.get(x).programs;
                L !== void 0 && (L.forEach(function (O) {
                    W.releaseProgram(O)
                }),
                    x.isShaderMaterial && W.releaseShaderCache(x))
            }
            this.renderBufferDirect = function (x, L, O, B, U, K) {
                L === null && (L = Lt);
                let lt = U.isMesh && U.matrixWorld.determinant() < 0
                    , pt = rd(x, L, O, B, U);
                St.setMaterial(B, lt);
                let ut = O.index
                    , Rt = 1;
                if (B.wireframe === !0) {
                    if (ut = _.getWireframeAttribute(O),
                        ut === void 0)
                        return;
                    Rt = 2
                }
                let It = O.drawRange
                    , Tt = O.attributes.position
                    , Vt = It.start * Rt
                    , $t = (It.start + It.count) * Rt;
                K !== null && (Vt = Math.max(Vt, K.start * Rt),
                    $t = Math.min($t, (K.start + K.count) * Rt)),
                    ut !== null ? (Vt = Math.max(Vt, 0),
                        $t = Math.min($t, ut.count)) : Tt != null && (Vt = Math.max(Vt, 0),
                            $t = Math.min($t, Tt.count));
                let ae = $t - Vt;
                if (ae < 0 || ae === 1 / 0)
                    return;
                at.setup(U, B, pt, O, ut);
                let ee, jt = ct;
                if (ut !== null && (ee = b.get(ut),
                    jt = Pt,
                    jt.setIndex(ee)),
                    U.isMesh)
                    B.wireframe === !0 ? (St.setLineWidth(B.wireframeLinewidth * Ht()),
                        jt.setMode(A.LINES)) : jt.setMode(A.TRIANGLES);
                else if (U.isLine) {
                    let wt = B.linewidth;
                    wt === void 0 && (wt = 1),
                        St.setLineWidth(wt * Ht()),
                        U.isLineSegments ? jt.setMode(A.LINES) : U.isLineLoop ? jt.setMode(A.LINE_LOOP) : jt.setMode(A.LINE_STRIP)
                } else
                    U.isPoints ? jt.setMode(A.POINTS) : U.isSprite && jt.setMode(A.TRIANGLES);
                if (U.isBatchedMesh)
                    if (U._multiDrawInstances !== null)
                        pi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),
                            jt.renderMultiDrawInstances(U._multiDrawStarts, U._multiDrawCounts, U._multiDrawCount, U._multiDrawInstances);
                    else if (Et.get("WEBGL_multi_draw"))
                        jt.renderMultiDraw(U._multiDrawStarts, U._multiDrawCounts, U._multiDrawCount);
                    else {
                        let wt = U._multiDrawStarts
                            , re = U._multiDrawCounts
                            , Wt = U._multiDrawCount
                            , ze = ut ? b.get(ut).bytesPerElement : 1
                            , Ri = ft.get(B).currentProgram.getUniforms();
                        for (let ke = 0; ke < Wt; ke++)
                            Ri.setValue(A, "_gl_DrawID", ke),
                                jt.render(wt[ke] / ze, re[ke])
                    }
                else if (U.isInstancedMesh)
                    jt.renderInstances(Vt, ae, U.count);
                else if (O.isInstancedBufferGeometry) {
                    let wt = O._maxInstanceCount !== void 0 ? O._maxInstanceCount : 1 / 0
                        , re = Math.min(O.instanceCount, wt);
                    jt.renderInstances(Vt, ae, re)
                } else
                    jt.render(Vt, ae)
            }
                ;
            function te(x, L, O) {
                x.transparent === !0 && x.side === yn && x.forceSinglePass === !1 ? (x.side = De,
                    x.needsUpdate = !0,
                    rr(x, L, O),
                    x.side = Ln,
                    x.needsUpdate = !0,
                    rr(x, L, O),
                    x.side = yn) : rr(x, L, O)
            }
            this.compile = function (x, L, O = null) {
                O === null && (O = x),
                    u = yt.get(O),
                    u.init(L),
                    T.push(u),
                    O.traverseVisible(function (U) {
                        U.isLight && U.layers.test(L.layers) && (u.pushLight(U),
                            U.castShadow && u.pushShadow(U))
                    }),
                    x !== O && x.traverseVisible(function (U) {
                        U.isLight && U.layers.test(L.layers) && (u.pushLight(U),
                            U.castShadow && u.pushShadow(U))
                    }),
                    u.setupLights();
                let B = new Set;
                return x.traverse(function (U) {
                    if (!(U.isMesh || U.isPoints || U.isLine || U.isSprite))
                        return;
                    let K = U.material;
                    if (K)
                        if (Array.isArray(K))
                            for (let lt = 0; lt < K.length; lt++) {
                                let pt = K[lt];
                                te(pt, O, U),
                                    B.add(pt)
                            }
                        else
                            te(K, O, U),
                                B.add(K)
                }),
                    u = T.pop(),
                    B
            }
                ,
                this.compileAsync = function (x, L, O = null) {
                    let B = this.compile(x, L, O);
                    return new Promise(U => {
                        function K() {
                            if (B.forEach(function (lt) {
                                ft.get(lt).currentProgram.isReady() && B.delete(lt)
                            }),
                                B.size === 0) {
                                U(x);
                                return
                            }
                            setTimeout(K, 10)
                        }
                        Et.get("KHR_parallel_shader_compile") !== null ? K() : setTimeout(K, 10)
                    }
                    )
                }
                ;
            let qt = null;
            function Tn(x) {
                qt && qt(x)
            }
            function pn() {
                ei.stop()
            }
            function dc() {
                ei.start()
            }
            let ei = new ku;
            ei.setAnimationLoop(Tn),
                typeof self != "undefined" && ei.setContext(self),
                this.setAnimationLoop = function (x) {
                    qt = x,
                        Q.setAnimationLoop(x),
                        x === null ? ei.stop() : ei.start()
                }
                ,
                Q.addEventListener("sessionstart", pn),
                Q.addEventListener("sessionend", dc),
                this.render = function (x, L) {
                    if (L !== void 0 && L.isCamera !== !0) {
                        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
                        return
                    }
                    if (C === !0)
                        return;
                    if (x.matrixWorldAutoUpdate === !0 && x.updateMatrixWorld(),
                        L.parent === null && L.matrixWorldAutoUpdate === !0 && L.updateMatrixWorld(),
                        Q.enabled === !0 && Q.isPresenting === !0 && (Q.cameraAutoUpdate === !0 && Q.updateCamera(L),
                            L = Q.getCamera()),
                        x.isScene === !0 && x.onBeforeRender(y, x, L, N),
                        u = yt.get(x, T.length),
                        u.init(L),
                        T.push(u),
                        nt.multiplyMatrices(L.projectionMatrix, L.matrixWorldInverse),
                        Kt.setFromProjectionMatrix(nt, hn, L.reversedDepth),
                        ot = this.localClippingEnabled,
                        X = et.init(this.clippingPlanes, ot),
                        m = G.get(x, E.length),
                        m.init(),
                        E.push(m),
                        Q.enabled === !0 && Q.isPresenting === !0) {
                        let K = y.xr.getDepthSensingMesh();
                        K !== null && Sa(K, L, -1 / 0, y.sortObjects)
                    }
                    Sa(x, L, 0, y.sortObjects),
                        m.finish(),
                        y.sortObjects === !0 && m.sort(rt, ht),
                        ce = Q.enabled === !1 || Q.isPresenting === !1 || Q.hasDepthSensing() === !1,
                        ce && vt.addToRenderList(m, x),
                        this.info.render.frame++,
                        X === !0 && et.beginShadows();
                    let O = u.state.shadowsArray;
                    gt.render(O, x, L),
                        X === !0 && et.endShadows(),
                        this.info.autoReset === !0 && this.info.reset();
                    let B = m.opaque
                        , U = m.transmissive;
                    if (u.setupLights(),
                        L.isArrayCamera) {
                        let K = L.cameras;
                        if (U.length > 0)
                            for (let lt = 0, pt = K.length; lt < pt; lt++) {
                                let ut = K[lt];
                                pc(B, U, x, ut)
                            }
                        ce && vt.render(x);
                        for (let lt = 0, pt = K.length; lt < pt; lt++) {
                            let ut = K[lt];
                            fc(m, x, ut, ut.viewport)
                        }
                    } else
                        U.length > 0 && pc(B, U, x, L),
                            ce && vt.render(x),
                            fc(m, x, L);
                    N !== null && D === 0 && (zt.updateMultisampleRenderTarget(N),
                        zt.updateRenderTargetMipmap(N)),
                        x.isScene === !0 && x.onAfterRender(y, x, L),
                        at.resetDefaultState(),
                        S = -1,
                        M = null,
                        T.pop(),
                        T.length > 0 ? (u = T[T.length - 1],
                            X === !0 && et.setGlobalState(y.clippingPlanes, u.state.camera)) : u = null,
                        E.pop(),
                        E.length > 0 ? m = E[E.length - 1] : m = null
                }
                ;
            function Sa(x, L, O, B) {
                if (x.visible === !1)
                    return;
                if (x.layers.test(L.layers)) {
                    if (x.isGroup)
                        O = x.renderOrder;
                    else if (x.isLOD)
                        x.autoUpdate === !0 && x.update(L);
                    else if (x.isLight)
                        u.pushLight(x),
                            x.castShadow && u.pushShadow(x);
                    else if (x.isSprite) {
                        if (!x.frustumCulled || Kt.intersectsSprite(x)) {
                            B && Ct.setFromMatrixPosition(x.matrixWorld).applyMatrix4(nt);
                            let lt = F.update(x)
                                , pt = x.material;
                            pt.visible && m.push(x, lt, pt, O, Ct.z, null)
                        }
                    } else if ((x.isMesh || x.isLine || x.isPoints) && (!x.frustumCulled || Kt.intersectsObject(x))) {
                        let lt = F.update(x)
                            , pt = x.material;
                        if (B && (x.boundingSphere !== void 0 ? (x.boundingSphere === null && x.computeBoundingSphere(),
                            Ct.copy(x.boundingSphere.center)) : (lt.boundingSphere === null && lt.computeBoundingSphere(),
                                Ct.copy(lt.boundingSphere.center)),
                            Ct.applyMatrix4(x.matrixWorld).applyMatrix4(nt)),
                            Array.isArray(pt)) {
                            let ut = lt.groups;
                            for (let Rt = 0, It = ut.length; Rt < It; Rt++) {
                                let Tt = ut[Rt]
                                    , Vt = pt[Tt.materialIndex];
                                Vt && Vt.visible && m.push(x, lt, Vt, O, Ct.z, Tt)
                            }
                        } else
                            pt.visible && m.push(x, lt, pt, O, Ct.z, null)
                    }
                }
                let K = x.children;
                for (let lt = 0, pt = K.length; lt < pt; lt++)
                    Sa(K[lt], L, O, B)
            }
            function fc(x, L, O, B) {
                let U = x.opaque
                    , K = x.transmissive
                    , lt = x.transparent;
                u.setupLightsView(O),
                    X === !0 && et.setGlobalState(y.clippingPlanes, O),
                    B && St.viewport(w.copy(B)),
                    U.length > 0 && sr(U, L, O),
                    K.length > 0 && sr(K, L, O),
                    lt.length > 0 && sr(lt, L, O),
                    St.buffers.depth.setTest(!0),
                    St.buffers.depth.setMask(!0),
                    St.buffers.color.setMask(!0),
                    St.setPolygonOffset(!1)
            }
            function pc(x, L, O, B) {
                if ((O.isScene === !0 ? O.overrideMaterial : null) !== null)
                    return;
                u.state.transmissionRenderTarget[B.id] === void 0 && (u.state.transmissionRenderTarget[B.id] = new Te(1, 1, {
                    generateMipmaps: !0,
                    type: Et.has("EXT_color_buffer_half_float") || Et.has("EXT_color_buffer_float") ? on : Mn,
                    minFilter: Qn,
                    samples: 4,
                    stencilBuffer: r,
                    resolveDepthBuffer: !1,
                    resolveStencilBuffer: !1,
                    colorSpace: Gt.workingColorSpace
                }));
                let K = u.state.transmissionRenderTarget[B.id]
                    , lt = B.viewport || w;
                K.setSize(lt.z * y.transmissionResolutionScale, lt.w * y.transmissionResolutionScale);
                let pt = y.getRenderTarget()
                    , ut = y.getActiveCubeFace()
                    , Rt = y.getActiveMipmapLevel();
                y.setRenderTarget(K),
                    y.getClearColor(z),
                    Z = y.getClearAlpha(),
                    Z < 1 && y.setClearColor(16777215, .5),
                    y.clear(),
                    ce && vt.render(O);
                let It = y.toneMapping;
                y.toneMapping = Un;
                let Tt = B.viewport;
                if (B.viewport !== void 0 && (B.viewport = void 0),
                    u.setupLightsView(B),
                    X === !0 && et.setGlobalState(y.clippingPlanes, B),
                    sr(x, O, B),
                    zt.updateMultisampleRenderTarget(K),
                    zt.updateRenderTargetMipmap(K),
                    Et.has("WEBGL_multisampled_render_to_texture") === !1) {
                    let Vt = !1;
                    for (let $t = 0, ae = L.length; $t < ae; $t++) {
                        let ee = L[$t]
                            , jt = ee.object
                            , wt = ee.geometry
                            , re = ee.material
                            , Wt = ee.group;
                        if (re.side === yn && jt.layers.test(B.layers)) {
                            let ze = re.side;
                            re.side = De,
                                re.needsUpdate = !0,
                                mc(jt, O, B, wt, re, Wt),
                                re.side = ze,
                                re.needsUpdate = !0,
                                Vt = !0
                        }
                    }
                    Vt === !0 && (zt.updateMultisampleRenderTarget(K),
                        zt.updateRenderTargetMipmap(K))
                }
                y.setRenderTarget(pt, ut, Rt),
                    y.setClearColor(z, Z),
                    Tt !== void 0 && (B.viewport = Tt),
                    y.toneMapping = It
            }
            function sr(x, L, O) {
                let B = L.isScene === !0 ? L.overrideMaterial : null;
                for (let U = 0, K = x.length; U < K; U++) {
                    let lt = x[U]
                        , pt = lt.object
                        , ut = lt.geometry
                        , Rt = lt.group
                        , It = lt.material;
                    It.allowOverride === !0 && B !== null && (It = B),
                        pt.layers.test(O.layers) && mc(pt, L, O, ut, It, Rt)
                }
            }
            function mc(x, L, O, B, U, K) {
                x.onBeforeRender(y, L, O, B, U, K),
                    x.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse, x.matrixWorld),
                    x.normalMatrix.getNormalMatrix(x.modelViewMatrix),
                    U.onBeforeRender(y, L, O, B, x, K),
                    U.transparent === !0 && U.side === yn && U.forceSinglePass === !1 ? (U.side = De,
                        U.needsUpdate = !0,
                        y.renderBufferDirect(O, L, B, U, x, K),
                        U.side = Ln,
                        U.needsUpdate = !0,
                        y.renderBufferDirect(O, L, B, U, x, K),
                        U.side = yn) : y.renderBufferDirect(O, L, B, U, x, K),
                    x.onAfterRender(y, L, O, B, U, K)
            }
            function rr(x, L, O) {
                L.isScene !== !0 && (L = Lt);
                let B = ft.get(x)
                    , U = u.state.lights
                    , K = u.state.shadowsArray
                    , lt = U.state.version
                    , pt = W.getParameters(x, U.state, K, L, O)
                    , ut = W.getProgramCacheKey(pt)
                    , Rt = B.programs;
                B.environment = x.isMeshStandardMaterial ? L.environment : null,
                    B.fog = L.fog,
                    B.envMap = (x.isMeshStandardMaterial ? he : Se).get(x.envMap || B.environment),
                    B.envMapRotation = B.environment !== null && x.envMap === null ? L.environmentRotation : x.envMapRotation,
                    Rt === void 0 && (x.addEventListener("dispose", Y),
                        Rt = new Map,
                        B.programs = Rt);
                let It = Rt.get(ut);
                if (It !== void 0) {
                    if (B.currentProgram === It && B.lightsStateVersion === lt)
                        return _c(x, pt),
                            It
                } else
                    pt.uniforms = W.getUniforms(x),
                        x.onBeforeCompile(pt, y),
                        It = W.acquireProgram(pt, ut),
                        Rt.set(ut, It),
                        B.uniforms = pt.uniforms;
                let Tt = B.uniforms;
                return (!x.isShaderMaterial && !x.isRawShaderMaterial || x.clipping === !0) && (Tt.clippingPlanes = et.uniform),
                    _c(x, pt),
                    B.needsLights = ad(x),
                    B.lightsStateVersion = lt,
                    B.needsLights && (Tt.ambientLightColor.value = U.state.ambient,
                        Tt.lightProbe.value = U.state.probe,
                        Tt.directionalLights.value = U.state.directional,
                        Tt.directionalLightShadows.value = U.state.directionalShadow,
                        Tt.spotLights.value = U.state.spot,
                        Tt.spotLightShadows.value = U.state.spotShadow,
                        Tt.rectAreaLights.value = U.state.rectArea,
                        Tt.ltc_1.value = U.state.rectAreaLTC1,
                        Tt.ltc_2.value = U.state.rectAreaLTC2,
                        Tt.pointLights.value = U.state.point,
                        Tt.pointLightShadows.value = U.state.pointShadow,
                        Tt.hemisphereLights.value = U.state.hemi,
                        Tt.directionalShadowMap.value = U.state.directionalShadowMap,
                        Tt.directionalShadowMatrix.value = U.state.directionalShadowMatrix,
                        Tt.spotShadowMap.value = U.state.spotShadowMap,
                        Tt.spotLightMatrix.value = U.state.spotLightMatrix,
                        Tt.spotLightMap.value = U.state.spotLightMap,
                        Tt.pointShadowMap.value = U.state.pointShadowMap,
                        Tt.pointShadowMatrix.value = U.state.pointShadowMatrix),
                    B.currentProgram = It,
                    B.uniformsList = null,
                    It
            }
            function gc(x) {
                if (x.uniformsList === null) {
                    let L = x.currentProgram.getUniforms();
                    x.uniformsList = cs.seqWithValue(L.seq, x.uniforms)
                }
                return x.uniformsList
            }
            function _c(x, L) {
                let O = ft.get(x);
                O.outputColorSpace = L.outputColorSpace,
                    O.batching = L.batching,
                    O.batchingColor = L.batchingColor,
                    O.instancing = L.instancing,
                    O.instancingColor = L.instancingColor,
                    O.instancingMorph = L.instancingMorph,
                    O.skinning = L.skinning,
                    O.morphTargets = L.morphTargets,
                    O.morphNormals = L.morphNormals,
                    O.morphColors = L.morphColors,
                    O.morphTargetsCount = L.morphTargetsCount,
                    O.numClippingPlanes = L.numClippingPlanes,
                    O.numIntersection = L.numClipIntersection,
                    O.vertexAlphas = L.vertexAlphas,
                    O.vertexTangents = L.vertexTangents,
                    O.toneMapping = L.toneMapping
            }
            function rd(x, L, O, B, U) {
                L.isScene !== !0 && (L = Lt),
                    zt.resetTextureUnits();
                let K = L.fog
                    , lt = B.isMeshStandardMaterial ? L.environment : null
                    , pt = N === null ? y.outputColorSpace : N.isXRRenderTarget === !0 ? N.texture.colorSpace : fi
                    , ut = (B.isMeshStandardMaterial ? he : Se).get(B.envMap || lt)
                    , Rt = B.vertexColors === !0 && !!O.attributes.color && O.attributes.color.itemSize === 4
                    , It = !!O.attributes.tangent && (!!B.normalMap || B.anisotropy > 0)
                    , Tt = !!O.morphAttributes.position
                    , Vt = !!O.morphAttributes.normal
                    , $t = !!O.morphAttributes.color
                    , ae = Un;
                B.toneMapped && (N === null || N.isXRRenderTarget === !0) && (ae = y.toneMapping);
                let ee = O.morphAttributes.position || O.morphAttributes.normal || O.morphAttributes.color
                    , jt = ee !== void 0 ? ee.length : 0
                    , wt = ft.get(B)
                    , re = u.state.lights;
                if (X === !0 && (ot === !0 || x !== M)) {
                    let Pe = x === M && B.id === S;
                    et.setState(B, x, Pe)
                }
                let Wt = !1;
                B.version === wt.__version ? (wt.needsLights && wt.lightsStateVersion !== re.state.version || wt.outputColorSpace !== pt || U.isBatchedMesh && wt.batching === !1 || !U.isBatchedMesh && wt.batching === !0 || U.isBatchedMesh && wt.batchingColor === !0 && U.colorTexture === null || U.isBatchedMesh && wt.batchingColor === !1 && U.colorTexture !== null || U.isInstancedMesh && wt.instancing === !1 || !U.isInstancedMesh && wt.instancing === !0 || U.isSkinnedMesh && wt.skinning === !1 || !U.isSkinnedMesh && wt.skinning === !0 || U.isInstancedMesh && wt.instancingColor === !0 && U.instanceColor === null || U.isInstancedMesh && wt.instancingColor === !1 && U.instanceColor !== null || U.isInstancedMesh && wt.instancingMorph === !0 && U.morphTexture === null || U.isInstancedMesh && wt.instancingMorph === !1 && U.morphTexture !== null || wt.envMap !== ut || B.fog === !0 && wt.fog !== K || wt.numClippingPlanes !== void 0 && (wt.numClippingPlanes !== et.numPlanes || wt.numIntersection !== et.numIntersection) || wt.vertexAlphas !== Rt || wt.vertexTangents !== It || wt.morphTargets !== Tt || wt.morphNormals !== Vt || wt.morphColors !== $t || wt.toneMapping !== ae || wt.morphTargetsCount !== jt) && (Wt = !0) : (Wt = !0,
                    wt.__version = B.version);
                let ze = wt.currentProgram;
                Wt === !0 && (ze = rr(B, L, U));
                let Ri = !1
                    , ke = !1
                    , ms = !1
                    , oe = ze.getUniforms()
                    , Ke = wt.uniforms;
                if (St.useProgram(ze.program) && (Ri = !0,
                    ke = !0,
                    ms = !0),
                    B.id !== S && (S = B.id,
                        ke = !0),
                    Ri || M !== x) {
                    St.buffers.depth.getReversed() && x.reversedDepth !== !0 && (x._reversedDepth = !0,
                        x.updateProjectionMatrix()),
                        oe.setValue(A, "projectionMatrix", x.projectionMatrix),
                        oe.setValue(A, "viewMatrix", x.matrixWorldInverse);
                    let Le = oe.map.cameraPosition;
                    Le !== void 0 && Le.setValue(A, At.setFromMatrixPosition(x.matrixWorld)),
                        Xt.logarithmicDepthBuffer && oe.setValue(A, "logDepthBufFC", 2 / (Math.log(x.far + 1) / Math.LN2)),
                        (B.isMeshPhongMaterial || B.isMeshToonMaterial || B.isMeshLambertMaterial || B.isMeshBasicMaterial || B.isMeshStandardMaterial || B.isShaderMaterial) && oe.setValue(A, "isOrthographic", x.isOrthographicCamera === !0),
                        M !== x && (M = x,
                            ke = !0,
                            ms = !0)
                }
                if (U.isSkinnedMesh) {
                    oe.setOptional(A, U, "bindMatrix"),
                        oe.setOptional(A, U, "bindMatrixInverse");
                    let Pe = U.skeleton;
                    Pe && (Pe.boneTexture === null && Pe.computeBoneTexture(),
                        oe.setValue(A, "boneTexture", Pe.boneTexture, zt))
                }
                U.isBatchedMesh && (oe.setOptional(A, U, "batchingTexture"),
                    oe.setValue(A, "batchingTexture", U._matricesTexture, zt),
                    oe.setOptional(A, U, "batchingIdTexture"),
                    oe.setValue(A, "batchingIdTexture", U._indirectTexture, zt),
                    oe.setOptional(A, U, "batchingColorTexture"),
                    U._colorsTexture !== null && oe.setValue(A, "batchingColorTexture", U._colorsTexture, zt));
                let je = O.morphAttributes;
                if ((je.position !== void 0 || je.normal !== void 0 || je.color !== void 0) && j.update(U, O, ze),
                    (ke || wt.receiveShadow !== U.receiveShadow) && (wt.receiveShadow = U.receiveShadow,
                        oe.setValue(A, "receiveShadow", U.receiveShadow)),
                    B.isMeshGouraudMaterial && B.envMap !== null && (Ke.envMap.value = ut,
                        Ke.flipEnvMap.value = ut.isCubeTexture && ut.isRenderTargetTexture === !1 ? -1 : 1),
                    B.isMeshStandardMaterial && B.envMap === null && L.environment !== null && (Ke.envMapIntensity.value = L.environmentIntensity),
                    ke && (oe.setValue(A, "toneMappingExposure", y.toneMappingExposure),
                        wt.needsLights && od(Ke, ms),
                        K && B.fog === !0 && $.refreshFogUniforms(Ke, K),
                        $.refreshMaterialUniforms(Ke, B, k, tt, u.state.transmissionRenderTarget[x.id]),
                        cs.upload(A, gc(wt), Ke, zt)),
                    B.isShaderMaterial && B.uniformsNeedUpdate === !0 && (cs.upload(A, gc(wt), Ke, zt),
                        B.uniformsNeedUpdate = !1),
                    B.isSpriteMaterial && oe.setValue(A, "center", U.center),
                    oe.setValue(A, "modelViewMatrix", U.modelViewMatrix),
                    oe.setValue(A, "normalMatrix", U.normalMatrix),
                    oe.setValue(A, "modelMatrix", U.matrixWorld),
                    B.isShaderMaterial || B.isRawShaderMaterial) {
                    let Pe = B.uniformsGroups;
                    for (let Le = 0, ba = Pe.length; Le < ba; Le++) {
                        let ni = Pe[Le];
                        Ft.update(ni, ze),
                            Ft.bind(ni, ze)
                    }
                }
                return ze
            }
            function od(x, L) {
                x.ambientLightColor.needsUpdate = L,
                    x.lightProbe.needsUpdate = L,
                    x.directionalLights.needsUpdate = L,
                    x.directionalLightShadows.needsUpdate = L,
                    x.pointLights.needsUpdate = L,
                    x.pointLightShadows.needsUpdate = L,
                    x.spotLights.needsUpdate = L,
                    x.spotLightShadows.needsUpdate = L,
                    x.rectAreaLights.needsUpdate = L,
                    x.hemisphereLights.needsUpdate = L
            }
            function ad(x) {
                return x.isMeshLambertMaterial || x.isMeshToonMaterial || x.isMeshPhongMaterial || x.isMeshStandardMaterial || x.isShadowMaterial || x.isShaderMaterial && x.lights === !0
            }
            this.getActiveCubeFace = function () {
                return R
            }
                ,
                this.getActiveMipmapLevel = function () {
                    return D
                }
                ,
                this.getRenderTarget = function () {
                    return N
                }
                ,
                this.setRenderTargetTextures = function (x, L, O) {
                    let B = ft.get(x);
                    B.__autoAllocateDepthBuffer = x.resolveDepthBuffer === !1,
                        B.__autoAllocateDepthBuffer === !1 && (B.__useRenderToTexture = !1),
                        ft.get(x.texture).__webglTexture = L,
                        ft.get(x.depthTexture).__webglTexture = B.__autoAllocateDepthBuffer ? void 0 : O,
                        B.__hasExternalTextures = !0
                }
                ,
                this.setRenderTargetFramebuffer = function (x, L) {
                    let O = ft.get(x);
                    O.__webglFramebuffer = L,
                        O.__useDefaultFramebuffer = L === void 0
                }
                ;
            let ld = A.createFramebuffer();
            this.setRenderTarget = function (x, L = 0, O = 0) {
                N = x,
                    R = L,
                    D = O;
                let B = !0
                    , U = null
                    , K = !1
                    , lt = !1;
                if (x) {
                    let ut = ft.get(x);
                    if (ut.__useDefaultFramebuffer !== void 0)
                        St.bindFramebuffer(A.FRAMEBUFFER, null),
                            B = !1;
                    else if (ut.__webglFramebuffer === void 0)
                        zt.setupRenderTarget(x);
                    else if (ut.__hasExternalTextures)
                        zt.rebindTextures(x, ft.get(x.texture).__webglTexture, ft.get(x.depthTexture).__webglTexture);
                    else if (x.depthBuffer) {
                        let Tt = x.depthTexture;
                        if (ut.__boundDepthTexture !== Tt) {
                            if (Tt !== null && ft.has(Tt) && (x.width !== Tt.image.width || x.height !== Tt.image.height))
                                throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
                            zt.setupDepthRenderbuffer(x)
                        }
                    }
                    let Rt = x.texture;
                    (Rt.isData3DTexture || Rt.isDataArrayTexture || Rt.isCompressedArrayTexture) && (lt = !0);
                    let It = ft.get(x).__webglFramebuffer;
                    x.isWebGLCubeRenderTarget ? (Array.isArray(It[L]) ? U = It[L][O] : U = It[L],
                        K = !0) : x.samples > 0 && zt.useMultisampledRTT(x) === !1 ? U = ft.get(x).__webglMultisampledFramebuffer : Array.isArray(It) ? U = It[O] : U = It,
                        w.copy(x.viewport),
                        V.copy(x.scissor),
                        H = x.scissorTest
                } else
                    w.copy(bt).multiplyScalar(k).floor(),
                        V.copy(Bt).multiplyScalar(k).floor(),
                        H = ie;
                if (O !== 0 && (U = ld),
                    St.bindFramebuffer(A.FRAMEBUFFER, U) && B && St.drawBuffers(x, U),
                    St.viewport(w),
                    St.scissor(V),
                    St.setScissorTest(H),
                    K) {
                    let ut = ft.get(x.texture);
                    A.framebufferTexture2D(A.FRAMEBUFFER, A.COLOR_ATTACHMENT0, A.TEXTURE_CUBE_MAP_POSITIVE_X + L, ut.__webglTexture, O)
                } else if (lt) {
                    let ut = L;
                    for (let Rt = 0; Rt < x.textures.length; Rt++) {
                        let It = ft.get(x.textures[Rt]);
                        A.framebufferTextureLayer(A.FRAMEBUFFER, A.COLOR_ATTACHMENT0 + Rt, It.__webglTexture, O, ut)
                    }
                } else if (x !== null && O !== 0) {
                    let ut = ft.get(x.texture);
                    A.framebufferTexture2D(A.FRAMEBUFFER, A.COLOR_ATTACHMENT0, A.TEXTURE_2D, ut.__webglTexture, O)
                }
                S = -1
            }
                ,
                this.readRenderTargetPixels = function (x, L, O, B, U, K, lt, pt = 0) {
                    if (!(x && x.isWebGLRenderTarget)) {
                        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
                        return
                    }
                    let ut = ft.get(x).__webglFramebuffer;
                    if (x.isWebGLCubeRenderTarget && lt !== void 0 && (ut = ut[lt]),
                        ut) {
                        St.bindFramebuffer(A.FRAMEBUFFER, ut);
                        try {
                            let Rt = x.textures[pt]
                                , It = Rt.format
                                , Tt = Rt.type;
                            if (!Xt.textureFormatReadable(It)) {
                                console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                                return
                            }
                            if (!Xt.textureTypeReadable(Tt)) {
                                console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                                return
                            }
                            L >= 0 && L <= x.width - B && O >= 0 && O <= x.height - U && (x.textures.length > 1 && A.readBuffer(A.COLOR_ATTACHMENT0 + pt),
                                A.readPixels(L, O, B, U, xt.convert(It), xt.convert(Tt), K))
                        } finally {
                            let Rt = N !== null ? ft.get(N).__webglFramebuffer : null;
                            St.bindFramebuffer(A.FRAMEBUFFER, Rt)
                        }
                    }
                }
                ,
                this.readRenderTargetPixelsAsync = function (x, L, O, B, U, K, lt, pt = 0) {
                    return ar(this, null, function* () {
                        if (!(x && x.isWebGLRenderTarget))
                            throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
                        let ut = ft.get(x).__webglFramebuffer;
                        if (x.isWebGLCubeRenderTarget && lt !== void 0 && (ut = ut[lt]),
                            ut)
                            if (L >= 0 && L <= x.width - B && O >= 0 && O <= x.height - U) {
                                St.bindFramebuffer(A.FRAMEBUFFER, ut);
                                let Rt = x.textures[pt]
                                    , It = Rt.format
                                    , Tt = Rt.type;
                                if (!Xt.textureFormatReadable(It))
                                    throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
                                if (!Xt.textureTypeReadable(Tt))
                                    throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
                                let Vt = A.createBuffer();
                                A.bindBuffer(A.PIXEL_PACK_BUFFER, Vt),
                                    A.bufferData(A.PIXEL_PACK_BUFFER, K.byteLength, A.STREAM_READ),
                                    x.textures.length > 1 && A.readBuffer(A.COLOR_ATTACHMENT0 + pt),
                                    A.readPixels(L, O, B, U, xt.convert(It), xt.convert(Tt), 0);
                                let $t = N !== null ? ft.get(N).__webglFramebuffer : null;
                                St.bindFramebuffer(A.FRAMEBUFFER, $t);
                                let ae = A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE, 0);
                                return A.flush(),
                                    yield pu(A, ae, 4),
                                    A.bindBuffer(A.PIXEL_PACK_BUFFER, Vt),
                                    A.getBufferSubData(A.PIXEL_PACK_BUFFER, 0, K),
                                    A.deleteBuffer(Vt),
                                    A.deleteSync(ae),
                                    K
                            } else
                                throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")
                    })
                }
                ,
                this.copyFramebufferToTexture = function (x, L = null, O = 0) {
                    let B = Math.pow(2, -O)
                        , U = Math.floor(x.image.width * B)
                        , K = Math.floor(x.image.height * B)
                        , lt = L !== null ? L.x : 0
                        , pt = L !== null ? L.y : 0;
                    zt.setTexture2D(x, 0),
                        A.copyTexSubImage2D(A.TEXTURE_2D, O, 0, 0, lt, pt, U, K),
                        St.unbindTexture()
                }
                ;
            let cd = A.createFramebuffer()
                , hd = A.createFramebuffer();
            this.copyTextureToTexture = function (x, L, O = null, B = null, U = 0, K = null) {
                K === null && (U !== 0 ? (pi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),
                    K = U,
                    U = 0) : K = 0);
                let lt, pt, ut, Rt, It, Tt, Vt, $t, ae, ee = x.isCompressedTexture ? x.mipmaps[K] : x.image;
                if (O !== null)
                    lt = O.max.x - O.min.x,
                        pt = O.max.y - O.min.y,
                        ut = O.isBox3 ? O.max.z - O.min.z : 1,
                        Rt = O.min.x,
                        It = O.min.y,
                        Tt = O.isBox3 ? O.min.z : 0;
                else {
                    let je = Math.pow(2, -U);
                    lt = Math.floor(ee.width * je),
                        pt = Math.floor(ee.height * je),
                        x.isDataArrayTexture ? ut = ee.depth : x.isData3DTexture ? ut = Math.floor(ee.depth * je) : ut = 1,
                        Rt = 0,
                        It = 0,
                        Tt = 0
                }
                B !== null ? (Vt = B.x,
                    $t = B.y,
                    ae = B.z) : (Vt = 0,
                        $t = 0,
                        ae = 0);
                let jt = xt.convert(L.format), wt = xt.convert(L.type), re;
                L.isData3DTexture ? (zt.setTexture3D(L, 0),
                    re = A.TEXTURE_3D) : L.isDataArrayTexture || L.isCompressedArrayTexture ? (zt.setTexture2DArray(L, 0),
                        re = A.TEXTURE_2D_ARRAY) : (zt.setTexture2D(L, 0),
                            re = A.TEXTURE_2D),
                    A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL, L.flipY),
                    A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL, L.premultiplyAlpha),
                    A.pixelStorei(A.UNPACK_ALIGNMENT, L.unpackAlignment);
                let Wt = A.getParameter(A.UNPACK_ROW_LENGTH)
                    , ze = A.getParameter(A.UNPACK_IMAGE_HEIGHT)
                    , Ri = A.getParameter(A.UNPACK_SKIP_PIXELS)
                    , ke = A.getParameter(A.UNPACK_SKIP_ROWS)
                    , ms = A.getParameter(A.UNPACK_SKIP_IMAGES);
                A.pixelStorei(A.UNPACK_ROW_LENGTH, ee.width),
                    A.pixelStorei(A.UNPACK_IMAGE_HEIGHT, ee.height),
                    A.pixelStorei(A.UNPACK_SKIP_PIXELS, Rt),
                    A.pixelStorei(A.UNPACK_SKIP_ROWS, It),
                    A.pixelStorei(A.UNPACK_SKIP_IMAGES, Tt);
                let oe = x.isDataArrayTexture || x.isData3DTexture
                    , Ke = L.isDataArrayTexture || L.isData3DTexture;
                if (x.isDepthTexture) {
                    let je = ft.get(x)
                        , Pe = ft.get(L)
                        , Le = ft.get(je.__renderTarget)
                        , ba = ft.get(Pe.__renderTarget);
                    St.bindFramebuffer(A.READ_FRAMEBUFFER, Le.__webglFramebuffer),
                        St.bindFramebuffer(A.DRAW_FRAMEBUFFER, ba.__webglFramebuffer);
                    for (let ni = 0; ni < ut; ni++)
                        oe && (A.framebufferTextureLayer(A.READ_FRAMEBUFFER, A.COLOR_ATTACHMENT0, ft.get(x).__webglTexture, U, Tt + ni),
                            A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER, A.COLOR_ATTACHMENT0, ft.get(L).__webglTexture, K, ae + ni)),
                            A.blitFramebuffer(Rt, It, lt, pt, Vt, $t, lt, pt, A.DEPTH_BUFFER_BIT, A.NEAREST);
                    St.bindFramebuffer(A.READ_FRAMEBUFFER, null),
                        St.bindFramebuffer(A.DRAW_FRAMEBUFFER, null)
                } else if (U !== 0 || x.isRenderTargetTexture || ft.has(x)) {
                    let je = ft.get(x)
                        , Pe = ft.get(L);
                    St.bindFramebuffer(A.READ_FRAMEBUFFER, cd),
                        St.bindFramebuffer(A.DRAW_FRAMEBUFFER, hd);
                    for (let Le = 0; Le < ut; Le++)
                        oe ? A.framebufferTextureLayer(A.READ_FRAMEBUFFER, A.COLOR_ATTACHMENT0, je.__webglTexture, U, Tt + Le) : A.framebufferTexture2D(A.READ_FRAMEBUFFER, A.COLOR_ATTACHMENT0, A.TEXTURE_2D, je.__webglTexture, U),
                            Ke ? A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER, A.COLOR_ATTACHMENT0, Pe.__webglTexture, K, ae + Le) : A.framebufferTexture2D(A.DRAW_FRAMEBUFFER, A.COLOR_ATTACHMENT0, A.TEXTURE_2D, Pe.__webglTexture, K),
                            U !== 0 ? A.blitFramebuffer(Rt, It, lt, pt, Vt, $t, lt, pt, A.COLOR_BUFFER_BIT, A.NEAREST) : Ke ? A.copyTexSubImage3D(re, K, Vt, $t, ae + Le, Rt, It, lt, pt) : A.copyTexSubImage2D(re, K, Vt, $t, Rt, It, lt, pt);
                    St.bindFramebuffer(A.READ_FRAMEBUFFER, null),
                        St.bindFramebuffer(A.DRAW_FRAMEBUFFER, null)
                } else
                    Ke ? x.isDataTexture || x.isData3DTexture ? A.texSubImage3D(re, K, Vt, $t, ae, lt, pt, ut, jt, wt, ee.data) : L.isCompressedArrayTexture ? A.compressedTexSubImage3D(re, K, Vt, $t, ae, lt, pt, ut, jt, ee.data) : A.texSubImage3D(re, K, Vt, $t, ae, lt, pt, ut, jt, wt, ee) : x.isDataTexture ? A.texSubImage2D(A.TEXTURE_2D, K, Vt, $t, lt, pt, jt, wt, ee.data) : x.isCompressedTexture ? A.compressedTexSubImage2D(A.TEXTURE_2D, K, Vt, $t, ee.width, ee.height, jt, ee.data) : A.texSubImage2D(A.TEXTURE_2D, K, Vt, $t, lt, pt, jt, wt, ee);
                A.pixelStorei(A.UNPACK_ROW_LENGTH, Wt),
                    A.pixelStorei(A.UNPACK_IMAGE_HEIGHT, ze),
                    A.pixelStorei(A.UNPACK_SKIP_PIXELS, Ri),
                    A.pixelStorei(A.UNPACK_SKIP_ROWS, ke),
                    A.pixelStorei(A.UNPACK_SKIP_IMAGES, ms),
                    K === 0 && L.generateMipmaps && A.generateMipmap(re),
                    St.unbindTexture()
            }
                ,
                this.copyTextureToTexture3D = function (x, L, O = null, B = null, U = 0) {
                    return pi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),
                        this.copyTextureToTexture(x, L, O, B, U)
                }
                ,
                this.initRenderTarget = function (x) {
                    ft.get(x).__webglFramebuffer === void 0 && zt.setupRenderTarget(x)
                }
                ,
                this.initTexture = function (x) {
                    x.isCubeTexture ? zt.setTextureCube(x, 0) : x.isData3DTexture ? zt.setTexture3D(x, 0) : x.isDataArrayTexture || x.isCompressedArrayTexture ? zt.setTexture2DArray(x, 0) : zt.setTexture2D(x, 0),
                        St.unbindTexture()
                }
                ,
                this.resetState = function () {
                    R = 0,
                        D = 0,
                        N = null,
                        St.reset(),
                        at.reset()
                }
                ,
                typeof __THREE_DEVTOOLS__ != "undefined" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
                    detail: this
                }))
        }
        get coordinateSystem() {
            return hn
        }
        get outputColorSpace() {
            return this._outputColorSpace
        }
        set outputColorSpace(t) {
            this._outputColorSpace = t;
            let e = this.getContext();
            e.drawingBufferColorSpace = Gt._getDrawingBufferColorSpace(t),
                e.unpackColorSpace = Gt._getUnpackColorSpace()
        }
    }
        ;
    var ca = 4
        , oc = .05 / ca
        , ha = class {
            constructor() {
                Ue(this, "object");
                Ue(this, "splines", []);
                this.object = new In;
                for (let t = 0; t < 100; t++) {
                    let e = new Float32Array(768 * ca)
                        , i = new $e;
                    this.splines.push({
                        position: e,
                        geometry: i
                    }),
                        e[0] = Math.random() - .5,
                        e[1] = Math.random() - .5,
                        e[2] = Math.random() - .5;
                    let s = new Dt(16761120)
                        , r = new Dt(16747148)
                        , o = new ts({
                            color: s.lerp(r, Math.random()),
                            blending: xi,
                            transparent: !0,
                            opacity: .5 + (Math.random() - .5) * .4,
                            fog: !0
                        })
                        , a = new Vs(i, o);
                    a.frustumCulled = !1,
                        this.object.add(a)
                }
            }
            update(t) {
                for (let e of this.splines) {
                    c0(e, t);
                    let i = new Ce(e.position, 3);
                    e.geometry.setAttribute("position", i)
                }
            }
        }
        ;
    function c0(n, t) {
        let { alpha: e, beta: i, delta: s, gamma: r, zeta: o } = t
            , a = t.epsilon / ca
            , c = n.position[0]
            , l = n.position[1]
            , d = n.position[2]
            , h = oc * ((d - i) * c - s * l)
            , f = oc * (s * c + (d - i) * l)
            , p = oc * (r + e * d - ii(d, 3) / 3 - (ii(c, 2) + ii(l, 2)) * (1 + a * d) + o * d * ii(c, 3));
        n.position.copyWithin(3, 0, 3 * 256 * ca - 3),
            n.position[0] = c + h,
            n.position[1] = l + f,
            n.position[2] = d + p
    }
    var ua = class {
        constructor(t) {
            this.animations = t;
            Ue(this, "state", {
                animation: 0,
                progress: 0
            })
        }
        update() {
            let t = this.animations[this.state.animation];
            this.state.progress == t.length && (this.state.animation = (this.state.animation + 1) % this.animations.length,
                this.state.progress = 0,
                t = this.animations[this.state.animation]),
                t.fn(t.value, this.state.progress++ / t.length)
        }
    }
        ;
    function Fn(n, t, e) {
        return {
            value: n,
            fn: e(),
            length: t
        }
    }
    var Ku = yd(Ju());
    function ac(n, t, e = (0,
        Ku.default)(0, 0, 1, 1)) {
        return i => {
            let s = n.x + (t.x - n.x) * e(i)
                , r = n.y + (t.y - n.y) * e(i)
                , o = n.z + (t.z - n.z) * e(i);
            return a => {
                a.set(s, r, o)
            }
        }
    }
    var dn = class {
        constructor() {
            Ue(this, "source", null);
            Ue(this, "target", null)
        }
        setSource(t) {
            return this.source = {
                position: t.position,
                target: t.target
            },
                this
        }
        setTarget(t) {
            return this.target = {
                position: t.position,
                target: t.target
            },
                this
        }
        animate(t) {
            if (!this.source || !this.target)
                throw new Error("Source and target must be set");
            let e = ac(this.source.position, this.target.position, t)
                , i = ac(this.source.target, this.target.target, t);
            return (s, r) => {
                e(r)(s.camera.position),
                    i(r)(s.controls.target)
            }
        }
    }
        ;
    var lc = tn(0)
        , nr = tn()
        , pa = tn(!1)
        , Ci = tn({
            alpha: .95,
            beta: .2,
            gamma: .7,
            delta: 3.5,
            epsilon: .25,
            zeta: .1
        })
        , us = tn(new P)
        , ju = tn(new ha)
        , Qu = tn();
    gn(() => {
        let n = nr.value;
        if (typeof n == "undefined")
            return;
        let t = ju.value;
        n.scene.add(t.object);
        let e = new Bs(723983, 1, 6);
        n.scene.fog = e,
            Qu.value = new ua([Fn(n, 500, () => new dn().setSource({
                position: new P(-1.60744, 1.47329, -2.62968),
                target: new P(.141248, -.0999439, .850354)
            }).setTarget({
                position: new P(-1.16954, 1.24522, -2.71477),
                target: new P(.147224, -.0702744, .859073)
            }).animate()), Fn(n, 1500, () => new dn().setSource({
                position: new P(.0631833, 1.28423, -.827955),
                target: new P(.0631833, .00244161, -.827957)
            }).setTarget({
                position: new P(-.0118442, .846686, -1.85947),
                target: new P(-.0118554, .00845868, -1.86433)
            }).animate()), Fn(n, 1500, () => new dn().setSource({
                position: new P(-165924e-14, 2.39657, 240252e-11),
                target: new P(0, 0, 0)
            }).setTarget({
                position: new P(-703221e-12, 2.37576, 227079e-11),
                target: new P(0, 0, 0)
            }).animate()), Fn(n, 1e3, () => new dn().setSource({
                position: new P(-1.57788, .0300631, -1.48228),
                target: new P(0, 0, 0)
            }).setTarget({
                position: new P(-1.28756, -.00862695, -1.01241),
                target: new P(0, 0, 0)
            }).animate()), Fn(n, 1e3, () => new dn().setSource({
                position: new P(0, 13595e-20, 2.22023),
                target: new P(0, 0, 0)
            }).setTarget({
                position: new P(0, 125431e-21, 2.04844),
                target: new P(0, 0, 0)
            }).animate()), Fn(n, 500, () => new dn().setSource({
                position: new P(.99935, 1.32445, -2.86713),
                target: new P(.0188739, .194861, .105587)
            }).setTarget({
                position: new P(1.67574, .795462, -2.71725),
                target: new P(.0188739, .194861, .105587)
            }).animate()), Fn(n, 1e3, () => new dn().setSource({
                position: new P(.00434437, .171172, -1.56255),
                target: new P(-.0261481, -417146e-27, -100017e-9)
            }).setTarget({
                position: new P(-456078e-11, .0521422, -1.15426),
                target: new P(-.0261481, -417146e-27, -100017e-9)
            }).animate()), Fn(n, 1e3, () => new dn().setSource({
                position: new P(-.838463, .602458, -.156669),
                target: new P(-1.45554, -.346908, -2.54362)
            }).setTarget({
                position: new P(-.56783, .450686, -.413958),
                target: new P(-1.45554, -.346908, -2.54362)
            }).animate())]);
        for (let i = 0; i < 1200; i++)
            Di(() => t.update(Ci.value))
    }
    );
    gn(() => {
        var n, t;
        lc.value,
            Di(() => ju.value.update(Ci.value)),
            (n = Qu.value) == null || n.update(),
            (t = nr.value) == null || t.update()
    }
    );
    window.addEventListener("keydown", n => {
        if (n.ctrlKey && (n.key.toLowerCase() === "p" && (n.preventDefault(),
            pa.value = !pa.value),
            n.key.toLowerCase() === "e")) {
            n.preventDefault();
            let e = document.getElementById("attractor").querySelector("canvas")
                , i = e.toDataURL("image/png")
                , s = document.createElement("a");
            s.download = `attractor-${e.width}-${e.height}.png`,
                s.href = i,
                s.click()
        }
    }
    );
    var td = {
        type: "change"
    }
        , hc = {
            type: "start"
        }
        , nd = {
            type: "end"
        }
        , ma = new gi
        , ed = new nn
        , v0 = Math.cos(70 * zl.DEG2RAD)
        , Me = new P
        , Be = 2 * Math.PI
        , Jt = {
            NONE: -1,
            ROTATE: 0,
            DOLLY: 1,
            PAN: 2,
            TOUCH_ROTATE: 3,
            TOUCH_PAN: 4,
            TOUCH_DOLLY_PAN: 5,
            TOUCH_DOLLY_ROTATE: 6
        }
        , cc = 1e-6
        , ga = class extends qs {
            constructor(t, e = null) {
                super(t, e),
                    this.state = Jt.NONE,
                    this.target = new P,
                    this.cursor = new P,
                    this.minDistance = 0,
                    this.maxDistance = 1 / 0,
                    this.minZoom = 0,
                    this.maxZoom = 1 / 0,
                    this.minTargetRadius = 0,
                    this.maxTargetRadius = 1 / 0,
                    this.minPolarAngle = 0,
                    this.maxPolarAngle = Math.PI,
                    this.minAzimuthAngle = -1 / 0,
                    this.maxAzimuthAngle = 1 / 0,
                    this.enableDamping = !1,
                    this.dampingFactor = .05,
                    this.enableZoom = !0,
                    this.zoomSpeed = 1,
                    this.enableRotate = !0,
                    this.rotateSpeed = 1,
                    this.keyRotateSpeed = 1,
                    this.enablePan = !0,
                    this.panSpeed = 1,
                    this.screenSpacePanning = !0,
                    this.keyPanSpeed = 7,
                    this.zoomToCursor = !1,
                    this.autoRotate = !1,
                    this.autoRotateSpeed = 2,
                    this.keys = {
                        LEFT: "ArrowLeft",
                        UP: "ArrowUp",
                        RIGHT: "ArrowRight",
                        BOTTOM: "ArrowDown"
                    },
                    this.mouseButtons = {
                        LEFT: Kn.ROTATE,
                        MIDDLE: Kn.DOLLY,
                        RIGHT: Kn.PAN
                    },
                    this.touches = {
                        ONE: jn.ROTATE,
                        TWO: jn.DOLLY_PAN
                    },
                    this.target0 = this.target.clone(),
                    this.position0 = this.object.position.clone(),
                    this.zoom0 = this.object.zoom,
                    this._domElementKeyEvents = null,
                    this._lastPosition = new P,
                    this._lastQuaternion = new rn,
                    this._lastTargetPosition = new P,
                    this._quat = new rn().setFromUnitVectors(t.up, new P(0, 1, 0)),
                    this._quatInverse = this._quat.clone().invert(),
                    this._spherical = new ns,
                    this._sphericalDelta = new ns,
                    this._scale = 1,
                    this._panOffset = new P,
                    this._rotateStart = new Mt,
                    this._rotateEnd = new Mt,
                    this._rotateDelta = new Mt,
                    this._panStart = new Mt,
                    this._panEnd = new Mt,
                    this._panDelta = new Mt,
                    this._dollyStart = new Mt,
                    this._dollyEnd = new Mt,
                    this._dollyDelta = new Mt,
                    this._dollyDirection = new P,
                    this._mouse = new Mt,
                    this._performCursorZoom = !1,
                    this._pointers = [],
                    this._pointerPositions = {},
                    this._controlActive = !1,
                    this._onPointerMove = y0.bind(this),
                    this._onPointerDown = x0.bind(this),
                    this._onPointerUp = M0.bind(this),
                    this._onContextMenu = C0.bind(this),
                    this._onMouseWheel = T0.bind(this),
                    this._onKeyDown = E0.bind(this),
                    this._onTouchStart = w0.bind(this),
                    this._onTouchMove = A0.bind(this),
                    this._onMouseDown = S0.bind(this),
                    this._onMouseMove = b0.bind(this),
                    this._interceptControlDown = R0.bind(this),
                    this._interceptControlUp = P0.bind(this),
                    this.domElement !== null && this.connect(this.domElement),
                    this.update()
            }
            connect(t) {
                super.connect(t),
                    this.domElement.addEventListener("pointerdown", this._onPointerDown),
                    this.domElement.addEventListener("pointercancel", this._onPointerUp),
                    this.domElement.addEventListener("contextmenu", this._onContextMenu),
                    this.domElement.addEventListener("wheel", this._onMouseWheel, {
                        passive: !1
                    }),
                    this.domElement.getRootNode().addEventListener("keydown", this._interceptControlDown, {
                        passive: !0,
                        capture: !0
                    }),
                    this.domElement.style.touchAction = "none"
            }
            disconnect() {
                this.domElement.removeEventListener("pointerdown", this._onPointerDown),
                    this.domElement.removeEventListener("pointermove", this._onPointerMove),
                    this.domElement.removeEventListener("pointerup", this._onPointerUp),
                    this.domElement.removeEventListener("pointercancel", this._onPointerUp),
                    this.domElement.removeEventListener("wheel", this._onMouseWheel),
                    this.domElement.removeEventListener("contextmenu", this._onContextMenu),
                    this.stopListenToKeyEvents(),
                    this.domElement.getRootNode().removeEventListener("keydown", this._interceptControlDown, {
                        capture: !0
                    }),
                    this.domElement.style.touchAction = "auto"
            }
            dispose() {
                this.disconnect()
            }
            getPolarAngle() {
                return this._spherical.phi
            }
            getAzimuthalAngle() {
                return this._spherical.theta
            }
            getDistance() {
                return this.object.position.distanceTo(this.target)
            }
            listenToKeyEvents(t) {
                t.addEventListener("keydown", this._onKeyDown),
                    this._domElementKeyEvents = t
            }
            stopListenToKeyEvents() {
                this._domElementKeyEvents !== null && (this._domElementKeyEvents.removeEventListener("keydown", this._onKeyDown),
                    this._domElementKeyEvents = null)
            }
            saveState() {
                this.target0.copy(this.target),
                    this.position0.copy(this.object.position),
                    this.zoom0 = this.object.zoom
            }
            reset() {
                this.target.copy(this.target0),
                    this.object.position.copy(this.position0),
                    this.object.zoom = this.zoom0,
                    this.object.updateProjectionMatrix(),
                    this.dispatchEvent(td),
                    this.update(),
                    this.state = Jt.NONE
            }
            update(t = null) {
                let e = this.object.position;
                Me.copy(e).sub(this.target),
                    Me.applyQuaternion(this._quat),
                    this._spherical.setFromVector3(Me),
                    this.autoRotate && this.state === Jt.NONE && this._rotateLeft(this._getAutoRotationAngle(t)),
                    this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor,
                        this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta,
                            this._spherical.phi += this._sphericalDelta.phi);
                let i = this.minAzimuthAngle
                    , s = this.maxAzimuthAngle;
                isFinite(i) && isFinite(s) && (i < -Math.PI ? i += Be : i > Math.PI && (i -= Be),
                    s < -Math.PI ? s += Be : s > Math.PI && (s -= Be),
                    i <= s ? this._spherical.theta = Math.max(i, Math.min(s, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (i + s) / 2 ? Math.max(i, this._spherical.theta) : Math.min(s, this._spherical.theta)),
                    this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)),
                    this._spherical.makeSafe(),
                    this.enableDamping === !0 ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset),
                    this.target.sub(this.cursor),
                    this.target.clampLength(this.minTargetRadius, this.maxTargetRadius),
                    this.target.add(this.cursor);
                let r = !1;
                if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera)
                    this._spherical.radius = this._clampDistance(this._spherical.radius);
                else {
                    let o = this._spherical.radius;
                    this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale),
                        r = o != this._spherical.radius
                }
                if (Me.setFromSpherical(this._spherical),
                    Me.applyQuaternion(this._quatInverse),
                    e.copy(this.target).add(Me),
                    this.object.lookAt(this.target),
                    this.enableDamping === !0 ? (this._sphericalDelta.theta *= 1 - this.dampingFactor,
                        this._sphericalDelta.phi *= 1 - this.dampingFactor,
                        this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0),
                            this._panOffset.set(0, 0, 0)),
                    this.zoomToCursor && this._performCursorZoom) {
                    let o = null;
                    if (this.object.isPerspectiveCamera) {
                        let a = Me.length();
                        o = this._clampDistance(a * this._scale);
                        let c = a - o;
                        this.object.position.addScaledVector(this._dollyDirection, c),
                            this.object.updateMatrixWorld(),
                            r = !!c
                    } else if (this.object.isOrthographicCamera) {
                        let a = new P(this._mouse.x, this._mouse.y, 0);
                        a.unproject(this.object);
                        let c = this.object.zoom;
                        this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)),
                            this.object.updateProjectionMatrix(),
                            r = c !== this.object.zoom;
                        let l = new P(this._mouse.x, this._mouse.y, 0);
                        l.unproject(this.object),
                            this.object.position.sub(l).add(a),
                            this.object.updateMatrixWorld(),
                            o = Me.length()
                    } else
                        console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),
                            this.zoomToCursor = !1;
                    o !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position) : (ma.origin.copy(this.object.position),
                        ma.direction.set(0, 0, -1).transformDirection(this.object.matrix),
                        Math.abs(this.object.up.dot(ma.direction)) < v0 ? this.object.lookAt(this.target) : (ed.setFromNormalAndCoplanarPoint(this.object.up, this.target),
                            ma.intersectPlane(ed, this.target))))
                } else if (this.object.isOrthographicCamera) {
                    let o = this.object.zoom;
                    this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)),
                        o !== this.object.zoom && (this.object.updateProjectionMatrix(),
                            r = !0)
                }
                return this._scale = 1,
                    this._performCursorZoom = !1,
                    r || this._lastPosition.distanceToSquared(this.object.position) > cc || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > cc || this._lastTargetPosition.distanceToSquared(this.target) > cc ? (this.dispatchEvent(td),
                        this._lastPosition.copy(this.object.position),
                        this._lastQuaternion.copy(this.object.quaternion),
                        this._lastTargetPosition.copy(this.target),
                        !0) : !1
            }
            _getAutoRotationAngle(t) {
                return t !== null ? Be / 60 * this.autoRotateSpeed * t : Be / 60 / 60 * this.autoRotateSpeed
            }
            _getZoomScale(t) {
                let e = Math.abs(t * .01);
                return Math.pow(.95, this.zoomSpeed * e)
            }
            _rotateLeft(t) {
                this._sphericalDelta.theta -= t
            }
            _rotateUp(t) {
                this._sphericalDelta.phi -= t
            }
            _panLeft(t, e) {
                Me.setFromMatrixColumn(e, 0),
                    Me.multiplyScalar(-t),
                    this._panOffset.add(Me)
            }
            _panUp(t, e) {
                this.screenSpacePanning === !0 ? Me.setFromMatrixColumn(e, 1) : (Me.setFromMatrixColumn(e, 0),
                    Me.crossVectors(this.object.up, Me)),
                    Me.multiplyScalar(t),
                    this._panOffset.add(Me)
            }
            _pan(t, e) {
                let i = this.domElement;
                if (this.object.isPerspectiveCamera) {
                    let s = this.object.position;
                    Me.copy(s).sub(this.target);
                    let r = Me.length();
                    r *= Math.tan(this.object.fov / 2 * Math.PI / 180),
                        this._panLeft(2 * t * r / i.clientHeight, this.object.matrix),
                        this._panUp(2 * e * r / i.clientHeight, this.object.matrix)
                } else
                    this.object.isOrthographicCamera ? (this._panLeft(t * (this.object.right - this.object.left) / this.object.zoom / i.clientWidth, this.object.matrix),
                        this._panUp(e * (this.object.top - this.object.bottom) / this.object.zoom / i.clientHeight, this.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),
                            this.enablePan = !1)
            }
            _dollyOut(t) {
                this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale /= t : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),
                    this.enableZoom = !1)
            }
            _dollyIn(t) {
                this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale *= t : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),
                    this.enableZoom = !1)
            }
            _updateZoomParameters(t, e) {
                if (!this.zoomToCursor)
                    return;
                this._performCursorZoom = !0;
                let i = this.domElement.getBoundingClientRect()
                    , s = t - i.left
                    , r = e - i.top
                    , o = i.width
                    , a = i.height;
                this._mouse.x = s / o * 2 - 1,
                    this._mouse.y = -(r / a) * 2 + 1,
                    this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize()
            }
            _clampDistance(t) {
                return Math.max(this.minDistance, Math.min(this.maxDistance, t))
            }
            _handleMouseDownRotate(t) {
                this._rotateStart.set(t.clientX, t.clientY)
            }
            _handleMouseDownDolly(t) {
                this._updateZoomParameters(t.clientX, t.clientX),
                    this._dollyStart.set(t.clientX, t.clientY)
            }
            _handleMouseDownPan(t) {
                this._panStart.set(t.clientX, t.clientY)
            }
            _handleMouseMoveRotate(t) {
                this._rotateEnd.set(t.clientX, t.clientY),
                    this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
                let e = this.domElement;
                this._rotateLeft(Be * this._rotateDelta.x / e.clientHeight),
                    this._rotateUp(Be * this._rotateDelta.y / e.clientHeight),
                    this._rotateStart.copy(this._rotateEnd),
                    this.update()
            }
            _handleMouseMoveDolly(t) {
                this._dollyEnd.set(t.clientX, t.clientY),
                    this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart),
                    this._dollyDelta.y > 0 ? this._dollyOut(this._getZoomScale(this._dollyDelta.y)) : this._dollyDelta.y < 0 && this._dollyIn(this._getZoomScale(this._dollyDelta.y)),
                    this._dollyStart.copy(this._dollyEnd),
                    this.update()
            }
            _handleMouseMovePan(t) {
                this._panEnd.set(t.clientX, t.clientY),
                    this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed),
                    this._pan(this._panDelta.x, this._panDelta.y),
                    this._panStart.copy(this._panEnd),
                    this.update()
            }
            _handleMouseWheel(t) {
                this._updateZoomParameters(t.clientX, t.clientY),
                    t.deltaY < 0 ? this._dollyIn(this._getZoomScale(t.deltaY)) : t.deltaY > 0 && this._dollyOut(this._getZoomScale(t.deltaY)),
                    this.update()
            }
            _handleKeyDown(t) {
                let e = !1;
                switch (t.code) {
                    case this.keys.UP:
                        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateUp(Be * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, this.keyPanSpeed),
                            e = !0;
                        break;
                    case this.keys.BOTTOM:
                        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateUp(-Be * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, -this.keyPanSpeed),
                            e = !0;
                        break;
                    case this.keys.LEFT:
                        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateLeft(Be * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(this.keyPanSpeed, 0),
                            e = !0;
                        break;
                    case this.keys.RIGHT:
                        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateLeft(-Be * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(-this.keyPanSpeed, 0),
                            e = !0;
                        break
                }
                e && (t.preventDefault(),
                    this.update())
            }
            _handleTouchStartRotate(t) {
                if (this._pointers.length === 1)
                    this._rotateStart.set(t.pageX, t.pageY);
                else {
                    let e = this._getSecondPointerPosition(t)
                        , i = .5 * (t.pageX + e.x)
                        , s = .5 * (t.pageY + e.y);
                    this._rotateStart.set(i, s)
                }
            }
            _handleTouchStartPan(t) {
                if (this._pointers.length === 1)
                    this._panStart.set(t.pageX, t.pageY);
                else {
                    let e = this._getSecondPointerPosition(t)
                        , i = .5 * (t.pageX + e.x)
                        , s = .5 * (t.pageY + e.y);
                    this._panStart.set(i, s)
                }
            }
            _handleTouchStartDolly(t) {
                let e = this._getSecondPointerPosition(t)
                    , i = t.pageX - e.x
                    , s = t.pageY - e.y
                    , r = Math.sqrt(i * i + s * s);
                this._dollyStart.set(0, r)
            }
            _handleTouchStartDollyPan(t) {
                this.enableZoom && this._handleTouchStartDolly(t),
                    this.enablePan && this._handleTouchStartPan(t)
            }
            _handleTouchStartDollyRotate(t) {
                this.enableZoom && this._handleTouchStartDolly(t),
                    this.enableRotate && this._handleTouchStartRotate(t)
            }
            _handleTouchMoveRotate(t) {
                if (this._pointers.length == 1)
                    this._rotateEnd.set(t.pageX, t.pageY);
                else {
                    let i = this._getSecondPointerPosition(t)
                        , s = .5 * (t.pageX + i.x)
                        , r = .5 * (t.pageY + i.y);
                    this._rotateEnd.set(s, r)
                }
                this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
                let e = this.domElement;
                this._rotateLeft(Be * this._rotateDelta.x / e.clientHeight),
                    this._rotateUp(Be * this._rotateDelta.y / e.clientHeight),
                    this._rotateStart.copy(this._rotateEnd)
            }
            _handleTouchMovePan(t) {
                if (this._pointers.length === 1)
                    this._panEnd.set(t.pageX, t.pageY);
                else {
                    let e = this._getSecondPointerPosition(t)
                        , i = .5 * (t.pageX + e.x)
                        , s = .5 * (t.pageY + e.y);
                    this._panEnd.set(i, s)
                }
                this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed),
                    this._pan(this._panDelta.x, this._panDelta.y),
                    this._panStart.copy(this._panEnd)
            }
            _handleTouchMoveDolly(t) {
                let e = this._getSecondPointerPosition(t)
                    , i = t.pageX - e.x
                    , s = t.pageY - e.y
                    , r = Math.sqrt(i * i + s * s);
                this._dollyEnd.set(0, r),
                    this._dollyDelta.set(0, Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed)),
                    this._dollyOut(this._dollyDelta.y),
                    this._dollyStart.copy(this._dollyEnd);
                let o = (t.pageX + e.x) * .5
                    , a = (t.pageY + e.y) * .5;
                this._updateZoomParameters(o, a)
            }
            _handleTouchMoveDollyPan(t) {
                this.enableZoom && this._handleTouchMoveDolly(t),
                    this.enablePan && this._handleTouchMovePan(t)
            }
            _handleTouchMoveDollyRotate(t) {
                this.enableZoom && this._handleTouchMoveDolly(t),
                    this.enableRotate && this._handleTouchMoveRotate(t)
            }
            _addPointer(t) {
                this._pointers.push(t.pointerId)
            }
            _removePointer(t) {
                delete this._pointerPositions[t.pointerId];
                for (let e = 0; e < this._pointers.length; e++)
                    if (this._pointers[e] == t.pointerId) {
                        this._pointers.splice(e, 1);
                        return
                    }
            }
            _isTrackingPointer(t) {
                for (let e = 0; e < this._pointers.length; e++)
                    if (this._pointers[e] == t.pointerId)
                        return !0;
                return !1
            }
            _trackPointer(t) {
                let e = this._pointerPositions[t.pointerId];
                e === void 0 && (e = new Mt,
                    this._pointerPositions[t.pointerId] = e),
                    e.set(t.pageX, t.pageY)
            }
            _getSecondPointerPosition(t) {
                let e = t.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
                return this._pointerPositions[e]
            }
            _customWheelEvent(t) {
                let e = t.deltaMode
                    , i = {
                        clientX: t.clientX,
                        clientY: t.clientY,
                        deltaY: t.deltaY
                    };
                switch (e) {
                    case 1:
                        i.deltaY *= 16;
                        break;
                    case 2:
                        i.deltaY *= 100;
                        break
                }
                return t.ctrlKey && !this._controlActive && (i.deltaY *= 10),
                    i
            }
        }
        ;
    function x0(n) {
        this.enabled !== !1 && (this._pointers.length === 0 && (this.domElement.setPointerCapture(n.pointerId),
            this.domElement.addEventListener("pointermove", this._onPointerMove),
            this.domElement.addEventListener("pointerup", this._onPointerUp)),
            !this._isTrackingPointer(n) && (this._addPointer(n),
                n.pointerType === "touch" ? this._onTouchStart(n) : this._onMouseDown(n)))
    }
    function y0(n) {
        this.enabled !== !1 && (n.pointerType === "touch" ? this._onTouchMove(n) : this._onMouseMove(n))
    }
    function M0(n) {
        switch (this._removePointer(n),
        this._pointers.length) {
            case 0:
                this.domElement.releasePointerCapture(n.pointerId),
                    this.domElement.removeEventListener("pointermove", this._onPointerMove),
                    this.domElement.removeEventListener("pointerup", this._onPointerUp),
                    this.dispatchEvent(nd),
                    this.state = Jt.NONE;
                break;
            case 1:
                let t = this._pointers[0]
                    , e = this._pointerPositions[t];
                this._onTouchStart({
                    pointerId: t,
                    pageX: e.x,
                    pageY: e.y
                });
                break
        }
    }
    function S0(n) {
        let t;
        switch (n.button) {
            case 0:
                t = this.mouseButtons.LEFT;
                break;
            case 1:
                t = this.mouseButtons.MIDDLE;
                break;
            case 2:
                t = this.mouseButtons.RIGHT;
                break;
            default:
                t = -1
        }
        switch (t) {
            case Kn.DOLLY:
                if (this.enableZoom === !1)
                    return;
                this._handleMouseDownDolly(n),
                    this.state = Jt.DOLLY;
                break;
            case Kn.ROTATE:
                if (n.ctrlKey || n.metaKey || n.shiftKey) {
                    if (this.enablePan === !1)
                        return;
                    this._handleMouseDownPan(n),
                        this.state = Jt.PAN
                } else {
                    if (this.enableRotate === !1)
                        return;
                    this._handleMouseDownRotate(n),
                        this.state = Jt.ROTATE
                }
                break;
            case Kn.PAN:
                if (n.ctrlKey || n.metaKey || n.shiftKey) {
                    if (this.enableRotate === !1)
                        return;
                    this._handleMouseDownRotate(n),
                        this.state = Jt.ROTATE
                } else {
                    if (this.enablePan === !1)
                        return;
                    this._handleMouseDownPan(n),
                        this.state = Jt.PAN
                }
                break;
            default:
                this.state = Jt.NONE
        }
        this.state !== Jt.NONE && this.dispatchEvent(hc)
    }
    function b0(n) {
        switch (this.state) {
            case Jt.ROTATE:
                if (this.enableRotate === !1)
                    return;
                this._handleMouseMoveRotate(n);
                break;
            case Jt.DOLLY:
                if (this.enableZoom === !1)
                    return;
                this._handleMouseMoveDolly(n);
                break;
            case Jt.PAN:
                if (this.enablePan === !1)
                    return;
                this._handleMouseMovePan(n);
                break
        }
    }
    function T0(n) {
        this.enabled === !1 || this.enableZoom === !1 || this.state !== Jt.NONE || (n.preventDefault(),
            this.dispatchEvent(hc),
            this._handleMouseWheel(this._customWheelEvent(n)),
            this.dispatchEvent(nd))
    }
    function E0(n) {
        this.enabled !== !1 && this._handleKeyDown(n)
    }
    function w0(n) {
        switch (this._trackPointer(n),
        this._pointers.length) {
            case 1:
                switch (this.touches.ONE) {
                    case jn.ROTATE:
                        if (this.enableRotate === !1)
                            return;
                        this._handleTouchStartRotate(n),
                            this.state = Jt.TOUCH_ROTATE;
                        break;
                    case jn.PAN:
                        if (this.enablePan === !1)
                            return;
                        this._handleTouchStartPan(n),
                            this.state = Jt.TOUCH_PAN;
                        break;
                    default:
                        this.state = Jt.NONE
                }
                break;
            case 2:
                switch (this.touches.TWO) {
                    case jn.DOLLY_PAN:
                        if (this.enableZoom === !1 && this.enablePan === !1)
                            return;
                        this._handleTouchStartDollyPan(n),
                            this.state = Jt.TOUCH_DOLLY_PAN;
                        break;
                    case jn.DOLLY_ROTATE:
                        if (this.enableZoom === !1 && this.enableRotate === !1)
                            return;
                        this._handleTouchStartDollyRotate(n),
                            this.state = Jt.TOUCH_DOLLY_ROTATE;
                        break;
                    default:
                        this.state = Jt.NONE
                }
                break;
            default:
                this.state = Jt.NONE
        }
        this.state !== Jt.NONE && this.dispatchEvent(hc)
    }
    function A0(n) {
        switch (this._trackPointer(n),
        this.state) {
            case Jt.TOUCH_ROTATE:
                if (this.enableRotate === !1)
                    return;
                this._handleTouchMoveRotate(n),
                    this.update();
                break;
            case Jt.TOUCH_PAN:
                if (this.enablePan === !1)
                    return;
                this._handleTouchMovePan(n),
                    this.update();
                break;
            case Jt.TOUCH_DOLLY_PAN:
                if (this.enableZoom === !1 && this.enablePan === !1)
                    return;
                this._handleTouchMoveDollyPan(n),
                    this.update();
                break;
            case Jt.TOUCH_DOLLY_ROTATE:
                if (this.enableZoom === !1 && this.enableRotate === !1)
                    return;
                this._handleTouchMoveDollyRotate(n),
                    this.update();
                break;
            default:
                this.state = Jt.NONE
        }
    }
    function C0(n) {
        this.enabled !== !1 && n.preventDefault()
    }
    function R0(n) {
        n.key === "Control" && (this._controlActive = !0,
            this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, {
                passive: !0,
                capture: !0
            }))
    }
    function P0(n) {
        n.key === "Control" && (this._controlActive = !1,
            this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, {
                passive: !0,
                capture: !0
            }))
    }
    var fn = class {
        constructor() {
            this.isPass = !0,
                this.enabled = !0,
                this.needsSwap = !0,
                this.clear = !1,
                this.renderToScreen = !1
        }
        setSize() { }
        render() {
            console.error("THREE.Pass: .render() must be implemented in derived pass.")
        }
        dispose() { }
    }
        , I0 = new es(-1, 1, 1, -1, 0, 1)
        , uc = class extends $e {
            constructor() {
                super(),
                    this.setAttribute("position", new Ce([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)),
                    this.setAttribute("uv", new Ce([0, 2, 0, 0, 2, 0], 2))
            }
        }
        , D0 = new uc
        , ds = class {
            constructor(t) {
                this._mesh = new Fe(D0, t)
            }
            dispose() {
                this._mesh.geometry.dispose()
            }
            render(t) {
                t.render(this._mesh, I0)
            }
            get material() {
                return this._mesh.material
            }
            set material(t) {
                this._mesh.material = t
            }
        }
        ;
    var fs = {
        name: "CopyShader",
        uniforms: {
            tDiffuse: {
                value: null
            },
            opacity: {
                value: 1
            }
        },
        vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
        fragmentShader: `

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`
    };
    var id = {
        name: "LuminosityHighPassShader",
        uniforms: {
            tDiffuse: {
                value: null
            },
            luminosityThreshold: {
                value: 1
            },
            smoothWidth: {
                value: 1
            },
            defaultColor: {
                value: new Dt(0)
            },
            defaultOpacity: {
                value: 0
            }
        },
        vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
        fragmentShader: `

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`
    };
    var ps = class n extends fn {
        constructor(t, e = 1, i, s) {
            super(),
                this.strength = e,
                this.radius = i,
                this.threshold = s,
                this.resolution = t !== void 0 ? new Mt(t.x, t.y) : new Mt(256, 256),
                this.clearColor = new Dt(0, 0, 0),
                this.needsSwap = !1,
                this.renderTargetsHorizontal = [],
                this.renderTargetsVertical = [],
                this.nMips = 5;
            let r = Math.round(this.resolution.x / 2)
                , o = Math.round(this.resolution.y / 2);
            this.renderTargetBright = new Te(r, o, {
                type: on
            }),
                this.renderTargetBright.texture.name = "UnrealBloomPass.bright",
                this.renderTargetBright.texture.generateMipmaps = !1;
            for (let d = 0; d < this.nMips; d++) {
                let h = new Te(r, o, {
                    type: on
                });
                h.texture.name = "UnrealBloomPass.h" + d,
                    h.texture.generateMipmaps = !1,
                    this.renderTargetsHorizontal.push(h);
                let f = new Te(r, o, {
                    type: on
                });
                f.texture.name = "UnrealBloomPass.v" + d,
                    f.texture.generateMipmaps = !1,
                    this.renderTargetsVertical.push(f),
                    r = Math.round(r / 2),
                    o = Math.round(o / 2)
            }
            let a = id;
            this.highPassUniforms = bi.clone(a.uniforms),
                this.highPassUniforms.luminosityThreshold.value = s,
                this.highPassUniforms.smoothWidth.value = .01,
                this.materialHighPassFilter = new ve({
                    uniforms: this.highPassUniforms,
                    vertexShader: a.vertexShader,
                    fragmentShader: a.fragmentShader
                }),
                this.separableBlurMaterials = [];
            let c = [3, 5, 7, 9, 11];
            r = Math.round(this.resolution.x / 2),
                o = Math.round(this.resolution.y / 2);
            for (let d = 0; d < this.nMips; d++)
                this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[d])),
                    this.separableBlurMaterials[d].uniforms.invSize.value = new Mt(1 / r, 1 / o),
                    r = Math.round(r / 2),
                    o = Math.round(o / 2);
            this.compositeMaterial = this._getCompositeMaterial(this.nMips),
                this.compositeMaterial.uniforms.blurTexture1.value = this.renderTargetsVertical[0].texture,
                this.compositeMaterial.uniforms.blurTexture2.value = this.renderTargetsVertical[1].texture,
                this.compositeMaterial.uniforms.blurTexture3.value = this.renderTargetsVertical[2].texture,
                this.compositeMaterial.uniforms.blurTexture4.value = this.renderTargetsVertical[3].texture,
                this.compositeMaterial.uniforms.blurTexture5.value = this.renderTargetsVertical[4].texture,
                this.compositeMaterial.uniforms.bloomStrength.value = e,
                this.compositeMaterial.uniforms.bloomRadius.value = .1;
            let l = [1, .8, .6, .4, .2];
            this.compositeMaterial.uniforms.bloomFactors.value = l,
                this.bloomTintColors = [new P(1, 1, 1), new P(1, 1, 1), new P(1, 1, 1), new P(1, 1, 1), new P(1, 1, 1)],
                this.compositeMaterial.uniforms.bloomTintColors.value = this.bloomTintColors,
                this.copyUniforms = bi.clone(fs.uniforms),
                this.blendMaterial = new ve({
                    uniforms: this.copyUniforms,
                    vertexShader: fs.vertexShader,
                    fragmentShader: fs.fragmentShader,
                    blending: xi,
                    depthTest: !1,
                    depthWrite: !1,
                    transparent: !0
                }),
                this._oldClearColor = new Dt,
                this._oldClearAlpha = 1,
                this._basic = new _i,
                this._fsQuad = new ds(null)
        }
        dispose() {
            for (let t = 0; t < this.renderTargetsHorizontal.length; t++)
                this.renderTargetsHorizontal[t].dispose();
            for (let t = 0; t < this.renderTargetsVertical.length; t++)
                this.renderTargetsVertical[t].dispose();
            this.renderTargetBright.dispose();
            for (let t = 0; t < this.separableBlurMaterials.length; t++)
                this.separableBlurMaterials[t].dispose();
            this.compositeMaterial.dispose(),
                this.blendMaterial.dispose(),
                this._basic.dispose(),
                this._fsQuad.dispose()
        }
        setSize(t, e) {
            let i = Math.round(t / 2)
                , s = Math.round(e / 2);
            this.renderTargetBright.setSize(i, s);
            for (let r = 0; r < this.nMips; r++)
                this.renderTargetsHorizontal[r].setSize(i, s),
                    this.renderTargetsVertical[r].setSize(i, s),
                    this.separableBlurMaterials[r].uniforms.invSize.value = new Mt(1 / i, 1 / s),
                    i = Math.round(i / 2),
                    s = Math.round(s / 2)
        }
        render(t, e, i, s, r) {
            t.getClearColor(this._oldClearColor),
                this._oldClearAlpha = t.getClearAlpha();
            let o = t.autoClear;
            t.autoClear = !1,
                t.setClearColor(this.clearColor, 0),
                r && t.state.buffers.stencil.setTest(!1),
                this.renderToScreen && (this._fsQuad.material = this._basic,
                    this._basic.map = i.texture,
                    t.setRenderTarget(null),
                    t.clear(),
                    this._fsQuad.render(t)),
                this.highPassUniforms.tDiffuse.value = i.texture,
                this.highPassUniforms.luminosityThreshold.value = this.threshold,
                this._fsQuad.material = this.materialHighPassFilter,
                t.setRenderTarget(this.renderTargetBright),
                t.clear(),
                this._fsQuad.render(t);
            let a = this.renderTargetBright;
            for (let c = 0; c < this.nMips; c++)
                this._fsQuad.material = this.separableBlurMaterials[c],
                    this.separableBlurMaterials[c].uniforms.colorTexture.value = a.texture,
                    this.separableBlurMaterials[c].uniforms.direction.value = n.BlurDirectionX,
                    t.setRenderTarget(this.renderTargetsHorizontal[c]),
                    t.clear(),
                    this._fsQuad.render(t),
                    this.separableBlurMaterials[c].uniforms.colorTexture.value = this.renderTargetsHorizontal[c].texture,
                    this.separableBlurMaterials[c].uniforms.direction.value = n.BlurDirectionY,
                    t.setRenderTarget(this.renderTargetsVertical[c]),
                    t.clear(),
                    this._fsQuad.render(t),
                    a = this.renderTargetsVertical[c];
            this._fsQuad.material = this.compositeMaterial,
                this.compositeMaterial.uniforms.bloomStrength.value = this.strength,
                this.compositeMaterial.uniforms.bloomRadius.value = this.radius,
                this.compositeMaterial.uniforms.bloomTintColors.value = this.bloomTintColors,
                t.setRenderTarget(this.renderTargetsHorizontal[0]),
                t.clear(),
                this._fsQuad.render(t),
                this._fsQuad.material = this.blendMaterial,
                this.copyUniforms.tDiffuse.value = this.renderTargetsHorizontal[0].texture,
                r && t.state.buffers.stencil.setTest(!0),
                this.renderToScreen ? (t.setRenderTarget(null),
                    this._fsQuad.render(t)) : (t.setRenderTarget(i),
                        this._fsQuad.render(t)),
                t.setClearColor(this._oldClearColor, this._oldClearAlpha),
                t.autoClear = o
        }
        _getSeparableBlurMaterial(t) {
            let e = [];
            for (let i = 0; i < t; i++)
                e.push(.39894 * Math.exp(-.5 * i * i / (t * t)) / t);
            return new ve({
                defines: {
                    KERNEL_RADIUS: t
                },
                uniforms: {
                    colorTexture: {
                        value: null
                    },
                    invSize: {
                        value: new Mt(.5, .5)
                    },
                    direction: {
                        value: new Mt(.5, .5)
                    },
                    gaussianCoefficients: {
                        value: e
                    }
                },
                vertexShader: `varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,
                fragmentShader: `#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`
            })
        }
        _getCompositeMaterial(t) {
            return new ve({
                defines: {
                    NUM_MIPS: t
                },
                uniforms: {
                    blurTexture1: {
                        value: null
                    },
                    blurTexture2: {
                        value: null
                    },
                    blurTexture3: {
                        value: null
                    },
                    blurTexture4: {
                        value: null
                    },
                    blurTexture5: {
                        value: null
                    },
                    bloomStrength: {
                        value: 1
                    },
                    bloomFactors: {
                        value: null
                    },
                    bloomTintColors: {
                        value: null
                    },
                    bloomRadius: {
                        value: 0
                    }
                },
                vertexShader: `varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,
                fragmentShader: `varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`
            })
        }
    }
        ;
    ps.BlurDirectionX = new Mt(1, 0);
    ps.BlurDirectionY = new Mt(0, 1);
    var _a = class extends fn {
        constructor(t, e = "tDiffuse") {
            super(),
                this.textureID = e,
                this.uniforms = null,
                this.material = null,
                t instanceof ve ? (this.uniforms = t.uniforms,
                    this.material = t) : t && (this.uniforms = bi.clone(t.uniforms),
                        this.material = new ve({
                            name: t.name !== void 0 ? t.name : "unspecified",
                            defines: Object.assign({}, t.defines),
                            uniforms: this.uniforms,
                            vertexShader: t.vertexShader,
                            fragmentShader: t.fragmentShader
                        })),
                this._fsQuad = new ds(this.material)
        }
        render(t, e, i) {
            this.uniforms[this.textureID] && (this.uniforms[this.textureID].value = i.texture),
                this._fsQuad.material = this.material,
                this.renderToScreen ? (t.setRenderTarget(null),
                    this._fsQuad.render(t)) : (t.setRenderTarget(e),
                        this.clear && t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil),
                        this._fsQuad.render(t))
        }
        dispose() {
            this.material.dispose(),
                this._fsQuad.dispose()
        }
    }
        ;
    var ir = class extends fn {
        constructor(t, e) {
            super(),
                this.scene = t,
                this.camera = e,
                this.clear = !0,
                this.needsSwap = !1,
                this.inverse = !1
        }
        render(t, e, i) {
            let s = t.getContext()
                , r = t.state;
            r.buffers.color.setMask(!1),
                r.buffers.depth.setMask(!1),
                r.buffers.color.setLocked(!0),
                r.buffers.depth.setLocked(!0);
            let o, a;
            this.inverse ? (o = 0,
                a = 1) : (o = 1,
                    a = 0),
                r.buffers.stencil.setTest(!0),
                r.buffers.stencil.setOp(s.REPLACE, s.REPLACE, s.REPLACE),
                r.buffers.stencil.setFunc(s.ALWAYS, o, 4294967295),
                r.buffers.stencil.setClear(a),
                r.buffers.stencil.setLocked(!0),
                t.setRenderTarget(i),
                this.clear && t.clear(),
                t.render(this.scene, this.camera),
                t.setRenderTarget(e),
                this.clear && t.clear(),
                t.render(this.scene, this.camera),
                r.buffers.color.setLocked(!1),
                r.buffers.depth.setLocked(!1),
                r.buffers.color.setMask(!0),
                r.buffers.depth.setMask(!0),
                r.buffers.stencil.setLocked(!1),
                r.buffers.stencil.setFunc(s.EQUAL, 1, 4294967295),
                r.buffers.stencil.setOp(s.KEEP, s.KEEP, s.KEEP),
                r.buffers.stencil.setLocked(!0)
        }
    }
        , va = class extends fn {
            constructor() {
                super(),
                    this.needsSwap = !1
            }
            render(t) {
                t.state.buffers.stencil.setLocked(!1),
                    t.state.buffers.stencil.setTest(!1)
            }
        }
        ;
    var xa = class {
        constructor(t, e) {
            if (this.renderer = t,
                this._pixelRatio = t.getPixelRatio(),
                e === void 0) {
                let i = t.getSize(new Mt);
                this._width = i.width,
                    this._height = i.height,
                    e = new Te(this._width * this._pixelRatio, this._height * this._pixelRatio, {
                        type: on
                    }),
                    e.texture.name = "EffectComposer.rt1"
            } else
                this._width = e.width,
                    this._height = e.height;
            this.renderTarget1 = e,
                this.renderTarget2 = e.clone(),
                this.renderTarget2.texture.name = "EffectComposer.rt2",
                this.writeBuffer = this.renderTarget1,
                this.readBuffer = this.renderTarget2,
                this.renderToScreen = !0,
                this.passes = [],
                this.copyPass = new _a(fs),
                this.copyPass.material.blending = un,
                this.clock = new Xs
        }
        swapBuffers() {
            let t = this.readBuffer;
            this.readBuffer = this.writeBuffer,
                this.writeBuffer = t
        }
        addPass(t) {
            this.passes.push(t),
                t.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio)
        }
        insertPass(t, e) {
            this.passes.splice(e, 0, t),
                t.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio)
        }
        removePass(t) {
            let e = this.passes.indexOf(t);
            e !== -1 && this.passes.splice(e, 1)
        }
        isLastEnabledPass(t) {
            for (let e = t + 1; e < this.passes.length; e++)
                if (this.passes[e].enabled)
                    return !1;
            return !0
        }
        render(t) {
            t === void 0 && (t = this.clock.getDelta());
            let e = this.renderer.getRenderTarget()
                , i = !1;
            for (let s = 0, r = this.passes.length; s < r; s++) {
                let o = this.passes[s];
                if (o.enabled !== !1) {
                    if (o.renderToScreen = this.renderToScreen && this.isLastEnabledPass(s),
                        o.render(this.renderer, this.writeBuffer, this.readBuffer, t, i),
                        o.needsSwap) {
                        if (i) {
                            let a = this.renderer.getContext()
                                , c = this.renderer.state.buffers.stencil;
                            c.setFunc(a.NOTEQUAL, 1, 4294967295),
                                this.copyPass.render(this.renderer, this.writeBuffer, this.readBuffer, t),
                                c.setFunc(a.EQUAL, 1, 4294967295)
                        }
                        this.swapBuffers()
                    }
                    ir !== void 0 && (o instanceof ir ? i = !0 : o instanceof va && (i = !1))
                }
            }
            this.renderer.setRenderTarget(e)
        }
        reset(t) {
            if (t === void 0) {
                let e = this.renderer.getSize(new Mt);
                this._pixelRatio = this.renderer.getPixelRatio(),
                    this._width = e.width,
                    this._height = e.height,
                    t = this.renderTarget1.clone(),
                    t.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio)
            }
            this.renderTarget1.dispose(),
                this.renderTarget2.dispose(),
                this.renderTarget1 = t,
                this.renderTarget2 = t.clone(),
                this.writeBuffer = this.renderTarget1,
                this.readBuffer = this.renderTarget2
        }
        setSize(t, e) {
            this._width = t,
                this._height = e;
            let i = this._width * this._pixelRatio
                , s = this._height * this._pixelRatio;
            this.renderTarget1.setSize(i, s),
                this.renderTarget2.setSize(i, s);
            for (let r = 0; r < this.passes.length; r++)
                this.passes[r].setSize(i, s)
        }
        setPixelRatio(t) {
            this._pixelRatio = t,
                this.setSize(this._width, this._height)
        }
        dispose() {
            this.renderTarget1.dispose(),
                this.renderTarget2.dispose(),
                this.copyPass.dispose()
        }
    }
        ;
    var ya = class extends fn {
        constructor(t, e, i = null, s = null, r = null) {
            super(),
                this.scene = t,
                this.camera = e,
                this.overrideMaterial = i,
                this.clearColor = s,
                this.clearAlpha = r,
                this.clear = !0,
                this.clearDepth = !1,
                this.needsSwap = !1,
                this._oldClearColor = new Dt
        }
        render(t, e, i) {
            let s = t.autoClear;
            t.autoClear = !1;
            let r, o;
            this.overrideMaterial !== null && (o = this.scene.overrideMaterial,
                this.scene.overrideMaterial = this.overrideMaterial),
                this.clearColor !== null && (t.getClearColor(this._oldClearColor),
                    t.setClearColor(this.clearColor, t.getClearAlpha())),
                this.clearAlpha !== null && (r = t.getClearAlpha(),
                    t.setClearAlpha(this.clearAlpha)),
                this.clearDepth == !0 && t.clearDepth(),
                t.setRenderTarget(this.renderToScreen ? null : i),
                this.clear === !0 && t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil),
                t.render(this.scene, this.camera),
                this.clearColor !== null && t.setClearColor(this._oldClearColor),
                this.clearAlpha !== null && t.setClearAlpha(r),
                this.overrideMaterial !== null && (this.scene.overrideMaterial = o),
                t.autoClear = s
        }
    }
        ;
    var Ma = class {
        constructor(t) {
            Ue(this, "renderer");
            Ue(this, "scene");
            Ue(this, "camera");
            Ue(this, "composer");
            Ue(this, "controls");
            this.renderer = new aa({
                antialias: !0,
                alpha: !0,
                preserveDrawingBuffer: !0
            }),
                this.renderer.setPixelRatio(window.devicePixelRatio),
                this.renderer.setClearColor(723983),
                this.renderer.toneMapping = yo,
                this.renderer.toneMappingExposure = .75,
                this.scene = new zs,
                this.scene.background = new Dt(723983),
                this.camera = new Ae(90),
                this.camera.position.z = 1,
                this.camera.near = 1e-4,
                this.camera.far = 1e3;
            let i = new Mt(window.innerWidth * 2, window.innerHeight * 2)
                , s = new Te(i.x, i.y, {
                    minFilter: Ne,
                    magFilter: Ne,
                    format: Oe,
                    samples: 4
                });
            this.composer = new xa(this.renderer, s),
                this.composer.addPass(new ya(this.scene, this.camera)),
                this.composer.addPass(new ps(new Mt(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio), 1, .25, 0)),
                this.controls = new ga(this.camera, this.renderer.domElement),
                this.controls.minDistance = 0,
                this.controls.maxDistance = 2e3,
                this.controls.rotateSpeed = 1.5,
                t.appendChild(this.renderer.domElement)
        }
        resize(t, e) {
            this.camera.aspect = t / e,
                this.camera.updateProjectionMatrix(),
                this.renderer.setSize(t, e),
                this.composer.setSize(t, e),
                this.composer.render()
        }
        update() {
            this.controls.update(),
                this.composer.render(),
                us.value = this.camera.position.clone()
        }
    }
        ;
    function sd() {
        let n = Va(null);
        return gr(() => {
            if (!document.createElement("canvas").getContext("webgl")) {
                document.documentElement.classList.add("no-webgl");
                return
            }
            n.current && (nr.value = new Ma(n.current),
                requestAnimationFrame(function t() {
                    pa.value || lc.value++,
                        requestAnimationFrame(t)
                }),
                viewport$.subscribe(({ size: t }) => {
                    var e;
                    (e = nr.value) == null || e.resize(t.width, t.height)
                }
                ))
        }
            , []),
            ue(He, null, ue("div", {
                ref: n,
                id: "attractor"
            }), ue(U0, null), ue(L0, null))
    }
    function L0() {
        let [n, t] = mr(null)
            , e = [{
                key: "alpha",
                symbol: "\u03B1"
            }, {
                key: "beta",
                symbol: "\u03B2"
            }, {
                key: "gamma",
                symbol: "\u03B3"
            }, {
                key: "delta",
                symbol: "\u03B4"
            }, {
                key: "epsilon",
                symbol: "\u03B5"
            }, {
                key: "zeta",
                symbol: "\u03B6"
            }];
        return gr(() => {
            function i(s) {
                if (n && (s.key === "ArrowUp" || s.key === "ArrowDown")) {
                    s.preventDefault();
                    let r = s.key === "ArrowUp" ? .01 : -.01;
                    Ci.value = or(gs({}, Ci.value), {
                        [n]: Ci.value[n] + r
                    })
                }
            }
            return window.addEventListener("keydown", i),
                () => window.removeEventListener("keydown", i)
        }
            , [n]),
            ue("div", {
                class: "mdx-parameters"
            }, ue("div", {
                class: "mdx-parameters__inner md-grid"
            }, e.map(({ key: i, symbol: s }) => ue("code", {
                key: i,
                tabIndex: 0,
                class: `mdx-parameter mdx-parameter${n === i ? " mdx-parameter--active" : ""}`,
                onClick: () => t(i),
                onBlur: () => t(null)
            }, Ci.value[i].toFixed(3), ue("sub", null, s)))))
    }
    function U0() {
        let n = us.value.x.toFixed(3)
            , t = us.value.y.toFixed(3)
            , e = us.value.z.toFixed(3);
        return ue("div", {
            class: "mdx-position"
        }, ue("div", {
            class: "mdx-position__inner md-grid"
        }, ue("code", null, n, ue("sub", null, "x")), ue("code", null, t, ue("sub", null, "y")), ue("code", null, e, ue("sub", null, "z"))))
    }
    function N0() {
        return ue(sd, null)
    }
    Nc(ue(N0, null), document.getElementById("hero"));
}
)();
