import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonSpinner,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/float-elements.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/typography.css';
import { book, calendar, send, time, map, home } from 'ionicons/icons';
import React, { Suspense } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { CacheProvider, NetworkErrorBoundary } from 'rest-hooks';
import Details from './pages/Details';
import EventDetail from './pages/EventDetail';
import EventList from './pages/EventList';
import Posts from './pages/Posts';
import Rooms from './pages/Rooms';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import ResourceCategoryDetail from './pages/ResourceCategoryDetail/index';
import ResourceCategoryList from './pages/ResourceCategoryList/index';
import ResourcePageDetail from './pages/ResourcePageDetail/index';
import Press from './pages/PressHome/index';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <CacheProvider>
    <IonApp>
      <Suspense fallback={<IonSpinner />}>
        <NetworkErrorBoundary>
          <IonReactRouter>
            <IonTabs>
              <IonRouterOutlet>
                <Route path="/press" component={Press} exact={true} />
                <Route path="/rooms" component={Rooms} exact={true} />
                <Route path="/posts" component={Posts} exact={true} />
                <Route path="/posts/:id" component={PostDetail} />
                <Route path="/events" component={EventList} exact={true} />
                <Route path="/events/:id" component={EventDetail} />
                <Route path="/home" component={Home} exact={true} />
                <Route
                  path="/resources"
                  component={ResourceCategoryList}
                  exact={true}
                />
                <Route
                  path="/resources/:categoryId/pages/:pageId"
                  component={ResourcePageDetail}
                />
                <Route
                  path="/resources/:id"
                  component={ResourceCategoryDetail}
                />
                <Route path="/tab1" component={Tab1} exact={true} />
                <Route path="/tab2" component={Tab2} exact={true} />
                <Route path="/tab2/details" component={Details} />
                <Route path="/tab3" component={Tab3} />
                <Route
                  path="/"
                  render={() => <Redirect to="/home" />}
                  exact={true}
                />
              </IonRouterOutlet>
              <IonTabBar slot="bottom">
                <IonTabButton tab="Press" href="/press">
                  <IonIcon icon={time} />
                  <IonLabel>Press</IonLabel>
                </IonTabButton>
                <IonTabButton tab="rooms" href="/rooms">
                  <IonIcon icon={map} />
                  <IonLabel>Rooms</IonLabel>
                </IonTabButton>
                <IonTabButton tab="Home" href="/home">
                  <IonIcon icon={home} />
                  <IonLabel>Home</IonLabel>
                </IonTabButton>
                <IonTabButton tab="events" href="/events">
                  <IonIcon icon={calendar} />
                  <IonLabel>Schedule</IonLabel>
                </IonTabButton>
                <IonTabButton tab="resources" href="/resources">
                  <IonIcon icon={book} />
                  <IonLabel>Resources</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab3" href="/tab3">
                  <IonIcon icon={send} />
                  <IonLabel>Tab Three</IonLabel>
                </IonTabButton>
              </IonTabBar>
            </IonTabs>
          </IonReactRouter>
        </NetworkErrorBoundary>
      </Suspense>
    </IonApp>
  </CacheProvider>
);

export default App;
