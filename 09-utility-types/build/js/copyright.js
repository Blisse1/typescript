"use strict";
// Original JS code
const year = document.getElementById("year"); //string
const thisYear = new Date().getFullYear().toString(); // number as string
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
