/*
 * @Descripttion: 融e购自动签到
 * @version: 1.0.0
 * @Author: justhson
 * @Date: 2020-06-05 13:28:34
 * @LastEditors: justhson
 * @LastEditTime: 2020-06-08 09:25:34
 */ 
auto.waitFor();

setScreenMetrics(device.width, device.height);

/* 通过APP名称打开 */
// let appName = "融e购";
// launchApp(appName);

/* 通过包名打开 */
// let PackageName = getPackageName(appName);
// log(PackageName);
let packageName = "com.icbc.emallmobile";
launch(packageName);
toast("打开");
log("打开");
sleep(5000);

className("android.widget.TextView").text("我的融e购").findOne().parent().click();
toast("进入我的融e购");
log("进入我的融e购");
sleep(1500);

className("android.widget.TextView").text("活动大厅").findOne().parent().click();
toast("进入活动大厅");
log("进入活动大厅");
sleep(1500);

className("android.view.View").textContains("打卡赢好礼").findOne().parent().child(0).click();
toast("进入打卡赢好礼");
log("进入打卡赢好礼");
sleep(1000);

if(textContains("已签到").exists()){
    toast("今日已签到");
    log("今日已签到");
    exit();
}
className("android.view.View").text("点击签到").findOne().click();
toast("签到");
log("签到");
exit();