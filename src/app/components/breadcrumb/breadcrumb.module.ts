import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbComponent } from './breadcrumb.component';
import { BreadcrumbService } from './breadcrumb.service';
import { RouterModule } from '@angular/router';

export * from './breadcrumb.component';
export * from './breadcrumb.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    BreadcrumbComponent
  ],
  exports: [
    BreadcrumbComponent
  ]
})
export class Ng5BreadcrumbModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: Ng5BreadcrumbModule,
      providers: [BreadcrumbService]
    };
  }
}