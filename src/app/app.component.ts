import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular-translate';
  //xa usar select
  langs: string[] = [];

  //idioma por defecto al inicializar app
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');

    //xa usar select
    translate.addLangs(['en', 'es']);
    this.langs = translate.getLangs();

    //xa uso de translate no en html, sino en ts -> .get solo una vez
    translate.get('HELLO')
      .subscribe((res: string) => {
        console.log(res);
      });
    //xa uso de translate no en html, sino en ts -> .stream dinamico
    translate.stream('HELLO')
      .subscribe((res: string) => {
        console.log(res);
      });
    translate.stream('demo.greeting', { name: 'Andreas' })
      .subscribe((res: string) => {
        console.log(res);
      });
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }

  //xa usar select
  changeLang(lang: string) {
    this.translate.use(lang);
  }

  //extractor tambien lee desde archivo ts
  showAlert() {
    const msg = this.translate.instant('Error');
    alert(msg);
  }
}
