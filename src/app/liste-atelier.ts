import { Atelier } from './atelier';

export class ListeAtelier {
  liste: Array<Atelier>;

  addAtelier(atelier: Atelier) {
    this.liste.push(atelier);
  }
}
