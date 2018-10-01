import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../../services/movies.service';
import { HttpClient } from "@angular/common/http";

import { MovieComponent } from '../movie/movie.component';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageBoxComponent } from 'src/app/Components/message-box/message-box.component';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css']
})

export class SearchMoviesComponent implements OnInit {
 
  res: any;
  @Output() Edit = new EventEmitter();
  @Output() Delete = new EventEmitter();
  @Output() Add = new EventEmitter();
  @Output() Get = new EventEmitter();
  @Input()  Movies : any [];
  constructor(private modalService: NgbModal, private moviesService: MoviesService) { }

  ngOnInit() {
    this.GetMovies();
  }
  OpenAddModal() {
    this.Add.emit();
  }
  OpenDeleteModal(title) {
    this.Delete.emit(title);
  }

  OpenEditModel(id) {
    this.Edit.emit(id);
  }
  GetMovies() {
    this.Get.emit();
  }
}
