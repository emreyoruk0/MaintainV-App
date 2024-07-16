import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'signup',
    loadComponent:
        () => import('./components/auth/signup/signup.component')
        .then(c => c.SignupComponent)
  },
  {
    path: '',
    loadComponent:
        () => import('./components/layouts/layouts.component')
        .then(c => c.LayoutsComponent),
        children: [
          {
            path: '',
            loadComponent:
                () => import('./components/home/home.component')
                .then(c => c.HomeComponent)
          },
          {
            path: 'features',
            loadComponent:
                () => import('./components/features/features.component')
                .then(c => c.FeaturesComponent)
          },
          {
            path: 'contact',
            loadComponent:
                () => import('./components/contact/contact.component')
                .then(c => c.ContactComponent)
          },
          {
            path: 'support',
            loadComponent:
                () => import('./components/support/components/support/support.component')
                .then(c => c.SupportComponent)
          },
          {
            path: 'learning-center',
            loadComponent:
                () => import('./components/learning-center/learning-center.component')
                .then(c => c.LearningCenterComponent)
          },
          // ******************** Industries ********************
          {
            path: 'manufacturing',
            loadComponent:
                () => import('./components/industries/manufacturing/manufacturing.component')
                .then(c => c.ManufacturingComponent)
          },
          {
            path: 'energy',
            loadComponent:
                () => import('./components/industries/energy/energy.component')
                .then(c => c.EnergyComponent)
          },
          {
            path: 'government-organizations',
            loadComponent:
                () => import('./components/industries/government-organizations/government-organizations.component')
                .then(c => c.GovernmentOrganizationsComponent)
          },
          {
            path: 'education',
            loadComponent:
                () => import('./components/industries/education/education.component')
                .then(c => c.EducationComponent)
          },
          {
            path: 'healthcare',
            loadComponent:
                () => import('./components/industries/healthcare/healthcare.component')
                .then(c => c.HealthcareComponent)
          },
          {
            path: 'property-management',
            loadComponent:
                () => import('./components/industries/property-management/property-management.component')
                .then(c => c.PropertyManagementComponent)
          },
          {
            path: 'hospitality',
            loadComponent:
                () => import('./components/industries/hospitality/hospitality.component')
                .then(c => c.HospitalityComponent)
          },
          {
            path: 'recreation',
            loadComponent:
                () => import('./components/industries/recreation/recreation.component')
                .then(c => c.RecreationComponent)
          },
          {
            path: 'transportation',
            loadComponent:
                () => import('./components/industries/transportation/transportation.component')
                .then(c => c.TransportationComponent)
          },
          {
            path: 'aerospace',
            loadComponent:
                () => import('./components/industries/aerospace/aerospace.component')
                .then(c => c.AerospaceComponent)
          }, // ******************** end of Industries ********************

          // ******************** Company ********************
          {
            path: 'terms-of-use',
            loadComponent:
                () => import('./components/company/terms-of-use/terms-of-use.component')
                .then(c => c.TermsOfUseComponent)
          },
          {
            path: 'privacy-policy',
            loadComponent:
                () => import('./components/company/privacy-policy/privacy-policy.component')
                .then(c => c.PrivacyPolicyComponent)
          },
          {
            path: 'delivery-and-return-notice',
            loadComponent:
                () => import('./components/company/delivery-and-return-notice/delivery-and-return-notice.component')
                .then(c => c.DeliveryAndReturnNoticeComponent)
          },
          {
            path: 'sales-agreement',
            loadComponent:
                () => import('./components/company/sales-agreement/sales-agreement.component')
                .then(c => c.SalesAgreementComponent)
          },
          {
            path: 'roi-calculator',
            loadComponent:
                () => import('./components/company/roi-calculator/roi-calculator.component')
                .then(c => c.RoiCalculatorComponent)
          },
          {
            path: 'blog',
            loadComponent:
                () => import('./components/company/blog/components/blog/blog.component')
                .then(c => c.BlogComponent)
          },
          {
            path: 'blog/:value',
            loadComponent:
                () => import('./components/company/blog/components/blog-detail/blog-detail.component')
                .then(c => c.BlogDetailComponent)
          },
          {
            path: 'pricing',
            loadComponent:
                () => import('./components/company/pricing/pricing.component')
                .then(c => c.PricingComponent)
          },
          {
            path: 'about',
            loadComponent:
                () => import('./components/company/about/about.component')
                .then(c => c.AboutComponent)
          } // ******************** end of Company ********************
        ]
  },
  {
    path: '**',
    loadComponent:
        () => import('./components/not-found/not-found.component')
        .then(c => c.NotFoundComponent)
  }
];
