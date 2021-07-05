import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { CareerComponent } from './pages/career/career.component';
import { BlueGreenComponent } from './pages/usecases/blue-green/blue-green.component';
import { CiCdComponent } from './pages/usecases/ci-cd/ci-cd.component';
import { HybridCloudComponent } from './pages/usecases/hybrid-cloud/hybrid-cloud.component';
import { HyperscaleComponent } from './pages/usecases/hyperscale/hyperscale.component';
import { AwsComponent } from './pages/usecases/aws/aws.component';
import { StatefulsetsComponent } from "./pages/usecases/statefulsets/statefulsets.component";
import { DeploymentsComponent } from "./pages/usecases/deployments/deployments.component";
import { NewsComponent } from './pages/news/news.component';
import { PartnersComponent } from './pages/partners/partners.component';
import { ApplyForPartnershipComponent } from './pages/partners/apply-for-partnership/apply-for-partnership.component';
import { IcpComponent } from './pages/icp/icp.component';
import { Error404Component } from './pages/error404/error404.component';
import { PricingComponent } from "./pages/pricing/pricing.component";
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { GettingStartedComponent } from './pages/getting-started/getting-started.component';
import { ThanksComponent } from './pages/thanks/thanks.component';
import { OpenSourceComponent } from './pages/open-source/open-source.component';
import { ProductComponent } from './pages/product/product.component';
import { LandingLayoutComponent } from './layout/landing-layout/landing-layout.component';
import { TechnicalMarketingEngineerComponent } from "./pages/career/technical-marketing-engineer/technical-marketing-engineer.component";
import { ProgramManagerComponent } from "./pages/career/program-manager/program-manager.component";
import { SolutionArchitectComponent } from "./pages/career/solution-architect/solution-architect.component";
import { SupportEngineerComponent } from "./pages/career/support-engineer/support-engineer.component";
import { ResourceComponent } from './pages/resource/resource.component';
import { TermsComponent } from './pages/terms/terms.component';
import { LicencesComponent } from './components/licences/licences.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { MulebotComponent } from './pages/integrations/mulebot/mulebot.component';
import { MulebotPolicyComponent } from './pages/integrations/mulebot-policy/mulebot-policy.component';
import { Hacktoberfest2019WinnerComponent } from './components/hacktoberfest/hacktoberfest2019-winner/hacktoberfest2019-winner.component'
import { NoHeaderFooterLayoutComponent } from './layout/no-header-footer-layout/no-header-footer-layout.component';
import { KafkaWorkloadPageComponent } from "./pages/workloads/kafka-workload-page/kafka-workload-page.component";
import { AristaComponent } from './pages/casestudies/adopters/arista/arista.component';
import { ComcastComponent } from './pages/casestudies/adopters/comcast/comcast.component';
import { MagentoWorkloadPageComponent } from "./pages/workloads/magento-workload-page/magento-workload-page.component";
import * as Seo from "./contents/seo.json";
import { ElasticWorkloadPageComponent } from "./pages/workloads/elastic-workload-page/elastic-workload-page.component";
import { MinioWorkloadPageComponent } from "./pages/workloads/minio-workload-page/minio-workload-page.component";
import { PrometheusWorkloadPageComponent } from './pages/workloads/prometheus-workload-page/prometheus-workload-page.component';
import { KubeconSwagTermsAndConditionsComponent } from './pages/kubecon-swag-terms-and-conditions/kubecon-swag-terms-and-conditions.component';
import { GrowthInCommunityComponent } from './pages/press/growth-in-community/growth-in-community.component';
import { MayadataLaunchesKuberaPropelAndKuberaChaosComponent } from './pages/press/mayadata-launches-kubera-propel-and-kubera-chaos/mayadata-launches-kubera-propel-and-kubera-chaos.component';
import { SolutionEngineerComponent } from './pages/career/solution-engineer/solution-engineer.component';
import { Hacktoberfest2020Component } from './components/hacktoberfest/hacktoberfest2020/hacktoberfest2020.component';
import { CassandraComponent } from './pages/workloads/cassandra/cassandra.component';
import { SampleWorkloadPageComponent } from './pages/workloads/sample-workload-page/sample-workload-page.component';
import { MayadataPlatform9AnnouncesPartnershipComponent } from './pages/press/mayadata-platform9-announces-partnership/mayadata-platform9-announces-partnership.component';
import { PerconaWorkloadPageComponent } from './pages/workloads/percona-workload-page/percona-workload-page.component';
import { TechnicalWriterComponent } from './pages/career/technical-writer/technical-writer.component';
import { DeveloperAdvocateComponent } from './pages/career/developer-advocate/developer-advocate.component';
import { OpenebsSupportComponent } from './pages/openebs-support/openebs-support.component';
import { ChaosNativeNewsComponent } from './pages/press/chaos-native-news/chaos-native-news.component';
import { CommunityManagerComponent } from './pages/career/community-manager/community-manager.component';
import { IntelBenchmarkComponent } from './pages/casestudies/intel-benchmark/intel-benchmark.component';
import { SeniorProgramManagerComponent } from "./pages/career/senior-program-manager/senior-program-manager.component";
import { PrincipalSoftwareEngineerComponent } from "./pages/career/principal-software-engineer/principal-software-engineer.component";
import { SystemEngineerComponent } from "./pages/career/system-engineer/system-engineer.component";
import { BenchmarkingResourceComponent } from './pages/benchmarking-resource/benchmarking-resource.component';
import { LocalPersistentVolumesComponent } from './pages/local-persistent-volumes/local-persistent-volumes.component';
import { CockroachWorkloadPageComponent } from './pages/workloads/cockroach-workload-page/cockroach-workload-page.component';
import { ProfessionalServicesComponent } from './pages/professional-services/professional-services.component';
const routes: Routes = [
  // App routes
  {
    path: '',
    component: LandingLayoutComponent,
    children: [
      { path: '', component: HomeComponent, data: Seo.pages.homePageSeo }
      // {
      //   path: '', component: HomeComponent, data: {
      //     seo: {
      //       title: 'MayaData | Data Agility Delivered',
      //       metaTags: [
      //         { name: 'description', content: 'At MayaData, we believe containerization, Kubernetes and other trends such as DevOps enable a fundamentally better approach to delivering data management.' },
      //         { property: 'og:title', content: 'MayaData | Data Agility Delivered' },
      //         { proprety: 'og:description', content: 'At MayaData, we believe containerization, Kubernetes and other trends such as DevOps enable a fundamentally better approach to delivering data management.' },
      //         { property: 'og:image', content: 'https://mayadata.io/assets/images/mayadata.png' },
      //         { property: 'og:url', content: '/' },
      //         { name: "twitter:card", content: "summary_large_image" },
      //       ]
      //     }
      //   }
      // }

    ]
  },
  {
    path: '',
    component: NoHeaderFooterLayoutComponent,
    children: [
      {
        path: "licenses", component: LicencesComponent
      }
    ]
  },
  {
    path: '',
    component: AppLayoutComponent,

    // routes with header and footer
    children: [
      { path: '', component: HomeComponent, data: Seo.pages.homePageSeo },
      { path: 'aboutus', component: AboutComponent, data: Seo.pages.aboutPageSeo },
      // {
      //   path: '', component: HomeComponent, data: {
      //     seo: {
      //       title: 'MayaData | Data Agility Delivered',
      //       metaTags: [
      //         { name: 'description', content: 'At MayaData, we believe containerization, Kubernetes and other trends such as DevOps enable a fundamentally better approach to delivering data management.' },
      //         { property: 'og:title', content: 'MayaData | Data Agility Delivered' },
      //         { proprety: 'og:description', content: 'At MayaData, we believe containerization, Kubernetes and other trends such as DevOps enable a fundamentally better approach to delivering data management.' },
      //         { property: 'og:image', content: 'https://mayadata.io/assets/images/mayadata.png' },
      //         { property: 'og:url', content: '/' },
      //         { name: "twitter:card", content: "summary_large_image" },
      //       ]
      //     }
      //   }
      // },

      // {
      //   path: 'aboutus', component: AboutComponent, data: {
      //     seo: {
      //       title: 'About - MayaData | Data Agility Delivered',
      //       metaTags: [
      //         { name: 'description', content: 'At MayaData, we believe containerization, Kubernetes and other trends such as DevOps enable a fundamentally better approach to delivering data management.' },
      //         { property: 'og:title', content: 'About - MayaData | Data Agility Delivered' },
      //         { proprety: 'og:description', content: 'At MayaData, we believe containerization, Kubernetes and other trends such as DevOps enable a fundamentally better approach to delivering data management.' },
      //         { property: 'og:image', content: 'https://mayadata.io/assets/images/mayadata.png' },
      //         { property: 'og:url', content: '/aboutus' },
      //         { name: "twitter:card", content: "summary_large_image" },
      //       ]
      //     }
      //   }
      // },
      { path: 'careers', component: CareerComponent, data: Seo.pages.careerPageSeo },
      { path: 'careers/technical-marketing-engineer', component: TechnicalMarketingEngineerComponent, data: Seo.pages.careerPageSeo["technical-marketing-engineer"] },
      { path: 'careers/support-engineer', component: SupportEngineerComponent, data: Seo.pages.careerPageSeo["support-engineer"] },
      { path: 'careers/program-manager', component: ProgramManagerComponent, data: Seo.pages.careerPageSeo["program-manager"] },
      { path: 'careers/solution-architect', component: SolutionArchitectComponent, data: Seo.pages.careerPageSeo["solution-architect"] },
      { path: 'careers/solution-engineer', component: SolutionEngineerComponent, data: Seo.pages.careerPageSeo["solution-engineer"] },
      { path: 'careers/technical-writer', component: TechnicalWriterComponent, data: Seo.pages.careerPageSeo["technical-writer"] },
      { path: 'careers/developer-advocate', component: DeveloperAdvocateComponent, data: Seo.pages.careerPageSeo["developer-advocate"] },
      { path: 'careers/community-manager', component: CommunityManagerComponent, data: Seo.pages.careerPageSeo["community-manager"] },
      { path: 'careers/principal-software-engineer', component: PrincipalSoftwareEngineerComponent, data: Seo.pages.careerPageSeo["principal-software-engineer"] },
      { path: 'careers/system-engineer', component: SystemEngineerComponent, data: Seo.pages.careerPageSeo["system-engineer"] },
      { path: 'careers/senior-program-manager', component: SeniorProgramManagerComponent, data: Seo.pages.careerPageSeo["senior-program-manager"] },
      { path: 'news', component: NewsComponent, data: Seo.pages.newsPageSeo },
      { path: 'news/mayadata-announces-record-growth-in-community-adoption-and-revenues', component: GrowthInCommunityComponent, data: Seo.pages.newsPageSeo["growth-in-community"] },
      { path: 'news/mayadata-launches-kubera-propel-and-kubera-chaos', component: MayadataLaunchesKuberaPropelAndKuberaChaosComponent, data: Seo.pages.newsPageSeo["kubera-propel-and-kubera-chaos"] },
      { path: 'news/mayadata-platform9-announces-partnership', component: MayadataPlatform9AnnouncesPartnershipComponent, data: Seo.pages.newsPageSeo["platform9-announces-partnership"] },
      { path: 'news/chaos-native', component: ChaosNativeNewsComponent, data: Seo.pages.newsPageSeo["chaos-native"] },

      { path: 'partners', component: PartnersComponent, data: Seo.pages.partnersPageSeo },
      { path: 'partners/apply-for-partnership', component: ApplyForPartnershipComponent, data: Seo.pages.partnersPageSeo["apply-for-partnership"] },
      { path: 'ICP', redirectTo: 'icp', pathMatch: 'full' },
      { path: 'icp', component: IcpComponent, data: Seo.pages.icpPageSeo },
      { path: 'product', component: ProductComponent, data: Seo.pages.productPageSeo },
      { path: 'kubera', redirectTo: 'product', pathMatch: 'full' },
      { path: 'product/integrations/mulebot', component: MulebotComponent, data: {} },
      { path: 'product/integrations/mulebot/policy', component: MulebotPolicyComponent, data: {} },
      { path: 'mdap', redirectTo: 'product' },
      { path: 'open-source', component: OpenSourceComponent, data: Seo.pages.opensourcePageSeo },
      { path: 'get-started', redirectTo: 'getting-started', pathMatch: 'full' },
      { path: 'getting-started', component: GettingStartedComponent, data: Seo.pages.gettingstartedPageSeo },
      { path: 'thankyou', component: ThanksComponent },
      { path: 'contactus', component: ContactusComponent, data: Seo.pages.contactusPageSeo },
      { path: 'pricing', redirectTo: 'get-pricing', pathMatch: 'full' },
      { path: 'get-pricing', component: PricingComponent, data: Seo.pages.getpricingPageSeo },
      { path: 'resources', component: ResourceComponent, data: Seo.pages.resourcesPageSeo },
      { path: 'terms', component: TermsComponent, data: {} },
      { path: 'openebs-support', component: OpenebsSupportComponent, data: Seo.pages.getopenEBSPageSeo },
      { path: 'benchmarking-resources-for-Kubernetes', component: BenchmarkingResourceComponent, data: Seo.pages.getbenchmarkPageSeo },
      { path: 'local-persistent-volume-openebs', component: LocalPersistentVolumesComponent, data: Seo.pages.getlocalVolPageSeo },
      { path: 'privacy-policy', component: PrivacyPolicyComponent, data: {} },
      { path: 'hacktoberfest', redirectTo: 'hacktoberfest-2020' },
      { path: 'hacktoberfest-2020', component: Hacktoberfest2020Component, data: Seo.pages.hacktoberfestPageSeo["2020"] },
      { path: 'workloads/kafka', redirectTo: 'workloads/kafka-on-kubernetes' },
      { path: 'workloads/kafka-on-kubernetes', component: KafkaWorkloadPageComponent, data: Seo.pages.workloadsPageSeo.kafka },
      { path: 'workloads/elasticsearch', redirectTo: 'workloads/elasticsearch-on-kubernetes' },
      { path: 'workloads/elasticsearch-on-kubernetes', component: ElasticWorkloadPageComponent, data: Seo.pages.workloadsPageSeo.elastic },
      { path: 'workloads/cockroachDB', redirectTo: 'workloads/cockroachDB-on-kubernetes' },
      { path: 'workloads/cockroachDB-on-kubernetes', component: CockroachWorkloadPageComponent, data: Seo.pages.workloadsPageSeo.cockroachDB },
      { path: 'workloads/magento', redirectTo: 'workloads/magento-on-kubernetes' },
      { path: 'workloads/magento-on-kubernetes', component: MagentoWorkloadPageComponent, data: Seo.pages.workloadsPageSeo.magento },
      { path: 'workloads/cassandra', redirectTo: 'workloads/cassandra-on-kubernetes-kubera' },
      { path: 'workloads/cassandra-on-kubernetes', redirectTo: 'workloads/cassandra-on-kubernetes-kubera' },
      { path: 'workloads/cassandra-on-kubernetes-kubera', component: CassandraComponent, data: Seo.pages.workloadsPageSeo.cassandra },
      { path: 'workloads/minio', redirectTo: 'workloads/minio-on-kubernetes-kubera' },
      { path: 'workloads/minio-on-kubernetes', redirectTo: 'workloads/minio-on-kubernetes-kubera' },
      { path: 'workloads/minio-on-kubernetes-kubera', component: MinioWorkloadPageComponent, data: Seo.pages.workloadsPageSeo.minio },
      { path: 'workloads/prometheus', redirectTo: 'workloads/prometheus-on-kubernetes' },
      { path: 'workloads/prometheus-on-kubernetes', component: PrometheusWorkloadPageComponent, data: Seo.pages.workloadsPageSeo.prometheus },
      { path: 'workloads/percona', redirectTo: 'workloads/percona-on-kubernetes-kubera' },
      { path: 'workloads/percona-on-kubernetes', redirectTo: 'workloads/percona-on-kubernetes-kubera' },
      { path: 'workloads/percona-on-kubernetes-kubera', component: PerconaWorkloadPageComponent, data: Seo.pages.workloadsPageSeo.percona },
      // { path: 'workloads/sample-workload', component: SampleWorkloadPageComponent },
      { path: 'workloads', redirectTo: 'resources' },
      { path: 'usecases/blue-green-deployment', component: BlueGreenComponent, data: Seo.pages.usecasesPageSeo["blue-green-deployment"] },
      { path: 'usecases/ci-cd', component: CiCdComponent, data: Seo.pages.usecasesPageSeo["ci-cd"] },
      { path: 'usecases/multi-cloud', component: HybridCloudComponent, data: Seo.pages.usecasesPageSeo["hyper-scale"] },
      { path: 'usecases/hyper-scale', component: HyperscaleComponent, data: Seo.pages.usecasesPageSeo["hyper-scale"] },
      { path: 'usecases/cross-az', component: AwsComponent, data: Seo.pages.usecasesPageSeo["cross-az"] },
      { path: 'usecases/statefulsets', component: StatefulsetsComponent, data: Seo.pages.usecasesPageSeo.statefulsets },
      { path: 'usecases/deployments', component: DeploymentsComponent, data: Seo.pages.usecasesPageSeo.deployments },
      { path: 'usecases', redirectTo: 'resources' },
      { path: 'casestudies/adopters/arista', component: AristaComponent, data: Seo.pages.casestudyPageSeo.arista },
      { path: 'casestudies/adopters/comcast', component: ComcastComponent, data: Seo.pages.casestudyPageSeo.comcast },
      { path: 'casestudies', pathMatch: 'full', redirectTo: 'resources' },
      { path: 'casestudies/adopters', pathMatch: 'full', redirectTo: 'resources' },
      { path: 'casestudies/intel-and-mayadata-benchmarking-of-openEBS-mayastor', component: IntelBenchmarkComponent, data: Seo.pages.casestudyPageSeo.intelbenchmark },
      { path: 'kubecon-swag-terms-and-conditions', component: KubeconSwagTermsAndConditionsComponent },
      { path: 'professional-services-mayadata-openebs', component: ProfessionalServicesComponent, data: Seo.pages.professionalServicePageSeo },
      // {
      //   path: 'professional-services-mayadata-openebs', component: ProfessionalServicesComponent, data: {
      //     seo: {
      //       title: 'Accelerate your next data on Kubernetes project by partnering with the experts at MayaData',
      //       metaTags: [
      //         { name: 'description', content: 'Enhance performance and efficiency of your stateful workloads by using container attached storage OpenEBS' },
      //         { property: 'og:title', content: 'Accelerate your next data on Kubernetes project by partnering with the experts at MayaData' },
      //         { proprety: 'og:description', content: 'Enhance performance and efficiency of your stateful workloads by using container attached storage OpenEBS' },
      //         { property: 'og:image', content: 'https://mayadata.io/assets/images/mayadata.png' },
      //         { property: 'og:url', content: '/professional-services-mayadata-openebs' },
      //         { name: "twitter:card", content: "summary_large_image" },
      //       ]
      //     }
      //   }
      // },

      { path: 'not-found', component: Error404Component, data: {} },
    ]
  },
  // routes with out header and footer
  { path: '**', redirectTo: 'not-found' },
];

export const Routing = RouterModule.forRoot(routes, { anchorScrolling: "enabled", initialNavigation: 'enabled' });
