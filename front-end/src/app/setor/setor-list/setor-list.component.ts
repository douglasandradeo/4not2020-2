import { Component, OnInit } from '@angular/core';
import { SetorService } from '../setor.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-setor-list',
  templateUrl: './setor-list.component.html',
  styleUrls: ['./setor-list.component.scss']
})
export class SetorListComponent implements OnInit {

  // Nome da entidade no plural
  setores : any = []

  // Quais colunas serão exibidas na tabela, e em qual ordem
   displayedColumns: string[] = ['nome', 'editar', 'excluir']

  // Injeção de dependência ou inversão de controle
  constructor(
      private setorSrv : SetorService,
      private snackBar : MatSnackBar
  ) { }

  async ngOnInit() {
    this.setores = await this.setorSrv.listar()
    console.log(this.setores)
  }

  async excluir(id: string) {
    if(confirm('Deseja realmente excluir?')) {
      try {
        await this.setorSrv.excluir(id)
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