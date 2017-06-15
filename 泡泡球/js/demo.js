
function move(){
    var directX = this.dataset.x*1;
    var directY = this.dataset.y*1;
    var speed = this.dataset.speed*1;
    var bodyW = document.body.clientWidth;
    var bodyH = document.body.clientHeight;
    var d = this.clientWidth;
    if(this.offsetLeft>(bodyW-d)){
        this.dataset.x = -1;
    }
    if(this.offsetLeft<=0){
        this.dataset.x = 1;
    }
    if(this.offsetTop>(bodyH-d)){
        this.dataset.y = -1;
    }
    if(this.offsetTop<=0){
        this.dataset.y = 1;
    }
    this.style.left = this.offsetLeft + directX*speed + 'px';
    this.style.top = this.offsetTop + directY*speed + 'px';
    requestAnimationFrame(move.bind(this));
}

function createBall(){
    var bodyW = document.body.clientWidth;
    var bodyH = document.body.clientHeight;
    var d = 20 + Math.random()*80;
    var color = 'hsl(' + Math.random()*360 +',70%,50%)';
    var left = Math.random()*(bodyW-d)+'px';
    var top = Math.random()*(bodyH-d) +'px';
    var directX = Math.random()>0.5?1:-1;
    var directY = Math.random()>0.5?1:-1;
    var speed = Math.random()*5+1;
    var strHtml = `<div class="ball" data-x="${directX}" data-y="${directY}" data-speed="${speed}"
                     style="width:${d}px;height:${d}px;
                    background-color:${color};left:${left};top:${top};">
                    </div>`
    document.body.innerHTML += strHtml;
}
for(var i=0; i<20; i++){
    createBall();
}
var balls = document.querySelectorAll('.ball');
balls.forEach(function(e){
    move.call(e);
})
