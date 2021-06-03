import {Component, ElementRef, OnInit, ViewChild, EventEmitter, Output, OnDestroy} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-procurement-edit',
  templateUrl: './procurement-edit.component.html',
  styleUrls: ['./procurement-edit.component.css']
})
export class ProcurementEditComponent implements OnInit, OnDestroy {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput')amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit():void {
  }

  ngOnDestroy() {
    console.log('Component is destroyed.');
  }

  onAddIngredient() {
    const ingredientName = this.nameInputRef.nativeElement.value;
    const ingredientAmount = this.amountInputRef.nativeElement.value;

    const newIngredient = new Ingredient(ingredientName, ingredientAmount);

    this.ingredientAdded.emit(
      newIngredient);
  }

}
