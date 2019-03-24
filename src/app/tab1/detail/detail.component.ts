import { Component, OnInit } from '@angular/core';
import { PostsService, Post, Comment } from 'src/app/posts.service';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

  public post: Post;

  public comment: Comment = {
    author: "",
    message: ""
  }

  constructor(public postsService: PostsService, public activatedRoute: ActivatedRoute,public toast: ToastController) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.postsService.getById(id).then(response => {
      this.post = response; //riempio la pagina con il singolo post e i relativi commenti
    })
  }

  public addComment_() {
    this.comment.author = this.postsService.getAuthor();
    if (!this.comment.author) { //se non c'è ancora l'autore
      this.presentToast('Set Author'); //manda questo popup/toast
    } else {
    const id = this.activatedRoute.snapshot.params.id;
    this.postsService.addComment(id, this.comment).then(response =>{
      this.comment.message = ''; //resetta l'input
      this.presentToast('Comment sent'); //toast commento inviato
    })
    }
  }

  async presentToast(message: string) {
    const toast = await this.toast.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }
}
