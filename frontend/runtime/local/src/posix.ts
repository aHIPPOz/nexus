import { Nexus } from "./nexus";

export function openFile(nexus: Nexus, path: string): any {
	// Allocation du chemin dans la mémoire WASM
	// Appel du constructeur File côté WASM
	// TODO: relier à l'ABI WASIX/JS
	return null;
}

export function openDir(nexus: Nexus, path: string): any {
	// Allocation du chemin dans la mémoire WASM
	// Appel du constructeur Dir côté WASM
	// TODO: relier à l'ABI WASIX/JS
	return null;
}
