class Snake{
    //获取snake头元素
    head:HTMLElement;
    boides:HTMLCollection;
    element:HTMLElement;
    constructor()
    {
        this.element = document.getElementById('snake')!;
        this.head = document.querySelector('#snake>div')  as HTMLElement;
        this.boides =this.element.getElementsByTagName('div');
    }
    //获取蛇头坐标
    get X()
    {
        return this.head.offsetLeft;
    }
    get Y()
    {
        return this.head.offsetTop;
    }
    //设置坐标
    set X(value:number)
    {
        if(this.X === value)return;
        //确保范围
        if(value<0 || value>290){
            throw new Error('撞墙了');
        }
        //确保蛇在有身体后不会掉头,逻辑为继续之前的方向
        if(this.boides[1]&&(this.boides[1] as HTMLElement).offsetLeft === value)
        {
            //如果value>X(旧值) 说明要想右走，但是不允许掉头，所以继续保持向左
            if(value>this.X)
            {
                value = this.X - 10;
            }
            else{
                value = this.X + 10;
            }
        }

        this.moveBody();
        this.head.style.left = value + 'px';
    }
    set Y(value:number)
    {
        if(this.Y === value)return;
       
        
        if(value<0 || value>290){
            throw new Error('撞墙了');
        } 
           //确保蛇在有身体后不会掉头,逻辑为继续之前的方向
           if(this.boides[1]&&(this.boides[1] as HTMLElement).offsetTop === value)
           {
               //如果value>Y(旧值) 说明要想右走，但是不允许掉头，所以继续保持向左
               if(value>this.Y)
               {
                   value = this.Y - 10;
               }
               else{
                   value = this.Y + 10;
               }
           }
        this.moveBody();
        this.head.style.top = value + 'px';
        //检查有木有撞到自己
        this.checkHeadBody();
    }
    addBody(){
        //向element里面加div
        this.element.insertAdjacentHTML("beforeend","<div></div>");
    }
    //蛇身体移动
    /**
     * 要从后往前改
     * 因为逻辑是后面一节走到前面一节，如果先改了前面的一节那么后面一节就找不到要走的位置
     */
    moveBody(){
        for(let i = this.boides.length-1; i>0; i--)
        {
            let X = (this.boides[i-1] as HTMLElement).offsetLeft;
            let Y = (this.boides[i-1] as HTMLElement).offsetTop;

            (this.boides[i] as HTMLElement).style.left = X + 'px';
            (this.boides[i] as HTMLElement).style.top = Y+ 'px';
        }
    }

    //检查头和身体是否相撞，逻辑是判断头的坐标是否和身体的任意一节的坐标重复
    checkHeadBody()
    {
        //获取所有身体
        for(let i = 1;i<this.boides.length;i++)
        {
            let bd = this.boides[i] as HTMLElement;
            if(this.X === bd.offsetLeft && this.Y === bd.offsetTop)
            {
                //说明已经撞到身体
                throw new Error('撞到身体了');
            }
        }
    }
}
export default Snake;