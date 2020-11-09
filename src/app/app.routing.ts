import { NgModule, InjectionToken, ModuleWithProviders, Injector, StaticProvider, Compiler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgModuleFactory } from '@angular/core/src/r3_symbols';
import { ConfigResolver } from './config.resolver';

const routes: Routes = [
    {
      path: '',
      loadChildren: () => import('./wrapper/wrapper.module').then(m => m.WrapperModule),
      resolve: { config: ConfigResolver }
    },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}