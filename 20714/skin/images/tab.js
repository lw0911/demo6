function tabname1(titlename,tabname,tabNum,tabcishu,ClassNameBlock,ClassNameNone)   
{  
	tabsBengin(titlename,tabname,tabNum,tabcishu,ClassNameBlock,ClassNameNone);   
}   


function tabsBengin(titlename,tabname,tabNum,tabcishu,ClassNameBlock,ClassNameNone)   
{   
	
	
	for (var i = 1; i <= tabcishu; i++)   
	{   
		if(!document.getElementById(tabname+i)) break;
		document.getElementById(tabname + i).style.display = (i == tabNum) ? 'block' : 'none';   
		document.getElementById(titlename+ i).className = (i == tabNum) ? ClassNameBlock : ClassNameNone;   
	}   
} 


