import { Component, OnInit } from '@angular/core';
import { SubsetorService } from '../subsetor.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-subsetor-list',
  templateUrl: './subsetor-list.component.html',
  styleUrls: ['./subsetor-list.component.scss']
})
export class SubsetorListComponent implements OnInit {

  // Nome da entidade no plural
  subsetores : any = []

  // Quais colunas serão exibidas na tabela, e em qual ordem
   displayedColumns: string[] = ['setor', 'nome', 'editar', 'excluir']

  // Injeção de dependência ou inversão de controle
  constructor(
      private subsetorSrv : SubsetorService,
      private snackBar : MatSnackBar
  ) { }

  async ngOnInit() {
    this.subsetores = await this.subsetorSrv.listar()
    console.log(this.subsetores)
  }

  async excluir(id: string) {
    if(confirm('Deseja realmente excluir?')) {
      try {
        await this.subsetorSrv.excluir(id)
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