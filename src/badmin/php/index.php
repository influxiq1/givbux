<?php
/**
 * Created by PhpStorm.
 * User: iftekar
 * Date: 30/5/17
 * Time: 1:33 PM
 */

header('Content-type: text/html');
header('Access-Control-Allow-Origin: * ');  //I have also tried the * wildcard and get the same response
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, Content-Description');
//echo 1; exit;
$data = json_decode(file_get_contents("php://input"));
if(count($data)==0)$data=$_POST;
$hiturl='http://132.148.90.242:3031/';


if($_REQUEST['type']=='sendsms'){

    $ch = curl_init();
    $key21='I4T5iL9rOGJhyUnZCCWSTJbwylRLc0WO';
    $key32='eYhpsB9hyX1CuhpyxNmEFe74o5qMzbEk';
    $key2='duLMPkxaxjiSGdPdmvKV3ywaiXpudbf8';
    $key1='98yGhSsWj09ZvId3OoKtNUeSrbLVbT2M';
    //print_r($_REQUEST);
    curl_setopt($ch, CURLOPT_URL, "https://api.authy.com/protected/json/phones/verification/start");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, "api_key=".$key2."&via=sms&phone_number=".$_REQUEST["phone"]."&country_code=".$_REQUEST['countrycode']);

    /*curl_setopt($ch, CURLOPT_POSTFIELDS, "api_key=98yGhSsWj09ZvId3OoKtNUeSrbLVbT2M&via=sms&phone_number=8981483911&country_code=91");*/
    curl_setopt($ch, CURLOPT_POST, 1);

    $headers = array();
    $headers[] = "Content-Type: application/x-www-form-urlencoded";
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

    $result = curl_exec($ch);
    if (curl_errno($ch)) {
        echo 'Error:' . curl_error($ch);
    }
    curl_close ($ch);
//    /print_r($result);
    $res=json_decode($result);
    if(isset($res->uuid) && $res->success==true) echo "success";
    else echo $res->message;
    exit;
}
if($_REQUEST['type']=='verifysms'){

    $ch = curl_init();
    $key21='I4T5iL9rOGJhyUnZCCWSTJbwylRLc0WO';
    $key332='eYhpsB9hyX1CuhpyxNmEFe74o5qMzbEk';
    $key2='duLMPkxaxjiSGdPdmvKV3ywaiXpudbf8';
    $key1='98yGhSsWj09ZvId3OoKtNUeSrbLVbT2M';

    curl_setopt($ch, CURLOPT_URL, "https://api.authy.com/protected/json/phones/verification/check?api_key=".$key2."&country_code=".$_REQUEST['countrycode']."&verification_code=".$_REQUEST["otp"]."&phone_number=".$_REQUEST["phone"]);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    /*curl_setopt($ch, CURLOPT_POSTFIELDS, "api_key=98yGhSsWj09ZvId3OoKtNUeSrbLVbT2M&phone_number=".$_GET["phone"]."&country_code=91&verification_code=".$_GET["verificationcode"]);*/


    curl_setopt($ch, CURLOPT_POST, 0);

    $headers = array();
    $headers[] = "Content-Type: application/x-www-form-urlencoded";
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

    $result = curl_exec($ch);
    if (curl_errno($ch)) {
        echo 'Error:' . curl_error($ch);
    }
    curl_close ($ch);

    //print_r(($result));
    $rs=json_decode($result);
    if($rs->success==true) echo "verified";
    else echo $rs->message;
    //print_r(($rs));

    exit;
}

if($_REQUEST['encode']=='encodefile') {
    if (!isset($_REQUEST['type']))
        $filename = "./uploads/original/" . $_REQUEST['img'];
    if ($_REQUEST['type'] == 'brand')
        $filename = "./uploads/brand/" . $_REQUEST['img'];
/*echo $filename;
exit;*/

    $imgbinary = fread(fopen($filename, "r"), filesize($filename));
    $b64image = 'data:image/' . $filetype . ';base64,' . base64_encode($imgbinary);

//$b64image = base64_encode(file_get_contents('https://audiodeadline.com/nodeserver/uploads/5bbef848dfcab6c012c6f8a2_1547203829.png'));

    $arr['data'] = $b64image;

    echo json_encode($arr);
    exit;
}


