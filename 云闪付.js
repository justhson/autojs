/*
 * @Descripttion: 云闪付自动签到
 * @version: 1.0.0
 * @Author: justhson
 * @Date: 2020-06-05 13:28:34
 * @LastEditors: justhson
 * @LastEditTime: 2020-06-10 09:52:07
 */ 
auto.waitFor();

setScreenMetrics(device.width, device.height);

/* 通过APP名称打开 */
// let appName = "云闪付";
// launchApp(appName);

/* 通过包名打开 */
// let PackageName = getPackageName(appName);
// log(PackageName);
let packageName = "com.unionpay";
launch(packageName);
toast("打开");
log("打开");
sleep(5000);

className("android.widget.ImageView").id("frog_float_notgif").findOne().click();
toast("进入签到");
log("进入签到");
sleep(2000);

if(className("android.widget.TextView").textContains("已签到").exists()){
    toast("今日已签到");
    log("今日已签到");
    sleep(1000);
    chouJiang();
    exit();
}

let bounds = className("android.widget.TextView").text("立即签到").findOne().parent().bounds();
click(bounds.centerX(), bounds.centerY());
toast("签到");
log("签到");
sleep(1000);
chouJiang();
exit();

function chouJiang(){
    if(className("android.widget.TextView").text("去抽奖").exists()){
        let bounds = className("android.widget.TextView").text("去抽奖").findOne().parent().bounds();
        click(bounds.centerX(), bounds.centerY());
        toast("进入抽奖");
        log("进入抽奖");
    
        bounds = className("android.widget.Image").idContains("drawMainWheel").findOne().bounds();
        click(bounds.centerX(), bounds.centerY());
        toast("抽奖");
        log("抽奖");
    }
}