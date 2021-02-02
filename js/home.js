
try{
      let options= {
            weekdays:'long',
            days:'numeric',
            months:'long',
            year:'numeric'

      };
      document.getElementById("currentDate").textContent = new Date().toLocaleDateString("en-US",options);
}