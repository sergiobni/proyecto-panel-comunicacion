import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from '@firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private auth: Auth) {}

  register({ email, passowrd }: any) {
    return createUserWithEmailAndPassword(this.auth, email, passowrd);
  }

  login({ email, passowrd }: any) {
    return signInWithEmailAndPassword(this.auth, email, passowrd);
  }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  logout() {
    return signOut(this.auth);
  }
}
