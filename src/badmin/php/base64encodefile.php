<?php

header('Content-type: text/html');
header('Access-Control-Allow-Origin: * ');  //I have also tried the * wildcard and get the same response
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, Content-Description');

//echo 56;
if(!isset($_REQUEST['type']))
$filename="./uploads/original/".$_REQUEST['img'];
if($_REQUEST['type']=='brand')
    $filename="./uploads/brand/".$_REQUEST['img'];
//echo $filename;
//exit;

$imgbinary = fread(fopen($filename, "r"), filesize($filename));
$b64image=  'data:image/' . $filetype . ';base64,' . base64_encode($imgbinary);

//$b64image = base64_encode(file_get_contents('https://audiodeadline.com/nodeserver/uploads/5bbef848dfcab6c012c6f8a2_1547203829.png'));

echo $arr['data']=$b64image;  
///echo json_encode($arr);