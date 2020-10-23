import { Component } from '@angular/core';

@Component({
    // [appName]=" title " e appName={{title}} produzem o mesmo resultado
  selector: 'app-root',
  template: `
    <app-main-toolbar [appName]=" title "></app-main-toolbar>
    <router-outlet></router-outlet>
    <app-main-footer [appName]=" title "></app-main-footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'Escola Agora vai';
}
