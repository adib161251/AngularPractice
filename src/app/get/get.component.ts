import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export class posts{
  UserId : number;
  Id : any;
  Title : any;
  Body : any
}
@Component({
  selector: 'get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent {
  postss : posts[]; 
  private url ='http://jsonplaceholder.typicode.com/posts'; 
  constructor(private http: HttpClient){
    http.get<[]>(this.url)
    .subscribe((response)=>{
      console.log(response);
      this.postss= response;
    })
  }


  add(title: HTMLInputElement)
  {
    let input :any = {title: title.value};
    this.http.post(this.url,JSON.stringify(input))
    .subscribe((response)=>{
      input['id'] = response['id'];
      this.postss.splice(0,0,input)
      console.log(input);
    })
  }
   

}
