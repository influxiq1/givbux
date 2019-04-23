import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Commonservices} from '../app.commonservices' ;
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
  providers: [Commonservices]
})
export class LogoutComponent implements OnInit {

  constructor(public _commonservices:Commonservices,public router:Router,public cookies:CookieService) {

  }
  logout()
  {
    this.cookies.deleteAll();
    this.router.navigate(['/login']);
  }
  ngOnInit() {
  }

}
