import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl,FormControl} from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Commonservices} from '../app.commonservices' ;
import { HttpClient } from '@angular/common/http';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css'],
  providers: [Commonservices],
})
export class AddcustomerComponent implements OnInit {
  public dataForm: FormGroup;                       //dataForm creats for new data
  public es;                                       //create a variable
  public serverurl;
  public id:any=0;

  constructor(es: FormBuilder, private router: Router, private route: ActivatedRoute,  private _commonservices: Commonservices, private _http: HttpClient) {
    this.es = es;                                     //es name variable declare along with (this.)
    this.serverurl = _commonservices.url;
  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
      if(this.id!=null){
        this.getdetails();
      }
    });

    console.log('this.id');
    console.log(this.id);
    this.dataForm = this.es.group({
      fname: ['', Validators.required],            //fname 'blank', and create validation
      id: [''],            //fname 'blank', and create validation
      lname: ['', Validators.required],            //lname 'blank', and create validators
      email: ['', Validators.compose([Validators.required, AddcustomerComponent.customValidator])], //email 'blank', and create validators
      //username:['',Validators.required],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15)])], //password 'blank', composing means 1 or more validation create for..
      confirmPassword: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15),
        this.equalToPass('password')])],
      notes: ['', Validators.required],      //address 'blank', validators required
      mobileno: ['', Validators.required]           ///mobileno. 'blank', validators required
    });
  }

  getdetails(){
    let link = this.serverurl + 'details';
    let data = {_id : this.id};
    this._http.post(link, data)
        .subscribe(res => {
          let result: any;
          result = res;
          console.log(result);
          if (result.status == 'success' && typeof(result.item) != 'undefined') {
            // console.log(result);
            let userdet = result.item;
            this.dataForm = this.es.group({
              fname: [userdet.firstname, Validators.required],
              lname: [userdet.lastname,Validators.required],
              email: [userdet.email,Validators.compose([Validators.required, AddcustomerComponent.customValidator])],
              notes: [userdet.notes,Validators.required],
              mobileno: [userdet.mobileno,Validators.required],
              id: [userdet._id]
            });
          }else {
            this.router.navigate(['/customerlist']);
          }

        }, error => {
          console.log('Ooops');
        });
  }
    equalToPass(fieldname): ValidatorFn
    {                                 //password match custom function
      return (control: AbstractControl): { [key: string]: any } => {      ///abstractcontrol function call here with key string any type
        let input = control.value;      //class create here
        console.log('control.value');   //console.log for debugging
        console.log(control.value);
        console.log(control.root.value[fieldname]);
        let isValid = control.root.value[fieldname] == input;       //value valid or not
      //  console.log('isValid');                                     //debugging value valid
        console.log('isValid ' + isValid);                                    //valid debugging console
        if (!isValid)
          return{
            equalTo:true            //this value will be called
          };
      };
    }
  static customValidator(inputEmail): any{              //custom validator function call here for input email
    console.log('inputEmail');
    console.log(inputEmail);
    if(inputEmail.pristine){                           //pristine type validation for email valided
      return null;
    }
    inputEmail.markAsTouched();
    let filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;      //regexp validation
    console.log( String(inputEmail.value).search (filter) != -1);            //string type value with search filter
    if(String(inputEmail.value).search (filter) == -1){                 //value
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
      console.log('this.dataForm.controls[x].valid');
      console.log(this.dataForm.controls[x]);
      console.log(this.dataForm.controls[x].valid);
    }
    if (this.dataForm.valid) {
      console.log('form is valid');
      console.log('formval.id');
      console.log(formval.id);
      let link = '';
      let data:any={};
      data = {
        fname: formval.fname,
        lname: formval.lname,
        email: formval.email,
        notes: formval.notes,
        mobileno: formval.mobileno,
        password:formval.password,
        id: formval.id,
        type: 'customerservice',
      };
      if (formval.id != null && formval.id!='') {
        link = this.serverurl + 'editcustomerservice';

      }
      if (formval.id == null || formval.id=='') {

        link = this.serverurl + 'addcustomer';
        data.password=formval.password;
      }

      //if (formval.id) {
        this._http.post(link, data)
            .subscribe(res => {
              this.router.navigate(['/customerlist']);
            }, error => {
              console.log('Oooops!');
            });
      //}
    }
  }
}