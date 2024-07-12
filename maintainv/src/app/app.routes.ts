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
          }
        ]
  },
  {
    path: '**',
    loadComponent:
        () => import('./components/not-found/not-found.component')
        .then(c => c.NotFoundComponent)
  }
];
