import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';
import { job } from '../../models/job';

@Component({
  selector: 'app-alljobs-list',
  templateUrl: './alljobs-list.component.html',
  styleUrls: ['./alljobs-list.component.css']
})
export class AlljobsListComponent implements OnInit {

  jobs: any[] = [];

  currentPage = 1;
  totalPages = 1;
  totalItems = 0;
  itemsPerPage = 5;
  selectedJob: any;
  searchQuery: string = '';
  constructor(private jobService: JobService) { }

  ngOnInit() {
    this.getJobs();
    }

  getJobs(){
    this.jobService.getJobs(this.currentPage, this.itemsPerPage,this.searchQuery
      ).subscribe((jobs) => {
      // this.jobs = jobs;
      console.log(jobs);
      console.log("haiiii" +job);
      this.selectedJob = this.jobs[0];
    })
  }

  viewJobDetail(job: any) {
    this.selectedJob = job;
  }

  
  changePage(pageNumber: number) {
    if (pageNumber >= 1 && pageNumber <= this.totalPages) {
      this.currentPage = pageNumber;
      this.getJobs();
    }
  }




}
