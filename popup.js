document.getElementById('addVideoBtn').addEventListener('click', async () => {
    const videoUrl = document.getElementById('videoUrl').value;
  
    if (videoUrl) {
      const response = await fetch('https://my-first-youtube-payment.vercel.app/api/videos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: videoUrl })
      });
  
      const result = await response.json();
      if (response.ok) {
        alert('Video added successfully!');
      } else {
        alert('Error adding video: ' + result.message);
      }
    } else {
      alert('Please enter a valid YouTube URL');
    }
  });
  