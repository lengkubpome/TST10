import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
// import { VendorsComponent } from './pages/vendors/vendors.component';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  // { path: 'vendors', component: VendorsComponent },
  {
    path: 'vendors',
    loadChildren: () => import('./pages/vendors/vendors.module').then(m => m.VendorsModule),
    data: { preload: true }
  },
  { path: '', redirectTo: '/vendors', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
        preloadingStrategy: SelectivePreloadingStrategyService,
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
