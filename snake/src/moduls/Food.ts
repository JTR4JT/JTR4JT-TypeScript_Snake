//面向对象
//食物
class Food{
    //定义属性表示食物所对应的元素
    element:HTMLElement;
    constructor()
    {
        //!表示该元素一定存在，获取元素
        this.element = document.getElementById('food')!;
    }
    //定义X,Y轴
    get X()
    {
        return this.element.offsetLeft;
    }
    get Y()
    {
        return this.element.offsetTop;
    }

    //修改食物位置,设计生成位置
    change()
    {
        let top = Math.round(Math.random()*29)*10;
        let left =  Math.round(Math.random()*29)*10;
        this.element.style.left = left+'px';
        this.element.style.top = top+'px';
    }

}

//设置为默认模块
export default Food;