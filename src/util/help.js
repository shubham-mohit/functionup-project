

const a = new Date()
const printDate = ()=>{console.log(a.getDate())}

const printmonth = ()=>{console.log(a.getMonth())}

const batchInfo = ()=>{console.log("Technetium, W5D3, the topic for today is Nodejs module system"
)}

module.exports = {printDate, printmonth , batchInfo}
