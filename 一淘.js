/*
 * @Descripttion: 一淘自动签到
 * @version: 1.0.0
 * @Author: justhson
 * @Date: 2020-06-05 13:28:34
 * @LastEditors: justhson
 * @LastEditTime: 2020-06-09 12:03:16
 */ 
auto.waitFor();

setScreenMetrics(device.width, device.height);

/* 通过APP名称打开 */
// let appName = "一淘";
// launchApp(appName);

/* 通过包名打开 */
// let PackageName = getPackageName(appName);
// log(PackageName);
let packageName = "com.taobao.etao";
launch(packageName);
toast("打开");
log("打开");
sleep(5000);

if(className("android.widget.RelativeLayout").id("home_market_close_layout").exists()){
    className("android.widget.RelativeLayout").id("home_market_close_layout").findOne().click();
    toast("关闭广告");
    log("关闭广告");
    sleep(1000);
}

className("android.widget.TextView").text("天天领钱").findOne().parent().click();
toast("进入天天领钱");
log("进入天天领钱");
sleep(1000);

if(textContains("今天已经签过到了").exists()){
    toast("今日已签到");
    log("今日已签到");
    exit();
}
className("android.view.View").text("点我签到领钱").findOne().click();
toast("签到");
log("签到");
exit();