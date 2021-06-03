import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './recipes/recipes-list/recipe-item/recipe-item.component';
import {ProcurementListComponent} from "./procurement-list/procurement-list.component";
import {ProcurementEditComponent} from "./procurement-list/procurement-edit/procurement-edit.component";
import {FormsModule} from "@angular/forms";
import {DropdownDirective} from "./shared/dropdown.directive";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    ProcurementListComponent,
    ProcurementEditComponent,
    RecipesListComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
