/*
 * @Descripttion: 苏宁自动签到
 * @version: 1.0.0
 * @Author: justhson
 * @Date: 2020-06-05 13:28:34
 * @LastEditors: justhson
 * @LastEditTime: 2020-06-10 09:40:19
 */ 
auto.waitFor();

setScreenMetrics(device.width, device.height);

/* 通过APP名称打开 */
// let appName = "苏宁易购";
// launchApp(appName);

/* 通过包名打开 */
// let PackageName = getPackageName(appName);
// log(PackageName);
let packageName = "com.suning.mobile.ebuy";
launch(packageName);
toast("打开");
log("打开");
sleep(7000);

if(className("android.widget.ImageView").id("marketing_cancel_img").exists()){
    className("android.widget.ImageView").id("marketing_cancel_img").findOne().click();
    toast("关闭广告");
    log("关闭广告");
    sleep(1000);
}

// let bounds = className("android.widget.TextView").text("现金签到").findOne().bounds();
// click(bounds.centerX(), bounds.centerY());

className("android.widget.RelativeLayout").desc("现金签到").findOne().click();
toast("进入现金签到");
log("进入现金签到");
toast("签到");
log("签到");
exit();