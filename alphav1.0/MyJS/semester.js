const container = document.getElementById('card-container');
		container.addEventListener('scroll', function(event) {
			console.log(event.target.scrollLeft);
		});

		function activateCard(list) {
			var cards = document.querySelectorAll('.list');
			for (var i = 0; i < cards.length; i++) {
			  cards[i].classList.remove('active');
			}
			if(list.classList.contains('active')){
				list.classList.remove('active')
			}
			else{
				list.classList.add('active');
			}
			
		  }
		  