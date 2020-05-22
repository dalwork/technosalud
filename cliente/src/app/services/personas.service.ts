import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { Personas } from "../models/Personas";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {
   API_URI = 'http://192.168.1.241:3000/techno';

  constructor(private http:HttpClient) { }

  lisPersonas() {
    return this.http.get(`${this.API_URI}/personas`);
  }

  verPersona(id: string) {
    return this.http.get(`${this.API_URI}/personas/${id}`);
  }

  crePersona(persona: Personas) {
    console.log(persona);
    return this.http.post(`${this.API_URI}/personas`,persona);
  }

   actPersona(id:string|number, persona1: Personas): Observable<Personas> {
    return this.http.put(`${this.API_URI}/personas/${id}`,persona1);
  }

  borPersona(id: string) {
    return this.http.delete(`${this.API_URI}/personas/${id}`);
  }


  
}
