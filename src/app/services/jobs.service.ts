import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Job } from '../models';
import 'rxjs/add/operator/map';


@Injectable()
export default class JobsService {

JOBS_JSON = 'https://red-wdp-api.herokuapp.com/api/mars/jobs';

  constructor(private http: Http) { }

  getJobs(): Observable<Job[]> {
      return this.http.get(this.JOBS_JSON)
              .map((res: Response) => res.json().jobs);
        }


  }



