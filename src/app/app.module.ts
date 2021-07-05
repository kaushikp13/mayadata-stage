import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input'
import { CarouselModule } from 'ngx-bootstrap/carousel';

// services
import { AgileService } from './components/forms/agile.service';
import { WINDOW_PROVIDERS } from './services/window/window.service';
import { CommonService } from './services/common.service';
import { CookieService } from 'ngx-cookie-service';
import { UtilsService } from './services/utils/utils.service';
import { AuthService } from './services/auth/auth.service';
// Routing
import { Routing } from './app.routing';

// Core Module
import { CoreModule } from './core/core.module';

// Utilities Module
import { UtilitiesModule } from './utilities/utilities.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';

// Home Pages and its components
import { HomeComponent } from './pages/home/home.component';
import { HomepageHeroComponent } from "./views/homepage/homepage-hero/homepage-hero.component";
import { HomepageCompanieslistComponent } from "./views/homepage/homepage-companieslist/homepage-companieslist.component";
import { HomepageKuberaFeaturesComponent } from "./views/homepage/homepage-kubera-features/homepage-kubera-features.component"
import { HomepageKuberaBenefitsComponent } from "./views/homepage/homepage-kubera-benefits/homepage-kubera-benefits.component";
import { HomepageKuberaResourcesComponent } from "./views/homepage/homepage-kubera-resources/homepage-kubera-resources.component";
import { HomepageKuberaSupportsComponent } from "./views/homepage/homepage-kubera-supports/homepage-kubera-supports.component";
import { HomepageKuberaEventsComponent } from "./views/homepage/homepage-kubera-events/homepage-kubera-events.component";
import { HomepageKuberaFreeForeverComponent } from "./views/homepage/homepage-kubera-free-forever/homepage-kubera-free-forever.component";
import { HomepageMeetKuberaComponent } from "./views/homepage/homepage-meet-kubera/homepage-meet-kubera.component";

// Common Components which will be used in more than one pages
import { GetStartedWithWorkloadsComponent } from "./views/common/get-started-with-workloads/get-started-with-workloads.component";

import { Error404Component } from './pages/error404/error404.component';
import { PartnersComponent } from './pages/partners/partners.component';
import { ApplyForPartnershipComponent } from './pages/partners/apply-for-partnership/apply-for-partnership.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { CareerComponent } from './pages/career/career.component';
import { NewsComponent } from './pages/news/news.component';
import { AgilecrmInputComponent } from './components/forms/agilecrm-input/agilecrm-input.component';
import { AgilecrmSuccessComponent } from './components/forms/agilecrm-success/agilecrm-success.component';
import { BlueGreenComponent } from './pages/usecases/blue-green/blue-green.component';
import { CiCdComponent } from './pages/usecases/ci-cd/ci-cd.component';
import { HybridCloudComponent } from './pages/usecases/hybrid-cloud/hybrid-cloud.component';
import { HyperscaleComponent } from './pages/usecases/hyperscale/hyperscale.component';
import { StatefulsetsComponent } from "./pages/usecases/statefulsets/statefulsets.component";
import { DeploymentsComponent } from "./pages/usecases/deployments/deployments.component";
import { UsecasesFormsComponent } from './components/forms/usecases-forms/usecases-forms.component';
import { UsecasesSuccessComponent } from './components/forms/usecases-success/usecases-success.component';
import { IcpComponent } from './pages/icp/icp.component';
import { IcpFormsComponent } from './components/forms/icp-forms/icp-forms.component';
import { FormComponent } from './utilities/form/form.component';
import { PricingComponent } from "./pages/pricing/pricing.component";
import { PricingTableComponent } from "./views/pricingpage/pricing-table/pricing-table.component";
import { FeaturesTableComponent } from "./views/pricingpage/features-table/features-table.component";
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { NoHeaderFooterLayoutComponent } from './layout/no-header-footer-layout/no-header-footer-layout.component';
import { GettingStartedComponent } from './pages/getting-started/getting-started.component';
import { ThanksComponent } from './pages/thanks/thanks.component';
import { PricingformsComponent } from './components/forms/pricingforms/pricingforms.component';
import { AwsComponent } from './pages/usecases/aws/aws.component';
import { OpenSourceComponent } from './pages/open-source/open-source.component';
import { LandingLayoutComponent } from './layout/landing-layout/landing-layout.component';
import { TechnicalMarketingEngineerComponent } from "./pages/career/technical-marketing-engineer/technical-marketing-engineer.component";
import { ProgramManagerComponent } from "./pages/career/program-manager/program-manager.component";
import { SolutionArchitectComponent } from "./pages/career/solution-architect/solution-architect.component";
import { SupportEngineerComponent } from "./pages/career/support-engineer/support-engineer.component";
import { SeniorProgramManagerComponent } from "./pages/career/senior-program-manager/senior-program-manager.component";
import { PrincipalSoftwareEngineerComponent } from "./pages/career/principal-software-engineer/principal-software-engineer.component";
import { SystemEngineerComponent } from "./pages/career/system-engineer/system-engineer.component";

