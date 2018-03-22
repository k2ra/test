import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { MyApp } from './app.component';

import { InicioPage } from '../pages/inicio/inicio';
import { CobrosPage } from '../pages/cobros/cobros';
import { ProductosPage } from '../pages/productos/productos';
import { ClientesPage } from '../pages/clientes/clientes';
import { EscanearPage } from '../pages/escanear/escanear';
import { EditarClientePage } from '../pages/editar-cliente/editar-cliente'


@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    CobrosPage,
    ProductosPage,
    ClientesPage,
    EscanearPage,
    EditarClientePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    CobrosPage,
    ProductosPage,
    ClientesPage,
    EscanearPage,
    EditarClientePage
  ],
  providers: [
    BarcodeScanner,
    Camera,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
