// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile, menuInit } from './functions.js'
// Підключення списку активних модулів
import { flsModules } from './modules.js'

import Lenis from '@studio-freight/lenis'

window.onRefreshLenisScroll = () => {
	window.lenis?.destroy()

	setTimeout(() => {
		window.lenis = new Lenis({
			eventsTarget: document.querySelector('main'),
			duration: 1.2,
			infinite: false,
			autoResize: true,
		})
		function raf(time) {
			window.lenis.raf(time)
			requestAnimationFrame(raf)
		}
		requestAnimationFrame(raf)
	}, 0)

	function isTouchDevice() {
		return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
	}
	if (!isTouchDevice()) {
		window.onRefreshLinisScroll()
	}
}

window.onRefreshLenisScroll ? window.onRefreshLenisScroll() : ''
