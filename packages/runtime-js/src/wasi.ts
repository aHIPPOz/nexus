// Stubs WASI pour interop avec WASM
export function wasi_fd_read(fd, buffer, length) {
	// TODO: relier à l'ABI WASIX/JS
	return 0;
}

export function wasi_fd_write(fd, buffer, length) {
	// TODO: relier à l'ABI WASIX/JS
	return 0;
}

export function wasi_clock() {
	// Renvoie le temps actuel (interop JS)
	return Date.now();
}

export function wasi_environ() {
	// Renvoie l'environnement (interop JS)
	return process.env || {};
}
