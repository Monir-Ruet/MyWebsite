import { Component, OnInit } from '@angular/core';
import { first, map, of } from 'rxjs';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service:HomeService) { }

  ngOnInit(): void {}
}
