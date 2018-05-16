import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Angular Blog';

  blogPosts: Array<Post> = [
    new Post({
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tempus tellus. Praesent efficitur egestas nulla et auctor. Phasellus molestie risus at nisl auctor dapibus. Phasellus ipsum ipsum, interdum in hendrerit feugiat, malesuada at odio. Vestibulum eget pharetra est, et dignissim urna. Nulla facilisi. Phasellus dapibus finibus felis, at egestas risus dictum quis. Aenean fringilla turpis in turpis rutrum, a vehicula eros sagittis. Proin sit amet luctus augue. Donec erat turpis, consectetur vel congue ut, tristique in justo. Aenean gravida leo ut nisl lacinia placerat. Nulla sit amet dapibus elit. Duis efficitur, odio pulvinar consequat vestibulum, diam quam dapibus nulla.',
      lovesIt: 5,
      createdAt: new Date('2018-01-05 10:45:30'),
    }),
    new Post({
      title: 'Mon second post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et dignissim lacus, vel ultrices nunc. Ut non diam sed est auctor pellentesque. Aliquam nec ipsum diam. Vivamus feugiat libero sed dui auctor, at luctus tortor lobortis. Curabitur in lacinia augue. Mauris ac varius elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed nunc nunc, lacinia et sapien lobortis, luctus finibus sem. Fusce ut mauris augue. Ut accumsan ultrices mi condimentum accumsan.      Mauris tincidunt molestie velit id facilisis. Duis condimentum arcu metus, eget tincidunt lorem aliquet eget. Nulla egestas sollicitudin mattis. Aliquam lorem dolor, cursus.',
      lovesIt: -3,
      createdAt: new Date('2018-01-10 10:45:30'),
    }),
    new Post({
      title: 'Mon troisième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis mi eget nisi lobortis convallis. Cras tempor quam eu magna sollicitudin porttitor. Aenean vel felis volutpat, molestie nisl a, lobortis augue. Nulla tristique eget quam sed maximus. Donec vel purus turpis. Nam pulvinar orci vitae tempus molestie. Donec ultricies est.',
    })
  ];
}
