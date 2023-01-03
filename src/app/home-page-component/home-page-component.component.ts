import { Component,OnInit,ChangeDetectorRef,OnChanges,DoCheck } from '@angular/core';
import { HomePageService } from './homepage.service';
import { Router } from '@angular/router';
import { timeInterval } from 'rxjs';

@Component({
  // selector: 'app-home-page-component',
  templateUrl: './home-page-component.component.html',
  styleUrls: ['./home-page-component.component.css']
})

export class HomePageComponentComponent implements OnInit {
  
  constructor(private userServise : HomePageService,private router:Router,private change:ChangeDetectorRef){};
  searchField:string="";
  products:any[]=[];
  openForm:boolean=false;

  nameField:string="";
  addressField:string="";
  emailField:string="";
  companyField:string="";
  mobileField:string="";

  userDetail = {
    address:
      "",
    company
      :
      "",
    education
      : [{institute: 'PICT', pass_out_year: '2'}],
    email
      :
      "",
    experience
      :
      [],
    gender
      :
      "",
    hobbies
      : ['Reading', 'Music'],
    name
      :
      "",
    phone
      :
      "",
    profile_picture
      :
      "",
    skills
      :
      ['react','javaScript','python','node']
  }

  
  handleClick():void{
    console.log("click handled");
  }
  handleChange():void{
    console.log('change detected',this.searchField)
  }


  handleFormOpen():void{
    this.openForm=!this.openForm;
  }
  handleCloseBtn(){
    this.handleFormOpen();
  }
  handleSubmit(){
    if(this.nameField!=="" && this.addressField!=="" && this.emailField!=="" && this.mobileField!=="" &&this.companyField!==""){
      const updateUserObject=this.userDetail;
      updateUserObject.name=this.nameField;
      updateUserObject.address=this.addressField;
      updateUserObject.email=this.emailField;
      updateUserObject.phone=this.mobileField;
      updateUserObject.company=this.companyField
      
      this.userServise.createUser(updateUserObject).subscribe((data:any)=>{
        if(data.id){
          console.log("data submitted");
        }
      })
    }
    else{
      console.log('empty field')
    }
  }

  private async fetchUser(){
    this.products=await this.userServise.getUser();
  }
  
  ngOnInit(): void {
    this.fetchUser()
    console.log(this.products,"jajksdbjbakj")
  }
  ngDoCheck(){
    this.change.detectChanges()
  }
  


}
