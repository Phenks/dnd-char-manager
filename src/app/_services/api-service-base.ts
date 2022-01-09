import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, share } from 'rxjs';
import { environment } from 'src/environments/environment';

export class ApiServiceBase<T> {
  constructor(private http: HttpClient, private endpointUrl: string) {
    this.endpoint = environment.apiUrl + this.endpointUrl;
  }

  subject = new BehaviorSubject<T[]>([]);

  data$ = this.subject.asObservable();

  endpoint = '';

  public create(element: T) {
    var request = this.http.post(this.endpoint, element);
    request.subscribe((c) => {
      this.loadAll();
    });
  }

  public loadAll() {
    this.http
      .get<T[]>(this.endpoint)
      .subscribe((data) => this.subject.next(data));
  }
}
