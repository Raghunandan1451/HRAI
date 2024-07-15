import openpyxl
import os
import json
from datetime import datetime


def xlsx_to_json(xlsx_file):

    wb = openpyxl.load_workbook(xlsx_file)
    sheet = wb.active
    data = []

    for row in sheet.iter_rows(values_only=True):
        data.append(row)

    headers = data[0]
    json_data = {"invoices": []}

    for row in data[1:]:
        formated_row = {}
        for idx, cell_value in enumerate(row):
            if isinstance(cell_value, datetime):
                formated_row[headers[idx]] = cell_value.strftime('%Y-%m-%d')
            else:
                formated_row[headers[idx]] = cell_value

        json_data["invoices"].append(formated_row)

    return json_data


def save_json(json_data, output_path):
    with open(output_path, 'w') as f:
        json.dump(json_data, f, indent=4)


if __name__ == '__main__':
    script_dir = os.path.dirname(__file__)

    xlsx_file = os.path.join(script_dir, 'invoices.xlsx')

    if not os.path.exists(xlsx_file):
        raise FileNotFoundError(f"File '{xlsx_file}' not found.")

    json_data = xlsx_to_json(xlsx_file)

    output_path = os.path.join(script_dir, 'invoices.json')

    save_json(json_data, output_path)
