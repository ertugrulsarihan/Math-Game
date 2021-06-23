"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
var utility_1 = require("./utility");
var scoreboard_1 = require("./scoreboard");
var Game = (function () {
    function Game(player, problemCount, factor) {
        this.player = player;
        this.problemCount = problemCount;
        this.factor = factor;
        this.scoreBoard = new scoreboard_1.ScoreBoard();
    }
    Game.prototype.displayGame = function () {
        var gameForm = '';
        for (var index = 0; index < this.problemCount; index++) {
            gameForm += '<div class="form-group">';
            gameForm += '<label for="answer' + index + '" class="col-sm-2 control-babel">';
            gameForm += String(this.factor) + 'x' + index + '=</label>';
            gameForm += '<div class="col-sm-1"><input type="text" class="form-control" id="answer' + index + '"size="5"/></div>';
            gameForm += '</div>';
        }
        var gameElement = document.getElementById('game');
        gameElement.innerHTML = gameForm;
        document.getElementById('calculate').removeAttribute('disabled');
    };
    Game.prototype.calculateScore = function () {
        var score = 0;
        for (var i = 0; i < this.problemCount; i++) {
            var answer = Number(utility_1.getValue('answer' + i));
            if (i * this.factor === answer) {
                score++;
            }
        }
        var result = {
            playerName: this.player.name,
            score: score,
            problemCount: this.problemCount,
            factor: this.factor
        };
        this.scoreBoard.addResult(result);
        this.scoreBoard.updateResult();
        document.getElementById('calculate').setAttribute('disabled', 'true');
    };
    return Game;
}());
exports.Game = Game;
//# sourceMappingURL=game.js.map