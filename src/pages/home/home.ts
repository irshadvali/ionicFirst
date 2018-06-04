import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http,Headers} from '@angular/http'
import 'rxjs/add/operator/map'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
url:string;
data:string;
  constructor(public http:Http,public navCtrl: NavController) {

  }

  ngOnInit() {
    this.ionViewLoad();
  }

  ionViewLoad(){
    this.loadUser();
  }
  loadUser(){
    this.http.get('https://api.randomuser.me/')
    .map(res => res.json())
    .subscribe(data=>{
      this.data=data.results;
      console.log(data.results);
    },err=>{
      console.log(err);
    })
  }
  

}
