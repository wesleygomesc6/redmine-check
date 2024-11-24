import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list'
import { MatButtonModule } from '@angular/material/button';
import { environment } from '../../src/environments/environment';
import { MatTreeModule } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { CommonModule } from '@angular/common';

interface FoodNode {
  name: string;
  link?: string;
  children?: FoodNode[];
}

const MENUS: FoodNode[] = [
  {
    name: 'Validar Tarefa',
    link: 'validar-tarefa'
  },
  {
    name: 'Gerar Relatório',
    link: 'gerar-relatorio'
  },
  {
    name: 'Tutoriais',
    children: [
      {
        name: 'Gerar Relatório',
        link: 'tutoriais/gerar-relatorio-fiscalizacao'
      },
      {
        name: 'Subir Relatório no SEI',
        link: 'tutoriais/subir-relatorio-no-sei'

      },
    ],
  },
];


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatIconModule, MatSidenavModule, MatToolbarModule, MatListModule, MatButtonModule,
    MatTreeModule, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Redmine Check';
  showFiller: boolean = true;
  rotaAtual!: string;
  userLogado!: string | null;
  appVersion: string = environment.VERSION;
  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  constructor(private router: Router) {
    this.dataSource.data = MENUS;
  }

  ngOnInit(): void {
    this.userLogado = localStorage.getItem('name');
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.rotaAtual = event.url
      }
    });
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;

  logout() {
    localStorage.clear()
    this.router.navigate(['login'])
  }
}
