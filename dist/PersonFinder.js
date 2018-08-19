"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxios_1 = require("rxios");
const xml2js_1 = require("xml2js");
const operators_1 = require("rxjs/operators");
const rxjs_1 = require("rxjs");
const processors_1 = require("xml2js/lib/processors");
const ApiResponse_1 = require("./entities/ApiResponse");
const http = new rxios_1.Rxios({
    baseURL: 'https://www.google.org/personfinder/2018-kerala-flooding/api/',
});
const options = {
    object: false,
    reversible: false,
    coerce: false,
    sanitize: true,
    trim: true,
    arrayNotation: false
};
class PersonFinder {
    search(req, res, name) {
        http.get('search?key=ywktrMPJEfs66cDG&q=' + name)
            .pipe(operators_1.mergeMap(data => {
            console.log("Begore Json Parsing" + data);
            return new rxjs_1.Observable((observer) => {
                xml2js_1.parseString(data, { tagNameProcessors: [processors_1.stripPrefix] }, function (err, result) {
                    console.log("After Json Parsing" + result);
                    observer.next(result);
                    observer.complete();
                });
            });
        })).pipe(operators_1.map(data => {
            console.log("Before mapping" + data);
            return new ApiResponse_1.ApiResponse(true, null, data.pfif.person, new ApiResponse_1.MetaResponse(data.pfif.person.length));
        }))
            .subscribe(response => {
            console.log(response);
            res.status(200).send(response);
        }, err => {
            console.error(err);
            res.status(500).send(err);
        });
    }
}
exports.PersonFinder = PersonFinder;
