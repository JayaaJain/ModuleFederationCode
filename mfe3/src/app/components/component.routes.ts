import { Routes } from '@angular/router';
import { TopicViewComponent } from './topic-view/topic-view.component';
import { UserViewComponent } from './user-view/user-view.component';

export const VIEW_ROUTES: Routes = [
    {
      path: 'userview',
      component: UserViewComponent
    },
    {
      path: 'topicview',
      component: TopicViewComponent
    }
];