"use strict";
exports.__esModule = true;
exports.user = void 0;
var faker_1 = require("@faker-js/faker");
var user = /** @class */ (function () {
    function user() {
        this.name = faker_1.faker.name.firstName();
        this.location = {
            long: parseFloat(faker_1.faker.address.longitude()),
            lat: parseFloat(faker_1.faker.address.latitude())
        };
    }
    return user;
}());
exports.user = user;
