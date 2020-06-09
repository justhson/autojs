/*
 * @Descripttion: 网上国网自动签到
 * @version: 1.0.0
 * @Author: justhson
 * @Date: 2020-06-05 17:08:40
 * @LastEditors: justhson
 * @LastEditTime: 2020-06-06 11:59:35
 */ 
auto.waitFor();

setScreenMetrics(device.width, device.height);

/* 通过APP名称打开 */
// let appName = "网上国网";
// launchApp(appName);

/* 通过包名打开 */
// let PackageName = getPackageName(appName);
// log(PackageName);
let packageName = "com.sgcc.wsgw.cn";
launch(packageName);
toast("打开");
log("打开");
sleep(5000);

className("android.widget.TextView").text("签到").findOne().parent().child(0).click();
toast("进入签到");
log("进入签到");
sleep(2000);

if(textContains("签到成功").exists()){
    toast("今日已签到");
    log("今日已签到");
    exit();
}
className("android.widget.Image").text("rightoff").findOne().click();
toast("签到");
log("签到");
exit();