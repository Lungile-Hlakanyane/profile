import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-navbar',
  styleUrl: './navbar.scss',
  templateUrl: './navbar.html',
})
export class Navbar {

  menuOpen = false; 
  
  toggleMenu(): void { 
    this.menuOpen = !this.menuOpen; 
    this.updateBodyScroll(); 
  } 
  
  closeMenu(): void { 
    this.menuOpen = false; this.updateBodyScroll(); 
  } 
  
  private updateBodyScroll(): void { 
    if (this.menuOpen) { 
      document.body.style.overflow = 'hidden'; 
    } 
    else { document.body.style.overflow = ''; 
    } 
  }

}
