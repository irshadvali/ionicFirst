import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http} from '@angular/http'
import 'rxjs/add/operator/map'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
url:string;
data: any = [];
  constructor(public http:Http,public navCtrl: NavController) {

  }

  ngOnInit() {
    this.ionViewLoad();
  }

  ionViewLoad(){
    this.loadUser();
  }
  loadUser(){
    this.http.get('https://api.myjson.com/bins/dihv7')
    .map(res => res.json())
    .subscribe(data=>{
     // this.data=data.colorlist[0].colorname;
     this.data=data.colorlist;
      console.log(data.colorlist);
    },err=>{
      console.log(err);
    })
  }
  

}
