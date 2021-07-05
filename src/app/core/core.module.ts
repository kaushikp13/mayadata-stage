import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponentOLD } from './footer/footer.component';
import { HeaderComponentOLD } from './header/header.component';
import { DropdownDirective } from '../directives/structural/dropdown.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UtilitiesModule } from "../utilities/utilities.module"
@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    UtilitiesModule
  ],
  declarations: [FooterComponentOLD, DropdownDirective, HeaderComponentOLD],
  exports: [FooterComponentOLD, DropdownDirective]
})
export class CoreModule { }
