import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailPageService } from './detailPage.service';
import { Router } from '@angular/router';
@Component({
  
  templateUrl: './detail-page-component.component.html',
  styleUrls: ['./detail-page-component.component.css']
})


export class DetailPageComponentComponent implements OnInit{
  constructor(private route:ActivatedRoute,private userDetailService:DetailPageService,private router:Router){};

  


  ids:string='';
  userDetail:any;
  editCheck:boolean=false;

  //feilds for edit form;
  nameField:string='';
  emailField:string='';
  addressField:string='';
  mobileField:string='';



  //used fetched for geting data.
  private async fetchUser(){
    this.userDetail=await this.userDetailService.getUserDetail(this.ids);
    console.log(this.userDetail)
  }
  handleEdit():void{
    console.log('handled edit');
    this.editCheck=!this.editCheck;
  }
  handleUpdate():void{
    if(this.nameField!=="" && this.addressField!=="" && this.emailField!=="" && this.mobileField!==""){
      const updateUserObject=this.userDetail;
      updateUserObject.name=this.nameField;
      updateUserObject.address=this.addressField;
      updateUserObject.email=this.emailField;
      updateUserObject.phone=this.mobileField;
      
      this.userDetailService.updateUser(this.ids,updateUserObject).subscribe((data:any)=>{
        if(data.id){
          console.log(data)
          this.router.navigate([`/list`])
        }
      });
    }
    else{
      console.log("all fields are mandetory")
    }
   
  }
  handleDelete():void{
    this.userDetailService.deleteUser(this.ids).subscribe((data:any)=>{
      if(data.id){
        this.router.navigate(['/list']);
      }
    })
  }
  handleCloseBtn(){
    this.router.navigate(['/list']);
  }
  
   ngOnInit(): void{
    const id=Number(this.route.snapshot.paramMap.get('id'));
    this.ids=id.toString();
    // this.fetchUser();
    this.userDetailService.getSigleUser(this.ids).subscribe((data)=>{this.userDetail=data;console.log(this.userDetail)});
    
  }
  

}
