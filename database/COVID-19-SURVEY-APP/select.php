<?php
require 'connect.php';
error_reporting(E_ERROR);
$users=[];
$sql = "SELECT * FROM `users`";

if($result=mysqli_query($con,$sql))
{
  $cr=0;
  while($row=mysqli_fetch_assoc($result))
  {
    $users[$cr]['name']=$row['name'];
    $users[$cr]['phone']=$row['phone'];
    $users[$cr]['region']=$row['region'];
    $users[$cr]['city']=$row['city'];
    $users[$cr]['area']=$row['area'];
    $users[$cr]['address']=$row['address'];
    $users[$cr]['score']=$row['score'];
    $cr++;
   
  }
  echo json_encode($users);
}
else{
  http_response_code(404);
}

  

?>
