import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Todo List';
  atividades: Array<any> = [];
  atividade = { nome: '', status: false }

  handleSubmit(form: NgForm) {
    console.log(form);
    this.atividades.push({
      nome: this.atividade.nome,
      status: this.atividade.status
    });

    this.atividade.nome = '';
    this.atividade.status = false;
  }
}
