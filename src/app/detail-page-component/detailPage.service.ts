import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable(
    {
       providedIn:'root'
    }
)
export class DetailPageService{
    constructor( private http:HttpClient){}
    async getUserDetail(id:string){
        const userDetailsReponse=await fetch(`https://60d5a2c2943aa60017768b01.mockapi.io/candidate/${id}`);
        const userDetails=await userDetailsReponse.json()
        return userDetails
    }
    getSigleUser(id:string):Observable<any>{

        const resposne=this.http.get(`https://60d5a2c2943aa60017768b01.mockapi.io/candidate/${id}`)
        return resposne

    }
    updateUser(id:string,userObject:any):Observable<any>{
        const response=this.http.put(`https://60d5a2c2943aa60017768b01.mockapi.io/candidate/${id}`,userObject);
        return response
    }
    deleteUser(id:string):Observable<any>{
        return  this.http.delete(`https://60d5a2c2943aa60017768b01.mockapi.io/candidate/${id}`);
    }


}