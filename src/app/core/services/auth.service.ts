import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

export interface Credentials {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userData: any;

  constructor(private fireAuth: AngularFireAuth) {}

  login(credentials: Credentials): any {
    return this.fireAuth.signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(userCredential => this.userData = userCredential.user);
  }

  register(credentials: Credentials): any {
    return this.fireAuth.createUserWithEmailAndPassword(credentials.email, credentials.password);
  }

  logout(): any {
    return this.fireAuth.signOut();
  }

  isLoggedIn(): any {
    return !!this.userData;
  }

  get user(): any {
    return this.userData;
  }
}
