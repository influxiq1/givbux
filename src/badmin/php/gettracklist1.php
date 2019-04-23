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
print_r(json_decode($response2));
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

?>

<style>
    table, th, td {
        border: 1px solid black;
        border-collapse: collapse;
    }
    th, td {
        padding: 5px;
    }
    th {
        text-align: left;
    }
</style>

    <table style="width:100%">
        <tr>
            <th>Name</th>
            <th>Tracked Add</th>
            <th>Tracked On</th>
            <th>Lat</th>
            <th>Lot</th>
            <th>Address</th>
        </tr>

<?php
    $res=json_decode($response);
    echo "<pre>";
    //print_r($res->item);
    echo "</pre>";
foreach ($res->item as $item) {

    if(!isset($item->address) && strlen($item->latdata)>0 && strlen($item->londata)>0){
        //echo "no address";


        $location= 'http://132.148.90.242:3031/updateaddress?address='.urlencode(getAddress($item->latdata,$item->londata))."&id=".$item->_id;
        //file_get_contents($location);
        //echo ($location);
        $curl11 = curl_init();
        curl_setopt_array($curl11, array(
            CURLOPT_URL => ($location),
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 100,
            CURLOPT_HTTPHEADER => array('Expect:'),
            CURLOPT_TIMEOUT => 300,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "GET",

        ));
        $headers = [];
        curl_setopt($curl11, CURLOPT_HTTPHEADER, $headers);
        $response21 = curl_exec($curl11);
        $erre= curl_error($curl11);
        //echo "<pre>";
        //echo 99;
       // print_r($erre);
        ///print_r($response21);
        //echo "</pre>";
    }

    echo  "<tr>
    <td>".$item->name."</td>
    <td>".$item->trackablename."</td>
    <td>".date('jS F Y h:i:s A (T)', $item->addedtime/1000)."</td>
    <td>".$item->latdata."</td>
    <td>".$item->londata."</td>
    <td>".$item->address."</td>
    
  </tr>";

    }
    ?>
    </table>

<?php
