"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.curl = exports.getAllIndexes = void 0;
function getAllIndexes(arr, val) {
    var indexes = [];
    arr.forEach((v, i) => {
        if (v.includes(val)) {
            indexes.push(i);
        }
    });
    return indexes;
}
exports.getAllIndexes = getAllIndexes;
function curl(start, end, distribute) {
    for (let k = 0; k < start.length; k++) {
        let s = start[k];
        let e = end[k];
        let str = "";
        for (let p = s; p <= e; p++) {
            str += distribute[p] + (p !== e ? ";" : "");
            distribute[p] = "";
        }
        distribute[s] = str;
        str = "";
    }
    return (distribute = distribute.filter((v) => v !== ""));
}
exports.curl = curl;
//# sourceMappingURL=ParserMethod.js.map