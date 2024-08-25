import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Habits.css';

const Habits: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Habits</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Habits</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Habits" />
      </IonContent>
    </IonPage>
  );
};

export default Habits;
