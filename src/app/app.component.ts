import { Component, VERSION } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";  
 isValidFormSubmitted = false;  
 user = new User();  


 onFormSubmit(form: NgForm) {  
   this.isValidFormSubmitted = false;  
   if (form.invalid) {  
      return;  
   }  
   this.isValidFormSubmitted = true;  
   form.resetForm();  
 }  
}  

export class User {  
 mobileNumber ?: string;  
}  