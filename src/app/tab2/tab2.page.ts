import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PostsService, Post } from '../posts.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public post: Post = {
    author: '',
    message: '',
    image: ''
  };

  constructor(public postsServices: PostsService, public toastController: ToastController) {
  }

  set() {
    this.post.author = this.postsServices.getAuthor();
    this.postsServices.newPost(this.post).then(() => {
      this.post.message= '';
      this.post.image= '';
      this.presentToast('Post created');
    });
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }
}
