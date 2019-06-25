import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class TshirtService {
  private tshirt_url:string = "http://localhost:3000/tshirts";
  private admin_url:string = "http://localhost:3000/admin-credeentials";
  private deepak_url:string = "http://192.168.1.129/shipgiglive/restapi/register.php";
  constructor(private http: HttpClient) { }

getTshirts(){
  return  this.http.get(this.tshirt_url);
}
getAdminCredentials(){
 return  this.http.get(this.admin_url);
}
getdeepak(){
  return this.http.get(this.deepak_url);
}

}
