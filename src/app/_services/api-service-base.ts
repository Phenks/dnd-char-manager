import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, share } from 'rxjs';
import { environment } from 'src/environments/environment';

export class ApiServiceBase<T extends { id: number }> {
  constructor(protected http: HttpClient, private endpointUrl: string) {
    this.endpoint = environment.apiUrl + this.endpointUrl;
    this.loadAll();
  }

  subject = new BehaviorSubject<T[]>([]);

  data$ = this.subject.asObservable();

  endpoint = '';

  public create(element: T) {
    var request = this.http.post(this.endpoint, element);
    const request$ = request.pipe(share());
    request$.subscribe((data) => {
      this.loadAll();
    });
    return request$;
  }

  public update(element: T) {
    var request = this.http.put(this.endpoint, element);
    const request$ = request.pipe(share());
    request$.subscribe((data) => {
      this.loadAll();
    });
    return request$;
  }

  public loadAll() {
    this.http
      .get<T[]>(this.endpoint)
      .subscribe((data) => this.subject.next(data));
  }

  public partialUpdate(element: Partial<T>) {
    let patchValue = [];
    for (const prop in element) {
      if (prop === 'id') {
        continue;
      }

      patchValue.push({
        value: element[prop],
        path: '/' + prop,
        op: 'replace',
      });
    }

    this.http
      .patch(this.endpoint + '/' + element.id, patchValue)
      .subscribe((data) => {
        if (data) {
          this.subject.next([
            ...this.subject
              .getValue()
              .map((element: T) =>
                element.id == (data as T).id ? (data as T) : element
              ),
          ]);
        }
      });
  }
}
