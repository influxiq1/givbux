import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {appRoutingProviders, routing} from 'route';
import {ModalModule} from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {appRoutingProviders,routing} from "../route";
import { LoginComponent } from './login/login.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { AdminfooterComponent } from './adminfooter/adminfooter.component';
import { AdminleftComponent } from './adminleft/adminleft.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { ForgotComponent } from './forgot/forgot.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { ManagecompanyComponent } from './managecompany/managecompany.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { ChangepassComponent } from './changepass/changepass.component';
import { PracticeComponent } from './practice/practice.component';
import { ManageadminComponent } from './manageadmin/manageadmin.component';
import { ManageemployeeComponent } from './manageemployee/manageemployee.component';
import { CookieService } from 'ngx-cookie-service';
import { CompanylistComponent } from './companylist/companylist.component';
import { TrainingComponent } from './training/training.component';
import { TheaderComponent } from './theader/theader.component';
import { TfooterComponent } from './tfooter/tfooter.component';
import { ManageonboardingComponent } from './manageonboarding/manageonboarding.component';
import { AddlessoncatComponent } from './addlessoncat/addlessoncat.component';
import { AddlessoncategoryComponent } from './addlessoncategory/addlessoncategory.component';
import { CategorylistComponent } from './categorylist/categorylist.component';
import { EditcategoryComponent } from './editcategory/editcategory.component';
import { LessonlistComponent } from './lessonlist/lessonlist.component';
import { EditlessonComponent } from './editlesson/editlesson.component';
//import { CKEditorModule } from 'ngx-ckeditor';
import { CKEditorModule } from 'ng2-ckeditor';
import { UserlistComponent } from './userlist/userlist.component';
import { TracklistComponent } from './tracklist/tracklist.component';
/*import { AddCustomComponent } from './add-custom/add-custom.component';*/
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { CustomerservicelistComponent } from './customerservicelist/customerservicelist.component';
import { SitesettingComponent } from './sitesetting/sitesetting.component';
import { BrandmanagementComponent } from './brandmanagement/brandmanagement.component';
import { BrandlistComponent } from './brandlist/brandlist.component';
import { AddofferComponent } from './addoffer/addoffer.component';
import { OfferlistComponent } from './offerlist/offerlist.component';
import { DasComponent } from './das/das.component';
import { ListingComponent } from './listing/listing.component';

//import { DaterangepickerModule } from 'angular-2-daterangepicker/index';
import { Brandmanagement1Component } from './brandmanagement1/brandmanagement1.component';
import { Customerservicelist1Component } from './customerservicelist1/customerservicelist1.component';
import { Admin1Component } from './admin1/admin1.component';
import { InfluencerComponent } from './influencer/influencer.component';
import { CampaignmanagementComponent } from './campaignmanagement/campaignmanagement.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { LogoutComponent } from './logout/logout.component';
import { Offer1Component } from './offer1/offer1.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    AdminheaderComponent,
    AdminfooterComponent,
    AdminleftComponent,
    AddComponent,
    EditComponent,
    DeleteComponent,
    ForgotComponent,
    AddemployeeComponent,
    ManagecompanyComponent,
    MyaccountComponent,
    EditemployeeComponent,
    ChangepassComponent,
    PracticeComponent,
    ManageadminComponent,
    ManageemployeeComponent,
    CompanylistComponent,
    TrainingComponent,
    TheaderComponent,
    TfooterComponent,
    ManageonboardingComponent,
    AddlessoncatComponent,
    AddlessoncategoryComponent,
    CategorylistComponent,
    EditcategoryComponent,
    LessonlistComponent,
    EditlessonComponent,
    UserlistComponent,
    TracklistComponent,
    AddcustomerComponent,
    CustomerservicelistComponent,
    SitesettingComponent,
    BrandmanagementComponent,
    BrandlistComponent,
    AddofferComponent,
    OfferlistComponent,
    DasComponent,
    ListingComponent,
    Brandmanagement1Component,
    Customerservicelist1Component,
    Admin1Component,
    InfluencerComponent,
    CampaignmanagementComponent,
    LogoutComponent,
    Offer1Component,

  ],
  imports: [
    BrowserModule, routing,
    FormsModule, ReactiveFormsModule,HttpClientModule,ModalModule.forRoot(),
    CKEditorModule,ImageCropperModule,BsDatepickerModule.forRoot()


  ],
  providers: [appRoutingProviders,CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }


