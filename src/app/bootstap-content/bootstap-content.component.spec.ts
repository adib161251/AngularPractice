import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstapContentComponent } from './bootstap-content.component';

describe('BootstapContentComponent', () => {
  let component: BootstapContentComponent;
  let fixture: ComponentFixture<BootstapContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootstapContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstapContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
