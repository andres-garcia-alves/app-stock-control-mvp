# Stock Control Software

A Stock Control Software (minimum valid product) for a clothing business.  
[LIVE DEMO HERE](https://andres-garcia-alves.github.io/app-stock-control-mvp/).  

Current working modules/operations:
- sales > register sale
- sales > view sales
- stock > update stock
- stock > drop defective
- stock > transfer between branches
- master > branches master
- master > products master
- master > providers master
- master > users master
- system > change password

&nbsp;

### Screenshots

| sales > view sales                    | master > branches master              |
|---------------------------------------|---------------------------------------|
| ![](src/assets/img/screenshot-01.png) | ![](src/assets/img/screenshot-02.png) |

&nbsp;

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.8.  
Updated to **Angular version 20.3.16**.

**Testing Stack:**
- Jest (Unit & Integration Testing)
- Cypress (End-to-End Testing)
- ESLint (Code Linting)

See [TESTING.md](./documentation/TESTING.md) for testing documentation.  

&nbsp;

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.  
The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component.  
You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.  
For a production build, use `npm run deploy` for GitHub Pages deployment.

### Testing

Run `npm test` for unit and integration tests (Jest).  
Run `npm run e2e` for end-to-end tests (Cypress).  
Run `npm run lint` for code linting (ESLint).  

See [TESTING.md](./documentation/TESTING.md) for detailed testing documentation.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

&nbsp;

### Version History

v1.0 (2021.05.26) - Initial release.  
v1.1 (2023.07.06) - Upgrade to Angular 13.  
v1.1 (2026.01.28) - Upgrade to Angular 20, some minor bug fixes.  

&nbsp;

This is the first public release of this project.  
Developed for subject 'Ingenieria de Software II', at CAECE University, Buenos Aires, Argentina.  

This source code is licensed under MIT licence.  
Please send me your feedback about this project: andres.garcia.alves@gmail.com
