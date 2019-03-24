import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Comment {
  author: string;
  message: string;
}

export interface Post {
  author: string;
  message: string;
  image: string;
  id?: number;
  likes?:[string];
  comments?:[Comment];
}


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private author = '';
  public apiUrl = 'https://fake-tweets-api.herokuapp.com/posts';


  constructor(public httpClient: HttpClient) { }

  public all(): Promise<Post[]> {
    return this.httpClient.get<Post[]>(this.apiUrl).toPromise();
  }

  public newPost(post: Post): Promise<Post> {
    return this.httpClient.post<Post>(this.apiUrl, post).toPromise();
  }

  public getById(id: number): Promise<Post> {
    return this.httpClient.get<Post>(`${this.apiUrl}/${id}`).toPromise();
  }

  public addComment(id: number, comment: Comment): Promise<Comment> {
    return this.httpClient.post<Comment>(`${this.apiUrl}/${id}/comments`, comment).toPromise();
  }

  getAuthor(): string {
      return this.author;
  }
  setAuthor(author: string) {
      this.author = author;
  }
}
