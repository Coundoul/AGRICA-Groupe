import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerDialogComponent } from './manager-dialog.component';

describe('ManagerDialogComponent', () => {
  let component: ManagerDialogComponent;
  let fixture: ComponentFixture<ManagerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
