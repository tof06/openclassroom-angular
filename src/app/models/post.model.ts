export class Post {
  title: string;
  content: string;
  lovesIt?: number = 0;
  slug?: string = null;
  private _createdAt?: number = null; // Will be saved as a timestamp since Firebase does not handle Date object.

  // Create Getter & Setter for post date to return a Date object or set a timestamp from a Date object
  get createdAt() {
    return new Date(this._createdAt);
  }
  set createdAt(date: Date) {
    this._createdAt = date.getTime();
  }

  constructor(fields: Partial<Post> & { title: string; content: string }) {
    Object.assign(this, fields);
    if (!this._createdAt) {
      this._createdAt = new Date().getTime();
    }
    if (!this.slug) {
      this.slug = this._createSlug();
    }
  }

  private _createSlug(): string {
    let str = this.title;

    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();

    // remove accents, swap ñ for n, etc
    const from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;';
    const to = 'aaaaeeeeiiiioooouuuunc------';
    for (let i = 0, l = from.length; i < l; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str
      .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
      .replace(/\s+/g, '-') // collapse whitespace and replace by -
      .replace(/-+/g, '-'); // collapse dashes

    // Add post timestamp in the slug to ensure unicity

    return this._createdAt + '-' + str;
  }
}
