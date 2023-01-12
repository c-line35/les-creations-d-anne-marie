import { Component } from '@angular/core';
import { Atelier } from '../atelier';
import { ListeAtelier } from '../liste-atelier';

@Component({
  selector: 'app-atelier',
  templateUrl: './atelier.component.html',
  styleUrls: ['./atelier.component.scss'],
})
export class AtelierComponent {
  liste: any = [];
  listePrintemps: any = [];
  listeAutomne: any = [];
  listeHiver: any = [];
  ngOnInit() {
    //---------------------------------------------------PRINTEMPS--------------------------------------------------------
    this.liste.push(
      new Atelier(
        'Le soleil brille',
        'Le chat se repose',
        'Dans le champs',
        'Malou, 8 ans',
        'printemps'
      )
    );
    this.liste.push(
      new Atelier(
        'Le soleil se couche',
        'Les poules sortent',
        'Le renard se prépare',
        'Malou, 8 ans',
        'printemps'
      )
    );
    this.liste.push(
      new Atelier(
        "Les fleurs s'ouvrent",
        'Les animaux se réveillent',
        'Le printemps arrive',
        'Malou, 8 ans',
        'printemps'
      )
    );
    this.liste.push(
      new Atelier(
        'Je mange le gâteau',
        'Dans une forêt joyeuse',
        'Près de chez moi',
        'Malou, 8 ans',
        'printemps'
      )
    );
    this.liste.push(
      new Atelier(
        "J'aime les chevaux",
        'Comme ils sont beaux',
        'Myrras mon préféré',
        'Malou, 8 ans',
        'printemps'
      )
    );
    this.liste.push(
      new Atelier(
        'Je me réveille',
        "J'entends les oiseaux chanter",
        'Je suis heureuse',
        'Malou, 8 ans',
        'printemps'
      )
    );
    this.liste.push(
      new Atelier(
        'Cheval, ma passion',
        "J'adore les chiens et les chats",
        'Anumaux mas amis',
        'Malou, 8 ans',
        'printemps'
      )
    );
    this.liste.push(
      new Atelier(
        'La mouette vole',
        'Je vois la mer',
        'Les coquillages',
        'Malou, 8 ans',
        'printemps'
      )
    );
    this.liste.push(
      new Atelier(
        'Le chat se repose',
        'Il joue sur le canapé',
        'Puis il mange un jouet',
        'Elynn, 7 ans',
        'printemps'
      )
    );
    this.liste.push(
      new Atelier(
        'Je mange le gâteau',
        'Sur un bel étang',
        'Le soleil brille de mille feux',
        'Elynn, 7 ans',
        'printemps'
      )
    );
    this.liste.push(
      new Atelier(
        'Le chat dort',
        'Sous un arbre',
        'Il se repose',
        'Louna, 8 ans',
        'printemps'
      )
    );
    this.liste.push(
      new Atelier(
        'Je mange le gâteau',
        'Dans le jardin',
        'Sous un joli cerisier',
        'Louna, 8 ans',
        'printemps'
      )
    );
    this.liste.push(
      new Atelier(
        'Un joli oiseau',
        'Se perche sur une branche',
        'Décore le pommier',
        'Louna, 8 ans',
        'printemps'
      )
    );
    this.liste.push(
      new Atelier(
        'Le chat dort',
        'Il se réveille',
        'Pour aller chasser',
        'Angèle, 8 ans',
        'printemps'
      )
    );
    this.liste.push(
      new Atelier(
        'Sur le sable chaud',
        'Un chat noir',
        'Il est bien',
        'Angèle, 8 ans',
        'printemps'
      )
    );
    this.liste.push(
      new Atelier(
        'Il y a un grand soleil',
        "Puis d'un coup",
        'La pluie tombe',
        'Angèle, 8 ans',
        'printemps'
      )
    );
    this.liste.push(
      new Atelier(
        'Un caillou',
        'Roulé par la mer',
        "Maintenant c'est un galet",
        'Angèle, 8 ans',
        'printemps'
      )
    );
    this.liste.push(
      new Atelier(
        'Je mange le gâteau',
        'Maman en fait un autre',
        "Il a l'air bon",
        'Angèle, 8ans',
        'printemps'
      )
    );
    this.liste.push(
      new Atelier(
        'Le dragon de Chine',
        'Est merveilleux',
        'Et impressionnant',
        'Angèle, 8 ans',
        'printemps'
      )
    );
    this.liste.push(
      new Atelier(
        'La fleur tombe',
        'Du cerisier',
        'Atterrit dans le panier',
        'Angèle, 8 ans',
        'printemps'
      )
    );
    this.liste.push(
      new Atelier(
        'Le chat avance',
        'Saute rapidement',
        'Arrive sur la table',
        'Hoël, 9 ans',
        'printemps'
      )
    );
    this.liste.push(
      new Atelier(
        "L'oie est très gracieuse",
        'Elle vole comme le vent',
        'Arrive sur le bateau',
        'Hoël, 9 ans',
        'printemps'
      )
    );
    //---------------------------------------------------------AUTOMNE-----------------------------------------------
    this.liste.push(
      new Atelier(
        'Une feuille tombe',
        'Je la ramasse',
        "C'est l'automne",
        'Louna, 9 ans',
        'automne'
      )
    );
    this.liste.push(
      new Atelier(
        'Il fait froid',
        'Il fait froid',
        "C'est la vie",
        'Louna, 9 ans',
        'automne'
      )
    );
    this.liste.push(
      new Atelier(
        'Le chat arrive',
        'Il voit une tomate',
        "Il l'écrase",
        'Louna, 9 ans',
        'automne'
      )
    );
    this.liste.push(
      new Atelier(
        "C'est l'automne",
        'Les feuilles tombent',
        'Je les observe',
        'Keren, 7 ans',
        'automne'
      )
    );
    this.liste.push(
      new Atelier(
        'En automne les feuilles',
        'Tombent des arbres',
        "Puis un papillon s'envole",
        'Roxane, 6 ans',
        'automne'
      )
    );
    //this.liste.push(new Atelier());
    //this.liste.push(new Atelier());
    //this.liste.push(new Atelier());
    //this.liste.push(new Atelier());
    //this.liste.push(new Atelier());
    //this.liste.push(new Atelier());
    //this.liste.push(new Atelier());
    //this.liste.push(new Atelier());
    //this.liste.push(new Atelier());
    //this.liste.push(new Atelier());
    //this.liste.push(new Atelier());
    //this.liste.push(new Atelier());
    //this.liste.push(new Atelier());
    //this.liste.push(new Atelier());
    //this.liste.push(new Atelier());
    //this.liste.push(new Atelier());
    //this.liste.push(new Atelier());
    //this.liste.push(new Atelier());
    //this.liste.push(new Atelier());
    //this.liste.push(new Atelier());
    //this.liste.push(new Atelier());
    //this.liste.push(new Atelier());
    //this.liste.push(new Atelier());
    //this.liste.push(new Atelier());
    //this.liste.push(new Atelier());
    //this.liste.push(new Atelier());
    //this.liste.push(new Atelier());
    //this.liste.push(new Atelier());
    //this.liste.push(new Atelier());
    //this.liste.push(new Atelier())

    this.listePrintemps = this.liste.filter(
      (at: Atelier) => at.seance === 'printemps'
    );
    this.listeAutomne = this.liste.filter(
      (at: Atelier) => at.seance === 'automne'
    );
    this.listeHiver = this.liste.filter((at: Atelier) => at.seance === 'hiver');
  }
}
