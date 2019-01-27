import { Component, OnInit , Input } from '@angular/core';

@Component({
  //selector que se usa para definir instancias
  //de dadocomponent en la vista 
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent implements OnInit {

  //defino un propiedad, sera cargada por un parametro
  //pasado desde el componente padre 'app'
  @Input() valor: number;

  constructor() { }

  ngOnInit() {
  }

}
