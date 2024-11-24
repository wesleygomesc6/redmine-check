import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RedmineService } from '../../services/RedmineService';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, MatProgressSpinnerModule, MatIconModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  formularioLogin!: FormGroup;
  usuario: any;
  desabilitarLogin: boolean = false;
  mensagem!: string;
  constructor(private formBuilder: FormBuilder, private redmine: RedmineService, private router: Router) { }

  ngOnInit(): void {
    this.formularioLogin = this.formBuilder.group({
      username: new FormControl(),
      password: new FormControl(),
    })
  }

  onSubmit() {
    this.desabilitarLogin = true;
    const user = {
      username: this.formularioLogin.value.username,
      password: this.formularioLogin.value.password
    }

    this.redmine.logar(user).subscribe(res => {
      if (res.user) {
        localStorage.setItem('login', res.user.login);
        localStorage.setItem('api_key', res.user.api_key);
        localStorage.setItem('name', res.user.firstname);

        this.router.navigate(['validar-tarefa']);

        this.desabilitarLogin = false;
      } else {

        switch (res.status) {
          case 401:
            this.mensagem = "Dados incorretos!"
            break;
          case 403:
            this.mensagem = "Seu usuário não tem autorização para essa funcionalidade!"
            break;
          case 404:
            this.mensagem = "Recurso não encontrado!"
            break;
          default:
            this.mensagem = res.message;
            break;
        }
        this.desabilitarLogin = false;
      }

    })


  }

  resetFormlario() {
    this.mensagem = ''
  }

}
