import React, { Component } from 'react';
import { uniqueId } from 'lodash';
import filesize from 'filesize';
import api from './services/api'
import GlobalStyle from './styles/global';
import Upload from './compenentes/Upload';
import FileList from './compenentes/FileList';
import { Container , Content, Footer} from './styles.js';


 
class App extends Component{
  state = {
    uploadedFiles: [],
  };
  
  async componentDidMount() {
     const response = await api.get('posts');

     this.setState({
       uploadedFiles: response.data.map(file => ({
        id: file._id,
        name: file.name,
        readableSize: filesize(file.size),
        preview: file.url,
        uploaded: true,
        url: file.url,
       }))
      })
  }

  handlesUpload = files =>{
    const uploadedFiles = files.map(file => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress:0,
      uploaded: false,
      error: false,
      url: null,
    }))

    this.setState({
      uploadedFiles: this.state.uploadedFiles.concat(uploadedFiles)
    });

    uploadedFiles.forEach(this.processUpload);
  };

  updateFile = (id,data) => {
   this.setState({uploadedFiles: this.state.uploadedFiles.map(uploadedFile => {
     return id === uploadedFile.id ? {...uploadedFile, ...data} : uploadedFile;
   })})
  };
  
  processUpload = (uploadedFile) => {
     const data = new FormData();

     data.append('file',uploadedFile.file, uploadedFile.name);

     api.post('posts',data,{
       onUploadProgress: e => {
         const progress = parseInt(Math.round((e.loaded * 100) / e.total ));
         
         this.updateFile(uploadedFile.id,{
           progress,
         })
       }
     }).then( response =>{
       this.updateFile(uploadedFile.id, {
         uploaded: true,
         id: response.data._id,
         url:response.data.url,
       });
     }).catch(()=>{
      this.updateFile(uploadedFile.id, {
        error: true
      });
     })
  };

  handleDelete = async id => {
    await api.delete(`/posts/${id}`);
    this.setState({
      uploadedFiles: this.state.uploadedFiles.filter(file => file.id !== id),
    })
  }

   componentWillUnmount() {
     this.state.uploadedFiles.forEach(file => URL.revokeObjectURL(file.preview));
   }

  render(){
    const {uploadedFiles} = this.state;
    return (
      < Container>
      <Content>
        <Upload onUpload={this.handlesUpload}/>
        {!!uploadedFiles.length && (
          <FileList files={uploadedFiles}  onDelete={this.handleDelete}/>
        )}
        </Content>
        <Footer>
          <h1>©Todos os direitos reservados: Matheus Martinez</h1>
        </Footer>
      <GlobalStyle/>
    </ Container>
    );
  }
}

export default App;
