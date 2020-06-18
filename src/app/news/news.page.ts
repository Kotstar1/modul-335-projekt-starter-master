import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NewsDetailService } from "../_core/news-detail.service";
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';

import { NewsMessage } from "../_types/news";

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {


  newsList: Observable<News[]>;
  newsListRef: AngularFireList<News>;
  constructor(private router: Router, private newsMsgService: NewsDetailService, afDb: AngularFireDatabase) { 
    this.newsListRef = afDb.list('/news/');
    this.newsList = this.newsListRef.valueChanges();
    console.log(this.newsList)
  }

  ngOnInit() {
  }
  
  
}
interface News {
  date: any;
  description: string;
  imgurl: string;
  slug: string;
  titel: string;
}
