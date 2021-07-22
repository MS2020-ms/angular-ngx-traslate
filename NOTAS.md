### Instalacion ngx-translate
- http://www.ngx-translate.com/
- >npm install @ngx-translate/core @ngx-translate/http-loader rxjs --save
- ir app.module.ts

# crear nuevo modulo
- >ng g m task --routing
- nuevo componente
  >ng g c task/home
- en task-routing.module implemento las rutas
- importar mi TaskRoutingModule en TaskModule

## Que es AOT?
  compilacion de alto nivel, optimizar app para produccion
## Init inicializar en que idioma carga por defecto 
- ir app.ts
## Crear todos los archivos de traduccion en carpeta assets/i18n
- assets/i18n/en.json
- assets/i18n/es.json
## Para usarlo -> pipe
- ir app.html
## Implementar metodo de seleccion de boton
- ir app.ts

### Llamar a traduccion dentro de un modulo
- CUIDADO modulo cargado con LAZYLOAD
- ir home.html
- ir task.module.ts -> importar TranslateModule

### Uso del Extractor
- https://github.com/biesbjerg/ngx-translate-extract
- Extract translatable (ngx-translate) strings and save as a JSON
  Con un solo comando puedes generar archivos de traduccion
- >npm install @biesbjerg/ngx-translate-extract --save-dev
- Add a script to your project's package.json:
  
  "scripts": {
    "i18n:init": "ngx-translate-extract --input ./src --output ./src/assets/i18n/template.json --key-as-default-value --replace --format json",
    "i18n:extract": "ngx-translate-extract --input ./src --output ./src/assets/i18n/{en,da,de,fi,nb,nl,sv}.json --clean --format json"
  }
  
- >npm run i18n:extract
  and it will extract strings from your project.

### Editing JSON files with BabelEdit
- https://www.codeandweb.com/babeledit