import { Client, Databases, ID, Query } from "appwrite";

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;
const ENDPOINT_ID = import.meta.env.VITE_APPWRITE_ENDPOINT;

const client = new Client().setEndpoint(ENDPOINT_ID).setProject(PROJECT_ID);

const database = new Databases(client);
// const movies = database.collection(COLLECTION_ID);

export const updateSearchCount = async (searchBar, movie) => {
	try {
		const response = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
			Query.equal("searchBar", searchBar),
		]);

		if (response.documents.length > 0) {
			const documentId = response.documents[0];
			await database.updateDocument(
				DATABASE_ID,
				COLLECTION_ID,
				documentId.$id,
				{
					count: documentId.count + 1,
				}
			);
		} else {
			await database.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
				searchBar,
				count: 1,
				poster_url: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
				movie_id: movie.id,
			});
		}
	} catch (error) {
		console.error(error);
	}
};

export const getTrendingMovies = async () => {
	try {
		const response = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
			Query.limit(5),
			Query.orderDesc("count"),
		]);
        return response.documents
	} catch (error) {
		console.error(error);
	}
};
