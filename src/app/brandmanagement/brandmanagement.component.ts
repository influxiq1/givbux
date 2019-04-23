import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl,FormControl} from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Commonservices} from '../app.commonservices' ;
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-brandmanagement',
  templateUrl: './brandmanagement.component.html',
  styleUrls: ['./brandmanagement.component.css'],
  providers: [Commonservices],
})
export class BrandmanagementComponent implements OnInit {
  public dataForm: FormGroup;
  public es;
  public serverurl;
  public image:any;
  public imagename: any;
  private selectedFile: any;
  public imageserror: any;
  public id:any=0;



  constructor(es: FormBuilder, private router: Router,  private _commonservices: Commonservices, private _http: HttpClient ,public route:ActivatedRoute) {
    this.es = es;                                     //es name variable declare along with (this.)
    this.serverurl = _commonservices.url;
    this.dataForm = this.es.group({
      brandname: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, BrandmanagementComponent.customValidator])],
      paragraph: ['',Validators.required],
      image: ['',Validators.required],
      mobileno: ['', Validators.required],
      status: ['', Validators.required],
      id: ['']
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
      if(this.id!=null){
        this.getdetails();
      }

    });

  }
  getdetails(){
    let link = this.serverurl + 'branddetails';
    let data = {_id : this.id};
    this._http.post(link, data)
        .subscribe(res => {
          let result: any;
          result = res;
          console.log(result);
          if (result.status == 'success' && typeof(result.item) != 'undefined') {
            // console.log(result);
            let userdet = result.item[0];
            this.dataForm = this.es.group({
              brandname: [userdet.brandname, Validators.required],
              email: [userdet.email,Validators.compose([Validators.required, BrandmanagementComponent.customValidator])],
              paragraph: [userdet.paragraph,Validators.required],
              image: [userdet.image,Validators.required],
              mobileno: [userdet.mobileno,Validators.required],
              status: [userdet.status,Validators.required],
              id: [userdet._id]
            });
            this.image = this._commonservices.filepathurl + userdet.image;
            //this.imagename = userdet.image;
            //this.dataForm.controls['image'].patchValue(userdet.image);

          }/*else {
            this.router.navigate(['/brandlist']);
          }*/

        }, error => {
          console.log('Ooops');
        });
  }


  onFileChanged(event) {
    console.log('onfilechanged called!!!');
    this.selectedFile = event.target.files[0];
    const uploadData = new FormData();
    uploadData.append('file', this.selectedFile);

    this._http.post(this._commonservices.uploadurl, uploadData)
        .subscribe(event => {
          let res: any = {};
          res = event;
          console.log(res);
          if(res.error_code == 0){
            this.image = this._commonservices.filepathurl + res.filename;
            this.imagename = res.filename;
            this.dataForm.controls['image'].patchValue(res.filename);
          }
        });
  }
  static customValidator(inputEmail): any{
    if(inputEmail.pristine){
      return null;
    }
    inputEmail.markAsTouched();
    let filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    console.log( String(inputEmail.value).search (filter) != -1);
    if(String(inputEmail.value).search (filter) == -1){
      console.log('valid');
      return{
        invalidEmail:true
      };
    }
  }
  dosubmit(formval) {
    let x: any;
    for (x in this.dataForm.controls) {
      this.dataForm.controls[x].markAsTouched();
     // console.log(this.dataForm.controls[x].valid());
    }


    if (this.dataForm.valid )
    {
      var link;
      let data = {
        brandname: formval.brandname,
        email: formval.email,
        paragraph: formval.paragraph,
        image: formval.image,
        mobileno: formval.mobileno,
        status: formval.status,
        id: formval.id,
      };
      if (formval.id != null && formval.id!='') {
        link = this.serverurl + 'editbrand';
        //data.image=formval.image;
      }
      if (formval.id == null || formval.id=='') {

        link = this.serverurl + 'addbrand';
        // data.password=formval.password;
      }
      this._http.post(link, data)
          .subscribe(res => {
            let result :any=res;
            if(result.status == 'success'){
              this.router.navigate(['/brandlist']);
            }

          }, error => {
            console.log('Oooops!');
          });
    }

  }

}
