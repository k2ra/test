import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
/**
 * Generated class for the EscanearPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-escanear',
  templateUrl: 'escanear.html',
})
export class EscanearPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private barcodeScanner: BarcodeScanner) {

  	this.barcodeScanner.scan().then((barcodeData)=>{
  		console.log('success');
  	}, (err)=>{
  		console.log('error');
  	});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EscanearPage');
  }

}
