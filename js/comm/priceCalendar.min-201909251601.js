epctrl.Calendar=function(e){epctrl.Calendar.superclass.constructor.apply(this,arguments),this.setCss("calendar/calendar.css"),this.cfg=e||{};var t=this.cfg.mallOptions.optionsAmountList||[];jQuery.each(t,function(e,t){var a=t.t2,n=a.substr(a.lastIndexOf("_")+1);t.date=n}),this.cfg.priceCalendar&&(this.filtedOptions=t,this.defaultPrice=0,this.defaultAmount=0)},epctrl.extend("Calendar","Control",{type:"Calendar",selectedCls:"ep-calendar-selected",_defaultCfg:{width:"",height:"",date:"",showBorder:!0,autoReRender:!0,dayStartFromSunday:!0,headerHeight:"",footerHeight:"",menuHeigt:240,menuWidth:220},_initContainer:function _initContainer(){this.$container.empty();var e=document.createElement("div");e.className="ep-calendar",this.cfg.width&&(e.style.width=this.cfg.width),this.cfg.height&&(e.style.height=this.cfg.height),this.showBorder||(e.style.border="none"),this.el=e;var t=document.createElement("div");t.className="ep-calendar-header",t.innerHTML='<span class="ep-calendar-header-btn ep-calendar-btn-prev"><svg class="icon_arrow"><use xlink:href="#icon_arrow"></use></svg></span><div class="ep-calendar-header-center"><span class="ep-calendar-title"></span></div><span class="ep-calendar-header-btn ep-calendar-btn-next"><svg class="icon_arrow1"><use xlink:href="#icon_arrow1"></use></svg></span>',t.innerHTML+="",this.cfg.headerHeight&&(t.style.height=this.cfg.headerHeight),this._header=t,this._prevBtn=t.firstChild,this._nextBtn=t.lastChild,this._headerCenter=this._prevBtn.nextSibling,this._titleEl=this._headerCenter.firstChild,this.el.appendChild(t);var a=document.createElement("table"),n=document.createElement("thead"),r=document.createElement("tbody"),i=document.createElement("tr");a.className="ep-calendar-body",a.setAttribute("cellspacing",0),a.setAttribute("cellpadding",0),i.className="ep-calendar-daysheader",r.className="ep-calendar-days",n.appendChild(i),a.appendChild(n),a.appendChild(r),this._daysHeader=i,this._daysBody=r,this.el.appendChild(a),this._body=a;var s=document.createElement("div");s.className="ep-calendar-footer",this.cfg.footerHeight&&(t.style.height=this.cfg.footerHeight),this.el.appendChild(s),this._footer=s;var d=document.createElement("div");d.className="ep-calendar-menu",this.cfg.menuHeigt&&(d.style.height=this.cfg.menuHeigt),this.cfg.menuWidth&&(d.style.menuWidth=this.cfg.menuWidth),this.menu=d,this.el.appendChild(d),this.container.appendChild(this.el),this._calcAndSetHeight()},_calcAndSetHeight:function _calcAndSetHeight(){var e=jQuery(this._header).outerHeight(),t=jQuery(this._footer).outerHeight(),a=jQuery(this.el).height()-e-t;this._body.style.height=a+"px"},_weekHeaderDays:{Sun:["日","一","二","三","四","五","六"],Sun_full:["周日","周一","周二","周三","周四","周五","周六"],Sun_en:["Sun","Mon","Tues","Wed","Thur","Fri","Sat"],Sun_en_full:["Sunday","Monday","Tuesday","Wednesday","Thurday","Friday","Saturday "],Mon:["一","二","三","四","五","六","日"],Mon_full:["周一","周二","周三","周四","周五","周六","周日"],Mon_en:["Sun","Mon","Tues","Wed","Thur","Fri","Sat"],Mon_en_full:["Monday","Tuesday","Wednesday","Thurday","Friday","Saturday","Sunday"]},_renderWeek:function _renderWeek(){for(var e=this.dayStartFromSunday?this._weekHeaderDays.Sun:this._weekHeaderDays.Mon,t=0;t<7;++t){var a=document.createElement("th"),n=document.createElement("div"),r=document.createElement("span"),i=this.dayStartFromSunday?0===t?7:t:t+1;a.className="ep-calendar-day",n.className="ep-calendar-day-inner",a.setAttribute("data-isoweekday",i),n.appendChild(r),a.appendChild(n);var s=this.fire("cellRender",{isoWeekday:i,dayCls:"ep-calendar-day-text",dayText:e[t],el:this.el,tdEl:a,extraHtml:"",isHeader:!0});r.className=s.dayCls,r.innerText=s.dayText,s.extraHtml&&jQuery(s.extraHtml).appendTo(n),this._daysHeader.appendChild(a),this.fire("afterCellRender",{isoWeekday:i,dayCls:r.className,dayText:r.innerText,el:this.el,isHeader:!0,extraHtml:s.extraHtml,tdEl:a})}},_renderTitle:function _renderTitle(){this._titleEl.innerHTML=moment(this.currMonth,"YYYY-MM").format("YYYY年M月"),this.fire("titleRender",{titleEl:this._titleEl,currMonth:this.currMonth})},_clearDays:function _clearDays(){for(var e=this._daysBody.childNodes,t=e.length;0<t;--t)this._daysBody.removeChild(e[t-1])},_renderDay:function _renderDay(e,t){var r=this,i=document.createElement("td"),a=document.createElement("div"),n=document.createElement("div"),s=document.createElement("div"),d=document.createElement("div"),l=e.isoWeekday(),o=e.month()+1,c=e.format("YYYY-MM-DD");a.appendChild(n),a.appendChild(s),this.cfg.openAmount&&a.appendChild(d),i.appendChild(a),i.className="ep-calendar-date",a.className="ep-calendar-date-inner",i.setAttribute("data-date",c),i.setAttribute("data-isoweekday",l),n.className="ep-calendar-date-txt",s.className="ep-calendar-price-txt",d.className="ep-calendar-inv-txt",6!==l&&7!==l||(i.className+=" ep-calenday-weekend"),o==parseInt(this.currMonth.substr(5),10)&&moment(this.today).isSameOrBefore(e)||(i.className+=" ep-calendar-disabled"),this.today==c&&(i.className+=" ep-calendar-today");var h=this.fire("cellRender",{date:e.format("YYYY-MM-DD"),isoWeekday:l,el:this.el,tdEl:i,dateText:e.date(),dateCls:"ep-calendar-date-txt",extraHtml:"",isHeader:!1});if(o==parseInt(this.currMonth.substr(5),10)&&(n.innerText=h.dateText),0==this.filtedOptions.length&&o==parseInt(this.currMonth.substr(5),10)&&moment(this.today).isSameOrBefore(e)){var u="",m=Number(this.defaultPrice);u=Math.floor(m)===m?m.toFixed(0):m.toFixed(2),s.innerText=Fai.top._choiceCurrencyVal+u,d.innerText="余0",i.className+=" ep-calendar-disabled"}else if(o==parseInt(this.currMonth.substr(5),10)&&moment(this.today).isSameOrBefore(e)){var f=!1;jQuery.each(this.filtedOptions,function(e,t){if(c==t.date){"undefined"!=typeof t.oPrice&&null!=t.oPrice&&""!==t.oPrice||(t.oPrice=r.defaultPrice);var a="",n=Number(t.oPrice);a=Math.floor(n)===n?n.toFixed(0):n.toFixed(2),s.innerText=Fai.top._choiceCurrencyVal+a,"undefined"!=typeof t.oAmount&&null!=t.oAmount&&""!==t.oAmount||(t.oAmount=r.defaultAmount),d.innerText="余"+t.oAmount,f=!0,r.cfg.openAmount&&0==t.oAmount&&(i.className+=" ep-calendar-disabled")}}),f||(i.className+=" ep-calendar-disabled")}s.style.color=Fai.top._majorColorData,d.style.color="rgba(153,153,153,1)",h.extraHtml&&jQuery(h.extraHtml).appendTo(a),t.appendChild(h.tdEl),this.fire("afterCellRender",{date:e.format("YYYY-MM-DD"),isoWeekday:l,el:this.el,tdEl:i,dateText:n.innerText,dateCls:n.className,extraHtml:h.extraHtml,isHeader:!1})},_render:function _render(){this._initStartEnd();var a,n=6,r=7,i=this.startDateOfMonth.clone(),e=jQuery.Deferred(),s=this.startDateOfMonth.format("YYYY-MM-DD"),d=this.endDateOfMonth.format("YYYY-MM-DD"),t=moment(this.currMonth,"YYYY-MM").subtract(1,"M"),l=moment().startOf("month");t.isBefore(l)&&jQuery(".ep-calendar-btn-prev").addClass("btn-disabled");var o=moment(this.currMonth,"YYYY-MM").add(1,"M"),c=moment().add(12,"M");o.isAfter(c)&&jQuery(".ep-calendar-btn-next").addClass("btn-disabled");var h=this.fire("beforeDateRender",{momth:this.currMonth,startDate:s,endDate:d,ajax:null});h.ajax||(h.ajax=e.promise(),e.resolve());var u=this;h.ajax.then(function(){u._clearDays(),u._renderTitle();for(var e=0;e<n;++e){(a=document.createElement("tr")).className="ep-calendar-week",u._daysBody.appendChild(a);for(var t=0;t<r;++t)u._renderDay(i,a),i.add(1,"day")}u.fire("afterDateRender",{momth:u.currMonth,startDate:s,endDate:d,ajax:h.ajax})})},render:function render(e){if(e){var t=moment(e,"YYYY-MM");t.isValid()?this.currMonth=t.format("YYYY-MM"):this.throwError(e+"指定的日期不正确！")}this.cfg.priceCalendar&&this._initOptionsListener(),this._isInit||(this._initContainer(),this._renderWeek(),this._isInit=!0),this._render()},reRender:function reRender(){this._isInit||this.throwError("日历还未渲染过，无需重新渲染！"),this._initContainer(),this._renderWeek(),this.render()},_initOptionsListener:function _initOptionsListener(){var i=this,e=Site.productDetailInfo;if(e){var t,a=e.moduleId,s=e.optionsAmountList,n=(e.relateAmount,e.realMallPrice),r=(e.limitAmount_options,e.productRestrictInfo);if(void 0===r&&(r={}),t="PdSlide"===a?$("#fk-productSlideContent"):$("#module"+a),!Fai.isNull(t)){var d=t.find(".J_optionItemWrap"),l=(t.find("#realMallAmount").html(),t.find("#mallAmount").html());t.find("#mallWeight").html();i.defaultPrice=n,0<t.find("#mallAmount").length&&(i.defaultAmount=l),d.find(".optionItem").on("click",function(){i.filtedOptions=[];var e=d.length,t=d.find(".J-item.g_borderSelected"),r="";e==t.length&&(jQuery.each(t,function(e,t){r+=jQuery(t).attr("data")+"_"}),r=r.substring(0,r.length-1),jQuery.each(s,function(e,t){var a=t.t2,n=a.substr(a.lastIndexOf("_")+1);a.substr(0,a.lastIndexOf("_"))==r&&(t.date=n,i.filtedOptions.push(t))})),i._render();var a=$(".priceCalendarTrigger"),n=Fai.format(LS.msgBoardInputIsEmpty,"");n=n.substr(0,n.length-1),0<a.length&&a.html("<span class='placeholder'>"+n+"</span>")})}}},_initStartEnd:function _initStartEnd(){var e,t,a=moment(this.currMonth,"YYYY-MM"),n=a.isoWeekday();t=(e=this.dayStartFromSunday?a.subtract(n,"day"):a.subtract(n-1,"day")).clone().add(41,"day"),this.startDateOfMonth=e,this.endDateOfMonth=t},setMonth:function setMonth(e){var t=moment(e,"YYYY-MM");if(!t.isValid())throw new Error(e+"是一个不合法的日期");var a=this.currMonth,n=t.format("YYYY-MM");this.fire("beforeMonthChange",{el:this.el,oldMonth:a,newMonth:n}),this.currMonth=n,this.render(),this.fire("afterMonthChange",{el:this.el,oldMonth:a,newMonth:n})},getMonth:function getMonth(){return this.currMonth},prevMonth:function prevMonth(){var e=moment(this.currMonth,"YYYY-MM").subtract(1,"M"),t=moment().startOf("month");e.isBefore(t)?jQuery(".ep-calendar-btn-prev").addClass("btn-disabled"):(this.setMonth(e),jQuery(".ep-calendar-btn-next").removeClass("btn-disabled"))},nextMonth:function nextMonth(){var e=moment(this.currMonth,"YYYY-MM").add(1,"M"),t=moment().add(12,"M");e.isAfter(t)?jQuery(".ep-calendar-btn-next").addClass("btn-disabled"):(this.setMonth(e),jQuery(".ep-calendar-btn-prev").removeClass("btn-disabled"))},resetCellColor:function resetCellColor(e){var t=jQuery(this._daysBody).find(".ep-calendar-date").not(".ep-calendar-disabled");t.css("background-color","#fff"),t.find(".ep-calendar-date-txt").css("color","#333"),t.find(".ep-calendar-price-txt").css("color",Fai.top._majorColorData),t.find(".ep-calendar-inv-txt").css("color","#999"),e.css("background-color",Fai.top._majorColorData),e.find(".ep-calendar-date-txt").css("color","#fff"),e.find(".ep-calendar-price-txt").css("color","#fff"),e.find(".ep-calendar-inv-txt").css("color","#fff")},setSelected:function setSelected(e){var t,a,n=/^\d{1,2}$/.test(e),r=jQuery(this._daysBody).find(".ep-calendar-date");if(n)return(a=moment(this.currMonth+"-"+e,"YYYY-MM-DD")).isValid()||this.throwError("日期不合法"),void((t=this._getTd(a,r)).length?(r.removeClass(this.selectedCls),t.addClass(this.selectedCls)):this.throwError("当前月中没有"+e+"这一天！"));(a=moment(e,"YYYY-MM-DD")).isValid()?(t=this._getTd(a,r)).length?(r.removeClass(this.selectedCls),t.addClass(this.selectedCls),this.resetCellColor(t)):this.autoReRender?(this.render(a.format("YYYY-MM")),this.setSelected(e)):this.throwError("指定日期不在当前视图，且未开启自动切换，无法设置！"):this.throwError(e+",此日期不合法！")},getSelected:function getSelected(){var e=jQuery("."+this.selectedCls,this._daysBody)[0];return e?moment(e.getAttribute("data-date"),"YYYY-MM-DD").format("YYYY-MM-DD"):""},getStartEnd:function getStartEnd(){return{start:this.startDateOfMonth.format("YYYY-MM-DD"),end:this.endDateOfMonth.format("YYYY-MM-DD")}},_getTd:function _getTd(e,t){return(t=t||jQuery(this._daysBody).find(".ep-calendar-date")).filter('[data-date="'+e.format("YYYY-MM-DD")+'"]')},getELByDate:function getELByDate(e){var t;t=/^\d{1,2}$/.test(e)?moment(this.currMonth+"-"+e,"YYYY-MM-DD"):/^\d{1,2}-\d{1,2}$/.test(e)?moment((new Date).getFullYear()+"-"+e,"YYYY-MM-DD"):moment(e,"YYYY-MM-DD");var a=this._getTd(t);return a.length?a[0]:null},goToday:function goToday(){return this.today=moment().format("YYYY-MM-DD"),this.setMonth(this.today)},reset:function reset(){return this.setMonth(this.cfg.date||new Date)},_initEvent:function _initEvent(){var n=this;jQuery(this.el).on("click",".ep-calendar-date",function(e){var t=this.getAttribute("data-date");n.fire("dayClick",{ev:e,date:t,day:this.getAttribute("data-isoweekday"),el:n.el,tdEl:this}).cancel||jQuery(this).hasClass("ep-calendar-disabled")||n.setSelected(t)}).on("click",".ep-calendar-day",function(e){n.fire("dayHeaderClick",{ev:e,day:this.getAttribute("data-isoweekday"),el:n.el,tdEl:this})}).on("click",".ep-calendar-btn-prev",function(e){n.fire("prevBtnClick",{ev:e,currMonth:n.currMonth,el:n.el}).cancel||n.prevMonth()}).on("click",".ep-calendar-btn-next",function(e){n.fire("nextBtnClick",{ev:e,currMonth:n.currMonth,el:n.el}).cancel||n.nextMonth()}).on("click",".ep-calendar-menu-month,.ep-calendar-menu-year",function(){jQuery(this).addClass("selected").siblings(".selected").removeClass("selected")}).on("click",".ep-calendar-okbtn",function(){var e=jQuery(n.menu_year).find(".ep-calendar-menu-year.selected").data("year"),t=jQuery(n.menu_month).find(".ep-calendar-menu-month.selected").data("month");e&&t&&n.setMonth(e+"-"+t),n.hideMenu()}).on("click",".ep-calendar-cancelbtn",function(){n.hideMenu()}).on("click",".ep-calendar-next-year,.ep-calendar-prev-year",function(){var e,t=jQuery(this),a=parseInt(n.menu_year.firstChild.getAttribute("data-year"),10);t.hasClass("ep-calendar-prev-year")?e=a-10:t.hasClass("ep-calendar-next-year")&&(e=a+10),n._renderYear(e)}),jQuery(document.body).on("click",function(e){var t=jQuery(e.target);t.closest(".ep-calendar-menu").length||t.closest(".ep-calendar-title").length||n.hideMenu()})},hideMenu:function hideMenu(){this.menu.className=this.menu.className.replace(" show","")},showMenu:function showMenu(e){this._onMenuShow(e)},_onMenuShow:function _onMenuShow(e){e=e||this.currMonth,this.menu.className+=" show";var t=e.split("-"),a=parseInt(t[0],10),n=parseInt(t[1],10);this.menuIsInit?(this._renderYear(a),jQuery(this.menu_month).find('[data-month="'+n+'"]').addClass("selected").siblings().removeClass("selected")):(this._initMenu(a,n),this.menuIsInit=!0)},_initMenu:function _initMenu(e,t){var a=document.createElement("div"),n=document.createElement("div"),r=document.createElement("div"),i=document.createElement("div"),s=document.createElement("span"),d=document.createElement("span"),l=document.createElement("span"),o=document.createElement("span");a.className="ep-calendar-menu-months",n.className="ep-calendar-menu-years",r.className="ep-calendar-menu-years-inner",i.className="ep-calendar-menu-footer",s.className="ep-calendar-okbtn",s.innerText="确定",d.innerText="取消",d.className="ep-calendar-cancelbtn",l.className="ep-calendar-prev-year",o.className="ep-calendar-next-year",i.appendChild(s),i.appendChild(d),n.appendChild(r),n.appendChild(l),n.appendChild(o),this.menu_month=a,this.menu_year=r,this.menu.appendChild(a),this.menu.appendChild(n),this.menu.appendChild(i),this._renderMonth(t),this._renderYear(e,e)},_renderMonth:function _renderMonth(e){var t,a=1,n=this.menu_month,r=document.createElement("span");for(r.className="ep-calendar-menu-month";a<13;)t=r.cloneNode(!0),a==e&&(t.className+=" selected"),t.innerText=a+"月",t.setAttribute("data-month",a),n.appendChild(t),++a},_renderYear:function _renderYear(e,t){t=t||parseInt(this.currMonth.split("-")[0],10);var a,n,r=0,i=this.menu_year,s=document.createElement("span");for(i.innerHTML="",s.className+="ep-calendar-menu-year";r<10;)n=s.cloneNode(),(a=e+r)===t&&(n.className+=" selected"),n.innerText=a,n.setAttribute("data-year",a),i.appendChild(n),++r},initCfg:function initCfg(){if(!this.cfg||!this.cfg.el)throw new Error("必须指定日历渲染的html元素");this.cfg=jQuery.extend({},this._defaultCfg,this.cfg),this.$container=jQuery(this.cfg.el),this.container=this.$container[0],this.currMonth=this.cfg.date?moment(this.cfg.date,"YYYY-MM").format("YYYY-MM"):moment().format("YYYY-MM"),this.today=moment().format("YYYY-MM-DD"),this.dayStartFromSunday=this.cfg.dayStartFromSunday,this.autoReRender=this.cfg.autoReRender,this.showBorder=this.cfg.showBorder},create:function create(){this.fire("beforeCreate"),this.initCfg(),this.render(),this._initEvent(),this.fire("afterCreate")}});