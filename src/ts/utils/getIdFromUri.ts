export default function getIdFromUri(uri: string) {
    const regex = /youtu\.?be(\.com)?\/(shorts\/|watch\?v=)?([^&?\s]+)/;
    const match = uri.match(regex);

    if (!match) {
        return "";
    }

    return match[3];
}
