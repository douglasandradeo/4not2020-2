import { Component, OnInit } from '@angular/core';
import { IndiceService } from '../indice.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-indice-list',
  templateUrl: './indice-list.component.html',
  styleUrls: ['./indice-list.component.scss']
})
export class IndiceListComponent implements OnInit {

  // Nome da entidade no plural
  indices : any = []

  // Quais colunas serão exibidas na tabela, e em qual ordem
  displayedColumns: string[] = ['nome', 'primeiro_registro', 'periodicidade']   

  // Injeção de dependência ou inversão de controle
  constructor(
      private indiceSrv : IndiceService,
      private snackBar : MatSnackBar
  ) { }

  async ngOnInit() {
    this.indices = await this.indiceSrv.listar()
    console.log(this.indices)
  }

  async excluir(id: string) {
    if(confirm('Deseja realmente excluir?')) {
      try {
        await this.indiceSrv.excluir(id)
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