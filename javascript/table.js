const table_body = document.querySelector('#tableBody');
const btn_prev = document.querySelector('#prevPage');
const btn_next = document.querySelector('#nextPage');

let current_page = 1;
const max_rows = 10;

let tempCont = [
	{
		json_cont: [
			'cust_name',
			'cust_id',
			'inv_id',
			'inv_amt',
			'due_date',
			'--',
			'Test Text',
		],
	},
	{
		json_cont: [
			'cust_name1',
			'cust_id1',
			'inv_id1',
			'inv_amt1',
			'due_date1',
			'--1',
			'Test Text1',
		],
	},
	{
		json_cont: [
			'cust_name2',
			'cust_id2',
			'inv_id2',
			'inv_amt2',
			'due_date2',
			'--2',
			'Test Text2',
		],
	},
	{
		json_cont: [
			'cust_name3',
			'cust_id3',
			'inv_id3',
			'inv_amt3',
			'due_date3',
			'--3',
			'Test Text3',
		],
	},
	{
		json_cont: [
			'cust_name4',
			'cust_id4',
			'inv_id4',
			'inv_amt4',
			'due_date4',
			'--4',
			'Test Text4',
		],
	},
	{
		json_cont: [
			'cust_name5',
			'cust_id5',
			'inv_id5',
			'inv_amt5',
			'due_date5',
			'--5',
			'Test Text5',
		],
	},
	{
		json_cont: [
			'cust_name6',
			'cust_id6',
			'inv_id6',
			'inv_amt6',
			'due_date6',
			'--6',
			'Test Text6',
		],
	},
	{
		json_cont: [
			'cust_name7',
			'cust_id7',
			'inv_id7',
			'inv_amt7',
			'due_date7',
			'--7',
			'Test Text7',
		],
	},
	{
		json_cont: [
			'cust_name8',
			'cust_id8',
			'inv_id8',
			'inv_amt8',
			'due_date8',
			'--8',
			'Test Text8',
		],
	},
	{
		json_cont: [
			'cust_name9',
			'cust_id9',
			'inv_id9',
			'inv_amt9',
			'due_date9',
			'--9',
			'Test Text9',
		],
	},
];

const template = `<tr class="table_content">
					<td class="checkbox">
						<input class="check" type="checkbox" name="mark" id="mark">
					</td>
					<td class="cust_name_cont">
						${tempCont[0].json_cont[0]}
					</td>
					<td class="cust_id_cont">
						${tempCont[0].json_cont[1]}
					</td>
					<td class="inv_id_cont">
						${tempCont[0].json_cont[2]}
					</td>
					<td class="inv_amt_cont">
						${tempCont[0].json_cont[3]}
					</td>
					<td class="due_date_cont">
						${tempCont[0].json_cont[4]}
					</td>
					<td class="pred_date_cont">
						${tempCont[0].json_cont[5]}
					</td>
					<td class="notes_cont">
						${tempCont[0].json_cont[6]}
					</td>
				</tr>`;

const numPage = () => {
	return Math.ceil(tempCont.length / max_rows);
};

const prevPage = () => {
	if (current_page > 1) {
		current_page--;
		changePage(current_page);
	}
};

const nextPage = () => {
	if (current_page < numPage()) {
		current_page++;
		changePage(current_page);
	}
};

const changePage = (page) => {
    
	if (page < 1) page = 1;
	if (page > numPage()) page = numPage();


	table_body.innerHTML = ""

	for (var i = (page-1) * max_rows; i < (page * max_rows) && i < tempCont.length; i++) {
		console.log(i);
        table_body.innerHTML += `<tr class="table_content">
					<td class="checkbox">
						<input class="check" type="checkbox" name="mark" id="mark">
					</td>
					<td class="cust_name_cont">
						${tempCont[i].json_cont[0]}
					</td>
					<td class="cust_id_cont">
						${tempCont[i].json_cont[1]}
					</td>
					<td class="inv_id_cont">
						${tempCont[i].json_cont[2]}
					</td>
					<td class="inv_amt_cont">
						${tempCont[i].json_cont[3]}
					</td>
					<td class="due_date_cont">
						${tempCont[i].json_cont[4]}
					</td>
					<td class="pred_date_cont">
						${tempCont[i].json_cont[5]}
					</td>
					<td class="notes_cont">
						${tempCont[i].json_cont[6]}
					</td>
				</tr>`
    }

	btn_prev.style.backgroundColor = page === 1 ? '#00000069' : '#14AFF1';
	btn_next.style.backgroundColor = page === numPage() ? '#00000069' : '#14AFF1';
};

window.onload = function() {
    changePage(1);
};