import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MoviesService } from '../../../services/movies.service';
import { NgForm } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieValidators } from 'src/app/Validators/Movie.Validators';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})

export class MovieComponent {

  @Input() MovieDetails;
  IsFileExsit: boolean ;
  form: FormGroup;

  constructor(public activeModal: NgbActiveModal, private moviesService: MoviesService, fb: FormBuilder) {
    this.form = fb.group({
      Title: ["", MovieValidators.CustomRequired],
      Year: ["", MovieValidators.CustomRequired],
      Runtime: ["", MovieValidators.CustomRequired],
      Genre: ["", MovieValidators.CustomRequired],
      Director: ["", MovieValidators.CustomRequired],
    });
  }
  get Title() {
    return this.form.get('Title');
  }
  get Year() {
    return this.form.get('Year');
  }
  get Runtime() {
    return this.form.get('Runtime');
  }
  get Genre() {
    return this.form.get('Genre');
  }
  get Director() {
    return this.form.get('Director');
  }

  onSubmit() {

    if (this.form.valid) {
      console.log('form submitted');
      this.activeModal.close();
      
    } else {
      this.validateAllFormFields(this.form);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      console.log(field);
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        this.form.get(field).valid ? false : this.form.get(field).markAsDirty();
      }
    });
  }

  checkIfExsist(title) {
    let result = this.moviesService.HttpGetMovieByTitle(title.value)
      .then((fulfilled : any ) => {
        
        fulfilled.Response ==  "False" ? this.IsFileExsit = false  :this.IsFileExsit = true ;
        

      })
      .catch(function (error) {
        console.log(error.message);
      });
  }

}
