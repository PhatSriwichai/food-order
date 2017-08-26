import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase/app';

@Injectable()
export class UsersService {

  user: Observable<firebase.User>;
  userData: any
  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  socialLogin(loginProvider) {
    if (loginProvider === 'facebook') {
      return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then((data) => {
          this.userData = data
        });
    }
  }

  checkLogged() {
    return this.afAuth.authState.subscribe(res => {
      if (res && res.uid) {
        return res
      } 
    });
  }

  logout() {
    return this.afAuth.auth.signOut()
  }

}
