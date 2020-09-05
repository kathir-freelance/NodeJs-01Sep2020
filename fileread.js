var fs=require('fs');

// flags - r, r+,rs,rs+,w,wx,wx+,a
//r+ -> open file for read + write, file not thr excep occurs
//rs - read file in sync mode
//rs+ -> open file for read + write in sync mode, file not thr excep occurs
//w - open for write, it will create if file not found,if existing - then its truncated
//wx- same as w, but fails if the path already exists
//a= append, file created if not avbl


fs.open('a.txt','w',function(err,data){
if(err)
	return console.log(err);
console.log(data);	
});

