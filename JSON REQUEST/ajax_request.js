

function ajax_request(url, content, callback) {
    
    // Inside callback function you have 'ajax_response' with parsed response.
    // On server: $HTTP_RAW_POST_DATA
    
    var request = new XMLHttpRequest();
    
    request.open('POST', url);
    
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    
    var request_body = JSON.stringify(content);
    
    request.onreadystatechange = function() {
        
        if (this.readyState != 4) {
            return;
        }
        
        if (this.status != 200) {
            
            var ajax_response = 'ERROR: ' + this.status;
            return;
        }
        
        var ajax_response = JSON.parse(this.responseText);
        
        callback(ajax_response);
    }
    
    request.send(request_body);
}


