/*
 * @Descripttion: 工银e生活自动签到
 * @version: 1.0.0
 * @Author: justhson
 * @Date: 2020-06-05 13:28:34
 * @LastEditors: justhson
 * @LastEditTime: 2020-06-09 13:35:13
 */ 
auto.waitFor();

setScreenMetrics(device.width, device.height);

/* 通过APP名称打开 */
// let appName = "工银e生活";
// launchApp(appName);

/* 通过包名打开 */
// let PackageName = getPackageName(appName);
// log(PackageName);
let packageName = "com.icbc.elife";
launch(packageName);
toast("打开");
log("打开");
sleep(5000);

className("android.widget.RadioButton").text("生活").findOne().click();
toast("进入生活");
log("进入生活");
sleep(5000);

className("android.view.View").text("商城").findOne().parent().click();
toast("进入商场");
log("进入商场");
sleep(5000);

className("android.widget.Image").text("mall_banner_1").findOne().parent().click();
toast("进入签到");
log("进入签到");
sleep(5000);

className("android.view.View").text("点击签到").findOne().click();
toast("签到");
log("签到");
exit();