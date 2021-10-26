const mask = (selector) => {

    const validPhone = form.querySelector('input[name="phone"]');

	let setCursorPosition = (pos, elem) => {
		elem.addEventListener('click', () => {
			elem.selectionStart = elem.selectionEnd = elem.value.length;
		});

		elem.focus();

		if (elem.setSelectionRange) {
			elem.setSelectionRange(pos, pos);
		} else if (elem.createTextRange) {
			let range = elem.createTextRange();

			range.collapse(true);
			range.moveEnd('character', pos);
			range.moveStart('character', pos);
			range.select();
		}
	};


	function createMask(event) {
		let matrix = '+7 (___) ___ __ __',
			i = 0,
			def = matrix.replace(/\D/g, ''),
			val = this.value.replace(/\D/g, '');

	
	const info = document.querySelector('.info');
	const checkmark = document.querySelector('.checkmark')
			
	if (val.length <= 10) {
		validPhone.classList.add('error');
		info.innerHTML = 'Номер  должен состоять из 10 цифр';
		checkmark.style.opacity = '0'	
		
	} else {
		validPhone.classList.remove('error');
		info.innerHTML = '';
		checkmark.style.opacity = '1';	
	}

		if (def.length >= val.length) {
			val = def;
		}

		this.value = matrix.replace(/./g, function(a) {
			return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
		});
         
		if (event.type === 'blur') {
			if (this.value.length == 2) {

				this.value = '';
			}
		} else {
			setCursorPosition(this.value.length, this);
		}
	}

	let inputs = document.querySelectorAll(selector);

	inputs.forEach(input => {
		input.addEventListener('input', createMask);
		input.addEventListener('focus', createMask);
		input.addEventListener('blur', createMask);
	});
};

mask('input[name="phone"]');