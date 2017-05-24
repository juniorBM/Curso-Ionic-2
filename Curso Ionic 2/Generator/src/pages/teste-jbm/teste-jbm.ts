import { GithubService } from './../../providers/github.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-teste-jbm',
  templateUrl: 'teste-jbm.html',
  providers: [GithubService]
})
export class TesteJbm {

  constructor(
    public gitHubService: GithubService,
    public navCtrl: NavController, 
    public navParams: NavParams
    ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TesteJbm');

    this.gitHubService.getUsers()
      .subscribe((users: [{}]) => {
        console.log(users);
      });
  }
  
  onIncrement(): void {
    console.log(this.gitHubService.increment());
    
  }

  
}
