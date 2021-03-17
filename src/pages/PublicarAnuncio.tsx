import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const PublicarAnuncio: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Publicar Anuncio</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      Publica tu Propiedad/Inmueble
      </IonContent>
    </IonPage>
  );
};

export default PublicarAnuncio;