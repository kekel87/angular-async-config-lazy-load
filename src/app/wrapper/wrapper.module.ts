import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ConfigutationToken } from '../configurable/configurable.config';
import { ConfigurableModule } from '../configurable/configurable.module';
import { CommonModule } from '@angular/common';
import { ConfigResolver } from '../config.resolver';

@NgModule({
  imports: [CommonModule, ConfigurableModule],
  providers: [
    {
      provide: ConfigutationToken,
      deps: [ConfigResolver],
      useFactory: (configResolver: ConfigResolver) => {
        console.log('useFactory', configResolver.config);
        return configResolver.config;
      },
    }
  ]
})
export class WrapperModule {}
