import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  cargarImagen(event:any){
    let archivos = event.target.files
    let reader = new FileReader();

    reader.readAsDataURL(archivos[0]);
    reader.onloadend= ()=>{
      console.log(reader.result)
      this
    }

    console.log(event.target.files);

  }
}
