export class Dessin {
  titre: string;
  image: string;
  rubrique: string;
  commentaire: string;
  index: number;

  constructor(
    titre: string,
    image: string,
    rubrique: string,
    commentaire: string,
    index: number
  ) {
    this.titre = titre;
    this.image = image;
    this.rubrique = rubrique;
    this.commentaire = commentaire;
    this.index = index;
  }
}
