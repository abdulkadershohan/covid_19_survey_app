<?php
require 'connect.php';
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
   {
        $request=json_decode($postdata);
      
        $name=$request->name;
        $phone=$request->phone;
        $region=$request->region;
        $city=$request->city;
        $area=$request->area;
        $address=$request->address;
        $score=$request->score;
       
   
      $sql = "INSERT INTO users( 
           name,
           phone,
           region, 
           city,
           area,
           address,
           score)
       VALUES (
                '{$name}',
                '{$phone}',
                '{$region}',
                '{$city}',
                '{$area}',
                '{$address}',
                '{$score}'

        
              )";
             
             if(mysqli_query($con,$sql)){
                http_response_code(201);
                echo "New record created successfully";
              }
              else{
                http_response_code(422);
                
              }
          


   }
  

?>