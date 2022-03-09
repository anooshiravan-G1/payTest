//appearance
$(document).ready(function(){
    $(".nav-item.dropdown").click(function(){
        $(".dropdown-menu").slideToggle("slow");
    })
})




// Data
function submitLoginFrm(){
    var formData = JSON.stringify($("#logForm").serializeArray());
    console.log(formData);
}