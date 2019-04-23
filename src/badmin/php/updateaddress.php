<?php

function getAddress($latitude,$longitude){
    //return 45;
   // if(!empty($latitude) && !empty($longitude)) {

        $curl1 = curl_init();
        curl_setopt_array($curl1, array(
            CURLOPT_URL => 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' . trim($latitude) . ',' . trim($longitude) . '&sensor=false&key=AIzaSyAVPRR1iGPDe4put7_hgz4kyRqfTbQMUn4',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "GET",

        ));
        $headers = [];
        curl_setopt($curl1, CURLOPT_HTTPHEADER, $headers);
        $response2 = curl_exec($curl1);
        //echo 4;
        //echo "<pre>";
        $res2 = json_decode($response2);
        return  (($res2->results[0]->formatted_address));
//print_r(json_decode($response2));
//print_r(json_decode($response));
       // echo "</pre>";
   // }
}
$curl = curl_init();
    curl_setopt_array($curl, array(
        CURLOPT_URL => 'http://132.148.90.242:3031/trackdetail',
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
    //echo $response;


    $res=json_decode($response);
foreach ($res->item as $item) {

    echo $item->latdata;
    echo $item->londata;
}

