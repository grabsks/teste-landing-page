function initIndex() {

	$('.nav-link-group .nav-link, .desktop-dropdown').on('click', () => {
		$('.desktop-dropdown').fadeToggle('fast');
	});

}

$(document).ready(function () {
	initIndex();
});