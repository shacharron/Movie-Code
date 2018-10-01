import { Component, OnInit } from '@angular/core';
 
import { Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html'
  
})
export class MessageBoxComponent implements OnInit {
  @Input() Text;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
