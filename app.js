/*accesing sidebar*/

var buttone = document.getElementById('theme');
var sidebar = document.getElementById('sidebar');

buttone.addEventListener('click',function()
{
	if(sidebar.classList.contains('hide'))
	{
		sidebar.classList.add('show');
		sidebar.classList.remove('hide');
	}
	else
	{
		sidebar.classList.add('hide');
		sidebar.classList.remove('show');
	}
});
// 
var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
var collapseList = collapseElementList.map(function (collapseEl) {
  return new bootstrap.Collapse(collapseEl)
})