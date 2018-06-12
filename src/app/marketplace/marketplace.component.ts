import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { Router } from '@angular/router';
import { AlbumService } from '../album.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers:[AlbumService]
})
export class MarketplaceComponent implements OnInit {
    albums: FirebaseListObservable<any[]>;

  constructor(private router:Router, private albumService: AlbumService) { }

  ngOnInit() {
    this.albums = this.albumService.getAlbums();
    console.log(this.albums);
  }
 
  gotodetailpage(clickedAlbum) {
    // this.router.navigate(['albums', clickedAlbum.id]);
    console.log(clickedAlbum);
    this.router.navigate(['albums', clickedAlbum.$key]);
  };
}