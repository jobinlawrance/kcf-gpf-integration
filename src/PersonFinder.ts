import {Rxios} from "rxios";
import { Request, Response } from "express";
import {parseString} from 'xml2js';
import { map,mergeMap } from "rxjs/operators";
import {Observable} from 'rxjs'
import {stripPrefix} from "xml2js/lib/processors"
import { PersonFinderData } from "./entities/PersonFinderData";

const http = new Rxios({
  // all regular axios request configuration options are valid here
  // check https://github.com/axios/axios#request-config
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

export class PersonFinder {
    public search (req: Request, res: Response,name: String) {
        http.get<string>('/person?key=ywktrMPJEfs66cDG&role=seek&query_name='+name)
        .pipe(mergeMap<string,PersonFinderData>(data => {
           return new Observable<String>((observer) => {

              parseString(data,{tagNameProcessors: [stripPrefix]}, function(err,result){
                //Extract the value from the data element
                observer.next(result);
                observer.complete();
              });
          });
        })).pipe(map(data => {
          return data.feed.entry
        }))
        // .pipe(map<string, string>(data => {
        //   data.replace(/pfif:/g,'abc');
        //   console.log(data)
        //   return data;
        // }))
        .subscribe(
            response => {
              console.log(response)
              res.status(200).send(response);
            },
            err => {
              // console.error(err);
              res.status(500).send(err);
            }
          );
    }
}