/*
function onOpen() { 
  var spreadsheet = SpreadsheetApp.getActive();
  var menuItems = [
    {name: 'Ordenar fechas', functionName: 'ordenarFechas_'},
  ];
  spreadsheet.addMenu('TONALLI', menuItems);
}
*/
    
function quote() {
  
  //INICIALIZACIÓN DE HOJA E IMPORTACIÓN DE DATOS
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0];

  var row = sheet.getLastRow();
  Logger.log(row);
  var range = sheet.getRange(row,1,1,13);
  var values = range.getValues();
  Logger.log(values);
  
  //CLASIFICACIÓN DE DATOS
  //Consumos bimestrales
  var p1 = values[0][4];
  var p2 = values[0][5];
  var p3 = values[0][6];
  var p4 = values[0][7];
  var p5 = values[0][8];
  var p6 = values[0][9];
  Logger.log(p1);
  Logger.log(p2);
  Logger.log(p3);
  Logger.log(p4);
  Logger.log(p5);
  Logger.log(p6);
  //Fecha de inicio de periodo facturado
  date = new Date(values[0][3]);
  var year = date.getYear();
  Logger.log(year);
  var month = date.getMonth() +1;
  Logger.log(month);
  var day = date.getDate();
  Logger.log(day);
  
  //Ordenamiento en consumos mensuales
  var ene,feb,mar,abr,may,jun,jul,ago,sep,oct,nov,dic;
  switch(month) {
    case 1:
      ene = (p1/(31+28))*(31-day) + (p2/(30+31))*day;
      feb = (p1/(31+28))*(28);
      
      mar = (p6/(31+30))*(31-day) + (p1/(31+28))*day;
      abr = (p6/(31+30))*(30);
      
      may = (p5/(31+30))*(31-day) + (p6/(31+30))*day;
      jun = (p5/(31+30))*(30);
      
      jul = (p4/(31+31))*(31-day) + (p5/(31+30))*day;
      ago = (p4/(31+31))*(31);
      
      sep = (p3/(30+31))*(30-day) + (p4/(31+31))*day;
      oct = (p3/(30+31))*(31);
      
      nov = (p2/(30+31))*(30-day) + (p3/(30+31))*day;
      dic = (p2/(30+31))*(31);
      break; 
    case 2:
      feb = (p1/(28+31))*(28-day) + (p2/(31+31))*day;
      mar = (p1/(28+31))*(31);
      
      abr = (p6/(30+31))*(30-day) + (p1/(28+31))*day;
      may = (p6/(30+31))*(31);
      
      jun = (p5/(30+31))*(30-day) + (p6/(30+31))*day;
      jul = (p5/(30+31))*(31);
      
      ago = (p4/(31+30))*(31-day) + (p5/(30+31))*day;
      sep = (p4/(31+30))*(30);
      
      oct = (p3/(31+30))*(31-day) + (p4/(31+30))*day;
      nov = (p3/(31+30))*(30);
      
      dic = (p2/(31+31))*(31-day) + (p3/(31+30))*day;
      ene = (p2/(31+31))*(31);
      break; 
    case 3:
      mar = (p1/(31+30))*(31-day) + (p2/(31+28))*day;
      abr = (p1/(31+30))*(30);
      
      may = (p6/(31+30))*(31-day) + (p1/(31+30))*day;
      jun = (p6/(31+30))*(30);
      
      jul = (p5/(31+31))*(31-day) + (p6/(31+30))*day;
      ago = (p5/(31+31))*(31);
      
      sep = (p4/(30+31))*(30-day) + (p5/(31+31))*day;
      oct = (p4/(30+31))*(31);
      
      nov = (p3/(30+31))*(30-day) + (p4/(30+31))*day;
      dic = (p3/(30+31))*(31);
      
      ene = (p2/(31+28))*(31-day) + (p3/(30+31))*day;
      feb = (p2/(31+28))*(28);
      break; 
    case 4:
      abr = (p1/(30+31))*(30-day) + (p2/(28+31))*day;
      may = (p1/(30+31))*(31);
      
      jun = (p6/(30+31))*(30-day) + (p1/(30+31))*day;
      jul = (p6/(30+31))*(31);
      
      ago = (p5/(31+30))*(31-day) + (p6/(30+31))*day;
      sep = (p5/(31+30))*(30);
      
      oct = (p4/(31+30))*(31-day) + (p5/(31+30))*day;
      nov = (p4/(31+30))*(30);
      
      dic = (p3/(31+31))*(31-day) + (p4/(31+30))*day;
      ene = (p3/(31+31))*(31);
      
      feb = (p2/(28+31))*(28-day) + (p3/(31+31))*day;
      mar = (p2/(28+31))*(31);
      break; 
    case 5:
      may = (p1/(31+30))*(31-day) + (p2/(31+30))*day;
      jun = (p1/(31+30))*(30);
      
      jul = (p6/(31+31))*(31-day) + (p1/(31+30))*day;
      ago = (p6/(31+31))*(31);
      
      sep = (p5/(30+31))*(30-day) + (p6/(31+31))*day;
      oct = (p5/(30+31))*(31);
      
      nov = (p4/(30+31))*(30-day) + (p5/(30+31))*day;
      dic = (p4/(30+31))*(31);
      
      ene = (p3/(31+28))*(31-day) + (p4/(30+31))*day;
      feb = (p3/(31+28))*(28);
      
      mar = (p2/(31+30))*(31-day) + (p3/(31+28))*day;
      abr = (p2/(31+30))*(30);
      break;    
    case 6:
      jun = (p1/(30+31))*(30-day) + (p2/(30+31))*day;
      jul = (p1/(30+31))*(31);
      
      ago = (p6/(31+30))*(31-day) + (p1/(30+31))*day;
      sep = (p6/(31+30))*(30);
      
      oct = (p5/(31+30))*(31-day) + (p6/(31+30))*day;
      nov = (p5/(31+30))*(30);
      
      dic = (p4/(31+31))*(31-day) + (p5/(31+30))*day;
      ene = (p4/(31+31))*(31);
      
      feb = (p3/(28+31))*(28-day) + (p4/(31+31))*day;
      mar = (p3/(28+31))*(31);
      
      abr = (p2/(30+31))*(30-day) + (p3/(28+31))*day;
      may = (p2/(30+31))*(31);
      break; 
    case 7:
      jul = (p1/(31+31))*(31-day) + (p2/(31+30))*day;
      ago = (p1/(31+31))*(31);
      
      sep = (p6/(30+31))*(30-day) + (p1/(31+31))*day;
      oct = (p6/(30+31))*(31);
      
      nov = (p5/(30+31))*(30-day) + (p6/(30+31))*day;
      dic = (p5/(30+31))*(31);
      
      ene = (p4/(31+28))*(31-day) + (p5/(30+31))*day;
      feb = (p4/(31+28))*(28);
      
      mar = (p3/(31+30))*(31-day) + (p4/(31+28))*day;
      abr = (p3/(31+30))*(30);
      
      may = (p2/(31+30))*(31-day) + (p3/(31+30))*day;
      jun = (p2/(31+30))*(30);
      break; 
    case 8:
      ago = (p1/(31+30))*(31-day) + (p2/(30+31))*day;
      sep = (p1/(31+30))*(30);
      
      oct = (p6/(31+30))*(31-day) + (p1/(31+30))*day;
      nov = (p6/(31+30))*(30);
      
      dic = (p5/(31+31))*(31-day) + (p6/(31+30))*day;
      ene = (p5/(31+31))*(31);
      
      feb = (p4/(28+31))*(28-day) + (p5/(31+31))*day;
      mar = (p4/(28+31))*(31);
      
      abr = (p3/(30+31))*(30-day) + (p4/(28+31))*day;
      may = (p3/(30+31))*(31);
      
      jun = (p2/(30+31))*(30-day) + (p3/(30+31))*day;
      jul = (p2/(30+31))*(31);
      break; 
    case 9:
      sep = (p1/(30+31))*(30-day) + (p2/(31+31))*day;
      oct = (p1/(30+31))*(31);
      
      nov = (p6/(30+31))*(30-day) + (p1/(30+31))*day;
      dic = (p6/(30+31))*(31);
      
      ene = (p5/(31+28))*(31-day) + (p6/(30+31))*day;
      feb = (p5/(31+28))*(28);
      
      mar = (p4/(31+30))*(31-day) + (p5/(31+28))*day;
      abr = (p4/(31+30))*(30);
      
      may = (p3/(31+30))*(31-day) + (p4/(31+30))*day;
      jun = (p3/(31+30))*(30);
      
      jul = (p2/(31+31))*(31-day) + (p3/(31+30))*day;
      ago = (p2/(31+31))*(31);
      break; 
    case 10:
      oct = (p1/(31+30))*(31-day) + (p2/(31+30))*day;
      nov = (p1/(31+30))*(30);
      
      dic = (p6/(31+31))*(31-day) + (p1/(31+30))*day;
      ene = (p6/(31+31))*(31);
      
      feb = (p5/(28+31))*(28-day) + (p6/(31+31))*day;
      mar = (p5/(28+31))*(31);
      
      abr = (p4/(30+31))*(30-day) + (p5/(28+31))*day;
      may = (p4/(30+31))*(31);
      
      jun = (p3/(30+31))*(30-day) + (p4/(30+31))*day;
      jul = (p3/(30+31))*(31);
      
      ago = (p2/(31+30))*(31-day) + (p3/(30+31))*day;
      sep = (p2/(31+30))*(30);
      break; 
    case 11:
      nov = (p1/(30+31))*(30-day) + (p2/(30+31))*day;
      dic = (p1/(30+31))*(31);
      
      ene = (p6/(31+28))*(31-day) + (p1/(30+31))*day;
      feb = (p6/(31+28))*(28);
      
      mar = (p5/(31+30))*(31-day) + (p6/(31+28))*day;
      abr = (p5/(31+30))*(30);
      
      may = (p4/(31+30))*(31-day) + (p5/(31+30))*day;
      jun = (p4/(31+30))*(30);
      
      jul = (p3/(31+31))*(31-day) + (p4/(31+30))*day;
      ago = (p3/(31+31))*(31);
      
      sep = (p2/(30+31))*(30-day) + (p3/(31+31))*day;
      oct = (p2/(30+31))*(31);
      break; 
    case 12:
      dic = (p1/(31+31))*(31-day) + (p2/(31+30))*day;
      ene = (p1/(31+31))*(31);
      
      feb = (p6/(28+31))*(28-day) + (p1/(31+31))*day;
      mar = (p6/(28+31))*(31);
      
      abr = (p5/(30+31))*(30-day) + (p6/(28+31))*day;
      may = (p5/(30+31))*(31);
      
      jun = (p4/(30+31))*(30-day) + (p5/(30+31))*day;
      jul = (p4/(30+31))*(31);
      
      ago = (p3/(31+30))*(31-day) + (p4/(30+31))*day;
      sep = (p3/(31+30))*(30);
      
      oct = (p2/(31+30))*(31-day) + (p3/(31+30))*day;
      nov = (p2/(31+30))*(30);
      break; 
    default:
      break; 
  }
  Logger.log(ene);
  Logger.log(feb);
  Logger.log(mar);
  Logger.log(abr);
  Logger.log(may);
  Logger.log(jun);
  Logger.log(jul);
  Logger.log(ago);
  Logger.log(sep);
  Logger.log(oct);
  Logger.log(nov);
  Logger.log(dic);

  var PD1 = ene/31;
  var PD2 = feb/28;
  var PD3 = mar/31;
  var PD4 = abr/30;
  var PD5 = may/31;
  var PD6 = jun/30;
  var PD7 = jul/31;
  var PD8 = ago/31;
  var PD9 = sep/30;
  var PD10 = oct/31;
  var PD11 = nov/30;
  var PD12 = dic/31;
  var PDmax = 0;
  
  Logger.log(PD1);
  Logger.log(PD2);
  Logger.log(PD3);
  Logger.log(PD4);
  Logger.log(PD5);
  Logger.log(PD6);
  Logger.log(PD7);
  Logger.log(PD8);
  Logger.log(PD9);
  Logger.log(PD10);
  Logger.log(PD11);
  Logger.log(PD12);
  Logger.log(PDmax);
  

  PDmax = Math.max(PD1,PD2);
  PDmax = Math.max(PDmax,PD3);
  PDmax = Math.max(PDmax,PD4);
  PDmax = Math.max(PDmax,PD5);
  PDmax = Math.max(PDmax,PD6);
  PDmax = Math.max(PDmax,PD7);
  PDmax = Math.max(PDmax,PD8);
  PDmax = Math.max(PDmax,PD9);
  PDmax = Math.max(PDmax,PD10);
  PDmax = Math.max(PDmax,PD11);
  PDmax = Math.max(PDmax,PD12);
  Logger.log(PDmax);
  
  //OBTENCION DE VALORES DE IRRADIACIÓN  
  var IR1 = 5.003548387;
  var IR2 = 5.772222222;
  var IR3 = 6.595483871;
  var IR4 = 6.714;
  var IR5 = 6.467741935;
  var IR6 = 5.284333333;
  var IR7 = 5.263548387;
  var IR8 = 5.962903226;
  var IR9 = 5.022758621;
  var IR10 = 4.628064516;
  var IR11 = 4.680666667;
  var IR12 = 4.708387097;
  
  //FACTORES DE ENERGIA E INDENTIFICACIÓN DEL MES DESFAVORABLE
  var FE1 = IR1/PD1;
  var FE2 = IR2/PD2;
  var FE3 = IR3/PD3;
  var FE4 = IR4/PD4;
  var FE5 = IR5/PD5;
  var FE6 = IR6/PD6;
  var FE7 = IR7/PD7;
  var FE8 = IR8/PD8;
  var FE9 = IR9/PD9;
  var FE10 = IR10/PD10;
  var FE11 = IR11/PD11;
  var FE12 = IR12/PD12;
  var FEmin = 0;
  
  FEmin = Math.min(FE1,FE2);
  FEmin = Math.min(FEmin,FE3);
  FEmin = Math.min(FEmin,FE4);
  FEmin = Math.min(FEmin,FE5);
  FEmin = Math.min(FEmin,FE6);
  FEmin = Math.min(FEmin,FE7);
  FEmin = Math.min(FEmin,FE8);
  FEmin = Math.min(FEmin,FE9);
  FEmin = Math.min(FEmin,FE10);
  FEmin = Math.min(FEmin,FE11);
  FEmin = Math.min(FEmin,FE12);
  Logger.log(FEmin);
  
  //DETERMINACIÓN DE ENERGÍA DE INSTALACIÓN NECESARIA
  
  
}
