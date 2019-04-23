import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl,FormControl} from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Commonservices} from '../app.commonservices' ;
import { HttpClient } from '@angular/common/http';
//import {Commonservices} from "../app.commonservices";

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
  providers: [Commonservices],
})
export class UserlistComponent implements OnInit {
  public userlist:any=[];
  public serverurl;
  public message:any='';
  /*modalRef:BsModalRef;*/
  /*private selectedadminid: any;*/
  //public userlist;

  constructor(private router: Router,  private _commonservices: Commonservices, private _http: HttpClient) {
    this.serverurl = _commonservices.url;

  }
  ngOnInit() {
    this.getuserlist();
  }

  getuserlist() {
    let link = this.serverurl + 'userlist?'+new Date().getTime();
    this._http.get(link)
        .subscribe(data => {
          let result;
          result = data;
          this.userlist = [];
          this.userlist = result.res;
          console.log(this.userlist);

        }, error => {
          console.log('Oooops!');
        });

  }
}
