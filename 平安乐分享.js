/*
 * @Descripttion: 平安自动签到
 * @version: 1.0.0
 * @Author: justhson
 * @Date: 2020-06-05 13:28:34
 * @LastEditors: justhson
 * @LastEditTime: 2020-06-09 14:57:12
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

let x = (864+1038)/2;
let y = (525+600)/2;
for(let i=1; i<=1; i++){
    share(i, x, y);
}

exit();

/**
 * @name: 分享
 * @test: test font
 * @msg: 
 * @param {type} 
 * @return: 
 */
function share(i, x, y){
    // click(x, y);
    // toast("分享第"+i+"个帖子");
    // log("分享第"+i+"个帖子");
    // sleep(1000);
    
    // className("android.view.View").id("J-share-btn-friends").findOne().click();
    // toast("微信分享");
    // log("微信分享");
    // sleep(1000);

    // className("android.widget.TextView").text("微信").findOne().parent().click();
    // toast("主微信");
    // log("主微信");
    // sleep(2000);

    log(id('c').exists());

    // 间距为207
    // swipe(x, y, x, y+207, 1000);   
    // toast("上滑");
    // log("上滑");
}