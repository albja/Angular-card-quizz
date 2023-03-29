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
      case this.photo = "https://static.lpnt.fr/images/2017/03/10/7413751lpw-7414094-article-jpg_4146645_1250x625.jpg":
        this.photo = "https://fyooyzbm.filerobot.com/v7/capture+d%27%C3%A9cran+du+film-8ae4tfo3.webp?vh=6b10e7&ci_seal=40952d949b&w=1280&h=746&gravity=auto&func=crop"
        break;
      case this.photo = "https://fyooyzbm.filerobot.com/v7/capture+d%27%C3%A9cran+du+film-8ae4tfo3.webp?vh=6b10e7&ci_seal=40952d949b&w=1280&h=746&gravity=auto&func=crop":
        this.photo = "https://www.leparisien.fr/resizer/vNIN-WgVKhqv2fTTJ_wNh-HIq6k=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/NOMB5CZSI5HFHBR62GRGWDX3RU.jpg"
        break;
      default: alert(`that's all guys !!!!`)
        this.photo = "https://media.istockphoto.com/id/1152085853/fr/vectoriel/le-fond-d%C3%A9cran-noir-et-blanc-dextr%C3%A9mit%C3%A9-fond-d%C3%A9cran-de-fin-de-film-la-fin-du-film-ou.jpg?s=612x612&w=0&k=20&c=eQMDdHwn9QLq_b9mGKA61OlvxXO6zK2s_bbCiFYfbBs="



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
      case this.photo = "https://fyooyzbm.filerobot.com/v7/capture+d%27%C3%A9cran+du+film-8ae4tfo3.webp?vh=6b10e7&ci_seal=40952d949b&w=1280&h=746&gravity=auto&func=crop":
        alert(`Tu es un sorcier Harry`)
        break;
      case this.photo = "https://www.leparisien.fr/resizer/vNIN-WgVKhqv2fTTJ_wNh-HIq6k=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/NOMB5CZSI5HFHBR62GRGWDX3RU.jpg":
        alert(`Un grand pouvoir implique de grandes responsabilités`)
        break;
      default: ''

    }

  }
}

