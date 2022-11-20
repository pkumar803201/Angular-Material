import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import{ Routes,RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


const routes:Routes=[
// {path:'demo',loadChildren:()=>import('./demo/demo.module').then(m=>m.DemoModule)},
// {path:'demo',loadChildren:'./demo/demo.module#DemoModule'},
{ path: 'contactmanager', loadChildren: () => import('./contactmanager/contactmanager.module').then(m => m.ContactmanagerModule) },
{ path: 'demo', loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule) },
{ path: '**', redirectTo: 'contactmanager' }
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
