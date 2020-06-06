$(document).ready(function(){


    let prenom='Delphine';

$('.names').on('click', function(){
    let id=$(this).attr('id');
    data={
        id:id,
        prenom:prenom,
    }
    $.ajax({
        url: 'ajaxhome',
        async: true,
        dataType: 'json',
        type: 'POST',
        data: {dataJs : data},
        success: function(data, status){
            if(data)
            {
                $('#'+id).text(prenom)
            }
        },
        error: function (xhr, textStatus, errorThrown) {
            console.log(xhr, textStatus, errorThrown)
          },
    })
})



})