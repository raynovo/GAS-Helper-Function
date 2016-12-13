//~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`
/*
Benefit of this script is:
- Allows you to send the function to arrays of columns and compile them or add them side by side
- You can send as many parameters as you need

+-------+-------+-----------+------+
| name  |  job  |   role    | num  |
+-------+-------+-----------+------+
| bob   | Sales | Primary   | 10.0 |
| sally | IT    | Primary   | -2.0 |
| john  | HR    | Secondary | 15.5 |
+-------+-------+-----------+------+

var name     = source_sheet.getRange("A:A").getValues();
// ["name","bob","sally","john"]
var job      = source_sheet.getRange("B:B").getValues();
// ["job","Sales","IT","HR"]
var num      = source_sheet.getRange("D:D").getValues();
// ["num",10.0,-2.0,15.5]


Useage:
  var copyArray = ColumnTransposer_(name,job,num);
  target_Sheet.getRange(1,1,copyArray.length, copyArray[0].length).setValues(copyArray);
*/

function ColumnTransposer_() {
  var copyArray = [];
  for (var i=0, iL=arguments[0].length; i<iL; i++){
    var copyArrayRow = [];
    for (var a in arguments)
    {
      Logger.log(arguments[a][i].toString());
      copyArrayRow.push(arguments[a][i].toString());
    }
    copyArray.push(copyArrayRow);
  }
  return copyArray;
}