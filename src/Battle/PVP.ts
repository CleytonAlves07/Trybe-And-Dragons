import Fighter from '../Fighter';
import getRandomInt from '../utils';
import Battle from './Battle';

export default class PVP extends Battle {
  private _persona1: Fighter;
  private _persona2: Fighter;

  constructor(persona1: Fighter, persona2: Fighter) {
    super(persona1);
    this._persona1 = persona1;
    this._persona2 = persona2;
  }

  fight(): number {
    while (this._persona1.lifePoints !== -1
      && this._persona2.lifePoints !== -1) {
      if (getRandomInt(1, 10) <= 5) {
        this._persona1.attack(this._persona2);
      } else {
        this._persona2.attack(this._persona1);
      }
    }

    return super.fight();
  }
}