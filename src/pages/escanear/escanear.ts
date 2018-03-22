import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
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
  options : BarcodeScannerOptions;
  encodText : string ='';
  scannerData:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,private barcodeScanner: BarcodeScanner) {

  	
  }
  scan(){
    this.options={
      prompt:'Escaneando Codigo de Barras'
    }
    this.barcodeScanner.scan(this.options).then((data)=>{
        this.scannerData = data;
      }, (err)=>{
        console.log('error');
      });
  }

  encode(){
    this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, this.encodText).then((data)=>{
      this.scannerData = data;
    }, (err)=>{})


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EscanearPage');
  }

}
