document.addEventListener('DOMContentLoaded', function() {
  const timeElement = document.getElementById('timeValue');
  
  // Set initial time
  function updateTime() {
    const currentTime = Date.now();
    timeElement.textContent = currentTime;
  }

  // Initial update
  updateTime();

  // Optionally, you could set an interval to update the time
  setInterval(updateTime, 1000); // Update every second
});
