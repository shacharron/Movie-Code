import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SearchMoviesComponent } from './Components/movies/search-movies/search-movies.component';
import { MoviesService } from './services/movies.service';
import { HttpModule } from "@angular/http";
import { HttpClientModule } from '@angular/common/http';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { ModalDialogModule } from 'ngx-modal-dialog';
import { MovieComponent } from './Components/movies/movie/movie.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MediatorComponent } from './Components/movies/mediator/mediator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <== add the imports!
import { CapitalLetters } from './Pipes/CapitalLetters.pipe';
import { JustEnglish} from './Pipes/JustEnglish.pipe';
import { MessageBoxComponent } from './Components/message-box/message-box.component';
 
@NgModule({
  declarations: [
    AppComponent,
    SearchMoviesComponent,
    MovieComponent,
    MediatorComponent,
    CapitalLetters,
    JustEnglish,
    MessageBoxComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot()], 
    
    
  providers: [MoviesService,],
  entryComponents: [MovieComponent,MessageBoxComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
