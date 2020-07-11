import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'simple-calculator';
  // public number1Control = new FormControl();
  // public number2Control = new FormControl();
  public number1: string;
  public number2: string;
  public selectedOption: string;

  public total: number;

  public onNumberChange(): void {
    const a = '';
    // if (!this.number1) {
    //    // check empty stirng
    //    // check undefined
    //    // check null
    //    // check true
    //    // check 0
    //    // falsy value = '', 0, null, undefined, false
    //   //  alert('Empty');
    // }
    // if (!this.number2) {
    //   // alert('Empty 2');
    // }
    this.calcualte();
  }

  public optionChange(event: MatSelectChange): void {
    this.selectedOption = event.value;
    this.calcualte();
  }

  private calcualte(): void {
    if (this.selectedOption) {
      if (this.selectedOption === 'add') {
        this.total = (Number(this.number1) || 0) + (Number(this.number2) || 0);
      }
      if (this.selectedOption === 'sub') {
        this.total = (Number(this.number1) || 0) - (Number(this.number2) || 0);
      }
    }
  }
}
