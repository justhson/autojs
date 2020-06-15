/*
 * @Descripttion: 平安自动签到
 * @version: 1.0.0
 * @Author: justhson
 * @Date: 2020-06-05 13:28:34
 * @LastEditors: justhson
 * @LastEditTime: 2020-06-13 21:18:16
 */ 
auto.waitFor();

setScreenMetrics(device.width, device.height);

/* 通过APP名称打开 */
// let appName = "微信";
// launchApp(appName);

/* 通过包名打开 */
// let PackageName = getPackageName(appName);
// log(PackageName);
let packageNameWX = "com.tencent.mm";
let packageNamePAKDYH = "com.pingan.paces.ccms";

// let bounds = className("android.view.View").idContains("z696483").findOne().bounds();
// click(bounds.centerX(), bounds.centerY());
// toast("进入乐分享");
// log("进入乐分享");
// sleep(1000);

// bounds = className("android.view.View").text("积分任务").findOne().bounds();
// click(bounds.centerX(), bounds.centerY());
// toast("进入乐分享玩赚积分");
// log("进入乐分享玩赚积分");
// sleep(1000);

// className("android.view.View").text("去完成").findOne().click();
// toast("进入乐分享今日推荐");
// log("进入乐分享今日推荐");
// sleep(5000);

for(let i=1; i<=10; i++){
    share(i, packageNameWX, packageNamePAKDYH);
}

exit();

/**
 * @name: 分享
 * @test: test font
 * @msg: 
 * @param {type} 
 * @return: 
 */
function share(i, packageNameWX, packageNamePAKDYH){
    className("android.view.View").text("今日推荐").findOne().parent().child(3).child(i-1).child(0).child(0).child(1).child(1).child(0).click();
    toast("分享第"+i+"个帖子");
    log("分享第"+i+"个帖子");
    sleep(2000);

    className("android.view.View").idContains("J-share-btn-friends").findOne().click();
    toast("微信分享");
    log("微信分享");
    sleep(1000);

    className("android.widget.TextView").text("微信").findOne().parent().click();
    toast("主微信");
    log("主微信");
    sleep(5000);

    let bounds = text("自己").findOne().bounds();
    press(bounds.centerX(), bounds.centerY(), 1000);
    toast("选择分享人");
    log("选择分享人");
    sleep(2000);

    className("android.widget.Button").text("分享").findOne().click();
    toast("分享");
    log("分享");
    sleep(1000);

    className("android.widget.Button").text("返回平安口袋银行").findOne().click();
    toast("返回平安");
    log("返回平安");
    sleep(1000);

    launch(packageNameWX);
    toast("打开微信");
    log("打开微信");
    sleep(5000);

    className("android.widget.TextView").text("微信").findOne().parent().click();
    toast("主微信");
    log("主微信");
    sleep(3000);

    if(text("自己").exists()){
        bounds = text("自己").findOne().bounds();
        press(bounds.centerX(), bounds.centerY(), 1);
        toast("进入聊天");
        log("进入聊天");
        sleep(2000);
    }

    for(let j=1; j<=3; j++){
        view(j);
    }

    launch(packageNamePAKDYH);
    toast("打开平安口袋银行");
    log("打开平安口袋银行");
    sleep(5000);

    if(className("android.widget.Image").text("266398c").exists()){
        className("android.widget.Image").text("266398c").findOne().click();
        toast("关闭弹窗");
        log("关闭弹窗");
        sleep(1000);
    }

    if(className("android.view.View").idContains("J-share-btn-close").exists()){
        className("android.view.View").idContains("J-share-btn-close").findOne().click();
        toast("关闭弹窗");
        log("关闭弹窗");
        sleep(1000);
    }
}

/**
 * @name: 浏览
 * @test: test font
 * @msg: 
 * @param {type} 
 * @return: 
 */
function view(j){
    // let item = className("android.widget.TextView").text("平安口袋银行").find();
    // let bounds = item[item.length -1].bounds();
    // click(bounds.centerX(), bounds.centerY());
    click(400, 2000);
    toast("第"+j+"次进入外链");
    log("第"+j+"次进入外链");
    sleep(5000);

    back();
    toast("第"+j+"次返回");
    log("第"+j+"次返回");
    sleep(5000);
}