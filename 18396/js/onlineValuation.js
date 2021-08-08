"use strict";

//公有变量声明
var StoreName = "";
var StoreType = "";
var FirstTM = "";
var BrandType = "";
var UserName = "";
var TelNum = "";
var PriceNum = "";
var Pirce = "";
var Description = "";

var beanlayer = {
  msg: function msg(_msg, duration) {
    duration = duration ? duration : 2000;

    if ($("body").find('.bean-layer-msg').length > 0) {
      return;
    }

    var oDiv = $("<div></div>").addClass("bean-layer-msg").text(_msg);
    $("body").append(oDiv).find(oDiv).animate({
      opacity: "1"
    }, 300);
    setTimeout(function () {
      oDiv.animate({
        opacity: "0"
      }, 300, function () {
        oDiv.remove();
      });
    }, duration);
  }
};
var onlineValuation = {
  init: function init() {
    this.otherJs();
  },
  otherJs: function otherJs() {
    var progress;
    var tha = this;
    var flag; //进度条

    $("#onlineValuationBtn").click(function () {
      if (!$(".storeName").val() || $(".storeName").val() == $(".storeName").attr("placeholder")) {
        beanlayer.msg("请填写您的旺旺号或店铺名称");
        return;
      }
      if ($(".storeType").text().trim() == "请选择店铺类型") {
        beanlayer.msg("请选择店铺类型");
        return;
      }

      if ($(".firstClass1").text().trim() == "请选择经营大类") {
        beanlayer.msg("请选择经营大类");
        return;
      }

      if ($(".firstClass2").text().trim() == "请选择一级类目") {
        beanlayer.msg("请选择一级类目");
        return;
      } 
      if ($(".trademarkType").text().trim() == "请选择商标类型") {
        beanlayer.msg("请选择商标类型");
        return;
      }

      if ($(".markType").text().trim() == "请选择商标种类") {
        beanlayer.msg("请选择商标种类");
        return;
      }

      if (!$(".whatYourName").val() || $(".whatYourName").val() == $(".whatYourName").attr("placeholder")) {
        beanlayer.msg("请问怎么称呼您");
        return;
      }

      if (!$(".concatPhone").val() || $(".concatPhone").val() == $(".concatPhone").attr("placeholder")) {
        beanlayer.msg("请留下你的联系方式");
        return;
      }
      if (!/^0{0,1}(13[0-9]|14[0-9]|15[0-9]|17[0-9]|18[0-9]|19[0-9])[0-9]{8}$/.test($(".concatPhone").val())) {
        beanlayer.msg("请输入正确的手机号码");
        return;
      }
    
      StoreName = $(".storeName").val();
      StoreType = $(".storeType").text().trim();
      FirstTM = $(".firstClass2").text().trim();
      BrandType = $(".markType").text().trim();
      UserName = $(".whatYourName").val();
      TelNum = $(".concatPhone").val();
        //后台数据请求
      $.ajax({
          url: '/price/GetPrice',
          type: "Post",
          data: {
              StoreName: StoreName,
              StoreType: StoreType,
              FirstTM: FirstTM,
              BrandType: BrandType,
              UserName: UserName,
              TelNum: TelNum
          },
          dataType: "json",
          success: function success(data) {
              if (data.flag == true) {
                  PriceNum = data.PriceNum;
                  Pirce = data.Pirce;
                  Description = data.Description;
                  var textStoerValue = StoreName + "价格评估结果";
                  $("#title1Text").html(textStoerValue);
                  console.log(data);
                 
              }
              else {
                  alert(data.msg);
                  return false;
              }
          }
      });
      progress = layer.open({
        type: 1,
        title: false,
        //不显示标题
        closeBtn: 2,
        //按钮风格2
        area: ['520px'],
        shadeClose: true,
        //是否点击遮罩关闭
        content: $('#onlineValuationModal1'),
        resize: false,
        scrollbar: false,
        success: function success(layero, index) {
            if (!flag) {                
            var progressInit = function progressInit(n) {
              if (n == 1 || n == 3 || n == 5 || n == 10) {
                randomTime = Math.random() * 2 * 1000; //0-2s
              } else if (n == 2 || n == 4 || n == 7) {
                randomTime = (Math.random() * 2 + 2) * 1000; //2-4s
              } else if (n == 6 || n == 8 || n == 9) {
                randomTime = (Math.random() * 2 + 4) * 1000; //4-6s
              }

              $('#step' + n).drawRingProgress({
                //进度
                percent: '100',
                //圆环前景色
                forecolor: '#ff6700',
                //圆环背景色
                bgbordercolor: '#dddddd',
                text: 'Loading...',
                //圆环描述文字,
                time: randomTime
              });

              if (n < 11) {
                setTimeout(function () {
                  $('.step' + n).hide();
                  $('.step' + (n + 1)).show();

                  if (n == 10) {
                      $('#onlineValuationModal1 .title').html('您的' + StoreName + '评估完成');
                    $('.percentNum').parent().hide();
                    return false;
                  }

                  $('.percentNum').html(n + 1);
                  progressInit(n + 1);
                }, randomTime);
              }
            };

            flag = true;
            var randomTime = 0;
            setTimeout(function () {
              progressInit(1);
            }, 300);
          }
        }
      });
    }); //查看证书

 

    $('#viewCertificate').off('click').on('click', function () {
      layer.close(progress);
      layer.open({
        type: 1,
        title: false,
        //不显示标题
        closeBtn: 2,
        //按钮风格2
        area: ['1034px'],
        shadeClose: true,
        resize: false,
        scrollbar: false,
        //是否点击遮罩关闭
        content: $('#onlineValuationModal2')
      });
      var config = {
        storeName: $(".storeName").val(),
        //店铺名称
        certifiyNumber: PriceNum,
        //证书编号
        price: Pirce,
        //评估价格
        storeType: $(".storeType").text().trim(),
        //店铺类型
        trademarkType: $(".trademarkType").text().trim(),
        //商标类型
        markType: $(".markType").text().trim(),
        //商标种类
        firstClass: $(".firstClass1").text().trim() + "," + $(".firstClass2").text().trim(),
        //一级类目
        detectionResult:Description //检测结果			

      };
      var imgs = tha.generateCertify(config);

      imgs.onload = function () {
        $("#onlineValuationModal2 .pic").html(imgs);
      };
    }); //显示/隐藏option

    $('.ly-index1-ssselect').click(function () {
      var sib = $(this).parents(".formItem").siblings().find('.ly-index1-ssoption');
      var sib1 = $(this).parents(".selectGroup").siblings().find('.ly-index1-ssoption');
      sib.push(sib1);

      for (var i = 0; i < sib.length; i++) {
        if ($(sib[i]).css('display') == 'block') {
          $(sib[i]).hide();
        }
      }

      if ($(this).siblings().css('display') == 'none') {
        $(this).siblings().show();
        $(this).addClass('active');
      } else {
        $(this).siblings().hide();
      }
    }); //option选择替换文本

    $('.ly-index1-ssoption').off('click').on('click', "li", function () {
      $(this).parent().siblings().html($(this).html()).css('color', "#333").removeClass('active');

      if ($(this).parent().siblings().attr('id') == "FistGetChirldren") {
        var TMCat_ID = $(this).attr("value");
        $.ajax({
          url: '/price/GetChirldren',
          type: "Post",
          data: {
            TMCat_ID: TMCat_ID
          },
          dataType: "json",
          success: function success(data) {
            var jsonData = JSON.parse(data.value);
            var htmlText = "";

            for (var i = 0; i < jsonData.length; i++) {
              htmlText += "  <li>" + jsonData[i].SecondTm_Name + "</li>";
            }

            $("#GetChirldren").html(htmlText);
          }
        });
      }

      $(this).parent().hide();
    });
    $(document).mouseup(function (e) {
      var _con = $('.ly-index1-ssselect'); // 设置目标区域


      var _con1 = $('.ly-index1-ssoption');

      _con.removeClass('active');

      if (!_con.is(e.target) && _con.has(e.target).length === 0 && !_con1.is(e.target) && _con1.has(e.target).length === 0) {
        $(_con1).hide();
      }

      ;
    });
  },

  /**
   * 生成证书
   * @param {Object} config
   */
    /**
     * 生成证书
     * @param {Object} config
     */
  generateCertify: function generateCertify(obj) {
      var config = {
          storeName: obj.storeName || '',
          //店铺名称
          certifiyNumber: obj.certifiyNumber || '',
          //证书编号
          price: obj.price || '',
          //评估价格
          storeType: obj.storeType || '',
          //店铺类型
          trademarkType: obj.trademarkType || '',
          //商标类型
          markType: obj.markType || '',
          //商标种类
          firstClass: obj.firstClass || '',
          //一级类目
          detectionResult: obj.detectionResult || ''
      };
      var img2 = new Image();
      var canvas = document.createElement("canvas");
      canvas.width = 560;
      canvas.height = 793;
      var ctx = canvas.getContext("2d");
      var maxWidth = 320; //绘制背景

      var img = new Image();
      img.src = "../Content/onlineValuation/images/zs-bg.png";

      img.onload = function () {
          ctx.drawImage(img, 0, 0, 560, 793); //写标题1

          drawText({
              text: config.storeName,
              color: "#231815",
              fontsize: 28,
              align: "center",
              x: 280,
              y: 208
          }); //写标题2

          drawText({
              text: "网店价格评估证书",
              color: "#231815",
              fontsize: 28,
              align: "center",
              x: 280,
              y: 244
          }); //写证书编号

          drawText({
              text: "证书编号：" + config.certifiyNumber,
              color: "#9a9a9a",
              fontsize: 14,
              family: " KaiTi",
              weight: "bold ",
              x: 290,
              y: 275
          }); //写评估价格

          drawText({
              text: "￥" + config.price,
              color: "#1d1c1c",
              fontsize: 18,
              x: 162,
              y: 320
          }); //写店铺类型

          drawText({
              text: config.storeType,
              color: "#1d1c1c",
              fontsize: 16,
              x: 162,
              y: 356
          }); //写商标类型

          drawText({
              text: config.trademarkType,
              color: "#1d1c1c",
              fontsize: 16,
              x: 162,
              y: 390
          }); //写商标种类

          drawText({
              text: config.markType,
              color: "#1d1c1c",
              fontsize: 16,
              x: 162,
              y: 424
          }); //写一级类目

          drawText({
              text: config.firstClass,
              color: "#1d1c1c",
              fontsize: 16,
              x: 162,
              y: 458
          }); //写检测结果

          drawText({
              text: config.detectionResult,
              color: "#1d1c1c",
              fontsize: 16,
              x: 162,
              y: 494
          }); //绘制徽章

          var img1 = new Image();
          img1.src = "../Content/onlineValuation/images/zs-gz.png";

          img1.onload = function () {
              ctx.drawImage(img1, 347, 450, 153, 153);
              img2.src = canvas.toDataURL('image/png');
          };
      };

      function drawText(obj) {
          ctx.save(); //save和restore可以保证样式属性只运用于该段canvas元素 

          var row = []; //行数

          var chr = obj.text.split("");
          var temp = "";
          ctx.fillStyle = obj.color; //设置字体颜色

          var font_size = obj.fontsize; //字体大小

          var font_family = obj.family || "fzdbsjw";
          var weight = obj.weight || "";
          ctx.font = weight + font_size + "px " + font_family; //字体

          ctx.textAlign = obj.align || 'left';

          if (ctx.measureText(obj.text).width < maxWidth) {
              row.push(obj.text);
          } else {
              for (var a = 0; a < chr.length; a++) {
                  if (ctx.measureText(temp).width < maxWidth) {
                      ;
                  } else {
                      row.push(temp);
                      temp = "";
                  }

                  temp += chr[a];
              }

              row.push(temp);
          }

          for (var i = 0; i < row.length; i++) {
              ctx.fillText(row[i], obj.x, obj.y + i * 26);
          }

          ctx.restore();
      }

      return img2;
  }
};
$(document).ready(function () {
  onlineValuation.init();
});