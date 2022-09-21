
$(document).ready(function() {
    // -------------------------------------------------------------------------------------------------  \\
    // Objects
    // -------------------------------------------------------------------------------------------------  \\

    // Displays business' name
    $.ajax({
        url: 'https://cutit01.000webhostapp.com/view/api/api_buss_customer.php',
        datatype:'json',
        success: function (data)
        {
            var response = data.data;
            document.getElementById('buss_name').innerHTML = response.businessName;
        }
    })



    // -------------------------------------------------------------------------------------------------  \\
    //  Page Sign Out
    // -------------------------------------------------------------------------------------------------  \\
    $("#buss_sign_out").click(function(e) 
    {
        e.preventDefault();
        $.ajax({
            url:'https://cutit01.000webhostapp.com/view/api/api_sign_out.php',
            dataType: 'json',
            type:'POST',
            data: {'bussCustomerSignOut':'signedOut'},
            success: function (data)
            {
                console.log(data.response);
                alert("Sign Out Successful!");
                window.location.href="../v_authentication/log_in.html";
            },
            error: function () 
            {
                console.log("error");
            }
        }) 

    });








});