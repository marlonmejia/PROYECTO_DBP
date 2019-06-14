function getData(){
        $('#loading').show();
        var username = $('#username').val();
        var password = $('#password').val();
        var message = JSON.stringify({
                "username": username,
                "password": password
            });

        $.ajax({
            url:'/authenticate',
            type:'POST',
            contentType: 'application/json',
            data : message,
            dataType:'json',
            success: function(response){
                //$('#action').html(response['statusText']);
            },
            error: function(response){
                //alert(JSON.stringify(response));
            }
        });
    }