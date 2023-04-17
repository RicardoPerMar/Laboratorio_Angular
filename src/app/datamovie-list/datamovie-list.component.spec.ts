import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatamovieListComponent } from './datamovie-list.component';

describe('DatamovieListComponent', () => {
  let component: DatamovieListComponent;
  let fixture: ComponentFixture<DatamovieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatamovieListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatamovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
