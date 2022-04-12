import { Component, OnInit } from '@angular/core';
import { ListaService } from 'src/app/service/lista.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  respuesta='';

  constructor(private service: ListaService) { }

  ngOnInit(): void {  

  this.respuesta = this.service.getDataLista();
    console.log("Lista Componente", this.respuesta);
  }

}
