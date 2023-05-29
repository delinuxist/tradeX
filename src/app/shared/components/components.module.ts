import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';

import { MatIconModule } from '@angular/material/icon';
import { TopNavComponent } from './top-nav/top-nav.component';

@NgModule({
  declarations: [SideNavComponent, TopNavComponent],
  imports: [CommonModule, MatIconModule],
  exports: [SideNavComponent, TopNavComponent],
})
export class ComponentsModule {}
