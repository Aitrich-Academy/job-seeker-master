import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesComponent } from './messages.component';
import { SharedModule } from "../shared/shared.module";
import { ChatMessageComponent } from './components/chat-message/chat-message.component';


@NgModule({
    declarations: [
        MessagesComponent,
        ChatMessageComponent
    ],
    imports: [
        CommonModule,
        MessagesRoutingModule,
        SharedModule
    ]
})
export class MessagesModule { }
