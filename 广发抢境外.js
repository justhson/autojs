/*
 * @Descripttion: 广发抢境外
 * @version: 1.0.0
 * @Author: justhson
 * @Date: 2020-06-05 13:28:34
 * @LastEditors: justhson
 * @LastEditTime: 2020-06-08 15:47:20
 */ 
auto.waitFor();

/* 云闪付APP控件没有click事件，只能通过坐标 */
setScreenMetrics(device.width, device.height);

let bounds = className("android.widget.Button").findOne().bounds();
log(bounds);

var time = new Date();  
time = time.getFullYear()+"/"+parseInt(time.getMonth()+1)+"/"+time.getDate()+" "+time.getHours()+":"+(time.getMinutes()+1)+":"+time.getSeconds();//给小时加2

while(true){
    press(bounds.centerX(), bounds.centerY(),1);
    if(new Date() > time){
        exit();
    }
}