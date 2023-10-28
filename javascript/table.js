const table_body = document.querySelector('tbody');
const btn_prev = document.querySelector('#prevPage');
const btn_next = document.querySelector('#nextPage');

let current_page = 1;
const max_rows = 5;

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
			'cust_name',
			'cust_id',
			'inv_id',
			'inv_amt',
			'due_date',
			'--',
			'Test Text',
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

const num_pages = () => {
	return Math.ceil(tempCont.length / max_rows);
};

const prev_page = () => {
	if (current_page > 1) {
		current_page--;
		change_page(current_page);
	}
};

const next_page = () => {
	if (current_page < num_pages()) {
		current_page++;
		change_page(current_page);
	}
};

const change_page = (page) => {
	if (page < 1) {
		page = 1;
	}
	if (page > jsp_num_pages()) {
		page = jsp_num_pages();
	}

	// table_body.innerHTML = '';

	// for (
	// 	let i = (page - 1) * max_rows;
	// 	i < page * max_rows && i < tempCont.length;
	// 	i++
	// ) {
	// 	table_body.innerHTML += template;
	// }

	btn_prev.style.backgroundColor = page === 1 ? '#00000069' : '#14AFF1';
	btn_next.style.backgroundColor =
		page === num_pages() ? '#00000069' : '#14AFF1';
};

tempCont.forEach((key, value) => {
	console.log(key, value);
	table_body.innerHTML += template;
});
// for (let i = 0; i < tempCont; i++) {
// 	table_body.innerHTML += template;
// }
