import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl,FormControl} from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Commonservices} from '../app.commonservices' ;
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
// import {type} from "os";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[Commonservices]

})
export class DashboardComponent implements OnInit {
  public dataForm: FormGroup;
  public es;
  public serverurl;
  public cookie;
  public showLoader;
  public type:any ;


  constructor(es: FormBuilder, private router: Router, private route: ActivatedRoute,  private _commonservices: Commonservices, private _http: HttpClient,cookie:CookieService)  {

    this.es =es ;
    this.serverurl =_commonservices;
    this.cookie=cookie;
    this.type=this.cookie.get('usertype');
    console.log('type');
    console.log(this.type);

  }
  logout(){
    this.cookie.deleteAll();
    this.router.navigate(['/login']);
  }

  ngOnInit() {

  }

}
