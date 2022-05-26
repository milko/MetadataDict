'use strict';
const db = require('@arangodb').db;
const documentCollections = [
	"terms"
];
const edgeCollections = [
	"schemas",
	"topos"
];

for (const localName of documentCollections) {
//	const qualifiedName = module.context.collectionName(localName);
//	if (!db._collection(qualifiedName)) {
	if (!db._collection(localName)) {
		db._createDocumentCollection(localName);
	} else if (module.context.isProduction) {
		console.debug(`collection ${localName} already exists. Leaving it untouched.`)
	}
}

for (const localName of edgeCollections) {
	// const qualifiedName = module.context.collectionName(localName);
	// if (!db._collection(qualifiedName)) {
	if (!db._collection(localName)) {
		db._createEdgeCollection(localName);
	} else if (module.context.isProduction) {
		console.debug(`collection ${localName} already exists. Leaving it untouched.`)
	}
}
