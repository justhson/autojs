/**
 * Author：Mr.Lih
 * 2020-5-21 (程序猿没有浪漫可言)
 * 京东自动叠蛋糕
 */
 
auto.waitFor();
var n = 0;
toast("running")

dialogs.alert("请确认无障碍和悬浮窗权限已开启\n请允许跳转请求\n如有问题可以在帖子里留言");

console.show();
auto.waitFor();

var i = 0;
var j = 0;

sleep(1000);
//打开活动页面
log("正在进入个人中心");

app.startActivity({ 
  data: "openApp.jdMobile://virtual?params=%7B%22des%22%3A%22m%22%2C%22url%22%3A%22https%3A%2F%2Fbunearth.m.jd.com%2FbabelDiy%2FZeus%2F3xAU77DgiPoDvHdbXUZb95a7u71X%2Findex.html%22%2C%22category%22%3A%22jump%22%2C%22sourceType%22%3A%22JSHOP_SOURCE_TYPE%22%2C%22sourceValue%22%3A%22JSHOP_SOURCE_VALUE%22%2C%22M_sourceFrom%22%3A%22lkyl%22%2C%22msf_type%22%3A%22click%22%2C%22m_param%22%3A%7B%22m_source%22%3A%220%22%2C%22event_series%22%3A%7B%7D%2C%22jda%22%3A%22177095863.1664140455.1538579865.1572975960.1572979455.472%22%2C%22usc%22%3A%22androidapp%22%2C%22ucp%22%3A%22t_335139774%22%2C%22umd%22%3A%22appshare%22%2C%22utr%22%3A%22CopyURL%22%2C%22jdv%22%3A%22177095863%7Candroidapp%7Ct_335139774%7Cappshare%7CCopyURL%7C1572882675599%22%2C%22ref%22%3A%22https%3A%2F%2Fbunearth.m.jd.com%2FbabelDiy%2FZeus%2F3xAU77DgiPoDvHdbXUZb95a7u71X%2Findex.html%22%2C%22psn%22%3A%221664140455%7C472%22%2C%22psq%22%3A5%2C%22pc_source%22%3A%22%22%2C%22mba_muid%22%3A%221664140455%22%2C%22mba_sid%22%3A%221572979455588510925986537476%22%2C%22std%22%3A%22MO-J2011-1%22%2C%22par%22%3A%22%22%2C%22event_id%22%3A%22Mnpm_ComponentApplied%22%2C%22mt_xid%22%3A%22%22%2C%22mt_subsite%22%3A%22%22%7D%2C%22SE%22%3A%7B%22mt_subsite%22%3A%22%22%2C%22__jdv%22%3A%22177095863%7Candroidapp%7Ct_335139774%7Cappshare%7CCopyURL%7C1572882675599%22%2C%22__jda%22%3A%22177095863.1664140455.1538579865.1572975960.1572979455.472%22%7D%7D",
});

sleep(1000);

className("android.view.View").text("做任务领金币").waitFor();

log("到达个人中心");

sleep(1000);
if(!textContains("任务每日0点刷新").exists()){
    className("android.view.View").text("做任务领金币").findOne().parent().click()
    
    }

textContains("任务每日0点刷新").waitFor()
sleep(1000);
log("到达任务中心");
 
if(click("签到")){toast("签到成功")}else(toast("已签到"))
for(var all=0;all<50;all++){
    var l = text("去完成").find().size()
    log(l)
    for(var z = 0;z<l;z++){
        var aa1 = text("去完成").findOnce(z);
        if(aa1 != null){
            var aa = aa1.parent().parent().parent().child(0).child(1)
        }else{break}
        var cc = aa.text();
        if(cc.indexOf("浏览")!=-1 || cc.indexOf("8秒")!=-1){
            toast("浏览")
            text("去完成").findOnce(z).click()
            sleep(2000)
            if(textContains("浏览以下").findOnce()){
                toast("5")
                five()
            }else{
                toast("no5")
                //    等待完成
                sleep(9600)
                sleep(1000)
                // 点击返回
                bk()
            }
        }else if(cc.indexOf("去加购")!=-1){
            toast("去加购")
            text("去完成").findOnce(z).click()
            sleep(1600)
            if(textContains("当前页点击加购").findOnce()){
                for(var i = 0;i<5;i++){
			var aaa = idContains("cart_").findOnce(i);
                    aaa.click();
                   // aaa.child(aaa.childCount()-1).click()
                    sleep(1000)
                }
                bk()
            }else if(textContains("浏览以下").findOnce()){
                five()
            }else{bk()}
        }
        sleep(2000)
    }
    sleep(1000)
}
toast("end")
exit()
 
 
function bk(){
    if(id("fe").exists()){
        id("fe").findOne().click()
        sleep(2000)
    }else{
        back()
    }
}
function go(){
    if(text("去完成").exists()){
        toast("存在去完成")
        click("去完成",1)
        sleep(2000)
        if(textContains("浏览以下").findOnce()){
            five()
        }else{
            //    等待完成
            sleep(9600)
            sleep(1000)
            // 点击返回
            bk()
        }
        n++;
        toast("浏览了" + n + "次")
        sleep(1000)
        textContains("去完成").waitFor();
        sleep(3500)
        go()
    }else{
        toast("发生错误")
        exit()
    }
}
 
// 判断浏览5次商品
function five(){
    for(var i = 0;i<5;i++){
        if(textContains("浏览以下").findOnce()){
                idContains("view_").findOnce(i).click();
                sleep(3000)
                back()
                sleep(3000)
        }else{}
    }
    // 点击返回
    bk()
}