// import { NgModule } from '@angular/core';
// import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import { redirectUnauthorizedTo, redirectLoggedInTo, canActivate } from '@angular/fire/auth-guard';

// const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
// const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

// const routes: Routes = [
//   {
//     path: 'home',
//     loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
//   },
//   {
//     path: '',
//     redirectTo: 'home',
//     pathMatch: 'full'
//   },
  // {
  //   path: '',
  //   loadChildren: () => import('./login/login.module').then((m) => m.LoginPageModule),
  //   ...canActivate(redirectLoggedInToHome)
  // },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
  //   ...canActivate(redirectUnauthorizedToLogin)
  // },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  // },
  // {
  //   path: 'crear-contacto',
  //   loadChildren: () => import('./crear-contacto/crear-contacto.module').then( m => m.CrearContactoPageModule)
  // },
  // {
  //   path: 'editar-contacto',
  //   loadChildren: () => import('./editar-contacto/editar-contacto.module').then( m => m.EditarContactoPageModule)
  // },
  // // {
  //   path: '**',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
// ];

// @NgModule({
//   imports: [
//     RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
//   ],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }


import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'crear-contacto',
    loadChildren: () => import('./crear-contacto/crear-contacto.module').then( m => m.CrearContactoPageModule)
  },
  {
    path: 'editar-contacto/:id',
    loadChildren: () => import('./editar-contacto/editar-contacto.module').then( m => m.EditarContactoPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }