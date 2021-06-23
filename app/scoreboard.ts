import { Result } from './Result'



export class ScoreBoard {
    private results: Result[] = [];

    addResult(newResult: Result): void {
        this.results.push(newResult);
    }

    updateResult(): void {
        let output = '<h2>ScoreBoard</h2>';

        for (let index = 0; index < this.results.length; index++) {
            const result: Result = this.results[index];
            output += '<h4>';
            output += result.playerName + ' :' + result.score + '/' + result.problemCount + 'for factor' + result.factor;
            output += '</h4>'

        }

        const scoresElement: HTMLElement = <HTMLElement>document.getElementById('scores');
        scoresElement.innerHTML = output;

    }


}