/*
 * @Descripttion: 飞客茶馆自动签到
 * @version: 1.0.0
 * @Author: justhson
 * @Date: 2020-06-05 13:28:34
 * @LastEditors: justhson
 * @LastEditTime: 2020-06-11 12:54:40
 */ 
auto.waitFor();

setScreenMetrics(device.width, device.height);

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

sign();

back();

share();

reward();

exit();

/**
 * @name: 签到
 * @test: test font
 * @msg: 
 * @param {type} 
 * @return: 
 */
function sign(){
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
        return;
    }
    className("android.widget.TextView").text("签到领威望").findOne().click();
    toast("签到");
    log("签到");
}


/**
 * @name: 分享
 * @test: test font
 * @msg: 
 * @param {type} 
 * @return: 
 */
function share(){
    className("android.widget.TextView").text("信用卡").findOne().parent().click();
    toast("进入信用卡");
    log("进入信用卡");
    sleep(1000);

    for(let i=1; i<=10; i++){
        doShare(i);
    }
}

/**
 * @name: 执行分享
 * @test: test font
 * @msg: 
 * @param {type} 
 * @return: 
 */
function doShare(i){
    // 如果是官方的广告，继续下滑
    if(className("android.widget.TextView").id("userName").findOne().text() === "官方"){
        let temp = className("android.widget.TextView").id("title").findOne().parent().bounds();
        toast("跳过广告");
        log("跳过广告");
        // 最后一个控件的上边是2048
        swipe(temp.centerX(), 2040, temp.centerX(), temp.centerY(), 1000);
    }

    className("android.widget.TextView").id("title").findOne().parent().click();
    toast("进入第"+i+"个帖子");
    log("进入第"+i+"个帖子");
    sleep(2000);
    
    className("android.widget.ImageView").id("iv_share").findOne().click();
    toast("分享第"+i+"个帖子");
    log("分享第"+i+"个帖子");
    sleep(2000);

    let bounds = className("android.widget.TextView").text("微信好友").findOne().parent().bounds();
    click(bounds.centerX(), bounds.centerY());
    toast("微信分享");
    log("微信分享");
    sleep(2000);

    className("android.widget.TextView").text("微信").findOne().parent().click();
    toast("主微信");
    log("主微信");
    sleep(2000);

    back();
    toast("返回帖子");
    log("返回帖子");
    sleep(2000);

    if(className("android.widget.ImageView").id("close").exists()){
        className("android.widget.ImageView").id("close").findOne().click();
        toast("关闭弹窗");
        log("关闭弹窗");
        sleep(1000);
    }

    back();
    toast("返回信用卡");
    log("返回信用卡");
    sleep(2000);

    bounds = className("android.widget.TextView").id("title").findOne().parent().bounds();
    // 最后一个控件的上边是2048
    swipe(bounds.centerX(), 2040, bounds.centerX(), bounds.centerY(), 1000);
    toast("上滑");
    log("上滑");
}

/**
 * @name: 领奖
 * @test: test font
 * @msg: 
 * @param {type} 
 * @return: 
 */
function reward(){
    className("android.widget.TextView").text("我的").findOne().parent().click();
    toast("进入我的");
    log("进入我的");
    sleep(1000);
    
    className("android.widget.TextView").text("威望").findOne().click();
    toast("进入签到");
    log("进入签到");
    sleep(1000);
    
    let bounds = className("android.widget.TextView").textContains("分享3篇好文").findOne().parent().parent().child(2).bounds();
    click(bounds.centerX(), bounds.centerY());
    toast("进入做任务");
    log("进入做任务");
    sleep(1000);

    className("android.widget.TextView").text("领取奖励").findOne().click();
    toast("领取奖励");
    log("领取奖励");
}