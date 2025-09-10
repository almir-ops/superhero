import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatSidenavModule,FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  title = 'superhero';

  card = {
    titulo: 'TITULO',
    descricao: 'MENSAGEM',
    img: 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/1-a-bomb.jpg'
  }

  cards:any[] = [];
  numero = 0;
  apiUrl = 'https://akabab.github.io/superhero-api/api/all.json'


  constructor(
    private http: HttpClient
  ){}

  ngOnInit(): void {
    this.getAll();
  }


  //MÉTODO PARA PEGAR INFORMAÇOES EM UMA API
  getAll(){
    this.http.get(this.apiUrl).subscribe({
      next:(value:any) => {
        console.log(value);
        this.cards = value;
        console.log(this.cards);
      },
      error:(err:any) => {

      },
    })
  }

}
