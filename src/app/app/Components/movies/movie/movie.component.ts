import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MoviesService } from '../../../services/movies.service';
import { NgForm } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieValidators } from 'src/app/Validators/Movie.Validators';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Movie } from 'src/app/Models/Movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})

export class MovieComponent {
  @Output() Post = new EventEmitter();
  @Input() MovieDetails;
  IsFileExsit: boolean ;
  form: FormGroup;
 
  
  constructor(public activeModal: NgbActiveModal, private moviesService: MoviesService, fb: FormBuilder) {
    this.form = fb.group({
      imdbID : [],
      Title: ["", MovieValidators.CustomRequired],
      Year: ["", [MovieValidators.CustomRequired , MovieValidators.ValidYear]],
      Runtime: ["", MovieValidators.CustomRequired],
      Genre: ["", MovieValidators.CustomRequired],
      Director: ["", MovieValidators.CustomRequired],
    });
  }

  get imdbID() {
    return this.form.get('imdbID');
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
      let NewMovie = {
     
        imdbID:  this.form.controls.imdbID.value,
        Title: this.form.controls.Title.value,
        Year: this.form.controls.Year.value,
        Runtime: this.form.controls.Runtime.value,
        Genre: this.form.controls.Genre.value, 
        Director: this.form.controls.Director.value,
      };
     
      this.activeModal.close(NewMovie);
    } else {
      this.validateAllFormFields(this.form);
    }
  }


  checkIfExsist(title) {
    let result = this.moviesService.HttpGetMovieByTitle(title.value)
      .then((fulfilled : any ) => {
         
        fulfilled.Response ===  "False" ? this.IsFileExsit = false  :this.IsFileExsit = true ;
      })
      .catch(function (error) {
        console.log(error.message);
      });
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
}