import { ResourceComponent } from './pages/resource/resource.component';
import { TermsComponent } from './pages/terms/terms.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { LicencesComponent } from './components/licences/licences.component';
import { MulebotComponent } from './pages/integrations/mulebot/mulebot.component';
import { MulebotPolicyComponent } from './pages/integrations/mulebot-policy/mulebot-policy.component';
import { Hacktoberfest2019Component } from './components/hacktoberfest/hacktoberfest2019/hacktoberfest2019.component';
import { Hacktoberfest2019WinnerComponent } from './components/hacktoberfest/hacktoberfest2019-winner/hacktoberfest2019-winner.component'
import { AngularFontAwesomeModule } from 'angular-font-awesome';


// Workloads Pages and its components
import { KafkaWorkloadPageComponent } from "./pages/workloads/kafka-workload-page/kafka-workload-page.component";
import { ElasticWorkloadPageComponent } from "./pages/workloads/elastic-workload-page/elastic-workload-page.component";
import { MagentoWorkloadPageComponent } from "./pages/workloads/magento-workload-page/magento-workload-page.component";

import { WorkloadsHeroComponent } from "./views/workloadspage/workloads-hero/workloads-hero.component";
import { WorkloadsJourneyComponent } from "./views/workloadspage/workloads-journey/workloads-journey.component";
import { WorkloadsCompanieslistComponent } from "./views/workloadspage/workloads-companieslist/workloads-companieslist.component";
import { WorkloadsOperatorsComponent } from "./views/workloadspage/workloads-operators/workloads-operators.component";
import { WorkloadsResourcesComponent } from "./views/workloadspage/workloads-resources/workloads-resources.component";
import { WorkloadsBenefitsComponent } from "./views/workloadspage/workloads-benefits/workloads-benefits.component";
import { WorkloadsEventsComponent } from "./views/workloadspage/workloads-events/workloads-events.component";
import { WorkloadsFaqsComponent } from "./views/workloadspage/workloads-faqs/workloads-faqs.component";
import { WorkloadsPartnersComponent } from "./views/workloadspage/workloads-partners/workloads-partners.component";
import { AristaComponent } from './pages/casestudies/adopters/arista/arista.component';
import { ProductComponent } from './pages/product/product.component';
import { HomepageWorkloadsComponent } from './views/homepage/homepage-workloads/homepage-workloads.component';
import { PricingFaqComponent } from './views/pricingpage/pricing-faq/pricing-faq.component';
import { KuberaPricingComponent } from './views/productpage/kubera-pricing/kubera-pricing.component';
import { HomepageWhyKuberaComponent } from './views/homepage/homepage-why-kubera/homepage-why-kubera.component';
import { HomepagePricingOverviewComponent } from './views/homepage/homepage-pricing-overview/homepage-pricing-overview.component';
import { ComcastComponent } from './pages/casestudies/adopters/comcast/comcast.component';
import { MinioWorkloadPageComponent } from './pages/workloads/minio-workload-page/minio-workload-page.component';
import { PrometheusWorkloadPageComponent } from './pages/workloads/prometheus-workload-page/prometheus-workload-page.component';
import { KubeconSwagTermsAndConditionsComponent } from './pages/kubecon-swag-terms-and-conditions/kubecon-swag-terms-and-conditions.component';
import { GrowthInCommunityComponent } from './pages/press/growth-in-community/growth-in-community.component';
import { PricingCardComponent } from './views/common/pricing-card/pricing-card.component';
import { PricingCardsComponent } from './views/common/pricing-cards/pricing-cards.component';
import { PricingBlogComponent } from './views/pricingpage/pricing-blog/pricing-blog.component';
import { SolutionEngineerComponent } from './pages/career/solution-engineer/solution-engineer.component';
import { Hacktoberfest2020Component } from './components/hacktoberfest/hacktoberfest2020/hacktoberfest2020.component';


