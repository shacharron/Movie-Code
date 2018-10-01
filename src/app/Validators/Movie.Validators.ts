
import { AbstractControl } from "@angular/forms";
import { ValidationErrors } from "@angular/forms";
import { MoviesService } from "src/app/services/movies.service";

export class MovieValidators {

    static CustomRequired(control: AbstractControl): ValidationErrors | null {
            return control.value ? null :{ 'CustomRequired': true }  ;
    }
}