import { Component } from '@angular/core';
import { Grade }    from './grade';

// for some strange reason, the app fails to recognize an external template file for this form. apologies for the messiness
@Component({
  selector: 'grade-form',
  template: `
  <form (ngSubmit)="onSubmit()" #gradeForm="ngForm">
  	<fieldset>
    		<label for="currentGrade" >Current Grade</label>
    		<input type="number" placeholder="0 to &infin;" id="currentGrade" min="0" 
    			required
    			[(ngModel)]="model.currentGrade" name="currentGrade">

    		<label for="desiredGrade">Desired Grade</label>
    		<input type="number" placeholder="0 to 100" id="desiredGrade" min="0" max="100" 
    			required
    			[(ngModel)]="model.desiredGrade" name="desiredGrade">

    		<label for="finalWeight">Weight of Final</label>
    		<input type="number" placeholder=".01 to 1" id="finalWeight" min="0.01" max="1" step="any"
    			required
    			[(ngModel)]="model.finalWeight" name="finalWeight">

    		<input class="button-primary" type="submit" value="Submit">
  	</fieldset>
</form>
<div [hidden]="!submitted">
	<h1>Grade Needed: {{ roundedGrade }}</h1>
	<button class="button button-outline" (click)="submitted=false; newGrade()">Reset</button>
</div>
`
})
export class GradeFormComponent {
  model = new Grade(85, 90, .4);
  grade: number;
  roundedGrade: String;
  submitted = false;
  onSubmit() { 
  	this.submitted = true; 
  	this.grade = (this.model.desiredGrade - (1-this.model.finalWeight)*this.model.currentGrade)/this.model.finalWeight;
  	this.roundedGrade = this.grade.toFixed(2);
  }
  newGrade() {
  	this.model = new Grade(null,null,null);
  }

}
