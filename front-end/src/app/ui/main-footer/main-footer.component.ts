import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-footer',
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.scss']
})
export class MainFooterComponent implements OnInit {
    // Atributos @Input() servem para receber valores do componente pai
    @Input() appName : string

  constructor() { }

  ngOnInit(): void {
  }

}
