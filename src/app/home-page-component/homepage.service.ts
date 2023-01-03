import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
    providedIn:"root"
})
export class HomePageService{
    constructor( private http:HttpClient){}
    
    async getUser(){
        const userResponse=await fetch('https://60d5a2c2943aa60017768b01.mockapi.io/candidate')
        const data=await userResponse.json()
        console.log(data)
        return data
    }

    createUser(userObject:any){
       return  this.http.post('https://60d5a2c2943aa60017768b01.mockapi.io/candidate',userObject)
    }
}