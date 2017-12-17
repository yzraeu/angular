import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecebeCursoCriadoComponent } from './recebe-curso-criado.component';

describe('RecebeCursoCriadoComponent', () => {
  let component: RecebeCursoCriadoComponent;
  let fixture: ComponentFixture<RecebeCursoCriadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecebeCursoCriadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecebeCursoCriadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
