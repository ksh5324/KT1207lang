"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.variableIncludes = exports.curl = exports.getAllIndexes = void 0;
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
const variableIncludes = (id, variable) => {
    const bool = variable.find((v) => v.id === id);
    return bool ? false : true;
};
exports.variableIncludes = variableIncludes;
//# sourceMappingURL=ParserMethod.js.map