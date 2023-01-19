import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Dessin } from './dessin';

export class DessinListe {
  liste: any = [];
  constructor() {}

  getListe() {
    this.liste.push(
      new Dessin('Coucher de soleil', 'coucher-de-soleil', 'marie', '', 1)
    );
    this.liste.push(
      new Dessin(" Fleur d'Etang", 'fleur-d-etang', 'marie', '', 2)
    );
    this.liste.push(new Dessin('La chouette', 'la-chouette', 'marie', '', 3));
    this.liste.push(new Dessin('Le chat', 'le-chat', 'perso', '', 4));
    this.liste.push(
      new Dessin('Feuille de Ginkgo', 'linogravure', 'lino', '', 5)
    );
    this.liste.push(new Dessin('Ma main', 'main', 'marie', '', 6));
    this.liste.push(new Dessin('Mains', 'mains', 'marie', '', 7));
    this.liste.push(
      new Dessin('Perros-Guirrec', 'perros-guirec', 'marie', '', 8)
    );
    this.liste.push(new Dessin('La Réunion', 'saint-pierre2', '', '', 9));
    this.liste.push(
      new Dessin('Saint-Senoux', 'saint-senoux', 'marie', '', 10)
    );
  }
}
