import {Injectable} from 'angular2/core';

@Injectable()
export class UserService {
  private LOGIN = 'login';
  private TOKEN = 'token';
  private STFID = 'stfid';

  connect(token, login, stfId) {
    localStorage.setItem(this.TOKEN, token);
    localStorage.setItem(this.LOGIN, login);
    localStorage.setItem(this.STFID, stfId);
  }

  getToken() { return localStorage.getItem(this.TOKEN); }
  getLogin() { return localStorage.getItem(this.LOGIN); }
  getStaffId() { return localStorage.getItem(this.STFID); }

  isConnected() { return localStorage.getItem(this.TOKEN) !== null; }

  disconnect() {
    localStorage.removeItem(this.TOKEN);
    localStorage.removeItem(this.LOGIN);
    localStorage.removeItem(this.STFID);
  }
}
