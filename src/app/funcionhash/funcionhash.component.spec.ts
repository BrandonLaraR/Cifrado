import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionhashComponent } from './funcionhash.component';

describe('FuncionhashComponent', () => {
  let component: FuncionhashComponent;
  let fixture: ComponentFixture<FuncionhashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuncionhashComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FuncionhashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
