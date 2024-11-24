import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notificacao',
  standalone: true,
  imports: [],
  templateUrl: './notificacao.component.html',
  styleUrl: './notificacao.component.css'
})
export class NotificacaoComponent implements OnInit {
  @Input() mensagem: any;
  @Input() alertar!: boolean;

  ngOnInit(): void {
  }
}
