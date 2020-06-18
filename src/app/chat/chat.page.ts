import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  @ViewChild('scrollMe', { static: false }) private myScrollContainer: ElementRef;

  message: string;
  showSpinnerIcon: boolean = false;
  showDates: boolean = false;
  chatList: Observable<ChatMessage[]>;
  chatListRef: AngularFireList<ChatMessage>;
  /* TODO: Bitte anpassen */
  groupNumber: string = "G3"; // Bsp. G1
  currentUser: string = "Henry"; // Bsp. Ralph



  constructor(private alertCtrl: AlertController, afDb: AngularFireDatabase, private navCtrl: NavController) {
    this.chatListRef = afDb.list('/chats/' + this.groupNumber);
    this.chatList = this.chatListRef.valueChanges();
  }

  ngOnInit() {
    this.scrollToBottom();
  }
  ngAfterViewChecked() {
    this.scrollToBottom();

  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }
  swipeEvent(swipe) {
    // 2  = Right to left swipe
    // 4  = Left to right swipe
    if (swipe.direction == 2 || swipe.direction == 4) {
      this.showDates = !this.showDates; // Toggle
    }
  }

  stringToColour(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    let colour = '#';
    for (let i = 0; i < 3; i++) {
      let value = (hash >> (i * 8)) & 0xFF;
      colour += ('00' + value.toString(16)).substr(-2);
    }
    return colour;
  }

  sendMessage() {
    if (this.message != '') {
      this.showSpinnerIcon = true;
      let formattedDate = new Date().toLocaleString();
      this.chatListRef.push({ username: this.currentUser, text: this.message, date: formattedDate });

      this.message = '';
      this.showSpinnerIcon = false;
    }
  }


}
interface ChatMessage {
  username: string;
  text: string;
  date: any;
}
