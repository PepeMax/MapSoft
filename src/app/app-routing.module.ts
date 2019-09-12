import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'map', loadChildren: './pages/map/map.module#MapPageModule' },
  { path: 'events', loadChildren: './pages/events/events.module#EventsPageModule' },
  { path: 'schedule', loadChildren: './pages/schedule/schedule.module#SchedulePageModule' },
  { path: 'newevent', loadChildren: './pages/newevent/newevent.module#NeweventPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
