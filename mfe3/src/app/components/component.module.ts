import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VIEW_ROUTES } from './component.routes';
import { UserViewComponent } from './user-view/user-view.component';

@NgModule({
  declarations: [
      UserViewComponent
  ],
  imports: [
      CommonModule,
      RouterModule.forChild(VIEW_ROUTES)
  ],
  providers: [],
})
export class ComponentModule { }
