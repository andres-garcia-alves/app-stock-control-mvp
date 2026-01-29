import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ILogin } from 'src/app/interfaces';
import { Login } from 'src/app/entidades';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: false
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService) { }

  debug: any;
  loading: boolean;
  messages: string;

  registroForm = new FormGroup({
    usuario: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]),
    contraseña: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(30)])
  });

  ngOnInit() { }

  async onSubmit() {

    this.messages = null;
    this.loading = true;

    const login = new Login();
    login.username = this.registroForm.value.usuario.toLowerCase();
    login.password = this.registroForm.value.contraseña.toLowerCase();
    console.log('Login:', login);

    try {

      const response = await this.loginService.postLogin(login)
      console.log('postLogin()', response);

      if (response === null) { this.messages = 'Usuario y/o contraseña incorrectos.'; return; }

      sessionStorage.setItem('token', response['token']);
      sessionStorage.setItem('username', login.username);
      this.router.navigate(['/home']);
    }
    catch (error) { this.messages = 'Usuario y/o contraseña incorrectos.' }
    finally { this.loading = false; }
  }
}
