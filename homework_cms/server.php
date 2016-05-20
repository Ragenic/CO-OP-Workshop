<?php
    for ($i = 0; $i < 10; $i++) {
        sleep(1);
    }
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Loading...</title>
    </head>
    <body style="background-color: black;">
        <script type="text/javascript">
          function redirect() {
              location = "index.php";
          }
          var redirect_timeout = setTimeout(redirect, 4);
        </script>
    </body>
</html>