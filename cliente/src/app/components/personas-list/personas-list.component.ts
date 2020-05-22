import { Component, OnInit } from '@angular/core';
import { PersonasService } from "../../services/personas.service";
import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: 'app-personas-list',
  templateUrl: './personas-list.component.html',
  styleUrls: ['./personas-list.component.css']
})
export class PersonasListComponent implements OnInit {
  personas: any = [];

  constructor(private personasService: PersonasService) { }

  ngOnInit(): void {
    this.listarPersonas()
  }

  listarPersonas() {
    this.personasService.lisPersonas().subscribe(
      res => {
        this.personas = res
      },
      err => console.error(err)
    )
  }

  borrarPersona(id: string) {
    this.personasService.borPersona(id).subscribe(
      res => {
        console.log(res);
        this.listarPersonas();
      },
      err => console.error(err)
    )
  }

  editarPersona(id: string) {
    this.personasService.verPersona(id).subscribe(
      res => {
        this.personas = res[0]
      },
      err => console.log(err)
    )
  }

}
