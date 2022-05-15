
//定义记分牌
class ScorePanel{
    score = 0;
    level = 1;
    //游戏等级
    maxLevel:number;
    //游戏到达多少分时升级
    upScore:number;
    scoreEle:HTMLElement;
    levelEle:HTMLElement;
    constructor(maxLevel:number = 10 , upScore:number = 10)
    {
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }

    //设置加分方法
    addScore()
    {
        this.score++;
        this.scoreEle.innerHTML = this.score+'';
        if(this.score%this.upScore === 0)
        {
            this.levelUp();
        }
    }

    //leve改变
    levelUp()
    {
        if(this.level<this.maxLevel)
        this.levelEle.innerHTML = ++this.level+'';
    }
}
export default ScorePanel;