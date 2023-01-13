import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  listeAtelier: ListeAtelier = new ListeAtelier();

  constructor(private viewportScroller: ViewportScroller) {}
  ngOnInit() {
    this.listeAtelier.getListe();
    for (let atelier of this.listeAtelier.liste) {
      this.liste.push(atelier);
    }
    this.listePrintemps = this.liste.filter(
      (at: Atelier) => at.seance === 'printemps'
    );
    this.listeAutomne = this.liste.filter(
      (at: Atelier) => at.seance === 'automne'
    );
    this.listeHiver = this.liste.filter((at: Atelier) => at.seance === 'hiver');
  }
  public scrollToAnchroingPosition(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
}
