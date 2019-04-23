import { Component, OnInit,TemplateRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Commonservices} from '../app.commonservices' ;
import { HttpClient } from '@angular/common/http';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-offerlist',
  templateUrl: './offerlist.component.html',
  styleUrls: ['./offerlist.component.css'],
  providers: [Commonservices]
})
export class OfferlistComponent implements OnInit {
  public serverurl;
  public offerlist:any[];
  public message:any;
  modalRef:BsModalRef;
  public brandlist:any[];
  public selectedadminid:any;

  constructor(public routers:Router,public _commonservices:Commonservices,public _http:HttpClient,public modalservice:BsModalService) {
   this.serverurl= _commonservices.url;
  }

  ngOnInit() {
    this.getofferlist();
    this.getbrandlist();
  }
  getbrandlist(){
      let link=this.serverurl+'brandlist?';
      this._http.get(link)
          .subscribe(res=>{
              let result;
              result=res;
              this.brandlist=[];
              this.brandlist=result.res;
              // console.log(this.brandlist);
          })
  }
getofferlist(){
    let link=this.serverurl+'offerlist';
  this._http.get(link)
      .subscribe(res => {
        let result;
        result = res;
        this.offerlist = [];
        this.offerlist = result.res;
        console.log(this.offerlist);
      }, error => {
        console.log('Oooops! error');
      });

}
  deleteoffer(id:any,template:TemplateRef<any>){
    this.modalRef = this.modalservice.show(template);
    this.selectedadminid=id;
  }
delete(id:any,template:TemplateRef<any>){
  this.message='Offer Delete Successfully!!';
  let link=this.serverurl+'deleteoffer';
  let data={id:this.selectedadminid};
  this.modalRef.hide();
  this._http.post(link,data)
      .subscribe(res => {
        let result;
        result = res;
        if(result.status=='success'){
          setTimeout(()=> {
            this.modalRef = this.modalservice.show(template);
            this.getofferlist();
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
    getbrandname(brandid){
      let i:any;
        // console.log(this.brandlist);

        for(i in this.brandlist){
          // console.log(this.brandlist[i]._id);
         if(this.brandlist[i]._id==brandid)
         {
             // console.log(this.brandlist[i].brandname);
             return this.brandlist[i].brandname;
         }
      }
    }
}
