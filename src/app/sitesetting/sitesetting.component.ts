import { Component, OnInit,TemplateRef  } from '@angular/core';
import {FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl,FormControl} from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Commonservices} from '../app.commonservices' ;
import { HttpClient } from '@angular/common/http';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
  selector: 'app-sitesetting',
  templateUrl: './sitesetting.component.html',
  styleUrls: ['./sitesetting.component.css'],
  providers: [Commonservices],
})

export class SitesettingComponent implements OnInit {
  public dataForm: FormGroup;
  public es;
  public serverurl;
  modalRef:BsModalRef;
  /*successmodal =false;*/

  constructor(es: FormBuilder, private router: Router, private route: ActivatedRoute,  private _commonservices: Commonservices, private _http: HttpClient,private modalservice:BsModalService) {
    this.es = es;
    this.serverurl = _commonservices.url;
    this.getsitesettings();
  }
  getsitesettings(){
    let link = this.serverurl + 'sitesettings';
    let data = {
      id: '5c34714864cf4e20eedb1051'
    };
    this._http.post(link, data)
        .subscribe(res => {
          let resval:any={};
          resval=res;
          console.log(resval);
          /*this.router.navigate(['/manageadmin']);*/
          this.dataForm.controls['sitename'].patchValue(resval.sitename);
          this.dataForm.controls['email'].patchValue(resval.email);
          this.dataForm.controls['sitekey'].patchValue(resval.sitekey);
          this.dataForm.controls['sitetitle'].patchValue(resval.sitetitle);
        }, error => {
          console.log('Oooops!');
        });

  }

  ngOnInit() {
    this.dataForm = this.es.group({
      sitename: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, SitesettingComponent.customValidator])],
      sitekey: ['', Validators.required],
      sitetitle: ['', Validators.required]
    });
  }
  static customValidator(inputEmail): any{
   // console.log('inputEmail');
   // console.log(inputEmail);
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
  dosubmit(formval,successtemplate: TemplateRef<any>) {
    let x: any;
    for (x in this.dataForm.controls) {
      this.dataForm.controls[x].markAsTouched();
    }
    if (this.dataForm.valid ) {
      let link = this.serverurl + 'updatesitesetting';
      let data = {
        id: '5c34714864cf4e20eedb1051',
        sitename: formval.sitename,
        email: formval.email,
        sitekey: formval.sitekey,
        sitetitle: formval.sitetitle,
      };
      this._http.post(link, data)
          .subscribe(res => {

            let result:any =res;
            if(result.status == 'success'){
              // console.log(successtemplate);
              /*this.successmodal = true;*/
              this.modalRef = this.modalservice.show(successtemplate);


            }
          }, error => {
            console.log('Oooops!');
          });
    }
  }
}
