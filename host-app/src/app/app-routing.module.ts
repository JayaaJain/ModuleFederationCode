import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { HomeComponent } from './home/home.component';

// const URL2 = 'http://localhost:4400/mfe2.js';
const URL3 = 'http://localhost:4500/mfe3.js';
const URL4 = 'http://localhost:3000/databusConfiguratorUi.js';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'button',
    component: ButtonComponent,
  },
  // {
  //   path: 'mfe2',
  //   loadChildren: () => import('mfe2/Module').then(m => m.ButtonModule)
  // }
  
  //  {
  //     path: 'mfe2',
  //     loadChildren: () => loadRemoteModule({
  //         remoteEntry: URL2,
  //         remoteName: 'mfe2',
  //         exposedModule: './Module'
  //       })
  //       .then(m => m.ButtonModule) 
  //   },

  //  {
  //     path: 'mfe2App',
  //     loadChildren: () => loadRemoteModule({
  //         remoteEntry: URL2,
  //         remoteName: 'mfe2',
  //         exposedModule: './AppModule'
  //       })
  //       .then(m => m.AppModule) 
  //   },

   {
      path: 'mfe3',
      loadChildren: () => loadRemoteModule({
          remoteEntry: URL3,
          remoteName: 'mfe3',
          exposedModule: './Module'
        })
        .then(m => m.ComponentModule) 
    },

   {
      path: 'IEdatabus',
      loadChildren: () => loadRemoteModule({
          remoteEntry: URL4,
          remoteName: 'databusConfiguratorUi',
          exposedModule: './Module'
        })
        .then(m => m.AppModule) 
    },
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
