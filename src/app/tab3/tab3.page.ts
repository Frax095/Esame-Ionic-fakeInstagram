import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  public author: string;
  constructor(public postsService: PostsService, public toastController: ToastController) {
  }

  ngOnInit() {
    this.author = this.postsService.getAuthor();
  }

  set() {
    this.postsService.setAuthor(this.author);
    this.author = '';
    this.presentToast('User set');
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
}
