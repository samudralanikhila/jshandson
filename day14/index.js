$('button').click(function(){
    $("p").hide();
    $(this).toggle();
});

$('button').click(function(){
    $.ajax({
        url:"https://jsonplaceholder.typicode.com/todos/5",
        type: "GET",
        success:function(data){
            console.log(data);
            document.getElementsByTagName("h2")[0].innerText = data.title;
        }
    })
})