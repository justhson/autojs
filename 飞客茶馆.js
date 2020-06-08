/*
 * @Descripttion: 飞客茶馆自动签到
 * @version: 1.0.0
 * @Author: justhson
 * @Date: 2020-06-05 13:28:34
 * @LastEditors: justhson
 * @LastEditTime: 2020-06-05 18:37:02
 */ 
auto.waitFor();

/* 通过APP名称打开 */
// let appName = "飞客茶馆";
// launchApp(appName);

/* 通过包名打开 */
// let PackageName = getPackageName(appName);
// log(PackageName);
let packageName = "com.ideal.flyerteacafes";
launch(packageName);
toast("打开");
log("打开");
sleep(5000);

className("android.widget.TextView").text("我的").findOne().parent().click();
toast("进入我的");
log("进入我的");
sleep(1000);

className("android.widget.TextView").text("威望").findOne().click();
toast("进入签到");
log("进入签到");
sleep(1000);

if(textContains("今日已签到").exists()){
    toast("今日已签到");
    log("今日已签到");
    exit();
}
className("android.widget.TextView").text("签到领威望").findOne().click();
toast("签到");
log("签到");
exit();