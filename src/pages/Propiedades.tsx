import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Propiedades: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Propiedades</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      Lista de propiedades
      </IonContent>
    </IonPage>
  );
};

export default Propiedades;