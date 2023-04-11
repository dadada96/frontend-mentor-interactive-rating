var numbers = [1, 2, 3, 4, 5];
  var selectedRate = null;

  var rContainer = document.querySelector('.r_container')
  var div = ''

  numbers.forEach((number, index) => {
    div += `<div data-id=${index} class="circle rate" onclick="rateClicked(${number}, ${index})">${number}</div>`
    rContainer.innerHTML = div
  })

  function rateClicked(n, i) {
    selectedRate = n
    var rateEl = document.querySelectorAll('.rate')
    rateEl.forEach(item => {
      var id = item.getAttribute('data-id')
      item.classList.remove('active')
      if (id === i.toString()) {
        item.classList.add('active')
      }
    })
  }

  function submit() {
    if (selectedRate !== null) {
      console.log('selectedRate', selectedRate)
      document.querySelector('.rate_state').style.display = 'none'
      document.querySelector('.thank_state').style.display = 'grid'

      document.getElementById('selectedRate').innerHTML = selectedRate
      document.getElementById('totalRate').innerHTML = numbers.length
    }
  }