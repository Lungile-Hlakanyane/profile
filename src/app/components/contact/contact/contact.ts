import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  imports: [
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  selector: 'app-contact',
  styleUrl: './contact.scss',
  templateUrl: './contact.html',
})
export class Contact {

  private readonly formspreeUrl ='https://formspree.io/f/xgavwpqe';

  contact = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };


  isSubmitting = false;

  submitSuccess = false;

  submitError = false;


  constructor(
    private http: HttpClient
  ) {}


  sendMessage(): void {
    if (this.isSubmitting) {
      return;
    }
    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;
    this.http.post(
      this.formspreeUrl,
      this.contact,
      {
        headers: {
          Accept: 'application/json'
        }
      }
    )
    .subscribe({

      next: () => {

        this.isSubmitting = false;

        this.submitSuccess = true;
        this.contact = {
          name: '',
          email: '',
          subject: '',
          message: ''
        };
      },


      error: (error) => {

        console.error(
          'Formspree submission error:',
          error
        );


        this.isSubmitting = false;

        this.submitError = true;

      }

    });

  }

}

