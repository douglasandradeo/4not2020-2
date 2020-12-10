import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IndiceService } from '../indice.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-indice-form',
  templateUrl: './indice-form.component.html',
  styleUrls: ['./indice-form.component.scss']
})
export class IndiceFormComponent implements OnInit {

  // Variável para armazenar os dados do registro
  indice : any = {}  // Objeto vazio, nome no SINGULAR

  title : string = 'Novo indice'

  // Periodicidade
  periodicidade : any = [
    { val: 'diaria', descr: 'Diária' },
    { val: 'mensal', descr: 'Mensal' },
    { val: 'trimestral', descr: 'Trimestral' },
    { val: 'anual', descr: 'Anual' },
  ]

  constructor(
    private indiceSrv : IndiceService,
    // Services das entidades relacionadas
    private snackBar : MatSnackBar,
    private location : Location,
    private actRoute : ActivatedRoute
  ) { }

  async ngOnInit() {
    // Verifica se existe o parâmetro id na URL (rota)
    if(this.actRoute.snapshot.params['id']) {
      try {
        // 1) Acionar o back-end para buscar esse registro
        // e disponibilizá-lo para edição        
        this.indice = await this.indiceSrv.obterUm(this.actRoute.snapshot.params['id'])
        // 2) Mudar o título da página
        this.title = 'Editando indice'
      }
      catch(erro) {
        console.log(erro)
        this.snackBar.open('ERRO: não foi possível carregar dados para edição.',
          'Que pena!', { duration: 5000 })
      }
    }
    // Carrega as listagens das entidades relacionadas
    this.carregarDados()
  }

  async carregarDados() {
    try {
    }
    catch(erro) {
      console.log(erro)
      this.snackBar.open(`ERRO: não foi possível carregar todos os dados 
        necessários para a página.`, 'Que pena', { duration: 5000 })
    }
  }

  async salvar(form: NgForm) {
    //console.log(this.indice)
    //return
    if(form.valid) {
      try {
        // 1) Salvar os dados no back-end
        // Se o indice já existir (caso de edição), ele já terá
        // o atributo _id
        if(this.indice._id) {
          await this.indiceSrv.atualizar(this.indice) // Atualização
        }
        else {
          await this.indiceSrv.novo(this.indice)
        }
        // 2) Dar o feedback para o usuário
        this.snackBar.open('Dados salvos com sucesso.', 'Entendi',
          { duration: 5000 })
        // 3) Voltar ao componente de listagem
        this.location.back()
      }
      catch (erro) {
        console.log(erro)
        this.snackBar.open('ERRO: não foi possível salvar os dados.', 'Que pena!',
          { duration: 5000 })
      }
      
    }
  }

  voltar(form: NgForm) {
    let result = true
    // form.dirty = formulário "sujo", não salvo (via código)
    // form.touched = o conteúdo de algum campo foi alterado (via usuário)
    if(form.dirty && form.touched) {
      result = confirm('Há dados não salvos. Deseja realmente voltar?')
    }

    if(result) this.location.back()

  }

}