import { Routes, RouterModule } from '@angular/router';

import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

import { DataEventRecordsListComponent } from './dataeventrecords/dataeventrecords-list.component';
import { DataEventRecordsCreateComponent } from './dataeventrecords/dataeventrecords-create.component';
import { DataEventRecordsEditComponent } from './dataeventrecords/dataeventrecords-edit.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'Forbidden', component: ForbiddenComponent },
    { path: 'Unauthorized', component: UnauthorizedComponent },
    {
        path: 'dataeventrecords', component: DataEventRecordsListComponent
    },
    {
        path: 'dataeventrecords/create',
        component: DataEventRecordsCreateComponent
    },
    {
        path: 'dataeventrecords/edit/:id',
        component: DataEventRecordsEditComponent
    },
    {
        path: 'dataeventrecords/list',
        component: DataEventRecordsListComponent,
    }
];

export const routing = RouterModule.forRoot(appRoutes);
