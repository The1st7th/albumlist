import { Injectable } from '@angular/core';
import { Album } from './album.model';
import { ALBUMS } from './mockalbums';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class AlbumService {
  albums: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) { 
    this.albums = database.list('albums');
    console.log(this.albums.$ref);
    this.albums.subscribe(keys => console.log("keys are", keys));
    console.log(database);
  }
  getAlbums() {
    
    return this.albums;
  }
  getAlbumById(albumId: number)
  {
    return this.database.object('albums/' + albumId);
  }
  addAlbum(newAlbum: Album) {
    this.albums.push(newAlbum);
  }
}
