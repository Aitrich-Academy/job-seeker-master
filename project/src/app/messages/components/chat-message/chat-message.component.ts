import { Component } from '@angular/core';
import { JobService } from 'src/app/jobs/services/job.service';
import { ChatService } from '../../services/chat.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent {

 appliedJobList: any[] = [];
 companyName:String | undefined;
 companyId!: string;
 show:boolean=false;
 form: FormGroup ;
  constructor(private jobService:JobService,private chat:ChatService,private fb: FormBuilder){
    this.form = this.fb.group({
      message: ['', Validators.required], // Name field with required validation
     
    });
  }
  
  ngOnInit(){
    this.getAppliedCompanies();
    
  }

  getAppliedCompanies(){
    this.jobService.getAppliedJobs().subscribe((resp:any)=>{
      this.appliedJobList=resp.data;
      console.log(this.appliedJobList);
    })

  }

  chatMessage(id:string,name:string){
      this.companyName=name;
      this.companyId=id;
      this.show=true;
      
      this.chat.startChat(id).subscribe((result)=>{
        console.log(result);
      })
  }
  sendMessage(message:string){
    alert(message+this.companyId);
    this.chat.sendMessage(message,this.companyId).subscribe((result)=>{

    })
  }

}
