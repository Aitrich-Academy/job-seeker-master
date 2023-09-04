import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http:HttpClient) { }

  startChat(id:string){
    const requestData = {
      participants: [id]
    };
    console.log(id);
    var content:string="hello";
    return this.http.post<any[]>(environment.baseurl+`/chats/`,requestData);
  }

  sendMessage(message:string,chatId:string){

    const data={
      content:message
    };
    return this.http.post<any[]>(environment.baseurl+`/chats/${chatId}/messages`,data);
  }
}
