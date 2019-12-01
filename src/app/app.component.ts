import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    userName: string;
    private response: any;

    constructor(private http: HttpClient) {
    }

    search() {
        this.http.get('https://api.github.com/users/' + this.userName)
            .subscribe((response) => {
                this.response = response;
                console.log(this.response);
            });
    }

}
