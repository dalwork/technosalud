import { Component, OnInit, HostBinding } from '@angular/core';
import { Personas } from '../../models/Personas';
import { PersonasService } from "../../services/personas.service";
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-personas-form',
  templateUrl: './personas-form.component.html',
  styleUrls: ['./personas-form.component.css']
})



export class PersonasFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  public fecha: NgbDate;
  editar:Boolean=false;

  persona: Personas = {
    idPersona: 0,
    ci: '',
    nombres: '',
    apellido1: '',
    apellido2: '',
    telefono: '',
    movil: '',
    correo: '',
    direccion: '',
    genero: '',
    fechaNacimiento: new Date(),
    estadoCivil: '',
    idUsuario: 0,
    modificado:new Date()
  }


  constructor(private personasService: PersonasService, private router: Router, private activedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    const param = this.activedRouter.snapshot.params;
    if (param.id){
      this.personasService.verPersona(param.id).subscribe(
        res => {
        this.persona = res
        this.editar = true;
       },
        err => console.log(err)
      )
    }
  }

  guardarNuevaPersona() {
    delete this.persona.idPersona;
    this.persona.idUsuario = 1;
    this.persona.fechaNacimiento = new Date(this.fecha.year, this.fecha.month - 1, this.fecha.day);
    this.personasService.crePersona(this.persona).subscribe(
      res => {
        console.log(this.persona)
        this.router.navigate(['/personas']);
      },
      err => console.error(err)
    )

  }

  actualizarPersona() {
    //this.persona.modificado = new Date();
    this.persona.fechaNacimiento = new Date(this.fecha.year, this.fecha.month - 1, this.fecha.day);
    this.personasService.actPersona(this.persona.idPersona,this.persona).subscribe(
      res => { 
        this.router.navigate(['/personas']);
      },
      err => console.error(err)
    )

  }


}