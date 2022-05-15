import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";
//控制其它类
class GameCtrol
{
    snake:Snake;
    food :Food;
    scorelPanel:ScorePanel;
    //创建一个属性来存储蛇的移动方向
    direction:string = 'ArrowRight';

    //创建属性记录游戏是否结束
    isLive = true;
    constructor()
    {
        this.snake = new Snake();
        this.food = new Food();
        this.scorelPanel = new ScorePanel(10,2);
        this.init();
    }
    //游戏开始入口
    init()
    {
        //绑定键盘事件
        document.addEventListener('keydown',this.keydownHandler.bind(this)); 
         this.run();
       
    }
    //键盘响应函数
    /**
     *      ArrowUp
            ArrowDown
            ArrowLeft
            ArrowRight
     */
    keydownHandler(event:KeyboardEvent)
    {
        this.direction = event.key;
       
    }

    //控制蛇移动的方法
    run(){
        let X = this.snake.X;
        let Y = this.snake.Y;
        switch (this.direction) {
            case "ArrowUp":
                Y-=10;  
                break;
            case "ArrowDown":  
                Y+=10;
                break;
            case "ArrowLeft": 
                X-=10; 
                break;
            case "ArrowRight":
                X+=10;  
                break;
            default:
                alert(this.direction+"错误");
                break;
        }

        //检查蛇是否吃到食物
        this.checkEat(X,Y);
        
        try{
        this.snake.X = X;
        this.snake.Y = Y;
        }catch (e){
            alert((e as any).message);
            this.isLive = false;
        }

        // 定时调用
       this.isLive && setTimeout(this.run.bind(this),300 -(30* (this.scorelPanel.level-1)));
    }
    //定义蛇是否吃到食物
    checkEat(X:number,Y:number){
        if( X === this.food.X && Y === this.food.Y)
        {
             //食物的位置变化
             this.food.change();
             //增加分数
             this.scorelPanel.addScore();
             //增加长度
             this.snake.addBody();
        }
    }
   
}

export default GameCtrol;