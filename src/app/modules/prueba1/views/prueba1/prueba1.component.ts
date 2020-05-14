import { Component, OnInit } from '@angular/core';
import { Prueba1Service } from '../../services/prueba1.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prueba1',
  templateUrl: './prueba1.component.html'
})
export class Prueba1Component implements OnInit {

  constructor(private routeActivated: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('El valor en el componente es ',this.routeActivated.snapshot.data['data']);
  }

}
