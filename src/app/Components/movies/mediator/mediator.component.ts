import { NgxSmartModalService } from 'ngx-smart-modal';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../../services/movies.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MovieComponent } from '../movie/movie.component';
import { MessageBoxComponent } from 'src/app/Components/message-box/message-box.component';

@Component({
  selector: 'app-mediator',
  templateUrl: './mediator.component.html',

})
export class MediatorComponent implements OnInit {
  Movies : any [];
  constructor(private modalService: NgbModal, private MessageBoxComponent: NgbModal, private moviesService: MoviesService) {
  }

  ngOnInit() {
  }
  GetModalValues(data) {
    this.GetMovie(data);
  }

  GetMovies() {
    this.moviesService.HttpGetMoviesByTitle("Avengers")
    .subscribe(res => 
      {
        this.Movies = res;
      });
  }


  OpenModal(data) {
    const modalRef = this.modalService.open(MovieComponent);
    modalRef.componentInstance.MovieDetails = "";
  }

  OpenDeleteModal(data) {
    const modalRef = this.modalService.open(MessageBoxComponent);
    modalRef.componentInstance.Text = "You are about to delete " + data;
  }

  private GetMovie(id) {
    let result = this.moviesService.HttpGetMoviesById(id)
      .then((fulfilled: any) => {
        const modalRef = this.modalService.open(MovieComponent);
        modalRef.componentInstance.MovieDetails = fulfilled;
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }


}
