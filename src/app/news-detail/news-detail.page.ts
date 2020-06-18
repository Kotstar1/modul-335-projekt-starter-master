import { Component, OnInit } from '@angular/core';
import { NewsDetailService } from "../_core/news-detail.service";
import { NewsMessage } from "../_types/news";

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
})
export class NewsDetailPage implements OnInit {

  newsdetail: NewsMessage;

  constructor(private newsMsgService: NewsDetailService) { 
    // TODO: Getter von NewsDetailService verwenden um NewsMessage-Objekt zu laden
  }

  ngOnInit() {
  }

}
