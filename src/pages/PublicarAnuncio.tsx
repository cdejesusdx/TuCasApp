import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { IonGrid, IonRow, IonCol, IonIcon, IonImg, IonFab, IonFabButton } from '@ionic/react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonActionSheet } from '@ionic/react';
import { IonItem, IonLabel, IonInput, IonButton, IonAlert, IonItemDivider, IonSelect, IonSelectOption } from '@ionic/react';
import { camera, trash, close } from 'ionicons/icons';

import { usePhotoGallery, Photo } from '../hooks/usePhotoGallery';

const PublicarAnuncio: React.FC = () => {
  const { deletePhoto, photos, takePhoto } = usePhotoGallery();
  const [photoToDelete, setPhotoToDelete] = useState<Photo>();

  // Validaciones
  const history = useHistory();
  const [mensaje, setMensaje] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  // Datos del propietario
  const [nombres, setNombres] = useState<string>("");
  const [apellidos, setApellidos] = useState<string>("");
  const [direccion, setDireccion] = useState<string>("");
  const [telefono, setTelefono] = useState<string>("");
  const [correoElectronico, setCorreoElectronico] = useState<string>("");
  const [confirmarCorreoElectronico, setConfirmarCorreoElectronico] = useState<string>("");

  // Información de la Propiedad
  const [tipoInmueble, setTipoInmueble] = useState<string>(""); 
  const [ubicacion, setUbicacion] = useState<string>(""); 
 
  const [tipoPublicacion, setTipoPublicacion] = useState<string>("");
  const [moneda, setMoneda] = useState<string>(""); 
  const [precio, setPrecio] = useState<string>(""); 

  const [condicion, setCondicion] = useState<string>("");
  const [habitaciones, setHabitaciones] = useState<string>(""); 
  const [banos, setBanos] = useState<string>(""); 
  const [parqueos, setParqueos] = useState<string>(""); 

  const publicarAnuncio = () => {

  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Publicar Anuncio</IonTitle>
        </IonToolbar>
      </IonHeader>
 
      <IonContent fullscreen className="ion-padding ">
        <IonGrid>
        <IonRow>
          <IonCol>
            <IonAlert
                isOpen={error}
                onDidDismiss={() => setError(false)}
                cssClass="my-custom-class"
                header={"Up!"}
                message={mensaje}
                buttons={["Cerrar"]}/>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
          <h4>Publica tu Propiedad/Inmueble</h4> 
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
            <p>En TuCasApp recibimos miles de visitantes interesados en comprar, 
              vender y alquilar propiedades cada mes. Es el mayor tráfico especializado para el mercado de bienes raíces.</p>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
            <h4>Tu Datos</h4>
            <p>Completa este formulario con la información de contacto de la persona que se encargará de recibir las llamadas y mostrar la propiedad a los compradores interesados. 
              Esta información estará visible con la imagen del inmueble.</p>
          </IonCol>
        </IonRow>

          <IonRow>
            <IonCol>
            <IonItem>
            <IonLabel position="floating">Nombres</IonLabel>
            <IonInput type="text" value={nombres} onIonChange={(e) => setNombres(e.detail.value!)}></IonInput>
            </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
            <IonItem>
              <IonLabel position="floating">Apellidos</IonLabel>
              <IonInput type="text" value={apellidos} onIonChange={(e) => setApellidos(e.detail.value!)}></IonInput>
            </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
            <IonItem>
              <IonLabel position="floating">Dirección</IonLabel>
              <IonInput type="text" value={direccion} onIonChange={(e) => setDireccion(e.detail.value!)}></IonInput>
            </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
            <IonItem>
              <IonLabel position="floating">Teléfono</IonLabel>
              <IonInput type="text" value={telefono} onIonChange={(e) => setTelefono(e.detail.value!)}></IonInput>
            </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
            <IonItem>
              <IonLabel position="floating">Correo Electrónico</IonLabel>
              <IonInput type="text" value={correoElectronico} onIonChange={(e) => setCorreoElectronico(e.detail.value!)}></IonInput>
            </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
            <IonItem>
              <IonLabel position="floating">Confirmar Correo Electrónico</IonLabel>
              <IonInput type="text" value={confirmarCorreoElectronico} onIonChange={(e) => setConfirmarCorreoElectronico(e.detail.value!)}></IonInput>
            </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <h4>Información de la Propiedad</h4>
            </IonCol>
          </IonRow>

          <IonItemDivider><strong>Datos Generales</strong></IonItemDivider>
          <IonItem>
            <IonLabel>Tipo Inmueble*</IonLabel>
            <IonSelect value={tipoInmueble} placeholder="[Seleccione]" onIonChange={e => setTipoInmueble(e.detail.value)}>
              <IonSelectOption value="Local Comercial">Local Comercial</IonSelectOption>
              <IonSelectOption value="Apartamento">Apartamento</IonSelectOption>
              <IonSelectOption value="Casa">Casa</IonSelectOption>
              <IonSelectOption value="Finca">Finca</IonSelectOption>
              <IonSelectOption value="Villa">Villa</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonRow>
            <IonCol>
            <IonItem>
              <IonLabel position="floating">Ubicación</IonLabel>
              <IonInput type="text" value={ubicacion} onIonChange={(e) => setUbicacion(e.detail.value!)}></IonInput>
            </IonItem>
            </IonCol>
          </IonRow>

          <IonItemDivider> <strong>Precio</strong></IonItemDivider>
          <IonItem>
            <IonLabel>Tipo Publicación*</IonLabel>
            <IonSelect value={tipoPublicacion} placeholder="[Seleccione]" onIonChange={e => setTipoPublicacion(e.detail.value)}>
              <IonSelectOption value="Venta">Venta</IonSelectOption>
              <IonSelectOption value="Alquiler">Alquiler</IonSelectOption>
              <IonSelectOption value="Venta y Alquiler">Venta y Alquiler</IonSelectOption>
              <IonSelectOption value="Alquiler Vacacional">Alquiler Vacacional</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem>
            <IonLabel>Moneda*</IonLabel>
            <IonSelect value={moneda} placeholder="[Seleccione]" onIonChange={e => setMoneda(e.detail.value)}>
              <IonSelectOption value="RD$">RD$</IonSelectOption>
              <IonSelectOption value="US$">US$</IonSelectOption>
            </IonSelect>
          </IonItem>
          
          <IonRow>
            <IonCol>
            <IonItem>
              <IonLabel position="floating">Precio</IonLabel>
              <IonInput type="number" value={precio} onIonChange={(e) => setPrecio(e.detail.value!)}></IonInput>
            </IonItem>
            </IonCol>
          </IonRow>

          <IonItemDivider><strong>Características</strong></IonItemDivider>
          <IonItem>
            <IonLabel>Condición*</IonLabel>
            <IonSelect value={condicion} placeholder="[Seleccione]" onIonChange={e => setCondicion(e.detail.value)}>
              <IonSelectOption value="Nueva">Nueva</IonSelectOption>
              <IonSelectOption value="Remodelada">Remodelada</IonSelectOption>
              <IonSelectOption value="Segundo Uso">Segundo Uso</IonSelectOption>
              <IonSelectOption value="En Construcción">En Construcción</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonRow>
            <IonCol>
            <IonItem>
              <IonLabel position="floating">Habitaciones</IonLabel>
              <IonInput type="number" value={habitaciones} onIonChange={(e) => setHabitaciones(e.detail.value!)}></IonInput>
            </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
            <IonItem>
              <IonLabel position="floating">Baños</IonLabel>
              <IonInput type="number" value={banos} onIonChange={(e) => setBanos(e.detail.value!)}></IonInput>
            </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
            <IonItem>
              <IonLabel position="floating">Parqueos</IonLabel>
              <IonInput type="number" value={parqueos} onIonChange={(e) => setParqueos(e.detail.value!)}></IonInput>
            </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <h4>Fotos del Anuncio</h4>
              <p>Las fotografías son muy importantes ya que ayudan a que los compradores conozcan bien la condición de la propiedad que estás publicando.</p>
            </IonCol>
          </IonRow>

          <IonGrid>
            <IonRow>
              {photos.map((photo, index) => (
                <IonCol size="6" key={index}>
                  <IonImg onClick={() => setPhotoToDelete(photo)} src={photo.webviewPath} />
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>

   
          <IonRow>
            <IonCol className="ion-padding ion-text-center">
              <IonButton onClick={() => takePhoto()} routerDirection="back">Subir Fotos</IonButton>
              <p style={{ fontSize: "medium" }}></p>
            </IonCol>
          </IonRow>
     
        <IonActionSheet
          isOpen={!!photoToDelete}
          buttons={[{
            text: 'Quitar',
            role: 'destructive',
            icon: trash,
            handler: () => {
              if (photoToDelete) {
                deletePhoto(photoToDelete);
                setPhotoToDelete(undefined);
              }
            }
          }, {
            text: 'Cancelar',
            icon: close,
            role: 'cancel'
          }]}
          onDidDismiss={() => setPhotoToDelete(undefined)}/>

          <IonRow>
            <IonCol>
              <IonButton onClick={publicarAnuncio} routerDirection="back">Crear Anuncio</IonButton>
              <p style={{ fontSize: "medium" }}></p>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default PublicarAnuncio;