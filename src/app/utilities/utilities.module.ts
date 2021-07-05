import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ContactusFormComponent } from './contactus-form/contactus-form.component';
import { AgileService } from '../services/agile/agile.service';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { BannerComponent } from "./banner/banner.component";
import { PartnershipFormComponent } from './partnership-form/partnership-form.component';
import { PricingFormComponent } from './pricing-form/pricing-form.component';
import { PricingContactusFormComponent } from './pricing-contactus-form/pricing-contactus-form.component'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxIntlTelInputModule
  ],
  declarations: [ContactusFormComponent, BannerComponent, PartnershipFormComponent, PricingFormComponent, PricingContactusFormComponent],
  exports: [ContactusFormComponent, BannerComponent, PartnershipFormComponent, PricingFormComponent, PricingContactusFormComponent],
  providers: [AgileService]
})
export class UtilitiesModule { }
