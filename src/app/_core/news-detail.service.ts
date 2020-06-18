import { Injectable } from '@angular/core';
import { NewsMessage } from "../_types/news";

@Injectable({
  providedIn: 'root'
})
export class NewsDetailService {

  currentNewsMessage: NewsMessage;

  constructor() { }

  setNewsMessageDetail(newsMsg: NewsMessage) {
    this.currentNewsMessage = newsMsg;
  }

  getNewsMessageDetail(): NewsMessage {
   return this.currentNewsMessage; 
  }
}
