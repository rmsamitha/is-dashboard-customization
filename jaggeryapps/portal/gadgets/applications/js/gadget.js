function drawPage(appUrlsJson) {
    alert("in draw page:"+appUrlsJson);
    console.log(json);

    var userTenant = userName.substring(userName.lastIndexOf("@") + 1);
    var bannerUrl = "https://abc.banner."+userTenant;
    var microsoftDynamicsUrl = "https://abc.dynamics."+userTenant;
    var canvasUrl = "https://abc.canvas."+userTenant;

    var topContent = "<div>\n" +
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