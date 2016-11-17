import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Alien } from '../models';
import 'rxjs/add/operator/map';


@Injectable()
export default class AliensService {

ALIENS_JSON = 'https://red-wdp-api.herokuapp.com/api/mars/aliens';

  constructor(private http: Http) { }

  getAliens(): Observable<Alien[]> {
      return this.http.get(this.ALIENS_JSON)
              .map((res: Response) => res.json().aliens);
        }


  }
