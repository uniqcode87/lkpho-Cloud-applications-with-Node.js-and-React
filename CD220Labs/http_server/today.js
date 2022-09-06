module.exports.getDate = function getDate() {
    var aestTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Jakarta"});
    return new Date(aestTime);
}
