var allpre = document.getElementsByTagName("pre");
for(i = 0; i < allpre.length; i++)
{
  var onepre = document.getElementsByTagName("pre")[i];
  var mycode = document.getElementsByTagName("pre")[i].innerHTML;
  onepre.innerHTML = '<code id="mycode">'+mycode+'</code>';
}
hljs.initHighlightingOnLoad();
console.log(2)
