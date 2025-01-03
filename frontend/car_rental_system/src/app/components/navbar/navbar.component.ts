import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [
        MatToolbarModule,
        MatButtonModule,
        CommonModule,
        RouterModule,
        MatIconModule
    ],
    templateUrl: './navbar.component.html',
    styleUrls: [
        './navbar.component.css'
    ]
})
export class NavbarComponent {
    constructor(
        public authService: AuthService,
        private router: Router
    ) { }

    get isAdmin(): boolean {
        return this.authService.isAdmin();
    }

    get isLoggedIn(): boolean {
        return this.authService.isLoggedIn();
    }

    logout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }
}