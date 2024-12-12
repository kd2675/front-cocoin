import Service from '@api/service/Service';

export interface Photo {
	albumId: number;
	id: number;
	thumbnailUrl: string;
	title: string;
	url: string;
}

class PhotoService extends Service {
	getPhotos() {
		return this.http.get<Photo[]>(
			`/ctf/health`,
		);
	}

	getPhoto(photoId: number) {
		return this.http.get<Photo>(
			``,
		);
	}

	getComments(photoId: number) {
		return this.http.get<Comment[]>(
			`/photo/${photoId}/comments`,
		);
	}

	getComment({photoId, commentId}: {photoId: number, commentId: number}) {
		return this.http.get<Comment[]>(
			`/photo/${photoId}/comments/${commentId}`,
		);
	}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new PhotoService();