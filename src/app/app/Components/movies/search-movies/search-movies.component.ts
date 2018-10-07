import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../../services/movies.service';
import { HttpClient } from "@angular/common/http";

import { MovieComponent } from '../movie/movie.component';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageBoxComponent } from 'src/app/Components/message-box/message-box.component';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Movie } from 'src/app/Models/Movie';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css']
})

export class SearchMoviesComponent implements OnInit {

  res: Movie;
  @Output() Put = new EventEmitter();
  @Output() Post = new EventEmitter();
  @Output() Delete = new EventEmitter();
  @Output() Get = new EventEmitter();
  @Input() Movies: Movie[];
  constructor() { }

  ngOnInit() {
    this.GetMovies();
  }
  EditModel(id) {
    this.Put.emit(id);
  }
  AddModal() {
    this.Post.emit();
  }
  DeleteModal(data) {
    this.Delete.emit(data);
  }

  GetMovies() {
    this.Get.emit();
  }
}
