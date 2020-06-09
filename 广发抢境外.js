/*
 * @Descripttion: 广发抢境外
 * @version: 1.0.0
 * @Author: justhson
 * @Date: 2020-06-05 13:28:34
 * @LastEditors: justhson
 * @LastEditTime: 2020-06-09 13:17:50
 */ 
auto.waitFor();

setScreenMetrics(device.width, device.height);

let bounds = className("android.widget.Button").findOne().bounds();

var time = new Date();  
time = time.getFullYear()+"/"+parseInt(time.getMonth()+1)+"/"+time.getDate()+" "+time.getHours()+":"+(time.getMinutes()+1)+":"+time.getSeconds();//给小时加2
time= new Date(Date.parse(time));

while(true){
    press(bounds.centerX(), bounds.centerY(),1);
    if(new Date() > time){
        exit();
    }
}