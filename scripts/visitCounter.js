function incrementVisitCounter() {
  let visitCount = localStorage.getItem('visitCount');
  visitCount = visitCount ? parseInt(visitCount) + 1 : 1;
  localStorage.setItem('visitCount', visitCount);
  document.getElementById('visitCounter').innerText = visitCount;
}

incrementVisitCounter();


