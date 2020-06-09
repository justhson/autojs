/*
 * @Descripttion: 平安自动签到
 * @version: 1.0.0
 * @Author: justhson
 * @Date: 2020-06-05 13:28:34
 * @LastEditors: justhson
 * @LastEditTime: 2020-06-09 17:23:12
 */ 
auto.waitFor();

setScreenMetrics(device.width, device.height);

// let bounds = className("android.view.View").id("z696483").findOne().bounds();
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

for(let i=0; i<10; i++){
    share(i);
}

exit();

/**
 * @name: 分享
 * @test: test font
 * @msg: 
 * @param {type} 
 * @return: 
 */
function share(i){
    className("android.view.View").text("今日推荐").findOne().parent().child(3).child(i).child(0).child(0).child(1).child(1).child(0).click();
    toast("分享第"+(i+1)+"个帖子");
    log("分享第"+(i+1)+"个帖子");
    sleep(2000);

    className("android.view.View").idContains("J-share-btn-friends").findOne().click();
    toast("微信分享");
    log("微信分享");
    sleep(1000);

    className("android.widget.TextView").text("微信").findOne().parent().click();
    toast("主微信");
    log("主微信");
    sleep(2000);

    let bounds = className("android.widget.TextView").text("周潇").findOne().bounds();
    click(bounds.centerX(), bounds.centerY());
    toast("选择分享人");
    log("选择分享人");
    sleep(1000);

    className("android.widget.Button").text("分享").findOne().click();
    toast("分享");
    log("分享");
    sleep(1000);

    className("android.widget.Button").text("返回平安口袋银行").findOne().click();
    toast("返回平安");
    log("返回平安");
    sleep(1000);

    if(text("266398c").exists()){
        className("android.widget.Image").text("266398c").findOne().click();
        toast("关闭弹窗");
        log("关闭弹窗");
        sleep(1000);
    }
}