import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private Service:DashboardService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        console.log(params);
      }
    );
    this.Service.getPostall().subscribe((data)=>{
      console.log(data);
    })
  }
  refresh(): void {
    window.location.reload();
  }
}
