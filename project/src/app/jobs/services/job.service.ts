import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, mergeMap } from 'rxjs';
import { environment } from 'src/environments/environments';
import { job } from '../models/job';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http:HttpClient) { }

  getJobs(page: number, limit: number, query?: string){
    let params = new HttpParams()
    .set('page', page.toString())
    .set('limit', limit.toString());

     // If a query is provided, add it to the parameters
     if (query) {
      params = params.set('search', query);
    }
    return this.http.get(environment.baseurl +'/jobseeker/jobs',{params})
  }

  getAppliedJobs() {
    return this.http.get<any[]>(environment.baseurl +'/applications')
  }

  getJobsById(id: string) {
    return this.http.get<any[]>(environment.baseurl +'/jobs/'+id)
  }

}
