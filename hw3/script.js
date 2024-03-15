// 定義變數
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let x1 = 0, y1 = 0, dx1 = 5, dy1 = 5, r1 = 30, color1 = "red", m1 = 5;
let x2 = canvas.width, y2 = 0, dx2 = -5, dy2 = -5, r2 = 15, color2 = "blue", m2 = 1;

// 畫圓形
function drawBall(x1, y1, r1, color1)
{
    ctx.beginPath();
    ctx.arc(x1, y1, r1, 0, Math.PI * 2); // arc(圓心x, 圓心y, 半徑, 起始角, 結束角)
    ctx.fillStyle = color1;
    ctx.fill();
    ctx.closePath();
}
function drawBall(x2, y2, r2, color2)
{
    ctx.beginPath();
    ctx.arc(x2, y2, r2, 0, Math.PI * 2); // arc(圓心x, 圓心y, 半徑, 起始角, 結束角)
    ctx.fillStyle = color2;
    ctx.fill();
    ctx.closePath();
}

// 更新畫布
function draw()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    x1 = x1 + dx1;
    y1 = y1 + dy1;

    x2 = x2 + dx2;
    y2 = y2 + dy2;

    // TODO: 如果發生碰撞(畫布寬canvas.width, 畫布高canvas.height)，則改變速度(dx, dy)和顏色(color)
    // ...
    if(x1 <0 || x1 > canvas.width)    dx1 = -dx1;
    if(y1 <0 || y1 > canvas.height)   dy1 = -dy1;

    if(x2 <0 || x2 > canvas.width)    dx2 = -dx2;
    if(y2 <0 || y2 > canvas.height)   dy2 = -dy2;

    if((x1-x2)**2 + (y1-y2)**2 < r1**2)  
    {
      [vx1, vy1, vx2, vy2] = [dx1, dy1, dx2, dy2]
    
      dx1 = ( (m1-m2)*vx1 + 2*m2*vx2 )/(m1+m2);
      dy1 = ( (m1-m2)*vy1 + 2*m2*vy2 )/(m1+m2);

      dx2 = ( (m2-m1)*vx2 + 2*m1*vx1 )/(m1+m2);
      dy2 = ( (m2-m1)*vy2 + 2*m1*vy1 )/(m1+m2);
    }
  
    drawBall(x1, y1, r1, color1);
    drawBall(x2, y2, r2, color2);
    requestAnimationFrame(draw);
}
draw();