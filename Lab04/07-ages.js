'use strict';

const ages = (persons) => {
    const result = {};
    for (const curPerson in persons) {
        result[curPerson] = persons[curPerson].died - persons[curPerson].born;
    }
    return result;
};

const persons = {
    lenin: { born: 1870, died: 1924 },
    mao: { born: 1893, died: 1976 },
    gandhi: { born: 1869, died: 1948 },
    hirohito: { born: 1901, died: 1989 },
 }
 console.log(JSON.stringify(ages(persons)));