if(count($_FILES)>0  || isset($_REQUEST['base64data'])){
    //print_r($_REQUEST);
    //exit;

    $dirname = $_REQUEST["imagefolder"];
    $filenameval = './uploads/' . $dirname . "/";

    if (!file_exists($filenameval)) {
        mkdir("./uploads/" . $dirname, 0777);
        //echo "The directory $dirname was successfully created.";
       // exit;
    } else {
        //echo "The directory $dirname exists.";
    }


    $dirname = 'crop';
     $filenamevalcrop = $filenameval.$dirname.'/';

    if (!file_exists($filenamevalcrop)) {
        mkdir($filenameval . $dirname, 0777);
        //echo "The directory $dirname was successfully created.";
       // exit;
    } else {
        //echo "The directory $dirname exists.";
    }






    $data = array('error_code'=>1,'msg'=>'File Upload Error Occured! Try Again.');
    if(isset($_FILES['file'])){
        if($_FILES['file']['error'] == 0){
            $filename = $_FILES['file']['name'];
            $basename = pathinfo($filename , PATHINFO_FILENAME);
            $ext = pathinfo($filename ,  PATHINFO_EXTENSION);
            $basename = str_replace(' ','',$basename);
            $basename = strtolower($basename);
            $basename = $basename.'-'.time();
            $newfilename = $basename.'.'.$ext;
            $fileserver = $filenameval.$newfilename;
            $filenamevalcrop = $filenamevalcrop.$newfilename;
            if(move_uploaded_file($_FILES['file']['tmp_name'],$fileserver)){
                $data = array('error_code'=>0,'filename'=>$newfilename);

                if(isset($_REQUEST['base64data'])){

                    $img = $_REQUEST['base64data'];
                    $img = str_replace('data:image/png;base64,', '', $img);
                    $img = str_replace(' ', '+', $img);
                    $data = base64_decode($img);
                    //$file = UPLOAD_DIR . uniqid() . '.png';
                    $success = file_put_contents($filenamevalcrop, $data);
                    $data = array('error_code'=>0,'filename'=>$newfilename);
                    //copy($fileserver,$fileserver1);
                }
            }
        }
    }
    else{
        $basename = time().range(0,100000);
        $ext = 'jpg';
        $basename = str_replace(' ','',$basename);
        $basename = strtolower($basename);
        $basename = $basename.'-'.time();
        $newfilename = $basename.'.'.$ext;
        $fileserver = $filenameval.$newfilename;
        $filenamevalcrop = $filenamevalcrop.$newfilename;
        if(isset($_REQUEST['base64data'])){

            $img = $_REQUEST['base64data'];
            $img = str_replace('data:image/png;base64,', '', $img);
            $img = str_replace(' ', '+', $img);
            $data = base64_decode($img);
            //$file = UPLOAD_DIR . uniqid() . '.png';
            $success = file_put_contents($filenamevalcrop, $data);
            $data = array('error_code'=>0,'filename'=>$newfilename);
            //copy($fileserver,$fileserver1);
        }

    }

    echo json_encode($data);
    exit;
}


function callpostagain($data1,$hiturl){
    $data_string = json_encode($data1);
    $d=http_build_query($data1);
    $ch = curl_init($hiturl . $_GET['q'].'?'.$d);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "GET");
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response= curl_exec($ch);
    echo (($response));
    curl_close($ch);
}

function callgetagain($hiturl){
    $curl = curl_init();
    curl_setopt_array($curl, array(
        CURLOPT_URL => $hiturl . $_GET['q'],
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "GET",

    ));
    $headers = [];
    curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
    $response = curl_exec($curl);
    $err = curl_error($curl);
    echo $response;
}

if($_GET['q']== 'uploads') {
    $path = 'assets/uploads/';
    if (isset($_FILES['file'])) {
        $originalName = $_FILES['file']['name'];
        $ext = '.'.pathinfo($originalName, PATHINFO_EXTENSION);
        $generatedName = md5($_FILES['file']['tmp_name']).$ext;
        $filePath = $path.$generatedName;

        if (!is_writable($path)) {
            echo json_encode(array(
                'status' => false,
                'msg'    => 'Destination directory not writable.'
            ));
            exit;
        }
        if (move_uploaded_file($_FILES['file']['tmp_name'], $filePath)) {
            echo json_encode(array(
                'status'        => true,
                'originalName'  => $originalName,
                'generatedName' => $generatedName
            ));
        }
    }
    else {
        echo json_encode(
            array('status' => false, 'msg' => 'No file uploaded.')
        );
        exit;
    }
}
else{
    if(count($data)==0) {
        $curl = curl_init();
        echo $hiturl . $_GET['q'];exit;
        curl_setopt_array($curl, array(
            CURLOPT_URL => $hiturl . $_GET['q'],
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "GET",

        ));

        $headers = [];


        curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
        $response = curl_exec($curl);
        $err = curl_error($curl);
        if(strlen($response)>3) echo $response;
        else callgetagain($hiturl);

    }
    else{
        $data_string = json_encode($data);
        $d=http_build_query($data);
        $ch = curl_init($hiturl . $_GET['q'].'?'.$d);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "GET");
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $response= curl_exec($ch);
        if(strlen($response)>2)
            echo (($response));
        else callpostagain($data,$hiturl);
        curl_close($ch);
    }
}
