<?php
header('Content-Type:text/json;charset=gb2312');
$json = <<<EOF
{"data":"<input id=\"i_address_id\" type=\"hidden\" value=\"0\" /><input id=\"i_area_id\" type=\"hidden\" value=\"\" /><li><a class=\"add_address_box\" onclick=\"s_new_address();\"><i class=\"inline spIcon add_address_bg mg_t40\"><\/i><br><span  class=\"inline f18 col_999 mg_t15\">使用新地址<em class=\"upfile_btn\"><\/em><\/span><\/a><\/li>"}
EOF;
echo  $json;