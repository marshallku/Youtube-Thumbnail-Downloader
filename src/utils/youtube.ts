import { VIDEO_SIZE_NAMES } from "../constants/youtube";

export function getIdFromUri(uri: string) {
    const regex = /youtu\.?be(\.com)?\/(shorts\/|watch\?v=|embed\/)?([^&?\s]+)/;
    const match = uri.match(regex);

    if (!match) {
        return "";
    }

    return match[3];
}

export function getThumbnailsFromId(id: string) {
    return VIDEO_SIZE_NAMES.map((x) => `https://i.ytimg.com/vi/${id}/${x}.jpg`);
}
