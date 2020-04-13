import { getMonthlyIrradiation } from "./Irradiation";

let moment = require("moment");
moment().format();

const getInfo = formJSON => {
  formJSON = sanitize(formJSON);
  return quote(formJSON);
};

const sanitize = formJSON => {
  // Extra sanitization steps go here.
  formJSON.string_date = formJSON.date;
  formJSON.date = moment(formJSON.date);
  return formJSON;
};


// JSONQuest = {
//   mail: "",
//   zip: "",
//   string_date: "",
//   date: "",
//   energy: [], //ints
//   rice: "",
//   coffee: "",
//   circ: ""
// };

const quote = JSONQuest => {
  ////// Compatibility code made to adapt to existing codebase
  let day = JSONQuest.date.date();
  let month = JSONQuest.date.month();
  let p1 = JSONQuest.energy[0];
  let p2 = JSONQuest.energy[1];
  let p3 = JSONQuest.energy[2];
  let p4 = JSONQuest.energy[3];
  let p5 = JSONQuest.energy[5];
  let p6 = JSONQuest.energy[4];

  //Ordenamiento en consumos mensuales
  let ene, feb, mar, abr, may, jun, jul, ago, sep, oct, nov, dic;
  switch (month) {
    default:
    case 0:
      ene = (p1 / (31 + 28)) * (31 - day) + (p2 / (30 + 31)) * day;
      feb = (p1 / (31 + 28)) * 28;

      mar = (p6 / (31 + 30)) * (31 - day) + (p1 / (31 + 28)) * day;
      abr = (p6 / (31 + 30)) * 30;

      may = (p5 / (31 + 30)) * (31 - day) + (p6 / (31 + 30)) * day;
      jun = (p5 / (31 + 30)) * 30;

      jul = (p4 / (31 + 31)) * (31 - day) + (p5 / (31 + 30)) * day;
      ago = (p4 / (31 + 31)) * 31;

      sep = (p3 / (30 + 31)) * (30 - day) + (p4 / (31 + 31)) * day;
      oct = (p3 / (30 + 31)) * 31;

      nov = (p2 / (30 + 31)) * (30 - day) + (p3 / (30 + 31)) * day;
      dic = (p2 / (30 + 31)) * 31;
      break;
    case 1:
      feb = (p1 / (28 + 31)) * (28 - day) + (p2 / (31 + 31)) * day;
      mar = (p1 / (28 + 31)) * 31;

      abr = (p6 / (30 + 31)) * (30 - day) + (p1 / (28 + 31)) * day;
      may = (p6 / (30 + 31)) * 31;

      jun = (p5 / (30 + 31)) * (30 - day) + (p6 / (30 + 31)) * day;
      jul = (p5 / (30 + 31)) * 31;

      ago = (p4 / (31 + 30)) * (31 - day) + (p5 / (30 + 31)) * day;
      sep = (p4 / (31 + 30)) * 30;

      oct = (p3 / (31 + 30)) * (31 - day) + (p4 / (31 + 30)) * day;
      nov = (p3 / (31 + 30)) * 30;

      dic = (p2 / (31 + 31)) * (31 - day) + (p3 / (31 + 30)) * day;
      ene = (p2 / (31 + 31)) * 31;
      break;
    case 2:
      mar = (p1 / (31 + 30)) * (31 - day) + (p2 / (31 + 28)) * day;
      abr = (p1 / (31 + 30)) * 30;

      may = (p6 / (31 + 30)) * (31 - day) + (p1 / (31 + 30)) * day;
      jun = (p6 / (31 + 30)) * 30;

      jul = (p5 / (31 + 31)) * (31 - day) + (p6 / (31 + 30)) * day;
      ago = (p5 / (31 + 31)) * 31;

      sep = (p4 / (30 + 31)) * (30 - day) + (p5 / (31 + 31)) * day;
      oct = (p4 / (30 + 31)) * 31;

      nov = (p3 / (30 + 31)) * (30 - day) + (p4 / (30 + 31)) * day;
      dic = (p3 / (30 + 31)) * 31;

      ene = (p2 / (31 + 28)) * (31 - day) + (p3 / (30 + 31)) * day;
      feb = (p2 / (31 + 28)) * 28;
      break;
    case 3:
      abr = (p1 / (30 + 31)) * (30 - day) + (p2 / (28 + 31)) * day;
      may = (p1 / (30 + 31)) * 31;

      jun = (p6 / (30 + 31)) * (30 - day) + (p1 / (30 + 31)) * day;
      jul = (p6 / (30 + 31)) * 31;

      ago = (p5 / (31 + 30)) * (31 - day) + (p6 / (30 + 31)) * day;
      sep = (p5 / (31 + 30)) * 30;

      oct = (p4 / (31 + 30)) * (31 - day) + (p5 / (31 + 30)) * day;
      nov = (p4 / (31 + 30)) * 30;

      dic = (p3 / (31 + 31)) * (31 - day) + (p4 / (31 + 30)) * day;
      ene = (p3 / (31 + 31)) * 31;

      feb = (p2 / (28 + 31)) * (28 - day) + (p3 / (31 + 31)) * day;
      mar = (p2 / (28 + 31)) * 31;
      break;
    case 4:
      may = (p1 / (31 + 30)) * (31 - day) + (p2 / (31 + 30)) * day;
      jun = (p1 / (31 + 30)) * 30;

      jul = (p6 / (31 + 31)) * (31 - day) + (p1 / (31 + 30)) * day;
      ago = (p6 / (31 + 31)) * 31;

      sep = (p5 / (30 + 31)) * (30 - day) + (p6 / (31 + 31)) * day;
      oct = (p5 / (30 + 31)) * 31;

      nov = (p4 / (30 + 31)) * (30 - day) + (p5 / (30 + 31)) * day;
      dic = (p4 / (30 + 31)) * 31;

      ene = (p3 / (31 + 28)) * (31 - day) + (p4 / (30 + 31)) * day;
      feb = (p3 / (31 + 28)) * 28;

      mar = (p2 / (31 + 30)) * (31 - day) + (p3 / (31 + 28)) * day;
      abr = (p2 / (31 + 30)) * 30;
      break;
    case 5:
      jun = (p1 / (30 + 31)) * (30 - day) + (p2 / (30 + 31)) * day;
      jul = (p1 / (30 + 31)) * 31;

      ago = (p6 / (31 + 30)) * (31 - day) + (p1 / (30 + 31)) * day;
      sep = (p6 / (31 + 30)) * 30;

      oct = (p5 / (31 + 30)) * (31 - day) + (p6 / (31 + 30)) * day;
      nov = (p5 / (31 + 30)) * 30;

      dic = (p4 / (31 + 31)) * (31 - day) + (p5 / (31 + 30)) * day;
      ene = (p4 / (31 + 31)) * 31;

      feb = (p3 / (28 + 31)) * (28 - day) + (p4 / (31 + 31)) * day;
      mar = (p3 / (28 + 31)) * 31;

      abr = (p2 / (30 + 31)) * (30 - day) + (p3 / (28 + 31)) * day;
      may = (p2 / (30 + 31)) * 31;
      break;
    case 6:
      jul = (p1 / (31 + 31)) * (31 - day) + (p2 / (31 + 30)) * day;
      ago = (p1 / (31 + 31)) * 31;

      sep = (p6 / (30 + 31)) * (30 - day) + (p1 / (31 + 31)) * day;
      oct = (p6 / (30 + 31)) * 31;

      nov = (p5 / (30 + 31)) * (30 - day) + (p6 / (30 + 31)) * day;
      dic = (p5 / (30 + 31)) * 31;

      ene = (p4 / (31 + 28)) * (31 - day) + (p5 / (30 + 31)) * day;
      feb = (p4 / (31 + 28)) * 28;

      mar = (p3 / (31 + 30)) * (31 - day) + (p4 / (31 + 28)) * day;
      abr = (p3 / (31 + 30)) * 30;

      may = (p2 / (31 + 30)) * (31 - day) + (p3 / (31 + 30)) * day;
      jun = (p2 / (31 + 30)) * 30;
      break;
    case 7:
      ago = (p1 / (31 + 30)) * (31 - day) + (p2 / (30 + 31)) * day;
      sep = (p1 / (31 + 30)) * 30;

      oct = (p6 / (31 + 30)) * (31 - day) + (p1 / (31 + 30)) * day;
      nov = (p6 / (31 + 30)) * 30;

      dic = (p5 / (31 + 31)) * (31 - day) + (p6 / (31 + 30)) * day;
      ene = (p5 / (31 + 31)) * 31;

      feb = (p4 / (28 + 31)) * (28 - day) + (p5 / (31 + 31)) * day;
      mar = (p4 / (28 + 31)) * 31;

      abr = (p3 / (30 + 31)) * (30 - day) + (p4 / (28 + 31)) * day;
      may = (p3 / (30 + 31)) * 31;

      jun = (p2 / (30 + 31)) * (30 - day) + (p3 / (30 + 31)) * day;
      jul = (p2 / (30 + 31)) * 31;
      break;
    case 8:
      sep = (p1 / (30 + 31)) * (30 - day) + (p2 / (31 + 31)) * day;
      oct = (p1 / (30 + 31)) * 31;

      nov = (p6 / (30 + 31)) * (30 - day) + (p1 / (30 + 31)) * day;
      dic = (p6 / (30 + 31)) * 31;

      ene = (p5 / (31 + 28)) * (31 - day) + (p6 / (30 + 31)) * day;
      feb = (p5 / (31 + 28)) * 28;

      mar = (p4 / (31 + 30)) * (31 - day) + (p5 / (31 + 28)) * day;
      abr = (p4 / (31 + 30)) * 30;

      may = (p3 / (31 + 30)) * (31 - day) + (p4 / (31 + 30)) * day;
      jun = (p3 / (31 + 30)) * 30;

      jul = (p2 / (31 + 31)) * (31 - day) + (p3 / (31 + 30)) * day;
      ago = (p2 / (31 + 31)) * 31;
      break;
    case 9:
      oct = (p1 / (31 + 30)) * (31 - day) + (p2 / (31 + 30)) * day;
      nov = (p1 / (31 + 30)) * 30;

      dic = (p6 / (31 + 31)) * (31 - day) + (p1 / (31 + 30)) * day;
      ene = (p6 / (31 + 31)) * 31;

      feb = (p5 / (28 + 31)) * (28 - day) + (p6 / (31 + 31)) * day;
      mar = (p5 / (28 + 31)) * 31;

      abr = (p4 / (30 + 31)) * (30 - day) + (p5 / (28 + 31)) * day;
      may = (p4 / (30 + 31)) * 31;

      jun = (p3 / (30 + 31)) * (30 - day) + (p4 / (30 + 31)) * day;
      jul = (p3 / (30 + 31)) * 31;

      ago = (p2 / (31 + 30)) * (31 - day) + (p3 / (30 + 31)) * day;
      sep = (p2 / (31 + 30)) * 30;
      break;
    case 10:
      nov = (p1 / (30 + 31)) * (30 - day) + (p2 / (30 + 31)) * day;
      dic = (p1 / (30 + 31)) * 31;

      ene = (p6 / (31 + 28)) * (31 - day) + (p1 / (30 + 31)) * day;
      feb = (p6 / (31 + 28)) * 28;

      mar = (p5 / (31 + 30)) * (31 - day) + (p6 / (31 + 28)) * day;
      abr = (p5 / (31 + 30)) * 30;

      may = (p4 / (31 + 30)) * (31 - day) + (p5 / (31 + 30)) * day;
      jun = (p4 / (31 + 30)) * 30;

      jul = (p3 / (31 + 31)) * (31 - day) + (p4 / (31 + 30)) * day;
      ago = (p3 / (31 + 31)) * 31;

      sep = (p2 / (30 + 31)) * (30 - day) + (p3 / (31 + 31)) * day;
      oct = (p2 / (30 + 31)) * 31;
      break;
    case 11:
      dic = (p1 / (31 + 31)) * (31 - day) + (p2 / (31 + 30)) * day;
      ene = (p1 / (31 + 31)) * 31;

      feb = (p6 / (28 + 31)) * (28 - day) + (p1 / (31 + 31)) * day;
      mar = (p6 / (28 + 31)) * 31;

      abr = (p5 / (30 + 31)) * (30 - day) + (p6 / (28 + 31)) * day;
      may = (p5 / (30 + 31)) * 31;

      jun = (p4 / (30 + 31)) * (30 - day) + (p5 / (30 + 31)) * day;
      jul = (p4 / (30 + 31)) * 31;

      ago = (p3 / (31 + 30)) * (31 - day) + (p4 / (30 + 31)) * day;
      sep = (p3 / (31 + 30)) * 30;

      oct = (p2 / (31 + 30)) * (31 - day) + (p3 / (31 + 30)) * day;
      nov = (p2 / (31 + 30)) * 30;
      break;
  }
  ////// End of compat code

  let monthsarr = [ene, feb, mar, abr, may, jun, jul, ago, sep, oct, nov, dic];
  let pdArray = [];

  for (let i = 0; i < 12; i++) {
    pdArray.push(
      monthsarr[i] /
        moment()
          .month(i)
          .daysInMonth()
    );
  }

  let PDmax = Math.min(...pdArray);

  let irArr = getMonthlyIrradiation(JSONQuest.string_date, JSONQuest.zip);
  let feArray = [];

  for (let i = 0; i < 12; i++) {
    feArray.push(irArr[i] / pdArray[i]);
  }

  let fEmin = Math.min(...feArray);

  //TODO ask client what really returns here?
  return { PDmax, fEmin };
};
