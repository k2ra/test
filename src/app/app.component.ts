import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { InicioPage } from '../pages/inicio/inicio';
import { CobrosPage } from '../pages/cobros/cobros';
import { ProductosPage } from '../pages/productos/productos';
import { ClientesPage } from '../pages/clientes/clientes';
import { EscanearPage } from '../pages/escanear/escanear';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('NAV') nav: Nav;
  public rootPage:any ;
  public pages: Array<{titulo: string, component: any, icon: string}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.rootPage = InicioPage;
    this.pages = [
      { titulo: 'Inicio', component: InicioPage, icon: 'home' },
      { titulo: 'Cobros', component: CobrosPage, icon: 'cash' },
      { titulo: 'Productos', component: ProductosPage, icon: 'cube' },
      { titulo: 'Clientes', component: ClientesPage, icon: 'person' },
      { titulo: 'Escaner', component: EscanearPage, icon: 'barcode' },

    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  goToPage(page){
    this.nav.setRoot(page);
  }
}

