document.addEventListener('DOMContentLoaded', function () {
    const timer = document.getElementById('counter');
    const counterDisplay = document.getElementById('counter');
    const plusBtn = document.getElementById('plus');
    const minusBtn = document.getElementById('minus');
    const heartBtn = document.getElementById('heart');
    const pauseBtn = document.getElementById('pause');
    const likesList = document.querySelector('.likes');
    const commentForm = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment-input');
    const commentsContainer = document.getElementById('list');
  
    let count = 0;
    let timerCount = 0;
    let likes = {};
    let isPaused = false;
  
    counterDisplay.textContent = count;
    timer.textContent = timerCount;
  
    const interval = setInterval(function () {
      if (!isPaused) {
        timerCount++;
        timer.textContent = timerCount;
      }
    }, 1000);
  
    plusBtn.addEventListener('click', function () {
      count++;
      counterDisplay.textContent = count;
    });
  
    minusBtn.addEventListener('click', function () {
      count--;
      counterDisplay.textContent = count;
    });
  
    heartBtn.addEventListener('click', function () {
      if (likes[timerCount]) {
        likes[timerCount]++;
      } else {
        likes[timerCount] = 1;
      }
  
      updateLikesList();
    });
  
    pauseBtn.addEventListener('click', function () {
      isPaused = !isPaused; // Toggle the pause state
  
      // Update button label
      if (isPaused) {
        pauseBtn.textContent = 'Resume';
      } else {
        pauseBtn.textContent = 'Pause';
      }
  
      // Disable or enable other buttons
      plusBtn.disabled = isPaused;
      minusBtn.disabled = isPaused;
      heartBtn.disabled = isPaused;
    });
  
    commentForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const commentText = commentInput.value.trim();
      if (commentText !== '') {
        addComment(commentText);
        commentInput.value = '';
      }
    });
  
    function updateLikesList() {
      likesList.innerHTML = '';
  
      for (let key in likes) {
        const li = document.createElement('li');
        li.textContent = `${key} has ${likes[key]} likes`;
        likesList.appendChild(li);
      }
    }
  
    function addComment(commentText) {
      const commentElement = document.createElement('div');
      commentElement.classList.add('comment');
      commentElement.textContent = commentText;
      commentsContainer.appendChild(commentElement);
    }
  });