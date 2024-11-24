import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError, map, timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class RedmineService {
  constructor(private http: HttpClient) { }

  logar(usuario: any) {
    /**
     * Criptografa o usuario e senha do redmine para enviar na autenticação basica do http.
     */
    const credenciais = btoa(`${usuario.username}:${usuario.password}`)
    const header = {
      'Authorization': `Basic ${credenciais}`
    };
    const requestOptions = {
      headers: new HttpHeaders(header),
    };

    return this.http.get(`${environment.myAccountUrl}`, requestOptions)
      .pipe(
        timeout(15000),
        map((res: any) => res),
        catchError((err: any) => {
          return of(err);
        })

      )

  }


  get(tarefa: number) {
    const key = localStorage.getItem('api_key');
    const headers = {
      'X-Redmine-API-Key': key != null ? key : 'Usuario deslogado'
    };

    const requestOptions = {
      headers: new HttpHeaders(headers),
    };

    return this.http
      .get(
        environment.redmineUrl + tarefa + '.json?include=attachments,journals',
        requestOptions
      )
      .pipe(
        timeout(15000),
        map((res) => res),
        catchError((err: any) => {
          if (err.status === 403) {
            return of({
              erro: { id: +tarefa, err: 'Você não possui acesso ao projeto no redmine!' },
            });
          } else if (err.status === 404) {
            return of({
              erro: { id: +tarefa, err: 'Tarefa não encontrada!' },
            });
          } else if (err.status >= 500) {
            return of({
              erro: { id: +tarefa, err: 'Erro na API do Redmine!' },
            });
          }
          return of({
            erro: { id: +tarefa, err: err.message },
          });
        })
      );
  }
}
