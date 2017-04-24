import { Component } from '@angular/core';

import { LoginPage } from '../login/login';
import { FeedPage } from '../feed/feed';
import { CameraPage } from '../camera/camera';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = LoginPage;
  tab2Root = FeedPage;
  tab3Root = CameraPage;

  constructor() {

  }
}
