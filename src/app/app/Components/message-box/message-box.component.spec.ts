import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageBoxComponent } from './message-box.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('MessageBoxComponent', () => {
  let component: MessageBoxComponent;
  let fixture: ComponentFixture<MessageBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageBoxComponent ],
      imports: [ NgbModule.forRoot()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
