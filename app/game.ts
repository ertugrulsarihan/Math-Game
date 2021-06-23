import { getValue } from './utility';
import { Result } from './Result';
import { Player } from './player';
import { ScoreBoard as ResultPanel } from './scoreboard'

export class Game {
    private scoreBoard: ResultPanel = new ResultPanel();



    constructor(public player: Player, public problemCount: number, public factor: number) {
    }

    displayGame(): void {
        let gameForm: string = '';
        for (let index = 0; index < this.problemCount; index++) {
            gameForm += '<div class="form-group">';
            gameForm += '<label for="answer' + index + '" class="col-sm-2 control-babel">';
            gameForm += String(this.factor) + 'x' + index + '=</label>';
            gameForm += '<div class="col-sm-1"><input type="text" class="form-control" id="answer' + index + '"size="5"/></div>';
            gameForm += '</div>'

        }

        const gameElement: HTMLElement = <HTMLElement>document.getElementById('game');
        gameElement.innerHTML = gameForm;

        document.getElementById('calculate')!.removeAttribute('disabled')
    }


    calculateScore(): void {
        let score: number = 0;
        for (let i = 0; i < this.problemCount; i++) {
            const answer: number = Number(getValue('answer' + i))

            if (i * this.factor === answer) {
                score++
            }


        }

        const result: Result = {
            playerName: this.player.name,
            score: score,
            problemCount: this.problemCount,
            factor: this.factor
        }

        this.scoreBoard.addResult(result);
        this.scoreBoard.updateResult();


        document.getElementById('calculate')!.setAttribute('disabled', 'true');




    }

}




