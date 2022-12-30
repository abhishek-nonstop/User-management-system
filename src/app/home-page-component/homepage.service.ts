import { Injectable } from "@angular/core";

@Injectable({
    providedIn:"root"
})
export class HomePageService{

    
    async getUser(){
        const userResponse=await fetch('https://60d5a2c2943aa60017768b01.mockapi.io/candidate')
        const data=await userResponse.json()
        console.log(data)
        return data
    }

}