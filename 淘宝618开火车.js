/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: justhson
 * @Date: 2020-06-14 00:24:16
 * @LastEditors: justhson
 * @LastEditTime: 2020-06-15 11:25:27
 */ 
auto.waitFor();

let width = device.width;
let height = device.height;
setScreenMetrics(width, height);


/* 通过APP名称打开 */
// let appName = "淘宝";
// launchApp(appName);

/* 通过包名打开 */
// let PackageName = getPackageName(appName);
// log(PackageName);
let packageName = "com.taobao.taobao";
launch(packageName);
toast("打开");
sleep(7000);

click(600, 1400);
toast("进入618活动页");
sleep(5000);

click(900, 2100);
toast("打开任务列表");
sleep(5000);

autoplay();

function swipe22s(act){
    while(textContains(act).exists()){        
        toast("存在" + act);
        textContains(act).findOne().click();
        sleep(1500);
        swipe(width / 2, height - 500, width / 2, 0, 500);
        sleep(2500);
        swipe(width / 2, height - 500, width / 2, 0, 500);
        sleep(10000);
        swipe(width / 2, height - 500, width / 2, 0, 500);
        sleep(8000);
        if(textContains("完成").exists()){
            back();
        } else {
        sleep(2200);
        back();
        }
        sleep(1600);
    }
    toast("完成[" + act + "]检测");
    sleep(2000);
}

   
function autoplay(){
    if(textEndsWith("签到").exists()){
        textEndsWith("签到").findOne().click();
        sleep(1600);
        toast("签到成功");
    }
    sleep(2000);
    toast("完成[签到]检测");

    swipe22s("去浏览");
    swipe22s("去搜索");
    swipe22s("去围观");
   
    toast("结束");
}