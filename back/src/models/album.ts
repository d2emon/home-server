import { Item } from '../types';
import Model from './model';
import wikiHelper from '../helpers/wiki';
// import mongoose from 'db';
// import { Track } from 'models/track';

// moment.locale('ru');

/*
var schema = mongoose.Schema({
  title: String,
  date: Date,
  thumb: String,
  description: String,
  tracks: [Track.schema]
});
*/

class AlbumModel extends Model {
    protected static dataFile = '/app/src/data/albums.json';

    protected wikiPath = '/app/markdown/Искусство/Музыка/Альбомы/';

    public loadPage(page?: string): Promise<string> {
        return wikiHelper(
            this.wikiPath,
            this.name,
        )
    }

    public full(): Promise<Item> {
        return Promise.all([
            this.brief(),
            this.loadPage(this.name),
        ])
            .then(([brief, description]: [Item, string]) => ({
                ...brief,
                description,
                // pages: item.pages,
            }))
    }
}

export default AlbumModel;
// exports.Album = mongoose.model('Album', schema);
