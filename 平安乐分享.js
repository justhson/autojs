/*
 * @Descripttion: 平安自动签到
 * @version: 1.0.0
 * @Author: justhson
 * @Date: 2020-06-05 13:28:34
 * @LastEditors: justhson
 * @LastEditTime: 2020-06-10 15:10:51
 */ 
auto.waitFor();

setScreenMetrics(device.width, device.height);

/* 通过APP名称打开 */
// let appName = "融e购";
// launchApp(appName);

/* 通过包名打开 */
// let PackageName = getPackageName(appName);
// log(PackageName);
let packageName = "com.pingan.paces.ccms";

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
    share(i, packageName);
}

exit();

/**
 * @name: 分享
 * @test: test font
 * @msg: 
 * @param {type} 
 * @return: 
 */
function share(i, packageName){
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
    sleep(2000);

    let bounds = className("android.widget.TextView").text("自己").findOne().bounds();
    click(bounds.centerX(), bounds.centerY());
    toast("选择分享人");
    log("选择分享人");
    sleep(1000);

    className("android.widget.Button").text("分享").findOne().click();
    toast("分享");
    log("分享");
    sleep(1000);

    className("android.widget.Button").text("留在微信").findOne().click();
    toast("留在微信");
    log("留在微信");
    sleep(1000);

    className("android.view.View").text("自己").findOne().parent().parent().parent().parent().click();
    toast("进入聊天");
    log("进入聊天");
    sleep(1000);

    for(let j=1; j<=3; j++){
        view(j);
    }

    launch(packageName);
    toast("打开");
    log("打开");
    sleep(5000);

    if(text("266398c").exists()){
        className("android.widget.Image").text("266398c").findOne().click();
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
    let item = className("android.widget.TextView").text("平安口袋银行").find();
    let bounds = item[item.length -1].bounds();
    click(bounds.centerX(), bounds.centerY());
    toast("第"+j+"次进入外链");
    log("第"+j+"次进入外链");
    sleep(5000);

    back();
    toast("第"+j+"次返回");
    log("第"+j+"次返回");
    sleep(1000);
}