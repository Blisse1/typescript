// Original JS code
const year = <HTMLSpanElement>document.getElementById("year"); //string
const thisYear: string = new Date().getFullYear().toString(); // number as string
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
