"use strict";
exports.__esModule = true;
exports.company = void 0;
var faker_1 = require("@faker-js/faker");
var company = /** @class */ (function () {
    function company() {
        this.name = faker_1.faker.company.name();
        this.phrase = faker_1.faker.company.catchPhrase();
        this.location =
            {
                lat: parseFloat(faker_1.faker.address.longitude()),
                long: parseFloat(faker_1.faker.address.latitude())
            };
    }
    ;
    return company;
}());
exports.company = company;
