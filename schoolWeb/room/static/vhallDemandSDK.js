/*!
 *  @copyright (c) 2017
 *  @author: wenfeng.lei
 *  @update: Mon Nov 27 2017 17:29:02 GMT+0800 (中国标准时间)
 */
!function (e) {
  function t(r) {
    if (n[r]) return n[r].exports;
    var o = n[r] = {i: r, l: !1, exports: {}};
    return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
  }

  var n = {};
  t.m = e, t.c = n, t.d = function (e, n, r) {
    t.o(e, n) || Object.defineProperty(e, n, {configurable: !1, enumerable: !0, get: r})
  }, t.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e.default
    } : function () {
      return e
    };
    return t.d(n, "a", n), n
  }, t.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, t.p = "/", t(t.s = 4)
}([function (e, t, n) {
  "use strict";

  function r(e) {
    i = new OSS.Wrapper({
      region: "oss-cn-beijing",
      accessKeyId: e.stsArr.AccessKeyId,
      accessKeySecret: e.stsArr.AccessKeySecret,
      stsToken: e.stsArr.SecurityToken,
      bucket: e.oss_bucket,
      secure: !0
    })
  }

  function o() {
    return i
  }

  Object.defineProperty(t, "__esModule", {value: !0});
  var i = void 0;
  t.getClient = o, t.setClinet = r
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {value: !0});
  var r = {
    BROWSER_NOT_SUPPORT: {code: "10000", msg: "当前浏览器不支持断点上传"},
    DOM_ERROR: {code: "10001", msg: '请传入类似于"#id"选择器'},
    OPTIONS_ERROR: {code: "10002", msg: "options参数应该为对象类型"},
    NOT_INPUT_FILE: {code: "10003", msg: "当前传入的dom不是input file"},
    FILE_EXT_ERROR: {code: "10004", msg: "不支持该文件格式"},
    FILE_SIZE_ERROR: {code: "10005", msg: "上传文件大于10GB"},
    STS_AUTH_ERROR: {code: "10006", msg: "获取上传临时授权失败"},
    AUTH_ERROR: {code: "10007", msg: "当前账号无上传权限"}
  };
  t.default = r
}, function (e, t, n) {
  "use strict";

  function r(e) {
    function t(e, t) {
      void 0 !== f && (h = setTimeout(function () {
        "jsonp" === s ? (delete window[e], document.body.removeChild(t)) : (p = !0, y && y.abort()), console.log("timeout")
      }, f))
    }

    var n = e.url || "", r = (e.type || "get").toLowerCase(), i = e.data || null, u = e.contentType || "",
      s = e.dataType || "", a = void 0 === e.async || e.async, f = e.timeOut, c = e.before || function () {
      }, l = e.error || function () {
      }, d = e.success || function () {
      }, p = !1, h = null, y = null;
    !function () {
      function e(t, n) {
        function r(t, n, r) {
          var i = [];
          return t = void 0 === r ? t : r + "[" + t + "]", "object" === (void 0 === n ? "undefined" : o(n)) && null !== n ? i = i.concat(e(n, t)) : (t = encodeURIComponent(t), n = encodeURIComponent(n), i.push(t + "=" + n)), i
        }

        var i, u = [];
        if ("[object Array]" == Object.prototype.toString.call(t)) for (var s = 0, a = t.length; s < a; s++) i = t[s], u = u.concat(r("object" == (void 0 === i ? "undefined" : o(i)) ? s : "", i, n)); else if ("[object Object]" == Object.prototype.toString.call(t)) for (var f in t) i = t[f], u = u.concat(r(f, i, n));
        return u
      }

      i && ("string" == typeof i ? i = function (e) {
        for (var t = e.split("&"), n = 0, r = t.length; n < r; n++) name = encodeURIComponent(t[n].split("=")[0]), value = encodeURIComponent(t[n].split("=")[1]), t[n] = name + "=" + value;
        return t
      }(i) : "object" === (void 0 === i ? "undefined" : o(i)) && (i = e(i)), i = i.join("&").replace("/%20/g", "+"), "get" !== r && "jsonp" !== s || (n += n.indexOf("?") > -1 ? n.indexOf("=") > -1 ? "&" + i : i : "?" + i))
    }(), c(), "jsonp" === s ? function () {
      var e = document.createElement("script"), r = (new Date).getTime() + Math.round(1e3 * Math.random()),
        o = "JSONP_" + r;
      window[o] = function (t) {
        clearTimeout(h), document.body.removeChild(e), d(t)
      }, e.src = n + (n.indexOf("?") > -1 ? "&" : "?") + "callback=" + o, e.type = "text/javascript", document.body.appendChild(e), t(o, e)
    }() : function () {
      y = function () {
        if (window.XMLHttpRequest) return new XMLHttpRequest;
        for (var e = ["Microsoft", "msxm3", "msxml2", "msxml1"], t = 0; t < e.length; t++) try {
          var n = e[t] + ".XMLHTTP";
          return new ActiveXObject(n)
        } catch (e) {
        }
      }(), y.open(r, n, a), "post" !== r || u ? u && y.setRequestHeader("Content-Type", u) : y.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8"), y.onreadystatechange = function () {
        if (4 === y.readyState) {
          if (void 0 !== f) {
            if (p) return;
            clearTimeout(h)
          }
          y.status >= 200 && y.status < 300 || 304 == y.status ? d(y.responseText) : l(y.status, y.statusText)
        }
      }, y.send("get" === r ? null : i), t()
    }()
  }

  Object.defineProperty(t, "__esModule", {value: !0});
  var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  };
  t.default = r
}, function (e, t, n) {
  "use strict";

  function r(e) {
    o = Object.assign(o, {sign: e.sign, signed_at: e.signed_at, app_key: e.app_key})
  }

  Object.defineProperty(t, "__esModule", {value: !0});
  var o = {sign: "", signed_at: "", app_key: "", auth_type: 2};
  t.default = o, t.set = r
}, function (e, t, n) {
  e.exports = n(5)
}, function (e, t, n) {
  "use strict";

  function r(e) {
    return e && e.__esModule ? e : {default: e}
  }

  function o(e, t) {
    if ((0, m.set)(t.params), !s.default) return t && t.error && t.error(y.default.BROWSER_NOT_SUPPORT.msg);
    if ("string" != typeof e || !e.startsWith("#")) return t && t.error && t.error(y.default.DOM_ERROR.msg);
    var n = document.getElementById(e.substr(1, e.length - 1));
    return "INPUT" != n.tagName && "file" != n.type ? t && t.error && t.error(y.default.NOT_INPUT_FILE.msg) : "object" !== (void 0 === t ? "undefined" : i(t)) ? t && t.error && t.error(y.default.OPTIONS_ERROR.msg) : void(b ? g[e] || (g[e] = new f.default(e, t)) : (0, p.default)({
      url: "//e.vhall.com/api/vhallapi/v2/record/upload-auth-key",
      type: "GET",
      dataType: "jsonp",
      data: _.default,
      success: function (n) {
        200 == n.code ? (0, l.default)("//gosspublic.alicdn.com/aliyun-oss-sdk-4.4.4.min.js", function () {
          t && t.ready && t.ready(), g[e] = new f.default(e, t), (0, v.setClinet)({
            stsArr: n.data.stsArr,
            oss_bucket: n.data.oss_bucket
          })
        }) : t && t.error && t.error(y.default.AUTH_ERROR.msg)
      },
      error: function () {
        t && t.error && t.error(y.default.AUTH_ERROR.msg)
      }
    }))
  }

  var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, u = n(6), s = r(u), a = n(7), f = r(a), c = n(14), l = r(c), d = n(2), p = r(d), h = n(1), y = r(h), m = n(3),
    _ = r(m), v = n(0), g = {}, b = !1;
  console.log(_.default), window.vhallDemandSDK = o
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {value: !0});
  var r = !1;
  FileReader && window.FileReader && "function" == typeof(new FileReader).readAsBinaryString && (r = !0), t.default = r
}, function (e, t, n) {
  "use strict";

  function r(e) {
    return e && e.__esModule ? e : {default: e}
  }

  function o(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }

  Object.defineProperty(t, "__esModule", {value: !0});
  var i = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }

      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }(), u = n(1), s = r(u), a = n(8), f = r(a), c = n(9), l = r(c), d = n(10), p = r(d), h = n(12), y = r(h), m = n(0),
    _ = n(2), v = r(_), g = n(3), b = r(g), S = function () {
      function e(t, n) {
        o(this, e), this.$dom = document.getElementById(t.substr(1, t.length - 1)), this.options = n, this._init(t, n)
      }

      return i(e, [{
        key: "_init", value: function () {
          return this._eventsInit(), this
        }
      }, {
        key: "_eventsInit", value: function () {
          var e = this;
          (0, f.default)(this.$dom, "change", function () {
            var t = e.beforeUpload(), n = this;
            if ("boolean" != typeof t || t) {
              var r = this.files[0], o = r.name.slice(r.name.lastIndexOf(".")),
                i = "/.(?:" + l.default.fomart.join("|") + ")$/i", u = r.size > 10737418240;
              if (-1 == i.search(o.toLowerCase())) return e.error(s.default.FILE_EXT_ERROR.msg, r, this);
              if (u) return e.error(s.default.FILE_SIZE_ERROR.msg, r, this);
              var a = (0, m.getClient)();
              (0, p.default)(r, function (t) {
                var i = "demand/" + t + o;
                a.list({prefix: "demand/" + t}).then(function (u) {
                  if (u.objects) {
                    var s = !1;
                    u.objects.forEach(function (e, n, r) {
                      -1 != e.name.search(t + o) && (s = !0)
                    }), s ? (e.progress("100%", r), e.uploadSuccess(r, i)) : (0, y.default)(t, r, i, e, n)
                  } else (0, y.default)(t, r, i, e, n)
                })
              })
            }
          })
        }
      }, {
        key: "beforeUpload", value: function (e, t) {
          return this.options.beforeUpload && this.options.beforeUpload(e, t)
        }
      }, {
        key: "_progressBar", value: function (e, t, n) {
          1 == e ? (this.progress("100%", t), this.uploadSuccess(t, n)) : this.progress((100 * e).toFixed(2) + "%", t)
        }
      }, {
        key: "progress", value: function (e, t) {
          this.options.progress && this.options.progress(e, t)
        }
      }, {
        key: "uploadSuccess", value: function (e, t) {
          var n = /^.*\./.exec(e.name);
          n = n[0].slice(0, -1);
          var r = this, o = r.options.params.sdkChildID || "",
            i = Object.assign({jssdk_url: t, jssdk_name: n, jssdk_subject: n, sdk_child_id: o}, b.default);
          (0, v.default)({
            url: "//e.vhall.com/api/vhallapi/v2/record/create-demand",
            data: i,
            type: "GET",
            dataType: "jsonp",
            success: function (t) {
              200 == t.code && r.options.uploadSuccess && r.options.uploadSuccess(t.data, e)
            },
            error: function (t) {
              r.error(t.msg, e)
            }
          })
        }
      }, {
        key: "error", value: function (e, t, n) {
          this.options.error && this.options.error(e, t, n)
        }
      }]), e
    }();
  t.default = S
}, function (e, t, n) {
  "use strict";

  function r(e, t, n) {
    e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent("on" + t, n)
  }

  Object.defineProperty(t, "__esModule", {value: !0}), t.default = r
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {value: !0});
  var r = {fomart: ["rmvb", "mp4", "avi", "wmv", "mkv", "flv", "mp3", "wav", "mov"]};
  t.default = r
}, function (e, t, n) {
  "use strict";

  function r(e, t) {
    function n() {
      var t = a * u, n = t + u >= e.size ? e.size : t + u;
      r.readAsBinaryString(o.call(e, t, n))
    }

    var r = new FileReader, o = File.prototype.mozSlice || File.prototype.webkitSlice || File.prototype.slice,
      u = 2097152, s = Math.ceil(e.size / u), a = 0, f = new i.default;
    r.onload = function (r) {
      f.appendBinary(r.target.result);
      var o = Math.floor(s / 50);
      if (o = o || 1, (a += o) < s) n(); else {
        var i = f.end();
        t(i, e)
      }
    }, n()
  }

  Object.defineProperty(t, "__esModule", {value: !0});
  var o = n(11), i = function (e) {
    return e && e.__esModule ? e : {default: e}
  }(o);
  t.default = r
}, function (e, t, n) {
  !function (t) {
    e.exports = t()
  }(function (e) {
    "use strict";

    function t(e, t) {
      var n = e[0], r = e[1], o = e[2], i = e[3];
      n += (r & o | ~r & i) + t[0] - 680876936 | 0, n = (n << 7 | n >>> 25) + r | 0, i += (n & r | ~n & o) + t[1] - 389564586 | 0, i = (i << 12 | i >>> 20) + n | 0, o += (i & n | ~i & r) + t[2] + 606105819 | 0, o = (o << 17 | o >>> 15) + i | 0, r += (o & i | ~o & n) + t[3] - 1044525330 | 0, r = (r << 22 | r >>> 10) + o | 0, n += (r & o | ~r & i) + t[4] - 176418897 | 0, n = (n << 7 | n >>> 25) + r | 0, i += (n & r | ~n & o) + t[5] + 1200080426 | 0, i = (i << 12 | i >>> 20) + n | 0, o += (i & n | ~i & r) + t[6] - 1473231341 | 0, o = (o << 17 | o >>> 15) + i | 0, r += (o & i | ~o & n) + t[7] - 45705983 | 0, r = (r << 22 | r >>> 10) + o | 0, n += (r & o | ~r & i) + t[8] + 1770035416 | 0, n = (n << 7 | n >>> 25) + r | 0, i += (n & r | ~n & o) + t[9] - 1958414417 | 0, i = (i << 12 | i >>> 20) + n | 0, o += (i & n | ~i & r) + t[10] - 42063 | 0, o = (o << 17 | o >>> 15) + i | 0, r += (o & i | ~o & n) + t[11] - 1990404162 | 0, r = (r << 22 | r >>> 10) + o | 0, n += (r & o | ~r & i) + t[12] + 1804603682 | 0, n = (n << 7 | n >>> 25) + r | 0, i += (n & r | ~n & o) + t[13] - 40341101 | 0, i = (i << 12 | i >>> 20) + n | 0, o += (i & n | ~i & r) + t[14] - 1502002290 | 0, o = (o << 17 | o >>> 15) + i | 0, r += (o & i | ~o & n) + t[15] + 1236535329 | 0, r = (r << 22 | r >>> 10) + o | 0, n += (r & i | o & ~i) + t[1] - 165796510 | 0, n = (n << 5 | n >>> 27) + r | 0, i += (n & o | r & ~o) + t[6] - 1069501632 | 0, i = (i << 9 | i >>> 23) + n | 0, o += (i & r | n & ~r) + t[11] + 643717713 | 0, o = (o << 14 | o >>> 18) + i | 0, r += (o & n | i & ~n) + t[0] - 373897302 | 0, r = (r << 20 | r >>> 12) + o | 0, n += (r & i | o & ~i) + t[5] - 701558691 | 0, n = (n << 5 | n >>> 27) + r | 0, i += (n & o | r & ~o) + t[10] + 38016083 | 0, i = (i << 9 | i >>> 23) + n | 0, o += (i & r | n & ~r) + t[15] - 660478335 | 0, o = (o << 14 | o >>> 18) + i | 0, r += (o & n | i & ~n) + t[4] - 405537848 | 0, r = (r << 20 | r >>> 12) + o | 0, n += (r & i | o & ~i) + t[9] + 568446438 | 0, n = (n << 5 | n >>> 27) + r | 0, i += (n & o | r & ~o) + t[14] - 1019803690 | 0, i = (i << 9 | i >>> 23) + n | 0, o += (i & r | n & ~r) + t[3] - 187363961 | 0, o = (o << 14 | o >>> 18) + i | 0, r += (o & n | i & ~n) + t[8] + 1163531501 | 0, r = (r << 20 | r >>> 12) + o | 0, n += (r & i | o & ~i) + t[13] - 1444681467 | 0, n = (n << 5 | n >>> 27) + r | 0, i += (n & o | r & ~o) + t[2] - 51403784 | 0, i = (i << 9 | i >>> 23) + n | 0, o += (i & r | n & ~r) + t[7] + 1735328473 | 0, o = (o << 14 | o >>> 18) + i | 0, r += (o & n | i & ~n) + t[12] - 1926607734 | 0, r = (r << 20 | r >>> 12) + o | 0, n += (r ^ o ^ i) + t[5] - 378558 | 0, n = (n << 4 | n >>> 28) + r | 0, i += (n ^ r ^ o) + t[8] - 2022574463 | 0, i = (i << 11 | i >>> 21) + n | 0, o += (i ^ n ^ r) + t[11] + 1839030562 | 0, o = (o << 16 | o >>> 16) + i | 0, r += (o ^ i ^ n) + t[14] - 35309556 | 0, r = (r << 23 | r >>> 9) + o | 0, n += (r ^ o ^ i) + t[1] - 1530992060 | 0, n = (n << 4 | n >>> 28) + r | 0, i += (n ^ r ^ o) + t[4] + 1272893353 | 0, i = (i << 11 | i >>> 21) + n | 0, o += (i ^ n ^ r) + t[7] - 155497632 | 0, o = (o << 16 | o >>> 16) + i | 0, r += (o ^ i ^ n) + t[10] - 1094730640 | 0, r = (r << 23 | r >>> 9) + o | 0, n += (r ^ o ^ i) + t[13] + 681279174 | 0, n = (n << 4 | n >>> 28) + r | 0, i += (n ^ r ^ o) + t[0] - 358537222 | 0, i = (i << 11 | i >>> 21) + n | 0, o += (i ^ n ^ r) + t[3] - 722521979 | 0, o = (o << 16 | o >>> 16) + i | 0, r += (o ^ i ^ n) + t[6] + 76029189 | 0, r = (r << 23 | r >>> 9) + o | 0, n += (r ^ o ^ i) + t[9] - 640364487 | 0, n = (n << 4 | n >>> 28) + r | 0, i += (n ^ r ^ o) + t[12] - 421815835 | 0, i = (i << 11 | i >>> 21) + n | 0, o += (i ^ n ^ r) + t[15] + 530742520 | 0, o = (o << 16 | o >>> 16) + i | 0, r += (o ^ i ^ n) + t[2] - 995338651 | 0, r = (r << 23 | r >>> 9) + o | 0, n += (o ^ (r | ~i)) + t[0] - 198630844 | 0, n = (n << 6 | n >>> 26) + r | 0, i += (r ^ (n | ~o)) + t[7] + 1126891415 | 0, i = (i << 10 | i >>> 22) + n | 0, o += (n ^ (i | ~r)) + t[14] - 1416354905 | 0,o = (o << 15 | o >>> 17) + i | 0,r += (i ^ (o | ~n)) + t[5] - 57434055 | 0,r = (r << 21 | r >>> 11) + o | 0,n += (o ^ (r | ~i)) + t[12] + 1700485571 | 0,n = (n << 6 | n >>> 26) + r | 0,i += (r ^ (n | ~o)) + t[3] - 1894986606 | 0,i = (i << 10 | i >>> 22) + n | 0,o += (n ^ (i | ~r)) + t[10] - 1051523 | 0,o = (o << 15 | o >>> 17) + i | 0,r += (i ^ (o | ~n)) + t[1] - 2054922799 | 0,r = (r << 21 | r >>> 11) + o | 0,n += (o ^ (r | ~i)) + t[8] + 1873313359 | 0,n = (n << 6 | n >>> 26) + r | 0,i += (r ^ (n | ~o)) + t[15] - 30611744 | 0,i = (i << 10 | i >>> 22) + n | 0,o += (n ^ (i | ~r)) + t[6] - 1560198380 | 0,o = (o << 15 | o >>> 17) + i | 0,r += (i ^ (o | ~n)) + t[13] + 1309151649 | 0,r = (r << 21 | r >>> 11) + o | 0,n += (o ^ (r | ~i)) + t[4] - 145523070 | 0,n = (n << 6 | n >>> 26) + r | 0,i += (r ^ (n | ~o)) + t[11] - 1120210379 | 0,i = (i << 10 | i >>> 22) + n | 0,o += (n ^ (i | ~r)) + t[2] + 718787259 | 0,o = (o << 15 | o >>> 17) + i | 0,r += (i ^ (o | ~n)) + t[9] - 343485551 | 0,r = (r << 21 | r >>> 11) + o | 0,e[0] = n + e[0] | 0,e[1] = r + e[1] | 0,e[2] = o + e[2] | 0,e[3] = i + e[3] | 0
    }

    function n(e) {
      var t, n = [];
      for (t = 0; t < 64; t += 4) n[t >> 2] = e.charCodeAt(t) + (e.charCodeAt(t + 1) << 8) + (e.charCodeAt(t + 2) << 16) + (e.charCodeAt(t + 3) << 24);
      return n
    }

    function r(e) {
      var t, n = [];
      for (t = 0; t < 64; t += 4) n[t >> 2] = e[t] + (e[t + 1] << 8) + (e[t + 2] << 16) + (e[t + 3] << 24);
      return n
    }

    function o(e) {
      var r, o, i, u, s, a, f = e.length, c = [1732584193, -271733879, -1732584194, 271733878];
      for (r = 64; r <= f; r += 64) t(c, n(e.substring(r - 64, r)));
      for (e = e.substring(r - 64), o = e.length, i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], r = 0; r < o; r += 1) i[r >> 2] |= e.charCodeAt(r) << (r % 4 << 3);
      if (i[r >> 2] |= 128 << (r % 4 << 3), r > 55) for (t(c, i), r = 0; r < 16; r += 1) i[r] = 0;
      return u = 8 * f, u = u.toString(16).match(/(.*?)(.{0,8})$/), s = parseInt(u[2], 16), a = parseInt(u[1], 16) || 0, i[14] = s, i[15] = a, t(c, i), c
    }

    function i(e) {
      var n, o, i, u, s, a, f = e.length, c = [1732584193, -271733879, -1732584194, 271733878];
      for (n = 64; n <= f; n += 64) t(c, r(e.subarray(n - 64, n)));
      for (e = n - 64 < f ? e.subarray(n - 64) : new Uint8Array(0), o = e.length, i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], n = 0; n < o; n += 1) i[n >> 2] |= e[n] << (n % 4 << 3);
      if (i[n >> 2] |= 128 << (n % 4 << 3), n > 55) for (t(c, i), n = 0; n < 16; n += 1) i[n] = 0;
      return u = 8 * f, u = u.toString(16).match(/(.*?)(.{0,8})$/), s = parseInt(u[2], 16), a = parseInt(u[1], 16) || 0, i[14] = s, i[15] = a, t(c, i), c
    }

    function u(e) {
      var t, n = "";
      for (t = 0; t < 4; t += 1) n += h[e >> 8 * t + 4 & 15] + h[e >> 8 * t & 15];
      return n
    }

    function s(e) {
      var t;
      for (t = 0; t < e.length; t += 1) e[t] = u(e[t]);
      return e.join("")
    }

    function a(e) {
      return /[\u0080-\uFFFF]/.test(e) && (e = unescape(encodeURIComponent(e))), e
    }

    function f(e, t) {
      var n, r = e.length, o = new ArrayBuffer(r), i = new Uint8Array(o);
      for (n = 0; n < r; n += 1) i[n] = e.charCodeAt(n);
      return t ? i : o
    }

    function c(e) {
      return String.fromCharCode.apply(null, new Uint8Array(e))
    }

    function l(e, t, n) {
      var r = new Uint8Array(e.byteLength + t.byteLength);
      return r.set(new Uint8Array(e)), r.set(new Uint8Array(t), e.byteLength), n ? r : r.buffer
    }

    function d(e) {
      var t, n = [], r = e.length;
      for (t = 0; t < r - 1; t += 2) n.push(parseInt(e.substr(t, 2), 16));
      return String.fromCharCode.apply(String, n)
    }

    function p() {
      this.reset()
    }

    var h = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    return "5d41402abc4b2a76b9719d911017c592" !== s(o("hello")) && function (e, t) {
      var n = (65535 & e) + (65535 & t);
      return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
    }, "undefined" == typeof ArrayBuffer || ArrayBuffer.prototype.slice || function () {
      function t(e, t) {
        return e = 0 | e || 0, e < 0 ? Math.max(e + t, 0) : Math.min(e, t)
      }

      ArrayBuffer.prototype.slice = function (n, r) {
        var o, i, u, s, a = this.byteLength, f = t(n, a), c = a;
        return r !== e && (c = t(r, a)), f > c ? new ArrayBuffer(0) : (o = c - f, i = new ArrayBuffer(o), u = new Uint8Array(i), s = new Uint8Array(this, f, o), u.set(s), i)
      }
    }(), p.prototype.append = function (e) {
      return this.appendBinary(a(e)), this
    }, p.prototype.appendBinary = function (e) {
      this._buff += e, this._length += e.length;
      var r, o = this._buff.length;
      for (r = 64; r <= o; r += 64) t(this._hash, n(this._buff.substring(r - 64, r)));
      return this._buff = this._buff.substring(r - 64), this
    }, p.prototype.end = function (e) {
      var t, n, r = this._buff, o = r.length, i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      for (t = 0; t < o; t += 1) i[t >> 2] |= r.charCodeAt(t) << (t % 4 << 3);
      return this._finish(i, o), n = s(this._hash), e && (n = d(n)), this.reset(), n
    }, p.prototype.reset = function () {
      return this._buff = "", this._length = 0, this._hash = [1732584193, -271733879, -1732584194, 271733878], this
    }, p.prototype.getState = function () {
      return {buff: this._buff, length: this._length, hash: this._hash}
    }, p.prototype.setState = function (e) {
      return this._buff = e.buff, this._length = e.length, this._hash = e.hash, this
    }, p.prototype.destroy = function () {
      delete this._hash, delete this._buff, delete this._length
    }, p.prototype._finish = function (e, n) {
      var r, o, i, u = n;
      if (e[u >> 2] |= 128 << (u % 4 << 3), u > 55) for (t(this._hash, e), u = 0; u < 16; u += 1) e[u] = 0;
      r = 8 * this._length, r = r.toString(16).match(/(.*?)(.{0,8})$/), o = parseInt(r[2], 16), i = parseInt(r[1], 16) || 0, e[14] = o, e[15] = i, t(this._hash, e)
    }, p.hash = function (e, t) {
      return p.hashBinary(a(e), t)
    }, p.hashBinary = function (e, t) {
      var n = o(e), r = s(n);
      return t ? d(r) : r
    }, p.ArrayBuffer = function () {
      this.reset()
    }, p.ArrayBuffer.prototype.append = function (e) {
      var n, o = l(this._buff.buffer, e, !0), i = o.length;
      for (this._length += e.byteLength, n = 64; n <= i; n += 64) t(this._hash, r(o.subarray(n - 64, n)));
      return this._buff = n - 64 < i ? new Uint8Array(o.buffer.slice(n - 64)) : new Uint8Array(0), this
    }, p.ArrayBuffer.prototype.end = function (e) {
      var t, n, r = this._buff, o = r.length, i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      for (t = 0; t < o; t += 1) i[t >> 2] |= r[t] << (t % 4 << 3);
      return this._finish(i, o), n = s(this._hash), e && (n = d(n)), this.reset(), n
    }, p.ArrayBuffer.prototype.reset = function () {
      return this._buff = new Uint8Array(0), this._length = 0, this._hash = [1732584193, -271733879, -1732584194, 271733878], this
    }, p.ArrayBuffer.prototype.getState = function () {
      var e = p.prototype.getState.call(this);
      return e.buff = c(e.buff), e
    }, p.ArrayBuffer.prototype.setState = function (e) {
      return e.buff = f(e.buff, !0), p.prototype.setState.call(this, e)
    }, p.ArrayBuffer.prototype.destroy = p.prototype.destroy, p.ArrayBuffer.prototype._finish = p.prototype._finish, p.ArrayBuffer.hash = function (e, t) {
      var n = i(new Uint8Array(e)), r = s(n);
      return t ? d(r) : r
    }, p
  })
}, function (e, t, n) {
  "use strict";

  function r(e, t, n, r, i) {
    function u(e, o) {
      return a.setItem(n, JSON.stringify(o)), function (o) {
        1 == e && localStorage.removeItem(n), r._progressBar(e, t, n), o()
      }
    }

    var f = null;
    a.getItem(n) && (f = JSON.parse(a.getItem(n))), f && "object" == (void 0 === f ? "undefined" : o(f)) && (f.file = t);
    try {
      (0, s.getClient)(r.error, t, i).multipartUpload(n, t, {checkpoint: f, progress: u})
    } catch (e) {
      console.log("!!!!upload failed, err=" + e), r.error(e, t, i)
    }
  }

  Object.defineProperty(t, "__esModule", {value: !0});
  var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  }, i = n(13), u = function (e) {
    return e && e.__esModule ? e : {default: e}
  }(i), s = n(0), a = (0, u.default)({maxItems: 100, prefix: "_vhall_demand_upload_"});
  t.default = r
}, function (e, t, n) {
  "use strict";

  function r(e) {
    var t = e.maxItems || 100, n = e.prefix || "", r = e.storage || "localStorage", o = {}, i = [], u = "_ls_meta_" + n,
      s = function () {
        try {
          return window.JSON && r in window && null !== window[r]
        } catch (e) {
          return !1
        }
      }(), a = function (e) {
        return window[r].getItem(e)
      }, f = function (e, t) {
        try {
          window[r].setItem(e, t)
        } catch (e) {
        }
      }, c = function (e) {
        window[r].removeItem(e)
      };
    if (o.getItem = function (e) {
        return s ? a(n + e) : null
      }, o.setItem = function (e, r) {
        if (s) {
          for (void 0 === r && (r = ""); i.length >= t;) {
            var o = i.shift();
            c(n + o)
          }
          -1 !== i.indexOf(e) && delete i[e], i.push(e), f(n + e, r), f(u, JSON.stringify(i))
        }
      }, o.removeItem = function (e) {
        s && (-1 !== i.indexOf(e) && (delete i[e], c(n + e)), f(u, JSON.stringify(i)))
      }, s) {
      var l = a(u);
      null !== l && (i = JSON.parse(l) || [])
    }
    return o
  }

  Object.defineProperty(t, "__esModule", {value: !0}), t.default = r
}, function (e, t, n) {
  "use strict";

  function r(e, t) {
    if ("string" == typeof e) {
      var n = e;
      e = [], e.push(n)
    }
    !function e(t, n) {
      o(t.shift(), function () {
        t.length ? e(t, n) : n && n()
      })
    }(e, t)
  }

  function o(e, t) {
    var n = !1, r = document.createElement("script");
    r.src = e, r.onload = r.onreadystatechange = function () {
      n || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (n = !0, t && t())
    }, document.body.appendChild(r)
  }

  Object.defineProperty(t, "__esModule", {value: !0}), t.default = r
}]);
