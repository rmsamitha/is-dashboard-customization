function drawPage(appUrls) {
    //alert("came to drawpage func:"+appUrls);
    var json = JSON.parse(appUrls);
    //alert("banner link:"+json.external_user.banner);
    console.log(json);

    //var userTenant = userName.substring(userName.lastIndexOf("@") + 1);
    var bannerUrl = json.external_user.banner;
    var microsoftDynamicsUrl = json.external_user.dynamics;
    var canvasUrl = json.external_user.canvas;

    var topContent = "<div>" +
                        "<ul style='text-align: left'>" +
                            "<li>"+
                                "<a href='"+bannerUrl+"' target='_blank'>Banner</a>" +
                            "</li>" +

                            "<li>"+
                            "<a href='"+microsoftDynamicsUrl+"' target='_blank'>Microsoft Dynamics</a>" +
                            "</li>" +

                            "<li>"+
                            "<a href='"+canvasUrl+"' target='_blank'>Canvas</a>" +
                            "</li>" +

                        "</ul>"
                     "</div>";
    output = topContent;

    $("#gadgetBody").empty();
    $("#gadgetBody").append(output);
}