import { WorkloadComponent } from './templates/workload/workload.component';
import { WorkloadHeroComponent } from './templates/workload/workload-hero/workload-hero.component';
import { WorkloadBenefitsComponent } from './templates/workload/workload-benefits/workload-benefits.component';
import { WorkloadResourcesComponent } from './templates/workload/workload-resources/workload-resources.component';
import { WorkloadEventsComponent } from './templates/workload/workload-events/workload-events.component';
import { WorkloadPastEventsComponent } from './templates/workload/workload-events/workload-past-events/workload-past-events.component';
import { WorkloadFaqsComponent } from './templates/workload/workload-faqs/workload-faqs.component';
import { WorkloadPartnersComponent } from './templates/workload/workload-partners/workload-partners.component';
import { WorkloadSupportComponent } from './templates/workload/workload-support/workload-support.component';
import { WhyWorkloadComponent } from './templates/workload/why-workload/why-workload.component';
import { WorkloadUsersComponent } from './templates/workload/workload-users/workload-users.component';
import { WorkloadHowToDeployComponent } from './templates/workload/workload-how-to-deploy/workload-how-to-deploy.component';
import { SampleWorkloadPageComponent } from './pages/workloads/sample-workload-page/sample-workload-page.component';
import { WorkloadOperatorsComponent } from './templates/workload/workload-operators/workload-operators.component';
import { WorkloadCurrentEventComponent } from './templates/workload/workload-events/workload-current-event/workload-current-event.component';
import { WorkloadGetStartedComponent } from './templates/workload/workload-get-started/workload-get-started.component';
import { CassandraComponent } from './pages/workloads/cassandra/cassandra.component';
import { NewUpdatesComponent } from './views/resourcepage/new-updates/new-updates.component';
import { AllResourcesComponent } from './views/resourcepage/all-resources/all-resources.component';
import { ResourceCardComponent } from './components/resource-card/resource-card.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FooterNewsletterFormComponent } from './utilities/footer-newsletter-form/footer-newsletter-form.component';

