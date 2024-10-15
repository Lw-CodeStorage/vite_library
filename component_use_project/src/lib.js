var St = {};
/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function un(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const I = St.NODE_ENV !== "production" ? Object.freeze({}) : {}, fn = St.NODE_ENV !== "production" ? Object.freeze([]) : [], ce = () => {
}, pn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), T = Object.assign, dn = Object.prototype.hasOwnProperty, N = (e, t) => dn.call(e, t), b = Array.isArray, G = (e) => Ve(e) === "[object Map]", Ot = (e) => Ve(e) === "[object Set]", O = (e) => typeof e == "function", P = (e) => typeof e == "string", Z = (e) => typeof e == "symbol", y = (e) => e !== null && typeof e == "object", hn = (e) => (y(e) || O(e)) && O(e.then) && O(e.catch), xt = Object.prototype.toString, Ve = (e) => xt.call(e), yt = (e) => Ve(e).slice(8, -1), vt = (e) => Ve(e) === "[object Object]", ke = (e) => P(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, _n = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, gn = _n((e) => e.charAt(0).toUpperCase() + e.slice(1)), U = (e, t) => !Object.is(e, t), mn = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
};
let dt;
const Te = () => dt || (dt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function et(e) {
  if (b(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = P(s) ? wn(s) : et(s);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (P(e) || y(e))
    return e;
}
const bn = /;(?![^(]*\))/g, En = /:([^]+)/, Nn = /\/\*[^]*?\*\//g;
function wn(e) {
  const t = {};
  return e.replace(Nn, "").split(bn).forEach((n) => {
    if (n) {
      const s = n.split(En);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function tt(e) {
  let t = "";
  if (P(e))
    t = e;
  else if (b(e))
    for (let n = 0; n < e.length; n++) {
      const s = tt(e[n]);
      s && (t += s + " ");
    }
  else if (y(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Dt = (e) => !!(e && e.__v_isRef === !0), nt = (e) => P(e) ? e : e == null ? "" : b(e) || y(e) && (e.toString === xt || !O(e.toString)) ? Dt(e) ? nt(e.value) : JSON.stringify(e, Rt, 2) : String(e), Rt = (e, t) => Dt(t) ? Rt(e, t.value) : G(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, r], i) => (n[Fe(s, i) + " =>"] = r, n),
    {}
  )
} : Ot(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Fe(n))
} : Z(t) ? Fe(t) : y(t) && !b(t) && !vt(t) ? String(t) : t, Fe = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Z(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
var E = {};
function J(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let m;
const je = /* @__PURE__ */ new WeakSet();
class Sn {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0;
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, je.has(this) && (je.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || On(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ht(this), Tt(this);
    const t = m, n = M;
    m = this, M = !0;
    try {
      return this.fn();
    } finally {
      E.NODE_ENV !== "production" && m !== this && J(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Ct(this), m = t, M = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        it(t);
      this.deps = this.depsTail = void 0, ht(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? je.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ue(this) && this.run();
  }
  get dirty() {
    return Ue(this);
  }
}
let Vt = 0, le, ae;
function On(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = ae, ae = e;
    return;
  }
  e.next = le, le = e;
}
function rt() {
  Vt++;
}
function st() {
  if (--Vt > 0)
    return;
  if (ae) {
    let t = ae;
    for (ae = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; le; ) {
    let t = le;
    for (le = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Tt(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ct(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === n && (n = r), it(s), yn(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = r;
  }
  e.deps = t, e.depsTail = n;
}
function Ue(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (xn(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function xn(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === we))
    return;
  e.globalVersion = we;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !Ue(e)) {
    e.flags &= -3;
    return;
  }
  const n = m, s = M;
  m = e, M = !0;
  try {
    Tt(e);
    const r = e.fn(e._value);
    (t.version === 0 || U(r, e._value)) && (e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    m = n, M = s, Ct(e), e.flags &= -3;
  }
}
function it(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e;
  if (s && (s.nextSub = r, e.prevSub = void 0), r && (r.prevSub = s, e.nextSub = void 0), E.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = r), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      it(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function yn(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let M = !0;
const It = [];
function Ce() {
  It.push(M), M = !1;
}
function Ie() {
  const e = It.pop();
  M = e === void 0 ? !0 : e;
}
function ht(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = m;
    m = void 0;
    try {
      t();
    } finally {
      m = n;
    }
  }
}
let we = 0;
class vn {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class $t {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, E.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!m || !M || m === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== m)
      n = this.activeLink = new vn(m, this), m.deps ? (n.prevDep = m.depsTail, m.depsTail.nextDep = n, m.depsTail = n) : m.deps = m.depsTail = n, Pt(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = m.depsTail, n.nextDep = void 0, m.depsTail.nextDep = n, m.depsTail = n, m.deps === n && (m.deps = s);
    }
    return E.NODE_ENV !== "production" && m.onTrack && m.onTrack(
      T(
        {
          effect: m
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, we++, this.notify(t);
  }
  notify(t) {
    rt();
    try {
      if (E.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            T(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      st();
    }
  }
}
function Pt(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Pt(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), E.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const Je = /* @__PURE__ */ new WeakMap(), Q = Symbol(
  E.NODE_ENV !== "production" ? "Object iterate" : ""
), qe = Symbol(
  E.NODE_ENV !== "production" ? "Map keys iterate" : ""
), fe = Symbol(
  E.NODE_ENV !== "production" ? "Array iterate" : ""
);
function x(e, t, n) {
  if (M && m) {
    let s = Je.get(e);
    s || Je.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || (s.set(n, r = new $t()), r.map = s, r.key = n), E.NODE_ENV !== "production" ? r.track({
      target: e,
      type: t,
      key: n
    }) : r.track();
  }
}
function L(e, t, n, s, r, i) {
  const o = Je.get(e);
  if (!o) {
    we++;
    return;
  }
  const c = (a) => {
    a && (E.NODE_ENV !== "production" ? a.trigger({
      target: e,
      type: t,
      key: n,
      newValue: s,
      oldValue: r,
      oldTarget: i
    }) : a.trigger());
  };
  if (rt(), t === "clear")
    o.forEach(c);
  else {
    const a = b(e), f = a && ke(n);
    if (a && n === "length") {
      const d = Number(s);
      o.forEach((l, u) => {
        (u === "length" || u === fe || !Z(u) && u >= d) && c(l);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && c(o.get(n)), f && c(o.get(fe)), t) {
        case "add":
          a ? f && c(o.get("length")) : (c(o.get(Q)), G(e) && c(o.get(qe)));
          break;
        case "delete":
          a || (c(o.get(Q)), G(e) && c(o.get(qe)));
          break;
        case "set":
          G(e) && c(o.get(Q));
          break;
      }
  }
  st();
}
function ee(e) {
  const t = h(e);
  return t === e ? t : (x(t, "iterate", fe), V(e) ? t : t.map(D));
}
function ot(e) {
  return x(e = h(e), "iterate", fe), e;
}
const Dn = {
  __proto__: null,
  [Symbol.iterator]() {
    return He(this, Symbol.iterator, D);
  },
  concat(...e) {
    return ee(this).concat(
      ...e.map((t) => b(t) ? ee(t) : t)
    );
  },
  entries() {
    return He(this, "entries", (e) => (e[1] = D(e[1]), e));
  },
  every(e, t) {
    return j(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return j(this, "filter", e, t, (n) => n.map(D), arguments);
  },
  find(e, t) {
    return j(this, "find", e, t, D, arguments);
  },
  findIndex(e, t) {
    return j(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return j(this, "findLast", e, t, D, arguments);
  },
  findLastIndex(e, t) {
    return j(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return j(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return We(this, "includes", e);
  },
  indexOf(...e) {
    return We(this, "indexOf", e);
  },
  join(e) {
    return ee(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return We(this, "lastIndexOf", e);
  },
  map(e, t) {
    return j(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return ie(this, "pop");
  },
  push(...e) {
    return ie(this, "push", e);
  },
  reduce(e, ...t) {
    return _t(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return _t(this, "reduceRight", e, t);
  },
  shift() {
    return ie(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return j(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return ie(this, "splice", e);
  },
  toReversed() {
    return ee(this).toReversed();
  },
  toSorted(e) {
    return ee(this).toSorted(e);
  },
  toSpliced(...e) {
    return ee(this).toSpliced(...e);
  },
  unshift(...e) {
    return ie(this, "unshift", e);
  },
  values() {
    return He(this, "values", D);
  }
};
function He(e, t, n) {
  const s = ot(e), r = s[t]();
  return s !== e && !V(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.value && (i.value = n(i.value)), i;
  }), r;
}
const Rn = Array.prototype;
function j(e, t, n, s, r, i) {
  const o = ot(e), c = o !== e && !V(e), a = o[t];
  if (a !== Rn[t]) {
    const l = a.apply(e, i);
    return c ? D(l) : l;
  }
  let f = n;
  o !== e && (c ? f = function(l, u) {
    return n.call(this, D(l), u, e);
  } : n.length > 2 && (f = function(l, u) {
    return n.call(this, l, u, e);
  }));
  const d = a.call(o, f, s);
  return c && r ? r(d) : d;
}
function _t(e, t, n, s) {
  const r = ot(e);
  let i = n;
  return r !== e && (V(e) ? n.length > 3 && (i = function(o, c, a) {
    return n.call(this, o, c, a, e);
  }) : i = function(o, c, a) {
    return n.call(this, o, D(c), a, e);
  }), r[t](i, ...s);
}
function We(e, t, n) {
  const s = h(e);
  x(s, "iterate", fe);
  const r = s[t](...n);
  return (r === -1 || r === !1) && Se(n[0]) ? (n[0] = h(n[0]), s[t](...n)) : r;
}
function ie(e, t, n = []) {
  Ce(), rt();
  const s = h(e)[t].apply(e, n);
  return st(), Ie(), s;
}
const Vn = /* @__PURE__ */ un("__proto__,__v_isRef,__isVue"), At = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Z)
);
function Tn(e) {
  Z(e) || (e = String(e));
  const t = h(this);
  return x(t, "has", e), t.hasOwnProperty(e);
}
class Mt {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    const r = this._isReadonly, i = this._isShallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return i;
    if (n === "__v_raw")
      return s === (r ? i ? Wt : Ht : i ? Wn : jt).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const o = b(t);
    if (!r) {
      let a;
      if (o && (a = Dn[n]))
        return a;
      if (n === "hasOwnProperty")
        return Tn;
    }
    const c = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      R(t) ? t : s
    );
    return (Z(n) ? At.has(n) : Vn(n)) || (r || x(t, "get", n), i) ? c : R(c) ? o && ke(n) ? c : c.value : y(c) ? r ? zt(c) : Kt(c) : c;
  }
}
class Cn extends Mt {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let i = t[n];
    if (!this._isShallow) {
      const a = K(i);
      if (!V(s) && !K(s) && (i = h(i), s = h(s)), !b(t) && R(i) && !R(s))
        return a ? !1 : (i.value = s, !0);
    }
    const o = b(t) && ke(n) ? Number(n) < t.length : N(t, n), c = Reflect.set(
      t,
      n,
      s,
      R(t) ? t : r
    );
    return t === h(r) && (o ? U(s, i) && L(t, "set", n, s, i) : L(t, "add", n, s)), c;
  }
  deleteProperty(t, n) {
    const s = N(t, n), r = t[n], i = Reflect.deleteProperty(t, n);
    return i && s && L(t, "delete", n, void 0, r), i;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Z(n) || !At.has(n)) && x(t, "has", n), s;
  }
  ownKeys(t) {
    return x(
      t,
      "iterate",
      b(t) ? "length" : Q
    ), Reflect.ownKeys(t);
  }
}
class Ft extends Mt {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return E.NODE_ENV !== "production" && J(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return E.NODE_ENV !== "production" && J(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const In = /* @__PURE__ */ new Cn(), $n = /* @__PURE__ */ new Ft(), Pn = /* @__PURE__ */ new Ft(!0), Ye = (e) => e, _e = (e) => Reflect.getPrototypeOf(e);
function An(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, i = h(r), o = G(i), c = e === "entries" || e === Symbol.iterator && o, a = e === "keys" && o, f = r[e](...s), d = n ? Ye : t ? Ge : D;
    return !t && x(
      i,
      "iterate",
      a ? qe : Q
    ), {
      // iterator protocol
      next() {
        const { value: l, done: u } = f.next();
        return u ? { value: l, done: u } : {
          value: c ? [d(l[0]), d(l[1])] : d(l),
          done: u
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function ge(e) {
  return function(...t) {
    if (E.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      J(
        `${gn(e)} operation ${n}failed: target is readonly.`,
        h(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Mn(e, t) {
  const n = {
    get(r) {
      const i = this.__v_raw, o = h(i), c = h(r);
      e || (U(r, c) && x(o, "get", r), x(o, "get", c));
      const { has: a } = _e(o), f = t ? Ye : e ? Ge : D;
      if (a.call(o, r))
        return f(i.get(r));
      if (a.call(o, c))
        return f(i.get(c));
      i !== o && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && x(h(r), "iterate", Q), Reflect.get(r, "size", r);
    },
    has(r) {
      const i = this.__v_raw, o = h(i), c = h(r);
      return e || (U(r, c) && x(o, "has", r), x(o, "has", c)), r === c ? i.has(r) : i.has(r) || i.has(c);
    },
    forEach(r, i) {
      const o = this, c = o.__v_raw, a = h(c), f = t ? Ye : e ? Ge : D;
      return !e && x(a, "iterate", Q), c.forEach((d, l) => r.call(i, f(d), f(l), o));
    }
  };
  return T(
    n,
    e ? {
      add: ge("add"),
      set: ge("set"),
      delete: ge("delete"),
      clear: ge("clear")
    } : {
      add(r) {
        !t && !V(r) && !K(r) && (r = h(r));
        const i = h(this);
        return _e(i).has.call(i, r) || (i.add(r), L(i, "add", r, r)), this;
      },
      set(r, i) {
        !t && !V(i) && !K(i) && (i = h(i));
        const o = h(this), { has: c, get: a } = _e(o);
        let f = c.call(o, r);
        f ? E.NODE_ENV !== "production" && gt(o, c, r) : (r = h(r), f = c.call(o, r));
        const d = a.call(o, r);
        return o.set(r, i), f ? U(i, d) && L(o, "set", r, i, d) : L(o, "add", r, i), this;
      },
      delete(r) {
        const i = h(this), { has: o, get: c } = _e(i);
        let a = o.call(i, r);
        a ? E.NODE_ENV !== "production" && gt(i, o, r) : (r = h(r), a = o.call(i, r));
        const f = c ? c.call(i, r) : void 0, d = i.delete(r);
        return a && L(i, "delete", r, void 0, f), d;
      },
      clear() {
        const r = h(this), i = r.size !== 0, o = E.NODE_ENV !== "production" ? G(r) ? new Map(r) : new Set(r) : void 0, c = r.clear();
        return i && L(
          r,
          "clear",
          void 0,
          void 0,
          o
        ), c;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((r) => {
    n[r] = An(r, e, t);
  }), n;
}
function ct(e, t) {
  const n = Mn(e, t);
  return (s, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    N(n, r) && r in s ? n : s,
    r,
    i
  );
}
const Fn = {
  get: /* @__PURE__ */ ct(!1, !1)
}, jn = {
  get: /* @__PURE__ */ ct(!0, !1)
}, Hn = {
  get: /* @__PURE__ */ ct(!0, !0)
};
function gt(e, t, n) {
  const s = h(n);
  if (s !== n && t.call(e, s)) {
    const r = yt(e);
    J(
      `Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const jt = /* @__PURE__ */ new WeakMap(), Wn = /* @__PURE__ */ new WeakMap(), Ht = /* @__PURE__ */ new WeakMap(), Wt = /* @__PURE__ */ new WeakMap();
function Kn(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function zn(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Kn(yt(e));
}
function Kt(e) {
  return K(e) ? e : lt(
    e,
    !1,
    In,
    Fn,
    jt
  );
}
function zt(e) {
  return lt(
    e,
    !0,
    $n,
    jn,
    Ht
  );
}
function me(e) {
  return lt(
    e,
    !0,
    Pn,
    Hn,
    Wt
  );
}
function lt(e, t, n, s, r) {
  if (!y(e))
    return E.NODE_ENV !== "production" && J(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = r.get(e);
  if (i)
    return i;
  const o = zn(e);
  if (o === 0)
    return e;
  const c = new Proxy(
    e,
    o === 2 ? s : n
  );
  return r.set(e, c), c;
}
function ne(e) {
  return K(e) ? ne(e.__v_raw) : !!(e && e.__v_isReactive);
}
function K(e) {
  return !!(e && e.__v_isReadonly);
}
function V(e) {
  return !!(e && e.__v_isShallow);
}
function Se(e) {
  return e ? !!e.__v_raw : !1;
}
function h(e) {
  const t = e && e.__v_raw;
  return t ? h(t) : e;
}
function Ln(e) {
  return !N(e, "__v_skip") && Object.isExtensible(e) && mn(e, "__v_skip", !0), e;
}
const D = (e) => y(e) ? Kt(e) : e, Ge = (e) => y(e) ? zt(e) : e;
function R(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Lt(e) {
  return Bn(e, !1);
}
function Bn(e, t) {
  return R(e) ? e : new Un(e, t);
}
class Un {
  constructor(t, n) {
    this.dep = new $t(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : h(t), this._value = n ? t : D(t), this.__v_isShallow = n;
  }
  get value() {
    return E.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || V(t) || K(t);
    t = s ? t : h(t), U(t, n) && (this._rawValue = t, this._value = s ? t : D(t), E.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function Jn(e) {
  return R(e) ? e.value : e;
}
const qn = {
  get: (e, t, n) => t === "__v_raw" ? e : Jn(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return R(r) && !R(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Yn(e) {
  return ne(e) ? e : new Proxy(e, qn);
}
const be = {}, Oe = /* @__PURE__ */ new WeakMap();
let Y;
function Gn(e, t = !1, n = Y) {
  if (n) {
    let s = Oe.get(n);
    s || Oe.set(n, s = []), s.push(e);
  } else E.NODE_ENV !== "production" && !t && J(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Qn(e, t, n = I) {
  const { immediate: s, deep: r, once: i, scheduler: o, augmentJob: c, call: a } = n, f = (g) => {
    (n.onWarn || J)(
      "Invalid watch source: ",
      g,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = (g) => r ? g : V(g) || r === !1 || r === 0 ? B(g, 1) : B(g);
  let l, u, p, w, C = !1, de = !1;
  if (R(e) ? (u = () => e.value, C = V(e)) : ne(e) ? (u = () => d(e), C = !0) : b(e) ? (de = !0, C = e.some((g) => ne(g) || V(g)), u = () => e.map((g) => {
    if (R(g))
      return g.value;
    if (ne(g))
      return d(g);
    if (O(g))
      return a ? a(g, 2) : g();
    E.NODE_ENV !== "production" && f(g);
  })) : O(e) ? t ? u = a ? () => a(e, 2) : e : u = () => {
    if (p) {
      Ce();
      try {
        p();
      } finally {
        Ie();
      }
    }
    const g = Y;
    Y = l;
    try {
      return a ? a(e, 3, [w]) : e(w);
    } finally {
      Y = g;
    }
  } : (u = ce, E.NODE_ENV !== "production" && f(e)), t && r) {
    const g = u, F = r === !0 ? 1 / 0 : r;
    u = () => B(g(), F);
  }
  const k = () => {
    l.stop();
  };
  if (i && t) {
    const g = t;
    t = (...F) => {
      g(...F), k();
    };
  }
  let q = de ? new Array(e.length).fill(be) : be;
  const se = (g) => {
    if (!(!(l.flags & 1) || !l.dirty && !g))
      if (t) {
        const F = l.run();
        if (r || C || (de ? F.some((Me, he) => U(Me, q[he])) : U(F, q))) {
          p && p();
          const Me = Y;
          Y = l;
          try {
            const he = [
              F,
              // pass undefined as the old value when it's changed for the first time
              q === be ? void 0 : de && q[0] === be ? [] : q,
              w
            ];
            a ? a(t, 3, he) : (
              // @ts-expect-error
              t(...he)
            ), q = F;
          } finally {
            Y = Me;
          }
        }
      } else
        l.run();
  };
  return c && c(se), l = new Sn(u), l.scheduler = o ? () => o(se, !1) : se, w = (g) => Gn(g, !1, l), p = l.onStop = () => {
    const g = Oe.get(l);
    if (g) {
      if (a)
        a(g, 4);
      else
        for (const F of g) F();
      Oe.delete(l);
    }
  }, E.NODE_ENV !== "production" && (l.onTrack = n.onTrack, l.onTrigger = n.onTrigger), t ? s ? se(!0) : q = l.run() : o ? o(se.bind(null, !0), !0) : l.run(), k.pause = l.pause.bind(l), k.resume = l.resume.bind(l), k.stop = k, k;
}
function B(e, t = 1 / 0, n) {
  if (t <= 0 || !y(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, R(e))
    B(e.value, t, n);
  else if (b(e))
    for (let s = 0; s < e.length; s++)
      B(e[s], t, n);
  else if (Ot(e) || G(e))
    e.forEach((s) => {
      B(s, t, n);
    });
  else if (vt(e)) {
    for (const s in e)
      B(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && B(e[s], t, n);
  }
  return e;
}
var _ = {};
const X = [];
function Xn(e) {
  X.push(e);
}
function Zn() {
  X.pop();
}
let Ke = !1;
function S(e, ...t) {
  if (Ke) return;
  Ke = !0, Ce();
  const n = X.length ? X[X.length - 1].component : null, s = n && n.appContext.config.warnHandler, r = kn();
  if (s)
    $e(
      s,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((i) => {
          var o, c;
          return (c = (o = i.toString) == null ? void 0 : o.call(i)) != null ? c : JSON.stringify(i);
        }).join(""),
        n && n.proxy,
        r.map(
          ({ vnode: i }) => `at <${ln(n, i.type)}>`
        ).join(`
`),
        r
      ]
    );
  else {
    const i = [`[Vue warn]: ${e}`, ...t];
    r.length && i.push(`
`, ...er(r)), console.warn(...i);
  }
  Ie(), Ke = !1;
}
function kn() {
  let e = X[X.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const s = e.component && e.component.parent;
    e = s && s.vnode;
  }
  return t;
}
function er(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...tr(n));
  }), t;
}
function tr({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, r = ` at <${ln(
    e.component,
    e.type,
    s
  )}`, i = ">" + n;
  return e.props ? [r, ...nr(e.props), i] : [r + i];
}
function nr(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...Bt(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Bt(e, t, n) {
  return P(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : R(t) ? (t = Bt(e, h(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : O(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = h(t), n ? t : [`${e}=`, t]);
}
const Ut = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function $e(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    at(r, t, n);
  }
}
function Jt(e, t, n, s) {
  if (O(e)) {
    const r = $e(e, t, n, s);
    return r && hn(r) && r.catch((i) => {
      at(i, t, n);
    }), r;
  }
  if (b(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(Jt(e[i], t, n, s));
    return r;
  } else _.NODE_ENV !== "production" && S(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function at(e, t, n, s = !0) {
  const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || I;
  if (t) {
    let c = t.parent;
    const a = t.proxy, f = _.NODE_ENV !== "production" ? Ut[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; c; ) {
      const d = c.ec;
      if (d) {
        for (let l = 0; l < d.length; l++)
          if (d[l](e, a, f) === !1)
            return;
      }
      c = c.parent;
    }
    if (i) {
      Ce(), $e(i, null, 10, [
        e,
        a,
        f
      ]), Ie();
      return;
    }
  }
  rr(e, n, r, s, o);
}
function rr(e, t, n, s = !0, r = !1) {
  if (_.NODE_ENV !== "production") {
    const i = Ut[t];
    if (n && Xn(n), S(`Unhandled error${i ? ` during execution of ${i}` : ""}`), n && Zn(), s)
      throw e;
    console.error(e);
  } else {
    if (r)
      throw e;
    console.error(e);
  }
}
const $ = [];
let H = -1;
const re = [];
let z = null, te = 0;
const qt = /* @__PURE__ */ Promise.resolve();
let xe = null;
const sr = 100;
function ir(e) {
  const t = xe || qt;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function or(e) {
  let t = H + 1, n = $.length;
  for (; t < n; ) {
    const s = t + n >>> 1, r = $[s], i = pe(r);
    i < e || i === e && r.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function ut(e) {
  if (!(e.flags & 1)) {
    const t = pe(e), n = $[$.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= pe(n) ? $.push(e) : $.splice(or(t), 0, e), e.flags |= 1, Yt();
  }
}
function Yt() {
  xe || (xe = qt.then(Qt));
}
function Gt(e) {
  b(e) ? re.push(...e) : z && e.id === -1 ? z.splice(te + 1, 0, e) : e.flags & 1 || (re.push(e), e.flags |= 1), Yt();
}
function cr(e) {
  if (re.length) {
    const t = [...new Set(re)].sort(
      (n, s) => pe(n) - pe(s)
    );
    if (re.length = 0, z) {
      z.push(...t);
      return;
    }
    for (z = t, _.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), te = 0; te < z.length; te++) {
      const n = z[te];
      _.NODE_ENV !== "production" && Xt(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    z = null, te = 0;
  }
}
const pe = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Qt(e) {
  _.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = _.NODE_ENV !== "production" ? (n) => Xt(e, n) : ce;
  try {
    for (H = 0; H < $.length; H++) {
      const n = $[H];
      if (n && !(n.flags & 8)) {
        if (_.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), $e(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; H < $.length; H++) {
      const n = $[H];
      n && (n.flags &= -2);
    }
    H = -1, $.length = 0, cr(e), xe = null, ($.length || re.length) && Qt(e);
  }
}
function Xt(e, t) {
  const n = e.get(t) || 0;
  if (n > sr) {
    const s = t.i, r = s && cn(s.type);
    return at(
      `Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
const ze = /* @__PURE__ */ new Map();
_.NODE_ENV !== "production" && (Te().__VUE_HMR_RUNTIME__ = {
  createRecord: Le(lr),
  rerender: Le(ar),
  reload: Le(ur)
});
const ye = /* @__PURE__ */ new Map();
function lr(e, t) {
  return ye.has(e) ? !1 : (ye.set(e, {
    initialDef: ve(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function ve(e) {
  return an(e) ? e.__vccOpts : e;
}
function ar(e, t) {
  const n = ye.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, ve(s.type).render = t), s.renderCache = [], s.update();
  }));
}
function ur(e, t) {
  const n = ye.get(e);
  if (!n) return;
  t = ve(t), mt(n.initialDef, t);
  const s = [...n.instances];
  for (let r = 0; r < s.length; r++) {
    const i = s[r], o = ve(i.type);
    let c = ze.get(o);
    c || (o !== n.initialDef && mt(o, t), ze.set(o, c = /* @__PURE__ */ new Set())), c.add(i), i.appContext.propsCache.delete(i.type), i.appContext.emitsCache.delete(i.type), i.appContext.optionsCache.delete(i.type), i.ceReload ? (c.add(i), i.ceReload(t.styles), c.delete(i)) : i.parent ? ut(() => {
      i.parent.update(), c.delete(i);
    }) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), i.root.ce && i !== i.root && i.root.ce._removeChildStyle(o);
  }
  Gt(() => {
    ze.clear();
  });
}
function mt(e, t) {
  T(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Le(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (s) {
      console.error(s), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let W = null, fr = null;
const pr = (e) => e.__isTeleport;
function Zt(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Zt(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
Te().requestIdleCallback;
Te().cancelIdleCallback;
const dr = Symbol.for("v-ndc"), Qe = (e) => e ? Kr(e) ? zr(e) : Qe(e.parent) : null, ue = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ T(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => _.NODE_ENV !== "production" ? me(e.props) : e.props,
    $attrs: (e) => _.NODE_ENV !== "production" ? me(e.attrs) : e.attrs,
    $slots: (e) => _.NODE_ENV !== "production" ? me(e.slots) : e.slots,
    $refs: (e) => _.NODE_ENV !== "production" ? me(e.refs) : e.refs,
    $parent: (e) => Qe(e.parent),
    $root: (e) => Qe(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => gr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      ut(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = ir.bind(e.proxy)),
    $watch: (e) => Dr.bind(e)
  })
), hr = (e) => e === "_" || e === "$", Be = (e, t) => e !== I && !e.__isScriptSetup && N(e, t), _r = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: r, props: i, accessCache: o, type: c, appContext: a } = e;
    if (_.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let f;
    if (t[0] !== "$") {
      const p = o[t];
      if (p !== void 0)
        switch (p) {
          case 1:
            return s[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if (Be(s, t))
          return o[t] = 1, s[t];
        if (r !== I && N(r, t))
          return o[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (f = e.propsOptions[0]) && N(f, t)
        )
          return o[t] = 3, i[t];
        if (n !== I && N(n, t))
          return o[t] = 4, n[t];
        o[t] = 0;
      }
    }
    const d = ue[t];
    let l, u;
    if (d)
      return t === "$attrs" ? x(e.attrs, "get", "") : _.NODE_ENV !== "production" && t === "$slots" && x(e, "get", t), d(e);
    if (
      // css module (injected by vue-loader)
      (l = c.__cssModules) && (l = l[t])
    )
      return l;
    if (n !== I && N(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      u = a.config.globalProperties, N(u, t)
    )
      return u[t];
    _.NODE_ENV !== "production" && W && (!P(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (r !== I && hr(t[0]) && N(r, t) ? S(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === W && S(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: i } = e;
    return Be(r, t) ? (r[t] = n, !0) : _.NODE_ENV !== "production" && r.__isScriptSetup && N(r, t) ? (S(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : s !== I && N(s, t) ? (s[t] = n, !0) : N(e.props, t) ? (_.NODE_ENV !== "production" && S(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (_.NODE_ENV !== "production" && S(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (_.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(i, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: i }
  }, o) {
    let c;
    return !!n[o] || e !== I && N(e, o) || Be(t, o) || (c = i[0]) && N(c, o) || N(s, o) || N(ue, o) || N(r.config.globalProperties, o);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : N(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
_.NODE_ENV !== "production" && (_r.ownKeys = (e) => (S(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function bt(e) {
  return b(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function gr(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: o }
  } = e.appContext, c = i.get(t);
  let a;
  return c ? a = c : !r.length && !n && !s ? a = t : (a = {}, r.length && r.forEach(
    (f) => De(a, f, o, !0)
  ), De(a, t, o)), y(t) && i.set(t, a), a;
}
function De(e, t, n, s = !1) {
  const { mixins: r, extends: i } = t;
  i && De(e, i, n, !0), r && r.forEach(
    (o) => De(e, o, n, !0)
  );
  for (const o in t)
    if (s && o === "expose")
      _.NODE_ENV !== "production" && S(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const c = mr[o] || n && n[o];
      e[o] = c ? c(e[o], t[o]) : t[o];
    }
  return e;
}
const mr = {
  data: Et,
  props: wt,
  emits: wt,
  // objects
  methods: oe,
  computed: oe,
  // lifecycle
  beforeCreate: v,
  created: v,
  beforeMount: v,
  mounted: v,
  beforeUpdate: v,
  updated: v,
  beforeDestroy: v,
  beforeUnmount: v,
  destroyed: v,
  unmounted: v,
  activated: v,
  deactivated: v,
  errorCaptured: v,
  serverPrefetch: v,
  // assets
  components: oe,
  directives: oe,
  // watch
  watch: Er,
  // provide / inject
  provide: Et,
  inject: br
};
function Et(e, t) {
  return t ? e ? function() {
    return T(
      O(e) ? e.call(this, this) : e,
      O(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function br(e, t) {
  return oe(Nt(e), Nt(t));
}
function Nt(e) {
  if (b(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function v(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function oe(e, t) {
  return e ? T(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function wt(e, t) {
  return e ? b(e) && b(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : T(
    /* @__PURE__ */ Object.create(null),
    bt(e),
    bt(t ?? {})
  ) : t;
}
function Er(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = T(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = v(e[s], t[s]);
  return n;
}
let Nr = null;
function wr(e, t, n = !1) {
  const s = Ae || W;
  if (s || Nr) {
    const r = s ? s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && O(t) ? t.call(s && s.proxy) : t;
    _.NODE_ENV !== "production" && S(`injection "${String(e)}" not found.`);
  } else _.NODE_ENV !== "production" && S("inject() can only be used inside setup() or functional components.");
}
const Sr = {}, kt = (e) => Object.getPrototypeOf(e) === Sr, Or = Tr, xr = Symbol.for("v-scx"), yr = () => {
  {
    const e = wr(xr);
    return e || _.NODE_ENV !== "production" && S(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function vr(e, t, n = I) {
  const { immediate: s, deep: r, flush: i, once: o } = n;
  _.NODE_ENV !== "production" && !t && (s !== void 0 && S(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && S(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && S(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const c = T({}, n);
  _.NODE_ENV !== "production" && (c.onWarn = S);
  const a = t && s || !t && i !== "post";
  let f;
  if (Ze) {
    if (i === "sync") {
      const p = yr();
      f = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!a) {
      const p = () => {
      };
      return p.stop = ce, p.resume = ce, p.pause = ce, p;
    }
  }
  const d = Ae;
  c.call = (p, w, C) => Jt(p, d, w, C);
  let l = !1;
  i === "post" ? c.scheduler = (p) => {
    Or(p, d && d.suspense);
  } : i !== "sync" && (l = !0, c.scheduler = (p, w) => {
    w ? p() : ut(p);
  }), c.augmentJob = (p) => {
    t && (p.flags |= 4), l && (p.flags |= 2, d && (p.id = d.uid, p.i = d));
  };
  const u = Qn(e, t, c);
  return Ze && (f ? f.push(u) : a && u()), u;
}
function Dr(e, t, n) {
  const s = this.proxy, r = P(e) ? e.includes(".") ? Rr(s, e) : () => s[e] : e.bind(s, s);
  let i;
  O(t) ? i = t : (i = t.handler, n = t);
  const o = Wr(this), c = vr(r, i.bind(s), n);
  return o(), c;
}
function Rr(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++)
      s = s[n[r]];
    return s;
  };
}
const Vr = (e) => e.__isSuspense;
function Tr(e, t) {
  t && t.pendingBranch ? b(e) ? t.effects.push(...e) : t.effects.push(e) : Gt(e);
}
const en = Symbol.for("v-fgt"), Cr = Symbol.for("v-txt"), Ir = Symbol.for("v-cmt"), Ee = [];
let A = null;
function tn(e = !1) {
  Ee.push(A = e ? null : []);
}
function $r() {
  Ee.pop(), A = Ee[Ee.length - 1] || null;
}
function Pr(e) {
  return e.dynamicChildren = A || fn, $r(), A && A.push(e), e;
}
function nn(e, t, n, s, r, i) {
  return Pr(
    Pe(
      e,
      t,
      n,
      s,
      r,
      i,
      !0
    )
  );
}
function Ar(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const Mr = (...e) => sn(
  ...e
), rn = ({ key: e }) => e ?? null, Ne = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? P(e) || R(e) || O(e) ? { i: W, r: e, k: t, f: !!n } : e : null);
function Pe(e, t = null, n = null, s = 0, r = null, i = e === en ? 0 : 1, o = !1, c = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && rn(t),
    ref: t && Ne(t),
    scopeId: fr,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: W
  };
  return c ? (pt(a, n), i & 128 && e.normalize(a)) : n && (a.shapeFlag |= P(n) ? 8 : 16), _.NODE_ENV !== "production" && a.key !== a.key && S("VNode created with invalid key (NaN). VNode type:", a.type), // avoid a block node from tracking itself
  !o && // has current parent block
  A && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && A.push(a), a;
}
const Fr = _.NODE_ENV !== "production" ? Mr : sn;
function sn(e, t = null, n = null, s = 0, r = null, i = !1) {
  if ((!e || e === dr) && (_.NODE_ENV !== "production" && !e && S(`Invalid vnode type when creating vnode: ${e}.`), e = Ir), Ar(e)) {
    const c = Re(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && pt(c, n), !i && A && (c.shapeFlag & 6 ? A[A.indexOf(e)] = c : A.push(c)), c.patchFlag = -2, c;
  }
  if (an(e) && (e = e.__vccOpts), t) {
    t = jr(t);
    let { class: c, style: a } = t;
    c && !P(c) && (t.class = tt(c)), y(a) && (Se(a) && !b(a) && (a = T({}, a)), t.style = et(a));
  }
  const o = P(e) ? 1 : Vr(e) ? 128 : pr(e) ? 64 : y(e) ? 4 : O(e) ? 2 : 0;
  return _.NODE_ENV !== "production" && o & 4 && Se(e) && (e = h(e), S(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Pe(
    e,
    t,
    n,
    s,
    r,
    o,
    i,
    !0
  );
}
function jr(e) {
  return e ? Se(e) || kt(e) ? T({}, e) : e : null;
}
function Re(e, t, n = !1, s = !1) {
  const { props: r, ref: i, patchFlag: o, children: c, transition: a } = e, f = t ? Hr(r || {}, t) : r, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && rn(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? b(i) ? i.concat(Ne(t)) : [i, Ne(t)] : Ne(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: _.NODE_ENV !== "production" && o === -1 && b(c) ? c.map(on) : c,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== en ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: a,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Re(e.ssContent),
    ssFallback: e.ssFallback && Re(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && s && Zt(
    d,
    a.clone(d)
  ), d;
}
function on(e) {
  const t = Re(e);
  return b(e.children) && (t.children = e.children.map(on)), t;
}
function ft(e = " ", t = 0) {
  return Fr(Cr, null, e, t);
}
function pt(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (b(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), pt(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !kt(t) ? t._ctx = W : r === 3 && W && (W.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else O(t) ? (t = { default: t, _ctx: W }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [ft(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Hr(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = tt([t.class, s.class]));
      else if (r === "style")
        t.style = et([t.style, s.style]);
      else if (pn(r)) {
        const i = t[r], o = s[r];
        o && i !== o && !(b(i) && i.includes(o)) && (t[r] = i ? [].concat(i, o) : o);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
let Ae = null, Xe;
{
  const e = Te(), t = (n, s) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(s), (i) => {
      r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
    };
  };
  Xe = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Ae = n
  ), t(
    "__VUE_SSR_SETTERS__",
    (n) => Ze = n
  );
}
const Wr = (e) => {
  const t = Ae;
  return Xe(e), e.scope.on(), () => {
    e.scope.off(), Xe(t);
  };
};
function Kr(e) {
  return e.vnode.shapeFlag & 4;
}
let Ze = !1;
function zr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Yn(Ln(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in ue)
        return ue[n](e);
    },
    has(t, n) {
      return n in t || n in ue;
    }
  })) : e.proxy;
}
const Lr = /(?:^|[-_])(\w)/g, Br = (e) => e.replace(Lr, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function cn(e, t = !0) {
  return O(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function ln(e, t, n = !1) {
  let s = cn(t);
  if (!s && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (s = r[1]);
  }
  if (!s && e && e.parent) {
    const r = (i) => {
      for (const o in i)
        if (i[o] === t)
          return o;
    };
    s = r(
      e.components || e.parent.type.components
    ) || r(e.appContext.components);
  }
  return s ? Br(s) : n ? "App" : "Anonymous";
}
function an(e) {
  return O(e) && "__vccOpts" in e;
}
function Ur() {
  if (_.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, s = { style: "color:#eb2f96" }, r = {
    __vue_custom_formatter: !0,
    header(l) {
      return y(l) ? l.__isVue ? ["div", e, "VueInstance"] : R(l) ? [
        "div",
        {},
        ["span", e, d(l)],
        "<",
        // avoid debugger accessing value affecting behavior
        c("_value" in l ? l._value : l),
        ">"
      ] : ne(l) ? [
        "div",
        {},
        ["span", e, V(l) ? "ShallowReactive" : "Reactive"],
        "<",
        c(l),
        `>${K(l) ? " (readonly)" : ""}`
      ] : K(l) ? [
        "div",
        {},
        ["span", e, V(l) ? "ShallowReadonly" : "Readonly"],
        "<",
        c(l),
        ">"
      ] : null : null;
    },
    hasBody(l) {
      return l && l.__isVue;
    },
    body(l) {
      if (l && l.__isVue)
        return [
          "div",
          {},
          ...i(l.$)
        ];
    }
  };
  function i(l) {
    const u = [];
    l.type.props && l.props && u.push(o("props", h(l.props))), l.setupState !== I && u.push(o("setup", l.setupState)), l.data !== I && u.push(o("data", h(l.data)));
    const p = a(l, "computed");
    p && u.push(o("computed", p));
    const w = a(l, "inject");
    return w && u.push(o("injected", w)), u.push([
      "div",
      {},
      [
        "span",
        {
          style: s.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: l }]
    ]), u;
  }
  function o(l, u) {
    return u = T({}, u), Object.keys(u).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        l
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(u).map((p) => [
          "div",
          {},
          ["span", s, p + ": "],
          c(u[p], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(l, u = !0) {
    return typeof l == "number" ? ["span", t, l] : typeof l == "string" ? ["span", n, JSON.stringify(l)] : typeof l == "boolean" ? ["span", s, l] : y(l) ? ["object", { object: u ? h(l) : l }] : ["span", n, String(l)];
  }
  function a(l, u) {
    const p = l.type;
    if (O(p))
      return;
    const w = {};
    for (const C in l.ctx)
      f(p, C, u) && (w[C] = l.ctx[C]);
    return w;
  }
  function f(l, u, p) {
    const w = l[p];
    if (b(w) && w.includes(u) || y(w) && u in w || l.extends && f(l.extends, u, p) || l.mixins && l.mixins.some((C) => f(C, u, p)))
      return !0;
  }
  function d(l) {
    return V(l) ? "ShallowRef" : l.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
var Jr = {};
function qr() {
  Ur();
}
Jr.NODE_ENV !== "production" && qr();
const Yr = {
  __name: "A",
  setup(e) {
    const t = Lt("A");
    return (n, s) => (tn(), nn("main", null, [
      s[0] || (s[0] = Pe("h1", null, "A", -1)),
      ft(" " + nt(t.value), 1)
    ]));
  }
}, Gr = {
  __name: "B",
  setup(e) {
    const t = Lt("B");
    return (n, s) => (tn(), nn("main", null, [
      s[0] || (s[0] = Pe("h1", null, "B", -1)),
      ft(" " + nt(t.value), 1)
    ]));
  }
};
export {
  Yr as A,
  Gr as B
};
