import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-willkommen',
  templateUrl: './willkommen.page.html',
  styleUrls: ['./willkommen.page.scss'],
})
export class WillkommenPage implements OnInit {

  constructor(
    private router: Router,
    private storage: Storage,
    private menuCtrl: MenuController
  ) {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
    this.storage.ready()
      .then(() => {
        this.storage.get('firstAppStart').then((val) => {
          if (val == false) {
            this.router.navigateByUrl('/login');
          }
        });
      });
  }

  welcomeDone() {
    this.storage.set('firstAppStart', false);
    this.router.navigateByUrl('/login');
  }
}
