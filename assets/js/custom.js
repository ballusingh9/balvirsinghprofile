document.getElementById('share').addEventListener('click', function() {
    if (navigator.share) {
      navigator.share({
          title: 'Balvir Singh Thakur Profile',
          text: 'This is a Balvir Singh Thakur Profile',
          url: 'http://127.0.0.1:5500/index.html',
      })
        //.then(() => alert('Successful share'))
        .catch((error) => alert('Error sharing'));
    } else {
      alert('navigator.share not available');
    }
    });