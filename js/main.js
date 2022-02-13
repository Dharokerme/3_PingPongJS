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
            elements.push(this.ball);
            return elements;

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

    self.BoardView.prototype = {
        draw: function(){
            for ( var i = this.board.elements.length - 1; i >= 0; i--) {
                var el = this.board.elements[i]

                draw(this.ctx,el)
            };
        }
    }

    function draw(ctx,element){
        if(element != null && element.hasOwnProperty("kind")){
            switch(element.kind){
                case "rectangle":
                    ctx.fillRect(element.x,element.y,element.width,element.height);
                    break;
                }
        }
    console.log("BoardView function loaded");
    }

})();
 

(function(){
    self.Bar = function(x,y,width,height,board){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.board = board;
        this.board.bars.push(this);
        this.kind = "rectangle";
        this.speed = 10;
    }
    self.Bar.prototype ={
        down: function(){
            this.y += this.speed;
        },
        up: function(){
            this.y -= this.speed;
        },
        toString: function(){
            return "x:"+this.x +" y:"+ this.y;
        }

    }
    console.log("Bar function loaded");
})();
document.addEventListener("keydown",function(ev){
    if (ev.keyCode == 38){
        bar.up();
    }
    else if (ev.keyCode == 40){
        bar.down();
    }
    console.log(""+bar);
});

self.addEventListener("load",main);

var board = new Board(800,400);
var bar = new Bar(20,100,20,100,board);
var bar = new Bar(760,100,20,100,board);
var canvas = document.getElementById("canvas");
var board_view = new BoardView(canvas,board);

console.log(this.y)

function main(){

    board_view.draw();

    console.log("main function loaded");

}