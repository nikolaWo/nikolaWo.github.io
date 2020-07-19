document.writeln("<script src=\"https:\/\/s13.cnzz.com\/z_stat.php?id=1264340894&web_id=1264340894\" language=\"JavaScript\"><\/script>");
document.write('<script type="text/javascript" src="https://js.users.51.la/2051902.js"></script>');
function $(objname){return document.getElementById(objname);}
function runCode(objname) {
    var winname = window.open('', "_blank", '');
	var obj = $(objname);
    winname.document.open('text/html', 'replace');
    winname.document.write(obj.value);
    winname.document.close();
}
function saveCode(objname){
    var winname = window.open('', '_blank', 'top=10000');
    winname.document.open('text/html', 'replace');
	var obj = $(objname);
    winname.document.write(obj.value);
    winname.document.execCommand('saveas','','code.htm');
    winname.close();
}
function oCopy(objname){
    var obj = $(objname);
    obj.select();
    js=obj.createTextRange();
    js.execCommand("Copy");
    alert("Դ���ز�����ʾ�����븴�Ƴɹ���");
}
function goDown(idname,type){
    window.location.href ='/download.php?type='+type+'&softid='+idname;
    //window.location.href ='/code/download/'+idname+'.shtml';
}
function goDownsucai(idname,type){
    window.location.href ='/sucai/download.php?type='+type+'&id='+idname;
    //window.location.href ='/code/download/'+idname+'.shtml';
}