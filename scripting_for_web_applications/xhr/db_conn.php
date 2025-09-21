<?php


//Local Server
//$connection=mysql_connect('localhost', 'root', 'root') or die(mysql_error());
//$dbsel=mysql_select_db('francohaley_swa', $connection) or die(mysql_error());


//Live Server
$connection=mysql_connect('francohaley.ipagemysql.com', 'francohaley', 'fullsail') or die(mysql_error());
$dbsel=mysql_select_db('francohaley_swa', $connection) or die(mysql_error());


?>