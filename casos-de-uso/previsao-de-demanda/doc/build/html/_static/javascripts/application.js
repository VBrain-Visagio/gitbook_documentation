! function(e, t) {
    for (var n in t) e[n] = t[n]
}(window, function(n) {
    var r = {};

    function i(e) {
        if (r[e]) return r[e].exports;
        var t = r[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return n[e].call(t.exports, t, t.exports, i), t.l = !0, t.exports
    }
    return i.m = n, i.c = r, i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.t = function(t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var r in t) i.d(n, r, function(e) {
                return t[e]
            }.bind(null, r));
        return n
    }, i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "", i(i.s = 13)
}([function(e, t, n) {
    "use strict";
    var r = {
            Listener: function() {
                function e(e, t, n) {
                    var r = this;
                    this.els_ = Array.prototype.slice.call("string" == typeof e ? document.querySelectorAll(e) : [].concat(e)), this.handler_ = "function" == typeof n ? {
                        update: n
                    } : n, this.events_ = [].concat(t), this.update_ = function(e) {
                        return r.handler_.update(e)
                    }
                }
                var t = e.prototype;
                return t.listen = function() {
                    var n = this;
                    this.els_.forEach(function(t) {
                        n.events_.forEach(function(e) {
                            t.addEventListener(e, n.update_, !1)
                        })
                    }), "function" == typeof this.handler_.setup && this.handler_.setup()
                }, t.unlisten = function() {
                    var n = this;
                    this.els_.forEach(function(t) {
                        n.events_.forEach(function(e) {
                            t.removeEventListener(e, n.update_)
                        })
                    }), "function" == typeof this.handler_.reset && this.handler_.reset()
                }, e
            }(),
            MatchMedia: function(e, t) {
                this.handler_ = function(e) {
                    e.matches ? t.listen() : t.unlisten()
                };
                var n = window.matchMedia(e);
                n.addListener(this.handler_), this.handler_(n)
            }
        },
        i = {
            Shadow: function() {
                function e(e, t) {
                    var n = "string" == typeof e ? document.querySelector(e) : e;
                    if (!(n instanceof HTMLElement && n.parentNode instanceof HTMLElement)) throw new ReferenceError;
                    if (this.el_ = n.parentNode, !((n = "string" == typeof t ? document.querySelector(t) : t) instanceof HTMLElement)) throw new ReferenceError;
                    this.header_ = n, this.height_ = 0, this.active_ = !1
                }
                var t = e.prototype;
                return t.setup = function() {
                    for (var e = this.el_; e = e.previousElementSibling;) {
                        if (!(e instanceof HTMLElement)) throw new ReferenceError;
                        this.height_ += e.offsetHeight
                    }
                    this.update()
                }, t.update = function(e) {
                    if (!e || "resize" !== e.type && "orientationchange" !== e.type) {
                        var t = window.pageYOffset >= this.height_;
                        t !== this.active_ && (this.header_.dataset.mdState = (this.active_ = t) ? "shadow" : "")
                    } else this.height_ = 0, this.setup()
                }, t.reset = function() {
                    this.header_.dataset.mdState = "", this.height_ = 0, this.active_ = !1
                }, e
            }(),
            Title: function() {
                function e(e, t) {
                    var n = "string" == typeof e ? document.querySelector(e) : e;
                    if (!(n instanceof HTMLElement)) throw new ReferenceError;
                    if (this.el_ = n, !((n = "string" == typeof t ? document.querySelector(t) : t) instanceof HTMLHeadingElement)) throw new ReferenceError;
                    this.header_ = n, this.active_ = !1
                }
                var t = e.prototype;
                return t.setup = function() {
                    var t = this;
                    Array.prototype.forEach.call(this.el_.children, function(e) {
                        e.style.width = t.el_.offsetWidth - 20 + "px"
                    })
                }, t.update = function(e) {
                    var t = this,
                        n = window.pageYOffset >= this.header_.offsetTop;
                    n !== this.active_ && (this.el_.dataset.mdState = (this.active_ = n) ? "active" : ""), "resize" !== e.type && "orientationchange" !== e.type || Array.prototype.forEach.call(this.el_.children, function(e) {
                        e.style.width = t.el_.offsetWidth - 20 + "px"
                    })
                }, t.reset = function() {
                    this.el_.dataset.mdState = "", this.el_.style.width = "", this.active_ = !1
                }, e
            }()
        },
        o = {
            Blur: function() {
                function e(e) {
                    this.els_ = "string" == typeof e ? document.querySelectorAll(e) : e, this.index_ = 0, this.offset_ = window.pageYOffset, this.dir_ = !1, this.anchors_ = [].reduce.call(this.els_, function(e, t) {
                        var n = decodeURIComponent(t.hash);
                        return e.concat(document.getElementById(n.substring(1)) || [])
                    }, [])
                }
                var t = e.prototype;
                return t.setup = function() {
                    this.update()
                }, t.update = function() {
                    var e = window.pageYOffset,
                        t = this.offset_ - e < 0;
                    if (this.dir_ !== t && (this.index_ = this.index_ = t ? 0 : this.els_.length - 1), 0 !== this.anchors_.length) {
                        if (this.offset_ <= e)
                            for (var n = this.index_ + 1; n < this.els_.length && this.anchors_[n].offsetTop - 80 <= e; n++) 0 < n && (this.els_[n - 1].dataset.mdState = "blur"), this.index_ = n;
                        else
                            for (var r = this.index_; 0 <= r; r--) {
                                if (!(this.anchors_[r].offsetTop - 80 > e)) {
                                    this.index_ = r;
                                    break
                                }
                                0 < r && (this.els_[r - 1].dataset.mdState = "")
                            }
                        this.offset_ = e, this.dir_ = t
                    }
                }, t.reset = function() {
                    Array.prototype.forEach.call(this.els_, function(e) {
                        e.dataset.mdState = ""
                    }), this.index_ = 0, this.offset_ = window.pageYOffset
                }, e
            }(),
            Collapse: function() {
                function e(e) {
                    var t = "string" == typeof e ? document.querySelector(e) : e;
                    if (!(t instanceof HTMLElement)) throw new ReferenceError;
                    this.el_ = t
                }
                var t = e.prototype;
                return t.setup = function() {
                    var e = this.el_.getBoundingClientRect().height;
                    this.el_.style.display = e ? "block" : "none", this.el_.style.overflow = e ? "visible" : "hidden"
                }, t.update = function() {
                    var e = this,
                        t = this.el_.getBoundingClientRect().height;
                    this.el_.style.display = "block", this.el_.style.overflow = "";
                    var r = this.el_.previousElementSibling.previousElementSibling.checked;
                    if (r) this.el_.style.maxHeight = t + "px", requestAnimationFrame(function() {
                        e.el_.setAttribute("data-md-state", "animate"), e.el_.style.maxHeight = "0px"
                    });
                    else {
                        this.el_.setAttribute("data-md-state", "expand"), this.el_.style.maxHeight = "";
                        var n = this.el_.getBoundingClientRect().height;
                        this.el_.removeAttribute("data-md-state"), this.el_.style.maxHeight = "0px", requestAnimationFrame(function() {
                            e.el_.setAttribute("data-md-state", "animate"), e.el_.style.maxHeight = n + "px"
                        })
                    }
                    this.el_.addEventListener("transitionend", function e(t) {
                        var n = t.target;
                        if (!(n instanceof HTMLElement)) throw new ReferenceError;
                        n.removeAttribute("data-md-state"), n.style.maxHeight = "", n.style.display = r ? "none" : "block", n.style.overflow = r ? "hidden" : "visible", n.removeEventListener("transitionend", e)
                    }, !1)
                }, t.reset = function() {
                    this.el_.dataset.mdState = "", this.el_.style.maxHeight = "", this.el_.style.display = "", this.el_.style.overflow = ""
                }, e
            }(),
            Scrolling: function() {
                function e(e) {
                    var t = "string" == typeof e ? document.querySelector(e) : e;
                    if (!(t instanceof HTMLElement)) throw new ReferenceError;
                    this.el_ = t
                }
                var t = e.prototype;
                return t.setup = function() {
                    this.el_.children[this.el_.children.length - 1].style.webkitOverflowScrolling = "touch";
                    var e = this.el_.querySelectorAll("[data-md-toggle]");
                    Array.prototype.forEach.call(e, function(e) {
                        if (!(e instanceof HTMLInputElement)) throw new ReferenceError;
                        if (e.checked) {
                            var t = e.nextElementSibling;
                            if (!(t instanceof HTMLElement)) throw new ReferenceError;
                            for (;
                                "NAV" !== t.tagName && t.nextElementSibling;) t = t.nextElementSibling;
                            if (!(e.parentNode instanceof HTMLElement && e.parentNode.parentNode instanceof HTMLElement)) throw new ReferenceError;
                            var n = e.parentNode.parentNode,
                                r = t.children[t.children.length - 1];
                            n.style.webkitOverflowScrolling = "", r.style.webkitOverflowScrolling = "touch"
                        }
                    })
                }, t.update = function(e) {
                    var t = e.target;
                    if (!(t instanceof HTMLElement)) throw new ReferenceError;
                    var n = t.nextElementSibling;
                    if (!(n instanceof HTMLElement)) throw new ReferenceError;
                    for (;
                        "NAV" !== n.tagName && n.nextElementSibling;) n = n.nextElementSibling;
                    if (!(t.parentNode instanceof HTMLElement && t.parentNode.parentNode instanceof HTMLElement)) throw new ReferenceError;
                    var r = t.parentNode.parentNode,
                        i = n.children[n.children.length - 1];
                    if (r.style.webkitOverflowScrolling = "", i.style.webkitOverflowScrolling = "", !t.checked) {
                        n.addEventListener("transitionend", function e() {
                            n instanceof HTMLElement && (r.style.webkitOverflowScrolling = "touch", n.removeEventListener("transitionend", e))
                        }, !1)
                    }
                    if (t.checked) {
                        n.addEventListener("transitionend", function e() {
                            n instanceof HTMLElement && (i.style.webkitOverflowScrolling = "touch", n.removeEventListener("transitionend", e))
                        }, !1)
                    }
                }, t.reset = function() {
                    this.el_.children[1].style.webkitOverflowScrolling = "";
                    var e = this.el_.querySelectorAll("[data-md-toggle]");
                    Array.prototype.forEach.call(e, function(e) {
                        if (!(e instanceof HTMLInputElement)) throw new ReferenceError;
                        if (e.checked) {
                            var t = e.nextElementSibling;
                            if (!(t instanceof HTMLElement)) throw new ReferenceError;
                            for (;
                                "NAV" !== t.tagName && t.nextElementSibling;) t = t.nextElementSibling;
                            if (!(e.parentNode instanceof HTMLElement && e.parentNode.parentNode instanceof HTMLElement)) throw new ReferenceError;
                            var n = e.parentNode.parentNode,
                                r = t.children[t.children.length - 1];
                            n.style.webkitOverflowScrolling = "", r.style.webkitOverflowScrolling = ""
                        }
                    })
                }, e
            }()
        },
        a = {
            Lock: function() {
                function e(e) {
                    var t = "string" == typeof e ? document.querySelector(e) : e;
                    if (!(t instanceof HTMLInputElement)) throw new ReferenceError;
                    if (this.el_ = t, !document.body) throw new ReferenceError;
                    this.lock_ = document.body
                }
                var t = e.prototype;
                return t.setup = function() {
                    this.update()
                }, t.update = function() {
                    var e = this;
                    this.el_.checked ? (this.offset_ = window.pageYOffset, setTimeout(function() {
                        window.scrollTo(0, 0), e.el_.checked && (e.lock_.dataset.mdState = "lock")
                    }, 400)) : (this.lock_.dataset.mdState = "", setTimeout(function() {
                        void 0 !== e.offset_ && window.scrollTo(0, e.offset_)
                    }, 100))
                }, t.reset = function() {
                    "lock" === this.lock_.dataset.mdState && window.scrollTo(0, this.offset_), this.lock_.dataset.mdState = ""
                }, e
            }(),
            Result: n(9).a
        },
        s = {
            Position: function() {
                function e(e, t) {
                    var n = "string" == typeof e ? document.querySelector(e) : e;
                    if (!(n instanceof HTMLElement && n.parentNode instanceof HTMLElement)) throw new ReferenceError;
                    if (this.el_ = n, this.parent_ = n.parentNode, !((n = "string" == typeof t ? document.querySelector(t) : t) instanceof HTMLElement)) throw new ReferenceError;
                    this.header_ = n, this.height_ = 0, this.pad_ = "fixed" === window.getComputedStyle(this.header_).position
                }
                var t = e.prototype;
                return t.setup = function() {
                    var e = Array.prototype.reduce.call(this.parent_.children, function(e, t) {
                        return Math.max(e, t.offsetTop)
                    }, 0);
                    this.offset_ = e - (this.pad_ ? this.header_.offsetHeight : 0), this.update()
                }, t.update = function(e) {
                    var t = window.pageYOffset,
                        n = window.innerHeight;
                    e && "resize" === e.type && this.setup();
                    var r = this.pad_ ? this.header_.offsetHeight : 0,
                        i = this.parent_.offsetTop + this.parent_.offsetHeight,
                        o = n - r - Math.max(0, this.offset_ - t) - Math.max(0, t + n - i);
                    o !== this.height_ && (this.el_.style.height = (this.height_ = o) + "px"), t >= this.offset_ ? "lock" !== this.el_.dataset.mdState && (this.el_.dataset.mdState = "lock") : "lock" === this.el_.dataset.mdState && (this.el_.dataset.mdState = "")
                }, t.reset = function() {
                    this.el_.dataset.mdState = "", this.el_.style.height = "", this.height_ = 0
                }, e
            }()
        },
        c = n(6),
        l = n.n(c);
    var u = {
            Adapter: {
                GitHub: function(o) {
                    var e, t;

                    function n(e) {
                        var t;
                        t = o.call(this, e) || this;
                        var n = /^.+github\.com\/([^/]+)\/?([^/]+)?.*$/.exec(t.base_);
                        if (n && 3 === n.length) {
                            var r = n[1],
                                i = n[2];
                            t.base_ = "https://api.github.com/users/" + r + "/repos", t.name_ = i
                        }
                        return t
                    }
                    return t = o, (e = n).prototype = Object.create(t.prototype), (e.prototype.constructor = e).__proto__ = t, n.prototype.fetch_ = function() {
                        var i = this;
                        return function n(r) {
                            return void 0 === r && (r = 0), fetch(i.base_ + "?per_page=30&page=" + r).then(function(e) {
                                return e.json()
                            }).then(function(e) {
                                if (!(e instanceof Array)) throw new TypeError;
                                if (i.name_) {
                                    var t = e.find(function(e) {
                                        return e.name === i.name_
                                    });
                                    return t || 30 !== e.length ? t ? [i.format_(t.stargazers_count) + " Stars", i.format_(t.forks_count) + " Forks"] : [] : n(r + 1)
                                }
                                return [e.length + " Repositories"]
                            })
                        }()
                    }, n
                }(function() {
                    function e(e) {
                        var t = "string" == typeof e ? document.querySelector(e) : e;
                        if (!(t instanceof HTMLAnchorElement)) throw new ReferenceError;
                        this.el_ = t, this.base_ = this.el_.href, this.salt_ = this.hash_(this.base_)
                    }
                    var t = e.prototype;
                    return t.fetch = function() {
                        var n = this;
                        return new Promise(function(t) {
                            var e = l.a.getJSON(n.salt_ + ".cache-source");
                            void 0 !== e ? t(e) : n.fetch_().then(function(e) {
                                l.a.set(n.salt_ + ".cache-source", e, {
                                    expires: 1 / 96
                                }), t(e)
                            })
                        })
                    }, t.fetch_ = function() {
                        throw new Error("fetch_(): Not implemented")
                    }, t.format_ = function(e) {
                        return 1e4 < e ? (e / 1e3).toFixed(0) + "k" : 1e3 < e ? (e / 1e3).toFixed(1) + "k" : "" + e
                    }, t.hash_ = function(e) {
                        var t = 0;
                        if (0 === e.length) return t;
                        for (var n = 0, r = e.length; n < r; n++) t = (t << 5) - t + e.charCodeAt(n), t |= 0;
                        return t
                    }, e
                }())
            },
            Repository: n(10).a
        },
        f = {
            Toggle: function() {
                function e(e) {
                    var t = "string" == typeof e ? document.querySelector(e) : e;
                    if (!(t instanceof Node)) throw new ReferenceError;
                    this.el_ = t;
                    var n = document.querySelector("[data-md-component=header]");
                    this.height_ = n.offsetHeight, this.active_ = !1
                }
                var t = e.prototype;
                return t.update = function() {
                    var e = window.pageYOffset >= this.el_.children[0].offsetTop + (5 - this.height_);
                    e !== this.active_ && (this.el_.dataset.mdState = (this.active_ = e) ? "hidden" : "")
                }, t.reset = function() {
                    this.el_.dataset.mdState = "", this.active_ = !1
                }, e
            }()
        };
    t.a = {
        Event: r,
        Header: i,
        Nav: o,
        Search: a,
        Sidebar: s,
        Source: u,
        Tabs: f
    }
}, function(t, e, n) {
    (function(e) {
        t.exports = e.lunr = n(24)
    }).call(this, n(4))
}, function(e, f, d) {
    "use strict";
    (function(t) {
        var e = d(8),
            n = setTimeout;

        function r() {}

        function o(e) {
            if (!(this instanceof o)) throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof e) throw new TypeError("not a function");
            this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], u(e, this)
        }

        function i(n, r) {
            for (; 3 === n._state;) n = n._value;
            0 !== n._state ? (n._handled = !0, o._immediateFn(function() {
                var e = 1 === n._state ? r.onFulfilled : r.onRejected;
                if (null !== e) {
                    var t;
                    try {
                        t = e(n._value)
                    } catch (e) {
                        return void s(r.promise, e)
                    }
                    a(r.promise, t)
                } else(1 === n._state ? a : s)(r.promise, n._value)
            })) : n._deferreds.push(r)
        }

        function a(t, e) {
            try {
                if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
                if (e && ("object" == typeof e || "function" == typeof e)) {
                    var n = e.then;
                    if (e instanceof o) return t._state = 3, t._value = e, void c(t);
                    if ("function" == typeof n) return void u((r = n, i = e, function() {
                        r.apply(i, arguments)
                    }), t)
                }
                t._state = 1, t._value = e, c(t)
            } catch (e) {
                s(t, e)
            }
            var r, i
        }

        function s(e, t) {
            e._state = 2, e._value = t, c(e)
        }

        function c(e) {
            2 === e._state && 0 === e._deferreds.length && o._immediateFn(function() {
                e._handled || o._unhandledRejectionFn(e._value)
            });
            for (var t = 0, n = e._deferreds.length; t < n; t++) i(e, e._deferreds[t]);
            e._deferreds = null
        }

        function l(e, t, n) {
            this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n
        }

        function u(e, t) {
            var n = !1;
            try {
                e(function(e) {
                    n || (n = !0, a(t, e))
                }, function(e) {
                    n || (n = !0, s(t, e))
                })
            } catch (e) {
                if (n) return;
                n = !0, s(t, e)
            }
        }
        o.prototype.catch = function(e) {
            return this.then(null, e)
        }, o.prototype.then = function(e, t) {
            var n = new this.constructor(r);
            return i(this, new l(e, t, n)), n
        }, o.prototype.finally = e.a, o.all = function(t) {
            return new o(function(r, i) {
                if (!t || void 0 === t.length) throw new TypeError("Promise.all accepts an array");
                var o = Array.prototype.slice.call(t);
                if (0 === o.length) return r([]);
                var a = o.length;

                function s(t, e) {
                    try {
                        if (e && ("object" == typeof e || "function" == typeof e)) {
                            var n = e.then;
                            if ("function" == typeof n) return void n.call(e, function(e) {
                                s(t, e)
                            }, i)
                        }
                        o[t] = e, 0 == --a && r(o)
                    } catch (e) {
                        i(e)
                    }
                }
                for (var e = 0; e < o.length; e++) s(e, o[e])
            })
        }, o.resolve = function(t) {
            return t && "object" == typeof t && t.constructor === o ? t : new o(function(e) {
                e(t)
            })
        }, o.reject = function(n) {
            return new o(function(e, t) {
                t(n)
            })
        }, o.race = function(i) {
            return new o(function(e, t) {
                for (var n = 0, r = i.length; n < r; n++) i[n].then(e, t)
            })
        }, o._immediateFn = "function" == typeof t && function(e) {
            t(e)
        } || function(e) {
            n(e, 0)
        }, o._unhandledRejectionFn = function(e) {
            "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
        }, f.a = o
    }).call(this, d(21).setImmediate)
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        var n = document.createElement(e);
        t && Array.prototype.forEach.call(Object.keys(t), function(e) {
            n.setAttribute(e, t[e])
        });
        for (var r = arguments.length, i = new Array(2 < r ? r - 2 : 0), o = 2; o < r; o++) i[o - 2] = arguments[o];
        return function t(e) {
            Array.prototype.forEach.call(e, function(e) {
                "string" == typeof e || "number" == typeof e ? n.textContent += e : Array.isArray(e) ? t(e) : void 0 !== e.__html ? n.innerHTML += e.__html : e instanceof Node && n.appendChild(e)
            })
        }(i), n
    }
    n.r(t), n.d(t, "createElement", function() {
        return r
    })
}, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function(e, t, n) {
    var r;
    r = function() {
        return function(n) {
            var r = {};

            function i(e) {
                if (r[e]) return r[e].exports;
                var t = r[e] = {
                    i: e,
                    l: !1,
                    exports: {}
                };
                return n[e].call(t.exports, t, t.exports, i), t.l = !0, t.exports
            }
            return i.m = n, i.c = r, i.d = function(e, t, n) {
                i.o(e, t) || Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: n
                })
            }, i.r = function(e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }, i.t = function(t, e) {
                if (1 & e && (t = i(t)), 8 & e) return t;
                if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                var n = Object.create(null);
                if (i.r(n), Object.defineProperty(n, "default", {
                        enumerable: !0,
                        value: t
                    }), 2 & e && "string" != typeof t)
                    for (var r in t) i.d(n, r, function(e) {
                        return t[e]
                    }.bind(null, r));
                return n
            }, i.n = function(e) {
                var t = e && e.__esModule ? function() {
                    return e.default
                } : function() {
                    return e
                };
                return i.d(t, "a", t), t
            }, i.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, i.p = "", i(i.s = 0)
        }([function(e, t, n) {
            "use strict";
            var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                o = function() {
                    function r(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(e, t, n) {
                        return t && r(e.prototype, t), n && r(e, n), e
                    }
                }(),
                a = r(n(1)),
                s = r(n(3)),
                c = r(n(4));

            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var l = function(e) {
                function r(e, t) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, r);
                    var n = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this));
                    return n.resolveOptions(t), n.listenClick(e), n
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(r, s.default), o(r, [{
                    key: "resolveOptions",
                    value: function() {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                        this.action = "function" == typeof e.action ? e.action : this.defaultAction, this.target = "function" == typeof e.target ? e.target : this.defaultTarget, this.text = "function" == typeof e.text ? e.text : this.defaultText, this.container = "object" === i(e.container) ? e.container : document.body
                    }
                }, {
                    key: "listenClick",
                    value: function(e) {
                        var t = this;
                        this.listener = (0, c.default)(e, "click", function(e) {
                            return t.onClick(e)
                        })
                    }
                }, {
                    key: "onClick",
                    value: function(e) {
                        var t = e.delegateTarget || e.currentTarget;
                        this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new a.default({
                            action: this.action(t),
                            target: this.target(t),
                            text: this.text(t),
                            container: this.container,
                            trigger: t,
                            emitter: this
                        })
                    }
                }, {
                    key: "defaultAction",
                    value: function(e) {
                        return u("action", e)
                    }
                }, {
                    key: "defaultTarget",
                    value: function(e) {
                        var t = u("target", e);
                        if (t) return document.querySelector(t)
                    }
                }, {
                    key: "defaultText",
                    value: function(e) {
                        return u("text", e)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
                    }
                }], [{
                    key: "isSupported",
                    value: function() {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                            t = "string" == typeof e ? [e] : e,
                            n = !!document.queryCommandSupported;
                        return t.forEach(function(e) {
                            n = n && !!document.queryCommandSupported(e)
                        }), n
                    }
                }]), r
            }();

            function u(e, t) {
                var n = "data-clipboard-" + e;
                if (t.hasAttribute(n)) return t.getAttribute(n)
            }
            e.exports = l
        }, function(e, t, n) {
            "use strict";
            var r, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                o = function() {
                    function r(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(e, t, n) {
                        return t && r(e.prototype, t), n && r(e, n), e
                    }
                }(),
                a = n(2),
                s = (r = a) && r.__esModule ? r : {
                    default: r
                };
            var c = function() {
                function t(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.resolveOptions(e), this.initSelection()
                }
                return o(t, [{
                    key: "resolveOptions",
                    value: function() {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                        this.action = e.action, this.container = e.container, this.emitter = e.emitter, this.target = e.target, this.text = e.text, this.trigger = e.trigger, this.selectedText = ""
                    }
                }, {
                    key: "initSelection",
                    value: function() {
                        this.text ? this.selectFake() : this.target && this.selectTarget()
                    }
                }, {
                    key: "selectFake",
                    value: function() {
                        var e = this,
                            t = "rtl" == document.documentElement.getAttribute("dir");
                        this.removeFake(), this.fakeHandlerCallback = function() {
                            return e.removeFake()
                        }, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[t ? "right" : "left"] = "-9999px";
                        var n = window.pageYOffset || document.documentElement.scrollTop;
                        this.fakeElem.style.top = n + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = (0, s.default)(this.fakeElem), this.copyText()
                    }
                }, {
                    key: "removeFake",
                    value: function() {
                        this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null)
                    }
                }, {
                    key: "selectTarget",
                    value: function() {
                        this.selectedText = (0, s.default)(this.target), this.copyText()
                    }
                }, {
                    key: "copyText",
                    value: function() {
                        var t = void 0;
                        try {
                            t = document.execCommand(this.action)
                        } catch (e) {
                            t = !1
                        }
                        this.handleResult(t)
                    }
                }, {
                    key: "handleResult",
                    value: function(e) {
                        this.emitter.emit(e ? "success" : "error", {
                            action: this.action,
                            text: this.selectedText,
                            trigger: this.trigger,
                            clearSelection: this.clearSelection.bind(this)
                        })
                    }
                }, {
                    key: "clearSelection",
                    value: function() {
                        this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges()
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.removeFake()
                    }
                }, {
                    key: "action",
                    set: function() {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "copy";
                        if (this._action = e, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
                    },
                    get: function() {
                        return this._action
                    }
                }, {
                    key: "target",
                    set: function(e) {
                        if (void 0 !== e) {
                            if (!e || "object" !== (void 0 === e ? "undefined" : i(e)) || 1 !== e.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                            if ("copy" === this.action && e.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                            if ("cut" === this.action && (e.hasAttribute("readonly") || e.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                            this._target = e
                        }
                    },
                    get: function() {
                        return this._target
                    }
                }]), t
            }();
            e.exports = c
        }, function(e, t) {
            e.exports = function(e) {
                var t;
                if ("SELECT" === e.nodeName) e.focus(), t = e.value;
                else if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) {
                    var n = e.hasAttribute("readonly");
                    n || e.setAttribute("readonly", ""), e.select(), e.setSelectionRange(0, e.value.length), n || e.removeAttribute("readonly"), t = e.value
                } else {
                    e.hasAttribute("contenteditable") && e.focus();
                    var r = window.getSelection(),
                        i = document.createRange();
                    i.selectNodeContents(e), r.removeAllRanges(), r.addRange(i), t = r.toString()
                }
                return t
            }
        }, function(e, t) {
            function n() {}
            n.prototype = {
                on: function(e, t, n) {
                    var r = this.e || (this.e = {});
                    return (r[e] || (r[e] = [])).push({
                        fn: t,
                        ctx: n
                    }), this
                },
                once: function(e, t, n) {
                    var r = this;

                    function i() {
                        r.off(e, i), t.apply(n, arguments)
                    }
                    return i._ = t, this.on(e, i, n)
                },
                emit: function(e) {
                    for (var t = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[e] || []).slice(), r = 0, i = n.length; r < i; r++) n[r].fn.apply(n[r].ctx, t);
                    return this
                },
                off: function(e, t) {
                    var n = this.e || (this.e = {}),
                        r = n[e],
                        i = [];
                    if (r && t)
                        for (var o = 0, a = r.length; o < a; o++) r[o].fn !== t && r[o].fn._ !== t && i.push(r[o]);
                    return i.length ? n[e] = i : delete n[e], this
                }
            }, e.exports = n
        }, function(e, t, n) {
            var d = n(5),
                h = n(6);
            e.exports = function(e, t, n) {
                if (!e && !t && !n) throw new Error("Missing required arguments");
                if (!d.string(t)) throw new TypeError("Second argument must be a String");
                if (!d.fn(n)) throw new TypeError("Third argument must be a Function");
                if (d.node(e)) return u = t, f = n, (l = e).addEventListener(u, f), {
                    destroy: function() {
                        l.removeEventListener(u, f)
                    }
                };
                if (d.nodeList(e)) return a = e, s = t, c = n, Array.prototype.forEach.call(a, function(e) {
                    e.addEventListener(s, c)
                }), {
                    destroy: function() {
                        Array.prototype.forEach.call(a, function(e) {
                            e.removeEventListener(s, c)
                        })
                    }
                };
                if (d.string(e)) return r = e, i = t, o = n, h(document.body, r, i, o);
                throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
                var r, i, o, a, s, c, l, u, f
            }
        }, function(e, n) {
            n.node = function(e) {
                return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType
            }, n.nodeList = function(e) {
                var t = Object.prototype.toString.call(e);
                return void 0 !== e && ("[object NodeList]" === t || "[object HTMLCollection]" === t) && "length" in e && (0 === e.length || n.node(e[0]))
            }, n.string = function(e) {
                return "string" == typeof e || e instanceof String
            }, n.fn = function(e) {
                return "[object Function]" === Object.prototype.toString.call(e)
            }
        }, function(e, t, n) {
            var a = n(7);

            function o(e, t, n, r, i) {
                var o = function(t, n, e, r) {
                    return function(e) {
                        e.delegateTarget = a(e.target, n), e.delegateTarget && r.call(t, e)
                    }
                }.apply(this, arguments);
                return e.addEventListener(n, o, i), {
                    destroy: function() {
                        e.removeEventListener(n, o, i)
                    }
                }
            }
            e.exports = function(e, t, n, r, i) {
                return "function" == typeof e.addEventListener ? o.apply(null, arguments) : "function" == typeof n ? o.bind(null, document).apply(null, arguments) : ("string" == typeof e && (e = document.querySelectorAll(e)), Array.prototype.map.call(e, function(e) {
                    return o(e, t, n, r, i)
                }))
            }
        }, function(e, t) {
            if ("undefined" != typeof Element && !Element.prototype.matches) {
                var n = Element.prototype;
                n.matches = n.matchesSelector || n.mozMatchesSelector || n.msMatchesSelector || n.oMatchesSelector || n.webkitMatchesSelector
            }
            e.exports = function(e, t) {
                for (; e && 9 !== e.nodeType;) {
                    if ("function" == typeof e.matches && e.matches(t)) return e;
                    e = e.parentNode
                }
            }
        }])
    }, e.exports = r()
}, function(r, i, o) {
    var a, s;
    ! function(e) {
        if (void 0 === (s = "function" == typeof(a = e) ? a.call(i, o, i, r) : a) || (r.exports = s), !0, r.exports = e(), !!0) {
            var t = window.Cookies,
                n = window.Cookies = e();
            n.noConflict = function() {
                return window.Cookies = t, n
            }
        }
    }(function() {
        function m() {
            for (var e = 0, t = {}; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) t[r] = n[r]
            }
            return t
        }
        return function e(h) {
            function p(e, t, n) {
                var r;
                if ("undefined" != typeof document) {
                    if (1 < arguments.length) {
                        if ("number" == typeof(n = m({
                                path: "/"
                            }, p.defaults, n)).expires) {
                            var i = new Date;
                            i.setMilliseconds(i.getMilliseconds() + 864e5 * n.expires), n.expires = i
                        }
                        n.expires = n.expires ? n.expires.toUTCString() : "";
                        try {
                            r = JSON.stringify(t), /^[\{\[]/.test(r) && (t = r)
                        } catch (e) {}
                        t = h.write ? h.write(t, e) : encodeURIComponent(String(t)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), e = (e = (e = encodeURIComponent(String(e))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
                        var o = "";
                        for (var a in n) n[a] && (o += "; " + a, !0 !== n[a] && (o += "=" + n[a]));
                        return document.cookie = e + "=" + t + o
                    }
                    e || (r = {});
                    for (var s = document.cookie ? document.cookie.split("; ") : [], c = /(%[0-9A-Z]{2})+/g, l = 0; l < s.length; l++) {
                        var u = s[l].split("="),
                            f = u.slice(1).join("=");
                        this.json || '"' !== f.charAt(0) || (f = f.slice(1, -1));
                        try {
                            var d = u[0].replace(c, decodeURIComponent);
                            if (f = h.read ? h.read(f, d) : h(f, d) || f.replace(c, decodeURIComponent), this.json) try {
                                f = JSON.parse(f)
                            } catch (e) {}
                            if (e === d) {
                                r = f;
                                break
                            }
                            e || (r[d] = f)
                        } catch (e) {}
                    }
                    return r
                }
            }
            return (p.set = p).get = function(e) {
                return p.call(p, e)
            }, p.getJSON = function() {
                return p.apply({
                    json: !0
                }, [].slice.call(arguments))
            }, p.defaults = {}, p.remove = function(e, t) {
                p(e, "", m(t, {
                    expires: -1
                }))
            }, p.withConverter = e, p
        }(function() {})
    })
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var r = "function" == typeof fetch ? fetch.bind() : function(i, o) {
        return o = o || {}, new Promise(function(e, t) {
            var n = new XMLHttpRequest;
            for (var r in n.open(o.method || "get", i, !0), o.headers) n.setRequestHeader(r, o.headers[r]);

            function s() {
                var r, i = [],
                    o = [],
                    a = {};
                return n.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(e, t, n) {
                    i.push(t = t.toLowerCase()), o.push([t, n]), r = a[t], a[t] = r ? r + "," + n : n
                }), {
                    ok: 2 == (n.status / 100 | 0),
                    status: n.status,
                    statusText: n.statusText,
                    url: n.responseURL,
                    clone: s,
                    text: function() {
                        return Promise.resolve(n.responseText)
                    },
                    json: function() {
                        return Promise.resolve(n.responseText).then(JSON.parse)
                    },
                    blob: function() {
                        return Promise.resolve(new Blob([n.response]))
                    },
                    headers: {
                        keys: function() {
                            return i
                        },
                        entries: function() {
                            return o
                        },
                        get: function(e) {
                            return a[e.toLowerCase()]
                        },
                        has: function(e) {
                            return e.toLowerCase() in a
                        }
                    }
                }
            }
            n.withCredentials = "include" == o.credentials, n.onload = function() {
                e(s())
            }, n.onerror = t, n.send(o.body || null)
        })
    };
    t.default = r
}, function(e, t, n) {
    "use strict";
    t.a = function(t) {
        var n = this.constructor;
        return this.then(function(e) {
            return n.resolve(t()).then(function() {
                return e
            })
        }, function(e) {
            return n.resolve(t()).then(function() {
                return n.reject(e)
            })
        })
    }
}, function(e, n, r) {
    "use strict";
    (function(f) {
        r.d(n, "a", function() {
            return t
        });
        var e = r(1),
            d = r.n(e),
            h = function(e) {
                var t = document.getElementsByName("lang:" + e)[0];
                if (!(t instanceof HTMLMetaElement)) throw new ReferenceError;
                return t.content
            },
            t = function() {
                function e(e, t) {
                    var n = "string" == typeof e ? document.querySelector(e) : e;
                    if (!(n instanceof HTMLElement)) throw new ReferenceError;
                    this.el_ = n;
                    var r = Array.prototype.slice.call(this.el_.children),
                        i = r[0],
                        o = r[1];
                    this.data_ = t, this.meta_ = i, this.list_ = o, this.message_ = {
                        placeholder: this.meta_.textContent,
                        none: h("search.result.none"),
                        one: h("search.result.one"),
                        other: h("search.result.other")
                    };
                    var a = h("search.tokenizer");
                    a.length && (d.a.tokenizer.separator = a), this.lang_ = h("search.language").split(",").filter(Boolean).map(function(e) {
                        return e.trim()
                    })
                }
                return e.prototype.update = function(e) {
                    var t, a = this;
                    if ("focus" !== e.type || this.index_) {
                        if ("focus" === e.type || "keyup" === e.type) {
                            var n = e.target;
                            if (!(n instanceof HTMLInputElement)) throw new ReferenceError;
                            if (!this.index_ || n.value === this.value_) return;
                            for (; this.list_.firstChild;) this.list_.removeChild(this.list_.firstChild);
                            if (this.value_ = n.value, 0 === this.value_.length) return void(this.meta_.textContent = this.message_.placeholder);
                            var r = this.index_.query(function(t) {
                                    a.value_.toLowerCase().split(" ").filter(Boolean).forEach(function(e) {
                                        t.term(e, {
                                            wildcard: d.a.Query.wildcard.TRAILING
                                        })
                                    })
                                }).reduce(function(e, t) {
                                    var n = a.docs_.get(t.ref);
                                    if (n.parent) {
                                        var r = n.parent.location;
                                        e.set(r, (e.get(r) || []).concat(t))
                                    } else {
                                        var i = n.location;
                                        e.set(i, e.get(i) || [])
                                    }
                                    return e
                                }, new Map),
                                i = (t = this.value_.trim(), t.replace(/[|\\{}()[\]^$+*?.-]/g, "\\$&")).replace(new RegExp(d.a.tokenizer.separator, "img"), "|"),
                                s = new RegExp("(^|" + d.a.tokenizer.separator + ")(" + i + ")", "img"),
                                c = function(e, t, n) {
                                    return t + "<em>" + n + "</em>"
                                };
                            this.stack_ = [], r.forEach(function(e, t) {
                                var n, r = a.docs_.get(t),
                                    i = f.createElement("li", {
                                        class: "md-search-result__item"
                                    }, f.createElement("a", {
                                        href: r.location,
                                        title: r.title,
                                        class: "md-search-result__link",
                                        tabindex: "-1"
                                    }, f.createElement("article", {
                                        class: "md-search-result__article md-search-result__article--document"
                                    }, f.createElement("h1", {
                                        class: "md-search-result__title"
                                    }, {
                                        __html: r.title.replace(s, c)
                                    }), r.text.length ? f.createElement("p", {
                                        class: "md-search-result__teaser"
                                    }, {
                                        __html: r.text.replace(s, c)
                                    }) : {}))),
                                    o = e.map(function(t) {
                                        return function() {
                                            var e = a.docs_.get(t.ref);
                                            i.appendChild(f.createElement("a", {
                                                href: e.location,
                                                title: e.title,
                                                class: "md-search-result__link",
                                                "data-md-rel": "anchor",
                                                tabindex: "-1"
                                            }, f.createElement("article", {
                                                class: "md-search-result__article"
                                            }, f.createElement("h1", {
                                                class: "md-search-result__title"
                                            }, {
                                                __html: e.title.replace(s, c)
                                            }), e.text.length ? f.createElement("p", {
                                                class: "md-search-result__teaser"
                                            }, {
                                                __html: function(e, t) {
                                                    var n = t;
                                                    if (e.length > n) {
                                                        for (;
                                                            " " !== e[n] && 0 < --n;);
                                                        return e.substring(0, n) + "..."
                                                    }
                                                    return e
                                                }(e.text.replace(s, c), 400)
                                            }) : {})))
                                        }
                                    });
                                (n = a.stack_).push.apply(n, [function() {
                                    return a.list_.appendChild(i)
                                }].concat(o))
                            });
                            var o = this.el_.parentNode;
                            if (!(o instanceof HTMLElement)) throw new ReferenceError;
                            for (; this.stack_.length && o.offsetHeight >= o.scrollHeight - 16;) this.stack_.shift()();
                            var l = this.list_.querySelectorAll("[data-md-rel=anchor]");
                            switch (Array.prototype.forEach.call(l, function(r) {
                                ["click", "keydown"].forEach(function(n) {
                                    r.addEventListener(n, function(e) {
                                        if ("keydown" !== n || 13 === e.keyCode) {
                                            var t = document.querySelector("[data-md-toggle=search]");
                                            if (!(t instanceof HTMLInputElement)) throw new ReferenceError;
                                            t.checked && (t.checked = !1, t.dispatchEvent(new CustomEvent("change"))), e.preventDefault(), setTimeout(function() {
                                                document.location.href = r.href
                                            }, 100)
                                        }
                                    })
                                })
                            }), r.size) {
                                case 0:
                                    this.meta_.textContent = this.message_.none;
                                    break;
                                case 1:
                                    this.meta_.textContent = this.message_.one;
                                    break;
                                default:
                                    this.meta_.textContent = this.message_.other.replace("#", r.size)
                            }
                        }
                    } else {
                        var u = function(e) {
                            a.docs_ = e.reduce(function(e, t) {
                                var n, r, i, o = t.location.split("#"),
                                    a = o[0],
                                    s = o[1];
                                return t.text = (n = t.text, r = document.createTextNode(n), (i = document.createElement("p")).appendChild(r), i.innerHTML), s && (t.parent = e.get(a), t.parent && !t.parent.done && (t.parent.title = t.title, t.parent.text = t.text, t.parent.done = !0)), t.text = t.text.replace(/\n/g, " ").replace(/\s+/g, " ").replace(/\s+([,.:;!?])/g, function(e, t) {
                                    return t
                                }), t.parent && t.parent.title === t.title || e.set(t.location, t), e
                            }, new Map);
                            var i = a.docs_,
                                o = a.lang_;
                            a.stack_ = [], a.index_ = d()(function() {
                                var e, t = this,
                                    n = {
                                        "search.pipeline.trimmer": d.a.trimmer,
                                        "search.pipeline.stopwords": d.a.stopWordFilter
                                    },
                                    r = Object.keys(n).reduce(function(e, t) {
                                        return h(t).match(/^false$/i) || e.push(n[t]), e
                                    }, []);
                                this.pipeline.reset(), r && (e = this.pipeline).add.apply(e, r), 1 === o.length && "en" !== o[0] && d.a[o[0]] ? this.use(d.a[o[0]]) : 1 < o.length && this.use(d.a.multiLanguage.apply(d.a, o)), this.field("title", {
                                    boost: 10
                                }), this.field("text"), this.ref("location"), i.forEach(function(e) {
                                    return t.add(e)
                                })
                            });
                            var t = a.el_.parentNode;
                            if (!(t instanceof HTMLElement)) throw new ReferenceError;
                            t.addEventListener("scroll", function() {
                                for (; a.stack_.length && t.scrollTop + t.offsetHeight >= t.scrollHeight - 16;) a.stack_.splice(0, 10).forEach(function(e) {
                                    return e()
                                })
                            })
                        };
                        setTimeout(function() {
                            return "function" == typeof a.data_ ? a.data_().then(u) : u(a.data_)
                        }, 250)
                    }
                }, e
            }()
    }).call(this, r(3))
}, function(e, n, r) {
    "use strict";
    (function(t) {
        r.d(n, "a", function() {
            return e
        });
        var e = function() {
            function e(e) {
                var t = "string" == typeof e ? document.querySelector(e) : e;
                if (!(t instanceof HTMLElement)) throw new ReferenceError;
                this.el_ = t
            }
            return e.prototype.initialize = function(e) {
                e.length && this.el_.children.length && this.el_.children[this.el_.children.length - 1].appendChild(t.createElement("ul", {
                    class: "md-source__facts"
                }, e.map(function(e) {
                    return t.createElement("li", {
                        class: "md-source__fact"
                    }, e)
                }))), this.el_.dataset.mdState = "done"
            }, e
        }()
    }).call(this, r(3))
}, , , function(e, n, c) {
    "use strict";
    c.r(n),
        function(o) {
            c.d(n, "app", function() {
                return t
            });
            c(14), c(15), c(16), c(17), c(18), c(19), c(20);
            var r = c(2),
                e = c(5),
                a = c.n(e),
                i = c(0);
            window.Promise = window.Promise || r.a;
            var s = function(e) {
                var t = document.getElementsByName("lang:" + e)[0];
                if (!(t instanceof HTMLMetaElement)) throw new ReferenceError;
                return t.content
            };
            var t = {
                initialize: function(t) {
                    new i.a.Event.Listener(document, "DOMContentLoaded", function() {
                        if (!(document.body instanceof HTMLElement)) throw new ReferenceError;
                        Modernizr.addTest("ios", function() {
                            return !!navigator.userAgent.match(/(iPad|iPhone|iPod)/g)
                        });
                        var e = document.querySelectorAll("table:not([class])");
                        if (Array.prototype.forEach.call(e, function(e) {
                                var t = o.createElement("div", {
                                    class: "md-typeset__scrollwrap"
                                }, o.createElement("div", {
                                    class: "md-typeset__table"
                                }));
                                e.nextSibling ? e.parentNode.insertBefore(t, e.nextSibling) : e.parentNode.appendChild(t), t.children[0].appendChild(e)
                            }), a.a.isSupported()) {
                            var t = document.querySelectorAll(".codehilite > pre, pre > code");
                            Array.prototype.forEach.call(t, function(e, t) {
                                var n = "__code_" + t,
                                    r = o.createElement("button", {
                                        class: "md-clipboard",
                                        title: s("clipboard.copy"),
                                        "data-clipboard-target": "#" + n + " pre, #" + n + " code"
                                    }, o.createElement("span", {
                                        class: "md-clipboard__message"
                                    })),
                                    i = e.parentNode;
                                i.id = n, i.insertBefore(r, e)
                            }), new a.a(".md-clipboard").on("success", function(e) {
                                var t = e.trigger.querySelector(".md-clipboard__message");
                                if (!(t instanceof HTMLElement)) throw new ReferenceError;
                                e.clearSelection(), t.dataset.mdTimer && clearTimeout(parseInt(t.dataset.mdTimer, 10)), t.classList.add("md-clipboard__message--active"), t.innerHTML = s("clipboard.copied"), t.dataset.mdTimer = setTimeout(function() {
                                    t.classList.remove("md-clipboard__message--active"), t.dataset.mdTimer = ""
                                }, 2e3).toString()
                            })
                        }
                        if (!Modernizr.details) {
                            var n = document.querySelectorAll("details > summary");
                            Array.prototype.forEach.call(n, function(e) {
                                e.addEventListener("click", function(e) {
                                    var t = e.target.parentNode;
                                    t.hasAttribute("open") ? t.removeAttribute("open") : t.setAttribute("open", "")
                                })
                            })
                        }
                        var r = function() {
                            if (document.location.hash) {
                                var e = document.getElementById(document.location.hash.substring(1));
                                if (!e) return;
                                for (var t = e.parentNode; t && !(t instanceof HTMLDetailsElement);) t = t.parentNode;
                                if (t && !t.open) {
                                    t.open = !0;
                                    var n = location.hash;
                                    location.hash = " ", location.hash = n
                                }
                            }
                        };
                        if (window.addEventListener("hashchange", r), r(), Modernizr.ios) {
                            var i = document.querySelectorAll("[data-md-scrollfix]");
                            Array.prototype.forEach.call(i, function(t) {
                                t.addEventListener("touchstart", function() {
                                    var e = t.scrollTop;
                                    0 === e ? t.scrollTop = 1 : e + t.offsetHeight === t.scrollHeight && (t.scrollTop = e - 1)
                                })
                            })
                        }
                    }).listen(), new i.a.Event.Listener(window, ["scroll", "resize", "orientationchange"], new i.a.Header.Shadow("[data-md-component=container]", "[data-md-component=header]")).listen(), new i.a.Event.Listener(window, ["scroll", "resize", "orientationchange"], new i.a.Header.Title("[data-md-component=title]", ".md-typeset h1")).listen(), document.querySelector("[data-md-component=hero]") && new i.a.Event.Listener(window, ["scroll", "resize", "orientationchange"], new i.a.Tabs.Toggle("[data-md-component=hero]")).listen(), document.querySelector("[data-md-component=tabs]") && new i.a.Event.Listener(window, ["scroll", "resize", "orientationchange"], new i.a.Tabs.Toggle("[data-md-component=tabs]")).listen(), new i.a.Event.MatchMedia("(min-width: 1220px)", new i.a.Event.Listener(window, ["scroll", "resize", "orientationchange"], new i.a.Sidebar.Position("[data-md-component=navigation]", "[data-md-component=header]"))), document.querySelector("[data-md-component=toc]") && new i.a.Event.MatchMedia("(min-width: 960px)", new i.a.Event.Listener(window, ["scroll", "resize", "orientationchange"], new i.a.Sidebar.Position("[data-md-component=toc]", "[data-md-component=header]"))), new i.a.Event.MatchMedia("(min-width: 960px)", new i.a.Event.Listener(window, "scroll", new i.a.Nav.Blur("[data-md-component=toc] .md-nav__link")));
                    var e = document.querySelectorAll("[data-md-component=collapsible]");
                    Array.prototype.forEach.call(e, function(e) {
                            new i.a.Event.MatchMedia("(min-width: 1220px)", new i.a.Event.Listener(e.previousElementSibling, "click", new i.a.Nav.Collapse(e)))
                        }), new i.a.Event.MatchMedia("(max-width: 1219px)", new i.a.Event.Listener("[data-md-component=navigation] [data-md-toggle]", "change", new i.a.Nav.Scrolling("[data-md-component=navigation] nav"))), document.querySelector("[data-md-component=search]") && (new i.a.Event.MatchMedia("(max-width: 959px)", new i.a.Event.Listener("[data-md-toggle=search]", "change", new i.a.Search.Lock("[data-md-toggle=search]")))),
                        new i.a.Event.Listener(document.body, "keydown", function(e) {
                            if (9 === e.keyCode) {
                                var t = document.querySelectorAll("[data-md-component=navigation] .md-nav__link[for]:not([tabindex])");
                                Array.prototype.forEach.call(t, function(e) {
                                    e.offsetHeight && (e.tabIndex = 0)
                                })
                            }
                        }).listen(), new i.a.Event.Listener(document.body, "mousedown", function() {
                            var e = document.querySelectorAll("[data-md-component=navigation] .md-nav__link[tabindex]");
                            Array.prototype.forEach.call(e, function(e) {
                                e.removeAttribute("tabIndex")
                            })
                        }).listen(), document.body.addEventListener("click", function() {
                            "tabbing" === document.body.dataset.mdState && (document.body.dataset.mdState = "")
                        }), new i.a.Event.MatchMedia("(max-width: 959px)", new i.a.Event.Listener("[data-md-component=navigation] [href^='#']", "click", function() {
                            var e = document.querySelector("[data-md-toggle=drawer]");
                            if (!(e instanceof HTMLInputElement)) throw new ReferenceError;
                            e.checked && (e.checked = !1, e.dispatchEvent(new CustomEvent("change")))
                        })),
                        function() {
                            var e = document.querySelector("[data-md-source]");
                            if (!e) return r.a.resolve([]);
                            if (!(e instanceof HTMLAnchorElement)) throw new ReferenceError;
                            switch (e.dataset.mdSource) {
                                case "github":
                                    return new i.a.Source.Adapter.GitHub(e).fetch();
                                default:
                                    return r.a.resolve([])
                            }
                        }().then(function(t) {
                            var e = document.querySelectorAll("[data-md-source]");
                            Array.prototype.forEach.call(e, function(e) {
                                new i.a.Source.Repository(e).initialize(t)
                            })
                        });
                    var n = function() {
                        var e = document.querySelectorAll("details");
                        Array.prototype.forEach.call(e, function(e) {
                            e.setAttribute("open", "")
                        })
                    };
                    new i.a.Event.MatchMedia("print", {
                        listen: n,
                        unlisten: function() {}
                    }), window.onbeforeprint = n
                }
            }
        }.call(this, c(3))
}, function(e, t, n) {
    e.exports = n.p + "assets/images/icons/bitbucket.1b09e088.svg"
}, function(e, t, n) {
    e.exports = n.p + "assets/images/icons/github.f0b8504a.svg"
}, function(e, t, n) {
    e.exports = n.p + "assets/images/icons/gitlab.6dd19c00.svg"
}, function(e, t) {
    e.exports = "/Users/squidfunk/Desktop/General/Sources/mkdocs-material/material/application.4031d38b.css"
}, function(e, t) {
    e.exports = "/Users/squidfunk/Desktop/General/Sources/mkdocs-material/material/application-palette.224b79ff.css"
}, function(e, t) {
    ! function() {
        if ("undefined" != typeof window) try {
            var e = new window.CustomEvent("test", {
                cancelable: !0
            });
            if (e.preventDefault(), !0 !== e.defaultPrevented) throw new Error("Could not prevent default")
        } catch (e) {
            var t = function(e, t) {
                var n, r;
                return (t = t || {}).bubbles = !!t.bubbles, t.cancelable = !!t.cancelable, (n = document.createEvent("CustomEvent")).initCustomEvent(e, t.bubbles, t.cancelable, t.detail), r = n.preventDefault, n.preventDefault = function() {
                    r.call(this);
                    try {
                        Object.defineProperty(this, "defaultPrevented", {
                            get: function() {
                                return !0
                            }
                        })
                    } catch (e) {
                        this.defaultPrevented = !0
                    }
                }, n
            };
            t.prototype = window.Event.prototype, window.CustomEvent = t
        }
    }()
}, function(e, t, n) {
    window.fetch || (window.fetch = n(7).default || n(7))
}, function(e, i, o) {
    (function(e) {
        var t = void 0 !== e && e || "undefined" != typeof self && self || window,
            n = Function.prototype.apply;

        function r(e, t) {
            this._id = e, this._clearFn = t
        }
        i.setTimeout = function() {
            return new r(n.call(setTimeout, t, arguments), clearTimeout)
        }, i.setInterval = function() {
            return new r(n.call(setInterval, t, arguments), clearInterval)
        }, i.clearTimeout = i.clearInterval = function(e) {
            e && e.close()
        }, r.prototype.unref = r.prototype.ref = function() {}, r.prototype.close = function() {
            this._clearFn.call(t, this._id)
        }, i.enroll = function(e, t) {
            clearTimeout(e._idleTimeoutId), e._idleTimeout = t
        }, i.unenroll = function(e) {
            clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
        }, i._unrefActive = i.active = function(e) {
            clearTimeout(e._idleTimeoutId);
            var t = e._idleTimeout;
            0 <= t && (e._idleTimeoutId = setTimeout(function() {
                e._onTimeout && e._onTimeout()
            }, t))
        }, o(22), i.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate, i.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate
    }).call(this, o(4))
}, function(e, t, n) {
    (function(e, p) {
        ! function(n, r) {
            "use strict";
            if (!n.setImmediate) {
                var i, o, t, a, e, s = 1,
                    c = {},
                    l = !1,
                    u = n.document,
                    f = Object.getPrototypeOf && Object.getPrototypeOf(n);
                f = f && f.setTimeout ? f : n, i = "[object process]" === {}.toString.call(n.process) ? function(e) {
                    p.nextTick(function() {
                        h(e)
                    })
                } : function() {
                    if (n.postMessage && !n.importScripts) {
                        var e = !0,
                            t = n.onmessage;
                        return n.onmessage = function() {
                            e = !1
                        }, n.postMessage("", "*"), n.onmessage = t, e
                    }
                }() ? (a = "setImmediate$" + Math.random() + "$", e = function(e) {
                    e.source === n && "string" == typeof e.data && 0 === e.data.indexOf(a) && h(+e.data.slice(a.length))
                }, n.addEventListener ? n.addEventListener("message", e, !1) : n.attachEvent("onmessage", e), function(e) {
                    n.postMessage(a + e, "*")
                }) : n.MessageChannel ? ((t = new MessageChannel).port1.onmessage = function(e) {
                    h(e.data)
                }, function(e) {
                    t.port2.postMessage(e)
                }) : u && "onreadystatechange" in u.createElement("script") ? (o = u.documentElement, function(e) {
                    var t = u.createElement("script");
                    t.onreadystatechange = function() {
                        h(e), t.onreadystatechange = null, o.removeChild(t), t = null
                    }, o.appendChild(t)
                }) : function(e) {
                    setTimeout(h, 0, e)
                }, f.setImmediate = function(e) {
                    "function" != typeof e && (e = new Function("" + e));
                    for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
                    var r = {
                        callback: e,
                        args: t
                    };
                    return c[s] = r, i(s), s++
                }, f.clearImmediate = d
            }

            function d(e) {
                delete c[e]
            }

            function h(e) {
                if (l) setTimeout(h, 0, e);
                else {
                    var t = c[e];
                    if (t) {
                        l = !0;
                        try {
                            ! function(e) {
                                var t = e.callback,
                                    n = e.args;
                                switch (n.length) {
                                    case 0:
                                        t();
                                        break;
                                    case 1:
                                        t(n[0]);
                                        break;
                                    case 2:
                                        t(n[0], n[1]);
                                        break;
                                    case 3:
                                        t(n[0], n[1], n[2]);
                                        break;
                                    default:
                                        t.apply(r, n)
                                }
                            }(t)
                        } finally {
                            d(e), l = !1
                        }
                    }
                }
            }
        }("undefined" == typeof self ? void 0 === e ? this : e : self)
    }).call(this, n(4), n(23))
}, function(e, t) {
    var n, r, i = e.exports = {};

    function o() {
        throw new Error("setTimeout has not been defined")
    }

    function a() {
        throw new Error("clearTimeout has not been defined")
    }

    function s(t) {
        if (n === setTimeout) return setTimeout(t, 0);
        if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);
        try {
            return n(t, 0)
        } catch (e) {
            try {
                return n.call(null, t, 0)
            } catch (e) {
                return n.call(this, t, 0)
            }
        }
    }! function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout : o
        } catch (e) {
            n = o
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : a
        } catch (e) {
            r = a
        }
    }();
    var c, l = [],
        u = !1,
        f = -1;

    function d() {
        u && c && (u = !1, c.length ? l = c.concat(l) : f = -1, l.length && h())
    }

    function h() {
        if (!u) {
            var e = s(d);
            u = !0;
            for (var t = l.length; t;) {
                for (c = l, l = []; ++f < t;) c && c[f].run();
                f = -1, t = l.length
            }
            c = null, u = !1,
                function(t) {
                    if (r === clearTimeout) return clearTimeout(t);
                    if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);
                    try {
                        r(t)
                    } catch (e) {
                        try {
                            return r.call(null, t)
                        } catch (e) {
                            return r.call(this, t)
                        }
                    }
                }(e)
        }
    }

    function p(e, t) {
        this.fun = e, this.array = t
    }

    function m() {}
    i.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (1 < arguments.length)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        l.push(new p(e, t)), 1 !== l.length || u || s(h)
    }, p.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = m, i.addListener = m, i.once = m, i.off = m, i.removeListener = m, i.removeAllListeners = m, i.emit = m, i.prependListener = m, i.prependOnceListener = m, i.listeners = function(e) {
        return []
    }, i.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, i.cwd = function() {
        return "/"
    }, i.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, i.umask = function() {
        return 0
    }
}, function(i, o, a) {
    var s, c;
    /**
     * lunr - http://lunrjs.com - A bit like Solr, but much smaller and not as bright - 2.3.6
     * Copyright (C) 2019 Oliver Nightingale
     * @license MIT
     */
    ! function() {
        var t, l, u, e, n, f, d, h, p, m, y, v, g, w, _, E, x, b, k, S, T, L, R, O, C, r, D = function(e) {
            var t = new D.Builder;
            return t.pipeline.add(D.trimmer, D.stopWordFilter, D.stemmer), t.searchPipeline.add(D.stemmer), e.call(t, t), t.build()
        };
        D.version = "2.3.6", D.utils = {}, D.utils.warn = (t = this, function(e) {
            t.console && console.warn && console.warn(e)
        }), D.utils.asString = function(e) {
            return null == e ? "" : e.toString()
        }, D.utils.clone = function(e) {
            if (null == e) return e;
            for (var t = Object.create(null), n = Object.keys(e), r = 0; r < n.length; r++) {
                var i = n[r],
                    o = e[i];
                if (Array.isArray(o)) t[i] = o.slice();
                else {
                    if ("string" != typeof o && "number" != typeof o && "boolean" != typeof o) throw new TypeError("clone is not deep and does not support nested objects");
                    t[i] = o
                }
            }
            return t
        }, D.FieldRef = function(e, t, n) {
            this.docRef = e, this.fieldName = t, this._stringValue = n
        }, D.FieldRef.joiner = "/", D.FieldRef.fromString = function(e) {
            var t = e.indexOf(D.FieldRef.joiner);
            if (-1 === t) throw "malformed field ref string";
            var n = e.slice(0, t),
                r = e.slice(t + 1);
            return new D.FieldRef(r, n, e)
        }, D.FieldRef.prototype.toString = function() {
            return null == this._stringValue && (this._stringValue = this.fieldName + D.FieldRef.joiner + this.docRef), this._stringValue
        }, D.Set = function(e) {
            if (this.elements = Object.create(null), e) {
                this.length = e.length;
                for (var t = 0; t < this.length; t++) this.elements[e[t]] = !0
            } else this.length = 0
        }, D.Set.complete = {
            intersect: function(e) {
                return e
            },
            union: function(e) {
                return e
            },
            contains: function() {
                return !0
            }
        }, D.Set.empty = {
            intersect: function() {
                return this
            },
            union: function(e) {
                return e
            },
            contains: function() {
                return !1
            }
        }, D.Set.prototype.contains = function(e) {
            return !!this.elements[e]
        }, D.Set.prototype.intersect = function(e) {
            var t, n, r, i = [];
            if (e === D.Set.complete) return this;
            if (e === D.Set.empty) return e;
            n = this.length < e.length ? (t = this, e) : (t = e, this), r = Object.keys(t.elements);
            for (var o = 0; o < r.length; o++) {
                var a = r[o];
                a in n.elements && i.push(a)
            }
            return new D.Set(i)
        }, D.Set.prototype.union = function(e) {
            return e === D.Set.complete ? D.Set.complete : e === D.Set.empty ? this : new D.Set(Object.keys(this.elements).concat(Object.keys(e.elements)))
        }, D.idf = function(e, t) {
            var n = 0;
            for (var r in e) "_index" != r && (n += Object.keys(e[r]).length);
            var i = (t - n + .5) / (n + .5);
            return Math.log(1 + Math.abs(i))
        }, D.Token = function(e, t) {
            this.str = e || "", this.metadata = t || {}
        }, D.Token.prototype.toString = function() {
            return this.str
        }, D.Token.prototype.update = function(e) {
            return this.str = e(this.str, this.metadata), this
        }, D.Token.prototype.clone = function(e) {
            return e = e || function(e) {
                return e
            }, new D.Token(e(this.str, this.metadata), this.metadata)
        }, D.tokenizer = function(e, t) {
            if (null == e || null == e) return [];
            if (Array.isArray(e)) return e.map(function(e) {
                return new D.Token(D.utils.asString(e).toLowerCase(), D.utils.clone(t))
            });
            for (var n = e.toString().trim().toLowerCase(), r = n.length, i = [], o = 0, a = 0; o <= r; o++) {
                var s = o - a;
                if (n.charAt(o).match(D.tokenizer.separator) || o == r) {
                    if (0 < s) {
                        var c = D.utils.clone(t) || {};
                        c.position = [a, s], c.index = i.length, i.push(new D.Token(n.slice(a, o), c))
                    }
                    a = o + 1
                }
            }
            return i
        }, D.tokenizer.separator = /[\s\-]+/, D.Pipeline = function() {
            this._stack = []
        }, D.Pipeline.registeredFunctions = Object.create(null), D.Pipeline.registerFunction = function(e, t) {
            t in this.registeredFunctions && D.utils.warn("Overwriting existing registered function: " + t), e.label = t, D.Pipeline.registeredFunctions[e.label] = e
        }, D.Pipeline.warnIfFunctionNotRegistered = function(e) {
            e.label && e.label in this.registeredFunctions || D.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n", e)
        }, D.Pipeline.load = function(e) {
            var n = new D.Pipeline;
            return e.forEach(function(e) {
                var t = D.Pipeline.registeredFunctions[e];
                if (!t) throw new Error("Cannot load unregistered function: " + e);
                n.add(t)
            }), n
        }, D.Pipeline.prototype.add = function() {
            Array.prototype.slice.call(arguments).forEach(function(e) {
                D.Pipeline.warnIfFunctionNotRegistered(e), this._stack.push(e)
            }, this)
        }, D.Pipeline.prototype.after = function(e, t) {
            D.Pipeline.warnIfFunctionNotRegistered(t);
            var n = this._stack.indexOf(e);
            if (-1 == n) throw new Error("Cannot find existingFn");
            n += 1, this._stack.splice(n, 0, t)
        }, D.Pipeline.prototype.before = function(e, t) {
            D.Pipeline.warnIfFunctionNotRegistered(t);
            var n = this._stack.indexOf(e);
            if (-1 == n) throw new Error("Cannot find existingFn");
            this._stack.splice(n, 0, t)
        }, D.Pipeline.prototype.remove = function(e) {
            var t = this._stack.indexOf(e); - 1 != t && this._stack.splice(t, 1)
        }, D.Pipeline.prototype.run = function(e) {
            for (var t = this._stack.length, n = 0; n < t; n++) {
                for (var r = this._stack[n], i = [], o = 0; o < e.length; o++) {
                    var a = r(e[o], o, e);
                    if (void 0 !== a && "" !== a)
                        if (Array.isArray(a))
                            for (var s = 0; s < a.length; s++) i.push(a[s]);
                        else i.push(a)
                }
                e = i
            }
            return e
        }, D.Pipeline.prototype.runString = function(e, t) {
            var n = new D.Token(e, t);
            return this.run([n]).map(function(e) {
                return e.toString()
            })
        }, D.Pipeline.prototype.reset = function() {
            this._stack = []
        }, D.Pipeline.prototype.toJSON = function() {
            return this._stack.map(function(e) {
                return D.Pipeline.warnIfFunctionNotRegistered(e), e.label
            })
        }, D.Vector = function(e) {
            this._magnitude = 0, this.elements = e || []
        }, D.Vector.prototype.positionForIndex = function(e) {
            if (0 == this.elements.length) return 0;
            for (var t = 0, n = this.elements.length / 2, r = n - t, i = Math.floor(r / 2), o = this.elements[2 * i]; 1 < r && (o < e && (t = i), e < o && (n = i), o != e);) r = n - t, i = t + Math.floor(r / 2), o = this.elements[2 * i];
            return o == e ? 2 * i : e < o ? 2 * i : o < e ? 2 * (i + 1) : void 0
        }, D.Vector.prototype.insert = function(e, t) {
            this.upsert(e, t, function() {
                throw "duplicate index"
            })
        }, D.Vector.prototype.upsert = function(e, t, n) {
            this._magnitude = 0;
            var r = this.positionForIndex(e);
            this.elements[r] == e ? this.elements[r + 1] = n(this.elements[r + 1], t) : this.elements.splice(r, 0, e, t)
        }, D.Vector.prototype.magnitude = function() {
            if (this._magnitude) return this._magnitude;
            for (var e = 0, t = this.elements.length, n = 1; n < t; n += 2) {
                var r = this.elements[n];
                e += r * r
            }
            return this._magnitude = Math.sqrt(e)
        }, D.Vector.prototype.dot = function(e) {
            for (var t = 0, n = this.elements, r = e.elements, i = n.length, o = r.length, a = 0, s = 0, c = 0, l = 0; c < i && l < o;)(a = n[c]) < (s = r[l]) ? c += 2 : s < a ? l += 2 : a == s && (t += n[c + 1] * r[l + 1], c += 2, l += 2);
            return t
        }, D.Vector.prototype.similarity = function(e) {
            return this.dot(e) / this.magnitude() || 0
        }, D.Vector.prototype.toArray = function() {
            for (var e = new Array(this.elements.length / 2), t = 1, n = 0; t < this.elements.length; t += 2, n++) e[n] = this.elements[t];
            return e
        }, D.Vector.prototype.toJSON = function() {
            return this.elements
        }, D.stemmer = (l = {
            ational: "ate",
            tional: "tion",
            enci: "ence",
            anci: "ance",
            izer: "ize",
            bli: "ble",
            alli: "al",
            entli: "ent",
            eli: "e",
            ousli: "ous",
            ization: "ize",
            ation: "ate",
            ator: "ate",
            alism: "al",
            iveness: "ive",
            fulness: "ful",
            ousness: "ous",
            aliti: "al",
            iviti: "ive",
            biliti: "ble",
            logi: "log"
        }, u = {
            icate: "ic",
            ative: "",
            alize: "al",
            iciti: "ic",
            ical: "ic",
            ful: "",
            ness: ""
        }, e = "[aeiouy]", n = "[^aeiou][^aeiouy]*", f = new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*"), d = new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*"), h = new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*([aeiouy][aeiou]*)?$"), p = new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy]"), m = /^(.+?)(ss|i)es$/, y = /^(.+?)([^s])s$/, v = /^(.+?)eed$/, g = /^(.+?)(ed|ing)$/, w = /.$/, _ = /(at|bl|iz)$/, E = new RegExp("([^aeiouylsz])\\1$"), x = new RegExp("^" + n + e + "[^aeiouwxy]$"), b = /^(.+?[^aeiou])y$/, k = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/, S = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/, T = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/, L = /^(.+?)(s|t)(ion)$/, R = /^(.+?)e$/, O = /ll$/, C = new RegExp("^" + n + e + "[^aeiouwxy]$"), r = function(e) {
            var t, n, r, i, o, a, s;
            if (e.length < 3) return e;
            if ("y" == (r = e.substr(0, 1)) && (e = r.toUpperCase() + e.substr(1)), o = y, (i = m).test(e) ? e = e.replace(i, "$1$2") : o.test(e) && (e = e.replace(o, "$1$2")), o = g, (i = v).test(e)) {
                var c = i.exec(e);
                (i = f).test(c[1]) && (i = w, e = e.replace(i, ""))
            } else if (o.test(e)) {
                t = (c = o.exec(e))[1], (o = p).test(t) && (a = E, s = x, (o = _).test(e = t) ? e += "e" : a.test(e) ? (i = w, e = e.replace(i, "")) : s.test(e) && (e += "e"))
            }(i = b).test(e) && (e = (t = (c = i.exec(e))[1]) + "i");
            (i = k).test(e) && (t = (c = i.exec(e))[1], n = c[2], (i = f).test(t) && (e = t + l[n]));
            (i = S).test(e) && (t = (c = i.exec(e))[1], n = c[2], (i = f).test(t) && (e = t + u[n]));
            if (o = L, (i = T).test(e)) t = (c = i.exec(e))[1], (i = d).test(t) && (e = t);
            else if (o.test(e)) {
                t = (c = o.exec(e))[1] + c[2], (o = d).test(t) && (e = t)
            }(i = R).test(e) && (t = (c = i.exec(e))[1], o = h, a = C, ((i = d).test(t) || o.test(t) && !a.test(t)) && (e = t));
            return o = d, (i = O).test(e) && o.test(e) && (i = w, e = e.replace(i, "")), "y" == r && (e = r.toLowerCase() + e.substr(1)), e
        }, function(e) {
            return e.update(r)
        }), D.Pipeline.registerFunction(D.stemmer, "stemmer"), D.generateStopWordFilter = function(e) {
            var t = e.reduce(function(e, t) {
                return e[t] = t, e
            }, {});
            return function(e) {
                if (e && t[e.toString()] !== e.toString()) return e
            }
        }, D.stopWordFilter = D.generateStopWordFilter(["a", "able", "about", "across", "after", "all", "almost", "also", "am", "among", "an", "and", "any", "are", "as", "at", "be", "because", "been", "but", "by", "can", "cannot", "could", "dear", "did", "do", "does", "either", "else", "ever", "every", "for", "from", "get", "got", "had", "has", "have", "he", "her", "hers", "him", "his", "how", "however", "i", "if", "in", "into", "is", "it", "its", "just", "least", "let", "like", "likely", "may", "me", "might", "most", "must", "my", "neither", "no", "nor", "not", "of", "off", "often", "on", "only", "or", "other", "our", "own", "rather", "said", "say", "says", "she", "should", "since", "so", "some", "than", "that", "the", "their", "them", "then", "there", "these", "they", "this", "tis", "to", "too", "twas", "us", "wants", "was", "we", "were", "what", "when", "where", "which", "while", "who", "whom", "why", "will", "with", "would", "yet", "you", "your"]), D.Pipeline.registerFunction(D.stopWordFilter, "stopWordFilter"), D.trimmer = function(e) {
            return e.update(function(e) {
                return e.replace(/^\W+/, "").replace(/\W+$/, "")
            })
        }, D.Pipeline.registerFunction(D.trimmer, "trimmer"), D.TokenSet = function() {
            this.final = !1, this.edges = {}, this.id = D.TokenSet._nextId, D.TokenSet._nextId += 1
        }, D.TokenSet._nextId = 1, D.TokenSet.fromArray = function(e) {
            for (var t = new D.TokenSet.Builder, n = 0, r = e.length; n < r; n++) t.insert(e[n]);
            return t.finish(), t.root
        }, D.TokenSet.fromClause = function(e) {
            return "editDistance" in e ? D.TokenSet.fromFuzzyString(e.term, e.editDistance) : D.TokenSet.fromString(e.term)
        }, D.TokenSet.fromFuzzyString = function(e, t) {
            for (var n = new D.TokenSet, r = [{
                    node: n,
                    editsRemaining: t,
                    str: e
                }]; r.length;) {
                var i = r.pop();
                if (0 < i.str.length) {
                    var o, a = i.str.charAt(0);
                    a in i.node.edges ? o = i.node.edges[a] : (o = new D.TokenSet, i.node.edges[a] = o), 1 == i.str.length && (o.final = !0), r.push({
                        node: o,
                        editsRemaining: i.editsRemaining,
                        str: i.str.slice(1)
                    })
                }
                if (0 != i.editsRemaining) {
                    if ("*" in i.node.edges) var s = i.node.edges["*"];
                    else {
                        s = new D.TokenSet;
                        i.node.edges["*"] = s
                    }
                    if (0 == i.str.length && (s.final = !0), r.push({
                            node: s,
                            editsRemaining: i.editsRemaining - 1,
                            str: i.str
                        }), 1 < i.str.length && r.push({
                            node: i.node,
                            editsRemaining: i.editsRemaining - 1,
                            str: i.str.slice(1)
                        }), 1 == i.str.length && (i.node.final = !0), 1 <= i.str.length) {
                        if ("*" in i.node.edges) var c = i.node.edges["*"];
                        else {
                            c = new D.TokenSet;
                            i.node.edges["*"] = c
                        }
                        1 == i.str.length && (c.final = !0), r.push({
                            node: c,
                            editsRemaining: i.editsRemaining - 1,
                            str: i.str.slice(1)
                        })
                    }
                    if (1 < i.str.length) {
                        var l, u = i.str.charAt(0),
                            f = i.str.charAt(1);
                        f in i.node.edges ? l = i.node.edges[f] : (l = new D.TokenSet, i.node.edges[f] = l), 1 == i.str.length && (l.final = !0), r.push({
                            node: l,
                            editsRemaining: i.editsRemaining - 1,
                            str: u + i.str.slice(2)
                        })
                    }
                }
            }
            return n
        }, D.TokenSet.fromString = function(e) {
            for (var t = new D.TokenSet, n = t, r = 0, i = e.length; r < i; r++) {
                var o = e[r],
                    a = r == i - 1;
                if ("*" == o)(t.edges[o] = t).final = a;
                else {
                    var s = new D.TokenSet;
                    s.final = a, t.edges[o] = s, t = s
                }
            }
            return n
        }, D.TokenSet.prototype.toArray = function() {
            for (var e = [], t = [{
                    prefix: "",
                    node: this
                }]; t.length;) {
                var n = t.pop(),
                    r = Object.keys(n.node.edges),
                    i = r.length;
                n.node.final && (n.prefix.charAt(0), e.push(n.prefix));
                for (var o = 0; o < i; o++) {
                    var a = r[o];
                    t.push({
                        prefix: n.prefix.concat(a),
                        node: n.node.edges[a]
                    })
                }
            }
            return e
        }, D.TokenSet.prototype.toString = function() {
            if (this._str) return this._str;
            for (var e = this.final ? "1" : "0", t = Object.keys(this.edges).sort(), n = t.length, r = 0; r < n; r++) {
                var i = t[r];
                e = e + i + this.edges[i].id
            }
            return e
        }, D.TokenSet.prototype.intersect = function(e) {
            for (var t = new D.TokenSet, n = void 0, r = [{
                    qNode: e,
                    output: t,
                    node: this
                }]; r.length;) {
                n = r.pop();
                for (var i = Object.keys(n.qNode.edges), o = i.length, a = Object.keys(n.node.edges), s = a.length, c = 0; c < o; c++)
                    for (var l = i[c], u = 0; u < s; u++) {
                        var f = a[u];
                        if (f == l || "*" == l) {
                            var d = n.node.edges[f],
                                h = n.qNode.edges[l],
                                p = d.final && h.final,
                                m = void 0;
                            f in n.output.edges ? (m = n.output.edges[f]).final = m.final || p : ((m = new D.TokenSet).final = p, n.output.edges[f] = m), r.push({
                                qNode: h,
                                output: m,
                                node: d
                            })
                        }
                    }
            }
            return t
        }, D.TokenSet.Builder = function() {
            this.previousWord = "", this.root = new D.TokenSet, this.uncheckedNodes = [], this.minimizedNodes = {}
        }, D.TokenSet.Builder.prototype.insert = function(e) {
            var t, n = 0;
            if (e < this.previousWord) throw new Error("Out of order word insertion");
            for (var r = 0; r < e.length && r < this.previousWord.length && e[r] == this.previousWord[r]; r++) n++;
            this.minimize(n), t = 0 == this.uncheckedNodes.length ? this.root : this.uncheckedNodes[this.uncheckedNodes.length - 1].child;
            for (r = n; r < e.length; r++) {
                var i = new D.TokenSet,
                    o = e[r];
                t.edges[o] = i, this.uncheckedNodes.push({
                    parent: t,
                    char: o,
                    child: i
                }), t = i
            }
            t.final = !0, this.previousWord = e
        }, D.TokenSet.Builder.prototype.finish = function() {
            this.minimize(0)
        }, D.TokenSet.Builder.prototype.minimize = function(e) {
            for (var t = this.uncheckedNodes.length - 1; e <= t; t--) {
                var n = this.uncheckedNodes[t],
                    r = n.child.toString();
                r in this.minimizedNodes ? n.parent.edges[n.char] = this.minimizedNodes[r] : (n.child._str = r, this.minimizedNodes[r] = n.child), this.uncheckedNodes.pop()
            }
        }, D.Index = function(e) {
            this.invertedIndex = e.invertedIndex, this.fieldVectors = e.fieldVectors, this.tokenSet = e.tokenSet, this.fields = e.fields, this.pipeline = e.pipeline
        }, D.Index.prototype.search = function(t) {
            return this.query(function(e) {
                new D.QueryParser(t, e).parse()
            })
        }, D.Index.prototype.query = function(e) {
            for (var t = new D.Query(this.fields), n = Object.create(null), r = Object.create(null), i = Object.create(null), o = Object.create(null), a = Object.create(null), s = 0; s < this.fields.length; s++) r[this.fields[s]] = new D.Vector;
            e.call(t, t);
            for (s = 0; s < t.clauses.length; s++) {
                var c = t.clauses[s],
                    l = null,
                    u = D.Set.complete;
                l = c.usePipeline ? this.pipeline.runString(c.term, {
                    fields: c.fields
                }) : [c.term];
                for (var f = 0; f < l.length; f++) {
                    var d = l[f];
                    c.term = d;
                    var h = D.TokenSet.fromClause(c),
                        p = this.tokenSet.intersect(h).toArray();
                    if (0 === p.length && c.presence === D.Query.presence.REQUIRED) {
                        for (var m = 0; m < c.fields.length; m++) {
                            o[Q = c.fields[m]] = D.Set.empty
                        }
                        break
                    }
                    for (var y = 0; y < p.length; y++) {
                        var v = p[y],
                            g = this.invertedIndex[v],
                            w = g._index;
                        for (m = 0; m < c.fields.length; m++) {
                            var _ = g[Q = c.fields[m]],
                                E = Object.keys(_),
                                x = v + "/" + Q,
                                b = new D.Set(E);
                            if (c.presence == D.Query.presence.REQUIRED && (u = u.union(b), void 0 === o[Q] && (o[Q] = D.Set.complete)), c.presence != D.Query.presence.PROHIBITED) {
                                if (r[Q].upsert(w, c.boost, function(e, t) {
                                        return e + t
                                    }), !i[x]) {
                                    for (var k = 0; k < E.length; k++) {
                                        var S, T = E[k],
                                            L = new D.FieldRef(T, Q),
                                            R = _[T];
                                        void 0 === (S = n[L]) ? n[L] = new D.MatchData(v, Q, R) : S.add(v, Q, R)
                                    }
                                    i[x] = !0
                                }
                            } else void 0 === a[Q] && (a[Q] = D.Set.empty), a[Q] = a[Q].union(b)
                        }
                    }
                }
                if (c.presence === D.Query.presence.REQUIRED)
                    for (m = 0; m < c.fields.length; m++) {
                        o[Q = c.fields[m]] = o[Q].intersect(u)
                    }
            }
            var O = D.Set.complete,
                C = D.Set.empty;
            for (s = 0; s < this.fields.length; s++) {
                var Q;
                o[Q = this.fields[s]] && (O = O.intersect(o[Q])), a[Q] && (C = C.union(a[Q]))
            }
            var P = Object.keys(n),
                A = [],
                I = Object.create(null);
            if (t.isNegated()) {
                P = Object.keys(this.fieldVectors);
                for (s = 0; s < P.length; s++) {
                    L = P[s];
                    var M = D.FieldRef.fromString(L);
                    n[L] = new D.MatchData
                }
            }
            for (s = 0; s < P.length; s++) {
                var N = (M = D.FieldRef.fromString(P[s])).docRef;
                if (O.contains(N) && !C.contains(N)) {
                    var j, F = this.fieldVectors[M],
                        H = r[M.fieldName].similarity(F);
                    if (void 0 !== (j = I[N])) j.score += H, j.matchData.combine(n[M]);
                    else {
                        var q = {
                            ref: N,
                            score: H,
                            matchData: n[M]
                        };
                        I[N] = q, A.push(q)
                    }
                }
            }
            return A.sort(function(e, t) {
                return t.score - e.score
            })
        }, D.Index.prototype.toJSON = function() {
            var e = Object.keys(this.invertedIndex).sort().map(function(e) {
                    return [e, this.invertedIndex[e]]
                }, this),
                t = Object.keys(this.fieldVectors).map(function(e) {
                    return [e, this.fieldVectors[e].toJSON()]
                }, this);
            return {
                version: D.version,
                fields: this.fields,
                fieldVectors: t,
                invertedIndex: e,
                pipeline: this.pipeline.toJSON()
            }
        }, D.Index.load = function(e) {
            var t = {},
                n = {},
                r = e.fieldVectors,
                i = Object.create(null),
                o = e.invertedIndex,
                a = new D.TokenSet.Builder,
                s = D.Pipeline.load(e.pipeline);
            e.version != D.version && D.utils.warn("Version mismatch when loading serialised index. Current version of lunr '" + D.version + "' does not match serialized index '" + e.version + "'");
            for (var c = 0; c < r.length; c++) {
                var l = (f = r[c])[0],
                    u = f[1];
                n[l] = new D.Vector(u)
            }
            for (c = 0; c < o.length; c++) {
                var f, d = (f = o[c])[0],
                    h = f[1];
                a.insert(d), i[d] = h
            }
            return a.finish(), t.fields = e.fields, t.fieldVectors = n, t.invertedIndex = i, t.tokenSet = a.root, t.pipeline = s, new D.Index(t)
        }, D.Builder = function() {
            this._ref = "id", this._fields = Object.create(null), this._documents = Object.create(null), this.invertedIndex = Object.create(null), this.fieldTermFrequencies = {}, this.fieldLengths = {}, this.tokenizer = D.tokenizer, this.pipeline = new D.Pipeline, this.searchPipeline = new D.Pipeline, this.documentCount = 0, this._b = .75, this._k1 = 1.2, this.termIndex = 0, this.metadataWhitelist = []
        }, D.Builder.prototype.ref = function(e) {
            this._ref = e
        }, D.Builder.prototype.field = function(e, t) {
            if (/\//.test(e)) throw new RangeError("Field '" + e + "' contains illegal character '/'");
            this._fields[e] = t || {}
        }, D.Builder.prototype.b = function(e) {
            this._b = e < 0 ? 0 : 1 < e ? 1 : e
        }, D.Builder.prototype.k1 = function(e) {
            this._k1 = e
        }, D.Builder.prototype.add = function(e, t) {
            var n = e[this._ref],
                r = Object.keys(this._fields);
            this._documents[n] = t || {}, this.documentCount += 1;
            for (var i = 0; i < r.length; i++) {
                var o = r[i],
                    a = this._fields[o].extractor,
                    s = a ? a(e) : e[o],
                    c = this.tokenizer(s, {
                        fields: [o]
                    }),
                    l = this.pipeline.run(c),
                    u = new D.FieldRef(n, o),
                    f = Object.create(null);
                this.fieldTermFrequencies[u] = f, this.fieldLengths[u] = 0, this.fieldLengths[u] += l.length;
                for (var d = 0; d < l.length; d++) {
                    var h = l[d];
                    if (null == f[h] && (f[h] = 0), f[h] += 1, null == this.invertedIndex[h]) {
                        var p = Object.create(null);
                        p._index = this.termIndex, this.termIndex += 1;
                        for (var m = 0; m < r.length; m++) p[r[m]] = Object.create(null);
                        this.invertedIndex[h] = p
                    }
                    null == this.invertedIndex[h][o][n] && (this.invertedIndex[h][o][n] = Object.create(null));
                    for (var y = 0; y < this.metadataWhitelist.length; y++) {
                        var v = this.metadataWhitelist[y],
                            g = h.metadata[v];
                        null == this.invertedIndex[h][o][n][v] && (this.invertedIndex[h][o][n][v] = []), this.invertedIndex[h][o][n][v].push(g)
                    }
                }
            }
        }, D.Builder.prototype.calculateAverageFieldLengths = function() {
            for (var e = Object.keys(this.fieldLengths), t = e.length, n = {}, r = {}, i = 0; i < t; i++) {
                var o = D.FieldRef.fromString(e[i]),
                    a = o.fieldName;
                r[a] || (r[a] = 0), r[a] += 1, n[a] || (n[a] = 0), n[a] += this.fieldLengths[o]
            }
            var s = Object.keys(this._fields);
            for (i = 0; i < s.length; i++) {
                var c = s[i];
                n[c] = n[c] / r[c]
            }
            this.averageFieldLength = n
        }, D.Builder.prototype.createFieldVectors = function() {
            for (var e = {}, t = Object.keys(this.fieldTermFrequencies), n = t.length, r = Object.create(null), i = 0; i < n; i++) {
                for (var o = D.FieldRef.fromString(t[i]), a = o.fieldName, s = this.fieldLengths[o], c = new D.Vector, l = this.fieldTermFrequencies[o], u = Object.keys(l), f = u.length, d = this._fields[a].boost || 1, h = this._documents[o.docRef].boost || 1, p = 0; p < f; p++) {
                    var m, y, v, g = u[p],
                        w = l[g],
                        _ = this.invertedIndex[g]._index;
                    void 0 === r[g] ? (m = D.idf(this.invertedIndex[g], this.documentCount), r[g] = m) : m = r[g], y = m * ((this._k1 + 1) * w) / (this._k1 * (1 - this._b + this._b * (s / this.averageFieldLength[a])) + w), y *= d, y *= h, v = Math.round(1e3 * y) / 1e3, c.insert(_, v)
                }
                e[o] = c
            }
            this.fieldVectors = e
        }, D.Builder.prototype.createTokenSet = function() {
            this.tokenSet = D.TokenSet.fromArray(Object.keys(this.invertedIndex).sort())
        }, D.Builder.prototype.build = function() {
            return this.calculateAverageFieldLengths(), this.createFieldVectors(), this.createTokenSet(), new D.Index({
                invertedIndex: this.invertedIndex,
                fieldVectors: this.fieldVectors,
                tokenSet: this.tokenSet,
                fields: Object.keys(this._fields),
                pipeline: this.searchPipeline
            })
        }, D.Builder.prototype.use = function(e) {
            var t = Array.prototype.slice.call(arguments, 1);
            t.unshift(this), e.apply(this, t)
        }, D.MatchData = function(e, t, n) {
            for (var r = Object.create(null), i = Object.keys(n || {}), o = 0; o < i.length; o++) {
                var a = i[o];
                r[a] = n[a].slice()
            }
            this.metadata = Object.create(null), void 0 !== e && (this.metadata[e] = Object.create(null), this.metadata[e][t] = r)
        }, D.MatchData.prototype.combine = function(e) {
            for (var t = Object.keys(e.metadata), n = 0; n < t.length; n++) {
                var r = t[n],
                    i = Object.keys(e.metadata[r]);
                null == this.metadata[r] && (this.metadata[r] = Object.create(null));
                for (var o = 0; o < i.length; o++) {
                    var a = i[o],
                        s = Object.keys(e.metadata[r][a]);
                    null == this.metadata[r][a] && (this.metadata[r][a] = Object.create(null));
                    for (var c = 0; c < s.length; c++) {
                        var l = s[c];
                        null == this.metadata[r][a][l] ? this.metadata[r][a][l] = e.metadata[r][a][l] : this.metadata[r][a][l] = this.metadata[r][a][l].concat(e.metadata[r][a][l])
                    }
                }
            }
        }, D.MatchData.prototype.add = function(e, t, n) {
            if (!(e in this.metadata)) return this.metadata[e] = Object.create(null), void(this.metadata[e][t] = n);
            if (t in this.metadata[e])
                for (var r = Object.keys(n), i = 0; i < r.length; i++) {
                    var o = r[i];
                    o in this.metadata[e][t] ? this.metadata[e][t][o] = this.metadata[e][t][o].concat(n[o]) : this.metadata[e][t][o] = n[o]
                } else this.metadata[e][t] = n
        }, D.Query = function(e) {
            this.clauses = [], this.allFields = e
        }, D.Query.wildcard = String("*"), D.Query.wildcard.NONE = 0, D.Query.wildcard.LEADING = 1, D.Query.wildcard.TRAILING = 2, D.Query.presence = {
            OPTIONAL: 1,
            REQUIRED: 2,
            PROHIBITED: 3
        }, D.Query.prototype.clause = function(e) {
            return "fields" in e || (e.fields = this.allFields), "boost" in e || (e.boost = 1), "usePipeline" in e || (e.usePipeline = !0), "wildcard" in e || (e.wildcard = D.Query.wildcard.NONE), e.wildcard & D.Query.wildcard.LEADING && e.term.charAt(0) != D.Query.wildcard && (e.term = "*" + e.term), e.wildcard & D.Query.wildcard.TRAILING && e.term.slice(-1) != D.Query.wildcard && (e.term = e.term + "*"), "presence" in e || (e.presence = D.Query.presence.OPTIONAL), this.clauses.push(e), this
        }, D.Query.prototype.isNegated = function() {
            for (var e = 0; e < this.clauses.length; e++)
                if (this.clauses[e].presence != D.Query.presence.PROHIBITED) return !1;
            return !0
        }, D.Query.prototype.term = function(e, t) {
            if (Array.isArray(e)) return e.forEach(function(e) {
                this.term(e, D.utils.clone(t))
            }, this), this;
            var n = t || {};
            return n.term = e.toString(), this.clause(n), this
        }, D.QueryParseError = function(e, t, n) {
            this.name = "QueryParseError", this.message = e, this.start = t, this.end = n
        }, D.QueryParseError.prototype = new Error, D.QueryLexer = function(e) {
            this.lexemes = [], this.str = e, this.length = e.length, this.pos = 0, this.start = 0, this.escapeCharPositions = []
        }, D.QueryLexer.prototype.run = function() {
            for (var e = D.QueryLexer.lexText; e;) e = e(this)
        }, D.QueryLexer.prototype.sliceString = function() {
            for (var e = [], t = this.start, n = this.pos, r = 0; r < this.escapeCharPositions.length; r++) n = this.escapeCharPositions[r], e.push(this.str.slice(t, n)), t = n + 1;
            return e.push(this.str.slice(t, this.pos)), this.escapeCharPositions.length = 0, e.join("")
        }, D.QueryLexer.prototype.emit = function(e) {
            this.lexemes.push({
                type: e,
                str: this.sliceString(),
                start: this.start,
                end: this.pos
            }), this.start = this.pos
        }, D.QueryLexer.prototype.escapeCharacter = function() {
            this.escapeCharPositions.push(this.pos - 1), this.pos += 1
        }, D.QueryLexer.prototype.next = function() {
            if (this.pos >= this.length) return D.QueryLexer.EOS;
            var e = this.str.charAt(this.pos);
            return this.pos += 1, e
        }, D.QueryLexer.prototype.width = function() {
            return this.pos - this.start
        }, D.QueryLexer.prototype.ignore = function() {
            this.start == this.pos && (this.pos += 1), this.start = this.pos
        }, D.QueryLexer.prototype.backup = function() {
            this.pos -= 1
        }, D.QueryLexer.prototype.acceptDigitRun = function() {
            for (var e, t; 47 < (t = (e = this.next()).charCodeAt(0)) && t < 58;);
            e != D.QueryLexer.EOS && this.backup()
        }, D.QueryLexer.prototype.more = function() {
            return this.pos < this.length
        }, D.QueryLexer.EOS = "EOS", D.QueryLexer.FIELD = "FIELD", D.QueryLexer.TERM = "TERM", D.QueryLexer.EDIT_DISTANCE = "EDIT_DISTANCE", D.QueryLexer.BOOST = "BOOST", D.QueryLexer.PRESENCE = "PRESENCE", D.QueryLexer.lexField = function(e) {
            return e.backup(), e.emit(D.QueryLexer.FIELD), e.ignore(), D.QueryLexer.lexText
        }, D.QueryLexer.lexTerm = function(e) {
            if (1 < e.width() && (e.backup(), e.emit(D.QueryLexer.TERM)), e.ignore(), e.more()) return D.QueryLexer.lexText
        }, D.QueryLexer.lexEditDistance = function(e) {
            return e.ignore(), e.acceptDigitRun(), e.emit(D.QueryLexer.EDIT_DISTANCE), D.QueryLexer.lexText
        }, D.QueryLexer.lexBoost = function(e) {
            return e.ignore(), e.acceptDigitRun(), e.emit(D.QueryLexer.BOOST), D.QueryLexer.lexText
        }, D.QueryLexer.lexEOS = function(e) {
            0 < e.width() && e.emit(D.QueryLexer.TERM)
        }, D.QueryLexer.termSeparator = D.tokenizer.separator, D.QueryLexer.lexText = function(e) {
            for (;;) {
                var t = e.next();
                if (t == D.QueryLexer.EOS) return D.QueryLexer.lexEOS;
                if (92 != t.charCodeAt(0)) {
                    if (":" == t) return D.QueryLexer.lexField;
                    if ("~" == t) return e.backup(), 0 < e.width() && e.emit(D.QueryLexer.TERM), D.QueryLexer.lexEditDistance;
                    if ("^" == t) return e.backup(), 0 < e.width() && e.emit(D.QueryLexer.TERM), D.QueryLexer.lexBoost;
                    if ("+" == t && 1 === e.width()) return e.emit(D.QueryLexer.PRESENCE), D.QueryLexer.lexText;
                    if ("-" == t && 1 === e.width()) return e.emit(D.QueryLexer.PRESENCE), D.QueryLexer.lexText;
                    if (t.match(D.QueryLexer.termSeparator)) return D.QueryLexer.lexTerm
                } else e.escapeCharacter()
            }
        }, D.QueryParser = function(e, t) {
            this.lexer = new D.QueryLexer(e), this.query = t, this.currentClause = {}, this.lexemeIdx = 0
        }, D.QueryParser.prototype.parse = function() {
            this.lexer.run(), this.lexemes = this.lexer.lexemes;
            for (var e = D.QueryParser.parseClause; e;) e = e(this);
            return this.query
        }, D.QueryParser.prototype.peekLexeme = function() {
            return this.lexemes[this.lexemeIdx]
        }, D.QueryParser.prototype.consumeLexeme = function() {
            var e = this.peekLexeme();
            return this.lexemeIdx += 1, e
        }, D.QueryParser.prototype.nextClause = function() {
            var e = this.currentClause;
            this.query.clause(e), this.currentClause = {}
        }, D.QueryParser.parseClause = function(e) {
            var t = e.peekLexeme();
            if (null != t) switch (t.type) {
                case D.QueryLexer.PRESENCE:
                    return D.QueryParser.parsePresence;
                case D.QueryLexer.FIELD:
                    return D.QueryParser.parseField;
                case D.QueryLexer.TERM:
                    return D.QueryParser.parseTerm;
                default:
                    var n = "expected either a field or a term, found " + t.type;
                    throw 1 <= t.str.length && (n += " with value '" + t.str + "'"), new D.QueryParseError(n, t.start, t.end)
            }
        }, D.QueryParser.parsePresence = function(e) {
            var t = e.consumeLexeme();
            if (null != t) {
                switch (t.str) {
                    case "-":
                        e.currentClause.presence = D.Query.presence.PROHIBITED;
                        break;
                    case "+":
                        e.currentClause.presence = D.Query.presence.REQUIRED;
                        break;
                    default:
                        var n = "unrecognised presence operator'" + t.str + "'";
                        throw new D.QueryParseError(n, t.start, t.end)
                }
                var r = e.peekLexeme();
                if (null == r) {
                    n = "expecting term or field, found nothing";
                    throw new D.QueryParseError(n, t.start, t.end)
                }
                switch (r.type) {
                    case D.QueryLexer.FIELD:
                        return D.QueryParser.parseField;
                    case D.QueryLexer.TERM:
                        return D.QueryParser.parseTerm;
                    default:
                        n = "expecting term or field, found '" + r.type + "'";
                        throw new D.QueryParseError(n, r.start, r.end)
                }
            }
        }, D.QueryParser.parseField = function(e) {
            var t = e.consumeLexeme();
            if (null != t) {
                if (-1 == e.query.allFields.indexOf(t.str)) {
                    var n = e.query.allFields.map(function(e) {
                            return "'" + e + "'"
                        }).join(", "),
                        r = "unrecognised field '" + t.str + "', possible fields: " + n;
                    throw new D.QueryParseError(r, t.start, t.end)
                }
                e.currentClause.fields = [t.str];
                var i = e.peekLexeme();
                if (null == i) {
                    r = "expecting term, found nothing";
                    throw new D.QueryParseError(r, t.start, t.end)
                }
                switch (i.type) {
                    case D.QueryLexer.TERM:
                        return D.QueryParser.parseTerm;
                    default:
                        r = "expecting term, found '" + i.type + "'";
                        throw new D.QueryParseError(r, i.start, i.end)
                }
            }
        }, D.QueryParser.parseTerm = function(e) {
            var t = e.consumeLexeme();
            if (null != t) {
                e.currentClause.term = t.str.toLowerCase(), -1 != t.str.indexOf("*") && (e.currentClause.usePipeline = !1);
                var n = e.peekLexeme();
                if (null != n) switch (n.type) {
                    case D.QueryLexer.TERM:
                        return e.nextClause(), D.QueryParser.parseTerm;
                    case D.QueryLexer.FIELD:
                        return e.nextClause(), D.QueryParser.parseField;
                    case D.QueryLexer.EDIT_DISTANCE:
                        return D.QueryParser.parseEditDistance;
                    case D.QueryLexer.BOOST:
                        return D.QueryParser.parseBoost;
                    case D.QueryLexer.PRESENCE:
                        return e.nextClause(), D.QueryParser.parsePresence;
                    default:
                        var r = "Unexpected lexeme type '" + n.type + "'";
                        throw new D.QueryParseError(r, n.start, n.end)
                } else e.nextClause()
            }
        }, D.QueryParser.parseEditDistance = function(e) {
            var t = e.consumeLexeme();
            if (null != t) {
                var n = parseInt(t.str, 10);
                if (isNaN(n)) {
                    var r = "edit distance must be numeric";
                    throw new D.QueryParseError(r, t.start, t.end)
                }
                e.currentClause.editDistance = n;
                var i = e.peekLexeme();
                if (null != i) switch (i.type) {
                    case D.QueryLexer.TERM:
                        return e.nextClause(), D.QueryParser.parseTerm;
                    case D.QueryLexer.FIELD:
                        return e.nextClause(), D.QueryParser.parseField;
                    case D.QueryLexer.EDIT_DISTANCE:
                        return D.QueryParser.parseEditDistance;
                    case D.QueryLexer.BOOST:
                        return D.QueryParser.parseBoost;
                    case D.QueryLexer.PRESENCE:
                        return e.nextClause(), D.QueryParser.parsePresence;
                    default:
                        r = "Unexpected lexeme type '" + i.type + "'";
                        throw new D.QueryParseError(r, i.start, i.end)
                } else e.nextClause()
            }
        }, D.QueryParser.parseBoost = function(e) {
            var t = e.consumeLexeme();
            if (null != t) {
                var n = parseInt(t.str, 10);
                if (isNaN(n)) {
                    var r = "boost must be numeric";
                    throw new D.QueryParseError(r, t.start, t.end)
                }
                e.currentClause.boost = n;
                var i = e.peekLexeme();
                if (null != i) switch (i.type) {
                    case D.QueryLexer.TERM:
                        return e.nextClause(), D.QueryParser.parseTerm;
                    case D.QueryLexer.FIELD:
                        return e.nextClause(), D.QueryParser.parseField;
                    case D.QueryLexer.EDIT_DISTANCE:
                        return D.QueryParser.parseEditDistance;
                    case D.QueryLexer.BOOST:
                        return D.QueryParser.parseBoost;
                    case D.QueryLexer.PRESENCE:
                        return e.nextClause(), D.QueryParser.parsePresence;
                    default:
                        r = "Unexpected lexeme type '" + i.type + "'";
                        throw new D.QueryParseError(r, i.start, i.end)
                } else e.nextClause()
            }
        }, void 0 === (c = "function" == typeof(s = function() {
            return D
        }) ? s.call(o, a, o, i) : s) || (i.exports = c)
    }()
}]));