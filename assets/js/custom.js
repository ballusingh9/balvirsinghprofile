document.getElementById('share').addEventListener('click', function() {
    if (navigator.share) {
      navigator.share({
          title: 'Balvir Singh Thakur Profile',
          text: 'This is a Balvir Singh Thakur Profile',
          url: 'https://ballusingh9.github.io/profile/',
      })
        //.then(() => alert('Successful share'))
        .catch((error) => alert('Error sharing'));
    } else {
      alert('navigator.share not available');
    }
    });