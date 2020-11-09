import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { Configuration } from './configurable/configurable.config';
import { Resolve } from '@angular/router';

@Injectable()
export class ConfigResolver implements Resolve<Configuration> {
  private privateConfig: Configuration;

  get config() {
    return this.privateConfig;
  }

  resolve(): Observable<Configuration> {
    if (this.privateConfig) {
      return of(this.privateConfig);
    }

     return of({ title: 'From service' }).pipe(
      delay(1000),
      map(config => {
        // Store config for usage in factory
        this.privateConfig = config;
        return this.privateConfig;
      })
    );
  }
}