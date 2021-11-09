var inputAll = document.getElementsByTagName("INPUT"); //获取页面所有INPUT标签
valueOld = prompt("请输入需要替换的数据:");
valueNew = prompt("请输入新的数据:");


for ( var i=0; i<inputAll.length; i++ )  
{ 
    if (inputAll[i].value===valueOld)
	{
		let rua = document.getElementsByTagName("INPUT")[i];
		rua.value = valueNew;
		let event = new Event('input', { bubbles: true });
		let tracker = rua._valueTracker;
		if (tracker) {
		  tracker.setValue('');
		}
		rua.dispatchEvent(event);
    }
	
	var count=i+1
	console.log(count +'/'+ inputAll.length);
}
