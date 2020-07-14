
//同时发送异步代码的次数
let ajaxTimes = 0;

//使用promise封装一个 请求
export function getRequest(params){
    ajaxTimes ++  //发送一次请求就加一次

    // 在请求 数据回来之前 显示一个加载中
    wx.showLoading({
        title: '加载中',
        mask:true
      })

    //定义公共部分 url 则在传递参数时就不必要将公共部分也传进来了 在下面拼接就好了
    const baseUrl = "http://175.24.57.96:88/consumer"
    //将传过来的参数结构出来
    return new Promise((resolve,reject)=>{
        // 发起请求          
        wx.request({
            //...params是解构params参数
            //就是传入的数据 一个对象{}
            ...params,
            url:baseUrl + params.url,
            data:params.data,
            success:(res)=>{
                //成功的回调
                resolve(res)
            },
            fail:(err)=>{
                //失败的回调
                reject(err)
            },
            complete:()=>{
                ajaxTimes -- //请求完成一次 ，就减一次
                if(ajaxTimes===0){
                    //当所有的请求都完成时，就关闭 加载中 弹框
                    wx.hideLoading()
                }
            }
        });
    });
}

//使用promise封装一个 请求
export function postRequst(params){
    ajaxTimes ++  //发送一次请求就加一次

    // 在请求 数据回来之前 显示一个加载中
    wx.showLoading({
        title: '上传中',
        mask:true
      })

    //定义公共部分 url 则在传递参数时就不必要将公共部分也传进来了 在下面拼接就好了
    const baseUrl = "接口报错"
    //将传过来的参数结构出来
    return new Promise((resolve,reject)=>{
        // 发起请求          
        wx.request({
            //...params是解构params参数
            //就是传入的数据 一个对象{}
            ...params,
            url:baseUrl + params.url,
            data:params.data,
            method:"POST",
            success:(res)=>{
                //成功的回调
                resolve(res)
            },
            fail:(err)=>{
                //失败的回调
                reject(err)
            },
            complete:()=>{
                ajaxTimes -- //请求完成一次 ，就减一次
                if(ajaxTimes===0){
                    //当所有的请求都完成时，就关闭 加载中 弹框
                    wx.hideLoading()
                }
            }
        });
    });
}