import { Injectable } from '@angular/core';
import { BankUser } from '../model/bank-user';
import { Account } from '../model/account';
import { AccountAction } from '../model/account-action';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  private currentUser:BankUser //step 4
  private users:BankUser[]
  private accounts:Account[]
  private actions:AccountAction[]

  constructor() {
    this.users = window['bank_users'] ? window['bank_users'] : []
    this.accounts = window['bank_accounts'] ? window['bank_accounts'] : []
    this.actions = window['bank_actions'] ? window['bank_actions'] : []
  }
//-----------step 5 
  loginToAccount(u:string, p:string):BankUser{
     this.currentUser = this.users.find(bu => bu.UserName == u && bu.Password == p);
     return this.currentUser;
  }

  getAccountsById(_BankUserId:number):Account[]{
    return this.accounts.filter(acc => acc.BankUserId == _BankUserId)
  }

  
  getAccountsActionsByAccountId(_AccountId:number):AccountAction[]{
    return this.actions.filter(a => a.AccountId == _AccountId)
  }
//--------------step 6
  getcurrentAccountId():number{
    return  this.currentUser ? this.currentUser.id : null;
  }

}
