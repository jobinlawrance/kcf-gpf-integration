import {Rxios} from "rxios";
import { Request, Response } from "express";
import {parseString} from 'xml2js';
import { map,mergeMap } from "rxjs/operators";
import {Observable} from 'rxjs'
import {stripPrefix} from "xml2js/lib/processors"
import { PersonFinderData, PersonEntity } from "./entities/PersonFinderData";
import { ApiResponse, MetaResponse } from './entities/ApiResponse'

const http = new Rxios({
  // all regular axios request configuration options are valid here
  // check https://github.com/axios/axios#request-config
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

export class PersonFinder {
    public search (req: Request, res: Response,name: String) {
        http.get<string>('search?key=ywktrMPJEfs66cDG&q='+name)
        .pipe(mergeMap<string,PersonFinderData>(data => {
          console.log("Begore Json Parsing"+data);
           return new Observable<String>((observer) => {
              parseString(data, {tagNameProcessors: [stripPrefix]} , function(err,result){
                //Extract the value from the data element
                console.log("After Json Parsing"+result);
                observer.next(result);
                observer.complete();
              });
          });
        })).pipe(map(data => {
          console.log("Before mapping"+data);
          return new ApiResponse<PersonEntity[]>(true,null,data.pfif.person,new MetaResponse(data.pfif.person.length))
        }))
        .subscribe(
            response => {
              console.log(response)
              res.status(200).send(response);
            },
            err => {
              console.error(err);
              res.status(500).send(err);
            }
          );
    }
}