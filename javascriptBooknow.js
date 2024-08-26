
//Tämä koodi rajoittaa kalenterin ajanavaraus kellonaikoja sekä päiviä.
flatpickr("#date1", {

    enableTime: true,
    dateFormat: "Y-m-d H:i", // aika on pv, kk, ja klo
    minTime: "10:00", // min time
    maxTime: "22:30", //max time
    minuteIncrement: 60, 
  
      disable: [
          function(date) {
              // Estä viikonloput (la 6 ja su 0)
              return (date.getDay() === 6 || date.getDay() === 0);
          }
      ],
  });