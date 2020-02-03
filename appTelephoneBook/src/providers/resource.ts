import { Injectable } from '@angular/core';


@Injectable()
export class Resource {
    //-------serverAP
    serverAPIError=[{message:'Erro de comunicação com o servidor'},{message:'Communication error with the server'},{message:'Errore di comunicazione con il server'}]
    serverAPINotRespond=[{message:'Servidor indisponível'},{message:'Unavailable Server'},{message:'Server non Disponibile'}]
    //-------label
    labelName=[{label:'Nome'},{label:'Name'},{label:'Nome'}]
    labelSrname=[{label:'Sobrenome'},{label:'Surname'},{label:'Cognome'}]
    labelContacts=[{label:'Contatos'},{label:'Contacts'},{label:'Contatti'}]
    labelEdit=[{label:'Editar'},{label:'Edit'},{label:'Modifica'}]
    labelNew=[{label:'Novo'},{label:'EdiNewt'},{label:'Nuovo'}]
    labelAdd=[{label:'Adicionar'},{label:'Add'},{label:'Aggiungi'}]
    labelPhone=[{label:'Telefone'},{label:'Phone'},{label:'Telefono'}]
    labelDelete=[{label:'Apagar'},{label:'Delete'},{label:'Cancellare'}]
    labelChange=[{label:'Alterar'},{label:'Change '},{label:'Cambia'}]
    labelImage=[{label:'Imagem'},{label:'Image'},{label:'Immagine'}]
    labelCancel=[{label:'Cancelar'},{label:'Cancelar'},{label:'Annullare'}]
    labelOK=[{label:'OK'},{label:'OK'},{label:'OK'}] 
    //-------message
    msgTakePictures=[{message:'Tirar fotos'},{message:'Take pictures'},{message:'Scatta foto'}] 
    msgChoosePhotoGallery=[{message:'Escolha foto da galeria'},{message:'Choose photo from gallery'},{message:'Scegli la foto dalla galleria'}] 
    msgAttentionThereError =[{message:'Atenção! \n Houve um erro'},{message:'Attention! \n There was an error'},{message:'Attenzione! \n Si è verificato un errore'}] 
    msgContactSaved=[{message:'Contato salvo'},{message:'Contact Saved'},{message:'Contatto salvato'}] 
    msgErrorSavingContact=[{message:'Erro ao salvar o contato.'},{message:'Error saving contact.'},{message:'Errore durante il salvataggio del contatto.'}] 
    //msg1=[{message:'Tirar fotos'},{message:'Take pictures'},{message:'Scatta foto'}] 
    
    //-------Standard variables
    
    StandardPhoneType=[{type:'Casa'},{type:'Home'},{type:'Casa'}] 
    

   
   
}
