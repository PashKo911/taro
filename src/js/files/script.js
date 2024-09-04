// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from './functions.js'
// Підключення списку активних модулів
import { flsModules } from './modules.js'

import Lenis from '@studio-freight/lenis'

function initializeLenis() {
	const lenis = new Lenis({
		duration: 1,
		smooth: true,
		infinite: false,
		autoResize: true,
	})

	lenis.on('scroll', (e) => {})
	function raf(time) {
		lenis.raf(time)
		requestAnimationFrame(raf)
	}

	requestAnimationFrame(raf)
}

function isTouchDevice() {
	return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
}

if (!isTouchDevice()) {
	initializeLenis()
}
