"user strict";var BrowserChecked=(function(){var k=navigator.userAgent.toLowerCase();var l=/msie|trident/img,b=/edge/img,f=/opr|opera/img,n=/firefox/img,j=/(version)[\/]([\w.]+)/img,e=/chrome/img,m=/crios/img;var h,c;if(l.test(k)){h=/(msie) ([\w.]+)/img.exec(k)||/(trident).*rv:([\w.]+)/img.exec(k);h[1]="ie"}else{if(b.test(k)){h=/(edge)[ \/]([\w.]+)/img.exec(k)}else{if(f.test(k)){h=/(opera)(?:.*version|)[ \/]([\w.]+)/img.exec(k)||/(opr)[ \/]([\w.]+)/img.exec(k);h[1]="opera"}else{if(n.test(k)){h=/(firefox)[ \/]([\w.]+)/img.exec(k)}else{if(j.test(k)){h=/(version)[ \/]([\w.]+)/img.exec(k);h[1]="safari"}else{if(e.test(k)){h=/(chrome)[ \/]([\w.]+)/img.exec(k)}else{if(m.test(k)){h=/(crios)[ \/]([\w.]+)/img.exec(k)}else{h=[];h[1]="xxxxx";h[2]="0"}}}}}}}c=(function(){var r=/(360se|bidubrowser|aoyou|maxthon|theworld|qqbrowserlite|qqbrowser|lbbrowser|ubrowser|2345explorer|se|taobao)/img.exec(k);return r?r[0]:false})();function a(s){for(var r=0;r<s.supportList.length;r++){if(s.supportList[r]&&s.supportList[r].name&&s.supportList[r].name.toLowerCase()==h[1]&&(s.supportList[r].version?parseInt(s.supportList[r].version)<=parseInt(h[2]?h[2]:0):true)){return true}}return false}function g(s){for(var r=0;r<s.notSupportList.length;r++){if(s.notSupportList[r]&&s.notSupportList[r].name&&s.notSupportList[r].name.toLowerCase()==h[1]&&(s.notSupportList[r].version?parseInt(s.notSupportList[r].version)>=parseInt(h[2]?h[2]:0):true)){return false}}return true}function q(s){for(var r=0;r<s.notSupportListFromName.length;r++){if((new RegExp(s.notSupportListFromName[r],"img")).test(k)){return false}}return true}function i(u){var r=u.reverse?u.notSupportList:u.supportList;for(var t=0;t<r.length;t++){var s=r[t].name.toLowerCase();if(r[t].name&&s==="chrome"&&s===(h[1]||"").toLowerCase()){return parseInt(h[2]||0)<(r[t].version||0)}}return false}function o(t,s){t=t||{};for(var r in s){if(d(s[r]).indexOf(["array","object"])!==-1){t[r]=d(s[r])==="array"?o([],s[r]):o({},s[r])}else{t[r]=s[r]}}return t}function d(r){return Object.prototype.toString.call(r).slice(8,-1).toLowerCase()}function p(r){try{var s={supportList:[{name:"chrome",version:"38"}],notSupportList:[{name:"firefox",version:"50"}],notSupportListFromName:["qqbrowserlite"],reverse:false};s=o(s,r);return{name:c||h[1],version:h[2],isSupport:(!s.reverse?a(s):g(s))&&q(s),isMacOs:/mac.*os/img.test(k),isLowerWebkit:i(s)}}catch(t){alert(JSON.stringify(t))}}return p})();