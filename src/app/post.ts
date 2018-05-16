export class Post {
  title: string;
  content: string;
  lovesIt?: number = 0;
  createdAt?: Date;

  constructor (fields: Partial<Post> & { title: string, content: string}) {
    Object.assign(this, fields);
    if (!this.createdAt) {
      this.createdAt = new Date();
    }
  }
}

