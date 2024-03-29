function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
    function t(e) {
        return typeof e
    }: function n(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
    })(e)
} !
function(m, j) {
    var n, i, y = m.document,
    e = m.location,
    t = m.navigator,
    r = m.jQuery,
    o = m.$,
    a = Array.prototype.push,
    v = Array.prototype.slice,
    s = Array.prototype.indexOf,
    l = Object.prototype.toString,
    u = Object.prototype.hasOwnProperty,
    c = String.prototype.trim,
    Pe = function Pe(e, t) {
        return new Pe.fn.init(e, t, n)
    },
    f = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
    p = /\S/,
    D = /\s+/,
    d = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    h = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
    g = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    b = /^[\],:{}\s]*$/,
    x = /(?:^|:|,)(?:\s*\[)+/g,
    w = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
    T = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
    N = /^-ms-/,
    C = /-([\da-z])/gi,
    E = function E(e, t) {
        return (t + "").toUpperCase()
    },
    k = function k() {
        y.addEventListener ? (y.removeEventListener("DOMContentLoaded", k, !1), Pe.ready()) : "complete" === y.readyState && (y.detachEvent("onreadystatechange", k), Pe.ready())
    },
    S = {};
    Pe.fn = Pe.prototype = {
        constructor: Pe,
        init: function on(e, t, n) {
            var r, i, o;
            if (!e) return this;
            if (e.nodeType) return this.context = this[0] = e,
            this.length = 1,
            this;
            if ("string" != typeof e) return Pe.isFunction(e) ? n.ready(e) : (e.selector !== j && (this.selector = e.selector, this.context = e.context), Pe.makeArray(e, this));
            if (! (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : h.exec(e)) || !r[1] && t) return ! t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) return o = (t = t instanceof Pe ? t[0] : t) && t.nodeType ? t.ownerDocument || t: y,
            e = Pe.parseHTML(r[1], o, !0),
            g.test(r[1]) && Pe.isPlainObject(t) && this.attr.call(e, t, !0),
            Pe.merge(this, e);
            if ((i = y.getElementById(r[2])) && i.parentNode) {
                if (i.id !== r[2]) return n.find(e);
                this.length = 1,
                this[0] = i
            }
            return this.context = y,
            this.selector = e,
            this
        },
        selector: "",
        jquery: "1.8.2",
        length: 0,
        size: function an() {
            return this.length
        },
        toArray: function sn() {
            return v.call(this)
        },
        get: function ln(e) {
            return null == e ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
        },
        pushStack: function un(e, t, n) {
            var r = Pe.merge(this.constructor(), e);
            return r.prevObject = this,
            r.context = this.context,
            "find" === t ? r.selector = this.selector + (this.selector ? " ": "") + n: t && (r.selector = this.selector + "." + t + "(" + n + ")"),
            r
        },
        each: function cn(e, t) {
            return Pe.each(this, e, t)
        },
        ready: function fn(e) {
            return Pe.ready.promise().done(e),
            this
        },
        eq: function pn(e) {
            return - 1 === (e = +e) ? this.slice(e) : this.slice(e, e + 1)
        },
        first: function dn() {
            return this.eq(0)
        },
        last: function hn() {
            return this.eq( - 1)
        },
        slice: function gn() {
            return this.pushStack(v.apply(this, arguments), "slice", v.call(arguments).join(","))
        },
        map: function mn(n) {
            return this.pushStack(Pe.map(this,
            function(e, t) {
                return n.call(e, t, e)
            }))
        },
        end: function yn() {
            return this.prevObject || this.constructor(null)
        },
        push: a,
        sort: [].sort,
        splice: [].splice
    },
    Pe.fn.init.prototype = Pe.fn,
    Pe.extend = Pe.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
        s = 1,
        l = arguments.length,
        u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[1] || {},
        s = 2), "object" === _typeof(a) || Pe.isFunction(a) || (a = {}), l === s && (a = this, --s); s < l; s++) if (null != (e = arguments[s])) for (t in e) n = a[t],
        a !== (r = e[t]) && (u && r && (Pe.isPlainObject(r) || (i = Pe.isArray(r))) ? (o = i ? (i = !1, n && Pe.isArray(n) ? n: []) : n && Pe.isPlainObject(n) ? n: {},
        a[t] = Pe.extend(u, o, r)) : r !== j && (a[t] = r));
        return a
    },
    Pe.extend({
        noConflict: function vn(e) {
            return m.$ === Pe && (m.$ = o),
            e && m.jQuery === Pe && (m.jQuery = r),
            Pe
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function bn(e) {
            e ? Pe.readyWait++:Pe.ready(!0)
        },
        ready: function fn(e) {
            if (!0 === e ? !--Pe.readyWait: !Pe.isReady) {
                if (!y.body) return setTimeout(Pe.ready, 1); (Pe.isReady = !0) !== e && 0 < --Pe.readyWait || (i.resolveWith(y, [Pe]), Pe.fn.trigger && Pe(y).trigger("ready").off("ready"))
            }
        },
        isFunction: function xn(e) {
            return "function" === Pe.type(e)
        },
        isArray: Array.isArray ||
        function(e) {
            return "array" === Pe.type(e)
        },
        isWindow: function wn(e) {
            return null != e && e == e.window
        },
        isNumeric: function Tn(e) {
            return ! isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function Nn(e) {
            return null == e ? String(e) : S[l.call(e)] || "object"
        },
        isPlainObject: function Cn(e) {
            if (!e || "object" !== Pe.type(e) || e.nodeType || Pe.isWindow(e)) return ! 1;
            try {
                if (e.constructor && !u.call(e, "constructor") && !u.call(e.constructor.prototype, "isPrototypeOf")) return ! 1
            } catch(n) {
                return ! 1
            }
            var t;
            for (t in e);
            return t === j || u.call(e, t)
        },
        isEmptyObject: function En(e) {
            var t;
            for (t in e) return ! 1;
            return ! 0
        },
        error: function kn(e) {
            throw new Error(e)
        },
        parseHTML: function Sn(e, t, n) {
            var r;
            return e && "string" == typeof e ? ("boolean" == typeof t && (n = t, t = 0), t = t || y, (r = g.exec(e)) ? [t.createElement(r[1])] : (r = Pe.buildFragment([e], t, n ? null: []), Pe.merge([], (r.cacheable ? Pe.clone(r.fragment) : r.fragment).childNodes))) : null
        },
        parseJSON: function An(e) {
            return e && "string" == typeof e ? (e = Pe.trim(e), m.JSON && m.JSON.parse ? m.JSON.parse(e) : b.test(e.replace(w, "@").replace(T, "]").replace(x, "")) ? new Function("return " + e)() : void Pe.error("Invalid JSON: " + e)) : null
        },
        parseXML: function jn(e) {
            var t;
            if (!e || "string" != typeof e) return null;
            try {
                m.DOMParser ? t = (new DOMParser).parseFromString(e, "text/xml") : ((t = new ActiveXObject("Microsoft.XMLDOM")).async = "false", t.loadXML(e))
            } catch(n) {
                t = j
            }
            return t && t.documentElement && !t.getElementsByTagName("parsererror").length || Pe.error("Invalid XML: " + e),
            t
        },
        noop: function Dn() {},
        globalEval: function Ln(e) {
            e && p.test(e) && (m.execScript ||
            function(e) {
                m.eval.call(m, e)
            })(e)
        },
        globalReturnEval: function Hn(e) {
            return t = e,
            m.eval.call(m, t);
            var t
        }, camelCase: function _n(e) {
            return e.replace(N, "ms-").replace(C, E)
        },
        nodeName: function Fn(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function cn(e, t, n) {
            var r, i = 0,
            o = e.length,
            a = o === j || Pe.isFunction(e);
            if (n) if (a) {
                for (r in e) if (!1 === t.apply(e[r], n)) break
            } else for (; i < o && !1 !== t.apply(e[i++], n););
            else if (a) {
                for (r in e) if (!1 === t.call(e[r], r, e[r])) break
            } else for (; i < o && !1 !== t.call(e[i], i, e[i++]););
            return e
        },
        trim: c && !c.call("\ufeff ") ?
        function(e) {
            return null == e ? "": c.call(e)
        }: function(e) {
            return null == e ? "": (e + "").replace(d, "")
        },
        makeArray: function Mn(e, t) {
            var n, r = t || [];
            return null != e && (n = Pe.type(e), null == e.length || "string" === n || "function" === n || "regexp" === n || Pe.isWindow(e) ? a.call(r, e) : Pe.merge(r, e)),
            r
        },
        inArray: function On(e, t, n) {
            var r;
            if (t) {
                if (s) return s.call(t, e, n);
                for (r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n: 0; n < r; n++) if (n in t && t[n] === e) return n
            }
            return - 1
        },
        merge: function qn(e, t) {
            var n = t.length,
            r = e.length,
            i = 0;
            if ("number" == typeof n) for (; i < n; i++) e[r++] = t[i];
            else for (; t[i] !== j;) e[r++] = t[i++];
            return e.length = r,
            e
        },
        grep: function Bn(e, t, n) {
            var r = [],
            i = 0,
            o = e.length;
            for (n = !!n; i < o; i++) n !== !!t(e[i], i) && r.push(e[i]);
            return r
        },
        map: function mn(e, t, n) {
            var r, i, o = [],
            a = 0,
            s = e.length;
            if (e instanceof Pe || s !== j && "number" == typeof s && (0 < s && e[0] && e[s - 1] || 0 === s || Pe.isArray(e))) for (; a < s; a++) null != (r = t(e[a], a, n)) && (o[o.length] = r);
            else for (i in e) null != (r = t(e[i], i, n)) && (o[o.length] = r);
            return o.concat.apply([], o)
        },
        guid: 1,
        proxy: function Wn(e, t) {
            var n, r, Wn;
            return "string" == typeof t && (n = e[t], t = e, e = n),
            Pe.isFunction(e) ? (r = v.call(arguments, 2), Wn = function Oc() {
                return e.apply(t, r.concat(v.call(arguments)))
            },
            Wn.guid = e.guid = e.guid || Pe.guid++, Wn) : j
        },
        access: function Pn(e, t, n, r, i, o, a) {
            var s, l = null == n,
            u = 0,
            c = e.length;
            if (n && "object" === _typeof(n)) {
                for (u in n) Pe.access(e, t, u, n[u], 1, o, r);
                i = 1
            } else if (r !== j) {
                if (s = a === j && Pe.isFunction(r), l && (t = s ? (s = t,
                function f(e, t, n) {
                    return s.call(Pe(e), n)
                }) : (t.call(e, r), null)), t) for (; u < c; u++) t(e[u], n, s ? r.call(e[u], u, t(e[u], n)) : r, a);
                i = 1
            }
            return i ? e: l ? t.call(e) : c ? t(e[0], n) : o
        },
        now: function Rn() {
            return (new Date).getTime()
        }
    }),
    Pe.ready.promise = function(e) {
        if (!i) if (i = Pe.Deferred(), "complete" === y.readyState) setTimeout(Pe.ready, 1);
        else if (y.addEventListener) y.addEventListener("DOMContentLoaded", k, !1),
        m.addEventListener("load", Pe.ready, !1);
        else {
            y.attachEvent("onreadystatechange", k),
            m.attachEvent("onload", Pe.ready);
            var t = !1;
            try {
                t = null == m.frameElement && y.documentElement
            } catch(n) {}
            t && t.doScroll && !
            function r() {
                if (!Pe.isReady) {
                    try {
                        t.doScroll("left")
                    } catch(n) {
                        return setTimeout(r, 50)
                    }
                    Pe.ready()
                }
            } ()
        }
        return i.promise(e)
    },
    Pe.each("Boolean Number String Function Array Date RegExp Object".split(" "),
    function(e, t) {
        S["[object " + t + "]"] = t.toLowerCase()
    }),
    n = Pe(y);
    var A = {};
    function L(e) {
        var n = A[e] = {};
        return Pe.each(e.split(D),
        function(e, t) {
            n[t] = !0
        }),
        n
    }
    Pe.Callbacks = function(r) {
        r = "string" == typeof r ? A[r] || L(r) : Pe.extend({},
        r);
        var t, n, i, o, a, s, l = [],
        u = !r.once && [],
        c = function c(e) {
            for (t = r.memory && e, n = !0, s = o || 0, o = 0, a = l.length, i = !0; l && s < a; s++) if (!1 === l[s].apply(e[0], e[1]) && r.stopOnFalse) {
                t = !1;
                break
            }
            i = !1,
            l && (u ? u.length && c(u.shift()) : t ? l = [] : f.disable())
        },
        f = {
            add: function p() {
                if (l) {
                    var e = l.length; !
                    function Gh(e) {
                        Pe.each(e,
                        function(e, t) {
                            var n = Pe.type(t);
                            "function" !== n || r.unique && f.has(t) ? t && t.length && "string" !== n && Gh(t) : l.push(t)
                        })
                    } (arguments),
                    i ? a = l.length: t && (o = e, c(t))
                }
                return this
            },
            remove: function e() {
                return l && Pe.each(arguments,
                function(e, t) {
                    for (var n; - 1 < (n = Pe.inArray(t, l, n));) l.splice(n, 1),
                    i && (n <= a && a--, n <= s && s--)
                }),
                this
            },
            has: function d(e) {
                return - 1 < Pe.inArray(e, l)
            },
            empty: function h() {
                return l = [],
                this
            },
            disable: function g() {
                return l = u = t = j,
                this
            },
            disabled: function m() {
                return ! l
            },
            lock: function y() {
                return u = j,
                t || f.disable(),
                this
            },
            locked: function v() {
                return ! u
            },
            fireWith: function b(e, t) {
                return t = [e, (t = t || []).slice ? t.slice() : t],
                !l || n && !u || (i ? u.push(t) : c(t)),
                this
            },
            fire: function c() {
                return f.fireWith(this, arguments),
                this
            },
            fired: function x() {
                return !! n
            }
        };
        return f
    },
    Pe.extend({
        Deferred: function $n(e) {
            var a = [["resolve", "done", Pe.Callbacks("once memory"), "resolved"], ["reject", "fail", Pe.Callbacks("once memory"), "rejected"], ["notify", "progress", Pe.Callbacks("memory")]],
            i = "pending",
            o = {
                state: function t() {
                    return i
                },
                always: function n() {
                    return s.done(arguments).fail(arguments),
                    this
                },
                then: function r() {
                    var o = arguments;
                    return Pe.Deferred(function(i) {
                        Pe.each(a,
                        function(e, t) {
                            var n = t[0],
                            r = o[e];
                            s[t[1]](Pe.isFunction(r) ?
                            function() {
                                var e = r.apply(this, arguments);
                                e && Pe.isFunction(e.promise) ? e.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[n + "With"](this === s ? i: this, [e])
                            }: i[n])
                        }),
                        o = null
                    }).promise()
                },
                promise: function l(e) {
                    return null != e ? Pe.extend(e, o) : o
                }
            },
            s = {};
            return o.pipe = o.then,
            Pe.each(a,
            function(e, t) {
                var n = t[2],
                r = t[3];
                o[t[1]] = n.add,
                r && n.add(function() {
                    i = r
                },
                a[1 ^ e][2].disable, a[2][2].lock),
                s[t[0]] = n.fire,
                s[t[0] + "With"] = n.fireWith
            }),
            o.promise(s),
            e && e.call(s, s),
            s
        },
        when: function In(e) {
            var i, t, n, r = 0,
            o = v.call(arguments),
            a = o.length,
            s = 1 !== a || e && Pe.isFunction(e.promise) ? a: 0,
            l = 1 === s ? e: Pe.Deferred(),
            u = function u(t, n, r) {
                return function(e) {
                    n[t] = this,
                    r[t] = 1 < arguments.length ? v.call(arguments) : e,
                    r === i ? l.notifyWith(n, r) : --s || l.resolveWith(n, r)
                }
            };
            if (1 < a) for (i = new Array(a), t = new Array(a), n = new Array(a); r < a; r++) o[r] && Pe.isFunction(o[r].promise) ? o[r].promise().done(u(r, n, o)).fail(l.reject).progress(u(r, t, i)) : --s;
            return s || l.resolveWith(n, o),
            l.promise()
        }
    }),
    Pe.support = function() {
        var a, e, t, n, r, i, o, s, l, u, c, f = y.createElement("div");
        if (f.setAttribute("className", "t"), f.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = f.getElementsByTagName("*"), (t = f.getElementsByTagName("a")[0]).style.cssText = "top:1px;float:left;opacity:.5", !e || !e.length) return {};
        r = (n = y.createElement("select")).appendChild(y.createElement("option")),
        i = f.getElementsByTagName("input")[0],
        a = {
            leadingWhitespace: 3 === f.firstChild.nodeType,
            tbody: !f.getElementsByTagName("tbody").length,
            htmlSerialize: !!f.getElementsByTagName("link").length,
            style: /top/.test(t.getAttribute("style")),
            hrefNormalized: "/a" === t.getAttribute("href"),
            opacity: /^0.5/.test(t.style.opacity),
            cssFloat: !!t.style.cssFloat,
            checkOn: "on" === i.value,
            optSelected: r.selected,
            getSetAttribute: "t" !== f.className,
            enctype: !!y.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === y.compatMode,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        },
        i.checked = !0,
        a.noCloneChecked = i.cloneNode(!0).checked,
        n.disabled = !0,
        a.optDisabled = !r.disabled;
        try {
            delete f.test
        } catch(p) {
            a.deleteExpando = !1
        }
        if (!f.addEventListener && f.attachEvent && f.fireEvent && (f.attachEvent("onclick", c = function c() {
            a.noCloneEvent = !1
        }), f.cloneNode(!0).fireEvent("onclick"), f.detachEvent("onclick", c)), (i = y.createElement("input")).value = "t", i.setAttribute("type", "radio"), a.radioValue = "t" === i.value, i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), f.appendChild(i), (o = y.createDocumentFragment()).appendChild(f.lastChild), a.checkClone = o.cloneNode(!0).cloneNode(!0).lastChild.checked, a.appendChecked = i.checked, o.removeChild(i), o.appendChild(f), f.attachEvent) for (l in {
            submit: !0,
            change: !0,
            focusin: !0
        })(u = (s = "on" + l) in f) || (f.setAttribute(s, "return;"), u = "function" == typeof f[s]),
        a[l + "Bubbles"] = u;
        return Pe(function() {
            var e, t, n, r, i = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
            o = y.getElementsByTagName("body")[0];
            o && ((e = y.createElement("div")).style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", o.insertBefore(e, o.firstChild), t = y.createElement("div"), e.appendChild(t), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", (n = t.getElementsByTagName("td"))[0].style.cssText = "padding:0;margin:0;border:0;display:none", u = 0 === n[0].offsetHeight, n[0].style.display = "", n[1].style.display = "none", a.reliableHiddenOffsets = u && 0 === n[0].offsetHeight, t.innerHTML = "", t.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", a.boxSizing = 4 === t.offsetWidth, a.doesNotIncludeMarginInBodyOffset = 1 !== o.offsetTop, m.getComputedStyle && (a.pixelPosition = "1%" !== (m.getComputedStyle(t, null) || {}).top, a.boxSizingReliable = "4px" === (m.getComputedStyle(t, null) || {
                width: "4px"
            }).width, (r = y.createElement("div")).style.cssText = t.style.cssText = i, r.style.marginRight = r.style.width = "0", t.style.width = "1px", t.appendChild(r), a.reliableMarginRight = !parseFloat((m.getComputedStyle(r, null) || {}).marginRight)), "undefined" != typeof t.style.zoom && (t.innerHTML = "", t.style.cssText = i + "width:1px;padding:1px;display:inline;zoom:1", a.inlineBlockNeedsLayout = 3 === t.offsetWidth, t.style.display = "block", t.style.overflow = "visible", t.innerHTML = "<div></div>", t.firstChild.style.width = "5px", a.shrinkWrapBlocks = 3 !== t.offsetWidth, e.style.zoom = 1), o.removeChild(e), e = t = n = r = null)
        }),
        o.removeChild(f),
        e = t = n = r = i = o = f = null,
        a
    } ();
    var H = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
    _ = /([A-Z])/g;
    function F(e, t, n) {
        if (n === j && 1 === e.nodeType) {
            var r = "data-" + t.replace(_, "-$1").toLowerCase();
            if ("string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null: +n + "" === n ? +n: H.test(n) ? Pe.parseJSON(n) : n)
                } catch(i) {}
                Pe.data(e, t, n)
            } else n = j
        }
        return n
    }
    function M(e) {
        var t;
        for (t in e) if (("data" !== t || !Pe.isEmptyObject(e[t])) && "toJSON" !== t) return ! 1;
        return ! 0
    }
    Pe.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (Pe.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function zn(e) {
            return !! (e = e.nodeType ? Pe.cache[e[Pe.expando]] : e[Pe.expando]) && !M(e)
        },
        data: function Xn(e, t, n, r) {
            if (Pe.acceptData(e)) {
                var i, o, a = Pe.expando,
                s = "string" == typeof t,
                l = e.nodeType,
                u = l ? Pe.cache: e,
                c = l ? e[a] : e[a] && a;
                if (c && u[c] && (r || u[c].data) || !s || n !== j) return c || (l ? e[a] = c = Pe.deletedIds.pop() || Pe.guid++:c = a),
                u[c] || (u[c] = {},
                l || (u[c].toJSON = Pe.noop)),
                "object" !== _typeof(t) && "function" != typeof t || (r ? u[c] = Pe.extend(u[c], t) : u[c].data = Pe.extend(u[c].data, t)),
                i = u[c],
                r || (i.data || (i.data = {}), i = i.data),
                n !== j && (i[Pe.camelCase(t)] = n),
                s ? null == (o = i[t]) && (o = i[Pe.camelCase(t)]) : o = i,
                o
            }
        },
        removeData: function Un(e, t, n) {
            if (Pe.acceptData(e)) {
                var r, i, o, a = e.nodeType,
                s = a ? Pe.cache: e,
                l = a ? e[Pe.expando] : Pe.expando;
                if (s[l]) {
                    if (t && (r = n ? s[l] : s[l].data)) {
                        Pe.isArray(t) || (t = t in r ? [t] : (t = Pe.camelCase(t)) in r ? [t] : t.split(" "));
                        for (i = 0, o = t.length; i < o; i++) delete r[t[i]];
                        if (! (n ? M: Pe.isEmptyObject)(r)) return
                    } (n || (delete s[l].data, M(s[l]))) && (a ? Pe.cleanData([e], !0) : Pe.support.deleteExpando || s != s.window ? delete s[l] : s[l] = null)
                }
            }
        },
        _data: function Yn(e, t, n) {
            return Pe.data(e, t, n, !0)
        },
        acceptData: function Jn(e) {
            var t = e.nodeName && Pe.noData[e.nodeName.toLowerCase()];
            return ! t || !0 !== t && e.getAttribute("classid") === t
        }
    }),
    Pe.fn.extend({
        data: function Xn(n, e) {
            var r, i, t, o, a, s = this[0],
            l = 0,
            Xn = null;
            if (n !== j) return "object" === _typeof(n) ? this.each(function() {
                Pe.data(this, n)
            }) : ((r = n.split(".", 2))[1] = r[1] ? "." + r[1] : "", i = r[1] + "!", Pe.access(this,
            function(t) {
                if (t === j) return Xn = this.triggerHandler("getData" + i, [r[0]]),
                Xn === j && s && (Xn = Pe.data(s, n), Xn = F(s, n, Xn)),
                Xn === j && r[1] ? this.data(r[0]) : Xn;
                r[1] = t,
                this.each(function() {
                    var e = Pe(this);
                    e.triggerHandler("setData" + i, r),
                    Pe.data(this, n, t),
                    e.triggerHandler("changeData" + i, r)
                })
            },
            null, e, 1 < arguments.length, null, !1));
            if (this.length && (Xn = Pe.data(s), 1 === s.nodeType && !Pe._data(s, "parsedAttrs"))) {
                for (a = (t = s.attributes).length; l < a; l++)(o = t[l].name).indexOf("data-") || (o = Pe.camelCase(o.substring(5)), F(s, o, Xn[o]));
                Pe._data(s, "parsedAttrs", !0)
            }
            return Xn
        },
        removeData: function Un(e) {
            return this.each(function() {
                Pe.removeData(this, e)
            })
        }
    }),
    Pe.extend({
        queue: function Vn(e, t, n) {
            var Vn;
            if (e) return t = (t || "fx") + "queue",
            Vn = Pe._data(e, t),
            n && (!Vn || Pe.isArray(n) ? Vn = Pe._data(e, t, Pe.makeArray(n)) : Vn.push(n)),
            Vn || []
        },
        dequeue: function Kn(e, t) {
            t = t || "fx";
            var n = Pe.queue(e, t),
            r = n.length,
            i = n.shift(),
            o = Pe._queueHooks(e, t),
            a = function a() {
                Pe.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(), r--),
            i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function Gn(e, t) {
            var n = t + "queueHooks";
            return Pe._data(e, n) || Pe._data(e, n, {
                empty: Pe.Callbacks("once memory").add(function() {
                    Pe.removeData(e, t + "queue", !0),
                    Pe.removeData(e, n, !0)
                })
            })
        }
    }),
    Pe.fn.extend({
        queue: function Vn(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--),
            arguments.length < e ? Pe.queue(this[0], t) : n === j ? this: this.each(function() {
                var e = Pe.queue(this, t, n);
                Pe._queueHooks(this, t),
                "fx" === t && "inprogress" !== e[0] && Pe.dequeue(this, t)
            })
        },
        dequeue: function Kn(e) {
            return this.each(function() {
                Pe.dequeue(this, e)
            })
        },
        delay: function Qn(r, e) {
            return r = Pe.fx && Pe.fx.speeds[r] || r,
            e = e || "fx",
            this.queue(e,
            function(e, t) {
                var n = setTimeout(e, r);
                t.stop = function() {
                    clearTimeout(n)
                }
            })
        },
        clearQueue: function Zn(e) {
            return this.queue(e || "fx", [])
        },
        promise: function er(e, t) {
            var n, r = 1,
            i = Pe.Deferred(),
            o = this,
            a = this.length,
            s = function s() {--r || i.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e, e = j), e = e || "fx"; a--;)(n = Pe._data(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(),
            i.promise(t)
        }
    });
    var O, q, B, W = /[\t\r\n]/g,
    P = /\r/g,
    R = /^(?:button|input)$/i,
    I = /^(?:button|input|object|select|textarea)$/i,
    z = /^a(?:rea|)$/i,
    X = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
    U = Pe.support.getSetAttribute;
    Pe.fn.extend({
        attr: function tr(e, t) {
            return Pe.access(this, Pe.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function nr(e) {
            return this.each(function() {
                Pe.removeAttr(this, e)
            })
        },
        prop: function rr(e, t) {
            return Pe.access(this, Pe.prop, e, t, 1 < arguments.length)
        },
        removeProp: function ir(t) {
            return t = Pe.propFix[t] || t,
            this.each(function() {
                try {
                    this[t] = j,
                    delete this[t]
                } catch(e) {}
            })
        },
        addClass: function or(t) {
            var e, n, r, i, o, a, s;
            if (Pe.isFunction(t)) return this.each(function(e) {
                Pe(this).addClass(t.call(this, e, this.className))
            });
            if (t && "string" == typeof t) for (e = t.split(D), n = 0, r = this.length; n < r; n++) if (1 === (i = this[n]).nodeType) if (i.className || 1 !== e.length) {
                for (o = " " + i.className + " ", a = 0, s = e.length; a < s; a++) o.indexOf(" " + e[a] + " ") < 0 && (o += e[a] + " ");
                i.className = Pe.trim(o)
            } else i.className = t;
            return this
        },
        removeClass: function ar(t) {
            var e, n, r, i, o, a, s;
            if (Pe.isFunction(t)) return this.each(function(e) {
                Pe(this).removeClass(t.call(this, e, this.className))
            });
            if (t && "string" == typeof t || t === j) for (e = (t || "").split(D), a = 0, s = this.length; a < s; a++) if (1 === (r = this[a]).nodeType && r.className) {
                for (n = (" " + r.className + " ").replace(W, " "), i = 0, o = e.length; i < o; i++) for (; 0 <= n.indexOf(" " + e[i] + " ");) n = n.replace(" " + e[i] + " ", " ");
                r.className = t ? Pe.trim(n) : ""
            }
            return this
        },
        toggleClass: function sr(o, a) {
            var s = _typeof(o),
            l = "boolean" == typeof a;
            return Pe.isFunction(o) ? this.each(function(e) {
                Pe(this).toggleClass(o.call(this, e, this.className, a), a)
            }) : this.each(function() {
                if ("string" === s) for (var e, t = 0,
                n = Pe(this), r = a, i = o.split(D); e = i[t++];) r = l ? r: !n.hasClass(e),
                n[r ? "addClass": "removeClass"](e);
                else "undefined" !== s && "boolean" !== s || (this.className && Pe._data(this, "__className__", this.className), this.className = this.className || !1 === o ? "": Pe._data(this, "__className__") || "")
            })
        },
        hasClass: function lr(e) {
            for (var t = " " + e + " ",
            n = 0,
            r = this.length; n < r; n++) if (1 === this[n].nodeType && 0 <= (" " + this[n].className + " ").replace(W, " ").indexOf(t)) return ! 0;
            return ! 1
        },
        val: function ur(r) {
            var i, e, o, t = this[0];
            return arguments.length ? (o = Pe.isFunction(r), this.each(function(e) {
                var t, n = Pe(this);
                1 === this.nodeType && (null == (t = o ? r.call(this, e, n.val()) : r) ? t = "": "number" == typeof t ? t += "": Pe.isArray(t) && (t = Pe.map(t,
                function(e) {
                    return null == e ? "": e + ""
                })), (i = Pe.valHooks[this.type] || Pe.valHooks[this.nodeName.toLowerCase()]) && "set" in i && i.set(this, t, "value") !== j || (this.value = t))
            })) : t ? (i = Pe.valHooks[t.type] || Pe.valHooks[t.nodeName.toLowerCase()]) && "get" in i && (e = i.get(t, "value")) !== j ? e: "string" == typeof(e = t.value) ? e.replace(P, "") : null == e ? "": e: void 0
        }
    }),
    Pe.extend({
        valHooks: {
            option: {
                get: function ln(e) {
                    var t = e.attributes.value;
                    return ! t || t.specified ? e.value: e.text
                }
            },
            select: {
                get: function ln(e) {
                    var t, n, r, i, o = e.selectedIndex,
                    a = [],
                    s = e.options,
                    l = "select-one" === e.type;
                    if (o < 0) return null;
                    for (n = l ? o: 0, r = l ? o + 1 : s.length; n < r; n++) if ((i = s[n]).selected && (Pe.support.optDisabled ? !i.disabled: null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !Pe.nodeName(i.parentNode, "optgroup"))) {
                        if (t = Pe(i).val(), l) return t;
                        a.push(t)
                    }
                    return l && !a.length && s.length ? Pe(s[o]).val() : a
                },
                set: function cr(e, t) {
                    var n = Pe.makeArray(t);
                    return Pe(e).find("option").each(function() {
                        this.selected = 0 <= Pe.inArray(Pe(this).val(), n)
                    }),
                    n.length || (e.selectedIndex = -1),
                    n
                }
            }
        },
        attrFn: {},
        attr: function tr(e, t, n, r) {
            var i, o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return r && Pe.isFunction(Pe.fn[t]) ? Pe(e)[t](n) : "undefined" == typeof e.getAttribute ? Pe.prop(e, t, n) : ((a = 1 !== s || !Pe.isXMLDoc(e)) && (t = t.toLowerCase(), o = Pe.attrHooks[t] || (X.test(t) ? q: O)), n !== j ? null === n ? void Pe.removeAttr(e, t) : o && "set" in o && a && (i = o.set(e, n, t)) !== j ? i: (e.setAttribute(t, n + ""), n) : o && "get" in o && a && null !== (i = o.get(e, t)) ? i: null === (i = e.getAttribute(t)) ? j: i)
        },
        removeAttr: function nr(e, t) {
            var n, r, i, o, a = 0;
            if (t && 1 === e.nodeType) for (r = t.split(D); a < r.length; a++)(i = r[a]) && (n = Pe.propFix[i] || i, (o = X.test(i)) || Pe.attr(e, i, ""), e.removeAttribute(U ? i: n), o && n in e && (e[n] = !1))
        },
        attrHooks: {
            type: {
                set: function cr(e, t) {
                    if (R.test(e.nodeName) && e.parentNode) Pe.error("type property can't be changed");
                    else if (!Pe.support.radioValue && "radio" === t && Pe.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            },
            value: {
                get: function ln(e, t) {
                    return O && Pe.nodeName(e, "button") ? O.get(e, t) : t in e ? e.value: null
                },
                set: function cr(e, t, n) {
                    if (O && Pe.nodeName(e, "button")) return O.set(e, t, n);
                    e.value = t
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function rr(e, t, n) {
            var r, i, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return (1 !== o || !Pe.isXMLDoc(e)) && (t = Pe.propFix[t] || t, i = Pe.propHooks[t]),
            n !== j ? i && "set" in i && (r = i.set(e, n, t)) !== j ? r: e[t] = n: i && "get" in i && null !== (r = i.get(e, t)) ? r: e[t]
        },
        propHooks: {
            tabIndex: {
                get: function ln(e) {
                    var t = e.getAttributeNode("tabindex");
                    return t && t.specified ? parseInt(t.value, 10) : I.test(e.nodeName) || z.test(e.nodeName) && e.href ? 0 : j
                }
            }
        }
    }),
    q = {
        get: function ln(e, t) {
            var n, r = Pe.prop(e, t);
            return ! 0 === r || "boolean" != typeof r && (n = e.getAttributeNode(t)) && !1 !== n.nodeValue ? t.toLowerCase() : j
        },
        set: function cr(e, t, n) {
            var r;
            return ! 1 === t ? Pe.removeAttr(e, n) : ((r = Pe.propFix[n] || n) in e && (e[r] = !0), e.setAttribute(n, n.toLowerCase())),
            n
        }
    },
    U || (B = {
        name: !0,
        id: !0,
        coords: !0
    },
    O = Pe.valHooks.button = {
        get: function ln(e, t) {
            var n;
            return (n = e.getAttributeNode(t)) && (B[t] ? "" !== n.value: n.specified) ? n.value: j
        },
        set: function cr(e, t, n) {
            var r = e.getAttributeNode(n);
            return r || (r = y.createAttribute(n), e.setAttributeNode(r)),
            r.value = t + ""
        }
    },
    Pe.each(["width", "height"],
    function(e, n) {
        Pe.attrHooks[n] = Pe.extend(Pe.attrHooks[n], {
            set: function r(e, t) {
                if ("" === t) return e.setAttribute(n, "auto"),
                t
            }
        })
    }), Pe.attrHooks.contenteditable = {
        get: O.get,
        set: function cr(e, t, n) {
            "" === t && (t = "false"),
            O.set(e, t, n)
        }
    }),
    Pe.support.hrefNormalized || Pe.each(["href", "src", "width", "height"],
    function(e, n) {
        Pe.attrHooks[n] = Pe.extend(Pe.attrHooks[n], {
            get: function r(e) {
                var t = e.getAttribute(n, 2);
                return null === t ? j: t
            }
        })
    }),
    Pe.support.style || (Pe.attrHooks.style = {
        get: function ln(e) {
            return e.style.cssText.toLowerCase() || j
        },
        set: function cr(e, t) {
            return e.style.cssText = t + ""
        }
    }),
    Pe.support.optSelected || (Pe.propHooks.selected = Pe.extend(Pe.propHooks.selected, {
        get: function ln(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
            null
        }
    })),
    Pe.support.enctype || (Pe.propFix.enctype = "encoding"),
    Pe.support.checkOn || Pe.each(["radio", "checkbox"],
    function() {
        Pe.valHooks[this] = {
            get: function t(e) {
                return null === e.getAttribute("value") ? "on": e.value
            }
        }
    }),
    Pe.each(["radio", "checkbox"],
    function() {
        Pe.valHooks[this] = Pe.extend(Pe.valHooks[this], {
            set: function n(e, t) {
                if (Pe.isArray(t)) return e.checked = 0 <= Pe.inArray(Pe(e).val(), t)
            }
        })
    });
    var Y = /^(?:textarea|input|select)$/i,
    J = /^([^\.]*|)(?:\.(.+)|)$/,
    V = /(?:^|\s)hover(\.\S+|)\b/,
    K = /^key/,
    G = /^(?:mouse|contextmenu)|click/,
    Q = /^(?:focusinfocus|focusoutblur)$/,
    Z = function Z(e) {
        return Pe.event.special.hover ? e: e.replace(V, "mouseenter$1 mouseleave$1")
    };
    function ee() {
        return ! 1
    }
    function te() {
        return ! 0
    }
    Pe.event = {
        add: function fr(e, t, n, r, i) {
            var o, a, s, l, u, c, f, p, d, h, g;
            if (3 !== e.nodeType && 8 !== e.nodeType && t && n && (o = Pe._data(e))) {
                for (n.handler && (n = (d = n).handler, i = d.selector), n.guid || (n.guid = Pe.guid++), (s = o.events) || (o.events = s = {}), (a = o.handle) || (o.handle = a = function m(e) {
                    return void 0 === Pe || e && Pe.event.triggered === e.type ? j: Pe.event.dispatch.apply(a.elem, arguments)
                },
                a.elem = e), t = Pe.trim(Z(t)).split(" "), l = 0; l < t.length; l++) c = (u = J.exec(t[l]) || [])[1],
                f = (u[2] || "").split(".").sort(),
                g = Pe.event.special[c] || {},
                c = (i ? g.delegateType: g.bindType) || c,
                g = Pe.event.special[c] || {},
                p = Pe.extend({
                    type: c,
                    origType: u[1],
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && Pe.expr.match.needsContext.test(i),
                    namespace: f.join(".")
                },
                d),
                (h = s[c]) || ((h = s[c] = []).delegateCount = 0, g.setup && !1 !== g.setup.call(e, r, f, a) || (e.addEventListener ? e.addEventListener(c, a, !1) : e.attachEvent && e.attachEvent("on" + c, a))),
                g.add && (g.add.call(e, p), p.handler.guid || (p.handler.guid = n.guid)),
                i ? h.splice(h.delegateCount++, 0, p) : h.push(p),
                Pe.event.global[c] = !0;
                e = null
            }
        },
        global: {},
        remove: function pr(e, t, n, r, i) {
            var o, a, s, l, u, c, f, p, d, h, g, m = Pe.hasData(e) && Pe._data(e);
            if (m && (p = m.events)) {
                for (t = Pe.trim(Z(t || "")).split(" "), o = 0; o < t.length; o++) if (s = l = (a = J.exec(t[o]) || [])[1], u = a[2], s) {
                    for (d = Pe.event.special[s] || {},
                    c = (h = p[s = (r ? d.delegateType: d.bindType) || s] || []).length, u = u ? new RegExp("(^|\\.)" + u.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null, f = 0; f < h.length; f++) g = h[f],
                    !i && l !== g.origType || n && n.guid !== g.guid || u && !u.test(g.namespace) || r && r !== g.selector && ("**" !== r || !g.selector) || (h.splice(f--, 1), g.selector && h.delegateCount--, d.remove && d.remove.call(e, g));
                    0 === h.length && c !== h.length && (d.teardown && !1 !== d.teardown.call(e, u, m.handle) || Pe.removeEvent(e, s, m.handle), delete p[s])
                } else for (s in p) Pe.event.remove(e, s + t[o], n, r, !0);
                Pe.isEmptyObject(p) && (delete m.handle, Pe.removeData(e, "events", !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function dr(e, t, n, r) {
            if (!n || 3 !== n.nodeType && 8 !== n.nodeType) {
                var i, o, a, s, l, u, c, f, p, d, h = e.type || e,
                g = [];
                if (!Q.test(h + Pe.event.triggered) && (0 <= h.indexOf("!") && (h = h.slice(0, -1), o = !0), 0 <= h.indexOf(".") && (h = (g = h.split(".")).shift(), g.sort()), n && !Pe.event.customEvent[h] || Pe.event.global[h])) if ((e = "object" === _typeof(e) ? e[Pe.expando] ? e: new Pe.Event(h, e) : new Pe.Event(h)).type = h, e.isTrigger = !0, e.exclusive = o, e.namespace = g.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, u = h.indexOf(":") < 0 ? "on" + h: "", n) {
                    if (e.result = j, e.target || (e.target = n), (t = null != t ? Pe.makeArray(t) : []).unshift(e), !(c = Pe.event.special[h] || {}).trigger || !1 !== c.trigger.apply(n, t)) {
                        if (p = [[n, c.bindType || h]], !r && !c.noBubble && !Pe.isWindow(n)) {
                            for (d = c.delegateType || h, s = Q.test(d + h) ? n: n.parentNode, l = n; s; s = s.parentNode) p.push([s, d]),
                            l = s;
                            l === (n.ownerDocument || y) && p.push([l.defaultView || l.parentWindow || m, d])
                        }
                        for (a = 0; a < p.length && !e.isPropagationStopped(); a++) s = p[a][0],
                        e.type = p[a][1],
                        (f = (Pe._data(s, "events") || {})[e.type] && Pe._data(s, "handle")) && f.apply(s, t),
                        (f = u && s[u]) && Pe.acceptData(s) && f.apply && !1 === f.apply(s, t) && e.preventDefault();
                        return e.type = h,
                        r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(n.ownerDocument, t) || "click" === h && Pe.nodeName(n, "a") || !Pe.acceptData(n) || u && n[h] && ("focus" !== h && "blur" !== h || 0 !== e.target.offsetWidth) && !Pe.isWindow(n) && ((l = n[u]) && (n[u] = null), n[Pe.event.triggered = h](), Pe.event.triggered = j, l && (n[u] = l)),
                        e.result
                    }
                } else for (a in i = Pe.cache) i[a].events && i[a].events[h] && Pe.event.trigger(e, t, i[a].handle.elem, !0)
            }
        },
        dispatch: function hr(e) {
            e = Pe.event.fix(e || m.event);
            var t, n, r, i, o, a, s, l, u, c = (Pe._data(this, "events") || {})[e.type] || [],
            f = c.delegateCount,
            p = v.call(arguments),
            d = !e.exclusive && !e.namespace,
            h = Pe.event.special[e.type] || {},
            g = [];
            if ((p[0] = e).delegateTarget = this, !h.preDispatch || !1 !== h.preDispatch.call(this, e)) {
                if (f && (!e.button || "click" !== e.type)) for (r = e.target; r != this; r = r.parentNode || this) if (!0 !== r.disabled || "click" !== e.type) {
                    for (o = {},
                    s = [], t = 0; t < f; t++) o[u = (l = c[t]).selector] === j && (o[u] = l.needsContext ? 0 <= Pe(u, this).index(r) : Pe.find(u, this, null, [r]).length),
                    o[u] && s.push(l);
                    s.length && g.push({
                        elem: r,
                        matches: s
                    })
                }
                for (c.length > f && g.push({
                    elem: this,
                    matches: c.slice(f)
                }), t = 0; t < g.length && !e.isPropagationStopped(); t++) for (a = g[t], e.currentTarget = a.elem, n = 0; n < a.matches.length && !e.isImmediatePropagationStopped(); n++) l = a.matches[n],
                (d || !e.namespace && !l.namespace || e.namespace_re && e.namespace_re.test(l.namespace)) && (e.data = l.data, e.handleObj = l, (i = ((Pe.event.special[l.origType] || {}).handle || l.handler).apply(a.elem, p)) !== j && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
                return h.postDispatch && h.postDispatch.call(this, e),
                e.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function gr(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode: t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function gr(e, t) {
                var n, r, i, o = t.button,
                a = t.fromElement;
                return null == e.pageX && null != t.clientX && (r = (n = e.target.ownerDocument || y).documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)),
                !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement: a),
                e.which || o === j || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                e
            }
        },
        fix: function mr(e) {
            if (e[Pe.expando]) return e;
            var t, n, r = e,
            i = Pe.event.fixHooks[e.type] || {},
            o = i.props ? this.props.concat(i.props) : this.props;
            for (e = Pe.Event(r), t = o.length; t;) e[n = o[--t]] = r[n];
            return e.target || (e.target = r.srcElement || y),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            e.metaKey = !!e.metaKey,
            i.filter ? i.filter(e, r) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function yr(e, t, n) {
                    if (Pe.isWindow(this)) {
                        var r = this.onbeforeunload;
                        this.onbeforeunload = function() {
                            "function" == typeof r && r.apply(this, arguments),
                            n.apply(this, arguments)
                        }
                    }
                },
                teardown: function vr(e, t) {
                    this.onbeforeunload === t && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function br(e, t, n, r) {
            var i = Pe.extend(new Pe.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? Pe.event.trigger(i, null, t) : Pe.event.dispatch.call(t, i),
            i.isDefaultPrevented() && n.preventDefault()
        }
    },
    Pe.event.handle = Pe.event.dispatch,
    Pe.removeEvent = y.removeEventListener ?
    function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }: function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && ("undefined" == typeof e[r] && (e[r] = null), e.detachEvent(r, n))
    },
    Pe.Event = function(e, t) {
        if (! (this instanceof Pe.Event)) return new Pe.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || !1 === e.returnValue || e.getPreventDefault && e.getPreventDefault() ? te: ee) : this.type = e,
        t && Pe.extend(this, t),
        this.timeStamp = e && e.timeStamp || Pe.now(),
        this[Pe.expando] = !0
    },
    Pe.Event.prototype = {
        preventDefault: function xr() {
            this.isDefaultPrevented = te;
            var e = this.originalEvent;
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function wr() {
            this.isPropagationStopped = te;
            var e = this.originalEvent;
            e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function Tr() {
            this.isImmediatePropagationStopped = te,
            this.stopPropagation()
        },
        isDefaultPrevented: ee,
        isPropagationStopped: ee,
        isImmediatePropagationStopped: ee
    },
    Pe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    },
    function(e, o) {
        Pe.event.special[e] = {
            delegateType: o,
            bindType: o,
            handle: function a(e) {
                var t, n = this,
                r = e.relatedTarget,
                i = e.handleObj;
                i.selector;
                return r && (r === n || Pe.contains(n, r)) || (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = o),
                t
            }
        }
    }),
    Pe.support.submitBubbles || (Pe.event.special.submit = {
        setup: function yr() {
            if (Pe.nodeName(this, "form")) return ! 1;
            Pe.event.add(this, "click._submit keypress._submit",
            function(e) {
                var t = e.target,
                n = Pe.nodeName(t, "input") || Pe.nodeName(t, "button") ? t.form: j;
                n && !Pe._data(n, "_submit_attached") && (Pe.event.add(n, "submit._submit",
                function(e) {
                    e._submit_bubble = !0
                }), Pe._data(n, "_submit_attached", !0))
            })
        },
        postDispatch: function Nr(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && Pe.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function vr() {
            if (Pe.nodeName(this, "form")) return ! 1;
            Pe.event.remove(this, "._submit")
        }
    }),
    Pe.support.changeBubbles || (Pe.event.special.change = {
        setup: function yr() {
            if (Y.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (Pe.event.add(this, "propertychange._change",
            function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), Pe.event.add(this, "click._change",
            function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1),
                Pe.event.simulate("change", this, e, !0)
            })),
            !1;
            Pe.event.add(this, "beforeactivate._change",
            function(e) {
                var t = e.target;
                Y.test(t.nodeName) && !Pe._data(t, "_change_attached") && (Pe.event.add(t, "change._change",
                function(e) { ! this.parentNode || e.isSimulated || e.isTrigger || Pe.event.simulate("change", this.parentNode, e, !0)
                }), Pe._data(t, "_change_attached", !0))
            })
        },
        handle: function Cr(e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments)
        },
        teardown: function vr() {
            return Pe.event.remove(this, "._change"),
            !Y.test(this.nodeName)
        }
    }),
    Pe.support.focusinBubbles || Pe.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(e, t) {
        var n = 0,
        r = function r(e) {
            Pe.event.simulate(t, e.target, Pe.event.fix(e), !0)
        };
        Pe.event.special[t] = {
            setup: function i() {
                0 == n++&&y.addEventListener(e, r, !0)
            },
            teardown: function o() {
                0 == --n && y.removeEventListener(e, r, !0)
            }
        }
    }),
    Pe.fn.extend({
        on: function Er(e, t, n, r, i) {
            var o, a;
            if ("object" === _typeof(e)) {
                for (a in "string" != typeof t && (n = n || t, t = j), e) this.on(a, t, n, e[a], i);
                return this
            }
            if (null == n && null == r ? (r = t, n = t = j) : null == r && ("string" == typeof t ? (r = n, n = j) : (r = n, n = t, t = j)), !1 === r) r = ee;
            else if (!r) return this;
            return 1 === i && (o = r, (r = function s(e) {
                return Pe().off(e),
                o.apply(this, arguments)
            }).guid = o.guid || (o.guid = Pe.guid++)),
            this.each(function() {
                Pe.event.add(this, e, r, n, t)
            })
        },
        one: function kr(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function Sr(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj,
            Pe(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace: r.origType, r.selector, r.handler),
            this;
            if ("object" !== _typeof(e)) return ! 1 !== t && "function" != typeof t || (n = t, t = j),
            !1 === n && (n = ee),
            this.each(function() {
                Pe.event.remove(this, e, n, t)
            });
            for (i in e) this.off(i, t, e[i]);
            return this
        },
        bind: function Ar(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function jr(e, t) {
            return this.off(e, null, t)
        },
        live: function Dr(e, t, n) {
            return Pe(this.context).on(e, this.selector, t, n),
            this
        },
        die: function Lr(e, t) {
            return Pe(this.context).off(e, this.selector || "**", t),
            this
        },
        delegate: function Hr(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function _r(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        trigger: function dr(e, t) {
            return this.each(function() {
                Pe.event.trigger(e, t, this)
            })
        },
        triggerHandler: function Fr(e, t) {
            if (this[0]) return Pe.event.trigger(e, t, this[0], !0)
        },
        toggle: function Mr(n) {
            var r = arguments,
            e = n.guid || Pe.guid++,
            i = 0,
            o = function o(e) {
                var t = (Pe._data(this, "lastToggle" + n.guid) || 0) % i;
                return Pe._data(this, "lastToggle" + n.guid, t + 1),
                e.preventDefault(),
                r[t].apply(this, arguments) || !1
            };
            for (o.guid = e; i < r.length;) r[i++].guid = e;
            return this.click(o)
        },
        hover: function Or(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    Pe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
    function(e, n) {
        Pe.fn[n] = function(e, t) {
            return null == t && (t = e, e = null),
            0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        },
        K.test(n) && (Pe.event.fixHooks[n] = Pe.event.keyHooks),
        G.test(n) && (Pe.event.fixHooks[n] = Pe.event.mouseHooks)
    }),
    function(e, i) {
        var w, n, T, o, u, c, f, r, p, N, a, d, h, s, g, l, m, y = !0,
        v = "undefined",
        b = ("sizcache" + Math.random()).replace(".", ""),
        x = String,
        C = e.document,
        E = C.documentElement,
        k = 0,
        S = 0,
        A = [].pop,
        j = [].push,
        D = [].slice,
        L = [].indexOf ||
        function(e) {
            for (var t = 0,
            n = this.length; t < n; t++) if (this[t] === e) return t;
            return - 1
        },
        H = function H(e, t) {
            return e[b] = null == t || t,
            e
        },
        t = function t() {
            var n = {},
            r = [];
            return H(function(e, t) {
                return r.push(e) > T.cacheLength && delete n[r.shift()],
                n[e] = t
            },
            n)
        },
        _ = t(),
        F = t(),
        M = t(),
        O = "[\\x20\\t\\r\\n\\f]",
        q = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
        B = q.replace("w", "w#"),
        W = "\\[" + O + "*(" + q + ")" + O + "*(?:" + "([*^$|!~]?=)" + O + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + B + ")|)|)" + O + "*\\]",
        P = ":(" + q + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + W + ")|[^:]|\\\\.)*|.*))\\)|)",
        R = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + O + "*((?:-\\d)?\\d*)" + O + "*\\)|)(?=[^-]|$)",
        $ = new RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$", "g"),
        I = new RegExp("^" + O + "*," + O + "*"),
        z = new RegExp("^" + O + "*([\\x20\\t\\r\\n\\f>+~])" + O + "*"),
        X = new RegExp(P),
        U = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
        Y = /[\x20\t\r\n\f]*[+~]/,
        J = /h\d/i,
        V = /input|select|textarea|button/i,
        K = /\\(?!\\)/g,
        G = {
            ID: new RegExp("^#(" + q + ")"),
            CLASS: new RegExp("^\\.(" + q + ")"),
            NAME: new RegExp("^\\[name=['\"]?(" + q + ")['\"]?\\]"),
            TAG: new RegExp("^(" + q.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + W),
            PSEUDO: new RegExp("^" + P),
            POS: new RegExp(R, "i"),
            CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + O + "*(even|odd|(([+-]|)(\\d*)n|)" + O + "*(?:([+-]|)" + O + "*(\\d+)|))" + O + "*\\)|)", "i"),
            needsContext: new RegExp("^" + O + "*[>+~]|" + R, "i")
        },
        Q = function Q(e) {
            var t = C.createElement("div");
            try {
                return e(t)
            } catch(n) {
                return ! 1
            } finally {
                t = null
            }
        },
        Z = Q(function(e) {
            return e.appendChild(C.createComment("")),
            !e.getElementsByTagName("*").length
        }),
        ee = Q(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            e.firstChild && _typeof(e.firstChild.getAttribute) !== v && "#" === e.firstChild.getAttribute("href")
        }),
        te = Q(function(e) {
            e.innerHTML = "<select></select>";
            var t = _typeof(e.lastChild.getAttribute("multiple"));
            return "boolean" !== t && "string" !== t
        }),
        ne = Q(function(e) {
            return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>",
            !(!e.getElementsByClassName || !e.getElementsByClassName("e").length) && (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length)
        }),
        re = Q(function(e) {
            e.id = b + 0,
            e.innerHTML = "<a name='" + b + "'></a><div name='" + b + "'></div>",
            E.insertBefore(e, E.firstChild);
            var t = C.getElementsByName && C.getElementsByName(b).length === 2 + C.getElementsByName(b + 0).length;
            return n = !C.getElementById(b),
            E.removeChild(e),
            t
        });
        try {
            D.call(E.childNodes, 0)[0].nodeType
        } catch(be) {
            D = function D(e) {
                for (var t, n = []; t = this[e]; e++) n.push(t);
                return n
            }
        }
        function ie(e, t, n, r) {
            n = n || [];
            var i, o, a, s, l = (t = t || C).nodeType;
            if (!e || "string" != typeof e) return n;
            if (1 !== l && 9 !== l) return [];
            if (! (a = u(t)) && !r && (i = U.exec(e))) if (s = i[1]) {
                if (9 === l) {
                    if (! (o = t.getElementById(s)) || !o.parentNode) return n;
                    if (o.id === s) return n.push(o),
                    n
                } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && c(t, o) && o.id === s) return n.push(o),
                n
            } else {
                if (i[2]) return j.apply(n, D.call(t.getElementsByTagName(e), 0)),
                n;
                if ((s = i[3]) && ne && t.getElementsByClassName) return j.apply(n, D.call(t.getElementsByClassName(s), 0)),
                n
            }
            return ye(e.replace($, "$1"), t, n, r, a)
        }
        function oe(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }
        function ae(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }
        function se(a) {
            return H(function(o) {
                return o = +o,
                H(function(e, t) {
                    for (var n, r = a([], e.length, o), i = r.length; i--;) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }
        function le(e, t, n) {
            if (e === t) return n;
            for (var r = e.nextSibling; r;) {
                if (r === t) return - 1;
                r = r.nextSibling
            }
            return 1
        }
        function ue(e, t) {
            var n, r, i, o, a, s, l, u = F[b][e];
            if (u) return t ? 0 : u.slice(0);
            for (a = e, s = [], l = T.preFilter; a;) {
                for (o in n && !(r = I.exec(a)) || (r && (a = a.slice(r[0].length)), s.push(i = [])), n = !1, (r = z.exec(a)) && (i.push(n = new x(r.shift())), a = a.slice(n.length), n.type = r[0].replace($, " ")), T.filter) ! (r = G[o].exec(a)) || l[o] && !(r = l[o](r, C, !0)) || (i.push(n = new x(r.shift())), a = a.slice(n.length), n.type = o, n.matches = r);
                if (!n) break
            }
            return t ? a.length: a ? ie.error(e) : F(e, s).slice(0)
        }
        function ce(a, e, t) {
            var s = e.dir,
            l = t && "parentNode" === e.dir,
            u = S++;
            return e.first ?
            function(e, t, n) {
                for (; e = e[s];) if (l || 1 === e.nodeType) return a(e, t, n)
            }: function(e, t, n) {
                if (n) {
                    for (; e = e[s];) if ((l || 1 === e.nodeType) && a(e, t, n)) return e
                } else for (var r, i = k + " " + u + " ",
                o = i + w; e = e[s];) if (l || 1 === e.nodeType) {
                    if ((r = e[b]) === o) return e.sizset;
                    if ("string" == typeof r && 0 === r.indexOf(i)) {
                        if (e.sizset) return e
                    } else {
                        if (e[b] = o, a(e, t, n)) return e.sizset = !0,
                        e;
                        e.sizset = !1
                    }
                }
            }
        }
        function fe(i) {
            return 1 < i.length ?
            function(e, t, n) {
                for (var r = i.length; r--;) if (!i[r](e, t, n)) return ! 1;
                return ! 0
            }: i[0]
        }
        function pe(e, t, n, r, i) {
            for (var o, a = [], s = 0, l = e.length, u = null != t; s < l; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), u && t.push(s)));
            return a
        }
        function de(d, h, g, m, y, e) {
            return m && !m[b] && (m = de(m)),
            y && !y[b] && (y = de(y, e)),
            H(function(e, t, n, r) {
                if (!e || !y) {
                    var i, o, a, s = [],
                    l = [],
                    u = t.length,
                    c = e || me(h || "*", n.nodeType ? [n] : n, [], e),
                    f = !d || !e && h ? c: pe(c, s, d, n, r),
                    p = g ? y || (e ? d: u || m) ? [] : t: f;
                    if (g && g(f, p, n, r), m) for (a = pe(p, l), m(a, [], n, r), i = a.length; i--;)(o = a[i]) && (p[l[i]] = !(f[l[i]] = o));
                    if (e) for (i = d && p.length; i--;)(o = p[i]) && (e[s[i]] = !(t[s[i]] = o));
                    else p = pe(p === t ? p.splice(u, p.length) : p),
                    y ? y(null, t, p, r) : j.apply(t, p)
                }
            })
        }
        function he(e) {
            for (var r, t, n, i = e.length,
            o = T.relative[e[0].type], a = o || T.relative[" "], s = o ? 1 : 0, l = ce(function(e) {
                return e === r
            },
            a, !0), u = ce(function(e) {
                return - 1 < L.call(r, e)
            },
            a, !0), c = [function(e, t, n) {
                return ! o && (n || t !== N) || ((r = t).nodeType ? l(e, t, n) : u(e, t, n))
            }]; s < i; s++) if (t = T.relative[e[s].type]) c = [ce(fe(c), t)];
            else {
                if ((t = T.filter[e[s].type].apply(null, e[s].matches))[b]) {
                    for (n = ++s; n < i && !T.relative[e[n].type]; n++);
                    return de(1 < s && fe(c), 1 < s && e.slice(0, s - 1).join("").replace($, "$1"), t, s < n && he(e.slice(s, n)), n < i && he(e = e.slice(n)), n < i && e.join(""))
                }
                c.push(t)
            }
            return fe(c)
        }
        function ge(m, y) {
            var v = 0 < y.length,
            b = 0 < m.length,
            x = function x(e, t, n, r, i) {
                var o, a, s, l = [],
                u = 0,
                c = "0",
                f = e && [],
                p = null != i,
                d = N,
                h = e || b && T.find.TAG("*", i && t.parentNode || t),
                g = k += null == d ? 1 : Math.E;
                for (p && (N = t !== C && t, w = x.el); null != (o = h[c]); c++) {
                    if (b && o) {
                        for (a = 0; s = m[a]; a++) if (s(o, t, n)) {
                            r.push(o);
                            break
                        }
                        p && (k = g, w = ++x.el)
                    }
                    v && ((o = !s && o) && u--, e && f.push(o))
                }
                if (u += c, v && c !== u) {
                    for (a = 0; s = y[a]; a++) s(f, l, t, n);
                    if (e) {
                        if (0 < u) for (; c--;) f[c] || l[c] || (l[c] = A.call(r));
                        l = pe(l)
                    }
                    j.apply(r, l),
                    p && !e && 0 < l.length && 1 < u + y.length && ie.uniqueSort(r)
                }
                return p && (k = g, N = d),
                f
            };
            return x.el = 0,
            v ? H(x) : x
        }
        function me(e, t, n, r) {
            for (var i = 0,
            o = t.length; i < o; i++) ie(e, t[i], n, r);
            return n
        }
        function ye(e, t, n, r, i) {
            var o, a, s, l, u, c = ue(e);
            c.length;
            if (!r && 1 === c.length) {
                if (2 < (a = c[0] = c[0].slice(0)).length && "ID" === (s = a[0]).type && 9 === t.nodeType && !i && T.relative[a[1].type]) {
                    if (! (t = T.find.ID(s.matches[0].replace(K, ""), t, i)[0])) return n;
                    e = e.slice(a.shift().length)
                }
                for (o = G.POS.test(e) ? -1 : a.length - 1; 0 <= o && (s = a[o], !T.relative[l = s.type]); o--) if ((u = T.find[l]) && (r = u(s.matches[0].replace(K, ""), Y.test(a[0].type) && t.parentNode || t, i))) {
                    if (a.splice(o, 1), !(e = r.length && a.join(""))) return j.apply(n, D.call(r, 0)),
                    n;
                    break
                }
            }
            return f(e, c)(r, t, i, n, Y.test(e)),
            n
        }
        function ve() {}
        ie.matches = function(e, t) {
            return ie(e, null, null, t)
        },
        ie.matchesSelector = function(e, t) {
            return 0 < ie(t, null, null, [e]).length
        },
        o = ie.getText = function(e) {
            var t, n = "",
            r = 0,
            i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else for (; t = e[r]; r++) n += o(t);
            return n
        },
        u = ie.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !! t && "HTML" !== t.nodeName
        },
        c = ie.contains = E.contains ?
        function(e, t) {
            var n = 9 === e.nodeType ? e.documentElement: e,
            r = t && t.parentNode;
            return e === r || !!(r && 1 === r.nodeType && n.contains && n.contains(r))
        }: E.compareDocumentPosition ?
        function(e, t) {
            return t && !!(16 & e.compareDocumentPosition(t))
        }: function(e, t) {
            for (; t = t.parentNode;) if (t === e) return ! 0;
            return ! 1
        },
        ie.attr = function(e, t) {
            var n, r = u(e);
            return r || (t = t.toLowerCase()),
            (n = T.attrHandle[t]) ? n(e) : r || te ? e.getAttribute(t) : (n = e.getAttributeNode(t)) ? "boolean" == typeof e[t] ? e[t] ? t: null: n.specified ? n.value: null: null
        },
        T = ie.selectors = {
            cacheLength: 50,
            createPseudo: H,
            match: G,
            attrHandle: ee ? {}: {
                href: function xe(e) {
                    return e.getAttribute("href", 2)
                },
                type: function we(e) {
                    return e.getAttribute("type")
                }
            },
            find: {
                ID: n ?
                function(e, t, n) {
                    if (_typeof(t.getElementById) !== v && !n) {
                        var r = t.getElementById(e);
                        return r && r.parentNode ? [r] : []
                    }
                }: function(e, t, n) {
                    if (_typeof(t.getElementById) !== v && !n) {
                        var r = t.getElementById(e);
                        return r ? r.id === e || _typeof(r.getAttributeNode) !== v && r.getAttributeNode("id").value === e ? [r] : i: []
                    }
                },
                TAG: Z ?
                function(e, t) {
                    if (_typeof(t.getElementsByTagName) !== v) return t.getElementsByTagName(e)
                }: function(e, t) {
                    var n = t.getElementsByTagName(e);
                    if ("*" !== e) return n;
                    for (var r, i = [], o = 0; r = n[o]; o++) 1 === r.nodeType && i.push(r);
                    return i
                },
                NAME: re &&
                function(e, t) {
                    if (_typeof(t.getElementsByName) !== v) return t.getElementsByName(name)
                },
                CLASS: ne &&
                function(e, t, n) {
                    if (_typeof(t.getElementsByClassName) !== v && !n) return t.getElementsByClassName(e)
                }
            },
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function Te(e) {
                    return e[1] = e[1].replace(K, ""),
                    e[3] = (e[4] || e[5] || "").replace(K, ""),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function Ne(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1] ? (e[2] || ie.error(e[0]), e[3] = +(e[3] ? e[4] + (e[5] || 1) : 2 * ("even" === e[2] || "odd" === e[2])), e[4] = +(e[6] + e[7] || "odd" === e[2])) : e[2] && ie.error(e[0]),
                    e
                },
                PSEUDO: function Ce(e) {
                    var t, n;
                    return G.CHILD.test(e[0]) ? null: (e[3] ? e[2] = e[3] : (t = e[4]) && (X.test(t) && (n = ue(t, !0)) && (n = t.indexOf(")", t.length - n) - t.length) && (t = t.slice(0, n), e[0] = e[0].slice(0, n)), e[2] = t), e.slice(0, 3))
                }
            },
            filter: {
                ID: n ?
                function(t) {
                    return t = t.replace(K, ""),
                    function(e) {
                        return e.getAttribute("id") === t
                    }
                }: function(n) {
                    return n = n.replace(K, ""),
                    function(e) {
                        var t = _typeof(e.getAttributeNode) !== v && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                },
                TAG: function Ee(t) {
                    return "*" === t ?
                    function() {
                        return ! 0
                    }: (t = t.replace(K, "").toLowerCase(),
                    function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    })
                },
                CLASS: function ke(e) {
                    var t = _[b][e];
                    return t = t || _(e, new RegExp("(^|" + O + ")" + e + "(" + O + "|$)")),
                    function(e) {
                        return t.test(e.className || _typeof(e.getAttribute) !== v && e.getAttribute("class") || "")
                    }
                },
                ATTR: function Te(r, i, o) {
                    return function(e, t) {
                        var n = ie.attr(e, r);
                        return null == n ? "!=" === i: !i || (n += "", "=" === i ? n === o: "!=" === i ? n !== o: "^=" === i ? o && 0 === n.indexOf(o) : "*=" === i ? o && -1 < n.indexOf(o) : "$=" === i ? o && n.substr(n.length - o.length) === o: "~=" === i ? -1 < (" " + n + " ").indexOf(o) : "|=" === i && (n === o || n.substr(0, o.length + 1) === o + "-"))
                    }
                },
                CHILD: function Ne(n, e, i, o) {
                    return "nth" === n ?
                    function(e) {
                        var t, n, r = e.parentNode;
                        if (1 === i && 0 === o) return ! 0;
                        if (r) for (n = 0, t = r.firstChild; t && (1 !== t.nodeType || (n++, e !== t)); t = t.nextSibling);
                        return (n -= o) === i || n % i == 0 && 0 <= n / i
                    }: function(e) {
                        var t = e;
                        switch (n) {
                        case "only":
                        case "first":
                            for (; t = t.previousSibling;) if (1 === t.nodeType) return ! 1;
                            if ("first" === n) return ! 0;
                            t = e;
                        case "last":
                            for (; t = t.nextSibling;) if (1 === t.nodeType) return ! 1;
                            return ! 0
                        }
                    }
                },
                PSEUDO: function Ce(e, o) {
                    var t, a = T.pseudos[e] || T.setFilters[e.toLowerCase()] || ie.error("unsupported pseudo: " + e);
                    return a[b] ? a(o) : 1 < a.length ? (t = [e, e, "", o], T.setFilters.hasOwnProperty(e.toLowerCase()) ? H(function(e, t) {
                        for (var n, r = a(e, o), i = r.length; i--;) e[n = L.call(e, r[i])] = !(t[n] = r[i])
                    }) : function(e) {
                        return a(e, 0, t)
                    }) : a
                }
            },
            pseudos: {
                not: H(function(e) {
                    var r = [],
                    i = [],
                    s = f(e.replace($, "$1"));
                    return s[b] ? H(function(e, t, n, r) {
                        for (var i, o = s(e, null, r, []), a = e.length; a--;)(i = o[a]) && (e[a] = !(t[a] = i))
                    }) : function(e, t, n) {
                        return r[0] = e,
                        s(r, null, n, i),
                        !i.pop()
                    }
                }),
                has: H(function(t) {
                    return function(e) {
                        return 0 < ie(t, e).length
                    }
                }),
                contains: H(function(t) {
                    return function(e) {
                        return - 1 < (e.textContent || e.innerText || o(e)).indexOf(t)
                    }
                }),
                enabled: function Se(e) {
                    return ! 1 === e.disabled
                },
                disabled: function Ae(e) {
                    return ! 0 === e.disabled
                },
                checked: function je(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function De(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                parent: function Le(e) {
                    return ! T.pseudos.empty(e)
                },
                empty: function He(e) {
                    var t;
                    for (e = e.firstChild; e;) {
                        if ("@" < e.nodeName || 3 === (t = e.nodeType) || 4 === t) return ! 1;
                        e = e.nextSibling
                    }
                    return ! 0
                },
                header: function _e(e) {
                    return J.test(e.nodeName)
                },
                text: function Fe(e) {
                    var t, n;
                    return "input" === e.nodeName.toLowerCase() && "text" === (t = e.type) && (null == (n = e.getAttribute("type")) || n.toLowerCase() === t)
                },
                radio: oe("radio"),
                checkbox: oe("checkbox"),
                file: oe("file"),
                password: oe("password"),
                image: oe("image"),
                submit: ae("submit"),
                reset: ae("reset"),
                button: function Me(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                input: function Oe(e) {
                    return V.test(e.nodeName)
                },
                focus: function qe(e) {
                    var t = e.ownerDocument;
                    return e === t.activeElement && (!t.hasFocus || t.hasFocus()) && !(!e.type && !e.href)
                },
                active: function Be(e) {
                    return e === e.ownerDocument.activeElement
                },
                first: se(function(e, t, n) {
                    return [0]
                }),
                last: se(function(e, t, n) {
                    return [t - 1]
                }),
                eq: se(function(e, t, n) {
                    return [n < 0 ? n + t: n]
                }),
                even: se(function(e, t, n) {
                    for (var r = 0; r < t; r += 2) e.push(r);
                    return e
                }),
                odd: se(function(e, t, n) {
                    for (var r = 1; r < t; r += 2) e.push(r);
                    return e
                }),
                lt: se(function(e, t, n) {
                    for (var r = n < 0 ? n + t: n; 0 <= --r;) e.push(r);
                    return e
                }),
                gt: se(function(e, t, n) {
                    for (var r = n < 0 ? n + t: n; ++r < t;) e.push(r);
                    return e
                })
            }
        },
        r = E.compareDocumentPosition ?
        function(e, t) {
            return e === t ? (p = !0, 0) : (e.compareDocumentPosition && t.compareDocumentPosition ? 4 & e.compareDocumentPosition(t) : e.compareDocumentPosition) ? -1 : 1
        }: function(e, t) {
            if (e === t) return p = !0,
            0;
            if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
            var n, r, i = [],
            o = [],
            a = e.parentNode,
            s = t.parentNode,
            l = a;
            if (a === s) return le(e, t);
            if (!a) return - 1;
            if (!s) return 1;
            for (; l;) i.unshift(l),
            l = l.parentNode;
            for (l = s; l;) o.unshift(l),
            l = l.parentNode;
            n = i.length,
            r = o.length;
            for (var u = 0; u < n && u < r; u++) if (i[u] !== o[u]) return le(i[u], o[u]);
            return u === n ? le(e, o[u], -1) : le(i[u], t, 1)
        },
        [0, 0].sort(r),
        y = !p,
        ie.uniqueSort = function(e) {
            var t, n = 1;
            if (p = y, e.sort(r), p) for (; t = e[n]; n++) t === e[n - 1] && e.splice(n--, 1);
            return e
        },
        ie.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        },
        f = ie.compile = function(e, t) {
            var n, r = [],
            i = [],
            o = M[b][e];
            if (!o) {
                for (n = (t = t || ue(e)).length; n--;)(o = he(t[n]))[b] ? r.push(o) : i.push(o);
                o = M(e, ge(i, r))
            }
            return o
        },
        C.querySelectorAll && (d = ye, h = /'|\\/g, s = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, g = [":focus"], l = [":active", ":focus"], m = E.matchesSelector || E.mozMatchesSelector || E.webkitMatchesSelector || E.oMatchesSelector || E.msMatchesSelector, Q(function(e) {
            e.innerHTML = "<select><option selected=''></option></select>",
            e.querySelectorAll("[selected]").length || g.push("\\[" + O + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),
            e.querySelectorAll(":checked").length || g.push(":checked")
        }), Q(function(e) {
            e.innerHTML = "<p test=''></p>",
            e.querySelectorAll("[test^='']").length && g.push("[*^$]=" + O + "*(?:\"\"|'')"),
            e.innerHTML = "<input type='hidden'/>",
            e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled")
        }), g = new RegExp(g.join("|")), ye = function We(e, t, n, r, i) {
            if (! (r || i || g && g.test(e))) {
                var o, a, s = !0,
                l = b,
                u = t,
                c = 9 === t.nodeType && e;
                if (1 === t.nodeType && "object" !== t.nodeName.toLowerCase()) {
                    for (o = ue(e), (s = t.getAttribute("id")) ? l = s.replace(h, "\\$&") : t.setAttribute("id", l), l = "[id='" + l + "'] ", a = o.length; a--;) o[a] = l + o[a].join("");
                    u = Y.test(e) && t.parentNode || t,
                    c = o.join(",")
                }
                if (c) try {
                    return j.apply(n, D.call(u.querySelectorAll(c), 0)),
                    n
                } catch(f) {} finally {
                    s || t.removeAttribute("id")
                }
            }
            return d(e, t, n, r, i)
        },
        m && (Q(function(e) {
            a = m.call(e, "div");
            try {
                m.call(e, "[test!='']:sizzle"),
                l.push("!=", P)
            } catch(be) {}
        }), l = new RegExp(l.join("|")), ie.matchesSelector = function(e, t) {
            if (t = t.replace(s, "='$1']"), !(u(e) || l.test(t) || g && g.test(t))) try {
                var n = m.call(e, t);
                if (n || a || e.document && 11 !== e.document.nodeType) return n
            } catch(be) {}
            return 0 < ie(t, null, null, [e]).length
        })),
        T.pseudos.nth = T.pseudos.eq,
        T.filters = ve.prototype = T.pseudos,
        T.setFilters = new ve,
        ie.attr = Pe.attr,
        Pe.find = ie,
        Pe.expr = ie.selectors,
        Pe.expr[":"] = Pe.expr.pseudos,
        Pe.unique = ie.uniqueSort,
        Pe.text = ie.getText,
        Pe.isXMLDoc = ie.isXML,
        Pe.contains = ie.contains
    } (m);
    var ne = /Until$/,
    re = /^(?:parents|prev(?:Until|All))/,
    ie = /^.[^:#\[\.,]*$/,
    oe = Pe.expr.match.needsContext,
    ae = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function se(e) {
        return ! e || !e.parentNode || 11 === e.parentNode.nodeType
    }
    function le(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    function ue(e, n, r) {
        if (n = n || 0, Pe.isFunction(n)) return Pe.grep(e,
        function(e, t) {
            return !! n.call(e, t, e) === r
        });
        if (n.nodeType) return Pe.grep(e,
        function(e, t) {
            return e === n === r
        });
        if ("string" == typeof n) {
            var t = Pe.grep(e,
            function(e) {
                return 1 === e.nodeType
            });
            if (ie.test(n)) return Pe.filter(n, t, !r);
            n = Pe.filter(n, t)
        }
        return Pe.grep(e,
        function(e, t) {
            return 0 <= Pe.inArray(e, n) === r
        })
    }
    function ce(e) {
        var t = de.split("|"),
        n = e.createDocumentFragment();
        if (n.createElement) for (; t.length;) n.createElement(t.pop());
        return n
    }
    Pe.fn.extend({
        find: function qr(e) {
            var t, n, r, i, o, a, s = this;
            if ("string" != typeof e) return Pe(e).filter(function() {
                for (t = 0, n = s.length; t < n; t++) if (Pe.contains(s[t], this)) return ! 0
            });
            for (a = this.pushStack("", "find", e), t = 0, n = this.length; t < n; t++) if (r = a.length, Pe.find(e, this[t], a), 0 < t) for (i = r; i < a.length; i++) for (o = 0; o < r; o++) if (a[o] === a[i]) {
                a.splice(i--, 1);
                break
            }
            return a
        },
        has: function Br(e) {
            var t, n = Pe(e, this),
            r = n.length;
            return this.filter(function() {
                for (t = 0; t < r; t++) if (Pe.contains(this, n[t])) return ! 0
            })
        },
        not: function Wr(e) {
            return this.pushStack(ue(this, e, !1), "not", e)
        },
        filter: function gr(e) {
            return this.pushStack(ue(this, e, !0), "filter", e)
        },
        is: function Pr(e) {
            return !! e && ("string" == typeof e ? oe.test(e) ? 0 <= Pe(e, this.context).index(this[0]) : 0 < Pe.filter(e, this).length: 0 < this.filter(e).length)
        },
        closest: function Rr(e, t) {
            for (var n, r = 0,
            i = this.length,
            o = [], a = oe.test(e) || "string" != typeof e ? Pe(e, t || this.context) : 0; r < i; r++) for (n = this[r]; n && n.ownerDocument && n !== t && 11 !== n.nodeType;) {
                if (a ? -1 < a.index(n) : Pe.find.matchesSelector(n, e)) {
                    o.push(n);
                    break
                }
                n = n.parentNode
            }
            return o = 1 < o.length ? Pe.unique(o) : o,
            this.pushStack(o, "closest", e)
        },
        index: function $r(e) {
            return e ? "string" == typeof e ? Pe.inArray(this[0], Pe(e)) : Pe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length: -1
        },
        add: function fr(e, t) {
            var n = "string" == typeof e ? Pe(e, t) : Pe.makeArray(e && e.nodeType ? [e] : e),
            r = Pe.merge(this.get(), n);
            return this.pushStack(se(n[0]) || se(r[0]) ? r: Pe.unique(r))
        },
        addBack: function Ir(e) {
            return this.add(null == e ? this.prevObject: this.prevObject.filter(e))
        }
    }),
    Pe.fn.andSelf = Pe.fn.addBack,
    Pe.each({
        parent: function zr(e) {
            var zr = e.parentNode;
            return zr && 11 !== zr.nodeType ? zr: null
        },
        parents: function Xr(e) {
            return Pe.dir(e, "parentNode")
        },
        parentsUntil: function Ur(e, t, n) {
            return Pe.dir(e, "parentNode", n)
        },
        next: function Yr(e) {
            return le(e, "nextSibling")
        },
        prev: function Jr(e) {
            return le(e, "previousSibling")
        },
        nextAll: function Vr(e) {
            return Pe.dir(e, "nextSibling")
        },
        prevAll: function Kr(e) {
            return Pe.dir(e, "previousSibling")
        },
        nextUntil: function Gr(e, t, n) {
            return Pe.dir(e, "nextSibling", n)
        },
        prevUntil: function Qr(e, t, n) {
            return Pe.dir(e, "previousSibling", n)
        },
        siblings: function Zr(e) {
            return Pe.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function ei(e) {
            return Pe.sibling(e.firstChild)
        },
        contents: function ti(e) {
            return Pe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document: Pe.merge([], e.childNodes)
        }
    },
    function(r, i) {
        Pe.fn[r] = function(e, t) {
            var n = Pe.map(this, i, e);
            return ne.test(r) || (t = e),
            t && "string" == typeof t && (n = Pe.filter(t, n)),
            n = 1 < this.length && !ae[r] ? Pe.unique(n) : n,
            1 < this.length && re.test(r) && (n = n.reverse()),
            this.pushStack(n, r, v.call(arguments).join(","))
        }
    }),
    Pe.extend({
        filter: function gr(e, t, n) {
            return n && (e = ":not(" + e + ")"),
            1 === t.length ? Pe.find.matchesSelector(t[0], e) ? [t[0]] : [] : Pe.find.matches(e, t)
        },
        dir: function ni(e, t, n) {
            for (var r = [], i = e[t]; i && 9 !== i.nodeType && (n === j || 1 !== i.nodeType || !Pe(i).is(n));) 1 === i.nodeType && r.push(i),
            i = i[t];
            return r
        },
        sibling: function le(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    var fe, pe, de = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    he = / jQuery\d+="(?:null|\d+)"/g,
    ge = /^\s+/,
    me = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    ye = /<([\w:]+)/,
    ve = /<tbody/i,
    be = /<|&#?\w+;/,
    xe = /<(?:script|style|link)/i,
    we = /<(?:script|object|embed|option|style)/i,
    Te = new RegExp("<(?:" + de + ")[\\s/>]", "i"),
    Ne = /^(?:checkbox|radio)$/,
    Ce = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ee = /\/(java|ecma)script/i,
    ke = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
    Se = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        area: [1, "<map>", "</map>"],
        _default: [0, "", ""]
    },
    Ae = ce(y),
    je = Ae.appendChild(y.createElement("div"));
    function De(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
    }
    function Le(e, t) {
        if (1 === t.nodeType && Pe.hasData(e)) {
            var n, r, i, o = Pe._data(e),
            a = Pe._data(t, o),
            s = o.events;
            if (s) for (n in delete a.handle, a.events = {},
            s) for (r = 0, i = s[n].length; r < i; r++) Pe.event.add(t, n, s[n][r]);
            a.data && (a.data = Pe.extend({},
            a.data))
        }
    }
    function He(e, t) {
        var n;
        1 === t.nodeType && (t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), "object" === (n = t.nodeName.toLowerCase()) ? (t.parentNode && (t.outerHTML = e.outerHTML), Pe.support.html5Clone && e.innerHTML && !Pe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ne.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.selected = e.defaultSelected: "input" === n || "textarea" === n ? t.defaultValue = e.defaultValue: "script" === n && t.text !== e.text && (t.text = e.text), t.removeAttribute(Pe.expando))
    }
    function _e(e) {
        return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName("*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll("*") : []
    }
    function Fe(e) {
        Ne.test(e.type) && (e.defaultChecked = e.checked)
    }
    Se.optgroup = Se.option,
    Se.tbody = Se.tfoot = Se.colgroup = Se.caption = Se.thead,
    Se.th = Se.td,
    Pe.support.htmlSerialize || (Se._default = [1, "X<div>", "</div>"]),
    Pe.fn.extend({
        text: function ri(e) {
            return Pe.access(this,
            function(e) {
                return e === j ? Pe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(e))
            },
            null, e, arguments.length)
        },
        wrapAll: function ii(t) {
            if (Pe.isFunction(t)) return this.each(function(e) {
                Pe(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = Pe(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]),
                e.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function oi(n) {
            return Pe.isFunction(n) ? this.each(function(e) {
                Pe(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = Pe(this),
                t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function ai(t) {
            var n = Pe.isFunction(t);
            return this.each(function(e) {
                Pe(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function si() {
            return this.parent().each(function() {
                Pe.nodeName(this, "body") || Pe(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function li() {
            return this.domManip(arguments, !0,
            function(e) {
                1 !== this.nodeType && 11 !== this.nodeType || this.appendChild(e)
            })
        },
        prepend: function ui() {
            return this.domManip(arguments, !0,
            function(e) {
                1 !== this.nodeType && 11 !== this.nodeType || this.insertBefore(e, this.firstChild)
            })
        },
        before: function ci() {
            if (!se(this[0])) return this.domManip(arguments, !1,
            function(e) {
                try {
                    this.parentNode.insertBefore(e, this)
                } catch(t) {}
            });
            if (arguments.length) {
                var e = Pe.clean(arguments);
                return this.pushStack(Pe.merge(e, this), "before", this.selector)
            }
        },
        after: function fi() {
            if (!se(this[0])) return this.domManip(arguments, !1,
            function(e) {
                this.parentNode.insertBefore(e, this.nextSibling)
            });
            if (arguments.length) {
                var e = Pe.clean(arguments);
                return this.pushStack(Pe.merge(this, e), "after", this.selector)
            }
        },
        remove: function pr(e, t) {
            for (var n, r = 0; null != (n = this[r]); r++) e && !Pe.filter(e, [n]).length || (t || 1 !== n.nodeType || (Pe.cleanData(n.getElementsByTagName("*")), Pe.cleanData([n])), n.parentNode && n.parentNode.removeChild(n));
            return this
        },
        empty: function pi() {
            for (var e, t = 0; null != (e = this[t]); t++) for (1 === e.nodeType && Pe.cleanData(e.getElementsByTagName("*")); e.firstChild;) e.removeChild(e.firstChild);
            return this
        },
        clone: function di(e, t) {
            return e = null != e && e,
            t = null == t ? e: t,
            this.map(function() {
                return Pe.clone(this, e, t)
            })
        },
        html: function hi(e) {
            return Pe.access(this,
            function(e) {
                var t = this[0] || {},
                n = 0,
                r = this.length;
                if (e === j) return 1 === t.nodeType ? t.innerHTML.replace(he, "") : j;
                if ("string" == typeof e && !xe.test(e) && (Pe.support.htmlSerialize || !Te.test(e)) && (Pe.support.leadingWhitespace || !ge.test(e)) && !Se[(ye.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(me, "<$1></$2>");
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (Pe.cleanData(t.getElementsByTagName("*")), t.innerHTML = e);
                        t = 0
                    } catch(i) {}
                }
                t && this.empty().append(e)
            },
            null, e, arguments.length)
        },
        replaceWith: function gi(r) {
            return se(this[0]) ? this.length ? this.pushStack(Pe(Pe.isFunction(r) ? r() : r), "replaceWith", r) : this: Pe.isFunction(r) ? this.each(function(e) {
                var t = Pe(this),
                n = t.html();
                t.replaceWith(r.call(this, e, n))
            }) : ("string" != typeof r && (r = Pe(r).detach()), this.each(function() {
                var e = this.nextSibling,
                t = this.parentNode;
                Pe(this).remove(),
                e ? Pe(e).before(r) : Pe(t).append(r)
            }))
        },
        detach: function mi(e) {
            return this.remove(e, !0)
        },
        domManip: function yi(n, r, i) {
            var e, t, o, a, s = 0,
            l = (n = [].concat.apply([], n))[0],
            u = [],
            c = this.length;
            if (!Pe.support.checkClone && 1 < c && "string" == typeof l && Ce.test(l)) return this.each(function() {
                Pe(this).domManip(n, r, i)
            });
            if (Pe.isFunction(l)) return this.each(function(e) {
                var t = Pe(this);
                n[0] = l.call(this, e, r ? t.html() : j),
                t.domManip(n, r, i)
            });
            if (this[0]) {
                if (t = (o = (e = Pe.buildFragment(n, this, u)).fragment).firstChild, 1 === o.childNodes.length && (o = t), t) for (r = r && Pe.nodeName(t, "tr"), a = e.cacheable || c - 1; s < c; s++) i.call(r && Pe.nodeName(this[s], "table") ? De(this[s], "tbody") : this[s], s === a ? o: Pe.clone(o, !0, !0));
                o = t = null,
                u.length && Pe.each(u,
                function(e, t) {
                    t.src ? Pe.ajax ? Pe.ajax({
                        url: t.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : Pe.error("no ajax") : Pe.globalEval((t.text || t.textContent || t.innerHTML || "").replace(ke, "")),
                    t.parentNode && t.parentNode.removeChild(t)
                })
            }
            return this
        }
    }),
    Pe.buildFragment = function(e, t, n) {
        var r, i, o, a = e[0];
        return t = (t = !(t = t || y).nodeType && t[0] || t).ownerDocument || t,
        !(1 === e.length && "string" == typeof a && a.length < 512 && t === y && "<" === a.charAt(0)) || we.test(a) || !Pe.support.checkClone && Ce.test(a) || !Pe.support.html5Clone && Te.test(a) || (i = !0, o = (r = Pe.fragments[a]) !== j),
        r || (r = t.createDocumentFragment(), Pe.clean(e, t, r, n), i && (Pe.fragments[a] = o && r)),
        {
            fragment: r,
            cacheable: i
        }
    },
    Pe.fragments = {},
    Pe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(s, l) {
        Pe.fn[s] = function(e) {
            var t, n = 0,
            r = [],
            i = Pe(e),
            o = i.length,
            a = 1 === this.length && this[0].parentNode;
            if ((null == a || a && 11 === a.nodeType && 1 === a.childNodes.length) && 1 === o) return i[l](this[0]),
            this;
            for (; n < o; n++) t = (0 < n ? this.clone(!0) : this).get(),
            Pe(i[n])[l](t),
            r = r.concat(t);
            return this.pushStack(r, s, i.selector)
        }
    }),
    Pe.extend({
        clone: function di(e, t, n) {
            var r, i, o, di;
            if (Pe.support.html5Clone || Pe.isXMLDoc(e) || !Te.test("<" + e.nodeName + ">") ? di = e.cloneNode(!0) : (je.innerHTML = e.outerHTML, je.removeChild(di = je.firstChild)), !(Pe.support.noCloneEvent && Pe.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Pe.isXMLDoc(e))) for (He(e, di), r = _e(e), i = _e(di), o = 0; r[o]; ++o) i[o] && He(r[o], i[o]);
            if (t && (Le(e, di), n)) for (r = _e(e), i = _e(di), o = 0; r[o]; ++o) Le(r[o], i[o]);
            return r = i = null,
            di
        },
        clean: function vi(e, t, n, r) {
            var i, o, a, s, l, u, c, f, p, d, h, g = t === y && Ae,
            m = [];
            for (t && "undefined" != typeof t.createDocumentFragment || (t = y), i = 0; null != (a = e[i]); i++) if ("number" == typeof a && (a += ""), a) {
                if ("string" == typeof a) if (be.test(a)) {
                    for (g = g || ce(t), c = t.createElement("div"), g.appendChild(c), a = a.replace(me, "<$1></$2>"), s = (ye.exec(a) || ["", ""])[1].toLowerCase(), u = (l = Se[s] || Se._default)[0], c.innerHTML = l[1] + a + l[2]; u--;) c = c.lastChild;
                    if (!Pe.support.tbody) for (f = ve.test(a), o = (p = "table" !== s || f ? "<table>" !== l[1] || f ? [] : c.childNodes: c.firstChild && c.firstChild.childNodes).length - 1; 0 <= o; --o) Pe.nodeName(p[o], "tbody") && !p[o].childNodes.length && p[o].parentNode.removeChild(p[o]); ! Pe.support.leadingWhitespace && ge.test(a) && c.insertBefore(t.createTextNode(ge.exec(a)[0]), c.firstChild),
                    a = c.childNodes,
                    c.parentNode.removeChild(c)
                } else a = t.createTextNode(a);
                a.nodeType ? m.push(a) : Pe.merge(m, a)
            }
            if (c && (a = c = g = null), !Pe.support.appendChecked) for (i = 0; null != (a = m[i]); i++) Pe.nodeName(a, "input") ? Fe(a) : "undefined" != typeof a.getElementsByTagName && Pe.grep(a.getElementsByTagName("input"), Fe);
            if (n) for (d = function d(e) {
                if (!e.type || Ee.test(e.type)) return r ? r.push(e.parentNode ? e.parentNode.removeChild(e) : e) : n.appendChild(e)
            },
            i = 0; null != (a = m[i]); i++) Pe.nodeName(a, "script") && d(a) || (n.appendChild(a), "undefined" != typeof a.getElementsByTagName && (h = Pe.grep(Pe.merge([], a.getElementsByTagName("script")), d), m.splice.apply(m, [i + 1, 0].concat(h)), i += h.length));
            return m
        },
        cleanData: function bi(e, t) {
            for (var n, r, i, o, a = 0,
            s = Pe.expando,
            l = Pe.cache,
            u = Pe.support.deleteExpando,
            c = Pe.event.special; null != (i = e[a]); a++) if ((t || Pe.acceptData(i)) && (n = (r = i[s]) && l[r])) {
                if (n.events) for (o in n.events) c[o] ? Pe.event.remove(i, o) : Pe.removeEvent(i, o, n.handle);
                l[r] && (delete l[r], u ? delete i[s] : i.removeAttribute ? i.removeAttribute(s) : i[s] = null, Pe.deletedIds.push(r))
            }
        }
    }),
    Pe.uaMatch = function(e) {
        e = e.toLowerCase();
        var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
        return {
            browser: t[1] || "",
            version: t[2] || "0"
        }
    },
    pe = {},
    (fe = Pe.uaMatch(t.userAgent)).browser && (pe[fe.browser] = !0, pe.version = fe.version),
    pe.chrome ? pe.webkit = !0 : pe.webkit && (pe.safari = !0),
    Pe.browser = pe,
    Pe.sub = function() {
        function n(e, t) {
            return new n.fn.init(e, t)
        }
        Pe.extend(!0, n, this),
        n.superclass = this,
        n.fn = n.prototype = this(),
        (n.fn.constructor = n).sub = this.sub,
        n.fn.init = function i(e, t) {
            return t && t instanceof Pe && !(t instanceof n) && (t = n(t)),
            Pe.fn.init.call(this, e, t, r)
        },
        n.fn.init.prototype = n.fn;
        var r = n(y);
        return n
    };
    var Me, Oe, qe, Be = /alpha\([^)]*\)/i,
    We = /opacity=([^)]*)/,
    Re = /^(top|right|bottom|left)$/,
    $e = /^(none|table(?!-c[ea]).+)/,
    Ie = /^margin/,
    ze = new RegExp("^(" + f + ")(.*)$", "i"),
    Xe = new RegExp("^(" + f + ")(?!px)[a-z%]+$", "i"),
    Ue = new RegExp("^([-+])=(" + f + ")", "i"),
    Ye = {},
    Je = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    Ve = {
        letterSpacing: 0,
        fontWeight: 400
    },
    Ke = ["Top", "Right", "Bottom", "Left"],
    Ge = ["Webkit", "O", "Moz", "ms"],
    Qe = Pe.fn.toggle;
    function Ze(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = Ge.length; i--;) if ((t = Ge[i] + n) in e) return t;
        return r
    }
    function et(e, t) {
        return e = t || e,
        "none" === Pe.css(e, "display") || !Pe.contains(e.ownerDocument, e)
    }
    function tt(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)(n = e[o]).style && (i[o] = Pe._data(n, "olddisplay"), t ? (i[o] || "none" !== n.style.display || (n.style.display = ""), "" === n.style.display && et(n) && (i[o] = Pe._data(n, "olddisplay", ot(n.nodeName)))) : (r = Me(n, "display"), i[o] || "none" === r || Pe._data(n, "olddisplay", r)));
        for (o = 0; o < a; o++)(n = e[o]).style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? i[o] || "": "none"));
        return e
    }
    function nt(e, t, n) {
        var r = ze.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }
    function rt(e, t, n, r) {
        for (var i = n === (r ? "border": "content") ? 4 : "width" === t ? 1 : 0, o = 0; i < 4; i += 2)"margin" === n && (o += Pe.css(e, n + Ke[i], !0)),
        r ? ("content" === n && (o -= parseFloat(Me(e, "padding" + Ke[i])) || 0), "margin" !== n && (o -= parseFloat(Me(e, "border" + Ke[i] + "Width")) || 0)) : (o += parseFloat(Me(e, "padding" + Ke[i])) || 0, "padding" !== n && (o += parseFloat(Me(e, "border" + Ke[i] + "Width")) || 0));
        return o
    }
    function it(e, t, n) {
        var r = "width" === t ? e.offsetWidth: e.offsetHeight,
        i = !0,
        o = Pe.support.boxSizing && "border-box" === Pe.css(e, "boxSizing");
        if (r <= 0 || null == r) {
            if (((r = Me(e, t)) < 0 || null == r) && (r = e.style[t]), Xe.test(r)) return r;
            i = o && (Pe.support.boxSizingReliable || r === e.style[t]),
            r = parseFloat(r) || 0
        }
        return r + rt(e, t, n || (o ? "border": "content"), i) + "px"
    }
    function ot(e) {
        if (Ye[e]) return Ye[e];
        var t = Pe("<" + e + ">").appendTo(y.body),
        n = t.css("display");
        return t.remove(),
        "none" !== n && "" !== n || (Oe = y.body.appendChild(Oe || Pe.extend(y.createElement("iframe"), {
            frameBorder: 0,
            width: 0,
            height: 0
        })), qe && Oe.createElement || ((qe = (Oe.contentWindow || Oe.contentDocument).document).write("<!doctype html><html><body>"), qe.close()), t = qe.body.appendChild(qe.createElement(e)), n = Me(t, "display"), y.body.removeChild(Oe)),
        Ye[e] = n
    }
    Pe.fn.extend({
        css: function xi(e, t) {
            return Pe.access(this,
            function(e, t, n) {
                return n !== j ? Pe.style(e, t, n) : Pe.css(e, t)
            },
            e, t, 1 < arguments.length)
        },
        show: function wi() {
            return tt(this, !0)
        },
        hide: function Ti() {
            return tt(this)
        },
        toggle: function Mr(e, t) {
            var n = "boolean" == typeof e;
            return Pe.isFunction(e) && Pe.isFunction(t) ? Qe.apply(this, arguments) : this.each(function() { (n ? e: et(this)) ? Pe(this).show() : Pe(this).hide()
            })
        }
    }),
    Pe.extend({
        cssHooks: {
            opacity: {
                get: function ln(e, t) {
                    if (t) {
                        var n = Me(e, "opacity");
                        return "" === n ? "1": n
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": Pe.support.cssFloat ? "cssFloat": "styleFloat"
        },
        style: function Ni(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = Pe.camelCase(t),
                Ni = e.style;
                if (t = Pe.cssProps[s] || (Pe.cssProps[s] = Ze(Ni, s)), a = Pe.cssHooks[t] || Pe.cssHooks[s], n === j) return a && "get" in a && (i = a.get(e, !1, r)) !== j ? i: Ni[t];
                if (! ("string" === (o = _typeof(n)) && (i = Ue.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(Pe.css(e, t)), o = "number"), null == n || "number" === o && isNaN(n) || ("number" !== o || Pe.cssNumber[s] || (n += "px"), a && "set" in a && (n = a.set(e, n, r)) === j))) try {
                    Ni[t] = n
                } catch(l) {}
            }
        },
        css: function xi(e, t, n, r) {
            var i, o, a, s = Pe.camelCase(t);
            return t = Pe.cssProps[s] || (Pe.cssProps[s] = Ze(e.style, s)),
            (a = Pe.cssHooks[t] || Pe.cssHooks[s]) && "get" in a && (i = a.get(e, !0, r)),
            i === j && (i = Me(e, t)),
            "normal" === i && t in Ve && (i = Ve[t]),
            n || r !== j ? (o = parseFloat(i), n || Pe.isNumeric(o) ? o || 0 : i) : i
        },
        swap: function Ci(e, t, n) {
            var r, i, o = {};
            for (i in t) o[i] = e.style[i],
            e.style[i] = t[i];
            for (i in r = n.call(e), t) e.style[i] = o[i];
            return r
        }
    }),
    m.getComputedStyle ? Me = function Me(e, t) {
        var n, r, i, o, a = m.getComputedStyle(e, null),
        s = e.style;
        return a && ("" !== (n = a[t]) || Pe.contains(e.ownerDocument, e) || (n = Pe.style(e, t)), Xe.test(n) && Ie.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = n, n = a.width, s.width = r, s.minWidth = i, s.maxWidth = o)),
        n
    }: y.documentElement.currentStyle && (Me = function Me(e, t) {
        var n, r, i = e.currentStyle && e.currentStyle[t],
        o = e.style;
        return null == i && o && o[t] && (i = o[t]),
        Xe.test(i) && !Re.test(t) && (n = o.left, (r = e.runtimeStyle && e.runtimeStyle.left) && (e.runtimeStyle.left = e.currentStyle.left), o.left = "fontSize" === t ? "1em": i, i = o.pixelLeft + "px", o.left = n, r && (e.runtimeStyle.left = r)),
        "" === i ? "auto": i
    }),
    Pe.each(["height", "width"],
    function(e, r) {
        Pe.cssHooks[r] = {
            get: function i(e, t, n) {
                if (t) return 0 === e.offsetWidth && $e.test(Me(e, "display")) ? Pe.swap(e, Je,
                function() {
                    return it(e, r, n)
                }) : it(e, r, n)
            },
            set: function o(e, t, n) {
                return nt(e, t, n ? rt(e, r, n, Pe.support.boxSizing && "border-box" === Pe.css(e, "boxSizing")) : 0)
            }
        }
    }),
    Pe.support.opacity || (Pe.cssHooks.opacity = {
        get: function ln(e, t) {
            return We.test((t && e.currentStyle ? e.currentStyle.filter: e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "": t ? "1": ""
        },
        set: function cr(e, t) {
            var n = e.style,
            r = e.currentStyle,
            i = Pe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")": "",
            o = r && r.filter || n.filter || ""; (n.zoom = 1) <= t && "" === Pe.trim(o.replace(Be, "")) && n.removeAttribute && (n.removeAttribute("filter"), r && !r.filter) || (n.filter = Be.test(o) ? o.replace(Be, i) : o + " " + i)
        }
    }),
    Pe(function() {
        Pe.support.reliableMarginRight || (Pe.cssHooks.marginRight = {
            get: function n(e, t) {
                return Pe.swap(e, {
                    display: "inline-block"
                },
                function() {
                    if (t) return Me(e, "marginRight")
                })
            }
        }),
        !Pe.support.pixelPosition && Pe.fn.position && Pe.each(["top", "left"],
        function(e, r) {
            Pe.cssHooks[r] = {
                get: function i(e, t) {
                    if (t) {
                        var n = Me(e, r);
                        return Xe.test(n) ? Pe(e).position()[r] + "px": n
                    }
                }
            }
        })
    }),
    Pe.expr && Pe.expr.filters && (Pe.expr.filters.hidden = function(e) {
        return 0 === e.offsetWidth && 0 === e.offsetHeight || !Pe.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || Me(e, "display"))
    },
    Pe.expr.filters.visible = function(e) {
        return ! Pe.expr.filters.hidden(e)
    }),
    Pe.each({
        margin: "",
        padding: "",
        border: "Width"
    },
    function(i, o) {
        Pe.cssHooks[i + o] = {
            expand: function a(e) {
                var t, n = "string" == typeof e ? e.split(" ") : [e],
                r = {};
                for (t = 0; t < 4; t++) r[i + Ke[t] + o] = n[t] || n[t - 2] || n[0];
                return r
            }
        },
        Ie.test(i) || (Pe.cssHooks[i + o].set = nt)
    });
    var at = /%20/g,
    st = /\[\]$/,
    lt = /\r?\n/g,
    ut = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
    ct = /^(?:select|textarea)/i;
    function ft(n, e, r, i) {
        var t;
        if (Pe.isArray(e)) Pe.each(e,
        function(e, t) {
            r || st.test(n) ? i(n, t) : ft(n + "[" + ("object" === _typeof(t) ? e: "") + "]", t, r, i)
        });
        else if (r || "object" !== Pe.type(e)) i(n, e);
        else for (t in e) ft(n + "[" + t + "]", e[t], r, i)
    }
    Pe.fn.extend({
        serialize: function Ei() {
            return Pe.param(this.serializeArray())
        },
        serializeArray: function ki() {
            return this.map(function() {
                return this.elements ? Pe.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || ct.test(this.nodeName) || ut.test(this.type))
            }).map(function(e, n) {
                var t = Pe(this).val();
                return null == t ? null: Pe.isArray(t) ? Pe.map(t,
                function(e, t) {
                    return {
                        name: n.name,
                        value: e.replace(lt, "\r\n")
                    }
                }) : {
                    name: n.name,
                    value: t.replace(lt, "\r\n")
                }
            }).get()
        }
    }),
    Pe.param = function(e, t) {
        var n, r = [],
        i = function i(e, t) {
            t = Pe.isFunction(t) ? t() : null == t ? "": t,
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (t === j && (t = Pe.ajaxSettings && Pe.ajaxSettings.traditional), Pe.isArray(e) || e.jquery && !Pe.isPlainObject(e)) Pe.each(e,
        function() {
            i(this.name, this.value)
        });
        else for (n in e) ft(n, e[n], t, i);
        return r.join("&").replace(at, "+")
    };
    var pt, dt, ht = /#.*$/,
    gt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    mt = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
    yt = /^(?:GET|HEAD)$/,
    vt = /^\/\//,
    bt = /\?/,
    xt = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    wt = /([?&])_=[^&]*/,
    Tt = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
    Nt = Pe.fn.load,
    Ct = {},
    Et = {},
    kt = ["*/"] + ["*"];
    try {
        dt = e.href
    } catch(Si) { (dt = y.createElement("a")).href = "",
        dt = dt.href
    }
    function St(s) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r, i = e.toLowerCase().split(D),
            o = 0,
            a = i.length;
            if (Pe.isFunction(t)) for (; o < a; o++) n = i[o],
            (r = /^\+/.test(n)) && (n = n.substr(1) || "*"),
            (s[n] = s[n] || [])[r ? "unshift": "push"](t)
        }
    }
    function At(e, t, n, r, i, o) { (o = o || {})[i = i || t.dataTypes[0]] = !0;
        for (var a, s = e[i], l = 0, u = s ? s.length: 0, c = e === Ct; l < u && (c || !a); l++)"string" == typeof(a = s[l](t, n, r)) && (a = !c || o[a] ? j: (t.dataTypes.unshift(a), At(e, t, n, r, a, o)));
        return ! c && a || o["*"] || (a = At(e, t, n, r, "*", o)),
        a
    }
    function jt(e, t) {
        var n, r, i = Pe.ajaxSettings.flatOptions || {};
        for (n in t) t[n] !== j && ((i[n] ? e: r = r || {})[n] = t[n]);
        r && Pe.extend(!0, e, r)
    }
    function Dt(e, t, n) {
        var r, i, o, a, s = e.contents,
        l = e.dataTypes,
        u = e.responseFields;
        for (i in u) i in n && (t[u[i]] = n[i]);
        for (;
        "*" === l[0];) l.shift(),
        r === j && (r = e.mimeType || t.getResponseHeader("content-type"));
        if (r) for (i in s) if (s[i] && s[i].test(r)) {
            l.unshift(i);
            break
        }
        if (l[0] in n) o = l[0];
        else {
            for (i in n) {
                if (!l[0] || e.converters[i + " " + l[0]]) {
                    o = i;
                    break
                }
                a = a || i
            }
            o = o || a
        }
        if (o) return o !== l[0] && l.unshift(o),
        n[o]
    }
    function Lt(e, t) {
        var n, r, i, o, a = e.dataTypes.slice(),
        s = a[0],
        l = {},
        u = 0;
        if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), a[1]) for (n in e.converters) l[n.toLowerCase()] = e.converters[n];
        for (; i = a[++u];) if ("*" !== i) {
            if ("*" !== s && s !== i) {
                if (! (n = l[s + " " + i] || l["* " + i])) for (r in l) if ((o = r.split(" "))[1] === i && (n = l[s + " " + o[0]] || l["* " + o[0]])) { ! 0 === n ? n = l[r] : !0 !== l[r] && (i = o[0], a.splice(u--, 0, i));
                    break
                }
                if (!0 !== n) if (n && e["throws"]) t = n(t);
                else try {
                    t = n(t)
                } catch(Si) {
                    return {
                        state: "parsererror",
                        error: n ? Si: "No conversion from " + s + " to " + i
                    }
                }
            }
            s = i
        }
        return {
            state: "success",
            data: t
        }
    }
    pt = Tt.exec(dt.toLowerCase()) || [],
    Pe.fn.load = function(e, t, n) {
        if ("string" != typeof e && Nt) return Nt.apply(this, arguments);
        if (!this.length) return this;
        var r, i, o, a = this,
        s = e.indexOf(" ");
        return 0 <= s && (r = e.slice(s, e.length), e = e.slice(0, s)),
        Pe.isFunction(t) ? (n = t, t = j) : t && "object" === _typeof(t) && (i = "POST"),
        Pe.ajax({
            url: e,
            type: i,
            dataType: "html",
            data: t,
            complete: function l(e, t) {
                n && a.each(n, o || [e.responseText, t, e])
            }
        }).done(function(e) {
            o = arguments,
            a.html(r ? Pe("<div>").append(e.replace(xt, "")).find(r) : e)
        }),
        this
    },
    Pe.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
    function(e, t) {
        Pe.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    Pe.each(["get", "post"],
    function(e, i) {
        Pe[i] = function(e, t, n, r) {
            return Pe.isFunction(t) && (r = r || n, n = t, t = j),
            Pe.ajax({
                type: i,
                url: e,
                data: t,
                success: n,
                dataType: r
            })
        }
    }),
    Pe.extend({
        getScript: function Ai(e, t) {
            return Pe.get(e, j, t, "script")
        },
        getJSON: function ji(e, t, n) {
            return Pe.get(e, t, n, "json")
        },
        ajaxSetup: function Di(e, t) {
            return t ? jt(e, Pe.ajaxSettings) : (t = e, e = Pe.ajaxSettings),
            jt(e, t),
            e
        },
        ajaxSettings: {
            url: dt,
            isLocal: mt.test(pt[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": kt
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": m.String,
                "text html": !0,
                "text json": Pe.parseJSON,
                "text xml": Pe.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            },
            errorCall: []
        },
        ajaxPrefilter: St(Ct),
        ajaxTransport: St(Et),
        ajax: function Li(e, t) {
            "object" === _typeof(e) && (t = e, e = j),
            t = t || {};
            var c, f, n, p, d, r, h, i, g = Pe.ajaxSetup({},
            t),
            m = g.context || g,
            y = m !== g && (m.nodeType || m instanceof Pe) ? Pe(m) : Pe.event,
            v = Pe.Deferred(),
            b = Pe.Callbacks("once memory"),
            x = g.statusCode || {},
            o = {},
            a = {},
            w = 0,
            s = "canceled",
            T = {
                readyState: 0,
                setRequestHeader: function C(e, t) {
                    if (!w) {
                        var n = e.toLowerCase();
                        e = a[n] = a[n] || e,
                        o[e] = t
                    }
                    return this
                },
                getAllResponseHeaders: function E() {
                    return 2 === w ? f: null
                },
                getResponseHeader: function k(e) {
                    var t;
                    if (2 === w) {
                        if (!n) for (n = {}; t = gt.exec(f);) n[t[1].toLowerCase()] = t[2];
                        t = n[e.toLowerCase()]
                    }
                    return t === j ? null: t
                },
                overrideMimeType: function S(e) {
                    return w || (g.mimeType = e),
                    this
                },
                abort: function A(e) {
                    return e = e || s,
                    p && p.abort(e),
                    l(0, e),
                    this
                }
            };
            function l(n, e, t, r) {
                var i, o, a, s, l, u = e;
                2 !== w && (w = 2, d && clearTimeout(d), p = j, f = r || "", T.readyState = 0 < n ? 4 : 0, t && (s = Dt(g, T, t)), 200 <= n && n < 300 || 304 === n ? (g.ifModified && ((l = T.getResponseHeader("Last-Modified")) && (Pe.lastModified[c] = l), (l = T.getResponseHeader("Etag")) && (Pe.etag[c] = l)), i = 304 === n ? (u = "notmodified", !0) : (u = (i = Lt(g, s)).state, o = i.data, !(a = i.error))) : (a = u) && !n || (u = "error", n < 0 && (n = 0)), T.status = n, T.statusText = (e || u) + "", i ? v.resolveWith(m, [o, u, T]) : (Pe.ajaxSettings.errorCall = Pe.ajaxSettings.errorCall || [], Pe.each(Pe.ajaxSettings.errorCall,
                function(e, t) {
                    "function" == typeof t && t(m, n, a)
                }), v.rejectWith(m, [T, u, a])), T.statusCode(x), x = j, h && y.trigger("ajax" + (i ? "Success": "Error"), [T, g, i ? o: a]), b.fireWith(m, [T, u]), h && (y.trigger("ajaxComplete", [T, g]), --Pe.active || Pe.event.trigger("ajaxStop")))
            }
            if (v.promise(T), T.success = T.done, T.error = T.fail, T.complete = b.add, T.statusCode = function(e) {
                var t;
                if (e) if (w < 2) for (t in e) x[t] = [x[t], e[t]];
                else t = e[T.status],
                T.always(t);
                return this
            },
            g.url = ((e || g.url) + "").replace(ht, "").replace(vt, pt[1] + "//"), g.dataTypes = Pe.trim(g.dataType || "*").toLowerCase().split(D), null == g.crossDomain && (r = Tt.exec(g.url.toLowerCase()) || !1, g.crossDomain = r && r.join(":") + (r[3] ? "": "http:" === r[1] ? 80 : 443) !== pt.join(":") + (pt[3] ? "": "http:" === pt[1] ? 80 : 443)), g.data && g.processData && "string" != typeof g.data && (g.data = Pe.param(g.data, g.traditional)), At(Ct, g, t, T), 2 === w) return T;
            if (h = g.global, g.type = g.type.toUpperCase(), g.hasContent = !yt.test(g.type), h && 0 == Pe.active++&&Pe.event.trigger("ajaxStart"), !g.hasContent && (g.data && (g.url += (bt.test(g.url) ? "&": "?") + g.data, delete g.data), c = g.url, !1 === g.cache)) {
                var u = Pe.now(),
                N = g.url.replace(wt, "$1_=" + u);
                g.url = N + (N === g.url ? (bt.test(g.url) ? "&": "?") + "_=" + u: "")
            }
            for (i in "string" == typeof $("#_TOKEN").attr("value") && (g.url += (bt.test(g.url) ? "&": "?") + "_TOKEN=" + $("#_TOKEN").attr("value")), (g.data && g.hasContent && !1 !== g.contentType || t.contentType) && T.setRequestHeader("Content-Type", g.contentType), g.ifModified && (c = c || g.url, Pe.lastModified[c] && T.setRequestHeader("If-Modified-Since", Pe.lastModified[c]), Pe.etag[c] && T.setRequestHeader("If-None-Match", Pe.etag[c])), T.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + kt + "; q=0.01": "") : g.accepts["*"]), g.headers) T.setRequestHeader(i, g.headers[i]);
            if (g.beforeSend && (!1 === g.beforeSend.call(m, T, g) || 2 === w)) return T.abort();
            for (i in s = "abort", {
                success: 1,
                error: 1,
                complete: 1
            }) T[i](g[i]);
            if (p = At(Et, g, t, T)) {
                T.readyState = 1,
                h && y.trigger("ajaxSend", [T, g]),
                g.async && 0 < g.timeout && (d = setTimeout(function() {
                    T.abort("timeout")
                },
                g.timeout));
                try {
                    w = 1,
                    p.send(o, l)
                } catch(Si) {
                    if (! (w < 2)) throw Si;
                    l( - 1, Si)
                }
            } else l( - 1, "No Transport");
            return T
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var Ht = [],
    _t = /\?/,
    Ft = /(=)\?(?=&|$)|\?\?/,
    Mt = Pe.now();
    Pe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function Hi() {
            var e = Ht.pop() || Pe.expando + "_" + Mt++;
            return this[e] = !0,
            e
        }
    }),
    Pe.ajaxPrefilter("json jsonp",
    function(e, t, n) {
        var r, i, o, a = e.data,
        s = e.url,
        l = !1 !== e.jsonp,
        u = l && Ft.test(s),
        c = l && !u && "string" == typeof a && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ft.test(a);
        if ("jsonp" === e.dataTypes[0] || u || c) return r = e.jsonpCallback = Pe.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
        i = m[r],
        u ? e.url = s.replace(Ft, "$1" + r) : c ? e.data = a.replace(Ft, "$1" + r) : l && (e.url += (_t.test(s) ? "&": "?") + e.jsonp + "=" + r),
        e.converters["script json"] = function() {
            return o || Pe.error(r + " was not called"),
            o[0]
        },
        e.dataTypes[0] = "json",
        m[r] = function() {
            o = arguments
        },
        n.always(function() {
            m[r] = i,
            e[r] && (e.jsonpCallback = t.jsonpCallback, Ht.push(r)),
            o && Pe.isFunction(i) && i(o[0]),
            o = i = j
        }),
        "script"
    }),
    Pe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function _i(e) {
                return Pe.globalEval(e),
                e
            }
        }
    }),
    Pe.ajaxPrefilter("script",
    function(e) {
        e.cache === j && (e.cache = !1),
        e.crossDomain && (e.type = "GET", e.global = !1)
    }),
    Pe.ajaxTransport("script",
    function(t) {
        if (t.crossDomain) {
            var r, i = y.head || y.getElementsByTagName("head")[0] || y.documentElement;
            return {
                send: function o(e, n) { (r = y.createElement("script")).async = "async",
                    t.scriptCharset && (r.charset = t.scriptCharset),
                    r.src = t.url,
                    r.onload = r.onreadystatechange = function(e, t) { ! t && r.readyState && !/loaded|complete/.test(r.readyState) || (r.onload = r.onreadystatechange = null, i && r.parentNode && i.removeChild(r), r = j, t || n(200, "success"))
                    },
                    i.insertBefore(r, i.firstChild)
                },
                abort: function e() {
                    r && r.onload(0, 1)
                }
            }
        }
    });
    var Ot, qt, Bt = !!m.ActiveXObject &&
    function() {
        for (var e in Ot) Ot[e](0, 1)
    },
    Wt = 0;
    function Pt() {
        try {
            return new m.XMLHttpRequest
        } catch(Si) {}
    }
    function Rt() {
        try {
            return new m.ActiveXObject("Microsoft.XMLHTTP")
        } catch(Si) {}
    }
    Pe.ajaxSettings.xhr = m.ActiveXObject ?
    function() {
        return ! this.isLocal && Pt() || Rt()
    }: Pt,
    qt = Pe.ajaxSettings.xhr(),
    Pe.extend(Pe.support, {
        ajax: !!qt,
        cors: !!qt && "withCredentials" in qt
    }),
    Pe.support.ajax && Pe.ajaxTransport(function(p) {
        var d;
        if (!p.crossDomain || Pe.support.cors) return {
            send: function r(e, l) {
                var u, t, c = p.xhr();
                if (p.username ? c.open(p.type, p.url, p.async, p.username, p.password) : c.open(p.type, p.url, p.async), p.xhrFields) for (t in p.xhrFields) c[t] = p.xhrFields[t];
                p.mimeType && c.overrideMimeType && c.overrideMimeType(p.mimeType),
                p.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                try {
                    for (t in e) c.setRequestHeader(t, e[t])
                } catch(n) {}
                c.send(p.hasContent && p.data || null),
                d = function f(e, t) {
                    var n, r, i, o, a;
                    try {
                        if (d && (t || 4 === c.readyState)) if (d = j, u && (c.onreadystatechange = Pe.noop, Bt && delete Ot[u]), t) 4 !== c.readyState && c.abort();
                        else {
                            n = c.status,
                            i = c.getAllResponseHeaders(),
                            o = {},
                            (a = c.responseXML) && a.documentElement && (o.xml = a);
                            try {
                                o.text = c.responseText
                            } catch(e) {}
                            try {
                                r = c.statusText
                            } catch(Si) {
                                r = ""
                            }
                            n || !p.isLocal || p.crossDomain ? 1223 === n && (n = 204) : n = o.text ? 200 : 404
                        }
                    } catch(s) {
                        t || l( - 1, s)
                    }
                    o && l(n, r, o, i)
                },
                p.async ? 4 === c.readyState ? setTimeout(d, 0) : (u = ++Wt, Bt && (Ot || (Ot = {},
                Pe(m).unload(Bt)), Ot[u] = d), c.onreadystatechange = d) : d()
            },
            abort: function e() {
                d && d(0, 1)
            }
        }
    });
    var $t, It, zt = /^(?:toggle|show|hide)$/,
    Xt = new RegExp("^(?:([-+])=|)(" + f + ")([a-z%]*)$", "i"),
    Ut = /queueHooks$/,
    Yt = [Zt],
    Jt = {
        "*": [function(e, t) {
            var n, r, i = this.createTween(e, t),
            o = Xt.exec(t),
            a = i.cur(),
            s = +a || 0,
            l = 1,
            u = 20;
            if (o) {
                if (n = +o[2], "px" !== (r = o[3] || (Pe.cssNumber[e] ? "": "px")) && s) for (s = Pe.css(i.elem, e, !0) || n || 1; s /= l = l || ".5", Pe.style(i.elem, e, s + r), l !== (l = i.cur() / a) && 1 !== l && --u;);
                i.unit = r,
                i.start = s,
                i.end = o[1] ? s + (o[1] + 1) * n: n
            }
            return i
        }]
    };
    function Vt() {
        return setTimeout(function() {
            $t = j
        },
        0),
        $t = Pe.now()
    }
    function Kt(o, e) {
        Pe.each(e,
        function(e, t) {
            for (var n = (Jt[e] || []).concat(Jt["*"]), r = 0, i = n.length; r < i; r++) if (n[r].call(o, e, t)) return
        })
    }
    function Gt(o, e, t) {
        var n, r = 0,
        i = Yt.length,
        a = Pe.Deferred().always(function() {
            delete s.elem
        }),
        s = function s() {
            for (var e = $t || Vt(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
            return a.notifyWith(o, [l, n, t]),
            n < 1 && i ? t: (a.resolveWith(o, [l]), !1)
        },
        l = a.promise({
            elem: o,
            props: Pe.extend({},
            e),
            opts: Pe.extend(!0, {
                specialEasing: {}
            },
            t),
            originalProperties: e,
            originalOptions: t,
            startTime: $t || Vt(),
            duration: t.duration,
            tweens: [],
            createTween: function c(e, t, n) {
                var r = Pe.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(r),
                r
            },
            stop: function f(e) {
                for (var t = 0,
                n = e ? l.tweens.length: 0; t < n; t++) l.tweens[t].run(1);
                return e ? a.resolveWith(o, [l, e]) : a.rejectWith(o, [l, e]),
                this
            }
        }),
        u = l.props;
        for (Qt(u, l.opts.specialEasing); r < i; r++) if (n = Yt[r].call(l, o, u, l.opts)) return n;
        return Kt(l, u),
        Pe.isFunction(l.opts.start) && l.opts.start.call(o, l),
        Pe.fx.timer(Pe.extend(s, {
            anim: l,
            queue: l.opts.queue,
            elem: o
        })),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    function Qt(e, t) {
        var n, r, i, o, a;
        for (n in e) if (i = t[r = Pe.camelCase(n)], o = e[n], Pe.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = Pe.cssHooks[r]) && "expand" in a) for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
        else t[r] = i
    }
    function Zt(t, e, n) {
        var r, i, o, a, s, l, u, c, f = this,
        p = t.style,
        d = {},
        h = [],
        g = t.nodeType && et(t);
        for (r in n.queue || (null == (u = Pe._queueHooks(t, "fx")).unqueued && (u.unqueued = 0, c = u.empty.fire, u.empty.fire = function() {
            u.unqueued || c()
        }), u.unqueued++, f.always(function() {
            f.always(function() {
                u.unqueued--,
                Pe.queue(t, "fx").length || u.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === Pe.css(t, "display") && "none" === Pe.css(t, "float") && (Pe.support.inlineBlockNeedsLayout && "inline" !== ot(t.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", Pe.support.shrinkWrapBlocks || f.done(function() {
            p.overflow = n.overflow[0],
            p.overflowX = n.overflow[1],
            p.overflowY = n.overflow[2]
        })), e) if (o = e[r], zt.exec(o)) {
            if (delete e[r], o === (g ? "hide": "show")) continue;
            h.push(r)
        }
        if (a = h.length) for (s = Pe._data(t, "fxshow") || Pe._data(t, "fxshow", {}), g ? Pe(t).show() : f.done(function() {
            Pe(t).hide()
        }), f.done(function() {
            var e;
            for (e in Pe.removeData(t, "fxshow", !0), d) Pe.style(t, e, d[e])
        }), r = 0; r < a; r++) i = h[r],
        l = f.createTween(i, g ? s[i] : 0),
        d[i] = s[i] || Pe.style(t, i),
        i in s || (s[i] = l.start, g && (l.end = l.start, l.start = "width" === i || "height" === i ? 1 : 0))
    }
    function en(e, t, n, r, i) {
        return new en.prototype.init(e, t, n, r, i)
    }
    function tn(e, t) {
        var n, r = {
            height: e
        },
        i = 0;
        for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = Ke[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e),
        r
    }
    Pe.Animation = Pe.extend(Gt, {
        tweener: function Fi(e, t) {
            for (var n, r = 0,
            i = (e = Pe.isFunction(e) ? (t = e, ["*"]) : e.split(" ")).length; r < i; r++) n = e[r],
            Jt[n] = Jt[n] || [],
            Jt[n].unshift(t)
        },
        prefilter: function Mi(e, t) {
            t ? Yt.unshift(e) : Yt.push(e)
        }
    }),
    (Pe.Tween = en).prototype = {
        constructor: en,
        init: function on(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || "swing",
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (Pe.cssNumber[n] ? "": "px")
        },
        cur: function Oi() {
            var e = en.propHooks[this.prop];
            return e && e.get ? e.get(this) : en.propHooks._default.get(this)
        },
        run: function qi(e) {
            var t, n = en.propHooks[this.prop];
            return this.options.duration ? this.pos = t = Pe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : en.propHooks._default.set(this),
            this
        }
    },
    en.prototype.init.prototype = en.prototype,
    en.propHooks = {
        _default: {
            get: function ln(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = Pe.css(e.elem, e.prop, !1, "")) && "auto" !== t ? t: 0 : e.elem[e.prop]
            },
            set: function cr(e) {
                Pe.fx.step[e.prop] ? Pe.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[Pe.cssProps[e.prop]] || Pe.cssHooks[e.prop]) ? Pe.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    },
    en.propHooks.scrollTop = en.propHooks.scrollLeft = {
        set: function cr(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    Pe.each(["toggle", "show", "hide"],
    function(r, i) {
        var o = Pe.fn[i];
        Pe.fn[i] = function(e, t, n) {
            return null == e || "boolean" == typeof e || !r && Pe.isFunction(e) && Pe.isFunction(t) ? o.apply(this, arguments) : this.animate(tn(i, !0), e, t, n)
        }
    }),
    Pe.fn.extend({
        fadeTo: function Bi(e, t, n, r) {
            return this.filter(et).css("opacity", 0).show().end().animate({
                opacity: t
            },
            e, n, r)
        },
        animate: function Wi(t, e, n, r) {
            var i = Pe.isEmptyObject(t),
            o = Pe.speed(e, n, r),
            a = function a() {
                var e = Gt(this, Pe.extend({},
                t), o);
                i && e.stop(!0)
            };
            return i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function Pi(i, e, o) {
            var a = function a(e) {
                var t = e.stop;
                delete e.stop,
                t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = j),
            e && !1 !== i && this.queue(i || "fx", []),
            this.each(function() {
                var e = !0,
                t = null != i && i + "queueHooks",
                n = Pe.timers,
                r = Pe._data(this);
                if (t) r[t] && r[t].stop && a(r[t]);
                else for (t in r) r[t] && r[t].stop && Ut.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1)); ! e && o || Pe.dequeue(this, i)
            })
        }
    }),
    Pe.each({
        slideDown: tn("show"),
        slideUp: tn("hide"),
        slideToggle: tn("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    },
    function(e, r) {
        Pe.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }),
    Pe.speed = function(e, t, n) {
        var r = e && "object" === _typeof(e) ? Pe.extend({},
        e) : {
            complete: n || !n && t || Pe.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !Pe.isFunction(t) && t
        };
        return r.duration = Pe.fx.off ? 0 : "number" == typeof r.duration ? r.duration: r.duration in Pe.fx.speeds ? Pe.fx.speeds[r.duration] : Pe.fx.speeds._default,
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            Pe.isFunction(r.old) && r.old.call(this),
            r.queue && Pe.dequeue(this, r.queue)
        },
        r
    },
    Pe.easing = {
        linear: function Ri(e) {
            return e
        },
        swing: function $i(e) {
            return.5 - Math.cos(e * Math.PI) / 2
        }
    },
    Pe.timers = [],
    Pe.fx = en.prototype.init,
    Pe.fx.tick = function() {
        for (var e, t = Pe.timers,
        n = 0; n < t.length; n++)(e = t[n])() || t[n] !== e || t.splice(n--, 1);
        t.length || Pe.fx.stop()
    },
    Pe.fx.timer = function(e) {
        e() && Pe.timers.push(e) && !It && (It = setInterval(Pe.fx.tick, Pe.fx.interval))
    },
    Pe.fx.interval = 13,
    Pe.fx.stop = function() {
        clearInterval(It),
        It = null
    },
    Pe.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    Pe.fx.step = {},
    Pe.expr && Pe.expr.filters && (Pe.expr.filters.animated = function(t) {
        return Pe.grep(Pe.timers,
        function(e) {
            return t === e.elem
        }).length
    });
    var nn = /^(?:body|html)$/i;
    function rn(e) {
        return Pe.isWindow(e) ? e: 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }
    Pe.fn.offset = function(t) {
        if (arguments.length) return t === j ? this: this.each(function(e) {
            Pe.offset.setOffset(this, t, e)
        });
        var e, n, r, i, o, a, s, l = {
            top: 0,
            left: 0
        },
        u = this[0],
        c = u && u.ownerDocument;
        return c ? (n = c.body) === u ? Pe.offset.bodyOffset(u) : (e = c.documentElement, Pe.contains(e, u) ? ("undefined" != typeof u.getBoundingClientRect && (l = u.getBoundingClientRect()), r = rn(c), i = e.clientTop || n.clientTop || 0, o = e.clientLeft || n.clientLeft || 0, a = r.pageYOffset || e.scrollTop, s = r.pageXOffset || e.scrollLeft, {
            top: l.top + a - i,
            left: l.left + s - o
        }) : l) : void 0
    },
    Pe.offset = {
        bodyOffset: function Ii(e) {
            var t = e.offsetTop,
            n = e.offsetLeft;
            return Pe.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(Pe.css(e, "marginTop")) || 0, n += parseFloat(Pe.css(e, "marginLeft")) || 0),
            {
                top: t,
                left: n
            }
        },
        setOffset: function zi(e, t, n) {
            var r = Pe.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i, o, a = Pe(e),
            s = a.offset(),
            l = Pe.css(e, "top"),
            u = Pe.css(e, "left"),
            c = {},
            f = {};
            o = ("absolute" === r || "fixed" === r) && -1 < Pe.inArray("auto", [l, u]) ? (i = (f = a.position()).top, f.left) : (i = parseFloat(l) || 0, parseFloat(u) || 0),
            Pe.isFunction(t) && (t = t.call(e, n, s)),
            null != t.top && (c.top = t.top - s.top + i),
            null != t.left && (c.left = t.left - s.left + o),
            "using" in t ? t.using.call(e, c) : a.css(c)
        }
    },
    Pe.fn.extend({
        position: function Xi() {
            if (this[0]) {
                var e = this[0],
                t = this.offsetParent(),
                n = this.offset(),
                r = nn.test(t[0].nodeName) ? {
                    top: 0,
                    left: 0
                }: t.offset();
                return n.top -= parseFloat(Pe.css(e, "marginTop")) || 0,
                n.left -= parseFloat(Pe.css(e, "marginLeft")) || 0,
                r.top += parseFloat(Pe.css(t[0], "borderTopWidth")) || 0,
                r.left += parseFloat(Pe.css(t[0], "borderLeftWidth")) || 0,
                {
                    top: n.top - r.top,
                    left: n.left - r.left
                }
            }
        },
        offsetParent: function Ui() {
            return this.map(function() {
                for (var e = this.offsetParent || y.body; e && !nn.test(e.nodeName) && "static" === Pe.css(e, "position");) e = e.offsetParent;
                return e || y.body
            })
        }
    }),
    Pe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    },
    function(t, i) {
        var o = /Y/.test(i);
        Pe.fn[t] = function(e) {
            return Pe.access(this,
            function(e, t, n) {
                var r = rn(e);
                if (n === j) return r ? i in r ? r[i] : r.document.documentElement[t] : e[t];
                r ? r.scrollTo(o ? Pe(r).scrollLeft() : n, o ? n: Pe(r).scrollTop()) : e[t] = n
            },
            t, e, arguments.length, null)
        }
    }),
    Pe.each({
        Height: "height",
        Width: "width"
    },
    function(o, a) {
        Pe.each({
            padding: "inner" + o,
            content: a,
            "": "outer" + o
        },
        function(r, e) {
            Pe.fn[e] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                i = r || (!0 === e || !0 === t ? "margin": "border");
                return Pe.access(this,
                function(e, t, n) {
                    var r;
                    return Pe.isWindow(e) ? e.document.documentElement["client" + o] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + o], r["scroll" + o], e.body["offset" + o], r["offset" + o], r["client" + o])) : n === j ? Pe.css(e, t, n, i) : Pe.style(e, t, n, i)
                },
                a, n ? e: j, n, null)
            }
        })
    }),
    m.jQuery = m.$ = Pe,
    "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [],
    function() {
        return Pe
    })
} (window);