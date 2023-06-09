import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { ContactoService } from './../shared/contacto.service';

@Component({
  selector: 'app-crear-contacto',
  templateUrl: './crear-contacto.page.html',
  styleUrls: ['./crear-contacto.page.scss'],
})

export class CrearContactoPage implements OnInit {
  bookingForm: FormGroup;
  constructor(
    private aptService: ContactoService,
    private router: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.bookingForm = this.fb.group({
      name: [''],
      // last_name: [''],
      email: [''],
      mobile: ['']
    })
  }
  formSubmit() {
    if (!this.bookingForm.valid) {
      return false;
    } else {
      this.aptService.createBooking(this.bookingForm.value).then(res => {
        console.log(res)
        this.bookingForm.reset();
        this.router.navigate(['/home']);
      })
        .catch(error => console.log(error));
    }
  }

}
