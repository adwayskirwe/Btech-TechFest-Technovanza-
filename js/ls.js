window.WS = (function($) {
    if (!$.fn.serializeObject) {
        $.fn.serializeObject = function() {
            var result = {},
                array;
            array = this.serializeArray();
            $.each(array, function() {
                if (result[this.name] !== undefined) {
                    if (!result[this.name].push) {
                        result[this.name] = [result[this.name]];
                    }
                    result[this.name].push(this.value || '');
                } else {
                    result[this.name] = this.value || '';
                }
            });
            return result;
        };
    }
    if (typeof $.fn.WS === "undefined") {
        $.fn.WS = function() {
            var classes = {},
                factory = {};
            factory.CreateClass = function(member, Class) {
                var instance = 0,
                    instances = [];
                classes[member] = function() {
                    var index, args = arguments,
                        label = "ws." + member + "-instance-index",
                        result = this;
                    this.each(function() {
                        var $this = $(this);
                        if ((index = $this.data(label)) === undefined) {
                            $this.data(label, instance);
                            index = instance;
                            instance = instance + 1;
                        }
                        if (typeof args[1] === "string") {
                            if (instances[index] && instances[index][args[1]]) {
                                result = instances[index][args[1]].apply(this, Array.prototype.slice.call(args, 2));
                            } else {
                                throw new Error("Instance must be created before methods are used");
                            }
                        } else if (!instances[index]) {
                            instances.push(new Class(this, Array.prototype.slice.call(args, 1)));
                        }
                    });
                    return result;
                };
            };
            return function(member, fn) {
                if (arguments.length === 3 && factory[arguments[0]]) {
                    factory[arguments[0]].apply(this, Array.prototype.slice.call(arguments, 1));
                } else {
                    if (member !== undefined && typeof classes[member] === "function") {
                        return classes[member].apply(this, arguments);
                    } else {
                        return this;
                    }
                }
            };
        }();
    }
    if (typeof Number.toFormatted === "undefined") {
        Number.prototype.toFormatted = function(decimals, thousands_separator) {
            var num, re, dec_string, len, a;
            num = this.toString().split(".");
            if (decimals) {
                dec_string = (num.length > 1) ? num[1].substring(0, decimals) : "0";
                len = dec_string.length;
                if (len < decimals) {
                    for (a = 0; a < (decimals - len); a += 1) {
                        dec_string += "0";
                    }
                }
                num[1] = '.' + dec_string;
            } else {
                num[1] = '';
            }
            if (thousands_separator !== false) {
                re = /(\d+)(\d{3})/;
                while (re.test(num[0])) {
                    num[0] = num[0].replace(re, "$1,$2");
                }
            }
            return num[0] + num[1];
        };
    }
    if (typeof Element !== "undefined") {
        if (typeof document.documentElement.click === "undefined" && document.createEvent) {
            Element.prototype.click = function(element) {
                var dispatch;
                dispatch = document.createEvent("MouseEvents");
                dispatch.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                element.dispatchEvent(dispatch);
            };
        }
    }
    if (typeof window.ob_set === "undefined") {
        window.ob_set = function(ob, defaults) {
            var key;
            for (key in defaults) {
                if (defaults.hasOwnProperty(key)) {
                    if (defaults[key] !== null && defaults[key].constructor === Object && (ob[key] === undefined || ob[key].constructor === Object)) {
                        ob[key] = window.ob_set(ob[key] || {}, defaults[key]);
                    } else if (ob[key] === undefined) {
                        ob[key] = defaults[key];
                    }
                }
            }
            return ob;
        };
    }
    if (typeof Function.bind === "undefined") {
        Function.prototype.bind = function(context) {
            var fn = this;
            return function() {
                return fn.apply(context, arguments);
            };
        };
    }
    return {
        Include: (function() {
            var loaded = [];
            return {
                load: function(js_file, callback, type) {
                    var script;
                    if ($.inArray(js_file, loaded) === -1) {
                        type = (type || "text/javascript");
                        script = document.createElement("script");
                        if (script.setAttribute) {
                            script.setAttribute("type", type);
                        }
                        loaded.push(js_file);
                        if (typeof callback === "function") {
                            if ("onreadystatechange" in script) {
                                script.onreadystatechange = function() {
                                    if (this.readyState === "loaded" || this.readyState === "complete") {
                                        this.onreadystatechange = null;
                                        callback();
                                    }
                                };
                            } else {
                                script.onload = callback;
                            }
                        }
                        script.src = js_file;
                        document.getElementsByTagName("head")[0].appendChild(script);
                    } else {
                        if (typeof callback === "function") {
                            callback();
                        }
                    }
                }
            };
        }()),
        JSMedia: (function() {
            var my, cls;
            cls = {
                last_query: {
                    'query': null,
                    'string': ''
                },
                run: function(query) {
                    var media_query, clauses, a, b, result;
                    if (my.mqtest === undefined) {
                        my.mqtest = $("<span>", {
                            'id': 'js-media-test'
                        }).css({
                            'display': 'none'
                        });
                    }
                    this.last_query.query = query;
                    if (typeof query === "string") {
                        media_query = query;
                    } else if (query.length > 0) {
                        media_query = [];
                        for (a = 0; a < query.length; a += 1) {
                            clauses = [];
                            if (typeof query[a] === "string") {
                                clauses.push(query[a]);
                            } else {
                                for (b = 0; b < query[a].length; b += 1) {
                                    clauses.push(query[a][b]);
                                }
                            }
                            media_query.push(clauses.join(" and "));
                        }
                    }
                    if (typeof window.matchMedia === "function") {
                        result = (!!(window.matchMedia(media_query).matches));
                    } else {
                        $(document.body).append(my.mqtest);
                        media_query = "only " + media_query.join(", ");
                        $("head").append((my.mqcss = $("<style>", {
                            'type': 'text/css',
                            'media': media_query
                        })));
                        if (my.mqcss[0].styleSheet) {
                            my.mqcss[0].styleSheet.cssText = "#js-media-test { visibility: hidden; }";
                        } else if (my.mqcss[0].sheet) {
                            my.mqcss[0].sheet.insertRule("#js-media-test { visibility: hidden; }", 0);
                        }
                        if (my.mqtest.css("visibility") === "hidden") {
                            result = true;
                        } else {
                            result = false;
                        }
                        my.mqcss.remove();
                        my.mqtest.remove();
                    }
                    this.last_query.string = media_query;
                    return result;
                },
                monitor: function() {
                    var a, queries, callback;
                    if (arguments.length < 2) {
                        throw new Error("Arguments must include at least one query and a callback");
                    }
                    queries = [];
                    for (a = 0; a !== arguments.length; a += 1) {
                        if (typeof arguments[a] === "function") {
                            callback = arguments[a];
                        } else {
                            queries.push(arguments[a]);
                        }
                    }
                    my.monitors.push({
                        'queries': queries,
                        'callback': callback
                    });
                    my.exec_monitor(my.monitors.length - 1, true);
                    if (my.monitors.length === 1) {
                        $(window).bind("resize", my.resize);
                    }
                    return (my.monitors.length - 1);
                },
                end_monitor: function(index) {
                    var result;
                    if (my.monitors.length > index) {
                        result = !!(my.monitors.splice(index, 1));
                        if (my.monitors.length === 0) {
                            $(window).unbind("resize", my.resize);
                        }
                        return result;
                    } else {
                        return false;
                    }
                }
            };
            my = {
                timers: {},
                monitors: [],
                resize: function() {
                    if (my.timers.resize) {
                        window.clearTimeout(my.timers.resize);
                    }
                    my.timers.resize = window.setTimeout(function() {
                        my.exec_monitor();
                        delete my.timers.resize;
                    }.bind(this), 100);
                }.bind(cls),
                exec_monitor: function(index, initial) {
                    var a, exec;
                    initial = initial || false;
                    exec = function(a) {
                        var b, result;
                        result = [];
                        for (b = 0; b !== my.monitors[a].queries.length; b += 1) {
                            result.push(cls.run(my.monitors[a].queries[b]));
                        }
                        my.monitors[a].callback.apply(this, [result, initial]);
                    };
                    if (my.monitors.length > 0) {
                        if (index === undefined) {
                            for (a = 0; a !== my.monitors.length; a += 1) {
                                exec(a);
                            }
                        } else {
                            exec(index);
                        }
                    }
                }.bind(cls)
            };
            return cls;
        }()),
        Storage: (function() {
            var my;
            my = {
                'sets': {
                    'local': (typeof window.localStorage !== "undefined"),
                    'session': (typeof window.sessionStorage !== "undefined"),
                    'cookie': (typeof document.cookie !== "undefined")
                },
                'cookie': {
                    getItem: function(key) {
                        return unescape(document.cookie.replace(new RegExp("(?:^|.*;\\s*)" + escape(key).replace(/[\-\.\+\*]/g, "\\$&") + "\\=((?:[^;](?!;))*[^;]?)(?:;.*)?|.*"), "$1")) || null;
                    },
                    setItem: function(key, val, expires, path) {
                        var cookie;
                        cookie = escape(key) + "=" + escape(val);
                        if (typeof expires === "string") {
                            cookie += "; expires=" + expires;
                        }
                        cookie += "; path=" + (path || "/");
                        if (WS.Storage.domain !== null) {
                            cookie += "; domain=" + WS.Storage.domain;
                        }
                        document.cookie = cookie;
                    },
                    removeItem: function(key) {
                        var a, b, domains, paths, path_parts, domain_parts;
                        if (!key) {
                            return;
                        }
                        domains = [""];
                        paths = [""];
                        domain_parts = location.hostname.split(".");
                        path_parts = location.pathname.replace(/^\/(.*?)\/$/, "$1").split("/");
                        for (a = domain_parts.length - 2; a >= 0; a -= 1) {
                            domains.push(((a > 0) ? "." : "") +
                                domain_parts.slice(a, (domain_parts.length)).join("."));
                        }
                        for (a = 0; a <= path_parts.length; a += 1) {
                            paths.push("/" +
                                path_parts.slice(0, a).join("/"));
                        }
                        document.cookie = escape(key) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT;";
                        if (my.cookie.getItem(key) !== null) {
                            _out: for (a = 0; a < domains.length; a += 1) {
                                for (b = 0; b < paths.length; b += 1) {
                                    document.cookie = escape(key) + "=;" + " expires=Thu, 01 Jan 1970 00:00:00 GMT;" +
                                        ((domains[a] !== "") ? " domain=" + domains[a] + ";" : "") +
                                        ((paths[b] !== "") ? " path=" + paths[b] : "");
                                    if (my.cookie.getItem(key) === null) {
                                        break _out;
                                    }
                                }
                            }
                        }
                    }
                },
                log: function(msg) {
                    if (typeof console !== "undefined" && console.log) {
                        console.log(msg);
                    }
                }
            };
            return {
                'types': {
                    'Session': 0,
                    'Local': 1,
                    'Cookie': 2
                },
                'modes': {
                    'standard': 0,
                    'basic': 1
                },
                'mode': 0,
                'domain': null,
                get: function(key, default_val, mode) {
                    var data, val, date, expiry_date;
                    if (default_val === undefined) {
                        default_val = null;
                    }
                    if (mode === undefined) {
                        mode = WS.Storage.mode;
                    }
                    data = null;
                    if (my.sets.session) {
                        data = sessionStorage.getItem(key);
                    }
                    if (data === null && my.sets.local) {
                        data = localStorage.getItem(key);
                    }
                    if (data === null) {
                        data = my.cookie.getItem(key);
                    }
                    if (mode !== WS.Storage.modes.standard && mode !== WS.Storage.modes.basic) {
                        throw new Error("Invalid/undefined storage mode specified." + " Mode must be one of the WS.Storage.modes items.");
                    }
                    if (data !== null && mode === WS.Storage.modes.standard) {
                        try {
                            try {
                                if ((data = $.parseJSON(data))) {
                                    if (typeof data !== "object") {
                                        data = {
                                            'val': (data.toString() || null)
                                        };
                                    }
                                }
                            } catch (e) {
                                data = {
                                    'val': (data.toString() || null)
                                };
                            }
                            if (data !== null && data.val !== null) {
                                if (data.expires) {
                                    date = new Date();
                                    expiry_date = new Date(data.expires);
                                    if (date >= expiry_date) {
                                        data = null;
                                        this.clear(key);
                                    } else {
                                        data = data.val;
                                    }
                                } else {
                                    data = data.val;
                                }
                            }
                        } catch (e) {
                            data = null;
                        }
                    }
                    if (data === null) {
                        val = default_val;
                    } else {
                        val = data;
                    }
                    return val;
                },
                set: function(key, data, expires, path, storage, mode) {
                    var method, expiry_date;
                    path = path || "/";
                    if (!key) {
                        throw new Error("A valid key is required for setting a storage item.");
                    }
                    data = {
                        'val': data
                    };
                    if (mode === undefined) {
                        mode = WS.Storage.mode;
                    }
                    if (expires !== undefined && expires !== null) {
                        if (expires.length && expires.length <= 6) {
                            expires = [expires[0] || 0, (!isNaN(expires[1]) ? (expires[1] - 1) : 0), expires[2] || 1, expires[3] || 0, expires[4] || 0, expires[5] || 0, expires[6] || 0];
                            expiry_date = new Date(expires[0], expires[1], expires[2], expires[3], expires[4], expires[5], expires[6]);
                        } else if (typeof expires === "string") {
                            expiry_date = new Date(expires);
                        } else if (expires === false) {
                            expiry_date = new Date();
                            expiry_date.setTime(expiry_date.getTime() + (365 * 24 * 60 * 60 * 1000));
                        }
                        if (!expiry_date.toUTCString) {
                            throw new Error("Expiry date " + expires + " is in invalid format.");
                        }
                        if (!my.sets.local || storage === WS.Storage.types.Cookie) {
                            if (data.val.length > 4000) {
                                throw new Error("A maximum length of 4000 characters is allowed for using cookie-based storage.");
                            }
                        }
                    }
                    if (mode === WS.Storage.modes.standard) {
                        if (expiry_date === undefined) {
                            try {
                                if (my.sets.session && storage !== WS.Storage.types.Cookie) {
                                    method = WS.Storage.types.Session;
                                    sessionStorage.setItem(key, JSON.stringify(data));
                                } else {
                                    method = WS.Storage.types.Cookie;
                                    my.cookie.setItem(key, JSON.stringify(data));
                                }
                            } catch (e) {
                                my.log(e);
                            }
                        } else {
                            if (my.sets.local && storage !== WS.Storage.types.Cookie) {
                                method = WS.Storage.types.Local;
                                try {
                                    if (expires !== false) {
                                        data.expires = expiry_date.toUTCString();
                                        localStorage.setItem(key, JSON.stringify(data));
                                    } else {
                                        localStorage.setItem(key, JSON.stringify(data));
                                    }
                                } catch (e) {
                                    my.log(e);
                                }
                            } else {
                                method = WS.Storage.types.Cookie;
                                my.cookie.setItem(key, JSON.stringify(data), expiry_date.toUTCString(), path);
                            }
                        }
                    } else if (mode === WS.Storage.modes.basic) {
                        if (data.val !== undefined) {
                            data.val = (data.val.toString() || "");
                        }
                        if (expiry_date === undefined) {
                            try {
                                if (my.sets.session && storage !== WS.Storage.types.Cookie) {
                                    method = WS.Storage.types.Session;
                                    sessionStorage.setItem(key, data.val);
                                } else {
                                    method = WS.Storage.types.Cookie;
                                    my.cookie.setItem(key, data.val);
                                }
                            } catch (e) {
                                my.log(e);
                            }
                        } else {
                            if (my.sets.local && storage !== WS.Storage.types.Cookie) {
                                method = WS.Storage.types.Local;
                                if (expires !== false) {
                                    method = WS.Storage.types.Cookie;
                                    my.cookie.setItem(key, data.val, expiry_date.toUTCString(), path);
                                } else {
                                    try {
                                        localStorage.setItem(key, data.val);
                                    } catch (e) {
                                        my.log(e);
                                    }
                                }
                            } else {
                                method = WS.Storage.types.Cookie;
                                my.cookie.setItem(key, data.val, expiry_date.toUTCString(), path);
                            }
                        }
                    } else {
                        throw new Error("Invalid/undefined storage mode specified." + " Mode must be one of the WS.Storage.modes items.");
                    }
                    return method;
                },
                clear: function(key) {
                    if (my.sets.session) {
                        sessionStorage.removeItem(key);
                    }
                    if (my.sets.local) {
                        localStorage.removeItem(key);
                    }
                    if (my.sets.cookie) {
                        my.cookie.removeItem(key);
                    }
                }
            };
        }())
    };
}(window.jQuery));
jQuery.easing['jswing'] = jQuery.easing['swing'];
jQuery.extend(jQuery.easing, {
    def: 'easeOutQuad',
    swing: function(x, t, b, c, d) {
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
    },
    easeInQuad: function(x, t, b, c, d) {
        return c * (t /= d) * t + b;
    },
    easeOutQuad: function(x, t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    },
    easeInOutQuad: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    },
    easeInCubic: function(x, t, b, c, d) {
        return c * (t /= d) * t * t + b;
    },
    easeOutCubic: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
    },
    easeInOutCubic: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    },
    easeInQuart: function(x, t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
    },
    easeOutQuart: function(x, t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    },
    easeInOutQuart: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    },
    easeInQuint: function(x, t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
    },
    easeOutQuint: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    },
    easeInOutQuint: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    },
    easeInSine: function(x, t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    },
    easeOutSine: function(x, t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
    },
    easeInOutSine: function(x, t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    },
    easeInExpo: function(x, t, b, c, d) {
        return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    },
    easeOutExpo: function(x, t, b, c, d) {
        return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    },
    easeInOutExpo: function(x, t, b, c, d) {
        if (t == 0) return b;
        if (t == d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    easeInCirc: function(x, t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    },
    easeOutCirc: function(x, t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    },
    easeInOutCirc: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    },
    easeInElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    },
    easeOutElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
    },
    easeInOutElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d / 2) == 2) return b + c;
        if (!p) p = d * (.3 * 1.5);
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
    },
    easeInBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    },
    easeOutBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    },
    easeInOutBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
        return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
    },
    easeInBounce: function(x, t, b, c, d) {
        return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
    },
    easeOutBounce: function(x, t, b, c, d) {
        if ((t /= d) < (1 / 2.75)) {
            return c * (7.5625 * t * t) + b;
        } else if (t < (2 / 2.75)) {
            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
        } else if (t < (2.5 / 2.75)) {
            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
        } else {
            return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
        }
    },
    easeInOutBounce: function(x, t, b, c, d) {
        if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
        return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
    }
}); /***An HTML DOM element.*@typedef{Object}HTMLElement*/
(function($, viewport, doc, WS, ob_set) {
    if (typeof ob_set === "undefined") {
        ob_set = function(ob, defaults) {
            var key;
            for (key in defaults) {
                if (defaults.hasOwnProperty(key)) {
                    if (defaults[key] !== null && defaults[key].constructor === Object) {
                        ob[key] = ob_set(ob[key] || {}, defaults[key]);
                    } else if (ob[key] === undefined) {
                        ob[key] = defaults[key];
                    }
                }
            }
            return ob;
        };
    }
    WS.WhiteBox = function(options) {
        var cls, my, WhiteBoxBG;
        cls = {
            register: function() {
                return my.register.apply(cls, arguments);
            },
            load: function(type, options, bgoptions) {
                if (!cls.enabled) {
                    return true;
                }
                options = ob_set(options || {}, WS.WhiteBox.defaults.overlay);
                bgoptions = ob_set(bgoptions || {}, WS.WhiteBox.defaults.background);
                if (cls.active) {
                    my.cleanup();
                }
                cls.overlay.trigger("overlay:load", {
                    'handler': cls,
                    'type': type,
                    'options': options
                });
                if (options.show.modal === true) {
                    cls.modal = true;
                }
                cls.overlay.className = "wb-type-" + type;
                if (options.class_name !== null) {
                    cls.overlay.addClass(options.class_name);
                    cls.overlay_class = options.class_name;
                }
                switch (type) {
                    case 'ajax':
                        my.log("Loading " + type + " whitebox; uri: '" + options.uri + "'");
                        new Ajax.Request(options.uri, {
                            'method': 'post',
                            'onSuccess': function(response) {
                                cls.loader = $("<div>").text(response.responseText);
                                cls.loader = cls.loader.childElements()[0];
                                my.load_process(options, bgoptions);
                            },
                            'on404': function(response) {
                                location.href = response.request.url;
                            },
                            'on403': function(response) {
                                location.href = response.request.url;
                            }
                        });
                        break;
                    case 'inline':
                        my.log("Loading " + type + " whitebox; uri: '" + options.element.tagName +
                            (options.element.id ? "#" + options.element.id : "") + "'");
                        if (options.duplicate) {
                            cls.loader = options.element.clone(true, true);
                        } else {
                            cls.loader = options.element;
                        }
                        cls.loader.css({
                            'display': 'block',
                            'visibility': 'visible'
                        });
                        my.load_process(options, bgoptions);
                        break;
                    case 'image':
                        my.log("Loading " + type + " whitebox; uri: '" + options.uri + "'");
                        cls.loader = new Image();
                        cls.loader.onload = function() {
                            doc.append($(cls.loader).css({
                                'display': 'block'
                            }));
                            my.load_process(options, bgoptions);
                        };
                        cls.loader.src = options.uri;
                        break;
                    default:
                        my.log("Loading " + type + " whitebox; uri: '" + options.uri + "'");
                        if (options.uri !== undefined) {
                            cls.loader = $("<iframe>", {
                                'src': options.uri,
                                'width': options.frame.width,
                                'height': options.frame.height
                            }).css({
                                'display': 'block',
                                'border': 0,
                                'backgroundColor': '#fff'
                            });
                        }
                        my.load_process(options, bgoptions);
                }
            },
            post_load_process: function() {
                return my.post_load_process.apply(this, arguments);
            },
            hide: function(options) {
                options = options || {};
                options = ob_set(options, WS.WhiteBox.defaults.overlay);
                if (!options.hide.callback || (options.hide.callback && options.hide.callback.apply(cls))) {
                    my.scrolling(true);
                    cls.bg.hide();
                    if (options.hide.delay > 0) {
                        cls.overlay.animate({
                            'opacity': 0
                        }, (options.show.delay * 1000), options.show.easing, function() {
                            cls.overlay.hide();
                            cls.active = false;
                            cls.overlay.trigger("overlay:hidden", cls);
                            my.cleanup();
                        });
                    } else {
                        cls.overlay.css({
                            'opacity': 0
                        }).hide();
                        cls.active = false;
                        cls.overlay.trigger("overlay:hidden", cls);
                        my.cleanup();
                    }
                }
            },
            adjust: function() {
                var bounds, scrolled, left, top, offsets;
                bounds = my.bounds();
                scrolled = {
                    'left': viewport.scrollLeft(),
                    'top': viewport.scrollTop()
                };
                if (this.content.width() >= bounds.vp.width) {
                    this.content.css({
                        'width': bounds.vp.width + 'px'
                    });
                }
                this.overlay.css({
                    'width': this.content.width() + 'px',
                    'height': this.content.height() + 'px'
                });
                this.content.css({
                    'overflow': 'visible'
                });
                left = (Math.round((bounds.vp.width / 2) - (cls.overlay.width() / 2)) + scrolled.left);
                top = (Math.round((bounds.vp.height / 2) - (cls.overlay.height() / 2)) + scrolled.top);
                offsets = this.options.root.offset();
                left = (left - offsets.left);
                top = (top - offsets.top);
                if (left < WS.WhiteBox.defaults.overlay.frame.margin) {
                    left = WS.WhiteBox.defaults.overlay.frame.margin;
                }
                if (top < WS.WhiteBox.defaults.overlay.frame.margin) {
                    top = WS.WhiteBox.defaults.overlay.frame.margin;
                }
                this.overlay.css({
                    'left': left + 'px',
                    'top': top + 'px'
                });
            },
            bounds: function() {
                return my.bounds.apply(this, arguments);
            }
        };
        my = {
            enable: function() {
                var a;
                cls.enabled = false;
                cls.active = false;
                cls.modal = false;
                cls.options = options || {};
                cls.options = ob_set(cls.options, {
                    'zindex': 3000,
                    'elements': [],
                    'root': null
                });
                cls.options.root = $(cls.options.root);
                if (!cls.options.root.length) {
                    cls.options.root = doc;
                }
                my.registry = [];
                cls.loader = null;
                cls.options.root.append(cls.overlay = $("<div>", {
                    'id': 'whitebox-overlay'
                }).css({
                    'display': 'none',
                    'opacity': '0',
                    'position': 'absolute',
                    'zIndex': cls.options.zindex + 1,
                    'width': '100%',
                    'height': '100%'
                }).append(cls.content = $("<div>", {
                    'class': 'content'
                }).css({
                    'position': 'relative',
                    'overflow': 'hidden',
                    'float': 'left',
                    'margin': 0,
                    'padding': 0
                })));
                for (a = 0; a < cls.options.elements.length; a += 1) {
                    cls.overlay.append(cls.options.elements[a]);
                }
                viewport.bind("resize", function() {
                    my.resize();
                });
                cls.enabled = true;
            },
            register: function(elements, event, type, options, halt) {
                if (halt === undefined) {
                    halt = true;
                }
                $(elements).each(function() {
                    var opt, element = this;
                    if (typeof options === "function") {
                        opt = options.apply(element);
                    } else {
                        opt = options;
                    }
                    $(this).bind(event, function(event) {
                        if (halt && cls.enabled) {
                            event.preventDefault();
                            event.stopPropagation();
                        }
                        if (cls.enabled) {
                            cls.load(type, opt);
                        }
                    });
                    my.registry.push({
                        'element': this,
                        'event': event,
                        'type': type,
                        'options': opt
                    });
                });
            },
            load_process: function(options, bgoptions) {
                cls.overlay.show();
                cls.content.append(cls.loader);
                if (!options.load.callback || (options.load.callback && options.load.callback.apply(cls, [options, bgoptions]))) {
                    my.post_load_process(options, bgoptions);
                }
            },
            post_load_process: function(options, bgoptions) {
                var bounds;
                bounds = my.bounds();
                cls.overlay.trigger("overlay:loaded", {
                    'handler': cls,
                    'options': options,
                    'bgoptions': bgoptions
                });
                cls.adjust();
                my.show(options, bgoptions);
            },
            show: function(options, bgoptions) {
                var a, active, bg_defaults;
                active = cls.active;
                cls.active = true;
                if (!active) {
                    if (options.show.modal) {
                        bg_defaults = {
                            'show': {
                                'modal': options.show.modal
                            }
                        };
                    } else {
                        bg_defaults = {};
                    }
                    cls.bg.show(ob_set(bg_defaults, bgoptions));
                }
                if (options.show.scroll === false) {
                    my.scrolling(false);
                }
                if (options.show.modal === true) {
                    cls.overlay.addClass("modal");
                } else {
                    cls.overlay.removeClass("modal");
                }
                if (options.show.delay > 0 && !active) {
                    cls.overlay.animate({
                        'opacity': 1
                    }, (options.show.delay * 1000), options.show.easing, function() {
                        cls.overlay.trigger("overlay:shown", {
                            'handler': cls,
                            'options': options
                        });
                    });
                } else {
                    cls.overlay.css({
                        'opacity': 1
                    });
                    if (!active) {
                        cls.overlay.trigger("overlay:shown", {
                            'handler': cls,
                            'options': options
                        });
                    }
                }
                return true;
            },
            scrolling: function(scrollable) {
                if (scrollable) {
                    if (doc.data("overflow") !== undefined) {
                        doc.css({
                            'overflow': doc.data("overflow")
                        });
                    }
                } else {
                    if (doc.data("overflow") === undefined) {
                        doc.data("overflow", doc.css("overflow") || "auto");
                    }
                    doc.css({
                        'overflow': 'hidden'
                    });
                }
            },
            cleanup: function() {
                var a;
                if (cls.loader) {
                    if (cls.loader.parentNode) {
                        cls.loader.remove();
                    }
                    cls.loader = null;
                }
                cls.content.css({
                    'overflow': 'hidden',
                    'width': 'auto',
                    'height': 'auto'
                }).text("");
                cls.overlay.css({
                    'width': '100%',
                    'height': '100%'
                }).hide().css({
                    'opacity': 0
                });
                if (cls.overlay_class !== null) {
                    cls.overlay.removeClass(cls.overlay_class);
                    delete cls.overlay_class;
                }
                for (a = 0; a < cls.options.elements.length; a += 1) {
                    cls.options.elements[a].removeClass("disabled");
                }
            },
            resize: function() {
                var left, bounds, scrolled_left, offsets;
                bounds = my.bounds();
                scrolled_left = viewport.scrollLeft();
                left = (Math.round((bounds.vp.width / 2) - (cls.overlay.width() / 2)) + scrolled_left);
                offsets = cls.options.root.offset();
                left = (left - offsets[0]);
                cls.overlay.css({
                    'left': left + 'px'
                });
            },
            bounds: function() {
                var vp_dimensions, doc_dimensions, w, h;
                vp_dimensions = {
                    'width': viewport.width(),
                    'height': viewport.height()
                };
                doc_dimensions = {
                    'width': doc.width(),
                    'height': doc.height()
                };
                w = (doc_dimensions.width > vp_dimensions.width ? doc_dimensions.width : vp_dimensions.width);
                h = (doc_dimensions.height > vp_dimensions.height ? doc_dimensions.height : vp_dimensions.height);
                return {
                    'width': w,
                    'height': h,
                    'vp': {
                        'width': vp_dimensions.width,
                        'height': vp_dimensions.height
                    }
                };
            },
            log: function(msg) {
                if (typeof console !== "undefined") {
                    console.log(msg);
                }
            }
        };
        WhiteBoxBG = function($super) {
            var my, bounds, offset;
            bounds = $super.bounds();
            offset = $super.options.root.offset();
            my = {
                shader: $("<div>", {
                    'id': 'whitebox-bg'
                }).css({
                    'position': 'fixed',
                    'zIndex': $super.options.zindex,
                    'left': 0,
                    'top': 0,
                    'right': 0,
                    'bottom': 0
                }).hide()
            };
            $super.options.root.append(my.shader);
            my.shader.css({
                'opacity': 0
            });
            return {
                shader: my.shader,
                show: function(options) {
                    options = ob_set(options || {}, WS.WhiteBox.defaults.background);
                    $super.adjust(true, true);
                    my.shader.show();
                    if (!options.show.modal) {
                        my.shader.bind("click", function() {
                            $super.hide();
                        });
                        my.shader.removeClass("modal");
                    } else {
                        my.shader.addClass("modal");
                    }
                    if (options.show.delay > 0) {
                        my.shader.animate({
                            'opacity': options.opacity
                        }, (options.show.delay * 1000), options.show.easing, function() {
                            my.shader.trigger("shader:shown", this);
                        });
                    } else {
                        my.shader.css({
                            'opacity': options.opacity
                        });
                        my.shader.trigger("shader:shown", this);
                    }
                },
                hide: function(options) {
                    options = options || {};
                    options = ob_set(options, WS.WhiteBox.defaults.background);
                    my.shader.unbind("click");
                    if (options.hide.delay > 0) {
                        my.shader.animate({
                            'opacity': 0
                        }, (options.hide.delay * 1000), options.hide.easing, function() {
                            my.shader.hide();
                            my.shader.trigger("shader:hidden", this);
                        });
                    } else {
                        my.shader.css({
                            'opacity': 0
                        });
                        my.shader.hide();
                        my.shader.trigger("shader:hidden", this);
                    }
                },
                adjust: function(bounds, offset) {
                    if (!bounds) {
                        bounds = my.bounds();
                    }
                    offset = offset || [0, 0];
                }
            };
        };
        my.enable();
        cls.bg = new WhiteBoxBG(cls);
        return cls;
    };
    WS.WhiteBox.defaults = {
        'overlay': {
            'class_name': null,
            'frame': {
                'width': 800,
                'height': 450,
                'margin': 15
            },
            'uri': null,
            'element': null,
            'duplicate': true,
            'load': {
                'callback': null
            },
            'show': {
                'delay': 0.3,
                'modal': false,
                'easing': 'swing',
                'scroll': true
            },
            'hide': {
                'callback': null,
                'delay': 0
            }
        },
        'background': {
            'opacity': 0.5,
            'show': {
                'delay': 0.3,
                'modal': false,
                'easing': 'swing'
            },
            'hide': {
                'delay': 0.3,
                'easing': 'swing'
            }
        }
    };
    window.WS = WS;
}(window.jQuery, window.jQuery(window), window.jQuery(document.body), (window.WS || {}), window.ob_set));
(function($, $win, $doc, WS, ob_set) {
    if (!Object.keys) {
        Object.keys = (function() {
            'use strict';
            var hasOwnProperty = Object.prototype.hasOwnProperty,
                hasDontEnumBug = !({
                    toString: null
                }).propertyIsEnumerable('toString'),
                dontEnums = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'],
                dontEnumsLength = dontEnums.length;
            return function(obj) {
                if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
                    throw new TypeError('Object.keys called on non-object');
                }
                var result = [],
                    prop, i;
                for (prop in obj) {
                    if (hasOwnProperty.call(obj, prop)) {
                        result.push(prop);
                    }
                }
                if (hasDontEnumBug) {
                    for (i = 0; i < dontEnumsLength; i++) {
                        if (hasOwnProperty.call(obj, dontEnums[i])) {
                            result.push(dontEnums[i]);
                        }
                    }
                }
                return result;
            };
        }());
    }
    if (typeof WS === "undefined") {
        throw new Error("Whitespace utility namespace does not exist");
    }
    WS.Access = function(options, wb, gat) {
        var my, cls;
        cls = {
            enable: function(enabled) {
                my.status.enabled = (enabled === true);
                if (my.gui.toolbar) {
                    if (my.status.enabled) {
                        my.gui.toolbar.addClass("enabled");
                        my.gui.toolbar.removeClass("disabled");
                    } else {
                        my.gui.toolbar.removeClass("enabled");
                        my.gui.toolbar.addClass("disabled");
                    }
                }
            },
            activate: function() {
                my.activate.apply(cls, arguments);
            },
            focus: function() {
                my.focus.apply(cls, arguments);
            },
            contrast: function() {
                my.contrast.activate.apply(cls, arguments);
            },
            highlight: function() {
                my.highlight.activate.apply(cls, arguments);
            },
            search: function() {
                my.search.select.apply(cls, arguments);
            },
            zoom: function() {
                my.zoom.activate.apply(cls, arguments);
            },
            readahead: function() {
                return my.readahead.activate.apply(cls, arguments);
            }
        };
        my = {
            modifiers: {
                '18': 'alt',
                '17': 'ctrl',
                '91': 'cmd',
                '16': 'shift'
            },
            active_modifiers: {},
            modifier_stick_count: {},
            keys: {
                '27': 'escape',
                '13': 'enter',
                '65': 'a',
                '67': 'c',
                '72': 'h',
                '82': 'r',
                '83': 's',
                '90': 'z'
            },
            codes: {
                'escape': 27,
                'enter': 13,
                'a': 65,
                'c': 67,
                'h': 72,
                'r': 82,
                's': 83,
                'z': 90
            },
            mutex: {
                'zoom': ['readahead', 'highlight', 'search'],
                'readahead': ['zoom', 'search']
            },
            exclude_key_tags: ['input', 'select', 'textarea'],
            status: {
                'contrast': false,
                'storage': false,
                'zoom': false,
                'readahead': false,
                'mutex': []
            },
            classes: {
                'gui': 'ws-access-gui',
                'dialog': 'ws-access-dialog',
                'keyboard': 'keyboard-key',
                'highlight': 'keyboard-key-highlight',
                'zoom': 'ws-zoomsize-increase'
            },
            enable: function() {
                var activated, modifier;
                options = ob_set(options || {}, {
                    'elements': {
                        'search_field': null
                    },
                    'highlight_hud': {
                        'border_width': 5
                    },
                    'modifiers': {
                        'stick': {
                            'duration': 4
                        },
                        'shift': {
                            'stick_act_count': 3
                        }
                    }
                });
                my.gui = {
                    'labels': {},
                    'tips': $(),
                    'css': {},
                    'popups': {
                        'welcome': {
                            'header': 'Extended Accessibility Enabled',
                            'content': ['This website now supports extra functions for enhanced accessibility. A toolbar at the top of this window will provide you with features and options to improve usability.', 'You can press [Esc] to cancel most functions, or to close dialogs such as this one.', 'Press [Alt]-[A] to focus the toolbar at any time.', 'Press [Shift] ' + options.modifiers.shift.stick_act_count + ' times, and then [A] to close the toolbar.', 'Press [Enter] or click this dialog to close this message.']
                        },
                        'readahead': {
                            'header': 'ReadAhead Advance Reader',
                            'content': ['The ReadAhead feature will show the content from any standard link on the page in a window, giving you a small and readable preview of the content on that page.', 'If you decide to read the whole page, you can press {Enter} or click the dialog to visit the page.', 'Any links clicked while ReadAhead is enabled will display using a preview. Click the &lsquo;ReadAhead&rsquo; toolbar button again to disable.', 'Press [Enter] or click this dialog to close this message.']
                        },
                        'outline': {
                            'content': ['Press [Enter] or click this dialog to read the full page or [Esc] to close.']
                        }
                    }
                };
                my.elements = {};
                my.effects = {};
                my.timers = {
                    'keys': {},
                    'ui': {}
                };
                for (modifier in WS.Access.modifiers) {
                    if (WS.Access.modifiers.hasOwnProperty(modifier)) {
                        my.modifier_stick_count[WS.Access.modifiers[modifier]] = 0;
                    }
                }
                if (wb) {
                    if (typeof wb.load === "undefined") {
                        throw new Error("The defined WS.WhiteBox class instance is invalid.");
                    } else {
                        wb.overlay.bind("overlay:shown", function(event) {
                            var overlay = $(this),
                                anchor;
                            cls.enable(false);
                            my.status.overlay = true;
                            if ((anchor = overlay.find("a." + my.classes.dialog)).length) {
                                anchor.focus();
                            }
                        }).bind("overlay:hidden", function() {
                            cls.enable(true);
                            my.status.overlay = false;
                        });
                    }
                }
                if (gat && typeof gat.track === "undefined") {
                    throw new Error("The defined WSGat class instance is invalid.");
                }
                if (WS.Storage) {
                    my.status.messages = window.WS.Storage.get("ws-messages", {});
                    activated = window.WS.Storage.get("ws-access-enabled", false);
                }
                my.elements.access_links = $("a[accesskey]");
                my.elements.keys = {};
                $("span." + my.classes.keyboard).each(function() {
                    var el = $(this),
                        label;
                    label = el.text();
                    label = label.toLowerCase();
                    if (!my.elements.keys[label]) {
                        my.elements.keys[label] = $();
                    }
                    my.elements.keys[label] = my.elements.keys[label].add(el);
                });
                $doc.on("focus blur", "a[title], area[title]", my.eventRegister("focus"));
                my.num_access_labels = Object.keys(my.elements.keys).length;
                $win.bind("keyup keydown", my.eventRegister("key")).bind("resize", my.eventRegister("resize"));
                my.access_css('static', true);
                my.status.enabled = true;
                my.status.active = false;
                if (activated) {
                    cls.activate(true);
                }
            },
            activate: function(active) {
                if (active === true) {
                    if (gat) {
                        gat.track_event("WS.Access", "Activate");
                    }
                    if (!my.gui.shim) {
                        my.gui.shim = $("<div>", {
                            'id': 'ws-access-shim',
                            'class': my.classes.gui
                        });
                        $doc.children().each(function() {
                            my.gui.shim.append($(this));
                        });
                        $doc.append(my.gui.shim);
                        my.gui.shim.bind("click", my.event);
                    }
                    if (!my.gui.sandbox) {
                        $doc.append(my.gui.sandbox = $("<div>", {
                            'id': 'ws-access-sandbox',
                            'class': my.classes.gui + ' ' + my.classes.dialog
                        }).css({
                            'position': 'absolute',
                            'visibility': 'hidden',
                            'zIndex': 0
                        }));
                    }
                    my.status.active = true;
                    my.access_css("active", true);
                    if (WS.Storage) {
                        window.WS.Storage.set("ws-access-enabled", true, false);
                        if (!my.status.messages.welcome) {
                            my.popup(my.gui.popups.welcome);
                            my.message_set("welcome");
                        }
                    }
                    my.create_gui(true);
                    my.resize();
                } else {
                    my.status.active = false;
                    my.create_gui(false);
                    my.access_css("active", false);
                    if (WS.Storage) {
                        window.WS.Storage.clear("ws-access-enabled");
                    }
                    my.gui.shim.css({
                        'padding-top': 0
                    });
                    my.popup();
                    cls.contrast(false);
                    cls.highlight(false);
                    my.tooltip();
                }
            },
            eventRegister: function(id) {
                return function(event) {
                    my.event.apply(this, [event, id]);
                };
            },
            event: function(event, id) {
                var active, status_change, reset_modifier_stick, element, modifier, modifiers;
                switch (event.type) {
                    case "keyup":
                        if (my.num_access_labels > 0) {
                            my.label_highlight(event.keyCode);
                        }
                        switch (event.keyCode) {
                            case WS.Access.modifiers.ALT:
                            case WS.Access.modifiers.CTRL:
                            case WS.Access.modifiers.SHIFT:
                            case WS.Access.modifiers.CMD:
                                my.active_modifiers[event.keyCode] = false;
                                my.modifier_stick_count[event.keyCode] += 1;
                                my.key_stick_reset(event.keyCode);
                                return;
                        }
                        break;
                    case "keydown":
                        if (my.num_access_labels > 0) {
                            my.label_highlight(event.keyCode, (true));
                        }
                        switch (event.keyCode) {
                            case WS.Access.modifiers.ALT:
                            case WS.Access.modifiers.CTRL:
                            case WS.Access.modifiers.SHIFT:
                            case WS.Access.modifiers.CMD:
                                my.active_modifiers[event.keyCode] = true;
                                return;
                            case my.codes.escape:
                                if (my.status.active) {
                                    if (wb && wb.active) {
                                        wb.hide();
                                    }
                                    if (my.status.readahead) {
                                        cls.readahead(false);
                                    }
                                    if (my.status.zoom) {
                                        cls.zoom(false);
                                    }
                                    my.tooltip();
                                }
                                break;
                        }
                        if (my.key_check(event)) {
                            modifiers = false;
                            for (modifier in my.active_modifiers) {
                                if (my.active_modifiers.hasOwnProperty(modifier)) {
                                    if (my.active_modifiers[modifier] === true) {
                                        modifiers = true;
                                        break;
                                    }
                                }
                            }
                            switch (event.keyCode) {
                                case my.codes.a:
                                    if (my.modifier_stick_count[WS.Access.modifiers.SHIFT] >= options.modifiers.shift.stick_act_count) {
                                        event.preventDefault();
                                        active = !my.status.active;
                                        status_change = true;
                                        reset_modifier_stick = true;
                                    } else if (my.active_modifiers[WS.Access.modifiers.ALT]) {
                                        if (my.status.active) {
                                            event.preventDefault();
                                            cls.focus();
                                        }
                                    } else {
                                        return;
                                    }
                                    break;
                                case my.codes.c:
                                    if (my.status.active && !modifiers) {
                                        event.preventDefault();
                                        cls.contrast();
                                    }
                                    break;
                                case my.codes.h:
                                    if (my.status.active) {
                                        event.preventDefault();
                                        if (my.active_modifiers[WS.Access.modifiers.ALT]) {
                                            my.popup(my.gui.popups.welcome);
                                        } else if (!modifiers) {
                                            cls.highlight();
                                        }
                                    }
                                    break;
                                case my.codes.s:
                                    if (my.status.active) {
                                        if (my.active_modifiers[WS.Access.modifiers.ALT]) {
                                            event.preventDefault();
                                            my.search.select();
                                        }
                                    }
                                    break;
                                case my.codes.z:
                                    if (my.status.active && !modifiers) {
                                        event.preventDefault();
                                        cls.zoom();
                                    }
                                    break;
                                case my.codes.r:
                                    if (my.status.active && !modifiers) {
                                        event.preventDefault();
                                        cls.readahead();
                                    }
                                    break;
                            }
                        }
                        if (event.type === "keydown") {
                            if (status_change) {
                                cls.activate(active);
                            }
                            if (reset_modifier_stick) {
                                for (modifier in my.modifier_stick_count) {
                                    if (my.modifier_stick_count.hasOwnProperty(modifier)) {
                                        if (my.timers.keys[modifier]) {
                                            window.clearTimeout(my.timers.keys[modifier]);
                                            delete my.timers.keys[modifier];
                                        }
                                        my.modifier_stick_count[modifier] = 0;
                                    }
                                }
                            }
                        }
                        break;
                    case "resize":
                        if (my.status.active) {
                            my.resize();
                        }
                        break;
                    case "click":
                        if (my.status.active) {
                            element = $(event.target).closest("a");
                            if (my.status.readahead) {
                                if (element.length && (!element.closest("#access-toolbar").length && !element.hasClass(my.classes.dialog))) {
                                    if (element[0].tagName === "A" && (element.attr("href") !== "#" && element[0].hostname === location.hostname)) {
                                        event.preventDefault();
                                        my.tooltip();
                                        my.fetch_content(element.attr("href"), true, true);
                                    }
                                }
                            }
                            if (my.status.zoom && my.zoom.hud_element) {
                                event.preventDefault();
                                my.zoom.ctrl();
                            }
                        }
                        break;
                    case "focusin":
                        my.element_post_focus($(this), "focus");
                        break;
                    case "focusout":
                        my.element_post_focus($(this), "blur");
                        break;
                    default:
                        return;
                }
                return;
            },
            focus: function() {
                my.gui.toolbar.find("a").first().focus();
            },
            key_check: function(event) {
                var element = $(event.target);
                if (my.status.overlay || (my.exclude_key_tags.indexOf(element[0].tagName.toLowerCase()) !== -1 && !(my.active_modifiers[WS.Access.modifiers.ALT]))) {
                    return false;
                } else {
                    return true;
                }
            },
            key_stick_reset: function(keycode) {
                if (my.timers.keys[keycode]) {
                    window.clearTimeout(my.timers.keys[keycode]);
                }
                my.timers.keys[keycode] = window.setTimeout(function() {
                    my.modifier_stick_count[keycode] = 0;
                    delete my.timers.keys[keycode];
                }, (options.modifiers.stick.duration * 1000));
            },
            resize: function() {
                if (my.status.active) {
                    my.gui.shim.css({
                        'paddingTop': my.gui.toolbar.outerHeight() + 'px'
                    });
                    if (my.status.zoom) {
                        cls.zoom(false);
                    }
                }
            },
            call: function(fn) {
                if (my.status.enabled) {
                    var args = Array.prototype.slice.call(arguments);
                    args.shift();
                    return fn.apply(cls, args);
                } else {
                    return false;
                }
            },
            set_mutex: function(key) {
                var a, label;
                my.status.mutex = [];
                if (my.mutex[key]) {
                    for (a = 0; a != my.mutex[key].length; a += 1) {
                        if (my.gui.labels[my.mutex[key][a]]) {
                            my.gui.labels[my.mutex[key][a]].removeClass("enabled").addClass("disabled");
                            my.status.mutex.push(my.mutex[key][a]);
                        }
                    }
                } else {
                    for (label in my.gui.labels) {
                        if (my.gui.labels.hasOwnProperty(label)) {
                            my.gui.labels[label].addClass("enabled").removeClass("disabled");
                        }
                    }
                }
            },
            label_highlight: function(key, highlight) {
                var keys;
                if (!my.status.enabled) {
                    return true;
                }
                if (my.modifiers[key] && (keys = my.elements.keys[my.modifiers[key]])) {
                    if (highlight) {
                        keys.addClass(my.classes.highlight);
                    } else {
                        keys.removeClass(my.classes.highlight);
                    }
                }
            },
            create_gui: function(show) {
                var shortcuts, access_links;
                if (show) {
                    if (!my.gui.highlight_hud) {
                        my.gui.highlight_hud = $("<div>", {
                            'id': 'ws-access-highlight-hud',
                            'class': my.classes.gui
                        }).css({
                            'position': 'absolute',
                            'zIndex': '2147483647',
                            'borderWidth': options.highlight_hud.border_width + 'px',
                            'background': 'rgba(255, 255, 255, 0.3)',
                            'pointerEvents': 'none'
                        }).hide();
                    }
                    if (my.gui.highlight_hud.css("pointerEvents") === "none") {
                        $doc.append(my.gui.highlight_hud);
                    } else {
                        delete my.gui.highlight_hud;
                    }
                    if (!my.gui.toolbar) {
                        my.gui.toolbar = $("<div>", {
                            'id': 'access-toolbar',
                            'class': my.classes.gui + ' enabled'
                        }).append($("<div>", {
                            'class': my.classes.gui + ' content'
                        }).append(shortcuts = $("<ul>", {
                            'class': 'shortcuts'
                        })));
                        if (my.elements.access_links.length > 0) {
                            shortcuts.append(access_links = $("<ul>", {
                                'class': 'access-links'
                            }));
                            my.elements.access_links.each(function() {
                                var link = $(this),
                                    text, href, id, container;
                                href = link.attr("href");
                                id = my.convertToId(href);
                                if (id !== "" && (container = $("#" + id)).length) {
                                    text = link.text();
                                    text = text.replace(/jump\s?to/i, "&rarr;");
                                    access_links.append($("<li>", {
                                        'class': 'content-link'
                                    }).append($("<a>", {
                                        'href': link.attr("href")
                                    }).html('<span class="label">' + text + '</span>').bind("click", function(event) {
                                        event.preventDefault();
                                        my.call(my.element_focus, event, container, true);
                                    })));
                                }
                            });
                        }
                        shortcuts.append(my.gui.labels.contrast = $("<li>", {
                            'class': 'enabled'
                        }).append($("<a>", {
                            'href': '#',
                            'title': 'Toggle high contrast mode'
                        }).html('<strong>C</strong> <span class="label">High contrast</span>').bind("click", function(event) {
                            event.preventDefault();
                            my.call(cls.contrast);
                        })));
                        if (wb) {
                            shortcuts.append(my.gui.labels.disable = $("<li>", {
                                'class': 'enabled'
                            }).append($("<a>", {
                                'href': '#',
                                'title': 'Display help'
                            }).html('<strong>' + my.modifiers[WS.Access.modifiers.ALT] + '-H</strong> <span class="label">Help</span>').bind("click", function(event) {
                                event.preventDefault();
                                my.call(my.popup, my.gui.popups.welcome);
                            }))).append(my.gui.labels.readahead = $("<li>", {
                                'class': 'enabled'
                            }).append($("<a>", {
                                'href': '#',
                                'title': 'Read linked content before loading it'
                            }).html('<strong>R</strong> <span class="label">ReadAhead</span>').bind("click", function(event) {
                                event.preventDefault();
                                my.call(cls.readahead);
                            })));
                        }
                        if (my.gui.highlight_hud) {
                            shortcuts.append(my.gui.labels.zoom = $("<li>", {
                                'class': 'enabled'
                            }).append($("<a>", {
                                'href': '#',
                                'title': 'Zoom area'
                            }).html('<strong>Z</strong> <span class="label">Zoom area</span>').bind("click", function(event) {
                                event.preventDefault();
                                my.call(cls.zoom);
                            })));
                        }
                        if (options.elements.search_field) {
                            shortcuts.append(my.gui.labels.search = $("<li>", {
                                'class': 'enabled'
                            }).append($("<a>", {
                                'href': '#',
                                'title': 'Select the search text box'
                            }).html('<strong>' + my.modifiers[WS.Access.modifiers.ALT] + '-S</strong> <span class="label">Search site</span>').bind("click", function(event) {
                                event.preventDefault();
                                my.call(cls.search);
                            })));
                        }
                        if (my.elements.access_links.length > 0) {
                            shortcuts.append(my.gui.labels.highlight = $("<li>", {
                                'class': 'enabled'
                            }).append($("<a>", {
                                'href': '#',
                                'title': 'Toggle highlighting of content areas'
                            }).html('<strong>H</strong> <span class="label">Highlight Areas</span>').bind("click", function(event) {
                                event.preventDefault();
                                my.call(cls.highlight);
                            })));
                        }
                        $doc.append(my.gui.tooltip = $("<div>", {
                            'id': 'ws-access-tooltip'
                        }).css({
                            'position': 'absolute',
                            'visibility': 'hidden'
                        }));
                    }
                    $doc.prepend(my.gui.toolbar);
                    my.highlight.reset();
                    cls.focus();
                } else {
                    if (my.gui.toolbar) {
                        my.gui.toolbar.remove();
                    }
                    if (my.gui.highlight_hud) {
                        my.gui.highlight_hud.remove();
                    }
                }
            },
            access_css: function(id, enable) {
                var css_str, css, a;
                if (!WS.Access.css[id]) {
                    return;
                } else {
                    css = WS.Access.css[id];
                }
                if (css !== undefined && css !== null) {
                    if (enable && !my.gui.css[id]) {
                        $("head").append(my.gui.css[id] = $("<style>", {
                            'type': 'text/css',
                            'media': 'screen, projection'
                        }));
                        if (my.gui.css[id][0].styleSheet) {
                            css_str = "";
                            for (a = 0; a != css.length; a += 1) {
                                css_str = css_str + css[a] + " ";
                            }
                            my.gui.css[id][0].styleSheet.cssText = css_str;
                        } else if (my.gui.css[id][0].sheet) {
                            for (a = 0; a != css.length; a += 1) {
                                my.gui.css[id][0].sheet.insertRule(css[a], 0);
                            }
                        }
                    } else if (!enable) {
                        if (my.gui.css[id]) {
                            my.gui.css[id].remove();
                            delete my.gui.css[id];
                        }
                    }
                }
            },
            element_focus: function(event, element, find_link) {
                if (typeof Effect !== "undefined") {
                    if (event && "preventDefault" in event) {
                        event.preventDefault();
                    }
                    new Effect.ScrollTo(element, {
                        'offset': -my.gui.toolbar.offsetHeight,
                        'duration': 0.5,
                        'afterFinish': function() {
                            var links;
                            if (find_link) {
                                links = element.select("a[href]", "area[href]");
                                if (links.length > 0 && my.element_within_vp(links[0])) {
                                    links[0].focus();
                                }
                            }
                            new Effect.Highlight(element, {
                                'duration': 0.4
                            });
                            if (element.hasAttribute("tabindex")) {
                                element.focus();
                            }
                        }
                    });
                }
            },
            element_post_focus: function(element, type) {
                var title;
                if (type === "focus") {
                    if (my.status.active) {
                        if (my.status.readahead) {
                            my.readahead.target(null, element);
                        } else {
                            title = element.attr("title");
                            if (typeof title === "string" && title.length > 0) {
                                title = "&ldquo;<i>" + title + "</i>&rdquo;";
                                my.tooltip(element, title);
                            }
                        }
                    }
                } else {
                    my.tooltip(element);
                }
            },
            element_within_vp: function(element) {
                var offset, element_offset, vp;
                offset = $doc.viewport.getScrollOffsets();
                vp = $doc.viewport.outerHeight();
                offset.bottom = offset.top + vp;
                element_offset = element.offset();
                element_offset[2] = element_offset[1] + element.outerHeight();
                return ((element_offset[1] > offset.top && element_offset[1] < offset.bottom) || (element_offset[1] <= offset.top && element_offset[2] >= offset.bottom) || (element_offset[2] > offset.top && element_offset[2] < offset.bottom));
            },
            tooltip: function(element, text) {
                var element_pos;
                if (element !== undefined && typeof text === "string") {
                    my.gui.tooltip.html(text);
                    element_pos = element.offset();
                    my.gui.tooltip.css({
                        'visibility': 'visible',
                        'top': (element_pos.top - my.gui.tooltip.outerHeight()) - (2) + 'px',
                        'left': element_pos.top + 'px'
                    });
                } else {
                    my.gui.tooltip.css({
                        'visibility': 'hidden'
                    });
                }
            },
            search: {
                select: function() {
                    var field;
                    if (my.status.mutex.indexOf("search") === -1 && (field = options.elements.search_field).length) {
                        field.focus();
                        my.highlight.target(null, field.closest("form"), 2);
                    }
                }
            },
            readahead: {
                activate: function(activate) {
                    if (my.status.mutex.indexOf("readahead") === -1) {
                        if (activate === undefined) {
                            my.status.readahead = !(my.status.readahead);
                        } else {
                            my.status.readahead = activate;
                        }
                        if (my.status.readahead) {
                            my.set_mutex("readahead");
                            my.gui.labels.readahead.addClass("active");
                            if (!my.status.messages.readahead) {
                                my.popup(my.gui.popups.readahead);
                                my.message_set("readahead");
                            }
                            $win.bind("mousemove", my.readahead.target);
                        } else {
                            my.set_mutex();
                            my.gui.labels.readahead.removeClass("active");
                            $win.unbind("mousemove", my.readahead.target);
                            my.tooltip();
                        }
                    }
                },
                target: function(event, element) {
                    var text, title, href;
                    if (!element && event) {
                        element = $(event.target).closest("a");
                    }
                    if (!wb.active && element.length && (!element.closest("access-toolbar").length)) {
                        href = element.attr("href");
                        title = element.attr("title");
                        if (href !== "#" && element[0].hostname === location.hostname) {
                            text = "<strong>ReadAhead This Link</strong>";
                            if (title !== null && title !== "") {
                                text += "</br>&ldquo;<i>" + title + "</i>&rdquo;";
                            }
                            if (href === "/") {
                                text += "</br>" + element[0].hostname;
                            } else {
                                text += "</br>" + href;
                            }
                            my.tooltip(element, text);
                        }
                    } else {
                        my.tooltip();
                    }
                }
            },
            zoom: {
                activate: function(activate) {
                    if (my.gui.highlight_hud && my.status.mutex.indexOf("zoom") === -1) {
                        if (activate === undefined) {
                            my.status.zoom = !(my.status.zoom);
                        } else {
                            my.status.zoom = activate;
                        }
                        if (my.status.zoom) {
                            my.set_mutex("zoom");
                            my.gui.labels.zoom.addClass("active");
                            $win.bind("mousemove", my.highlight.target);
                        } else {
                            my.set_mutex();
                            my.gui.labels.zoom.removeClass("active");
                            $win.unbind("mousemove", my.highlight.target);
                            my.highlight.reset();
                        }
                    }
                },
                ctrl: function() {
                    if (!my.status.zoom) {
                        return false;
                    }
                    if (my.zoom.element) {
                        my.zoom.element.removeClass(my.classes.zoom);
                        if (my.zoom.element === my.zoom.hud_element) {
                            delete my.zoom.hud_element;
                        }
                    }
                    if (my.zoom.hud_element) {
                        my.zoom.hud_element.addClass(my.classes.zoom);
                        my.zoom.element = my.zoom.hud_element;
                    }
                    cls.zoom(false);
                }
            },
            contrast: {
                activate: function(enable) {
                    if (my.status.contrast || enable === false) {
                        my.status.contrast = false;
                        $doc.removeClass("high-contrast");
                        my.gui.labels.contrast.removeClass("active");
                        my.access_css("contrast", false);
                    } else {
                        my.status.contrast = true;
                        $doc.addClass("high-contrast");
                        my.gui.labels.contrast.addClass("active");
                        my.access_css("contrast", true);
                    }
                }
            },
            highlight: {
                activate: function(enable) {
                    var header_text, element, accesskey;
                    if (my.elements.access_links.length === 0 || my.status.mutex.indexOf("highlight") !== -1) {
                        return false;
                    }
                    if (my.status.highlight || enable === false) {
                        my.gui.tips.hide();
                        my.status.highlight = false;
                        my.gui.labels.highlight.removeClass("active");
                    } else {
                        if (my.gui.tips.length === 0) {
                            my.elements.access_links.each(function() {
                                var link = $(this),
                                    href, id, tip, header;
                                href = link.attr("href");
                                accesskey = link.attr("accesskey");
                                id = my.convertToId(href);
                                element = $("#" + id);
                                if (accesskey !== null && element !== null) {
                                    header = element.find("h1").first();
                                    tip = $("<div>", {
                                        'class': 'access-tip'
                                    }).append($("<span>", {
                                        'class': 'id'
                                    }).html(id)).append($("<span>", {
                                        'class': 'accesskey'
                                    }).html("Access key <strong>" + accesskey + "</strong>"));
                                    if (header) {
                                        header_text = header.html();
                                        tip.append($("<span>", {
                                            'class': 'title'
                                        }).html(header_text));
                                    }
                                    element.prepend(tip);
                                    my.gui.tips = my.gui.tips.add(tip);
                                }
                            });
                        } else {
                            my.gui.tips.show();
                        }
                        my.status.highlight = true;
                        my.gui.labels.highlight.addClass("active");
                    }
                },
                target: function(event, target, remove_after) {
                    var pos, dimensions;
                    if (!my.gui.highlight_hud) {
                        return false;
                    }
                    if (target === undefined) {
                        target = $(event.target);
                        if (target && target[0].tagName !== "DIV") {
                            target = target.closest("div:not(." + my.classes.gui + ")");
                        }
                    }
                    if (target.length && (my.zoom.hud_element || !my.zoom.hud_element) && !target.hasClass(my.classes.gui)) {
                        pos = target.offset();
                        my.gui.highlight_hud.show().css({
                            'left': (pos.left - options.highlight_hud.border_width) + 'px',
                            'top': (pos.top - options.highlight_hud.border_width) + 'px',
                            'width': target.outerWidth() + 'px',
                            'height': target.outerHeight() + 'px'
                        });
                        my.zoom.hud_element = target;
                        if (remove_after !== undefined && !isNaN(remove_after)) {
                            if (my.timers.ui.highlight) {
                                clearTimeout(my.timers.ui.highlight);
                                delete my.timers.ui.highlight;
                            }
                            my.timers.ui.highlight = setTimeout(function() {
                                my.gui.highlight_hud.stop().animate({
                                    'opacity': 0
                                }, 300, 'swing', function() {
                                    my.highlight.reset();
                                });
                            }, (remove_after * 1000));
                        }
                    }
                },
                reset: function() {
                    var metrics, height, pos;
                    if (my.gui.highlight_hud) {
                        my.gui.highlight_hud.hide().css({
                            'opacity': 1
                        });
                        pos = my.gui.toolbar.offset();
                        height = my.gui.toolbar.outerHeight();
                        my.gui.highlight_hud.css({
                            'left': pos.left + 'px',
                            'top': pos.top + 'px',
                            'width': '100%',
                            'height': height + 'px'
                        });
                    }
                }
            },
            fetch_content: function(url, outline, limit) {
                var content, nodes;
                $.ajax(url, {
                    'complete': function(response) {
                        var a, text, html;
                        if (outline) {
                            content = $("<div>");
                            content[0].innerHTML = response.responseText;
                            if (limit === true) {
                                limit = Math.round(($win.height() - my.gui.toolbar.outerHeight()) * 0.8);
                            }
                            nodes = content.find("h1, h2, h3, p").slice(0, limit - 1);
                            my.gui.sandbox.html("");
                            nodes.each(function() {
                                var $this = $(this);
                                if ((limit && my.gui.sandbox.height() <= limit) || !limit) {
                                    text = $this.text();
                                    if (text !== undefined && text.length > 0) {
                                        my.gui.sandbox.append($("<span>", {
                                            'class': $this[0].tagName.toLowerCase()
                                        }).html(text));
                                    }
                                } else {
                                    return false;
                                }
                            });
                            for (a = 0; a < my.gui.popups.outline.content.length; a += 1) {
                                my.gui.sandbox.append($("<span>", {
                                    'class': 'p'
                                }).html(my.parse_dialog_content(my.gui.popups.outline.content[a])));
                            }
                            html = my.gui.sandbox[0].innerHTML;
                            my.popup(html, {
                                'id': 'ws-access-outline',
                                'href': url
                            });
                        } else {
                            html = my.gui.sandbox[0].innerHTML;
                            my.popup(html);
                        }
                    }
                });
            },
            popup: function(data, options) {
                var dialog, a, content;
                options = ob_set(options || {}, {
                    'id': null
                });
                if (wb) {
                    if (data !== undefined) {
                        if (typeof data === "string") {
                            dialog = $("<a>", {
                                'class': my.classes.dialog
                            }).append(data);
                            if (options.rel) {
                                dialog.attr("rel", options.rel);
                            }
                            if (options.href) {
                                dialog.attr("href", options.href);
                            }
                            if (options.id) {
                                dialog.id = options.id;
                            }
                        } else {
                            dialog = $("<a>", {
                                'class': my.classes.dialog,
                                'href': '#'
                            }).append($("<span>", {
                                'class': 'h2'
                            }).append(data.header)).bind("click", function(event) {
                                event.preventDefault();
                                wb.hide();
                            });
                            for (a = 0; a != data.content.length; a += 1) {
                                content = my.parse_dialog_content(data.content[a]);
                                dialog.append($("<span>", {
                                    'class': 'p'
                                }).html(content));
                            }
                        }
                        wb.load("inline", {
                            'element': dialog
                        }, {
                            'show': {
                                'modal': true
                            }
                        });
                    } else {
                        if (wb.overlay.find("a." + my.classes.dialog).length) {
                            wb.hide();
                        }
                    }
                }
            },
            message_set: function(key) {
                my.status.messages[key] = true;
                if (WS.Storage) {
                    window.WS.Storage.set("ws-messages", my.status.messages);
                }
            },
            parse_dialog_content: function(string) {
                string = string.replace(/\[([^\]]+)\]/g, '<span class="' + my.classes.keyboard + '">$1</span>');
                return string;
            },
            convertToId: function(string) {
                return string.replace(/^#?\d*/g, "").replace(/[^a-zA-Z0-9-]/g, "");
            }
        };
        WS.Access.modifiers = {
            'ALT': 18,
            'CTRL': 17,
            'SHIFT': 16,
            'CMD': 91
        };
        WS.Access.css = {
            'static': ['#ws-access-shim { margin: 0; padding: 0; overflow: hidden; }', '#access-toolbar { position: fixed; z-index: 99990; left: 0; top: 0; border-bottom: 1px solid #eee; width: 100%; font-family: sans-serif; letter-spacing: 0; background: #eee; }', '#access-toolbar div.content { overflow: hidden; border-bottom: 1px solid #999; padding: 0 5px; color: #000; }', '#access-toolbar p { margin: 0; color: #000; }', '#access-toolbar ul { float: left; list-style: none; padding: 5px 0 5px 5px; margin: 0; }', '#access-toolbar ul ul { padding: 0; }', '#access-toolbar ul li { float: left; margin: 2px 5px 2px 0; padding: 0; font-size: .875em; }', '#access-toolbar ul a { float: left; -webkit-transition: all .3s; -moz-transition: all .3s; transition: all .3s; -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px; border: 1px solid #fff; padding: 2px 6px; text-decoration: none; color: #000; background: #fff; white-space: nowrap; }', '#access-toolbar.disabled ul li a, #access-toolbar ul li.disabled a { color: #fff; background: #eee; border-color: #eee; cursor: default; }', '#access-toolbar ul li.content-link a { border: 1px outset #eee; background-color: #d5ddff; }', '#access-toolbar.enabled ul li.active a, #access-toolbar.enabled ul.shortcuts li.enabled a:hover, #access-toolbar.enabled ul.shortcuts li.enabled a:focus, #access-toolbar.enabled ul.shortcuts li.enabled a:active { color: #000; background: #ECE964; }', '#access-toolbar ul li a span, #access-toolbar ul.shortcuts li a strong { color: #000; }', '#access-toolbar.disabled ul li a span, #access-toolbar ul li.disabled a span, #access-toolbar.disabled ul.shortcuts li a strong, #access-toolbar ul.shortcuts li.disabled a strong { color: #ccc; }', '#access-toolbar ul strong, div.access-tip span.accesskey strong { font-family: "Courier New", "Courier", "Fixedsys", Monospace; }', 'div.access-tip { position: relative; overflow: hidden; z-index: 99989; -webkit-border-radius: 5px 5px 0 0; -moz-border-radius: 5px 5px 0 0; border-radius: 5px 5px 0 0; font-size: 16px; background: #ECE964; }', 'div.access-tip span { float: left; display: inline; margin-right: 5px; padding: 4px 6px; font: 1em Sans-serif; letter-spacing: 0; color: #000; }', 'div.access-tip span.id { -webkit-border-radius: 5px 0 0 0; -moz-border-radius: 5px 0 0 0; border-radius: 5px 0 0 0; color: #000; background: #86DAEC; }', 'div.access-tip span.title { font-style: italic; color: #3A3A3A; }', '#ws-access-tooltip { z-index: 99991; border: 2px solid #333; -webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px; padding: 5px; font: 11px Sans-serif; color: #000; background-color: #ECE964; }', '#ws-access-highlight-hud, .ws-access-dialog { border-style: solid; border-color: rgba(236, 227, 63, 0.8); -webkit-border-radius: 6px; -moz-border-radius: 6px; -o-border-radius: 6px; border-radius: 6px; cursor: pointer !important; }', '#ws-access-highlight-hud { -webkit-transition-property: width, height, left, top; -webkit-transition-duration: 0.2s; -moz-transition-property: width, height, left, top; -moz-transition-duration: 0.2s; transition-property: width, height, left, top; transition-duration: 0.2s; }', '#ws-access-outline { width: 500px; }', '.ws-access-dialog, a.ws-access-dialog { display: block; width: 450px; padding: 10px; line-height: 130%; font-family: Helvetica, Arial, sans-serif; text-decoration: none !important; background: #fff; }', '.ws-access-dialog span.h1 { display: block; margin: 10px 0; font-size: 26px; }', '.ws-access-dialog span.h2 { display: block; margin: 10px 0; font-size: 24px; }', '.ws-access-dialog span.h3 { display: block; margin: 10px 0; font-size: 20px; }', '.ws-access-dialog span.p { display: block; margin: 10px 0; font-size: 16px; }', 'span.keyboard-key { display: inline-block; border-top: 1px solid #eee; border-right: 1px solid #666; border-bottom: 1px solid #666; border-left: 1px solid #eee; padding: 1px 2px; background-color: #ccc; color: #333; font: .9em Courier, Monospace, Fixed; }', 'span.keyboard-key-highlight { background-color: #FFF846 !important; }'],
            'active': ['div#ws-access-shim a:focus, div#ws-access-shim a:active, div#ws-access-shim area:focus, div#ws-access-shim area:active { position: relative; z-index: 99999; outline: 2px solid #000; background: #ECE964 !important; color: #000 !important; }', 'div#ws-access-shim a:focus *, div#ws-access-shim a:active *, div#ws-access-shim area:focus *, div#ws-access-shim area:active * { color: #000 !important; }', 'div#ws-access-shim ul#accesslinks { display: none; }', '.ws-zoomsize-increase > * { zoom: 1.125; }', '#whitebox-bg { background-color: #000; }'],
            'contrast': ["div#ws-access-shim * { background-color: transparent !important; background-image: none !important; }", "div#ws-access-shim h1, div#ws-access-shim h2, div#ws-access-shim h3, div#ws-access-shim h4, div#ws-access-shim h5, div#ws-access-shim h6, div#ws-access-shim p, div#ws-access-shim td, div#ws-access-shim li, div#ws-access-shim span, div#ws-access-shim em, div#ws-access-shim i, div#ws-access-shim strong, div#ws-access-shim b { color: #fff !important; }", "body.high-contrast { background: black !important; color: #fff; }", "div#ws-access-shim a, div#ws-access-shim area { color: #FAFB14 !important; }", "div#ws-access-shim a:hover, body.high-contrast div#ws-access-shim a:focus, body.high-contrast a:active { background: black; color: #fff }", "div#ws-access-shim a:visited { color: #96960C !important; }", "div#ws-access-shim input, div#ws-access-shim select, div#ws-access-shim textarea { background: #fff !important; color: #000 !important; }"]
        };
        my.enable();
        return cls;
    };
}(window.jQuery, window.jQuery(window), window.jQuery(document.body), window.WS, window.ob_set));
(function($, WS, ob_set) {
    if (typeof WS === "undefined") {
        throw new Error("Whitespace utility namespace does not exist");
    }
    $.fn.extend({
        formOffset: function() {
            var element, pos;
            pos = [];
            if (!(element = $(this))) {
                return false;
            }
            if (element[0].tagName === "FORM") {
                return {
                    'left': 0,
                    'top': 0
                };
            }
            pos = {
                'left': element[0].offsetLeft,
                'top': element[0].offsetTop
            };
            while ((element = element.offsetParent()).length > 0) {
                if (element[0].tagName === "FORM" || element[0].tagName === "HTML") {
                    break;
                }
                pos.left += element[0].offsetLeft;
                pos.top += element[0].offsetTop;
            }
            return pos;
        }
    });
    WS.Form = function(form, options, fields) {
        var cls, my;
        cls = {
            validate: function() {
                return my.validate.apply(this, arguments);
            },
            validate_field: function() {
                return my.validate_field.apply(this, arguments);
            },
            value: function() {
                return my.value.apply(this, arguments);
            },
            tab: function(index) {
                if (my.tabs.items && my.tabs.items[index]) {
                    my.tabs.items[my.tabs.index].hide();
                    my.tabs.items[index].show();
                    my.tabs.control.children("li").slice(my.tabs.index, (my.tabs.index + 1)).removeClass("active");
                    my.tabs.control.children("li").slice(index, (index + 1)).addClass("active");
                    my.tabs.index = index;
                    my.message("");
                    return my.tabs.items[index];
                } else {
                    return false;
                }
            },
            tabs: function() {
                return my.tabs.items;
            },
            has_field: function(field_name) {
                return !!(my.fields[field_name]);
            },
            add_field: function(field_name, options) {
                var field;
                if (!form[0][field_name] || !(field = form[0][field_name])) {
                    throw new Error("Form does not contain element with name '" + field_name + "'");
                }
                if (cls.has_field(field_name)) {
                    return false;
                }
                if (typeof options === "undefined") {
                    options = true;
                }
                my.fields[field_name] = options;
                form.find(my.options.selectors.elements.join(",")).each(function() {
                    var element;
                    element = $(this);
                    if (element.attr("name") === field_name) {
                        my.parse_element(element);
                    }
                });
                return true;
            },
            remove_field: function(field_name) {
                if (my.fields[field_name]) {
                    my.clear(field_name);
                    delete my.fields[field_name];
                    return true;
                } else {
                    return false;
                }
            },
            add_fault: function(result) {
                var field;
                if (!(result instanceof Object) || typeof result.valid !== "boolean") {
                    throw new Error("Invalid WS.Form.Result Object passed");
                }
                if (typeof result.name !== "string" && result.name.length <= 0) {
                    throw new Error("Result property 'name' must be set");
                } else if (!form[0][result.name] || !(field = form[0][result.name])) {
                    throw new Error("Form does not contain element with name '" + result.name + "'");
                }
                this.remove_fault(result.name);
                my.faults.push(result);
                return result;
            },
            remove_fault: function(name) {
                var a;
                for (a = 0; a != my.faults.length; a += 1) {
                    if (my.faults[a].name === name) {
                        my.faults.splice(a, 1);
                        return true;
                    }
                }
                return false;
            },
            report: function() {
                return my.report.apply(this, arguments);
            },
            reset: function() {
                return my.reset.apply(this, arguments);
            },
            message: function() {
                return my.message.apply(this, arguments);
            }
        };
        my = {
            elements: {},
            fields: {},
            controls: {},
            timers: {},
            options: ob_set(options || {}, {
                'halt': true,
                'tabs': false,
                'popup': {
                    'type': WS.Form.MsgTypes.Message,
                    'alignment': WS.Form.Alignments.top_right,
                    'margin': 4,
                    'zindex': 4000
                },
                'field': {
                    'popup': {
                        'alignment': WS.Form.Alignments.top_left
                    },
                    'show_name': false
                },
                'submit': {
                    'method': null,
                    'callback': null
                },
                'live_validate': {
                    'enabled': true,
                    'delay': 0.5
                },
                'messages': {},
                'selectors': {
                    'elements': ['input', 'textarea', 'select']
                }
            }),
            faults: [],
            validation_re: {
                'email': new RegExp("^[^\\s]+@[^\\s]+(\\.[a-z.]*)?$", "i"),
                'number': new RegExp("^[0-9.+e]+$"),
                'date_iso': new RegExp("^(\\d{4})-(\\d\\d)-(\\d\\d)$"),
                'date': new RegExp("^(\\d\\d)([\\-\\/\\\\])(\\d\\d)\\2(\\d{4})$"),
                'email_parts': new RegExp("(.*)\\@([^.]*)\\.(.*)")
            },
            data: {
                'mail_domains': ["yahoo.com", "google.com", "hotmail.com", "gmail.com", "me.com", "aol.com", "mac.com", "live.com", "comcast.net", "googlemail.com", "msn.com", "hotmail.co.uk", "yahoo.co.uk", "facebook.com", "verizon.net", "sbcglobal.net", "att.net", "gmx.com", "mail.com", "whitespacers.com"]
            },
            classes: {
                'form': 'ws-form',
                'ph': 'placeholder',
                'ph_active': 'placeholder-active',
                'ph_inactive': 'placeholder-inactive',
                'label_text': 'label-text',
                'fieldset_control': 'control',
                'tab_control': 'form-tab-control',
                'tab_group': 'tab-group',
                'popup': 'form-handler-popup'
            },
            collectives: ["input[type = 'checkbox']", "input[type = 'radio']"],
            unlabelled: ['button', 'hidden', 'submit', 'image'],
            nontext_input_types: ['date', 'datetime', 'datetime-local', 'month', 'week', 'time', 'number', 'range', 'color'],
            enable: function() {
                var fn, submit_buttons, a, fieldsets;
                cls.form = form;
                form = $(form);
                if (typeof my.options.classes === "object") {
                    my.classes = ob_set(my.options.classes, my.classes);
                }
                cls.messages = window.ob_set(my.options.messages, WS.Form.Messages);
                fn = {};
                my.form_id = form[0].id || form.attr("name");
                if (my.form_id !== null && typeof my.form_id !== "string") {
                    throw new Error("Type error with form ID. The form id or name attribute " + "cannot be collected. This is likely due to an element with the name or " + "id of 'id'.");
                }
                my.fields = ob_set(WS.Form.Fields[my.form_id] || {}, fields);
                my.ui = {};
                my.form_elements = form.find(my.options.selectors.elements.join(","));
                my.form_elements.each(function() {
                    my.parse_element(this);
                });
                if (my.form_elements.length > 0) {
                    form.addClass(my.classes.form).data("ws_form", true).bind("submit", my.event).bind("click", my.event).bind("keyup", my.event);
                    if (form.css("position") !== "absolute") {
                        form.css({
                            'position': 'relative'
                        });
                    }
                    form.append(my.ui.popup = $("<div>", {
                        'class': my.classes.popup
                    }).css({
                        'position': 'absolute',
                        'white-space': 'nowrap',
                        'zIndex': my.options.popup.zindex
                    }).hide());
                    form.attr("novalidate", "novalidate");
                    submit_buttons = form.find(["input[type = 'submit']", "input[type = 'image']", "button[type = 'submit']"].join(",")).filter(":visible");
                    if (submit_buttons.length > 0) {
                        my.controls.submit = submit_buttons.first();
                    } else {
                        my.log("No visible submit button could be found for this form. Global errors will be registered to form context.");
                    }
                }
                if (my.options.tabs) {
                    fieldsets = form.find("fieldset:not([class~='control'])");
                    my.tabs = {
                        'items': []
                    };
                    form.prepend(my.tabs.control = $("<ul>", {
                        'class': my.classes.tab_control
                    }));
                    fn.add_tab = function(fieldset) {
                        var control_class, legend, index, label;
                        legend = fieldset.find("legend").first();
                        index = my.tabs.items.length;
                        if (index === 0) {
                            control_class = "first active";
                        } else if (index === (fieldsets.length - 1)) {
                            control_class = "last";
                        } else {
                            control_class = null;
                        }
                        if (legend.length) {
                            label = legend.text();
                            legend.hide();
                        } else {
                            label = cls.messages.tab_step_prefix + (index + 1);
                        }
                        my.tabs.control.append($("<li>", {
                            'class': control_class
                        }).append($("<a>", {
                            'href': '#'
                        }).bind("click", function(event) {
                            event.preventDefault();
                            cls.tab(index);
                        }).html(label)));
                        my.tabs.items.push(fieldset);
                        if (index !== 0) {
                            fieldset.hide();
                        }
                    };
                    fn.add_grouped_tab = function(set, group) {
                        var a, control_class, container, fieldset;
                        if (group === 0) {
                            control_class = "first active";
                        } else if (group === (my.options.tabs.length - 1)) {
                            control_class = "last";
                        } else {
                            control_class = null;
                        }
                        my.tabs.control.append($("<li>", {
                            'class': control_class
                        }).append($("<a>", {
                            'href': '#'
                        }).bind("click", function(event) {
                            event.preventDefault();
                            cls.tab(group);
                        }).html(set.title || cls.messages.tab_step_prefix + group)));
                        if ((container = form.find("div." + my.classes.tab_group).slice(group + 1, group + 2)).length === 0) {
                            my.tabs.control.after(container = $("<div>", {
                                'class': my.classes.tab_group
                            }));
                        }
                        for (a = 0; a < set.fieldsets.length; a += 1) {
                            if ((fieldset = $("#" + set.fieldsets[a])).length > 0) {
                                container.append(fieldset);
                            } else {
                                my.log("Fieldset with id '" + set.fieldsets[a] + "' could not be found for grouping.");
                            }
                        }
                        my.tabs.items.push(container);
                        if (group !== 0) {
                            container.hide();
                        } else {
                            container.show();
                        }
                    };
                    if (my.options.tabs.length && (my.options.tabs = $(my.options.tabs))) {
                        my.options.tabs.each(function(index) {
                            fn.add_grouped_tab(this, index);
                        });
                    } else if (my.options.tabs === true) {
                        fieldsets.each(function(index) {
                            fn.add_tab($(this));
                        });
                    }
                    my.tabs.index = 0;
                }
            },
            parse_element: function(element) {
                var name, id, title, value, label, label_text, type, collective;
                element = $(element);
                name = element.attr("name");
                id = element.attr("id");
                title = element.attr("title");
                type = element.attr("type");
                label = form.find("label[for='" + id + "']").first();
                if (element.disabled) {
                    my.log("Skipping disabled element '" + name + "'.");
                    return;
                }
                collective = my.is_collective(element);
                if (id && label) {
                    element.data("label", label);
                    if (element.hasClass(my.classes.ph)) {
                        if (title !== null) {
                            if (collective) {
                                throw new Error("Placeholders cannot be applied to collective element '" + name + "'.");
                            }
                            value = element.val();
                            element.data(my.classes.ph, true).data("title", title);
                            if (value === "" || value === title) {
                                element.val(title).removeClass(my.classes.ph_active).addClass(my.classes.ph_inactive);
                            } else {
                                element.addClass(my.classes.ph_active);
                            }
                            if ((label_text = label.find("." + my.classes.label_text).first()).length !== 1) {
                                label_text = label;
                            }
                            if (label_text.length > 0) {
                                label_text.hide();
                            } else {
                                my.log("No label or element with class '" + my.classes.label_text + "' could be found for placeholder element '" + name + "'");
                            }
                        } else {
                            my.log("Placeholder requested but no title attribute supplied for '" +
                                name + "'.");
                        }
                    } else {
                        if (title !== null) {
                            element.data("title", title);
                        }
                    }
                    element.bind("focus", function(event) {
                        my.focus(event, name);
                    });
                    element.bind("blur", function(event) {
                        my.focus(event, name);
                    });
                } else if (!label && my.unlabelled.indexOf(type) === -1) {
                    my.log("Could not find label for element '" + name + "'.");
                }
                if (name !== null) {
                    if (my.elements[name] && collective) {
                        if (my.elements[name].length === 1) {
                            my.elements[name] = [my.elements[name]];
                        }
                        my.elements[name].push(element);
                    } else {
                        my.elements[name] = element;
                    }
                }
            },
            event: function(event) {
                var element, field;
                element = $(event.target);
                switch (event.type) {
                    case "submit":
                        my.submit(event);
                        break;
                    case "click":
                        if (element === my.ui.popup) {
                            my.message("");
                        }
                        break;
                    case "keyup":
                        if (element.name && (field = my.field(element.name)) && typeof field === "object" && field.live === true) {
                            if (my.timers.live_validate) {
                                window.clearTimeout(my.timers.live_validate);
                                delete my.timers.live_validate;
                            }
                            my.timers.live_validate = window.setTimeout(function() {
                                my.live_validate_field(element.name);
                            }, (my.options.live_validate.delay * 1000));
                        }
                }
            },
            submit: function(event) {
                var result, action, method;
                if (my.options.halt) {
                    event.preventDefault();
                }
                my.clear();
                if ((result = cls.validate())) {
                    method = form.attr("method");
                    if (my.options.halt) {
                        if (typeof my.options.submit.callback !== "function" || (typeof my.options.submit.callback === "function" && my.options.submit.callback.apply(cls, [form]) !== false)) {
                            form.trigger("form:submitting", [my.options.submit.method || method]);
                            switch (my.options.submit.method) {
                                case WS.Form.SubmitMethods.POST:
                                case WS.Form.SubmitMethods.GET:
                                    form.attr("method", my.options.submit.method);
                                    form[0].submit();
                                    break;
                                case WS.Form.SubmitMethods.AJAX:
                                    action = form.attr("action") || "/";
                                    new $.ajax(action, {
                                        'data': form.serialize(),
                                        'type': 'POST',
                                        'success': function() {
                                            form.trigger("form:submitted", arguments);
                                        }
                                    });
                                    break;
                                default:
                                    form[0].submit();
                            }
                        }
                    }
                } else {
                    my.report();
                    if (result === false && !my.options.halt) {
                        event.preventDefault();
                    }
                    form.trigger("form:error", [form, my.faults]);
                }
            },
            validate: function(context, fields) {
                var name, field, result, a, ancestors, do_cascade;
                if (fields === undefined) {
                    my.faults = [];
                }
                fields = fields || my.fields || null;
                do_cascade = function(cascade, value) {
                    return ((typeof cascade.value === "undefined" && value !== "") || (cascade.value === true && value !== "") || (cascade.value === false && value === "") || (cascade.value && cascade.value == value) || (cascade.value && my.value_in_array(cascade.value, value)));
                };
                if (fields !== null) {
                    for (name in fields) {
                        if (fields.hasOwnProperty(name) && my.elements[name]) {
                            field = fields[name];
                            if (context) {
                                if (my.elements[name].constructor === Array && my.elements[name].length) {
                                    ancestors = $(my.elements[name][0]).ancestors();
                                } else {
                                    ancestors = $(my.elements[name]).ancestors();
                                }
                            }
                            if ((!context) || (context && ancestors.indexOf(context) !== -1)) {
                                result = my.validate_field(name);
                                if (result.valid === false) {
                                    my.faults.push(result);
                                }
                                if ((typeof field.cascade === "object" && result.valid === true)) {
                                    if (field.cascade.length) {
                                        for (a = 0; a < field.cascade.length; a += 1) {
                                            if (do_cascade(field.cascade[a], result.value)) {
                                                this.validate(context, field.cascade[a].fields);
                                            }
                                        }
                                    } else {
                                        if (do_cascade(field.cascade, result.value)) {
                                            this.validate(context, field.cascade.fields);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                return (my.faults.length === 0);
            },
            live_validate_field: function(name, check) {
                var result;
                check = check || my.field(name);
                result = my.validate_field(name, check, false);
                if (result.suggestion !== undefined) {
                    my.message(cls.messages.did_you_mean + "&lsquo;<b>" + result.suggestion + "</b>&rsquo; ?", result.element, {
                        'type': WS.Form.MsgTypes.Message
                    });
                } else {
                    my.message("");
                }
            },
            validate_field: function(name, check) {
                var require_value, result, value, suggestion, num_value, el, duplicate_value, date, date_parts;
                check = check || my.field(name);
                el = my.elements[name];
                require_value = (check.require || check === true);
                result = new WS.Form.Result(name);
                if (check && el) {
                    value = my.value(el);
                    num_value = parseFloat(value);
                    result.value = value;
                    result.element = el;
                    if ((typeof check === "object") || check === true) {
                        if (require_value && (value === "" || value.length === 0)) {
                            result.valid = false;
                        }
                        if (check.min !== undefined || check.max !== undefined) {
                            check.type = WS.Form.ValueTypes.Number;
                        }
                        if (result.valid && check.type !== undefined) {
                            switch (check.type) {
                                case WS.Form.ValueTypes.Email:
                                    if (!value.match(my.validation_re.email) && (value !== null || value !== "" || check.require)) {
                                        result.type = check.type;
                                        result.valid = false;
                                    } else {
                                        suggestion = my.utils.suggest_email(value);
                                        if (suggestion !== false && suggestion !== value) {
                                            result.suggestion = suggestion;
                                        }
                                    }
                                    break;
                                case WS.Form.ValueTypes.Number:
                                    if (!value.match(my.validation_re.number) && (value !== "" || check.require)) {
                                        result.type = check.type;
                                        result.valid = false;
                                    }
                                    break;
                                case WS.Form.ValueTypes.Date:
                                    if ((date = value.match(my.validation_re.date_iso))) {
                                        date_parts = [date[1], date[2], date[3]];
                                    } else if ((date = value.match(my.validation_re.date))) {
                                        date_parts = [date[4], date[3], date[1]];
                                    } else if (value !== "" || check.require) {
                                        result.type = check.type;
                                        result.valid = false;
                                    }
                                    if (date_parts) {
                                        if (date_parts[1] > 12 || date_parts[1] < 1) {
                                            result.type = check.type;
                                            result.valid = false;
                                        } else if (date_parts[2] > 31 || date_parts[2] < 1) {
                                            result.type = check.type;
                                            result.valid = false;
                                        } else {
                                            date = new Date(date_parts[0], date_parts[1], date_parts[2]);
                                            if (isNaN(date.valueOf())) {
                                                result.type = check.type;
                                                result.valid = false;
                                            }
                                        }
                                    }
                                    break;
                                case WS.Form.ValueTypes.RegExp:
                                    if (check.regexp) {
                                        if (!check.regexp.test(value) && (value !== "" || check.require)) {
                                            result.type = check.type;
                                            result.valid = false;
                                        }
                                    }
                                    break;
                                default:
                                    my.log("Invalid check type defined for field '" + name + "'");
                            }
                        }
                        if (result.valid) {
                            if ((check.min !== undefined || check.max !== undefined) && !isNaN(num_value)) {
                                if (check.min !== undefined && num_value < check.min) {
                                    result.value_min = true;
                                    result.required_value = check.min;
                                    result.valid = false;
                                }
                                if (check.max !== undefined && num_value > check.max) {
                                    result.value_max = true;
                                    result.required_value = check.max;
                                    result.valid = false;
                                }
                            }
                            if (value.length > 0) {
                                if (check.min_len !== undefined && value.length < check.min_len) {
                                    result.value_min_len = true;
                                    result.required_value = check.min_len;
                                    result.valid = false;
                                }
                                if (check.max_len !== undefined && value.length > check.max_len) {
                                    result.value_max_len = true;
                                    result.required_value = check.max_len;
                                    result.valid = false;
                                }
                            }
                        }
                        if (check.duplicate_of && my.elements[check.duplicate_of] !== undefined) {
                            duplicate_value = my.value(my.elements[check.duplicate_of]);
                            if (duplicate_value !== value) {
                                result.mismatch = check.duplicate_of;
                                result.valid = false;
                            }
                        }
                    }
                    return result;
                } else {
                    if (!check) {
                        return result;
                    } else {
                        throw new Error("Element '" + name + "' could not be found within the form");
                    }
                }
            },
            clear: function(field_name) {
                var field, el, fn;
                fn = {
                    highlight: function() {
                        my.highlight($(this), false);
                    }
                };
                for (field in my.elements) {
                    if (my.elements.hasOwnProperty(field) && (field === field_name || field_name === undefined)) {
                        el = my.elements[field];
                        if (el.length > 1) {
                            $(el).each(fn.highlight);
                        } else {
                            if (el.data(my.classes.ph) === true && el.val() === el.data("title")) {
                                el.val("");
                            }
                            my.highlight(el, false);
                        }
                    }
                }
            },
            restore_placeholders: function(field_name) {
                var field, el;
                for (field in my.elements) {
                    if (my.elements.hasOwnProperty(field) && (field === field_name || field_name === undefined)) {
                        el = my.elements[field];
                        if (el.length === 1) {
                            if (el.data(my.classes.ph) === true && el.val() === "") {
                                el.val(el.data("title"));
                            }
                        }
                    }
                }
            },
            report: function(context) {
                var field, fn, a;
                fn = function() {
                    field = my.elements[this.name];
                    my.log("'" + this.name + "' found to contain fault(s).");
                    if (field.length > 1) {
                        for (a = 0; a < field.length; a += 1) {
                            my.highlight(field[a]);
                        }
                    } else {
                        my.highlight(field);
                    }
                };
                if (my.faults.length > 0) {
                    $(my.faults).each(fn);
                    if (context === undefined) {
                        context = form;
                    }
                    my.message(cls.messages.general_error, context, {
                        'type': WS.Form.MsgTypes.Error
                    });
                }
                return my.faults.length;
            },
            reset: function() {
                var field, fn, a;
                fn = function() {
                    field = my.elements[this.name];
                    my.log("resetting '" + this.name + "'.");
                    if (field.length > 1) {
                        for (a = 0; a < field.length; a += 1) {
                            my.highlight(field[a], false);
                        }
                    } else {
                        my.highlight(field, false);
                        my.focus("blur", this.name);
                    }
                };
                my.restore_placeholders();
                if (my.faults.length > 0) {
                    $(my.faults).each(fn);
                    my.faults = [];
                    my.message("");
                }
            },
            highlight: function(field, highlight) {
                var label, parent;
                label = field.data("label");
                if (highlight === undefined) {
                    highlight = true;
                }
                if (label !== undefined) {
                    parent = label.parent().first();
                    if (highlight) {
                        label.addClass("required");
                    } else {
                        label.removeClass("required");
                    }
                    if (parent.length && $.contains(form[0], parent[0])) {
                        if (highlight) {
                            parent.addClass("required");
                        } else {
                            parent.removeClass("required");
                        }
                    }
                }
            },
            focus: function(event, name) {
                var fault, el, field, options, placeholder, field_label, message, title;
                if (!my.elements[name]) {
                    return;
                }
                el = my.elements[name];
                field = my.field(name);
                options = my.options.field.popup;
                if (field && field.popup && field.popup.alignment) {
                    options.alignment = field.popup.alignment;
                }
                if (event.type === "focus") {
                    fault = my.fault(name);
                    if (el) {
                        if (!$.isArray(el)) {
                            title = el.data("title");
                            placeholder = (el.data(my.classes.ph) === true);
                            if (placeholder && my.value(el) === el.data("title")) {
                                el.val("").removeClass(my.classes.ph_inactive).addClass(my.classes.ph_active);
                            }
                        }
                        if (fault) {
                            if (fault.type) {
                                if (field && field.messages && field.messages.type) {
                                    message = field.messages.type;
                                } else {
                                    switch (fault.type) {
                                        case WS.Form.ValueTypes.Email:
                                            message = cls.messages.type_email;
                                            break;
                                        case WS.Form.ValueTypes.Number:
                                            message = cls.messages.type_number;
                                            break;
                                        case WS.Form.ValueTypes.Date:
                                            message = cls.messages.type_date;
                                            break;
                                        case WS.Form.ValueTypes.RegExp:
                                            message = cls.messages.type_regex;
                                            break;
                                    }
                                }
                            } else if (fault.value_min) {
                                if (field.messages && field.messages.value_min) {
                                    message = field.messages.value_min;
                                } else {
                                    message = cls.messages.value_min;
                                }
                            } else if (fault.value_max) {
                                if (field.messages && field.messages.value_max) {
                                    message = field.messages.value_max;
                                } else {
                                    message = cls.messages.value_max;
                                }
                            } else if (fault.value_max_len) {
                                if (field.messages && field.messages.value_max_len) {
                                    message = field.messages.value_max_len;
                                } else {
                                    message = cls.messages.value_max_len;
                                }
                            } else if (fault.value_min_len) {
                                if (field.messages && field.messages.value_min_len) {
                                    message = field.messages.value_min_len;
                                } else {
                                    message = cls.messages.value_min_len;
                                }
                            } else if (fault.mismatch) {
                                field_label = my.element_label(my.elements[fault.mismatch]);
                                if (field.messages && field.messages.mismatch) {
                                    message = field.messages.mismatch;
                                } else {
                                    message = cls.messages.field_mismatch;
                                }
                            } else {
                                if (field && field.messages && field.messages.require) {
                                    message = field.messages.require;
                                } else {
                                    message = cls.messages.field_value;
                                }
                            }
                            if (typeof message === "string") {
                                message = message.replace(/\$1/, field_label || "");
                                message = message.replace(/\$2/, fault.required_value);
                                message = message.replace(/\$3/, fault.value);
                            } else {
                                message = "";
                            }
                            if ((placeholder || my.options.field.popup.show_name) && title) {
                                message = title + " - " + message;
                            }
                            options.type = WS.Form.MsgTypes.Error;
                            my.message(message, el, options);
                        } else if (placeholder) {
                            my.message(title, el, options);
                        } else {
                            my.message("");
                        }
                    }
                } else {
                    if (el && !$.isArray(el)) {
                        placeholder = (el.data(my.classes.ph) === true);
                        if (placeholder && my.value(el) === "") {
                            if ($.inArray(el.attr("type"), my.nontext_input_types) === -1) {
                                el.val(el.data("title"));
                            }
                            el.removeClass(my.classes.ph_active).addClass(my.classes.ph_inactive);
                        }
                    }
                    my.message("");
                }
            },
            field: function(find, fields) {
                var item, name, a;
                fields = fields || my.fields;
                for (name in fields) {
                    if (fields.hasOwnProperty(name)) {
                        if (item !== undefined) {
                            break;
                        }
                        if (name === find) {
                            item = fields[name];
                        }
                        if (item === undefined && fields[name].cascade) {
                            if (fields[name].cascade.length) {
                                for (a = 0; a < fields[name].cascade.length; a += 1) {
                                    if (typeof fields[name].cascade[a].fields === "object") {
                                        item = my.field(find, fields[name].cascade[a].fields);
                                        if (item !== undefined) {
                                            break;
                                        }
                                    }
                                }
                            } else if (typeof fields[name].cascade.fields === "object") {
                                item = my.field(find, fields[name].cascade.fields);
                            }
                        }
                    }
                }
                return item;
            },
            value: function(el) {
                var a, values, value, result;
                if (typeof el === "string") {
                    if (my.elements[el]) {
                        el = my.elements[el];
                    } else {
                        throw new Error("Element '" + arguments[0] + "' could not be found");
                    }
                }
                if (el.length > 1) {
                    values = "";
                    for (a = 0; a < el.length; a += 1) {
                        if (el[a].attr("type") === "radio") {
                            if ((value = my.element_value(el[a]))) {
                                values = value;
                                break;
                            }
                        } else {
                            if ((value = my.element_value(el[a]))) {
                                if (values === "") {
                                    values = [];
                                }
                                values.push(value);
                            }
                        }
                    }
                    result = values;
                } else {
                    result = my.element_value(el);
                }
                return result;
            },
            element_value: function(el) {
                var value;
                value = "";
                if (my.is_collective(el)) {
                    if (el.prop("checked")) {
                        value = el.val() || "";
                    }
                } else {
                    value = el.val() || "";
                    if (typeof value === "string") {
                        value = $.trim(value);
                    }
                }
                return value;
            },
            element_label: function(el) {
                var label, span;
                label = el.data("label");
                if (label) {
                    span = label.children(my.classes.label_text).first();
                    if (span.length > 0) {
                        return (span.text());
                    } else {
                        return (label.text());
                    }
                } else {
                    return el.attr("title");
                }
            },
            is_collective: function(el) {
                var key;
                for (key in my.collectives) {
                    if (my.collectives.hasOwnProperty(key) && el.is(my.collectives[key])) {
                        return true;
                    }
                }
                return false;
            },
            value_in_array: function(value, array) {
                var a;
                if (!array.length) {
                    return false;
                }
                if (typeof value === "string") {
                    return (array.indexOf(value) !== -1);
                } else if (value.length) {
                    for (a = 0; a < value.length; a += 1) {
                        if (array.indexOf(value[a]) !== -1) {
                            return true;
                        }
                    }
                }
                return false;
            },
            fault: function(find) {
                var item;
                for (item in my.faults) {
                    if (my.faults.hasOwnProperty(item) && my.faults[item].name === find) {
                        return my.faults[item];
                    }
                }
            },
            message: function(message, context, options) {
                var popup;
                options = ob_set(options || {}, my.options.popup);
                if (options.handler) {
                    popup = options.handler;
                } else {
                    popup = my.popup;
                }
                if (message !== "") {
                    context = context || form;
                    if (context === form) {
                        if (my.controls.submit) {
                            context = my.controls.submit;
                        } else {
                            context = form;
                        }
                    }
                    if (context.length > 1) {
                        context = context[0];
                    }
                    popup.apply(cls, [context, options, message]);
                } else {
                    popup.apply(cls);
                }
            },
            popup: function(context, options, message) {
                var form_size, context_size, context_class, popup_size, context_pos;
                my.ui.popup.attr("class", my.classes.popup);
                if (context === undefined || context == form) {
                    context_class = ['global'];
                } else if (context.length) {
                    context_class = [context[0].tagName.toLowerCase()];
                    if (context.attr("type")) {
                        context_class.push(context.attr("type").toLowerCase());
                    }
                }
                my.ui.popup.addClass("context-" + context_class.join("-"));
                if (message !== undefined) {
                    switch (options.type) {
                        case WS.Form.MsgTypes.Error:
                            my.ui.popup.addClass("popup-type-error");
                            break;
                        case WS.Form.MsgTypes.Message:
                            my.ui.popup.addClass("popup-type-message");
                            break;
                    }
                    my.ui.popup.css({
                        'display': 'block',
                        'visibility': 'hidden',
                        'width': 'auto'
                    }).html(message);
                    context_pos = context.formOffset();
                    form_size = {
                        'width': form.width()
                    };
                    context_size = {
                        'height': context.outerHeight(),
                        'width': context.outerWidth()
                    };
                    popup_size = {
                        'height': my.ui.popup.outerHeight(),
                        'width': my.ui.popup.outerWidth()
                    };
                    if (popup_size.width > form_size.width) {
                        my.ui.popup.css({
                            'width': form_size.width + 'px',
                            'whiteSpace': 'normal'
                        });
                        popup_size = {
                            'height': my.ui.popup.outerHeight(),
                            'width': my.ui.popup.outerWidth()
                        };
                    }
                    switch (options.alignment) {
                        case WS.Form.Alignments.bottom_left:
                            my.ui.popup.css({
                                'top': (context_pos.top + context_size.height + options.margin) + 'px',
                                'left': context_pos.left + 'px'
                            });
                            break;
                        case WS.Form.Alignments.bottom_right:
                            my.ui.popup.css({
                                'top': (context_pos.top + context_size.height + options.margin) + 'px',
                                'left': (context_pos.left - (popup_size.width - context_size.width)) + 'px'
                            });
                            break;
                        case WS.Form.Alignments.top_left:
                            my.ui.popup.css({
                                'top': ((context_pos.top - popup_size.height) - options.margin) + 'px',
                                'left': context_pos.left + 'px'
                            });
                            break;
                        case WS.Form.Alignments.top_center:
                            my.ui.popup.css({
                                'top': ((context_pos.top - popup_size.height) - options.margin) + 'px',
                                'left': (context_pos.left - (popup_size.width / 2) + (context_size.width / 2)) + 'px'
                            });
                            break;
                        case WS.Form.Alignments.bottom_center:
                            my.ui.popup.css({
                                'top': (context_pos.top + context_size.height + options.margin) + 'px',
                                'left': (context_pos.left - (popup_size.width / 2) + (context_size.width / 2)) + 'px'
                            });
                            break;
                        default:
                            my.ui.popup.css({
                                'top': ((context_pos.top - popup_size.height) - options.margin) + 'px',
                                'left': (context_pos.left - (popup_size.width - context_size.width)) + 'px'
                            });
                            break;
                    }
                    my.ui.popup.css({
                        'visibility': 'visible'
                    });
                } else {
                    my.ui.popup.hide();
                }
            },
            log: function(msg) {
                if (typeof console !== "undefined") {
                    console.log(msg);
                }
            },
            utils: {
                suggest_email: function(email) {
                    var a, parts, closest, min_distance, distance_threshold, find_domain;
                    if (typeof email === "string") {
                        parts = email.match(my.validation_re.email_parts);
                        if (parts && parts.length === 4) {
                            parts = {
                                'email': parts[0],
                                'user': parts[1],
                                'domain': parts[2] + '.' + parts[3],
                                'tld': parts[3]
                            };
                            min_distance = 99;
                            closest = null;
                            distance_threshold = 3;
                            find_domain = function(domain, data) {
                                var closest, a, data_domain, dist;
                                closest = null;
                                for (a = 0;
                                    (data_domain = data[a]); a += 1) {
                                    if (data_domain === domain) {
                                        closest = domain;
                                        break;
                                    }
                                    dist = my.utils.sift3_distance(data_domain, domain);
                                    if (dist < min_distance) {
                                        closest = data_domain;
                                        min_distance = dist;
                                    }
                                }
                                if (min_distance < distance_threshold && closest !== null) {
                                    if (closest !== domain) {
                                        return closest;
                                    } else {
                                        return null;
                                    }
                                } else {
                                    return null;
                                }
                            };
                            closest = find_domain(parts.domain, my.data.mail_domains);
                            if (closest !== null) {
                                if (closest !== parts.domain) {
                                    return closest;
                                } else {
                                    return false;
                                }
                            } else {
                                return false;
                            }
                        } else {
                            return false;
                        }
                    } else {
                        return false;
                    }
                },
                sift3_distance: function(s1, s2) {
                    var i, c, offset1, offset2, lcs, max_offset;
                    if (s1 === null || s1 === undefined || s1.length === 0) {
                        if (s2 === null || s2 === undefined || s2.length === 0) {
                            return 0;
                        } else {
                            return s2.length;
                        }
                    }
                    if (s2 === null || s2 === undefined || s2.length === 0) {
                        return s1.length;
                    }
                    c = 0;
                    offset1 = 0;
                    offset2 = 0;
                    lcs = 0;
                    max_offset = 5;
                    while ((c + offset1 < s1.length) && (c + offset2 < s2.length)) {
                        if (s1.charAt(c + offset1) == s2.charAt(c + offset2)) {
                            lcs += 1;
                        } else {
                            offset1 = 0;
                            offset2 = 0;
                            for (i = 0; i < max_offset; i += 1) {
                                if ((c + i < s1.length) && (s1.charAt(c + i) == s2.charAt(c))) {
                                    offset1 = i;
                                    break;
                                }
                                if ((c + i < s2.length) && (s1.charAt(c) == s2.charAt(c + i))) {
                                    offset2 = i;
                                    break;
                                }
                            }
                        }
                        c += 1;
                    }
                    return ((s1.length + s2.length) / 2 - lcs);
                }
            }
        };
        my.enable();
        return cls;
    };
    WS.Form.ValueTypes = {
        'Email': 1,
        'Number': 2,
        'RegExp': 3,
        'Date': 4
    };
    WS.Form.Fields = {};
    WS.Form.MsgTypes = {
        'Error': 1,
        'Message': 2
    };
    WS.Form.Messages = {
        'general_error': 'Please check for errors before sending',
        'field_value': 'Must be filled in',
        'field_mismatch': 'Must be identical to \'$1\'',
        'tab_step_prefix': 'Step ',
        'type_email': 'Must be a valid email',
        'type_number': 'Must be a valid number',
        'type_regex': 'Value is in an incorrect format',
        'type_date': 'Value is an invalid date',
        'value_min': 'Value must be a minimum of $2',
        'value_max': 'Value must be a maximum of $2',
        'value_min_len': 'Must contain a minimum $2 characters',
        'value_max_len': 'Must contain a maximum $2 characters',
        'did_you_mean': 'Did you mean '
    };
    WS.Form.Alignments = {
        'top_left': 1,
        'top_right': 2,
        'bottom_left': 3,
        'bottom_right': 4,
        'top_center': 5,
        'bottom_center': 6
    };
    WS.Form.SubmitMethods = {
        'POST': 'post',
        'GET': 'get',
        'AJAX': 'ajax'
    };
    WS.Form.Result = function(name, options) {
        var result;
        result = ob_set(options || {}, {
            'valid': true,
            'required_value': '',
            'value': ''
        });
        result.name = name;
        return result;
    };
}(window.jQuery, window.WS, window.ob_set));
(function(WS, $, ob_set) {
    if (typeof WS === "undefined") {
        throw new Error("Whitespace utility namespace does not exist");
    }
    WS.Carousel = function(container, options) {
        var my, cls;
        cls = {
            animation: {},
            set: function(opt) {
                options = ob_set(opt, options);
            },
            go: function() {
                return my.go.apply(this, arguments);
            },
            select: function() {
                return my.select.apply(this, arguments);
            },
            adjust: function() {
                return my.adjust.apply(this, arguments);
            },
            cancel: function() {
                return my.cancel.apply(this, arguments);
            },
            animate: function() {
                return my.animate.apply(this, arguments);
            },
            getIndex: function() {
                return my.index;
            }
        };
        my = {
            items: [],
            index: 0,
            effects: {},
            elements: {},
            timers: {},
            interactive: false,
            swiping: false,
            enable: function() {
                var metrics, items, pagination;
                options = ob_set(options || {}, {
                    'interactive': true,
                    'base_zindex': 1,
                    'id': null,
                    'animation': {
                        'automated': true,
                        'type': WS.Carousel.Animations.fade,
                        'easing': 'swing',
                        'delay': 5,
                        'duration': 0.3,
                        'finish': null,
                        'queue': 'wscarousel-queue'
                    },
                    'start': 0,
                    'callbacks': {
                        'pre_advance': null,
                        'post_advance': null,
                        'interactive': null
                    },
                    'selectors': {
                        'items': 'li'
                    },
                    'navigation': {
                        'alignment': WS.Carousel.Alignments.center
                    },
                    'pagination': {
                        'alignment': WS.Carousel.Alignments.center
                    },
                    'styles': {
                        'container': {
                            'position': 'relative'
                        },
                        'carousel': {
                            'overflow': 'hidden',
                            'position': 'relative',
                            'margin': '0'
                        }
                    },
                    'swipe': {
                        'distance_trigger': 100,
                        'time': 1000
                    }
                });
                if (!(container = $(container)).length) {
                    throw new Error("Container element not specified.");
                } else {
                    metrics = {
                        'total_width': 0,
                        'container_width': container.width()
                    };
                    options.animation.queue += (WS.Carousel.queueNum += 1);
                    if (!options.styles.zIndex) {
                        options.styles.zIndex = options.base_zindex;
                    }
                    container.css(options.styles.carousel);
                }
                items = container.find(options.selectors.items);
                if (items.length === 0) {
                    return false;
                } else {
                    my.elements.shim = $("<div>", {
                        'class': 'carousel-container',
                        'id': options.id
                    }).css(options.styles.container);
                    container.before(my.elements.shim);
                    my.elements.shim.append(container);
                    if (items.length > 1 && options.pagination !== false) {
                        pagination = [];
                        my.elements.shim.append(my.elements.pagination = $("<ul>", {
                            'class': 'pagination'
                        }).css({
                            'zIndex': items.length + (options.base_zindex + 10)
                        }).on("click", "li.page", function(event) {
                            var el;
                            if ((el = $(this))) {
                                event.preventDefault();
                                my.select(el.data("index"));
                            }
                        }));
                    }
                    if (items.length > 1) {
                        if (options.navigation !== false) {
                            if (options.navigation === true || (typeof options.navigation === "object" && options.navigation.display !== false)) {
                                my.elements.shim.append(my.elements.prev = $("<a>", {
                                    'href': '#',
                                    'class': 'navigation nav-prev'
                                }).css({
                                    'zIndex': items.length + (options.base_zindex + 10)
                                }).text("Prev").append($("<span/>"))).append(my.elements.next = $("<a>", {
                                    'href': '#',
                                    'class': 'navigation nav-next'
                                }).css({
                                    'zIndex': items.length + (options.base_zindex + 10)
                                }).text("Next").append($("<span/>")));
                            }
                            if (options.navigation.swipe !== false) {
                                my.elements.shim.bind("touchstart touchmove touchend", my.event);
                            }
                        }
                        my.elements.shim.on("click", "a.navigation", function(event) {
                            event.preventDefault();
                            switch (true) {
                                case $(this).hasClass("nav-prev"):
                                    my.go(-1);
                                    break;
                                default:
                                    my.go(1);
                            }
                        });
                    }
                    items.each(function(index) {
                        var item, width, page_item, label, class_name;
                        item = $(this);
                        width = item.width();
                        label = item.attr("title") || (index + 1);
                        item.css({
                            'position': 'absolute',
                            'left': '0px',
                            'width': '100%',
                            'padding': 0,
                            'margin': 0,
                            'zIndex': ((items.length - index) + options.base_zindex)
                        });
                        if (index > 0) {
                            item.css({
                                'left': metrics.container_width + 'px',
                                'opacity': 0
                            });
                        }
                        if (options.pagination !== false && my.elements.pagination) {
                            class_name = 'page item-' + (index + 1);
                            if (index === 0) {
                                class_name += ' first';
                            } else if (index === (items.length - 1)) {
                                class_name += ' last';
                            }
                            my.elements.pagination.append(page_item = $("<li>", {
                                'class': class_name
                            }).append($("<a>", {
                                'href': '#'
                            }).text(label).append($("<span/>"))).data("index", index));
                            if (index === 0) {
                                page_item.addClass("active");
                            }
                            pagination.push(page_item);
                        }
                        my.items.push(item);
                    });
                    my.pagination = pagination;
                    if (options.interactive) {
                        my.elements.shim.bind("mouseenter", function() {
                            my.interactive = true;
                            if (typeof options.callbacks.interactive === "function") {
                                options.callbacks.interactive.apply(cls, [my.interactive]);
                            }
                        }).bind("mouseleave", function() {
                            my.interactive = false;
                            if (!options.callbacks.interactive || (typeof options.callbacks.interactive === "function" && (options.callbacks.interactive.apply(cls, [my.interactive]) !== false))) {
                                my.timer();
                            }
                        });
                    }
                    cls.options = options;
                    cls.container = container;
                    cls.elements = my.elements;
                    cls.pagination = my.pagination;
                    cls.items = my.items;
                    if (options.start < my.items.length && options.start >= 0) {
                        my.adjust();
                    }
                    my.timer();
                }
            },
            adjust: function(effects) {
                var nav_height, metrics;
                if (typeof effects === "object" && effects.constructor === Array) {
                    metrics = my.metrics(cls.animation.next);
                    effects.push(my.animate(container, {
                        'height': metrics.slide_height + 'px'
                    }));
                    if (metrics.pagination_left) {
                        effects.push(my.animate(my.elements.pagination, {
                            'left': metrics.pagination_left + 'px'
                        }));
                    }
                    if (metrics.nav_height_prev !== undefined && metrics.nav_height_next !== undefined) {
                        effects.push(my.animate(my.elements.prev, {
                            'top': metrics.nav_height_prev + 'px'
                        }));
                        effects.push(my.animate(my.elements.next, {
                            'top': metrics.nav_height_next + 'px'
                        }));
                    }
                    return effects;
                } else {
                    if (my.effects.transition) {
                        my.cancel();
                    }
                    metrics = my.metrics(my.items[my.index]);
                    container.css({
                        'height': metrics.slide_height + 'px'
                    });
                    if (metrics.pagination_left) {
                        my.elements.pagination.css({
                            'left': metrics.pagination_left + 'px'
                        });
                    }
                    if (metrics.nav_height_prev !== undefined && metrics.nav_height_next !== undefined) {
                        my.elements.prev.css({
                            'top': metrics.nav_height_prev + 'px'
                        });
                        my.elements.next.css({
                            'top': metrics.nav_height_next + 'px'
                        });
                    }
                }
            },
            timer: function() {
                if (options.animation.automated && !isNaN(options.animation.delay)) {
                    if (my.timers.automation) {
                        clearTimeout(my.timers.automation);
                    }
                    my.timers.automation = setTimeout(function() {
                        if (!my.interactive) {
                            my.go(1);
                        }
                    }, (options.animation.delay * 1000));
                }
            },
            event: function(event) {
                var touch;
                if (event.type === "touchstart" || event.type === "touchmove") {
                    touch = event.originalEvent.touches[0] || event.originalEvent.changedTouches[0];
                    event.pageX = touch.pageX;
                    event.pageY = touch.pageY;
                }
                switch (event.type) {
                    case "touchstart":
                        my.swiping = {
                            'start': Date.now(),
                            'origin': [event.pageX, event.pageY],
                            'distance': [0, 0]
                        };
                        break;
                    case "touchmove":
                        if (my.swiping !== false) {
                            my.swiping.distance = [event.pageX - my.swiping.origin[0], event.pageY - my.swiping.origin[1]];
                        }
                        break;
                    case "touchend":
                        if ((Date.now() - my.swiping.start) <= options.swipe.time) {
                            if (my.swiping.distance[0] < (-options.swipe.distance_trigger)) {
                                event.preventDefault();
                                my.go(1);
                            } else if (my.swiping.distance[0] > options.swipe.distance_trigger) {
                                event.preventDefault();
                                my.go(-1);
                            }
                        }
                        my.swiping = false;
                        break;
                }
            },
            go: function(adjustment) {
                var index;
                index = my.index + adjustment;
                if (index < 0) {
                    index = (my.items.length - 1);
                } else if (index > (my.items.length - 1)) {
                    index = 0;
                }
                my.select(index, adjustment);
            },
            select: function(index, direction) {
                var finish, effects;
                if (index === my.index || my.animating) {
                    return false;
                }
                if (direction === undefined) {
                    direction = (index - my.index);
                }
                cls.animation = {
                    'index': index,
                    'direction': direction,
                    'current': my.items[my.index],
                    'next': my.items[index],
                    'interactive': my.interactive
                };
                if (!options.callbacks.pre_advance || (typeof options.callbacks.pre_advance === "function" && (options.callbacks.pre_advance.apply(cls) !== false))) {
                    if (cls.animation === false || typeof cls.animation !== "object") {
                        return false;
                    }
                    if ((effects = options.animation.type.apply(cls))) {
                        if (typeof effects === "object" && effects.length) {
                            my.animating = true;
                            effects = $(my.adjust(effects));
                            effects.each(function(index) {
                                this.dequeue(options.animation.queue);
                            });
                        }
                    }
                } else {
                    my.timer();
                }
            },
            finish: function() {
                if (my.items.length > 1 && options.pagination !== false && my.elements.pagination) {
                    my.pagination[my.index].removeClass("active");
                    my.pagination[cls.animation.index].addClass("active");
                }
                cls.animation.next.css({
                    'zIndex': cls.items.length + cls.options.base_zindex
                });
                cls.animation.current.css({
                    'zIndex': (cls.items.length + cls.options.base_zindex) - 1
                });
                if (typeof options.animation.finish === "function") {
                    options.animation.finish.apply(cls);
                }
                delete my.effects.transition;
                my.index = cls.animation.index;
                my.animating = false;
                cls.animation.current = cls.animation.next;
                delete cls.animation.next;
                if ((typeof options.callbacks.post_advance === "function" && (options.callbacks.post_advance.apply(cls) !== false)) || (!options.callbacks.post_advance)) {
                    delete cls.animation;
                    my.timer();
                }
            },
            cancel: function() {
                if (my.animating) {
                    my.animating = false;
                    $(my.effects.transition).each(function() {
                        this.stop();
                    });
                    delete my.effects.transition;
                    options.animation.type.apply(cls, [true]);
                    delete cls.animation;
                    my.adjust();
                }
            },
            metrics: function(slide) {
                var metrics;
                metrics = {
                    'shim_width': my.elements.shim.width(),
                    'container_width': container.width()
                };
                if (slide) {
                    metrics.slide_height = slide.height();
                }
                if (options.navigation !== false) {
                    if (options.navigation === true) {
                        options.navigation = {
                            'alignment': WS.Carousel.Alignments.center
                        };
                    }
                    switch (options.navigation.alignment) {
                        case WS.Carousel.Alignments.center:
                            if (my.elements.prev && my.elements.prev.offsetParent) {
                                metrics.nav_height_prev = ((metrics.slide_height / 2) - (my.elements.prev.height() / 2));
                            }
                            if (my.elements.next && my.elements.next.offsetParent) {
                                metrics.nav_height_next = ((metrics.slide_height / 2) - (my.elements.next.height() / 2));
                            }
                            break;
                        case WS.Carousel.Alignments.top:
                            if (my.elements.prev && my.elements.prev.offsetParent) {
                                metrics.nav_height_prev = 0;
                            }
                            if (my.elements.next && my.elements.next.offsetParent) {
                                metrics.nav_height_next = 0;
                            }
                            break;
                        case WS.Carousel.Alignments.bottom:
                            if (my.elements.prev && my.elements.prev.offsetParent) {
                                metrics.nav_height_prev = (metrics.slide_height - my.elements.prev.height());
                            }
                            if (my.elements.next && my.elements.next.offsetParent) {
                                metrics.nav_height_next = (metrics.slide_height - my.elements.next.height());
                            }
                            break;
                    }
                }
                if (options.pagination !== false && my.elements.pagination) {
                    if (options.pagination === true) {
                        options.pagination = {
                            'alignment': WS.Carousel.Alignments.center
                        };
                    }
                    switch (options.pagination.alignment) {
                        case WS.Carousel.Alignments.left:
                            metrics.pagination_left = 0;
                            break;
                        case WS.Carousel.Alignments.right:
                            metrics.pagination_left = metrics.shim_width - my.elements.pagination.width();
                            break;
                        case WS.Carousel.Alignments.center:
                            metrics.pagination_left = (metrics.shim_width / 2) - (my.elements.pagination.width() / 2);
                    }
                }
                return metrics;
            },
            animate: function(elements, properties, opt) {
                opt = ob_set(opt || {}, {
                    'duration': (options.animation.duration * 1000),
                    'easing': cls.options.animation.easing
                });
                opt.queue = options.animation.queue;
                if (!my.effects.transition) {
                    my.effects.transition = [];
                    opt.done = my.finish;
                }
                if ((elements = $(elements)).length) {
                    elements = elements.animate(properties, opt);
                }
                my.effects.transition.push(elements);
                return elements;
            }
        };
        my.enable();
        return cls;
    };
    WS.Carousel.queueNum = 0;
    WS.Carousel.Animations = {
        fade: function(reset) {
            var effects;
            this.animation.current.css({
                'zIndex': this.items.length + this.options.base_zindex,
                'opacity': 1
            });
            this.animation.next.css({
                'left': '0px',
                'zIndex': (this.items.length + this.options.base_zindex) - 1,
                'opacity': 0
            });
            if (!reset) {
                effects = [];
                effects.push(this.animate(this.animation.current, {
                    'opacity': 0
                }));
                effects.push(this.animate(this.animation.next, {
                    'opacity': 1
                }));
                return effects;
            }
        },
        slide: function(reset) {
            var effects;
            if (!reset) {
                effects = [];
            }
            this.animation.current.css({
                'left': '0',
                'opacity': 1
            });
            if (this.animation.direction > 0) {
                this.animation.next.css({
                    'left': this.container.width() + 'px',
                    'opacity': 0
                });
                if (!reset) {
                    effects.push(this.animate(this.animation.current, {
                        'left': -this.animation.current.width() + 'px'
                    }));
                }
            } else {
                this.animation.next.css({
                    'left': -this.animation.next.width() + 'px',
                    'opacity': 0
                });
                if (!reset) {
                    effects.push(this.animate(this.animation.current, {
                        'left': this.animation.current.width() + 'px'
                    }));
                }
            }
            if (!reset) {
                effects.push(this.animate(this.animation.current, {
                    'opacity': 0
                }));
                effects.push(this.animate(this.animation.next, {
                    'opacity': 1
                }));
                effects.push(this.animate(this.animation.next, {
                    'left': '0px'
                }, {
                    'queue': this.options.animation.queue
                }));
                return effects;
            }
        }
    };
    WS.Carousel.Alignments = {
        'left': 0,
        'center': 1,
        'right': 2,
        'top': 3,
        'bottom': 4
    };
}(window.WS, window.jQuery, window.ob_set));
(function($, WS, google, ob_set) {
    if (typeof WS === "undefined") {
        throw new Error("Whitespace utility namespace does not exist");
    }
    if (typeof google === "undefined") {
        throw new Error("Google namespace does not exist");
    }
    WS.Gmap = function(options) {
        var my, cls;
        cls = {
            settings: {
                'meters_in_nmiles': 1852,
                'nmiles_in_degree': 60,
                'min_accuracy_box': 50,
                'max_accuracy_circle': 300,
                'drag_movement_margins': 100
            },
            event_types: {
                'MARKER_DRAG': 0,
                'MARKER_DRAG_END': 1,
                'MOUSE_MOVE': 2
            },
            search: function(options, callback) {
                var result;
                this.geocode(options, function(response, status) {
                    var geometry;
                    switch (status) {
                        case "OK":
                            geometry = response[0].geometry;
                            this.pan(geometry.location, 13);
                            result = true;
                            break;
                        case "ZERO_RESULTS":
                            result = null;
                            break;
                        default:
                            result = false;
                    }
                    if (typeof callback === "function") {
                        callback.apply(this, [result, response]);
                    }
                }.bind(this));
            },
            geocode: function(options, callback) {
                this.query = options;
                this.geocoder.geocode(options, callback);
            },
            add_marker: function(lat, long, options, content) {
                var coords, marker, fn;
                coords = new google.maps.LatLng(lat, long);
                fn = {};
                options = options || {};
                options.position = coords;
                options.map = this.gmap;
                marker = new google.maps.Marker(options);
                marker._ws_index = this.markers.length;
                this.markers.push(marker);
                if (options.center) {
                    if (options.zoom === true) {
                        if (options.bounds && options.bounds.getCenter) {
                            this.pan(options.bounds, true);
                        } else {
                            throw "Attempted zoom without a valid LatLngBounds class.";
                        }
                    } else if (options.zoom > 0) {
                        this.pan((this.markers.length - 1), options.zoom);
                    } else {
                        this.pan((this.markers.length - 1), this.gmap.getZoom());
                    }
                }
                if (content) {
                    fn.click = (function() {
                        if (this.active) {
                            this.open_infowindow(content, marker);
                        }
                    }.bind(this));
                    google.maps.event.addListener(marker, "click", fn.click);
                    marker.click_fn = fn.click;
                    google.maps.event.addListener(marker, "drag", function(pos) {
                        my.mouse_event(this.event_types.MARKER_DRAG, pos, marker);
                    }.bind(this));
                    google.maps.event.addListener(marker, "dragend", function(pos) {
                        my.mouse_event(this.event_types.MARKER_DRAG_END);
                    }.bind(this));
                    if (options.infowindow === true) {
                        this.open_infowindow(content, marker._ws_index);
                    }
                }
                return (marker._ws_index);
            },
            add_marker_by_address: function(address, options, callback) {
                var index;
                options = ob_set(options || {}, {
                    'zoom': 0,
                    'content': false
                });
                this.geocode({
                    'address': address
                }, function(response, status) {
                    var a, content, geometry, address, address_parts;
                    switch (status) {
                        case "OK":
                            geometry = response[0].geometry;
                            address = response[0].address_components;
                            if (options.zoom === true) {
                                if (geometry.bounds) {
                                    options.bounds = geometry.bounds;
                                } else if (geometry.viewport) {
                                    options.bounds = geometry.viewport;
                                } else {
                                    options.zoom = false;
                                }
                            }
                            if (options.content === true && address.length > 0) {
                                address_parts = [];
                                content = "<p>";
                                for (a = 0; a < address.length; a) {
                                    switch (address[a].types[0]) {
                                        case "street_number":
                                        case "route":
                                            if (address_parts.length > 0) {
                                                address_parts[0] += "&nbsp;" + address[a].long_name;
                                            } else {
                                                address_parts.push(address[a].long_name);
                                            }
                                            break;
                                        case "postal_code":
                                            address_parts[(address_parts.length - 1)] += ", " + address[a].long_name;
                                            break;
                                        case "country":
                                            if (address_parts.length === 0) {
                                                address_parts.push(address[a].long_name);
                                            }
                                            break;
                                        default:
                                            address_parts.push(address[a].long_name);
                                    }
                                }
                                address_parts[0] = "<strong>" + address_parts[0] + "</strong>";
                                content += address_parts.join("<br/>");
                                content += "</p>";
                            } else if (typeof options.content === "string") {
                                content = options.content;
                            } else {
                                content = false;
                            }
                            index = this.add_marker(geometry.location.lat(), geometry.location.lng(), options, content);
                            if (callback) {
                                callback(index);
                            }
                            break;
                        case "ZERO_RESULTS":
                            if (callback) {
                                callback(false);
                            }
                            break;
                        default:
                            alert("Error with Geocoder class");
                    }
                }.bind(this));
            },
            clear_markers: function() {
                this.close_infowindow();
                $(this.markers).each(function(i, marker) {
                    marker.setMap(null);
                }.bind(this));
                this.markers = [];
            },
            clear_marker: function(index) {
                if (this.markers[index]) {
                    if (close === undefined || close === true) {
                        this.close_infowindow();
                    }
                    this.markers[index].setMap(null);
                    return true;
                } else {
                    return false;
                }
            },
            bounds: function(markers) {
                var a, marker, bounds;
                if (markers !== undefined) {
                    bounds = new google.maps.LatLngBounds();
                    for (a = 0; a < markers.length; a += 1) {
                        marker = this.markers[markers[a]];
                        if (marker !== undefined) {
                            bounds.extend(marker.getPosition());
                        }
                    }
                    return bounds;
                } else {
                    return this.gmap.getBounds();
                }
            },
            pan: function(loc, zoom) {
                var position;
                zoom = zoom || false;
                if (this.streetview.getVisible()) {
                    this.streetview.setVisible(false);
                }
                if (typeof loc === "object") {
                    if (loc.getCenter) {
                        if (!this.active) {
                            throw new Error("Map cannot be panned to a LatLngBounds class until it is active.");
                        }
                        this.gmap.panToBounds(loc);
                        if (zoom === true) {
                            this.gmap.fitBounds(loc);
                        } else if (zoom > 0) {
                            this.gmap.setZoom(zoom);
                        }
                    } else if (loc.lat && loc.lng) {
                        if (this.active) {
                            this.gmap.panTo(loc);
                        } else {
                            this.gmap.setCenter(loc);
                            this.active = true;
                        }
                        if (zoom > 0) {
                            this.gmap.setZoom(zoom);
                        }
                    }
                } else if (typeof loc === "number") {
                    if (this.markers[loc]) {
                        position = this.markers[loc].position;
                        this.gmap.setCenter(this.latlng(position.lat(), position.lng()));
                        this.active = true;
                    }
                    if (zoom !== undefined) {
                        this.gmap.setZoom(zoom);
                    }
                }
            },
            open_infowindow: function(content, marker) {
                my.content_preload(content, marker, function(preloader) {
                    var content = $(this.infocontent.clone(false, true));
                    content.css({
                        'visibility': 'visible',
                        'position': ''
                    });
                    this.infowindow.setContent(content.get(0));
                    if (typeof marker === "number" && this.markers[marker]) {
                        this.infowindow.open(this.gmap, this.markers[marker]);
                    } else if (typeof marker === "object") {
                        this.infowindow.open(this.gmap, marker);
                    } else {
                        throw "Invalid marker specified";
                    }
                }.bind(this));
            },
            close_infowindow: function() {
                this.infowindow.close();
            },
            route: function(from, to, options, callback) {
                options = options || {};
                if (!this.dir) {
                    this.dir = new google.maps.DirectionsService();
                }
                options = ob_set(options, {
                    'avoidHighways': false,
                    'avoidTolls': false,
                    'optimizeWaypoints': false,
                    'provideRouteAlternatives': true,
                    'travelMode': google.maps.DirectionsTravelMode.DRIVING,
                    'draw': true
                });
                this.dir.route({
                    'origin': from,
                    'destination': to,
                    'travelMode': options.travelMode,
                    'provideRouteAlternatives': options.provideRouteAlternatives,
                    'avoidHighways': options.avoidHighways,
                    'avoidTolls': options.avoidTolls,
                    'optimizeWaypoints': options.optimizeWaypoints
                }, function(result, status) {
                    switch (status) {
                        case "OK":
                            this.close_infowindow();
                            if (options.draw) {
                                my.route_display(result);
                            }
                            if (this.options.route.directions_element) {
                                this.dir_display.setPanel(this.options.route.directions_element.get(0));
                            }
                            if (callback) {
                                callback(result, status);
                            }
                            break;
                        case "NOT_FOUND":
                        case "MAX_WAYPOINTS_EXCEEDED":
                        case "ZERO_RESULTS":
                            if (callback) {
                                callback(result, status);
                            }
                            break;
                        default:
                            throw "Error with DirectionsService class";
                    }
                }.bind(this));
            },
            route_hide: function() {
                this.options.route.directions_element.hide();
                this.dir_display.setMap(null);
            },
            geolocate: function(add_marker, callback, error_callback) {
                if (!navigator.geolocation) {
                    return false;
                }
                return navigator.geolocation.getCurrentPosition(function(position) {
                    my.geolocate_update(position, add_marker, callback);
                }.bind(this), function(error) {
                    my.geolocate_error(error, error_callback);
                }.bind(this));
            },
            geowatch: function(add_marker, callback) {
                if (!navigator.geolocation) {
                    return false;
                }
                if (this.position.watch) {
                    navigator.geolocation.clearWatch(this.position_watch);
                }
                if (!this.position.watching) {
                    this.position.watching = true;
                    this.position.watch = navigator.geolocation.watchPosition(function(position) {
                        my.geolocate_update(position, add_marker, callback);
                    }.bind(this), my.geolocate_error.bind(this), {
                        'enableHighAccuracy': true
                    });
                    this.canvas.trigger("locationwatch:started");
                } else {
                    this.position.watching = false;
                    this.position.watch = null;
                    if (this.position.circle) {
                        this.position.circle.setMap(null);
                        this.position.circle = null;
                    }
                    this.canvas.trigger("locationwatch:ended");
                }
                return true;
            },
            latlng: function(lat, long) {
                return new google.maps.LatLng(lat, long);
            },
            latlngbounds: function(sw, ne) {
                return new google.maps.LatLngBounds(sw, ne);
            }
        };
        my = {
            enable: function() {
                if (typeof window.google === "undefined") {
                    throw new Error("WSGmap requires the google maps API to be loaded");
                }
                this.options = options || {};
                this.dragging = false;
                this.markers = [];
                this.active = false;
                this.query = null;
                this.initialized = false;
                this.position = {
                    'watching': false
                };
                this.options = ob_set(this.options, {
                    'canvas': null,
                    'map': {
                        'mapTypeId': google.maps.MapTypeId.ROADMAP,
                        'scrollwheel': false
                    },
                    'infowindow': {
                        'disableAutoPan': false,
                        'maxWidth': 250,
                        'maxHeight': 250,
                        'pixelOffset': 0
                    },
                    'hud': {
                        'elements': [],
                        'hide_opacity': 0.3,
                        'autopan': false
                    },
                    'streetview': {
                        'visible': false,
                        'canvas': null,
                        'enableCloseButton': true
                    },
                    'route': {
                        'directions_element': null
                    },
                    'icons': {
                        'geolocate': 'http://chart.apis.google.com/chart?chst=d_map_pin_icon&chld=location|FFFF00'
                    }
                });
                if (this.options.canvas !== null) {
                    if (typeof this.options.canvas.get === "undefined") {
                        this.options.canvas = $(this.options.canvas);
                    }
                    this.canvas = this.options.canvas;
                    if (this.options.streetview.canvas === null) {
                        this.options.streetview.canvas = this.canvas;
                    }
                    if (this.options.route.directions_element) {
                        this.options.route.directions_element = $(this.options.route.directions_element);
                        this.options.route.directions_element.hide();
                    }
                    this.streetview = new google.maps.StreetViewPanorama(this.options.streetview.canvas[0], this.options.streetview);
                    this.options.map.streetView = this.streetview;
                    this.gmap = new google.maps.Map(this.canvas.get(0), this.options.map);
                    this.infowindow = new google.maps.InfoWindow(this.options.infowindow);
                    this.geocoder = new google.maps.Geocoder();
                    this.dir_display = new google.maps.DirectionsRenderer({
                        'map': this.gmap
                    });
                    this.canvas.append(this.sandbox = $("<div>", {
                        'class': 'ws-gmap-sandbox'
                    }).css({
                        'position': 'absolute',
                        'visibility': 'hidden',
                        'left': '0',
                        'top': '0'
                    })).append(this.infocontent = $("<div>", {
                        'class': 'infowindow'
                    }).css({
                        'position': 'absolute',
                        'visibility': 'hidden',
                        'left': '0',
                        'top': '0'
                    }));
                    google.maps.event.addListener(this.gmap, "dragstart", function() {
                        this.dragging = true;
                        if (this.position.watching) {
                            this.geowatch(false);
                        }
                    }.bind(this));
                    google.maps.event.addListener(this.gmap, "dragend", function() {
                        this.dragging = false;
                    }.bind(this));
                    google.maps.event.addListener(this.gmap, "tilesloaded", function() {
                        if (this.options.map.center && this.options.map.zoom) {
                            this.active = true;
                        }
                        this.initialized = true;
                    }.bind(this));
                    google.maps.event.addListener(this.gmap, "mousemove", function(pos) {
                        my.mouse_event(this.event_types.MOUSE_MOVE, pos);
                    }.bind(this));
                    $(this.options.hud.elements).each(function(i, element) {
                        element.attr("orig_opacity", element.css("opacity"));
                        element.bind("mouseenter", function() {
                            my.hud(true, element);
                        }.bind(this));
                        element.bind("mouseleave", function() {
                            my.hud(false, element);
                        }.bind(this));
                        my.hud(false, element);
                    }.bind(this));
                } else {
                    throw new Error("Canvas not defined");
                }
            }.bind(cls),
            geolocate_update: function(position, add_marker, callback) {
                var accuracy, lat, lng, bounds, latlng, deg_offset, marker;
                this.position.data = position;
                accuracy = position.coords.accuracy;
                lat = position.coords.latitude;
                lng = position.coords.longitude;
                if (accuracy) {
                    if (accuracy < this.settings.min_accuracy_box && this.settings.min_accuracy_box > 0) {
                        accuracy = this.settings.min_accuracy_box;
                    }
                    if (accuracy < this.settings.max_accuracy_circle) {
                        deg_offset = (((accuracy * 2) / this.settings.meters_in_nmiles) / this.settings.nmiles_in_degree);
                    } else {
                        deg_offset = ((accuracy / this.settings.meters_in_nmiles) / this.settings.nmiles_in_degree);
                    }
                    bounds = this.latlngbounds(this.latlng(lat - deg_offset, lng - deg_offset), this.latlng(lat + deg_offset, lng + deg_offset));
                }
                if (add_marker) {
                    if (this.position.marker) {
                        latlng = this.latlng(lat, lng);
                        this.position.marker.setPosition(latlng);
                        if (this.position.circle) {
                            if (accuracy < this.settings.max_accuracy_circle) {
                                this.position.circle.setCenter(latlng);
                                this.position.circle.setRadius(accuracy);
                            } else {
                                this.position.circle.setMap(null);
                                this.position.circle = null;
                            }
                        }
                    } else {
                        my.icon_marker("geolocate", function(img) {
                            marker = this.add_marker(lat, lng, {
                                'icon': {
                                    'url': img.src,
                                    'size': new google.maps.Size(img.width, img.height)
                                }
                            });
                            this.position.marker = this.markers[marker];
                        }.bind(this));
                    }
                    if (this.position.circle) {
                        if (accuracy < this.settings.max_accuracy_circle) {
                            this.position.circle.setCenter(latlng);
                            this.position.circle.setRadius(accuracy);
                        } else {
                            this.position.circle.setMap(null);
                            delete this.position.circle;
                        }
                    } else {
                        if (accuracy < this.settings.max_accuracy_circle) {
                            this.position.circle = new google.maps.Circle({
                                'map': this.gmap,
                                'clickable': false,
                                'radius': accuracy,
                                'center': this.latlng(lat, lng),
                                'fillColor': '#7f89d0',
                                'strokeColor': '#342dbf',
                                'strokeWeight': 2
                            });
                        }
                    }
                    if (bounds) {
                        this.pan(bounds, true);
                    } else {
                        this.pan(this.latlng(lat, lng));
                    }
                }
                if (typeof callback === "function") {
                    callback(this.position, bounds);
                }
            }.bind(cls),
            geolocate_error: function(error, error_callback) {
                if (error_callback) {
                    error_callback(error);
                } else {
                    switch (error.code) {
                        case error.UNKNOWN_ERROR:
                            throw new Error(1, "Geolocation error - unknown error");
                        case error.PERMISSION_DENIED:
                            throw new Error(2, "Geolocation error - permission denied from user agent");
                        default:
                            return;
                    }
                }
            }.bind(cls),
            icon_marker: function(icon, callback) {
                var src, img;
                if (this.options.icons[icon] !== undefined) {
                    src = this.options.icons[icon];
                    img = new Image();
                    img.onload = function() {
                        callback(img);
                    }.bind(this);
                    img.src = src;
                } else {
                    return false;
                }
            }.bind(cls),
            route_display: function(route_result) {
                this.dir_display.setMap(null);
                this.dir_display.setMap(this.gmap);
                if (this.streetview.getVisible()) {
                    this.streetview.setVisible(false);
                }
                this.options.route.directions_element.show();
                this.dir_display.setDirections(route_result);
            }.bind(cls),
            hud: function(show, element) {
                $(this.options.hud.elements).each(function(i, element) {
                    if (element === element || element === undefined) {
                        if (show) {
                            if (element.css("opacity") !== element.attr("orig_opacity")) {
                                element.animate({
                                    'opacity': element.attr("orig_opacity")
                                }, (0.2 * 1000));
                            }
                        } else {
                            element.animate({
                                'opacity': this.options.hud.hide_opacity
                            }, (0.2 * 1000));
                        }
                    }
                }.bind(this));
            }.bind(cls),
            content_preload: function(content, marker, callback) {
                var resource_index;
                this.sandbox.html(content);
                this.infocontent.html("").css({
                    'width': 'auto',
                    'height': 'auto'
                });
                this.preloader = {
                    'items': [],
                    'callback': callback,
                    'marker': marker,
                    'loaded': 0
                };
                resource_index = 0;
                this.sandbox.children().each(function(i, el) {
                    this.infocontent.append(el);
                }.bind(this));
                this.infocontent.find("img").each(function(i, img) {
                    var loader, src;
                    src = $(img).attr("src");
                    if (src.match(/\.(jpg|jpeg|gif|png)/i)) {
                        loader = new Image();
                        loader.onload = function() {
                            my.content_register(img, resource_index);
                            resource_index += 1;
                        }.bind(this);
                        loader.src = src;
                        this.preloader.items.push(loader);
                    }
                }.bind(this));
                if (typeof callback === "function" && this.preloader.items.length === 0) {
                    callback(this.preloader);
                }
                return this.infocontent;
            }.bind(cls),
            content_register: function(element, index) {
                var infowindow;
                element = $(element);
                if (this.preloader.items[index]) {
                    this.preloader.loaded = this.preloader.loaded + 1;
                    if (element.tagName === "IMG") {
                        element.attr("width", this.preloader.items[index].width);
                        element.attr("height", this.preloader.items[index].height);
                        infowindow = element.parent("div.infowindow").get(0);
                        if (infowindow !== undefined) {
                            infowindow.css({
                                'width': infowindow.offsetWidth + 'px',
                                'height': infowindow.offsetHeight + 'px'
                            });
                        }
                    }
                }
                if (this.preloader.loaded === this.preloader.items.length) {
                    this.preloader.callback(this.preloader);
                }
            }.bind(cls),
            mouse_event: function(type, pos, marker) {
                var w, h, x, y, x_dist, y_dist, margins;
                if (!this.initialized) {
                    return false;
                }
                switch (type) {
                    case this.event_types.MARKER_DRAG:
                        this.dragging_marker = marker;
                        break;
                    case this.event_types.MARKER_DRAG_END:
                        this.dragging_marker = null;
                        break;
                    case this.event_types.MOUSE_MOVE:
                        if (this.options.hud.autopan) {
                            x = pos.pixel.x;
                            y = pos.pixel.y;
                            if (this.dragging_marker) {
                                w = this.canvas.offsetWidth;
                                h = this.canvas.offsetHeight;
                                margins = this.settings.drag_movement_margins;
                                x_dist = 0;
                                y_dist = 0;
                                if (x > (w - margins) || x < margins) {
                                    x_dist = ((x < margins) ? x - margins : (margins - w) + x) / 2;
                                }
                                if (y > (h - margins) || y < margins) {
                                    y_dist = ((y < margins) ? y - margins : (margins - h) + y) / 2;
                                }
                                if (x_dist !== 0 || y_dist !== 0) {
                                    this.gmap.panBy(x_dist, y_dist);
                                    this.dragging_marker.setPosition(pos.latLng);
                                }
                            }
                        }
                        break;
                }
            }.bind(cls)
        };
        my.enable();
        return cls;
    };
}(window.jQuery, window.WS, window.google, window.ob_set));
(function($) {
    if (!window.WS) {
        window.WS = {};
    }
    window.WS.Categoriser = function($listing, $selectors, settings) {
        var cls, my;
        cls = {
            highlightCategories: function() {
                return my.highlightCategories.apply(this, arguments);
            },
            reset: function() {
                return my.reset.apply(this, arguments);
            },
            getCategories: function() {
                return my.getCategories.apply(this, arguments);
            },
            getAllCategories: function() {
                return my.getAllCategories.apply(this, arguments);
            }
        };
        my = {
            enable: function() {
                settings = $.extend({
                    'selectors': {
                        'category': 'a'
                    },
                    'classes': {
                        'selected': 'selected'
                    },
                    'data_attrs': {
                        'category_id': 'category-id',
                        'inclusive': 'category-inclusive',
                        'reset': 'category-group-reset'
                    },
                    'callbacks': {
                        'updated': null
                    }
                }, (settings || {}));
                my.categories = {};
                my.parseUI();
            },
            parseUI: function() {
                var recalled = my.recall(),
                    recall_index;
                $selectors.each(function(index) {
                    var $this = $(this),
                        add = [];
                    my.categories[index] = {
                        'index': index,
                        '$element': $this,
                        'selected': []
                    };
                    $this.find(settings.selectors.category).each(function() {
                        var category_id = $(this).data(settings.data_attrs.category_id);
                        if ((recall_index = $.inArray(category_id, recalled)) !== -1) {
                            add.push(category_id);
                            recalled.splice(recall_index, 1);
                        }
                    });
                    if (add.length) {
                        my.addCategories(add, index, (!recalled.length));
                        my.highlightCategories(index);
                    }
                    $this.on("click", settings.selectors.category, my.eventRegister("category", {
                        'group': index,
                        'inclusive': ($this.data(settings.data_attrs.inclusive) !== undefined),
                        'reset': $this.data(settings.data_attrs.reset)
                    }));
                });
            },
            recall: function(categories) {
                var a;
                if (categories === undefined) {
                    categories = location.hash.replace(/#C/, "") || "";
                }
                categories = categories.split(",");
                for (a = 0; a < categories.length; a += 1) {
                    categories[a] = parseInt(categories[a], 10);
                }
                return categories;
            },
            setHash: function() {
                location.hash = "C" + my.getAllCategories().join(",");
            },
            eventRegister: function(id, data) {
                return function(event) {
                    my.event.apply(this, [event, id, data]);
                };
            },
            event: function(event, id, data) {
                var $this;
                data = data || {};
                switch (id) {
                    case 'category':
                        $this = $(this);
                        if ((data.category_id = $this.data(settings.data_attrs.category_id))) {
                            event.preventDefault();
                            my.toggleCategory(data.category_id, data.group, data.inclusive);
                            my.highlightCategories(data.group);
                            $this[0].blur();
                            my.setHash();
                        }
                }
            },
            toggleCategory: function(category_id, group, inclusive) {
                if (inclusive === undefined) {
                    inclusive = false;
                }
                if (my.inGroup(group, category_id)) {
                    my.removeCategory(category_id, group);
                } else {
                    my.addCategory.apply(this, arguments);
                }
                my.triggerCallback("updated", [my.categories[group]]);
            },
            addCategories: function(categories, group, trigger_callback) {
                var a;
                for (a = 0; a < categories.length; a += 1) {
                    my.addCategory(categories[a], group, true);
                }
                if (trigger_callback) {
                    my.triggerCallback("updated", [my.categories[group]]);
                }
            },
            addCategory: function(category_id, group, inclusive) {
                if ((my.categories[group])) {
                    if (inclusive) {
                        if (!my.inGroup(group, category_id)) {
                            my.categories[group].selected.push(category_id);
                        }
                    } else {
                        my.categories[group].selected = [category_id];
                    }
                }
            },
            removeCategory: function(category_id, group) {
                var index;
                if ((group = my.categories[group]) && (index = $.inArray(category_id, group.selected)) !== -1) {
                    group.selected.splice(index, 1);
                }
            },
            reset: function(group) {
                if (my.categories[group]) {
                    my.categories[group].selected = [];
                }
            },
            inGroup: function(group, category_id) {
                return my.categories[group] && ($.inArray(category_id, my.categories[group].selected) !== -1);
            },
            highlightCategories: function(group) {
                var $selector;
                if (($selector = $selectors.eq(group)).length && (group = my.categories[group])) {
                    $selector.find(settings.selectors.category).each(function() {
                        var $this = $(this);
                        if ($.inArray($this.data(settings.data_attrs.category_id), group.selected) !== -1) {
                            $this.addClass(settings.classes.selected);
                        } else {
                            $this.removeClass(settings.classes.selected);
                        }
                    });
                }
            },
            getCategories: function(group) {
                return (my.categories[group] && my.categories[group].selected) || null;
            },
            getAllCategories: function() {
                var group, categories = [];
                for (group in my.categories) {
                    if (my.categories.hasOwnProperty(group)) {
                        Array.prototype.push.apply(categories, my.categories[group].selected);
                    }
                }
                return categories;
            },
            triggerCallback: function(cb, data) {
                if (typeof settings.callbacks[cb] === "function") {
                    settings.callbacks[cb].apply(cls, data);
                }
            }
        };
        my.enable();
        return cls;
    };
}(window.jQuery));
(function($) {
    if (!window.WS) {
        window.WS = {};
    }
    window.WS.Paginator = function($listing, settings) {
        var cls, my;
        cls = {
            request: function() {
                return my.request.apply(this, arguments);
            },
            uiPage: function() {
                return my.uiPage.apply(this, arguments);
            }
        };
        my = {
            enable: function() {
                settings = $.extend({
                    'selectors': {
                        'pagination': 'ul.pagination',
                        'pager_prev': 'a.page-prev',
                        'pager_next': 'a.page-next',
                        'label': '.label',
                        'retain': '.paginator-retain'
                    },
                    'classes': {
                        'loading': 'loading'
                    },
                    'labels': {
                        'loading': 'Loading&hellip;'
                    },
                    'callbacks': {
                        'updated': null
                    },
                    'append': false,
                    'automated': false,
                    'pre_clear': false
                }, (settings || {}));
                my.ui = {
                    '$window': $(window),
                    'pagination': {}
                };
                my.metrics = {
                    'pagination': {},
                    'window': {}
                };
                my.status = {
                    'loading': false,
                    'uri': null
                };
                $listing.on("click", [settings.selectors.pager_prev, settings.selectors.pager_next].join(", "), my.eventRegister("page"));
                if (settings.automated) {
                    my.automation(true);
                }
            },
            eventRegister: function(id) {
                return function(event) {
                    my.event.apply(this, [event, id]);
                };
            },
            event: function(event, id) {
                switch (id) {
                    case 'page':
                        event.preventDefault();
                        my.uiPage($(this));
                }
            },
            automation: function(enabled) {
                if (enabled) {
                    my.updateUI(true);
                    my.ui.$window.bind("scroll", my.automate);
                    my.ui.$window.bind("resize", my.updateUI);
                } else {
                    my.ui.$window.unbind("scroll", my.automate);
                    my.ui.$window.unbind("resize", my.updateUI);
                }
            },
            automate: function() {
                var offset;
                if (my.ui.pagination.$next && my.ui.pagination.$next.length) {
                    offset = my.ui.$window.scrollTop();
                    if ((offset + my.metrics.window.height) >= my.metrics.pagination.next.pos.top && !my.status.loading) {
                        my.uiPage(my.ui.pagination.$next);
                    }
                }
            },
            uiPage: function($element) {
                if ($element.is(settings.selectors.pager_next) || $element.is(settings.selectors.pager_prev)) {
                    $element.find(settings.selectors.label).data("original_html", $element.html()).html(settings.labels.loading);
                    my.request($element.attr("href"), function() {
                        $element.html($element.data("original_html"));
                        if (typeof settings.callbacks.paginate === 'function') {
                            settings.callbacks.paginate.apply($listing[0]);
                        }
                    });
                }
            },
            request: function(uri, callback, append) {
                var delay;
                my.setLoading(true);
                my.status.loading = true;
                delay = 1750;
                if (append === undefined) {
                    append = settings.append;
                }
                if (settings.pre_clear) {
                    my.clear(append, true);
                }
                my.status.uri = uri;
                $.ajax(uri).then(function(data) {
                    if (this.url === my.status.uri) {
                        my.insert(data, append);
                        my.setLoading(false);
                        my.status.loading = false;
                        my.status.uri = null;
                        if (typeof callback === "function") {
                            callback.apply(this, arguments);
                        }
                    }
                });
            },
            insert: function(data, append) {
                var $sandbox = $("<div>"),
                    fade;
                fade = function(a) {
                    $sandbox.eq(a).animate({
                        'opacity': 1
                    }, 800);
                    window.setTimeout(function() {
                        if (a < $sandbox.length) {
                            fade(a + 1);
                        }
                    }, 100);
                };
                if (!settings.pre_clear) {
                    my.clear(append, false);
                }
                $sandbox.append(data);
                $sandbox = $sandbox.children().css({
                    'opacity': 0
                });
                $listing.append($sandbox);
                fade(0);
                my.updateUI(true);
            },
            clear: function(append) {
                if (append) {
                    $listing.find(settings.selectors.pagination).remove();
                } else {
                    $listing.children().not(settings.selectors.retain).remove();
                }
            },
            updateUI: function(full) {
                if (full === true) {
                    my.ui.pagination.$next = $listing.find(settings.selectors.pager_next).first();
                    my.metrics.pagination = {
                        'next': {
                            'pos': my.ui.pagination.$next.position()
                        }
                    };
                }
                my.metrics.window.height = my.ui.$window.height();
            },
            setLoading: function(loading) {
                my.status.loading = loading;
                $listing[(loading ? 'add' : 'remove') + 'Class'].apply($listing, [settings.classes.loading]);
            }
        };
        my.enable();
        return cls;
    };
}(window.jQuery));
(function($, $doc, ob_set, WS) {
    if (!window.WS) {
        window.WS = {};
    }
    window.WS.HeaderVideo = function($link, settings, wsgat) {
        var my;
        my = {
            enable: function() {
                settings = ob_set(settings || {}, {
                    'selectors': {
                        'header': '#header',
                        'header_text_items': '.heading, .backlink, .language',
                        'heading': '.heading h1',
                        'video_links': 'a.video',
                        'video': 'div.video',
                        'video_container': 'div.video-container',
                        'video_close': '.video-close'
                    },
                    'classes': {
                        'video_close': 'video-close'
                    }
                });
                my.ui = {
                    '$header': $link.closest(settings.selectors.header)
                };
                my.ui.$container = my.ui.$header.find(settings.selectors.video_container);
                my.ui.$video = my.ui.$container.find(settings.selectors.video);
                my.ui.$header.on('click touchstart', settings.selectors.video_links, my.eventRegister('video')).on('click touchstart', settings.selectors.video_close, my.eventRegister('video_close'));
            },
            eventRegister: function(id) {
                return function(event) {
                    my.event.apply(this, [event, id]);
                };
            },
            event: function(event, id) {
                switch (id) {
                    case 'video':
                        event.preventDefault();
                        my.click($(this));
                        break;
                    case 'video_close':
                        event.preventDefault();
                        my.close($(this));
                        break;
                }
            },
            click: function($link) {
                var $show, $close;
                if (!($close = my.ui.$header.find(settings.selectors.video_close)).length) {
                    my.ui.$header.append(my.ui.$close = $("<a>", {
                        'href': '#',
                        'class': settings.classes.video_close,
                        'title': 'Close video'
                    }));
                }
                $show = my.ui.$container.add(my.ui.$close);
                $show.css({
                    'opacity': 0,
                    'visibility': 'visible'
                });
                my.embed($link.attr("href"), function() {
                    my.fadeInAndPlay($show, my.ui.$header.children(settings.selectors.header_text_items));
                });
            },
            close: function($link) {
                var $hide, $show;
                if (my.video) {
                    $hide = $().add(my.ui.$container).add(my.ui.$close);
                    $show = my.ui.$header.children(settings.selectors.header_text_items);
                    my.fadeOutAndStop($show, $hide);
                }
            },
            embed: function(url, after) {
                var video, options, title = $(settings.selectors.heading).eq(0).text();
                options = {
                    'auto_embed': true,
                    'width': '100%',
                    'height': '100%',
                    'auto_size': {
                        'height': false
                    },
                    'callbacks': {
                        'play': function() {
                            if (wsgat) {
                                wsgat.track_event('Video', 'Start', title);
                            }
                        },
                        'pause': function() {
                            if (wsgat) {
                                wsgat.track_event('Video', 'Pause', title);
                            }
                        },
                        'complete': function() {
                            if (wsgat) {
                                wsgat.track_event('Video', 'End', title);
                            }
                        }
                    }
                };
                my.video = new WS.Video(my.ui.$video, url, options, function() {
                    if (typeof after === "function") {
                        after();
                    }
                });
            },
            fadeInAndPlay: function($show, $hide) {
                var complete = function() {
                    my.fade($show, true);
                    my.video.play();
                };
                if ($hide && $hide.length) {
                    my.fade($hide, false, complete);
                } else {
                    complete();
                }
            },
            fadeOutAndStop: function($show, $hide) {
                my.fade($hide, false, function() {
                    my.ui.$container.css({
                        'visibility': 'hidden'
                    });
                    my.video.pause();
                    if ($show && $show.length) {
                        my.fade($show, true);
                    }
                });
            },
            fade: function($elements, fadein, complete) {
                var completed = 0,
                    opacity, duration;
                if (fadein) {
                    opacity = 1;
                    duration = 1500;
                } else {
                    opacity = 0;
                    duration = 400;
                }
                $elements.stop().animate({
                    'opacity': opacity
                }, {
                    'duration': duration,
                    'complete': function() {
                        completed += 1;
                        if (completed === $elements.length && typeof complete === "function") {
                            complete();
                        }
                    }
                });
            }
        };
        my.enable();
    };
}(window.jQuery, window.jQuery(document.body), window.ob_set, window.WS));
(function($) {
    var Slider = function($container, settings) {
        var cls, my;
        cls = {
            go: function() {
                return my.go.apply(this, arguments);
            }
        };
        my = {
            enable: function() {
                var kineticOptions = {
                    'filterTarget': function(target, e) {
                        if (!/down|start/.test(e.type)) {
                            return !(/area|a|input|i/i.test(target.tagName));
                        }
                    },
                    'triggerHardware': true,
                    'y': false,
                    'moved': function() {
                        my.status.kinetic.velocity = this.velocity;
                        if (this.velocity === 0) {
                            my.checkPosition();
                        }
                    }
                };
                settings = $.extend({
                    'classes': {
                        'slider': 'slider',
                        'nav': 'nav',
                        'prev': 'prev',
                        'next': 'next',
                        'canvas': 'canvas',
                        'hidden': 'hidden',
                        'beginning': 'at-beginning',
                        'end': 'at-end'
                    },
                    'selectors': {
                        'nav': 'a.nav'
                    },
                    'canvas_class': '',
                    'kinetic': false
                }, (settings || {}));
                my.$items = $container.children();
                my.metrics = {
                    'items': {
                        'total_width': 0
                    }
                };
                my.status = {
                    kinetic: {
                        velocity: 0
                    }
                };
                my.parseUI();
                my.ui.$shell.on("touchstart click", settings.selectors.nav, my.eventRegister("nav")).bind("touchend", my.checkPosition);
                if (settings.kinetic) {
                    my.ui.$canvas.kinetic(kineticOptions);
                }
                $(window).on("resize", my.eventRegister("resize"));
            },
            parseUI: function() {
                var canvas_class;
                $container.css({
                    'position': 'relative'
                });
                canvas_class = settings.classes.canvas +
                    (settings.canvas_class !== "" ? " " + settings.canvas_class : "");
                my.ui = {
                    'nav': {
                        '$prev': $("<a>", {
                            'href': '#',
                            'class': settings.classes.nav + ' ' + settings.classes.prev
                        }).append($("<span>").html("Previous")),
                        '$next': $("<a>", {
                            'href': '#',
                            'class': settings.classes.nav + ' ' + settings.classes.next
                        }).append($("<span>").html("Next"))
                    },
                    '$shell': $("<div>", {
                        'class': settings.classes.slider
                    }),
                    '$canvas': $("<div>", {
                        'class': canvas_class
                    }).css({
                        'position': 'relative'
                    })
                };
                my.ui.$shell.insertBefore($container);
                my.ui.$shell.append(my.ui.nav.$prev, my.ui.$canvas.append($container), my.ui.nav.$next);
                my.$items.each(function() {
                    my.metrics.items.total_width += $(this).outerWidth();
                });
                $container.css({
                    'width': my.metrics.items.total_width + 'px'
                });
                my.resize();
                my.checkPosition();
            },
            eventRegister: function(id) {
                return function(event) {
                    my.event.apply(this, [event, id]);
                };
            },
            event: function(event, id) {
                switch (id) {
                    case 'nav':
                        event.preventDefault();
                        my.adjust(($(this).hasClass(settings.classes.next) ? 1 : -1));
                        break;
                    case 'resize':
                        my.resize();
                }
            },
            showNavigation: function(show) {
                if (show) {
                    my.ui.nav.$prev.removeClass(settings.classes.hidden);
                    my.ui.nav.$next.removeClass(settings.classes.hidden);
                } else {
                    my.ui.nav.$prev.addClass(settings.classes.hidden);
                    my.ui.nav.$next.addClass(settings.classes.hidden);
                }
            },
            adjust: function(amount) {
                var $item, viewed;
                viewed = my.getNumberInView();
                if (amount > 0) {
                    $item = my.getFirstItem(viewed, viewed);
                } else {
                    $item = my.getFirstItem(-viewed, viewed);
                }
                my.slideToItem($item);
            },
            slideToItem: function($item) {
                var position = $item.position();
                my.ui.$canvas.animate({
                    'scrollLeft': position.left
                }, 350, 'easeOutExpo', function() {
                    my.checkPosition();
                });
            },
            resize: function() {
                my.updateMetrics();
                if (my.getNumberInView() === my.$items.length) {
                    my.showNavigation(false);
                } else {
                    my.showNavigation(true);
                }
            },
            updateMetrics: function() {
                my.$items = $container.children();
                my.metrics = {
                    'canvas': {
                        'width': my.ui.$canvas.width()
                    },
                    'container': {
                        'position': $container.position()
                    }
                };
            },
            checkPosition: function() {
                var scrollleft, scrollright;
                scrollleft = my.ui.$canvas[0].scrollLeft;
                scrollright = scrollleft + my.ui.$canvas.width();
                my.ui.$shell[(scrollleft < (my.$items.eq(0).width() / 2) ? 'add' : 'remove') + 'Class'].call(my.ui.$shell, settings.classes.beginning);
                my.ui.$shell[(scrollright >= $container.width() ? 'add' : 'remove') + 'Class'].call(my.ui.$shell, settings.classes.end);
            },
            getNumberInView: function() {
                var number = 0;
                my.updateMetrics();
                my.$items.each(function() {
                    var $this = $(this),
                        metrics;
                    metrics = {
                        'position': my.getItemPosition($this),
                        'width': $this.outerWidth()
                    };
                    metrics.position.right = (metrics.position.left + metrics.width);
                    if (metrics.position.left >= 0 && metrics.position.right <= my.metrics.canvas.width) {
                        number += 1;
                    } else if (metrics.position.right > my.metrics.canvas.width) {
                        return false;
                    }
                });
                if (number === 0) {
                    number = 1;
                }
                return number;
            },
            getFirstItem: function(offset, viewed) {
                var $item, first_index;
                my.updateMetrics();
                my.$items.each(function(index) {
                    var $this = $(this),
                        position;
                    $item = $this;
                    position = my.getItemPosition($this);
                    if (position.left >= 0) {
                        first_index = index + offset;
                        return false;
                    }
                });
                if (first_index < 0) {
                    first_index = 0;
                } else if (first_index > ((my.$items.length - 1) - viewed)) {
                    first_index = my.$items.length - viewed;
                }
                return my.$items.eq(first_index);
            },
            getItemPosition: function($item) {
                var position = $item.position();
                position.left = (position.left + my.metrics.container.position.left);
                return position;
            }
        };
        my.enable();
        return cls;
    };
    if (typeof window.WS === "object") {
        window.WS.Slider = Slider;
    } else {
        window.WS = {
            'Slider': Slider
        };
    }
}(window.jQuery));
(function($) {
    var ScrollTrigger = function() {
        var cls, my;
        cls = {
            addElement: function() {
                return my.addElement.apply(cls, arguments);
            },
            removeElement: function() {
                return my.removeElement.apply(cls, arguments);
            }
        };
        my = {
            elements: [],
            metrics: {},
            ui: {
                $window: $(window)
            },
            enable: function() {
                my.metrics = {
                    'window': {
                        'height': my.ui.$window.height()
                    }
                };
                my.ui.$window.bind("resize", my.event).bind("load", function() {
                    my.adjustMetrics();
                });
            },
            event: function(event) {
                var scrolltop;
                if (event.type === "scroll") {
                    scrolltop = my.ui.$window.scrollTop();
                    my.checkPositions(scrolltop, scrolltop + my.metrics.window.height);
                } else if (event.type === "resize") {
                    my.adjustMetrics();
                    my.checkPositions();
                }
            },
            addElement: function($element, callback, type, settings) {
                var offset, scrolltop;
                if (type === undefined) {
                    type = ScrollTrigger.types.FROM_BOTTOM;
                }
                settings = $.extend({
                    'multiple': false
                }, settings);
                offset = $element.offset();
                my.elements.push({
                    'top': offset.top,
                    'bottom': offset.top + $element.outerHeight(),
                    '$element': $element,
                    'type': type,
                    'callback': callback,
                    'settings': settings,
                    'triggers': 0
                });
                $element.data("scrolltrigger-index", (my.elements.length - 1));
                if (my.elements.length === 1) {
                    my.ui.$window.bind("scroll", my.event);
                }
                scrolltop = my.ui.$window.scrollTop();
                my.checkPositions(scrolltop, scrolltop + my.metrics.window.height);
                return (my.elements.length - 1);
            },
            removeElement: function(index) {
                my.elements.splice(index, 1);
                if (!my.elements.length) {
                    my.ui.$window.unbind("scroll", my.event);
                }
            },
            checkPositions: function(top, bottom) {
                var a;
                for (a = 0; a < my.elements.length; a += 1) {
                    if (!my.elements[a].triggered) {
                        if (my.elements[a].type === ScrollTrigger.types.FROM_BOTTOM && my.elements[a].bottom < bottom) {
                            my.trigger(a);
                        } else if (my.elements[a].type === ScrollTrigger.types.FROM_TOP && my.elements[a].top < bottom) {
                            my.trigger(a);
                        } else if (my.elements[a].type === ScrollTrigger.types.TO_TOP && my.elements[a].top <= top) {
                            my.trigger(a);
                        } else if (my.elements[a].type === ScrollTrigger.types.TO_BOTTOM && my.elements[a].bottom <= top) {
                            my.trigger(a);
                        }
                    } else {
                        if (my.elements[a].type === ScrollTrigger.types.FROM_BOTTOM && my.elements[a].bottom > bottom) {
                            my.trigger(a, false);
                        } else if (my.elements[a].type === ScrollTrigger.types.FROM_TOP && my.elements[a].top > bottom) {
                            my.trigger(a, false);
                        } else if (my.elements[a].type === ScrollTrigger.types.TO_TOP && my.elements[a].top > top) {
                            my.trigger(a, false);
                        } else if (my.elements[a].type === ScrollTrigger.types.TO_BOTTOM && my.elements[a].bottom > top) {
                            my.trigger(a, false);
                        }
                    }
                }
            },
            trigger: function(index, state) {
                var trigger_result;
                if (state === undefined) {
                    state = true;
                }
                if (my.elements[index]) {
                    my.elements[index].triggers += 1;
                    if (typeof my.elements[index].callback === "function") {
                        my.elements[index].callback.apply(cls, [my.elements[index], state]);
                    }
                    my.elements[index].triggered = state;
                }
            },
            adjustMetrics: function() {
                var a, offset;
                my.metrics.window.height = my.ui.$window.height();
                for (a = 0; a < my.elements.length; a += 1) {
                    offset = my.elements[a].$element.offset();
                    my.elements[a].top = offset.top;
                    my.elements[a].bottom = offset.top + my.elements[a].$element.outerHeight();
                }
            }
        };
        my.enable();
        return cls;
    };
    ScrollTrigger.types = {
        'FROM_BOTTOM': 0,
        'FROM_TOP': 1,
        'TO_TOP': 2,
        'TO_BOTTOM': 3
    };
    if (typeof window.WS === "object") {
        window.WS.ScrollTrigger = ScrollTrigger;
    } else {
        window.WS = {
            'ScrollTrigger': ScrollTrigger
        };
    }
}(window.jQuery));
(function($, ob_set, WS) {
    var Video = function($container, url, settings, callback) {
        var cls, my;
        cls = {
            embed: function() {
                return my.embed.apply(this, arguments);
            },
            play: function() {
                return this.instance.play.apply(this.instance, arguments);
            },
            pause: function() {
                return this.instance.pause.apply(this.instance, arguments);
            },
            isLoaded: function() {
                return this.instance.loaded;
            },
            getData: function() {
                return this.instance.getData.aply(this.instance, arguments);
            }
        };
        my = {
            enable: function() {
                var matches, key;
                settings = ob_set(settings || {}, {
                    'type': null,
                    'auto_embed': false,
                    'classes': {
                        'video': 'video-item',
                        'mask': 'mask',
                        'hover': 'hover'
                    },
                    'width': $container.outerWidth(),
                    'height': $container.outerHeight(),
                    'auto_size': {
                        'width': false,
                        'height': false
                    },
                    'ratio': 1.77777777777778,
                    'callbacks': {
                        'play': null,
                        'pause': null,
                        'complete': null
                    }
                });
                cls.instance = null;
                cls.type = null;
                my.ui = {};
                for (key in Video.embeds) {
                    if (settings.type === key || Video.embeds[key].detect(url)) {
                        cls.instance = $.extend({}, Video.embeds[key]);
                        cls.instance.$container = $container;
                        cls.instance.settings = settings;
                        cls.type = key;
                        break;
                    }
                }
                $container.append(my.ui.$mask = $("<span>", {
                    'class': settings.classes.mask
                })).addClass(settings.classes.video);
                if (settings.auto_size.width) {
                    settings.width = (settings.height || $container.outerHeight()) * settings.ratio;
                    $container.css({
                        'width': settings.width + 'px'
                    });
                }
                if (settings.auto_size.height) {
                    settings.height = (settings.width || $container.outerWidth()) /
                        settings.ratio;
                    $container.css({
                        'height': settings.height + 'px'
                    });
                }
                if (settings.auto_embed && cls.instance) {
                    my.embed(null, null, callback);
                }
                $container.bind("mouseenter mouseleave", function(event) {
                    if (event.type === "mouseenter") {
                        $container.addClass(settings.classes.hover);
                    } else {
                        $container.removeClass(settings.classes.hover);
                    }
                });
                cls.$container = $container;
            },
            embed: function() {
                my.ui.$mask.remove();
                return cls.instance.embed.apply(cls.instance, arguments);
            }
        };
        my.enable();
        return cls;
    };
    Video.embeds = {
        YouTube: {
            $container: null,
            $frame: null,
            width: 0,
            height: 0,
            api_src: 'https://www.youtube.com/iframe_api',
            id: null,
            loaded: false,
            player: null,
            data: {
                'title': null,
                'description': null
            },
            detect: function(url) {
                var a, matches = [url.match(/youtube.com\/watch\?v=([^&$]*)/i), url.match(/youtu.be\/([^&$]*)/i)];
                for (a = 0; a < matches.length; a += 1) {
                    if (matches[a]) {
                        this.id = matches[a][1];
                        return true;
                    }
                }
                return false;
            },
            embed: function(width, height, callback) {
                if (this.$container === null || this.id === null) {
                    return false;
                }
                this.embed_base = "//www.youtube.com/embed/";
                this.embed_src = this.embed_base + this.id;
                if (typeof arguments[0] === "function") {
                    this.callback = arguments[0];
                    width = undefined;
                    height = undefined;
                }
                this.width = width || this.settings.width;
                this.height = height || this.settings.height;
                this.$frame = $("<iframe>", {
                    'src': this.embed_src,
                    'frameborder': '0',
                    'allowfullscreen': 'allowfullscreen',
                    'width': this.width,
                    'height': this.height
                });
                this.$container.empty().append(this.$frame);
                if (typeof window.onYouTubeIframeAPIReady === "function") {
                    window.onYouTubeIframeAPIReady = ($.proxy(function(existing) {
                        var instance = this;
                        return function() {
                            existing();
                            instance.youTubeIframeReady();
                        };
                    }, this)(window.onYouTubeIframeAPIReady));
                } else {
                    window.onYouTubeIframeAPIReady = $.proxy(this.youTubeIframeReady, this);
                }
                WS.Include.load(this.api_src);
                return this.$frame;
            },
            getData: function(key) {
                return this.data[key] || null;
            },
            play: function() {
                if (this.loaded) {
                    this.player.playVideo();
                }
            },
            pause: function() {
                if (this.loaded) {
                    this.player.pauseVideo();
                }
            },
            youTubeIframeReady: function() {
                var $canvas;
                this.$frame.replaceWith(($canvas = $("<div>", {
                    'id': 'youtube-player-' + this.id
                })));
                this.player = new YT.Player($canvas[0], {
                    'height': this.height,
                    'width': this.width,
                    'videoId': this.id,
                    'events': {
                        'onReady': $.proxy(this.handlers.onReady, this),
                        'onError': $.proxy(this.handlers.onError, this),
                        'onStateChange': $.proxy(this.handlers.onStateChange, this)
                    },
                    'playerVars': {
                        'rel': 0
                    }
                });
            },
            handlers: {
                onReady: function() {
                    this.loaded = true;
                    if (typeof this.callback === "function") {
                        this.callback.apply(this);
                    }
                },
                onStateChange: function(event) {
                    if (event.data === YT.PlayerState.PLAYING && typeof this.settings.callbacks.play === "function") {
                        this.settings.callbacks.play.apply(this);
                    } else if (event.data === YT.PlayerState.PAUSED && typeof this.settings.callbacks.pause === "function") {
                        this.settings.callbacks.pause.apply(this);
                    } else if (event.data === YT.PlayerState.ENDED && typeof this.settings.callbacks.complete === "function") {
                        this.settings.callbacks.complete.apply(this);
                    }
                }
            }
        },
        Vimeo: {
            $container: null,
            $frame: null,
            api_src: '//f.vimeocdn.com/js/froogaloop2.min.js',
            api_endpoint: 'http://vimeo.com/api/v2/video/',
            width: 0,
            height: 0,
            id: null,
            loaded: false,
            player: null,
            data: {
                'title': null,
                'description': null
            },
            detect: function(url) {
                var match = url.match(/vimeo.com\/(\d+)/i);
                if (match) {
                    this.id = match[1];
                    return true;
                } else {
                    return false;
                }
            },
            embed: function(width, height, callback) {
                var cls = this;
                if (cls.$container === null || cls.id === null) {
                    return false;
                }
                if (!window.Froogaloop) {
                    WS.Include.load(cls.api_src, function() {
                        cls.embed.apply(cls, [width, height, callback]);
                    });
                    return cls.$iframe;
                } else {
                    cls.embed_base = "//player.vimeo.com/video/";
                    cls.frame_id = "vimeo-" + cls.id;
                    cls.embed_src = cls.embed_base + cls.id + "?api=1&player_id=" + cls.frame_id + "&title=0&byline=0&portrait=0&badge=0";
                    if (typeof arguments[0] === "function") {
                        callback = arguments[0];
                        width = undefined;
                        height = undefined;
                    }
                    cls.width = width || cls.settings.width;
                    cls.height = height || cls.settings.height;
                    cls.$frame = $("<iframe>", {
                        'src': cls.embed_src,
                        'id': cls.frame_id,
                        'frameborder': '0',
                        'allowfullscreen': 'allowfullscreen',
                        'webkitallowfullscreen': 'webkitallowfullscreen',
                        'mozallowfullscreen': 'mozallowfullscreen',
                        'width': cls.width,
                        'height': cls.height
                    });
                    cls.$container.replaceWith(cls.$frame);
                    cls.loaded = true;
                    cls.player = $f(cls.$frame[0]);
                    cls.player.addEvent("ready", function() {
                        $.ajax(cls.api_endpoint + cls.id + '.json', {
                            'jsonp': 'vimeo-callback-' + cls.id,
                            'error': function() {
                                if (typeof callback === "function") {
                                    callback.apply(cls, [false]);
                                }
                            },
                            'success': function(data) {
                                if (data.length && typeof data[0] === "object") {
                                    cls.data.title = data[0].title;
                                    cls.data.description = data[0].description;
                                }
                                if (typeof callback === "function") {
                                    callback.apply(cls);
                                }
                            }
                        });
                        cls.player.addEvent("play", $.proxy(cls.handlers.play, cls));
                        cls.player.addEvent("pause", $.proxy(cls.handlers.pause, cls));
                        cls.player.addEvent("finish", $.proxy(cls.handlers.finish, cls));
                    });
                    return cls.$frame;
                }
            },
            getData: function(key) {
                return this.data[key] || null;
            },
            play: function() {
                if (!this.loaded || !this.player) {
                    throw new Error("Trying to run play() before video has loaded.");
                }
                this.player.api("play");
            },
            pause: function() {
                if (!this.loaded || !this.player) {
                    throw new Error("Trying to run play() before video has loaded.");
                }
                this.player.api("pause");
            },
            handlers: {
                play: function() {
                    if (typeof this.settings.callbacks.play === "function") {
                        this.settings.callbacks.play.apply(this);
                    }
                },
                pause: function() {
                    if (typeof this.settings.callbacks.pause === "function") {
                        this.settings.callbacks.pause.apply(this);
                    }
                },
                finish: function() {
                    if (typeof this.settings.callbacks.complete === "function") {
                        this.settings.callbacks.complete.apply(this);
                    }
                }
            }
        }
    };
    if (typeof window.WS === "object") {
        window.WS.Video = Video;
    } else {
        window.WS = {
            'Video': Video
        };
    }
}(window.jQuery, window.ob_set, window.WS));
(function(window, document, WS, ga) {
    if (typeof WS === "undefined") {
        window.WS = {};
        WS = window.WS;
    }
    if (typeof Array.indexOf === "undefined") {
        Array.prototype.indexOf = function(test) {
            var a;
            for (a = 0; a < this.length; a += 1) {
                if (this[a] == test) {
                    return a;
                }
            }
            return -1;
        };
    }
    if (typeof window.ob_set === "undefined") {
        window.ob_set = function(ob, defaults) {
            var key;
            for (key in defaults) {
                if (defaults.hasOwnProperty(key)) {
                    if (defaults[key] !== null && defaults[key].constructor === Object && (ob[key] === undefined || ob[key].constructor === Object)) {
                        ob[key] = window.ob_set(ob[key] || {}, defaults[key]);
                    } else if (ob[key] === undefined) {
                        ob[key] = defaults[key];
                    }
                }
            }
            return ob;
        };
    }
    WS.Gat = function(options) {
        var cls, my;
        cls = {
            options: (options || {}),
            active: false,
            register: function() {
                return my.register.apply(this, arguments);
            },
            deregister: function() {
                return my.deregister.apply(this, arguments);
            },
            track: function(uri, track_uri, event) {
                return my.track.apply(this, [uri, track_uri, event]);
            },
            track_event: function() {
                return my.track_event.apply(this, arguments);
            },
            track_social: function() {
                return my.track_social.apply(this, arguments);
            },
            set_redirect_handler: function() {
                return my.set_redirect_handler.apply(this, arguments);
            }
        };
        my = {
            enable: function() {
                var links, i, href, protocol, rel, a;
                cls.options = window.ob_set(cls.options, {
                    'vectors': {
                        'mailto': {
                            'type': WS.Gat.types.page
                        },
                        'download': {
                            'type': WS.Gat.types.page
                        },
                        'external': {
                            'type': WS.Gat.types.page
                        }
                    },
                    'initial_track': true,
                    'ext_forward': true,
                    'demographics': false,
                    'display_features': false
                });
                if (cls.options.hosts === undefined) {
                    cls.options.hosts = [];
                }
                (function(id) {
                    var element, script, date;
                    window.GoogleAnalyticsObject = id;
                    window[id] = window[id] || function() {
                        if (window.ga !== ga) {
                            ga = window.ga;
                            ga.apply(window, arguments);
                        } else {
                            (window[id].q = window[id].q || []).push(arguments);
                        }
                    };
                    window[id].l = (new Date()).valueOf();
                    ga = window[id];
                    element = document.createElement("script");
                    script = (document.getElementsByTagName("script"))[0];
                    element.async = 1;
                    element.src = "//www.google-analytics.com/analytics.js";
                    script.parentNode.insertBefore(element, script);
                })("ga");
                if (typeof cls.options.account === "string" && cls.options.account !== "") {
                    ga("create", cls.options.account, "auto", {
                        'allowLinker': true
                    });
                } else {
                    throw "Invalid/undefined google account number supplied";
                }
                if (cls.options.display_features) {
                    ga('require', 'displayfeatures');
                }
                if (cls.options.initial_track) {
                    ga("send", "pageview");
                    my.log("Tracking initial page: '" + location.href + "'");
                }
                if (cls.options.hosts.length > 0) {
                    ga("require", "linker");
                    ga("linker:autoLink", cls.options.hosts);
                }
                my.observe(document, "click", my.event_handle);
                my.log("Extended universal tracking initialized");
                my.registry = [];
                links = document.getElementsByTagName("a");
                for (i = 0; i < links.length; i += 1) {
                    a = links[i];
                    try {
                        if (a.getAttribute) {
                            href = a.getAttribute("href");
                            rel = a.getAttribute("rel");
                        } else {
                            href = a.readAttribute("href");
                            rel = a.readAttribute("rel");
                        }
                        protocol = a.protocol;
                    } catch (e) {
                        href = null;
                        rel = null;
                    }
                    if (href !== null && (href.indexOf("#") !== 0 && (rel === null || !rel.match(/no-track/)))) {
                        switch (protocol) {
                            case "mailto:":
                                if (cls.options.vectors.mailto.type === WS.Gat.types.page) {
                                    cls.register(a, WS.Gat.types.page, {
                                        'uri': href,
                                        'track_uri': my.prefixURI(href.substring(7), '/mailto')
                                    });
                                } else if (cls.options.vectors.mailto.type === WS.Gat.types.event) {
                                    cls.register(a, WS.Gat.types.event, {
                                        'category': 'mailto',
                                        'action': href.substring(7)
                                    });
                                }
                                break;
                            case "http:":
                            case "https:":
                            case "ftp:":
                                if (href.match(WS.Gat.settings.doc_re)) {
                                    if (cls.options.vectors.download.type === WS.Gat.types.page) {
                                        cls.register(a, WS.Gat.types.Page, {
                                            'uri': href,
                                            'track_uri': my.prefixURI(href, '/downloads')
                                        });
                                    } else if (cls.options.vectors.download.type === WS.Gat.types.event) {
                                        cls.register(a, WS.Gat.types.event, {
                                            'category': 'Download',
                                            'action': 'Click',
                                            'label': href.substring(7)
                                        });
                                    }
                                } else if (my.test_uri(href).external) {
                                    if (cls.options.vectors.external.type === WS.Gat.types.page) {
                                        cls.register(a, WS.Gat.types.Page, {
                                            'uri': href
                                        });
                                    } else if (cls.options.vectors.external.type === WS.Gat.types.event) {
                                        cls.register(a, WS.Gat.types.event, {
                                            'category': 'External',
                                            'action': 'Click',
                                            'label': href
                                        });
                                    }
                                }
                                break;
                        }
                    }
                }
                cls.active = true;
            },
            register: function(elements, type, data, event) {
                var a, b, element, href, element_string;
                type = type || WS.Gat.types.page;
                event = event || "click";
                data = data || {};
                if (typeof elements !== "object" || !elements.length) {
                    elements = [elements];
                }
                for (a = 0; a < elements.length; a += 1) {
                    element = elements[a];
                    for (b = 0; b != my.registry.length; b += 1) {
                        if (my.registry[b].element === element) {
                            my.registry.splice(b, 1);
                            element_string = element.tagName;
                            if (typeof element.id === "string") {
                                element_string += "#" + element.id;
                            }
                            if (element.className !== "") {
                                element_string += "." + element.className;
                            }
                            my.log("Element " + element_string + " is already registered - removing from registry.");
                            break;
                        }
                    }
                    try {
                        if (element.tagName === "A" || element.tagName === "AREA") {
                            if (element.getAttribute) {
                                href = element.getAttribute("href");
                            } else {
                                href = element.readAttribute("href");
                            }
                            data = window.ob_set(data, {
                                'uri': href
                            });
                        }
                    } catch (e) {
                        throw "Invalid/undefined element passed";
                    }
                    if (type === WS.Gat.types.page) {
                        if (data.uri !== undefined) {
                            my.registry.push({
                                'element': element,
                                'event': event,
                                'type': type,
                                'data': data
                            });
                        } else {
                            throw "Invalid data for page tracking registration supplied." + " A minimum of 'uri' must be included in the data object for non link elements.";
                        }
                    } else if (type === WS.Gat.types.event) {
                        if (data.category !== undefined && data.action !== undefined) {
                            my.registry.push({
                                'element': element,
                                'event': event,
                                'type': type,
                                'data': data
                            });
                        } else {
                            throw "Invalid data for event tracking registration supplied." + " A minimum of 'category' and 'action' must be included in the data object.";
                        }
                    }
                }
            },
            deregister: function(element) {
                var a, element_string;
                for (a = 0; a != my.registry.length; a += 1) {
                    if (my.registry[a].element === element) {
                        my.registry.splice(a, 1);
                        element_string = element.tagName;
                        if (typeof element.id === "string") {
                            element_string += "#" + element.id;
                        }
                        if (element.className !== "") {
                            element_string += "." + element.className;
                        }
                        my.log("Element " + element_string + " removed from registry.");
                        return true;
                    }
                }
                return false;
            },
            event_handle: function(event) {
                var a, element, register;
                event = event || window.event();
                if (event && event.type === "click") {
                    element = event.srcElement || event.target;
                    while (element) {
                        for (a = 0; a != my.registry.length; a += 1) {
                            if (my.registry[a].element === element) {
                                register = my.registry[a];
                                break;
                            }
                        }
                        if (register) {
                            break;
                        }
                        element = element.parentNode;
                    }
                    if (register) {
                        switch (register.type) {
                            case WS.Gat.types.page:
                                return my.track(register.data.uri, register.data.track_uri, event, register);
                            case WS.Gat.types.event:
                                return my.track_event(register.data.category, register.data.action, (register.data.label ? register.data.label : undefined), (register.data.value ? register.data.value : undefined), Boolean(register.data.runonce));
                        }
                    }
                }
            },
            track: function(uri, track_uri, event, register) {
                var test, target;
                if (!cls.active) {
                    return;
                }
                if (typeof track_uri !== "string" || track_uri === "") {
                    track_uri = uri;
                }
                test = my.test_uri(uri);
                target = cls;
                my.log("Tracking" +
                    (test.external ? " external" : "") + " VPV: '" + track_uri + "'");
                if (test.external) {
                    if (event !== undefined && cls.options.ext_forward) {
                        if (event.preventDefault) {
                            event.preventDefault();
                        }
                        if (typeof event.target !== "undefined") {
                            target = event.target;
                        }
                    }
                    if (test.hostname && cls.options.hosts.indexOf(test.hostname) === -1) {
                        ga("send", "pageview", my.prefixURI(track_uri, '/external'));
                        if (event !== undefined && cls.options.ext_forward) {
                            my.redirect.apply(target, [uri, test, register]);
                        }
                    } else {
                        my.redirect.apply(target, [uri, test, register]);
                    }
                } else {
                    if (test.document && event !== undefined) {
                        if (event.preventDefault) {
                            event.preventDefault();
                        }
                    }
                    ga("send", "pageview", track_uri);
                    if (test.document && event !== undefined) {
                        my.redirect.apply(target, [uri, test, register]);
                    }
                }
                if (test.external || test.document) {
                    return (event === undefined);
                } else {
                    return true;
                }
            },
            track_event: function(category, action, label, value, runonce) {
                var identifier, tracked;
                identifier = category + "/" + action + "[" + label + "]";
                tracked = false;
                if (!cls.active || (runonce && WS.Gat.Tracked.indexOf(identifier) !== -1)) {
                    return false;
                }
                if (label !== undefined && label !== null) {
                    my.log("Tracking event: " + category + ", " + action + " (" + label + ": '" + value + "')");
                    if (!isNaN(value) && value !== null) {
                        value = parseInt(value, 10);
                    } else {
                        value = 0;
                    }
                    tracked = (ga("send", "event", category, action, label, value) === 0);
                } else {
                    my.log("Tracking event: " + category + ", " + action);
                    tracked = (ga("send", "event", category, action) === 0);
                }
                WS.Gat.Tracked.push(identifier);
                return tracked;
            },
            track_social: function(network, action, target, path) {
                my.log("Tracking social action: " + network + ", " + action + " [target: '" + target + "', path: '" + path + "']");
                ga("send", "social", network, action, target, {
                    'page': path
                });
            },
            test_uri: function(uri) {
                var result, hostname;
                result = {
                    'external': false,
                    'document': false
                };
                hostname = null;
                if (uri !== undefined) {
                    hostname = uri.match(/:\/\/([^\/]*)/);
                    if (hostname !== null && (hostname[1].length > 3 && hostname[1] !== location.hostname && hostname[1] !== "")) {
                        result.external = true;
                    }
                    if (uri.match(WS.Gat.settings.doc_re)) {
                        result.document = true;
                    }
                }
                result.hostname = (hostname !== null ? hostname[1] : null);
                return result;
            },
            log: function() {
                var a;
                if (typeof console !== "undefined") {
                    for (a = 0; a != arguments.length; a += 1) {
                        console.log(arguments[a]);
                    }
                }
            },
            redirect: function(uri, test) {
                window.setTimeout(function() {
                    location.href = uri;
                }, WS.Gat.settings.transfer_timeout);
            },
            set_redirect_handler: function(fn) {
                if (typeof fn === "function") {
                    my.redirect = fn;
                    return my.redirect;
                }
                return false;
            },
            observe: function(element, event, fn) {
                if (element.addEventListener) {
                    element.addEventListener(event, fn, false);
                } else if (element.attachEvent) {
                    element.attachEvent("on" + event, fn);
                }
            },
            prefixURI: function(uri, prefix) {
                if (uri.charAt(0) !== "/") {
                    return prefix + "/" + uri;
                } else {
                    return prefix + uri;
                }
            }
        };
        my.enable();
        return cls;
    };
    WS.Gat.types = {
        'page': 0,
        'event': 1
    };
    WS.Gat.settings = {
        'doc_re': /\.(?:docx?|eps|jpe?g|png|svg|xls|ppt|pdf|xls|zip|txt|vsd|vxd|rar|exe|wma|mov|avi|wmv|mp3)($|\&|\?)/i,
        'transfer_timeout': 100
    };
    WS.Gat.Tracked = [];
}(window, document, window.WS));
(function($, WS) {
    if (typeof WS === "undefined") {
        throw new Error("Whitespace utility namespace does not exist");
    }
    WS.ShareController = function($shell, settings) {
        var cls, my;
        cls = {
            share: function() {
                return my.share.apply(cls, arguments);
            },
            set: function() {
                return my.set.apply(cls, arguments);
            }
        };
        my = {
            enable: function() {
                settings = window.ob_set(settings || {}, {
                    'share': {
                        'url': location.href,
                        'title': window.document.title,
                        'image': null
                    }
                });
                cls.networks = WS.ShareController.networks;
            },
            share: function(network, url, options) {
                options = window.ob_set(options || {}, settings.share);
                url = url || settings.share.url;
                return WS.ShareController.networks[network].share(url, options);
            },
            set: function(network, key, value) {
                return WS.ShareController.networks[network].set(key, value);
            }
        };
        my.enable();
        return cls;
    };
    WS.ShareController.set = function(settings) {
        if (!settings && typeof arguments[1] !== "object") {
            settings = {};
        }
        if (typeof arguments[1] === "object") {
            settings = window.ob_set(arguments[1], settings || {});
        } else {
            settings[arguments[1]] = arguments[2];
        }
        return settings;
    };
    WS.ShareController.networks = {
        twitter: {
            data: {
                'name': 'Twitter'
            },
            settings: {
                'intents_endpoint': 'https://twitter.com/intent/',
                'window': {
                    'width': 600,
                    'height': 300
                }
            },
            set: function() {
                this.settings = WS.ShareController.set.apply(this, [this.settings, arguments[0], arguments[1]]);
            },
            share: function(url, options, after) {
                var params, key, window_settings;
                options = window.ob_set(options || {}, {
                    'text': '',
                    'hashtags': '',
                    'via': '',
                    'in_reply_to': '',
                    'related': ''
                });
                window_settings = [];
                params = ['url=' + window.encodeURIComponent(url)];
                for (key in options) {
                    if (options.hasOwnProperty(key) && options[key] !== "") {
                        params.push(key + '=' + window.encodeURIComponent(options[key]));
                    }
                }
                url = this.settings.intents_endpoint + "tweet?" + params.join("&");
                if (this.settings.window) {
                    for (key in this.settings.window) {
                        if (this.settings.window.hasOwnProperty(key)) {
                            window_settings.push(key + "=" + this.settings.window[key]);
                        }
                    }
                }
                window.open(url, "twittershare", window_settings.join(","));
            }
        },
        facebook: {
            data: {
                'name': 'Facebook'
            },
            set: function() {
                this.settings = WS.ShareController.set.apply(this, [this.settings, arguments[0], arguments[1]]);
            },
            share: function(url, options, after) {
                var $para;
                if (!window.FB) {
                    $(document.body).append($("<div>", {
                        'id': 'fb-root'
                    }));
                    this.init(function() {
                        this.share(url, options);
                    });
                } else {
                    options = window.ob_set(options || {}, {
                        'text': '',
                        'image': ''
                    });
                    if (options.text === "") {
                        if (($para = $(".article .copy > p").first()).length || ($para = $(".article p").first()).length) {
                            options.text = $para.text();
                        }
                    }
                    window.FB.ui({
                        'method': 'feed',
                        'link': url,
                        'caption': options.text,
                        'name': options.title,
                        'picture': options.image
                    }, function(response) {
                        if (typeof after === "function") {
                            after();
                        }
                    });
                }
            },
            init: function(after) {
                var finish;
                if (!this.settings.app_id) {
                    throw new Error("App ID must be defined with set('app_id', '{app_id}')");
                }
                finish = function() {
                    window.FB.init({
                        'appId': this.settings.app_id,
                        'xfbml': true,
                        'version': 'v2.0'
                    });
                    if (typeof after === "function") {
                        after.apply(this);
                    }
                };
                if (!window.FB) {
                    window.fbAsyncInit = (function(fn, cls) {
                        return function() {
                            finish.apply(cls);
                            if (typeof fn === "function") {
                                fn();
                            }
                        };
                    }(window.fbAsyncInit, this));
                    $.getScript("//connect.facebook.net/en_US/sdk.js");
                } else {
                    if (typeof after === "function") {
                        after.apply(this);
                    }
                }
            }
        },
        linkedin: {
            data: {
                'name': 'LinkedIn'
            },
            settings: {
                'share_endpoint': 'http://www.linkedin.com/shareArticle?mini=true&',
                'window': {
                    'width': 520,
                    'height': 570
                }
            },
            set: function() {
                this.settings = WS.ShareController.set.apply(this, [this.settings, arguments[0], arguments[1]]);
            },
            share: function(url, options, after) {
                var params, key, window_settings;
                options = window.ob_set(options || {}, {
                    'title': '',
                    'source': '',
                    'summary': ''
                });
                window_settings = [];
                params = ['url=' + window.encodeURIComponent(url)];
                for (key in options) {
                    if (options.hasOwnProperty(key) && options[key] !== "") {
                        params.push(key + '=' + window.encodeURIComponent(options[key]));
                    }
                }
                url = this.settings.share_endpoint + params.join("&");
                if (this.settings.window) {
                    for (key in this.settings.window) {
                        if (this.settings.window.hasOwnProperty(key)) {
                            window_settings.push(key + "=" + this.settings.window[key]);
                        }
                    }
                }
                window.open(url, "linkedinshare", window_settings.join(","));
            }
        },
        googleplus: {
            data: {
                'name': 'Google+'
            },
            settings: {
                'intents_endpoint': 'https://plus.google.com/share',
                'window': {
                    'width': 510,
                    'height': 600
                }
            },
            set: function() {
                this.settings = ShareController.set.apply(this, [this.settings, arguments[0], arguments[1]]);
            },
            share: function(url, after) {
                var key, window_settings = [];
                url = this.settings.intents_endpoint + '?url=' + url;
                if (this.settings.window) {
                    for (key in this.settings.window) {
                        if (this.settings.window.hasOwnProperty(key)) {
                            window_settings.push(key + '=' + this.settings.window[key]);
                        }
                    }
                }
                window.open(url, 'googleplusshare', window_settings.join(','));
            }
        },
        email: {
            data: {
                'name': 'Email'
            },
            share: function(url, options, after) {
                options = window.ob_set(options || {}, {
                    'to': 'email@user.com',
                    'body': '',
                    'subject': ''
                });
                location.href = "mailto:" + options.to + '?subject=' + window.encodeURIComponent(options.subject) + '&body=' + window.encodeURIComponent(options.body);
            }
        }
    };
}(window.jQuery, window.WS));
(function($, $doc, WS) {
    if (!window.WS) {
        window.WS = {};
    }
    window.WS.Menu = function(site) {
        var my;
        my = {
            'settings': {
                'selectors': {
                    'html': 'html, body',
                    'content': '#header, #content, #footer',
                    'menu': '#menu',
                    'menu_content': '.menu-content',
                    'menuButton': '.menu-button',
                    'menuCategoryLinks': '.categories a',
                    'menuAboutLinks': '.about a',
                    'menuCategoryBgDivs': '.bg',
                    'allLinks': 'a:not(logo-main, #menu-button)',
                    'social': '.menu-content ul.social'
                },
                'classes': {
                    'open': 'menu-open',
                    'closed': 'menu-closed'
                }
            },
            'metrics': {
                'scrollPos': 0
            },
            'enable': function() {
                my.ui = {
                    '$html': $(my.settings.selectors.html),
                    '$menu': $doc.find(my.settings.selectors.menu),
                    '$menu_content': $doc.find(my.settings.selectors.menu_content),
                    '$menuButton': $doc.find(my.settings.selectors.menuButton),
                    '$menuCategoryLinks': $doc.find(my.settings.selectors.menuCategoryLinks),
                    '$menuAboutLinks': $doc.find(my.settings.selectors.menuAboutLinks),
                    '$menuCategoryBgDivs': $doc.find(my.settings.selectors.menuCategoryBgDivs),
                    '$social': $doc.find(my.settings.selectors.social)
                };
                my.parseUI();
                $doc.on('focus', my.settings.selectors.allLinks, my.eventRegister('toggleMenu'));
                my.ui.$menu.on('click', my.settings.selectors.menuButton, my.eventRegister('menuButton'));
                my.ui.$menu_content.on('mouseenter focus', my.settings.selectors.menuCategoryLinks, my.eventRegister('menuFocusCategoryLinks')).on('mouseleave focusout', my.settings.selectors.menuCategoryLinks, my.eventRegister('menuUnfocusCategoryLinks'));
            },
            'parseUI': function() {
                var last_delay, next_delay, fn_set_delay;
                fn_set_delay = function(index, additional_delay) {
                    var delay;
                    if (additional_delay === undefined) {
                        additional_delay = 0;
                    }
                    delay = ((index + 1) * 70) + additional_delay;
                    $(this).css({
                        'webkitTransitionDelay': delay + 'ms',
                        'transitionDelay': delay + 'ms'
                    });
                    last_delay = delay;
                };
                my.ui.$menuCategoryLinks.each(function(index) {
                    fn_set_delay.apply(this, [index]);
                });
                next_delay = last_delay;
                my.ui.$menuAboutLinks.each(function(index) {
                    fn_set_delay.apply(this, [index, next_delay]);
                });
                next_delay = last_delay;
                fn_set_delay.apply(my.ui.$social, [0, next_delay]);
            },
            'eventRegister': function(id) {
                return function(event) {
                    my.event.apply(this, [event, id]);
                };
            },
            'event': function(event, id) {
                switch (id) {
                    case 'menuButton':
                        event.preventDefault();
                        my.button($(this));
                        break;
                    case 'menuFocusCategoryLinks':
                        my.focusCategoryLinks($(this));
                        break;
                    case 'menuUnfocusCategoryLinks':
                        my.unfocusCategoryLinks($(this));
                        break;
                    case 'toggleMenu':
                        my.toggleMenu($(this));
                        break;
                }
            },
            'button': function($button) {
                if ($doc.hasClass(my.settings.classes.open)) {
                    my.open();
                    if (site.tests.media.tiny) {
                        my.contentShow();
                        $(my.settings.selectors.html).scrollTop(0);
                    }
                } else {
                    my.open(true);
                    if (site.tests.media.tiny) {
                        my.contentHide();
                        $(my.settings.selectors.html).scrollTop(0);
                    }
                }
            },
            'focusCategoryLinks': function($link) {
                var $bgHovered;
                $bgHovered = my.ui.$menu_content.find(my.settings.selectors.menuCategoryBgDivs + '.' + $link.data('category'));
                my.ui.$menuCategoryBgDivs.css({
                    'opacity': 0
                });
                $bgHovered.css({
                    'opacity': 1
                });
            },
            'unfocusCategoryLinks': function($link) {
                my.ui.$menuCategoryBgDivs.css({
                    'opacity': 0
                });
            },
            'toggleMenu': function($link) {
                if (my.ui.$menu_content.has($link).length && $doc.hasClass(my.settings.classes.open)) {
                    my.open(true);
                } else if (my.ui.$menu_content.has($link).length && !$doc.hasClass(my.settings.classes.open)) {
                    my.open(true);
                } else {
                    my.open();
                }
            },
            'open': function(open) {
                if (open) {
                    $doc.addClass(my.settings.classes.open);
                    my.ui.$menu_content.addClass(my.settings.classes.open).removeClass(my.settings.classes.closed);
                } else {
                    $doc.removeClass(my.settings.classes.open);
                    my.ui.$menu_content.removeClass(my.settings.classes.open).addClass(my.settings.classes.closed);
                }
            },
            'contentHide': function() {
                $(my.settings.selectors.content).hide();
            },
            'contentShow': function() {
                $(my.settings.selectors.content).show();
            }
        };
        my.enable();
    };
}(window.jQuery, window.jQuery(document.body), window.WS));
(function($) {
    if (!window.WS) {
        window.WS = {};
    }
    window.WS.Expander = function($container, settings, wsgat) {
        var cls, my;
        cls = {
            'updateEntries': function() {
                my.updateEntries();
            },
            'disable': function() {
                my.disable();
            },
            'enable': function() {
                my.activate();
            }
        };
        my = {
            status: 'enabled',
            margin_horizontal: 0,
            width: $(window).width(),
            enable: function() {
                $container = $($container);
                settings = $.extend({
                    'selectors': {
                        'html': 'html, body',
                        'expand': '.expand',
                        'entry': '.entry:not(.expand .entry)',
                        'entry_active': '.entry:not(.expand .entry).active',
                        'expand_entries': '.expand .entry',
                        'entry_links': '.entry:not(.expand .entry) a',
                        'close': '.close',
                        'entriesContainer': '.filtered',
                        'entriesPagination': '.pagination'
                    },
                    'classes': {
                        'open': 'open',
                        'active': 'active',
                        'expanded': 'expanded',
                        'loading': 'loading'
                    },
                    'callbacks': {
                        'load': null
                    }
                }, settings || {});
                my.ui = {};
                my.updateEntries();
                $(window).resize(function() {
                    my.updateEntries();
                    if ($(window).width() !== my.width) {
                        if (my.ui.$entries.length > 0) {
                            $(settings.selectors.expand).removeClass(settings.classes.open);
                            $(settings.selectors.expand).remove();
                            my.ui.$entries.removeClass(settings.classes.active);
                        }
                        my.width = $(window).width();
                    }
                });
                $container.on("click", settings.selectors.entry_links, my.eventRegister("entrylink")).on("click", settings.selectors.close, my.eventRegister("close"));
            },
            eventRegister: function(id) {
                return function(event) {
                    my.event.apply(this, [event, id]);
                };
            },
            event: function(event, id) {
                switch (id) {
                    case "entrylink":
                        event.preventDefault();
                        my.openEntry($(this).closest(settings.selectors.entry));
                        break;
                    case "close":
                        event.preventDefault();
                        my.closeEntry($container.find(settings.selectors.entry_active));
                        break;
                }
            },
            updateEntries: function() {
                my.ui.$entries = $container.find(settings.selectors.entry);
            },
            openEntry: function($entry) {
                var $entryLink, $expand, $lastEntryInRow;
                my.updateEntries();
                $entryLink = $entry.find("a");
                $expand = $container.find(settings.selectors.expand);
                $lastEntryInRow = my.ui.$entries.eq(my.findLastEntryInRow.apply($entry));
                if (wsgat) {
                    wsgat.track_event('Find-a-Location', 'Click', $entryLink.text().replace('View ', ''));
                }
                if (my.status === 'enabled') {
                    if ($entry.hasClass(settings.classes.active)) {
                        $expand.removeClass(settings.classes.open);
                        $entry.removeClass(settings.classes.active);
                    } else {
                        if (!$lastEntryInRow.next().hasClass(settings.classes.expanded)) {
                            $expand.remove();
                            $expand = $('<div class="expand"><div class="inner"></div></div>');
                            $expand.css('margin-left', -my.margin_horizontal + 'px');
                            $expand.css('margin-right', -my.margin_horizontal + 'px');
                        }
                        $entry.addClass(settings.classes.loading);
                        my.load($entryLink.attr('href'), function(data) {
                            $entry.removeClass(settings.classes.loading);
                            $expand.find('.inner').html(data);
                            $lastEntryInRow.after($expand);
                            if (typeof settings.callbacks.load === "function") {
                                settings.callbacks.load.apply(this, [$expand]);
                            }
                            $expand.addClass(settings.classes.open);
                            my.ui.$entries.removeClass(settings.classes.active);
                            $entry.addClass(settings.classes.active);
                            $(settings.selectors.html).animate({
                                scrollTop: $expand.offset().top - 80
                            });
                        });
                    }
                }
            },
            closeEntry: function($entry) {
                var $expand;
                $entry.removeClass(settings.classes.active);
                $expand = $container.find(settings.selectors.expand);
                $expand.removeClass(settings.classes.open);
            },
            load: function(url, after) {
                if (my.xhr && my.xhr.abort) {
                    my.xhr.abort();
                    my.xhr = null;
                }
                my.xhr = $.get(url, after);
            },
            findLastEntryInRow: function() {
                var screenWidth, entryWidth, currentEntryIndex, entriesPerRow, entryCol, lastEntryColInRow;
                screenWidth = $(settings.selectors.entriesContainer).outerWidth(true);
                entryWidth = my.ui.$entries.outerWidth();
                currentEntryIndex = my.ui.$entries.index(this);
                entriesPerRow = Math.floor(screenWidth / entryWidth);
                if (entriesPerRow > my.ui.$entries.length) {
                    entriesPerRow = my.ui.$entries.length;
                }
                entryCol = (currentEntryIndex % entriesPerRow) + 1;
                lastEntryColInRow = (currentEntryIndex + entriesPerRow) - entryCol;
                if (lastEntryColInRow > (my.ui.$entries.length - 1)) {
                    lastEntryColInRow = my.ui.$entries.length - 1;
                }
                return lastEntryColInRow;
            },
            disable: function() {
                my.status = 'disabled';
            },
            activate: function() {
                my.status = 'enabled';
            }
        };
        my.enable();
        return cls;
    };
}(window.jQuery));
(function($) {
    if (!window.WS) {
        window.WS = {};
    }
    window.WS.RatioRetainer = function(settings) {
        var cls, my;
        cls = {
            activate: function() {
                return my.activate.apply(cls, [true]);
            },
            deactivate: function() {
                return my.activate.apply(cls, [false]);
            },
            parseItems: function() {
                return my.parseItems.apply(cls, [false]);
            },
            adjustItems: function() {
                return my.adjustItems.apply(cls, [false]);
            }
        };
        my = {
            enable: function() {
                settings = $.extend({
                    'items': [{
                        'selector': null,
                        'ratio': 1
                    }]
                }, (settings || {}));
                my.ui = {
                    '$win': $(window)
                };
                my.status = {
                    'active': false
                };
                my.parseItems();
                my.activate(true);
                my.adjustItems();
            },
            parseItems: function() {
                var a, item;
                my.getItems(function() {
                    this.$elements = $(this.selector);
                });
            },
            getItems: function(callback) {
                var a;
                for (a = 0; a < settings.items.length; a += 1) {
                    callback.apply(settings.items[a]);
                }
            },
            event: function(event) {
                if (event.type === "resize") {
                    my.adjustItems();
                }
            },
            adjustItems: function() {
                if (!my.status.active) {
                    return;
                }
                my.getItems(function() {
                    var a, height;
                    for (a = 0; a < this.$elements.length; a += 1) {
                        height = (this.$elements.eq(a).outerWidth() / this.ratio);
                        this.$elements.eq(a).css({
                            'height': height + 'px'
                        });
                    }
                });
            },
            clearItems: function() {
                my.getItems(function() {
                    this.$elements.css({
                        'height': ''
                    });
                });
            },
            activate: function(active) {
                my.status.active = active;
                if (active) {
                    my.ui.$win.bind("resize", my.event);
                } else {
                    my.ui.$win.unbind("resize", my.event);
                    my.clearItems();
                }
            }
        };
        my.enable();
        return cls;
    };
}(window.jQuery));
(function($) {
    if (!window.WS) {
        window.WS = {};
    }
    window.WS.WordCycle = function($element, settings) {
        var my;
        my = {
            init: function() {
                settings = window.ob_set(settings || {}, {
                    'data': [],
                    'selectors': {
                        'cycle': '.cycle',
                        'letter': 'b'
                    },
                    'delay': 1500,
                    'step_delay': 50,
                    'styles': {
                        'shell': {
                            'display': 'inline-block',
                            'vertical-align': 'bottom'
                        },
                        'base': {
                            'position': 'relative',
                            'display': 'inline-block'
                        },
                        'reset': {
                            'top': '-10px',
                            'opacity': 0
                        },
                        'visible': {
                            'top': 0,
                            'opacity': 1
                        },
                        'hidden': {
                            'top': '10px',
                            'opacity': 0
                        }
                    },
                    'animations': {
                        'hidden': {
                            'duration': 200,
                            'ease': 'easeInOutExpo'
                        },
                        'visible': {
                            'duration': 400,
                            'ease': 'easeInOutExpo'
                        }
                    }
                });
                my.ui = {
                    '$cycle': $element.find(settings.selectors.cycle).css(settings.styles.shell)
                };
                my.timers = {};
                my.queue = [];
                my.data = settings.data;
                if (my.data) {
                    my.generateLetters(my.ui.$cycle.text(), true);
                    my.timer();
                }
                my.index = 0;
            },
            generateLetters: function(text, visible) {
                var a, $letter, total_width;
                if (text) {
                    text = text.split("");
                    my.ui.$cycle.html("");
                    total_width = 0;
                    for (a = 0; a < text.length; a += 1) {
                        $letter = $("<b>").text(text[a]).css(window.ob_set((visible ? settings.styles.visible : settings.styles.reset), settings.styles.base));
                        my.ui.$cycle.append($letter);
                        total_width += $letter.outerWidth();
                    }
                    my.ui.$cycle.animate({
                        'width': total_width + 'px'
                    });
                }
            },
            timer: function() {
                window.setTimeout(function() {
                    my.next(my.timer);
                }, settings.delay);
            },
            next: function(after) {
                var index;
                index = my.index + 1;
                if (index > my.data.length - 1) {
                    index = 0;
                }
                my.animateOut(function() {
                    my.animateIn(my.data[index], after);
                });
                my.index = index;
            },
            animateOut: function(after) {
                my.animate(my.ui.$cycle.find(settings.selectors.letter), settings.styles.hidden, settings.animations.hidden.duration, settings.animations.hidden.ease, after);
            },
            animateIn: function(text, after) {
                my.generateLetters(text);
                my.animate(my.ui.$cycle.find(settings.selectors.letter), settings.styles.visible, settings.animations.visible.duration, settings.animations.visible.ease, after);
            },
            animate: function($letters, properties, duration, easing, after) {
                $letters.each(function(index) {
                    var $letter = $(this),
                        complete;
                    if (index === ($letters.length - 1)) {
                        complete = after;
                    }
                    my.step(function() {
                        $letter.animate(properties, {
                            'complete': complete,
                            'duration': duration,
                            'easing': easing
                        });
                    });
                });
            },
            step: function(fn) {
                if (fn !== undefined) {
                    my.queue.push(fn);
                    window.clearInterval(my.timers.queue);
                    my.timers.queue = window.setInterval(my.step, settings.step_delay);
                } else if (my.queue.length) {
                    my.queue[0].apply(this);
                    my.queue.splice(0, 1);
                }
                if (!my.queue.length) {
                    window.clearInterval(my.timers.queue);
                }
            }
        };
        my.init();
    };
}(window.jQuery));
(function() {
    if (!window.WS) {
        window.WS = {};
    }
    window.WS.Locations = function($container, site, settings) {
        var my;
        my = {
            'init': function() {
                settings = window.ob_set(settings || {}, {});
                my.parseUI();
            },
            'parseUI': function() {
                if (!site.tests.media.tiny) {
                    site.expander.apply($container);
                }
                site.categoriser.apply($container);
            }
        };
        my.init();
    };
}());
(function(WS) {
    if (WS && WS.Form) {
        WS.Form.Fields['frm-newsletter-signup'] = {
            'email': {
                'require': true,
                'type': WS.Form.ValueTypes.Email
            }
        };
        WS.Form.Fields['frm-contact-us'] = {
            'first_name': true,
            'last_name': true,
            'email': {
                'require': true,
                'type': WS.Form.ValueTypes.Email
            },
            'enquiry': true
        };
        WS.Form.Fields['frm-location-enquiry'] = {
            'first_name': true,
            'last_name': true,
            'email': {
                'require': true,
                'type': WS.Form.ValueTypes.Email
            },
            'enquiry': true
        };
        WS.Form.Fields['frm-register-your-property'] = {
            'first_name': true,
            'last_name': true,
            'email': {
                'require': true,
                'type': WS.Form.ValueTypes.Email
            },
            'description': true
        };
    }
}(window.WS));
(function($, $doc, WS) {
    var site;
    site = {
        'selectors': {
            'html': 'html, body',
            'header': '#header',
            'sliders': '.slide:not(.slider .slide)',
            'filters': 'ul.filters',
            'filtered': '.filtered',
            'entries': '.entry:not(.expand .entry)',
            'expand': '.expand',
            'entriesWrapper': '.entries:not(.locations)',
            'expanderWrapper': '.expander:not(.locations)',
            'locationsList': '.entries.locations',
            'click_nodes': '.click',
            'click_nodes_active': '.clickable',
            'link': 'a[href]',
            'header_video_link': '#header a.video',
            'btn_share': 'a.btn-share',
            'forms': 'form:not(.noparse)',
            'draggable': '.draggable',
            'draggableItems': '.draggable li',
            'draggableContainer': '.draggable-container',
            'carousels': '.carousel',
            'carouselVideoContainer': '.carousel .video-container',
            'carouselVideoLinks': '.carousel .video',
            'carouselSlideNumber': '.slide-number',
            'carouselDetails': '.carousel-wrapper .details h3',
            'moreInfoButton': '.more-info-button',
            'moreInfoContent': '.more-info-content',
            'toggleElmButton': '.toggle-elm-button',
            'toggleElmContent': '.toggle-elm-content',
            'ajaxContent': '.ajax-content',
            'ajaxContentContainer': '.ajax-content-container',
            'ajaxContentLink': '.ajax-content a',
            'ajaxTarget': '.ajax-target',
            'highResBg': '[data-high-res]',
            'wordcycle': '.word-cycle',
            'list_campaigns': '#list-campaigns',
            'google_maps': '.google-map',
            'sprite': '.sprite',
            'menu_sticky': 'body.header-trigger-active #menu',
            'redirect_canonical': 'meta[name=redirect_canonical]'
        },
        'callbacks': {
            'media': []
        },
        'classes': {
            'video': 'video',
            'video_close': 'video-close',
            'active': 'active',
            'hidden': 'hidden'
        },
        'enable': function() {
            site.ui = {
                '$header': $doc.find("#header"),
                '$sticky_footer': $doc.find("#sticky-footer"),
                '$homepage_intro_panel': $doc.find(".homepage.introduction-gateway")
            };
            site.instances = {
                'scrolltrigger': new WS.ScrollTrigger(),
                'ratio': null,
                'gat': new WS.Gat({
                    'account': 'UA-64295771-1'
                }),
                'videos': [],
                'carousels': [],
                'whitebox': new WS.WhiteBox({
                    'root': $("#shell"),
                    'elements': [$("<a>", {
                        'href': '#',
                        'class': 'close'
                    }).text("Close").append($("<span>")).bind("click", function(event) {
                        event.preventDefault();
                        site.instances.whitebox.hide();
                    })]
                }, {
                    'overlay': {
                        'load': {
                            'callback': function() {
                                return true;
                            }
                        },
                        'hide': {
                            'callback': function() {
                                return true;
                            }
                        }
                    }
                })
            };
            site.media_queries = {
                'large': [
                    ['screen', '(min-width: 1024px)']
                ],
                'medium': [
                    ['screen', '(max-width: 1024px)']
                ],
                'small': [
                    ['screen', '(max-width: 925px)']
                ],
                'tiny': [
                    ['screen', '(max-width: 767px)']
                ],
                'highres': [
                    ['screen', '(-webkit-min-device-pixel-ratio: 2)'],
                    ['screen', '(min-device-pixel-ratio: 2)'],
                    ['screen', '(min-resolution: 2dppx)']
                ]
            };
            site.tests = {
                'media': {
                    'large': false,
                    'medium': true,
                    'small': false,
                    'tiny': false,
                    'highres': false
                },
                'background_size': ('backgroundSize' in document.body.style),
                'touch': ('ontouchstart' in window)
            };
            if ($(site.selectors.redirect_canonical).length) {
                window.location = $(site.selectors.redirect_canonical).attr('content');
            }
            site.instances.gat.set_redirect_handler(site.redirectHandle);
            site.startMediaDetection().initMenu();
            site.initDraggable.init();
            site.ajaxReveal.init();
            site.ratioRetainer();
            site.centerEntries();
            $(window).resize(function() {
                site.centerEntries();
            });
            site.parse();
            $doc.on('click', site.selectors.click_nodes_active, site.eventRegister('clickNodes')).on('click', site.selectors.btn_share, site.eventRegister('share')).on('click', site.selectors.moreInfoButton, site.eventRegister('moreInfoButton')).on('click', site.selectors.toggleElmButton, site.eventRegister('toggleElm'));
            site.instances.access = new WS.Access({}, site.instances.whitebox, site.instances.wsgat);
            window.setTimeout(function() {
                site.initHashScroll();
            }, 50);
            window.setTimeout(function() {
                $("head").append($("<link>", {
                    'href': '//fast.fonts.net/t/1.css?apiType=css&38da1dde-7b19-4242-ad1f-6ff4560ae260',
                    'type': 'text/css',
                    'rel': 'stylesheet'
                }));
            }, 50);
        },
        'eventRegister': function(id) {
            return function(event) {
                site.event.apply(this, [event, id]);
            };
        },
        'event': function(event, id) {
            switch (id) {
                case 'clickNodes':
                    site.clickNodes.click($(this), event);
                    break;
                case 'share':
                    event.preventDefault();
                    site.share($(this));
                    break;
                case 'moreInfoButton':
                    event.preventDefault();
                    site.moreInfo($(this));
                    break;
                case 'toggleElm':
                    event.preventDefault();
                    site.toggleElm($(this));
                    break;
                case 'ajaxReveal':
                    event.preventDefault();
                    site.ajaxReveal.reveal.apply($(this));
                    break;
            }
        },
        'startMediaDetection': function() {
            WS.JSMedia.monitor(site.media_queries.large, site.media_queries.medium, site.media_queries.small, site.media_queries.tiny, site.media_queries.highres, function(result) {
                site.tests.media.large = result[0];
                site.tests.media.medium = result[1];
                site.tests.media.small = result[2];
                site.tests.media.tiny = result[3];
                site.tests.media.highres = result[4] && site.tests.background_size;
                site.mediaResponse.apply(site, arguments);
            });
            if (!site.tests.touch) {
                $doc.addClass("no-touch");
            }
            return this;
        },
        'initMenu': function() {
            new WS.Menu(site);
            return this;
        },
        'initHashScroll': function() {
            var $elm, hash = window.location.hash.replace(/^#/, "");
            if (hash && $(document.getElementById(hash)).length) {
                $elm = $(document.getElementById(hash));
                $(site.selectors.html).animate({
                    scrollTop: $elm.offset().top - $(site.selectors.menu_sticky).height()
                }, 750);
            }
            return this;
        },
        'initDraggable': {
            'init': function() {
                var cls = this,
                    itemsWidth = 0,
                    $items = $(site.selectors.draggableItems),
                    $element = $(site.selectors.draggable),
                    $container = $(site.selectors.draggableContainer),
                    kineticOptions, attach, detach, checkPosition;
                checkPosition = function() {
                    var map = [];
                    if (cls.status.attaching) {
                        return;
                    }
                    if (!this.velocity) {
                        $items.each(function(index) {
                            var $this = $(this),
                                offset = $this.offset(),
                                pos = $this.position(),
                                width = $this.outerWidth(),
                                docwidth = $doc.width(),
                                onscreen;
                            offset.right = offset.left + width;
                            if (offset.left < 0) {
                                onscreen = width - Math.abs(offset.left);
                            } else if (offset.right > 0) {
                                onscreen = width - (offset.right - docwidth);
                            }
                            map.push({
                                'index': index,
                                'onscreen': onscreen,
                                'left': pos.left
                            });
                        });
                    }
                    map.sort(function(a, b) {
                        return b.onscreen - a.onscreen;
                    });
                    $container.animate({
                        'scrollLeft': map[0].left + 'px'
                    }, {
                        'duration': 300
                    });
                };
                this.status = {
                    'kinetic': {
                        'velocity': 0
                    }
                };
                kineticOptions = {
                    'filterTarget': function(target, e) {
                        if (!/down|start/.test(e.type)) {
                            return !(/area|a|input/i.test(target.tagName));
                        }
                    },
                    'triggerHardware': true,
                    'y': false,
                    'stopped': function() {
                        checkPosition();
                    },
                    'moved': function() {
                        cls.status.kinetic.velocity = this.velocity;
                    }
                };
                $.Kinetic.prototype.jumpTo = function(options) {
                    this.stop();
                    this.el.scrollLeft = options.x;
                    this.el.scrollTop = options.y;
                };
                attach = function() {
                    var $active, offset;
                    $element.css('width', itemsWidth);
                    $container.kinetic(kineticOptions);
                    cls.status.attaching = true;
                    if (($active = $container.find(".active")).length) {
                        offset = $active.offset();
                        $container.kinetic('jumpTo', {
                            'x': offset.left + ($active.outerWidth() / 2) - ($container.width() / 2)
                        });
                    }
                    cls.status.attaching = false;
                    $element.bind("mouseup touchend", checkPosition);
                };
                detach = function() {
                    $element.css('width', 'auto');
                    $container.kinetic('detach');
                    $element.unbind("mouseup touchend", checkPosition);
                };
                $items.each(function() {
                    itemsWidth += $(this).outerWidth(true);
                    itemsWidth += 20;
                });
                if (itemsWidth > $doc.outerWidth() && !$container.hasClass('kinetic-active')) {
                    attach();
                }
                if (itemsWidth < $doc.outerWidth() && $container.hasClass('kinetic-active')) {
                    detach();
                }
                $(window).resize(function() {
                    if (itemsWidth > $doc.outerWidth() && !$container.hasClass('kinetic-active')) {
                        attach();
                    }
                    if (itemsWidth < $doc.outerWidth() && $container.hasClass('kinetic-active')) {
                        detach();
                    }
                });
            }
        },
        'moreInfo': function($button) {
            $button.toggleClass('active');
            site.instances.gat.track_event('Case-Study', 'Click', 'Info');
            $(site.selectors.moreInfoContent).fadeToggle();
        },
        'toggleElm': function($button) {
            $button.toggleClass('active');
            $(site.selectors.toggleElmContent).slideToggle();
        },
        'parse': function($root) {
            var $elements;
            $root = $root || $doc;
            $root.find(site.selectors.forms).each(function() {
                var options, $this = $(this);
                options = {
                    'popup': {
                        'alignment': WS.Form.Alignments.top_right
                    },
                    'field': {
                        'popup': {
                            'alignment': WS.Form.Alignments.top_right
                        }
                    }
                };
                new WS.Form(this, options);
                $this.find("input.multiple").each(function() {
                    $(this).MultiFile();
                    $(this).wrap($("<div>", {
                        'class': 'input-wrap'
                    }));
                });
            });
            $root.find(site.selectors.carousels + ":not(.parsed)").each(function() {
                site.carousels.apply($(this).addClass("parsed"));
            });
            $root.find(site.selectors.sliders).each(function() {
                site.sliders.apply(this);
            });
            $root.find(site.selectors.entriesWrapper).each(function() {
                site.categoriser.apply(this);
            });
            $root.find(site.selectors.locationsList).each(function() {
                site.instances.locationslist = new WS.Locations(this, site);
            });
            $root.find(site.selectors.header_video_link).each(function() {
                new WS.HeaderVideo($(this), {}, site.instances.gat);
            });
            if ($root.is(site.selectors.list_campaigns)) {
                site.toggleCampaignsPlaceholder($root);
            } else if (($elements = $root.find(site.selectors.list_campaigns)).length) {
                $elements.each(function() {
                    site.toggleCampaignsPlaceholder($(this));
                });
            }
            site.parseHighResAssets();
            if (!site.tests.media.tiny) {
                $root.find(site.selectors.wordcycle).each(function() {
                    var $this = $(this),
                        words;
                    if ($this.hasClass("home")) {
                        words = ['Aspect', 'Brief', 'Angle', 'Idea', 'Vision', 'Location'];
                    }
                    new WS.WordCycle($this, {
                        'data': words
                    });
                });
            }
            $root.find(site.selectors.click_nodes).each(function() {
                site.clickNodes.parse.apply(this);
            });
            site.scrolltriggers.enable();
            if (!site.tests.media.tiny && $(site.selectors.google_maps).length) {
                $.getJSON('/includes/js/gmap_styles.json', function(styles) {
                    $root.find(site.selectors.google_maps).each(function() {
                        var map, $this = $(this),
                            lat = $this.data('lat'),
                            lng = $this.data('lng');
                        map = new WS.Gmap({
                            'canvas': $this,
                            'map': {
                                'noClear': true,
                                'center': new window.google.maps.LatLng(lat, lng),
                                'zoom': 9,
                                'disableDefaultUI': true,
                                'panControl': false,
                                'zoomControl': true,
                                'mapTypeControl': false,
                                'scaleControl': false,
                                'streetViewControl': false,
                                'overviewMapControl': false,
                                'styles': styles
                            }
                        });
                        map.add_marker(lat, lng, {
                            'icon': '/includes/img/ui-icon-map-marker.png'
                        });
                    });
                });
            }
            $root.find(site.selectors.sprite).each(function() {
                site.initSprites.apply(this);
            });
        },
        'parseHighResAssets': function() {
            if (site.tests.media.highres) {
                $(site.selectors.highResBg).each(function() {
                    var $this = $(this),
                        url, image, cache;
                    image = $this.css("backgroundImage");
                    image = image.match(/url\(("|')?([^"'\)]+)/);
                    if (image !== null && image[2] && (url = $this.data("high-res"))) {
                        cache = new Image();
                        cache.onload = function() {
                            $this.css({
                                'backgroundImage': 'url(' + url + ')',
                                'backgroundSize': cache.width + 'px ' + cache.height + 'px'
                            });
                        };
                        cache.src = image[2];
                        $this.removeAttr("data-high-res");
                    }
                });
            }
        },
        'redirectHandle': function(url, test, register) {
            var $this = $(register.element).closest(site.selectors.link);
            if (test.external) {
                if (!$this.hasClass(site.classes.video)) {
                    window.open($this[0].href);
                }
            } else {
                location.href = url;
            }
        },
        'registerMediaResponse': function(fn) {
            site.callbacks.media.push(fn);
        },
        'mediaResponse': function() {
            var a;
            if (site.callbacks && site.callbacks.media.length) {
                for (a = 0; a < site.callbacks.media.length; a += 1) {
                    site.callbacks.media[a].apply(site, arguments);
                }
            }
        },
        'scrolltriggers': {
            enable: function() {
                if (site.ui.$header.length) {
                    site.instances.scrolltrigger.addElement(site.ui.$header, this.trigger, WS.ScrollTrigger.types.TO_BOTTOM);
                }
                if (site.ui.$sticky_footer.length) {
                    site.instances.scrolltrigger.addElement(site.ui.$sticky_footer, this.trigger, WS.ScrollTrigger.types.FROM_BOTTOM);
                }
                if (site.ui.$homepage_intro_panel.length) {
                    site.instances.scrolltrigger.addElement(site.ui.$homepage_intro_panel, this.triggerFadeIn, WS.ScrollTrigger.types.FROM_TOP);
                }
            },
            trigger: function(trigger, triggered) {
                var id;
                if ((id = trigger.$element.attr("id"))) {
                    $doc[(triggered ? 'addClass' : 'removeClass')].apply($doc, [id + '-trigger-active']);
                }
            },
            triggerFadeIn: function(trigger) {
                trigger.$element.addClass('active');
            }
        },
        'sliders': function() {
            var $slider = $(this),
                options = {
                    'kinetic': (site.tests.touch)
                };
            if ($slider.hasClass("categories")) {
                options.canvas_class = "border-bottom";
            }
            new WS.Slider($slider, options);
        },
        'categoriser': function() {
            var $this = $(this),
                $filters = $(site.selectors.filters),
                $filteredEntries = $(site.selectors.filtered),
                paginator = new WS.Paginator($filteredEntries, {
                    'append': (!$filteredEntries.hasClass('manual')),
                    'automated': (!(site.tests.media.medium) && !site.tests.touch && !$filteredEntries.hasClass('manual')),
                    'callbacks': {
                        'paginate': function() {
                            site.parse($(this));
                            site.centerEntries();
                            if (site.instances.ratio) {
                                site.instances.ratio.parseItems();
                                site.instances.ratio.adjustItems();
                            }
                            if ($filteredEntries.hasClass('manual')) {
                                $(site.selectors.html).animate({
                                    scrollTop: $(site.selectors.filters).offset().top - 56
                                }, 750);
                            }
                        }
                    },
                    'pre_clear': true
                });
            new WS.Categoriser($this, $filters, {
                'callbacks': {
                    'updated': function() {
                        var categoriser = this,
                            a, categories, url, base_uri;
                        base_uri = $this.data("category-base");
                        base_uri = base_uri.replace(/\/$/, "");
                        categories = [];
                        $filters.each(function(index) {
                            var group_categories = categoriser.getCategories(index);
                            if (group_categories && group_categories.length) {
                                categories.push(group_categories);
                            }
                        });
                        if (categories.length) {
                            url = base_uri + "/category/";
                            for (a = 0; a < categories.length; a += 1) {
                                url += encodeURIComponent(categories[a].join("|") +
                                    (a < (categories.length - 1) ? "~" : ""));
                            }
                        } else {
                            url = base_uri;
                        }
                        paginator.request(url, function() {
                            site.parse($this);
                            if (site.instances.ratio) {
                                site.instances.ratio.parseItems();
                                site.instances.ratio.adjustItems();
                            }
                            site.centerEntries();
                        }, false);
                    }
                }
            });
        },
        'clickNodes': {
            'click': function($node, event) {
                var data = {};
                if ((data.$link = $node.find(site.selectors.link)) && event.target !== data.$link[0]) {
                    data.$link[0].click();
                }
            },
            'parse': function() {
                var $node = $(this);
                $node.removeClass('click');
                $node.addClass('clickable');
            }
        },
        'expander': function() {
            var exp = new WS.Expander(this, {
                'callbacks': {
                    'load': function($expander) {
                        site.parse($expander);
                        site.centerEntries();
                    }
                }
            }, site.instances.gat);
            site.registerMediaResponse(function() {
                if (site.tests.media.tiny) {
                    exp.disable();
                } else {
                    exp.enable();
                }
            });
        },
        'share': function($btn) {
            var network, url, opt;
            if (!site.instances.sharer) {
                site.instances.sharer = new WS.ShareController();
                site.instances.sharer.set("facebook", "app_id", "1621914241425297");
                site.share($btn);
            } else {
                if ($btn && $btn.length && (network = $btn.data("network"))) {
                    opt = {
                        'text': window.document.title
                    };
                    url = $btn.attr("href") || window.location.href;
                    site.instances.sharer.share(network, url, opt);
                    if (site.instances.gat) {
                        site.instances.gat.track_event("Social-Share", network, url);
                    }
                }
            }
        },
        'carousels': function() {
            var $carousel = this,
                carousel, $videoLinks = $(site.selectors.carouselVideoLinks),
                split_nav = ($carousel.hasClass("split-nav")),
                videos = [],
                options, videoOptions;
            options = {
                'animation': {
                    'automated': false,
                    'delay': 5,
                    'duration': 0.45,
                    'type': window.WS.Carousel.Animations.fade
                },
                'callbacks': {
                    'pre_advance': function() {
                        var i;
                        for (i = 0; i < videos.length; i += 1) {
                            videos[i].pause();
                        }
                        return true;
                    },
                    'post_advance': function() {
                        if ($(site.selectors.carouselSlideNumber).length) {
                            $(site.selectors.carouselSlideNumber).text(this.getIndex() + 1);
                        }
                        site.instances.gat.track_event('Case-Study', 'Click', 'Next');
                        return true;
                    }
                },
                'navigation': true,
                'pagination': false
            };
            videoOptions = {
                'auto_embed': true,
                'width': '100%',
                'height': '100%',
                'auto_size': {
                    'height': false
                },
                'callbacks': {
                    'play': function() {
                        if (site.instances.gat) {
                            site.instances.gat.track_event('Video', 'Start', $(site.selectors.carouselDetails).text());
                        }
                    },
                    'pause': function() {
                        if (site.instances.gat) {
                            site.instances.gat.track_event('Video', 'Pause', $(site.selectors.carouselDetails).text());
                        }
                    },
                    'complete': function() {
                        if (site.instances.gat) {
                            site.instances.gat.track_event('Video', 'End', $(site.selectors.carouselDetails).text());
                        }
                    }
                }
            };
            if (split_nav) {
                options.navigation = false;
            }
            site.instances.carousels.push(new WS.Carousel($carousel, options));
            carousel = site.instances.carousels[site.instances.carousels.length - 1];
            if (split_nav && carousel.items.length > 1) {
                $carousel.after($("<a>", {
                    'href': '#',
                    'class': 'navigation split-nav nav-prev'
                }).html("<span><b>Previous</b></span>"), $("<a>", {
                    'href': '#',
                    'class': 'navigation split-nav nav-next'
                }).html("<span><b>Next</b></span>"));
                $carousel.closest(".carousel-container").addClass("split-nav");
            }
            $videoLinks.each(function() {
                var video, $link = $(this),
                    $container = $link.closest('li').find('.video-container'),
                    $image = $container.find('.image');
                $link.bind('click', function(e) {
                    $link.css('display', 'none');
                    $image.fadeOut(750, function() {
                        video = new WS.Video($image, $link.attr('href'), videoOptions, function() {
                            video.play();
                            videos.push(video);
                            $container.fadeIn(950);
                        });
                    });
                    e.preventDefault();
                });
            });
        },
        'ajaxReveal': {
            'init': function() {
                var hash = window.location.hash.replace(/^#/, "");
                $doc.on('click', site.selectors.ajaxContentLink, site.eventRegister('ajaxReveal'));
                if (hash && hash.charAt(0) === "/") {
                    this.reveal.call(this, hash);
                }
            },
            'reveal': function(ref) {
                var href = ref || "",
                    $target = $(site.selectors.ajaxTarget),
                    $ctas = $(site.selectors.ajaxContent),
                    ajax_base = "",
                    $container, $link, $cta, base_re;
                if (this !== site.ajaxReveal) {
                    $link = this;
                    $cta = $link.closest('.entry');
                }
                if (!href || ($link && $link.length)) {
                    href = $link.data('url');
                    $ctas.removeClass(site.classes.active);
                    $cta.addClass(site.classes.active);
                } else {
                    $ctas.each(function() {
                        var $links;
                        $cta = $(this);
                        $links = $links = $cta.find(site.selectors.link);
                        if (($links).length && $links.eq(0).is("[href$='" + href + "']")) {
                            $cta.addClass(site.classes.active);
                            return false;
                        }
                    });
                }
                if ($cta && $cta.length && ($container = $cta.closest(site.selectors.ajaxContentContainer)).length) {
                    if ((ajax_base = $container.data("ajax-base"))) {
                        base_re = new RegExp(ajax_base.replace(/\//g, "\/"));
                    } else {
                        ajax_base = "";
                    }
                }
                if (this === site.ajaxReveal) {
                    href = ajax_base + href;
                }
                if (href) {
                    $.ajax(href).then(function(data) {
                        $target.html(data);
                        if (base_re) {
                            href = href.replace(base_re, "");
                            if (href.charAt(0) !== "/") {
                                href = "/" + href;
                            }
                        }
                        location.hash = href;
                        site.parse($target);
                        if (!$target.hasClass('open')) {
                            $target.addClass('open');
                            $(site.selectors.header).addClass('open');
                        }
                        $(site.selectors.html).animate({
                            scrollTop: $target.offset().top - $(site.selectors.menu_sticky).height()
                        });
                    });
                }
            }
        },
        'ratioRetainer': function() {
            var init = function() {
                if (site.tests.media.large) {
                    if (!site.instances.ratio) {
                        site.instances.ratio = WS.RatioRetainer({
                            'items': [{
                                'selector': '#header.small',
                                'ratio': 3.2
                            }, {
                                'selector': '#header.large',
                                'ratio': 1.82
                            }, {
                                'selector': '.panel.short:not(.no-image)',
                                'ratio': 3.2
                            }, {
                                'selector': '.panel.tall:not(.no-image)',
                                'ratio': 1.82
                            }, {
                                'selector': '.panel.half:not(.no-image)',
                                'ratio': 1.58
                            }, {
                                'selector': '.panel.full:not(.no-image)',
                                'ratio': 3.23
                            }]
                        });
                    }
                    site.instances.ratio.activate();
                } else {
                    if (site.instances.ratio) {
                        site.instances.ratio.deactivate();
                    }
                }
            };
            site.registerMediaResponse(init);
            init();
        },
        'toggleCampaignsPlaceholder': function($root) {
            var $placeholder, $items;
            $placeholder = $root.find(".placeholder");
            if (site.tests.media.small) {
                $placeholder.addClass(site.classes.hidden);
            } else {
                if (($items = $root.find(".panel:not(.placeholder)")).length) {
                    $items.last().after($placeholder);
                    $items = $items.slice($items.length - 2, $items.length).filter(".half");
                    if ($items.length === 1) {
                        $placeholder.removeClass(site.classes.hidden);
                    } else {
                        $placeholder.addClass(site.classes.hidden);
                    }
                }
            }
        },
        'centerEntries': function() {
            var screenWidth, entryWidth, entriesPerRow, margin_horizontal, $entries = $(site.selectors.entries);
            if ($entries.length) {
                screenWidth = $(site.selectors.filtered).outerWidth(true);
                entryWidth = $entries.outerWidth(true);
                entriesPerRow = Math.floor(screenWidth / entryWidth);
                if (entriesPerRow > $entries.length) {
                    entriesPerRow = $entries.length;
                }
                margin_horizontal = Math.floor((screenWidth - (entryWidth * entriesPerRow)) / 2);
                $(site.selectors.expand).css('margin-left', -margin_horizontal + 'px');
                $(site.selectors.expand).css('margin-right', -margin_horizontal + 'px');
                $(site.selectors.filtered).css('margin-left', margin_horizontal + 'px');
                $(site.selectors.filtered).css('margin-right', margin_horizontal + 'px');
            }
        },
        'initSprites': function() {
            var $this = $(this),
                fn_media_response, opt;
            fn_media_response = function() {
                $(site.selectors.sprite).each(function() {
                    var $this = $(this),
                        alternate, $alternate;
                    alternate = $this.data("sprite-sibling-alt");
                    $alternate = $this.siblings(alternate);
                    if (site.tests.media.medium) {
                        $this.addClass(site.classes.hidden).spriteAnimator("stop");
                        $alternate.removeClass(site.classes.hidden);
                    } else {
                        $this.removeClass(site.classes.hidden);
                        if ($this.spriteAnimator("hasPlayed")) {
                            $this.spriteAnimator("start");
                        }
                        $alternate.addClass(site.classes.hidden);
                    }
                });
            };
            opt = {
                'callbacks': {
                    'onLoaded': function() {
                        site.instances.scrolltrigger.addElement($this, function(trigger) {
                            if (!$this.spriteAnimator("hasPlayed")) {
                                trigger.$element.spriteAnimator("start");
                            }
                        });
                        fn_media_response();
                    }
                },
                'fps': 120,
                'loop': false,
                'frame': {
                    'width': 110,
                    'height': 80,
                    'src': '/includes/img/ui-logo-sprite-small.png'
                }
            };
            site.instances.sprites = $this.spriteAnimator(opt);
            site.registerMediaResponse(fn_media_response);
        }
    };
    site.enable();
}(window.jQuery, window.jQuery(document.body), window.WS));