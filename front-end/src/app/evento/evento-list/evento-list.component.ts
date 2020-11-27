import { Component, OnInit } from '@angular/core';
import { EventoService } from '../evento.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-evento-list',
  templateUrl: './evento-list.component.html',
  styleUrls: ['./evento-list.component.scss']
})
export class EventoListComponent implements OnInit {

  // Nome da entidade no plural
  eventos : any = []

  // Quais colunas serão exibidas na tabela, e em qual ordem
   displayedColumns: string[] = ['nome', 'setor', 'subsetor', 'tipo', 'periodo', 'editar', 'excluir']

  // Injeção de dependência ou inversão de controle
  constructor(
      private eventoSrv : EventoService,
      private snackBar : MatSnackBar
  ) { }

  async ngOnInit() {
    this.eventos = await this.eventoSrv.listar()
    console.log(this.eventos)
  }

  async excluir(id: string) {
    if(confirm('Deseja realmente excluir?')) {
      try {
        await this.eventoSrv.excluir(id)
        // 1) Recarregar os dados da tabela
        this.ngOnInit()
        // 2) Dar feedback para o usuário com mensagem
        this.snackBar.open('Item excluído com sucesso.', 'Entendi', {
          duration: 5000 // 5 segundos
        })
      }
      catch(erro) {
        // 3) Dar feedback de erro para o usuário
        this.snackBar.open('ERRO: não foi possível excluir este item.', 'Que pena!', {
          duration: 5000 // 5 segundos
        })
        console.log(erro)
      }
    }
  }

}