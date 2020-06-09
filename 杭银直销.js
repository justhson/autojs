/*
 * @Descripttion: 云闪付自动签到
 * @version: 1.0.0
 * @Author: justhson
 * @Date: 2020-06-05 13:28:34
 * @LastEditors: justhson
 * @LastEditTime: 2020-06-09 14:01:58
 */ 
auto.waitFor();

setScreenMetrics(device.width, device.height);

var time = new Date();  
time = time.getFullYear()+"/"+parseInt(time.getMonth()+1)+"/"+time.getDate()+" "+time.getHours()+":"+(time.getMinutes())+":"+(time.getSeconds()+30);//给小时加2
time= new Date(Date.parse(time));

let x = (750+978)/2;
let y = (1074+1164)/2;
// let x = (750+978)/2;
// let y = (1815+1872)/2;

while(true){
    press(x, y, 1);
    if(new Date() > time){
        exit();
    }
}