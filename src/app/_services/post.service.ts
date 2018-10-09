import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private ENDPOINT = environment.end_point + '/r/pics/';

  constructor(private http: HttpClient ){

  }

  /**
   * @returns array of Reddit posts
   */
  getPosts(){
    return this.http.get<any>(this.ENDPOINT + '.json').pipe(map(res => res.data.children));
  }

  /**
   * @returns details of a Reddit post
   * @param obj containing id of the post
   */
  getPost(obj:any){
    let id = obj._value.id;
    return this.http.get<any>(this.ENDPOINT + 'comments/' + id + '.json').pipe(map(res => res[0].data.children[0].data));
  }
  
}