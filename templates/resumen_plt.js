function loadResume(id){
    $.ajax({
        url:'/resume/'+id,
        type:'GET',
        contentType: 'application/json',
        dataType:'json',
        success: function(response){
            $('#resume_name').html(response.title);
            $('#date_time').append(response.sent_on);
            $('#content').append(response.content);
        },
        error: function(response){
            alert(JSON.stringify(response));
        }
    });
}
