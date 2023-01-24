import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './component/list/list.component';
import { CardComponent, DetailsDialog } from './component/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import { StoreModule } from '@ngrx/store';
import { listReducer } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { CoffeeEffects } from './store/effects';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
// import { DetailsComponent } from './component/details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CardComponent,
    // DetailsComponent,
    DetailsDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatPaginatorModule,
    MatDialogModule,
    StoreModule.forRoot({coffeeLib: listReducer}),
    EffectsModule.forRoot([CoffeeEffects]),
    StoreDevtoolsModule.instrument({ name:"Coffee Lib", maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
    DetailsDialog
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
