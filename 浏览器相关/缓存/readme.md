简单对比
储存的数据可能是从服务器端获取到的数据，也可能是在多个页面中需要频繁使用到的数据

1、cookie：4K，可以手动设置失效期
2、localStorage：5M，除非手动清除，否则一直存在
3、sessionStorage：5M，不可以跨标签访问，页面关闭就清理
4、indexedDB：浏览器端数据库，无限容量，除非手动清除，否则一直存在
5、Web SQL：关系数据库，通过SQL语句访问（已经被抛弃）

本文只涉及前端部分，Web SQL部分有兴趣的同学可自行了解

一、cookie
Cookie通过在客户端记录信息确定用户身份
Session通过在服务器端记录信息确定用户身份

1 Cookie机制
一个用户的所有请求操作都应该属于同一个会话，而另一个用户的所有请求操作则应该属于另一个会话
HTTP协议是无状态的协议。一旦数据交换完毕，客户端与服务器端的连接就会关闭，再次交换数据需要建立新的连接。这就意味着服务器无法从连接上跟踪会话
Cookie实际上是一小段的文本信息。客户端请求服务器，如果服务器需要记录该用户状态，就使用response向客户端浏览器颁发一个Cookie。客户端浏览器会把Cookie保存起来。当浏览器再请求该网站时，浏览器把请求的网址连同该Cookie一同提交给服务器。服务器检查该Cookie，以此来辨认用户状态。服务器还可以根据需要修改Cookie的内容。
cookie的内容主要包括：名字，值，过期时间，路径和域。路径与域一起构成cookie的作用范围

2 session机制
Session是另一种记录客户状态的机制，不同的是Cookie保存在客户端浏览器中，而Session保存在服务器上。客户端浏览器访问服务器的时候，服务器把客户端信息以某种形式记录在服务器上。这就是Session。客户端浏览器再次访问时只需要从该Session中查找该客户的状态就可以了。
如果说Cookie机制是通过检查客户身上的“通行证”来确定客户身份的话，那么Session机制就是通过检查服务器上的“客户明细表”来确认客户身份。Session相当于程序在服务器上建立的一份客户档案，客户来访的时候只需要查询客户档案表就可以了。

当程序需要为某个客户端的请求创建一个session时，

服务器首先检查这个客户端的请求里是否已包含了一个session标识------------称为session id，
如果已包含则说明以前已经为此客户端创建过session，服务器就按照session id把这个session检索出来使用（检索不到，会新建一个），
如果客户端请求不包含session id，则为此客户端创建一个session并且生成一个与此session相关联的session id，session id的值应该是一个既不会重复，又不容易被找到规律以仿造的字符串，这个session id将被在本次响应中返回给客户端保存。
可以用document.cookie获取cookie，得到一个字符串，形式如 key1=value1; key2=value2，需要用正则匹配需要的值，其他库已经封装的比较好，具体可以自己去搜索

cookie可以设置路径path，所有他要比另外两个多了一层访问限制
cookie可以通过设置domain属性值，可以不同二级域名下共享cookie，而Storage不可以，比如http://image.baidu.com的cookie http://map.baidu.com是可以访问的，前提是Cookie的domain设置为.http://baidu.com，而Storage是不可以的

缺点：在请求头上带着数据，大小是4k之内，主Domain污染。

常用的配置属性有以下几个
Expires ：cookie最长有效期
Max-Age：在 cookie 失效之前需要经过的秒数。（当Expires和Max-Age同时存在时，文档中给出的是已Max-Age为准，可是我自己用Chrome实验的结果是取二者中最长有效期的值）
Domain：指定 cookie 可以送达的主机名。
Path：指定一个 URL 路径，这个路径必须出现在要请求的资源的路径中才可以发送 Cookie 首部
Secure：一个带有安全属性的 cookie 只有在请求使用SSL和HTTPS协议的时候才会被发送到服务器。
HttpOnly:设置了 HttpOnly 属性的 cookie 不能使用 JavaScript 经由 Document.cookie 属性、XMLHttpRequest 和 Request APIs 进行访问，以防范跨站脚本攻击（XSS）。

二、Storage：localStorage、sessionStorage
大小：官方建议是5M存储空间
类型：只能操作字符串，在存储之前应该使用JSON.stringfy()方法先进行一步安全转换字符串，取值时再用JSON.parse()方法再转换一次
存储的内容： 数组，图片，json，样式，脚本。。。（只要是能序列化成字符串的内容都可以存储）
注意：数据是明文存储，毫无隐私性可言，绝对不能用于存储重要信息
区别：sessionStorage将数据临时存储在session中，浏览器关闭，数据随之消失，localStorage将数据存储在本地，理论上来说数据永远不会消失，除非人为删除

另外，不同浏览器无法共享localStorage和sessionStorage中的信息。同一浏览器的相同域名和端口的不同页面间可以共享相同的 localStorage，但是不同页面间无法共享sessionStorage的信息

