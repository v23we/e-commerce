import { useEffect, useId, useRef, useState } from "react";
import { PhotoIcon } from "./icons";

type UploadedImagePreview = {
  id: string;
  file: File;
  previewUrl: string;
};

function createFileBaseKey(file: File) {
  return `${file.name}-${file.lastModified}-${file.size}`;
}

function describeFiles(files: File[]) {
  const occurrences = new Map<string, number>();

  return files.map((file) => {
    const baseKey = createFileBaseKey(file);
    const occurrence = occurrences.get(baseKey) ?? 0;

    occurrences.set(baseKey, occurrence + 1);

    return {
      id: `${baseKey}-${occurrence}`,
      file,
    };
  });
}

type AmazonMainImageUploadFieldProps = {
  files: File[];
  onFilesChange: (files: File[]) => void;
};

export function AmazonMainImageUploadField({ files, onFilesChange }: AmazonMainImageUploadFieldProps) {
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const uploadedImagesRef = useRef<UploadedImagePreview[]>([]);
  const [uploadedImages, setUploadedImages] = useState<UploadedImagePreview[]>([]);

  useEffect(() => {
    uploadedImagesRef.current = uploadedImages;
  }, [uploadedImages]);

  useEffect(() => {
    const nextFiles = describeFiles(files);

    setUploadedImages((currentImages) => {
      const currentImageMap = new Map(currentImages.map((image) => [image.id, image]));
      const nextImageIds = new Set(nextFiles.map((image) => image.id));

      currentImages.forEach((image) => {
        if (!nextImageIds.has(image.id)) {
          URL.revokeObjectURL(image.previewUrl);
        }
      });

      return nextFiles.map(({ id, file }) => {
        const existingImage = currentImageMap.get(id);

        if (existingImage) {
          return existingImage;
        }

        return {
          id,
          file,
          previewUrl: URL.createObjectURL(file),
        };
      });
    });
  }, [files]);

  useEffect(() => {
    return () => {
      uploadedImagesRef.current.forEach((image) => {
        URL.revokeObjectURL(image.previewUrl);
      });
    };
  }, []);

  function handleFilesSelected(fileList: FileList | null) {
    if (!fileList || fileList.length === 0) {
      return;
    }

    const nextFiles = Array.from(fileList).filter((file) => file.type.startsWith("image/"));

    if (nextFiles.length === 0) {
      return;
    }

    onFilesChange([...files, ...nextFiles]);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  function handleRemoveImage(imageId: string) {
    const nextFiles = uploadedImages.filter((image) => image.id !== imageId).map((image) => image.file);
    onFilesChange(nextFiles);
  }

  return (
    <div className="upload-field">
      <div className="upload-field-header">
        <span>Product image</span>
      </div>

      <input
        ref={inputRef}
        id={inputId}
        className="upload-input"
        type="file"
        accept="image/*"
        multiple
        onChange={(event) => handleFilesSelected(event.target.files)}
      />

      {uploadedImages.length === 0 ? (
        <label htmlFor={inputId} className="upload-placeholder upload-empty-state">
          <PhotoIcon />
          <p>
            多图上传建议仅保留必要角度或 SKU 图，
            <br />
            图片不是越多越好。
          </p>
        </label>
      ) : (
        <div className="upload-gallery-shell">
          <div className="upload-gallery">
            {uploadedImages.map((image, index) => (
              <article key={image.id} className="upload-image-card">
                <img src={image.previewUrl} alt={image.file.name} className="upload-image-thumb" />
                <span className="upload-image-index">{index + 1}</span>
                <button
                  type="button"
                  className="upload-remove-button"
                  onClick={() => handleRemoveImage(image.id)}
                  aria-label={`Remove ${image.file.name}`}
                >
                  ×
                </button>
              </article>
            ))}

            <label htmlFor={inputId} className="upload-add-card">
              <span className="upload-add-plus">+</span>
              <span className="upload-add-copy">Add more</span>
            </label>
          </div>
        </div>
      )}
    </div>
  );
}
