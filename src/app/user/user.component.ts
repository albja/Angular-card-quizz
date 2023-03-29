import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  user = new User(
    `D'Poisson`,
    'Alban',
    33,
    '',
    'https://img.filmsactu.net/datas/personnes/l/i/liam-neeson/n/liam-neeson-60cb1b9e7da88.jpg'

  );
}

class User {
  name: string;
  firstName: string;
  age: number;
  quote: string;
  photo: string;

  constructor(
    name: string,
    firstName: string,
    age: number,
    quote: '',
    photo: string
  ) {
    this.name = name;
    this.firstName = firstName;
    this.age = age;
    this.quote = quote;
    this.photo = photo;
  }
  togglePhoto(): void {
    switch (this.photo) {
      case this.photo = "https://img.filmsactu.net/datas/personnes/l/i/liam-neeson/n/liam-neeson-60cb1b9e7da88.jpg":
        this.photo = "https://imgsrc.cineserie.com/2021/02/quelle-est-la-difference-entre-le-snap-et-le-blip-dans-le-mcu-1.jpg?ver=1"
        break;
      case this.photo = "https://imgsrc.cineserie.com/2021/02/quelle-est-la-difference-entre-le-snap-et-le-blip-dans-le-mcu-1.jpg?ver=1":
        this.photo = "https://jaimelesmots.com/wp-content/uploads/2020/02/j-ai-glisse-chef-e1582246021762.jpg"
        break;
      case this.photo = "https://jaimelesmots.com/wp-content/uploads/2020/02/j-ai-glisse-chef-e1582246021762.jpg":
        this.photo = "https://imgr.cineserie.com/2022/04/big_1435767819_image.jpg?imgeng=/f_jpg/cmpr_0/w_660/m_box&ver=1"
        break;
      case this.photo = "https://imgr.cineserie.com/2022/04/big_1435767819_image.jpg?imgeng=/f_jpg/cmpr_0/w_660/m_box&ver=1":
        this.photo = "https://static.lpnt.fr/images/2017/03/10/7413751lpw-7414094-article-jpg_4146645_1250x625.jpg"
        break;
      default: ''
    }

  }
  onClickMe1(): void {
    switch (this.photo) {
      case this.photo = "https://img.filmsactu.net/datas/personnes/l/i/liam-neeson/n/liam-neeson-60cb1b9e7da88.jpg":
        alert('Bon Chance!');
        break;
      case this.photo = "https://imgsrc.cineserie.com/2021/02/quelle-est-la-difference-entre-le-snap-et-le-blip-dans-le-mcu-1.jpg?ver=1":
        alert('Je suis ineluctable')
        break;
      case this.photo = "https://jaimelesmots.com/wp-content/uploads/2020/02/j-ai-glisse-chef-e1582246021762.jpg":
        alert(`J'ai glissé chef!`)
        break;
      case this.photo = "https://imgr.cineserie.com/2022/04/big_1435767819_image.jpg?imgeng=/f_jpg/cmpr_0/w_660/m_box&ver=1":
        alert(`I will be back`)
        break;
      case this.photo = "https://static.lpnt.fr/images/2017/03/10/7413751lpw-7414094-article-jpg_4146645_1250x625.jpg":
        alert(`Libérée, Délivrée !!!!`)
        break;
      default: ''

    }

  }
}

