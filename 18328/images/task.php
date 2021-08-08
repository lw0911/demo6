var destoon_userid = 35;
var destoon_username = 'hjl416148489';
var destoon_message = 1;
var destoon_chat = 0;
var destoon_cart = substr_count(get_cookie('cart'), ',');
var destoon_member = '';
destoon_member += '<span class="f_b" title="批发商">黄金</span> <a href="http://chinahzp.wang/member/line.php" title="在线，点击隐身"><img src="js/image/user_online.png" width="10" height="10" align="absmiddle"/></a> | <a href="http://chinahzp.wang/member/">商务中心</a> | <a href="http://chinahzp.wang/member/member_message.html">站内信(<span class="head_t" id="destoon_message"><strong>1</strong>'+sound('message_1')+'</span>)</a> | <a href="http://chinahzp.wang/member/chat.php">新对话(<span class="head_t" id="destoon_chat">0</span>)</a> | <a href="http://chinahzp.wang/member/logout.php">退出</a>';
$('#destoon_member').html(destoon_member);
$('#destoon_cart').html(destoon_cart ? '<strong>'+destoon_cart+'</strong>' : 0);
