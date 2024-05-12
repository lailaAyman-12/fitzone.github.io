<?php
 
 $host="Localhost";
  $user="root";
  $password="";
  $database_name="fitzone";
  
  $conn=mysqli_connect($host,$user,$password,$database_name);
  
  
  if($conn){
   //echo " connection successfully ";
  }
  else  {
   //echo "invalid connection ";
  }
?>