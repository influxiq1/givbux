import { Component, OnInit,TemplateRef } from '@angular/core';
import {FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl,FormControl} from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Commonservices} from '../app.commonservices' ;
import { HttpClient } from '@angular/common/http';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
  selector: 'app-customerservicelist',
  templateUrl: './customerservicelist.component.html',
  styleUrls: ['./customerservicelist.component.css'],
  providers: [Commonservices]
})
export class CustomerservicelistComponent implements OnInit {
  public serverurl;
  public customertlist: any = [];
    modalRef:BsModalRef;
    private customerid: any;
    public selectedadminid: any;
    public message: any;

  constructor(private router: Router, private _commonservices: Commonservices, private _http: HttpClient, private modalservice:BsModalService) {
    this.serverurl=_commonservices.url;
  }

  ngOnInit() {

    this.getcustomerservicelist();
  }
 getcustomerservicelist(){

     let link=this.serverurl+'customerservicelist?';
     this._http.get(link)
         .subscribe(res => {
           let result;
           result = res;
           this.customertlist = [];
           this.customertlist = result.res;
           console.log(this.customertlist);
         }, error => {
           console.log('Oooops! error');
         });

   }
    deletecustomer(id:any,template:TemplateRef<any>){
        this.modalRef = this.modalservice.show(template);
        this.selectedadminid=id;
    }
    delete(id:any,template:TemplateRef<any>){
        this.message='Customer Deleted Successfully!';
        let link = this.serverurl + 'deleteuser';
        let data={id:this.selectedadminid};
        this.modalRef.hide();

        this._http.post(link,data)
            .subscribe(res => {
                let result;
                result = res;
                if(result.status=='success'){
                    setTimeout(()=> {
                        this.modalRef = this.modalservice.show(template);
                        this.getcustomerservicelist();
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
