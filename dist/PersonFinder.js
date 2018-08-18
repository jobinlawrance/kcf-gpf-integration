"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxios_1 = require("rxios");
const xml2js_1 = require("xml2js");
const operators_1 = require("rxjs/operators");
const rxjs_1 = require("rxjs");
const processors_1 = require("xml2js/lib/processors");
const http = new rxios_1.Rxios({
    baseURL: 'https://google.org/personfinder/2018-kerala-flooding/feeds',
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
        http.get('/person?key=ywktrMPJEfs66cDG&role=seek&query_name=' + name)
            .pipe(operators_1.mergeMap(data => {
            return new rxjs_1.Observable((observer) => {
                xml2js_1.parseString(data, { tagNameProcessors: [processors_1.stripPrefix] }, function (err, result) {
                    observer.next(result);
                    observer.complete();
                });
            });
        })).pipe(operators_1.map(data => {
            return data.feed.entry;
        }))
            .subscribe(response => {
            console.log(response);
            res.status(200).send(response);
        }, err => {
            res.status(500).send(err);
        });
    }
}
exports.PersonFinder = PersonFinder;
