'use strict';
(function(){

			var firstBox = $('#first_box');
			var secondBox = $('#second_box');
			var thirdBox = $('#third_box');
			var fourthBox= $('#fourth_box');
			var fifthCircle = $('#fifth_circle');

			var colorArray = [firstBox,secondBox,thirdBox,fourthBox,fifthCircle];
			var randomArraySelector = [];
			var clickedArrayOption = [];
			var randColor;
			var i = 0;
			var backgroundAudio = new Audio("background_full_loop.mp3")
			var cantDo = new Audio ("can_do_this.mp3");
			var ohNo = new Audio("oh_no.mp3");

			function generateRandom(){
				randColor = colorArray[Math.floor(Math.random()* colorArray.length)];
				return randColor.data('value');
			}

			function firstSequence (){
				randomArraySelector.push(generateRandom());
				console.log(randomArraySelector);
				$(randomArraySelector).each(function(index,element) {
					setTimeout(function(){
						var actionElement = $('[data-value=' + (element) + ']');
						actionElement.animate({
								'opacity': '1'
							}, 300).animate({
								'opacity': '.5'
							}, 300);
							actionElement.find('.narratorSound').get(0).play();
									
					}, 600 * (index + .5));
				});
			}
			$('#goButton').click(function(){
				firstSequence();
				backgroundAudio.play();
			})
			$('.bop-it').click(function(){
				var clickedBox = $(this).data('value');
				console.log(clickedBox);
				clickedArrayOption.push(clickedBox);
				if(clickedBox === randomArraySelector[i]){
				$(this).animate({
					'opacity': '1'
				}, 300).animate({
					'opacity': '.3'
				},300);
				$(this).find('.playedSound').get(0).play();
					i++;
					if (randomArraySelector.length == i) {
						setTimeout(function() {
							firstSequence();
						}, 1200)
						console.log(randomArraySelector);
						i = 0;
					}					
				} else{
					backgroundAudio.pause();
					ohNo.play();
					alert('Wrong Sequence, Hit the Button to Restart')
					i = 0;
					clickedArrayOption = [];
					randomArraySelector = [];
					cantDo.play();
				}
			});	
		})();