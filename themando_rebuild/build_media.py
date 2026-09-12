import json
import os

MEDIA_DIR = "photos"  # or 'media'
OUTPUT_FILE = "media_data.json"

supported_exts = (".jpg", ".jpeg", ".png", ".webp", ".mp4", ".mp3")


def scan_media():
    media_list = []
    for root, dirs, files in os.walk(MEDIA_DIR):
        for file in files:
            if file.lower().endswith(supported_exts):
                rel_path = os.path.relpath(os.path.join(root, file)).replace(
                    "\\", "/"
                )
                media_type = "photo"
                if file.lower().endswith((".mp4", ".webm")):
                    media_type = "video"
                elif file.lower().endswith((".mp3", ".wav")):
                    media_type = "audio"

                media_list.append(
                    {"path": rel_path, "name": file, "type": media_type}
                )

    with open(OUTPUT_FILE, "w") as f:
        json.dump(media_list, f, indent=2)


if __name__ == "__main__":
    scan_media()
    print(f"Updated {OUTPUT_FILE} with media assets.")