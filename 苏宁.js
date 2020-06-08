/*
 * @Descripttion: 苏宁自动签到
 * @version: 1.0.0
 * @Author: justhson
 * @Date: 2020-06-05 13:28:34
 * @LastEditors: justhson
 * @LastEditTime: 2020-06-08 16:08:07
 */ 
auto.waitFor();

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
sleep(5000);


let bounds = className("android.widget.TextView").text("现金签到").findOne().bounds();
click(bounds.centerX(), bounds.centerY());

toast("进入天天领钱");
log("进入天天领钱");
toast("签到");
log("签到");
exit();