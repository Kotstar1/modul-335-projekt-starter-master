import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, MenuController } from '@ionic/angular';
import { User } from '../_types/user';
import { AuthService } from '../_core/auth.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginButtonDisabled: boolean = true;
  public loginForm: FormGroup;
  user = {} as User;

  constructor(
    private alertCtrl: AlertController,
    private auth: AuthService,
    private storage: Storage,
    private router: Router,
    private menuCtrl: MenuController,
    public formBuilder: FormBuilder

  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.storage.ready()
      .then(() => {
        this.storage.get('firstAppStart').then((val) => {
          if (val == null || val == true) {
            this.router.navigateByUrl('/willkommen');
          }
        });
      });
  }

  async doLogin() {
    if (this.loginForm.valid) {
      this.auth.loginWithEmailAndPassword(
        {
          email: this.loginForm.get('email').value,
          password: this.loginForm.get('password').value
        }, '/');
    }
  }

  gotoRegistrierung() {
    this.router.navigateByUrl('/registrierung');
  }
}
