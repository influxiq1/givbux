import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl,FormControl} from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Commonservices} from '../app.commonservices' ;
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addoffer',
  templateUrl: './addoffer.component.html',
  styleUrls: ['./addoffer.component.css'],
  providers:[Commonservices]
})
export class AddofferComponent implements OnInit {
  public formbuilder: FormBuilder;
  public dataform: FormGroup;
  public serverurl: any;
  public image: any;
  public imagename: any;
  public imageserror: any;
  public selectedFile: any;
  public brandlist: any = [];
  public id;

  constructor(formbuilder: FormBuilder, public common_service: Commonservices, public router: Router, public _http: HttpClient,public _routes:ActivatedRoute) {

    this.formbuilder = formbuilder;
    this.serverurl = common_service.url;
    this.dataform = this.formbuilder.group(
        {
            offername: ['', Validators.required],
            image: ['', Validators.required],
            description: ['', Validators.required],
            commisionrule: ['', Validators.required],
            brandid: [''],
            id: ['']
        }
    );

  }

    ngOnInit() {
      this._routes.params.subscribe(params => {
          this.id = params['id'];
          console.log(this.id);
          if(this.id!=null){
              this.getofferdetails();
              this.getbrandlist();
          }

      });
  }
//test

    getofferdetails() {
    let link = this.serverurl + 'offerdetail';
    this._http.post(link,{id:this.id})
        .subscribe(res => {
          let result: any = {};
          result = res;
          let offerdetail:any = result.item;
          console.log(offerdetail);
          this.dataform.controls['offername'].patchValue(offerdetail.offername);
          this.dataform.controls['image'].patchValue(offerdetail.image);
          this.dataform.controls['description'].patchValue(offerdetail.description);
          this.dataform.controls['brandid'].patchValue(offerdetail.brandid);
          this.dataform.controls['commisionrule'].patchValue(offerdetail.commisionrule);
          this.dataform.controls['id'].patchValue(offerdetail._id);
            this.image = this.common_service.filepathurl + offerdetail.image;
            console.log(offerdetail);
        })
    }
  getbrandlist(){
      let link=this.serverurl+'brandlist?';
      this._http.get(link)
          .subscribe(res=>{
              let result;
              result=res;
              this.brandlist=[];
              this.brandlist=result.res;
              console.log(this.brandlist);
          }, error => {
              console.log('Oooops! error');
          });
  }
  onFileChanged(event) {
      console.log(event);
    console.log('onfilechanged called!!!');
    this.selectedFile = event.target.files[0];
    const uploadData = new FormData();
    uploadData.append('file', this.selectedFile);
    this._http.post(this.common_service.uploadurl, uploadData)
        .subscribe(event => {
          let res: any = {};
          res = event;
          console.log(res);
          if(res.error_code == 0){
            this.image = this.common_service.filepathurl + res.filename;
            this.imagename = res.filename;
            this.dataform.controls['image'].patchValue(res.filename);
          }
        });
  }

  dosubmit(val) {
    let x: any;
    for (x in this.dataform.controls) {
      this.dataform.controls[x].markAsTouched();
    }
    if (this.dataform.valid){
      // let link = this.serverurl + 'addoffer';
        let link;
      var data={
        offername: val.offername,
        image: val.image,
        description: val.description,
        commisionrule: val.commisionrule,
        brandid: val.brandid,
        id: val.id
      };
      console.log(data);
      console.log(val.id);
        if (val.id != null && val.id!='') {
            link = this.serverurl + 'editoffer';
            console.log(1);
        }
        if (val.id == null || val.id=='') {
            link = this.serverurl + 'addoffer';
            console.log(2);
        }
        if(data!=null){
        this._http.post(link, data)
            .subscribe(res => {
                let result :any=res;
                if(result.status == 'success'){
                    this.router.navigate(['/offerlist']);
                }
            }, error => {
                console.log('Oooops!');
            });
  }
  }
}
}
