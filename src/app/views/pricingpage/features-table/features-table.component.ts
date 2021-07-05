import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features-table',
  templateUrl: './features-table.component.html',
  styleUrls: ['./features-table.component.scss']
})
export class FeaturesTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  objectKeys = Object.keys;
  features = {
    support: {
      title: `Support`,
      items:
        [
          {
            title: `Support Coverage`,
            description: `Community support`,
            basic: `Community`,
            standard: `8/5 Enterprise Support`,
            enterprise: `24/7 Enterprise Support`
          },
          {
            title: `In-product Chat`,
            description: ``,
            basic: `✓`,
            standard: `✓`,
            enterprise: `✓`
          },
          {
            title: `Access to Knowledge Base`,
            description: `Access to knowledge base, tutorials and documentation`,
            basic: `✓`,
            standard: `✓`,
            enterprise: `✓`
          },
          {
            title: `Early Access Features`,
            description: ``,
            basic: ``,
            standard: `✓`,
            enterprise: `✓`
          },
          {
            title: `ChatOps Notifications`,
            description: ``,
            basic: ``,
            standard: `✓`,
            enterprise: `✓`
          },
          {
            title: `Annual Architecture Review`,
            description: ``,
            basic: ``,
            standard: `✓`,
            enterprise: `✓`
          },
          {
            title: `Quarterly Roadmap Review`,
            description: ``,
            basic: ``,
            standard: ``,
            enterprise: `✓`
          }
        ]
    },
    dataplaneServices: {
      title: `Dataplane Services`,
      items: [
        {
          title: `OpenEBS Enterprise Edition`,
          description: ``,
          basic: `✓`,
          standard: `✓`,
          enterprise: `✓`
        },
        {
          title: `Dataplane Deployment Wizard`,
          description: ``,
          basic: `✓`,
          standard: `✓`,
          enterprise: `✓`
        },
        {
          title: `Hyperconverged or Disagregated Storage options`,
          description: ``,
          basic: `HCI / DS`,
          standard: `HCI / DS`,
          enterprise: `HCI / DS`
        },
        {
          title: `Pre-flight Checks`,
          description: ``,
          basic: `✓`,
          standard: `✓`,
          enterprise: `✓`
        },
        {
          title: `Self POC Workflows`,
          description: ``,
          basic: `✓`,
          standard: `✓`,
          enterprise: `✓`
        },
        {
          title: `Cloud and Hardware Resource Management`,
          description: ``,
          basic: `✓`,
          standard: `✓`,
          enterprise: `✓`
        },
        {
          title: `Provision Storage Pools`,
          description: ``,
          basic: `✓`,
          standard: `✓`,
          enterprise: `✓`
        },
        {
          title: `Visual Control of Dataplanes Across AZ`,
          description: ``,
          basic: `✓`,
          standard: `✓`,
          enterprise: `✓`
        },
        {
          title: `Manage Kubernetes Storage Resources`,
          description: ``,
          basic: `✓`,
          standard: `✓`,
          enterprise: `✓`
        },
        {
          title: `Capacity Management`,
          description: ``,
          basic: `✓`,
          standard: `✓`,
          enterprise: `✓`
        }
      ]
    },
    containerWorkloadManagement: {
      title: `Container Workload Management`,
      items: [
        {
          title: `Auto Discovery of Workloads`,
          description: ``,
          basic: `✓`,
          standard: `✓`,
          enterprise: `✓`
        },
        {
          title: `Collectors and Dashboards for Popular Workloads`,
          description: ``,
          basic: ``,
          standard: `✓`,
          enterprise: `✓`
        },
        {
          title: `Workload Compliance Monitoring`,
          description: ``,
          basic: ``,
          standard: `✓`,
          enterprise: `✓`
        },
        {
          title: `Crash-consistent Backup and Restore`,
          description: ``,
          basic: ``,
          standard: `✓`,
          enterprise: `✓`
        },
        {
          title: `Workload Topology with Instant Snapshot & Clone`,
          description: ``,
          basic: ``,
          standard: `✓`,
          enterprise: `✓`
        }
      ]
    },
    dashboardsAndReports: {
      title: `Dashboards & Reports`,
      items: [
        {
          title: `Capacity Reports`,
          description: ``,
          basic: ``,
          standard: `✓`,
          enterprise: `✓`
        },
        {
          title: `Guided Benchmarks`,
          description: ``,
          basic: ``,
          standard: `*`,
          enterprise: `*`
        },
        {
          title: `Performance Budgeting`,
          description: ``,
          basic: ``,
          standard: `*`,
          enterprise: `*`
        }
      ]
    },
    loggingAndMonitoring: {
      title: `Logging & Monitoring`,
      items: [
        {
          title: `Production-grade off-cluster Logging & Monitoring`,
          description: ``,
          basic: `✓`,
          standard: `✓`,
          enterprise: `✓`
        },
        {
          title: `Off-cluster Logs Storage Analysis`,
          description: ``,
          basic: `7 days`,
          standard: `30 days`,
          enterprise: `180 days`
        },
        {
          title: `Real-time Topology View`,
          description: ``,
          basic: ``,
          standard: `✓`,
          enterprise: `✓`
        },
        {
          title: `Adaptive Alerting`,
          description: ``,
          basic: ``,
          standard: `✓`,
          enterprise: `✓`
        }
      ]
    },
    backupAndResilience: {
      title: `Backup & Resilience`,
      items: [
        {
          title: `Pre-flight Checks and Active Health Monitoring`,
          description: ``,
          basic: `✓`,
          standard: `✓`,
          enterprise: `✓`
        },
        {
          title: `Compliance Reports`,
          description: ``,
          basic: ``,
          standard: `✓`,
          enterprise: `✓`
        },
        {
          title: `Per Workload Backup and Restore`,
          description: ``,
          basic: ``,
          standard: `✓`,
          enterprise: `Adaptive`
        },
        {
          title: `Pre-staged Disaster Recovery`,
          description: ``,
          basic: ``,
          standard: `✓`,
          enterprise: `✓`
        },
        {
          title: `Data-Migration-as-Service (DMaaS)`,
          description: ``,
          basic: ``,
          standard: `AWS, GCP`,
          enterprise: `any S3 target`
        },
        {
          title: `Chaos Experiment Results`,
          description: ``,
          basic: ``,
          standard: `✓`,
          enterprise: `✓`
        }
      ]
    },
    enterpriseIntegrations: {
      title: `Enterprise Integrations`,
      items: [
        {
          title: `Kubernetes Out of the Box integrations`,
          description: ``,
          basic: `✓`,
          standard: `✓`,
          enterprise: `✓`
        },
        {
          title: `Integrate w/ public and private cloud`,
          description: ``,
          basic: `✓`,
          standard: `✓`,
          enterprise: `✓`
        },
        {
          title: `Container Storage Interface (CSI)`,
          description: ``,
          basic: ``,
          standard: `Major Cloud Vendors`,
          enterprise: `Cloud, Hypervisor & HW`
        },
        {
          title: `Team Management with RBAC`,
          description: ``,
          basic: ``,
          standard: `Up to 15 users`,
          enterprise: `Unlimited`
        },
        {
          title: `On-prem support`,
          description: ``,
          basic: ``,
          standard: ``,
          enterprise: `✓`
        },
        {
          title: `Authentication Support`,
          description: ``,
          basic: `GitHub, Google, Standalone`,
          standard: `GitHub, Google, Standalone`,
          enterprise: `GitHub, Google, Standalone & Active Directory (AD)`
        }
      ]
    }
  }

}
