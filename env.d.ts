/// <reference types="vite/client" />
// Allow TypeScript to import `.vue` single-file components
declare module '*.vue' {
	import type { DefineComponent } from 'vue'
	const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, any>
	export default component
}
