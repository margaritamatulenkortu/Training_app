(this["webpackJsonpcode-sandbox-examples"] = this["webpackJsonpcode-sandbox-examples"] || []).push([[0], {
    12: function (e, a, t) {
    }, 13: function (e, a, t) {
    }, 14: function (e, a, t) {
        "use strict";
        t.r(a);
        var n = t(0), r = t.n(n), s = t(2), l = t.n(s), c = (t(12), t(3)), o = t(4), m = t(6), i = t(5),
            u = (t(13), function (e) {
                return r.a.createElement("div", null, r.a.createElement("p", null, " I am ", e.name, " and I am ", e.age, " years old "), r.a.createElement("p", null, e.children))
            }), p = function (e) {
                Object(m.a)(t, e);
                var a = Object(i.a)(t);

                function t() {
                    var e;
                    Object(c.a)(this, t);
                    for (var n = arguments.length, r = new Array(n), s = 0; s < n; s++) r[s] = arguments[s];
                    return (e = a.call.apply(a, [this].concat(r))).state = {
                        persons: [{
                            name: "Max",
                            age: 22
                        }, {name: "Maxis", age: 21}, {name: "Margarita", age: 20}]
                    }, e
                }

                return Object(o.a)(t, [{
                    key: "render", value: function () {
                        return r.a.createElement("div", {className: "App"}, r.a.createElement("h1", null, " Hi, React!"), r.a.createElement("p", null, " is it working?"), r.a.createElement("button", null, "Swich name"), r.a.createElement(u, {
                            name: this.state.persons[0].name,
                            age: this.state.persons[0].age
                        }, " My hobby: voleyball "), r.a.createElement(u, {
                            name: this.state.persons[1].name,
                            age: this.state.persons[1].age
                        }), r.a.createElement(u, {name: this.state.persons[2].name, age: this.state.persons[2].age}))
                    }
                }]), t
            }(n.Component);
        l.a.render(r.a.createElement(p, null), document.getElementById("root"))
    }, 7: function (e, a, t) {
        e.exports = t(14)
    }
}, [[7, 1, 2]]]);
//# sourceMappingURL=main.fcc55465.chunk.js.map