<?php
header('Content-Type:application/x-www-form-urlencoded; charset=UTF-8');
$json = <<<EOF
{"data":{"comment_count":0,"avg_socre":5,"img_count":0,"positive_count":0,"neutral_count":0,"negative_count":0,"model_id":0},"success":1,"error":null}
EOF;
echo  $json;