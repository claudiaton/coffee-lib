# CoffeeLib

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Run application
ng serve --open

## Create component
ng g component component/list --dry-run

## Create service
ng g service service/data/data
Create a function inside the service (after the constructor) and return something
Create a constructor inside the class of the component and declare a private variable having the same service type `constructor (private list: DataService) {}`

## Http request
In app.module file, import `import { HttpClientModule } from '@angular/common/http';` and include in imports `HttpClientModule`

## REQUIREMENTS
Data should be managed via the NgRx Store
HTTP requests should be dispatched via NgRx Effects
The layout should be responsive and have mobile and desktop breakpoints
unit tests
presentable styles

Create a Product List Page
Retrieve a list of 50 coffees https://random-data-api.com/api/coffee/random_coffee?size=50
Implement pagination, with a limit of 10 items per page

## BONUS
- leverage NgRx Selectors for retrieving data from the Store
- Leverage OnPush ChangeDetection for each of your components
- Add a product details page

## List of components
List
Card

## Enabling store

## Enabling redux dev tools
ng add @ngrx/store-devtools

## Helpful tutorials
https://therichpost.com/angular-15-ngrx-counter-working-example/

https://medium.com/bb-tutorials-and-thoughts/using-ngrx-effects-to-make-api-calls-in-angular-apps-7b5db74f505b