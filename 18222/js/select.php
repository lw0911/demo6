<?php
	require './config.php';

	
	$arr=$_POST['gids'];
	// var_dump($arr);
	//把数组转成以","连接字符串
	$gids = implode(',', $arr); 
	//echo $gids;

	$sql="SELECT * FROM `image` WHERE id in($gids)";

	$res=$pdo->query($sql);

	$resArr=$res->fetchAll(PDO::FETCH_ASSOC);

	echo json_encode($resArr);