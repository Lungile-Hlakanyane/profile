import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientProjects } from './client-projects';

describe('ClientProjects', () => {
  let component: ClientProjects;
  let fixture: ComponentFixture<ClientProjects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientProjects],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientProjects);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
