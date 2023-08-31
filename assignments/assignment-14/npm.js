const fs = require("fs");

class Data {
    read(urlFile) {
        return fs.readFileSync(urlFile, "utf-8");
    }
    parse(content) {
        return content.split("\n");
    }
    parseRow(row) {
        return row.split(",");
    }
    format(urlFile) {
        const content = this.read(urlFile);
        const all = this.parse(content);
        const header = this.parseRow(all[0]);
        const rows = all.slice(1);
        // console.log(rows);
        const formatedData = rows.map((row) => {
            const personArr = this.parseRow(row);
            const personObj = {};
            for (let i = 0; i < header.length; i++) {
                const lablel = header[i];
                const value = personArr[i];
                personObj[lablel] = value;
            }
            return personObj;
        });
        return formatedData;
    }
    countProfession(urlFile) {
        const formatedData = this.format(urlFile);
        const professionCount = formatedData.reduce((count, personObj) => {
            const profession = personObj.Profession;
            if (profession in count) {
                count[profession]++;
            } else {
                count[profession] = 1;
            }
            return count;
        }, {});

        return professionCount;
    }
    countByAgaRange(urlFile) {
        const formatedData = this.format(urlFile);
        const ageRange = formatedData.reduce(
            (acc, personObj) => {
                const age = personObj.Age;
                if (age >= 10 && age <= 20) {
                    acc["10-20"]++;
                }
                if (age >= 21 && age <= 30) {
                    acc["21-30"]++;
                }

                if (age >= 31 && age <= 40) {
                    acc["31-40"]++;
                }
                if (age >= 41 && age <= 50) {
                    acc["41-50"]++;
                }

                if (age >= 51 && age <= 60) {
                    acc["51-60"]++;
                }
                return acc;
            },
            { "10-20": 0, "21-30": 0, "31-40": 0, "41-50": 0, "51-60": 0 }
        );
        return ageRange;
    }
}
const data = new Data();
console.log(data.countProfession("data.csv"));
console.log(data.countByAgaRange("data.csv"));
