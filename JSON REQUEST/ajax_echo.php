<?php
    echo $HTTP_RAW_POST_DATA;
    
    $log_file = fopen('log.txt', 'a+');
    
    $log_message = "Connected: " . date("d:m:Y G:i:s") . " | Message: " . $HTTP_RAW_POST_DATA;
    
    $log_message .= "\r\n";
    
    fwrite($log_file, $log_message);
    
    fclose($log_file);
?>