import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonImg,
  IonRow,
  IonTitle,
  IonToolbar,
  isPlatform,
} from '@ionic/react';
import React from 'react';
import Announcements from './Announcements';
import News from './News';
import PhotoSlider from './PhotoSlider';
import UpNextEvent from './UpNextEvent';
import UpNextTime from './UpNextTime';

const styles = {
  logo: {
    display: 'block',
    maxWidth: '40px',
    maxHeight: '40px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  iOSTitle: {
    paddingTop: '25px',
    width: 'auto',
    marginLeft: '-64px',
    textAlign: 'left',
  },
  iOSButton: {
    width: 'auto',
    height: '45px',
    position: 'absolute',
    zIndex: '99',
    bottom: '-15px',
    right: '20px',
    paddingTop: '10px',
    paddingBottom: '5px',
  },
  androidTitle: {
    paddingTop: '25px',
    width: 'auto',
    textAlign: 'left',
  },
  androidButton: {
    width: 'auto',
    height: '25px',
    position: 'absolute',
    zIndex: '99',
    bottom: '-20px',
    right: '20px',
    paddingTop: '5px',
    paddingBottom: '5px',
  },
};

const HomeInner: React.FC = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonImg
            src="/assets/ymca-logo.png"
            alt="ymca-logo"
            style={styles.logo}
          />
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <PhotoSlider />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonTitle
                style={
                  isPlatform('ios') ? styles.iOSTitle : styles.androidTitle
                }
              >
                Announcements
              </IonTitle>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <Announcements />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonTitle
                style={
                  isPlatform('ios') ? styles.iOSTitle : styles.androidTitle
                }
              >
                Up Next
              </IonTitle>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <UpNextTime />
            </IonCol>
            <IonCol>
              <UpNextEvent />
              <IonButton
                color={'primary'}
                size={'small'}
                fill={'outline'}
                style={
                  isPlatform('ios') ? styles.iOSButton : styles.androidButton
                }
                href={'/events'}
              >
                SCHEDULE
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonTitle
                style={
                  isPlatform('ios') ? styles.iOSTitle : styles.androidTitle
                }
              />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <News />
              <IonButton
                color={'primary'}
                size={'small'}
                fill={'outline'}
                style={
                  isPlatform('ios') ? styles.iOSButton : styles.androidButton
                }
                href={'/posts'}
              >
                NEWS
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </>
  );
};

export default HomeInner;
