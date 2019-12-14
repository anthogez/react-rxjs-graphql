import { Subject, Observable } from "rxjs";

class SearchPostsService {
  private _subject: Subject<any>;

  constructor() {
    this._subject = new Subject();
  }

  emit(value: string): void {
    this._subject.next(value);
  }

  searchValue(): Observable<any> {
    return this._subject.asObservable();
  }
}

const SingletonInstance = new SearchPostsService();
Object.freeze(SingletonInstance);

export default SingletonInstance;
