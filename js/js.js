$(document).ready(function(){
    $(function (){
        var austday=new Date ();
        austday=new Date (austday.getFullYear()+ 1,1 - 1, 26);
        $("#defaultcountdown").countdown({until: austday, format:'odhms'});
    });

    $('.form-control').blur(function () {
        var x = document.forms["myform"]["email"].value;
        var atpos = x.indexOf("@");
        var dotpos = x.lastIndexOf(".");
        if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length){
            $(this).parent().find(".alert.alert-danger").fadeIn(200);
        }
        else{
            $(this).parent().find(".alert.alert-success").fadeIn(200);
        }
    });

    var wow = new WOW({
        mobile:false
    });
    wow.init();

    $('.form-control').blur(function () {
        var x = document.forms["myform2"]["email2"].value;
        var atpos = x.indexOf("@");
        var dotpos = x.lastIndexOf(".");
        if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length){
            $(this).parent().find(".alert.alert-danger").fadeIn(200);
        }
        else{
            $(this).parent().find(".alert.alert-success").fadeIn(200);
        }
    });
});
