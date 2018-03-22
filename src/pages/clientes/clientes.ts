import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditarClientePage } from '../editar-cliente/editar-cliente'
/**
 * Generated class for the ClientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clientes',
  templateUrl: 'clientes.html',
})
export class ClientesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToEditarCliente(){
  	this.navCtrl.push(EditarClientePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientesPage');
  }

}
