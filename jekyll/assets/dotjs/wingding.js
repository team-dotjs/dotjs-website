
	(function() {

		var hero_top = $('.hero-top');
		var theme_toggle = $('.toggle-mode');
		var y_height = hero_top.height();
		var x_width = $(window).width();

		var x_shape_mouseover = false;
		var x_shape_container = $('.dropping-shapes');

		theme_toggle.on('click', function() {
			$(this).toggleClass('toggle');
			$('html').toggleClass('dark-mode');
		});

		setInterval(function() {

			var prop = {
				rot: Math.floor(Math.random() * 360) + 0,
				left: Math.floor(Math.random() * x_width) + 0,
				color: (Math.floor(Math.random() * 2) + 0) == 1 ? 'dark' : 'light',
				circle: (Math.floor(Math.random() * 2) + 0) == 1 ? 'round' : ''
			}

			if(!x_shape_mouseover) {
				x_shape_container.append('<span class="x-shape '+ prop.color + ' ' + prop.circle +'" style="transform: rotate('+prop.rot+'deg); left: '+prop.left+'px"><span>');
			}
		}, 1200);

		x_shape_container.on('mouseover', function(e) { x_shape_mouseover = true; });
		x_shape_container.on('mouseleave', function(e) { x_shape_mouseover = false; });

		if(window.innerWidth > 600) { 
			hero_top.on('mousemove', function(e) {

				var pc = (((100 * e.pageY) / y_height) / 20);
				var rot = 20 + pc;
				if(false) {
					$('span.dot, .dotjs-logo span').css({
						'top': pc + 'px'
					});
				}

				$('span.wingding').css({
					'-webkit-transform': 'rotate(-' + rot  + 'deg)',
					'-ms-transform': 'rotate(-' + rot  + 'deg)',
					'-o-transform': 'rotate(-' + rot  + 'deg)',
					'transform': 'rotate(-' + rot  + 'deg)',
				});
			});
		}

	})();