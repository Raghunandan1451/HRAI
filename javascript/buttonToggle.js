const add = document.querySelector('.add');
const edit = document.querySelector('.edit');
const delet = document.querySelector('.delete');
const cross = document.querySelector('.cross');
const crosse = document.querySelector('.crosse');
const crossd = document.querySelector('.crossd');
const canBtn = document.querySelector('.btnCancel');
const canLeft = document.querySelector('.btnLeft');

const modalAdd = document.querySelector('.modalAdd');
const modalEdit = document.querySelector('.modalEdit');
const modalDelete = document.querySelector('.modalDelete');

add.addEventListener('click', () => {
	modalAdd.style.display = 'block';
});

edit.addEventListener('click', () => {
	modalEdit.style.display = 'block';
});

delet.addEventListener('click', () => {
	modalDelete.style.display = 'block';
});

cross.addEventListener('click', () => {
	if (modalAdd.style.display === 'block') {
		modalAdd.style.display = 'none';
	}
});
canLeft.addEventListener('click', () => {
	if (modalAdd.style.display === 'block') {
		modalAdd.style.display = 'none';
	}
});

crosse.addEventListener('click', () => {
	if (modalEdit.style.display === 'block') {
		modalEdit.style.display = 'none';
	}
});

crossd.addEventListener('click', () => {
	if (modalDelete.style.display === 'block') {
		modalDelete.style.display = 'none';
	}
});

canBtn.addEventListener('click', () => {
	if (modalDelete.style.display === 'block') {
		modalDelete.style.display = 'none';
	}
});
