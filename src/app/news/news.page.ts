import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsDetailService } from "../_core/news-detail.service";
import { NewsMessage } from "../_types/news";

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  constructor(private router: Router, private newsMsgService: NewsDetailService) { }

  ngOnInit() {
  }
  
}
