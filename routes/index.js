const sql= require("mssql/msnodesqlv8");
var config={
  server : "OPENTECH006\SQLEXPRESS",
  database: "Ticketing",
  driver: "msnodesqlv8",
  Option: {
    trustedConnection:true
  }

}
sql.connect(config,function(err){
  var request = new sql.Request();
  request.query("select * from users",function(err, records){
    const result = err ?  console.log(err): console.log(records);;
    
  })
})