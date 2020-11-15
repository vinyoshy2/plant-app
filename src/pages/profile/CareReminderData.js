import fs from "fs";

export const cr_columns = [
  { key: 'project',
    name: 'Project',
    editable: true
  },
  { key: 'plant',
    name: 'Plant',
    editable: true
  },
  { key: 'water',
    name: 'Water (every N days)',
    editable: true
  },
  { key: 'fertilize',
    name: 'Fertilize  (every N days)',
    editable: true
  },
  { key: 'dust',
    name: 'Dust  (every N days)',
    editable: true
  }
]

export const cr_dataSource = [
  { project: 'Bedroom Bonsai', plant: 'Bonsai', water: 2, fertilize: 7, dust: 30},
  { project: 'Office Desk', plant: 'Bonsai', water: 2, fertilize: 7, dust: 30},
  { project: 'Office Desk', plant: 'Bonsai', water: 2, fertilize: 7, dust: 30},
  { project: 'Kitchen Sill', plant: 'Sill', water: 2, fertilize: 7, dust: 30},
];

export function readSettings() {
  // Codes refers https://stackoverflow.com/questions/28543821/convert-csv-lines-into-javascript-objects and
  //              https://nodejs.dev/learn/reading-files-with-nodejs
  // TODO: not working now.
  fs.readFile('./care_setting.csv', (err,data) => {
    if (err) {
      return console.log(err);
    }
    // Split data into lines and separate headers from actual data
    // using Array spread operator
    const [headerLine, ...lines] = data.split('\n');

    // Use common line separator, which parses each line as the contents of a JSON array
    const parseLine = (line) => JSON.parse(`[${line}]`);

    // Split headers line into an array
    const headers = parseLine(headerLine);

    // Create objects from parsing lines
    // There will be as much objects as lines
    return lines.map((line, index) =>
      // Split line with JSON
      parseLine(line).reduce(
        // Reduce values array into an object like: { [header]: value }
        (object, value, index) => ({...object, [headers[index]]: value,}), {})
    );
  })
}
