import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import{Observable} from 'rxjs';
import{ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  user$ :Object;
  userId ;
  userPosts$: Object;
  constructor(private route:ActivatedRoute,private userdata: DataService) {
    this.route.params.subscribe(params=>this.userId = params.id);
   }

  ngOnInit() {
    this.userdata.getUser(this.userId).subscribe(userdata=> this.user$ = userdata);
    this.userdata.getUserPosts(this.userId).subscribe(posts =>this.userPosts$ = posts);
  }

}
