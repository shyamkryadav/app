import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'admin',
        loadChildren: () =>
          import('./Admin/admin.module').then((m) => m.AdminModule),
        data: { preload: true },
      },
];
