import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItems } from './menu-items/menu-items';

const importsModule: any = [
  CommonModule
]

@NgModule({
  declarations: [],
  imports: [importsModule],
  providers: [MenuItems]
})
export class SharedModule { }
