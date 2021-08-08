<?php
	require './config.php';
	
	$num=$_POST['num'];
	$page=$_POST['page'];

	$lastnum=$num+$page*10;
	$startnum=1+$page*10;
	// $startnum=1;
	// $lastnum=10;

	$sql="select * from image where id>={$startnum} and id<={$lastnum}";

	$res=$pdo->query($sql);

	$resArr=$res->fetchAll(PDO::FETCH_ASSOC);

	
	$json = array();
	foreach($resArr as $key=>$val){

		$json[]=$val;
	}
	echo json_encode($json);
