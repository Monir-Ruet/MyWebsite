import { Component, OnDestroy, OnInit } from '@angular/core';
import { DashboardService, PostStore } from './dashboard.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  constructor(private Service:DashboardService,private route:ActivatedRoute) { }

  ServiceSubscriber:any;
  ngOnInit(): void {
    this.ServiceSubscriber=this.Service.getPostall().subscribe((data)=>{
      this.PostContainer=data;
    })
  }
  // All post
  PostContainer:any;

}