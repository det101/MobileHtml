/**
 * Created by luxiaolong on 2015/12/28.
 */
$(document).ready(function () {
    alert("ttttt")
    $("div.item").live("click",function () {
        appImg();
    });
});

function appImg()
{
    var divs=document.createElement("div");                    // 以 HTML 创建新元素
    divs.className = "item";
    var img = document.createElement("img");
    img.src = "http://u0.qiyipic.com/show/20151218/af/afc96d16b3765_180_101.jpg";
    var content = document.createElement("div");
    content.className="desc";
    content.innerHTML = "在此处添加对图像的描述";
    divs.appendChild(img);
    divs.appendChild(content);

    $("div#list").append(divs);

}