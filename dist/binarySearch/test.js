var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var newUser = function (user) {
    var id = Math.random().toString(16).replace('.', "");
    return __assign({ id: id }, user);
};
var user = {
    name: "Leandro",
    email: "leandroliberio@hotmail.com",
    age: 23,
    isAdmin: false
};
var result = newUser(user);
console.log(result);
