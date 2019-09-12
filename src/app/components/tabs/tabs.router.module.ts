import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'events',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../pages/events/events.module').then(m => m.EventsPageModule)
          }
        ]
      },
      {
        path: 'map',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../pages/map/map.module').then(m => m.MapPageModule)
          }
        ]
      },
      {
        path: 'schedule',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../pages/schedule/schedule.module').then(m => m.SchedulePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
