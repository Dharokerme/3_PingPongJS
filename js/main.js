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
})();

(function(){
    self.Ball = function(x,y,radius,board){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speed_x = 3;
        this.speed_y = 0;
        this.board = board;

        board.ball = this;
        this.kind = "circle";
    
    }   
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
        clean: function(){
            this.ctx.clearRect(0,0,this.board.width,this.board.height);
        },
        draw: function(){
            for ( var i = this.board.elements.length - 1; i >= 0; i--) {
                var el = this.board.elements[i]

                draw(this.ctx,el)
            };
        },
        play: function(){
            this.clean();
            this.draw();
        }
    }

    function draw(ctx,element){
            switch(element.kind){
                case "rectangle":
                    ctx.fillRect(element.x,element.y,element.width,element.height);
                    break;
                case "circle":
                    ctx.beginPath();
                    ctx.arc(element.x, element.y,element.radius,0,7);
                    ctx.fill();
                    ctx.closePath();
                    break;
                }
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
    ev.preventDefault();
    if (ev.keyCode == 38){
        bar_2.up();
    }
    else if (ev.keyCode == 40){
        bar_2.down();
    }else if (ev.keyCode == 87){
        bar.up();
    }
    else if (ev.keyCode == 83){
        bar.down();
    }
    console.log(""+bar);
    console.log(""+bar_2);
});

self.addEventListener("load",controller);

var board = new Board(800,400);
var bar = new Bar(20,100,20,100,board);
var bar_2 = new Bar(760,100,20,100,board);
var canvas = document.getElementById("canvas");
var board_view = new BoardView(canvas,board);
var ball = new Ball(400,200,10,board);


function controller(){
    board_view.play();
    window.requestAnimationFrame(controller);
}