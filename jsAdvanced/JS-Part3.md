框架封装

- 参考jquery
- 作为JS高级的案例
- $("div").css("color","red")
- $("div").click(function(){ ... })

问题：怎样在微信中呼起其他的app呢？

- 1、如果在移动端web页面中调起app？
  - 网页是直接在移动浏览器中访问的，
  - 网页是嵌入在app中的(web view)
    - 实现方式：由app开发者制定一个协议(http://www.baidu.com/getUserInfo)
    - 协议地址如：sdk://xxx.com/getUserInfo
    - 前端直接通过页面跳转就可以了
      - a标签
      - location.href
- 2、微信中一个网页，呼起app？
  - 微信对于一般的用户并不支持跳转app
  - 微信只针对一些大客户（携程、唯品会、京东）才会提供这种跳转的接口
  - 如果小客户一定要做到这种功能，直接去一些第三方平台购买凭证

入口函数

        (function(window){
            function Fn(selector){
    
            }
            Fn.prototype = {
                init(selector){
                    var elements = document.querySelectorAll(selector);
                    for( var i = 0 ; i < elements.length ; i++ ){
                        this[i] = elements[i];
                        this.length++;
                    }
                },
                length : 0
            }
    
            function jQuery(selector){
                return new Fn(selector)
            }
            window.$ = window.jQuery = jQuery;
        })(window)

浏览器兼容性问题

- 获取样式
  - 现代浏览器：window.getComputedStyle(dom,null)
  - IE10之前：dom.currentStyle
- 设置文本内容
  - FF45之前：dom.textContent
  - 其他：dom.innerText
- 绑定事件：
  - IE10之前：dom.attachEvent
    - 获取事件对象
    - 阻止事件冒泡
    - 阻止默认行为
  - 现代浏览器：dom.addEventListener
    - 获取事件对象
    - 阻止事件冒泡
    - 阻止默认行为

     //DOM0：是指DOM标准诞生之前浏览器提供的对DOM的相关操作
    
        //存在问题：
        //事件只能绑定一次，如果多次绑定，会导致覆盖
    
        //这种问题在DOM1中并没有得到解决
        
        //在DOM0事件到DOM2事件之间IE又出来捣乱了(IE6/7/8)
        //      -->dom.attachEvent("onclick",function(){
        //          //要获取事件对象：window.event
        //          //阻止冒泡：window.event.cancelBubble=true;
        //          //阻止默认行为：window.event.returnValue=false
        //})
        //      对同一个元素绑定了多个同类型事件，事件触发顺序会按照绑定顺序【倒序】触发
        //        div.attachEvent("onclick",function(){ console.log(1)  })
        //        div.attachEvent("onclick",function(){ console.log(2)  })
        //        div.attachEvent("onclick",function(){ console.log(3)  })
        //      触发顺序： 3-->2-->1
        //    -->事件的解绑：dom.detachEvent("onclick",function(){})
        
        //一直到DOM2才得到解决  (从IE11开始、Edge也支持)
        //      dom.addEventListener("click",function(e){
                        //1、获取事件对象：e
                        //2、阻止冒泡：e.stopPropagation()
                        //3、阻止默认行为：e.preventDefault();
                        //4、事件末尾，通过return false同时实现阻止冒泡和阻止默认行为
    
        //})
        //      对同一个元素绑定了多个同类型事件，事件触发顺序会按照绑定顺序【顺序】触发
        //      事件的解绑：dom.removeEventListener("click",function(){})
    
        //DOM2中提供的addEventListener这个方式支持事件流的操作
        //事件流分为3个阶段：捕获-->目标元素阶段-->冒泡
        //  div.addEventListener("click",回调函数,false)
        //      其中第三个参数：false表示在冒泡阶段触发
        //              true表示在捕获阶段触发



DOM操作

- $("<div>100</div>")
  - 字符串标签转换为一个DOM元素
    - document.createElement("div")
    - div.innerHTML="<div>100</div>"
    - -->div.childNodes[0]
    - 高性能的文档碎片：document.createDocumentFragment("div")
- $("div").append("<span>300</span>")

属性操作
