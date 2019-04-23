import { Component, OnInit,TemplateRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Commonservices} from '../app.commonservices' ;
import { HttpClient } from '@angular/common/http';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-brandlist',
  templateUrl: './brandlist.component.html',
  styleUrls: ['./brandlist.component.css'],
  providers: [Commonservices]

})
export class BrandlistComponent implements OnInit {
  public serverurl;
  public brandlist: any[];
  modalRef:BsModalRef;
  private brandid: any;
  public selectedadminid: any;
  public message: any;

  constructor(private router: Router, private _commonservices: Commonservices, private _http: HttpClient, private modalservice:BsModalService) {
    this.serverurl=_commonservices.url;

  }

  ngOnInit() {
    this.getbrandlist();
  }
  getbrandlist(){
    let link=this.serverurl+'brandlist?';
    this._http.get(link)
        .subscribe(res => {
          let result;
          result = res;
          this.brandlist = [];
          this.brandlist = result.res;
          console.log(this.brandlist);
        }, error => {
          console.log('Oooops! error');
        });
  }
  deletebrand(id:any,template:TemplateRef<any>){
    this.modalRef = this.modalservice.show(template);
    this.selectedadminid=id;
  }
  delete(id:any,template:TemplateRef<any>){
    this.message='Brand Deleted Successfully!';
    let link = this.serverurl + 'deletebrand';
    let data={id:this.selectedadminid};
    this.modalRef.hide();

    this._http.post(link,data)
        .subscribe(res => {
          let result;
          result = res;
          if(result.status=='success'){
            setTimeout(()=> {
              this.modalRef = this.modalservice.show(template);
              this.getbrandlist();
            }, 2000);
          }
        }, error => {
          console.log('Oooops!');
        });
     }
  decline(){
    this.message='Declined!';
    this.modalRef.hide();
  }


}
