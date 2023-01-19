import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { DessinListe } from '../dessin-liste';
@Component({
  selector: 'app-dessins',
  templateUrl: './dessins.component.html',
  styleUrls: ['./dessins.component.scss'],
})
export class DessinsComponent {
  liste: any = [];
  listeDessin: DessinListe = new DessinListe();
  constructor(private viewportScroller: ViewportScroller) {}
  ngOnInit() {
    this.listeDessin.getListe();
    for (let dessin of this.listeDessin.liste) this.liste.push(dessin);
  }
  public scrollToAnchroingPosition(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
}
