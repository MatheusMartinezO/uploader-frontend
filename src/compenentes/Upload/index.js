import React, { Component } from 'react'

import Dropzone from 'react-dropzone';

import {DropContainer,UploadMessage} from './styles';

export default class Upload extends Component {

  renderDragMessage = (isDragActive,isDragReject) => {
  
   if(!isDragActive){
     return <UploadMessage>Arraste arquivos aqui...</UploadMessage>
   }
   if(isDragReject){
    return <UploadMessage type="error">arquivo não suportado</UploadMessage>
   }
   
   return <UploadMessage type="success">solte os arquivos aqui...</UploadMessage>

  };

  render() {
    const {onUpload} = this.props;
    return (
      <Dropzone accept="image/*" onDropAccepted={onUpload}>
         {({getRootProps,getInputProps,isDragActive,isDragReject})=>(
          <DropContainer
          {...getRootProps()}
          isDragActive={isDragActive}
          isDragReject={isDragReject}
          >
            <input {...getInputProps()}/>

            {this.renderDragMessage(isDragActive,isDragReject)}
          </DropContainer>
         )}
      </Dropzone>
    );
  }
}

/*
fazer isso para funcionar certinho;
import { CircularProgressbar } from 'react-circular-progressbar';


e a propriedade percentage por value:

 strokeWidth={10}
 value={60}
*/
