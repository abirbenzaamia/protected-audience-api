!(function () {
  "use strict";
  var i = function (t, e) {
    return (i =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (t, e) {
          t.__proto__ = e;
        }) ||
      function (t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
      })(t, e);
  };
  function t(t, e) {
    function n() {
      this.constructor = t;
    }
    i(t, e),
      (t.prototype =
        null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
  }
  var e = function () {
    return (e =
      Object.assign ||
      function (t) {
        for (var e, n = 1, i = arguments.length; n < i; n++)
          for (var o in (e = arguments[n]))
            Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
        return t;
      }).apply(this, arguments);
  };
  function n(r, s, a, l) {
    return new (a = a || Promise)(function (t, e) {
      function n(t) {
        try {
          o(l.next(t));
        } catch (t) {
          e(t);
        }
      }
      function i(t) {
        try {
          o(l.throw(t));
        } catch (t) {
          e(t);
        }
      }
      function o(e) {
        e.done
          ? t(e.value)
          : new a(function (t) {
              t(e.value);
            }).then(n, i);
      }
      o((l = l.apply(r, s || [])).next());
    });
  }
  function a(n, i) {
    var o,
      r,
      s,
      t,
      a = {
        label: 0,
        sent: function () {
          if (1 & s[0]) throw s[1];
          return s[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (t = { next: e(0), throw: e(1), return: e(2) }),
      "function" == typeof Symbol &&
        (t[Symbol.iterator] = function () {
          return this;
        }),
      t
    );
    function e(e) {
      return function (t) {
        return (function (e) {
          if (o) throw new TypeError("Generator is already executing.");
          for (; a; )
            try {
              if (
                ((o = 1),
                r &&
                  (s =
                    2 & e[0]
                      ? r.return
                      : e[0]
                      ? r.throw || ((s = r.return) && s.call(r), 0)
                      : r.next) &&
                  !(s = s.call(r, e[1])).done)
              )
                return s;
              switch (((r = 0), s && (e = [2 & e[0], s.value]), e[0])) {
                case 0:
                case 1:
                  s = e;
                  break;
                case 4:
                  return a.label++, { value: e[1], done: !1 };
                case 5:
                  a.label++, (r = e[1]), (e = [0]);
                  continue;
                case 7:
                  (e = a.ops.pop()), a.trys.pop();
                  continue;
                default:
                  if (
                    !(s = 0 < (s = a.trys).length && s[s.length - 1]) &&
                    (6 === e[0] || 2 === e[0])
                  ) {
                    a = 0;
                    continue;
                  }
                  if (3 === e[0] && (!s || (e[1] > s[0] && e[1] < s[3]))) {
                    a.label = e[1];
                    break;
                  }
                  if (6 === e[0] && a.label < s[1]) {
                    (a.label = s[1]), (s = e);
                    break;
                  }
                  if (s && a.label < s[2]) {
                    (a.label = s[2]), a.ops.push(e);
                    break;
                  }
                  s[2] && a.ops.pop(), a.trys.pop();
                  continue;
              }
              e = i.call(n, a);
            } catch (t) {
              (e = [6, t]), (r = 0);
            } finally {
              o = s = 0;
            }
          if (5 & e[0]) throw e[1];
          return { value: e[0] ? e[1] : void 0, done: !0 };
        })([e, t]);
      };
    }
  }
  function l(t, e) {
    if (
      !(function (t) {
        try {
          return void 0 !== t.cookie;
        } catch (t) {
          return !1;
        }
      })(t)
    )
      return null;
    for (var n = t.cookie.split(";"), i = 0; i < n.length; i++) {
      var o = n[i],
        r = o.substr(0, o.indexOf("=")).replace(/^\s+|\s+$/g, ""),
        s = o.substr(o.indexOf("=") + 1);
      if (r === e && s) return decodeURIComponent(s);
    }
    return null;
  }
  var o =
    ((r.prototype.logCounter = function (t) {
      var e =
        "entry=c~" +
        (this.METRIC_PREFIX ? this.METRIC_PREFIX + "." : "") +
        (t || "") +
        "~1";
      this._eventsQueue.push(e);
    }),
    (r.prototype.logHistogram = function (t, e) {
      var n =
        "entry=h~" +
        (this.METRIC_PREFIX ? this.METRIC_PREFIX + "." : "") +
        (t || "") +
        "~" +
        e;
      this._eventsQueue.push(n);
    }),
    (r.prototype.logError = function (t, e, n) {
      void 0 === n && (n = null);
      var i = (e && e.message) || e,
        o = "string" == typeof n ? [n] : n,
        r = [this.METRIC_PREFIX, t]
          .concat(o)
          .reduce(function (t, e) {
            return t.concat((e && e.split(".")) || []);
          }, [])
          .filter(function (t) {
            return null != t && null != t && "" != t;
          })
          .map(function (t) {
            return "&tag=" + encodeURIComponent(t);
          })
          .join(""),
        s =
          "https://" +
          this.CSM_BASE_DOMAIN +
          "/iex?gPath=" +
          (this.METRIC_PREFIX ? this.METRIC_PREFIX + "." : "") +
          encodeURIComponent(t) +
          "&msg=" +
          encodeURIComponent(i) +
          r;
      this.logPixel(s);
    }),
    (r.prototype.sendMetrics = function () {
      this.flushEventQueue();
    }),
    (r.prototype.flushEventQueue = function () {
      if (0 < this._eventsQueue.length) {
        var t =
          "https://" +
          this.CSM_BASE_DOMAIN +
          "/iev?" +
          this._eventsQueue.join("&");
        this.logPixel(t), (this._eventsQueue = []);
      }
    }),
    (r.prototype.logPixel = function (t) {
      if (!this.CSM_BASE_DOMAIN) return console.log("Pixel", t);
      var e = Math.floor(100 * Math.random());
      this.SAMPLING_RATIO <= e ||
        ("function" == typeof navigator.sendBeacon
          ? navigator.sendBeacon(t)
          : (new Image().src = t));
    }),
    r);
  function r(t, e, n) {
    var i = this;
    void 0 === e && (e = ""),
      void 0 === n && (n = 100),
      (this._eventsQueue = []),
      (this.CSM_BASE_DOMAIN = t),
      (this.SAMPLING_RATIO = n || 100),
      (this.METRIC_PREFIX = e || ""),
      window.addEventListener("pagehide", function () {
        return i.flushEventQueue();
      });
  }
  var s =
    ((u.prototype.sendSidJson = function (t) {
      var e = this,
        n = u.buildUrl(this._sidUrlBase, t),
        i = Date.now();
      return fetch(n, { credentials: "include" })
        .then(function (t) {
          return t.json();
        })
        .then(function (t) {
          return (
            e.csmClient.logCounter("SidReadSuccess"),
            e.csmClient.logHistogram("SidReadSuccessDuration", Date.now() - i),
            t
          );
        })
        .catch(function (t) {
          return (
            e.csmClient.logCounter("SidReadFailure"),
            e.csmClient.logHistogram("SidReadFailureDuration", Date.now() - i),
            e.csmClient.logError("SidReadError", t),
            {}
          );
        });
    }),
    (u.buildUrl = function (t, e) {
      var n,
        i,
        o,
        r,
        s =
          window.location.ancestorOrigins && window.location.ancestorOrigins[0]
            ? window.location.ancestorOrigins[0]
            : null,
        a = s ? new URL(s) : null,
        l = a ? a.hostname : "",
        u = e.fragmentData,
        c = e.topUrl || u.topUrl,
        d = e.privateModeStatus || u.pm,
        h = u.syncframeOverrideVersion || e.syncframeVersion,
        p =
          null !==
            (i =
              null === (n = e.delegationCookies) || void 0 === n
                ? void 0
                : n.bundle) && void 0 !== i
            ? i
            : u.bundle,
        f =
          null !==
            (r =
              null === (o = e.delegationCookies) || void 0 === o
                ? void 0
                : o.optout) && void 0 !== r
            ? r
            : u.optout;
      return (
        t +
        "?origin=" +
        u.origin +
        (h ? "&v=" + h : "") +
        "&domain=" +
        encodeURIComponent(u.tld ? u.tld : l) +
        "&sn=" +
        e.syncframeName +
        "&so=" +
        p.origin +
        (c ? "&topUrl=" + encodeURIComponent(c) : "") +
        (u.lwid.hasValue() ? "&lwid=" + encodeURIComponent(u.lwid.value) : "") +
        (p.hasValue() ? "&bundle=" + encodeURIComponent(p.value) : "") +
        (e.dnaBundle ? "&info=" + encodeURIComponent(e.dnaBundle) : "") +
        (e.dnsIdChunks && e.dnsIdChunks.length
          ? "&idsd=" + e.dnsIdChunks.toString()
          : "") +
        (d ? "&pm=" + d : "") +
        (u.cookiesWriteable ? "&cw=1" : "") +
        (f.hasValue() && f.value ? "&optout=1" : "") +
        (u.rtusCallerId ? "&rtusCallerId=" + u.rtusCallerId : "") +
        (u.localStorageWritable ? "&lsw=1" : "") +
        (e.interestBasedAdvertising
          ? "&topicsavail=" +
            (e.interestBasedAdvertising.topicsApiAvailable ? "1" : "0")
          : "") +
        (e.interestBasedAdvertising
          ? "&fledgeavail=" +
            (e.interestBasedAdvertising.fledgeApiAvailable ? "1" : "0")
          : "") +
        (e.interestBasedAdvertising
          ? e.interestBasedAdvertising.rawTopics
              .map(function (t) {
                return "&topic=" + encodeURIComponent(t);
              })
              .join("")
          : "") +
        (window.DEBUG ? "&debug=1" : "")
      );
    }),
    u);
  function u(t, e) {
    (this.csmClient = e), (this._sidUrlBase = "https://" + t + "/sid/json");
  }
  var c =
    ((d.prototype.start = function () {
      return n(this, void 0, void 0, function () {
        var e, n;
        return a(this, function (t) {
          switch (t.label) {
            case 0:
              return [4, this.performCall()];
            case 1:
              return (e = t.sent()).info ? [2, e] : [4, this.performCall()];
            case 2:
              return (
                (n = t.sent()).info
                  ? this.csmClient.logCounter("StorageWriting.Dna.Success")
                  : this.csmClient.logCounter("StorageWriting.Dna.Failure"),
                [2, n]
              );
          }
        });
      });
    }),
    (d.prototype.performCall = function () {
      return n(this, void 0, void 0, function () {
        return a(this, function (t) {
          switch (t.label) {
            case 0:
              return [
                4,
                fetch(this.dnaDomain, { credentials: "include" })
                  .then(function (t) {
                    return t.json();
                  })
                  .catch(function (t) {
                    return { info: null };
                  }),
              ];
            case 1:
              return [2, t.sent()];
          }
        });
      });
    }),
    d);
  function d(t, e) {
    (this.dnaDomain = t), (this.csmClient = e);
  }
  var f,
    h,
    v,
    p,
    g =
      ((m.prototype.readAll = function () {
        return n(this, void 0, void 0, function () {
          return a(this, function (t) {
            switch (t.label) {
              case 0:
                return this.dnsIdEnabled
                  ? [4, Promise.all(this.dnsIdDomainList.map(this.read))]
                  : [2, []];
              case 1:
                return [
                  2,
                  t.sent().map(function (t) {
                    return t.idsd;
                  }),
                ];
            }
          });
        });
      }),
      (m.prototype.read = function (e) {
        return n(this, void 0, void 0, function () {
          return a(this, function (t) {
            switch (t.label) {
              case 0:
                return [
                  4,
                  fetch("https://" + e + "/newidsd")
                    .then(function (t) {
                      return t.json();
                    })
                    .catch(function (t) {
                      return { idsd: -2 };
                    }),
                ];
              case 1:
                return [2, t.sent()];
            }
          });
        });
      }),
      m);
  function m(t, e) {
    (this.dnsIdEnabled = t), (this.dnsIdDomainList = e);
  }
  ((h = f = f || {})[(h.None = 0)] = "None"),
    (h[(h.Cookie = 1)] = "Cookie"),
    (h[(h.LocalStorage = 2)] = "LocalStorage"),
    (h[(h.Delegation = 4)] = "Delegation"),
    ((p = v = v || {})[(p.Unknown = 0)] = "Unknown"),
    (p[(p.Deactivated = 1)] = "Deactivated"),
    (p[(p.Activated = 2)] = "Activated");
  var C =
    ((w.fromUserIdentificationData = function (t) {
      return new w(t.value, t.origin);
    }),
    (w.fromValue = function (t) {
      return new w(t, f.None);
    }),
    (w.prototype.hasValue = function () {
      return (
        "" !== String(this.value) &&
        null !== this.value &&
        void 0 !== this.value
      );
    }),
    w);
  function w(t, e) {
    (this.value = t), (this.origin = e);
  }
  var I;
  t(y, (I = C)),
    (y.prototype.hasValue = function () {
      return (
        "" !== String(this.value) &&
        null !== this.value &&
        void 0 !== this.value
      );
    }),
    (y.prototype.saveOnAllStorages = function () {
      if (this.hasValue()) {
        var t =
          "boolean" == typeof this.value
            ? this.value
              ? "1"
              : "0"
            : String(this.value);
        this.storageAdapter.writeToAllStorages(
          this.storageKey,
          t,
          this.expirationTimeHours
        );
      }
    }),
    (y.prototype.toJSON = function () {
      return { value: this.value, origin: this.origin };
    });
  function y(t, e, n, i, o) {
    var r = I.call(this, n, i) || this;
    return (
      (r.storageKey = t), (r.expirationTimeHours = e), (r.storageAdapter = o), r
    );
  }
  var b =
    ((A.prototype.isEmpty = function () {
      return !(this.bundle || this.optout);
    }),
    A);
  function A(t, e) {
    (this.bundle = t ? new C(t, f.Delegation) : void 0),
      (this.optout = e ? new C("1" === e, f.Delegation) : void 0);
  }
  var T =
    ((D.prototype.read = function () {
      return n(this, void 0, void 0, function () {
        return a(this, function (t) {
          switch (t.label) {
            case 0:
              return this.hasToReadOnDelegatedSubdomain()
                ? [
                    4,
                    fetch(this.delegationUrl, { credentials: "include" })
                      .then(function (t) {
                        return t.json();
                      })
                      .then(function (t) {
                        return new b(t.cto_bundle, t.cto_optout);
                      })
                      .catch(function (t) {
                        return null;
                      }),
                  ]
                : [3, 2];
            case 1:
              return [2, t.sent()];
            case 2:
              return [2, new b()];
          }
        });
      });
    }),
    (D.prototype.hasToReadOnDelegatedSubdomain = function () {
      return this.readCookiesOnDelegatedSubdomain && this.delegationUrl;
    }),
    D);
  function D(t, e) {
    (this.delegationUrl = t), (this.readCookiesOnDelegatedSubdomain = e);
  }
  var _ =
    ((O.Create = function (t) {
      var e,
        n,
        i,
        o,
        r,
        s,
        a,
        l,
        u,
        c,
        d = {
          lwid: { value: null, origin: f.None },
          bundle: { value: null, origin: f.None },
          optout: { value: null, origin: f.None },
          tld: "",
          topUrl: "",
          version: "NA",
          cw: !1,
          lsw: !1,
          origin: "NA",
          pm: v.Unknown,
          rtusCallerId: void 0,
          osv: void 0,
          requestId: "ignored",
        };
      try {
        var h = location.hash.substring(1);
        "{%22" === h.substr(0, 4) && (h = decodeURIComponent(h)),
          (c = JSON.parse(h));
      } catch (t) {
        c = d;
      }
      function p(t) {
        var e,
          n = null !== (e = c[t]) && void 0 !== e ? e : d[t];
        return "object" == typeof n
          ? C.fromUserIdentificationData(n)
          : C.fromValue(n);
      }
      return new O(
        p("lwid"),
        p("optout"),
        p("bundle"),
        null !== (e = c.osv) && void 0 !== e ? e : d.osv,
        null !== (n = c.tld) && void 0 !== n ? n : d.tld,
        null !== (i = c.origin) && void 0 !== i ? i : d.origin,
        String(null !== (o = c.version) && void 0 !== o ? o : d.version),
        decodeURIComponent(
          null !== (r = c.topUrl) && void 0 !== r ? r : d.topUrl
        ),
        null !== (s = c.pm) && void 0 !== s ? s : d.pm,
        null !== (a = c.cw) && void 0 !== a ? a : d.cw,
        t,
        null !== (l = c.rtusCallerId) && void 0 !== l ? l : d.rtusCallerId,
        null !== (u = c.lsw) && void 0 !== u ? u : d.lsw,
        c.requestId
      );
    }),
    (O.prototype.emitCsmMetrics = function () {
      this.lwid.hasValue() &&
        this.csmClient.logCounter(
          "FragmentData." + this.origin + ".Lwid.Origin." + this.lwid.origin
        ),
        this.optout.value &&
          this.csmClient.logCounter(
            "FragmentData." +
              this.origin +
              ".Optout.Origin." +
              this.optout.origin
          ),
        this.bundle.hasValue() &&
          this.csmClient.logCounter(
            "FragmentData." +
              this.origin +
              ".Bundle.Origin." +
              this.bundle.origin
          ),
        this.pm &&
          this.csmClient.logCounter(
            "FragmentData." + this.origin + ".PrivateMode.Origin." + this.pm
          );
    }),
    O);
  function O(t, e, n, i, o, r, s, a, l, u, c, d, h, p) {
    (this.lwid = t),
      (this.optout = e),
      (this.bundle = n),
      (this.syncframeOverrideVersion = i),
      (this.tld = o),
      (this.origin = r),
      (this.version = s),
      (this.topUrl = a),
      (this.pm = l),
      (this.cookiesWriteable = u),
      (this.csmClient = c),
      (this.rtusCallerId = d),
      (this.localStorageWritable = h),
      (this.requestId = p);
  }
  var R =
    ((S.prototype.getFragmentData = function () {
      return (
        null == this.fragmentData &&
          (this.fragmentData = _.Create(this.getCsmClient())),
        this.fragmentData
      );
    }),
    (S.prototype.getCsmClient = function () {
      return (
        null == this.csmClient &&
          (this.csmClient = new o(
            this.window.CONFIG_CSM_DOMAIN_NAME,
            "Gum." + this.syncframeName,
            window.CONFIG_CSM_RATIO
          )),
        this.csmClient
      );
    }),
    (S.prototype.getSidClient = function (t) {
      return (
        null == this.sidClient &&
          (this.sidClient = new s(
            t || this.window.GUM_DOMAIN,
            this.getCsmClient()
          )),
        this.sidClient
      );
    }),
    (S.prototype.getDnaClient = function () {
      return (
        null == this.dnaClient &&
          (this.dnaClient = new c(window.DNA_DOMAIN, this.getCsmClient())),
        this.dnaClient
      );
    }),
    (S.prototype.getDnsIdClient = function () {
      return (
        null == this.dnsIdClient &&
          (this.dnsIdClient = new g(
            this.window.DNSID_ENABLED,
            window.DNSID_DOMAIN_LIST
          )),
        this.dnsIdClient
      );
    }),
    (S.prototype.getDelegationClient = function () {
      return (
        null == this.delegationClient &&
          (this.delegationClient = new T(
            this.window.DELEGATION_URI,
            this.window.READ_FROM_SUBDOMAIN_DELEGATION || !1
          )),
        this.delegationClient
      );
    }),
    (S.prototype.postMessageToCaller = function (t) {
      !(function (t, e) {
        e.parent.postMessage(t, "*");
      })(e(e({}, t), { requestId: this.getFragmentData().requestId }), window);
    }),
    (S.prototype.logCookieMetrics = function (t) {
      for (var e = 0, n = Object.keys(t); e < n.length; e++) {
        var i = n[e];
        t[i] && this.getCsmClient().logCounter("CookieRead." + i);
      }
    }),
    S);
  function S(t, e) {
    (this.syncframeName = t), (this.window = e);
  }
  var E,
    M =
      ((N.prototype.getInterestBasedAdvertising = function () {
        return n(this, void 0, void 0, function () {
          var e, n, i, o;
          return a(this, function (t) {
            switch (t.label) {
              case 0:
                return (
                  (e = "browsingTopics" in this.document),
                  (n = "runAdAuction" in this.navigator),
                  e
                    ? [4, this.document.browsingTopics()]
                    : [
                        2,
                        {
                          topicsApiAvailable: e,
                          rawTopics: [],
                          fledgeApiAvailable: n,
                        },
                      ]
                );
              case 1:
                return (
                  (i = t.sent()),
                  (o = i.map(function (t) {
                    var e = t.topic,
                      n = t.version;
                    return JSON.stringify({ topic: e, version: n });
                  })),
                  [
                    2,
                    {
                      topicsApiAvailable: e,
                      rawTopics: o,
                      fledgeApiAvailable: n,
                    },
                  ]
                );
            }
          });
        });
      }),
      (N.prototype.addTrialTokens = function () {
        this.isTrialTokenDropped ||
          (this.addTrialToken(N.CRITEO_COM_FIRST_PARTY_TOKEN),
          this.addTrialToken(N.CRITEO_COM_THIRD_PARTY_TOKEN),
          (this.isTrialTokenDropped = !0));
      }),
      (N.prototype.addTrialToken = function (t) {
        var e = document.createElement("meta");
        (e.httpEquiv = "origin-trial"),
          (e.content = t),
          this.document.head.appendChild(e);
      }),
      (N.CRITEO_COM_THIRD_PARTY_TOKEN =
        "AzLNuh8GFzfIOcwvhEg7Ymr7YCzlYVTKeD7i2iETABbRf+sL2FAx+r+HlTtxSi1zgUFxBlJVoxgLjuhqiwTjAw4AAACAeyJvcmlnaW4iOiJodHRwczovL2NyaXRlby5jb206NDQzIiwiZmVhdHVyZSI6IlByaXZhY3lTYW5kYm94QWRzQVBJcyIsImV4cGlyeSI6MTY4MDY1Mjc5OSwiaXNTdWJkb21haW4iOnRydWUsImlzVGhpcmRQYXJ0eSI6dHJ1ZX0="),
      (N.CRITEO_COM_FIRST_PARTY_TOKEN =
        "At+JrxwMJ+2ydeTHGTI0QTHyXmvnCiq6yo2C8re8ZBtETdIUCVuWzBE9AnMWGF3vcV14mhw8ff87NOP5/ibffggAAABseyJvcmlnaW4iOiJodHRwczovL2NyaXRlby5jb206NDQzIiwiZmVhdHVyZSI6IlByaXZhY3lTYW5kYm94QWRzQVBJcyIsImV4cGlyeSI6MTY4MDY1Mjc5OSwiaXNTdWJkb21haW4iOnRydWV9"),
      N);
  function N(t, e) {
    (this.isTrialTokenDropped = !1),
      (this.document = t),
      (this.navigator = e),
      this.addTrialTokens();
  }
  function U() {
    return E.call(this, "ChromeSyncframe", window) || this;
  }
  new (t(U, (E = R)),
  (U.prototype.Start = function () {
    var s;
    return n(this, void 0, void 0, function () {
      var e, n, i, o, r;
      return a(this, function (t) {
        switch (t.label) {
          case 0:
            return (
              t.trys.push([0, 3, , 4]),
              (e = (function () {
                var t = l(document, "optout");
                return { uid: l(document, "uid"), optout: "1" === t || null };
              })()),
              (n = this.getFragmentData()),
              this.logCookieMetrics(e),
              n.emitCsmMetrics(),
              [
                4,
                new M(
                  this.window.document,
                  this.window.navigator
                ).getInterestBasedAdvertising(),
              ]
            );
          case 1:
            return (
              (i = t.sent()),
              [
                4,
                this.getSidClient().sendSidJson({
                  fragmentData: n,
                  syncframeName: this.syncframeName,
                  interestBasedAdvertising: i,
                }),
              ]
            );
          case 2:
            return (
              (o = t.sent()),
              this.postMessageToCaller({
                isCriteoMessage: !0,
                optout: e.optout || o.optout,
                bundle: o.bundle,
                callbacks:
                  null === (s = o.pixels) || void 0 === s
                    ? void 0
                    : s.map(function (t) {
                        return t.pixelUrl;
                      }),
              }),
              [3, 4]
            );
          case 3:
            return (
              (r = t.sent()),
              this.getCsmClient().logError("GlobalError", r),
              [3, 4]
            );
          case 4:
            return [2];
        }
      });
    });
  }),
  U)().Start();
})();
