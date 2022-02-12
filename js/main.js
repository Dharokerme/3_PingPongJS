(function(){
    self.Board = function(width,height){
        this.width = width;
        this.height = height;
        this.playing = false;
        this.game_over = false;
        this.bars = [];
        this.ball = null; 
    }
    self.Board.prototype = {
        get elements(){
            var elements = this.bars;
            elements.push(ball);

        }
    }
    console.log("Board function loaded");
})();



(function(){
    self.BoardView = function(canvas,Board){
        this.canvas = canvas;
        this.canvas.width = Board.width;
        this.canvas.height = Board.height;
        this.board = Board;
        this.ctx = canvas.getContext('2d');
    }

    console.log("BoardView function loaded");
})();
        
window.addEventListener("load",main);

function main(){
    var board = new Board(800,400);
    var canvas = document.getElementById("canvas");
    var board_view = new BoardView(canvas,board);

    console.log("main function loaded");

}