import { PlowComponent } from './views/aboutpage/plow/plow.component';
import { MayaDataBenefitsComponent } from './views/aboutpage/mayadata-benefits/mayadata-benefits.component';
import { LeadershipTeamComponent } from './views/aboutpage/leadership-team/leadership-team.component';
import { InvestorsTeamComponent } from './views/aboutpage/investors/investors.component';
import { AdvisorsTeamComponent } from './views/aboutpage/advisors/advisors.component';
import { CareerTemplateloadComponent } from './templates/career/career-template/career-template.component';
import { HomepageWhatKuberaComponent } from './views/homepage/homepage-what-kubera/homepage-what-kubera.component';
import { HomepageKuberaStorageComponent } from './views/homepage/homepage-kubera-storage/homepage-kubera-storage.component';
import { HomepageKuberaMoreComponent } from './views/homepage/homepage-kubera-more/homepage-kubera-more.component';
import { HomepageKuberaConnectsComponent } from './views/homepage/homepage-kubera-connects/homepage-kubera-connects.component';
import { HomepageKuberaTrustComponent } from './views/homepage/homepage-kubera-trust/homepage-kubera-trust.component';
import { PricingKuberaFeatureComponent } from './views/pricingpage/pricing-kubera-feature/pricing-kubera-feature.component';
import { KuberaPricingModelsComponent } from './views/pricingpage/kubera-pricing-models/kubera-pricing-models.component';
import { KuberaPricingEnterpriseComponent } from './views/pricingpage/kubera-pricing-enterprise/kubera-pricing-enterprise.component';
import { KuberaPricingCloudComponent } from './views/pricingpage/kubera-pricing-cloud/kubera-pricing-cloud.component';
import { PricingHasQuestionsComponent } from './views/pricingpage/pricing-has-questions/pricing-has-questions.component';
import { ResourcePopupComponent } from './components/resource-popup/resource-popup.component';
import { UsecaseIntroComponent } from './templates/usecases/usecase-intro/usecase-intro.component';
import { UsecaseIssuesComponent } from './templates/usecases/usecase-issues/usecase-issues.component';
import { UsecaseSolutionsComponent } from './templates/usecases/usecase-solutions/usecase-solutions.component';
import { UsecaseDeployUsingOpenebsComponent } from './templates/usecases/usecase-deploy-using-openebs/usecase-deploy-using-openebs.component';
import { UsecaseAdvantagesComponent } from './templates/usecases/usecase-advantages/usecase-advantages.component';
import { UsecaseCtaComponent } from './templates/usecases/usecase-cta/usecase-cta.component';
import { ProductPageHeroComponent } from './views/productpage/product-page-hero/product-page-hero.component';
import { ProductPageCloudComponent } from './views/productpage/product-page-cloud/product-page-cloud.component';
import { ProductPageBenefitComponent } from './views/productpage/product-page-benefit/product-page-benefit.component';
import { ProductPageExplainerComponent } from './views/productpage/product-page-explainer/product-page-explainer.component';
import { ProductPageLearnmoreComponent } from './views/productpage/product-page-learnmore/product-page-learnmore.component';
import { ProductPagePlatformsComponent } from './views/productpage/product-page-platforms/product-page-platforms.component';
import { MarkdownTemplateComponent } from './templates/markdown/markdown-template/markdown-template.component';
import { NewsTemplateComponent } from './templates/news/news-template/news-template.component';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { MayadataLaunchesKuberaPropelAndKuberaChaosComponent } from './pages/press/mayadata-launches-kubera-propel-and-kubera-chaos/mayadata-launches-kubera-propel-and-kubera-chaos.component';
import { MayadataPlatform9AnnouncesPartnershipComponent } from './pages/press/mayadata-platform9-announces-partnership/mayadata-platform9-announces-partnership.component';
import { HomepageKuberaMidContentComponent } from './views/homepage/homepage-kubera-mid-content/homepage-kubera-mid-content.component';
import { PerconaWorkloadPageComponent } from './pages/workloads/percona-workload-page/percona-workload-page.component';
import { TechnicalWriterComponent } from './pages/career/technical-writer/technical-writer.component';
import { DeveloperAdvocateComponent } from './pages/career/developer-advocate/developer-advocate.component';
import { OpenebsSupportComponent } from './pages/openebs-support/openebs-support.component';
import { ChaosNativeNewsComponent } from './pages/press/chaos-native-news/chaos-native-news.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { SupportpageComponent } from './views/openebs-supportpage/supportpage/supportpage.component';
import { CommunityManagerComponent } from './pages/career/community-manager/community-manager.component';
import { IntelBenchmarkComponent } from './pages/casestudies/intel-benchmark/intel-benchmark.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { OpenebsSurveySectionComponent } from './pages/openebs-survey-section/openebs-survey-section.component';
import { TestimonialSectionComponent } from './utilities/testimonial-section/testimonial-section.component';
import { BenchmarkingResourceComponent } from './pages/benchmarking-resource/benchmarking-resource.component';
import { LocalPersistentVolumesComponent } from './pages/local-persistent-volumes/local-persistent-volumes.component';
import { CockroachWorkloadPageComponent } from './pages/workloads/cockroach-workload-page/cockroach-workload-page.component';
import { LottieCacheModule, LottieModule, LottieTransferState } from 'ngx-lottie';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HomepageWhatnewComponent } from './views/homepage/homepage-whatnew/homepage-whatnew.component';
import { ProfessionalServicesComponent } from './pages/professional-services/professional-services.component';
import { ProfessionalservicespageHeroComponent } from './views/professionalservicepage/professionalservicespage-hero/professionalservicespage-hero.component';
import { ProfessionalservicespageMidComponent } from './views/professionalservicepage/professionalservicespage-mid/professionalservicespage-mid.component';
import { PricingNewTableComponent } from './views/pricingpage/pricing-new-table/pricing-new-table.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export function playerFactory() {
  return import(/* webpackChunkName: 'lottie-web' */ 'lottie-web');
}

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    HomepageHeroComponent,
    HomepageCompanieslistComponent,
    HomepageKuberaFeaturesComponent,
    HomepageKuberaBenefitsComponent,
    HomepageKuberaResourcesComponent,
    HomepageKuberaSupportsComponent,
    HomepageKuberaEventsComponent,
    HomepageKuberaFreeForeverComponent,
    HomepageMeetKuberaComponent,
    MayaDataBenefitsComponent,
    GetStartedWithWorkloadsComponent,
    Error404Component,
    PartnersComponent,
    ApplyForPartnershipComponent,
    ContactusComponent,
    CareerComponent,
    NewsComponent,
    AgilecrmInputComponent,
    AgilecrmSuccessComponent,
    BlueGreenComponent,
    CiCdComponent,
    HybridCloudComponent,
    HyperscaleComponent,
    StatefulsetsComponent,
    DeploymentsComponent,
    UsecasesFormsComponent,
    UsecasesSuccessComponent,
    IcpComponent,
    IcpFormsComponent,
    FormComponent,
    PricingComponent,
    PricingTableComponent,
    FeaturesTableComponent,
    AppLayoutComponent,
    NoHeaderFooterLayoutComponent,
    GettingStartedComponent,
    ThanksComponent,
    PricingformsComponent,
    AwsComponent,
    OpenSourceComponent,
    LandingLayoutComponent,
    TechnicalMarketingEngineerComponent,
    ProgramManagerComponent,
    SolutionArchitectComponent,
    SupportEngineerComponent,
    ResourceComponent,
    TermsComponent,
    PrivacyPolicyComponent,
    MulebotComponent,
    MulebotPolicyComponent,
    Hacktoberfest2019Component,
    Hacktoberfest2019WinnerComponent,
    LicencesComponent,
    KafkaWorkloadPageComponent,
    ElasticWorkloadPageComponent,
    MagentoWorkloadPageComponent,
    WorkloadsHeroComponent,
    WorkloadsJourneyComponent,
    WorkloadsCompanieslistComponent,
    WorkloadsOperatorsComponent,
    WorkloadsResourcesComponent,
    WorkloadsBenefitsComponent,
    WorkloadsEventsComponent,
    WorkloadsFaqsComponent,
    WorkloadsPartnersComponent,
    AristaComponent,
    ProductComponent,
    HomepageWorkloadsComponent,
    PricingFaqComponent,
    KuberaPricingComponent,
    HomepageWhyKuberaComponent,
    HomepagePricingOverviewComponent,
    ComcastComponent,
    MinioWorkloadPageComponent,
    PrometheusWorkloadPageComponent,
    KubeconSwagTermsAndConditionsComponent,
    GrowthInCommunityComponent,
    PricingCardComponent,
    PricingCardsComponent,
    PricingBlogComponent,
    SolutionEngineerComponent,
    Hacktoberfest2020Component,
    WorkloadComponent,
    WorkloadHeroComponent,
    WorkloadBenefitsComponent,
    WorkloadResourcesComponent,
    WorkloadEventsComponent,
    WorkloadPastEventsComponent,
    WorkloadFaqsComponent,
    WorkloadPartnersComponent,
    WorkloadSupportComponent,
    WhyWorkloadComponent,
    WorkloadUsersComponent,
    WorkloadHowToDeployComponent,
    SampleWorkloadPageComponent,
    WorkloadOperatorsComponent,
    WorkloadCurrentEventComponent,
    WorkloadGetStartedComponent,
    CassandraComponent,
    NewUpdatesComponent,
    AllResourcesComponent,
    ResourceCardComponent,
    HeaderComponent,
    FooterComponent,
    FooterNewsletterFormComponent,
    PlowComponent,
    LeadershipTeamComponent,
    InvestorsTeamComponent,
    AdvisorsTeamComponent,
    CareerTemplateloadComponent,
    HomepageWhatKuberaComponent,
    HomepageKuberaStorageComponent,
    HomepageKuberaMoreComponent,
    HomepageKuberaConnectsComponent,
    HomepageKuberaTrustComponent,
    PricingKuberaFeatureComponent,
    PricingKuberaFeatureComponent,
    KuberaPricingModelsComponent,
    KuberaPricingEnterpriseComponent,
    KuberaPricingCloudComponent,
    PricingHasQuestionsComponent,
    ResourcePopupComponent,
    UsecaseIntroComponent,
    UsecaseIssuesComponent,
    UsecaseSolutionsComponent,
    UsecaseDeployUsingOpenebsComponent,
    UsecaseAdvantagesComponent,
    UsecaseCtaComponent,
    ProductPageHeroComponent,
    ProductPageCloudComponent,
    ProductPageBenefitComponent,
    ProductPageExplainerComponent,
    ProductPageLearnmoreComponent,
    ProductPagePlatformsComponent,
    MarkdownTemplateComponent,
    NewsTemplateComponent,
    MayadataLaunchesKuberaPropelAndKuberaChaosComponent,
    MayadataPlatform9AnnouncesPartnershipComponent,
    HomepageKuberaMidContentComponent,
    PerconaWorkloadPageComponent,
    TechnicalWriterComponent,
    DeveloperAdvocateComponent,
    OpenebsSupportComponent,
    ChaosNativeNewsComponent,
    SupportpageComponent,
    CommunityManagerComponent,
    SeniorProgramManagerComponent,
    PrincipalSoftwareEngineerComponent,
    SystemEngineerComponent,
    IntelBenchmarkComponent,
    OpenebsSurveySectionComponent,
    TestimonialSectionComponent,
    BenchmarkingResourceComponent,
    LocalPersistentVolumesComponent,
    CockroachWorkloadPageComponent,
    HomepageWhatnewComponent,
    ProfessionalServicesComponent,
    ProfessionalservicespageHeroComponent,
    ProfessionalservicespageMidComponent,
    PricingNewTableComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserTransferStateModule,
    LottieModule.forRoot({ player: playerFactory }),
    LottieCacheModule.forRoot(),
    Routing,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    UtilitiesModule,
    MarkdownModule.forRoot({
      loader: HttpClient
    }),
    AngularFontAwesomeModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    CarouselModule.forRoot(),
    NgxIntlTelInputModule,
    BrowserAnimationsModule,
    NgxPageScrollModule,
    NgxPageScrollCoreModule,
    LazyLoadImageModule,
    PdfViewerModule,
    SlickCarouselModule
  ],
  providers: [AgileService, HttpClient, WINDOW_PROVIDERS, CommonService, CookieService, UtilsService, AuthService, LottieTransferState],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
