function getData(){
        $("#carga").attr("hidden",false);
        $('#action').html("Authenticating...");
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
                //alert(JSON.stringify(response));
                $("#carga").attr("hidden",true);
                $('#action').html(response['statusText']);
            },
            error: function(response){
                //alert(JSON.stringify(response));
                $("#carga").attr("hidden",true);
                $('#action').html(response['statusText']);
            }
        });
    }
