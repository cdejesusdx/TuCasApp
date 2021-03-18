import React, { useState } from 'react';
import  {IonRow, IonButton} from '@ionic/react';
import { IonContent, IonItemDivider, IonPage, IonList, IonListHeader, IonItem, IonLabel, IonCol, IonSelect, IonSelectOption} from '@ionic/react';

const Inicio: React.FC = () => {

  const [provincia, setProvincia] = useState<string>(""); 
  const [sectores, setSectores] = useState<string>("");
  const [tipoInmueble, setTipoInmueble] = useState<string>("");  
  const [tipoPublicacion, setTipoPublicacion] = useState<string>("");

  const buscarAnuncios = () => {

  };

  return (
    <IonPage>
    <IonContent>
      <IonList>
        <IonListHeader>
          <IonLabel>
          ¡Busca tu Propiedad!
          </IonLabel>
        </IonListHeader>

        <IonItem>
          <IonLabel>Provincias</IonLabel>
          <IonSelect value={provincia} placeholder="[Seleccione]" onIonChange={e => setProvincia(e.detail.value)}>
          <IonSelectOption value="TodasProvincias">Todas las Provincias</IonSelectOption>
              <IonSelectOption value="SantoDomingoCentro">Santo Domingo Centro</IonSelectOption>
              <IonSelectOption value="SantoDomingoOeste">Santo Domingo Oeste</IonSelectOption>
              <IonSelectOption value="SantoDomingoNorte">Santo Domingo Norte</IonSelectOption>
              <IonSelectOption value="SantiagoCaballeros">Santiago de los Caballeros</IonSelectOption>
          </IonSelect>
        </IonItem>
        
        <IonItem>
          <IonLabel>Sectores</IonLabel>
          <IonSelect value={sectores} multiple={true} placeholder="[Seleccione]" onIonChange={e => setSectores(e.detail.value)}>
          <IonSelectOption value="TodosSectores">Todos los Sectores</IonSelectOption>
              <IonSelectOption value="ArroyoHondo">Arroyo Hondo</IonSelectOption>
              <IonSelectOption value="av27Febrero">Av. 27 de Febrero</IonSelectOption>
              <IonSelectOption value="BellaVista">Bella Vista</IonSelectOption>
              <IonSelectOption value="JardinesEste">Jardines del Este</IonSelectOption>
              <IonSelectOption value="JardinesNote">Jardines del Note</IonSelectOption>
          </IonSelect>
        </IonItem>

        <IonItem>
            <IonLabel>Inmueble</IonLabel>
            <IonSelect value={tipoInmueble} placeholder="[Seleccione]" onIonChange={e => setTipoInmueble(e.detail.value)}>
              <IonSelectOption value="Local Comercial">Local Comercial</IonSelectOption>
              <IonSelectOption value="Apartamento">Apartamento</IonSelectOption>
              <IonSelectOption value="Casa">Casa</IonSelectOption>
              <IonSelectOption value="Finca">Finca</IonSelectOption>
              <IonSelectOption value="Villa">Villa</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem>
            <IonLabel>Publicación</IonLabel>
            <IonSelect value={tipoPublicacion} placeholder="[Seleccione]" onIonChange={e => setTipoPublicacion(e.detail.value)}>
              <IonSelectOption value="Venta">Venta</IonSelectOption>
              <IonSelectOption value="Alquiler">Alquiler</IonSelectOption>
              <IonSelectOption value="Venta y Alquiler">Venta y Alquiler</IonSelectOption>
              <IonSelectOption value="Alquiler Vacacional">Alquiler Vacacional</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem>
            <IonLabel>Habitables</IonLabel>
            <IonSelect value={tipoPublicacion} placeholder="[Seleccione]" onIonChange={e => setTipoPublicacion(e.detail.value)}>
              <IonSelectOption value="1 habitacion">1 habitación</IonSelectOption>
              <IonSelectOption value="2 habitacion">2 habitación</IonSelectOption>
              <IonSelectOption value="3 habitacion">3 habitación</IonSelectOption>
              <IonSelectOption value="4 habitacion">4 habitación</IonSelectOption>
              <IonSelectOption value="5 habitacion">5 habitación</IonSelectOption>
            </IonSelect>
          </IonItem>

      </IonList>

      <IonRow>
          <IonCol>
            <IonButton onClick={buscarAnuncios} routerDirection="back">Buscar</IonButton>
            <p style={{ fontSize: "medium" }}></p>
          </IonCol>
    </IonRow>
    </IonContent>
  </IonPage>
  );
};

export default Inicio;