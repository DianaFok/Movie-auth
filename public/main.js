var heart = document.getElementsByClassName("fas fa-heart");
var trash = document.getElementsByClassName("fa-trash");


Array.from(heart).forEach(function(element) {
  element.addEventListener('click', function() {
    const name = this.parentNode.parentNode.childNodes[1].innerText
    const msg = this.parentNode.parentNode.childNodes[3].innerText
    const date = this.parentNode.parentNode.childNodes[5].innerText
    const heart= this.parentNode.parentNode.childNodes[7].innerText
    console.log(this.parentNode.parentNode.childNodes[1].innerText)
    fetch('messages', {
        method: 'put',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'name': name,
          'msg': msg,
          'date': date,
          'heart': heart
        })
      })
      .then(response => {
        if (response.ok) return response.json()
      })
      .then(data => {
        console.log(data)
        window.location.reload(true)
      })
  });
});


Array.from(trash).forEach(function(element) {
  element.addEventListener('click', function() {
    const name = this.parentNode.parentNode.childNodes[1].innerText
    const msg = this.parentNode.parentNode.childNodes[3].innerText
    const date = this.parentNode.parentNode.childNodes[5].innerText
    console.log(this.parentNode.parentNode.childNodes[1].innerText)
    fetch('messages', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'name': name,
        'msg': msg,
        'date': date
      })
    }).then(function(response) {
      window.location.reload()
    })
  });
});