1、基础操作API
保存数据
localStorage.setItem( key, value );
sessionStorage.setItem( key, value );
读取数据
localStorage.getItem( key );
sessionStorage.getItem( key );
删除单个数据
localStorage.removeItem( key );
sessionStorage.removeItem( key );
删除全部数据
localStorage.clear( );
sessionStorage.clear( );
获取索引的key
localStorage.key( index );
sessionStorage.key( index );

2、监听storage事件
可以通过监听 window 对象的 storage 事件并指定其事件处理函数，当页面中对 localStorage 或 sessionStorage 进行修改时，则会触发对应的处理函数

window.addEventListener('storage',function(e){
   console.log('key='+e.key+',oldValue='+e.oldValue+',newValue='+e.newValue);
})
触发事件的时间对象（e 参数值）有几个属性：
key : 键值。
oldValue : 被修改前的值。
newValue : 被修改后的值。
url : 页面url。
storageArea : 被修改的 storage 对象。

三、indexedDB
张大神的indexedDB教程

要想系统学习indexedDB相关知识，可以去MDN文档啃API，假以时日就可以成为前端indexedDB方面的专家

大概流程

1、打开数据库
var DBOpenRequest = window.indexedDB.open(dbName, version);
dbName是数据库名称，version是数据库版本
打开数据库的结果是，有可能触发4种事件

success：打开成功。
error：打开失败。
upgradeneeded：第一次打开该数据库，或者数据库版本发生变化。
blocked：上一次的数据库连接还未关闭。
第一次打开数据库时，会先触发upgradeneeded事件，然后触发success事件。
var openRequest = indexedDB.open("test",1);
var db;

openRequest.onupgradeneeded = function(e) {
    console.log("Upgrading...");
}
 
openRequest.onsuccess = function(e) {
    console.log("Success!");
    db = e.target.result;
}
 
openRequest.onerror = function(e) {
    console.log("Error");
    console.dir(e);
}
open返回的是一个对象
回调函数定义在这个对象上面
回调函数接受一个事件对象event作为参数，它的target.result属性就指向打开的IndexedDB数据库，也就是说db = e.target.result才算我们真正拿到的数据库

2、创建一个数据库存储对象
var objectStore = db.createObjectStore(dbName, { 
        keyPath: 'id',
        autoIncrement: true
    });
objectStore是一个重要的对象，可以理解为存储对象
objectStore.add()可以向数据库添加数据，objectStore.delete()可以删除数据，objectStore.clear()可以清空数据库，objectStore.put()可以替换数据

使用objectStore来创建数据库的主键和普通字段

objectStore.createIndex('id', 'id', {
        unique: true    
    });
3、向indexedDB数据库添加数据
数据库的操作都是基于事务（transaction）来进行，于是，无论是添加编辑还是删除数据库，我们都要先建立一个事务（transaction），然后才能继续下面的操作
var transaction = db.transaction(dbName, "readwrite");
dbName就是数据库的名称

// 新建一个事务
var transaction = db.transaction('project', "readwrite");
// 打开存储对象
var objectStore = transaction.objectStore('project');
// 添加到数据对象中
objectStore.add(newItem);
4、indexedDB数据库的获取
indexedDB数据库的获取使用Cursor APIs和Key Range APIs。也就是使用“游标API”和“范围API”，具体使用可以去看文档

四、对比
如果是浏览器主窗体线程开发，同时存储数据结构简单，localStorage比较好；
如果数据结构比较复杂，同时对浏览器兼容性没什么要求，可以考虑使用indexedDB；
如果是在Service Workers中开发应用，只能使用indexedDB数据存储。
indexedDB数据库的使用目前可以直接在http协议下使用，这个和cacheStorage缓存存储必须使用https协议不一样

cacheStorage缓存页面，indexedDB数据库缓存数据，两者一结合而就可以实现百分百的离线开发

localStorage，sessionStorage和cookie的区别
共同点：都是保存在浏览器端、且同源的
区别：

cookie数据始终在同源的http请求中携带（即使不需要），即cookie在浏览器和服务器间来回传递，而sessionStorage和localStorage不会自动把数据发送给服务器，仅在本地保存。cookie数据还有路径（path）的概念，可以限制cookie只属于某个路径下

存储大小限制也不同，cookie数据不能超过4K，同时因为每次http请求都会携带cookie、所以cookie只适合保存很小的数据，如会话标识。sessionStorage和localStorage虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大

数据有效期不同，sessionStorage：仅在当前浏览器窗口关闭之前有效；localStorage：始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据；cookie：只在设置的cookie过期时间之前有效，即使窗口关闭或浏览器关闭

作用域不同，sessionStorage不在不同的浏览器窗口中共享，即使是同一个页面；localstorage在所有同源窗口中都是共享的；cookie也是在所有同源窗口中都是共享的

web Storage支持事件通知机制，可以将数据更新的通知发送给监听者

web Storage的api接口使用更方便