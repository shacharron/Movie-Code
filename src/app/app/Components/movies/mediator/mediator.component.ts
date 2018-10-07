import { NgxSmartModalService } from 'ngx-smart-modal';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../../services/movies.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MovieComponent } from '../movie/movie.component';
import { MessageBoxComponent } from 'src/app/Components/message-box/message-box.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Movie } from 'src/app/Models/Movie';

@Component({
  selector: 'app-mediator',
  templateUrl: './mediator.component.html',
  styleUrls: ['./mediator.component.css']
})
export class MediatorComponent implements OnInit {
  Movies: Movie[];
  constructor(private modalService: NgbModal, private MessageBoxComponent: NgbModal, private moviesService: MoviesService, public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
  }


  EditModel(data) {
    this.GetMovie(data);
  }

  GetMovies() {
    this.moviesService.HttpGetMoviesByTitle("Avengers")
      .subscribe(res => {
        console.log(res);
        this.Movies = res;
      });
  }
  AddModal(data) {
    const modalRef = this.modalService.open(MovieComponent);
    modalRef.componentInstance.MovieDetails = "";
    modalRef.result.then((result: Movie) => {
      // generate giud 
      result.imdbID = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)

      this.Movies.push(result);

    }, (reason) => {
    });
  }

  DeleteModal(data) {
    const modalRef = this.modalService.open(MessageBoxComponent);
    modalRef.componentInstance.Text = data[0].Title;
    modalRef.result.then((resultResaon) => {
      if (resultResaon) {
        var index = this.Movies.findIndex(function (item, i) {
          return item.imdbID === data[0].imdbID
        });
        this.Movies.splice(index, 1);
      }
    }, (reason) => {
    });

  }

  private GetMovie(id) {
    let TempMovie = this.Movies;
    let result = this.moviesService.HttpGetMoviesById(id)
      .then((fulfilled: any) => {
        const modalRef = this.modalService.open(MovieComponent);
        fulfilled.Response ===  "False" ? fulfilled = TempMovie.find(x => x.imdbID ===  id.toString()) : fulfilled;
        modalRef.componentInstance.MovieDetails = fulfilled;

        // modalRef.componentInstance.action.subscribe(($e) => {
        modalRef.result.then((result) => {
          console.log(result.Year);
          let LocalMovie = this.Movies.find(x => x.imdbID === result.imdbID);
          LocalMovie.Year = result.Year;
          LocalMovie.Title = result.Title;
         
    

        }, (reason) => {
        });
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }

}
